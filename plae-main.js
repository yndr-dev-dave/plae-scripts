window.addEventListener("load", () => {
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

    const baseURL = "https://cdn.jsdelivr.net/gh/yndr-dev-dave/plae-scripts@latest/";

    scripts.forEach(scriptName => {
        let script = document.createElement("script");
        script.src = baseURL + scriptName;
        script.async = true;
        script.onload = () => console.log(`${scriptName} loaded`);
        script.onerror = () => console.error(`Error loading ${scriptName}`);
        document.body.appendChild(script);
    });
});
