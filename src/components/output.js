import React from 'react';

export default function Output(props) {
    // console.log('hello class name' + (props.expandedIndex));
    const blogs = props.blogs.map((blog, index) => {
        console.log('current index' + index);
        if (props.expandedIndex === index) {
            return (
                    <li key={index}>
                        <strong>{blog.title}</strong> by {blog.author.firstName} {blog.author.lastName} - BlogPost snippet: {blog.content.substring(0,100)}
                        <button onClick={() => props.onClick(index)}>
                        Click to read:
                        </button>
                   </li>

            )
        } else {
            return (
                    <li key={index}>
                        <strong>{blog.title}</strong> by {blog.author.firstName} {blog.author.lastName} - BlogPost snippet: {blog.content.substring(0,40)}
                        <button onClick={() => props.onClick(index)}>
                        Click to read:
                        </button>
                    </li>

            )
        }
        
         });

    return (
        <ul className="output" aria-live="polite">
            {blogs}
        </ul>
    )
}

// button onClick={props.onChange(index)}