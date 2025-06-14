import React from 'react';
import Image from 'next/image';
import { products } from '@/data';
export default function Page({ params }: { params: { id: string } }) {
    const photo = products.find(product => product.id === Number(params.id))!
    return (
      <div className='container mx-auto  pt-8'>
       <Image src={photo.imageSrc} alt={photo.imageAlt} width={300} height={300} className='rounded-lg  block mx-auto ' />
       <div  className='border-2 border-dashed border-gray-500 p-3 mt-6 leading-8 '>
            <p>
                <strong>Title:</strong>{photo.imageAlt}
            </p>
            <p>
                <strong>Price:</strong>{photo.price}
            
            </p>
            <p>
                <strong>Description:</strong>tttttttt
            </p>
       </div>
      </div>
    )
}