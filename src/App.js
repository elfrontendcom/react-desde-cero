import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://i.pinimg.com/originals/09/eb/2a/09eb2a0df057172facf31015a65382f8.jpg" alt="city"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p>Tu futuro te está esperando</p>
            <a href="https://ed.team" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
    </div>
  </>
)

export default App;


// Reglas JSX
// 1. Toda etiqueta debe cerrarse
// 2. Los componentes deben devolver un solo elemento padre
// 3. Apoyarse de los Fragment(<> </>) cuando necesito devolver dos elementos
// 4. Fragment  =>  <> hijos </>
// 5. img siempre se cierra
// 6. className => classNameName
// 7. for => htmlFor
// 8. NO if, else, while