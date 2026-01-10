import "../Styles/header.css"

const Header = () => {
  return (
    <div className='header'>
      <h1>Shooo</h1>
      {/* <button className='button'>Login</button> If u give "button" class, this will apply the button style from index.css if written there */}

      {/* <button className="button">Login</button> This will also get the CSS of button.css even if u didn't import it. Because .button class style's become global */}

      <button className="button">Login</button>
    </div>
  )
}

export default Header

/*
Header.jsx
- React component that renders header with a title and login button
- Imports header.css for header styles
- Any button with class="button" will take global button.css styles
- Props can be used later to make dynamic buttons or header elements
- Collision warning: shared class names may override intended styles


SIMPLE FORM: Collision warning: shared class names may override intended styles

“Be careful, if two components use .button, the styles might get mixed up.
Your component may not look like you expect.”
*/