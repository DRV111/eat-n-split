import FriendProfile from './FriendProfile';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function FriendList() {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <FriendProfile key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendList;
