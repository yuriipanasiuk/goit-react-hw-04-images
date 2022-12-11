import { useState } from 'react';
import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import Modal from '../../Modal';

interface IProps {
  webformatURL: string;
  largeImageURL: string;
  alt: string;
}

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  alt,
}: IProps) {
  const [image, setImage] = useState('');
  const [tags, setTags] = useState('');

  const closeModal = () => {
    setImage('');
    setTags('');
  };

  const onImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as typeof e.target & {
      dataset: { set: string };
      alt: string;
    };

    setImage(target.dataset.set);
    setTags(target.alt);
  };

  return (
    <GalleryItem>
      <ImageGallery
        src={webformatURL}
        alt={alt}
        onClick={onImageClick}
        data-set={largeImageURL}
      />
      {image && (
        <Modal onClick={closeModal}>
          <img src={image} alt={tags} />
        </Modal>
      )}
    </GalleryItem>
  );
}
