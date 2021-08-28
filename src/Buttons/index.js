import "./style.css"

const Buttons = ({ tasks, hideDoneTask }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;