import Button from './Button';

function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <label>💰Bill value</label>
      <input />
      <label>👤Your expence</label>
      <input />
      <label>👥Friend&apos;expence</label>
      <input />
      <label>🤔Who is paing the bill?</label>
      <select>
        <option>You</option>
        <option>Your friend</option>
      </select>
      <Button>Split it!</Button>
    </form>
  );
}

export default SplitBillForm;
