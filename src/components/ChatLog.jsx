import * as PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';

const ChatLog = ({ entries, onToggleLike }) => {
  return (
    <div>
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          body={entry.body}
          sender={entry.sender}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onToggleLike={onToggleLike}
          isLocal={entry.sender === 'Vladimir'}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onToggleLike: PropTypes.func.isRequired
};

export default ChatLog;
