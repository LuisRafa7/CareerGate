import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/auth/ProfilePage";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch('');
          const userData = await response.json();
  
          setUser(userData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setLoading(false);
        }
      };
  
      fetchUser();
    }, []);
  

    return (
      <>
        <ProfilePage user={user} />
        <Navbar />
      </>
    );
}

export default App;
