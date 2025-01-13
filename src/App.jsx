import './App.css';
import data from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';
import { useState } from 'react';

const App = () => {
  const [chatEntries, setChatEntries] = useState(data);

  const toggleLike = (id) => {
    const updatedEntries = chatEntries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setChatEntries(updatedEntries);
  };

  const totalLikes = chatEntries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <section id="heartWidget">
          {totalLikes} ❤️s
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatEntries}
          onToggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
