
import Card from './Card';
import React, { useState } from "react";


const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  console.log("Courses received in Cards:", courses); 
  const [likedCourses, setLikedCourses] = useState([]);


function getCourses() {
  if(category === "All"){
    let allCourses = [];
    Object .values(courses).forEach(array =>{
      array.forEach(courseData =>{
        allCourses.push(courseData);
      })
    })
    console.log("All courses after processing:", allCourses); // Debug log
    return allCourses;
  }
  else{
    return courses[category];
  }

}

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
getCourses().map((course) =>{
  return <Card key ={course.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
})
    }
    </div>
  )
}

export default Cards

