"use client";

// components/DynamicTitle/DynamicTitle.jsx
import React, { useEffect } from 'react';
import style from './DynamicTitle.module.css';
import { useSelector } from 'react-redux';

const DynamicTitle = () => {

    const Category = useSelector((state) =>state.selectCategory.value);


    return (
        <div className={style.container}>
            <h3>{Category}</h3>
        </div>
    );
};

export default DynamicTitle;
