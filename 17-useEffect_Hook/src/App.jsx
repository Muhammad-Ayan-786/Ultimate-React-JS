import { useEffect, useState } from "react"

const App = () => {

  // ============================================
  // EXAMPLE 1: useEffect WITHOUT DEPENDENCIES
  // ============================================
  // This useEffect runs AFTER every render
  // No dependency array means it runs every time the component updates

  const [count1, setCount1] = useState(0)
  const [message1, setMessage1] = useState("")

  useEffect(function () {
    // This runs every time the component renders
    // Note: We only log here to avoid infinite loops from state updates
    console.log("Example 1: useEffect ran (no dependencies)")
  })
  // Notice: No dependency array [] here
  // WARNING: Updating state here would cause infinite re-renders!


  // ============================================
  // EXAMPLE 2: useEffect WITH EMPTY DEPENDENCY ARRAY
  // ============================================
  // This useEffect runs ONLY ONCE when component first mounts
  // Empty array [] means it never runs again after initial mount

  const [count2, setCount2] = useState(0)
  const [message2, setMessage2] = useState("")

  useEffect(function () {
    // This runs only once when component first loads
    setMessage2("Component mounted! useEffect ran once.")
    console.log("Example 2: useEffect ran (empty dependency array - runs once)")
  }, [])
  // Empty array [] = runs only once on mount


  // ============================================
  // EXAMPLE 3: useEffect WITH DEPENDENCIES
  // ============================================
  // This useEffect runs ONLY when the values in dependency array change
  // We can watch specific state variables

  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const [message3, setMessage3] = useState("")

  useEffect(function () {
    // This runs only when countA changes
    setMessage3(`Count A changed to: ${countA}`)
    console.log("Example 3: useEffect ran because countA changed")
  }, [countA])
  // [countA] = runs only when countA changes


  // ============================================
  // EXAMPLE 4: MULTIPLE DEPENDENCIES
  // ============================================
  // useEffect can watch multiple values
  // Runs when ANY of the dependencies change

  const [valueX, setValueX] = useState(0)
  const [valueY, setValueY] = useState(0)
  const [message4, setMessage4] = useState("")

  useEffect(function () {
    // This runs when valueX OR valueY changes
    setMessage4(`X: ${valueX}, Y: ${valueY}`)
    console.log("Example 4: useEffect ran because valueX or valueY changed")
  }, [valueX, valueY])
  // [valueX, valueY] = runs when either value changes


  // ============================================
  // EXAMPLE 5: useEffect WITH CLEANUP FUNCTION
  // ============================================
  // Cleanup function runs before the effect runs again or when component unmounts
  // Useful for cleaning up timers, subscriptions, etc.

  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(function () {
    if (!isTimerRunning) return

    // Set up an interval
    const intervalId = setInterval(function () {
      setTimer(prev => prev + 1)
    }, 1000)

    // Cleanup function - runs when:
    // 1. Component unmounts
    // 2. Before effect runs again (if dependencies change)
    return function cleanup() {
      clearInterval(intervalId)
      console.log("Example 5: Cleanup function ran - interval cleared")
    }
  }, [isTimerRunning])
  // Cleanup runs when isTimerRunning changes or component unmounts


  /*
  | React word | What it means                |
  | ---------- | ---------------------------- |
  | Mount      | Component appears first time |
  | Update     | State / props change         |
  | Unmount    | Component is removed         |

  */

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1 className="main-title">useEffect Hook Examples</h1>
        <p className="subtitle">Learn how useEffect works with different dependency arrays</p>
      </header>

      {/* Example 1: No Dependencies */}
      <section className="example-card">
        <div className="card-header">
          <h2>Example 1: No Dependencies</h2>
          <span className="badge badge-warning">Runs Every Render</span>
        </div>
        <div className="card-content">
          <p className="description">
            useEffect without dependency array runs after every render.
            Click the button to see it run each time!
          </p>
          <div className="counter-display">
            <span className="label">Count:</span>
            <span className="value">{count1}</span>
          </div>
          <div className="message-box">
            <p>{message1 || "Click button to see useEffect in action..."}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setCount1(count1 + 1)
              setMessage1(prev => prev + "useEffect ran! ")
            }}
          >
            Increment Count
          </button>
        </div>
      </section>

      {/* Example 2: Empty Dependency Array */}
      <section className="example-card">
        <div className="card-header">
          <h2>Example 2: Empty Dependency Array</h2>
          <span className="badge badge-success">Runs Once</span>
        </div>
        <div className="card-content">
          <p className="description">
            useEffect with empty array [] runs only once when component first mounts.
            No matter how many times you click, it won't run again!
          </p>
          <div className="counter-display">
            <span className="label">Count:</span>
            <span className="value">{count2}</span>
          </div>
          <div className="message-box">
            <p>{message2 || "Waiting for component mount..."}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setCount2(count2 + 1)}
          >
            Increment Count
          </button>
        </div>
      </section>

      {/* Example 3: Single Dependency */}
      <section className="example-card">
        <div className="card-header">
          <h2>Example 3: Single Dependency</h2>
          <span className="badge badge-info">Runs When Count A Changes</span>
        </div>
        <div className="card-content">
          <p className="description">
            useEffect with [countA] runs only when countA changes.
            Notice it doesn't run when countB changes!
          </p>
          <div className="dual-counter">
            <div className="counter-display">
              <span className="label">Count A:</span>
              <span className="value">{countA}</span>
            </div>
            <div className="counter-display">
              <span className="label">Count B:</span>
              <span className="value">{countB}</span>
            </div>
          </div>
          <div className="message-box">
            <p>{message3 || "Change Count A to see useEffect run..."}</p>
          </div>
          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={() => setCountA(countA + 1)}
            >
              Increase A
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setCountB(countB + 1)}
            >
              Increase B
            </button>
          </div>
        </div>
      </section>

      {/* Example 4: Multiple Dependencies */}
      <section className="example-card">
        <div className="card-header">
          <h2>Example 4: Multiple Dependencies</h2>
          <span className="badge badge-info">Runs When X or Y Changes</span>
        </div>
        <div className="card-content">
          <p className="description">
            useEffect with [valueX, valueY] runs when EITHER valueX OR valueY changes.
            Try changing both values!
          </p>
          <div className="dual-counter">
            <div className="counter-display">
              <span className="label">Value X:</span>
              <span className="value">{valueX}</span>
            </div>
            <div className="counter-display">
              <span className="label">Value Y:</span>
              <span className="value">{valueY}</span>
            </div>
          </div>
          <div className="message-box">
            <p>{message4 || "Change X or Y to see useEffect run..."}</p>
          </div>
          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={() => setValueX(valueX + 1)}
            >
              Increase X
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setValueY(valueY + 1)}
            >
              Increase Y
            </button>
          </div>
        </div>
      </section>

      {/* Example 5: Cleanup Function */}
      <section className="example-card">
        <div className="card-header">
          <h2>Example 5: Cleanup Function</h2>
          <span className="badge badge-danger">With Cleanup</span>
        </div>
        <div className="card-content">
          <p className="description">
            useEffect can return a cleanup function that runs before the effect runs again
            or when the component unmounts. Perfect for cleaning up timers!
          </p>
          <div className="counter-display">
            <span className="label">Timer:</span>
            <span className="value timer-value">{timer}s</span>
          </div>
          <div className="message-box">
            <p>
              {isTimerRunning
                ? "Timer is running! Check console to see cleanup when you stop it."
                : "Start the timer to see it count up. Stop it to see cleanup function run!"}
            </p>
          </div>
          <div className="button-group">
            <button
              className="btn btn-success"
              onClick={() => {
                setIsTimerRunning(true)
                setTimer(0)
              }}
            >
              Start Timer
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setIsTimerRunning(false)}
            >
              Stop Timer
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>💡 Open browser console to see useEffect logs!</p>
      </footer>
    </div>
  )
}

export default App