

if (window.location.pathname === '/acft') {

    const targetElement = document.querySelector('.text-field-acft.message');
      
      if (targetElement) {
        // Apply the style directly
        targetElement.style.setProperty('padding-bottom', '140px', 'important');
      }
    
    
        // Target all required input fields
        document.querySelectorAll('input.text-field-acft[required]').forEach((input) => {
            // Create a wrapper div
            const wrapper = document.createElement('div');
            wrapper.classList.add('acft-input-wrapper'); // Add specific class for ACFT layout
    
            // Create the asterisk div
            const asteriskDiv = document.createElement('div');
            asteriskDiv.classList.add('required-input-acft-asterisk');
            asteriskDiv.textContent = '*';
    
            // Wrap the input field
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            wrapper.appendChild(asteriskDiv);
        });
    
        // Target the required select field
        document.querySelectorAll('select.text-field-acft[required]').forEach((select) => {
            // Create a wrapper div
            const wrapperSelect = document.createElement('div');
            wrapperSelect.classList.add('acft-select-wrapper'); // Add specific class for ACFT select layout
    
            // Create the asterisk div
            const asteriskSelectDiv = document.createElement('div');
            asteriskSelectDiv.classList.add('required-select-acft-asterisk');
            asteriskSelectDiv.textContent = '*';
    
            // Wrap the select field
            select.parentNode.insertBefore(wrapperSelect, select);
            wrapperSelect.appendChild(select);
            wrapperSelect.appendChild(asteriskSelectDiv);
        });
    }