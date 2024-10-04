import '../index.css'
import './navbar.css'

function Navbar() {
    return(
        <nav>
            <div className="logoSess">
                <img className="logo logoImg" src="/public/Emblem.png" alt="" />
                <div className="logo logoText"><b>Lantern Elf</b></div>
            </div>
            <div className='menuSess'>
                <li className='menu'><a className='menuButton'>Home</a></li>
                <li className='menu'><a className='menuButton'>About</a></li>
                <li className='menu'><a className='menuButton'>Skills</a></li>
                <li className='menu'><a className='menuButton'>Commission</a></li>
            </div>
        </nav>
    )
}

export default Navbar