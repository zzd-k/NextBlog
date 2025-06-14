'use client';
import React, { use } from 'react';
import { products } from '@/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
   const resolvedParams = React.use(params);
    const id = Number(resolvedParams.id);
    
    const photo = products.find(product => product.id === id)!;
    const router = useRouter();
    return (
      <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={() => router.back()}>
         <Image src={photo.imageSrc} alt={photo.imageAlt} width={300} height={300} className='rounded-lg block mx-auto' 
         onClick={e=>e.stopPropagation()} />
      </div>
    )
} 