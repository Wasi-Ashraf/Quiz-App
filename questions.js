const quizData = {

    chapters: [

        // =====================================
        // CHAPTER 1: INTERNET & WEB BASICS
        // =====================================

        {
            id: 1,
            title: "Internet & Web Basics",

            mcqs: [

                {
                    question: "What is the Internet?",
                    options: [
                        "A global network of connected computers",
                        "A programming language",
                        "A web browser",
                        "An operating system"
                    ],
                    answer: 0
                },

                {
                    question: "What does WWW stand for?",
                    options: [
                        "World Wide Web",
                        "World Web Window",
                        "Wide World Website",
                        "Web World Wide"
                    ],
                    answer: 0
                },

                {
                    question: "Which software is used to access websites?",
                    options: [
                        "Compiler",
                        "Web Browser",
                        "Calculator",
                        "Text Editor"
                    ],
                    answer: 1
                },

                {
                    question: "Which of these is a web browser?",
                    options: [
                        "Microsoft Word",
                        "Google Chrome",
                        "Windows",
                        "MySQL"
                    ],
                    answer: 1
                },

                {
                    question: "What does URL stand for?",
                    options: [
                        "Uniform Resource Locator",
                        "Universal Record Link",
                        "User Reference Location",
                        "Uniform Reading Language"
                    ],
                    answer: 0
                },

                {
                    question: "What is the main purpose of a web server?",
                    options: [
                        "To design images",
                        "To store and deliver web content",
                        "To edit videos",
                        "To create computer hardware"
                    ],
                    answer: 1
                },

                {
                    question: "Which protocol is commonly used to transfer web pages?",
                    options: [
                        "FTP",
                        "SMTP",
                        "HTTP",
                        "USB"
                    ],
                    answer: 2
                },

                {
                    question: "What is HTTPS?",
                    options: [
                        "A secure version of HTTP",
                        "A programming language",
                        "An image format",
                        "A database"
                    ],
                    answer: 0
                },

                {
                    question: "What is an IP address?",
                    options: [
                        "A computer's network address",
                        "A website design",
                        "A browser extension",
                        "A programming function"
                    ],
                    answer: 0
                },

                {
                    question: "Which company developed the Chrome browser?",
                    options: [
                        "Microsoft",
                        "Apple",
                        "Google",
                        "IBM"
                    ],
                    answer: 2
                }

            ]
        },


        // =====================================
        // CHAPTER 2: HTML FUNDAMENTALS
        // =====================================

        {
            id: 2,
            title: "HTML Fundamentals",

            mcqs: [

                {
                    question: "What does HTML stand for?",
                    options: [
                        "Hyper Text Markup Language",
                        "High Text Machine Language",
                        "Hyper Transfer Markup Language",
                        "Home Tool Markup Language"
                    ],
                    answer: 0
                },

                {
                    question: "Which tag is used for the largest heading?",
                    options: [
                        "<h6>",
                        "<h1>",
                        "<head>",
                        "<heading>"
                    ],
                    answer: 1
                },

                {
                    question: "Which tag creates a paragraph?",
                    options: [
                        "<para>",
                        "<text>",
                        "<p>",
                        "<pg>"
                    ],
                    answer: 2
                },

                {
                    question: "Which tag is used to create a hyperlink?",
                    options: [
                        "<link>",
                        "<a>",
                        "<href>",
                        "<url>"
                    ],
                    answer: 1
                },

                {
                    question: "Which attribute specifies an image source?",
                    options: [
                        "href",
                        "link",
                        "src",
                        "alt"
                    ],
                    answer: 2
                },

                {
                    question: "Which tag is used to insert an image?",
                    options: [
                        "<image>",
                        "<img>",
                        "<picture-file>",
                        "<src>"
                    ],
                    answer: 1
                },

                {
                    question: "Which tag creates an ordered list?",
                    options: [
                        "<ul>",
                        "<li>",
                        "<ol>",
                        "<list>"
                    ],
                    answer: 2
                },

                {
                    question: "Which tag is used to create a table row?",
                    options: [
                        "<td>",
                        "<tr>",
                        "<th>",
                        "<table-row>"
                    ],
                    answer: 1
                },

                {
                    question: "Which attribute provides alternative text for an image?",
                    options: [
                        "title",
                        "src",
                        "alt",
                        "name"
                    ],
                    answer: 2
                },

                {
                    question: "Which tag is used to create an HTML form?",
                    options: [
                        "<input>",
                        "<form>",
                        "<fieldset>",
                        "<data>"
                    ],
                    answer: 1
                }

            ]
        },


        // =====================================
        // CHAPTER 3: CSS ESSENTIALS
        // =====================================

        {
            id: 3,
            title: "CSS Essentials",

            mcqs: [

                {
                    question: "What does CSS stand for?",
                    options: [
                        "Computer Style Sheets",
                        "Cascading Style Sheets",
                        "Creative Styling System",
                        "Colorful Style Sheets"
                    ],
                    answer: 1
                },

                {
                    question: "Which CSS property changes text color?",
                    options: [
                        "font-color",
                        "text-color",
                        "color",
                        "background"
                    ],
                    answer: 2
                },

                {
                    question: "Which property changes the background color?",
                    options: [
                        "background-color",
                        "color",
                        "bg-style",
                        "background-text"
                    ],
                    answer: 0
                },

                {
                    question: "How do you select an element with ID 'box'?",
                    options: [
                        ".box",
                        "#box",
                        "box",
                        "*box"
                    ],
                    answer: 1
                },

                {
                    question: "How do you select elements with class 'card'?",
                    options: [
                        "#card",
                        "card",
                        ".card",
                        "*card"
                    ],
                    answer: 2
                },

                {
                    question: "Which property changes text size?",
                    options: [
                        "font-size",
                        "text-weight",
                        "font-color",
                        "text-style"
                    ],
                    answer: 0
                },

                {
                    question: "Which CSS property makes text bold?",
                    options: [
                        "font-style",
                        "font-weight",
                        "text-bold",
                        "text-size"
                    ],
                    answer: 1
                },

                {
                    question: "Which property adds space inside an element?",
                    options: [
                        "margin",
                        "padding",
                        "border",
                        "outline"
                    ],
                    answer: 1
                },

                {
                    question: "Which property adds space outside an element?",
                    options: [
                        "padding",
                        "spacing",
                        "margin",
                        "content"
                    ],
                    answer: 2
                },

                {
                    question: "Which symbol is used for a CSS class selector?",
                    options: [
                        "#",
                        ".",
                        "@",
                        "$"
                    ],
                    answer: 1
                }

            ]
        },


        // =====================================
        // CHAPTER 4: ADVANCED CSS & LAYOUTS
        // =====================================

        {
            id: 4,
            title: "Advanced CSS & Layouts",

            mcqs: [

                {
                    question: "What is CSS Flexbox mainly used for?",
                    options: [
                        "Database management",
                        "One-dimensional layouts",
                        "Writing HTML",
                        "Creating server connections"
                    ],
                    answer: 1
                },

                {
                    question: "Which CSS property activates Flexbox?",
                    options: [
                        "position: flex",
                        "display: flex",
                        "flex: display",
                        "layout: flex"
                    ],
                    answer: 1
                },

                {
                    question: "Which property aligns flex items along the main axis?",
                    options: [
                        "align-items",
                        "justify-content",
                        "text-align",
                        "flex-direction"
                    ],
                    answer: 1
                },

                {
                    question: "What is CSS Grid used for?",
                    options: [
                        "Two-dimensional layouts",
                        "Database queries",
                        "JavaScript functions",
                        "HTML forms"
                    ],
                    answer: 0
                },

                {
                    question: "Which property defines columns in CSS Grid?",
                    options: [
                        "grid-columns",
                        "grid-template-columns",
                        "column-style",
                        "grid-layout"
                    ],
                    answer: 1
                },

                {
                    question: "What does responsive web design mean?",
                    options: [
                        "Website works only on computers",
                        "Website adjusts to different screen sizes",
                        "Website uses only images",
                        "Website does not use CSS"
                    ],
                    answer: 1
                },

                {
                    question: "Which CSS rule is used for responsive breakpoints?",
                    options: [
                        "@responsive",
                        "@screen",
                        "@media",
                        "@device"
                    ],
                    answer: 2
                },

                {
                    question: "Which position value keeps an element fixed to the viewport?",
                    options: [
                        "static",
                        "relative",
                        "fixed",
                        "inherit"
                    ],
                    answer: 2
                },

                {
                    question: "Which property controls the stacking order of elements?",
                    options: [
                        "z-index",
                        "stack-order",
                        "layer",
                        "position-index"
                    ],
                    answer: 0
                },

                {
                    question: "Which property creates rounded corners?",
                    options: [
                        "border-style",
                        "border-radius",
                        "corner-size",
                        "round-border"
                    ],
                    answer: 1
                }

            ]
        },


        // =====================================
        // CHAPTER 5: JAVASCRIPT BASICS
        // =====================================

        {
            id: 5,
            title: "JavaScript Basics",

            mcqs: [

                {
                    question: "What is JavaScript mainly used for?",
                    options: [
                        "Making web pages interactive",
                        "Creating computer hardware",
                        "Managing operating systems",
                        "Designing databases only"
                    ],
                    answer: 0
                },

                {
                    question: "Which keyword declares a block-scoped variable?",
                    options: [
                        "int",
                        "let",
                        "define",
                        "variable"
                    ],
                    answer: 1
                },

                {
                    question: "Which keyword declares a variable that cannot be reassigned?",
                    options: [
                        "var",
                        "let",
                        "const",
                        "static"
                    ],
                    answer: 2
                },

                {
                    question: "Which symbol is used for single-line comments in JavaScript?",
                    options: [
                        "<!--",
                        "//",
                        "**",
                        "##"
                    ],
                    answer: 1
                },

                {
                    question: "Which function displays a message in the browser console?",
                    options: [
                        "console.log()",
                        "print()",
                        "display()",
                        "write.console()"
                    ],
                    answer: 0
                },

                {
                    question: "Which operator checks both value and data type?",
                    options: [
                        "=",
                        "==",
                        "===",
                        "!="
                    ],
                    answer: 2
                },

                {
                    question: "Which keyword is used to define a function?",
                    options: [
                        "method",
                        "function",
                        "define",
                        "func"
                    ],
                    answer: 1
                },

                {
                    question: "Which statement is used for decision making?",
                    options: [
                        "if",
                        "print",
                        "input",
                        "console"
                    ],
                    answer: 0
                },

                {
                    question: "Which loop runs while a condition is true?",
                    options: [
                        "if",
                        "while",
                        "switch",
                        "return"
                    ],
                    answer: 1
                },

                {
                    question: "Which method converts a JSON string into a JavaScript object?",
                    options: [
                        "JSON.stringify()",
                        "JSON.parse()",
                        "JSON.convert()",
                        "JSON.object()"
                    ],
                    answer: 1
                }

            ]
        },


        // =====================================
        // CHAPTER 6: JAVASCRIPT DOM MANIPULATION
        // =====================================

        {
            id: 6,
            title: "JavaScript DOM Manipulation",

            mcqs: [

                {
                    question: "What does DOM stand for?",
                    options: [
                        "Document Object Model",
                        "Data Object Management",
                        "Digital Output Method",
                        "Document Order Module"
                    ],
                    answer: 0
                },

                {
                    question: "Which method selects an element by its ID?",
                    options: [
                        "getElementById()",
                        "getElementsByClass()",
                        "selectById()",
                        "findElement()"
                    ],
                    answer: 0
                },

                {
                    question: "Which property changes the text of an element?",
                    options: [
                        "style",
                        "textContent",
                        "src",
                        "valueOf"
                    ],
                    answer: 1
                },

                {
                    question: "Which method selects the first matching CSS selector?",
                    options: [
                        "querySelector()",
                        "queryAll()",
                        "getSelector()",
                        "findClass()"
                    ],
                    answer: 0
                },

                {
                    question: "Which method creates a new HTML element?",
                    options: [
                        "newElement()",
                        "createElement()",
                        "addElement()",
                        "makeHTML()"
                    ],
                    answer: 1
                },

                {
                    question: "Which method adds a child element to another element?",
                    options: [
                        "appendChild()",
                        "removeChild()",
                        "deleteElement()",
                        "getChild()"
                    ],
                    answer: 0
                },

                {
                    question: "Which method removes an HTML element?",
                    options: [
                        "delete()",
                        "remove()",
                        "clearHTML()",
                        "hideElement()"
                    ],
                    answer: 1
                },

                {
                    question: "Which method attaches an event handler to an element?",
                    options: [
                        "addEventListener()",
                        "addEvent()",
                        "createEvent()",
                        "listen()"
                    ],
                    answer: 0
                },

                {
                    question: "Which event occurs when a user clicks an element?",
                    options: [
                        "change",
                        "mouseover",
                        "click",
                        "load"
                    ],
                    answer: 2
                },

                {
                    question: "Which property is used to change an element's CSS styles through JavaScript?",
                    options: [
                        "className",
                        "style",
                        "innerHTML",
                        "tagName"
                    ],
                    answer: 1
                }

            ]
        },


        // =====================================
        // CHAPTER 7: ASYNCHRONOUS JAVASCRIPT
        // =====================================

        {
            id: 7,
            title: "Asynchronous JavaScript",

            mcqs: [

                {
                    question: "What does asynchronous programming allow?",
                    options: [
                        "Tasks to progress without blocking other operations",
                        "Only one line of code to run",
                        "HTML to replace JavaScript",
                        "CSS to connect to databases"
                    ],
                    answer: 0
                },

                {
                    question: "What is a JavaScript Promise?",
                    options: [
                        "A CSS property",
                        "An object representing a future result",
                        "An HTML element",
                        "A loop"
                    ],
                    answer: 1
                },

                {
                    question: "Which method handles a fulfilled Promise?",
                    options: [
                        "catch()",
                        "finally()",
                        "then()",
                        "wait()"
                    ],
                    answer: 2
                },

                {
                    question: "Which method handles a rejected Promise?",
                    options: [
                        "then()",
                        "catch()",
                        "start()",
                        "resolve()"
                    ],
                    answer: 1
                },

                {
                    question: "Which keyword declares an asynchronous function?",
                    options: [
                        "async",
                        "await",
                        "promise",
                        "defer"
                    ],
                    answer: 0
                },

                {
                    question: "Which keyword waits for a Promise inside an async function?",
                    options: [
                        "wait",
                        "pause",
                        "await",
                        "hold"
                    ],
                    answer: 2
                },

                {
                    question: "Which JavaScript function is commonly used to make HTTP requests?",
                    options: [
                        "fetch()",
                        "requestHTML()",
                        "connect()",
                        "httpPage()"
                    ],
                    answer: 0
                },

                {
                    question: "What does AJAX stand for?",
                    options: [
                        "Asynchronous JavaScript and XML",
                        "Advanced Java Application Extension",
                        "Automatic JavaScript XML",
                        "Asynchronous JSON Application Exchange"
                    ],
                    answer: 0
                },

                {
                    question: "Which function runs code after a specified delay?",
                    options: [
                        "setInterval()",
                        "setTimeout()",
                        "delayCode()",
                        "waitFor()"
                    ],
                    answer: 1
                },

                {
                    question: "What does Promise.all() do?",
                    options: [
                        "Deletes all Promises",
                        "Waits for all Promises to fulfill or one to reject",
                        "Runs only the first Promise",
                        "Converts Promises into HTML"
                    ],
                    answer: 1
                }

            ]
        },


        // =====================================
        // CHAPTER 8: FRONTEND FRAMEWORKS
        // =====================================

        {
            id: 8,
            title: "Frontend Frameworks (React/Angular)",

            mcqs: [

                {
                    question: "What is React?",
                    options: [
                        "A JavaScript library for building user interfaces",
                        "A database",
                        "A programming language",
                        "An operating system"
                    ],
                    answer: 0
                },

                {
                    question: "Which company originally developed React?",
                    options: [
                        "Google",
                        "Facebook (Meta)",
                        "Microsoft",
                        "Amazon"
                    ],
                    answer: 1
                },

                {
                    question: "What is a React component?",
                    options: [
                        "A reusable part of a user interface",
                        "A database table",
                        "A CSS file",
                        "A server"
                    ],
                    answer: 0
                },

                {
                    question: "Which syntax is commonly used to describe React UI?",
                    options: [
                        "SQL",
                        "JSX",
                        "XML only",
                        "PHP"
                    ],
                    answer: 1
                },

                {
                    question: "What are React props used for?",
                    options: [
                        "Passing data to components",
                        "Styling the browser",
                        "Creating databases",
                        "Installing packages"
                    ],
                    answer: 0
                },

                {
                    question: "What is React state?",
                    options: [
                        "Data managed by a component",
                        "A CSS selector",
                        "A database connection",
                        "An HTML attribute"
                    ],
                    answer: 0
                },

                {
                    question: "Which React hook is used to manage state?",
                    options: [
                        "useEffect",
                        "useState",
                        "useRoute",
                        "useHTML"
                    ],
                    answer: 1
                },

                {
                    question: "What is the purpose of useEffect?",
                    options: [
                        "Handling side effects",
                        "Creating HTML tags",
                        "Changing CSS files",
                        "Defining database tables"
                    ],
                    answer: 0
                },

                {
                    question: "What is Angular?",
                    options: [
                        "A frontend web application framework",
                        "A database language",
                        "A web browser",
                        "A server operating system"
                    ],
                    answer: 0
                },

                {
                    question: "Why are components useful in frontend development?",
                    options: [
                        "They make code reusable and organized",
                        "They remove all JavaScript",
                        "They replace databases",
                        "They stop browser rendering"
                    ],
                    answer: 0
                }

            ]
        },


        // =====================================
        // CHAPTER 9: BACKEND & NODE.JS
        // =====================================

        {
            id: 9,
            title: "Backend & Node.js",

            mcqs: [

                {
                    question: "What is Node.js?",
                    options: [
                        "A JavaScript runtime environment",
                        "A CSS framework",
                        "A database",
                        "A web browser"
                    ],
                    answer: 0
                },

                {
                    question: "Where can Node.js execute JavaScript?",
                    options: [
                        "Only in a browser",
                        "Outside the browser",
                        "Only in HTML",
                        "Only in CSS"
                    ],
                    answer: 1
                },

                {
                    question: "What is Express.js?",
                    options: [
                        "A Node.js web application framework",
                        "A programming language",
                        "A database",
                        "A code editor"
                    ],
                    answer: 0
                },

                {
                    question: "What does NPM stand for?",
                    options: [
                        "Node Package Manager",
                        "New Programming Method",
                        "Network Package Machine",
                        "Node Project Module"
                    ],
                    answer: 0
                },

                {
                    question: "Which command initializes a Node.js project?",
                    options: [
                        "node start",
                        "npm init",
                        "npm run",
                        "node create"
                    ],
                    answer: 1
                },

                {
                    question: "Which Express method handles GET requests?",
                    options: [
                        "app.post()",
                        "app.get()",
                        "app.delete()",
                        "app.useGet()"
                    ],
                    answer: 1
                },

                {
                    question: "Which method starts an Express server?",
                    options: [
                        "app.listen()",
                        "app.start()",
                        "server.open()",
                        "app.run()"
                    ],
                    answer: 0
                },

                {
                    question: "What is middleware in Express?",
                    options: [
                        "A function that runs during the request-response cycle",
                        "A database table",
                        "A CSS layout",
                        "A browser extension"
                    ],
                    answer: 0
                },

                {
                    question: "Which object contains information about an HTTP request in Express?",
                    options: [
                        "res",
                        "req",
                        "app",
                        "server"
                    ],
                    answer: 1
                },

                {
                    question: "Which Express object is used to send a response?",
                    options: [
                        "req",
                        "data",
                        "res",
                        "app"
                    ],
                    answer: 2
                }

            ]
        },


        // =====================================
        // CHAPTER 10: DATABASES & APIs
        // =====================================

        {
            id: 10,
            title: "Databases & APIs",

            mcqs: [

                {
                    question: "What is a database?",
                    options: [
                        "An organized collection of data",
                        "A programming language",
                        "A web browser",
                        "An operating system"
                    ],
                    answer: 0
                },

                {
                    question: "Which of these is a relational database?",
                    options: [
                        "MongoDB",
                        "MySQL",
                        "Redis",
                        "Cassandra"
                    ],
                    answer: 1
                },

                {
                    question: "Which of these is a NoSQL database?",
                    options: [
                        "MySQL",
                        "PostgreSQL",
                        "MongoDB",
                        "SQLite"
                    ],
                    answer: 2
                },

                {
                    question: "What is a collection in MongoDB?",
                    options: [
                        "A group of documents",
                        "A CSS class",
                        "A JavaScript function",
                        "A web page"
                    ],
                    answer: 0
                },

                {
                    question: "What format does MongoDB commonly use to represent documents?",
                    options: [
                        "HTML",
                        "BSON",
                        "CSS",
                        "TXT only"
                    ],
                    answer: 1
                },

                {
                    question: "What does API stand for?",
                    options: [
                        "Application Programming Interface",
                        "Advanced Program Internet",
                        "Application Process Integration",
                        "Automatic Programming Input"
                    ],
                    answer: 0
                },

                {
                    question: "What is a REST API?",
                    options: [
                        "An architectural style for web APIs",
                        "A CSS framework",
                        "A database engine",
                        "A programming editor"
                    ],
                    answer: 0
                },

                {
                    question: "Which HTTP method is commonly used to retrieve data?",
                    options: [
                        "POST",
                        "GET",
                        "DELETE",
                        "PATCH"
                    ],
                    answer: 1
                },

                {
                    question: "Which HTTP method is commonly used to create new data?",
                    options: [
                        "GET",
                        "DELETE",
                        "POST",
                        "HEAD"
                    ],
                    answer: 2
                },

                {
                    question: "What does HTTP status code 404 mean?",
                    options: [
                        "Success",
                        "Server error",
                        "Not Found",
                        "Access granted"
                    ],
                    answer: 2
                }

            ]
        }

    ]

};