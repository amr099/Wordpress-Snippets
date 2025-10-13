add_filter( 'wpseo_breadcrumb_links', function( $links ) {
    if ( is_singular( 'product' ) ) {
        global $post;

        // Start breadcrumb with Home only
        $new_links = [
            [
                'url'  => home_url('/'),
                'text' => 'Home', // change to "الرئيسية" if you want
            ]
        ];

        $terms = get_the_terms( $post->ID, 'product_cat' );

        if ( $terms && ! is_wp_error( $terms ) ) {
            // Get Yoast primary category if set
            $primary_cat_id = get_post_meta( $post->ID, '_yoast_wpseo_primary_product_cat', true );

            if ( $primary_cat_id ) {
                $term = get_term( $primary_cat_id, 'product_cat' );
            } else {
                // fallback: first category
                $term = $terms[0];
            }

            // Get full hierarchy
            $ancestors = array_reverse( get_ancestors( $term->term_id, 'product_cat' ) );

            foreach ( $ancestors as $ancestor_id ) {
                $ancestor = get_term( $ancestor_id, 'product_cat' );
                $new_links[] = [
                    'url'  => get_term_link( $ancestor ),
                    'text' => $ancestor->name,
                ];
            }

            // Current category
            $new_links[] = [
                'url'  => get_term_link( $term ),
                'text' => $term->name,
            ];
        }

        // Add current product (no link)
        $new_links[] = [
            'url'  => '',
            'text' => get_the_title( $post->ID ),
        ];

        return $new_links;
    }

    return $links;
});
