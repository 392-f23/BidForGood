import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './ImageSlider.css';

const ImageSlider = ({ imagePath, onLeftClick, onRightClick, arrows }) => {
    return (
        <div className='slider-container'>
            <div className='image-div'>
                <img src={imagePath} alt="auction item" className='image' />
            </div>
            {arrows && <div className='arrows-div'>
                <ChevronLeftIcon fontSize="inherit" className='left-arrow' onClick={onLeftClick} />
                <ChevronRightIcon fontSize="inherit" className='right-arrow' onClick={onRightClick} />
            </div>}
        </div>

    )
}

export default ImageSlider