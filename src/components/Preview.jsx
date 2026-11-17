import './css/preview.css'

export function Preview({ contact }) {
    return (
        <>
            <div className="preview-card">

                <p>{contact.name}</p>
                <p className="preview-title">{contact.title}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.location}</p>
                <p>{contact.website}</p>
                <p>{contact.linkedin}</p>
                <p>{contact.github}</p>
            </div>
        </>
    )
}