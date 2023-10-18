import Link from "next/link";

const Navbar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-xl navbar-light" style={{ color: '#104333', fontWeight: 700 }}>
            <div className="container-fluid d-flex">
                {user.is_authenticated ? (
                    <Link href="/accept_request" className="navbar-brand">MOVER</Link>
                ) : (
                    <Link href="/home" className="navbar-brand">MOVER</Link>
                )}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                    aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarBasic">
                    <ul className="navbar-nav ml-auto">
                        {user.is_authenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link href="/accept_request" className="nav-link active">VIEW REQUESTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/list_fulfilled_requests" className="nav-link active">FINISHED REQUESTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link active">
                                        <i className="fas fa-user"></i>
                                        {user.first_name}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/logout_view" className="nav-link active">LOG OUT</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link href="/signup" className="nav-link active">BECOME A DRIVER</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/login" className="nav-link active">LOGIN</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;