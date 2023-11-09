import { useState } from 'react';
import Button from './Button';

function SplitBillForm({ selectedFriend }) {
  const [bill, setBill] = useState('');
  const [userExpence, setUserExpense] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const paidByFriend = bill ? bill - userExpence : '';
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleUserExpence(e) {
    setUserExpense(
      Number(e.target.value) > bill ? userExpence : Number(e.target.value)
    );
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>👤Your expence</label>
      <input type="text" value={userExpence} onChange={handleUserExpence} />
      <label>👥{selectedFriend.name}&apos;s expence</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤔Who is paing the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split it!</Button>
    </form>
  );
}

export default SplitBillForm;
