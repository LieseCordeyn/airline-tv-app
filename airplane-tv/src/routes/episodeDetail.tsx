import React from 'react';
import {useParams} from "react-router-dom"
import GetDetails from '../components/Details/details'
import Header from '../components/Header/header'

function Details(){
    let params = useParams()

    return(
        <div>
            <Header/>
            <GetDetails id={params.Id}/>
        </div>
        
    )
}

export default Details
