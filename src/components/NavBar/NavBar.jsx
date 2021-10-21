import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="d-flex justify-content-around">
            <h3>Logo</h3>
            <ul className="d-flex justify-content-between list-unstyled">
                <li className="mx-2 ">
                    <Link to="/" >Home</Link>
                </li>
                <li className="mx-2 ">
                    <Link to="/counter" >Counter</Link>
                </li>
                <li className="mx-2 ">
                    <Link to="/shop" >Shop</Link>
                </li>
                <li className="mx-2 ">
                    <Link to="/todo" >ToDo</Link>
                </li>
            </ul>
        </div>
    );
};
export default NavBar;