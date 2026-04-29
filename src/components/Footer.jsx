function Footer() {
    let parentesi = "(New)"
    return <footer>
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-column">
                    <h3>DC COMICS</h3>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>
                </div>
                <div className="footer-column">
                    <h3>DC</h3>
                    <li>Terms Of Use</li>
                    <li>Privacy policy {parentesi}</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshop</li>
                    <li>CPSC certificates</li>
                    <li>Rating</li>
                    <li>Shop Help</li>
                    <li>Contact us</li>
                </div>
                <div className="footer-column">
                    <h3>SITES</h3>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </div>
                <div className="footer-column">
                    <h3>SHOP</h3>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </div>
            </div>

        </div>


    </footer>
}
export default Footer;