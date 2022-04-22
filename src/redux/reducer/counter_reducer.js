export default (state = {num: 0}, action) => {
    // console.log(action, 'messi')
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                num: state.num + action.payload
            }
        case 'decrement':
            return {
                ...state,
                num: state.num - action.payload
            }
        default:
            return state
    }
}