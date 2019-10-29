const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

//copiar tem requisitos - antes1 e antes2
gulp.task('copiar', ['antes1', 'antes2'], () => {
    //pega todos os arquivos da pastaA
    gulp.src('pastaA/*.txt')
        //.pipe(transformacao1())
        //.pipe(transformacao2())
        .pipe(gulp.dest('pastaB')) // copia para a pastaB
})

gulp.task('antes1', () => {
    console.log('Antes1')
})

gulp.task('antes2', () => {
    console.log('Antes2')
})

gulp.task('fim', () => {
    console.log('Fim')
})

