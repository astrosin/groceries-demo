(self["webpackChunkAdmin"] = self["webpackChunkAdmin"] || []).push([["src_app_product_product_module_ts"],{

/***/ 6329:
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageRoutingModule": () => (/* binding */ ProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page */ 1891);




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ 1589:
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageModule": () => (/* binding */ ProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 6329);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page */ 1891);







let ProductPageModule = class ProductPageModule {
};
ProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPageRoutingModule
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_1__.ProductPage]
    })
], ProductPageModule);



/***/ }),

/***/ 1891:
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product.page.html */ 3649);
/* harmony import */ var _product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page.scss */ 4986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ 457);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _product_model_product_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-model/product-model.component */ 1804);







let ProductPage = class ProductPage {
    constructor(adminService, modalCtrl) {
        this.adminService = adminService;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.findAllProducts();
    }
    ionViewWillEnter() {
        this.adminService.findAllProducts().subscribe(res => {
            this.data = res;
            for (let i = 0; i < this.data.length; i++) {
                this.data[i].img_file = "https://0a4a-157-51-136-170.ngrok.io" + this.data[i].img_file;
            }
            console.log(this.data);
            //  this.productList = data;
        });
    }
    findAllProducts() {
        this.adminService.findAllProducts().subscribe(res => {
            this.data = res;
            for (let i = 0; i < this.data.length; i++) {
                this.data[i].img_file = "https://0a4a-157-51-136-170.ngrok.io" + this.data[i].img_file;
            }
            console.log(this.data);
            //  this.productList = data;
        });
    }
    prouductAdModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    presentModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const modal = yield this.modalCtrl.create({
                component: _product_model_product_model_component__WEBPACK_IMPORTED_MODULE_3__.ProductModelComponent,
                componentProps: {
                    'selectedProduct': item
                }
            });
            modal.onWillDismiss().then((params) => {
                this.findAllProducts();
            });
            return yield modal.present();
        });
    }
    saveProduct(params) {
        const { createdProduct, editedProduct, success, deleted } = params.data;
        if (success !== true) {
            return;
        }
        if (createdProduct) {
            this.productList.push(createdProduct);
            return;
        }
        let itemIndex = this.productList.findIndex(item => item.id == editedProduct.id);
        if (itemIndex === -1) {
            return;
        }
        if (deleted === true) {
            this.productList.splice(itemIndex, 1);
        }
        else {
            this.productList[itemIndex] = editedProduct;
        }
    }
};
ProductPage.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product',
        template: _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductPage);



/***/ }),

/***/ 4986:
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3649:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Product List</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"presentModal()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <ion-list>\n        <div *ngFor=\"let item of data\">\n          <ion-item (click)=\"presentModal(item)\" detail>\n            <ion-card class=\"welcome-card\" style=\"height:300px;width:300px;\">\n              <ion-slides pager=\"true\">\n                <ion-slide >\n                  <img src=\"{{item.img_file}}\" style=\"height:300px;width:300px;\" />\n                </ion-slide>\n              </ion-slides>\n            </ion-card>\n            <ion-icon name=\"pricetag\" slot=\"start\" color=\"danger\"></ion-icon>\n            <ion-label>\n              <h2>Item Name:{{item.item_name}}</h2>\n              <h2>Price :{{item.price}}</h2>\n              <h2>Explanation :{{item.explanation}}</h2>\n              <h2></h2>\n              <!-- <img src={{item.img_file}}></img> -->\n              <h2>ordered added date:{{item.timestamp}}</h2>\n              <p></p>\n            </ion-label>\n          </ion-item>\n        </div>\n      </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_product_product_module_ts.js.map