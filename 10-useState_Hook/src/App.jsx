import React, { useState } from 'react'

const App = () => {

  /* ===================
  PAGE 1 (Multiple States)
  =================== */
  const [num, setNum] = useState(25)
  const [usename, setUsename] = useState('Sarthak')
  const [array, setArray] = useState([10, 20, 30])

  const changeNum = () => {
    setNum(18)
    setUsename('Ayan')
    setArray([60, 70, 80])
  }


  /* ===================
  PAGE 2 (Async State)
  =================== */
  const [number, setNumber] = useState(10)

  const changeNumber = () => {
    // setNumber(number) // React does not Render, cuz State is not updating, u just putting the same value in state

    setNumber(18)
    console.log(number); // Still print in console 10, cuz SetState is asynchronous. Takes long to print in console, but UI will update immediately.
  }


  /* ===================
  PAGE 3 (Object state) 
  &
  PAGE 4 (Array state)
  =================== */

  /* useState with OBJ */
  const [obj, setObj] = useState({
    language: "Python", library: "Pandas"
  })

  /* useState with Arr */
  const [arr, setArr] = useState([10, 20, 30])


  /* ------- (First way to change the an OBJ/ARR "DESTRUCTURING") ------- */

  const btnClickedOBJ = () => { // OBG CHANGE
    /*
    ❌ WRONG (never do this):
    obj.language = "JS"
    setObj(obj)

    Why? Because React says:
    “This is the SAME object. Why should I re-render?”
    */

    // ✅ CORRECT
    const newObj = { ...obj }
    newObj.language = 'JavaScript'
    newObj.library = 'ReactJS'
    setObj(newObj)
  }

  const btnClickedARR = () => { // Arr CHANGE
    const newArr = [...arr]
    newArr.push(99, 100)
    setArr(newArr)
  }

  /* ------- (Second way to change the an OBJ/ARR "PREVIOUS STATE") ------- */

  const btnClickedOBJ2 = () => { // OBJ CHANGE
    setObj(prev => ({ ...prev, language: 'JavaScript', library: 'ReactJS' }))
  }

  const btnClickedARR2 = () => { // Arr CHANGE
    setArr(prev => ([...prev, 99, 100, 101, 102, 103]))
  }


  /* ===================
  PAGE 5 (Batch Updates)
  =================== */
  const [n, setN] = useState(10)

  const batchFunc = () => {
    /*
    setN(n + 1)
    setN(n + 1)
    setN(n + 1)

    This is a BAD way to update multiple states. setN will update only with 1, not 3. Cuz all 3 setN are running very fast and it can't identify the value of n. We call this "BATCH UPDATES".

    React groups updates to improve performance. This is called BATCHING.
    */

    setN(prev => (prev + 1))
    setN(prev => (prev + 1))
    setN(prev => (prev + 1))
  }

  return (
    <div>
      <div id="page1">
        <h1>{usename}, {num}, {array}</h1>
        <button onClick={changeNum}>Click Me</button>
      </div>

      <div id="page2">
        <h1>{number}</h1>
        <button onClick={changeNumber}>Click Me</button>
      </div>

      <div id="page3">
        <h1>{obj.language}, {obj.library}</h1>
        <button onClick={btnClickedOBJ}>Click Me</button>
      </div>

      <div id="page4">
        <h1>{arr}</h1>
        <button onClick={btnClickedARR}>Click Me</button>
      </div>

      <div id="page5">
        <h1>{n}</h1>
        <button onClick={batchFunc}>Click Me</button>
      </div>
    </div>
  )
}

export default App


/*
===========================
LEARNING NOTES
===========================

This file is a practice playground to understand how React's useState works
with different data types (number, string, array, object) and how React
updates state internally.

--------------------------------
PAGE 1 — MULTIPLE STATES
--------------------------------
Here, multiple useState hooks are used together (number, string, array).
React allows this and treats each state separately.

When changeNum() is called, all setState calls are queued, and React re-renders
the component ONLY ONCE with the new values. This is normal and efficient.

Important lesson:
- Multiple setState calls in the same function do NOT cause multiple re-renders.

--------------------------------
PAGE 2 — ASYNCHRONOUS STATE
--------------------------------
setState is asynchronous, meaning React does NOT update state immediately.

That is why:
- console.log(number) prints the OLD value
- UI still updates correctly

Mental model:
"I ask React to update state → React does it after this function finishes."

Never rely on console.log right after setState to check updated values.
Use useEffect if you want to observe changes.

--------------------------------
PAGE 3 — OBJECT STATE
--------------------------------
React state must NOT be mutated directly.

Wrong approach:
obj.language = "JS"
setObj(obj)

Correct approach:
- Create a NEW object using spread (...)
- Modify the new object
- Pass the new object to setState

This is required because React checks references, not values.
If reference does not change, React will not re-render.

--------------------------------
PAGE 4 — ARRAY STATE
--------------------------------
Arrays follow the same rule as objects: never mutate directly.

Two approaches are shown:

1) Copy + push (works, but risky):
  const newArr = [...arr]
  newArr.push(99)
  setArr(newArr)

This can fail when updates happen quickly (batching),
because 'arr' might be an outdated value.

2) Previous-state approach (BEST PRACTICE):
  setArr(prev => [...prev, 99, 100, 101])

This is always safe because React guarantees that 'prev'
is the latest state value.

Rule:
If new state depends on old state → ALWAYS use prev => ...

--------------------------------
PAGE 5 — BATCH UPDATES (VERY IMPORTANT)
--------------------------------
React batches multiple state updates for performance.

Bad example:
setN(n + 1)
setN(n + 1)
setN(n + 1)

All three use the SAME old value of 'n',
so the final result increases only by 1.

Correct example:
setN(prev => prev + 1)
setN(prev => prev + 1)
setN(prev => prev + 1)

Here, each update receives the updated value from the previous one,
so the final result increases correctly.

This behavior is called "Batching" and is intentional.

--------------------------------
FINAL GOLDEN RULES
--------------------------------
1) Never mutate state directly
2) setState is asynchronous
3) React batches updates
4) If new state depends on old state → use prev => ...

Understanding these rules means you understand the CORE of React state.

This file exists only for learning and experimentation.
===========================
*/