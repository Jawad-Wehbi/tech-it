import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
	{
		url: 'slide1.png',
		caption: 'Slide1'
	},
	{
		url: 'slide2.png',
		caption: 'Slide2'
	},
	{
		url: 'slide3.png',
		caption: 'Slide3'
	}
];

const zoomOutProperties = {
	duration: 3000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	scale: 0.4,
	arrows: false
};

const SlideShow = () => {
	return (
		<div className="slide-container">
			<Zoom {...zoomOutProperties}>
				{slideImages.map((each) => (
					<img
						key={each.caption}
						style={{ width: '100%', height: '480px' }}
						src={each.url}
						alt="SlideShow"
					/>
				))}
			</Zoom>
		</div>
	);
};

export default SlideShow;
