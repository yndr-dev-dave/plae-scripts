if (window.location.pathname === '/tylerhobsoncomingsoon') {
    // Target all required input fields in the form
    document.querySelectorAll('#wf-form-Tylerhobsoncomingsoon-Form input[required]').forEach((input) => {
        // Create a wrapper div
        const wrapper = document.createElement('div');
        wrapper.classList.add('tyler-input-wrapper'); // Add specific wrapper class for layout

        // Create the asterisk div
        const asteriskDiv = document.createElement('div');
        asteriskDiv.classList.add('required-input-tyler-asterisk'); // Specific class for Tyler form asterisks
        asteriskDiv.textContent = '*';

        // Wrap the input field
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        wrapper.appendChild(asteriskDiv);
    });
}