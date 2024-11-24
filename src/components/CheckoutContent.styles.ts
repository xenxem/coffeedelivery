import styled from "styled-components";

interface CheckoutContentSComp {
    height?: string;
}

export const CheckoutContentSComp = styled.div<CheckoutContentSComp>`
    
/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

width: 640px;
height: ${props => props.height ? props.height : `372px`};

/* Base/Card */
background: #F3F2F2;
border-radius: 6px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

margin-bottom: 15px;


`;