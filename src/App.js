
import './App.css';
import Testimonio from "./Components/Testimonio.js"

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Hola Soy Ana Leticia</h1>
        <Testimonio
          nombre="Ana Leticia"
          imagen="cepillo"
          cargo="Estudiante de Inicial 2"
          testimonio="Me gusta cantar, jugar, ver videos,el chocolate y unicornios amo la película Encanto y amo a mi familia. Cuando me levanto por la mañana y después de comer cepillo mis dientecitos"
        />
        <Testimonio
          nombre="Ana Leticia"
          imagen="comer"
          cargo="Estudiante de Inicial 2"
          testimonio="Cuando como toda mi comida sin levantarme de la mesa, mis padres me dan un premio."
        />
        <Testimonio
          nombre="Ana Leticia"
          imagen="hago-mis-tareas"
          cargo="Estudiante de Inicial 2"
          testimonio="Soy una niña muy inteligente y me gusta mucho colorear."
        />
      </div>
    </div>
  );
}

export default App;
