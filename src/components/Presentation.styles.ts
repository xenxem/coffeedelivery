import styled from "styled-components";


export const PresentationContainer = styled.div`
    display: flex;    
    flex-direction: row;            
    margin: 0 auto;
    width:90rem;
    height: 34rem;    
    gap: 4px;
    float: none;
    
       
`;

export const PresentationColumn = styled.div`
    display: flex;
    flex-direction: column;        
    
    flex: 1;
`;

export const PresentationTitleContainer = styled.div`
    display: flex;
    flex-direction: column;            
`;


export const PresentationTextTitle = styled.p`
      /* Encontre o café perfeito para qualquer hora do dia */

/* Encontre o café perfeito para qualquer hora do dia */

width: 588px;
height: 124px;

/* Title/Title XL */
font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 130%;
/* or 62px */

/* Base/Title */
color: #272221;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
  
`;

export const PresentationTextSubtitle = styled.p`
    /* Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora */

width: 588px;
height: 52px;
margin-top: 10px;
/* Text/Regular L */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
/* or 26px */

/* Base/Subtitle */
color: #403937;
font-stretch: 100;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

`;

export const PresentationTextSubtitleList = styled.p`
    /* Items */

position: absolute;
width: 567px;
height: 84px;
left: calc(50% - 567px/2 - 276.5px);
top: calc(50% - 84px/2 + 122px);



`;




export const CoffeeImage = styled.div`
    /* Imagem */

position: absolute;
width: 476px;
height: 360px;

background: url(Imagem.svg);

`;

export const ItemsImage = styled.div`
/* Imagem */

margin-top: 60px;
width: 100%;
height: 100%;

background: url(Items.png) no-repeat;

`;

