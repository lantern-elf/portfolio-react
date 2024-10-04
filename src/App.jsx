import { useState } from 'react'
import Navbar from './components/navbar'
import Gallery from './components/gallery'
import About from './components/about'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Gallery />
                <About />
            </main>
        </>
   )
}

export default App
