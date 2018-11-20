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

module.exports = "#header{\r\n    min-height:100px ;\r\n    position: fixed;\r\n    width: 90%;\r\n    border: 1px solid gray;\r\n    margin: 0px auto 0px 50px;\r\n    color: white;\r\n    background-color: grey;\r\n    padding: 10px;\r\n    overflow: hidden;\r\n}\r\nstrong{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 40px;\r\n}\r\n#slogan {\r\n    font-size: 15px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    color: black;\r\n    display: block;\r\n    position: relative;\r\n    margin: 0px auto 0px auto;\r\n    left: 35px;\r\n    top: -10px;\r\n}\r\nbody{\r\n    width: 90%;\r\n    padding: 10px;\r\n    \r\n}\r\n#footer{\r\n    height: 70px;\r\n    padding: 8px;\r\n    width: 93%;\r\n    position: fixed;\r\n    bottom:10px;\r\n    left: 60px;\r\n    color: white;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    font-family: century gothic;\r\n    background: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksNkRBQTZEO0lBQzdELGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlFQUF5RTtJQUN6RSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksV0FBVztJQUNYLGNBQWM7O0NBRWpCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVye1xyXG4gICAgbWluLWhlaWdodDoxMDBweCA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuc3Ryb25ne1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiNzbG9nYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xyXG4gICAgbGVmdDogMzVweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbn1cclxuYm9keXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuI2Zvb3RlcntcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206MTBweDtcclxuICAgIGxlZnQ6IDYwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogY2VudHVyeSBnb3RoaWM7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\r\n    <strong>Quote It</strong> <span><p id=\"slogan\"> share Your Quote</p> </span>\r\n</div>\r\n<app-post-qoute></app-post-qoute>\r\n<div id=\"footer\">\r\n    Minhaj Ahmed<br>\r\n    QuoteIt.com<br>\r\n contact ahmedminhaj@QuoteIt.com<br>\r\nCopyright &copy; 2011 QuoteIt.com All Rights Reserved\r\n</div>\r\n"

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

module.exports = "p{\r\n    color: #DA5C80;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 20px;\r\n    position: relative;\r\n    left: 55px;\r\n    top:20px;\r\n}\r\n#showdate{\r\n    height: 50px;\r\n    width: 150px;\r\n    border: 1px #999999 solid;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 20px;\r\n    color: white;\r\n    background: #999999;\r\n    display: block;\r\n}\r\n.userDetail{\r\n    height: 100px;\r\n    width: 120px;\r\n    margin: 220 0px auto 0px;\r\n    border: 1px solid #E54775;\r\n    padding: 10px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 17px;\r\n    background:#E54775 ;\r\n    position: fixed;\r\n    left: 55px;\r\n    top: 100px;\r\n    color: white;\r\n}\r\nbutton{\r\n    height: 45px;\r\n    width: 120px;\r\n    border-radius: 4px;\r\n    border:1px solid black;\r\n    color: #999999;\r\n    margin: 0px;\r\n    background: black;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 18px;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlkYXRlL215ZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHVFQUF1RTtJQUN2RSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0NBQ1o7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsdUhBQXVIO0lBQ3ZILGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsdUVBQXVFO0lBQ3ZFLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZEQUE2RDtJQUM3RCxnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL215ZGF0ZS9teWRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBjb2xvcjogI0RBNUM4MDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1NXB4O1xyXG4gICAgdG9wOjIwcHg7XHJcbn1cclxuI3Nob3dkYXRle1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggIzk5OTk5OSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzk5OTk5OTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi51c2VyRGV0YWlse1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbjogMjIwIDBweCBhdXRvIDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNTQ3NzU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJhY2tncm91bmQ6I0U1NDc3NSA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1NXB4O1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5idXR0b257XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

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
        ele.nativeElement.style.fontSize = '18px';
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
        this.likes = 0;
        this.dislikes = 0;
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

