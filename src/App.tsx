import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {CommonButton} from "./components/CommonButton";
import {DisplaySettingValueCounter} from "./components/DisplaySettingValueCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {setStartValueAC} from "./state/startValue-reducer";
import {setMaxValueAC} from "./state/maxValue-reducer";
import {incValueAC, setValueAC} from "./state/counter-reducer";

function App() {
  const startValue = useSelector<AppRootStateType, string>(state => state.startValue)
  const maxValue = useSelector<AppRootStateType, string>(state => state.maxValue)
  // @ts-ignore
  const countValue = useSelector<AppRootStateType, string>(state => state.countValue.value)
  const dispatch = useDispatch();

  const [color, setColor] = useState('green');

  const getOnChangeMaxValue = (maxvalue: string) => {
    let action = setMaxValueAC(maxvalue);
    dispatch(action)
  }
  const getOnChangeStartValue = (minvalue: string) => {
    let action = setStartValueAC(minvalue);
    dispatch(action)
  }
  const setSettingValue = () => {
    dispatch(setValueAC(startValue));
    if (countValue === maxValue) {
      setColor('red')
    }
  }

  useEffect(() => {
    if (+startValue < 0 || +maxValue < 0) {
      dispatch(setValueAC('value negative!!'))
      setColor('red');
    } else if (+startValue > 0 && startValue === maxValue) {
      dispatch(setValueAC('Incorrect value!'))
      setColor('red');
    } else if (maxValue < startValue) {
      dispatch(setValueAC('max value can not less start'))
      setColor('red');
    } else {
      dispatch(setValueAC(+countValue ? countValue : 'enter value and press set'))
      setColor('green');
    }
  }, [maxValue, startValue])

  useEffect(() => {
    if (countValue === maxValue) {
      setColor('red');
    }
  }, [countValue, maxValue])

  useEffect(() => {
    localStorage.setItem('countValue', countValue)
  }, [countValue])
  useEffect(() => {
    localStorage.setItem('maxValue', maxValue)
  }, [maxValue])
  useEffect(() => {
    localStorage.setItem('startValue', startValue)
  }, [startValue])

  function IncCount() {
    dispatch(incValueAC())
  }

  function ResetCount() {
    dispatch(setValueAC(startValue))
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
        <Display value={countValue} color={color}/>
        <div className="buttons">
          <CommonButton name={'inc'} callBack={IncCount} disabled={countValue == maxValue} className="button"/>
          <CommonButton name={'reset'} callBack={ResetCount} disabled={countValue === startValue}
                        className="button"/>
        </div>
      </div>
    </div>


  );
}

export default App;
