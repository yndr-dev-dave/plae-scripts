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


//Region Phone Validation
const regionSelect = document.getElementById('REGION');
const phoneInput   = document.getElementById('region-PHONE');

// 1) Define phone formats and placeholder examples for each region
//    (You can tweak the regex/patterns to match your exact needs.)
const phoneFormats = {
  'USA': {
    pattern: '^\\(\\d{3}\\) \\d{3}-\\d{4}$', // e.g. (123) 456-7890
    placeholder: '(123) 456-7890'
  },
  'Canada': {
    pattern: '^\\(\\d{3}\\) \\d{3}-\\d{4}$', // e.g. (123) 456-7890
    placeholder: '(123) 456-7890'
  },
  'South America': {
    // Example: +55 11-2345-6789
    // Pattern: +XX (1?3 digits) - (3?4 digits) - (4 digits)
    pattern: '\\d{10,15}',
    placeholder: '+55 11-2345-6789'
  },
  'Asia-Pacific': {
    // Example: +81 3-1234-5678 (Japan) 
    // Pattern: +XXX (1?4 digits) - (3?4 digits) - (4 digits)
    pattern: '\\d{10,15}',
    placeholder: 'PHONE'
  },
  'UAE': {
    // Example: +971 50 123 4567
    pattern: '\\d{10,15}',
    placeholder: '+971 50 123 4567'
  },
  'UK': {
    // Example: +44 7123 456789 or 07123 456789
    pattern: '\\d{10,15}',
    placeholder: '+44 7123 456789'
  },
  'Europe': {
    // Highly simplified example: +49 30 1234 5678
    // Pattern: +XX (1?4 digits) (3?4 digits) (3?4 digits)
    pattern: '\\d{10,15}',
    placeholder: '+49 30 1234 5678'
  }
};

