import React from 'react';

function SidebarItem({ serviceIcon, serviceTitle }) {
  return (
    <>
      <div className='sidebar-container-services'>
        <div className='sidebar-container-services-icon'>{serviceIcon}</div>
        <div className='sidebar-container-services-title'>{serviceTitle}</div>
      </div>
    </>
  )
}

export default SidebarItem;