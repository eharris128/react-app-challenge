import React from 'react';

export default function Output(props) {
    // console.log('hello class name' + (props.expandedIndex));
    const blogs = props.blogs.map((blog, index) => {
        console.log('current index' + index);
        if (props.expandedIndex === index) {
            return (
                <div key={index}>
                    <li>
                        <strong>{blog.title}</strong> by {blog.author.firstName} {blog.author.lastName} - BlogPost snippet: {blog.content.substring(0,100)}
                    </li>
                    <button onClick={props.onClick}>
                        Click to read:
                    </button>
                </div>
            )
        } else {
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
        }
        
         });

    return (
        <ul className="output" aria-live="polite">
            {blogs}
        </ul>
    )
}
//onClick={props.onClick(index)}