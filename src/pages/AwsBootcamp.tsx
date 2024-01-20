import { Bounce } from "react-awesome-reveal";
import { AwsBootcampFormInscricao } from "../components/AwsBootcamp/AwsBootcampFormInscricao";
import { Badge, Col, Container } from "react-bootstrap";
import { RowPadrao } from "../common/components/RowPadrao";

import '../styles/awsbootcamp.css';
import { useState } from "react";
import { SpinnerEs } from "../components/Spinner/SpinnerEs";

function AwsBootcamp() {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {isLoading && <SpinnerEs />}

            <div>
                <Bounce>
                    <Container className="mt-4 mb-5">
                        <RowPadrao>
                            <h1 className="text-uppercase display-4">Bootcamp de Cloud AWS </h1>
                            <p className="h4">Participe do nosso bootcamp de cloud AWS e saia preparado para realizar a certificação</p>
                            <div className="pb-4">
                                <Badge>Dia 30 de setembro e 01 de outubro</Badge>
                                <br />
                                <Badge bg="danger">Investimento de R$ 24,90</Badge>
                            </div>
                        </RowPadrao>
                        <RowPadrao>
                            <Col md="6">
                                <AwsBootcampFormInscricao
                                    setIsLoading={setIsLoading}></AwsBootcampFormInscricao>
                            </Col>
                            <Col md="6" className="d-flex justify-content-center align-items-center">
                                <img className="img-curso" src="/imgs/cloud-practitioner.webp" alt="Imagem da certificação da AWS Cloud Practitioner" />
                            </Col>
                        </RowPadrao>
                    </Container>
                </Bounce>
            </div>
        </>

    )
}

export { AwsBootcamp };