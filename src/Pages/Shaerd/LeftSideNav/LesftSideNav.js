import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const LesftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-rho.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])



    return (
        <div>

            <div className=' mt-10'>
                <h1 className=''>
                    {
                        courses.map(course => <p className='mt-3' key={course.id}>
                            <button className='btn btn-primary'><Link className='' to={`/course/${course.id}`}>{course.name}</Link></button>
                        </p>)
                    }
                </h1>
            </div>
        </div>
    );
};

export default LesftSideNav;