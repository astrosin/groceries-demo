(self["webpackChunkAdmin"] = self["webpackChunkAdmin"] || []).push([["src_app_transaction_transaction_module_ts"],{

/***/ 8873:
/*!***********************************************************!*\
  !*** ./src/app/transaction/transaction-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPageRoutingModule": () => (/* binding */ TransactionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.page */ 8753);




const routes = [
    {
        path: '',
        component: _transaction_page__WEBPACK_IMPORTED_MODULE_0__.TransactionPage
    }
];
let TransactionPageRoutingModule = class TransactionPageRoutingModule {
};
TransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransactionPageRoutingModule);



/***/ }),

/***/ 9160:
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPageModule": () => (/* binding */ TransactionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-routing.module */ 8873);
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page */ 8753);







let TransactionPageModule = class TransactionPageModule {
};
TransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionPageRoutingModule
        ],
        declarations: [_transaction_page__WEBPACK_IMPORTED_MODULE_1__.TransactionPage]
    })
], TransactionPageModule);



/***/ }),

/***/ 8753:
/*!*************************************************!*\
  !*** ./src/app/transaction/transaction.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPage": () => (/* binding */ TransactionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_transaction_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./transaction.page.html */ 2679);
/* harmony import */ var _transaction_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page.scss */ 6417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ 457);





let TransactionPage = class TransactionPage {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
        this.findAllTransactions();
    }
    ionViewWillEnter() {
    }
    findAllTransactions() {
        this.adminService.findAllTransactions().subscribe(res => {
            this.data = res;
            console.log(this.data);
            //  this.productList = data;
        });
    }
};
TransactionPage.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService }
];
TransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-transaction',
        template: _raw_loader_transaction_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_transaction_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TransactionPage);



/***/ }),

/***/ 6417:
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2679:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction/transaction.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Transaction List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor=\"let item of data\">\n      <ion-item>\n        <ion-card class=\"welcome-card\" style=\"height:300px;width:300px;\">\n          <ion-slides pager=\"true\">\n            <ion-slide >\n              <img src=\"{{item.img_file}}\" style=\"height:300px;width:300px;\" />\n            </ion-slide>\n          </ion-slides>\n        </ion-card>\n        <ion-icon name=\"pricetag\" slot=\"start\" color=\"danger\"></ion-icon>\n        <ion-label>\n          <h2>Item Name:{{item.item_name}}</h2>\n          <h2>Price :{{item.price}}</h2>\n          <h2>Explanation :{{item.explanation}}</h2>\n          <!-- <img src={{item.img_file}}></img> -->\n          <h2>product ordered date : {{item.timestamp}}</h2>\n          <h1>Ordered person</h1>\n          <h2>Name:{{item.order.name}}</h2>\n          <h2>Email:{{item.order.email}}</h2>\n          <h2>Mobile:{{item.order.mobile}}</h2>\n          <h2>address:{{item.order.address}}</h2>\n          <p></p>\n        </ion-label>\n        <ion-buttons slot=\"end\">\n          <ion-button  style=\"background-color: green;\" >\n            <ion-label>Delivered</ion-label>\n            <ion-icon style=\"font-size:50px\" name=\"log-in-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </div>\n  </ion-list>\n  \n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_transaction_transaction_module_ts.js.map