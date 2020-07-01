import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/header'
import Courses from './pages/Courses'

const App = () => {
    const getPage = () => {
        const route = window.location.pathname
        if (route === '/about') return <About />
        if (route === '/courses') return <Courses />
        return <Home />
    }
    return (
        <div className="container-fluid">
            <Header />
            {getPage()}
        </div>
    )
}

export default App
