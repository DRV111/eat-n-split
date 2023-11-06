import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import SplitBillForm from './components/SplitBillForm';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <AddFriend />
      </div>
      <SplitBillForm />
    </div>
  );
}

export default App;
