import { Accordion } from "react-bootstrap";

function Duvidas() {
    return (

        <div id="duvidas" className="text-center p-5">
            <h2 className="text-uppercase display-5 pt-4">Dúvidas frequentes</h2>
            <p>Ficou alguma dúvida? Configura as principais abaixo</p>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Preciso ter conhecimento prévio?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Para o curso de Lógica de Programação com JavaScript não há necessidade de conhecimento prévio. O curso todo foi montado pensando em um aluno que não conhece nada sobre programação. Desse modo, não se preocupe, você aprenderá tudo o que precisa para concluir o curso e decolar em sua carreira.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Por quanto tempo terei acesso?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        O acesso é vitalício e sem tempo para expirar, faça o curso no seu tempo.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Quais são as formas de pagamento?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Você pode pagar por boleto, PIX, cartão de débito ou cartão de crédito.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Curso possui certificado?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Sim, você pode emitir seu certificado com na plataforma da Udemy logo após concluir o curso. São emitidos certificados apenas para <b>cursos pagos</b>, cursos do YouTube não possuem certificado de conclusão.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Onde acesso os cursos gratuitos?</Accordion.Header>
                    <Accordion.Body className="text-start">
                        Você pode acessar todos nossos cursos gratuitos pelo YouTube. <a href="https://www.youtube.com/@ahospedagem-admin" target="_blank">Cliqui aqui para acessar.</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p className="pt-4 text-dark ">Ainda tem dúvidas? <a href="https://api.whatsapp.com/send?phone=5511998161253&text=Olá, gostaria de saber mais sobre os cursos" target="_blank">Fale conosco via WhatsApp</a></p>
        </div>
    );
}

export { Duvidas }