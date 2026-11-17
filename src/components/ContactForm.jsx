import Textfield from './Textfield.jsx'
import SectionCard from './SectionCard.jsx'

export default function ContactForm({ contact, update }) {
    const contactFields = [
        {
            key: 'name',
            label: 'Name',
            placeholder: 'Inej Ghafa',
            type: 'text',
            autoComplete: 'name'
        },
        {
            key: 'title',
            label: 'Title',
            placeholder: 'Software Engineer',
            type: 'text',
            autoComplete: 'title'
        },
        {
            key: 'email',
            label: 'Email',
            placeholder: 'inejghafa@gmail.com',
            type: 'email',
            autoComplete: 'email'
        }, {
            key: 'phone',
            label: 'Phone Number',
            placeholder: '123-456-7890',
            type: 'tel',
            autoComplete: 'phone'
        }, {
            key: 'location',
            label: 'Location',
            placeholder: 'Ketterdam, Fjerda',
            type: 'text',
            autoComplete: 'location'
        },{
            key: 'linkedin',
            label: 'LinkedIn',
            placeholder: 'linkedin.com/inejghafa',
            type: 'url',
            autoComplete: 'linkedin'
        }
    ]

    return (
        <div className="contact-form">
            <SectionCard
                eyebrow='01'
                title='Contact'
            >

                <div className="field-grid">
                    {contactFields.map((field) => (
                        <Textfield
                            key={field.key}
                            label={field.label}
                            value={contact[field.key]}
                            onChange={(e) => update(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            type={field.type}
                            autoComplete={field.autoComplete}
                        />
                    ))}

                </div>



            </SectionCard>
        </div>
    )
}