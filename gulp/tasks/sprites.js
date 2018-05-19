import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'

const config = {
	mode: {
		css: {
			sprite: 'sprite',
			render: {
				css: {
					template: './gulp/templates/sprite.css',
				},
			},
		},
	},
}

gulp.task( 'sprites', function() {
	return gulp.src( './app/assets/images/icons/**/*.svg' )
		.pipe( svgSprite( config ) )
		.pipe( gulp.dest( './app/temp/sprite' ) )
} )
