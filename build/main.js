webpackJsonp([8],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/courses/courses.module": [
		278,
		7
	],
	"../pages/exams/exams.module": [
		277,
		6
	],
	"../pages/main/main.module": [
		279,
		5
	],
	"../pages/newCourse/newCourse.module": [
		281,
		4
	],
	"../pages/notifications/notifications.module": [
		280,
		3
	],
	"../pages/openCourse/openCourse.module": [
		282,
		2
	],
	"../pages/personalData/personalData.module": [
		283,
		1
	],
	"../pages/timetable/timetable.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.fail = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.fail = false;
    };
    HomePage.prototype.login = function (email, password) {
        if (email != null && password != null)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
        else
            this.fail = true;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\home\home.html"*/'<ion-content padding>\n\n    <ion-grid id="table">\n        <ion-row>\n\n          <ion-col col-4>\n            <ion-img width="500" height="500" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png" id="avatar"></ion-img>\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n                <ion-label id="label">Login:</ion-label>\n                <ion-input type="email" [(ngModel)]="email" placeholder="Introduce your email"></ion-input>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label id="label">Password:</ion-label>\n                <ion-input type="password" [(ngModel)]="password" placeholder="Introduce your password"></ion-input>\n              </ion-item>\n            \n              <br><br>\n              <button ion-button (click) ="login(email, password)">Log in</button>\n\n              <br><br>\n              <p id="wrong" *ngIf=" fail == true" > Wrong e-mail or password </p>\n\n          </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__main_main__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_courses__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__courses_courses__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exams_exams__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__exams_exams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personalData_personalData__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__personalData_personalData__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timetable_timetable__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__timetable_timetable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__openCourse_openCourse__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__openCourse_openCourse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__newCourse_newCourse__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__newCourse_newCourse__["a"]; });









//# sourceMappingURL=index.pages.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamsPage = /** @class */ (function () {
    function ExamsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExamsPage_1 = ExamsPage;
    ExamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExamsPage');
    };
    ExamsPage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    ExamsPage.prototype.personal_data = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* PersonalDataPage */], {});
    };
    ExamsPage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["f" /* NotificationsPage */], {});
    };
    ExamsPage.prototype.my_courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
    };
    ExamsPage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["a" /* CoursesPage */], {});
    };
    ExamsPage.prototype.timetable = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* TimetablePage */], {});
    };
    ExamsPage.prototype.exams = function () {
        this.navCtrl.push(ExamsPage_1, {});
    };
    ExamsPage = ExamsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exams',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\exams\exams.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Exams</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n            <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n    <ion-grid>\n        <ion-row>\n  \n          <!-- Menu col -->\n          <ion-col col-2>\n            \n            <div id="data">\n                <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n                <p>Katarzyna Brzozowski</p>\n                <button ion-button small (click) ="log_out()">Log out</button>\n            </div>\n  \n            <div id="data">\n                <ion-list>\n  \n                  <ion-item-divider id="menu">\n                        Student area\n                  </ion-item-divider>\n  \n                  <br>\n                  <button ion-item (click)="personal_data()">\n                      <ion-icon name="contact" item-left></ion-icon>\n                      Personal data\n                  </button>\n                  <button ion-item (click)="email()">\n                      <ion-icon name="mail" item-left></ion-icon>\n                      Check e-mail\n                  </button>\n                  <button ion-item (click)="notifications()">\n                      <ion-icon name="chatboxes" item-left></ion-icon>\n                      Notifications\n                  </button>\n                  <button ion-item (click)="my_courses()">\n                      <ion-icon name="book" item-left></ion-icon>\n                      My courses\n                  </button>\n                  <button ion-item (click)="courses()">\n                      <ion-icon name="list-box" item-left></ion-icon>\n                      Enroling courses\n                  </button>\n                  <button ion-item (click)="timetable()">\n                      <ion-icon name="calendar" item-left></ion-icon>\n                      My timetable\n                  </button>\n                  <button ion-item (click)="exams()">\n                      <ion-icon name="school" item-left></ion-icon>\n                      My exams\n                  </button>\n  \n                </ion-list>\n            </div>\n            \n            <div id="data">\n                <ion-list>\n  \n                  <ion-item-divider id="menu">\n                        External webs\n                    </ion-item-divider>\n  \n                    <br>\n                    <ion-item>\n                        <ion-icon name="browsers" item-left></ion-icon>\n                        <a href="https://www.p.lodz.pl/pl">Politechnika Łódzka</a>\n                    </ion-item>\n                    <ion-item>\n                        <ion-icon name="browsers" item-left></ion-icon>\n                        <a href="https://www.ife.p.lodz.pl/">IFE</a>\n                    </ion-item>        \n  \n                </ion-list>\n            </div>\n  \n          </ion-col>\n\n          <!-- Exams timetable -->\n          <ion-col>\n\n            <div id="ex">\n                \n                <h1>MY EXAMS</h1>\n                <br>\n                <h6>Here you can only find the dates of the exams. You can check your grades on each subject page\n                    (by clicking on the name of the subject in "My courses" page)</h6>\n                <br>\n                <ion-grid>\n                    <ion-row>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3> September / Wrzesień</h3> </ion-col></ion-row>\n                                <ion-row id="exams">\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3>October / Październik</h3> </ion-col></ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>1st</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Lesson 1 (Algebra and mathematics)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>14th</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Project 1 (GUI Programming)</p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3>November / Listopad</h3> </ion-col></ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>10th</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Lab exam (I) (Image Processing)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>23rd</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Lab Project (Artificial Intelligence)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>24th</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Lesson 2 (Algebra and mathematics)</p>\n                                        <p>Essay (Artificial Intelligence)</p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3>December / Grudzień</h3> </ion-col></ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>1st</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Lecture exam(Artificial Intelligence)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>2nd</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Project 2 (GUI Programming)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>10th</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Exercices (First part) (Algebra and mathematics)</p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row><ion-col></ion-col></ion-row>\n\n                    <ion-row>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3>January / Styczeń</h3> </ion-col></ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>10th</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Lesson 4-5 (Algebra and mathematics)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>17th</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Final exam (Computer Networking)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>23rd</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Lab exam (II) (Image Processing)</p>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row id="exams">\n                                    <ion-col col-3>\n                                        <p>29th</p>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p>Oral exam (Image Processing)</p>\n                                        <p>Project 3 (GUI Programming)</p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3>February / Luty</h3> </ion-col></ion-row>\n                                <ion-row>\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3>March / Marsz</h3> </ion-col></ion-row>\n                                <ion-row>\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3>April / Kwiecień</h3> </ion-col></ion-row>\n                                <ion-row>\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n                        \n                    </ion-row>\n\n                    <ion-row><ion-col></ion-col></ion-row>\n                    \n                    <ion-row>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3> May / Może</h3> </ion-col></ion-row>\n                                <ion-row>\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3> June / Czerwiec</h3> </ion-col></ion-row>\n                                <ion-row>\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3> July / Lipiec</h3> </ion-col></ion-row>\n                                <ion-row>\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-grid id="table">\n                                <ion-row id="months"><ion-col> <h3> August / Sierpień</h3> </ion-col></ion-row>\n                                <ion-row>\n                                    <ion-col><p id="exams">Not available</p></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n                        \n                    </ion-row>\n    \n                </ion-grid>\n            \n            </div>\n              \n          </ion-col>\n        \n        </ion-row>\n    \n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\exams\exams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ExamsPage);
    return ExamsPage;
    var ExamsPage_1;
}());

