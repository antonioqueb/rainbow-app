"use client";

import React, { useEffect, useState } from 'react';
import style from './PrimaryTags.module.css';
import Link from 'next/link';
import Tags from '../../data/categories.json'; // Asegúrate de que la ruta es correcta

const PrimaryTags = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        // Configuración simplificada para cargar categorías
        setTags(Tags.categories);
    }, []);
    return (
        <div className={style.tags}>
            {tags.map((tag) => (
                <Link href={`/tags/${tag}`} key={tag}>
                    <div className={style.tagLink}>
                        <span className={style.tag}>{tag}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
    
};

export default PrimaryTags;
