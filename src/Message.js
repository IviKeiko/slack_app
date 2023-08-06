import "./Message.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt={user} />
      <div className="message__info">
        {/* timestamp is from my db and Firebase provides method toDate() */}
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default Message;
