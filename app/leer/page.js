'use client';
import Link from 'next/link'
import { useSelector } from 'react-redux';

export default function LeerPage() {

    const myCategory = useSelector((state) => state.selectCategory.value);


    return (
        <>
     <h1 style={{ color: '#ffffff' }}>Leer: {myCategory} </h1>
     <Link href="/escribir">
     Escribir
   </Link>

   </>

    )
  }
  