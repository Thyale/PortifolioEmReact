function Corpo(){
    return(
        <section className="Corpo_Titulo">
            <img className="nome" src="./src/img/TituloNome.png" alt="Ícone do Email" />
            <p className="subtitle">Desenvolvedora Front End</p>
            <div>
                <a href="mailto:thyaledantas@gmail.com" target="_black"><img src="./src/img/IconEmail.png" alt="Ícone do Email" /></a>
                <a href="https://github.com/Thyale?tab=repositories" target="_blank"><img src="./src/img/IconGitHub.png" alt="Ícone do Email" /></a>
                <a href="https://www.linkedin.com/in/thyale-martins-dantas-5387a828a/" target="_blank"><img src="./src/img/IconLinkedin.png" alt="Ícone do Email" /></a>
            </div>
            <lord-icon className="Seta" src="https://cdn.lordicon.com/rmkahxvq.json" trigger="loop" colors="primary:#848484"></lord-icon>
        </section>
    )
}

export default Corpo