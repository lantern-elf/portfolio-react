import '../index.css'
import './components.css'
import './gallery.css'

function Gallery() {
    return(
        <>
            <div className="gallery">
                <div><img className='arts' src="src/assets/imgs/Echoes of Wisdom.png" alt="" /></div>
                <div><img className='arts' src="src/assets/imgs/Zelda unused design form master works.png" alt="" /></div>
                <div><img className='arts' src="src/assets/imgs/new face.png" alt="" /></div>
                <div><img className='arts' src="src/assets/imgs/lying in bed.png" alt="" /></div>
                <div><img className='arts' src="src/assets/imgs/red-link for enni.png" alt="" /></div>
            </div>
        </>
    )
}

export default Gallery