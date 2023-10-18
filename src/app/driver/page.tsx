import React from 'react'
import { HeroDriver } from '../components/HeroDefault';
import { HowItWorksDriver } from '../components/HowItWorksSection';
import FooterCard, { Footer } from '../components/Footer';

const Page = () => {
    return (
        <div>
            <HeroDriver />
            <HowItWorksDriver />
            <FooterCard />
            <Footer />
        </div>
    )
}

export default Page;