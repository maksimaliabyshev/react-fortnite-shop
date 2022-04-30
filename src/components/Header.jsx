function Header() {
    return (
        <nav className=" light-blue darken-1">
            <div className="nav-wrapper">
                <a
                    href="https://fortniteapi.io/"
                    className="brand-logo"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    FortniteApi.io
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/truepatch/react-omdb-movies">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
