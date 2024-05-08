import TituloInicial from "./TituloInicial"
import Infos from "./Infos"

function Header(){

    function English(){
        let SubTitleCorpo = window.document.querySelector("p.subtitle").innerHTML = "Front End Developer"
        let ApresentacaoTitulo = window.document.querySelector("h1.ApresentacaoTitulo").innerHTML ="Hello, my name is Thyale!"
        let ApresentacaoText = window.document.querySelector("p.ApresentacaoText").innerHTML = "I have already completed the first period of two undergraduate courses, Advertising Production at Facottur College, and Interior Design at Esuda College of Human Sciences. However, after much thought and study, I made the decision to take a chance on IT, an area previously unknown to me. I am currently studying Systems Analysis and Development at Estácio and I am always looking to deepen my knowledge in extra curricular courses, in addition to practicing and dedicating myself a lot to test projects, always aiming for growth."
        let Projetos = window.document.querySelector("h1.Projetos").innerHTML = "Projects"
        let linkdeMaisProjetos = window.document.querySelector("a.linkdeMaisProjetos").innerHTML = "Other projects"
        let TextoProjeto1 = window.document.querySelector("p.TextoProjeto1").innerHTML = "Streaming website project. The project was designed due to the need for an activity proposed during college."
        let TextoProjeto2 = window.document.querySelector("p.TextoProjeto2").innerHTML = "We type in the name of the place we want and get its climate, temperature, wind and humidity."
        let TextoProjeto3 = window.document.querySelector("p.TextoProjeto3").innerHTML = "Nike store project. Made in HTML, CSS and JS. We can add different styles of shoes into our cart. Inspiration: Mitch Koko (YouTube)"
        let TextoProjeto4 = window.document.querySelector("p.TextoProjeto4").innerHTML = "Calculator using HTML, CSS and JS. Inspirations: Bro Code and Gustavo Neitzke. It has addition, subtraction, division and multiplication operations"
        let TextoProjeto5 = window.document.querySelector("p.TextoProjeto5").innerHTML = "Menu of the burger restaurant Sabor em Foco. Made in HTML, CSS and JS. Inspiration: Programmer Subject (Youtube)"
        let TextoProjeto6 = window.document.querySelector("p.TextoProjeto6").innerHTML = "Project was a Dynamic Digital Clock. Inspiration: Larissa Kich"

        let tituloprojeto2 = window.document.querySelector("p.tituloprojeto2").innerHTML = "Climate Weather"
        let tituloprojeto3 = window.document.querySelector("p.tituloprojeto3").innerHTML = "Nike Store"
        let tituloprojeto4 = window.document.querySelector("p.tituloprojeto4").innerHTML = "JS Calculator"
        let tituloprojeto5 = window.document.querySelector("p.tituloprojeto5").innerHTML = "Flavor in Focus"
        let tituloprojeto6 = window.document.querySelector("p.tituloprojeto6").innerHTML = "Clock"
    }

    function Portugues(){
        let SubTitleCorpo = window.document.querySelector("p.subtitle").innerHTML = "Desenvolvedora Front End"
        let ApresentacaoTitulo = window.document.querySelector("h1.ApresentacaoTitulo").innerHTML ="Olá, me chamo Thyale!"
        let ApresentacaoText = window.document.querySelector("p.ApresentacaoText").innerHTML = "Já finalizei o primeiro período em dois cursos de graduação, Produção publicitária na faculdade facottur, e Design de interiores na faculdade de ciências humanas Esuda. Porém depois de muito pensar e estudar, tomei a decisão de me arriscar em TI, uma área até então desconhecida para mim. Atualmente curso Análise e desenvolvimento de sistemas na Estácio e estou buscando sempre aprofundar meus conhecimentos em cursos extras curriculares, além de praticar e me dedicar bastante em projetos testes, sempre mirando no crescimento."
        let Projetos = window.document.querySelector("h1.Projetos").innerHTML = "Projetos"
        let linkdeMaisProjetos = window.document.querySelector("a.linkdeMaisProjetos").innerHTML = "Outros Projetos"
        let TextoProjeto1 = window.document.querySelector("p.TextoProjeto1").innerHTML = "Projeto site de streming. O projeto foi pensado devido a necessidade de uma atividade proposta durante a faculdade."
        let TextoProjeto2 = window.document.querySelector("p.TextoProjeto2").innerHTML = "Digitamos o nome do lugar que queremos e obtemos seu clima, temperatura, vento e umidade."
        let TextoProjeto3 = window.document.querySelector("p.TextoProjeto3").innerHTML = "Projeto loja de Nike. Feito em HTML, CSS e JS. Nós podemos adicionar estilos diferentes de sapatos no nosso carrinho. Inpiração: Mitch Koko (YouTube)"
        let TextoProjeto4 = window.document.querySelector("p.TextoProjeto4").innerHTML = "Calculadora usando HTML, CSS e JS. Inspirações: Bro Code e Gustavo Neitzke. Possui operação de adição, subtração, divisão e multiplicação"
        let TextoProjeto5 = window.document.querySelector("p.TextoProjeto5").innerHTML = "Cardápio da hamburgueria Sabor em Foco. Feito em HTML, CSS e JS. Inspiração: Sujeito programador (Youtube)"
        let TextoProjeto6 = window.document.querySelector("p.TextoProjeto6").innerHTML = "Projeto foi um Relógio Digital Dinâmico. Inspiração : Larissa Kich"

        let tituloprojeto2 = window.document.querySelector("p.tituloprojeto2").innerHTML = "Clima Tempo"
        let tituloprojeto3 = window.document.querySelector("p.tituloprojeto3").innerHTML = "Loja Nike"
        let tituloprojeto4 = window.document.querySelector("p.tituloprojeto4").innerHTML = "Calculadora JS"
        let tituloprojeto5 = window.document.querySelector("p.tituloprojeto5").innerHTML = "Sabor Em Foco"
        let tituloprojeto6 = window.document.querySelector("p.tituloprojeto6").innerHTML = "Relógio"
    }

    return(
        <div className="Header">
            <label htmlFor="pt"><p>BR</p></label>
            <input onClick={Portugues} type="radio" name="Language" id="pt" checked/>
            <label htmlFor="en"><p>US</p></label>
            <input onClick={English} type="radio" name="Language" id="en" />
        </div>
    )
}

export default Header