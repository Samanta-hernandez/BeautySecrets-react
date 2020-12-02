import Inicio from "../componentes/Inicio"
import Menu from "../componentes/Menu"
import Ncursos from "../componentes/Ncursos"
import Nosotros from "../componentes/Nosotros"
import Pie from "../componentes/Pie"


function Home() {
    return (
        <>
        <Menu/>
        <Inicio/>
        <Ncursos />
        <Nosotros />
        <Pie />
        
        </>
    )
}
export default Home