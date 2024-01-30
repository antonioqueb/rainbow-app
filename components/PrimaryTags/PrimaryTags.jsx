'use client';
// PrimaryTags.js
import React, { useState, useEffect } from 'react';
import style from './PrimaryTags.module.css';
import Tags from '../../data/categories.json';
import { useDispatch } from 'react-redux';
import { selectCategory } from '@/store/slice'; 
import Image from 'next/image';
import SkeletonPrimaryTags from './SkeletonPrimaryTags'; // Importa el componente de esqueleto

const PrimaryTags = () => {
    const dispatch = useDispatch();
    const [nuevoValor, setNuevoValor] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula la carga de datos
        const timer = setTimeout(() => {
            setLoading(false);
        }, 250); // Ajusta el tiempo según sea necesario
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <SkeletonPrimaryTags />;
    }

    return (
       
            <div className={style.tags}>
                {Tags.categories.map((tag) => (
                    <button 
                        className={style.tag}
                        onClick={() => handleTagClick(tag)}
                        key={tag}
                    >
                        <Image
                            src={`/Iconos/${tag}.svg`}
                            alt={tag}
                            width={50}
                            height={50}
                            className={style.tagIcon}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,..."
                        />
                        <p className={style.tagText}>
                        {tag}
                        </p>
                    </button>
                ))}
            </div>
    );
};

export default PrimaryTags;
