export default function TutorialMessage(props) {
  const { tutorial } = props;
  return <div className={`tutorial-popup${tutorial}`}></div>;
}
