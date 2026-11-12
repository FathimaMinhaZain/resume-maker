import './css/header.css'

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header-left">
                    <h1>Resume Maker</h1>
                </div>
                <div className="header-right">
                    <button className="btn sample-btn">show sample</button>
                    <button className="btn clear-btn">Clear</button>
                    <button className="btn download-btn">Download as PDF</button>
                </div>
            </div>
        </>

    )
}