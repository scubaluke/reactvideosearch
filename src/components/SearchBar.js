import React, { useState } from 'react'

export default function SearchBar({ onFormSubmit }) {
    const [term, setTerm] = useState('')
 
  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field" >
                <label htmlFor="search">Search video's</label>
            <input 
                value={term} 
                onChange={(e) => setTerm(e.target.value)} 
                type="text" 
                name="search" 
                id=""
            />
                </div>
        </form>

        </div>
     
    )
}
