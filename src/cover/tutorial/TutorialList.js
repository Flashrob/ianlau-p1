import Tutorial1 from "./Tutorial1";
import Tutorial2 from "./Tutorial2";
import Tutorial3 from "./Tutorial3";
import Tutorial4 from "./Tutorial4";
import Tutorial5 from "./Tutorial5";

export default function TutorialList(props) {
  const { tutorial, handleConfirmMessage } = props;
  return tutorial === 1 ? (
    <Tutorial1 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 2 ? (
    <Tutorial2 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 3 ? (
    <Tutorial3 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 4 ? (
    <Tutorial4 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 5 ? (
    <Tutorial5 handleConfirmMessage={handleConfirmMessage} />
  ) : (
    ""
  );
}
