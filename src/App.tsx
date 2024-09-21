import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const imagePath = 'https://image.tmdb.org/t/p/w500/'
  const [filmes,setFilmes] = useState([]);
  const [hidden, setHidden] = useState(null);

  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=3';
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
      <div >
        <span className="text-lg text-slate-50 font-serif">ASRV MOVIES</span>
        <div className="grid grid-cols-4 gap-12 p-10" >
          {filmes.map((filme:any) =>{
            return(
              <div className='grid grid-4 col rounded-sm w-14
               transition delay-150 duration-300 ease-in-out hover:scale-125' key={filme.id} 
               onMouseEnter={() => setHidden(filme.id)}
               onMouseLeave={() => setHidden(null)}
               >
                  <img className='max-w-60 shadow-md rounded-sm' src={`${imagePath}${filme.poster_path}`} alt="filme"
                  />
                  {hidden === filme.id &&  (<div className='absolute bottom-0 flex flex-col rounded-sm p-2
                   w-60 h-40 bg-cyan-800'>
                    <span className='text-slate-50 font-bold'>{filme.title}</span>
                    <span className='text-slate-50'>{filme.release_date}</span>
                    <span className='text-slate-50'>{' '}{filme.vote_count}-Votos</span>
                    <button>Sinopse</button>
                  </div>)}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
