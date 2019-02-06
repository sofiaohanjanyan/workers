import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewWorker from './NewWorker'
import WorkersList from './WorkersList'
import SingleWorker from './SingleWorker'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={WorkersList} />
                        <Route path='/create' component={NewWorker} />
                        <Route path='/:id' component={SingleWorker} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
