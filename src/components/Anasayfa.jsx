import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  display: block;
  width: 100vw;
  height: 100vh;
`;
const Title = styled.h1`
  position: center;
  align-items: center;
  font-size: 40px;
  font-family: 'Satisfy', cursive; /* Satisfy fontu kullanılıyor */
`;

const Slogan = styled.p`
 position: center;
 top: 50%;
 left: 50%;
  font-size: 20px;
`;

const AciktimButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  align-items: flex-end;
  background-color: #FDC913; /* Sarı renk */
  color: #292929; /* Koyu Gri renk */
  padding: 10px 20px;
  border-radius: 25px; /* Yuvarlak kenarlar */
  font-size: 16px;
  cursor: pointer;
 

  &:hover {
    background-color: #FAF7F2; /* Bej renk */
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  max-width: 1060px; /* İstediğiniz aspect ratio'yu korumak için */
  margin: 0 auto;
`;

const BannerImage = styled.img`
  margin-left:auto;
  margin-right:auto;
  display: block;
  max-width: 100%; /* Resmin maksimum genişliği */
  max-height: 100%; /* Resmin maksimum yüksekliği */
}
`;

const Anasayfa = () => {
  const handleAciktimClick = () => {
    console.log('Acıktım butonuna tıklandı!')
  };    

  return (
    <HomeContainer>
      <Title>Teknolojik Yemekler</Title>
      <Slogan>KOD ACIKTIRIR</Slogan>
      <Slogan>PİZZA, DOYURUR</Slogan>
      <Link to="/siparisformu" >
        <AciktimButton>Acıktım</AciktimButton>
      </Link>
      <BannerContainer>
        <BannerImage src="Assets/mile1-assets/home-banner.png" alt="Pizza" />
      </BannerContainer>
    </HomeContainer>
  );
};

export default Anasayfa;