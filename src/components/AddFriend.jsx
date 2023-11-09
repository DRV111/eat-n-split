import { useState } from 'react';
import Button from './Button';

function AddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('https://i.pravatar.cc/48');
  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !photoUrl) {
      return;
    }
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: friendName,
      image: `${photoUrl}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setFriendName('');
    setPhotoUrl('https://i.pravatar.cc/48');
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👥Friend name</label>
      <input
        onChange={(e) => setFriendName(e.target.value)}
        type="text"
        value={friendName}
      />
      <label>📸Image URL</label>
      <input
        onChange={(e) => setPhotoUrl(e.target.value)}
        type="text"
        value={photoUrl}
      />
      <Button>Add friend</Button>
    </form>
  );
}

export default AddFriend;
