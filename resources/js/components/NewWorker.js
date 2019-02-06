import axios from 'axios'
import React, { Component } from 'react'

class NewWorker extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            position: '',
            phone: '',
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewWorker = this.handleCreateNewWorker.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCreateNewWorker (event) {
        event.preventDefault()

        const { history } = this.props

        const worker = {
            name: this.state.name,
            position: this.state.position,
            phone: this.state.phone,
        }

        axios.post('/workers', worker)
            .then(response => {
                // redirect to the homepage
                history.push('/')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    hasErrorFor (field) {
        return !!this.state.errors[field]
    }

    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }

    render () {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Create new worker</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateNewWorker}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Worker name</label>
                                        <input
                                            id='name'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('name')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='position'>Worker position</label>
                                        <input
                                            id='position'
                                            className={`form-control ${this.hasErrorFor('position') ? 'is-invalid' : ''}`}
                                            name='position'
                                            type='text'
                                            value={this.state.position}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('position')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='position'>Worker phone</label>
                                        <input
                                            id='phone'
                                            className={`form-control ${this.hasErrorFor('phone') ? 'is-invalid' : ''}`}
                                            name='phone'
                                            type='text'
                                            value={this.state.phone}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('phone')}
                                    </div>
                                    <button className='btn btn-primary'>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewWorker
