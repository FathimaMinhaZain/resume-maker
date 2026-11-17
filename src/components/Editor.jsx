import './css/editor.css'
import ContactForm from './ContactForm.jsx'


export default function Editor({contact, update}) {
    return (
        <div className="editor-container">
            <div className="personal-info">
                <ContactForm contact={contact} update={update} />
            </div>

        </div>
    )
}