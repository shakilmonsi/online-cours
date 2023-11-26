import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourse from '../AllCourse/AllCourse';
import LesftSideNav from '../LeftSideNav/LesftSideNav';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='layout'>
            <div className='bg-gray-400 h-full p-10'><LesftSideNav></LesftSideNav></div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-2'>
                {
                    courses.map(course =>
                        <AllCourse
                            key={courses._id}
                            course={course}>

                        </AllCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;