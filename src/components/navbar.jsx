import '../index.css'
import './component.css'

function Navbar() {
    return(
        <nav>
            <div className="logoSess">
                <img className="logo logoImg" src="/public/Emblem.png" alt="" />
                <div className="logo logoText"><b>Lantern Elf</b></div>
            </div>
            <div className='menuSess'>
                <li className='menu'><button href="">Home</button></li>
                <li className='menu'><button href="">Skills</button></li>
                <li className='menu'><button href="">Commission</button></li>
            </div>
        </nav>
    )
}

export default Navbar