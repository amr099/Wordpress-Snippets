add_action('wp_footer', function() {
    ?>
    <!-- Include SweetAlert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
    jQuery(function($) {

        // Reusable Toast setup
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background: '#333',
            color: '#fff',
            iconColor: '#4CAF50',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        // ✅ AJAX add to cart (Shop/Archive)
        $('body').on('added_to_cart', function() {
            Toast.fire({
                icon: 'success',
                title: 'تمت إضافة المنتج إلى السلة بنجاح 🛒'
            });
        });

        // ✅ Normal add to cart (Single Product)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('add-to-cart')) {
            Toast.fire({
                icon: 'success',
                title: 'تمت إضافة المنتج إلى السلة بنجاح 🛒'
            });
        }
    });
    </script>
    <?php
});