//# sourceMappingURL=exams.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = "";
    }
    MainPage_1 = MainPage;
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    MainPage.prototype.personal_data = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* PersonalDataPage */], {});
    };
    MainPage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["f" /* NotificationsPage */], {});
    };
    MainPage.prototype.my_courses = function () {
        this.navCtrl.push(MainPage_1, {});
    };
    MainPage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["a" /* CoursesPage */], {});
    };
    MainPage.prototype.timetable = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* TimetablePage */], {});
    };
    MainPage.prototype.exams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* ExamsPage */], {});
    };
    MainPage.prototype.open_course = function (name) {
        this.name = name;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["g" /* OpenCoursePage */], { "name": this.name });
    };
    MainPage = MainPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\main\main.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>My courses</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n            <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n  <ion-grid>\n      <ion-row>\n\n        <!-- Menu col -->\n        <ion-col col-2>\n          \n          <div id="data">\n              <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n              <p>Katarzyna Brzozowski</p>\n              <button ion-button small (click) ="log_out()">Log out</button>\n          </div>\n\n          <div id="data">\n              <ion-list>\n\n                <ion-item-divider id="menu">\n                      Student area\n                </ion-item-divider>\n\n                <br>\n                <button ion-item (click)="personal_data()">\n                    <ion-icon name="contact" item-left></ion-icon>\n                    Personal data\n                </button>\n                <button ion-item onclick=\'location.href="https://poczta.edu.p.lodz.pl/mail#1";\'>\n                    <ion-icon name="mail" item-left></ion-icon>\n                    Check e-mail\n                </button>\n                <button ion-item (click)="notifications()">\n                    <ion-icon name="chatboxes" item-left></ion-icon>\n                    Notifications\n                </button>\n                <button ion-item (click)="my_courses()">\n                    <ion-icon name="book" item-left></ion-icon>\n                    My courses\n                </button>\n                <button ion-item (click)="courses()">\n                    <ion-icon name="list-box" item-left></ion-icon>\n                    Enroling courses\n                </button>\n                <button ion-item (click)="timetable()">\n                    <ion-icon name="calendar" item-left></ion-icon>\n                    My timetable\n                </button>\n                <button ion-item (click)="exams()">\n                    <ion-icon name="school" item-left></ion-icon>\n                    My exams\n                </button>\n\n              </ion-list>\n          </div>\n          \n          <div id="data">\n              <ion-list>\n\n                <ion-item-divider id="menu">\n                      External webs\n                </ion-item-divider>\n\n                <br>\n\n                <button ion-item onclick="location.href=\'https://www.p.lodz.pl/pl\';">\n                    <ion-icon name="browsers" item-left></ion-icon>\n                    Politechnika Łódzka\n                </button>\n\n                <button ion-item onclick="location.href=\'https://www.ife.p.lodz.pl/\';">\n                    <ion-icon name="browsers" item-left></ion-icon>\n                    IFE\n                </button>\n              </ion-list>\n          </div>\n\n        </ion-col>\n\n        <!-- My courses -->\n        <ion-col>\n            <ion-list id="lista2">\n\n                <h1>MY COURSES</h1>\n\n                <br><br>\n                <h4>Computer Science</h4>\n                <div id="my_courses">\n                    <ion-list id="lista2">\n                        <ion-item-divider>\n                            First year (Winter Semester)\n                        </ion-item-divider>\n\n                        <button ion-item (click)="open_course(\'Algebra and mathematics\')">\n                            Algebra and mathematics\n                        </button>\n                    </ion-list>\n                        <br>\n                    <ion-list id="lista2">\n                        <ion-item-divider>\n                            Third year (Winter Semester)\n                        </ion-item-divider>\n                        <button ion-item (click)="open_course(\'Image Processing\')">\n                            Image Processing\n                        </button>\n                        <button ion-item (click)="open_course(\'GUI Programming\')">\n                            GUI Programming\n                        </button>\n                        <button ion-item (click)="open_course(\'Computer Networking\')">\n                            Computer Networking\n                        </button>\n                    </ion-list>\n                </div>\n\n\n                <br><br><br>\n                <h4>Information Technology</h4>\n                <div id="my_courses">\n                    <ion-list id="lista2">\n                      <ion-item-divider>\n                          Forth year (Winter Semester)\n                      </ion-item-divider>\n\n                      <button ion-item (click)="open_course(\'Artificial Intelligence\')">\n                          Artificial Intelligence\n                      </button>\n                    </ion-list>\n                </div>\n                    \n                <br><br><br>\n                <h4>Informatyka</h4>\n                <div id="my_courses">\n                    <ion-list id="lista2">\n                        <ion-item-divider>\n                            Third year (Summer Semester)\n                        </ion-item-divider>\n                        <button ion-item (click)="open_course(\'Operating Systems\')">\n                            Operating Systems\n                        </button>\n                        <button ion-item (click)="open_course(\'Computer Hardware\')">\n                            Computer Hardware\n                        </button>\n                        <button ion-item (click)="open_course(\'Firewalls\')">\n                            Firewalls\n                        </button>\n                    </ion-list>\n                </div>\n\n            </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MainPage);
    return MainPage;
    var MainPage_1;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursesPage = /** @class */ (function () {
    function CoursesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aux = [];
        this.all_courses = [
            { name: "Computers architecture", bachelor: "Informatyka", year: "1st year (Winter semester)" },
            { name: "Advanced Computer Networking", bachelor: "Informatyka", year: "3rd year (Winter semester)" },
            { name: "Fields and Waves", bachelor: "Information Technology", year: "1st year (Summer semester)" },
            { name: "Data Communication", bachelor: "Information Technology", year: "2nd year (Winter semester)" },
            { name: "Multimedia Signal Processing", bachelor: "Information Technology", year: "2nd year (Summer Semester)" },
            { name: "Digital Signal Processing", bachelor: "Information Technology", year: "2nd year (Winter Semester)" },
            { name: "Wireless and mobile networks", bachelor: "Computer Science", year: "4th year (Winter Semester)" },
            { name: "Intelligent systems programming", bachelor: "Computer Science", year: "4th year (Winter Semester)" },
            { name: "Integrated systems design", bachelor: "Computer Science", year: "3rd year (Summer Semester)" },
            { name: "Network and Switching Theory", bachelor: "Computer Science", year: "2nd year (Summer Semester)" },
            { name: "Information Systems", bachelor: "Computer Science", year: "3rd year (Winter Semester)" },
            { name: "Telematics arquitectures and services", bachelor: "Computer Science", year: "3rd year (Summer Semester)" }
        ];
    }
    CoursesPage_1 = CoursesPage;
    CoursesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
        this.aux = this.all_courses;
    };
    CoursesPage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    CoursesPage.prototype.personal_data = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* PersonalDataPage */], {});
    };
    CoursesPage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["f" /* NotificationsPage */], {});
    };
    CoursesPage.prototype.my_courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
    };
    CoursesPage.prototype.courses = function () {
        this.navCtrl.push(CoursesPage_1, {});
    };
    CoursesPage.prototype.timetable = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* TimetablePage */], {});
    };
    CoursesPage.prototype.exams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* ExamsPage */], {});
    };
    CoursesPage.prototype.new_course = function (name, bachelor, year) {
        var c_name = name;
        var c_bach = bachelor;
        var c_year = year;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["e" /* NewCoursePage */], { "name": c_name, "bachelor": c_bach, "year": c_year });
    };
    CoursesPage.prototype.getCourseName = function (ev) {
        var val = ev.target.value;
        if (val == undefined)
            val = "";
        this.aux = this.all_courses.filter(function (item) {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    };
    CoursesPage.prototype.getCourseBachelor = function (ev) {
        var val = ev.target.value;
        if (val == undefined)
            val = "";
        this.aux = this.all_courses.filter(function (item) {
            return (item.bachelor.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    };
    CoursesPage.prototype.getCourseYear = function (ev) {
        var val = ev.target.value;
        if (val == undefined)
            val = "";
        this.aux = this.all_courses.filter(function (item) {
            return (item.year.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    };
    CoursesPage = CoursesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\courses\courses.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Enroling courses</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n            <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n    <ion-grid>\n        <ion-row>\n  \n        <!-- Menu col -->\n        <ion-col col-2>\n          \n            <div id="data">\n                <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n                <p>Katarzyna Brzozowski</p>\n                <button id="butt" ion-button small (click) ="log_out()">Log out</button>\n            </div>\n  \n            <div id="data">\n                <ion-list>\n  \n                  <ion-item-divider id="menu">\n                        Student area\n                  </ion-item-divider>\n  \n                  <br>\n                  <button ion-item (click)="personal_data()">\n                      <ion-icon name="contact" item-left></ion-icon>\n                      Personal data\n                  </button>\n                  <button ion-item onclick="location.href=\'https://poczta.edu.p.lodz.pl/mail#1\';">\n                      <ion-icon name="mail" item-left></ion-icon>\n                      Check e-mail\n                  </button>\n                  <button ion-item (click)="notifications()">\n                      <ion-icon name="chatboxes" item-left></ion-icon>\n                      Notifications\n                  </button>\n                  <button ion-item (click)="my_courses()">\n                      <ion-icon name="book" item-left></ion-icon>\n                      My courses\n                  </button>\n                  <button ion-item (click)="courses()">\n                      <ion-icon name="list-box" item-left></ion-icon>\n                      Enroling courses\n                  </button>\n                  <button ion-item (click)="timetable()">\n                      <ion-icon name="calendar" item-left></ion-icon>\n                      My timetable\n                  </button>\n                  <button ion-item (click)="exams()">\n                      <ion-icon name="school" item-left></ion-icon>\n                      My exams\n                  </button>\n  \n                </ion-list>\n            </div>\n            \n            <div id="data">\n                <ion-list>\n  \n                  <ion-item-divider id="menu">\n                        External webs\n                  </ion-item-divider>\n  \n                  <br>\n  \n                  <button ion-item onclick="location.href=\'https://www.p.lodz.pl/pl\';">\n                      <ion-icon name="browsers" item-left></ion-icon>\n                      Politechnika Łódzka\n                  </button>\n  \n                  <button ion-item onclick="location.href=\'https://www.ife.p.lodz.pl/\';">\n                      <ion-icon name="browsers" item-left></ion-icon>\n                      IFE\n                  </button>\n                </ion-list>\n            </div>\n  \n          </ion-col>\n\n          <!-- New courses -->\n          <ion-col>\n\n            <div id="cour">\n\n               <h1>AVAILABLE COURSES YOU CAN ENROL IN:</h1>\n               <br>\n                <ion-grid>\n                    <ion-row>\n\n                        <!-- Results -->                        \n                        <ion-col col-5>\n                            <ion-scroll scrollY="true" style="height: 300%">\n                                <ion-list scroll="true">\n                                    <button ion-item (click)="new_course(item[\'name\'], item[\'bachelor\'], item[\'year\'])" *ngFor="let item of aux">\n                                        <div id="courses_list">{{item["name"]}}</div><br>\n                                        <div id="bachelor">{{item["bachelor"]}}<br>{{item["year"]}}</div>\n                                    </button>\n                                </ion-list>\n                            </ion-scroll>\n                                \n                        </ion-col>\n\n                        <ion-col>\n\n                        </ion-col>\n\n                        <!-- Search bars -->\n                        <ion-col col-6>\n\n                                Search the name of the course:\n                                <ion-searchbar (ionInput)="getCourseName($event)"></ion-searchbar>\n            \n                                Search bachelor (Informatyka, Information Technology or Computer Science):\n                                <ion-searchbar (ionInput)="getCourseBachelor($event)"></ion-searchbar>\n    \n                                Search year or semester:\n                                <ion-searchbar (ionInput)="getCourseYear($event)"></ion-searchbar>\n    \n                            </ion-col>\n\n                    </ion-row>\n                </ion-grid>\n\n                    \n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CoursesPage);
    return CoursesPage;
    var CoursesPage_1;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationsPage_1 = NotificationsPage;
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    NotificationsPage.prototype.personal_data = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* PersonalDataPage */], {});
    };
    NotificationsPage.prototype.notifications = function () {
        this.navCtrl.push(NotificationsPage_1, {});
    };
    NotificationsPage.prototype.my_courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
    };
    NotificationsPage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["a" /* CoursesPage */], {});
    };
    NotificationsPage.prototype.timetable = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* TimetablePage */], {});
    };
    NotificationsPage.prototype.exams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* ExamsPage */], {});
    };
    NotificationsPage = NotificationsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\notifications\notifications.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n            <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n    <ion-grid>\n        <ion-row>\n  \n        <!-- Menu col -->\n        <ion-col col-2>\n          \n                <div id="data">\n                    <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n                    <p>Katarzyna Brzozowski</p>\n                    <button ion-button small (click) ="log_out()">Log out</button>\n                </div>\n      \n                <div id="data">\n                    <ion-list>\n      \n                      <ion-item-divider id="menu">\n                            Student area\n                      </ion-item-divider>\n      \n                      <br>\n                      <button ion-item (click)="personal_data()">\n                          <ion-icon name="contact" item-left></ion-icon>\n                          Personal data\n                      </button>\n                      <button ion-item onclick="location.href=\'https://poczta.edu.p.lodz.pl/mail#1\';">\n                          <ion-icon name="mail" item-left></ion-icon>\n                          Check e-mail\n                      </button>\n                      <button ion-item (click)="notifications()">\n                          <ion-icon name="chatboxes" item-left></ion-icon>\n                          Notifications\n                      </button>\n                      <button ion-item (click)="my_courses()">\n                          <ion-icon name="book" item-left></ion-icon>\n                          My courses\n                      </button>\n                      <button ion-item (click)="courses()">\n                          <ion-icon name="list-box" item-left></ion-icon>\n                          Enroling courses\n                      </button>\n                      <button ion-item (click)="timetable()">\n                          <ion-icon name="calendar" item-left></ion-icon>\n                          My timetable\n                      </button>\n                      <button ion-item (click)="exams()">\n                          <ion-icon name="school" item-left></ion-icon>\n                          My exams\n                      </button>\n      \n                    </ion-list>\n                </div>\n                \n                <div id="data">\n                    <ion-list>\n      \n                      <ion-item-divider id="menu">\n                            External webs\n                      </ion-item-divider>\n      \n                      <br>\n      \n                      <button ion-item onclick="location.href=\'https://www.p.lodz.pl/pl\';">\n                          <ion-icon name="browsers" item-left></ion-icon>\n                          Politechnika Łódzka\n                      </button>\n      \n                      <button ion-item onclick="location.href=\'https://www.ife.p.lodz.pl/\';">\n                          <ion-icon name="browsers" item-left></ion-icon>\n                          IFE\n                      </button>\n                    </ion-list>\n                </div>\n      \n              </ion-col>\n\n          <!-- Notifications -->\n          <ion-col>\n              \n              <div id="not">\n                    <h1>MY NOTIFICATIONS</h1>\n\n                    <br><br>\n                    <h4> You have: 0 new notifications!</h4>\n\n                    <br><br>\n              \n                    <ion-list>\n\n                        <ion-item-divider>\n                            24-12-2018: Merry Christmas!\n                        </ion-item-divider>\n\n                        <ion-item-divider>\n                            12-12-2018: Christmas Holidays starts on 22nd of December.\n                        </ion-item-divider>\n\n                        <ion-item-divider>\n                            30-11-2018: One new exam has been added to your calendar!\n                        </ion-item-divider>\n\n                        <ion-item-divider>\n                            05-11-2018: Remember that all lessons are cancelled on Monday 12 of November due to Polish Independence Day.\n                        </ion-item-divider>\n\n                        <ion-item-divider>\n                            14-10-2018: One new exam has been added to your calendar!\n                        </ion-item-divider>\n\n                        <ion-item-divider>\n                            10-10-2018: One new exam has been added to your calendar!\n                        </ion-item-divider>\n\n                        <ion-item-divider>\n                            20-09-2018: Remember that lessons starts the 1st of October\n                        </ion-item-divider>\n\n                    </ion-list>\n                \n              </div>\n\n          </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotificationsPage);
    return NotificationsPage;
    var NotificationsPage_1;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalDataPage = /** @class */ (function () {
    function PersonalDataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = null;
        this.student_id = null;
        this.student_email = null;
        this.address = null;
        this.postalcode = null;
        this.city = null;
        this.country = null;
        console.log("construc " + this.address);
    }
    PersonalDataPage_1 = PersonalDataPage;
    PersonalDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonaldataPage');
        console.log("ionview " + this.address);
    };
    PersonalDataPage.prototype.ionViewDidEnter = function () {
        if (this.id == null)
            this.random_id();
        if (this.student_id == null)
            this.random_student_id();
        this.student_email = this.student_id + "@edu.p.lodz.pl";
        if (this.address == null)
            this.address = "Ul. Piotrkowska 6";
        if (this.postalcode == null)
            this.postalcode = "90-004";
        if (this.city == null)
            this.city = "Łódź";
        if (this.country == null)
            this.country = "Poland";
    };
    PersonalDataPage.prototype.random_id = function () {
        this.id = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 10; i++)
            this.id += possible.charAt(Math.floor(Math.random() * possible.length));
    };
    PersonalDataPage.prototype.random_student_id = function () {
        this.student_id = "";
        var possible = "0123456789";
        for (var i = 0; i < 7; i++)
            this.student_id += possible.charAt(Math.floor(Math.random() * possible.length));
    };
    PersonalDataPage.prototype.save = function (address) {
        this.address = address;
        console.log("save: " + this.address);
    };
    PersonalDataPage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    PersonalDataPage.prototype.personal_data = function () {
        this.navCtrl.push(PersonalDataPage_1, {});
    };
    PersonalDataPage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["f" /* NotificationsPage */], {});
    };
    PersonalDataPage.prototype.my_courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
    };
    PersonalDataPage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["a" /* CoursesPage */], {});
    };
    PersonalDataPage.prototype.timetable = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* TimetablePage */], {});
    };
    PersonalDataPage.prototype.exams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* ExamsPage */], {});
    };
    PersonalDataPage = PersonalDataPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personaldata',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\personalData\personaldata.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Personal data</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n            <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n        <ion-grid>\n                <ion-row>\n          \n        <!-- Menu col -->\n        <ion-col col-2>\n          \n                <div id="data">\n                    <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n                    <p>Katarzyna Brzozowski</p>\n                    <button ion-button small (click) ="log_out()">Log out</button>\n                </div>\n      \n                <div id="data">\n                    <ion-list>\n      \n                      <ion-item-divider id="menu">\n                            Student area\n                      </ion-item-divider>\n      \n                      <br>\n                      <button ion-item (click)="personal_data()">\n                          <ion-icon name="contact" item-left></ion-icon>\n                          Personal data\n                      </button>\n                      <button ion-item onclick="location.href=\'https://poczta.edu.p.lodz.pl/mail#1\';">\n                          <ion-icon name="mail" item-left></ion-icon>\n                          Check e-mail\n                      </button>\n                      <button ion-item (click)="notifications()">\n                          <ion-icon name="chatboxes" item-left></ion-icon>\n                          Notifications\n                      </button>\n                      <button ion-item (click)="my_courses()">\n                          <ion-icon name="book" item-left></ion-icon>\n                          My courses\n                      </button>\n                      <button ion-item (click)="courses()">\n                          <ion-icon name="list-box" item-left></ion-icon>\n                          Enroling courses\n                      </button>\n                      <button ion-item (click)="timetable()">\n                          <ion-icon name="calendar" item-left></ion-icon>\n                          My timetable\n                      </button>\n                      <button ion-item (click)="exams()">\n                          <ion-icon name="school" item-left></ion-icon>\n                          My exams\n                      </button>\n      \n                    </ion-list>\n                </div>\n                \n                <div id="data">\n                    <ion-list>\n      \n                      <ion-item-divider id="menu">\n                            External webs\n                      </ion-item-divider>\n      \n                      <br>\n      \n                      <button ion-item onclick="location.href=\'https://www.p.lodz.pl/pl\';">\n                          <ion-icon name="browsers" item-left></ion-icon>\n                          Politechnika Łódzka\n                      </button>\n      \n                      <button ion-item onclick="location.href=\'https://www.ife.p.lodz.pl/\';">\n                          <ion-icon name="browsers" item-left></ion-icon>\n                          IFE\n                      </button>\n                    </ion-list>\n                </div>\n      \n              </ion-col>\n          \n                  <!-- My data -->\n                  <ion-col>\n                      \n                    <div id="main_div">\n\n                        <ion-grid>\n                            <ion-row>\n\n                                <!-- Photo -->\n                                <ion-col id="photo">\n                                    <ion-img width="200" height="200" src="source-code/avatar.png" id="avatar"></ion-img>\n                                </ion-col>\n\n                                <!-- Data -->\n                                <ion-col>\n                                    <p>Katarzyna Brzozowski</p>\n                                    <p>ID: {{id}} </p>\n                                    <p>Student ID: {{student_id}} </p>\n                                    <p>E-mail: {{student_email}}</p>\n                                </ion-col>\n\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                        \n                    <div id="main_div2">\n                    \n                        <ion-list>\n                    \n                            <ion-item-divider>\n                                <h2>Personal data</h2>\n                            </ion-item-divider>\n                            <br>\n                            <ion-item id="in_text">\n                            <ion-label color="primary" stacked>Address</ion-label>\n                            <ion-input placeholder={{address}} [(ngModel)]="address"></ion-input>\n                            </ion-item>\n                    \n                            <ion-item id="in_text">\n                                <ion-label color="primary" stacked>Postal Code</ion-label>\n                                <ion-input placeholder={{postalcode}} [(ngModel)]="postalcode"></ion-input>\n                            </ion-item>\n                    \n                            <ion-item id="in_text">\n                                <ion-label color="primary" stacked>City</ion-label>\n                                <ion-input placeholder={{city}} [(ngModel)]="city"></ion-input>\n                            </ion-item>\n                    \n                            <ion-item id="in_text">\n                                <ion-label color="primary" stacked>Country</ion-label>\n                                <ion-input placeholder={{country}} [(ngModel)]="country"></ion-input>\n                            </ion-item>\n                        \n                        </ion-list>\n                        \n                        <br><br>\n                        In order to make a change in your personal information, you must send a request.\n                        <br><br>\n                        <button ion-button (click)="save(address)">Send request</button>\n                    \n                    </div>\n                    \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\personalData\personaldata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PersonalDataPage);
    return PersonalDataPage;
    var PersonalDataPage_1;
}());

