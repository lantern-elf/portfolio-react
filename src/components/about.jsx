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
                            <div className='aboutHeader'>
                                LANTERN ELF
                            </div>
                            @lantern_elf
                        </div>
                        <div className='aboutSess'>
                            <div className='aboutHeader'>
                                E-MAIL
                            </div>
                            lanternelf@gmail.com
                        </div>
                        <div className='aboutSess'>
                            <div className="aboutHeader">
                                PLATFORMS
                            </div>
                            <div className='platformLinks'>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contentSess2'>
                    
                </div>
            </div>
        </div>
    )
}

export default About