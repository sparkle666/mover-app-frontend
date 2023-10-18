import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const HeroDefault: React.FC = () => {
    return (
        <div className="d-flex flex-column flex-lg-row gap-4" style={{ padding: '100px 48px 0px 48px' }}>
            <div className="animate__animated animate__fadeInLeft">
                <p className="mover-hero">
                    Need help <span className="mover-hero-span">moving</span> large items? We've got you covered.
                </p>
                <div>
                    <Link href="/request_mover" className="mover-btn mover-btn-sm">
                        REQUEST A MOVER
                    </Link>
                    <Link href="/home_driver" className="mover-btn mover-btn-sm color-primary-50">
                        BECOME A MOVER
                    </Link>
                </div>
            </div>
            <div className="mover-truck">
                <img src="/images/truck.png" alt="Truck Image" className="img-fluid" />
            </div>
        </div>
    )
}

export default HeroDefault;

export const HeroDriver = () => {
    return (
        <div className="d-flex flex-column flex-lg-row gap-4" style={{ padding: "100px 48px 0px 48px" }}>
            <div className="animate__animated animate__fadeInLeft">
                <p className="mover-hero">Start
                    <span className="mover-hero-span"> earning</span> while making moving easy!
                </p>
                <div>
                    <Link href="/request-mover"
                        className="mover-btn mover-btn-sm">BECOME A MOVER</Link>
                </div>
            </div>
            <div>
                <Image src={'/images/Moneyboxes.png'} alt="Truck Image" className="img-fluid"
                    width={800} height={800} />
                {/* <img src="/images/Moneyboxes.png" alt="Truck Image" className="img-fluid" /> */}
            </div>
        </div>
    )
}