import { Fade, Zoom } from "react-awesome-reveal";
import { CursosAws } from "../components/PaginaInicial/CursosAws";
import { Lancamento } from "../components/PaginaInicial/Lancamento";
import { Duvidas } from "../components/Duvidas/Duvidas";
import { Banner } from "../components/PaginaInicial/Banner";


function PaginaInicial() {

    return (
        <>
            <Banner></Banner>
            <Zoom delay={0.5} duration={1300}>
                <CursosAws></CursosAws>
            </Zoom>
            <Fade delay={0.5} duration={1800}>
                <Lancamento></Lancamento>
            </Fade>
            <Zoom delay={0.5} duration={1500}>
                <Duvidas></Duvidas>
            </Zoom>
        </>
    )
}

export { PaginaInicial };