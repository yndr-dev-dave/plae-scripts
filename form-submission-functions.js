
//red borders when focus box.        
document.querySelectorAll(['select','input']).forEach(select => {
    // Add focus and blur event listeners for red border
        select.addEventListener('focus', () => {
            select.style.borderColor = 'red'; // Apply red border on focus
        });
        select.addEventListener('blur', () => {
            select.style.borderColor = ''; // Reset border on blur
        });
         });

    
document.querySelector('input[type="submit"]').addEventListener('click', (event) => {
console.log("? Submit button clicked");

let hasErrors = false;
let firstInvalidElement = null;

// We assume this submit button is in a form
const form = event.target.closest('form'); 

// 2a) First, check if each phone input is exactly 10 digits
phoneInputs.forEach((phoneField) => {
const rawDigits = phoneField.value.replace(/\D/g, '');
if (rawDigits.length !== 10) {
  // Set custom validation error
  phoneField.setCustomValidity("Phone number must be exactly 10 digits.");
} else {
  // Clear custom validation error if it's valid now
  phoneField.setCustomValidity("");
}
});

// 2b) Now run your existing custom validation/tooltip logic
form.querySelectorAll('input, textarea, select').forEach((element) => {
// Remove existing tooltips
const existingTooltip = document.querySelector(`.custom-tooltip[data-for="${element.name}"]`);
if (existingTooltip) existingTooltip.remove();

// Validate the field
if (!element.checkValidity()) {
  hasErrors = true;

  // Track the first invalid element
  if (!firstInvalidElement) {
    firstInvalidElement = element;
  }

  // Create a custom tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'custom-tooltip';
  tooltip.setAttribute('data-for', element.name);
  tooltip.textContent = element.validationMessage || 'Please fill out this field';
  tooltip.style.color = 'red';
  tooltip.style.marginTop = '5px';
  tooltip.style.fontSize = '12px';

  // Find the label associated with the input field
  const label = form.querySelector(`label[for="${element.id}"]`);
  if (label) {
    label.insertAdjacentElement('afterend', tooltip);
  } else {
    // If no label, append tooltip after the field
    element.insertAdjacentElement('afterend', tooltip);
  }

  // Remove the tooltip when the user starts typing
  element.addEventListener('input', () => tooltip.remove(), { once: true });
}
});

// 2c) Handle error display or proceed with form action
if (hasErrors) {
// Scroll to the first invalid element
if (firstInvalidElement) {
  firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  firstInvalidElement.focus();
}

// Show lower-third popup
const popup = document.createElement('div');
popup.textContent = 'Some fields are invalid. Please correct them.';
popup.style.position = 'fixed';
popup.style.bottom = '10px';
popup.style.left = '50%';
popup.style.transform = 'translateX(-50%)';
popup.style.backgroundColor = '#f44336';
popup.style.color = '#fff';
popup.style.padding = '10px 20px';
popup.style.borderRadius = '5px';
popup.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
popup.style.fontSize = '14px';
popup.style.zIndex = '1000';
popup.style.opacity = '0';
popup.style.transition = 'opacity 0.3s ease-in-out';

document.body.appendChild(popup);

// Fade it in
setTimeout(() => (popup.style.opacity = '1'), 0);

// Remove it after 5 seconds
setTimeout(() => {
  popup.style.opacity = '0';
  setTimeout(() => popup.remove(), 300); 
}, 5000);

// Prevent form submission
event.preventDefault();
} else {
// If no errors, proceed with any success logic:
// Optionally do your custom redirect logic

const pathsToMatch = [
  '/acft',
  '/careers',
  '/consumer-confirmation',
  '/order-confirmation',
  '/tylerhobsoncomingsoon',
  '/accessories',
  '/work-with-us',
  '/request-quote',
  '/slat'

];

const currentPath = window.location.pathname;
if (pathsToMatch.includes(currentPath)) {
  setTimeout(() => {
    window.location.href = '/thank-you';
  }, 500);
}
}
});