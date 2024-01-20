import iconWhatsApp from '/whatsapp.webp';
import '../../styles/whatsapp.css';

function WhatsApp() {

    return (
        <div className='whatsapp'>
            <a
                className='whatsapp'
                href="https://api.whatsapp.com/send?phone=5511998161253&text=Olá, gostaria de saber mais sobre os cursos"
                target="_blank">
                <img src={iconWhatsApp} alt="ícone do whatsapp" />
            </a>
        </div>
    )
}

export { WhatsApp };