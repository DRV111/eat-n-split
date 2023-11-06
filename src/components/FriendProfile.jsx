function FriendProfile({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.balance}</p>
      <button className="button">Select</button>
    </li>
  );
}

export default FriendProfile;
