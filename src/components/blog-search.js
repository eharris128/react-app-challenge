import React from 'react';

import Input from './input';
import Output from './output';

export default class BlogSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            showMoreInfo: 0
        }
    }

    render() {

        const filteredBlogs = this.props.blogs.filter(blog => {
            return blog.title.toLowerCase().includes(this.state.input.toLowerCase());
        })
        return (
            <div className="blog-search">
                <Input onChange={input => this.setState({input})}/>
                <Output expandedIndex={this.state.showMoreInfo} onClick={showMoreInfo => this.setState({showMoreInfo})} blogs={filteredBlogs}/>
            </div>
        )
    }
}

// to render static blogs page with all blogs present: <Output blogs={this.props.blogs