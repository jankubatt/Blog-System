import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NavbarComponent = () => {
    const navigate = useNavigate()

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Title
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">User</a>
                        </Navbar.Text>
                        <Navbar.Text><Button onClick={() => navigate('/add-post')}>Přidat</Button></Navbar.Text>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
