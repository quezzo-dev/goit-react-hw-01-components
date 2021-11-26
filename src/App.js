import user from "./components/Profile/user.json";
import data from "./components/Statistics/data.json";
import friends from "./components/Friends/friends.json";
import transaction from "./components/TransactionHistory/transactions.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/Friends/FriendsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stat={data} />
      <FriendsList data={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}
