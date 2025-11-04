import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber= 2;
  return (
    <>
    {movieNumber===1 ?(<MovieCard movie={{title: "Hermon", release_date: "2024"}}/>):(<MovieCard movie={{title: "Times", release_date: "2024"}}/>)}
    </>
    
  )
}


export default App
