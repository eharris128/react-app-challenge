import React from 'react';

import Input from './input';
import Output from './output';

export default class BlogSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: 'test'
        }
    }

    render() {
        return (
            <div className="blog-search">
                <Input />
                <Output blogs={this.props.blogs}/>
            </div>
        )
    }
}