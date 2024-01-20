import { Bounce } from "react-awesome-reveal";
import { Button, Card } from "react-bootstrap";

import '../../styles/lancamento.css';
import logoCurso from '../../assets/imgs/logo_curso_introjs.webp';
import videoWhite from '../../assets/icons/video-white.webp';
import codeWhite from '../../assets/icons/code-white.webp';
import assinaturaWhite from '../../assets/icons/assinatura-white.webp';

function Lancamento() {

    return (

        <div id="lancamento" className="bg-dark text-center p-5 text-white">
            <h2 className="text-uppercase display-5 pt-4">Nosso lançamento</h2>
            <p className="">Conheça nosso mais novo curso de <b>Lógica de Programação com JavaScript - 2023</b></p>
            <div className="d-flex flex-wrap justify-content-around pt-3">
                <div className="flex flex-column">
                    <img src={videoWhite} width="200" height="200" alt="ícone de um vídeo" />
                    <p className="h4">Direto ao ponto</p>
                    <p>Curso com 2h e 40min de duração.</p>
                </div>
                <div className="flex flex-column mb-3">
                    <img src={codeWhite} width="200" height="200" alt="ícone de um código com uma tag" />
                    <p className="h4">Mão na massa</p>
                    <p>Com 5 exercícios de programação com casos <br />reais e validação de código.</p>
                </div>
                <div className="flex flex-column">
                    <img src={assinaturaWhite} width="200" height="200" alt="ícone de uma assinatura de contrato" />
                    <p className="h4">Simulado e exerícios</p>
                    <p>Com 1 simulado e 5 exerícios teóricos <br /> e mais de 25 aulas gravadas.</p>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center pt-5">
                <p className="h4 text-center text-light text-uppercase  display-6">Principais módulos</p>
                <p>Confira abaixo um pouco sobre os conteúdos no qual você irá aprender</p>

                <div className="w-100 d-flex flex-wrap justify-content-around">

                    <Card
                        className="m-2"
                        style={{ width: '18rem' }}
                    >
                        <Card.Header>Tipos primitivos e complexos</Card.Header>
                        <Card.Body>
                            <Card.Text
                                style={{ textAlign: 'justify' }}
                            >
                                Nesse módulo, você irá aprender quais são os tipos primitivos do JavaScript. Além disso, como são os objetos na linguagem, como por exemplo um "array" ou um "object".
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card
                        className="m-2"
                        style={{ width: '18rem' }}
                    >
                        <Card.Header>Comandos de decisão</Card.Header>
                        <Card.Body>
                            <Card.Text
                                style={{ textAlign: 'justify' }}
                            >
                                Você irá aprender como funciona os comandos de decisão "IF", "ELSE" e "ELSE IF", entendendo como funciona cada um dos comandos, suas diferenças e quando utiizar cada um deles.
                            </Card.Text>

                        </Card.Body>
                    </Card>


                    <Card
                        className="m-2"
                        style={{ width: '18rem' }}
                    >
                        <Card.Header>Comandos de repetição</Card.Header>
                        <Card.Body>
                            <Card.Text
                                style={{ textAlign: 'justify' }}
                            >
                                Nesse módulo, você irá aprender como funciona os comandos de repetição, tais como "FOR", "WHILE" e "DO...WHILE". Entendendo o caso de uso de cada um deles e seu funcionamento.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card
                        className="m-2"
                        style={{ width: '18rem' }}
                    >
                        <Card.Header>Funções</Card.Header>
                        <Card.Body>
                            <Card.Text
                                style={{ textAlign: 'justify' }}
                            >
                                Você irá aprender sobre os três principais tipos de funções no JavaScript: função sem retorno, com retorno simples e com retorno complexo. Além disso, irá aprender sobre a estrutura de cada um dos tipos e como utilizar.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
            <hr />
            <Bounce>

                <div className="d-flex justify-content-center pt-4">
                    <Card
                        border="secondary"
                        style={{ width: '30rem', textAlign: 'center' }}>
                        <div className="p-0 m-0" style={{ backgroundColor: 'white', borderRadius: '5px 5px 0px 0px' }}>
                            <Card.Img className="imagem-principal-lancamento" src={logoCurso} alt="Curso de Lógica de programação com JavaScript - 2023"></Card.Img>
                        </div>

                        <Card.Body
                        >
                            <Card.Title className="fw-bold pb-2">{'Lógica de programação com JavaScript - 2023'}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>
                                {'Aprendendo a programar utilizando JavaScript. Programe para front-end, back-end ou mobile.'}
                            </Card.Text>
                            <hr />
                            <p className="text-start">De <s className="text-danger">R$ 79,90</s> por apenas <br /> <span className="text-success h3 fw-bold">R$ 19,90</span></p>
                            <Button href={'/checkout-curso-javascript/'} className="w-100" size="lg">Comprar agora</Button>
                        </Card.Body>
                    </Card >
                </div>
            </Bounce>
        </div>
    );
}

export { Lancamento };