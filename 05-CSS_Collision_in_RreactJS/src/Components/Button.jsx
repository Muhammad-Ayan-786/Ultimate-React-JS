import "../Styles/button.css"

const Button = () => {
  return (
    <div className='button'>Button</div>
  )
}

export default Button

/*
Button.jsx
- React component that returns a button element
- Applies styling from button.css
- Props can be used later for dynamic labels or click events
- Current setup: button class is global, may affect other components
- Future tip: use CSS Modules or Tailwind to avoid collision
*/