import CheckoutContainer from "../components/CheckoutContainer";
import CheckoutContent from "../components/CheckoutContent";
import CheckoutFrame1 from "../components/CheckoutFrame1";
import CheckoutFrame2 from "../components/CheckoutFrame2";
import CheckoutTitle from "../components/CheckoutTitle";
import CheckoutTitle2 from "../components/CheckoutTitle2";
import CheckoutTitleContent from "../components/CheckoutTitleContent";
import CheckoutTitleInner from "../components/CheckoutTitleInner";

import { MapPin, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus } from 'phosphor-react';
import CheckoutTitleInnerText from "../components/CheckoutTitleInnerText";
import CheckoutTitleInnerText2 from "../components/CheckoutTitleInnerText2";


import InputContainer from "../components/InputContainer";
import OptionalContainer from "../components/OptionalContainer";

import { TransactionTypeButton, TransactionTypeContainer } from "../components/TransactionTypeContainer.styles";

import { Controller, useForm } from "react-hook-form";
import CheckoutFormContent from "../components/CheckoutFormContent";
import SubmitButton from "../components/SubmitButton";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext, useEffect, useState } from "react";

import { CoffeeCardCheckoutContainer } from "../components/CoffeeCard.styles";
import CheckoutItemOrder from "../components/CheckoutItemOrder";
import CheckoutItemOrderContent from "../components/CheckoutItemOrderContent";
import { CoffeesContext } from "../Contexts/CoffeesContext";

import CheckoutItemOrderContentAction from "../components/CheckoutItemOrderContentAction";
import { CheckoutItemOrderTitleContainer, PriceItemCheckoutContainer, TitleItemChekoutContainer } from "../components/CheckoutItemOrderActionTitle.styles";
import Counter from "../components/Counter";
import DecrementCounter from "../components/DecrementCounter";
import Amount from "../components/Amount";
import IncrementCounter from "../components/IncrementCounter";
import { TrashButton } from "../components/Button";
import { CheckoutActionContentContainer } from "../components/CheckoutActionContent.styles";
import { CoffeeImageCheckoutContainer } from "../components/CoffeeImageCard.styles";

import { SummaryDescriptionItemStyled, SummaryItemPriceStyled, SummaryItemsStyled, SummaryTotalsStyled } from "../components/SummaryTotals.styles";

import api from "../api/api";
import { useNavigate } from "react-router-dom";

const deliveryFormValidationSchema = zod.object({
    cep: zod.string().min(9, 'Informe o CEP no formato xxxxx-xxx'),
    logradouro: zod.string().min(1, 'Informe o nome da rua'),
    complemento: zod.string().optional(),
    numero: zod.coerce.number().min(1, 'Informe o número'),
    bairro: zod.string().min(1, 'Informe  bairro'),
    localidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(2, 'Informe a UF'),
    pagamentoTipo: zod.enum(['crédito', 'débito', 'dinheiro'])
});



export type DeliveryFormData = zod.infer<typeof deliveryFormValidationSchema>;

interface AddressData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export default function Checkout() {



    const [valorPorQuantidade, setValorPorQuantidade] = useState<number>(0);
    const contextCoffee = useContext(CoffeesContext);
    const {
        coffees,
        decrementAmount,
        incrementAmount,
        removeItemFromCart,
        totalCost,
        randomValue,
        handleAddress

    } = contextCoffee;

    const navigate = useNavigate();

    function handleClick() {
        navigate("/confirmedorder");
    }


    const initialState: DeliveryFormData = {
        cep: '',
        logradouro: '',
        complemento: '',
        numero: 0,
        bairro: '',
        localidade: '',
        uf: '',
        pagamentoTipo: 'dinheiro'
    }

    const { register, handleSubmit, formState, reset, control } = useForm<DeliveryFormData>({
        resolver: zodResolver(deliveryFormValidationSchema),
        defaultValues: initialState
    });

    const { isSubmitSuccessful } = formState;

    const searchLocalization = async (cep: string): Promise<AddressData> => {
        const responseServer = await api.get(`/${cep}/json`);
        return responseServer.data;
    }

