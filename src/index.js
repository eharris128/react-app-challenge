import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlogSearch from './components/blog-search';
import data from './data.json';

ReactDOM.render(<BlogSearch blogs={data}/>, document.getElementById('root'));