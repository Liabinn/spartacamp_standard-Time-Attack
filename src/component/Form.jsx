import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || contents === "") {
      alert('제목과 내용을 모두 적어주세요')
    } else {
      setTitle("");
      setContents("");

      dispatch({
        type: "ADD_TODO",
        payload: {
          id: shortid.generate(),
          title,
          contents,
          isDone: false,
        }
      })
    }
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  const dispatch = useDispatch();

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='title'>제목</label>
      <input type='text' value={title} onChange={onChangeTitle} id='title'/>
      <label htmlFor='contents'>내용</label>
      <input type='text' value={contents} onChange={onChangeContents} id='contents' />
      <button type='submit'>등록</button>
    </form>
  )
}

export default Form