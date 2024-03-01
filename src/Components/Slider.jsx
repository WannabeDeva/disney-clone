import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
const screenWidth=window.innerWidth;


const image_base_url="https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList,setMovieList]=useState([]);
  const elementRef=useRef();
  useEffect(()=>{
    getTrendingMovies();
  },[])

  const getTrendingMovies=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
      console.log(resp.data.results);
      setMovieList(resp.data.results)
    })
  }
  const sliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
  }


  return (
    <div>
      <HiChevronLeft className="hidden md:block text-white text-[35px] absolute mx-8 mt-[155px] cursor-pointer " onClick={()=>sliderLeft(elementRef.current)}/>
      <HiChevronRight className="hidden md:block text-white text-[35px] absolute mx-8 mt-[155px] cursor-pointer right-0 " onClick={()=>sliderRight(elementRef.current)}/>

    <div className=' flex overflow-x-auto w-full px-16 py- scrollbar-hide scroll-smooth ' ref={elementRef}>
      {movieList.map((item,index)=>(
        <img src={image_base_url+item.backdrop_path} 
        className='min-w-full md:h-[320px] object-cover object-left-top mr-4  rounded-md hover:border-[2px] border-white transition-all duration-75 ease-in'/>
      ))}
    </div>
    </div>
  )
}

export default Slider

