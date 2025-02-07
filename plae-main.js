
    // Define script names in an array
    const scripts = [
        "accessories.js",
        "actf.js",
        "careers.js",
        "copywrite.js",
        "form-submission-functions.js",
        "functions.js",
        "request-quote.js",
        "required-field.js",
        "tylerhobsoncomingsoon.js",
        "plae-custom-css.js",
        "slat-wishlist.js"
    ];

    // Base URL for jsDelivr
    const baseURL = "https://cdn.jsdelivr.net/gh/yndr-dev-dave/plae-scripts@latest/";

    // Dynamically create and append script elements
    scripts.forEach(scriptName => {
        let script = document.createElement("script");
        script.src = baseURL + scriptName;
        script.async = true; // Allow scripts to load asynchronously
        document.body.appendChild(script);
    });

    console.log("Scripts loaded:", scripts);

