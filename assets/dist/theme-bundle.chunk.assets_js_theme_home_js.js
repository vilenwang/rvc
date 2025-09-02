"use strict";
(self["webpackChunkflair_camden"] = self["webpackChunkflair_camden"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/theme/f/api.js":
/*!**********************************!*\
  !*** ./assets/js/theme/f/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apiCall)
/* harmony export */ });
function apiCall(url, method, payload) {
  return fetch(url, {
    method: method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(function (response) {
    return response;
  });
}

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _f_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f/api */ "./assets/js/theme/f/api.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.handlePasswordlessLogin = function handlePasswordlessLogin(email, redirectUrl) {
    (0,_f_api__WEBPACK_IMPORTED_MODULE_2__["default"])('/login.php?action=passwordless_login', 'POST', {
      email: email,
      redirect_url: redirectUrl
    }).then(function () {
      $('.login-email-sent').css('visibility', 'visible');
    });
  };
  _proto.onReady = function onReady() {
    var _this = this;
    $('.login-form-email').on('submit', function (event) {
      event.preventDefault();
      var email = $('#login_email').val();
      var redirectUrl = _this.context.passwordlessRedirectUrl;
      _this.handlePasswordlessLogin(email, redirectUrl);
    });
    $('.login-email-redo').on('click', function (event) {
      event.preventDefault();
      $('.login-email-sent').css('visibility', 'hidden');
    });
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxPQUFPQSxDQUFDQyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0VBQ2xELE9BQU9DLEtBQUssQ0FBQ0gsR0FBRyxFQUFFO0lBQ2RDLE1BQU0sRUFBTkEsTUFBTTtJQUNORyxXQUFXLEVBQUUsYUFBYTtJQUMxQkMsT0FBTyxFQUFFO01BQ0wsY0FBYyxFQUFFO0lBQ3BCLENBQUM7SUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FBTztFQUNoQyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRO0VBQUEsRUFBQztBQUNqQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQ1g7QUFBQSxJQUVURSxJQUFJLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixJQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLElBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3JCRSx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDQyxLQUFLLEVBQUVDLFdBQVcsRUFBRTtJQUN4Q3RCLGtEQUFPLENBQUMsc0NBQXNDLEVBQUUsTUFBTSxFQUFFO01BQ3BEcUIsS0FBSyxFQUFMQSxLQUFLO01BQ0xFLFlBQVksRUFBRUQ7SUFDbEIsQ0FBQyxDQUFDLENBQUNaLElBQUksQ0FBQyxZQUFNO01BQ1ZjLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQztJQUN2RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFQLE1BQUEsQ0FFRFEsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDTkgsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ3pDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BRXRCLElBQU1ULEtBQUssR0FBR0csQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDTyxHQUFHLENBQUMsQ0FBQztNQUNyQyxJQUFNVCxXQUFXLEdBQUdLLEtBQUksQ0FBQ0ssT0FBTyxDQUFDQyx1QkFBdUI7TUFFeEROLEtBQUksQ0FBQ1AsdUJBQXVCLENBQUNDLEtBQUssRUFBRUMsV0FBVyxDQUFDO0lBQ3BELENBQUMsQ0FBQztJQUVGRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDeENBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJOLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUN0RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQVosSUFBQTtBQUFBLEVBeEI2QkQscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGFpci1jYW1kZW4vLi9hc3NldHMvanMvdGhlbWUvZi9hcGkuanMiLCJ3ZWJwYWNrOi8vZmxhaXItY2FtZGVuLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBpQ2FsbCh1cmwsIG1ldGhvZCwgcGF5bG9hZCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZSk7XG59XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGFwaUNhbGwgZnJvbSAnLi9mL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgaGFuZGxlUGFzc3dvcmRsZXNzTG9naW4oZW1haWwsIHJlZGlyZWN0VXJsKSB7XG4gICAgICAgIGFwaUNhbGwoJy9sb2dpbi5waHA/YWN0aW9uPXBhc3N3b3JkbGVzc19sb2dpbicsICdQT1NUJywge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICByZWRpcmVjdF91cmw6IHJlZGlyZWN0VXJsLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICQoJy5sb2dpbi1lbWFpbC1zZW50JykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgJCgnLmxvZ2luLWZvcm0tZW1haWwnKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAkKCcjbG9naW5fZW1haWwnKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0VXJsID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkbGVzc1JlZGlyZWN0VXJsO1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBhc3N3b3JkbGVzc0xvZ2luKGVtYWlsLCByZWRpcmVjdFVybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5sb2dpbi1lbWFpbC1yZWRvJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoJy5sb2dpbi1lbWFpbC1zZW50JykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiYXBpQ2FsbCIsInVybCIsIm1ldGhvZCIsInBheWxvYWQiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwiUGFnZU1hbmFnZXIiLCJIb21lIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsImhhbmRsZVBhc3N3b3JkbGVzc0xvZ2luIiwiZW1haWwiLCJyZWRpcmVjdFVybCIsInJlZGlyZWN0X3VybCIsIiQiLCJjc3MiLCJvblJlYWR5IiwiX3RoaXMiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWwiLCJjb250ZXh0IiwicGFzc3dvcmRsZXNzUmVkaXJlY3RVcmwiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==