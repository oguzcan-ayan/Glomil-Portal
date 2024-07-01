import React from 'react'
import WelcomePortal from '../components/home/WelcomeToPortal/WelcomePortal';
import ServiceCard from '../components/home/ServiceCards/ServiceCard';
import PortalBoxes from '../components/home/PortalLiveProducts/PortalBoxes';

function HomePageLayout() {
    return (
        <>
            <WelcomePortal />
            <PortalBoxes />
            <ServiceCard />
        </>
    )
}

export default HomePageLayout;