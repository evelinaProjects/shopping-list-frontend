export const ItemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]        
            case 'SET_ITEMS':
            return action.items
        case 'REMOVE_ITEM':
            return state.filter(t => t._id !== action.item._id)
        default:
            return state;
    }
}