import './css/sectioncard.css'

export default function SectionCard(
    {
        eyebrow,
        title,
        children
    }
) {
    return (

        <section className="section-card">
            
            <h3 className="section-title"><span className="section-eyebrow">{eyebrow}</span>{title}</h3>
            <div className="section-content">
                {children}
            </div>
        </section>

    )
}