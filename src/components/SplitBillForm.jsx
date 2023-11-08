import Button from './Button';

function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <label>💰Bill value</label>
      <input type="text" />
      <label>👤Your expence</label>
      <input type="text" />
      <label>👥Friend&apos;expence</label>
      <input type="text" disabled />
      <label>🤔Who is paing the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Your friend</option>
      </select>
      <Button>Split it!</Button>
    </form>
  );
}

export default SplitBillForm;
