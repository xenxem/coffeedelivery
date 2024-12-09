import styled from "styled-components";

export const ConfirmedOrderTitleStyled = styled.p`
    /* Uhu! Pedido confirmado */

position: absolute;
width: 353px;
height: 42px;
left: calc(50% - 353px/2 - 383.5px);
top: 184px;

/* Title/Title L */
font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 32px;
line-height: 130%;
/* identical to box height, or 42px */

/* Brand / Yellow Dark */
color: #C47F17;
`;

export const ConfirmedOrderSubTitleStyled = styled.p`
    /* Agora é só aguardar que logo o café chegará até você */

position: absolute;
width: 552px;
height: 26px;
left: calc(50% - 552px/2 - 284px);
top: 230px;

/* Text/Regular L */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
/* identical to box height, or 26px */

/* Base/Subtitle */
color: #403937;
font-stretch: 100;
`;


export const ConfirmedOrderFrameStyled = styled.div`
/* Order info */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

position: absolute;
width: 526px;
height: 270px;
left: calc(50% - 526px/2 - 297px);
top: 296px;

 &::before{
    content: ""; /* Elemento vazio para simular a borda */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  
  border-radius: 6px 36px; /* Mesmo raio da borda principal */
  background: linear-gradient(to right, #DBAC2C, #8047F8); /* Gradiente para a borda */
  padding: 1px; /* Largura da borda */
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  
 }
 
`;

export const ConfirmedContentStyled = styled.div`
    display: flex;
    flex-direction: row;     
    gap: 8px;

    svg {
        position: relative;
        top: 170px;
        left:calc(50% - 492px/2 + 297px);
    }
 `;
