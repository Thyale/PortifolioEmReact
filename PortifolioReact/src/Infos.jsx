function Infos(){
    return(
        <section id="Infos">
            <div id="SobreMim">
              <div>
                <img src="./src/img/imgPerfil.png" alt="Imagem de perfil" />
              </div>
              <div>
                <h1 className="ApresentacaoTitulo">Olá, me chamo Thyale!</h1>
                <p className="ApresentacaoText">
                    Já finalizei o primeiro período em dois cursos de graduação, Produção publicitária na faculdade facottur, e Design de interiores na faculdade de ciências humanas Esuda. Porém depois de muito pensar e estudar, tomei a decisão de me arriscar em TI, uma área até então desconhecida para mim. 
                    Atualmente curso Análise e desenvolvimento de sistemas na Estácio e estou buscando sempre aprofundar meus conhecimentos em cursos extras curriculares, além de praticar e me dedicar bastante em projetos testes, sempre mirando no crescimento.
                </p>
              </div>
            </div>
            <div id="Projects">
              <h1 className="Projetos">Projetos</h1>
              <div className="ProjetosDivGeral">
                <div className="ProjetosDiv">
                  <div className="ProjetosDiv_Links">
                    <p className="tituloprojeto1">FlowFlix</p>
                    <a href="https://thyale.github.io/FlowFlix/" target="_blanck"><span class="material-symbols-outlined">link</span></a>
                  </div>
                  <p className="TextoProjeto1">Projeto site de streming. O projeto foi pensado devido a necessidade de uma atividade proposta durante a faculdade.</p>
                  <div className="ProjetosDiv_Competencias">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
                <div className="ProjetosDiv">
                  <div className="ProjetosDiv_Links">
                    <p className="tituloprojeto2">Clima Tempo</p>
                    <a href="https://thyale.github.io/ClimaTempoJS/" target="_blanck"><span class="material-symbols-outlined">link</span></a>
                  </div>
                  <p className="TextoProjeto2">Digitamos o nome do lugar que queremos e obtemos seu clima, temperatura, vento e umidade.</p>
                  <div className="ProjetosDiv_Competencias">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
                <div className="ProjetosDiv">
                  <div className="ProjetosDiv_Links">
                    <p className="tituloprojeto3">Loja Nike</p>
                    <a href="https://thyale.github.io/LojaNikeTMD/" target="_blanck"><span class="material-symbols-outlined">link</span></a>
                  </div>
                  <p className="TextoProjeto3">Projeto loja de Nike. Feito em HTML, CSS e JS. Nós podemos adicionar estilos diferentes de sapatos no nosso carrinho. Inpiração: Mitch Koko (YouTube)</p>
                  <div className="ProjetosDiv_Competencias">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
                <div className="ProjetosDiv">
                  <div className="ProjetosDiv_Links">
                    <p className="tituloprojeto4">Calculadora JS</p>
                    <a href="https://thyale.github.io/CalculadoraJS/" target="_blanck"><span class="material-symbols-outlined">link</span></a>
                  </div>
                  <p className="TextoProjeto4">Calculadora usando HTML, CSS e JS. Inspirações: Bro Code e Gustavo Neitzke. Possui operação de adição, subtração, divisão e multiplicação</p>
                  <div className="ProjetosDiv_Competencias">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
                <div className="ProjetosDiv">
                  <div className="ProjetosDiv_Links">
                    <p className="tituloprojeto5">Sabor Em Foco</p>
                    <a href="https://thyale.github.io/HamburgueriaSaboremFoco/" target="_blanck"><span class="material-symbols-outlined">link</span></a>
                  </div>
                  <p className="TextoProjeto5">Cardápio da hamburgueria Sabor em Foco. Feito em HTML, CSS e JS. Inspiração: Sujeito programador (Youtube)</p>
                  <div className="ProjetosDiv_Competencias">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
                <div className="ProjetosDiv">
                  <div className="ProjetosDiv_Links">
                    <p className="tituloprojeto6">Relógio</p>
                    <a href="https://thyale.github.io/Relogio/" target="_blanck"><span class="material-symbols-outlined">link</span></a>
                  </div>
                  <p className="TextoProjeto6">Projeto foi um Relógio Digital Dinâmico. Inspiração : Larissa Kich</p>
                  <div className="ProjetosDiv_Competencias">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p>
                  </div>
                </div>
              </div>
              <a className="linkdeMaisProjetos" href="https://github.com/Thyale?tab=repositories" target="_blanck">Outros projetos</a>
            </div>
        </section>
    )
}

export default Infos