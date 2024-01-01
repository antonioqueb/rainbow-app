"use client";
// components/PrimaryTags/PrimaryTags.jsx

import React, { useEffect, useState, useContext } from 'react';
import style from './PrimaryTags.module.css';
import Link from 'next/link';
import Tags from '../../data/categories.json'; // Asegúrate de que la ruta es correcta
import { TagContext } from './TagContext'; // Asegúrate de que la ruta es correcta

const PrimaryTags = () => {
    const [tags, setTags] = useState([]);
    const { setSelectedTag } = useContext(TagContext);

    useEffect(() => {
        setTags(Tags.categories);
    }, []);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    

    return (
        <div className={style.tags}>
            {tags.map((tag) => (
                <Link href={`/categoria/${tag}`} key={tag}>
                    <div 
                        className={style.tagLink}
                        onClick={() => handleTagClick(tag)}
                    >
                        <span className={style.tag}>{tag}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PrimaryTags;
