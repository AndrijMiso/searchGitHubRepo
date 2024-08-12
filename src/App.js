import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import { Octokit } from 'octokit';

function App() {
  const [repos, setRepos] = useState([]);
  const octokit = new Octokit();
  const [searchEnd, setSearchEnd] = useState(false);

  const handleSearch = async (query) => {
    try {
      const response = await octokit.request('GET /search/repositories', {
        q: query
      });
      setRepos(response.data.items);
    } catch (error) {
      console.error("Error req GET repositories: ", error);
      setRepos([]);
    }
    setSearchEnd(true);
  };

  const clear = () => {
    setRepos([]);
  }

  return (
    <div>
      <Header />
      <SearchBar searchFromApp={handleSearch} clearBtn={clear} />
      <RepoList reposData={repos} searchEnd={searchEnd}/>
    </div>
  );
}
export default App;
