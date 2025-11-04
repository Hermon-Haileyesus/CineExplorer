import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
    <MovieCard movie={{title: "Hermon", release_date: "2024"}}/>
    <MovieCard movie={{title: "Times", release_date: "2024"}}/>
    </>
    
  )
}


export default App
