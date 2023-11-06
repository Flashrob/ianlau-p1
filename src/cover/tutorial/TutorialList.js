import Tutorial1 from "./Tutorial1";

export default function TutorialList(props) {
  const { tutorial } = props;
  return tutorial === 1 ? <Tutorial1 /> : "";
}
