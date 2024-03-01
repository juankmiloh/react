import PropTypes from 'prop-types';

// const newMessage = {
//   message: 'Hola mundo',
//   title: 'Fernando'
// };

// const getResult = (a,b) => {
//   return a + b;
// }


// Esto es un funcional component
export const FirstApp = ({title, subTitle, name}) => {

  console.log(title);
  
  return (
    <>
      {/* <h1>{ getResult(1,10) }</h1> */}
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h1>{ title }</h1>
      <h1>{ subTitle }</h1>
      <h1>{ name }</h1>
    </>
  )
}

// Definicion de PropTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

// Definir valores de props por defecto
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 12,
  name: 'Fernando Herrera'
}
