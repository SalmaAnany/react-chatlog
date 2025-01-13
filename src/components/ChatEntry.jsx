import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.jsx';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onToggleLike,
  isLocal
}) => {
  const handleLikeClick = () => {
    onToggleLike(id);
  };

  return (
    <div className={`${isLocal ? 'local' : 'remote'} chat-entry`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button
          className="like"
          onClick={handleLikeClick}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onToggleLike: PropTypes.func.isRequired,
  isLocal: PropTypes.bool
};

export default ChatEntry;
