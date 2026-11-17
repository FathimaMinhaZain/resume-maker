import './css/body.css'
import Editor from './Editor.jsx'
import { Preview } from './Preview.jsx'
import { sample } from './sample.js'


export default function Body({contact, update, showSample}) {

    return (
        <>
            <div className="body-container">
                <Editor contact={showSample ? sample.contact : contact} update={update} />
                <Preview contact={showSample ? sample.contact : contact} />
            </div>
        </>
    )
}