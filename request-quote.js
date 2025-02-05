if (window.location.pathname === '/request-quote') {
    const targetElement = document.querySelector('.field_request.message');

    if (targetElement) {
        targetElement.style.setProperty('padding-bottom', '140px', 'important');
    }

    // Target all required input fields
    document.querySelectorAll('input.field_request[required]').forEach((input) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('quote-input-wrapper');

        const asteriskDiv = document.createElement('div');
        asteriskDiv.classList.add('required-input-quote-asterisk');
        asteriskDiv.textContent = '*';

        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        wrapper.appendChild(asteriskDiv);
    });

    // Target the required select field
    document.querySelectorAll('select.field_request[required]').forEach((select) => {
        const wrapperSelect = document.createElement('div');
        wrapperSelect.classList.add('quote-select-wrapper');

        const asteriskSelectDiv = document.createElement('div');
        asteriskSelectDiv.classList.add('required-select-quote-asterisk');
        asteriskSelectDiv.textContent = '*';

        select.parentNode.insertBefore(wrapperSelect, select);
        wrapperSelect.appendChild(select);
        wrapperSelect.appendChild(asteriskSelectDiv);
    });

    // Handle region select visibility logic and required attribute on radio buttons
    const regionSelect = document.getElementById('REGION');
    const garageHomeGym = document.getElementById('garage-home-gym');
    const installationService = document.getElementById('installation-service');
    const architectDesigner = document.getElementById('architect-designer');
    const governmentFacility = document.getElementById('government-facility');

    if (regionSelect && garageHomeGym) {
        const updateGarageHomeGymVisibility = () => {
            const isVisible = regionSelect.value === 'USA';
            garageHomeGym.style.display = isVisible ? 'block' : 'none';

            // Find all radio buttons inside #garage-home-gym
            const radioButtons = garageHomeGym.querySelectorAll('input[type="radio"]');

            radioButtons.forEach((radio) => {
                if (isVisible) {
                    radio.setAttribute('required', 'required');
                } else {
                    radio.removeAttribute('required');
                }
            });
        };

        // Run initially to set correct visibility and required attributes
        updateGarageHomeGymVisibility();

        // Listen for changes in the select dropdown
        regionSelect.addEventListener('change', updateGarageHomeGymVisibility);
    }

    // Handle Garage Home Gym radio button selection
    const garageRadioYes = garageHomeGym?.querySelector('input[type="radio"][value="YES"]');
    const garageRadioNo = garageHomeGym?.querySelector('input[type="radio"][value="NO"]');

    const updateAdditionalSections = () => {
        if (!garageRadioYes || !garageRadioNo) return;

        if (garageRadioYes.checked) {
            // Hide additional sections and remove required attributes
            [installationService, architectDesigner, governmentFacility].forEach((section) => {
                if (section) {
                    section.style.display = 'none';
                    section.querySelectorAll('input[type="radio"]').forEach((radio) => {
                        radio.removeAttribute('required');
                    });
                }
            });
        } else if (garageRadioNo.checked) {
            // Show additional sections and set required attributes
            [installationService, architectDesigner, governmentFacility].forEach((section) => {
                if (section) {
                    section.style.display = 'block';
                    section.querySelectorAll('input[type="radio"]').forEach((radio) => {
                        radio.setAttribute('required', 'required');
                    });
                }
            });
        }
    };

    // Run initially to set correct visibility and required attributes
    updateAdditionalSections();

    // Listen for changes in Garage Home Gym radio buttons
    if (garageRadioYes) garageRadioYes.addEventListener('change', updateAdditionalSections);
    if (garageRadioNo) garageRadioNo.addEventListener('change', updateAdditionalSections);
}