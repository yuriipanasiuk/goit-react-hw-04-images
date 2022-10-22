import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Box from 'components/Box';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/Gallary/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';
import getImage from 'components/ApiService/ApiService';
import Notice from 'components/Notice';
import NoticeError from 'components/Notice/NoticeError';

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }

    fetchImage(page, query);
  }, [page, query]);

  const fetchImage = async (page, query) => {
    try {
      setShowLoader(true);
      setShowButton(false);

      const imageItems = await getImage(page, query);
      if (imageItems.length === 0) {
        return toast.error('Please enter new image or photo name!');
      }
      setItems(items => [...items, ...imageItems]);
      setShowButton(true);
      scroll.scrollToBottom();
    } catch (error) {
      setError(true);
      setShowButton(false);
    } finally {
      setShowLoader(false);
    }
  };

  const getImageName = data => {
    if (data === '') {
      return toast.error('Please enter image or photo name!');
    }
    if (data === query) {
      return toast.warning(`${query} has already been found`);
    }

    setQuery(data);
    setItems([]);
    setPage(1);
  };

  const onImageClick = e => {
    setImage(e.target.dataset.set);
    setTags(e.target.alt);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const closeModal = () => {
    setImage(null);
    setTags('');
  };

  return (
    <Box
      textAlign="center"
      pb="24px"
      ml="auto"
      mr="auto"
      width="1330px"
      as="section"
    >
      <Searchbar onSubmit={getImageName} />
      {error && <NoticeError />}
      <ImageGallery onClick={onImageClick} items={items} />
      <Loader visible={showLoader} />
      {!query && <Notice />}
      {showButton && <Button children="Load more" onClick={loadMore} />}
      {image && (
        <Modal onClick={closeModal}>
          <img src={image} alt={tags} />
        </Modal>
      )}
      <ToastContainer autoClose={3000} theme="light" />
    </Box>
  );
}
