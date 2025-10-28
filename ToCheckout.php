add_filter( 'woocommerce_add_to_cart_redirect', 'amr_redirect_specific_products_to_checkout' );
function amr_redirect_specific_products_to_checkout() {
    $target_products = array( 123, 456 ); 
    $product_id = (int) $_REQUEST['add-to-cart'];

    if ( in_array( $product_id, $target_products ) ) {
        return wc_get_checkout_url();
    }

    return wc_get_cart_url();
}
