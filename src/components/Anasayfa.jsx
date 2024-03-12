import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Satisfy', cursive; /* Satisfy fontu kullanılıyor */
`;

const Slogan = styled.p`
  font-size: 20px;
`;

const AciktimButton = styled.button`
  background-color: #FDC913; /* Sarı renk */
  color: #292929; /* Koyu Gri renk */
  border: none;
  padding: 10px 20px;
  border-radius: 25px; /* Yuvarlak kenarlar */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FAF7F2; /* Bej renk */
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  max-width: 960px; /* İstediğiniz aspect ratio'yu korumak için */
  margin: 0 auto;
`;

const BannerImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
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
      <AciktimButton onClick={handleAciktimClick}>Acıktım</AciktimButton>
      <BannerContainer>
        <BannerImage src="Assets/mile1-assets/home-banner.png" alt="Pizza" />
      </BannerContainer>
    </HomeContainer>
  );
};

export default Anasayfa;