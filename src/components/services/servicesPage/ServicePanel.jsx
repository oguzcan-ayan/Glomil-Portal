import React from 'react';
import ServiceCards from '../../home/ServiceCards/ServiceCardProps';
import { Icon10, Icon11, Icon12, Icon13, Icon09 } from '../../globalIcons/Icons';
import { NavLink } from 'react-router-dom';

function ServicePanel() {

  const sentimentAnalyze = 'Sentiment Analiz Sorgu Hizmeti';
  const bots = 'Bots Sorgu Hizmeti';
  const translateService = 'Translate Hizmeti';
  const aspectBase = 'Aspect Base Sentiment';
  const serviceMessage = 'Our mission is to unleash the potential in every team.';
  const serviceButton = 'Ücretsiz Başlat';
  const servicesExplore = "Hizmetleri Keşfedin";

  const backgroundColorforIcon = {
    backgroundColor: '#0252CC',
  }

  const backgroundColor = {
    backgroundColor: 'white',
  }

  return (
    <>
      <div className='services'>
        <div className='services-content'>
          <h1 className='services-content-title'>Ücretsiz Paketlere Göz Atın</h1>
          <p className='services-content-info'>Temeller, ilgi çekici düzenler ve uçtan uca kullanıcı deneyimleri oluşturmak için gereken yazılımsal öğelerdir.</p>
          <div className='services-content-explore'>
            <a>{servicesExplore}</a>
            <span><Icon09 className='service-arrow' /></span>
          </div>
        </div>
        <div className='services-container'>
          <div className='services-container-cards'>
            <button className='sentiment-card'>
              <NavLink to="/services/text-analysis/sentiment"><ServiceCards serviceImage={<Icon12 />} serviceHeader={sentimentAnalyze} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} /></NavLink>
            </button>
            <button className='bots-card'>
              <NavLink to="/services/bots"><ServiceCards serviceImage={<Icon11 />} serviceHeader={bots} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} /></NavLink>
            </button>
            <button className='translate-card'>
              <ServiceCards serviceImage={<Icon10 />} serviceHeader={translateService} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} />
            </button>
            <button className='aspect-base-card'>
              <ServiceCards serviceImage={<Icon13 />} serviceHeader={aspectBase} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} backgroundColorforIcon={backgroundColorforIcon} />
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default ServicePanel;

{/*      <div className='team-select-box'>
          <label>Proje Üzerinde Çalışacak olan Takımı Seçiniz</label>
          <Select
            className="basic-single-select-box"
            placeholder="Takım Seçiniz..."
            isClearable={isClearable}
            isSearchable={isSearchable}
            name="teamSelect"
            options={teamOptions}
            value={teamOptions.find(option => option.value === newProject.team_id)}
            onChange={(selectedOption) => setNewProject({ ...newProject, team_id: selectedOption ? selectedOption.value : null })}
          />
        </div> */}