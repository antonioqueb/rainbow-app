'use client';

import React, { useState } from 'react';
import style from './PrimaryTags.module.css';
import Tags from '../../data/categories.json';
import { useDispatch } from 'react-redux';
import { selectCategory } from '@/store/slice'; 

const PrimaryTags = () => {
    const dispatch = useDispatch();
    const [nuevoValor, setNuevoValor] = useState('');

    const handleTagClick = (tag) => {
        setNuevoValor(tag);
        dispatch(selectCategory(tag));
    };

    return (
        <div className={style.tagsContainer}> {/* Contenedor agregado para el deslizador */}
            <div className={style.tags}> {/* Deslizador de etiquetas */}
                {Tags.categories.map((tag) => (
                    <button 
                        className={style.tag}
                        onClick={() => handleTagClick(tag)}
                        key={tag}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PrimaryTags;
