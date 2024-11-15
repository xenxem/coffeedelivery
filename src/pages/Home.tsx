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
import Button from "../components/Button";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import Counter from "../components/Counter";
import DecrementCounter from "../components/DecrementCounter";
import IncrementCounter from "../components/IncrementCounter";
import { ActionCounterContainer } from "../components/ActionCart.styles";
import Price from "../components/Price";
import Amount from "../components/Amount";
import DollarSign from "../components/DollarSign";


export default function Home() {


    const coffeesContext = useContext(CoffeesContext);
    const { coffees, incrementAmount, decrementAmount, accumulator } = coffeesContext;

    function formatNumber(value: number): string {
        return value.toFixed(2).replace(".", ",");
    }

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
                                {element.tags.map((tag, index) => <Tag key={`${element.id}${index}`}><TagTitle title={tag} /></Tag>)}
                            </TagsGroup>
                            <CoffeeName title={element.title} />
                            <CoffeeDescription subtitle={element.subtitle} />

                            <ActionCounterContainer>
                                <DollarSign cifrao={'R$'} /><Price value={formatNumber(element.price)} />
                                <Counter>
                                    <DecrementCounter disabled={element.amount === 0} icon={<Minus />} handleDecrement={() => decrementAmount(element.id)} />
                                    <Amount value={element.amount} />
                                    <IncrementCounter icon={<Plus />} handleIncrement={() => incrementAmount(element.id)} />
                                </Counter>
                                <Button title={'Atualizar carrinho'} handleCartClick={() => accumulator()} icon={<ShoppingCart color="#4B2995" size={22} weight="fill" />} />
                            </ActionCounterContainer>
                        </CoffeeCard>)
                    })
                }
            </CardList>
        </HomeContainer>
    )
}