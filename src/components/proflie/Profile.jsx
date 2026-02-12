import './profile.css';
import assets from '../../assets/assets';
import React from 'react';
const Profile = ({ user, setUser }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="profile-wrapper">
      <img className="profile-img" src={assets.man} alt="" onClick={() => setOpen(o => !o)} />
      {open && (
        <div className="profile-menu">
          <div className='profile-list'>
          <p>Hello, {user?.name || 'User'}</p>
          <button onClick={() => { setUser(null); setOpen(false); }}>Sign Out</button>
         <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Profile;