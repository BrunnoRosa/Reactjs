import { useState } from "react";
import "./style.css";

export default function AdicionarUsuario() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [listarUsuarios, setListarUsuarios] = useState([])

    const adicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email){
            setListarUsuarios([...listarUsuarios, {nome, email}])
            setNome("")
            setEmail("")
        }   
     }
     return(
        <h1>
            Adicionar Usuário
        </h1>

     )
}