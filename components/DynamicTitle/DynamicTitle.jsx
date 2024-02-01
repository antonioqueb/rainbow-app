"use client";

import React, { useState, useEffect } from 'react';
import style from './DynamicTitle.module.css';
import { useSelector } from 'react-redux';
import DynamicTitleSkeleton from './DynamicTitleSkeleton'; 

const DynamicTitle = () => {
    const Category = useSelector((state) => state.selectCategory.value);
    const [loading, setLoading] = useState(true); 

    // Escuchar cambios en Category y actualizar el estado de carga
    useEffect(() => {
        if (Category) {
            setLoading(false); // Cambia el estado a false si Category está presente
        } else {
            setLoading(true); // Mantiene el estado en true si Category aún no está disponible
        }
    }, [Category]);

    // Si los datos están cargando, muestra el esqueleto
    if (loading) {
        return <DynamicTitleSkeleton />;
    }

    // Si los datos no están cargando, muestra el contenido real
    return (
        <div className={style.container}>
            <h3>{Category}</h3>
        </div>
    );
};

export default DynamicTitle;
