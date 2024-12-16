import * as PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';

const ChatLog = ({entries}) => {
  return <>{
    entries?.map(i => <ChatEntry key={i.id} body={i.body} sender={i.sender} timeStamp={i.timeStamp}></ChatEntry>)}
  </>;
};

ChatLog.propTypes = {entries: PropTypes.array.isRequired};
export default ChatLog;