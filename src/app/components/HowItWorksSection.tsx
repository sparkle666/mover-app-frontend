import React from 'react';
import Link from 'next/link';

const HowItWorksSection: React.FC = () => {
    return (
        <div style={{ padding: '0px 48px' }}>
            <h3 className="fw-bold">How it Works</h3>
            <p>Moving made simple - just three easy steps!</p>
            <div className="d-flex flex-column flex-md-row gap-3">
                <div>
                    <div className="mover-hero-panel">
                        <h5 className="fw-bold">Set Your Journey</h5>
                        <p>
                            Enter your pick-up and drop-off locations to kick things off. You can choose between hourly or fixed pricing, and let us know if you need help with loading, unloading, or both. We're here to make it easy for you!
                        </p>
                    </div>
                    <div className="mover-hero-panel">
                        <h5 className="fw-bold">Tell us about your items</h5>
                        <p>
                            How many large items do you need to move? Any special details, like stairs or specific handling instructions? Let us know, and we'll make sure everything goes smoothly.
                        </p>
                    </div>
                    <div className="mover-hero-panel">
                        <h5 className="fw-bold">Choose Your Mover</h5>
                        <p>
                            Once we process your request, you'll see a list of verified, reliable drivers. Compare prices, distances, and even take a peek at their car. Choose the driver that feels just right for you, and you'll be on your way in no time.
                        </p>
                    </div>
                    <div>
                        <Link href="/request_mover" className="mover-btn mover-btn-sm">
                            REQUEST A MOVER
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/images/Iphone1.png" alt="iphone mover image" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
