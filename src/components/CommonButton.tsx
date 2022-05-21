import React from 'react';
import s from './ButtonInc.module.css'

type CommonButtonT = {
    name: string
    callBack: () => void
    disabled: boolean
    className: string
}


export const CommonButton = (props: CommonButtonT) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <button className={props.className}
                disabled={props.disabled}
                onClick={onClickHandler}>{props.name}
        </button>
    )
}