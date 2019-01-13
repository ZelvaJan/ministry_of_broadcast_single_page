import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import Slider from "react-slick";
import {EPage} from "../MainPage";

import img1 from '../../assets/gallery/1.png';
import img2 from '../../assets/gallery/2.png';
import img3 from '../../assets/gallery/3.png';
import img4 from '../../assets/gallery/4.png';
import img5 from '../../assets/gallery/5.png';
import img51 from '../../assets/gallery/5.jpg';
import img6 from '../../assets/gallery/6.png';
import img7 from '../../assets/gallery/7.png';
import img8 from '../../assets/gallery/8.jpg';
import img9 from '../../assets/gallery/9.png';
import img20 from '../../assets/gallery/20.jpg';
import figure from '../../assets/gallery/figure.jpg';

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
        lazyLoad: true,
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
                            {this.renderGalleryCard(i++, img51)}
                            {this.renderGalleryCard(i++, img6)}
                            {this.renderGalleryCard(i++, img7)}
                            {this.renderGalleryCard(i++, img8)}
                            {this.renderGalleryCard(i++, img9)}
                            {this.renderGalleryCard(i++, img20)}
                            {this.renderGalleryCard(i, figure)}
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