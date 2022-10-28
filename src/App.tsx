import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Button";

type ShowType = {
    userId: number,
    id: number,
    title: string
    completed: boolean
}


function App() {

    const [show, setShow] = useState<ShowType[]>([])


    // useEffect(()=>{
    //   fetch('https://jsonplaceholder.typicode.com/todos')
    //       .then(response => response.json())
    //       .then(json => setShow(json))
    // },[])

    const showUp = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))
    }

    const deleteList = () => {
        setShow([])
    }

    return (
        <div className="App">
            <Button name={'Show me'} callBack={showUp}/>
            <Button name={'Delete'} callBack={deleteList}/>

            <ul>

                {show.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span> - {`${el.completed}`}</span>
                        </li>
                    )
                })}

            </ul>

        </div>
    );
}

export default App;
