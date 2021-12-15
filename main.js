(self["webpackChunkAdmin"] = self["webpackChunkAdmin"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 457:
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/Storage */ 7359);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);





const TOKEN_KEY = 'auth-token';
let AdminService = class AdminService {
    constructor(router, storage, http) {
        this.router = router;
        this.storage = storage;
        this.http = http;
        this.number_user = { "Response": 10 };
        this.number_product = { "Response": 10 };
        this.number_transactions = { "Response": 10 };
        this.currentUserValue = false;
    }
    login(user) {
        if (user.email == "gowthamraguvaran@gmail.com" && user.password == "gowthamvdm") {
            // this.storage.set(TOKEN_KEY,"d026974be5f64942d676696f3336fcac14fa713d").then(() => {
            //   console.log("token stored successfully")
            // });
            this.login_message = "successfully login into application";
            this.auth_boolean = true;
        }
        else {
            this.login_message = "cannot able to login";
            this.auth_boolean = false;
        }
    }
    logout() {
        // return this.storage.remove(TOKEN_KEY).then(() => {
        //   console.log("token deleted successfully")
        //   this.auth_boolean=false
        // });
    }
    numberOfUsers() {
        return this.http.get("https://0a4a-157-51-136-170.ngrok.io/authentication/get/all_user");
    }
    numberOfProducts() {
        return this.http.get("https://0a4a-157-51-136-170.ngrok.io/authentication/admin/orderitem/get");
    }
    numberOfTransactions() {
        return this.http.get("https://0a4a-157-51-136-170.ngrok.io/authentication/user/ordered/item/get");
    }
    findAllUsers() {
        //  this.storage.get(TOKEN_KEY).then(res => {
        //     if (res) {
        //       this.httpOptions = {
        //         headers: new HttpHeaders({
        //             'Authorization': 'token ' + res
        //         })
        //       };
        //       return this.http.get("http://0a4a-157-51-136-170.ngrok.io/authentication/get/all_user");
        //     }
        //   })
        return this.http.get("https://0a4a-157-51-136-170.ngrok.io/authentication/get/all_user");
    }
    findAllProducts() {
        return this.http.get("https://0a4a-157-51-136-170.ngrok.io/authentication/admin/orderitem/get");
    }
    createProduct(product) {
        const uploadData = new FormData(); // declar form object
        uploadData.append('item_name', product.item_name);
        uploadData.append('img_file', product.img_file);
        uploadData.append('price', product.price);
        uploadData.append('explanation', product.explanation);
        return this.http.post("https://0a4a-157-51-136-170.ngrok.io/authentication/admin/orderitem/post", product);
    }
    updateProduct(product) {
        return this.updateproduct;
    }
    deleteProduct(product) {
        return this.deleteproduct;
    }
    //transactions
    findAllTransactions() {
        return this.http.get("https://0a4a-157-51-136-170.ngrok.io/authentication/user/ordered/item/get");
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router },
    { type: _ionic_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AdminService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardPageModule)
    },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 8524)).then(m => m.UserPageModule)
    },
    {
        path: 'product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_product_product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 1589)).then(m => m.ProductPageModule)
    },
    {
        path: 'transaction',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transaction_transaction_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transaction/transaction.module */ 9160)).then(m => m.TransactionPageModule)
    },
    {
        path: 'delivered',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_delivered_delivered_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./delivered/delivered.module */ 164)).then(m => m.DeliveredPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _product_model_product_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-model/product-model.component */ 1804);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/Storage */ 7359);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ 6321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _product_model_product_model_component__WEBPACK_IMPORTED_MODULE_1__.ProductModelComponent],
        entryComponents: [],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__.FileUploadModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _ionic_Storage__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot()],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__.HashLocationStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1804:
/*!**********************************************************!*\
  !*** ./src/app/product-model/product-model.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModelComponent": () => (/* binding */ ProductModelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_model_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-model.component.html */ 5178);
/* harmony import */ var _product_model_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-model.component.scss */ 1157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ 457);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ 6321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9923);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);










