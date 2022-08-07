import React, { Component } from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
export default class MainPage extends Component {
    render() {
        const LogOut = () => {
            localStorage.clear();
        }
        const Authorized = () => {
            return localStorage.getItem('auth') ==true;
        }
        return (
            <>
                <h3 style={{ height:'84%'}}>Главная страница</h3>
            <Container fluid style={{
                    backgroundColor: 'success', position: 'relative',
                    bottom: '0', color: '#fff', paddingLeft: '0px', paddingRight: '0px'
                }}>
                    <Navbar expand="lg" bg="success" variant="light" >
                <Container id='cont1' style={{
                        display: 'block',
                    marginRight: '3rem!important',
                    marginLeft: '3rem!important'
                }}>
                        <Nav className="navbar-nav me-auto mr-auto" style={{ justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex' }}>
                                <Nav.Link href="/" >Главная страница</Nav.Link>
                                <Nav.Link href="/prof">Профиль</Nav.Link>
                                {Authorized() ? <div /> : <Nav.Link href="/login">Авторизация</Nav.Link>}

                            </div>
                            <div>
                                {Authorized() ? <Nav.Link href="/" onClick={LogOut}>Выйти</Nav.Link> : <div />}
                            </div>
                        </Nav>
                        </Container>
                        </Navbar>
            </Container>
            </>
        )
    }
}