(self["webpackChunkAdmin"] = self["webpackChunkAdmin"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 5935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 5935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 2836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 8043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ 457);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let DashboardPage = class DashboardPage {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.userCount = "";
        this.productCount = "";
        this.transactionCount = "";
    }
    ngOnInit() {
        this.numberOfUsers();
        this.numberOfProducts();
        this.numberOfTransactions();
    }
    ionViewWillEnter() {
    }
    user_page() {
        this.router.navigate(['/user']);
    }
    product_page() {
        this.router.navigate(['/product']);
    }
    order_page() {
        this.router.navigate(['/transaction']);
    }
    delivered_page() {
        this.router.navigate(['/delivered']);
    }
    exit() {
        this.adminService.logout();
        this.router.navigate(['/home']);
    }
    numberOfUsers() {
        this.adminService.numberOfUsers().subscribe(data => {
            console.log(data.length);
            this.userCount = data.length;
        });
    }
    numberOfProducts() {
        this.adminService.numberOfProducts().subscribe(data => {
            console.log(data.length);
            this.productCount = data.length;
        });
    }
    numberOfTransactions() {
        this.adminService.numberOfTransactions().subscribe(data => {
            console.log(data.length);
            this.transactionCount = data.length;
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 8043:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n    <ion-button (click)=\"exit()\">\n      <ion-icon slot=\"start\" name=\"avatar\"></ion-icon>\n      logout\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"padding: 10px; text-align:center;\" color=\"tertiary\">\n    <ion-card-subtitle>Lifetime</ion-card-subtitle>\n    <ion-card-title>Total Users</ion-card-title>\n    <ion-card-content>\n      The number of users is:\n      <br/>\n      <h1 style=\"font-size: 40px; font-weight:900;\">{{userCount}}</h1>\n      <br/>\n      <ion-label (click)=\"user_page()\">Detail</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style=\"padding: 10px; text-align:center;\" color=\"secondary\">\n      <ion-card-subtitle>Lifetime</ion-card-subtitle>\n      <ion-card-title>Total Products</ion-card-title>\n      <ion-card-content>\n        The number of products is:\n        <br/>\n        <h1 style=\"font-size: 40px; font-weight:900;\">{{productCount}}</h1>\n        <br/>\n        <ion-label (click)=\"product_page()\">Detail</ion-label>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style=\"padding: 10px; text-align:center;\" color=\"warning\">\n        <ion-card-subtitle>Lifetime</ion-card-subtitle>\n        <ion-card-title>Total Orders</ion-card-title>\n        <ion-card-content>\n          The number of Orders  is:\n          <br/>\n          <h1 style=\"font-size: 40px; font-weight:900;\">{{transactionCount}}</h1>\n          <br/>\n          <ion-label (click)=\"order_page()\">Detail</ion-label>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card style=\"padding: 10px; text-align:center;\" color=\"primary\">\n        <ion-card-subtitle>Lifetime</ion-card-subtitle>\n        <ion-card-title>Total Delivered</ion-card-title>\n        <ion-card-content>\n          The number of Delivered is:\n          <br/>\n          <h1 style=\"font-size: 40px; font-weight:900;\">10</h1>\n          <br/>\n          <ion-label (click)=\"delivered_page()\">Detail</ion-label>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map