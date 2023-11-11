import Tutorial1 from "./Tutorial1";
import Tutorial10 from "./Tutorial10";
import Tutorial11 from "./Tutorial11";
import Tutorial15 from "./Tutorial15";
import Tutorial16 from "./Tutorial16";
import Tutorial17 from "./Tutorial17";
import Tutorial18 from "./Tutorial18";
import Tutorial19 from "./Tutorial19";
import Tutorial2 from "./Tutorial2";
import Tutorial20 from "./Tutorial20";
import Tutorial21 from "./Tutorial21";
import Tutorial22 from "./Tutorial22";
import Tutorial23 from "./Tutorial23";
import Tutorial24 from "./Tutorial24";
import Tutorial25 from "./Tutorial25";
import Tutorial26 from "./Tutorial26";
import Tutorial28 from "./Tutorial28";
import Tutorial29 from "./Tutorial29";
import Tutorial3 from "./Tutorial3";
import Tutorial30 from "./Tutorial30";
import Tutorial31 from "./Tutorial31";
import Tutorial33 from "./Tutorial33";
import Tutorial34 from "./Tutorial34";
import Tutorial4 from "./Tutorial4";
import Tutorial5 from "./Tutorial5";
import Tutorial6 from "./Tutorial6";
import Tutorial7 from "./Tutorial7";
import Tutorial8 from "./Tutorial8";
import Tutorial9 from "./Tutorial9";

export default function TutorialList(props) {
  const { tutorial, handleConfirmMessage, handleReset } = props;
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
  ) : tutorial === 6 ? (
    <Tutorial6 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 7 ? (
    <Tutorial7 />
  ) : tutorial === 8 ? (
    <Tutorial8 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 9 ? (
    <Tutorial9 />
  ) : tutorial === 10 ? (
    <Tutorial10 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 11 ||
    tutorial === 12 ||
    tutorial === 13 ||
    tutorial === 14 ? (
    <Tutorial11 tutorial={tutorial} />
  ) : tutorial === 15 ? (
    <Tutorial15 />
  ) : tutorial === 16 ? (
    <Tutorial16 />
  ) : tutorial === 17 ? (
    <Tutorial17 />
  ) : tutorial === 18 ? (
    <Tutorial18 />
  ) : tutorial === 19 ? (
    <Tutorial19 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 20 ? (
    <Tutorial20 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 21 ? (
    <Tutorial21 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 22 ? (
    <Tutorial22 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 23 ? (
    <Tutorial23 />
  ) : tutorial === 24 ? (
    <Tutorial24 />
  ) : tutorial === 25 ? (
    <Tutorial25 />
  ) : tutorial === 26 ? (
    <Tutorial26 />
  ) : tutorial === 28 ? (
    <Tutorial28 handleConfirmMessage={handleConfirmMessage} />
  ) : tutorial === 29 ? (
    <Tutorial29 />
  ) : tutorial === 30 ? (
    <Tutorial30 />
  ) : tutorial === 31 ? (
    <Tutorial31 />
  ) : tutorial === 33 ? (
    <Tutorial33 />
  ) : tutorial === 34 ? (
    <Tutorial34 handleReset={handleReset} />
  ) : (
    ""
  );
}
