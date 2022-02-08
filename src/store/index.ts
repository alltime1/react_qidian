import { createStore } from 'redux';
interface actionTs {
  type?:string|undefined
}
let states = {
  age:10
}
let counter =  function(state:{
  age:any
} =states,action:actionTs) {
  switch(action.type){
    case "plus" :
      return state.age + 1;
      default:
        return state
  }
}
let store = createStore(counter)
store.subscribe(()=>{
  console.log(store.getState());
  
})
export default store