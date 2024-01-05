'use client';

import React, { useState } from 'react';
import style from './PrimaryTags.module.css';
import Tags from '../../data/categories.json';
import { useDispatch } from 'react-redux';
import { selectCategory } from '@/store/slice'; 
import Image from 'next/image';


const PrimaryTags = () => {
    const dispatch = useDispatch();
    const [nuevoValor, setNuevoValor] = useState('');

    const handleTagClick = (tag) => {
        setNuevoValor(tag);
        dispatch(selectCategory(tag));
    };

    return (
        <div className={style.tagsContainer}>
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
                        />
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PrimaryTags;
