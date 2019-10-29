const gulp = require('gulp')
const util = require('gulp-util')
const sequencia = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')


gulp.task('default', ()=>{
    if(util.env.production){
        sequencia('deps', 'app')
        // gulp.start('deps', 'app')
    }
    else{
        sequencia('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})
