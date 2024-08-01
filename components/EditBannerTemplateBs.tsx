import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Box, Button, TextField } from '@mui/material';

interface EditBannerProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  bannerData: any;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ open, onClose, onSave, bannerData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: bannerData,
  });

  const onSubmit = (data: any) => {
    onSave(data);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '100px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register('title')} label="Title" fullWidth margin="normal" />
          <TextField {...register('description')} label="Description" fullWidth margin="normal" />
          <TextField {...register('cta')} label="CTA" fullWidth margin="normal" />
          <TextField {...register('image')} label="Image URL" fullWidth margin="normal" />
          <TextField {...register('background')} label="Background Color" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary">Save</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditBannerTemplateBs;
