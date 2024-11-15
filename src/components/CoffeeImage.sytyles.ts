import styled from "styled-components";

interface CoffeeImageProps {
    coffeeImage: string;
}

export const CooffeeImageContainer = styled.div<CoffeeImageProps>`
 /* Coffee */
width: 120px;
height: 120px;
background: url(${(props)=> props.coffeeImage}) no-repeat;

`;