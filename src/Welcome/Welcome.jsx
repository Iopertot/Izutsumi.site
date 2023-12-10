function Welcome() {
    return(
        <>
        <div className="loperTxt">
            <h1>lopertot</h1>
        </div>
        <div className="loperImgMain">
           <img className="loperImg" src="https://izutsumi.site/loper-pfp.jpg"></img>
        </div>
        <div className="mainTxt">
            <p className="otherWelcomeText">Portfolio with my projects</p>
            <p className="otherWelcomeText">Can be found on my github</p>
            <p className="otherWelcomeText">I mainly use javascript and c++ for my projects</p>
        </div>
        <div className="Projects">
            <h2>Currently Working on</h2>
            <ul>
                <li>Adachi Discord Bot</li>
                <li>Light Novel Downloading Hub</li>
                <li>Emerald Audiobook player</li>
            </ul>
        </div>
        <div class="other">
            <div id="contact">
                <h3>If you wish to contact me in anyway, Please do so on discord.</h3>
            </div>
        </div> 
        </>
    )
}

export default Welcome