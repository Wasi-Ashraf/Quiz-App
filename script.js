document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ---- Settings ----
    const PASS_PERCENT = 50;          // minimum percentage to pass
    const DELAY_CORRECT = 900;        // ms before next question (correct answer)
    const DELAY_WRONG = 1800;         // ms before next question (wrong answer, time to read)
    const GRADES = [[90, 'A+'], [80, 'A'], [70, 'B'], [60, 'C'], [50, 'D'], [0, 'F']];

    // ---- State ----
    const state = {
        name: '',
        rollno: '',
        chapter: null,
        questions: [],
        index: 0,
        correct: 0,
        wrong: 0,
        locked: false,
        timer: null,
        theme: 'dark'
    };

    // ---- Helpers ----
    const $ = (id) => document.getElementById(id);

    const screens = {
        input: $('input-screen'),
        chapter: $('chapter-screen'),
        quiz: $('quiz-screen'),
        result: $('result-screen')
    };

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function shuffle(list) {
        const a = list.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a;
    }

    function showScreen(name, moveFocus) {
        Object.keys(screens).forEach((key) => { screens[key].hidden = key !== name; });
        window.scrollTo(0, 0);
        if (moveFocus !== false) {
            const heading = screens[name].querySelector('h1, h2');
            if (heading) {
                heading.setAttribute('tabindex', '-1');
                heading.focus({ preventScroll: true });
            }
        }
    }

    function chapterName(chapter) {
        const title = String(chapter.title || 'Chapter');
        const i = title.indexOf(':');
        return i > -1 ? title.slice(i + 1).trim() : title;
    }

    function validQuestions(chapter) {
        const list = chapter && Array.isArray(chapter.mcqs) ? chapter.mcqs : [];
        return list.filter((q) =>
            q && q.question && Array.isArray(q.options) && q.options.length > 1 &&
            Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length
        );
    }

    // ---- 1. Student details ----
    $('user-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = $('name').value.trim();
        const roll = $('rollno').value.trim();
        const error = $('form-error');

        if (!name) {
            error.textContent = 'Please enter your full name.';
            error.hidden = false;
            $('name').focus();
            return;
        }
        if (!/^\d+$/.test(roll)) {
            error.textContent = 'Roll number must contain numbers only.';
            error.hidden = false;
            $('rollno').focus();
            return;
        }

        error.hidden = true;
        state.name = name;
        state.rollno = roll;
        $('display-name').textContent = name;
        showScreen('chapter');
    });

    $('btn-change-student').addEventListener('click', () => showScreen('input'));

    // ---- 2. Chapter list ----
    function renderChapters() {
        const list = $('chapter-list');
        list.textContent = '';

        const chapters = (typeof quizData !== 'undefined' && Array.isArray(quizData.chapters))
            ? quizData.chapters : [];

        if (chapters.length === 0) {
            const li = el('li', 'empty', 'No chapters found. Please make sure questions.js is in the same folder as index.html.');
            list.appendChild(li);
            return;
        }

        chapters.forEach((chapter, i) => {
            const count = validQuestions(chapter).length;
            const name = chapterName(chapter);

            const li = el('li');
            const btn = el('button', 'chapter-item');
            btn.type = 'button';
            btn.disabled = count === 0;
            btn.setAttribute('aria-label', 'Chapter ' + (i + 1) + ': ' + name + ', ' + count + ' questions');

            const num = el('span', 'chapter-num', String(i + 1));
            num.setAttribute('aria-hidden', 'true');

            const info = el('span', 'chapter-info');
            info.appendChild(el('span', 'chapter-title', name));
            info.appendChild(el('span', 'chapter-meta', count === 0 ? 'No questions yet' : count + ' questions'));

            const arrow = el('span', 'chapter-arrow', '\u203A');
            arrow.setAttribute('aria-hidden', 'true');

            btn.append(num, info, arrow);
            btn.addEventListener('click', () => startQuiz(chapter));
            li.appendChild(btn);
            list.appendChild(li);
        });
    }

    // ---- 3. Quiz ----
    function startQuiz(chapter) {
        // Shuffle the questions AND the options every time a quiz starts
        const prepared = shuffle(validQuestions(chapter)).map((q) => ({
            text: q.question,
            options: shuffle(q.options.map((text, i) => ({ text: text, correct: i === q.answer })))
        }));
        if (prepared.length === 0) return;

        clearTimeout(state.timer);
        state.chapter = chapter;
        state.questions = prepared;
        state.index = 0;
        state.correct = 0;
        state.wrong = 0;
        state.locked = false;

        $('quiz-student-name').textContent = state.name;
        $('quiz-chapter-title').textContent = chapter.title;
        $('total-q').textContent = prepared.length;
        setProgress(0);
        showScreen('quiz', false);
        showQuestion();
    }

    function setProgress(percent) {
        const value = Math.round(percent);
        $('quiz-progress-bar').style.width = value + '%';
        $('quiz-progress').setAttribute('aria-valuenow', String(value));
    }

    function showQuestion() {
        if (state.index >= state.questions.length) {
            showResults();
            return;
        }

        state.locked = false;
        const q = state.questions[state.index];
        const box = $('options-container');
        box.textContent = '';

        $('current-q').textContent = state.index + 1;
        $('question-text').textContent = q.text;

        q.options.forEach((option, i) => {
            const btn = el('button', 'option');
            btn.type = 'button';
            const key = el('span', 'option-key', String(i + 1));
            key.setAttribute('aria-hidden', 'true');
            btn.append(key, el('span', 'option-text', option.text));
            btn.addEventListener('click', () => handleAnswer(i));
            box.appendChild(btn);
        });

        const feedback = $('feedback');
        feedback.textContent = '';
        feedback.className = 'feedback';
        $('question-text').focus({ preventScroll: true });
    }

    function handleAnswer(selected) {
        if (state.locked) return;
        state.locked = true;

        const q = state.questions[state.index];
        const buttons = Array.prototype.slice.call($('options-container').children);
        const correctIndex = q.options.findIndex((o) => o.correct);
        const feedback = $('feedback');

        buttons.forEach((b) => { b.disabled = true; });

        if (selected === correctIndex) {
            state.correct++;
            buttons[selected].classList.add('correct');
            feedback.textContent = 'Correct! Well done.';
            feedback.className = 'feedback ok';
        } else {
            state.wrong++;
            buttons[selected].classList.add('wrong');
            buttons[correctIndex].classList.add('correct');
            feedback.textContent = 'Wrong answer. The correct answer is: ' + q.options[correctIndex].text;
            feedback.className = 'feedback bad';
        }

        setProgress(((state.index + 1) / state.questions.length) * 100);

        state.timer = setTimeout(() => {
            state.index++;
            showQuestion();
        }, selected === correctIndex ? DELAY_CORRECT : DELAY_WRONG);
    }

    // Keyboard: press 1-4 to answer
    document.addEventListener('keydown', (e) => {
        if (screens.quiz.hidden || state.locked || e.ctrlKey || e.metaKey || e.altKey) return;
        const q = state.questions[state.index];
        const n = parseInt(e.key, 10);
        if (q && n >= 1 && n <= q.options.length) {
            e.preventDefault();
            handleAnswer(n - 1);
        }
    });

    $('btn-quit').addEventListener('click', () => {
        if (window.confirm('Quit this quiz? Your progress will be lost.')) {
            clearTimeout(state.timer);
            showScreen('chapter');
        }
    });

    // ---- 4. Result ----
    function showResults() {
        const total = state.questions.length;
        const percent = total ? Math.round((state.correct / total) * 100) : 0;
        const passed = percent >= PASS_PERCENT;
        const grade = GRADES.find((g) => percent >= g[0])[1];

        $('result-name').textContent = state.name;
        $('result-roll').textContent = state.rollno;
        $('result-chapter').textContent = chapterName(state.chapter);
        $('result-correct').textContent = state.correct;
        $('result-wrong').textContent = state.wrong;
        $('result-total').textContent = total;

        const status = $('result-status');
        status.textContent = passed ? 'Passed' : 'Failed';
        status.className = 'status-badge ' + (passed ? 'status-pass' : 'status-fail');

        const ring = $('percentage-circle');
        ring.style.setProperty('--pct', percent);
        ring.className = 'ring ' + (passed ? 'pass' : 'fail');
        ring.setAttribute('aria-label', 'Score ' + percent + ' percent, grade ' + grade);

        $('percentage-text').textContent = percent + '%';
        $('result-grade').textContent = 'Grade ' + grade;
        $('result-message').textContent = passed
            ? 'Well done! You passed this chapter quiz.'
            : 'You need at least ' + PASS_PERCENT + '% to pass. Review the chapter and try again.';

        showScreen('result');
    }

    $('btn-restart').addEventListener('click', () => startQuiz(state.chapter));
    $('btn-chapters').addEventListener('click', () => showScreen('chapter'));

    // ---- Theme toggle ----
    const themeToggle = $('theme-toggle');
    themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', state.theme);
        themeToggle.textContent = state.theme === 'dark' ? '\u263E' : '\u2600';
        themeToggle.setAttribute('aria-label',
            state.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });

    // ---- Start ----
    renderChapters();
    showScreen('input', false);
});