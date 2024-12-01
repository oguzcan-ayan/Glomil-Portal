import React from 'react';
import { Icon09 } from '../../globalIcons/Icons';

function PortalBox({ boxname, message, services }) {

  return (
    <>

      <div className='portal-live-box'>

        <h3>{boxname}</h3>

        <div className='portal-live-box-messages'>
          {message}

          <div>
            <a>{services}</a>
            <span className='service-arrow-content'><Icon09 className='service-arrow' /></span>
          </div>
        </div>

      </div>

    </>
  )
}

export default PortalBox;