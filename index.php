<?php
include piano.php;
?>
<!doctype html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Piano Project</title>
        <meta name="Description" content="This is a digital piano created using PHP object oriented programming .">
    </head>
    <body>
    <div id="app">
 
    </div> 

    <script type="module">
    
        import App from './js/components/App.js';

        Vue.createApp(App).mount('#app');
    </script>
    </body>
</html>