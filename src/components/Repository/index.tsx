import { useEffect, useState } from "react";

interface IRepositoryProps{
    repository: {
        id: number;
        name: string;
        description: string;
        html_url: string;
        favorite?: boolean;
    }
}

function Repository(props: IRepositoryProps) {

    const [favorite, setFavorite] = useState(false)

    return (
      <li key={props.repository.id}>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>acessar repositório</a>
        <button onClick={!favorite? ()=> setFavorite(true): ()=> setFavorite(false)} >{!favorite? "Favoritar" : "Desfavoritar"}</button>
        {favorite? <span>FAVORITO</span>: null}
      </li>
    )
  }
  
  export default Repository