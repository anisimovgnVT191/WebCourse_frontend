import React from 'react';
import FooterMenu from "./FooterMenu";
import FooterBottom from "./FooterBottom";

function Footer(props) {
    let footerMenuItems = [
        { link: "/feedback", title: "Обратная связь"},
        { link: "/delivery", title: "Доставка"},
        { link: "/payment", title: "Оплата"},
        { link: "/contacts", title: "Контакты"}
    ]
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <footer className="footer">
                    <FooterMenu footerMenuItems={footerMenuItems}/>
                </footer>
            </div>
        </div>
    );
}

export default Footer;