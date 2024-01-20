import { Container, Nav, Navbar } from "react-bootstrap"

import logoRetangular from '/logo_retangular.webp'
import '../styles/header.css';

import { useEffect, useState } from "react";

function HeaderSite() {

    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.scrollY > 200)
            );
        }
    }, []);

    return (
        <Navbar id="header" sticky="top" bg="black" data-bs-theme="dark" collapseOnSelect expand="lg" className={`w-100 ${small ? "pequena" : ""}`}>
            <Container>
                <Navbar.Brand className="text-white" href="/pagina-inicial">
                    <img alt="Logo retângular da hospedaria - admin" src={logoRetangular} className={`imagem-logo ${small ? "pequena" : ""}`} />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="text-white" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="align-items-center bg-black">
                        <Nav.Link href={'/pagina-inicial#cursos-aws'} className="text-white" >Cursos AWS</Nav.Link>
                        {/* <Nav.Link href={'/bootcamp-aws-cloud-practitioner'} className="text-white">Bootcamp AWS</Nav.Link> */}
                        <Nav.Link href={'/pagina-inicial#lancamento'} className="text-white" >Lançamento</Nav.Link>
                        <Nav.Link href={'/pagina-inicial#duvidas'} className="text-white" >Dúvidas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export { HeaderSite }