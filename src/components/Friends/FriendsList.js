import FriendItem from "./FriendListItem.js";
import PropTypes from "prop-types";
import s from "./Friends.module.css";

export default function FriendsList({ data }) {
  return (
    <ul className={s.list}>
      {data.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
