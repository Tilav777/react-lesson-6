import { useEffect, useState } from "react"
import axios from "axios"

function Request() {
  const [loader, setLoader] = useState(false)
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  useEffect(()=> {
    async function request() {
      try {
        setLoader(true)
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${getData()}`)
        let data = await res.data.title
        setText(data) 
        setLoader(false)
      }catch (err) {
        console.log(new Error(err))
      }
    } 
    request()
  },[count])

  function getData() {
    let randomNumber = Math.floor(Math.random() * 200)
    return randomNumber
  }

  return (
    <div>
        <h1>{text}</h1>
        <button onClick={()=> setCount(count + 1)}>{!loader ? 'New text' : (
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        )}</button>
    </div>
  )
}

export default Request