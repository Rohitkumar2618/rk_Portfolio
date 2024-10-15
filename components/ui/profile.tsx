import React from "react";

const Profile = () => {
  return (
    <div className="flex   gap-4 items-center justify-center h-auto p-4 flex-shrink-0">
      <div>
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-center"
          src="https://i.pinimg.com/736x/01/63/9c/01639c664ad8be6a26b5263274f89f70.jpg"
          alt="Profile"
        />
      </div>
      <h1 className="font-semibold text-3xl md:text-5xl text-white text-center md:text-left">
        Rohitkumar
      </h1>
    </div>
  );
};

export default Profile;
