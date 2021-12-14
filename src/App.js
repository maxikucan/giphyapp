import { useEffect, useState } from 'react'
import './App.css'
import getGifs from './services/getGifs'
import Gif from './components/Gif'


function App() {

  const [data, setData] = useState("")  
  const [keyword, setKeyword] = useState("")
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword })
      .then(gifs => setGifs(gifs))
  }, [keyword])

  const getData = val =>  setData(val.target.value)

  const buscar = () => setKeyword(data)

  return (
    <div className="App">
      <div className="header">
        <h1>Giphy App</h1>
        <input type="text" placeholder="Search for a gif" onChange={getData} />
        <button onClick={() => buscar()}>Search</button>
      </div>
      <section className="App-content">
        {
          gifs.map(gif =>
            <Gif
              key={gif.id}
              title={gif.title}
              url={gif.url}
            />
          )
        }
      </section>
    </div>
  )
}

export default App
