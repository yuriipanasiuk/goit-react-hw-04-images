import 'react-toastify/dist/ReactToastify.css';

import Box from 'components/Box';
import Searchbar from 'components/Searchbar';
import { Component } from 'react';

import { ToastContainer } from 'react-toastify';

export class App extends Component {
  render() {
    return (
      <Box
        textAlign="center"
        pb="24px"
        ml="auto"
        mr="auto"
        width="1280px"
        as="section"
      >
        <Searchbar />
        <ToastContainer autoClose={3000} theme="light" />
      </Box>
    );
  }
}
