import Corpo from "./Corpo"

function Header(){

    function English(){
        let SubTitleCorpo = window.document.querySelector("p.subtitle")
        SubTitleCorpo.innerHTML = "Front End Developer"
    }

    function Portugues(){
        let SubTitleCorpo = window.document.querySelector("p.subtitle")
        SubTitleCorpo.innerHTML = "Desenvolvedora Front End"
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