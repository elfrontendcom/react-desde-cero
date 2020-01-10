import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="ts s-mb-2 s-center">{title}</h3>
      <div className="s-main-center">
        {profesor}
      </div>
      <div className="s-main-center">
<a className="button--ghost-alert button--tiny" href="https://ed.team">{`$${price} USD`}</a>
      </div>
    </div>
  </article>
)

Curso.propTypes = {
  title:    PropTypes.string,
  image:    PropTypes.string,
  price:    PropTypes.number,
  profesor: PropTypes.string,
}

Curso.defaultProps = {
  title:    'No se encontró título',
  image:    'https://www.ignaciolarre.com/wp-content/uploads/2018/10/mi-parte-oscura-450x253.jpg',
  price:    '0',
  profesor: '',
}

export default Curso;