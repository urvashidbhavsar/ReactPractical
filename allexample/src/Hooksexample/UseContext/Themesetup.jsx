import React, { createContext, useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'; // Import the sun icon

// Create context
const ThemeContext = createContext();

// Create provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Consume context
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define styles for light and dark themes
  const lightStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    height: "100vh",
    display: "grid",
    placeContent: "center",
    placeItems: "center",
  };

  const darkStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    height: "100vh",
    display: "grid",
    placeContent: "center",
    placeItems: "center",
  };

  return (
    <div style={theme === "light" ? lightStyle : darkStyle}>
      <FontAwesomeIcon
        icon={theme === "light" ? faSun : faMoon}
        onClick={toggleTheme}
        style={{ cursor: "pointer", fontSize: "40px", marginBottom: "10px" }} // Add some styling
      />
      <p style={{ fontSize: "18px" }}>Current Theme: {theme}</p>
    </div>
  );
};

const Themesetup = () => {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
    </ThemeProvider>
  );
};

export default Themesetup;
