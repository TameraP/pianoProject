<!doctype html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Piano Project</title>
        <meta name="Description" content="This is a digital piano created using PHP object oriented programming .">
        <script src="https://unpkg.com/vue@3"></script> 
        <script src="https://cdn.tailwindcss.com"></script> 
        <link rel="stylesheet" href="./assets/dist/css/main.css">
    </head>
    <body>
    <div id="app" class="page">
    </div> 

    <script type="module">
        // import axios from 'axios';
        import App from './js/components/App.js';

        Vue.createApp(App).mount('#app');
    </script>
    </body>
</html>