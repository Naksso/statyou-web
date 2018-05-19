import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import del from 'del'

const config = {
	mode: {
		css: {
			sprite: 'sprite',
			render: {
				css: {
					template: './gulp/templates/sprite.css',
					dest: '_sprite.css'
				},
			},
		},
	},
}

gulp.task( 'clean', function() {
	return del( [ './app/temp/sprite', './app/assets/images/sprites' ] )
} )

gulp.task( 'createSprite', function() {
	return gulp.src( './app/assets/images/icons/**/*.svg' )
		.pipe( svgSprite( config ) )
		.pipe( gulp.dest( './app/temp/sprite' ) )
} )

gulp.task( 'copySpriteSvg', function() {
	return gulp.src( './app/temp/sprite/css/**/*.svg' )
		.pipe( gulp.dest( './app/assets/images/sprites' ) )
} )

gulp.task( 'copySpriteCSS', function() {
	return gulp.src( './app/temp/sprite/css/*.css' )
		.pipe( gulp.dest('./app/assets/styles/modules') )
} )

gulp.task( 'sprites', gulp.series( 'clean', 'createSprite', 'copySpriteSvg', 'copySpriteCSS' ) )
