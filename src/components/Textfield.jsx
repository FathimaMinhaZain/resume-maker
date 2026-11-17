export default function Textfield(
    { label,
        value,
        onChange,
        placeholder,
        autoComplete,
        type }
) {
    return (

        <div className="field-container">
            <label id={label} className={`field-label ${label}`} >
                {label}
                <input id={label} autoComplete={autoComplete} className={`field-label ${label}`} type={type} placeholder={placeholder} value={value} onChange={onChange}>
            </input>
            </label>
            
        </div>

    )
}