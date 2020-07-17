import { v1 as uuid } from 'uuid';

export const ItemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state,
            {
                title: action.item.title,
                id: uuid()
            }]
        case 'REMOVE_ITEM':
            return state.filter(t => t.id !== action.item.id)
        default:
            return state;
    }
}