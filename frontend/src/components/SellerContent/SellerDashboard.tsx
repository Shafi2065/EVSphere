import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import SellerSidebar from '../SellerContent/SellerSidebar';
import './SellerDashboard.css';

const SellerDashboard: React.FC = () => {
    const [currentFname, setCurrentFname] = useState<string>('');

    useEffect(() => {
        const fetchUserFirstName = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setCurrentFname(userData.firstName || '');
                    } else {
                        console.error("Could not find user record.");
                    }
                } catch (error) {
                    console.error("Error fetching user data from Firestore:", error);
                }
            }
        };

        fetchUserFirstName();
    }, []);

    return (
        <div className="dashboard-container">
            <SellerSidebar />
            <div className="page-title-container">
                <h1>Welcome back, {currentFname}</h1>
            </div>
            <div className="user-options-container">
                <p>Select an option</p>
            </div>
        </div>
    );
};

export default SellerDashboard;
