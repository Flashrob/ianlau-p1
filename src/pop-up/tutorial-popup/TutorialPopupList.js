import TutorialPopup2 from "./TutorialPopup2";

export default function TutorialMessageList(props) {
  const { tutorial } = props;
  return tutorial === 2 ? <TutorialPopup2 tutorial={tutorial} /> : "";
}