//# sourceMappingURL=personalData.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimetablePage = /** @class */ (function () {
    function TimetablePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TimetablePage_1 = TimetablePage;
    TimetablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimetablePage');
    };
    TimetablePage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    TimetablePage.prototype.personal_data = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* PersonalDataPage */], {});
    };
    TimetablePage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["f" /* NotificationsPage */], {});
    };
    TimetablePage.prototype.my_courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
    };
    TimetablePage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["a" /* CoursesPage */], {});
    };
    TimetablePage.prototype.timetable = function () {
        this.navCtrl.push(TimetablePage_1, {});
    };
    TimetablePage.prototype.exams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* ExamsPage */], {});
    };
    TimetablePage = TimetablePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timetable',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\timetable\timetable.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Timetable</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n        <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n    <ion-grid>\n        <ion-row>\n          \n        <!-- Menu col -->\n        <ion-col col-2>\n          \n          <div id="data">\n              <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n              <p>Katarzyna Brzozowski</p>\n              <button ion-button small (click) ="log_out()">Log out</button>\n          </div>\n\n          <div id="data">\n              <ion-list>\n\n                <ion-item-divider id="menu">\n                      Student area\n                </ion-item-divider>\n\n                <br>\n                <button ion-item (click)="personal_data()">\n                    <ion-icon name="contact" item-left></ion-icon>\n                    Personal data\n                </button>\n                <button ion-item onclick="location.href=\'https://poczta.edu.p.lodz.pl/mail#1\';">\n                    <ion-icon name="mail" item-left></ion-icon>\n                    Check e-mail\n                </button>\n                <button ion-item (click)="notifications()">\n                    <ion-icon name="chatboxes" item-left></ion-icon>\n                    Notifications\n                </button>\n                <button ion-item (click)="my_courses()">\n                    <ion-icon name="book" item-left></ion-icon>\n                    My courses\n                </button>\n                <button ion-item (click)="courses()">\n                    <ion-icon name="list-box" item-left></ion-icon>\n                    Enroling courses\n                </button>\n                <button ion-item (click)="timetable()">\n                    <ion-icon name="calendar" item-left></ion-icon>\n                    My timetable\n                </button>\n                <button ion-item (click)="exams()">\n                    <ion-icon name="school" item-left></ion-icon>\n                    My exams\n                </button>\n\n              </ion-list>\n          </div>\n          \n          <div id="data">\n              <ion-list>\n\n                <ion-item-divider id="menu">\n                      External webs\n                </ion-item-divider>\n\n                <br>\n\n                <button ion-item onclick="location.href=\'https://www.p.lodz.pl/pl\';">\n                    <ion-icon name="browsers" item-left></ion-icon>\n                    Politechnika Łódzka\n                </button>\n\n                <button ion-item onclick="location.href=\'https://www.ife.p.lodz.pl/\';">\n                    <ion-icon name="browsers" item-left></ion-icon>\n                    IFE\n                </button>\n              </ion-list>\n          </div>\n\n        </ion-col>\n\n          <ion-col>\n              \n            <div id="timetable">\n\n                <h1>MY TIMETABLE</h1>\n                <br>  \n                              \n                <ion-grid id="table">\n            \n                  <!-- Days of the week -->\n                    <ion-row>\n                        <ion-col>\n                        </ion-col>\n                      <ion-col id="week_days">\n                        Monday\n                      </ion-col>\n                      <ion-col id="week_days">\n                        Tuesday\n                      </ion-col>\n                      <ion-col id="week_days">\n                        Wednesday\n                      </ion-col>\n                      <ion-col id="week_days">\n                        Thursday\n                      </ion-col>\n                      <ion-col id="week_days">\n                        Friday\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 9:15 - 10:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 9:15 - 10:00\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        Artificial Intelligence\n                        <br>\n                        <p id="class">Class: F7  — Building: B9</p>\n                      </ion-col>\n                      <ion-col>\n                        Firewalls\n                        <br>\n                        <p id="class">Class: A1  — Building: B21</p>\n                      </ion-col>\n                      <ion-col>\n                        Operating Systems\n                        <br>\n                        <p id="class">Class: 01  — Building: IFE</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 10:15 - 11:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 10:15 - 11:00\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        Artificial Intelligence\n                        <br>\n                        <p id="class">Class: F7  — Building: B9</p>\n                      </ion-col>\n                      <ion-col>\n                        Firewalls\n                        <br>\n                        <p id="class">Class: A1  — Building: B21</p>\n                      </ion-col>\n                      <ion-col>\n                        Operating Systems\n                        <br>\n                        <p id="class">Class: 01  — Building: IFE</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 11:15 - 12:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 11:15 - 12:00\n                      </ion-col>\n                      <ion-col>\n                        Computer Hardware\n                        <br>\n                        <p id="class">Class: 7   — Building: B7</p>\n                      </ion-col>\n                      <ion-col>\n                        Artificial Intelligence\n                        <br>\n                        <p id="class">Class: F7  — Building: B9</p>\n                      </ion-col>\n                      <ion-col>\n                        Firewalls\n                        <br>\n                        <p id="class">Class: A6  — Building: B21</p>\n                      </ion-col>\n                      <ion-col>\n                        Operating Systems\n                        <br>\n                        <p id="class">Class: 213  Building: A5</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 12:15 - 13:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 12:15 - 13:00\n                      </ion-col>\n                      <ion-col>\n                        Computer Hardware\n                        <br>\n                        <p id="class">Class: 7   — Building: B7</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        Firewalls\n                        <br>\n                        <p id="class">Class: A6  — Building: B21</p>\n                      </ion-col>\n                      <ion-col>\n                        Operating Systems\n                        <br>\n                        <p id="class">Class: 213  Building: A5</p>\n                      </ion-col>\n                      <ion-col>\n                        GUI Programming\n                        <br>\n                        <p id="class">Class: 118  Building: A10</p>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 13:15 - 14:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 13:15 - 14:00\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        GUI Programming\n                        <br>\n                        <p id="class">Class: 118  Building: A10</p>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 14:15 - 15:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 14:15 - 15:00\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        Artificial Intelligence\n                        <br>\n                        <p id="class">Class: 116  Building: B15</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        GUI Programming\n                        <br>\n                        <p id="class">Class: 118  Building: A10</p>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 15:15 - 16:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 15:15 - 16:00\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        Artificial Intelligence\n                        <br>\n                        <p id="class">Class: 116  Building: B15</p>\n                      </ion-col>\n                      <ion-col>\n                        Image Processing\n                        <br>\n                        <p id="class">Class: 120  Building: A10</p>\n                      </ion-col>\n                      <ion-col>\n                        Computer Networking\n                        <br>\n                        <p id="class">Class: E3  — Building: B9</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 16:15 - 17:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 16:15 - 17:00\n                      </ion-col>\n                      <ion-col>\n                        Computer Hardware\n                        <br>\n                        <p id="class">Class: 7   — Building: B7</p>\n                      </ion-col>\n                      <ion-col>\n                        Artificial Intelligence\n                        <br>\n                        <p id="class">Class: 116  Building: B15</p>\n                      </ion-col>\n                      <ion-col>\n                        Image Processing\n                        <br>\n                        <p id="class">Class: 120  Building: A10</p>\n                      </ion-col>\n                      <ion-col>\n                        Computer Networking\n                        <br>\n                        <p id="class">Class: E3  — Building: B9</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                    </ion-row>\n            \n                    <!-- 17:15 - 18:00 -->\n                    <ion-row>\n                      <ion-col id="week_days">\n                        <br> 18:15 - 19:00\n                      </ion-col>\n                      <ion-col>\n                        Computer Hardware\n                        <br>\n                        <p id="class">Class: 7   — Building: B7</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                      <ion-col>\n                        Image Processing\n                        <br>\n                        <p id="class">Class: 120  Building: A10</p>\n                      </ion-col>\n                      <ion-col>\n                        Computer Networking\n                        <br>\n                        <p id="class">Class: E3  — Building: B9</p>\n                      </ion-col>\n                      <ion-col>\n                      </ion-col>\n                    </ion-row>\n            \n                  </ion-grid>\n              </div>\n          </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\timetable\timetable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TimetablePage);
    return TimetablePage;
    var TimetablePage_1;
}());

