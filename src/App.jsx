import { useState } from 'react';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    if (isOpen) {
      setIsOpen(false);
    }
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />

        {!isOpen ? (
          <button onClick={() => setIsOpen(true)} className="button">
            Add friend
          </button>
        ) : (
          <AddFriend handleOpen={handleOpen} />
        )}
      </div>
      <SplitBillForm />
    </div>
  );
}

export default App;
