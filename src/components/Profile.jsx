import React from "react";
import style from "./Profile.module.css";
import profileImage from "./PFP.jpg";

const userData = {
  name: "Arpit Jakhar",
  profileImage: profileImage, // Use the imported image
  bio: "Full Stack Developer | Tech Enthusiast | Coffee Lover",
  location: "Chennai, India",
  following: 150,
  followers: 2000,
  skills: [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 60 },
    { name: "CSS", level: 90 },
    { name: "C++", level: 82 },
  ],
};

const Profile = () => {
  return (
    <div className={style.profileContainer}>
      <div className={style.profileHeader}>
        <img
          src={userData.profileImage}
          alt="Profile"
          className={style.profileImage}
        />
        <h1 className={style.profilename}>{userData.name}</h1>
        <p className={style.profileBio}>{userData.bio}</p>
        <p className={style.profileLocation}>{userData.location}</p>
        <div className={style.profileStats}>
          <span>{userData.following} Following</span>
          <span>{userData.followers} Followers</span>
        </div>
      </div>
      <div className={style.profileSkills}>
        <h2>Skills</h2>
        <ul>
          {userData.skills.map((skill, index) => (
            <li key={index} className={style.skillItem}>
              <span className={style.skillName}>{skill.name}</span>
              <div className={style.skillBarContainer}>
                <div
                  className={style.skillBar}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
