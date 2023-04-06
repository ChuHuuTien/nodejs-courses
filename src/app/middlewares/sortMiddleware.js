

module.exports = function sortMiddleware(res,req,next){
    
    // res.locals._sort = {
    //     enabled: false, 
    //     type: 'default',
    // };

    // if (req.query.hasOwnProperty('_sort')){
    //     res.locals._sort.enabled = true;
    //     res.locals._sort.type = res.query.type;
    // }

    next();
}