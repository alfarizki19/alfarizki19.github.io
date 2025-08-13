// Accordion Type A JavaScript Controller - Versi Sederhana
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to close all accordions
    function closeAllAccordions() {
        const allContentAreas = document.querySelectorAll('.itemsAccordionTypeAContainerContentArea');
        allContentAreas.forEach(content => {
            content.style.display = 'none';
        });
    }
    
    // Function to toggle specific accordion
    function toggleAccordion(accordionElement) {
        const container = accordionElement.closest('.itemsAccordionTypeAContainerDefault, .itemsAccordionTypeAContainerActive');
        const contentArea = container.querySelector('.itemsAccordionTypeAContainerContentArea');
        
        const isCurrentlyOpen = contentArea.style.display === 'block';
        
        if (isCurrentlyOpen) {
            // Close this accordion
            contentArea.style.display = 'none';
            console.log('Accordion closed');
        } else {
            // Close all other accordions first
            closeAllAccordions();
            
            // Open this accordion
            contentArea.style.display = 'block';
            console.log('Accordion opened');
        }
    }
    
    // Add click event listeners to all accordion buttons
    function initializeAccordions() {
        const accordionButtons = document.querySelectorAll('.itemsAccordionTypeAButton');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                toggleAccordion(this);
            });
        });
        
        console.log(`Initialized ${accordionButtons.length} accordion(s)`);
    }
    
    // Initialize accordions
    initializeAccordions();
    
    console.log('Accordion Type A Controller initialized');
});