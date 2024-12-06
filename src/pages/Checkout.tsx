import CheckoutContainer from "../components/CheckoutContainer";
import CheckoutContent from "../components/CheckoutContent";
import CheckoutFrame1 from "../components/CheckoutFrame1";
import CheckoutFrame2 from "../components/CheckoutFrame2";
import CheckoutTitle from "../components/CheckoutTitle";
import CheckoutTitle2 from "../components/CheckoutTitle2";
import CheckoutTitleContent from "../components/CheckoutTitleContent";
import CheckoutTitleInner from "../components/CheckoutTitleInner";

import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
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
import { useState } from "react";


const deliveryFormValidationSchema = zod.object({
    cep: zod.string().min(9, 'Informe o CEP no formato xxxxx-xxx'),
    rua: zod.string().min(1, 'Informe o nome da rua'),
    complemento: zod.string().optional(),
    numero: zod.coerce.number().min(1, 'Informe o número'),
    bairro: zod.string().min(1, 'Informe  bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(2, 'Informe a UF'),
    pagamentoTipo: zod.enum(['credit', 'debit', 'money'])
});

type DeliveryFormData = zod.infer<typeof deliveryFormValidationSchema>;

export default function Checkout() {

    const initialState: DeliveryFormData = {
        cep: '',
        rua: '',
        complemento: '',
        numero: 0,
        bairro: '',
        cidade: '',
        uf: '',
        pagamentoTipo: 'money'
    }

    const [deliveyAddress, setDeliveryAddress] = useState<DeliveryFormData>(initialState);
    const { register, handleSubmit, formState, reset, control } = useForm<DeliveryFormData>({
        resolver: zodResolver(deliveryFormValidationSchema),
        defaultValues: initialState
    });

    console.log(formState.errors);

    const submitForm = (data: DeliveryFormData) => {
        console.log(data);
        reset();
        // document.getElementById('form')?.dispatchEvent(
        //     new Event('submit', { cancelable: true, bubbles: true })
        // );
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
                            />
                            <input
                                type="text"
                                {...register('rua')}
                                placeholder="Rua"
                                size={66}
                                title={formState.errors.rua ? formState.errors.rua.message : ''}
                                style={formState.errors.rua ? { borderColor: 'red' } : {}}
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
                                    {...register('cidade')}
                                    placeholder="Cidade"
                                    title={formState.errors.cidade ? formState.errors.cidade.message : ''}
                                    style={formState.errors.cidade ? { borderColor: 'red' } : {}}
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
                                            <TransactionTypeButton value="credit">
                                                <CreditCard size={16} color="#8047F8" />cartão de crédito
                                            </TransactionTypeButton>
                                            <TransactionTypeButton value="debit">
                                                <Bank size={16} color="#8047F8" />cartão de débito
                                            </TransactionTypeButton>
                                            <TransactionTypeButton value="money">
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
                    <SubmitButton>confirmar pedido</SubmitButton>
                </CheckoutFrame2>
            </CheckoutContainer>
        </form>

    )
}