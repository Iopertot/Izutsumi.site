function Header() {
    const stylesUl = {
            listStyleType: "none",
            margin: "0",
            padding:  "0",
            overflow: "hidden",
            backgroundColor: "#4c566a",
            fontFamily: "nerdmono",
            maxWidth: "1920px",
    }

    const stylesLi = {
        display: "inline",
        float: "left",
        borderRight: "0.5px solid #d8dee9",
    }
    const stylesA = {
        display: "block",
        textAlign: "center",
        padding: "12px 14px",
        textDecoration: "none",
        color: "#81a1c1",
        margin: "0",
    }
    return(
        <header className="drpBar">
            <nav>
                <ul style={stylesUl} className="drpBarMain">
                    <li style={stylesLi}><a style={stylesA} href="../novels">Novels</a></li>
                    <li style={stylesLi}><a style={stylesA} href="https://github.com/lopertot">Github</a></li>
                    <li style={stylesLi}><a style={stylesA} href="https://discord.gg/izutsumi">Discord</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header