import './ChatEntry.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import TimeStamp from './TimeStamp.jsx';

const ChatEntry = ({sender,body,timeStamp, liked, numOfLikes, setLikes, isLocal}) => {
  const [like, setLike] = useState(liked);

  return (
    <div className={ `${isLocal === true ? 'local' : ''} chat-entry`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={() =>{
          if (like === true) {
            setLike(false);
            setLikes(numOfLikes - 1);
          } else {
            setLike(true);
            setLikes(numOfLikes + 1);
          }
        }}>{ like === true ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  numOfLikes: PropTypes.number,
  setLikes: PropTypes.func,
  isLocal: PropTypes.bool
};

export default ChatEntry;
