import FriendProfile from './FriendProfile';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendProfile friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

export default FriendList;
