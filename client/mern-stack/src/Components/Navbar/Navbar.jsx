import './Navbar.css'

const Navbar = () => {
    return(
        <div className='nav'>
            <div className="nav-logo">
                <h1>PROJECT MANAGEMENT TOOL</h1>
 
            </div>

                <ul className="nav-menu">
                    <li> <a href="/"> HOME</a> </li>
                    <li> <a href="/login"> LOGIN</a> </li>
                    <li> <a href="#"> SERVICES</a> </li>
                    <li> <a href="#"> CONTACT</a> </li>
 
                </ul>
        </div>
    )
}

export default Navbar