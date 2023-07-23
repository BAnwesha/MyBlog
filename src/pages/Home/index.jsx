import React, { useState } from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList } from "../../config/data";
import Emptylist from "../../components/Common/EmptyList";
import { useTheme} from "../../components/Common/Theme";
import nightIcon from '../../assets/darkmode.png'
import dayIcon from '../../assets/lightmode.png'

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchkey, setSearchkey] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchkey.toLowerCase().trim()));
    setBlogs(filteredBlogs);
  };


  const handleClearSearch=()=>{
    setBlogs(blogList);
    setSearchkey('');
  }

  const {theme, toggleTheme}= useTheme();

  return (
    <div style={(theme==='lightTheme')?({backgroundColor: 'white', color: 'black'}):({backgroundColor: 'rgb(13, 23, 38)', color: 'white'})}>
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
      <Header style={theme}></Header>
      <SearchBar
        value={searchkey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchkey(e.target.value)}
      ></SearchBar>
      {!blogs.length? <Emptylist></Emptylist>: <BlogList blogs={blogs}> </BlogList>}
    </div>
  );
};

export default Home;
