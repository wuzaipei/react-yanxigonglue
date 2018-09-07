import { createStore } from 'redux'

var initState = { 
                    score: 0,
                    
                }
var fn = function (state = initState, action) {
    var score = state.score
    
    // const newsList = state.newsList
    switch (action.type) {
        case 'addscore':
        // state.count++
        // console.log(state)
        score = score + action.currentScore
        return { score: score  }

        
        default:
            return state
    }
}




const store = createStore(fn)



export default store;