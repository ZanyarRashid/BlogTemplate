import HelloWorldButton from '../hello-world-button/hello-world-button.js';
import Heading from '../heading/heading.js';

class HelloWorldPage {
    render() {
        const heading = new Heading();
        heading.render('hello world');
        const HelloWorldButtons = new HelloWorldButton();
        HelloWorldButtons.render();
    }
}

export default HelloWorldPage;