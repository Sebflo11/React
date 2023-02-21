import React from 'react';
import ContactComponent from '../pure/contact';
import { Contact } from "../../models/contact.class";


const ContactListComponent = () => {

    const defaultContact = new Contact('Sebastián', 'Flores', 'sf@gmial', false)
    
    return (
        <div>
            <div>
                <h1> Contact </h1>
            </div>
            <ContactComponent contact={ defaultContact }></ContactComponent>
        </div>
    );
}

export default ContactListComponent;
