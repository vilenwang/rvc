(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/f/size-preview.js":
/*!*******************************************!*\
  !*** ./assets/js/theme/f/size-preview.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.equalizer */ "./node_modules/foundation-sites/js/foundation/foundation.equalizer.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
    var $src = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-sizes');

    function showSizePreview() {
        var _this = this;

        var productId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-id');
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, { template: 'f/swatches/product-sizes' }, function (err, resp) {
            var sizeContent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.parseHTML(resp);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).html(sizeContent);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation('equalizer', 'reflow');
        });
    }

    $src.each(showSizePreview);
});

/***/ }),

/***/ "./assets/js/theme/f/swatch-preview.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/f/swatch-preview.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.equalizer */ "./node_modules/foundation-sites/js/foundation/foundation.equalizer.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_equalizer__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
    var $src = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-swatches');

    function showSwatchPreview() {
        var _this = this;

        var productId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-id');
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, { template: 'f/swatches/product-swatches' }, function (err, resp) {
            var swatchContent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.parseHTML(resp);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).html(swatchContent);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation('equalizer', 'reflow');
        });
    }

    $src.each(showSwatchPreview);
});

/***/ }),

/***/ "./assets/js/theme/f/vendor/instafeed.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/f/vendor/instafeed.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
Copyright 2017 blackCICADA

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;(function () {
    "use strict";

    function Instafeed(options) {
        this.uuid = "instafeed".concat(uuidv4().replace(/-/g, ""));
        if (!options) throw new Error("InstafeedOptionsError: Missing options.");
        this.url = "https://api.instagram.com/v1/";

        switch (options.get) {
            case "tag":
                if (typeof options.tagName !== "string") throw new Error("InstafeedOptionsError: Missing or invalid option \"tagName\".");
                this.url = this.url.concat("tags/", encodeURIComponent(options.tagName));
                break;

            case "location":
                if (typeof options.locationId !== "string" || !/^\d+$/.test(options.locationId)) throw new Error("InstafeedOptionsError: Missing or invalid option \"locationId\".");
                this.url = this.url.concat("locations/", options.locationId);
                break;

            default:
                if (typeof options.get !== "undefined" && options.get !== "user") throw new Error("InstafeedOptionsError: Invalid option \"get\".");
                this.url = this.url.concat("users/");

                if (typeof options.userId === "undefined") {
                    this.url = this.url.concat("self");
                } else {
                    if (typeof options.userId !== "string" || !/^\d+$/.test(options.userId)) throw new Error("InstafeedOptionsError: Invalid option \"userId\".");
                    this.url = this.url.concat(options.userId);
                }
        }

        if (typeof options.accessToken !== "string") throw new Error("InstafeedOptionsError: Missing or invalid option \"accessToken\".");
        this.url = this.url.concat("/media/recent?access_token=", encodeURIComponent(options.accessToken), "&callback=", this.uuid, ".parse");
        this.nextUrl = "";

        if (typeof options.limit !== "undefined") {
            if (typeof options.limit !== "number") throw new Error("InstafeedOptionsError: Invalid option \"limit\".");
            if (options.limit) this.url = this.url.concat("&count=", options.limit.toString());
        }

        if (typeof options.sort === "undefined") {
            this.sort = "none";
        } else {
            if (!/^(?:none|(?:most|least)-(?:recent|liked|commented)|random)$/.test(options.sort)) throw new Error("InstafeedOptionsError: Invalid option \"sort\".");
            this.sort = options.sort;
        }

        if (typeof options.imageTemplate === "undefined") {
            this.imageTemplate = "<img src=\"{{image}}\" width=\"{{width}}\" height=\"{{height}}\">";
        } else {
            if (typeof options.imageTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"imageTemplate\".");
            this.imageTemplate = options.imageTemplate;
        }

        if (typeof options.videoTemplate === "undefined") {
            this.videoTemplate = "<img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\">";
        } else {
            if (typeof options.videoTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"videoTemplate\".");
            this.videoTemplate = options.videoTemplate;
        }

        if (typeof options.carouselFrameTemplate === "undefined") {
            this.carouselFrameTemplate = "<img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\">";
        } else {
            if (typeof options.carouselFrameTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"carouselFrameTemplate\".");
            this.carouselFrameTemplate = options.carouselFrameTemplate;
        }

        if (typeof options.carouselImageTemplate === "undefined") {
            this.carouselImageTemplate = "";
        } else {
            if (typeof options.carouselImageTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"carouselImageTemplate\".");
            this.carouselImageTemplate = options.carouselImageTemplate;
        }

        if (typeof options.carouselVideoTemplate === "undefined") {
            this.carouselVideoTemplate = "";
        } else {
            if (typeof options.carouselVideoTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"carouselVideoTemplate\".");
            this.carouselVideoTemplate = options.carouselVideoTemplate;
        }

        switch (options.imageResolution) {
            case "low-resolution":
                this.imageResolution = "low_resolution";
                break;

            case "standard-resolution":
                this.imageResolution = "standard_resolution";
                break;

            default:
                if (typeof options.imageResolution === "undefined") {
                    this.imageResolution = "thumbnail";
                } else if (options.get !== "thumbnail") {
                    throw new Error("InstafeedOptionsError: Invalid option \"imageResolution\".");
                }
        }

        switch (options.videoResolution) {
            case "low-bandwidth":
                this.videoResolution = "low_bandwidth";
                break;

            case "low-resolution":
                this.videoResolution = "low_resolution";
                break;

            default:
                if (typeof options.videoResolution === "undefined") {
                    this.videoResolution = "standard_resolution";
                } else if (options.get !== "standard-resolution") {
                    throw new Error("InstafeedOptionsError: Invalid option \"videoResolution\".");
                }
        }

        if (typeof options.relativeScheme === "undefined") {
            this.relativeScheme = false;
        } else {
            if (typeof options.relativeScheme !== "boolean") throw new Error("InstafeedOptionsError: Invalid option \"relativeScheme\".");
            this.relativeScheme = options.relativeScheme;
        }

        if (typeof options.target === "undefined") {
            this.target = "instafeed";
        } else {
            if (typeof options.target !== "string") throw new Error("InstafeedOptionsError: Invalid option \"target\".");
            this.target = options.target;
        }

        if (typeof options.mock === "undefined") {
            this.mock = false;
        } else {
            if (typeof options.mock !== "boolean") throw new Error("InstafeedOptionsError: Invalid option \"mock\".");
            this.mock = options.mock;
        }

        this.filter = typeof options.filter === "function" ? options.filter : null;
        this.onBefore = typeof options.onBefore === "function" ? options.onBefore : null;
        this.onAfter = typeof options.onAfter === "function" ? options.onAfter : null;
        this.onSuccess = typeof options.onSuccess === "function" ? options.onSuccess : null;
        this.onError = typeof options.onError === "function" ? options.onError : null;
    }

    Instafeed.prototype.run = function (nextUrl) {
        if (typeof window === "undefined" || !window) throw new Error("InstafeedRunError: No window object available.");
        window[this.uuid] = {};
        window[this.uuid].parse = parse.bind(this);
        if (typeof document === "undefined" || !document) throw new Error("InstafeedRunError: No document object available.");
        var script = document.createElement("script");
        script.id = this.uuid;
        script.src = nextUrl || this.url;

        script.onerror = function () {
            document.head.removeChild(document.getElementById(this.uuid));
            this.onError("InstafeedConnectionError: Connection to Instagram failed.");
        }.bind(this);

        document.head.appendChild(script);
    };

    Instafeed.prototype.hasNext = function () {
        return this.nextUrl.length > 0;
    };

    Instafeed.prototype.next = function () {
        if (this.hasNext()) {
            this.run(this.nextUrl);
            this.nextUrl = "";
        }
    };

    function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/x/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).replace("y", ((Math.random() * 16 | 0) & 0x3 | 0x8).toString(16));
    }

    function parse(response) {
        document.head.removeChild(document.getElementById(this.uuid));
        delete window[this.uuid];

        try {
            if (!response || !response.meta || typeof response.meta.code !== "number") throw new Error();
            if (response.meta.code !== 200) throw new Error(typeof response.meta.error_type === "string" && typeof response.meta.error_message === "string" ? "InstafeedInstagramAPIError: \"".concat(response.meta.error_type, ": ", response.meta.error_message, "\".") : "InstafeedConnectionError: Connection to Instagram failed.");

            if (!this.mock) {
                if (!response.data) throw new Error();

                if (this.sort === "random") {
                    for (var i = response.data.length - 1; i; i--) {
                        var randomIndex = Math.floor(Math.random() * (i + 1));
                        var randomValue = response.data[i];
                        response.data[i] = response.data[randomIndex];
                        response.data[randomIndex] = randomValue;
                    }
                } else if (this.sort !== "none") {
                    var sortArray = this.sort.split("-");
                    var reverse = sortArray[0] === "least";
                    var property;

                    switch (sortArray[1]) {
                        case "recent":
                            property = "created_time";
                            break;

                        case "liked":
                            property = "likes.count";
                            break;

                        case "commented":
                            property = "comments.count";
                            break;
                    }

                    response.data.sort(function (a, b) {
                        var valueA = getObjectProperty(a, property);
                        var valueB = getObjectProperty(b, property);
                        if (valueA === null || valueB === null) throw new Error();
                        return valueA < valueB ^ reverse ? 1 : -1;
                    });
                }

                if (this.filter) {
                    response.data.forEach(function (data, i) {
                        if (!this.filter(data)) delete response.data[i];
                    }, this);
                }

                var div = document.createElement("div");

                response.data.forEach(function (data) {
                    if (typeof data.id !== "string" || typeof data.type !== "string" || !data.user || typeof data.user.id !== "string" || typeof data.user.username !== "string" || typeof data.user.full_name !== "string" || typeof data.user.profile_picture !== "string" || !data.images || typeof data.filter !== "string" || !data.likes || typeof data.likes.count !== "number" || typeof data.user_has_liked !== "boolean" || !data.comments || typeof data.comments.count !== "number" || !data.tags || typeof data.created_time !== "string" || typeof data.link !== "string") throw new Error();

                    var templateValues = {
                        id: data.id,
                        type: data.type,
                        userId: data.user.id,
                        username: data.user.username,
                        fullName: data.user.full_name,
                        profilePicture: data.user.profile_picture,
                        filter: data.filter,
                        likes: data.likes.count,
                        userHasLiked: data.user_has_liked ? "true" : "false",
                        comments: data.comments.count,
                        tags: JSON.stringify(data.tags),
                        createdTime: data.created_time,
                        link: data.link,
                        model: data
                    };

                    if (data.caption) {
                        if (typeof data.caption.text !== "string") throw new Error();
                        templateValues.caption = data.caption.text;
                    } else {
                        templateValues.caption = "";
                    }

                    if (data.location) {
                        if (typeof data.location.name !== "string" || typeof data.location.latitude !== "number" || typeof data.location.longitude !== "number") throw new Error();
                        templateValues.location = data.location.name;
                        templateValues.latitude = data.location.latitude.toString();
                        templateValues.longitude = data.location.longitude.toString();
                    } else {
                        templateValues.location = "";
                        templateValues.latitude = "";
                        templateValues.longitude = "";
                    }

                    var previewImage = data.images[this.imageResolution];
                    if (!previewImage || typeof previewImage.url !== "string" || typeof previewImage.width !== "number" || typeof previewImage.height !== "number") throw new Error();
                    if (this.relativeScheme) previewImage.url = previewImage.url.replace(/^https?:/, "");
                    previewImage.orientation = previewImage.width === previewImage.height ? "square" : previewImage.width > previewImage.height ? "landscape" : "portrait";

                    if (data.type === "image") {
                        templateValues.image = previewImage.url;
                        templateValues.width = previewImage.width.toString();
                        templateValues.height = previewImage.height.toString();
                        templateValues.orientation = previewImage.orientation;
                        if (!data.users_in_photo) throw new Error();
                        templateValues.usersInPhoto = JSON.stringify(data.users_in_photo);
                        div.innerHTML = div.innerHTML.concat(parseTemplate(this.imageTemplate, templateValues));
                    } else {
                        templateValues.previewImage = previewImage.url;
                        templateValues.previewWidth = previewImage.width.toString();
                        templateValues.previewHeight = previewImage.height.toString();
                        templateValues.previewOrientation = previewImage.orientation;

                        if (data.type === "video") {
                            if (!data.videos) throw new Error();
                            var video = data.videos[this.videoResolution];
                            if (!video || typeof video.url !== "string" || typeof video.width !== "number" || typeof video.height !== "number") throw new Error();
                            templateValues.video = this.relativeScheme ? video.url.replace(/^https?:/, "") : video.url;
                            templateValues.width = video.width.toString();
                            templateValues.height = video.height.toString();
                            templateValues.orientation = video.width === video.height ? "square" : video.width > video.height ? "landscape" : "portrait";
                            div.innerHTML = div.innerHTML.concat(parseTemplate(this.videoTemplate, templateValues));
                        } else if (data.type === "carousel") {
                            if (!data.carousel_media) throw new Error();
                            templateValues.media = "";

                            data.carousel_media.forEach(function (carouselMedia) {
                                if (typeof carouselMedia.type !== "string") throw new Error();

                                var templateCarouselMedialValues = {
                                    type: carouselMedia.type
                                };

                                switch (carouselMedia.type) {
                                    case "image":
                                        if (!carouselMedia.images) throw new Error();
                                        var image = carouselMedia.images[this.imageResolution];
                                        if (!image || typeof image.url !== "string" || typeof image.width !== "number" || typeof image.height !== "number") throw new Error();
                                        templateCarouselMedialValues.image = this.relativeScheme ? image.url.replace(/^https?:/, "") : image.url;
                                        templateCarouselMedialValues.width = image.width.toString();
                                        templateCarouselMedialValues.height = image.height.toString();
                                        templateCarouselMedialValues.orientation = image.width === image.height ? "square" : image.width > image.height ? "landscape" : "portrait";
                                        if (!carouselMedia.users_in_photo) throw new Error();
                                        templateCarouselMedialValues.usersInPhoto = JSON.stringify(carouselMedia.users_in_photo);
                                        templateValues.media = templateValues.media.concat(parseTemplate(this.carouselImageTemplate, templateCarouselMedialValues));
                                        break;

                                    case "video":
                                        if (!carouselMedia.videos) throw new Error();
                                        var video = carouselMedia.videos[this.videoResolution];
                                        if (!video || typeof video.url !== "string" || typeof video.width !== "number" || typeof video.height !== "number") throw new Error();
                                        templateCarouselMedialValues.video = this.relativeScheme ? video.url.replace(/^https?:/, "") : video.url;
                                        templateCarouselMedialValues.width = video.width.toString();
                                        templateCarouselMedialValues.height = video.height.toString();
                                        templateCarouselMedialValues.orientation = video.width === video.height ? "square" : video.width > video.height ? "landscape" : "portrait";
                                        templateValues.media = templateValues.media.concat(parseTemplate(this.carouselVideoTemplate, templateCarouselMedialValues));
                                        break;
                                }
                            }, this);

                            div.innerHTML = div.innerHTML.concat(parseTemplate(this.carouselFrameTemplate, templateValues));
                        }
                    }
                }, this);

                if (this.onBefore) this.onBefore();
                var targetElement = document.getElementById(this.target);
                if (!targetElement) throw new Error("InstafeedParseError: No target element found.");
                for (var i = div.childNodes.length; i; i--) {
                    targetElement.appendChild(div.childNodes[0]);
                }if (this.onAfter) this.onAfter();
            }

            if (response.pagination && typeof response.pagination.next_url === "string") this.nextUrl = response.pagination.next_url;
            if (this.onSuccess) this.onSuccess(response);
        } catch (e) {
            if (this.onError) this.onError(e.message.length ? e.message : "InstafeedParseError: Invalid response from Instagram.");
        }
    }

    function getObjectProperty(object, property) {
        var pieces = property.replace(/\[(\w+)\]/g, ".$1").split(".");

        while (pieces.length) {
            var piece = pieces.shift();
            if (object == null || !(piece in object)) return null;
            object = object[piece];
        }

        return object;
    }

    function parseTemplate(template, values) {
        var pattern = /(?:\{{2})(\w+(?:\.\w+|\[\w+\])*)(?:\}{2})/;

        while (pattern.test(template)) {
            var key = template.match(pattern)[1];
            var value = getObjectProperty(values, key);
            if (value === null) value = "";

            template = template.replace(pattern, function () {
                return value;
            });
        }

        return template;
    }

    (function (root, factory) {
        if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === "object" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
            module.exports = factory();
        } else {
            root.Instafeed = factory();
        }
    })(this, function () {
        return Instafeed;
    });
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _f_swatch_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f/swatch-preview */ "./assets/js/theme/f/swatch-preview.js");
/* harmony import */ var _f_size_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f/size-preview */ "./assets/js/theme/f/size-preview.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Instafeed = __webpack_require__(/*! ./f/vendor/instafeed */ "./assets/js/theme/f/vendor/instafeed.js");

