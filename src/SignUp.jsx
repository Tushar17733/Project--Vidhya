import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, Link, useLocation } from "react-router-dom";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";
import "./style.css";

export default function SignUp() {
    const location = useLocation(); // Get current route
    const [activeTab, setActiveTab] = useState(location.pathname); // Track active tab

    // Update activeTab when location changes
    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);
    
    return (
        <div className="container">
            <h2 className="title">Sign Up</h2>
            <p className="subtitle">Enter your details below & free sign up</p>

            {/* Navigation Buttons */}
            <div className="toggle-buttons">
                <Link
                    to="/student"
                    className={`toggle-btn ${activeTab === "/student" ? "active" : ""}`}
                >
                    Student
                </Link>

                <Link
                    to="/parent"
                    className={`toggle-btn ${activeTab === "/parent" ? "active" : ""}`}
                >
                    Parent
                </Link>
            </div>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Navigate replace to="/student" />} />
                <Route path="/student" element={<StudentForm />} />
                <Route path="/parent" element={<ParentForm />} />
            </Routes>
        </div>
    )
}
