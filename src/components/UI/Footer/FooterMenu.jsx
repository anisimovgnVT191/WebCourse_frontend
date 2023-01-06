import React from 'react';
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu({footerMenuItems}) {
    return (
        <div className="footer-menu-wrapper">
            <ul className="footer-menu">
                {
                    footerMenuItems.map((menuItem) =>
                        <FooterMenuItem item={menuItem}/>
                    )
                }
            </ul>
        </div>
    );
}

export default FooterMenu;