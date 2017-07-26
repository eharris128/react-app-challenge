import React from 'react';

import Input from './input';
import Output from './output';
import Sandbox from './sandbox';

export default class BlogSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            expandedPostId: undefined,
            searchType: 'title'
        }
    }

    render() {
        let type = this.state.searchType;
        let input = this.state.input.toLowerCase();

        const filteredBlogs = this.props.blogs.filter(blog => {
            // const re = /-/g;
            // type = type.replace(re, '.')// replacer statement here
            console.log('my type: ' + type)
            if (type === 'title') {
                return blog.title.toLowerCase().includes(input);
            } else if (type === 'author-firstName') {
                return blog.author.firstName.toLowerCase().includes(input);
            } else if (type === 'author-lastName') {
                return blog.author.lastName.toLowerCase().includes(input);
            } else if (type === 'blog-content') {
                return blog.content.toLowerCase().includes(input);
            }
            return 'hello'
            // return blog[type].toLowerCase().includes(input);
        })
        return (
            <div className="blog-search">
                <form>
                    <fieldset>
                        <Sandbox onChange={searchType => this.setState({searchType})}/>
                        <Input onChange={input => this.setState({input})}/>
                    </fieldset>
                </form>
                <Output expandedIndex={this.state.expandedPostId} onClick={expandedPostId => this.setState({expandedPostId})} blogs={filteredBlogs}/>
            </div>
        )
    }
}

// to render static blogs page with all blogs present: <Output blogs={this.props.blogs