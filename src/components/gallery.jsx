import '../index.css'
import './components.css'
import './gallery.css'
import artsImg from '../assets/arts.json'

function Gallery() {
    
    return(
        <>
            <div className="gallery">
                <div className='galleryWrapper'>
                    {
                        artsImg.map(arts => (
                            <img className='arts' key={arts.id} src={arts.src} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery