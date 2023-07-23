import React from 'react'
import './styles.css'
import BlogItem from './Blogitem'
const BlogList = ({blogs}) => {
  return (
    <div className='blwrap'>
      {blogs.map(blog=><BlogItem blog={blog} key={blog.id}></BlogItem>)}
    </div>
  )
}

export default BlogList
