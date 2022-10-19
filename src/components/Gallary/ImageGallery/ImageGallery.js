import PropTypes from 'prop-types';
import Box from 'components/Box';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled.js';

const ImageGallery = ({ items, onClick }) => {
  return (
    <Box as="main">
      <ImageGalleryList>
        {items.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            tags={tags}
            onClick={onClick}
            modalImage={largeImageURL}
          />
        ))}
      </ImageGalleryList>
    </Box>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
