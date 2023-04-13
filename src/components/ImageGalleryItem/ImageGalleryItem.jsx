import PropTypes from 'prop-types';

import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, handleClickOnImage }) => {
  return (
    <GalleryItem>
      <GalleryItemImage
        src={image.webformatURL}
        onClick={() => handleClickOnImage(image.largeImageURL)}
        alt="#"
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  handleClickOnImage: PropTypes.func.isRequired,
};
