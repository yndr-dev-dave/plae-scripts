// Create a <style> element
let style = document.createElement("style");
style.type = "text/css";

// Define CSS as a JavaScript template literal
style.innerHTML = `
/* Style for the red asterisk */
        .red-asterisk::before {
            content: '*';
            color: red;
        }
        .required-placeholder {      
            color: #fff;
            letter-spacing: 1px;
            font-family: Roboto, sans-serif;
            font-size: 14px;
            font-weight: 300;
				}

        .required-select {
            position: absolute;
            right: 10%;
            top: 55%;
            transform: translateY(-50%);
            color: red;
            font-family: Roboto, sans-serif;
            font-size: 14px;
            font-weight: 300;
            pointer-events: none;
        }
                /* Style to ensure proper positioning of the select */
        .required-select-wrapper {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .required-input{
      color: red;
      position: absolute;
      right: 0.2rem;
      transform: translateY(-150%);
      font-size: 1.5rem;

  }
          .required-select{
		color: red;
    position: absolute;
    right: 1.1rem;
    transform: translateY(-50%);
    font-size: 1.1rem;
    font-weight: bold;

  }

/* Accessories Page Styles */

/* Wrapper for inputs on the accessories page */
/* Accessories Page Specific Styles */

/* Wrapper for each input */
.accessories-input-wrapper {
    position: relative; /* Relative for asterisk positioning */
    display: inline-block; /* Prevent breaking layout */
    width: 48.5%; /* Match the input width */
    vertical-align: top; /* Align inputs properly */
}

/* Input styles */
.accessories-input-wrapper .warranty_field {
    border: 1px solid var(--white);
    background-color: var(--black);
   
    letter-spacing: .7px;
    width: 100%; /* Full width within wrapper */
    height: 50px; /* Set consistent height */
    margin: 0; /* Prevent margin conflicts */
    padding: 16px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 17px;
    box-sizing: border-box; /* Ensure padding doesn't break width */
}

/* Asterisk styles */
.accessories-input-wrapper .required-asterisk {
      color: red;
      position: absolute;
      right: 0.2rem;
      transform: translateY(-200%);
      font-size: 1.5rem;
}

.accessories-select-wrapper {
    position: relative; /* Relative for asterisk positioning */
    display: inline-block; /* Prevent breaking layout */
    width: 48.5%; /* Match the input width */
    vertical-align: top; /* Align inputs properly */
}

/* Input styles */
.accessories-select-wrapper .warranty_field {
    border: 1px solid var(--white);
    background-color: var(--black);
   
    letter-spacing: .7px;
    width: 100%; /* Full width within wrapper */
    height: 50px; /* Set consistent height */
    margin: 0; /* Prevent margin conflicts */
    padding: 16px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 17px;
    box-sizing: border-box; /* Ensure padding doesn't break width */
}

/* Asterisk styles */
.accessories-select-wrapper .required-select-asterisk {
      color: red;
      position: absolute;
      right: 0.7rem;
      transform: translateY(-200%);
      font-size: 1.5rem;
}

/* Wrapper for input fields */
.acft-input-wrapper {
    position: relative;
    display: inline-block;
    width: 104%;  /* Spacing between columns */
}

/* Wrapper for select fields */
.acft-select-wrapper {
    position: relative;
    display: inline-block;
    width: 50%; 
}

/* Input styles */
.acft-input-wrapper .text-field-acft,
.acft-select-wrapper .text-field-acft {
    border: 1px solid var(--white);
    background-color: var(--black);
    letter-spacing: 0.7px;
    width: 100%; /* Full width inside wrapper */
    height: 50px;
    margin: 0;
    padding: 16px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 17px;
    box-sizing: border-box;
}

.required-select-acft-asterisk {
      color: red;
      position: absolute;
      right: 1rem;
      transform: translateY(-150%);
      font-size: 1.5rem;
}

.required-input-acft-asterisk {
      color: red;
      position: absolute;
      right: 0.7rem;
      transform: translateY(-150%);
      font-size: 1.5rem;
}

/* Wrapper for input fields */
.tyler-input-wrapper {
    position: relative; /* For positioning the asterisk */
    display: inline-block; /* Align inputs properly */
    width: 110%;
    margin: 0px 7px 0px 0px;
}

/* Input field styles */
.tyler-input-wrapper .text-field-30 {
    border: 1px solid var(--white);
    background-color: var(--black);
    padding: 5px 14px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 22px;
    width: 100%; /* Full width inside the wrapper */
    box-sizing: border-box; /* Ensure padding and borders don't affect width */
}

/* Asterisk styles */
.required-input-tyler-asterisk {
    color: red;
    position: absolute;
    right: -0.1rem; /* Adjust based on layout */
    top: 50%; /* Vertically center */
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 1;
}

/* Wrapper for input fields */
.quote-input-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;  /* Adjusted width for better alignment */
}

/* Wrapper for select fields */
.quote-select-wrapper {
    position: relative;
    display: inline-block;
    width: 100%; 
}

/* Input styles */
.quote-input-wrapper .text-field-request,
.quote-select-wrapper .text-field-request {
    border: 1px solid var(--white);
    background-color: var(--black);
    letter-spacing: 0.7px;
    width: 100%; /* Full width inside wrapper */
    height: 50px;
    margin: 0;
    padding: 16px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 17px;
    box-sizing: border-box;
}

.required-select-quote-asterisk {
    color: red;
    position: absolute;
    right: 1rem;
    transform: translateY(-150%);
    font-size: 1.5rem;
}

.required-input-quote-asterisk {
    color: red;
    position: absolute;
    right: 0.7rem;
    transform: translateY(-150%);
    font-size: 1.5rem;
}
/*slat css*/
/* Wrapper for input fields */
.slat-input-wrapper {
    position: relative;
    display: inline-block;
    width: 104%;  /* Spacing between columns */
}

/* Wrapper for select fields */
.slat-select-wrapper {
    position: relative;
    display: inline-block;
    width: 50%; 
}

/* Input styles */
.slat-input-wrapper .text-field-slat,
.slat-select-wrapper .text-field-slat {
    border: 1px solid var(--white);
    background-color: var(--black);
    letter-spacing: 0.7px;
    width: 100%; /* Full width inside wrapper */
    height: 50px;
    margin: 0;
    padding: 16px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 17px;
    box-sizing: border-box;
}

.required-select-slat-asterisk {
      color: red;
      position: absolute;
      right: 1rem;
      transform: translateY(-150%);
      font-size: 1.5rem;
}

.required-input-slat-asterisk {
      color: red;
      position: absolute;
      right: 0.7rem;
      transform: translateY(-150%);
      font-size: 1.5rem;
}
select option {
  background-color: black; /* Background of the options */
 
}
`;

// Append the <style> element to the <head>
document.head.appendChild(style);