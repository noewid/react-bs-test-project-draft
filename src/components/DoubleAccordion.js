import React from 'react';
import { Accordion } from "react-bootstrap";

export const DoubleAccordion = () => {

    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Rebuilt with React</Accordion.Header>
                <Accordion.Body>
                    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
                    As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Bootstrap at its core</Accordion.Header>
                <Accordion.Body>
                    Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.
                    By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes you already love.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Accessible by default</Accordion.Header>
                <Accordion.Body>
                    The React component model gives us more control over form and function of each component.
                    Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};