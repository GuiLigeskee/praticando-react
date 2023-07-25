import { useNavigate, useParams } from "react-router-dom"

const ContactDetails = () => {

    const {id} = useParams();

    // 6 - redirect
    const navigate = useNavigate();

    const handleContact = () => {
        console.log("Contato enviado!");
        return navigate("/")
    }

  return (
    <div>
        <h1>Contact details</h1>
        <h3>exibindo mais informações do contato: {id}</h3>
        <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDetails