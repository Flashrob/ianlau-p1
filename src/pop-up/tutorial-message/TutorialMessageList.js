import TutorialMessage1 from "./TutorialMessage1";

export default function TutorialMessageList(props) {
  const { tutorial } = props;
  return tutorial === 1 ? <TutorialMessage1 /> : "";
}
