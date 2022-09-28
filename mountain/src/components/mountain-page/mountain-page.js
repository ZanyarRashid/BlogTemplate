import Heading from '../heading/heading';
import MountainImage from '../mountain-image/mountain-image';

class MountainPage {
    render() {
        const heading = new Heading();
        heading.render('mountain');
        const mountainImage = new MountainImage();
        mountainImage.render();

        import('ImageCaptionApp/ImageCaption')
            .then(ImageCaptionModule => {
                const ImageCaption = ImageCaptionModule.default;
                const imageCaption = new ImageCaption();
                imageCaption.render('This is a mountain, It is very very large.');
            });
    }
}

export default MountainPage;