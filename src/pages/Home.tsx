import CardList from "../components/CardList";
import CardTitleList from "../components/CardTitleList";
import CoffeeCard from "../components/CoffeeCard";
import Tag from "../components/Tag";
import { CoffeeImageCardContainer } from "../components/CoffeeImageCard.styles";
import { HomeContainer } from "../components/Container.styles";
import Presentation from "../components/Presentation";
import { CoffeeImage, ItemsImage, PresentationColumn, PresentationTextSubtitle, PresentationTextTitle, PresentationTitleContainer } from "../components/Presentation.styles";
import TagTitle from "../components/TagTitle";
import TagsGroup from "../components/TagsGroup";
import CoffeeName from "../components/CoffeeName";
import CoffeeDescription from "../components/CoffeeDescription";
import { useContext } from "react";
import { CoffeesContext } from "../Contexts/CoffeesContext";


export default function Home(){

    const coffeesContext = useContext(CoffeesContext);    
    const {coffees, incrementAmount} = coffeesContext;    
    return (
        <HomeContainer>
            <Presentation>
                <PresentationColumn>
                    <PresentationTitleContainer>
                        <PresentationTextTitle>
                            Encontre o café perfeito para qualquer hora do dia
                        </PresentationTextTitle>
                    </PresentationTitleContainer>
                    <PresentationTitleContainer>
                        <PresentationTextSubtitle>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora 
                        </PresentationTextSubtitle>                  
                    </PresentationTitleContainer>
                    <ItemsImage />
                <CardTitleList>Nossos cafés</CardTitleList>
                </PresentationColumn>
                <PresentationColumn>
                    <CoffeeImage />                
                </PresentationColumn>
            </Presentation>   
            <CardList>
                {
                    coffees.map(element => {
                    return (<CoffeeCard key={element.id}>
                        <CoffeeImageCardContainer $imageCard={element.image} />                     
                        <TagsGroup>
                            {element.tags.map((tag,index) => <Tag key={`${element.id}${index}`}><TagTitle title={tag} /></Tag>)}
                        </TagsGroup>                               
                        <CoffeeName title={element.title} /> 
                        <CoffeeDescription subtitle={element.subtitle} />                           
                        <div><button onClick={()=>incrementAmount(element.id)}>add</button></div>                        
                    </CoffeeCard>)
                    })
                }    
            </CardList>
      </HomeContainer>
    )
}