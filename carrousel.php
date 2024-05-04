<?php
    /**
     * Plugin Name: carrousel
     * Author: David Rousseau
     * Description: une première extension de carrousel pour WordPress. Elle affiche un carrousel d'images asocié à une galerie wp.
     * Version: 1.0.1
     * Plugin URI: https://github.com/Ulbert-Alain-Odle/4w4-2024-gr1-DR
     */

    // Ajout d'un shortcode
    
    function enqueue_style_script() {
        $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
        $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
        
        wp_enqueue_style(   'em_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css);
        
        wp_enqueue_script(  'em_plugin_carrousel_js',
        plugin_dir_url(__FILE__) ."js/carrousel.js",
                array(),
                $version_js,
                true);
                // true pour mettre le script en bas de page
            }
            
            add_action('wp_enqueue_scripts', 'enqueue_style_script');//wp_head doit être appelé juste avant la balise fermante </head> de votre thème et wp_footer doit être appelé juste avant la balise fermante </body> de votre thème.
            
            function genere_html() {
                $html = '
                
                <div class="carrousel">
                <button class="carrousel__x">X</button>
                <figure class="carrousel__figure"></figure>
                <form action="" class="carrousel__form"></form>
                </div>
                ';
                return $html;
            }
            //[carrousel] juste après le contenu de l'article
            //Quand la fonction the content est appelée, elle affichera le shortcode.
            add_shortcode('carrousel', 'genere_html');
            ?>

