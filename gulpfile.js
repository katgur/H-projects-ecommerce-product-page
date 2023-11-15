import gulp from 'gulp'
const { series, src, dest } = gulp
import convertwebp from 'gulp-webp'

function webp() {
    return src('src/img/source/*.{png,jpg}')
        .pipe(convertwebp({ quality: 90 }))
        .pipe(dest('src/img'))
}

export default series(webp)