import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LesftSideNav from '../LeftSideNav/LesftSideNav';

const CourseCard = () => {
    const courses = useLoaderData();

    const course = courses[0];
    const { _id, name, title, image_url } = course
    console.log(courses)
    return (
        <div className='layout'>
            <div className='bg-gray-400 h-full p-10'><LesftSideNav></LesftSideNav></div>
            <div className='m-auto md:w-full'>
                <div className="card w-[75%] bg-base-100 shadow-xl m-auto mt-8">
                    <figure className="px-10 pt-10">
                        <img src={image_url} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{title}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">
                                <Link to={`/singlecourse/${_id}`}>Course Details</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;