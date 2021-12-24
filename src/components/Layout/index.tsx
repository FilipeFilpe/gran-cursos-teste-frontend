import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Bell, Calendar, CheckSquare, ChevronRight, Home, Mail, MessageSquare, Search, Star } from "react-feather";

import Sidebar from "../Sibedar";
import imgUser from "../../assets/images/user.png";
import "./styles.css"

interface LayoutProps {
    children?: any
}

export function Layout({
    children
}: LayoutProps) {
    return (
        <Row className="layout">
            <Col xs={2} className="sidebar-container">
                <Sidebar />
            </Col>
            <Col className="main">
                <Container>
                    <div className="header">
                        <Row className="top-bar">
                            <Col lg={6}>
                                <CheckSquare />
                                <MessageSquare />
                                <Mail />
                                <Calendar />
                                <Star />
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <span className="lang">English</span>
                                </div>
                                <div>
                                    <Bell />
                                </div>
                                <div>
                                    <Search />
                                </div>
                                <div className="user">
                                    <div className="name">
                                        <strong>John Doe</strong>
                                        <span>Available</span>
                                    </div>
                                    <img src={imgUser} alt="User" />
                                </div>
                            </Col>
                        </Row>
                        <div className="breadcrumb">
                            <div className="active">
                                Card Actions
                            </div>
                            <div>|</div>
                            <div>
                                <Home/>
                                <ChevronRight/>
                                eCommerce
                                <ChevronRight/>
                                Eletronics
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        { children }
                    </div>
                </Container>
            </Col>
        </Row>
    )
}