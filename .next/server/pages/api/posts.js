"use strict";
(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./models/post.js
const mongoose = __webpack_require__(185);
const post_schema = new mongoose.Schema({
    user: String,
    data: String
});
/* harmony default export */ const post = (mongoose.models.post || mongoose.model("post", post_schema));

;// CONCATENATED MODULE: ./utils/mdb_connect.js
const mdb_connect_mongoose = __webpack_require__(185);
async function Mdb_Connect() {
    try {
        await mdb_connect_mongoose.connect("mongodb+srv://mongo_db_0:NOwL3kzbB7fkHqUM@cluster0.rqbgzek.mongodb.net/test", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("[@mdb connected successfully]");
    } catch (error) {
        console.log(error);
    }
}

;// CONCATENATED MODULE: ./pages/api/posts/index.js


Mdb_Connect();
async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const posts = await post.find({});
            res.send(posts);
        } catch (error) {
            console.log("[@mdb GET Somthing went wrong]");
        }
    } else if (req.method === "POST") {
        try {
            const { user , data  } = req.body;
            console.log({
                user,
                data
            });
            const newpost = await post({
                user,
                data
            });
            await newpost.save();
            res.send({
                message: "post added"
            });
        } catch (error) {
            console.log("[@mdb POST Somthing went wrong]");
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(384));
module.exports = __webpack_exports__;

})();