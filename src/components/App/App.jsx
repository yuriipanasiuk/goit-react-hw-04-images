import Box from 'components/Box';
import Button from 'components/Button';
import ImageGallery from 'components/Gallary/ImageGallery';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import { Component } from 'react';

export class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Box
        display="grid"
        gridTemplateColumns="1fr"
        gridGap="16px"
        pb="24px"
        ml="auto"
        mr="auto"
        width="1280px"
        as="section"
      >
        <Searchbar onSubmit={this.formSubmitHandler} />
        <Loader />
        <ImageGallery />
        <Button children="Load more" />
      </Box>
    );
  }
}
