module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'src/assets/', src: ['**'], dest: '../marguiruhe.es-ghpages/assets/'},
          {expand: true, cwd: 'src/', src: ['robots.txt'], dest: '../marguiruhe.es-ghpages/'},
        ],
      },
    },
    ejs_static: {
      dist: {
        options: {
          dest: '../marguiruhe.es-ghpages',
          path_to_data: 'src/data/routes.json',
          path_to_layouts: 'src/layouts',
          index_page: 'home',
          parent_dirs: true,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      }
    },
    xml_sitemap: {
      default_options: {
        options: {
          dest: '../marguiruhe.es-ghpages/',
          siteRoot: 'http://marguiruhe.es'
        },
        files: [
          {
          expand: false,
          cwd: '../marguiruhe.es-ghpages/',
          src: [
            '**/*.html'
          ]
          }
        ]
      }
    },
    watch: {
      datalayout: {
        files: ['src/data/**/*.json', 'src/layouts/**/*.ejs'],
        tasks: ['ejs_static:dist'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ejs-static');
  grunt.loadNpmTasks('grunt-xml-sitemap');

  grunt.registerTask('default', ['copy', 'ejs_static', 'xml_sitemap', 'watch']);

}
