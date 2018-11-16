(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\r\n    min-height:100px ;\r\n    width: 90%;\r\n    border: 1px solid gray;\r\n    margin: 0px auto 0px auto;\r\n    color: white;\r\n    background: gray;\r\n    padding: 10px;\r\n}\r\nstrong{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 40px;\r\n}\r\n#slogan {\r\n    font-size: 15px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    color: black;\r\n    display: block;\r\n    position: relative;\r\n    margin: 0px auto 0px auto;\r\n    left: 35px;\r\n    top: -10px;\r\n}\r\nbody{\r\n    width: 90%;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSw2REFBNkQ7SUFDN0QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIseUVBQXlFO0lBQ3pFLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsV0FBVztDQUNkO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlcntcclxuICAgIG1pbi1oZWlnaHQ6MTAwcHggO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuc3Ryb25ne1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiNzbG9nYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG4gICAgbGVmdDogMzVweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbn1cclxuYm9keXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\r\n    <strong>Quote It</strong> <span><p id=\"slogan\"> share Your Quote</p> </span>\r\n</div>\r\n<app-post-qoute></app-post-qoute>\r\n<app-mydate [user]=\"user\"></app-mydate>\r\n<app-login-register></app-login-register>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mydate_User_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mydate/User.model */ "./src/app/mydate/User.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularComponent';
        this.user = new _mydate_User_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.name = 'Minhaj Ahmed';
        this.user.city = 'Hyderbad';
        this.user.designation = 'Software Developer';
        this.user.mobile = 9572111010;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mydate_mydate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mydate/mydate.component */ "./src/app/mydate/mydate.component.ts");
