import React from 'react';

function ServiceCards({ serviceImage, serviceHeader, serviceMessage, serviceButton, backgroundColor, backgroundColorforIcon }) {

    const backgroundColors = {
        ...backgroundColor,
    }

    const backgroundColorforIcons = {
        ...backgroundColorforIcon,
    }

    return (
        <>
            <div className='service-cards-content' style={backgroundColors}>

                <div className='service-cards-content-image' style={backgroundColorforIcons}>{serviceImage}</div>

                <h2 className='service-cards-content-header'>{serviceHeader}</h2>

                <p className='service-cards-content-message'>{serviceMessage}</p>

                <button className='service-cards-content-btn'>{serviceButton}</button>

            </div>

        </>
    )
}

export default ServiceCards;