import "./pop-up.css";

export default function PopUp(props) {
  console.log(props.popUpMessage);
  let bullet = `You have been hit by a ${props.popUpMessage[0].color}${props.popUpMessage[0].name} bullet .`;
  return <div className="bullet-hit">{bullet}</div>;
}
