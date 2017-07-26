import React from 'react';

export default function Sandbox(props) {
    return (
        <div className="form-group">
                <label htmlFor="searchOption"> Search through blog posts by: </label>
                <select onChange={e => props.onChange(e.target.value)} id="searchOption">
                        <option value="title">title</option>
                        <option value="author-first-name">author first name</option>
                        <option value="author-last-name">author last name</option>
                        <option value="blog-content">blog content</option>
                </select>
        </div>
    )
}