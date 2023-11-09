import FriendProfile from './FriendProfile';

function FriendList({ friends, onSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendProfile
          selectedFriend={selectedFriend}
          onSelectFriend={onSelectFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

export default FriendList;
