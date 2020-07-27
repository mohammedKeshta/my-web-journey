import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Courses from './pages/Courses'
import Course from './pages/Course'
import PageNotFound from './pages/PageNotFound'

const App = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/about" component={About} />
                    <Route path="/course/:slug" component={Course} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </>
    )
}

export default App
