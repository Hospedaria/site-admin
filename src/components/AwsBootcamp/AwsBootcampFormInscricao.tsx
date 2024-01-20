import { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { RowPadrao } from "../../common/components/RowPadrao";
import { InscricaoBootcamp } from "../../interfaces/InscricaoBootcamp";
import { ErroInscricaoBootcamp } from "../../interfaces/ErroInscricaoBootcamp";
import { AwsBootcampClient } from "../../clients/mercadopago/awsbootcampclient";
import { useNavigate } from "react-router-dom";

interface AwsBootcampFormInscricaoProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function AwsBootcampFormInscricao(props: AwsBootcampFormInscricaoProps) {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const [formSujo, setFormSujo] = useState(false);
    const [dadosInscricaoBootcamp, setDadosInscricaoBootcamp] = useState<InscricaoBootcamp>({
        nome: '', telefone: '', conhecimento: '1', email: ''
    });
    const [errosInscricaoBootcamp, setErroInscricaoBootcamp] = useState<ErroInscricaoBootcamp>({
        nome: '', telefone: '', email: ''
    });

    const handleOnNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nome = event.target.value;
        setFormSujo(true);

        if (!nome)
            setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, nome: 'Nome é obrigatório' });
        else if (nome.length < 2)
            setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, nome: 'Nome deve ter ao menos 2 caracteres' });
        else if (nome.length > 255)
            setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, nome: 'Nome deve ter no máximo 255 caracteres' });
        else
            setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, nome: '' });

        setDadosInscricaoBootcamp({ ...dadosInscricaoBootcamp, nome: nome });
    }

    const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setFormSujo(true);

        if (!email)
            setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, email: 'E-mail inválido' });
        else
            setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, email: '' });

        setDadosInscricaoBootcamp({ ...dadosInscricaoBootcamp, email: email });
    }

    const handleOnTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const telefone: string = event.target.value;
        setFormSujo(true);

        if (!telefone)
            setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, telefone: 'Telefone é obrigatório' });
        else {

            const validacaoTel = /^[0-9]{11}$/;

            if (validacaoTel.test(telefone))
                setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, telefone: '' });
            else
                setErroInscricaoBootcamp({ ...errosInscricaoBootcamp, telefone: 'Telefone inválido' });
        }

        setDadosInscricaoBootcamp({ ...dadosInscricaoBootcamp, telefone: telefone });
    }

    const handleOnConhecimentoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDadosInscricaoBootcamp({ ...dadosInscricaoBootcamp, conhecimento: event.target.value });
    }

    const realizarInscricao = () => {

        setValidated(true);

        if (!errosInscricaoBootcamp.nome && !errosInscricaoBootcamp.telefone &&
            !errosInscricaoBootcamp.email && formSujo) {

            props.setIsLoading(true);
            new AwsBootcampClient().RealizarInscricao(dadosInscricaoBootcamp)
                .then((reponse: Response) => {
                    if (reponse.ok)
                        navigate({
                            pathname: '/bootcamp-aws-cloud-practitioner-sucesso'
                        });
                    else {
                        alert('Erro ao preencher formulário');
                    }
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => props.setIsLoading(false));
        }
    };

    return (
        <Form noValidate validated={validated}>
            <RowPadrao>
                <Form.Group as={Col} md="12" controlId="txtNome">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        maxLength={255}
                        minLength={2}
                        placeholder="Digite seu nome"
                        value={dadosInscricaoBootcamp.nome}
                        onChange={handleOnNomeChange}
                    />
                    {errosInscricaoBootcamp.nome && <span className="text-danger">{errosInscricaoBootcamp.nome}</span>}
                </Form.Group>


            </RowPadrao>
            <RowPadrao>
                <Form.Group as={Col} md="12" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel"
                        placeholder="Telefone (apenas numeros)"
                        required
                        minLength={10}
                        maxLength={11}
                        value={dadosInscricaoBootcamp.telefone}
                        pattern="[0-9]{11}"
                        onChange={handleOnTelefoneChange}
                    />
                    {errosInscricaoBootcamp.telefone && <span className="text-danger">{errosInscricaoBootcamp.telefone}</span>}

                </Form.Group>
            </RowPadrao>
            <RowPadrao>

                <Form.Group as={Col} md="12" controlId="txtEmail">
                    <Form.Label>E-mail</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="email"
                            placeholder="Seu e-mail"
                            aria-describedby="inputGroupPrepend"
                            required
                            minLength={5}
                            value={dadosInscricaoBootcamp.email}
                            onChange={handleOnEmailChange}
                        />
                    </InputGroup>
                    {errosInscricaoBootcamp.email && <span className="text-danger">{errosInscricaoBootcamp.email}</span>}

                </Form.Group>
            </RowPadrao>
            <RowPadrao>
                <Form.Group as={Col} md="12" controlId="conhecimento">
                    <Form.Label>Conhecimentos em AWS</Form.Label>
                    <Form.Select aria-label="Conhecimentos em AWS"
                        value={dadosInscricaoBootcamp.conhecimento}
                        onChange={handleOnConhecimentoChange}>
                        <option value={"1"}>Nenhum</option>
                        <option value={"2"}>Iniciante</option>
                        <option value={"3"}>Intermediário</option>
                        <option value={"4"}>Certificado / avançado</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
            </RowPadrao>
            <Button onClick={realizarInscricao} className="w-100 mt-3 mb-3" type="button">Quero me inscrever!</Button>
        </Form>
    )
}

export { AwsBootcampFormInscricao }