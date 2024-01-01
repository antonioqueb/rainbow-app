"use client";

// components/DynamicTitle/DynamicTitle.jsx
import React, { useEffect } from 'react';
import style from './DynamicTitle.module.css';

const DynamicTitle = ({ currentPath = "Todo" }) => { // Valor predeterminado para currentPath
    useEffect(() => {
        // Asegúrate de que currentPath no sea undefined
        if (currentPath) {
            const pageTitle = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
            document.title = pageTitle;
        }
    }, [currentPath]);

    return (
        <div className={style.title}>
            <h1 className={style.text}>{currentPath}</h1>
        </div>
    );
};

export default DynamicTitle;
