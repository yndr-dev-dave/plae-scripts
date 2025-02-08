// Query multiple fields by their IDs or class
const textFields = document.querySelectorAll('#City, #City-2'); // Add your field IDs or classes here

textFields.forEach(field => {
  field.addEventListener('input', function () {
    // Regex to allow text and special characters but no numbers
    const validValue = field.value.replace(/[0-9]/g, ''); // Remove numeric characters
    field.value = validValue;
  });

  field.addEventListener('blur', function () {
    // Optional: Trim spaces on blur for cleaner input
    field.value = field.value.trim();
  });
});


// Region Phone Validation
const regionSelect = document.getElementById('REGION');
const phoneInput   = document.getElementById('region-PHONE');

// Define phone formats and placeholder examples for each region
const phoneFormats = {
  'USA': {
    pattern: '^\\(\\d{3}\\) \\d{3}-\\d{4}$', // e.g. (123) 456-7890
    placeholder: '(123) 456-7890'
  },
  'Canada': {
    pattern: '^\\(\\d{3}\\) \\d{3}-\\d{4}$', // e.g. (123) 456-7890
    placeholder: '(123) 456-7890'
  },
  // For all other regions, we now use a default pattern of 1–15 digits.
  'South America': {
    pattern: '\\d{1,15}',
    placeholder: '+55 11-2345-6789'
  },
  'Asia-Pacific': {
    pattern: '\\d{1,15}',
    placeholder: 'PHONE'
  },
  'UAE': {
    pattern: '\\d{1,15}',
    placeholder: '+971 50 123 4567'
  },
  'UK': {
    pattern: '\\d{1,15}',
    placeholder: '+44 7123 456789'
  },
  'Europe': {
    pattern: '\\d{1,15}',
    placeholder: '+49 30 1234 5678'
  }
};

// Listen for changes on the REGION dropdown
if (regionSelect && phoneInput) {
  regionSelect.addEventListener('change', function() {
    const region = regionSelect.value;
    if (phoneFormats[region]) {
      phoneInput.pattern = phoneFormats[region].pattern;
      phoneInput.placeholder = phoneFormats[region].placeholder;
    } else {
      // If region is not one of the keys above, apply the default pattern
      phoneInput.pattern = '\\d{1,15}';
      phoneInput.placeholder = 'PHONE';
    }
    // Optionally clear the phone input when the region changes
    phoneInput.value = '';
  });

  // Auto-format on input
  phoneInput.addEventListener('input', function() {
    const region = regionSelect.value;
    let rawValue = phoneInput.value;
    let numbersOnly = rawValue.replace(/\D/g, ''); // Keep only digits

    let formattedValue = '';
    // Apply special formatting only for USA/Canada;
    // otherwise, simply limit to 15 digits
    switch (region) {
      case 'USA':
        formattedValue = formatUSA(numbersOnly);
        break;
      case 'Canada':
        formattedValue = formatCanada(numbersOnly);
        break;
      case 'South America':
      case 'Asia-Pacific':
      case 'UAE':
      case 'UK':
      case 'Europe':
        formattedValue = formatDefault(numbersOnly);
        break;
      default:
        // If no recognized region is selected, use the raw numbers (limited to 15)
        formattedValue = formatDefault(numbersOnly);
        break;
    }

    phoneInput.value = formattedValue;
  });
}

// Formatting functions
function formatDefault(numbersOnly) {
  // Limit the input to a maximum of 15 digits
  if (numbersOnly.length > 15) {
    return numbersOnly.slice(0, 15);
  }
  return numbersOnly;
}

function formatUSA(numbersOnly) {
  let area = numbersOnly.slice(0, 3);
  let middle = numbersOnly.slice(3, 6);
  let last = numbersOnly.slice(6, 10);
  let formatted = '';
  if (area) {
    formatted += `(${area}`;
    if (area.length === 3) formatted += ')';
  }
  if (middle) {
    if (area.length === 3) formatted += ' ';
    formatted += middle;
  }
  if (last) {
    if (middle.length === 3) formatted += '-';
    formatted += last;
  }
  return formatted;
}

function formatCanada(numbersOnly) {
  // Canada uses the same formatting as USA
  return formatUSA(numbersOnly);
}


// Get the REGION dropdown element and zip code input fields

const zipInputs = document.querySelectorAll(
  '#ZIPCODE, #ZIP-Code-2, #zipcode-3, #zipcode-2, #zipcode-22, #Zipcode'
);

// For USA/Canada, format by inserting a hyphen after the first 5 digits.
// (If fewer than 5 digits, no hyphen is added.)
function formatZipCodeUS(numbersOnly) {
  if (numbersOnly.length <= 5) {
    return numbersOnly;
  } else {
    return `${numbersOnly.slice(0, 5)}-${numbersOnly.slice(5, 15)}`;
  }
}

// Update zip inputs based on the region selection
function updateZipInputs() {
  zipInputs.forEach(input => {
    // Remove any non-digit characters
    let rawValue = input.value;
    let numbersOnly = rawValue.replace(/\D/g, '');
    
    // Limit to a maximum of 15 digits for all regions
    if (numbersOnly.length > 15) {
      numbersOnly = numbersOnly.slice(0, 15);
    }
    
    if (regionSelect.value === 'USA' || regionSelect.value === 'Canada') {
      input.value = formatZipCodeUS(numbersOnly);
      // Pattern: up to 5 digits, optionally a hyphen then up to 10 more digits
      input.setAttribute('pattern', '^\\d{0,5}(-\\d{0,10})?$');
    } else {
      input.value = numbersOnly;
      input.setAttribute('pattern', '^\\d{0,15}$');
    }
  });
}

// Listen for changes on the REGION dropdown so that zip inputs are updated immediately
if (regionSelect) {
  regionSelect.addEventListener('change', updateZipInputs);
}

// For live formatting as the user types, apply the same logic
zipInputs.forEach(input => {
  input.addEventListener('input', function () {
    let rawValue = input.value;
    let numbersOnly = rawValue.replace(/\D/g, '');
    
    if (regionSelect.value === 'USA' || regionSelect.value === 'Canada') {
      if (numbersOnly.length > 15) {
        numbersOnly = numbersOnly.slice(0, 15);
      }
      input.value = formatZipCodeUS(numbersOnly);
    } else {
      if (numbersOnly.length > 15) {
        numbersOnly = numbersOnly.slice(0, 15);
      }
      input.value = numbersOnly;
    }
  });

  // Allow only digit key presses in the zip inputs
  input.addEventListener('keypress', function (e) {
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  });
});




 const stateField = document.getElementById('state-field');

// Full list of US states, territories, and armed forces
const states = [
  "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas",
  "California", "Colorado", "Connecticut", "Delaware",
  "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii",
  "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Northern Mariana Islands",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
  "Texas", "Utah", "U.S. Virgin Islands", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
  "Armed Forces Americas", "Armed Forces Europe", "Armed Forces Pacific"
];

// (Optional) Add an initial empty option or placeholder
const defaultOption = document.createElement('option');
defaultOption.value = "";
defaultOption.textContent = "Select a State...";
defaultOption.selected = true;
defaultOption.disabled = true;
stateField.appendChild(defaultOption);

// Populate the select with state/territory options
states.forEach(state => {
  const option = document.createElement('option');
  option.value = state;
  option.textContent = state;
  stateField.appendChild(option);
});