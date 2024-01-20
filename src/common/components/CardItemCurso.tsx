import { Button, Card } from "react-bootstrap";
import { CardItemCursoProps } from "../interfaces/CardCursoItemProps";

export function CardItemCurso({
    titulo = '',
    texto = '',
    bg = 'secondary',
    urlCurso = '',
    caminhoImagem = '',
    btnColor = 'light',
    alt = '',
    imgWidth = 150,
    imgHeight = 150
}: CardItemCursoProps) {
    return (
        <Card
            bg={bg}
            text="white"
            border="secondary"
            style={{ width: '18rem', textAlign: 'center' }}
            className="mb-5 m-2 mt-2">
            <div className="p-3 m-0" style={{ backgroundColor: 'white', borderRadius: '5px 5px 0px 0px' }}>
                <Card.Img alt={alt} src={caminhoImagem} style={{ width: imgWidth, height: imgHeight, backgroundColor: 'white' }}></Card.Img>
            </div>

            <Card.Body
            >
                <Card.Title className="fw-bold pb-2">{titulo}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                    {texto}
                </Card.Text>
                <Button href={urlCurso} target="_blank" variant={btnColor}>Assistir</Button>
            </Card.Body>
        </Card >
    )
}