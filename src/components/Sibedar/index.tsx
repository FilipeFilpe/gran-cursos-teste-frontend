import { useState } from 'react';
import { Accordion, Nav, useAccordionButton } from 'react-bootstrap'
import { CheckSquare, ChevronDown, ChevronRight, Mail, MessageSquare } from 'react-feather';

import logo from '../../assets/images/LogoGranCursos.png';

import './styles.css'

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState("0")

    const CustomToggle = ({ children, eventKey }: any) => {
        const decoratedOnClick = useAccordionButton(eventKey, () => {
            setMenuOpen(eventKey)
            console.log('totally custom!', eventKey)
        });

        return (
            <span
                className='menu-item'
                onClick={decoratedOnClick}
            >
                {children}
            </span>
        );
    }

    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="menu">
                <Accordion defaultActiveKey="0">
                    <CustomToggle
                        eventKey={"0"}
                    >
                        Dashboard
                        {
                            menuOpen !== "0" ? <ChevronRight />
                            : <ChevronDown />
                        }
                    </CustomToggle>
                    <Accordion.Collapse eventKey={"0"}>
                        <span className='menu-item submenu-item'>
                            eCommerce
                        </span>
                    </Accordion.Collapse>
                </Accordion>
                <div className="menu-group apps">
                    <div>APPS</div>
                    <span className='menu-item submenu-item'>
                        <Mail/> Email
                    </span>
                    <span className='menu-item submenu-item'>
                        <MessageSquare/> Chat
                    </span>
                    <span className='menu-item submenu-item'>
                        <CheckSquare/> Todo
                    </span>
                </div>
            </div>
        </Nav>
    )

}

