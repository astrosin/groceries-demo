(self["webpackChunkAdmin"] = self["webpackChunkAdmin"] || []).push([["src_app_delivered_delivered_module_ts"],{

/***/ 1223:
/*!*******************************************************!*\
  !*** ./src/app/delivered/delivered-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveredPageRoutingModule": () => (/* binding */ DeliveredPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _delivered_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivered.page */ 453);




const routes = [
    {
        path: '',
        component: _delivered_page__WEBPACK_IMPORTED_MODULE_0__.DeliveredPage
    }
];
let DeliveredPageRoutingModule = class DeliveredPageRoutingModule {
};
DeliveredPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeliveredPageRoutingModule);



/***/ }),

/***/ 164:
/*!***********************************************!*\
  !*** ./src/app/delivered/delivered.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveredPageModule": () => (/* binding */ DeliveredPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _delivered_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivered-routing.module */ 1223);
/* harmony import */ var _delivered_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivered.page */ 453);







let DeliveredPageModule = class DeliveredPageModule {
};
DeliveredPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _delivered_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveredPageRoutingModule
        ],
        declarations: [_delivered_page__WEBPACK_IMPORTED_MODULE_1__.DeliveredPage]
    })
], DeliveredPageModule);



/***/ }),

/***/ 453:
/*!*********************************************!*\
  !*** ./src/app/delivered/delivered.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveredPage": () => (/* binding */ DeliveredPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_delivered_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./delivered.page.html */ 2688);
/* harmony import */ var _delivered_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivered.page.scss */ 6185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DeliveredPage = class DeliveredPage {
    constructor() { }
    ngOnInit() {
    }
};
DeliveredPage.ctorParameters = () => [];
DeliveredPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-delivered',
        template: _raw_loader_delivered_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_delivered_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeliveredPage);



/***/ }),

/***/ 6185:
/*!***********************************************!*\
  !*** ./src/app/delivered/delivered.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyZWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2688:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delivered/delivered.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>delivered</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\ndelivered page works\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_delivered_delivered_module_ts.js.map