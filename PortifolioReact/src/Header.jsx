import TituloInicial from "./TituloInicial"
import Infos from "./Infos"

function Header(){

    function English(){
        let SubTitleCorpo = window.document.querySelector("p.subtitle").innerHTML = "Front End Developer"
        let ApresentacaoTitulo = window.document.querySelector("h1.ApresentacaoTitulo").innerHTML ="Hello, my name is Thyale!"
        let ApresentacaoText = window.document.querySelector("p.ApresentacaoText").innerHTML = "I have already completed the first period of two undergraduate courses, Advertising Production at Facottur College, and Interior Design at Esuda College of Human Sciences. However, after much thought and study, I made the decision to take a chance on IT, an area previously unknown to me. I am currently studying Systems Analysis and Development at Estácio and I am always looking to deepen my knowledge in extra curricular courses, in addition to practicing and dedicating myself a lot to test projects, always aiming for growth."
    }

    function Portugues(){
        let SubTitleCorpo = window.document.querySelector("p.subtitle").innerHTML = "Desenvolvedora Front End"
        let ApresentacaoTitulo = window.document.querySelector("h1.ApresentacaoTitulo").innerHTML ="Olá, me chamo Thyale!"
        let ApresentacaoText = window.document.querySelector("p.ApresentacaoText").innerHTML = "Já finalizei o primeiro período em dois cursos de graduação, Produção publicitária na faculdade facottur, e Design de interiores na faculdade de ciências humanas Esuda. Porém depois de muito pensar e estudar, tomei a decisão de me arriscar em TI, uma área até então desconhecida para mim. Atualmente curso Análise e desenvolvimento de sistemas na Estácio e estou buscando sempre aprofundar meus conhecimentos em cursos extras curriculares, além de praticar e me dedicar bastante em projetos testes, sempre mirando no crescimento."
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