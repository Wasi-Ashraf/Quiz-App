// Run with:  node generate_mcqs.js
//
// What it does:
//   1. Removes the old "faqs" (short questions) from every chapter.
//   2. Adds 5 placeholder MCQs ONLY to chapters that have no MCQs yet
//      (chapters that already have MCQs are left untouched).
//   3. Saves the result to data/questions.json and questions.js.

const fs = require('fs');
const path = require('path');

const JSON_PATH = path.join(__dirname, 'data', 'questions.json');
const JS_PATH = path.join(__dirname, 'questions.js');

let data;
try {
    data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
} catch (err) {
    console.error('Could not read data/questions.json: ' + err.message);
    process.exit(1);
}

if (!Array.isArray(data.chapters)) {
    console.error('data/questions.json must contain a "chapters" array.');
    process.exit(1);
}

// "Chapter 3: CSS Essentials" -> "CSS Essentials"
function subjectOf(title) {
    const text = String(title || 'this topic');
    const i = text.indexOf(':');
    return (i > -1 ? text.slice(i + 1) : text).trim();
}

function placeholderMcqs(subject) {
    return [
        {
            question: `Which of the following is true about ${subject}?`,
            options: ['It is outdated', 'It is a core part of web development', 'It is only used for mobile apps', 'It requires no learning'],
            answer: 1
        },
        {
            question: `What is the primary role of ${subject}?`,
            options: ['Database management', 'Styling elements', 'Depends on the specific technology context', 'It is an operating system'],
            answer: 2
        },
        {
            question: `Which tool is most commonly associated with ${subject}?`,
            options: ['A code editor', 'A hammer', 'A microwave', 'A car engine'],
            answer: 0
        },
        {
            question: `How do beginners typically start learning ${subject}?`,
            options: ['By reading documentation and writing code', 'By swimming', 'By sleeping', 'By ignoring it'],
            answer: 0
        },
        {
            question: `Why is ${subject} important?`,
            options: ['It builds modern applications', 'It is a tasty food', 'It solves math problems only', 'It repairs hardware'],
            answer: 0
        }
    ];
}

let added = 0;
data.chapters = data.chapters.map((chapter) => {
    const cleaned = Object.assign({}, chapter);
    delete cleaned.faqs; // short questions are no longer used

    const hasMcqs = Array.isArray(cleaned.mcqs) && cleaned.mcqs.length > 0;
    if (!hasMcqs) {
        cleaned.mcqs = placeholderMcqs(subjectOf(cleaned.title));
        added++;
    }
    return cleaned;
});

fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));
fs.writeFileSync(JS_PATH, 'const quizData = ' + JSON.stringify(data, null, 2) + ';');

console.log('Done. Short questions removed.');
console.log('Placeholder MCQs added to ' + added + ' chapter(s). Existing MCQs were kept.');