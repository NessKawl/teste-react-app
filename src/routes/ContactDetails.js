import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
    const {id} = useParams();


    // 6 - Redirect
    const navigate = useNavigate();

    const handleContact = ()=>{
        console.log('Mensagem enviada com sucesso!');
        return navigate("/")
    }

    return (
        <div>
            <h1>Detalhes do contato: {id}</h1>
            <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    )
}

export default ContactDetails;