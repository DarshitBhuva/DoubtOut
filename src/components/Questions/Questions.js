import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
export default function Questions() {

    const [questions, setQuestions] = useState([])
    const fetchAllQuestions = async () => {
        await fetch("http://localhost:5000/api/question/fetchquestions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => setQuestions(data))
    }

    useEffect(() => {
        fetchAllQuestions();
    }, [])
    return (
        <div Style="height:100%; margin-top:13vh; z-index:1; background-color:white">
            <div class="d-flex flex-row">
                <div class="d-flex flex-column flex-shrink-0 p-3 col-md-2">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use ></use></svg>
                        <span class="fs-4">Sidebar</span>
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="/" class="nav-link active" aria-current="page">
                                <svg class="bi me-2" width="16" height="16"><use></use></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-dark">
                                <svg class="bi me-2" width="16" height="16"><use ></use></svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-dark">
                                <svg class="bi me-2" width="16" height="16"><use ></use></svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-dark">
                                <svg class="bi me-2" width="16" height="16"><use ></use></svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-dark">
                                <svg class="bi me-2" width="16" height="16"><use ></use></svg>
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div class="dropdown">
                        <a href="/" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a class="dropdown-item" href="/">New project...</a></li>
                            <li><a class="dropdown-item" href="/">Settings</a></li>
                            <li><a class="dropdown-item" href="/">Profile</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="/">Sign out</a></li>
                        </ul>
                    </div>

                </div>

                <div class="d-flex flex-column flex-shrink-0 p-3 col-md-7" Style="background-color:white;">
                    <div className="d-flex d-flex-row align-items-center">
                        <h1 className='mx-4'>All Questions</h1>
                        
                        <NavLink to="/editor" className="btn btn-primary mx-4" Style="position:absolute; right:0px;">Ask Question</NavLink>
                    </div>


                    {questions.length > 0 && (
                        <ul>
                            {questions.map(question => (

                                <div class="card mt-1">

                                    <div class="card-body">
                                        <NavLink to={{ pathname: `/question/${question._id}` }} className="card-title" Style="text-decoration:none;color:#0074CC"><h4>{question.title}</h4></NavLink>
                                        <small Style="font-size:1px;">{parse(question.question)[0]}</small>
                                        {/* {(() => {
                                            var msg = parse(question.question);

                                            return (<><small className='fs-8'>{msg[0]}</small></>);
                                        })()} */}
                                        <div className='mt-3'>{question.tags.split(" ").map(tag => <small className='mx-2 px-2 py-1' Style="color:hsl(205,47%,42%); background-color: hsl(205,46%,92%); border-radius:5px;">{tag}</small>)}</div>
                                        <small className='d-flex flex-row-reverse'>Posted By : {question.postedBy}</small>
                                        {/* <p class="card-text">You’re ready to ask a programming-related question and this form will help guide you through the process.</p> */}

                                    </div>
                                </div>

                            ))}
                        </ul>
                    )}



                </div>
            </div>
        </div>
    )
}