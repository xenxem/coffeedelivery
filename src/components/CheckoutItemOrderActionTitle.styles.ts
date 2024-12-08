import styled from "styled-components";


export const CheckoutItemOrderTitleContainer = styled.div`
    /* Expresso Tradicional */

width: 290px;
height: 21px;

/* Text/Regular M */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 17px;
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

span {
    
    margin-left: 90px;
    
    /* R$ 9,90 */

margin: 0 auto;


/* Text/Bold M */
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */
display: flex;
align-items: center;
text-align: right;

/* Base/Text */
color: #574F4D;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

}

`;