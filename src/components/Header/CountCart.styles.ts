import styled from "styled-components";

export const CountCartContainer = styled.div`

/* Counter */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

position: relative;
width: 20px;
height: 20px;
right: 23px;
top: -7px;


/* Brand / Yellow Dark */
background: #C47F17;
border-radius: 1000px;

/* Text/Bold S */
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 130%;
/* identical to box height, or 16px */
text-align: center;
letter-spacing: -0.06em;

/* Base/White */
color: #FFFFFF;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;
`;