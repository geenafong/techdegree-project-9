'use strict';

var express = require("express");
var router = express.Router();

// The Course Routes
// GET /api/courses 200 - Returns a list of courses (including the user that owns each course)
router.get("/courses", function (req, res) {
    res.json({response: "You sent me a GET request for courses"});
  })
// GET /api/courses/:id 200 - Returns a the course (including the user that owns the course) for the provided course ID
router.get("/courses/:id", function (req, res) {
    res.json({response: "You sent me a GET request for courses ID" + req.params.id});
  })
// POST /api/courses 201 - Creates a course, sets the Location header to the URI for the course, and returns no content
// PUT /api/courses/:id 204 - Updates a course and returns no content
// DELETE /api/courses/:id 204 - Deletes a course and returns no content

module.exports = router;