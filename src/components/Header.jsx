import './css/header.css'

export default function Header({ onShowSample }) {
    return (
        <>
            <div className="header-container">
                <div className="header-left">
                    <h1>Resume Maker</h1>
                </div>
                <div className="header-right">
                    <button className="btn sample-btn" onClick={ onShowSample } >show sample</button>
                    <button className="btn clear-btn">Clear</button>
                    <button className="btn download-btn">Download as PDF</button>
                </div>
            </div>
        </>

    )
}