    const handleSearchCEP = (cep: string) => {
        if (cep.length == 9) {
            const newArray = cep.split("-");
            searchLocalization(newArray[0].concat(newArray[1]))
                .then(data => {
                    const json = data;
                    reset(json);
                })
                .catch(err => console.error(err));
        }
    }



    // document.getElementById('form')?.dispatchEvent(
    //     new Event('submit', { cancelable: true, bubbles: true })
    // );

    const submitForm = async (data: DeliveryFormData) => {
        handleAddress(data);
        reset(initialState);
    }

    if (isSubmitSuccessful)
        handleClick();


    useEffect(() => {
        handleCostForQuantity();
    }, [coffees])


    function handleCostForQuantity() {
        const total = coffees.filter(elem => elem.amount !== 0).reduce((acc, elem) => {
            return acc + (elem.amount * elem.price);
        }, 0)
        setValorPorQuantidade(() => total);
    }


    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <CheckoutContainer>
                <CheckoutTitle>Complete seu pedido</CheckoutTitle>
                <CheckoutTitle2>Cafés selecionados</CheckoutTitle2>

                <CheckoutFrame1>
                    <CheckoutContent>
                        <CheckoutTitleContent>
                            <MapPin size={22} color="#C47F17" />
                            <CheckoutTitleInner>
                                <CheckoutTitleInnerText>Endereço de Entrega</CheckoutTitleInnerText>
                                <CheckoutTitleInnerText2>Informe o endereço onde deseja receber seu pedido</CheckoutTitleInnerText2>
                            </CheckoutTitleInner>
                        </CheckoutTitleContent>
                        <CheckoutFormContent>
                            <input
                                type="text"
                                {...register('cep')}
                                placeholder="CEP"
                                size={17}
                                title={formState.errors.cep ? formState.errors.cep.message : ''}
                                style={formState.errors.cep ? { borderColor: 'red' } : {}}
                                onChange={(e) => handleSearchCEP(e.target.value)}
                                maxLength={9}
                            />
                            <input
                                type="text"
                                {...register('logradouro')}
                                placeholder="Rua"
                                size={66}
                                title={formState.errors.logradouro ? formState.errors.logradouro.message : ''}
                                style={formState.errors.logradouro ? { borderColor: 'red' } : {}}
                            />
                            <InputContainer>
                                <input
                                    type="number"
                                    {...register('numero')}
                                    placeholder="Número"
                                    title={formState.errors.numero ? formState.errors.numero.message : ''}
                                    style={formState.errors.numero ? { borderColor: 'red' } : {}}
                                />
                                <input type="text" {...register('complemento')} placeholder="Complemento" size={48} />
                                <OptionalContainer> Opcional</OptionalContainer>
                            </InputContainer>
                            <InputContainer>
                                <input
                                    type="text"
                                    {...register('bairro')}
                                    placeholder="Bairro"
                                    title={formState.errors.bairro ? formState.errors.bairro.message : ''}
                                    style={formState.errors.bairro ? { borderColor: 'red' } : {}}
                                />
                                <input
                                    type="text"
                                    {...register('localidade')}
                                    placeholder="Cidade"
                                    title={formState.errors.localidade ? formState.errors.localidade.message : ''}
                                    style={formState.errors.localidade ? { borderColor: 'red' } : {}}
                                />
                                <input
                                    type="text"
                                    {...register('uf')}
                                    placeholder="UF"
                                    title={formState.errors.uf ? formState.errors.uf.message : ''}
                                    style={formState.errors.uf ? { borderColor: 'red' } : {}}
                                />
                            </InputContainer>
                        </CheckoutFormContent>
                    </CheckoutContent>
                    <CheckoutContent height={'207px'}>
                        <CheckoutTitleContent>
                            <CurrencyDollar size={22} color="#8047F8" />
                            <CheckoutTitleInner>
                                <CheckoutTitleInnerText>Pagamento</CheckoutTitleInnerText>
                                <CheckoutTitleInnerText2>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CheckoutTitleInnerText2>
                            </CheckoutTitleInner>
                        </CheckoutTitleContent>
                        <CheckoutFormContent>
                            <Controller
                                control={control}
                                name="pagamentoTipo"
                                render={({ field }) => {
                                    return (
                                        <TransactionTypeContainer onValueChange={field.onChange} value={field.value}>

                                            <TransactionTypeButton value="crédito">
                                                <CreditCard size={16} color="#8047F8" />cartão de crédito
                                            </TransactionTypeButton>
                                            <TransactionTypeButton value="débito">
                                                <Bank size={16} color="#8047F8" />cartão de débito
                                            </TransactionTypeButton>
                                            <TransactionTypeButton value="dinheiro">
                                                <Money size={16} color="#8047F8" />dinheiro
                                            </TransactionTypeButton>
                                        </TransactionTypeContainer>
                                    )
                                }}
                            />
                        </CheckoutFormContent>
                    </CheckoutContent>
                </CheckoutFrame1>
                <CheckoutFrame2>
                    <CoffeeCardCheckoutContainer>
                        {
                            coffees.filter((elem) => elem.amount !== 0)
                                .map((elem) => {
                                    // const valorAnterior = index > 0 ? coffees[index - 1].price * coffees[index - 1].amount : 0; // Posição anterior
                                    return (
                                        <CheckoutItemOrder key={elem.id}>
                                            <CheckoutItemOrderContent>
                                                <CoffeeImageCheckoutContainer
                                                    $imageCard={elem.image}
                                                />
                                                <CheckoutItemOrderContentAction>
                                                    <CheckoutItemOrderTitleContainer>
                                                        <TitleItemChekoutContainer>{elem.title}</TitleItemChekoutContainer>
                                                        <PriceItemCheckoutContainer>
                                                            {
                                                                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                                                    .format(elem.priceForQuantity)
                                                            }
                                                        </PriceItemCheckoutContainer>
                                                    </CheckoutItemOrderTitleContainer>
                                                    <CheckoutActionContentContainer>
                                                        <Counter>
                                                            <DecrementCounter disabled={elem.amount === 0} icon={<Minus />} handleDecrement={() => decrementAmount(elem.id)} />
                                                            <Amount value={elem.amount} />
                                                            <IncrementCounter icon={<Plus />} handleIncrement={() => incrementAmount(elem.id)} />
                                                        </Counter>
                                                        <TrashButton title={'Remover do carrinho'} handleCartClick={() => removeItemFromCart(elem.id)} />
                                                    </CheckoutActionContentContainer>
                                                </CheckoutItemOrderContentAction>
                                            </CheckoutItemOrderContent>
                                        </CheckoutItemOrder>
                                    )
                                })
                        }
                        <SummaryTotalsStyled>
                            <SummaryItemsStyled>
                                <SummaryDescriptionItemStyled>{`Total de itens`}</SummaryDescriptionItemStyled>
                                <SummaryItemPriceStyled>
                                    {
                                        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                            .format(valorPorQuantidade)
                                    }
                                </SummaryItemPriceStyled>
                            </SummaryItemsStyled>
                            <SummaryItemsStyled>
                                <SummaryDescriptionItemStyled>{`Entrega`}</SummaryDescriptionItemStyled>
                                <SummaryItemPriceStyled>

                                    {
                                        totalCost > 0 ?
                                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                                .format(randomValue) : 0
                                    }
                                </SummaryItemPriceStyled>
                            </SummaryItemsStyled>
                            <SummaryItemsStyled>
                                <SummaryDescriptionItemStyled><span>{`Total`}</span></SummaryDescriptionItemStyled>
                                <SummaryItemPriceStyled>
                                    <span>

                                        {
                                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                                .format(totalCost ? (randomValue + totalCost) : 0)
                                        }
                                    </span>
                                </SummaryItemPriceStyled>
                            </SummaryItemsStyled>
                        </SummaryTotalsStyled>
                        <SubmitButton disabled={coffees.filter(elem => elem.amount > 0).length === 0} >confirmar pedido</SubmitButton>
                    </CoffeeCardCheckoutContainer>
                </CheckoutFrame2>
            </CheckoutContainer>
        </form>

    )
}