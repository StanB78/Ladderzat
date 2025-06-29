import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProfilePage() {
    const [profile, setProfile] = useState({
        name: 'DJ Hawaii',
        bio: 'Photographer & Traveler. Sharing moments from around the world.',
        profilePicture: '', // base64 image URL
        media: [],
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (updatedProfile) => {
        setProfile(updatedProfile);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div className="profile-page-container">
            {isEditing ? (
                <ProfileEditor profile={profile} onSave={handleSave} onCancel={handleCancel} />
            ) : (
                <ProfileView profile={profile} onEdit={() => setIsEditing(true)} />
            )}
        </div>
    );
}

function ProfileView({ profile, onEdit }) {
    return (
        <div className="profile-view">
            <div>
                {profile.profilePicture ? (
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        className="profile-picture"
                    />
                ) : (
                    <div className="profile-no-image">No Image</div>
                )}
            </div>

            <div className="profile-info">
                <h1 className="profile-name">{profile.name}</h1>
                <p className="profile-bio">{profile.bio}</p>

                <h2 className="media-title">Shared Media</h2>
                {profile.media.length > 0 ? (
                    <div className="media-grid">
                        {profile.media.map((mediaUrl, idx) => (
                            <img
                                key={idx}
                                src={mediaUrl}
                                alt={`Media ${idx}`}
                                className="media-item"
                            />
                        ))}
                    </div>
                ) : (
                    <p className="no-media-text">No media shared yet.</p>
                )}

                <button onClick={onEdit} className="edit-button">
                    Edit Profile
                </button>
            </div>
        </div>
    );
}

function ProfileEditor({ profile, onSave, onCancel }) {
    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [profilePicture, setProfilePicture] = useState(profile.profilePicture);
    const [media, setMedia] = useState(profile.media);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfilePicture(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleAddMedia = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setMedia([...media, reader.result]);
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveMedia = (index) => {
        setMedia(media.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, bio, profilePicture, media });
    };

    return (
        <form onSubmit={handleSubmit} className="profile-editor-form">
            <div>
                <label className="input-label">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-input"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div>
                <label className="input-label">Bio</label>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="textarea-input"
                    rows={4}
                    placeholder="Write a short bio"
                    required
                />
            </div>

            <div>
                <label className="input-label">Profile Picture</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="file-input"
                />
                {profilePicture && (
                    <img
                        src={profilePicture}
                        alt="Preview"
                        className="profile-picture-preview"
                    />
                )}
            </div>

            <div>
                <label className="input-label">Media</label>
                <input type="file" accept="image/*" onChange={handleAddMedia} className="file-input" />
                {media.length > 0 && (
                    <div className="media-grid">
                        {media.map((src, index) => (
                            <div key={index} className="media-item-wrapper">
                                <img
                                    src={src}
                                    alt={`Media ${index}`}
                                    className="media-item"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveMedia(index)}
                                    className="remove-media-button"
                                    aria-label="Remove media"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="form-actions">
                <button type="submit" className="save-button">Save</button>
                <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
            </div>
        </form>
    );
}

ProfileView.propTypes = {
    profile: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        profilePicture: PropTypes.string,
        media: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
};

ProfileEditor.propTypes = {
    profile: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        profilePicture: PropTypes.string,
        media: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default ProfilePage;
