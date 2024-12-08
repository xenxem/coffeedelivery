import styled from "styled-components";


export const CheckoutItemOrderContainer = styled.div`
    
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

    padding: 8px 4px;
    gap: 59px;

    width: 368px;
    height: 80px;

    /* Base/Card */
    background: #F3F2F2;

    /* Inside auto layout */
    flex: none;    
    align-self: stretch;
    flex-grow: 0;

    margin-top: 10px;
    margin-bottom: 10px;

`;

export const CheckoutItemOrderContentContainer = styled.div`
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    
    border-bottom: 1px solid;
    border-color:#D9D9D9;
    
    padding: 0px;        
    gap: 20px;

    margin: 0 auto;
    width: 368px;
    height: 80px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const LineDivideStyled = styled.hr`

    /* divider */

    width: 368px;
    height: 0px;

    /* Base/Button */
    border: 1px solid #E6E5E5;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const LineDiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px 20px 0px;
    ;
`;