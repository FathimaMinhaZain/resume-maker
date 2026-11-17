import './css/body.css'
import Editor from './Editor.jsx'
import { Preview } from './Preview.jsx'

export default function Body({contact, update}) {

    return (
        <>
            <div className="body-container">
                <Editor contact={contact} update={update} />
                <Preview contact={contact} />
            </div>
        </>
    )
}