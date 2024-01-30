// components/DynamicTitle/DynamicTitleSkeleton.jsx
import React from 'react';
import style from './DynamicTitleSkeleton.module.css';

const DynamicTitleSkeleton = () => {
    return (
        <div className={style.container}>
            <div className={style.skeletonTitle}></div>
        </div>
    );
};

export default DynamicTitleSkeleton;
