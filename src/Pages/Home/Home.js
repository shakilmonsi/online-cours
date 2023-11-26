import React from 'react';

const Home = () => {
    return (
        <div>

            <div className="carousel w-[80%] m-auto mt-5 rounded-lg">
                <div id="item1" className="carousel-item w-full">

                    <img src={"https://incomitbd.com/public/upload/slider_image/202208210759Web-Slider-new-4.png"} className="w-full" />

                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={"https://i.ibb.co/Cn0tw7X/digital.jpg"} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={"https://www.creativeshaper.com/uploads/banners/11641556972.jpg"} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={'https://incomitbd.com/public/upload/slider_image/202208210758Web-Slider-new-3.png'} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className='bg-teal-700 w-[80%] m-auto text-white lg:px-[50px] py-[30px] rounded-lg grid lg:grid-cols-2 md:grid-cols-1 md:w-full md:px-[10px]'>
                <div>
                    <h1>BEST IT TRAINING AND CAREER DEVELOPMENT CENTER</h1>
                    <p>Creative Shaper always provide international market based course curriculum.</p>
                </div>
                <div className='flex justify-between  bg-stone-600 rounded-md'>
                    <div className='pt-[30px] px-[15px] text-center'>
                        <img src={"https://www.creativeshaper.com/contents/website/images/career_icon1.png"} alt="" />
                        <h1>Skill Development</h1>
                    </div>
                    <div className='pt-[30px] px-[15px] text-center'>
                        <img src={"https://www.creativeshaper.com/contents/website/images/career_icon2.png"} alt="" />
                        <h1>Freelancing Guidline </h1>

                    </div>
                    <div className='pt-[30px] px-[15px] text-center'>
                        <img src={"https://www.creativeshaper.com/contents/website/images/career_icon3.png"} alt="" />
                        <h1>Career Guidline</h1>
                    </div>
                </div>
            </div>
            <div className="stats shadow mt-10 bg-lime-300 w-[75%]">

                <div className="stat place-items-center">
                    <div className="stat-value">180+</div>
                    <div className="stat-desc font-semibold text-xl">Batches</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-xl">Student</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-xl">Job placement</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Home;