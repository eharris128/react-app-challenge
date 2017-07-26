import React from 'react';

export default function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor="search"> Enter query string: </label>&emsp;
            <input onChange={e => props.onChange(e.target.value)} type="search" id="search" name="search" placeholder="My Awesome blog title"/>
        </div>
  )
}

//onSelect={e => props.onSelect(e.target.value)}
//<select onChange={e => props.onChange(e.target.value)} id="searchOption">