import * as PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';
import {useState} from 'react';

const ChatLog = ({entries}) => {
  const [numOfLikes, setLikes] = useState(entries?.filter(i => i.liked === true)?.length);
  return <div>
    <div>
      {`${numOfLikes} ❤️s`}
    </div>
    {
      entries?.map(i => <ChatEntry key={i.id} body={i.body} sender={i.sender} timeStamp={i.timeStamp} liked={i.liked} numOfLikes={numOfLikes} setLikes={setLikes}
        isLocal={i.sender ==='Vladimir'}/>)}
  </div>;
};

ChatLog.propTypes = {entries: PropTypes.array.isRequired};
export default ChatLog;