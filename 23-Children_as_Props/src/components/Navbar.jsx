import Nav2 from './Nav2'

const Navbar = (props) => {

  console.log(props);
  console.log(props.children);

  return (
    <div className='nav'>
      <h2>Sheriyans</h2>
      {props.children[0]}
      {props.children[1]}
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar