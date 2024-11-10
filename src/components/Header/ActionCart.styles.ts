import styled from "styled-components";

interface ActionCartContainerProps {
    space?: string;
}

export const AcationCartContainer = styled.div<ActionCartContainerProps>`
/* Auto layout */
display: flex;
flex-direction: row;
gap: ${(props) => (props.space ? props.space : '12px')};

@media (max-width:593px){
    margin-top: 20px;
}

`;