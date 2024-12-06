import styled from "styled-components";

export const CheckoutFormContentSComp = styled.div`

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 560px;
    height: 216px;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    input[type="text"]{
        /* Input */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;


/* Base/Input */
background: #EEEDED;
/* Base/Button */
border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
    }

    

`;