if (window.location.pathname === '/accessories') {
    // Get all elements with the target class
        const elements = document.getElementsByClassName('text-field-22 warranty_field accessories-text-filde');
    
        // Iterate through the elements and update their width
        Array.from(elements).forEach((element) => {
            element.style.width = '100%'; // Update width dynamically
        });
        // Select all inputs with the class `warranty_field` that are required
        document.querySelectorAll('input.warranty_field[required]').forEach((input) => {
        // Apply width styling directly
            input.style.width = '100%!important';
            // Create a wrapper div
            const wrapper = document.createElement('div');
            wrapper.classList.add('accessories-input-wrapper'); // Add specific class for accessories layout
    
            // Create the asterisk div
            const asteriskDiv = document.createElement('div');
            asteriskDiv.classList.add('required-asterisk');
            asteriskDiv.textContent = '*';
    
            // Insert the wrapper into the DOM
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            wrapper.appendChild(asteriskDiv);
        });
        
        // Target all select elements with the required class
         document.querySelectorAll('select.text-field-22.warranty_field.accessories-text-filde-2').forEach((select) => {
            // Ensure we're working with the correct element
            console.log('Targeting:', select);
    
            // Create a wrapper div
            const wrapperSelect = document.createElement('div');
            wrapperSelect.classList.add('accessories-select-wrapper'); // Add specific class for accessories layout
    
            // Create the asterisk div
            const asteriskSelectDiv = document.createElement('div');
            asteriskSelectDiv.classList.add('required-select-asterisk');
            asteriskSelectDiv.textContent = '*';
    
            // Wrap the <select> element
            select.parentNode.insertBefore(wrapperSelect, select); // Insert wrapper before the <select>
            wrapperSelect.appendChild(select); // Move the <select> inside the wrapper
            wrapperSelect.appendChild(asteriskSelectDiv); // Add the asterisk
        });
    }