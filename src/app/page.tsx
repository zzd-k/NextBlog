import React from 'react';
import AppLayout from '@/component/layout';


const gray = {
  backgroundColor: '#b0b0b0',
  padding: '24px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}

export default function Page() {
  return (
    <div className='flex justify-center mx-auto container mt-30   ' style={gray}>
      <AppLayout />
    </div>
  )
}