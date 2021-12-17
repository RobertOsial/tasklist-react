import { useState, useRef } from "react";
import { Form, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
            inputRef.current.focus();
        }

        return setNewTaskContent("")
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <Input ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </Form>
    );
};

export default Form;