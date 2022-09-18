import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import content from "./content";
import { Button, Form } from 'react-bootstrap';
import '../App.css';
import {FormContext} from "../FormContext";

export const ContactForm = () => {
    const { nameCon, reasonCon, descriptionCon, emailCon } = useContext(FormContext);
    const [name, setName] = nameCon;
    const[reason, setReason] = reasonCon;
    const[description, setDescription] = descriptionCon;
    const[email, setEmail] = emailCon;

    return (
        <Form className="contactForm">
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name here..." value={ name } onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="reason">
                <Form.Label>Reason</Form.Label>
                <Form.Control type="text" placeholder="Enter your reason for contacting us here..." value={ reason } onChange={(e) => setReason(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Describe your request a little more..." value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="email" placeholder="Enter your E-Mail here..." value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">We'll send you an E-Mail to this address as soon as your request is processed.</Form.Text>
            </Form.Group>
            <Button variant="outline-primary" type="submit">Submit</Button>
        </Form>
    )
}