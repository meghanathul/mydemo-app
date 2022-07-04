import React,{useReducer} from 'react'

const Demo = () => {
  const updateData=(state,action)=>{
    switch(action.type){
      case "INCREMENT":
        return {name:'abd'}
        case "DECREMENT" :
          return {age:10}
          default:
            return state
    }
  }
  const [state,dispatch]=useReducer(updateData,{name:'vvv',age:0})
  return (
    <>
     <h1>{state.name} || {state.age}</h1>
     {/* <button onClick={()=>dispatch({type:"INCREMENT",payload:0})}>INCREMENT</button>
     <button onClick={()=>dispatch({type:"DECREMENT",payload:0})}>DECREMENT</button> */}
    </>
  )
}

export default Demo