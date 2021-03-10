let state = {count: 0};

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        //takes prev state and adds 1
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
  // state gets assigned the return value of changeState function
  state = changeState(state, action)
  //we want to call render every time state is changed
  render()
}

function render(){
  document.body.textContent = state.count
}

// call the render function
// render() 

dispatch({type: 'INCREASE_COUNT'})
dispatch({type: 'INCREASE_COUNT'}) 