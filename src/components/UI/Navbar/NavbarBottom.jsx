import React from 'react';
import NavbarMenu from "./NavbarMenu";

function NavbarBottom(props) {
    let navbarMenuItems = [
        { id: "1", title: "Каталог", destination: "/catalog" },
        { id: "2", title: "Контакты", destination: "/contacts" },
        { id: "3", title: "Доставка", destination: "/delivery" },
        { id: "4", title: "Оплата", destination: "/payment" },
        { id: "5", title: "Личный кабинет", destination: "/main" },
    ]

    return (
        <div className="navbar-bottom">
            <NavbarMenu navbarMenuItems={navbarMenuItems}/>
        </div>
    );
}

export default NavbarBottom;