//# sourceMappingURL=timetable.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenCoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenCoursePage = /** @class */ (function () {
    function OpenCoursePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.course_name = "";
        this.description_algebra = "The subject Linear Algebra is taught with the main objective of providing students with a clear understanding of the complex numbers, systems of linear equations and elementary techniques of matrix algebra as well as an introduction to the fundamental concepts of Vector Spaces which will be needed in later subjects. It will be paid special attention to the applications of Linear Algebra.";
        this.description_IP = "Teaching students the algorithms of image processing and analysis.";
        this.description_GUI = "To familiarize students with the principles of graphic design of user interfaces, their programming principles. Acquisition of practical skills in the field of graphic graphical user interfaces in various programming environments.";
        this.description_CN = "The aim of the classes is to acquaint students with computer networks management (including configuration and security fundamental) and its monitoring.";
        this.description_AI = "Presentation of contexts where one needs 'intelligent' data analysis and AI systems. Explanation of main artificial intelligence strategies: crisp and fuzzy logic, stochastic optimization and artificial neural networks.";
        this.description_OS = "The aim of this subject is that the student was able to learn the foundations of the current operating systems and to comprise its importance inside the architecture of a computer.";
        this.description_CH = "No description available.";
        this.description_Firewalls = "No description available.";
        this.documents_algebra = ["Lecture 1", "Lecture 2", "Exercices (First part)", "Lecture 3", "Project explanation", "Exercices (Second Part)"];
        this.documents_IP = ["Laboratory 1", "Laboratory 2", "Laboratory 3", "Images", "Lectures 1-2-3"];
        this.documents_GUI = ["1st project explanation", "2nd project explanation", "3rd project explanation", "Lecture slides"];
        this.documents_CN = ["router-image", "video-explanation", "virtualbox_link"];
        this.documents_AI = ["Final project explanation", "Lectures"];
        this.documents_OS = ["linux-image", "Lecture 1-2", "Lab. 1-2-3"];
        this.documents_CH = ["Lectures 1-5", "Exercices lab. 2"];
        this.documents_Firewalls = ["Introduction to Firewalls", "Lecture-1"];
        this.grades_algebra = ["Exam lecture 1: 3,5", "Exam lecture 2: 1", "Exercices (First part): 4"];
        this.grades_IP = ["Exam 1: 2,5", "Laboratory: Fail"];
        this.grades_GUI = ["1st project: 4", "2nd project: 1"];
        this.grades_CN = ["Laboratory 1: Present and exercices done"];
        this.grades_AI = ["Final project: 2,5", "Essay: 4"];
        this.grades_OS = ["No grades available"];
        this.grades_CH = ["No grades available"];
        this.grades_Firewalls = ["No grades available"];
        this.course_name = this.navParams.get("name");
    }
    OpenCoursePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpencoursePage');
    };
    OpenCoursePage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    OpenCoursePage.prototype.personal_data = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* PersonalDataPage */], {});
    };
    OpenCoursePage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["f" /* NotificationsPage */], {});
    };
    OpenCoursePage.prototype.my_courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
    };
    OpenCoursePage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["a" /* CoursesPage */], {});
    };
    OpenCoursePage.prototype.timetable = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* TimetablePage */], {});
    };
    OpenCoursePage.prototype.exams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* ExamsPage */], {});
    };
    OpenCoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opencourse',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\openCourse\opencourse.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{course_name}}</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n            <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n\n    <ion-grid>\n        <ion-row>\n  \n        <!-- Menu col -->\n        <ion-col col-2>\n          \n                <div id="data">\n                    <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n                    <p>Katarzyna Brzozowski</p>\n                    <button ion-button small (click) ="log_out()">Log out</button>\n                </div>\n      \n                <div id="data">\n                    <ion-list>\n      \n                      <ion-item-divider id="menu">\n                            Student area\n                      </ion-item-divider>\n      \n                      <br>\n                      <button ion-item (click)="personal_data()">\n                          <ion-icon name="contact" item-left></ion-icon>\n                          Personal data\n                      </button>\n                      <button ion-item onclick="location.href=\'https://poczta.edu.p.lodz.pl/mail#1\';">\n                          <ion-icon name="mail" item-left></ion-icon>\n                          Check e-mail\n                      </button>\n                      <button ion-item (click)="notifications()">\n                          <ion-icon name="chatboxes" item-left></ion-icon>\n                          Notifications\n                      </button>\n                      <button ion-item (click)="my_courses()">\n                          <ion-icon name="book" item-left></ion-icon>\n                          My courses\n                      </button>\n                      <button ion-item (click)="courses()">\n                          <ion-icon name="list-box" item-left></ion-icon>\n                          Enroling courses\n                      </button>\n                      <button ion-item (click)="timetable()">\n                          <ion-icon name="calendar" item-left></ion-icon>\n                          My timetable\n                      </button>\n                      <button ion-item (click)="exams()">\n                          <ion-icon name="school" item-left></ion-icon>\n                          My exams\n                      </button>\n      \n                    </ion-list>\n                </div>\n                \n                <div id="data">\n                    <ion-list>\n      \n                      <ion-item-divider id="menu">\n                            External webs\n                      </ion-item-divider>\n      \n                      <br>\n      \n                      <button ion-item onclick="location.href=\'https://www.p.lodz.pl/pl\';">\n                          <ion-icon name="browsers" item-left></ion-icon>\n                          Politechnika Łódzka\n                      </button>\n      \n                      <button ion-item onclick="location.href=\'https://www.ife.p.lodz.pl/\';">\n                          <ion-icon name="browsers" item-left></ion-icon>\n                          IFE\n                      </button>\n                    </ion-list>\n                </div>\n      \n              </ion-col>\n\n          <ion-col>\n              <div id="opencourse">\n\n                <br>\n                <div id="box">\n\n                    <h2>Description</h2>\n\n                    <p *ngIf= "course_name == \'Algebra and mathematics\'"> {{description_algebra}} </p>\n                    <p *ngIf= "course_name == \'Image Processing\'"> {{description_IP}} </p>\n                    <p *ngIf= "course_name == \'GUI Programming\'"> {{description_GUI}} </p>\n                    <p *ngIf= "course_name == \'Computer Networking\'"> {{description_CN}} </p>\n                    <p *ngIf= "course_name == \'Artificial Intelligence\'"> {{description_AI}} </p>\n                    <p *ngIf= "course_name == \'Operating Systems\'"> {{description_OS}} </p>\n                    <p *ngIf= "course_name == \'Computer Hardware\'"> {{description_CH}} </p>\n                    <p *ngIf= "course_name == \'Firewalls\'"> {{description_Firewalls}} </p>\n\n                </div>\n\n                <br><br>\n\n                <div id="box">\n\n                    <h3>Documents</h3>\n\n                    <p *ngIf= "course_name == \'Algebra and mathematics\'">\n                        <button ion-item *ngFor="let item of documents_algebra">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Image Processing\'">\n                        <button ion-item *ngFor="let item of documents_IP">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                    <p *ngIf= "course_name == \'GUI Programming\'">\n                        <button ion-item *ngFor="let item of documents_GUI">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Computer Networking\'">\n                        <button ion-item *ngFor="let item of documents_CN">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Artificial Intelligence\'">\n                        <button ion-item *ngFor="let item of documents_AI">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Operating Systems\'">\n                        <button ion-item *ngFor="let item of documents_OS">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Computer Hardware\'">\n                        <button ion-item *ngFor="let item of documents_CH">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Firewalls\'">\n                        <button ion-item *ngFor="let item of documents_Firewalls">\n                            <p id="for">{{item}}</p>\n                        </button>\n                    </p>\n\n                </div>\n\n                <br><br>\n\n                <div id="box">\n\n                    <h3>Grades</h3>\n\n                    <p *ngIf= "course_name == \'Algebra and mathematics\'">\n                        <ion-item *ngFor="let item of grades_algebra">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Image Processing\'">\n                        <ion-item *ngFor="let item of grades_IP">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                    <p *ngIf= "course_name == \'GUI Programming\'">\n                        <ion-item *ngFor="let item of grades_GUI">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Computer Networking\'">\n                        <ion-item *ngFor="let item of grades_CN">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Artificial Intelligence\'">\n                        <ion-item *ngFor="let item of grades_AI">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Operating Systems\'">\n                        <ion-item *ngFor="let item of grades_OS">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Computer Hardware\'">\n                        <ion-item *ngFor="let item of grades_CH">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                    <p *ngIf= "course_name == \'Firewalls\'">\n                        <ion-item *ngFor="let item of grades_Firewalls">\n                            <p id="for">{{item}}</p>\n                        </ion-item>\n                    </p>\n\n                </div>\n\n              </div>\n\n          </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\openCourse\opencourse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OpenCoursePage);
    return OpenCoursePage;
}());

