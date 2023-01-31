type StartValueActionsType = ReturnType<typeof setStartValueAC>


const initState: string = '0';

export const startValueReducer = (state= initState, action: StartValueActionsType) => {
    switch (action.type){
        case "SET-START-VALUE": {
            return state = action.payload
        }
        default: return state;
    }
}

export const setStartValueAC = (minvalue: string) => {
    return {
        type: 'SET-START-VALUE',
        payload: minvalue
    } as const
}