var Home = function (_PageManager) {
    _inherits(Home, _PageManager);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Home.prototype.onReady = function onReady() {
        var _this2 = this;

        // Load swatches onto product grid if enabled
        window.onload = function () {
            if (_this2.context.enableSwatches) {
                // window.onload is not being picked up by Safari,
                // but it is stopping the page delay at least for now.
                Object(_f_swatch_preview__WEBPACK_IMPORTED_MODULE_1__["default"])();
            }

            if (_this2.context.enableSizes) {
                // window.onload is not being picked up by Safari,
                // but it is stopping the page delay at least for now.
                Object(_f_size_preview__WEBPACK_IMPORTED_MODULE_2__["default"])();
            }
        };

        if (this.context.showInstagramFeed && this.context.instagramAccessToken) {
            var instafeed = new Instafeed({
                accessToken: this.context.instagramAccessToken,
                resolution: 'standard_resolution',
                limit: this.context.instagramPostsCount,
                imageTemplate: '<div class=\"instagramFeed-post\"><div class=\"instagramFeed-image\"><img src=\"{{model.images.standard_resolution.url}}\"></div><div class=\"instagramFeed-hover\"><a href=\"{{link}}\" target="_blank"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>',
                videoTemplate: '<div class=\"instagramFeed-post\"><div class=\"instagramFeed-image\"><img src=\"{{model.images.standard_resolution.url}}\"></div><div class=\"instagramFeed-hover\"><a href=\"{{link}}\" target="_blank"><div class=\"instagramFeed-meta\"><div class=\"instagramFeed-caption\">{{caption}} <span class=\"instagramFeed-likes\"><i class=\"far fa-heart\"></i> {{likes}}</span></div></div></div></a></div>',
                filter: function filter(image) {
                    return image.type.indexOf('image') >= 0;
                },
                onSuccess: function onSuccess() {
                    return jquery__WEBPACK_IMPORTED_MODULE_3___default()('.instagramContainer').show();
                }
            });

            instafeed.run();
        }
    };

    return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.10.js.map
