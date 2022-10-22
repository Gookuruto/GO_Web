import React from "react"

import CSS from 'csstype';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";

const h1: CSS.Properties = {
    textAlign: "center"
}
function Fun(){
    return (
        <div style={h1}>
            <p>
                Fun Page
            </p>
            <Row>
            <Button variant="primary">Button #1</Button>
            </Row>
            <Link to={"/"}>
                <Button variant="primary">
                    Home
                </Button>
            </Link>

        </div>
    )
}

export default Fun