import { useState } from "react"
import "./navbar.scss"

export const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>LamaEstate</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                <a href="">Sign In</a>
                <a href="" className="register">Sign Up</a>

                <div href="" className="menu-icon" onClick={() => setOpen((prev) => !prev)}>
                    {
                        open ? <h1 style={{ color: 'white', fontSize : '1.4rem' }}>X</h1> : <img src="/menu.png" alt="" />
                    }
                </div>

                <div className={`menu ${open ? 'active' : ''}`}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign Up</a>
                    <a href="">Sign In</a>
                </div>
            </div>
        </nav>
    )
}
