import React from 'react';
import styled from "styled-components";

// Styled component oluşturuluyor
const StyledDiv = styled.div`
  background-color: red;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
