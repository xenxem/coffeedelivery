import styled from "styled-components";

export const BaseCard = styled.div`    
    /* Base/Card */
    position: relative;
    background: #F3F2F2;
    border-radius: 6px 36px;

`;

export const CoffeeCardContainer = styled(BaseCard)`   
    display: flex;
    flex-direction: column;       
    width: 17.25rem;
    height: 19.38rem;    
`;

export const CoffeeCardCheckoutContainer = styled(BaseCard)`   
    display: flex;
    flex-direction: column;    
    justify-content:flex-start;
    width: 28rem;
    height: 31.13rem;    
    padding: 0px 40px 0px 40px;
    flex:1;

`;

