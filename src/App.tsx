import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./components/Display";
import {CommonButton} from "./components/CommonButton";
import {DisplaySettingValueCounter} from "./components/DisplaySettingValueCounter";

const countValue = localStorage.getItem('countValue') || '0';
const maxValueStor = localStorage.getItem('maxValue') || '0';
const startValueStor = localStorage.getItem('startValue') || '0';

function App() {
    // useEffect(() => {
    //     let countAsString = localStorage.getItem('countValue');
    //     if (countAsString) {
    //         let newCount = JSON.parse(countAsString);
    //         setCount(newCount);
    //     }
    // }, []);
    const [value, setValue] = useState<string>(countValue);
    const [color, setColor] = useState('green');
    const [maxValue, setMaxValue] = useState<string>(maxValueStor)
    const [startValue, setStartValue] = useState(startValueStor)
    const getOnChangeMaxValue = (maxvalue: string) => {
        setMaxValue(maxvalue)
    }
    const getOnChangeStartValue = (minvalue: string) => {
        setStartValue(minvalue)
    }
    const setSettingValue = () => {
        setValue(startValue);
        if (value === maxValue) {
            setColor('red')
        }
    }
    useEffect(() => {
        if (+startValue < 0 || +maxValue < 0) {
            setValue('value negative!!');
            setColor('red');
        } else if (+startValue > 0 && startValue === maxValue) {
            setValue('Incorrect value!');
            setColor('red');
        } else if (maxValue < startValue) {
            setValue('max value can not less start');
            setColor('red');
        } else {
            setValue(+value ? value : 'enter value and press set');
            setColor('green');
        }
    }, [maxValue, startValue])
    useEffect(() => {
        if (value === maxValue) {
            setColor('red');
        }
    }, [value, maxValue])

    useEffect(() => {
        localStorage.setItem('countValue', value)
    }, [value])
    useEffect(() => {
        localStorage.setItem('maxValue',maxValue)
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('startValue', startValue)
    }, [startValue])

    function IncCount() {
        setValue(`${+value + 1}`);
    }

    function ResetCount() {
        setValue(startValue);
        setColor('green');
    }


    return (
        <div className="allCounters">
            <div className="App">
                <DisplaySettingValueCounter
                    getOnChangeMaxValue={getOnChangeMaxValue}
                    getOnChangeStartValue={getOnChangeStartValue}
                    maxValue={maxValue}
                    startValue={startValue}
                />
                <div className="buttons">
                    <CommonButton name={'set'} callBack={setSettingValue} disabled={color === 'red'}
                                  className="button"/>
                </div>
            </div>
            <div className="App">
                <Display value={value} color={color}/>
                <div className="buttons">
                    <CommonButton name={'inc'} callBack={IncCount} disabled={value === maxValue} className="button"/>
                    <CommonButton name={'reset'} callBack={ResetCount} disabled={value === startValue}
                                  className="button"/>
                </div>
            </div>
        </div>


    );
}

export default App;
