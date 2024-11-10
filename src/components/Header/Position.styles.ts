import styled from "styled-components";

export const PositionContainer = styled.div`

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 12px;

width: 160px;
height: 38px;

/* Text/Regular S */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;

/* Brand/Purple Dark */
color: #4B2995;

/* Brand/Purple Light */
background: #EBE5F9;
border-radius: 6px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`;