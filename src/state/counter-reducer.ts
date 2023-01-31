type InitStateType = typeof initState
// type InitStateType = {
//     value: string | number
// }
const initState = {
    value: '0'
}

export const counterReducer = (state: InitStateType = initState, action: CounterActionType) => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state, value: +state.value + 1
            }
        }
        case "SET-VALUE": {
            return {
                ...state, value: action.payload
            }
        }
        default: return state;
    }

}
export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueAC = (newValue: string) => ({type: 'SET-VALUE', payload: newValue} as const)

type IncValueType = ReturnType<typeof incValueAC>
type SetValueType = ReturnType<typeof setValueAC>
type CounterActionType = IncValueType | SetValueType