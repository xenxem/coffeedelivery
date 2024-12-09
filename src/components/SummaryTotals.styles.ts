import styled from "styled-components";

export const SummaryTotalsStyled = styled.div`
    /* Frame 1 */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-bottom: 25px;
padding: 0px;
gap: 12px;

width: 368px;
height: 92px;


/* Inside auto layout */
flex: none;
order: 4;
align-self: stretch;
flex-grow: 0;


`;

export const SummaryItemsStyled = styled.div`
    /* Frame 2 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;

padding: 0px;
gap: 8px;

width: 368px;
height: 21px;





`;

export const SummaryDescriptionItemStyled = styled.div`
    /* Total de itens */
width: 84px;
height: 18px;

/* Text/Regular S */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
/* or 18px */
display: flex;

/* Base/Text */
color: #574F4D;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

span {
    font-weight: 600;
    font-size: 1.3rem;
}


`;

export const SummaryItemPriceStyled = styled.div`
    /* R$ 29,70 */


width: 200px;
height: 21px;

/* Text/Regular M */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */
display: flex;
align-items: center;
text-align: right;

/* Base/Text */
color: #574F4D;


/* Inside auto layout */
flex: 0;

span {
    font-weight: 600;
    font-size: 1.3rem;
}

`;