import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList} from '../../config/data';
import Chip from '../../components/Common/Chip';
import EmptyList from '../../components/Common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import image1 from '../../assets/davisuko-2FdIvx7sy3U-unsplash.jpg';
import image2 from '../../assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg';
import image3 from '../../assets/jr-korpa-7mBOyYTrxBA-unsplash.jpg';
import image4 from '../../assets/jr-korpa-7qBiDC65J8g-unsplash.jpg';
import image5 from '../../assets/jr-korpa-jD1huE0iPk0-unsplash.jpg';
import image6 from '../../assets/jr-korpa-wzkv5p5CIRk-unsplash.jpg';
import image7 from '../../assets/jr-korpa-XTzdXtytcsg-unsplash.jpg';
import { useTheme} from "../../components/Common/Theme";
import nightIcon from '../../assets/darkmode.png'
import dayIcon from '../../assets/lightmode.png'



const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  },[blog, id]);
  const {theme, toggleTheme}= useTheme();
  return (
    <div style={(theme==='lightTheme')?({backgroundColor: 'white', color: 'black'}):({backgroundColor: 'rgb(13, 23, 38)', color: 'white'})} className='blogall'>
      <>
        {(theme==='lightTheme')?(
            <button onClick={toggleTheme}>
            <img className='themeIcon' src={nightIcon} width={20} height={20}></img>
            </button>
        ):(
            <button onClick={toggleTheme}>
            <img className='themeIcon' src={dayIcon} width={20} height={20}></img>
            </button>
        )}
        </>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <h3>By {blog.authorName}</h3>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
            </header>
            
          {(blog.id===1)?(
            <img src={image1} className='blogcover' alt='cover'></img>
          ):(blog.id===2)?(
            <img src={image2} className='blogcover' alt='cover'></img>
          ):(blog.id===3)?(
            <img src={image3} className='blogcover' alt='cover'></img>
          ):(blog.id===4)?(
            <img src={image4} className='blogcover' alt='cover'></img>
          ):(blog.id===5)?(
            <img src={image5} className='blogcover' alt='cover'></img>
          ):(blog.id===6)?(
            <img src={image6} className='blogcover' alt='cover'></img>
          ):(
            <img src={image7} className='blogcover' alt='cover'></img>
          )}
          <p className='blog-desc'>{blog.description}</p>
        
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;