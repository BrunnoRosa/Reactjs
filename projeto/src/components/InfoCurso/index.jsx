import { useState } from 'react'
import './style.css'

export default function InfoCurso() {
    const [nome, setNome ] = useState('Lógica de Programação')
    const [cargHoraria, setCargHoraria] = useState(162)
    const [dataInicio, setDataInicio] = useState('2026-05-25')
    const [dataTermino, setDataTermino] = useState('2026-7-25')
    const [nomeAluno, setNomeAluno] = useState('Bruno Rosa')
    const [emailAluno, setEmailAluno] = useState('bruno.rosa@email.com')
    return (
        <div className="info-curso">
            <h2>Dados do curso:</h2>
            <p>📚nome: { nome }</p>
            <p>⏳carga horária: { cargHoraria } horas</p>
            <p>📅data de início: { dataInicio }</p>
            <p>📅data de término: { dataTermino }</p>
            <p>👨‍🎓nome do aluno: { nomeAluno }</p>
            <p>✉️email do aluno: { emailAluno }</p>
        </div>
    )
    
}