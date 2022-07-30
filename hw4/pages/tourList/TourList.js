import TourItem from '../../components/TourItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function TourList() {
    // const tours = [
    //     {
    //         nameOfTour: 'Каньон "Сказка"',
    //         price: 500,
    //     },
    //     {
    //         nameOfTour: 'Горячие источники',
    //         price: 200,
    //     },
    //     {
    //         nameOfTour: 'Сон-Кол',
    //         price: 400,
    //     },        
    // ]

    const [tours, setTours] = useState([])

    function getData() {
        // fetch("https://jsonplaceholder.typicode.com/todos/")
        //     .then(response => response.json())
        //     .then(info => {
        //         setTours(info)
        //     })
        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then(response => setTours(response.data))
    }

    useEffect(getData, [])

    function items(element, index) {
        return <TourItem key={index} tourName={element.title}/>
    }

    

    return (
        <div>
            <h2>Список туров:</h2>
            <ul>
                {tours.map(items)}
            </ul>
        </div>
    )
}