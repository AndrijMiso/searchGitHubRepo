import React, {useState} from 'react';

function SearchBar({ searchFromApp , clearBtn }) {
    const [query, setQuery] = useState('');

    const inputChange = (e) => setQuery(e.target.value);
    const [isEnterText, setIsEnterText] = useState(false);

    const handleSearch = () => {
        if(query.length !== 0) {
            searchFromApp(query);
            setIsEnterText(false);
        } else {
            setIsEnterText(true);
        }
    };

    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Enter repository name..."
                value={query}
                onChange={inputChange}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={clearBtn}>Clear</button>
            {isEnterText && <p>You need enter name repository for search</p>}
        </div>
    );  
}

export default SearchBar;