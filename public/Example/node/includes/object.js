module.exports = {
    name : "John",
    date : Date.now(),
    employed : true,
    action : function(req, res, next)
    {
        res.send("<h1>John</h1>");
    }
}