module.exports = ".input{\r\n\theight:25px;\r\n\twidth: 260px;\r\n\tpadding: 10px;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid #999999  ;\r\n    margin:5px;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 16px; \r\n}\r\np{\r\n    margin: 5px;\r\n    font-size: 15px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.btn{\r\n\theight:50px;\r\n\twidth: 280px;\r\n\tpadding: 5px;\r\n\tborder-radius: 0px;\r\n\tborder: 1px solid #0E6251 ;\r\n\t margin:5px;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\tbackground: #424949 ;\r\n\tcolor:white;\r\n}\r\n.container{\r\n    min-height:400px;\r\n    width: 66%;\r\n\tpadding:3px;\r\n \tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\tposition: absolute;\r\n\tmargin: 170px auto 0px 360px;\r\n\r\n}\r\n.quoteContainer{\r\n    min-height:120px;\r\n\twidth: 270px;\r\n    padding:5px;\r\n    margin:5px;\r\n\tborder-radius: 6px;\r\n\tborder: 1px solid #999999  ;\r\n\tfont-family: Century Gothic;\r\n\tfont-size: 16px;\r\n\t\r\n}\r\n.showQuote{\r\n   min-height:100px;\r\n    width: 100%;\r\n\tborder-radius:3px;\r\n\tpadding:8px;\r\n    margin: 5px auto 0px auto;\r\n\tfont-family:Century Gothic;\r\n    font-size: 18px; \r\n\tbox-shadow: 2px 3px 1px 1px #999999;\r\n\tposition: relative;\r\n\tdisplay: flow-root;\r\n\r\n}\r\n#contentToPost{\r\n    height:330px;\r\n    width: 300px;\r\n\tpadding:5px;\r\n\tmargin:130px 0px auto 50px;; \r\n\tfont-family: Century Gothic;\r\n\tfont-size: 20px; \r\n\tposition: fixed;\r\n}\r\n#likeBadge{\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n\tfont-size: 12px;\r\n\tpadding: 2px;\r\n\tborder-radius: 50%;\r\n\tcolor: white;\r\n\tbackground: #1BBB53 ;\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tline-height: 25px;\r\n\tright: 126px;\r\n\tbottom: 25px;\r\n\tfloat: right;\r\n}\r\n#dislikeBadge{\r\n\tposition: absolute;\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n\tfont-size: 12px;\r\n\tpadding: 2px;\r\n\tborder-radius: 50%;\r\n\tcolor: white;\r\n\tbackground: #D53764;\r\n\ttext-align: center;\r\n\tline-height: 25px;\r\n\tbottom: 25px;\r\n\tright: 41px;\r\n\tfloat: right;\r\n}\r\n#likepost{\r\n\theight: 30px;\r\n\twidth: 60px;\r\n\tborder: 1px solid #760A89  ;\r\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n\tfont-size: 12px;\r\n\tbackground: #760A89   ;\r\n\tcolor: white;\r\n\tfloat: right;\r\n\tposition: absolute;\r\n\tright: 138px;\r\n\tbottom: 10px;\r\n}\r\n#dislikepost{\r\n\theight: 30px;\r\n\twidth: 60px;\r\n\tborder: 1px solid #515A5A;\r\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n\tfont-size: 12px;\r\n\tbackground:#515A5A;\r\n\tcolor: white;\r\n\tfloat: right;\r\n\tposition: absolute;\r\n\tright: 60px;\r\n\tbottom: 10px;\r\n}\r\n#delbtn{\r\n\theight: 30px;\r\n\twidth: 60px;\r\n\tborder: 1px solid #060601;\r\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n\tfont-size: 12px;\r\n\tbackground: #060601   ;\r\n\tcolor: white;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1xb3V0ZS9wb3N0LXFvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsNEJBQTRCO0lBQ3pCLFdBQVc7Q0FDZCw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlFQUF5RTtDQUM1RTtBQUNEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtFQUMxQixXQUFXO0NBQ1osNEJBQTRCO0NBQzVCLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztDQUNkLFlBQVk7RUFDWCw0QkFBNEI7Q0FDN0IsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQiw2QkFBNkI7O0NBRTdCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIsYUFBYTtJQUNWLFlBQVk7SUFDWixXQUFXO0NBQ2QsbUJBQW1CO0NBQ25CLDRCQUE0QjtDQUM1Qiw0QkFBNEI7Q0FDNUIsZ0JBQWdCOztDQUVoQjtBQUNEO0dBQ0csaUJBQWlCO0lBQ2hCLFlBQVk7Q0FDZixrQkFBa0I7Q0FDbEIsWUFBWTtJQUNULDBCQUEwQjtDQUM3QiwyQkFBMkI7SUFDeEIsZ0JBQWdCO0NBQ25CLG9DQUFvQztDQUNwQyxtQkFBbUI7Q0FDbkIsbUJBQW1COztDQUVuQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEIsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWiw2REFBNkQ7Q0FDN0QsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsYUFBYTtDQUNiLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0NBQ1osNkRBQTZEO0NBQzdELGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWiw0QkFBNEI7Q0FDNUIsNkRBQTZEO0NBQzdELGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsNkRBQTZEO0NBQzdELGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGFBQWE7Q0FDYjtBQUNEO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsNkRBQTZEO0NBQzdELGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsYUFBYTs7Q0FFYiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtcW91dGUvcG9zdC1xb3V0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0e1xyXG5cdGhlaWdodDoyNXB4O1xyXG5cdHdpZHRoOiAyNjBweDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICA7XHJcbiAgICBtYXJnaW46NXB4O1xyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuXHRmb250LXNpemU6IDE2cHg7IFxyXG59XHJcbnB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uYnRue1xyXG5cdGhlaWdodDo1MHB4O1xyXG5cdHdpZHRoOiAyODBweDtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwRTYyNTEgO1xyXG5cdCBtYXJnaW46NXB4O1xyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuXHRmb250LXNpemU6IDIwcHg7IFxyXG5cdGJhY2tncm91bmQ6ICM0MjQ5NDkgO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OjQwMHB4O1xyXG4gICAgd2lkdGg6IDY2JTtcclxuXHRwYWRkaW5nOjNweDtcclxuIFx0Zm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xyXG5cdGZvbnQtc2l6ZTogMjBweDsgXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG1hcmdpbjogMTcwcHggYXV0byAwcHggMzYwcHg7XHJcblxyXG59XHJcbi5xdW90ZUNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6MTIwcHg7XHJcblx0d2lkdGg6IDI3MHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBtYXJnaW46NXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5ICA7XHJcblx0Zm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcclxufVxyXG4uc2hvd1F1b3Rle1xyXG4gICBtaW4taGVpZ2h0OjEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czozcHg7XHJcblx0cGFkZGluZzo4cHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvIDBweCBhdXRvO1xyXG5cdGZvbnQtZmFtaWx5OkNlbnR1cnkgR290aGljO1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuXHRib3gtc2hhZG93OiAycHggM3B4IDFweCAxcHggIzk5OTk5OTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogZmxvdy1yb290O1xyXG5cclxufVxyXG4jY29udGVudFRvUG9zdHtcclxuICAgIGhlaWdodDozMzBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuXHRwYWRkaW5nOjVweDtcclxuXHRtYXJnaW46MTMwcHggMHB4IGF1dG8gNTBweDs7IFxyXG5cdGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYztcclxuXHRmb250LXNpemU6IDIwcHg7IFxyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4jbGlrZUJhZGdle1xyXG5cdGhlaWdodDogMjVweDtcclxuXHR3aWR0aDogMjVweDtcclxuXHRmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHBhZGRpbmc6IDJweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQ6ICMxQkJCNTMgO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDI1cHg7XHJcblx0cmlnaHQ6IDEyNnB4O1xyXG5cdGJvdHRvbTogMjVweDtcclxuXHRmbG9hdDogcmlnaHQ7XHJcbn1cclxuI2Rpc2xpa2VCYWRnZXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0aGVpZ2h0OiAyNXB4O1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0cGFkZGluZzogMnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0YmFja2dyb3VuZDogI0Q1Mzc2NDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDI1cHg7XHJcblx0Ym90dG9tOiAyNXB4O1xyXG5cdHJpZ2h0OiA0MXB4O1xyXG5cdGZsb2F0OiByaWdodDtcclxufVxyXG4jbGlrZXBvc3R7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHdpZHRoOiA2MHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM3NjBBODkgIDtcclxuXHRmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGJhY2tncm91bmQ6ICM3NjBBODkgICA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDEzOHB4O1xyXG5cdGJvdHRvbTogMTBweDtcclxufVxyXG4jZGlzbGlrZXBvc3R7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHdpZHRoOiA2MHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM1MTVBNUE7XHJcblx0Zm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRiYWNrZ3JvdW5kOiM1MTVBNUE7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDYwcHg7XHJcblx0Ym90dG9tOiAxMHB4O1xyXG59XHJcbiNkZWxidG57XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdHdpZHRoOiA2MHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMwNjA2MDE7XHJcblx0Zm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDYwNjAxICAgO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/post-qoute/post-qoute.component.html":
/*!******************************************************!*\
  !*** ./src/app/post-qoute/post-qoute.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div id=\"contentToPost\">\n  <p>Post Your Favorite Qoutes</p>\n  <input class=\"input\" type=\"text\" #name placeholder=\"Username\">\n  <input class=\"input\" type=\"email\" #email placeholder=\"email@example.com\">\n  <textarea #qoute class=\"quoteContainer\" placeholder=\"Type Your Favorite Quote ....\"></textarea>\n  <button class=\"btn\" (click)=\"createUser(name.value,email.value,qoute.value)\">Post</button>\n  <div appMyfont>{{action}}</div>\n</div>\n<div class=\"container\" >\n  <div *ngFor=\"let user of getUserList()\">\n <div  class=\"showQuote\" >\n     <button id=\"delbtn\" (click)=\"deleteQuote(user)\">Delete</button>\n   <p appMyfont>{{user.userQuote}}</p> \n\n\n    <p>Posted By</p>{{user.userName}}\n  <button id=\"likepost\" (click)=\"addLike(user)\">Like</button><span><div id=\"likeBadge\">{{user.likes}}</div></span>\n  <button id=\"dislikepost\" (click)=\"addDislike(user)\">Dislike</button><span><div id=\"dislikeBadge\">{{user.dislikes}}</div></span>\n  </div>\n    </div>\n\n</div>\n\n\n"

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
    PostQouteComponent.prototype.createUser = function (name, email, qoute) {
        this.user = new _User_model__WEBPACK_IMPORTED_MODULE_1__["User"](name, email, qoute);
        this.userList.add(this.user);
        this.action = 'Posted Success';
        this.actionColor = 'green';
    };
    PostQouteComponent.prototype.deleteQuote = function (user) {
        this.userList.delete(user);
        this.action = 'Deleted Success';
        this.actionColor = 'red';
    };
    PostQouteComponent.prototype.addLike = function (user) {
        user.likes++;
    };
    PostQouteComponent.prototype.addDislike = function (user) {
        user.dislikes++;
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