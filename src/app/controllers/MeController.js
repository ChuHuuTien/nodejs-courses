const e = require('express');
const Course = require('../models/Course');

class MeController {
  


  //[GET] /me/stored/courses
  async storedCourses(req,res,next){
    var CoursesDeletedCount;
   await Course.countDocumentsDeleted()
    .then((DeletedCount)=>{
      CoursesDeletedCount = DeletedCount
    })
    .catch(()=>{});

    await Course.find({})
    .lean()
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
