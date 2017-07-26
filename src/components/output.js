import React from 'react';

export default function Output(props) {

    function blogSubString(blog) {
        return blog.substring(0,40);
    }

    const blogs = props.blogs.map((blog, index) =>
    <div key={index}>
        <li>
            <strong>{blog.title}</strong> by {blog.author.firstName} {blog.author.lastName} - BlogPost snippet: {blogSubString(blog.content)}
        </li>
        <button>
            Click to read more:
        </button>
    </div>
    );
    
    return (
        <ul className="output" aria-live="polite">
            {blogs}
        </ul>
    )
}
