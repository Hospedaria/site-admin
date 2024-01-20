import { Button, Container } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

import errorIcon from '../../assets/icons/error-icon.png';
import '../../styles/checkouterro.css'
import '../../styles/iconescheckout.css';

function CheckoutErro() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const detalheErroMp = searchParams.get('erro');

    const erroTela = () => {
        switch (detalheErroMp) {
            case 'cc_rejected_insufficient_amount':
                return 'Recusado por saldo insuficiente';
            case 'cc_rejected_call_for_authorize':
                return 'Recusado por falta de autorização'
            case 'cc_rejected_bad_filled_security_code':
                return 'Recusado por código de segurança inválido'
            case 'cc_rejected_bad_filled_date':
                return 'Recusado por problema com a data de vencimento';
            case 'cc_rejected_bad_filled_other':
                return 'Recusado por problemas de preenchimento no formulário';
            default:
                return 'Recusado por algum erro genérico, tente novamente'
        }
    }

    return (
        <>
            <div className="pb-5 w-100 d-flex flex-column div-principal" >
                <Container className="pt-5  text-center">
                    <h1 className="text-danger display-3">Pagamento não realizado ;(</h1>
                    <p className="pb-1">Seu pagamento <b>não</b> foi processado com sucesso!</p>
                    <img className="pt-3 pb-4 img-checkout" src={errorIcon} alt="Imagem de check de sucesso" />

                    <p><b>{erroTela()} </b></p>


                    <br />
                    <Button variant="secondary" className="text-start" onClick={() => navigate(-1)}>Voltar para pagamento</Button>
                </Container>
            </div >
        </ >
    )
}

export { CheckoutErro };