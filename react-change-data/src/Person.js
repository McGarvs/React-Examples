import './Person.css';

function Person(props) {
    const classes = ["person "];
    // let deleteButtonClass = "hideDeleteButton";
    if (props.selected) {
        classes.push("selected");
        // deleteButtonClass = "deleteButton";
    }

    return <div className={classes.join(" ")}
                key={props.id}
                id={props.id}
                onClick={(e) => {
                    props.onRowClick(e.currentTarget.id);
                }}
        >
        {/*<div className="name">{props.name}</div>*/}
        <input className={"name"} value={props.name} onChange={
            (event) => props.onFieldChange(props.id, "name", event.target.value)}/>
        <div className="email">{props.email}</div>
        <div className="phone">{props.phone}</div>
    </div>
}
export default Person;
