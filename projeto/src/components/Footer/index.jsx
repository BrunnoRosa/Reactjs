import "./style.css";

// FICARÁ NO FINAL DA PÁGINA (RODAPÉ)
export default function Footer() {
    return(
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br />
                Desenvolvido por [Bruno Rosa - Senai Bahia ].
            </p>
        </footer>
    )
}