import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Box from '../Box';

import Searchbar from '../Searchbar';
import ImageGallery from '../Gallary/ImageGallery';
import Loader from '../Loader';
import Button from '../Button';
import getImage from '../ApiService/ApiService';
import Notice from '../Notice';
import NoticeError from '../Notice/NoticeError';

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

interface IState {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<IState[]>([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchImage(page: number, query: string) {
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
    }

    fetchImage(page, query);
  }, [page, query]);

  const getImageName = (data: string) => {
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

  const loadMore = () => {
    setPage(page => page + 1);
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
      <ImageGallery items={items} />
      <Loader visible={showLoader} />
      {!query && <Notice />}
      {showButton && (
        <Button type="button" children="Load more" onClick={loadMore} />
      )}
      <ToastContainer autoClose={3000} theme="light" />
    </Box>
  );
}
