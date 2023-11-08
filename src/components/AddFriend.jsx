import Button from './Button';

function AddFriend({ handleOpen }) {
  return (
    <div>
      <form className="form-add-friend">
        <label>👥Friend name</label>
        <input type="text" />
        <label>📸Image URL</label>
        <input type="text" />
        <Button className="button">Add friend</Button>
      </form>
      <Button onClick={() => handleOpen(false)}>Close</Button>
    </div>
  );
}

export default AddFriend;
