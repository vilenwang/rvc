(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _f_swatch_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./f/swatch-preview */ "./assets/js/theme/f/swatch-preview.js");
/* harmony import */ var _f_size_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./f/size-preview */ "./assets/js/theme/f/size-preview.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Brand = function (_CatalogPage) {
    _inherits(Brand, _CatalogPage);

    function Brand() {
        _classCallCheck(this, Brand);

        return _possibleConstructorReturn(this, _CatalogPage.apply(this, arguments));
    }

    Brand.prototype.onReady = function onReady() {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }

        // Load swatches onto product grid if enabled
        if (this.context.enableSwatches) {
            Object(_f_swatch_preview__WEBPACK_IMPORTED_MODULE_4__["default"])();
        }

        if (this.context.enableSizes) {
            Object(_f_size_preview__WEBPACK_IMPORTED_MODULE_5__["default"])();
        }
    };

    Brand.prototype.initFacetedSearch = function initFacetedSearch() {
        var _this2 = this;

        var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        var productsPerPage = this.context.brandProductsPerPage;
        var requestOptions = {
            template: {
                productListing: 'brand/product-listing',
                sidebar: 'brand/sidebar'
            },
            config: {
                shop_by_brand: true,
                brand: {
                    products: {
                        limit: productsPerPage
                    }
                }
            },
            showMore: 'brand/show-more'
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
                scrollTop: 0
            }, 100);

            // Load swatches onto filtered product grid if enabled
            if (_this2.context.enableSwatches) {
                Object(_f_swatch_preview__WEBPACK_IMPORTED_MODULE_4__["default"])();
            }

            if (_this2.context.enableSizes) {
                Object(_f_size_preview__WEBPACK_IMPORTED_MODULE_5__["default"])();
            }
        });
    };

    return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ })

}]);
//# sourceMappingURL=theme-bundle.chunk.18.js.map
