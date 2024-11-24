import styled from "styled-components";


export const InputTextSComp = styled.input`
/* Input */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;

width: ${props => props.width};
height: 42px;

/* Base/Input */
background: #EEEDED;
/* Base/Button */
border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


`;