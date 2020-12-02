import "./styles/estilos.css";
import Inicio from "./componentes/Inicio";
import Menu from "./componentes/Menu";
import Ncursos from "./componentes/Ncursos";
import Nosotros from "./componentes/Nosotros";
import Pie from "./componentes/Pie";

function App() {
  return (
    <>
      <Menu />
      <Inicio />
      <Ncursos />
      <Nosotros />
      <Pie />
    </>
  );
}

export default App;
