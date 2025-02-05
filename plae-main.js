document.addEventListener("DOMContentLoaded", function () {
    const files = [
        "accessories.js",
        "actf.js",
        "careers.js",
        "copywrite.js",
        "form-submission-functions.js",
        "functions.js",
        "request-quote.js",
        "required-field.js",
        "tylerhobsoncomingsoon.js",
        "plae-custom-css.css" // This is the CSS file
    ];

    // Base URL for jsDelivr
    const baseURL = "https://cdn.jsdelivr.net/gh/yndr-dev-dave/plae-scripts@main/";

    // Dynamically load files based on type
    files.forEach(fileName => {
        if (fileName.endsWith(".js")) {
            // Load JavaScript files
            let script = document.createElement("script");
            script.src = baseURL + fileName;
            script.async = true;
            document.body.appendChild(script);
        } else if (fileName.endsWith(".css")) {
            // Load CSS files
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = baseURL + fileName;
            document.head.appendChild(link);
        }
    });

    console.log("Files loaded:", files);
});
