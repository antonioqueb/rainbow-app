"use client";

// components/DynamicTitle/DynamicTitle.jsx
import React, { useState, useEffect } from 'react';
import style from './DynamicTitle.module.css';
import { useSelector } from 'react-redux';
import DynamicTitleSkeleton from './DynamicTitleSkeleton'; // Importa el componente de esqueleto

const DynamicTitle = () => {
    const Category = useSelector((state) => state.selectCategory.value);
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    // Simular la carga de datos
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Cambia el estado a false después de un tiempo para simular la carga de datos
        }, 5); // Ajusta el tiempo según sea necesario
        return () => clearTimeout(timer);
    }, [Category]); // Dependencia para recargar si la categoría cambia

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
