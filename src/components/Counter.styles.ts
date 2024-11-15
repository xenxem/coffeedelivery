import styled,{css} from "styled-components";

export const CounterContainer = styled.div`
/* Counter */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;

width: 72px;
height: 38px;

/* Base/Button */
background: #E6E5E5;
border-radius: 6px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`;

interface IconProps {
    disabled?: boolean;
}
export const DecrementCounterContainer = styled.div<IconProps>`
/* Icon */


${(props) => props.disabled && 
          css`            
            pointer-events: none;
            color: gray;
          `}


width: 14px;
height: 14px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

export const IncrementCounterContainer = styled.div<IconProps>`

/* Icon */

width: 14px;
height: 14px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;