/* harmony import */ var _post_qoute_post_qoute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-qoute/post-qoute.component */ "./src/app/post-qoute/post-qoute.component.ts");
/* harmony import */ var _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-register/login-register.component */ "./src/app/login-register/login-register.component.ts");
/* harmony import */ var _myfont_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myfont.directive */ "./src/app/myfont.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _mydate_mydate_component__WEBPACK_IMPORTED_MODULE_4__["MydateComponent"],
                _login_register_login_register_component__WEBPACK_IMPORTED_MODULE_6__["LoginRegisterComponent"],
                _post_qoute_post_qoute_component__WEBPACK_IMPORTED_MODULE_5__["PostQouteComponent"],
                _myfont_directive__WEBPACK_IMPORTED_MODULE_7__["MyfontDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login-register/login-register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/login-register/login-register.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n\theight:350px;\r\n\twidth: 330px;\r\n\tpadding-top:5px;\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid #999999  ;\r\n\tmargin:10px auto 0px auto;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\t \r\n}\r\n.active{\r\n    background: #2ECC71 ;\r\n    border: 1px solid #E54775;\r\n}\r\n.login{\r\n    height:210px;\r\n\twidth: 330px;\r\n\tpadding-top:5px;\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid #999999  ;\r\n\tmargin:10px auto 0px auto;\r\n\tfont-family: Century Gothic;\r\n    font-size: 20px; \r\n}\r\n.input{\r\n\theight:30px;\r\n\twidth: 250px;\r\n\tpadding: 10px;\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid #999999  ;\r\n\tmargin:15px auto 0px 25px;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 16px; \r\n}\r\n.btn{\r\n\theight:50px;\r\n\twidth: 280px;\r\n\tpadding: 5px;\r\n\tborder-radius: 0px;\r\n\tborder: 1px solid #0E6251 ;\r\n\tmargin:15px auto 0px 25px;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\tbackground: #424949 ;\r\n\tcolor:white;\r\n}\r\n.logBtn{\r\n   height:45px;\r\n\twidth: 162px;\r\n\tpadding: 5px;\r\n\tborder-radius: 0px;\r\n   border: 1px solid #515A5A ;\r\n    margin:0px auto 0px auto;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\tbackground: #515A5A ;\r\n\tcolor:white;\r\n}\r\n.reg{\r\n    height:45px;\r\n\twidth: 162px;\r\n\tpadding: 5px;\r\n\tborder-radius: 0px;\r\n\tborder: 1px solid #E54775 ;\r\n\tmargin:20px auto 0px 530px;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\tbackground:#E54775 ;\r\n\tcolor:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcmVnaXN0ZXIvbG9naW4tcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQiw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1QixnQkFBZ0I7O0NBRWhCO0FBQ0Q7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsNEJBQTRCO0lBQ3pCLGdCQUFnQjtDQUNuQjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaO0FBQ0Q7R0FDRyxZQUFZO0NBQ2QsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7R0FDakIsMkJBQTJCO0lBQzFCLHlCQUF5QjtDQUM1Qiw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1o7QUFDRDtJQUNJLFlBQVk7Q0FDZixhQUFhO0NBQ2IsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0IsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXJlZ2lzdGVyL2xvZ2luLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cdGhlaWdodDozNTBweDtcclxuXHR3aWR0aDogMzMwcHg7XHJcblx0cGFkZGluZy10b3A6NXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICA7XHJcblx0bWFyZ2luOjEwcHggYXV0byAwcHggYXV0bztcclxuXHRmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XHJcblx0Zm9udC1zaXplOiAyMHB4OyBcclxuXHQgXHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICMyRUNDNzEgO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1NDc3NTtcclxufVxyXG4ubG9naW57XHJcbiAgICBoZWlnaHQ6MjEwcHg7XHJcblx0d2lkdGg6IDMzMHB4O1xyXG5cdHBhZGRpbmctdG9wOjVweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTk5OSAgO1xyXG5cdG1hcmdpbjoxMHB4IGF1dG8gMHB4IGF1dG87XHJcblx0Zm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyBcclxufVxyXG4uaW5wdXR7XHJcblx0aGVpZ2h0OjMwcHg7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTkgIDtcclxuXHRtYXJnaW46MTVweCBhdXRvIDBweCAyNXB4O1xyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuXHRmb250LXNpemU6IDE2cHg7IFxyXG59XHJcbi5idG57XHJcblx0aGVpZ2h0OjUwcHg7XHJcblx0d2lkdGg6IDI4MHB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiAwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzBFNjI1MSA7XHJcblx0bWFyZ2luOjE1cHggYXV0byAwcHggMjVweDtcclxuXHRmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWM7XHJcblx0Zm9udC1zaXplOiAyMHB4OyBcclxuXHRiYWNrZ3JvdW5kOiAjNDI0OTQ5IDtcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG4ubG9nQnRue1xyXG4gICBoZWlnaHQ6NDVweDtcclxuXHR3aWR0aDogMTYycHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgIzUxNUE1QSA7XHJcbiAgICBtYXJnaW46MHB4IGF1dG8gMHB4IGF1dG87XHJcblx0Zm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xyXG5cdGZvbnQtc2l6ZTogMjBweDsgXHJcblx0YmFja2dyb3VuZDogIzUxNUE1QSA7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuLnJlZ3tcclxuICAgIGhlaWdodDo0NXB4O1xyXG5cdHdpZHRoOiAxNjJweDtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNFNTQ3NzUgO1xyXG5cdG1hcmdpbjoyMHB4IGF1dG8gMHB4IDUzMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuXHRmb250LXNpemU6IDIwcHg7IFxyXG5cdGJhY2tncm91bmQ6I0U1NDc3NSA7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login-register/login-register.component.html":
/*!**************************************************************!*\
  !*** ./src/app/login-register/login-register.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<button (click)=swithcToregister() class=reg>Register</button><span></span><button (click)=toggleLogin() class=\"logBtn\"n>Login</button>\n\n\n\n\n<div *ngIf= !switchToLogin class=\"container\" >\n\n<input  type=\"text\" class=\"input\" placeholder=\"Name\">\n<input type=\"text\" class=\"input\" placeholder=\"email@example.com\">                                     \n<input type=\"text\" class=\"input\" placeholder=\"Zipcode\">\n<input type=\"text\" class=\"input\" placeholder=\"+91xxxxxxxxxx\">\n<input type=\"button\" class=\"btn\" value = \"submit\">\n</div>\n<div *ngIf= switchToLogin class=\"login\">\n<input type=\"text\" class=\"input\" placeholder=\"email@example.com\">  \n<input type=\"password\" class=\"input\" placeholder=\"password\">  \n<input type=\"button\" class=\"btn\" value = \"Log In\">\n</div>\n"

/***/ }),

