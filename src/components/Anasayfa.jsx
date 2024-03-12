import React from 'react';

const Anasayfa = () => {
    const handleAciktimClick = () => {
        console.log('Acıktım butonuna tıklandı!')
    };    

  return (
    <div className="home">
      <h1 className="title">Teknolojik Yemekler</h1>
      <p className="slogan">KOD ACIKTIRIR</p>
      <p className="slogan">PİZZA, DOYURUR</p>
      <button onClick={handleAciktimClick}>Acıktım</button>
      <img src="Assets/mile1-assets/home-banner.png" alt="Pizza" className="banner" />
    </div>
  );
};
export default Anasayfa;