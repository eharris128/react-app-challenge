import React from 'react';

export default function Output(props) {
    console.log('hello class name' + (props.id));
        // console.log('key value' + index);
    const blogs = props.blogs.map((blog, index) => {
        return (
            <div key={index}>
                <li>
                    <strong>{blog.title}</strong> by {blog.author.firstName} {blog.author.lastName} - BlogPost snippet: {blog.content.substring(0,40)}
                </li>
                <button onClick={props.onClick}>
                    Click to read:
                </button>
            </div>
        )
         });

    return (
        <ul className="output" aria-live="polite">
            {blogs}
        </ul>
    )
}
