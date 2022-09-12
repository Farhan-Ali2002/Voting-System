import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
const Layout = () => {
    return (
        <main className="App">
            <Link to="/login">Login</Link>
            <Outlet />
        </main>
    )
}

export default Layout