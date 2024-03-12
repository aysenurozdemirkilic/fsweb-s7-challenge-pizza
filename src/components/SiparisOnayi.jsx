import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
background-color: darkred; /* Koyu kırmızı renk */
color: white; /* Yazı rengi beyaz olacak */
height: 100%;
width: 100%;
display: flex;
flex-direction: column; /* İçeriklerin alt alta gelmesini sağlar */
justify-content: center; /* İçeriklerin dikeyde ortalanması */
align-items: center; /* İçeriklerin yatayda ortalanması */
margin-top: 0;
fontsize: 20px;
`;

const SiparisOnayi = () => {
  return (
    <StyledDiv className="order-confirmation">
      <h2 className="confirmation-title">Teknolojik Yemekler</h2>
      <h2 className="confirmation-title">Tebrikler!</h2>
      <h2 className="confirmation-title">SİPARİŞİNİZ ALINDI</h2>
      {/* Sipariş özeti ve diğer bilgiler burada olacak */}
    </StyledDiv>
  );
};

export default SiparisOnayi;
