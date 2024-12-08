import styled from "styled-components";

export const SubmitButtonContainer = styled.button`
    /* Button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 0rem;

padding: 12px 8px;
gap: 4px;

width: 368px;
height: 46px;


/* Brand / Yellow */
background: #DBAC2C;
border-radius: 6px;
border:0px;

/* Inside auto layout */
flex: none;
order: 5;
align-self: center;
flex-grow: 0;


/* Components/Button G */
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 160%;
/* or 22px */
text-transform: uppercase;

/* Base/White */
color: #FFFFFF;
font-stretch: 100;


`;