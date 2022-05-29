import React from 'react';
import s from './Display.module.css';

type DisplayT = {
    value: string;
    color: string;
}

export const Display = (props: DisplayT) => {
    // const finalClass = `${props.value === props.maxValue ? s.red : s.normal} ${s.default}`;
    return (
        <div style={{color: props.color}} className={s.default}><span>{props.value}</span></div>
    )
}