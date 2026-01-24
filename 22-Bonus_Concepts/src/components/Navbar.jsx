const Navbar = (props) => {

  const changeTheme = () => {
    if (props.theme === 'light') {
      props.setTheme('dark');
    }
    else {
      props.setTheme('light');
    }
  }

  return (
    <div>
      <p>{props.theme}</p>

      <button
        onClick={changeTheme}
      >Change Theme
      </button>

    </div>
  )
}

export default Navbar