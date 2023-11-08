import { useState } from 'react';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';
import './index.css';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

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
        <FriendList friends={initialFriends} />

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
