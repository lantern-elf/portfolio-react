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
                <li className='menu'><a className='menuButton'><b>Home</b></a></li>
                <li className='menu'><a className='menuButton'><b>About</b></a></li>
                <li className='menu'><a className='menuButton'><b>Skills</b></a></li>
                <li className='menu'><a className='menuButton'><b>Commission</b></a></li>
            </div>
        </nav>
    )
}

export default Navbar