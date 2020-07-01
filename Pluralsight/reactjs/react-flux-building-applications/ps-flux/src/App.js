import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/header'

const App = () => {
    const route = window.location.pathname
    return (
        <>
            <Header />
            {route === '/about' ? <About /> : <Home />}
        </>
    )
}

export default App
