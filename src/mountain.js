import Heading from './components/heading/heading';
import MountainImage from './components/mountain-image/mountain-image';
import React from 'react';

const heading = new Heading();
heading.render('mountain');
const mountainImage = new MountainImage();
mountainImage.render();