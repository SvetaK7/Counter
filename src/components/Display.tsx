import React from 'react';
import s from './Display.module.css';

type DisplayT = {
    count: number
    maxValue: number
}

export const Display = (props: DisplayT) => {
    const finalClass = `${props.count === props.maxValue ? s.red : s.normal} ${s.default}`;
    return (
        <div className={finalClass}><span>{props.count}</span></div>
    )
}