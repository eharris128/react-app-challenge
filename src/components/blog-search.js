import React from 'react';

import Input from './input';
import Output from './output';
import Sandbox from './sandbox';

export default class BlogSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            showMoreInfo: undefined,
            searchType: 'title'
        }
    }

    render() {
        let type = this.state.searchType;
        let input = this.state.input.toLowerCase();

        const filteredBlogs = this.props.blogs.filter(blog => {
            if (type === 'title') {
                return blog.title.toLowerCase().includes(input);
            } else if (type === 'author-first-name') {
                return blog.author.firstName.toLowerCase().includes(input);
            } else if (type === 'author-last-name') {
                return blog.author.lastName.toLowerCase().includes(input);
            } else if (type === 'blog-content') {
                return blog.content.toLowerCase().includes(input);
            }
            return blog;
        })
        return (
            <div className="blog-search">
                <form>
                    <fieldset>
                        <Sandbox onChange={searchType => this.setState({searchType})}/>
                        <Input onChange={input => this.setState({input})}/>
                    </fieldset>
                </form>
                <Output expandedIndex={this.state.showMoreInfo} onClick={showMoreInfo => this.setState({showMoreInfo})} blogs={filteredBlogs}/>
            </div>
        )
    }
}

// to render static blogs page with all blogs present: <Output blogs={this.props.blogs