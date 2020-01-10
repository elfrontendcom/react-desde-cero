import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
  {
    'title': 'React desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': 40,
    'profesor': 'Beto Quiroga',
  },
  {
    'title': 'Drupal desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN',
    'price': 30,
    'profesor': 'Beto Quiroga',
  },
  {
    'title': 'Go desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN',
    'price': 50,
    'profesor': 'Alexys Lozada',
  },
  {
    'title': 'Pug desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-09/cursos-pug.jpg',
    'price': 10,
    'profesor': 'Alvaro Felipe',
  },
]

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
      {
        cursos.map((curso, index) => (<Curso 
          title={curso.title} 
          image={curso.image}
          price={curso.price}
          profesor={curso.profesor}
          key={index}
        /> ))
      }
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