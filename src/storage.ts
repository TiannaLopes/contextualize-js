import Cookies from 'js-cookie';
import LocalStorageMemory from 'localstorage-memory'; // Import the memory storage

// Check if localStorage is available
const isLocalStorageAvailable = () => {
    try {
        localStorage.setItem('__test__', '1');
        localStorage.removeItem('__test__');
        return true;
    } catch {
        return false;
    }
};

// Use native localStorage or a memory storage fallback
const memoryStorage = new LocalStorageMemory(); // Create an instance

export const storage = isLocalStorageAvailable() ? localStorage : memoryStorage;
