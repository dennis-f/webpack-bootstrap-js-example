require("expose-loader?$!jquery");

import 'bootstrap';

console.info('$ in app.js: ', $.fn.jquery)


require.ensure(['./custom-functions'], function (require) {  // require.ensure() does NOT EXECUTE the given scripts
    require('./custom-functions')
        // you need to require them seperately
    const testString = () => 'es6 return function';
      console.info(testString); 
});