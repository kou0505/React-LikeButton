import React, {useState, useEffect} from 'react';
//関数名は基本的にファイル名と同じにする
//functional componentで記述していく

const LikeButton = () => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);

  const CountUp = () => {//メソッドを記述していく
    counter(count + 1)//this.setStateの代替
  }

  useEffect( () => {
    document.getElementById('counter').addEventListener('click', CountUp)
    if(count >= 10) {
      counter(0)
    }
    return () => {
        document.getElementById('counter').removeEventListener('click', CountUp)
    }
  }, [limit]);//変化したらcomponetDidMountの処理を始める


  return(
    <>
    <button id="counter">いいね数：{count}</button>
    <button onClick = {() => release(!limit)}>もっといいねしたい!</button>
    </>
  )

};

export default LikeButton;