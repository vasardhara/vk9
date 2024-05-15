
function CommonTitle({ title, description, tag }) {
    return (
        <>
            <div className="v_common-title">
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{tag}</span>
            </div>
        </>
    );
}

export default CommonTitle;