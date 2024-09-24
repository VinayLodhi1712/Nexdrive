import React, { useState } from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        { question: "What is NexDrive?", answer: "NexDrive is a cutting-edge dashcam system designed to enhance driving safety by recording your journeys with high-quality footage." },
        { question: "How does the dashcam record video?", answer: "The NexDrive dashcam automatically starts recording when your car is turned on and continuously saves footage to its internal storage." },
        { question: "Can I view footage on my mobile?", answer: "Yes, NexDrive is compatible with mobile devices, allowing you to view your dashcam recordings in real time through the app." },
        { question: "What is the storage capacity?", answer: "The NexDrive dashcam supports up to 256GB of storage via SD card, ensuring plenty of space for your footage." },
        { question: "How do I install NexDrive?", answer: "Installation is simple. The dashcam comes with a suction mount and a power cable that connects to your car’s cigarette lighter port." },
        { question: "Is NexDrive weatherproof?", answer: "Yes, the NexDrive dashcam is designed to withstand various weather conditions, making it ideal for all seasons." },
        { question: "Does the dashcam work at night?", answer: "Yes, the NexDrive dashcam features infrared night vision to capture clear footage even in low-light conditions." },
        { question: "Can I share footage from my NexDrive?", answer: "Absolutely. The footage can be easily exported to your smartphone or computer for sharing." },
        { question: "What’s the warranty period for NexDrive?", answer: "NexDrive offers a one-year warranty covering defects in materials and workmanship." },
        { question: "Can I upgrade my NexDrive software?", answer: "Yes, NexDrive supports over-the-air updates, ensuring you always have the latest features." }
    ];

    return (
        <div className="accordion accordion-flush" id="faqAccordion">
            {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            aria-expanded={activeIndex === index ? 'true' : 'false'}
                            aria-controls={`collapse${index}`}
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
