import React from 'react';
import NavbarMenuItem from "./NavbarMenuItem";

function NavbarMenu({navbarMenuItems}) {
    return (
        <div>
            <ul className="navbar-menu">
                {
                    navbarMenuItems.map((menuItem) =>
                        <NavbarMenuItem menuItem={menuItem} key={menuItem.id}/>
                    )
                }
            </ul>
        </div>
    );
}

export default NavbarMenu;