/***/ "./src/app/login-register/login-register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/login-register/login-register.component.ts ***!
  \************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent() {
        this.switchToLogin = true;
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
    };
    LoginRegisterComponent.prototype.toggleLogin = function () {
        this.switchToLogin = true;
    };
    LoginRegisterComponent.prototype.swithcToregister = function () {
        this.switchToLogin = false;
    };
    LoginRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-register',
            template: __webpack_require__(/*! ./login-register.component.html */ "./src/app/login-register/login-register.component.html"),
            styles: [__webpack_require__(/*! ./login-register.component.css */ "./src/app/login-register/login-register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "./src/app/mydate/User.model.ts":
/*!**************************************!*\
  !*** ./src/app/mydate/User.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/mydate/mydate.component.css":
/*!*********************************************!*\
  !*** ./src/app/mydate/mydate.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    color: #DA5C80;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 20px;\r\n    position: relative;\r\n    left: 55px;\r\n    top:20px;\r\n}\r\nli{\r\n\r\n    color: #C80C42;\r\n    font-size: 20px;\r\n}\r\n#showdate{\r\n    height: 50px;\r\n    width: 150px;\r\n    border: 1px #999999 solid;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 20px;\r\n    color: white;\r\n    background: #999999;\r\n    display: block;\r\n}\r\n.userDetail{\r\n    height: 100px;\r\n    width: 120px;\r\n    margin-top: 10px;\r\n    border: 1px solid #E54775;\r\n    padding: 10px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 17px;\r\n    background:#E54775 ;\r\n    color: white;\r\n}\r\nbutton{\r\n    height: 45px;\r\n    width: 120px;\r\n    border-radius: 4px;\r\n    border:1px solid black;\r\n    color: #999999;\r\n    margin: 0px;\r\n    background: black;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 18px;\r\n    position: relative;\r\n    left: 55px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlkYXRlL215ZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHVFQUF1RTtJQUN2RSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0NBQ1o7QUFDRDs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVIQUF1SDtJQUN2SCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLHVFQUF1RTtJQUN2RSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2REFBNkQ7SUFDN0QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9teWRhdGUvbXlkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgY29sb3I6ICNEQTVDODA7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTVweDtcclxuICAgIHRvcDoyMHB4O1xyXG59XHJcbmxpe1xyXG5cclxuICAgIGNvbG9yOiAjQzgwQzQyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiNzaG93ZGF0ZXtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlcjogMXB4ICM5OTk5OTkgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udXNlckRldGFpbHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1NDc3NTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZDojRTU0Nzc1IDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mydate/mydate.component.html":
/*!**********************************************!*\
  !*** ./src/app/mydate/mydate.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p appMyfont>Developed By</p><span>\n<button (click)=\"expandButton()\" *ngIf=\"isExpanded\">Expand</button>\n<button (click)=\"expandButton()\" *ngIf= \"!isExpanded\">Collapse</button></span>\n<div *ngIf = \"!isExpanded\" class=\"userDetail\">\n{{userObj.name}}<br>\n{{userObj.designation}}\n{{userObj.city}}\n{{userObj.mobile}}\n</div><br>\n"

/***/ }),

/***/ "./src/app/mydate/mydate.component.ts":
/*!********************************************!*\
  !*** ./src/app/mydate/mydate.component.ts ***!
  \********************************************/
/*! exports provided: MydateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydateComponent", function() { return MydateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.model */ "./src/app/mydate/User.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MydateComponent = /** @class */ (function () {
    function MydateComponent() {
        this.isExpanded = true;
        this.time = new Date();
    }
    MydateComponent.prototype.ngOnInit = function () {
    };
    MydateComponent.prototype.expandButton = function () {
        this.isExpanded = !this.isExpanded;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('user'),
        __metadata("design:type", _User_model__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], MydateComponent.prototype, "userObj", void 0);
    MydateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mydate',
            template: __webpack_require__(/*! ./mydate.component.html */ "./src/app/mydate/mydate.component.html"),
            styles: [__webpack_require__(/*! ./mydate.component.css */ "./src/app/mydate/mydate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MydateComponent);
    return MydateComponent;
}());



