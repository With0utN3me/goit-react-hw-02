import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css"
const FriendList = ({friends}) => {
    return (<ul className={css["friend-list-wrapper"]}>
        {friends.map(friend => {
            return (
                <li key={friend.id} className={css["friend-list-item"]}>
                    <FriendListItem 
                        avatar={friend.avatar} 
                        name={friend.name}
                        isOnline={friend.isOnline ? "Online" : "Offline"}
                    />
                </li>
            )
        })}
    </ul>)
}
export default FriendList;