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
                                Name
                            </div>
                            Lantern Elf
                        </div>
                        <div className='aboutSess'>
                            <div className='aboutHeader'>
                                E-Mail
                            </div>
                            lanternelf@gmail.com
                        </div>
                    </div>
                </div>
                <div className='contentSess2'>
                    <div className='contentText'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta beatae iste quia porro obcaecati ex tempora, placeat veniam dolorem animi blanditiis accusamus a sapiente asperiores vero, eos fuga dignissimos quam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, atque perspiciatis. Earum ipsum commodi, consequatur porro, perspiciatis adipisci deserunt dignissimos nulla laborum in et, eos nostrum ipsa cumque atque hic?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About