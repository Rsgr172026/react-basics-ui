import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";


const Card =(props) =>{
  let course = props.course;
let likedCourses = props.likedCourses;
let setLikedCourses = props.setLikedCourses;


  function clickHandler(){

    if (likedCourses.includes(props.course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
      toast.warning("Liked Removed");
    }

    else {
      // pahle se like nahi hai course 
      // insert karne h y course like course me 
      if (likedCourses.length === 0) {
          setLikedCourses([props.course.id]);
      }
      else {
          setLikedCourses((prev) => [...prev, props.course.id]);
      }
      toast.success("Liked Successfully");
  }
  }
  return(
    <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden relative'>
<div className='relative'>

<img src = {props.course.image.url} alt="Course Image" className='' />
 
</div>

<div  className='absolute right-2 top-2 rounded-full w-[40px] h-[40px] bg-white hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl'>
  <button onClick={clickHandler}>
    {
         !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
    }
  </button>
</div>

<div className='p-4'>
<p className='text-white font-semibold text-lg leading-6'>
  {props.course.title}
</p>
<p className='mt-2 text-gray-300 text-sm'>
{props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)}
</p>

</div>

    </div>
  )
}


export default Card