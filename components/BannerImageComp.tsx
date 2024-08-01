import React from 'react';
import Image from 'next/image';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
  className?: string;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit, className }) => {
  return (
    <div className={className} style={{
      background,
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      position: 'relative',
      color: '#fff',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      textAlign: 'center'
    }}>
      <Image src={image} alt={title} width={300} height={200} layout="responsive" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{cta}</button>
      <button onClick={onEdit} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '5px',
        cursor: 'pointer'
      }}>
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="auto" className="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
      </button>
    </div>
  );
};

export default BannerImageComp;
