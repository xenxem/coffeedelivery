import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";


export const TransactionTypeContainer = styled(RadioGroup.Root)`
    
/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 12px;

width: 560px;
height: 51px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

`;


export const TransactionTypeButton = styled(RadioGroup.Item)`
    
/* Select */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 12px;

width: 178.67px;
height: 51px;

/* Base/Button */
background: #E6E5E5;
border-radius: 6px;
border: 0px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;


/* Components/Button S */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 160%;
/* or 19px */
text-transform: uppercase;

/* Base/Text */
color: #574F4D;


&[data-state='checked']{
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.black};
}
`;
