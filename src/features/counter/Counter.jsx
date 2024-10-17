import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incCount,decCount } from './counterSlice'
function Counter() {
    var {count} = useSelector(state=>state.counter)
    var dispatch = useDispatch()

  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(incCount())}}>Increment</button>
        <button onClick={()=>{dispatch(decCount())}}>Decrement</button>

    </div>
  )
}

export default Counter