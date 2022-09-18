import React, {useContext} from 'react';
import {FormContext} from "../FormContext";
import {Button, Card} from "react-bootstrap";

export const ContactCard = () => {
    const { nameCon, reasonCon, descriptionCon, emailCon } = useContext(FormContext);
    const [name, setName] = nameCon;
    const[reason, setReason] = reasonCon;
    const[description, setDescription] = descriptionCon;
    const[email, setEmail] = emailCon;

    return (
        <Card className="text-center">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>{reason}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" href={"mailto:" + email}>Respond</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{email}</Card.Footer>
        </Card>
    )
}