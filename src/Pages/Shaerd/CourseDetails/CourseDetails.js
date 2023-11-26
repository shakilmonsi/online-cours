import React from 'react';
import { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print'
import { FaDownload } from "react-icons/fa";
import ReactToPdf from 'react-to-pdf'

const CourseDetails = () => {
    const ref = React.createRef();

    const componentRef = useRef()
    const courses = useLoaderData()
    console.log(courses)
    const course = courses[0];
    const { _id, name, title, image_url, details, course_fee, duration, total_class } = course
    return (
        <div className='bg-zinc-600 p-3' ref={ref}>

            <div className="card w-[80%] m-auto mt-10 glass p-10">
                <div>

                    <ReactToPdf targetRef={ref} x={.5} y={.5} scale={0.6} filename="creative-shaper.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf} className="btn btn-primary lg:ml-[850px]"><FaDownload className='mr-2'></FaDownload> Print Out</button>
                        )}
                    </ReactToPdf>
                </div>
                <figure><img src={image_url} alt="car!" className='border rounded-sm' /> </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className='text-left text-white'>
                        <p className='font-semibold text-xl'>COURSE DURATION:</p>
                        <p>Course fee: {course_fee}</p>
                        <p>Duration: {duration}</p>
                        <p>Total class: {total_class}</p>
                    </div>

                    <div className="card-actions justify-end">


                        <button className="btn btn-primary"><Link to='/enroll'>Get premium</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;