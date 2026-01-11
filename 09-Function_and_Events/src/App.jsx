import React from "react";
import "./App.css";

const App = () => {

  /* ===============================
     GLOBAL FUNCTIONS (EVENT HANDLERS)
     =============================== */

  // Called when button is double clicked
  function handleDoubleClick() {
    console.log("Button is Double Clicked");
  }

  // Called when button is clicked
  function handleClick() {
    console.log("Button is Clicked");
  }

  // Called when mouse enters button
  function handleMouseEnter() {
    console.log("Mouse Entered");
  }

  // Function with parameter (used for input)
  function handleInputChange(value) {
    console.log("Input Value:", value);
  }

  return (
    <div className="container">

      {/* ===============================
          1. BASIC BUTTON EVENTS
         =============================== */}
      <h1>1. Button Events</h1>

      {/* ❌ WRONG: onDoubleClick={handleDoubleClick()} "FUNCTION CALLED IMEDIATELY" */}
      {/* ✅ CORRECT: pass function reference */}
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>

      <button onClick={handleClick}>Click Me</button>

      <button onMouseEnter={handleMouseEnter}>Mouse Enter</button>

      {/* ===============================
          2. INLINE FUNCTION
         =============================== */}
      <h1>2. Inline Function</h1>

      <button
        onClick={() => {
          console.log("Inline Click Done");
        }}
      >Inline Click</button>

      {/* ===============================
          3. INPUT EVENTS
         =============================== */}
      <h1>3. Input Events</h1>

      {/* Simple onChange */}
      <input
        type="text"
        placeholder="Type something..."
        onChange={() => {
          console.log("User is Typing");
        }}
      />

      {/* Passing event object */}
      <input
        type="text"
        placeholder="With event object"
        onChange={(e) => {
          console.log("User is typing:", e.target.value);
        }}
        onClick={(e) => {
          console.log("Clicked Event:", e);
        }}
      />

      {/* Passing value to function */}
      <input
        type="text"
        placeholder="Passing value to function"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />

      {/* ===============================
          4. MOUSE MOVE EVENT
         =============================== */}
      <h1>4. Mouse Move Event</h1>

      <div
        className="box"
        onMouseMove={(e) => {
          console.log("X:", e.clientX, "Y:", e.clientY);
        }}
      >Move Mouse Here</div>

      {/* ===============================
          5. SCROLL EVENT
         =============================== */}
      <h1>5. Scroll Event</h1>

      <div
        className="scroll-container"
        onWheel={(e) => {
          console.log("Scrolling...");
          console.log("DeltaY:", e.deltaY);

          if (e.deltaY > 0) {
            console.log("Scrolling Down");
          } else {
            console.log("Scrolling Up");
          }
        }}
      >
        <div className="page page1">Page 1</div>
        <div className="page page2">Page 2</div>
      </div>

    </div>
  );
};

export default App;