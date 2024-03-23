import clsx from "clsx";
import css from "./FriendListItem.module.css"
const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div>
            <img className={css["friend-image"]} src={avatar} alt={name} width="48" />
            <p className={css["friend-name"]}>{name}</p>
            <p className={clsx(
                isOnline == "Online" ? css["statusRed"] : css["statusGreen"]
            )}>{isOnline}</p>
        </div>
    )
}
export default FriendListItem;