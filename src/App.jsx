import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [verse, setVerse] = useState('');
  const [verseText, setVerseText] = useState('');
  const [input, setInput] = useState('');

  

  return (
    <div className="container">

    <h1>Search the Bible</h1>

    <div className="input-container">
            {/* create a search bar where the user can input a verse */}
            <input type="text" value={input} onChange={(e) => {
        setInput(e.target.value);
      }} />
      <button onClick={() => {
        axios.get(`https://bible-api.com/${input}`)
          .then((response) => {
            setVerse(response.data.reference);
            setVerseText(response.data.text);
            console.log(response.data.reference);
            console.log(response.data.text);
          });
      }}>Search</button>
    </div>

      {/* display the verse */}
      <div className="verse">
        <h2>{verse}</h2>
        <p>{verseText}</p>
      </div>
    </div>
  )
}

export default App
