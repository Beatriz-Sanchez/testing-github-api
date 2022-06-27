import { ErrorInfo, useEffect, useState } from "react";
import { getRepositories } from "../../MainApi/repository";
import Repository from "../Repository";

interface Repository {
      id: number;
      name: string;
      description: string;
      html_url: string;
      favorite?: boolean;
  }

function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    
      useEffect(() => {

        const getData = async () => {
          try{
            const response = await getRepositories("Beatriz-Sanchez")
          setRepositories(response.data);
          }catch(error){
            alert("deu algo errado!");
          }
        }
        getData();
      }, [repositories, setRepositories])
      
    
      return (
        <div className="repository-list">
          <ul>
            {repositories.map((repo: Repository) => {
              return(
                  <Repository key={repo.id} repository={repo}/>
              )
            })}
          </ul>
        </div>
      );
  }
  
  export default RepositoryList
  