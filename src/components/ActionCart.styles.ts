import styled from "styled-components";

interface ActionCartContainerProps {
    space?: string;
}

export const ActionCartContainer = styled.div<ActionCartContainerProps>`
/* Auto layout */
display: flex;
flex-direction: row;
width: 200px;
margin-right: 10px;

gap: ${(props) => (props.space ? props.space : '12px')};


`;

export const ActionCounterContainer = styled(ActionCartContainer)<ActionCartContainerProps>`
/* Auto layout */
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
padding-top: 60px;
margin: 0 auto;

gap: ${(props) => (props.space ? props.space : '12px')};



`;