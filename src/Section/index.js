import "./style.css";

const Section = ({ title, body }) => (
    <section className="section">
        <h2 className="section__header">{title}</h2>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;