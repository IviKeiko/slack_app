import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { InfoOutlined } from "@mui/icons-material";
function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h2>You are in the {roomId} room </h2>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># general</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
    </div>
  );
}
export default Chat;
