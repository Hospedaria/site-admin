import { useSearchParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

import iconCheck from '../../assets/icons/check.webp';

import '../../styles/checkoutsucesso.css';
import '../../styles/iconescheckout.css';

function CheckoutSucesso() {

    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');
    const email = searchParams.get('email');

    return (
        <>
            <div className="pb-5 w-100 d-flex flex-column div-principal" >
                <Container className="pt-5  text-center">
                    <h1 className="text-success display-3">Pagamento realizado com sucesso ;)</h1>
                    <p className="pb-1">
                        Seu pagamento foi processado com sucesso, você irá receber um e-mail com as informações
                        para acessar o curso
                    </p>

                    <img className="pt-3 pb-4 img-checkout" src={iconCheck} alt="Imagem de check de sucesso" />

                    <p className="pb-0 mb-0"><b>Código do seu pagamento:</b> {id}</p>
                    <p className="pt-0"><b>E-mail para envio:</b> {email}</p>

                    <p>Não recebeu o e-mail?
                        <a
                            className="text-decoration-none fw-bold"
                            href={`https://api.whatsapp.com/send?phone=5511998161253&text=Olá, comprei o curso com o e-mail: ${email || ''}, Id do pagamento: ${id || ''}. Não recebi o e-mail.`}
                            target="_blank"> Clique aqui</a>
                    </p>

                    <br />
                    <Button variant="primary" className="text-start" href={'/pagina-inicial'}>Voltar para página inicial</Button>
                </Container>
            </div >
        </ >
    )
}

export { CheckoutSucesso };