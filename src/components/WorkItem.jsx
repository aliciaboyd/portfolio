import "./workItem.css";

export default function WorkItem(props) {
  return (
    <div className="work-item" style={{ backgroundColor: `${props.bgColor}` }}>
      <span>{props.date}</span>
      <div className="work-item-title">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <p>Notable skills: {props.skills}</p>
    </div>
  );
}
