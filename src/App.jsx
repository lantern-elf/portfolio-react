import { useState } from 'react'
import Navbar from './components/navbar'
import Gallery from './components/gallery'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Gallery />
            </main>
        </>
   )
}

export default App
