import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Profile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosPublic();
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        university: "",
        address: "",
        photo: "",
    });

    // Fetch user data
    useEffect(() => {
        if (user?.email) {
            axiosSecure
                .get(`/user/${user.email}`)
                .then((response) => {
                    setUserData(response.data);
                    setFormData({
                        name: response.data.name || "",
                        email: response.data.email || "",
                        university: response.data.university || "",
                        address: response.data.address || "",
                        photo: response.data.photo || "",
                    });
                })
                .catch((error) => console.error("Error fetching user data:", error));
        }
    }, [user?.email, axiosSecure]);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSave = () => {
        axiosSecure
            .patch(`/user/${user.email}`, formData)
            .then((response) => {
                setUserData(response.data);
                setIsEditing(false);

                // SweetAlert success message
                Swal.fire({
                    title: "Profile Updated!",
                    text: "Your profile information has been successfully updated.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                });
            })
            .catch((error) => {
                console.error("Error updating user data:", error);
                Swal.fire({
                    title: "Update Failed!",
                    text: "Something went wrong while updating your profile.",
                    icon: "error",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "Try Again",
                });
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <div className="text-center">
                    {userData?.photo && (
                        <img
                            src={userData.photo}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
                        />
                    )}
                    <h2 className="text-lg font-semibold text-gray-800 mt-3">
                        {userData?.name || "No Name Provided"}
                    </h2>
                    <p className="text-gray-600">{userData?.email || "No Email Provided"}</p>
                    <p className="text-gray-600">{userData?.university || "No University Provided"}</p>
                    <p className="text-gray-600">{userData?.address || "No Address Provided"}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Edit
                    </button>
                </div>
            </div>

            {/* Modal for Editing */}
            {isEditing && (
                <div className="fixed inset-0 flex top-20 z-10 items-center justify-center ">
                    <div className="bg-white p-6 rounded-lg w-full md:w-6/12 h-[500px]">
                        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
                        <input
                            type="text"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            placeholder="Photo URL"
                        />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            placeholder="University"
                        />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full mb-4 p-2 border rounded"
                            placeholder="Address"
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
