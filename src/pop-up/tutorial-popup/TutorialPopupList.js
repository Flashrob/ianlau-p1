export default function TutorialMessageList(props) {
  const { tutorial } = props;
  return <div className={`tutorial-popup${tutorial}`}></div>;
}
