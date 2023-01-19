import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RepoCard from '../components/RepoCard';
// import '../styles/githubStyles.css'

const Github = () => {

  const [userData, setUserData] = useState({});

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/BautiOnorato")
    .then(res => {
      setUserData(res.data)
    })

    axios.get("https://api.github.com/users/BautiOnorato/repos")
    .then(res => {
      setRepos(res.data)
    })
  }, [])

  return (
    <div className='container'>
      <div className='user'>
        <img src={userData.avatar_url}/>
        <div className='user-info'>
          <p>Followers {userData.followers}</p>
          <p>Following {userData.following}</p>
          <p>Repositories {userData.public_repos}</p>
        </div>
      </div>
      <div className='repos'>
        {
          repos?.map((repo) => (
            <RepoCard name={repo.name} link={repo.html_url} owner={repo.owner.login} img={repo.owner.avatar_url}/>
          ))
        }
      </div>
    </div>
  )
}

export default Github