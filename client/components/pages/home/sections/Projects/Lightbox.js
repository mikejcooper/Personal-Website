import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const imagesCaptions = this.props.imagesCaptions;
    const images = this.props.images;

    const {
      photoIndex,
      isOpen,
    } = this.state;

    let CoverStyle = {
      backgroundImage: 'url(' + this.props.coverImage + ')',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      cursor:'zoom-in',
  };

    let StretchStyle = {
      width: '100%',
      height: '100%'
    }


    return (
      <div style={CoverStyle}>
        <div
          style={StretchStyle}
          onClick={() => this.setState({ isOpen: true })}>
        </div>

        {isOpen &&
        <Lightbox
          imageCaption={imagesCaptions[photoIndex]}
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}

          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() => this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })}
          onMoveNextRequest={() => this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })}
          imagePadding={100}
        />
        }
      </div>
    );
  }
}