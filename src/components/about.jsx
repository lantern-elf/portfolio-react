import './about.css'

function About() {
    return(
        <div className='aboutPage'>
            <div className='pageHeader'>
                About Me
            </div>
            <div className='pageContent'>
                <div className="column photo">
                    <div className='imageFrame'>
                        <img src="src/assets/imgs/new face.png" alt="" />
                    </div>
                </div>
                <div className="column about">

                </div>
            </div>
        </div>
    )
}

export default About