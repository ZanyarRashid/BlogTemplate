import NavigationBar from './components/navigation-bar/navigation-bar.js';

const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'Hello World Page'
    },
    {
        url: '/mountain-page',
        title: 'Mountain Page'
    }
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url === '/hello-world-page') {
    import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    });
} else if (url === '/mountain-page') {
    import('MountainApp/MountainPage').then(MountainPageModule => {
        const MountainPage = MountainPageModule.default;
        const mountainPage = new MountainPage();
        mountainPage.render();
    });
}

console.log('dashboard');