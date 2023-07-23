import React from 'react'
import {Link} from 'react-router-dom'
import  Chip from '../../../Common/Chip'
import './styles.css'
const BlogItem = ({blog:{id, description, title, createdAt, authorName, authorAvatar, category, cover}}) => {
  return (
    <div className='biwrap'>
      <img src={cover} alt='cover' className='bicover'></img> 
      <Chip label={category}></Chip>
      <h3>{title}</h3>
      <p className='bidesc'>{description}</p>
      <footer>
        <div className='biauthor'>
          <img src={authorAvatar} alt='avatar'></img>
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
      </footer>
      <Link className='bilink' to={`/blog/${id}`}>
          ➝
        </Link>

    </div>
  )
}

export default BlogItem
