import React from 'react';

export default function Input(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search by blog title?</label>&emsp;
            <input onChange={e => props.onChange(e.target.value)} type="search" id="search" name="search" placeholder="My Awesome blog title"/>
        </form>
    )
}