/***/ }),

/***/ "./src/app/myfont.directive.ts":
/*!*************************************!*\
  !*** ./src/app/myfont.directive.ts ***!
  \*************************************/
/*! exports provided: MyfontDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfontDirective", function() { return MyfontDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyfontDirective = /** @class */ (function () {
    function MyfontDirective(ele) {
        ele.nativeElement.style.color = '#82B028';
        ele.nativeElement.style.fontFamily = 'Century Gothic ';
    }
    MyfontDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMyfont]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MyfontDirective);
    return MyfontDirective;
}());



/***/ }),

/***/ "./src/app/post-qoute/User.model.ts":
/*!******************************************!*\
  !*** ./src/app/post-qoute/User.model.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, quote) {
        this.userName = name;
        this.useremail = email;
        this.userQuote = quote;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/post-qoute/post-qoute.component.css":
/*!*****************************************************!*\
  !*** ./src/app/post-qoute/post-qoute.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input{\r\n\theight:25px;\r\n\twidth: 260px;\r\n\tpadding: 10px;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #999999  ;\r\n    margin:5px;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 16px; \r\n}\r\np{\r\n    margin: 5px;\r\n    font-size: 20px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.btn{\r\n\theight:50px;\r\n\twidth: 280px;\r\n\tpadding: 5px;\r\n\tborder-radius: 0px;\r\n\tborder: 1px solid #0E6251 ;\r\n\t margin:5px;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\tbackground: #424949 ;\r\n\tcolor:white;\r\n}\r\n.container{\r\n    min-height:600px;\r\n    width: 100%;\r\n\r\n\tpadding:5px;\r\n\tmargin:0px auto 0px 45px; \r\n\tfont-family: Century Gothic;\r\n    font-size: 20px; \r\n}\r\n.quoteContainer{\r\n    min-height:120px;\r\n\twidth: 270px;\r\n    padding:5px;\r\n    margin:5px;\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid #999999  ;\r\n\tfont-family: Century Gothic;\r\n    font-size: 16px;\r\n}\r\n.showQuote{\r\n   min-height:100px;\r\n    width: 50%;\r\n    border: 1px solid gray;\r\n\tpadding:5px;\r\n    float:right; \r\n    margin: 0px auto 0px auto;\r\n\tfont-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px; \r\n    box-shadow: 2px 3px 1px 1px #999999;\r\n\r\n}\r\n#contentToPost{\r\n    height:330px;\r\n    width: 300px;\r\n\tpadding:5px;\r\n\tmargin:auto 30px auto 50px;; \r\n\tfont-family: Century Gothic;\r\n    font-size: 20px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1xb3V0ZS9wb3N0LXFvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsNEJBQTRCO0lBQ3pCLFdBQVc7Q0FDZCw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlFQUF5RTtDQUM1RTtBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtFQUMxQixXQUFXO0NBQ1osNEJBQTRCO0NBQzVCLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTs7Q0FFZixZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLDRCQUE0QjtJQUN6QixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQixhQUFhO0lBQ1YsWUFBWTtJQUNaLFdBQVc7Q0FDZCxtQkFBbUI7Q0FDbkIsNEJBQTRCO0NBQzVCLDRCQUE0QjtJQUN6QixnQkFBZ0I7Q0FDbkI7QUFDRDtHQUNHLGlCQUFpQjtJQUNoQixXQUFXO0lBQ1gsdUJBQXVCO0NBQzFCLFlBQVk7SUFDVCxZQUFZO0lBQ1osMEJBQTBCO0NBQzdCLDZDQUE2QztJQUMxQyxnQkFBZ0I7SUFDaEIsb0NBQW9DOztDQUV2QztBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEIsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQiw0QkFBNEI7SUFDekIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1xb3V0ZS9wb3N0LXFvdXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXR7XHJcblx0aGVpZ2h0OjI1cHg7XHJcblx0d2lkdGg6IDI2MHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTkgIDtcclxuICAgIG1hcmdpbjo1cHg7XHJcblx0Zm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xyXG5cdGZvbnQtc2l6ZTogMTZweDsgXHJcbn1cclxucHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnRue1xyXG5cdGhlaWdodDo1MHB4O1xyXG5cdHdpZHRoOiAyODBweDtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwRTYyNTEgO1xyXG5cdCBtYXJnaW46NXB4O1xyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuXHRmb250LXNpemU6IDIwcHg7IFxyXG5cdGJhY2tncm91bmQ6ICM0MjQ5NDkgO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OjYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG5cdHBhZGRpbmc6NXB4O1xyXG5cdG1hcmdpbjowcHggYXV0byAwcHggNDVweDsgXHJcblx0Zm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyBcclxufVxyXG4ucXVvdGVDb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OjEyMHB4O1xyXG5cdHdpZHRoOiAyNzBweDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTk5OSAgO1xyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc2hvd1F1b3Rle1xyXG4gICBtaW4taGVpZ2h0OjEwMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcblx0cGFkZGluZzo1cHg7XHJcbiAgICBmbG9hdDpyaWdodDsgXHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG5cdGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyBcclxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggMXB4IDFweCAjOTk5OTk5O1xyXG5cclxufVxyXG4jY29udGVudFRvUG9zdHtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuXHRwYWRkaW5nOjVweDtcclxuXHRtYXJnaW46YXV0byAzMHB4IGF1dG8gNTBweDs7IFxyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/post-qoute/post-qoute.component.html":
/*!******************************************************!*\
  !*** ./src/app/post-qoute/post-qoute.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div id=\"contentToPost\">\n  <p>Post Your Favorite Qoutes</p>\n  <input class=\"input\" type=\"text\" #name placeholder=\"Username\">\n  <input class=\"input\" type=\"email\" #email placeholder=\"email@example.com\">\n  <textarea #qoute class=\"quoteContainer\" placeholder=\"Type Your Favorite Quote ....\"></textarea>\n  <button class=\"btn\" (click)=\"createUser(name.value,email.value,qoute.value)\">Post</button>\n  <div appMyfont>{{action}}</div>\n</div>\n  <div *ngFor=\"let user of getUserList()\" >\n\n  <div  class=\"showQuote\" >\n     <button (click)=\"deleteQuote(user)\">Delete</button>\n    <div appMyfont>{{user.userQuote}}</div> \n    Posted By {{user.userName}}\n     contact {{user.useremail}}\n    \n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/post-qoute/post-qoute.component.ts":
/*!****************************************************!*\
  !*** ./src/app/post-qoute/post-qoute.component.ts ***!
  \****************************************************/
/*! exports provided: PostQouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostQouteComponent", function() { return PostQouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.model */ "./src/app/post-qoute/User.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostQouteComponent = /** @class */ (function () {
    function PostQouteComponent() {
        this.userList = new Set();
    }
    PostQouteComponent.prototype.getUserList = function () {
        return this.userList.values();
    };
    PostQouteComponent.prototype.createUser = function (name, email, quote) {
        this.user = new _User_model__WEBPACK_IMPORTED_MODULE_1__["User"](name, email, quote);
        this.userList.add(this.user);
        this.action = 'Posted Success';
        this.actionColor = 'green';
    };
    PostQouteComponent.prototype.deleteQuote = function (user) {
        this.userList.delete(user);
        this.action = 'Deleted Success';
        this.actionColor = 'red';
    };
    PostQouteComponent.prototype.ngOnInit = function () {
    };
    PostQouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-qoute',
            template: __webpack_require__(/*! ./post-qoute.component.html */ "./src/app/post-qoute/post-qoute.component.html"),
            styles: [__webpack_require__(/*! ./post-qoute.component.css */ "./src/app/post-qoute/post-qoute.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostQouteComponent);
    return PostQouteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aminhaj\Documents\AngularProjects\AngularComponent\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map