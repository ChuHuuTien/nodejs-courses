const e = require('express');
const Course = require('../models/Course');

class MeController {
  


  //[GET] /me/stored/courses
  storedCourses(req,res,next){

    let courseQuery = Course.find({}).lean();
    // res.json(res.locals._sort);

    //  if(req.query.hasOwnProperty('_sort')){
    //   courseQuery = courseQuery.sort({
    //     [req.query.column] : req.query.type
    //   });
    // } 

    var CoursesDeletedCount;
    Course.countDocumentsDeleted()
    .then((DeletedCount)=>{
      CoursesDeletedCount = DeletedCount
    })
    .catch(next);

    courseQuery
    // .lean()
    .then( courses=> res.render('me/stored-Courses',{courses,CoursesDeletedCount}))
    .catch(next);
    
  }

  //[GET] /me/posts
  posts(req,res,next){
    
    res.render('me/posts');
  }


  trashCourses(req,res,next){
    Course.findDeleted({})
    .lean()
    .then( courses=> res.render('me/trash-Courses',{courses}))
    .catch(next);
  }
}

module.exports = new MeController();
