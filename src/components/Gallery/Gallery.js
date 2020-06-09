import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import Slider from "react-slick";
import {EPage} from "../MainPage";

import img1 from '../../assets/gallery/Gallery_1.png';
import img2 from '../../assets/gallery/Gallery_2.png';
import img3 from '../../assets/gallery/Gallery_3.png';
import img4 from '../../assets/gallery/Gallery_4.png';
import img5 from '../../assets/gallery/Gallery_5.png';
import img6 from '../../assets/gallery/Gallery_6.png';
import img7 from '../../assets/gallery/Gallery_7.png';
import img8 from '../../assets/gallery/Gallery_8.png';
import img9 from '../../assets/gallery/Gallery_9.png';
import img10 from '../../assets/gallery/Gallery_10.jpg';
import img11 from '../../assets/gallery/Gallery_11.png';
import img12 from '../../assets/gallery/Gallery_12.png';
import img13 from '../../assets/gallery/Gallery_13.png';
import img14 from '../../assets/gallery/Gallery_14.png';
import img15 from '../../assets/gallery/Gallery_15.png';
import img16 from '../../assets/gallery/Gallery_16.png';
import img17 from '../../assets/gallery/Gallery_17.png';
import img18 from '../../assets/gallery/Gallery_18.png';
import img19 from '../../assets/gallery/Gallery_19.png';
import img20 from '../../assets/gallery/Gallery_20.png';
import img21 from '../../assets/gallery/Gallery_21.png';
import img22 from '../../assets/gallery/Gallery_22.png';

const aspectRatio = 1.778;
let currIndex = 0;

function actualPosition(data) {
    currIndex = data;
}

class Gallery extends React.PureComponent {

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    constructor() {
        super();

        this.state = {
            maxItemHeight: 200,
        };
    }

    // https://github.com/akiran/react-slick
    static settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '80px',
        slidesToScroll: 1,
        adaptHeight: true,
        lazyLoad: false,
        swipeToSlide: true,
        variableWidth: true,
        accessibility: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                }
            },
        ],
        beforeChange: actualPosition,
        afterChange: actualPosition
    };

    componentDidMount() {
        this.updateHeight();
    }

    componentDidUpdate() {
        this.updateHeight();
    }

    updateHeight = () => {
        let height = this.props.width / aspectRatio;
        this.setState({maxItemHeight: (height > 200 ? height : 200)});
    };

    /**
     * Manual update of gallery position based on user click
     * @param index
     */
    onImageClick = (index) => {
        if (index !== currIndex) {
            console.log("Force update of gallery position to: " + index + ". Actual index: " + currIndex);
            if (this.slider) this.slider.slickGoTo(index);
            currIndex = index;
        }
    };

    render() {
        let i = 0;

        return (
            <div id={EPage.Gallery} className='Gallery_root'>
                <div className='Gallery_content'>
                    <section className='Content_wrapper Gallery_texts'>
                        <div className='Gallery_preTitle'>left <span className='bold'>&middot;</span> right <span
                            className='bold'>&middot;</span> to see more photos
                        </div>
                        <div className='Gallery_title'>GALLERY</div>
                        <div className='Gallery_arrow' onClick={() => {
                            if (this.slider) this.slider.slickPrev()
                        }}>&lt;</div>
                        <div className='Gallery_arrow' onClick={() => {
                            if (this.slider) this.slider.slickNext()
                        }}>&gt;</div>
                        <div className='Gallery_free_space'/>
                    </section>
                    <div className='Gallery_slider_wrapper'>
                        <Slider ref={slider => (this.slider = slider)} {...Gallery.settings}>
                            {this.renderGalleryCard(i++, img1)}
                            {this.renderGalleryCard(i++, img2)}
                            {this.renderGalleryCard(i++, img3)}
                            {this.renderGalleryCard(i++, img4)}
                            {this.renderGalleryCard(i++, img5)}
                            {this.renderGalleryCard(i++, img6)}
                            {this.renderGalleryCard(i++, img7)}
                            {this.renderGalleryCard(i++, img8)}
                            {this.renderGalleryCard(i++, img9)}
                            {this.renderGalleryCard(i++, img10)}
                            {this.renderGalleryCard(i++, img11)}
                            {this.renderGalleryCard(i++, img12)}
                            {this.renderGalleryCard(i++, img13)}
                            {this.renderGalleryCard(i++, img14)}
                            {this.renderGalleryCard(i++, img15)}
                            {this.renderGalleryCard(i++, img16)}
                            {this.renderGalleryCard(i++, img17)}
                            {this.renderGalleryCard(i++, img18)}
                            {this.renderGalleryCard(i++, img19)}
                            {this.renderGalleryCard(i++, img20)}
                            {this.renderGalleryCard(i++, img21)}
                            {this.renderGalleryCard(i, img22)}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }

    renderGalleryCard(index, img) {
        return <div className='Gallery_item_wrapper' onClick={() => this.onImageClick(index)}>
            <img className='Gallery_item' style={{
                height: this.state.maxItemHeight + 'px'
            }} src={img} alt=''/>
        </div>
    }
}

export default Gallery;