//# sourceMappingURL=openCourse.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCoursePage = /** @class */ (function () {
    function NewCoursePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.correct = false;
        this.aux = [];
        this.description_CA = "Computers have become an essential tool. Computers are not only manipulated from a user's --or specialized user's-- point of view, but also from the engineering perspective, as tools to be designed or to be integrated in more complex systems. Hence, the main motivation for the Computers' Architecture course is to provide students with an understanding of basic computer operation by studying the lower abstraction levels (over the electronic level). The subject Computers' Architecture is focused on the conventional machine level, describes the operating machine level and shows an example application for the Symbolic Machine domain through the introduction of the Database Management Systems.";
        this.description_ACN = "The objective of this subject is to teach our students the technical basics that govern the modern computer networks, regarding topics like new switching paradigms, new access technologies or data transport with quality of service.";
        this.description_FW = "Fields and Waves presents the first contact in the student's degree with the phenomena of electromagnetic waves, which are the physical medium for transmission of information at almost instantaneous speed. Mathematical modeling of electromagnetic fields that provide insights into the behavior of electromagnetic waves in real environments will be introduced.";
        this.description_DC = "In this subject the efficiency and reliability of data transmission using discrete memoryless channels will be analyzed, and the next issues will be introduced: lossless data compression methods, linear error control codes, data link layer protocols, and multiple access channels protocols and technologies.";
        this.description_MSP = "	Multimedia signal processing is now a fundamental part of any modern information, communication, learning, and entertainment system. Once the main Digital Signal Processing concepts and bases have been introduced in the second year, this course prepares students for the analysis and processing of deterministic and random signals, before encoding and transmission of multimedia information. In related courses both on this and next academic year, the knowledge acquired shall be applied to voice, audio, image and video signals and systems,.  The main goals of the course are: Analyze digital signal processing schemes. design digital filters according to prescribed specifications. analyze and specify the basic parameters of communication subsystems from the point of view of signal processing. apply statistical filtering in coding, processing and transmission of multimedia information. To help in reaching these goals, the course is divided into four major topics: DFT and Fast Fourier Transform, Fundamentals of statistical signal processing, digital filter characterization and multirate signal processing.";
        this.description_DSP = "Digital signal processing is nowadays a feature of most everyday communications and entertainment devices. The aim of this course is to equip students with a mathematical grounding in general signal and systems analysis. In subsequent course subjects, this knowledge will be applied to specific applications of signals and systems, including audio, image, video and voice signals.";
        this.description_WMN = "The subject examines the area of wireless and mobile networks, one of the technological basis of the present society, studying the existing challenges for the communications protocols, and looks at the opportunities that provides continuous connectivity even in movement. The focus of this subject will be on network protocols above physical layer (nevertheless, it will touch the most important physical layer properties).";
        this.description_ISP = "This course will begin providing the notion of agent, to comprise what is, how build it and how can, the agents interact for modeling and solving complex problems. Later we will study the design, implementation and application of intelligent agents and multiagent systems in current communications technologies and relate them with other current paradigms such as: object oriented programming, mobile agents, the management distributed of networks, the adaptive user interfaces and the electronic commerce. The students will learn to program multiagent systems in suitable platforms and mobile terminals (Android). Besides, they will perform a work in group, where they will extend the concepts studied in the subject to other topics of their own interest.";
        this.description_ISD = "Embedded systems are part of almost all the diary activities that involve an electronic device (the alarm clock, the mobile phone, the car...). This course introduces the main concepts behind modern embedded systems that include an operating system, and puts them in practice through a series of exercises and projects. The documentation will be provided in English.";
        this.description_NST = "The objective pursued with this course is that students acquire mastery of the basic methods of analysis for predicting the performance of networks, services and telecommunication systems, in terms of the amount of traffic they carry, the physical structure of the system and the way it is interconnected, the capacity of its constituent network elements and the algorithms used in them.";
        this.description_IS = "The aim of this subject is to introduce to the student in the main technologies to process and store the information, like central element of the telematic services";
        this.description_TAS = "This course focuses on the architectonic solutions for the design of distributed systems. More specifically, the course is oriented to scenarios based on services (service-oriented architectures) and the deployment of SOA solutions by means of Web Services Technologies (WS-*). Taking the WS-* stack as our techonological layout, the course focuses on the description, discovery and invocation of services in SOA. Finally, the course introduces models for services composition in SOA (again using Web Services as deployment technology).";
        this.course_name = this.navParams.get("name");
        this.bachelor = this.navParams.get("bachelor");
        this.year = this.navParams.get("year");
    }
    NewCoursePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewcoursePage');
    };
    NewCoursePage.prototype.ionViewWillEnter = function () {
        this.correct = false;
    };
    NewCoursePage.prototype.log_out = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["c" /* HomePage */], {});
    };
    NewCoursePage.prototype.personal_data = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* PersonalDataPage */], {});
    };
    NewCoursePage.prototype.notifications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["f" /* NotificationsPage */], {});
    };
    NewCoursePage.prototype.my_courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* MainPage */], {});
    };
    NewCoursePage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["a" /* CoursesPage */], {});
    };
    NewCoursePage.prototype.timetable = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* TimetablePage */], {});
    };
    NewCoursePage.prototype.exams = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* ExamsPage */], {});
    };
    NewCoursePage.prototype.enterKey = function (key) {
        this.correct = true;
    };
    NewCoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newcourse',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\newCourse\newcourse.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{course_name}}</ion-title>\n    <ion-buttons end style="margin-right: 1%">\n            <img width="170" height="60" src="http://klientocentryczni.pl/wp-content/uploads/2017/11/p%C5%82.png">\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body">\n    \n    <ion-grid>\n        <ion-row>\n  \n        <!-- Menu col -->\n        <ion-col col-2>\n          \n            <div id="data">\n                <ion-img width="80" height="80" src="source-code/avatar.png" id="avatar"></ion-img>\n                <p>Katarzyna Brzozowski</p>\n                <button ion-button small (click) ="log_out()">Log out</button>\n            </div>\n  \n            <div id="data">\n                <ion-list>\n  \n                  <ion-item-divider id="menu">\n                        Student area\n                  </ion-item-divider>\n  \n                  <br>\n                  <button ion-item (click)="personal_data()">\n                      <ion-icon name="contact" item-left></ion-icon>\n                      Personal data\n                  </button>\n                  <button ion-item onclick="location.href=\'https://poczta.edu.p.lodz.pl/mail#1\';">\n                      <ion-icon name="mail" item-left></ion-icon>\n                      Check e-mail\n                  </button>\n                  <button ion-item (click)="notifications()">\n                      <ion-icon name="chatboxes" item-left></ion-icon>\n                      Notifications\n                  </button>\n                  <button ion-item (click)="my_courses()">\n                      <ion-icon name="book" item-left></ion-icon>\n                      My courses\n                  </button>\n                  <button ion-item (click)="courses()">\n                      <ion-icon name="list-box" item-left></ion-icon>\n                      Enroling courses\n                  </button>\n                  <button ion-item (click)="timetable()">\n                      <ion-icon name="calendar" item-left></ion-icon>\n                      My timetable\n                  </button>\n                  <button ion-item (click)="exams()">\n                      <ion-icon name="school" item-left></ion-icon>\n                      My exams\n                  </button>\n  \n                </ion-list>\n            </div>\n            \n            <div id="data">\n                <ion-list>\n  \n                  <ion-item-divider id="menu">\n                        External webs\n                  </ion-item-divider>\n  \n                  <br>\n  \n                  <button ion-item onclick="location.href=\'https://www.p.lodz.pl/pl\';">\n                      <ion-icon name="browsers" item-left></ion-icon>\n                      Politechnika Łódzka\n                  </button>\n  \n                  <button ion-item onclick="location.href=\'https://www.ife.p.lodz.pl/\';">\n                      <ion-icon name="browsers" item-left></ion-icon>\n                      IFE\n                  </button>\n                </ion-list>\n            </div>\n  \n          </ion-col>\n\n          <ion-col>\n\n              <div id="opencourse">\n\n                <h1>{{course_name}}</h1>\n                <br>\n                <div id="box">\n\n                    <h2>Description</h2>\n\n                    <p *ngIf= "course_name == \'Computers architecture\'"> {{description_CA}} </p>\n                    <p *ngIf= "course_name == \'Advanced Computer Networking\'"> {{description_ACN}} </p>\n                    <p *ngIf= "course_name == \'Fields and Waves\'"> {{description_FW}} </p>\n                    <p *ngIf= "course_name == \'Data Communication\'"> {{description_DC}} </p>\n                    <p *ngIf= "course_name == \'Multimedia Signal Processing\'"> {{description_MSP}} </p>\n                    <p *ngIf= "course_name == \'Digital Signal Processing\'"> {{description_DSP}} </p>\n                    <p *ngIf= "course_name == \'Wireless and Mobile Networks\'"> {{description_WMN}} </p>\n                    <p *ngIf= "course_name == \'Intelligent Systems Programming\'"> {{description_ISP}} </p>\n                    <p *ngIf= "course_name == \'Integrated Systems Design\'"> {{description_ISD}} </p>\n                    <p *ngIf= "course_name == \'Network and Switching Theory\'"> {{description_NST}} </p>\n                    <p *ngIf= "course_name == \'Information Systems\'"> {{description_IS}} </p>\n                    <p *ngIf= "course_name == \'Telematics Arquitectures and Services\'"> {{description_TAS}} </p>\n\n                </div>\n\n                <br><br>\n\n                \n                <div id="box">\n\n                    <h3>Bachelor</h3>\n\n                    <p>{{bachelor}}</p>\n\n                </div>\n\n                <br><br>\n\n                <div id="box">\n\n                    <h3>Year and semester</h3>\n\n                    <p>{{year}}</p>\n\n                </div>\n\n                <br><br>\n\n                <div id="box">\n\n                    <h3>Enroling:</h3>\n\n                    <ion-item>\n                        <ion-input type="password" [(ngModel)]="key" (keyup.enter)="enterKey(key)" \n                            placeholder="Enrolment key" clearInput></ion-input>\n                    </ion-item>\n\n                    <p *ngIf= "correct == true" id="wrong"> Incorrect key. Try again. </p>\n\n                </div>\n\n              </div>\n\n          </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\pages\newCourse\newcourse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewCoursePage);
    return NewCoursePage;
}());

//# sourceMappingURL=newCourse.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["d" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["b" /* ExamsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["f" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["h" /* PersonalDataPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["i" /* TimetablePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["g" /* OpenCoursePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["e" /* NewCoursePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/exams/exams.module#ExamsPageModule', name: 'ExamsPage', segment: 'exams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newCourse/newCourse.module#NewcoursePageModule', name: 'NewCoursePage', segment: 'newCourse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/openCourse/openCourse.module#OpencoursePageModule', name: 'OpenCoursePage', segment: 'openCourse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personalData/personalData.module#PersonaldataPageModule', name: 'PersonalDataPage', segment: 'personalData', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timetable/timetable.module#TimetablePageModule', name: 'TimetablePage', segment: 'timetable', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["d" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["b" /* ExamsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["f" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["h" /* PersonalDataPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["i" /* TimetablePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["g" /* OpenCoursePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["e" /* NewCoursePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\wikamp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map