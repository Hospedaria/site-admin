
import { CardPayment } from '@mercadopago/sdk-react';
import { ICardPaymentBrickPayer, ICardPaymentFormData } from '@mercadopago/sdk-react/bricks/cardPayment/type';

import { MercadoPagoClient } from '../../clients/mercadopago/mercadopagoclient';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SpinnerEs } from '../Spinner/SpinnerEs';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

function CheckoutBricks() {

    const [isLoading, setIsLoading] = useState(true);
    const [processandoRequisicao, setProcessandoRequisicao] = useState(false);
    const navigate = useNavigate();
    const valorCurso = 19.9;

    const mercadoPagoClient = new MercadoPagoClient();

    const onSubmit = async function (dadosPagamento: ICardPaymentFormData<ICardPaymentBrickPayer>) {

        event?.preventDefault();

        setIsLoading(true);
        setProcessandoRequisicao(true);
        return await mercadoPagoClient.RealizarCheckoutBricks(dadosPagamento)
            .then((resposta) => {
                switch (resposta.status) {
                    case "approved":
                        navigate({
                            pathname: 'aprovado',
                            search: `?id=${resposta.id_pagamento}&email=${dadosPagamento.payer.email || ''}`
                        });
                        break;
                    case "rejected":
                        navigate({
                            pathname: 'recusado',
                            search: `?erro=${resposta.status_detalhe}`
                        });
                        break;
                }
            })
            .catch(error => {
                alert(error);
            })
            .finally(() => setProcessandoRequisicao(false));

    };

    const onReady = () => {
        if (!processandoRequisicao) setIsLoading(false);
    };


    return (
        <>
            {isLoading && <SpinnerEs />}
            <div>
                <Container className='pt-4'>
                    <Row>
                        <Col md="4">
                            {!isLoading && <Fade duration={1500} delay={500}>

                                <div className='m-3'>
                                    <p className="mt-2 svelte-gw9lzj extra-large-3BnPST fs-5 h1 text-uppercase">Seu carrinho</p>

                                </div>
                                <Card
                                    className='mt-3 mb-2'
                                    border="black"
                                    style={{ maxHeight: '17rem', textAlign: 'center' }}>
                                    <Card.Body
                                    >
                                        <Card.Title className="fw-bold pb-2 text-start">{'Lógica de programação com JavaScript - 2023'}</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            <small>Aprendendo a programar utilizando JavaScript. Programe para front-end, back-end ou mobile</small>
                                        </Card.Text>
                                        <Card.Footer className='text-start p-0 pt-2 d-flex justify-content-between'>
                                            <p className='mb-0'><b>Total</b> </p>
                                            <p className='mb-0'><b>R$ {valorCurso.toFixed(2).replace(".", ",")}</b></p>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card >
                            </Fade>
                            }

                        </Col>
                        <Col className='d-flex justify-content-center' md="8">
                            <CardPayment
                                initialization={{ amount: valorCurso }}
                                customization={{
                                    paymentMethods: {
                                        minInstallments: 1,
                                        maxInstallments: 3
                                    },
                                    visual: {
                                        texts: {
                                            formTitle: 'DADOS DE PAGAMENTO',
                                            emailSectionTitle: 'E-mail para envio das informações'
                                        }
                                    }
                                }}
                                onSubmit={onSubmit}
                                onReady={onReady}
                            />
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
}

export { CheckoutBricks };