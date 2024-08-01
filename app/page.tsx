"use client";

import React, { useState, useEffect } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import styles from './page.module.css'; // Import the CSS module

const Home: React.FC = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const [editingBanner, setEditingBanner] = useState<any>(null);

  useEffect(() => {
    // Fetch the JSON data from the public directory
    const fetchBanners = async () => {
      const response = await fetch('/banners.json');
      const data = await response.json();
      setBanners(data);
    };

    fetchBanners();
  }, []);

  const handleEdit = (index: number) => {
    setEditingBanner({ ...banners[index], index });
  };

  const handleSave = (data: any) => {
    const updatedBanners = [...banners];
    updatedBanners[editingBanner.index] = data;
    setBanners(updatedBanners);
    setEditingBanner(null);
  };

  return (
    <div className={styles.container}>
      {banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          {...banner}
          onEdit={() => handleEdit(index)}
          className={styles.bannerCard}
        />
      ))}
      {editingBanner && (
        <EditBannerTemplateBs
          open={!!editingBanner}
          onClose={() => setEditingBanner(null)}
          onSave={handleSave}
          bannerData={editingBanner}
        />
      )}
    </div>
  );
};

export default Home;
