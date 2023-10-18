import React from 'react';

const FeatureSection: React.FC = () => {
    return (
        <div style={{ margin: '100px 0px 50px 0px', padding: '0px 48px' }}>
            <div className="d-flex flex-column flex-md-row gap-4">
                <div className="text-center mover-detail-list">
                    <img src="/images/place.png" alt="Find nearby drivers" />
                    <h5 className="py-2">Find nearby drivers</h5>
                    <p>
                        You can effortlessly search for nearby drivers, ensuring prompt and reliable service for your moving needs.
                    </p>
                </div>
                <div className="text-center mover-detail-list">
                    <img src="/images/HandsCash.png" alt="Transparent pricing" />
                    <h5 className="py-2">Transparent pricing</h5>
                    <p>
                        You'll know exactly how much you're paying for your moving service before confirming your booking. No surprises with unexpected fees!
                    </p>
                </div>
                <div className="text-center mover-detail-list">
                    <img src="/images/Table.png" alt="Tailored options" />
                    <h5 className="py-2">Tailored options</h5>
                    <p>
                        You can choose a vehicle based on the size of your item and select the specific loading/unloading services you require.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
