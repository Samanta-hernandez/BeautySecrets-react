import "./styles/estilos.css";
import Menu from "./componentes/Menu";
import Inicio from "./componentes/Inicio";
import Pie from "./componentes/Pie";
import Ncursos from "./componentes/Ncursos";
import Nosotros from "./componentes/Nosotros";

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
