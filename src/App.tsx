import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./components/Display";
import {CommonButton} from "./components/CommonButton";

const startValue = 0;
const maxValue = 5;

function App() {
    const countValue = localStorage.getItem('countValue') || 0;
    // useEffect(() => {
    //     let countAsString = localStorage.getItem('countValue');
    //     if (countAsString) {
    //         let newCount = JSON.parse(countAsString);
    //         setCount(newCount);
    //     }
    // }, []);
    const [count, setCount] = useState<number>(+countValue)

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])


    function IncCount() {
        setCount(count + 1);
    }

    function ResetCount() {
        setCount(startValue);
    }

    return (
        <div className="App">
            <Display count={count} maxValue={maxValue}/>
            <div className="buttons">
                <CommonButton name={'inc'} callBack={IncCount} disabled={count === maxValue} className="button"/>
                <CommonButton name={'reset'} callBack={ResetCount} disabled={count === startValue} className="button"/>
            </div>

        </div>
    );
}

export default App;
// const currentValue = localStorage.getItem('countValue') || 0;