import React from 'react';
import ServiceInfo from '../serviceProps/ServiceProps';
import { Icon14 } from '../../globalIcons/Icons';

function Sentiment() {

  const serviceData =
  {
    serviceTitle: "Sentiment",
    serviceMessage: "Her algoritma farklı değer sonuçları vermektedir. İlgili alana istenilen bilgileri girerek sorgulama yapabilirsiniz.",
  }

  return (
    <>
      <div className='sentiment-container'>

        <ServiceInfo serviceTitle={serviceData.serviceTitle} serviceMessage={serviceData.serviceMessage} />

        <div className='query-field'>

          <h1 className='query-field-title'>Sorgulama Alanı</h1>

          <div className='query-field-text-container'>
            <input type="text" placeholder='Enter long form text here' />
            <button type='button' className='query-btn'>Sorgulama Yap</button>
          </div>

          <div className='query-field-result'>
            <span className='query-field-result-true'><Icon14 /></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sentiment;