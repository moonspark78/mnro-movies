import React, { useEffect, useState } from 'react'


interface NavbarProps {
    placeholder?: string;
  }
  


export const Search = ({ placeholder = 'Selectionner un film' }:NavbarProps) => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://api.example.com/films?name=${search}`);
        const data = await response.json();
        setMovies(data);
      };
      if (search) {
        fetchData();
      }
    }, [search]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };
  return (
    <form>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={search}
        onChange=/* {handleChange} */{(e) => setSearch(e.target.value)}
      />
      <ul>
        {movies.map((movie:any) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </form>
  )
}
