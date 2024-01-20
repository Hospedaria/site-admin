import { Button, Container } from "react-bootstrap";

import iconCheck from '../../assets/icons/check.webp';

import '../../styles/checkoutsucesso.css';
import '../../styles/iconescheckout.css';

function CheckoutSucesso() {

    return (
        <>
            <div className="pb-5 w-100 d-flex flex-column div-principal" >
                <Container className="pt-5  text-center">
                    <h1 className="text-success display-3">Inscrição realizada com sucesso ;)</h1>
                    <p className="pb-1">
                        Sua inscrição foi realizada com sucesso, você recebera um contato via e-mail ou whatsapp se for selecionado!
                        Se você for selecionado, para garantir a sua vaga, é cobrado um valor de R$ 24,90 (R$20,90 do material e R$4,90 para inscrição)
                    </p>


                    <img className="pt-3 pb-4 img-checkout" src={iconCheck} alt="Imagem de check de sucesso" />

                    <p>Ficou com dúvidas?
                        <a
                            className="text-decoration-none fw-bold"
                            href={`https://api.whatsapp.com/send?phone=5511998161253&text=Olá, realizei a inscrição para o bootcamp, e agora?`}
                            target="_blank"> Clique aqui</a>
                    </p>

                    <br />
                    <Button variant="primary" className="text-start" href={'/pagina-inicial'}>Voltar para página inicial</Button>
                </Container>
            </div >
        </ >
    )
}

export { CheckoutSucesso as AwsInscricaoSucesso };