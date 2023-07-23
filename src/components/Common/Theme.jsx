import {useState} from 'react'


export const useTheme=()=>{
    const [theme, setTheme]=useState('lightTheme');
    const toggleTheme=()=>{
        setTheme((theme==='lightTheme')?'darkTheme':'lightTheme');
    }
    return{
        theme,
        toggleTheme,
    };
}