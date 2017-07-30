var growler = new Vue({
    el: '#growler',
    data: {
        appName: 'Growler',
        accentColor: 'accent-color',
        headers: 'headers',
        // accentColor: {
        //     color: '#FF6A00'
        // },
        // headers: {
        //     fontFamily: 'Verdana',
        //     margin: 0
        // },
        // appStyle: {
        //     color: '',
        //     fontFamily: 'Verdana',
        //     margin: 0
        // },
        query: '',
        message: '',
        isPowerSyntaxEnabled: true,
        searchIndex: 'beers',
        searchIndexes: [],
        searchSearchIndex: 'beers',
        searchSearchIndexes: [],
        postal: 0,
        name: ''
    }
});