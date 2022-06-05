import React, {ChangeEvent} from 'react';

type DisplaySettingValueCounterType = {
    getOnChangeMaxValue: (maxvalue: string) => void
    getOnChangeStartValue: (maxvalue: string) => void
    maxValue: string
    startValue: string
}

export const DisplaySettingValueCounter = (props:DisplaySettingValueCounterType) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.getOnChangeMaxValue(e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.getOnChangeStartValue(e.currentTarget.value)
    }

    return (
        <div className="inputsNumber">
            <div>
                <span>max value:</span>
                <input value={props.maxValue} type={"number"} onChange={onChangeMaxValue}/>
            </div>
            <div>
                <span>start value:</span>
                <input value={props.startValue} type={"number"} onChange={onChangeStartValue}/>
            </div>
        </div>
    )
}