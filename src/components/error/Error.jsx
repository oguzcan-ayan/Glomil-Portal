import React from 'react';
import { Icon15, Icon16, Icon17, Icon18 } from '../globalIcons/Icons';
import { useNavigate } from 'react-router-dom';

function Error() {

  const navigate = useNavigate();

  return (
    <>
      <div className='error'>
        <div className='error-container'>
          <div className='error-container-first'>
            <img className='error-container-first-image' src="../../../public/assets/glomil-logo.png" alt="content not found" />
            <h1 className='error-container-first-title'>ERROR</h1>
            <span className='error-container-first-icon'><Icon15 /></span>
            <span className='error-container-first-page-not-found'>ERROR REASON : PAGE NOT FOUND</span>
          </div>
          <div className='error-container-second'>
            <span className='error-container-second-icon'><Icon16 /></span>
            <h2 className='error-container-second-error-type'>Error Type</h2>
            <span className='error-container-second-reason-type'>
              The content you requested cannot be found or may have been removed.
            </span>
            <div className='exit-btns-from-error-page'>
              <button onClick={() => navigate(-1)} className='go-back-btn'><Icon17 />Go Back</button>
              <button onClick={() => navigate("/")} className='go-to-home-page-btn'><Icon18 />Homepage</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error;