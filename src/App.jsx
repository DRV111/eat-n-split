import { useState } from 'react';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';
import './index.css';
import Button from './components/Button';

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
  const [showAddForm, setShowAddForm] = useState(false);
  const [addedFriend, setAddedFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddForm() {
    setShowAddForm((showForm) => !showForm);
  }
  function handleAddFriend(friend) {
    setAddedFriend((friends) => [...friends, friend]);
    setShowAddForm(false);
  }
  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddForm(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
          friends={addedFriend}
        />
        {showAddForm && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddForm}>
          {showAddForm ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriend && <SplitBillForm selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
