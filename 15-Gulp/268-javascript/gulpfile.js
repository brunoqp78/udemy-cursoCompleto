const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', ()=>{
    //pegar todos arquivos js nessa e em pastas internas
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets : ['env']
        }))   //converte códigos em códigos mais padronizados, para todos browsers funcionar
        .pipe(uglify()) // compacta o texto .js
        .on('error', function(err) {console.log(err)}) // ajuda na identificação dos erros
        .pipe(concat('codigo.min.js')) // concatena tudo em um arquivo
        .pipe(gulp.dest('build'))

})