//Required Inputs
// List of paths to check
const paths = ['/work-with-us','/ACFT'];


// Check if the current URL's path matches any in the array
if (paths.some(path => window.location.pathname.includes(path))) {

//budget page input
const budgetInput = document.querySelector('#budget-amount');

budgetInput.addEventListener('input', function () {
  let rawValue = budgetInput.value;

  // Allow only numbers and a single period for decimals
  const validValue = rawValue.replace(/[^0-9.]/g, ''); // Remove non-numeric, non-period characters
  
  // Ensure only one period is allowed in the input
  const parts = validValue.split('.');
  if (parts.length > 2) {
    budgetInput.value = parts[0] + '.' + parts.slice(1).join(''); // Keep only the first period
  } else {
    budgetInput.value = validValue;
  }
});

budgetInput.addEventListener('blur', function () {
  let value = budgetInput.value;

  // Automatically format to include two decimal places if applicable
  if (value && !isNaN(value)) {
    budgetInput.value = parseFloat(value).toFixed(2);
  }
});


        // Select all required input fields
        document.querySelectorAll('input[required]').forEach((input) => {
        
          const label = input.closest('label');
            if (label) {
                console.log('Skipping input inside label:', label); // Log the label element
                return;
            }
            // Create a wrapper div
            const wrapper = document.createElement('div');
            wrapper.classList.add('input-wrapper'); // Add class for easier management
            wrapper.style.position = 'relative'; // Needed for absolute positioning
            wrapper.style.display = 'inline-block'; // Ensures it doesn't break layout
            wrapper.style.margin = getComputedStyle(input).margin; // Preserve input margins

            // Remove margin from the input to avoid layout shift
            input.style.margin = '0';

            // Create the asterisk div
            const asteriskDiv = document.createElement('div');
            asteriskDiv.classList.add('required-input'); // Add class for easier styling
            asteriskDiv.textContent = '*';


            // Insert the wrapper into the DOM
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            wrapper.appendChild(asteriskDiv);
        });
        
         document.querySelectorAll('select[required]').forEach((input) => {
            // Create a wrapper div
            const wrapper = document.createElement('div');
            wrapper.classList.add('input-wrapper'); // Add class for easier management
            wrapper.style.position = 'relative'; // Needed for absolute positioning
            wrapper.style.display = 'inline-block'; // Ensures it doesn't break layout
            wrapper.style.margin = getComputedStyle(input).margin; // Preserve input margins

            // Remove margin from the input to avoid layout shift
            input.style.margin = '0';

            // Create the asterisk div
            const asteriskDiv = document.createElement('div');
            asteriskDiv.classList.add('required-select'); // Add class for easier styling
            asteriskDiv.textContent = '*';


            // Insert the wrapper into the DOM
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            wrapper.appendChild(asteriskDiv);
        });
    }