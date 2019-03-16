import React from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.min.css'

const Search = Input.Search;

const SearchFilter = (props) => {
  return (
    <div class="sidebar-widget">
        <h3>Search</h3>
        <div class="input-with-icon">
            <Search
            placeholder="Search"
            onSearch={value => props.onSearch(value)}
            style={{ width: '100%' }}
            />
        </div>
    </div>
  )
}

export default SearchFilter
