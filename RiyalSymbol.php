add_filter( 'woocommerce_currency_symbol', function( $currency_symbol, $currency ) {
    if ( 'SAR' === $currency ) {
        $currency_symbol = '&#65020;'; 
    }
    return $currency_symbol;
}, 10, 2 );
