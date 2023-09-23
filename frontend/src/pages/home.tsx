import React, {useEffect, useState} from 'react';
import NavbarComponent from "../components/Navbar";
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await axios.get("http://localhost:8000/api/post/")
        return response.data;
    }

    useEffect(() => {
        fetchPosts().then(data => setPosts(data))
    }, [])

    return (
        <>
            <NavbarComponent/>

            <Container className={"mt-5"}>
                <Row>
                    <Col lg={{order: 2, span: 9}}>
                        <h1>Nejnovější příspěvky</h1>
                        <div className={"mt-3 d-flex flex-row flex-wrap justify-content-between"}>
                            {posts.map((post: any) => {
                                return (
                                    <Card className={"mt-5"} style={{width: "25em"}}>
                                        <Card.Header>neco</Card.Header>
                                        <Card.Img variant="top" src="/logo512.png" />

                                        <Card.Body>
                                            <Card.Title>Special title treatment</Card.Title>

                                            <Card.Text>
                                                {post.text}
                                            </Card.Text>

                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </Card.Body>

                                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                    </Card>
                                )
                            })}
                        </div>
                    </Col>
                    <Col lg={{order: 1, span: 3}}>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Rubriky</Card.Title>

                                    <Card.Text>
                                        <ul>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>

                        <Row className={"mt-5"}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>O autorovi</Card.Title>

                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage;
