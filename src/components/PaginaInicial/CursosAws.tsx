import { CardItemCurso } from "../../common/components/CardItemCurso";

function CursosAws() {

    return (
        <div id="cursos-aws" className="text-center p-5">
            <h2 className="text-uppercase display-5 pt-4">Cursos de AWS</h2>
            <p>Configura nossos cursos gratuitos sobre AWS, estudo quando e onde quiser, sem pagar nada.</p>
            <div className="d-flex flex-wrap justify-content-center pt-2">


                <CardItemCurso
                    caminhoImagem="/imgs/developer-associate.webp"
                    texto="Prepara-se como tirar a certificação da AWS Developer Associate, aprenda sobre como funcionam os componentes da AWS."
                    titulo="AWS Developer Associate"
                    alt="AWS Developer Associate"
                    urlCurso="https://www.youtube.com/watch?v=MKA0X3qfQUw&list=PLnvCdeUQQSUHNz2HGoAyj0FUCpmRnrpXX"
                    bg="primary"
                ></CardItemCurso>
                <CardItemCurso
                    caminhoImagem="/imgs/cloud-practitioner.webp"
                    texto="Prepara-se como tirar a certificação da AWS Cloud Practitioner e aprenda sobre os princípios da computação em núvem."
                    titulo="AWS Cloud Practitioner"
                    alt="AWS Cloud Practitioner"
                    urlCurso="https://www.youtube.com/watch?v=gRvJdGkC4so&list=PLnvCdeUQQSUHZ4PwZ1MsXWkPfxQA4NTP1"
                ></CardItemCurso>
            </div>
        </div>
    )
}

export { CursosAws };