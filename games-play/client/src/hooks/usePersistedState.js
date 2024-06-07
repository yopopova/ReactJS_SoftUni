import { useState } from 'react';

// This will update localStorage
// With this we prevent to logout authomatically when we refresh the app
export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);
        let serializedValue; // value which is turned into text format

        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    }

    return [
        state,
        setPersistedState
    ];
}