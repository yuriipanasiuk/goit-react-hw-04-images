import PropTypes from 'prop-types';
import Box from 'components/Box';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled.js';

const ImageGallery = ({ items }) => (
  <Box as="main">
    <ImageGalleryList>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          alt={tags}
        />
      ))}
    </ImageGalleryList>
  </Box>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
