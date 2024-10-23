import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './redux/userSlice'; 
import './profile.css'; 

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [editableUser, setEditableUser] = useState(user);

  const handleSave = () => {
    dispatch(updateUser(editableUser));
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <label>Name</label>
      <input
        type="text"
        value={editableUser.name}
        onChange={(e) =>
          setEditableUser({ ...editableUser, name: e.target.value })
        }
      />
      <label>Email</label>
      <input
        type="email"
        value={editableUser.email}
        onChange={(e) =>
          setEditableUser({ ...editableUser, email: e.target.value })
        }
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserProfile;
