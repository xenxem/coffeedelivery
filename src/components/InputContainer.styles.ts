import styled from "styled-components";

export const InputContainerSComp = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    
    input[type="text"]{

        /* Input */
        box-sizing: border-box;

        /* Auto layout */
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        gap: 4px;

        /* Base/Input */
        background: #EEEDED;

        /* Base/Button */
        border: 1px solid #E6E5E5;
        border-radius: 4px;

        /* Text/Regular S */
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        /* Base/Label */
        color: #8D8686;

        /* Inside auto layout */
        flex: 1;
        order: 0;
        flex-grow: 1;

    }

    input[type="number"]{

/* Input */
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;

/* Base/Input */
background: #EEEDED;

/* Base/Button */
border: 1px solid #E6E5E5;
border-radius: 4px;

/* Text/Regular S */
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;

/* Base/Label */
color: #8D8686;

/* Inside auto layout */
flex: 1;
order: 0;
flex-grow: 1;

}
`;