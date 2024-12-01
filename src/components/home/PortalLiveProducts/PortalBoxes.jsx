import React from 'react'
import PortalBox from './PortalBoxesProps';

function PortalBoxes() {

  const blockExplorer = "Block Explorer";
  const dataIndex = "Data Index";
  const bridge = "Bridge";
  const portalSentiment = "Portal Sentiment";
  const portalNetwork = "Portal Network";
  const botsExplorer = "Bots Explorer";
  const translateEv = "Translate EV";
  const messagePortal = "Search for real-time and historical information about the blockchain.";
  const servicesPortal = "Hizmetleri Keşfedin";

  return (
    <>
      <div className='portal-live-products'>

        <h2 className='portal-live-products-header'>Portal Live Products</h2>

        <div className='portal-live-products-info'>Basit, sezgisel ve güzel deneyimler oluşturmak için Portal'ın evrensel yazılım dilini kullanın.</div>

        <div className='portal-live-products-boxes'>

          <PortalBox boxname={blockExplorer} message={messagePortal} services={servicesPortal} />
          <PortalBox boxname={dataIndex} message={messagePortal} services={servicesPortal} />
          <PortalBox boxname={bridge} message={messagePortal} services={servicesPortal} />
          <PortalBox boxname={portalSentiment} message={messagePortal} services={servicesPortal} />
          <PortalBox boxname={portalNetwork} message={messagePortal} services={servicesPortal} />
          <PortalBox boxname={botsExplorer} message={messagePortal} services={servicesPortal} />
          <PortalBox boxname={translateEv} message={messagePortal} services={servicesPortal} />

        </div>
        
      </div>

    </>
  )
}

export default PortalBoxes;