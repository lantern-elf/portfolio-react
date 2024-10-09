import './about.css'

function About() {
    return(
        <div className='aboutPage'>
            <div className='pageHeader'>
                ABOUT ME
            </div>
            <div className='pageContent'>
                <div className="contentSess1">
                    <div className="column photo">
                        <div className='imageFrame'>
                            <img src="src/assets/imgs/new face.png" alt="" />
                        </div>
                    </div>
                    <div className="column about">
                        <div className='aboutSess'>
                            <div className='aboutHeader'>Name</div>
                            Lantern Elf
                        </div>
                        <div className='aboutSess'>
                            <div className='aboutHeader'>E-Mail</div>
                            lanternelf@gmail.com
                        </div>
                    </div>
                </div>
                <div className='contentSess2'>
                    <div className='contentText'>
                        Greetings. I am <b>Lantern</b>, an <i>illustrator</i> and <i>programmer</i>.
                        I specialize in creating illustrations, concept art, front-end web development, and game development.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About