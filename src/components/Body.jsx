import './css/body.css'
import { useState } from 'react'
import Editor from './Editor.jsx'
import { Preview } from './Preview.jsx'


export default function Body() {

    const [contact, setContact] = useState({
        name: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        website: '',
        linkedin: '',
        github: ''
    });

    const update = (key, value) => {
        setContact({
            ...contact,
            [key]: value
        });
    };

    return (
        <>
            <div className="body-container">
                <Editor contact={contact} update={update} />
                <Preview contact={contact} />
            </div>
        </>
    )
}