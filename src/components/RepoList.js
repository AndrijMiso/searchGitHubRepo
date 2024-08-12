import React from 'react';

function RepoList({ reposData, searchEnd }) {
    
    if (reposData.length === 0 && searchEnd) {
        return (<p>Not found repository</p>);
    } else {
        return (
            <div className="list">
            {reposData.map(r => (
                <div key={r.id}>
                    <a href={r.html_url}>
                        <h3>Name: {r.name}</h3>
                    </a>
                    <p><strong>Description:</strong> {r.description}</p>
                    <p><strong>Full Name:</strong> {r.full_name}</p>
                    <hr></hr>
                </div>
            ))}
            </div>
        );
        
    }
}

export default RepoList;