// 2) Auto-format functions for each region
//    (Note: These are simplified for demonstration.)
function formatDefault(numbersOnly) {
// Limit the input to a maximum of 15 digits
if (numbersOnly.length > 15) {
return numbersOnly.slice(0, 15);
}

return numbersOnly; // Return the numbers as-is if within the limit
}
function formatUSA(numbersOnly) {
  // (xxx) xxx-xxxx
  let area   = numbersOnly.slice(0, 3);
  let middle = numbersOnly.slice(3, 6);
  let last   = numbersOnly.slice(6, 10);

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

// Canada uses the same format as the USA example
function formatCanada(numbersOnly) {
  return formatUSA(numbersOnly);
}

function formatSouthAmerica(numbersOnly) {
  // Example target format: +XX XX-XXXX-XXXX
  // But the pattern suggests we can have 1?3 digits in the second group
  // We'll do a simplified approach: +cc ( up to 3 digits ) - (3?4 digits ) - (4 digits)
  let cc        = numbersOnly.slice(0, 2); // +XX
  let region    = numbersOnly.slice(2, 5); // up to 3 digits
  let middle    = numbersOnly.slice(5, 9); // up to 4 digits
  let last      = numbersOnly.slice(9, 13);

  let formatted = '+';
  if (cc) {
    formatted += cc;
  }
  if (region) {
    formatted += ' ' + region;
  }
  if (middle) {
    formatted += '-' + middle;
  }
  if (last) {
    formatted += '-' + last;
  }
  return formatted;
}

function formatAsiaPacific(numbersOnly) {
  // Example target: +XXX X-XXXX-XXXX
  // We'll assume +cc or +ccc for the country code
  // Then up to 4 digits, then 3?4 digits, then 4 digits
  // Example input: +81 3-1234-5678 => cc=81, region=3, middle=1234, last=5678
  // or +673 1234-5678-9999, etc.
  let ccLen       = numbersOnly.length > 2 ? 3 : 2; // if we have at least 3 digits, assume a 3-digit country code
  let cc          = numbersOnly.slice(0, ccLen);
  let region      = numbersOnly.slice(ccLen, ccLen + 4); // up to 4 digits
  let middleStart = ccLen + 4;
  let middle      = numbersOnly.slice(middleStart, middleStart + 4); // up to 4 digits
  let last        = numbersOnly.slice(middleStart + 4, middleStart + 8); // up to 4 digits

  let formatted = '+';
  if (cc) {
    formatted += cc;
  }
  if (region) {
    formatted += ' ' + region;
  }
  if (middle) {
    formatted += '-' + middle;
  }
  if (last) {
    formatted += '-' + last;
  }
  return formatted;
}

function formatUAE(numbersOnly) {
  // Target format: +971 XX XXX XXXX
  // We'll forcibly prefix with +971 no matter what the user typed
  // Then region code (1?2 digits), then 3 digits, then 4 digits
  // e.g. +971 50 123 4567
  // If you want to allow other country codes than 971, remove the forced +971 logic
  let forcedCC  = '971'; 
  let region    = numbersOnly.slice(3, 5); // after the first 3 digits "971"
  let next3     = numbersOnly.slice(5, 8);
  let last4     = numbersOnly.slice(8, 12);

  // If the user typed fewer than 3 digits, we can¡¯t form +971 properly. 
  // So we do a check:
  if (numbersOnly.length < 3) {
    // Just show partial?
    return '+' + numbersOnly;
  }

  let formatted = '+971';
  if (region)  formatted += ' ' + region;
  if (next3)   formatted += ' ' + next3;
  if (last4)   formatted += ' ' + last4;

  return formatted;
}

// *** UPDATED UK AUTO-FORMAT ***
function formatUK(numbersOnly) {
  // We want +44 7123 456789 (mobile example)
  let formatted = '';

  if (numbersOnly.startsWith('44')) {
    // e.g., "447123456789"
    const cc   = numbersOnly.slice(0, 2);   // "44"
    const rest = numbersOnly.slice(2);      // "7123456789"
    const firstBlock = rest.slice(0, 4);    // "7123"
    const secondBlock = rest.slice(4,9);      // "456789"

    formatted = `+${cc} ${firstBlock}`;
    if (secondBlock) {
      formatted += ` ${secondBlock}`;
    }

  } else if (numbersOnly.startsWith('0')) {
    // e.g., "07123456789" => let's do a simplified 0 + "7123" + "456789"
    const zero = numbersOnly.slice(0, 1);   // "0"
    const rest = numbersOnly.slice(1);      // "7123456789"
    const firstBlock = rest.slice(0, 4);
    const secondBlock = rest.slice(4);

    formatted = `${zero}${firstBlock}`;
    if (secondBlock) {
      formatted += ` ${secondBlock}`;
    }

  } else {
    // Default to +44 if no '44' or '0' prefix
    const cc = '44';
    const firstBlock = numbersOnly.slice(0, 4);
    const secondBlock = numbersOnly.slice(4);

    formatted = `+${cc} ${firstBlock}`;
    if (secondBlock) {
      formatted += ` ${secondBlock}`;
    }
  }

  return formatted;
}

function formatEurope(numbersOnly) {
  // Example: +49 30 1234 5678
  // Pattern: +XX (1?4 digits) (3?4 digits) (3?4 digits)
  // We'll do a simplified approach:
  let cc   = numbersOnly.slice(0, 2); // e.g. '49'
  let part1 = numbersOnly.slice(2, 6);  // up to 4 digits
  let part2 = numbersOnly.slice(6, 10); // up to 4 digits
  let part3 = numbersOnly.slice(10, 14); // up to 4 digits

  let formatted = '+';
  if (cc)   formatted += cc;
  if (part1) formatted += ' ' + part1;
  if (part2) formatted += ' ' + part2;
  if (part3) formatted += ' ' + part3;

  return formatted;
}

// 3) Listen for region changes
if (regionSelect && phoneInput) {
  regionSelect.addEventListener('change', function() {
    const region = regionSelect.value;
    if (phoneFormats[region]) {
      phoneInput.pattern = phoneFormats[region].pattern;
      phoneInput.placeholder = phoneFormats[region].placeholder;
    } else {
      // Default if region not in phoneFormats or not selected
      phoneInput.pattern = '';
      phoneInput.placeholder = 'PHONE';
    }
    // Reset phone input on region change (optional)
    phoneInput.value = '';
  });

  // 4) Auto-format on input
  phoneInput.addEventListener('input', function() {
    const region = regionSelect.value;
    
    // Strip out all non-digit characters, but keep leading '+' if the region uses it
    let rawValue     = phoneInput.value;
    let hasPlusSign  = rawValue.startsWith('+'); 
    let numbersOnly  = rawValue.replace(/\D/g, ''); // All digits only

    // Switch region and apply appropriate function:
    let formattedValue = '';
    switch (region) {
      case 'USA':
        formattedValue = formatUSA(numbersOnly);
        break;
      case 'Canada':
        formattedValue = formatCanada(numbersOnly);
        break;

      case 'South America':
        formattedValue = formatDefault(numbersOnly);
        break;
      case 'Asia-Pacific':
        formattedValue = formatDefault(numbersOnly);
        break;
      case 'UAE':
        formattedValue = formatDefault(numbersOnly);
        break;
      case 'UK':
        formattedValue = formatDefault(numbersOnly);
        break;
      case 'Europe':
        formattedValue = formatDefault(numbersOnly);
        break;
      default:
        // If no region selected, no auto-format
        formattedValue = rawValue;
        break;
    }

    phoneInput.value = formattedValue;
  });
}


const phoneInputs = document.querySelectorAll('#Phone,#Phone-2, #PHONE-2, #PHONE, #On-Site-Contact-Phone-Number-2, #On-Site-Contact-Phone-Number');


function formatUSPhone(numbersOnly) {
let area   = numbersOnly.slice(0, 3);
let middle = numbersOnly.slice(3, 6);
let last   = numbersOnly.slice(6, 10);

let formatted = '';
if (area) {
formatted += `(${area}`;
if (area.length === 3) formatted += ')';
}
if (middle) {
formatted += ` ${middle}`;
}
if (last) {
formatted += `-${last}`;
}
return formatted;
}

phoneInputs.forEach(input => {
// Format on input
input.addEventListener('input', function() {
let rawValue = input.value;
let numbersOnly = rawValue.replace(/\D/g, ''); // Strip non-digits

// Enforce max of 10 digits
if (numbersOnly.length > 10) {
  numbersOnly = numbersOnly.slice(0, 10);
}

input.value = formatUSPhone(numbersOnly);
});

// Allow only digits on keypress
input.addEventListener('keypress', function(e) {
if (!/\d/.test(e.key)) {
  e.preventDefault();
}
});
});

// Get the REGION dropdown element and zip code input fields
const zipInputs = document.querySelectorAll('#ZIPCODE, #ZIP-Code-2, #zipcode-3, #zipcode-2, #Zipcode');

// Function to format US/Canada zip codes (5-digit, or 9-digit with a hyphen)
function formatZipCode(numbersOnly) {
  if (numbersOnly.length < 5) {
    return numbersOnly; // Under 5 digits, leave as is
  } else if (numbersOnly.length === 5) {
    return numbersOnly; // Exactly 5 digits, no formatting needed
  } else {
    // Format as 5-digit + hyphen + up to 4 more digits (max 9 total)
    return `${numbersOnly.slice(0, 5)}-${numbersOnly.slice(5, 9)}`;
  }
}

// Function to update zip inputs based on the region selection
function updateZipInputs() {
  zipInputs.forEach(input => {
    // Strip non-digits from current input value
    let rawValue = input.value;
    let numbersOnly = rawValue.replace(/\D/g, '');
    
    // If region is USA or Canada
    if (regionSelect.value === 'USA' || regionSelect.value === 'Canada') {
      // Limit to 9 digits and format accordingly
      if (numbersOnly.length > 9) {
        numbersOnly = numbersOnly.slice(0, 9);
      }
      input.value = formatZipCode(numbersOnly);
      // Set pattern to match either 5 digits or 5+4-digit zip (e.g. 12345 or 12345-6789)
      input.setAttribute('pattern', '\\d{5}(-\\d{4})?');
    } else {
      // For other regions, simply limit to 15 digits (no formatting)
      if (numbersOnly.length > 15) {
        numbersOnly = numbersOnly.slice(0, 15);
      }
      input.value = numbersOnly;
      // Set a pattern for up to 15 digits
      input.setAttribute('pattern', '\\d{1,15}');
    }
  });
}

// Listen for changes on the REGION dropdown to update zip inputs immediately
if (regionSelect) {
  regionSelect.addEventListener('change', function() {
    updateZipInputs();
  });
}

// Add event listeners for each zip input for live formatting/validation
zipInputs.forEach(input => {
  // Format the zip code on input
  input.addEventListener('input', function () {
    let rawValue = input.value;
    let numbersOnly = rawValue.replace(/\D/g, '');
    
    if (regionSelect.value === 'USA' || regionSelect.value === 'Canada') {
      if (numbersOnly.length > 9) {
        numbersOnly = numbersOnly.slice(0, 9);
      }
      input.value = formatZipCode(numbersOnly);
    } else {
      if (numbersOnly.length > 15) {
        numbersOnly = numbersOnly.slice(0, 15);
      }
      input.value = numbersOnly;
    }
  });

  // On blur, if region is USA/Canada, check for a minimum of 5 digits
  input.addEventListener('blur', function () {
    let rawValue = input.value;
    let numbersOnly = rawValue.replace(/\D/g, '');
    
    if ((regionSelect.value === 'USA' || regionSelect.value === 'Canada') && numbersOnly.length < 5) {
      input.classList.add('invalid'); // For example, add a red border via CSS
      alert('Zip code must be at least 5 digits.');
    } else {
      input.classList.remove('invalid');
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