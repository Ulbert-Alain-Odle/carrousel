<?php
    /**
     * Plugin Name: carrousel
     * Author: David Rousseau
     * Description: une première extension de carrousel pour WordPress. Elle affiche un carrousel d'images asocié à une galerie wp.
     * Version: 1.0.1
     * Plugin URI: https://github.com/Ulbert-Alain-Odle/4w4-2024-gr1-DR
     */

    // Ajout d'un shortcode
    add_shortcode('carrousel', 'genere_html');

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

        add_action('wp_enqueue_scripts', 'enqueue_style_script');

        function genere_html() {
            $html = '
            <button class="bouton__ouvrir">Ouvrir Carrousel</button>
            <div class="carrousel">
                <a href="" class="carrousel__x">X</a>
                <figure class="carrousel__figure"></figure>
                <form action="" class="carrousel__form"></form>
            </div>
            ';
            return $html;
        }
            ?>

