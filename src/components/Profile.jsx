import { useEffect, useState } from 'react';
import { auth } from '../firebase'; // jouw juiste pad
import { onAuthStateChanged } from 'firebase/auth';
import '../Profile.css';


function Profile() {
  const [name, setName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);  // hier haal je de naam van de ingelogde gebruiker
      } else {
        setName('');  // niet ingelogd
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  return (
    <div className="profile-container">
      <img src="..." alt="Profielfoto" className="profile-image" />
      <h1 className="profile-name">{name || "Niet ingelogd"}</h1>
    </div>
  );
}

export default Profile;
