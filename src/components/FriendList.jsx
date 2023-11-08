import FriendProfile from './FriendProfile';

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendProfile key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendList;
