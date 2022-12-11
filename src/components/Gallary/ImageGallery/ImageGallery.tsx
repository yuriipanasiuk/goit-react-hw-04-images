import Box from '../../Box';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled.js';

interface IItems {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

interface IProps {
  items: IItems[];
}

const ImageGallery = ({ items }: IProps) => {
  return (
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
};

export default ImageGallery;
