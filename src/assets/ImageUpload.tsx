import { ChangeEvent, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

export const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Button variant="contained" component="label">
                Choose File
                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </Button>
            {selectedImage && (
                <Box mt={2}>
                    <Typography variant="body1">Preview:</Typography>
                    <img src={selectedImage} alt="Selected" width="300" />
                </Box>
            )}
        </Box>
    );
};
