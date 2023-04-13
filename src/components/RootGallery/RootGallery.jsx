import { Component } from 'react';

import { Wrapper } from './RootGallery.styled';

import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { FetchData } from 'api';

export class RootGallery extends Component {
  state = {
    searchQuerry: '',
    page: 1,
    images: [],
    largeImageURL: '',
    showModal: false,
    isLoader: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchQuerry, page } = this.state;
    if (searchQuerry !== prevState.searchQuerry || page !== prevState.page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { searchQuerry, page } = this.state;

    this.setState({ isLoader: true });

    try {
      const { hits } = await FetchData(searchQuerry, page);

      if (!hits.length) {
        return alert('No images found');
      }
      this.setState(prev => {
        return {
          images: [...prev.images, ...hits],
        };
      });
    } catch (error) {
      this.setState({
        error: 'Something went worng. Please reload the webpage!',
      });
    } finally {
      this.setState({ isLoader: false });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };
  handleClickOnImage = event => {
    this.toggleModal();
    this.setState({ largeImageURL: event.target.dataset.url });
  };

  handleSubmit = querry => {
    this.setState({ searchQuerry: querry, page: 1, images: [] });
  };

  render() {
    const { images, isLoader, showModal, largeImageURL } = this.state;

    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        {images.length !== 0 && (
          <Wrapper>
            <ImageGallery
              handleClickOnImage={this.handleClickOnImage}
              images={images}
            />

            {isLoader && <Loader />}

            {showModal && (
              <Modal
                largeImageURL={largeImageURL}
                toggleModal={this.toggleModal}
              />
            )}

            <Button title="LoadMore" handleLoadMoreBtn={this.loadMore} />

            {false && <Loader />}
          </Wrapper>
        )}
      </>
    );
  }
}
