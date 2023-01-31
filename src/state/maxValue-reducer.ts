type MaxValueActionsType = ReturnType<typeof setMaxValueAC>

const initState = '0';

export const maxValueReducer = (state = initState, action: MaxValueActionsType) => {
    switch (action.type){
        case "SET-MAX-VALUE":{
            return state = action.payload
        }
        default: return state;
    }
}

export const setMaxValueAC = (maxvalue: string) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: maxvalue
    } as const
}
