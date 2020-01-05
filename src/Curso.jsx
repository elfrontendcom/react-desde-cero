import React from 'react'

const curso = {
  'title': 'React desde Cero',
  'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
  'price': '50 USD',
}

const Curso = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img 
        src={curso.image} 
        alt={curso.title} 
      />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="ts s-mb-2 s-center">{curso.title}</h3>
      <div className="s-main-center">
<a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${curso.price}`}</a>
      </div>
    </div>
  </article>
)

export default Curso;