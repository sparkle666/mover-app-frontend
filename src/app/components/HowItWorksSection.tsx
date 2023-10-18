import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


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


export const HowItWorksDriver = () => {
    return (
        <div style={{ padding: '0px 48px' }}>
            <h3 className="fw-bold">How it Works</h3>
            <p>Start your journey to earning while helping others move!</p>
            <div className="d-flex flex-column flex-md-row gap-3">
                <div>
                    <div className="mover-hero-panel">
                        <h5 className="fw-bold">Apply and Verify Your Information</h5>
                        <p>
                            Fill out a quick application and share some necessary documents like your driver's license and insurance. We just want to make sure you're all set to help others move.
                        </p>
                    </div>
                    <div className="mover-hero-panel">
                        <h5 className="fw-bold">Set Your Availability</h5>
                        <p>
                            Once you're verified, you're good to start accepting rides! Every time you log in, let us know how many items you're up for moving and what help you can provide.
                        </p>
                    </div>
                    <div className="mover-hero-panel">
                        <h5 className="fw-bold">Get paid!</h5>
                        <p>
                            After completing a ride, the user will send you the payment via Venmo or PayPal. That's it! You're all set to make someone's move a breeze.
                        </p>
                    </div>
                    <div>
                        <Link href="/your-request-mover-url" className="mover-btn mover-btn-sm">
                            SIGN UP
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src={"/images/Iphone2.png"} alt={"iphone mover image"}
                        width={500} height={300} className="img-fluid" />
                </div>
            </div>
        </div>
    );
};


