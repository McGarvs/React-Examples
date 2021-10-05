function PersonField(props){
    return <input className={"name"} value={props.name} onChange={
        (event) => props.onFieldChange(props.id, "name", event.target.value)}/>
}