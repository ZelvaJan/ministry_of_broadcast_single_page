import React, {Component} from 'react';
import './Gallery.css';
import Slider from "react-slick";

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
import {EPage} from "../MainPage";

class Gallery extends Component {

    // https://github.com/akiran/react-slick
    static settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '120px',
        slidesToScroll: 1,
        adaptHeight: true,
        lazyLoad: true,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                }
            },
        ]
    };

    render() {

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
                            {Gallery.renderGalleryCard(img1)}
                            {Gallery.renderGalleryCard(img2)}
                            {Gallery.renderGalleryCard(img3)}
                            {Gallery.renderGalleryCard(img4)}
                            {Gallery.renderGalleryCard(img5)}
                            {Gallery.renderGalleryCard(img51)}
                            {Gallery.renderGalleryCard(img6)}
                            {Gallery.renderGalleryCard(img7)}
                            {Gallery.renderGalleryCard(img8)}
                            {Gallery.renderGalleryCard(img9)}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }

    static renderGalleryCard(img) {
        return <img className='Gallery_item' src={img} alt=''/>
    }
}

export default Gallery;