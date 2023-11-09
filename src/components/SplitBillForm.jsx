import Button from './Button';

function SplitBillForm({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input type="text" />
      <label>👤Your expence</label>
      <input type="text" />
      <label>👥{selectedFriend.name}&apos;s expence</label>
      <input type="text" disabled />
      <label>🤔Who is paing the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split it!</Button>
    </form>
  );
}

export default SplitBillForm;
