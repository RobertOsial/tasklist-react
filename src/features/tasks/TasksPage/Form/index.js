import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";
import { StyledForm, Button } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim()

        if (trimmedNewTaskContent !== "") {
            dispatch(addTask({
                content: trimmedNewTaskContent,
                id: nanoid(),
                done: false,
            }))
            setNewTaskContent("");
            inputRef.current.focus();
        }

        return setNewTaskContent("")
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;