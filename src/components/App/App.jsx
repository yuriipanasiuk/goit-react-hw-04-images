import Box from 'components/Box';
import Button from 'components/Button';
import ImageGallery from 'components/Gallary/ImageGallery';
import Loader from 'components/Loader';
import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import GetPhoto from 'components/AxiosImage/AxiosImage';

const getPhoto = new GetPhoto();
console.log(getPhoto);

export class App extends Component {
  formSubmitHandler = data => {
    getPhoto.query = data;

    const res = getPhoto.fetchArticle();
    res.then(x => console.log(x));
    // console.log(res);
  };

  // async getRequest() {
  //   try {
  //     const res = await getPhoto.fetchArticle();
  //     this.props.Images(res)

  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

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
