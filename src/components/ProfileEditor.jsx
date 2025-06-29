import React, { useState } from "react";

export default function ProfileEditor() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Opslaan:", { name, bio, photo });
        setIsEditing(false);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);

        // Preview afbeelding tonen (mock)
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow space-y-4">
            {!isEditing ? (
                <>
                    <img
                        src={photoPreview || "/default-avatar.png"}
                        alt="Profielfoto"
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <h2 className="text-xl font-semibold text-center">{name}</h2>
                    <p className="text-center text-gray-600">{bio}</p>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                        onClick={() => setIsEditing(true)}
                    >
                        Bewerken
                    </button>
                </>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Naam"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border w-full px-3 py-2 rounded"
                    />
                    <textarea
                        placeholder="Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="border w-full px-3 py-2 rounded"
                    />
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    {photoPreview && (
                        <img
                            src={photoPreview}
                            alt="Preview"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                    )}
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Opslaan
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded"
                            onClick={() => setIsEditing(false)}
                        >
                            Annuleren
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
