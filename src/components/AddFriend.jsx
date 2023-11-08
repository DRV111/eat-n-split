function AddFriend({ handleOpen }) {
  return (
    <div>
      <form className="form-add-friend">
        <label>👥Friend name</label>
        <input type="text" />
        <label>🖼Image URL</label>
        <input type="text" />
        <button className="button">Add friend</button>
      </form>
      <button onClick={() => handleOpen(false)} className="button">
        Close
      </button>
    </div>
  );
}

export default AddFriend;
