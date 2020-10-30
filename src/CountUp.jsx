import React,{useState, useEffect} from 'react';

const CountUp = () => {
  const [agree, toggleAgree] = useState(0);

  const Agrees = () => {
    toggleAgree(agree + 1);
  }

  useEffect( () => {
    document.getElementById('add').addEventListener('click', Agrees)

    if(agree >= 10) {
      toggleAgree(0)
    }
    return() => {
      document.getElementById('add').removeEventListener('click', Agrees)
    }
  });

  return(
    <>
    <button id="add">賛成:{agree}</button>
    </>
    )
};
//returnの中では必ずネストで囲う必要がある
//functional componentではuseState（stateの設定）とuseEffect（ライフサイクルの設定）の理解は必要になります。
// useEffect()の中のreturn() => {}はアロー関数になっている。

export default CountUp;