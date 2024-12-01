import React from 'react';

function ServiceInfo({ serviceTitle, serviceMessage }) {
    return (
        <>
            <div className='service-info'>
                <h1>{serviceTitle}</h1>
                <p>{serviceMessage}</p>
            </div>
        </>
    )
}

export default ServiceInfo;