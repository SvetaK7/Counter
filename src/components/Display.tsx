import React from 'react';
import s from './Display.module.css';

type DisplayT = {
    value: string;
    color: string;
}

export const Display = (props: DisplayT) => {
    return (
        <div style={{color: props.color}} className={s.default}><span>{props.value}</span></div>
    )
}