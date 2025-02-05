if (window.location.pathname === '/careers') {
    const dropdown = document.querySelector('#Select-Job');
    const targetContainer = document.querySelector('.div-block-36');
    const careersContainer = document.querySelector('#careers');
    const accordions = careersContainer?.querySelectorAll('.accordion_careers');
  
    // Add career names to the dropdown if #careers exists
    if (dropdown && careersContainer) {
      const careerToggles = careersContainer.querySelectorAll('.accordion_careers_text');
  
      careerToggles.forEach(careerToggle => {
        const careerName = careerToggle.textContent.trim();
  
        if (careerName) {
          // Create a new option
          const option = document.createElement('option');
          option.value = careerName;
          option.textContent = careerName;
  
          // Append the option to the dropdown
          dropdown.appendChild(option);
        }
      });
    } else {
      console.error('Dropdown or #careers container not found.');
    }
  
    // Copy full accordion elements to the target container
    if (accordions && targetContainer) {
      accordions.forEach(accordion => {
        // Clone the accordion element
        const clonedAccordion = accordion.cloneNode(true);
  
        // Append the cloned element to the target container
        targetContainer.appendChild(clonedAccordion);
      });
    } else {
      console.error('No accordion elements or target container found.');
    }
  
    // Add "Apply" button functionality
    const careerDetails = careersContainer?.querySelectorAll('.w-dropdown-list');
    const careerToggles = careersContainer?.querySelectorAll('.accordion_careers_text');
  
    careerDetails?.forEach((detail, index) => {
      // Create the "Apply" button
      const applyButton = document.createElement('button');
      applyButton.textContent = 'Apply';
      applyButton.className = 'apply-button';
      applyButton.style.marginTop = '20px'; // Add spacing for visibility
  
      // Append the "Apply" button to the inner content
      detail.appendChild(applyButton);
  
      // Add event listener to handle "Apply" button click
      applyButton.addEventListener('click', function () {
        const careerName = careerToggles[index]?.textContent.trim();
  
        if (careerName && dropdown) {
          // Scroll to the dropdown
          dropdown.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
          // Match and select the corresponding option
          const options = Array.from(dropdown.options);
          const matchingOption = options.find(option => option.value === careerName);
  
          if (matchingOption) {
            dropdown.value = matchingOption.value;
          } else {
            console.error(`No matching option found for: ${careerName}`);
          }
        }
      });
    });
  
   // Format and customize job listings
    const navElements = careersContainer?.querySelectorAll('nav.dropdown-list-46');
    const careersMobile = document.querySelector('#careers-mobile');
  
    navElements?.forEach(nav => {
      // Find all <p> and <li> elements within the current <nav>
      const paragraphsAndListItems = nav.querySelectorAll('p, li');
  
      // Add the text-block-11-copy.min.small classes to <p> and <li> elements
      paragraphsAndListItems.forEach(element => {
        element.classList.add('text-block-11-copy', 'min', 'small');
  
        // If inside #careers-mobile, make text white
        if (careersMobile?.contains(element)) {
          element.style.color = 'white';
        }
      });
  
      // Find all <h2> and <h3> elements within the current <nav>
      const h2Headings = nav.querySelectorAll('h2');
      const h3Headings = nav.querySelectorAll('h3');
  
      // Apply classes to <h2> elements
      h2Headings.forEach((h2, index) => {
        if (index === 0) {
          h2.classList.add('accordion_careers_subtitle');
        } else {
          h2.classList.add('accordion_careers_subtitle', 'light');
        }
  
        // If inside #careers-mobile, make text white
        if (careersMobile?.contains(h2)) {
          h2.style.color = 'white';
        }
      });
      if (careersMobile?.contains(paragraphsAndListItems)) {
          paragraphsAndListItems.style.color = 'white';
        }
      });
  
      // Apply classes to <h3> elements
      h3Headings.forEach(h3 => {
        h3.classList.add('accordion_careers_subtitle', 'light');
  
        // If inside #careers-mobile, make text white
        if (careersMobile?.contains(h3)) {
          h3.style.color = 'white';
        }
      });
  
  }