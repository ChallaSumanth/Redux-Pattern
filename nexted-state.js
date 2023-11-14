const redux = require('redux');
const produce = require('immer').produce;
const initialState = {
    name : 'Sumanth',
    address : {
        street : '123 Main St',
        city : 'Hyderabad',
        state : 'TS',
    }
}

//1.Action type

const STREET_UPDATED = 'STREET_UPDATED'

//2.Action Creator
const updateStreet = (street) =>{
    return  {
        type : STREET_UPDATED,
        payload : street,
    }
}

//3.reducer

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case STREET_UPDATED :
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload,
            //     },
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
            default:{
                return state
            }
    }
}
const store = redux.createStore(reducer)
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
})
store.dispatch(updateStreet('456 Main St'))

unsubscribe()