let ProductModelComponent = class ProductModelComponent {
    constructor(adminService, navParams, modalCtrl, alertCtrl, toastCtrl, formBuilder, router) {
        this.adminService = adminService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.fileUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__.FileUploader({});
        this.hasBaseDropZoneOver = false;
        // Object.assign(this.product, navParams.get('selectedProduct'));
        this.validations_form = this.formBuilder.group({
            item_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            explanation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
        });
    }
    ngOnInit() { }
    closeModal() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
    saveProduct() {
        // if(!this.product.id){
        //   this.createProduct();
        // }else{
        //   this.updateProduct();
        // }
    }
    createProduct() {
        // this.adminService.createProduct(this.product).subscribe(data => {
        //   this.presentToast('Product is created successfully.', true);
        //   this.modalCtrl.dismiss({
        //     'success': true,
        //     'createdProduct': data
        //   });
        // }, err => {
        //   this.presentToast('Unexpected error occurred.', false);
        // })
    }
    updateProduct() {
        // this.adminService.updateProduct(this.product).subscribe(data => {
        //   this.presentToast('Product is updated successfully.', true);
        //   this.modalCtrl.dismiss({
        //     'success': true,
        //     'editedProduct': data
        //   });
        // }, err => {
        //   this.presentToast('Unexpected error occurred.', false);
        // })
    }
    getFiles() {
        return this.fileUploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    onSubmitLogin(data) {
        console.log(data);
        let files = this.getFiles();
        let requests = [];
        let formData = new FormData();
        files.forEach((file) => {
            formData.append('img_file', file.rawFile, file.name);
        });
        formData.append('item_name', data.item_name);
        formData.append('price', data.price);
        formData.append('explanation', data.explanation);
        requests.push(this.adminService.createProduct(formData));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(...requests).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'Confirmation',
                message: 'Are you sure to delete product?',
                buttons: [
                    {
                        text: 'Sure!',
                        // handler: () =>
                        //  {
                        //   this.adminService.deleteProduct(this.product).subscribe(() => {
                        //     this.presentToast('Product was deleted successfully', true);
                        //     this.modalCtrl.dismiss({
                        //       'success': true,
                        //       'deleted': true,
                        //       'editedProduct': this.product
                        //     });
                        //   }, err => {
                        //     console.log(err);
                        //     this.presentToast('Unexpected error occurred.', false);
                        //   });
                        // }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(msg, success) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                //Colors can be found from theme/variables.scss
                color: (success ? 'success' : 'danger'),
                duration: 3000,
            });
            toast.present();
        });
    }
};
ProductModelComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ProductModelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-product-model',
        template: _raw_loader_product_model_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_model_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductModelComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1157:
