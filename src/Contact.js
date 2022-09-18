import React, {useState} from 'react';
import {ContactForm} from "./components/ContactForm";
import {FormContext} from "./FormContext";
import {ContactCard} from "./components/ContactCard";

export const Contact = () => {
    const [name, setName] = useState(null);
    const[reason, setReason] = useState(null);
    const[description, setDescription] = useState(null);
    const[email, setEmail] = useState(null);

    return (
        <div>
            <FormContext.Provider value={{nameCon: [name, setName], reasonCon: [reason, setReason], descriptionCon: [description, setDescription], emailCon: [email, setEmail]}}>
                <h1>Contact us!</h1>
                <ContactForm/>
                <br/>
                <ContactCard/>
                <br/>
            </FormContext.Provider>
        </div>
    )
};