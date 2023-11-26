import React from 'react';
import { Link } from 'react-router-dom';

const AllCourse = ({ course }) => {
    const { _id, name, title, image_url } = course
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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
    );
};

export default AllCourse;