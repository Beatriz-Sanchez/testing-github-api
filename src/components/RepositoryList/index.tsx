import { useEffect, useState } from "react";
import Repository from "../Repository";

function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    
      useEffect(() => {
        fetch("http://api.github.com/users/Beatriz-Sanchez/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
        .catch(error => console.error(error.message));
      }, [repositories])
      
    
      return (
        <div className="repository-list">
          <ul>
            {repositories.map((repo) => {
              return(
                  <Repository repository={repo}/>
              )
            })}
          </ul>
        </div>
      );
  }
  
  export default RepositoryList
  