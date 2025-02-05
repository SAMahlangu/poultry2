import React, { useRef } from 'react';
import './Butcher.css'; // Import the CSS file
import butcher from '../assets/butcher.png';
// import step2 from '../assets/step2.png';
// import step3 from '../assets/step3.png';
// import step4 from '../assets/step4.png';
// import step5 from '../assets/step5.png';
// import step6 from '../assets/step6.png';
// import step7 from '../assets/step7.png';
// import step8 from '../assets/step8.png';
// import step9 from '../assets/step9.png';
// import step10 from '../assets/step10.png';

function ChickenButchery() {
    const stepRefs = Array.from({ length: 10 }, () => useRef(null));

    // Scroll handlers for each section
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll handler to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="butchery-container">
            <h1 className="butchery-title">How to Butcher a Chicken</h1>
            
            <ol className="butchery-list">
                {[ 'Gather necessary tools', 'Prepare your workspace', 'Start with a whole chicken', 'Remove the legs', 'Separate the wings', 'Remove the backbone', 'Split the chicken in half', 'Trim excess fat and remove giblets', 'Rinse and dry the chicken', 'Store or cook the chicken'].map((step, index) => (
                    <li key={index} onClick={() => scrollToSection(stepRefs[index])} style={{ cursor: 'pointer' }}>
                        Step {index + 1} - {step}
                    </li>
                ))}
            </ol>

            {stepRefs.map((ref, index) => (
                <div key={index} ref={ref} className="butchery-section">
                    <h2>Step {index + 1} - {[ 'Gather necessary tools', 'Prepare your workspace', 'Start with a whole chicken', 'Remove the legs', 'Separate the wings', 'Remove the backbone', 'Split the chicken in half', 'Trim excess fat and remove giblets', 'Rinse and dry the chicken', 'Store or cook the chicken'][index]}</h2>
                    {/* <img src={[step1, step2, step3, step4, step5, step6, step7, step8, step9, step10][index]} alt={`Step ${index + 1}`} className="butchery-image" /> */}
                    <p>{[
                        'Before starting, make sure you have a cutting board, sharp knife or poultry shears, clean work surface, bowl, paper towels, apron, and gloves.',
                        'Sanitize your workspace and keep tools clean to avoid contamination.',
                        'Place the whole chicken breast-side up on a cutting board.',
                        'Hold the leg and cut through the joint, then remove the foot. Repeat for the other leg.',
                        'Hold the wing tip, cut through the joint, and remove the wing. Repeat for the other side.',
                        'Place the chicken breast-side down and cut along the backbone to remove it.',
                        'Flip the chicken, press down on the breastbone to flatten, then cut down the center to split it.',
                        'Trim excess fat and remove giblets if desired.',
                        'Rinse the chicken under cold water and pat dry.',
                        'Store in airtight containers in the fridge or freeze for longer storage, or cook immediately.'
                    ][index]}</p>
                    
                    
                </div>
                
            ))}
            <p>NB!!! Always prioritize food safety and hygiene. If you are new to chicken butchery, get advice from an experienced butcher or check reliable sources for tips.</p>
            <div className="incubation-image-container">
                        <img src={butcher} alt="butcher" className="incubation-structure-image" />
                        <p></p>
                    </div>
            {/* Scroll Up Button */}
            <button className="scroll-up-button" onClick={scrollToTop}>
                Scroll to Top
            </button>
        </div>
    );
}

export default ChickenButchery;
