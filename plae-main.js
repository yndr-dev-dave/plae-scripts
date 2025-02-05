document.addEventListener("DOMContentLoaded", function () {
    // Base URL for jsDelivr
    const baseURL = "https://cdn.jsdelivr.net/gh/yndr-dev-dave/plae-scripts@main/";

    // Load CSS file first
    let cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = baseURL + "plae-custom-css.css"; // Your CSS file
    document.head.appendChild(cssLink);
    console.log("? Loaded CSS:", cssLink.href);

    // Define script files to load
    const scripts = [
        "accessories.js",
        "actf.js",
        "careers.js",
        "copywrite.js",
        "form-submission-functions.js",
        "functions.js",
        "request-quote.js",
        "required-field.js",
        "tylerhobsoncomingsoon.js"
    ];

    console.log("Loading JS files ...");

    // Dynamically create and append script elements
    scripts.forEach(scriptName => {
        let script = document.createElement("script");
        script.src = baseURL + scriptName;
        script.async = true;
        document.body.appendChild(script);
        console.log("? Loaded JS:", script.src);
    });

    console.log("Script loading complete.");
});
