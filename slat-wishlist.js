if (window.location.pathname === '/slattreadmillcomingsoon') {

    const targetElement = document.querySelector('.text-field-slat.message');
      
    if (targetElement) {
        // Apply the style directly
        targetElement.style.setProperty('padding-bottom', '140px', 'important');
    }

    // Target all required input fields
    document.querySelectorAll('input.text-field-slat[required]').forEach((input) => {
        // Create a wrapper div
        const wrapper = document.createElement('div');
        wrapper.classList.add('slat-input-wrapper'); // Add specific class for SLAT layout

        // Create the asterisk div
        const asteriskDiv = document.createElement('div');
        asteriskDiv.classList.add('required-input-slat-asterisk');
        asteriskDiv.textContent = '*';

        // Wrap the input field
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        wrapper.appendChild(asteriskDiv);
    });

    // Target the required select field
    document.querySelectorAll('select.text-field-slat[required]').forEach((select) => {
        // Create a wrapper div
        const wrapperSelect = document.createElement('div');
        wrapperSelect.classList.add('slat-select-wrapper'); // Add specific class for SLAT select layout

        // Create the asterisk div
        const asteriskSelectDiv = document.createElement('div');
        asteriskSelectDiv.classList.add('required-select-slat-asterisk');
        asteriskSelectDiv.textContent = '*';

        // Wrap the select field
        select.parentNode.insertBefore(wrapperSelect, select);
        wrapperSelect.appendChild(select);
        wrapperSelect.appendChild(asteriskSelectDiv);
    });
}
