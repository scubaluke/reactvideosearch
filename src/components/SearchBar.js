import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({ term: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        // todo: pass callback from parent
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field" >
                    <label htmlFor="search">Search video's</label>
                <input 
                    value={this.state.term} 
                    onChange={this.onInputChange} 
                    type="text" 
                    name="search" 
                    id=""
                />
                    </div>
            </form>

            </div>
         
        )
    }
}
