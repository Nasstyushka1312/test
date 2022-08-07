import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
export default class Header extends Component {
    
    render() {
        const LogOut=() => {
            localStorage.clear();
        }
        const Authorized = () => {
            return localStorage.getItem('auth') ==true;
        }
        return (
            <>
                <Navbar className="sticky-top" id="Navbar" fixed="top" collapseOnSelect expand="lg" bg="danger" variant="light">
                    <Container style={{display:'block'}}>
                        <Nav className="navbar-nav me-auto mr-auto" style={{ justifyContent: 'space-between' }}>
                            <div style={{display:'flex'}}>
                                <Nav.Link href="/" >Главная страница</Nav.Link>
                                <Nav.Link href="/prof">Профиль</Nav.Link>
                                {Authorized() ? <div/>:<Nav.Link href="/login">Авторизация</Nav.Link>}
                                
                            </div>
                            <div>
                                {Authorized() ? <Nav.Link href="/" onClick={LogOut}>Выйти</Nav.Link> : <div /> }
                                </div>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}