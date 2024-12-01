import React from 'react';
import ServiceCards from './ServiceCardProps';
import { Icon10, Icon12, Icon13, Icon11 } from '../../globalIcons/Icons';
import { NavLink } from 'react-router-dom';

function ServiceCard() {

  const sentimentAnalyze = 'Sentiment Analiz Sorgu Hizmeti';
  const bots = 'Bots Sorgu Hizmeti';
  const translateService = 'Translate Hizmeti';
  const aspectBase = 'Aspect Base Sentiment';
  const serviceMessage = 'Our mission is to unleash the potential in every team.';
  const serviceButton = 'Ücretsiz Başlat';

  const backgroundColor = {
    backgroundColor: 'white',
  }

  const backgroundColorforIcon = {
    backgroundColor: '#0252CC',
  }

  return (
    <>
      <div className='portal-services'>

        <div className='portal-services-content'>

          <h2 className='portal-services-content-title'>Portal Live Products</h2>

          <p className='portal-services-content-info'>Basit, sezgisel ve güzel deneyimler oluşturmak için Portal'ın evrensel yazılım dilini kullanın.</p>

          <div className='service-cards'>
            <button className='sentiment-card'>
              <NavLink to="/services/text-analysis/sentiment">
                <ServiceCards serviceImage={<Icon12 />} serviceHeader={sentimentAnalyze} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} />
              </NavLink>
            </button>

            <button className='bots-card'>
              <NavLink to="/services/bots">
                <ServiceCards serviceImage={<Icon11 />} serviceHeader={bots} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} />
              </NavLink>
            </button>

            <button className='translate-card'>
              <NavLink to="/services/translate">
                <ServiceCards serviceImage={<Icon10 />} serviceHeader={translateService} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} />
              </NavLink>
            </button>

            <button className='aspect-base-card'>
              <NavLink to="/services/aspect-base">
                <ServiceCards serviceImage={<Icon13 />} serviceHeader={aspectBase} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} />
              </NavLink>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default ServiceCard;