/*!************************************************************!*\
  !*** ./src/app/product-model/product-model.component.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.otpinput {\n  letter-spacing: 30px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 30px;\n  border: none;\n  background: white;\n}\n\n.white {\n  color: white;\n}\n\n.OTP-border ion-col div {\n  border-bottom: 1px solid;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  height: 120px;\n  width: 120px;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.transition {\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n}\n\n.btn-color {\n  color: #ffa000;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n\n.invoice-box {\n  max-width: 800px;\n  margin: auto;\n  padding: 30px;\n  border: 1px solid #eee;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  font-size: 16px;\n  line-height: 24px;\n  font-family: \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\n  color: #555;\n}\n\n.invoice-box table {\n  width: 100%;\n  line-height: inherit;\n  text-align: left;\n}\n\n.invoice-box table td {\n  padding: 5px;\n  vertical-align: top;\n}\n\n.invoice-box table tr td:nth-child(2) {\n  text-align: right;\n}\n\n.invoice-box table tr.top table td {\n  padding-bottom: 20px;\n}\n\n.btn-transition {\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n}\n\n.btn-transition1 {\n  background: linear-gradient(to right, #f57c00 14%, #ffca00 96%);\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.phoneCountry {\n  border: 1px solid gainsboro;\n  border-radius: 3px;\n  margin-left: 2px;\n}\n\n.phoneAuthGrid {\n  border: 1px solid #ccc;\n  margin: 0 7px;\n  border-radius: 3px;\n}\n\n.invoice-box table tr.top table td.title {\n  font-size: 45px;\n  line-height: 45px;\n  color: #333;\n}\n\n.invoice-box table tr.information table td {\n  padding-bottom: 40px;\n}\n\n.invoice-box table tr.heading td {\n  background: #eee;\n  border-bottom: 1px solid #ddd;\n  font-weight: bold;\n}\n\n.invoice-box table tr.details td {\n  padding-bottom: 20px;\n}\n\n.invoice-box table tr.item td {\n  border-bottom: 1px solid #eee;\n}\n\n.invoice-box table tr.item.last td {\n  border-bottom: none;\n}\n\n.invoice-box table tr.total td:nth-child(2) {\n  border-top: 2px solid #eee;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 600px) {\n  .invoice-box table tr.top table td {\n    width: 100%;\n    display: block;\n    text-align: center;\n  }\n\n  .invoice-box table tr.information table td {\n    width: 100%;\n    display: block;\n    text-align: center;\n  }\n}\n\n/** RTL **/\n\n.rtl {\n  direction: rtl;\n  font-family: Tahoma, \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\n}\n\n.rtl table {\n  text-align: right;\n}\n\n.rtl table tr td:nth-child(2) {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFDSjtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFFO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURFO0VBQ0UsWUFBQTtBQUlKOztBQUFNO0VBQ0Usd0JBQUE7QUFHUjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFBSTtFQUNFLGlDQUFBO0FBRU47O0FBQ0U7RUFDRSwwQ0FBQTtBQUVKOztBQUFFO0VBQ0Usd0JBQUE7QUFHSjs7QUFERTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUlKOztBQUZFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFIRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFPSjs7QUFMRTtFQUNFLGlCQUFBO0FBUUo7O0FBTkU7RUFDRSxjQUFBO0FBU0o7O0FBUEU7RUFDRSwrREFBQTtBQVVKOztBQVJFO0VBQ0UsY0FBQTtBQVdKOztBQVRFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVEU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdFQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVRFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFURTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVRFO0VBQ0UsaUJBQUE7QUFZSjs7QUFURTtFQUNFLG9CQUFBO0FBWUo7O0FBVkU7RUFDRSwrREFBQTtBQWFKOztBQVhFO0VBQ0UsK0RBQUE7QUFjSjs7QUFYRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBY0o7O0FBWkU7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBZ0JKOztBQWRFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWlCSjs7QUFkRTtFQUNFLG9CQUFBO0FBaUJKOztBQWRFO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBaUJKOztBQWRFO0VBQ0Usb0JBQUE7QUFpQko7O0FBZEU7RUFDRSw2QkFBQTtBQWlCSjs7QUFkRTtFQUNFLG1CQUFBO0FBaUJKOztBQWRFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQWlCSjs7QUFkRTtFQUNFO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQWlCTjs7RUFkRTtJQUNJLFdBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUFpQk47QUFDRjs7QUFkRSxVQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGdGQUFBO0FBZ0JKOztBQWJFO0VBQ0UsaUJBQUE7QUFnQko7O0FBYkU7RUFDRSxnQkFBQTtBQWdCSiIsImZpbGUiOiJwcm9kdWN0LW1vZGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vdHBpbnB1dCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMzBweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIC53aGl0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5PVFAtYm9yZGVyIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbi1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmdyaWQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltZy1sb2dvIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIC5maXJlLWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnRyYW5zaXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjU3YzAwIDE0JSwgI2ZmY2EwMCA5NiUpO1xyXG4gIH1cclxuICAuYnRuLWNvbG9yIHtcclxuICAgIGNvbG9yOiAjZmZhMDAwO1xyXG4gIH1cclxuICAuZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAuYnRuLXRyYW5zaXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjU3YzAwIDE0JSwgI2ZmY2EwMCA5NiUpO1xyXG4gIH1cclxuICAuYnRuLXRyYW5zaXRpb24xIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1N2MwMCAxNCUsICNmZmNhMDAgOTYlKTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBob25lQ291bnRyeSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIH1cclxuICAucGhvbmVBdXRoR3JpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAwIDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRyLnRvcCB0YWJsZSB0ZC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZvaWNlLWJveCB0YWJsZSB0ci5oZWFkaW5nIHRkIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIuZGV0YWlscyB0ZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRyLml0ZW0gdGR7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICB9XHJcbiAgXHJcbiAgLmludm9pY2UtYm94IHRhYmxlIHRyLml0ZW0ubGFzdCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG90YWwgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3AgdGFibGUgdGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmludm9pY2UtYm94IHRhYmxlIHRyLmluZm9ybWF0aW9uIHRhYmxlIHRkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qKiBSVEwgKiovXHJcbiAgLnJ0bCB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAucnRsIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAucnRsIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 5178:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-model/product-model.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Adding a product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"margin-top:100px;\"padding class=\"form-content\">\n  \n  <form [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmitLogin(validations_form.value)\">\n    <ion-grid>\n      <ion-row style=\"text-align: center;\">\n        <ion-col size=\"4\">\n          Product Name\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-input  type=\"text\" placeholder=\"Product Name\" formControlName=\"item_name\" ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"text-align: center;\">\n        <ion-col size=\"4\">\n          Product Image\n        </ion-col>\n        <ion-col size=\"8\">\n          <input type=\"file\" accept=\"image/*\" ng2FileSelect [uploader]=\"fileUploader\" />\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"text-align: center;\">\n        <ion-col size=\"4\">\n          Product Price\n        </ion-col>\n        <ion-col size=\"8\">\n            <ion-input  type=\"text\" placeholder=\"Price of product\" formControlName=\"price\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"text-align: center;\">\n        <ion-col size=\"4\">\n          Product Explanation\n        </ion-col>\n        <ion-col size=\"8\">\n            <ion-input  type=\"text\" placeholder=\"Product Explanation\" formControlName=\"explanation\" ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"text-align:center ;cursor: pointer;\">\n        <ion-col>\n          <ion-button size=\"large\" type=\"submit\" expand=\"block\">Create Product</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </form>\n    \n</ion-content>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map