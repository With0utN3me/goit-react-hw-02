import css from "./Profile.module.css"
const Profile = ({name, tag, location, image, stats}) => {
    return (<div className={css["profile-wrapper"]}>
    <div className={css["profile-main-info"]}>
        <img
        className={css["profile-image"]}
        src={image}
        alt={name}
        />
        <p className={css["profile-name"]}>{name}</p>
        <p className={css["profile-info"]}>@{tag}</p>
        <p className={css["profile-info"]}>{location}</p>
    </div>

    <ul className={css["profile-stats-list"]}>
        <li className={css["profile-stats-item"]}>
        <span className={css["profile-stats-name"]}>Followers</span>
        <span className={css["profile-stats"]}>{stats.followers}</span>
        </li>
        <li className={css["profile-stats-item"]}>
        <span className={css["profile-stats-name"]}>Views</span>
        <span className={css["profile-stats"]}>{stats.views}</span>
        </li>
        <li className={css["profile-stats-item"]}>
        <span className={css["profile-stats-name"]}>Likes</span>
        <span className={css["profile-stats"]}>{stats.likes}</span>
        </li>
    </ul>
</div>)
}
export default Profile;