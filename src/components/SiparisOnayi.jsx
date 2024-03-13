import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.p`
  font-size: 40px;
  font-family: 'Satisfy', cursive;
  background-color: #CE2829;
  color: white;
  width: 100vw; /* Ekranın tam genişliği */
  height: 100vh; /* Ekranın tam yüksekliği */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0; /* Kenar boşluğunu sıfırla */
  padding: 0; /* Dolgu boşluğunu sıfırla */
`;

const TebriklerSiparisAlindi = styled.h2`
  font-family: 'Barlow', sans-serif; /* Barlow fontu kullanılıyor */
  font-size: 24px;
`;


const SiparisOnayi = () => {
  return (
    <StyledDiv className="order-confirmation">
      <p className="confirmation-title">Teknolojik Yemekler</p>
      <h2 className="confirmation-title">Tebrikler!</h2>
      <h2 className="confirmation-title">SİPARİŞİNİZ ALINDI</h2>
      {/* Sipariş özeti ve diğer bilgiler burada olacak */}
    </StyledDiv>
  );
};

export default SiparisOnayi;
