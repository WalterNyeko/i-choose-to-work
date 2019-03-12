import React from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.min.css'

const Search = Input.Search;

const SearchFilter = (props) => {
  return (
    <div className="sidebar-widget">
        <h3>Search</h3>
        <div className="input-with-icon">
            <Search
            placeholder="Search"
            onChange={e => props.onSearch(e.target.value)}
            style={{ width: '100%' }}
            />
        </div>
    </div>
  )
}

export default SearchFilter
