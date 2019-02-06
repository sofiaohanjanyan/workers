import axios from 'axios'
import React, { Component } from 'react'
// import imagePath from '/favicon.png'
import { Link } from 'react-router-dom'
import Img from 'react-image'
// import { Image } from 'react-router-dom';

class WorkersList extends Component {
    constructor () {
        super()
        this.state = {
            workers: []
        }
    }

    componentDidMount () {
        axios.get('/workers').then(response => {
            this.setState({
                workers: response.data
            })
        })
    }

    render () {
        const { workers } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All workers</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                                    Create new worker
                                </Link>


                                <ul className='list-group list-group-flush'>
                                    {workers.map ? workers.map(worker => (
                                        <Link
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/${worker.id}`}
                                            key={worker.id}
                                        >
                                            <img src="/img/favicon.png" />

                                            {worker.name}
                                            <span className='badge badge-primary badge-pill'>
                                                {worker.position}
                                            </span>
                                            <span className='badge badge-primary badge-pill'>
                                                {worker.phone}
                                            </span>
                                        </Link>
                                    )) : <span>No worker yet!</span>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkersList
