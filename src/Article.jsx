//functional componentで記述
import React, {useState} from 'react';
import LikeButton from './LikeButton';
import CountUp from './CountUp';

const Article = (props) => {

  const [isPublished, togglePublished] = useState(false);

  return(
    <div>
      <h3>{props.title}</h3>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" 
      checked={isPublished} id="check"
      onClick={() => togglePublished(!isPublished)}
      />  
      <LikeButton />
      <CountUp />
    </div>
  )
};

//<LikeButton />の中では初期値をcountでLikeButtonにさらに渡す
//labelはforではなくhtmlForにする
export default Article;
