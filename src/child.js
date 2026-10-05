function Child(props) {
    return (
        <div>
            <p>{props.message}</p>

            <ul>
                {props.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Child;