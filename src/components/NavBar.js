import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return <div className="NavBar">
        <div>
            Gaming Store
        </div>
        <div>
            Home
        </div>
        <div>
            Categories
        </div>
        <div>
            Special Offers
        </div>
        <div>
            Platforms
        </div>
        <div>
            Contact Us
        </div>
        <CartWidget />
    </div>
}

export default NavBar;
