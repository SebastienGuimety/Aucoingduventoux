import React, { useState, useEffect, useRef } from 'react';

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Initial language
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown open/closed state
  const dropdownRef = useRef(null); // Ref for the dropdown element

  // Function to close the dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Add a click event listener to the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown(); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    closeDropdown(); // Close the dropdown after selecting a language
    // You can add logic here to change the language in your app
  };

  const languageOptions = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    // Add more languages and flags as needed
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center space-x-1 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handleToggleDropdown}
        >
          <span className="w-4 h-4">{languageOptions.find((lang) => lang.code === selectedLanguage)?.flag}</span>
          <span>{languageOptions.find((lang) => lang.code === selectedLanguage)?.name}</span>
        </button>
      </div>
      {dropdownOpen && ( // Render the dropdown only if it's open
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
          <ul>
            {languageOptions.map((language) => (
              <li key={language.code}>
                <button
                  type="button"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                  onClick={() => handleChangeLanguage(language.code)}
                >
                  <span className="w-4 h-4 mr-2">{language.flag}</span>
                  {language.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
