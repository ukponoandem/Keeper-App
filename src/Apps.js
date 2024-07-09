import React from "react";

import Login from './pages/Login';

const Apps = () => {
    return (
        <div className="App">
            <h1>Welcome to My App</h1>
            <section className="login-section">
                <Login />
            </section>
            {/* Other content of your app */}
        </div>
    );
};

export default Apps;