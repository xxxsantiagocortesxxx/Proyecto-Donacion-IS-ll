import Footer from "./Layout/Footer";
import Navbar from "./Layout/NavBar";
import Sidebar from "./Layout/SideBar";

import { useModuleStore } from "./moduleStore";
//modulos cruds
import {CarouselMain as Main} from "./Main/Main";
import { MiFormulario } from "./Form/Formulario";
import Consultar from "./CRUD/Consultar";
import Modificar from "./CRUD/Modificar";
import Eliminar from "./CRUD/Eliminar";


function App() {
  
  const handleModules = () => {
    const { count } = useModuleStore();

    switch (count) {
      case 0:
        return <Main></Main>;

      case 1:
        return <MiFormulario></MiFormulario>;

      case 2:
        return <Consultar></Consultar>;

      case 3:
        return <Modificar></Modificar>;

      case 4:
        return <Eliminar></Eliminar>;

      default:
        alert("modulo no encontrado");
        break;
    }
  };

  return (
    <>
      <div className="h-screen  ">
        {/* NavBAr */}
        <div className="">
          <Navbar></Navbar>
        </div>

        <div className="h-4/6  flex  ">
          {/* area de contenidos */}
          <div className="w-4/5 bg-slate-400 overflow-auto">
            {/* -----unidades---------- */}

            {handleModules()}

            {/* -------------------- */}
          </div>

          {/* SideBAr */}
          <div className="w-1/5 flex justify-center">
            <Sidebar></Sidebar>
          </div>
        </div>

        {/* Footer  */}
        <div className="h-auto">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
