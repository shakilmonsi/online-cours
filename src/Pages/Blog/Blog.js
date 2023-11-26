import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 01: what is cors?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 02: Why are you using firebase? What other options do you have to implement authentication?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 03: How does the private route work?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 04: What is Node? How does Node work</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;