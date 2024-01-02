'use client';
import Link from 'next/link'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../../store/slice';

export default function EscribirPage() {
    const [nuevoValor, setNuevoValor] = useState('');
    const dispatch = useDispatch();
    const modificar = () => {
        dispatch(selectCategory(nuevoValor))
    } 
    return (
     <>
     <h1>Escribir: </h1>
     <Link href="/leer">
     Leer
    </Link>

    <input type="text" placeholder="Escribe algo"  value={nuevoValor} onChange={e => setNuevoValor(e.target.value)}/>
    <button onClick={modificar}>Actualizar</button>

      </>

    )
  }
  