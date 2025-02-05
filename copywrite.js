
    // Locate the footer section
    const footerSection = document.querySelector('section.footer');
    if (footerSection) {
        // Locate the specific element containing the copyright text
        const copyrightElement = footerSection.querySelector('div.small-text.gray.smaller');
        if (copyrightElement) {
            // Insert the current year after 'copyright plae'
            const originalText = copyrightElement.textContent;
            const updatedText = originalText.replace(
                'copyright plae',
                `copyright plae ${new Date().getFullYear()}`
            );
            copyrightElement.textContent = updatedText;
        } else {
            console.log("No element found with class 'small-text gray smaller' containing the copyright text.");
        }
    } else {
        console.log("Footer section not found.");
    }