

const INTITIAL_STATE={
collections: {}
}
const shopReducer=(state=INTITIAL_STATE, action)=>{
    switch (action.type) {
        case 'SET_COLLECTIONS':
            return{
                ...state,
               collections:{ ...action.collections}

            };
        default:
            return state;
    }
}
export default shopReducer;