import styled from "styled-components";

interface CoffeeImageCardProps {
    $imageCard: string;
}

export const CoffeeImageCardContainer = styled.div<CoffeeImageCardProps>`
    /* Coffee */

    position: relative;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px/2);
    top: -20px;
    background: url(${props => props.$imageCard});

`;