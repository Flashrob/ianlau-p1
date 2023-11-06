import Tutorial1 from "./Tutorial1";
import Tutorial2 from "./Tutorial2";

export default function TutorialList(props) {
  const { tutorial, handleConfirmMessage } = props;
  return tutorial === 1 ? (
    <Tutorial1 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 2 ? (
    <Tutorial2 handleConfirmMessage={handleConfirmMessage} />
  ) : (
    ""
  );
}
