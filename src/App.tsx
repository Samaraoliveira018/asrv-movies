import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const imagePath = 'https://image.tmdb.org/t/p/w500/'
  const [filmes,setFilmes] = useState([]);

  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhOGJmNDA2MmVhZWI3ZWQzYWY2YmFmZmMzNDQ1NyIsIm5iZiI6MTcyNjc4NDY2OS41NjAzMjQsInN1YiI6IjY2ZWM5ZTg4MDY1YjcwYjU0MjMyNzdiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AbZ8tPnz7VF87ChZAMeS0FU3NwmGnqWyGDgkSmcuA44'
    }
  };

    useEffect(() => {
       fetch(url, options)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
          setFilmes(data.results);
        });
       }, []);

  return (
    <>
      <div>
        Filmes
        <div className="grid grid-cols-4 gap-4 max-w-90 bg-black" >
          {filmes.map((filme:any) =>{
            return(
              <div className='flex-wrap  mx-auto ' key={filme.id}>
                  <img className='max-w-36 shadow-md' src={`${imagePath}${filme.poster_path}`} alt="filme" />
                  <span className='text-slate-50'>{filme.title}</span>
                  <span className='text-slate-50'>{' '}Votos {filme.vote_count}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
