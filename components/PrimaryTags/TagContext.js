// components/PrimaryTags/TagContext.js
"use client";

import React, { createContext, useState, useEffect } from 'react';

// Creación del contexto TagContext
export const TagContext = createContext({
  selectedTag: '',
  setSelectedTag: () => {}
});

export const TagProvider = ({ children }) => {
    const [selectedTag, setSelectedTag] = useState("Todo");

    // Aquí puedes agregar la lógica para manejar localStorage

    return (
        <TagContext.Provider value={{ selectedTag, setSelectedTag }}>
            {children}
        </TagContext.Provider>
    );
};

// Otros componentes o lógica pueden ir aquí
