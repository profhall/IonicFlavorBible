webpackJsonp([0],{

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams, afdb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afdb = afdb;
        this.getDataFromFirebase();
        this.createABCList();
        //this.list = afdb.list("/A/")
        this.afdb.list('/').valueChanges().subscribe(function (data) {
            _this.testarray = data;
        });
        /**this.testarray = {
          0: [
            {
              name: 'one',
              beach: 'green'
            },
            {name: 'two'},
            {name: 'three'},
            {name: 'four'}
          ],
          1: [
            {
              name: 'one',
              beach: 'green'
            },
            {name: 'two'},
            {name: 'three'},
            {name: 'four'}
          ]
        }**/
    }
    HomePage.prototype.setFilteredItems = function (searchterm) {
        if (searchterm != "") {
            this.items = this.filterItems(searchterm);
            this.length = this.filterItems(searchterm).length;
            this.chosenLetter = null;
            this.selectedItem = null;
        }
        else {
            this.items = this.getDataFromFirebase("A");
            //this.length = this.getDataFromFirebase("A").
        }
        console.log(this.items);
    };
    HomePage.prototype.filterItems = function (searchterm) {
        var _this = this;
        this.list = [];
        var ingredient = false;
        var dish = false;
        var affintiy = false;
        this.testarray.filter(function (item) {
            for (var i = 0; i < item.length; i++) {
                if (item[i]) {
                    if (item[i].name && item[i].name.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        //console.log(item[i].name.toLowerCase().indexOf(searchterm) + ": " + item[i].name)
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Volume && item[i].Volume.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Flavor && item[i].Flavor.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].What_it_is && item[i].What_it_is.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Techniques && item[i].Techniques.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Season && item[i].Season.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Nutritional_profile && item[i].Nutritional_profile.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Whats_healthful_about_it && item[i].Whats_healthful_about_it.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Tips && item[i].Tips.toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                        _this.list.push(item[i]);
                    }
                    else if (item[i].Ingredients) {
                        for (var k = 0; k < item[i].Ingredients.length; k++) {
                            if (item[i].Ingredients[k].toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                                //console.log(item[i].Ingredients[k].toLowerCase())
                                ingredient = true;
                            }
                        }
                        if (ingredient == true) {
                            _this.list.push(item[i]);
                            console.log("Added From Ingredient: " + item[i].name);
                            ingredient = false;
                        }
                    }
                    else if (item[i].Dishes) {
                        for (var k = 0; k < item[i].Dishes.length; k++) {
                            if (item[i].Dishes[k].toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                                dish = true;
                            }
                        }
                        if (dish == true) {
                            _this.list.push(item[i]);
                            console.log("Added From Dishes: " + item[i].name);
                            dish = false;
                        }
                    }
                    else if (item[i].Flavor_Affinities) {
                        for (var k = 0; k < item[i].Flavor_Affinities.length; k++) {
                            if (item[i].Flavor_Affinities[k].toLowerCase().indexOf(searchterm.toLowerCase()) > -1) {
                                //console.log(item[i].Ingredients[k].toLowerCase())
                                affinity = true;
                            }
                        }
                        if (affintiy == true) {
                            _this.list.push(item[i]);
                            console.log("Added From Affinities " + item[i].name);
                            affinity = false;
                        }
                    }
                }
            }
        });
        return this.list;
    };
    HomePage.prototype.getDataFromFirebase = function (letter) {
        var _this = this;
        console.log(letter);
        this.selectedItem = null;
        this.BR = null;
        this.FA = null;
        this.dishes = null;
        if (letter) {
            this.afdb.list('/' + letter + '/').valueChanges().subscribe(function (data) {
                //
                _this.chosenLetter = letter;
                _this.items = data;
                _this.length = data.length;
            });
        }
        else {
            this.afdb.list('/A/').valueChanges().subscribe(function (data) {
                //console.log(JSON.stringify(data));
                _this.chosenLetter = 'A';
                _this.items = data;
                _this.length = data.length;
            });
        }
        //this.icon= this.icons[Math.floor(Math.random() * this.icons.length)]
    };
    HomePage.prototype.itemTapped = function (event, item) {
        this.selectedItem = item;
        if (Object.keys(this.selectedItem).length > 1) {
            this.MoreItems = "yes";
        }
        else {
            this.MoreItems = null;
        }
        //this.chosenLetter = null
        /**
         * var icons =
          ['https://www.maggi.ph/uploads/recipes/featured/Pinakbet_CL__580x387.jpg',
            'http://1larwpdbnvqpcz84vezsi9nu.wpengine.netdna-cdn.com/wp-content/uploads/2014/03/Veggie-heart.jpg',
            'https://c1.staticflickr.com/5/4180/34249439296_a0eec074a4_c.jpg',
            'https://dish-environment-prod-contentbucket-10u8bszryovz3.s3.amazonaws.com/assets/s3fs-public/styles/content_image_medium/public/102368474_Grilled-veggies-on-grilled-pizza_Photo-by-Meredith.jpg?itok=QqcywVvN',
            'https://www.williams-sonoma.com/wsimgs/ab/images/dp/recipe/201803/0035/img4l.jpg',
            'https://blogs.webmd.com/food-and-nutrition/files/2017/11/wpid-veggies-raw.jpg',
            'http://www.glowkitchen.com/wp-content/uploads/2014/12/rawbur2.jpg',
            'http://goveganwith.me/wp-content/uploads/2017/08/go-03-1.png'
          ];**/
        console.log(Object.keys(this.selectedItem));
        //this.image =icons[Math.floor(Math.random() * icons.length)];
        this.ingredients = this.selectedItem.Ingredients;
        this.dishes = this.selectedItem.Dishes;
        this.BR = this.selectedItem.Botenical_relatives;
        this.FA = this.selectedItem.Flavor_Affinities;
        if (this.selectedItem.Botenical_relatives && !this.BR.isArray) {
            this.BR = (this.selectedItem.Botenical_relatives).split(',');
        }
        console.log(this.selectedItem.Flavor_Affinities);
    };
    HomePage.prototype.createABCList = function () {
        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/Read an Write to file/FlavorBible/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>The Flavor Bible</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="false" style="background-color:black">\n  <ion-scroll scrollX="true" style="height:13%;">\n\n    <div class="scroll-item" style="background-color:black">\n\n      <ion-card *ngFor="let letter of letters" style="background-color: black ;" >\n        <h1 ion-text color="secondary" style="padding: .5cm;" (click)="getDataFromFirebase(letter)" >{{letter}}</h1>\n      </ion-card>\n\n    </div>\n  </ion-scroll>\n\n\n  <ion-grid>\n    <ion-searchbar #q\n      [animated] = true\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="setFilteredItems(q.value)"\n      (ionCancel)="onCancel($event)"\n      (keyup.enter)="search(q.value)">\n    </ion-searchbar>\n    <ion-row *ngIf="selectedItem"  style="max-height: 80%; ">\n\n      <ion-col  col-12 style="height: inherit;">\n\n        <h5 ion-text color="secondary">{{selectedItem.name}}</h5>\n\n        <ion-card  *ngIf="MoreItems" style=" height: 88%;overflow: scroll;">\n          <ion-card-content color="secondary"  style="height: auto;background-color: black ;  " >\n            <span *ngIf="selectedItem.Season">\n              <b>Season:</b> {{selectedItem.Season}} <br>\n            </span>\n            <span *ngIf="selectedItem.What_it_is">\n              <b>What is it:</b> {{selectedItem.What_it_is}} <br>\n            </span>\n            <span *ngIf="selectedItem.Whats_healthful_about_it">\n              <b>Whats healthful about it:</b> {{selectedItem.Whats_healthful_about_it}} <br>\n            </span>\n\n            <hr>\n            <span *ngIf="selectedItem.Flavor">\n              <b>Flavor:</b> {{selectedItem.Flavor}}<br>\n            </span>\n            <span *ngIf="selectedItem.Volume">\n              <b>Volume: </b>{{selectedItem.Volume}} <br>\n            </span>\n            <hr>\n\n            <span *ngIf="selectedItem.Nutritional_profile">\n              <b>Nutritional Profile:</b> {{selectedItem.Nutritional_profile}} <br>\n            </span>\n            <span *ngIf="selectedItem.Calories">\n              <b>Calories:</b> {{selectedItem.Calories}} <br>\n            </span>\n            <span *ngIf="selectedItem.Protein">\n              <b>Protein:</b> {{selectedItem.Protein}} <br>\n            </span>\n            <hr>\n\n            <span *ngIf="selectedItem.Possible_Substitute">\n              <b>Possible Substitute:</b> {{selectedItem.Possible_Substitute}}<br>\n            </span>\n            <span *ngIf="selectedItem.Techniques">\n              <b>Techniques:</b> {{selectedItem.Techniques}} <br>\n            </span>\n            <span *ngIf="selectedItem.Ratio">\n              <b>Ratio:</b> {{selectedItem.Ratio}} <br>\n            </span>\n            <span *ngIf="selectedItem.Timing">\n              <b>Timing:</b> {{selectedItem.Timing}}<br>\n            </span>\n            <span *ngIf="selectedItem.Tips">\n              <b>Tips:</b> {{selectedItem.Tips}} <br>\n            </span>\n            <hr>\n\n            <span *ngIf="ingredients">Pair With These <b> {{ingredients.length}} Ingredients  </b></span>\n              <ion-list *ngIf="ingredients" style="max-height:20vh;overflow: scroll;background-color: ;">\n                <ion-item color="secondary" style="" text-wrap *ngFor="let ingredient of ingredients; let i= index">\n\n                    {{i+1}}. {{ingredient}}\n\n                </ion-item>\n              </ion-list>\n            <hr>\n\n            <span *ngIf="dishes"><b> {{dishes.length}} Dishes  </b></span>\n            <ion-list *ngIf="dishes" style="max-height:20vh;overflow: scroll;background-color: ;">\n              <ion-item color="secondary"  text-wrap *ngFor="let dish of dishes; let i= index">\n\n                {{i+1}}. {{dish}}\n\n              </ion-item>\n            </ion-list>\n            <hr>\n\n            <span *ngIf="BR"><b>{{BR.length}} Botanical Relatives </b></span>\n            <ion-list *ngIf="BR" style="max-height:20vh;overflow: scroll;background-color: ;">\n              <ion-item color="secondary"  text-wrap *ngFor="let relative of BR; let i= index">\n\n                {{i+1}}. {{relative}}\n\n              </ion-item>\n            </ion-list>\n            <hr>\n\n            <span *ngIf="FA"><b>{{FA.length}} Flavor Affinties </b></span>\n            <ion-list *ngIf="FA" style="height: auto; max-height:20vh;overflow: scroll;background-color: ;">\n              <ion-item color="secondary" text-wrap *ngFor="let affinity of FA; let i= index">\n\n                {{i+1}}. {{affinity}}\n\n              </ion-item>\n            </ion-list>\n            <hr>\n\n            <span *ngIf="BR"><b>{{BR.length}} Botanical Relatives </b></span>\n            <ion-list *ngIf="BR" style="max-height:20vh;overflow: scroll;background-color: ;">\n              <ion-item color="secondary"  text-wrap *ngFor="let relative of BR; let i= index">\n\n                {{i+1}}. {{relative}}\n\n              </ion-item>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-card>\n\n\n        <br>\n      </ion-col>\n\n      <!--<ion-col style="height: inherit%; ">\n        <img style=" height: auto; width: 100%" src="{{image}}"/>\n      </ion-col>-->\n    </ion-row>\n\n\n    <h1 ion-text color="secondary" > {{chosenLetter}} Flavors ({{length}}) </h1>\n\n    <ion-row  style="overflow: scroll; height:85%">\n      <ion-col>\n        <ion-list>\n          <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n            <!--<ion-icon [name]="" item-start></ion-icon>-->\n            {{item.name}}\n            <!--<div class="item-note" item-end>\n              {{item.Flavor}}\n            </div>-->\n          </button>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/Read an Write to file/FlavorBible/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('information');
        //console.log(this.selectedItem)
        // Let's populate this page with some filler content for funzies
        this.information = {
            flavor: "The ingredient’s primary taste (e.g., bitter, salty, sour, sweet, umami), plus primary flavor notes and a brief description of its texture",
            technique: "Methods commonly used to prepare ingredient (and their general Timing and/or the recommended Ratio of ingredient to cooking liquid)",
            botanical_relatives: "Plant family of origin, which sometimes inspires ideas for pairing experiments",
            season: "The ingredient’s general seasonal peak(s) in North America, which may vary by location and climate",
            volume: "The ingredient’s relative flavor “loudness,” from quiet to loud",
            ingredients: "Other flavors or ingredients that you can pair with this flavoe",
            nutritional_profile: "The ingredient’s macronutrient content, i.e., percentage of calories from carbohydrates, fat, or protein, in decreasing order",
            protein: "Number of grams of protein per stated serving size",
            calories: "Number of calories per stated serving size",
            flavor_affinities: "These affinities will get you started on complex flavor combinations.",
            what_it_is: "A brief description of less common ingredients(and/or the nutritional category, e.g., grain, legume, vegetable",
            whats_healthful_about_it: "Key vitamins, minerals, other nutrients, and/or health benefits",
            gluten_free: "Whether grains are free of gluten, a protein composite found in wheat and related grains",
            tips: "Suggestions for preparing, using, and/or serving the ingredient",
            possible_substitutes: "In a pinch, other ingredients that may be substituted for the named ingredient (and vice versa)"
        };
        //var key = Object.keys(this.information)[0];
    }
    ListPage.prototype.itemSelected = function (item) {
        // That's right, we're pushing to ourselves!
        console.log(item);
        if (item.length > 9) {
            this.Title = item.replace(/_/g, " ");
        }
        else {
            this.Title = item;
        }
        console.log(this.information[item]);
        this.selectedItem = this.information[item];
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Applications/MAMP/htdocs/Read an Write to file/FlavorBible/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <h1 *ngIf="Title" text-center text-capitalize>{{Title}}</h1>\n      <span *ngIf="!Title">Matching Flavors Key</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="height: 100%" scroll="false">\n  <ion-grid style="height: 100%;">\n    <ion-row  style="max-height: 25%; width: 100%;background-color: white">\n\n      <ion-col text-center >\n        <h4  *ngIf="!selectedItem" style="font-size: 20px">\n          Below are the keys used throughout the Flavor Bible, select one to learn what it represents for each flavor.\n        </h4>\n\n        <h4 text-center *ngIf="selectedItem" style="font-size: 20px;padding-top: 15px;">\n          {{selectedItem}}\n        </h4>\n\n      </ion-col>\n    </ion-row>\n    <ion-row style="max-height: 75%; overflow: scroll;padding-top: 25px; background-color: black; ">\n      <ion-col style="">\n        <ion-list inset style="">\n          <ion-item ion-item  (click)=\'itemSelected("flavor")\'>\n            Flavor\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("season")\'>\n            Season\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("volume")\'>\n            Volume\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("tips")\'>\n            Tips\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("botanical_relatives")\'>\n            Botanical Relatives\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("flavor_affinities")\'>\n            Flavor Affinities\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("ingredients")\'>\n            Ingredients\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("gluten_free")\'>\n            Gluten-Free\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("technique")\'>\n            Techniques\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("calories")\'>\n            Calories\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("protein")\'>\n            Protein\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("nutritional_profile")\'>\n            Nutritional Profile\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("what_it_is")\'>\n            What it is\n          </ion-item>\n          <ion-item ion-item  (click)=\'itemSelected("whats_healthful_about_it")\'>\n            What\'s healthful about it\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/Read an Write to file/FlavorBible/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], ListPage);
    return ListPage;
    var _a, _b;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(296);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import the AF2 Module


//import { GoogleImageSearch } from 'free-google-image-search';
var firebaseConfig = {
    apiKey: "AIzaSyCYW-VO1imgLh96o3umE_Ex3ae01xxr1sk",
    authDomain: "the-flavor-bible.firebaseapp.com",
    databaseURL: "https://the-flavor-bible.firebaseio.com",
    projectId: "the-flavor-bible",
    storageBucket: "",
    messagingSenderId: "532840416879"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/Read an Write to file/FlavorBible/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Applications/MAMP/htdocs/Read an Write to file/FlavorBible/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map
