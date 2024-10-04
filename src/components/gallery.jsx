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
                        artsImg.map((arts) => (
                            <>
                                <img className='art' key={arts.id} src={arts.src} alt="" />
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery