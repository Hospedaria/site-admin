import { Button } from "react-bootstrap";

import '../../styles/banner.css';

function Banner() {

    return (
        <div id="banner" className="bg-dark text-start p-5 d-flex flex-column align-items-center">

            <h1 className="text-white text-uppercase text-center h5 pt-5">Treinamento para programadores BackEnd</h1>
            <h2 className="text-uppercase text-light text-center fw-bold display-6 pt-3">Ensinando tecnologia para aplicar <br /> na vida real</h2>
            <br />
            <p className="text-center text-white fs-5">
                Faça parte do nosso grupo de profissionais verdadeiramente capacitados. Construa o conhecimento disputado
                <br /> pelas empresas do Brasil e consiga escolher aonde quer trabalhar.
            </p>

            <Button href="/checkout-curso-javascript"
                size="lg" className="mt-5 mb-5 text-uppercase" active>Comece agora</Button>
            <br />

        </div>
    );
}

export { Banner };