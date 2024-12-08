import styled from "styled-components";

export const ButtonContainer = styled.button`

/* Cart */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;

width: 38px;
height: 38px;

/* Brand/Yellow Light */
background: #F1E9C9;
border-radius: 6px;
border: 0px;

cursor: pointer;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
    
`


export const TrashButtonContainer = styled.button`
/* Button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 8px;
gap: 4px;

width: 130px;
height: 40px;

background: #E6E5E5;
border-radius: 6px;
border: 0px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

span {
    display: flex;
    flex-direction: row;
    padding: 0px 7px 0px 7px;
    text-transform: uppercase;

    /* Components/Button S */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    /* or 19px */
    text-transform: uppercase;

    /* Base/Text */
    color: #574F4D;


}


`;


