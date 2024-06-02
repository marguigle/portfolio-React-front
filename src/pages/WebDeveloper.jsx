import { ProgressBar } from "react-bootstrap";

const WebDeveloper = () => {
  const now = 80;
  return (
    <div className="container h-screen">
      <h4>Hard Skills</h4>

      <div className="container  flex items-center ">
        <div className=" bg-warning-200 flex  rounded-md">
          <div>
            <img
              className="max-w-12 m-2"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-imagenes.appspot.com/o/logos%2Flogo-javascript.svg?alt=media&token=6ad8df87-e2e0-476a-b669-bc005ca45279"
              alt=""
            />
          </div>
          <ProgressBar now={now} label={`${now}%`} className="w-48 m-4  " />
          <h6 className=" m-2">nivel</h6>
        </div>
      </div>
    </div>
  );
};

export default WebDeveloper;
