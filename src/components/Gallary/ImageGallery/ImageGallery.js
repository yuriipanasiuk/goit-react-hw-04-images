import Box from 'components/Box';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled.js';

const ImageGallery = ({ items, onClick }) => {
  return (
    <Box>
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

export default ImageGallery;
