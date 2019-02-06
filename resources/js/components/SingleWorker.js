import axios from 'axios'
import React, { Component } from 'react'
import Img from 'react-image'

class SingleWorker extends Component {
    constructor (props) {
        super(props)
        this.state = {
            worker: {}
        }
    }

    componentDidMount () {
        const workerId = this.props.match.params.id

        axios.get(`/workers/${workerId}`).then(response => {
            this.setState({
                worker: response.data
            })
        })
    }

    render () {
        const { worker } = this.state

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>
                                {worker.name}
                                <div className='float-lg-right'>
                                    <img src="/img/favicon.png" />
                                </div>
                            </div>
                            <div className='card-body'>
                                <p>{worker.position}</p>
                                <a href={`tel:${worker.phone}`}>{worker.phone}</a>

                                <hr />
                                <a href="/"> Go Back</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleWorker
