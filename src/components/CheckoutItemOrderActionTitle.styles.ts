import styled from "styled-components";


export const CheckoutItemOrderTitleContainer = styled.div`
    /* Expresso Tradicional */

width: 290px;
height: 21px;

display: flex;
flex-direction:row;
justify-content: space-between;

`;

export const TitleItemChekoutContainer = styled.div`
    /* Expresso Tradicional */

width: 148px;
height: 21px;

/* Text/Regular M */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */
display: flex;
align-items: center;

/* Base/Subtitle */
color: #403937;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


`;

export const PriceItemCheckoutContainer = styled.div`
/* R$ 9,90 */


width: 120px;
height: 21px;

/* Text/Bold M */
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */
display: flex;
flex-direction: row;
justify-content: flex-end;



/* Base/Text */
color: #574F4D;



`;