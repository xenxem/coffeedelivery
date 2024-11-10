import styled from "styled-components";

interface ActionCartContainerProps {
    space?: string;
}

export const AcationCartContainer = styled.div<ActionCartContainerProps>`
/* Auto layout */
display: flex;
flex-direction: row;
width: 200px;
margin-right: 10px;

gap: ${(props) => (props.space ? props.space : '12px')};



`;