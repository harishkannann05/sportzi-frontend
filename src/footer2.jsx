import mailimg from "./assets/maillogo.svg";
import instaimg from "./assets/instalogo.png";
import gitimg from "./assets/gitlogo.png";
import whimg from "./assets/whlogo.png";
import "./css/footer.css";

export default function Footer2() {
    return (
        <footer className="footer2">
            <p>Connect with us</p>

            <div className="footer-icons">
                <a href="https://wa.me/XXXXXXXXXX" target="_blank"><img src={whimg} alt="WhatsApp" /></a>
                <a href="https://github.com/yourrepo" target="_blank"><img src={gitimg} alt="GitHub" /></a>
                <a href="mailto:yourmail@gmail.com"><img src={mailimg} alt="Email" /></a>
                <a href="https://instagram.com/yourpage" target="_blank"><img src={instaimg} alt="Instagram" /></a>
            </div>

            <span>&copy; 2025 Sportzi. All rights reserved.</span>
        </footer>
    );
}