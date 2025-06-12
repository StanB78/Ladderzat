import React from 'react';

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src="profile.jpg" alt="Profile Picture" className="profile-picture" />
                <div className="profile-info">
                    <h1 className="profile-name">Ballenblazer deluxe</h1>
                    <p className="profile-bio">
                        Photographer & Traveler. Sharing moments from around the world.
                    </p>
                </div>
            </div>

            <div className="media-section">
                <h2>Shared Media</h2>
                <div className="media-grid">
                    <img src="photo1.jpg" alt="Shared photo 1" className="media-item" />
                    <img src="photo2.jpg" alt="Shared photo 2" className="media-item" />
                    <video controls className="media-item">
                        <source src="video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Profile;
