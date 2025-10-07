add_action('wp_footer', function() {
    if (is_cart()) : ?>
        <script>
        jQuery(function($) {

            let timeout;

            // Detect quantity change
            $('body').on('change', 'input.qty', function() {
                if (timeout !== undefined) {
                    clearTimeout(timeout);
                }

                // Wait 1 second before updating
                timeout = setTimeout(function() {
                    $("[name='update_cart']").trigger('click');
                }, 1000);
            });

        });
        </script>
    <?php endif;
});
