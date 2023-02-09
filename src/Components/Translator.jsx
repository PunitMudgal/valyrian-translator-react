import axios from 'axios';
import React,{useState, useEffect} from 'react'
import '../App.css'

export default function Translator() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const [translateBtnClick, setTranslateBtnClick] = useState('');

  // const serverURL = 

  useEffect(() => {
    axios
    .get(`https://api.funtranslations.com/translate/valyrian.json?text=${translateBtnClick}`)
    .then((res) => {
      // console.log('below is res')
      // console.log(res);
      setPosts(res.data.contents);
 
    })
    .catch((error) => {
      console.log(error);
    })
  },[translateBtnClick])

  const changeHandler = (event) => {
    setText(event.target.value)
  }

  const clickHandler = () => {
setTranslateBtnClick(text)
// console.log(translateBtnClick)
// console.log('below is posts')
// console.log(posts)
  }

  return (
    <div>
    <div id='input-container'>
      <h3>Type Here to Translate:</h3>
      <textarea onChange={changeHandler} value={text} placeholder='Type Here to Translate in Valyrian' id="text-area" cols="100" rows="10"></textarea>
      
      <button onClick={clickHandler} id='translate-btn'>Translate</button>
    </div>

    <div id='output-container'>
    <h3>Output Will Be Shown Below:</h3>
    <div id='output-area'>{posts.translated}</div>
    </div>

    </div>
  )
}
