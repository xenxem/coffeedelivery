import styled from "styled-components";


export const HeaderContainer = styled.div`

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 32px 160px;
flex: 1;

/* Base/Background */
background: #FAFAFA;

@media (max-width:593px){
    flex-direction: column;
}    
`;