import { ProgressBar } from "react-bootstrap";

const WebDeveloper = () => {
  const now = 60;
  return (
    <div className="container h-screen">
      <h4>Hard Skills</h4>

      <div className="container  flex items-center ">
        <div className=" bg-warning-200 flex ">
          <div>
            <h6 className="p-1">html </h6>
            <h6 className="p-1">nivel</h6>
          </div>
          <ProgressBar now={now} label={`${now}%`} className="w-48 m-4  " />
        </div>
      </div>
      <div>
        <ProgressBar now={now} label={`${now}%`} className="w-48 m-4" />
      </div>
      <div>
        <ProgressBar now={now} label={`${now}%`} className="w-48 m-4" />
      </div>
      <div>
        <ProgressBar now={now} label={`${now}%`} className="w-48 m-4" />
      </div>
    </div>
  );
};

export default WebDeveloper;
