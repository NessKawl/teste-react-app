import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-5 bg-sky-500 flex justify-between">
            <h4>NomeEmpresa</h4>
            <div>
                <Link className="mx-3" to="/">Home</Link>
                <Link to="/contato">Contatos</Link>
            </div>
        </nav>
    )
}

export default Navbar;