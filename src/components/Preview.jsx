import './css/preview.css'

export function Preview({ contact }) {
    return (
        <>
            <div className="preview-card">

                <h1 className="preview-name">{contact.name}</h1>

                {contact.title && (
                    <h2 className="preview-title">{contact.title}</h2>
                )}

                <div className="preview-contact">
                    {contact.location && <span>{contact.location}</span>}
                    {contact.phone && <span>{contact.phone}</span>}
                    {contact.email && <span>{contact.email}</span>}
                    {contact.linkedin && <p className="preview-link">{contact.linkedin}</p>}
                </div>

            </div>
        </>
    )
}