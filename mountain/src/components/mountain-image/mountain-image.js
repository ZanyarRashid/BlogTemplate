import './mountain-image.scss';
import Mountain from './image.jpg'

class MountainImage {
    render () {
        const img = document.createElement('img');
        img.src = Mountain;
        img.alt = 'Mountain';
        img.classList.add('mountain-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default MountainImage;