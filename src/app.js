require("expose-loader?$!jquery");

import 'bootstrap';

console.info('$ in app.js: ', $.fn.jquery)

require.ensure(['./custom-functions'], function(require) {

    require('./custom-functions')
    console.info('after custom-functions.js')

})