import PropTypes from 'prop-types';

import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, handleClickOnImage }) => {
  return (
    <List>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            handleClickOnImage={handleClickOnImage}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleClickOnImage: PropTypes.func.isRequired,
};
