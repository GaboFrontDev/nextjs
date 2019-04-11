webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "C:\\Users\\Derevo\\platzi\\nextjs\\pages\\channel.js";




var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, [{
    key: "getSeriesContent",
    value: function getSeriesContent() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.props.channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, channel.title));
      }));
    }
  }, {
    key: "getAudiosContent",
    value: function getAudiosContent() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "audio_clips",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.audio_clips.map(function (clip) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "clip",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, clip.title));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          audio_clips = _this$props.audio_clips,
          channels = _this$props.channels;
      var clipsContainer = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "No se encontraron clips ");
      var channelsContainer = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "No se encontraron series ");

      if (audio_clips.length > 0) {
        clipsContainer = this.getAudiosContent();
      }

      if (channels.length > 0) {
        channelsContainer = this.getSeriesContent();
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1772945425",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("header", {
        className: "jsx-1772945425",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "PodCasts"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-1772945425",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, channel.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-1772945425",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Ultimos PodCasts"), clipsContainer, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-1772945425",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Series"), channelsContainer, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "157873413",
        __self: this
      }, "header.jsx-1772945425{color:#fff;padding:15px;background:#8576ca;text-align:center;}.audio_clips.jsx-1772945425{display:grid;grid-gap:25px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));}.clip.jsx-1772945425{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-1772945425 img.jsx-1772945425{width:100%;}h1.jsx-1772945425{font-weight:600;margin:15px;}h2.jsx-1772945425{padding:5px;margin:15px;font-size:0.9em;text-align:center;}p.jsx-1772945425{margin:15px;font-size:18px;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyZXZvXFxwbGF0emlcXG5leHRqc1xccGFnZXNcXGNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VnQixBQUdlLEFBTUUsQUFPQyxBQU9ILEFBSU8sQUFLTixBQU1BLFdBbENBLEFBb0JYLENBU1csQUFNRyxDQTdCRCxDQU9JLEVBWWxCLFFBeEJtQixBQTZCSCxHQXZCSCxBQTZCRyxDQVhmLElBWHVDLFFBTm9CLEFBdUIxQyxHQTdCQSxBQW1DakIsZUFMQSxHQTdCQSxXQVltQixvQkFDbkIsTUFQQSIsImZpbGUiOiJDOlxcVXNlcnNcXERlcmV2b1xccGxhdHppXFxuZXh0anNcXHBhZ2VzXFxjaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuXHRcdGxldCBbcmVxQ2hhbm5lbCwgcmVxQXVkaW8sIHJlcVNlcmllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcblx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApLFxyXG5cdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vYXVkaW9fY2xpcHNgKSxcclxuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYClcclxuXHRcdF0pO1xyXG5cdFx0bGV0IGNoYW5uZWxJZCA9IHF1ZXJ5LmlkO1xyXG5cdFx0bGV0IHtcclxuXHRcdFx0Ym9keTogeyBjaGFubmVsIH1cclxuXHRcdH0gPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKTtcclxuXHRcdGxldCB7XHJcblx0XHRcdGJvZHk6IHsgYXVkaW9fY2xpcHMgfVxyXG5cdFx0fSA9IGF3YWl0IHJlcUF1ZGlvLmpzb24oKTtcclxuXHJcblx0XHRsZXQge1xyXG5cdFx0XHRib2R5OiB7IGNoYW5uZWxzIH1cclxuXHRcdH0gPSBhd2FpdCByZXFTZXJpZXMuanNvbigpO1xyXG5cdFx0cmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzIH07XHJcblx0fVxyXG5cclxuXHRnZXRTZXJpZXNDb250ZW50KCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoYW5uZWxzLm1hcChjaGFubmVsID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDM+e2NoYW5uZWwudGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRBdWRpb3NDb250ZW50KCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdWRpb19jbGlwc1wiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmF1ZGlvX2NsaXBzLm1hcChjbGlwID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpcFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDM+e2NsaXAudGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRsZXQgY2xpcHNDb250YWluZXIgPSA8ZGl2Pk5vIHNlIGVuY29udHJhcm9uIGNsaXBzIDwvZGl2PjtcclxuXHRcdGxldCBjaGFubmVsc0NvbnRhaW5lciA9IDxkaXY+Tm8gc2UgZW5jb250cmFyb24gc2VyaWVzIDwvZGl2PjtcclxuXHRcdGlmIChhdWRpb19jbGlwcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGNsaXBzQ29udGFpbmVyID0gdGhpcy5nZXRBdWRpb3NDb250ZW50KCk7XHJcblx0XHR9XHJcblx0XHRpZiAoY2hhbm5lbHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjaGFubmVsc0NvbnRhaW5lciA9IHRoaXMuZ2V0U2VyaWVzQ29udGVudCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGhlYWRlcj5Qb2RDYXN0czwvaGVhZGVyPlxyXG5cdFx0XHRcdDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxyXG5cdFx0XHRcdDxoMj5VbHRpbW9zIFBvZENhc3RzPC9oMj5cclxuXHRcdFx0XHR7Y2xpcHNDb250YWluZXJ9XHJcblx0XHRcdFx0PGgyPlNlcmllczwvaDI+XHJcblx0XHRcdFx0e2NoYW5uZWxzQ29udGFpbmVyfVxyXG5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgIGhlYWRlcntcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHBhZGRpbmcgMTVweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzg1NzZjYTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ICB9XHJcblx0XHQgIC5hdWRpb19jbGlwcyB7IFxyXG5cdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRncmlkLWdhcDogMjVweDtcclxuXHRcdFx0cGFkZGluZzogMTVweDtcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICAuY2xpcCB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICAuY2hhbm5lbCBpbWd7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBoMSB7IFxyXG5cdFx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdCAgbWFyZ2luOiAxNXB4XHJcblx0XHQgIH1cclxuXHJcblx0XHQgIGgyIHtcclxuXHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0XHRtYXJnaW46IDE1cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMC45ZW07XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdCAgfVxyXG5cdFx0ICBwIHtcclxuXHRcdFx0bWFyZ2luOiAxNXB4O1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHQgIH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Derevo\\platzi\\nextjs\\pages\\channel.js */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "4036911005",
        __self: this
      }, "body{margin:0;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVyZXZvXFxwbGF0emlcXG5leHRqc1xccGFnZXNcXGNoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEd1QixBQUdnQixTQUNhLHNCQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXERlcmV2b1xccGxhdHppXFxuZXh0anNcXHBhZ2VzXFxjaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuXHRcdGxldCBbcmVxQ2hhbm5lbCwgcmVxQXVkaW8sIHJlcVNlcmllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcblx0XHRcdGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApLFxyXG5cdFx0XHRmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vYXVkaW9fY2xpcHNgKSxcclxuXHRcdFx0ZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYClcclxuXHRcdF0pO1xyXG5cdFx0bGV0IGNoYW5uZWxJZCA9IHF1ZXJ5LmlkO1xyXG5cdFx0bGV0IHtcclxuXHRcdFx0Ym9keTogeyBjaGFubmVsIH1cclxuXHRcdH0gPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKTtcclxuXHRcdGxldCB7XHJcblx0XHRcdGJvZHk6IHsgYXVkaW9fY2xpcHMgfVxyXG5cdFx0fSA9IGF3YWl0IHJlcUF1ZGlvLmpzb24oKTtcclxuXHJcblx0XHRsZXQge1xyXG5cdFx0XHRib2R5OiB7IGNoYW5uZWxzIH1cclxuXHRcdH0gPSBhd2FpdCByZXFTZXJpZXMuanNvbigpO1xyXG5cdFx0cmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzIH07XHJcblx0fVxyXG5cclxuXHRnZXRTZXJpZXNDb250ZW50KCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoYW5uZWxzLm1hcChjaGFubmVsID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDM+e2NoYW5uZWwudGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRBdWRpb3NDb250ZW50KCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdWRpb19jbGlwc1wiPlxyXG5cdFx0XHRcdHt0aGlzLnByb3BzLmF1ZGlvX2NsaXBzLm1hcChjbGlwID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpcFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDM+e2NsaXAudGl0bGV9PC9oMz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRsZXQgY2xpcHNDb250YWluZXIgPSA8ZGl2Pk5vIHNlIGVuY29udHJhcm9uIGNsaXBzIDwvZGl2PjtcclxuXHRcdGxldCBjaGFubmVsc0NvbnRhaW5lciA9IDxkaXY+Tm8gc2UgZW5jb250cmFyb24gc2VyaWVzIDwvZGl2PjtcclxuXHRcdGlmIChhdWRpb19jbGlwcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGNsaXBzQ29udGFpbmVyID0gdGhpcy5nZXRBdWRpb3NDb250ZW50KCk7XHJcblx0XHR9XHJcblx0XHRpZiAoY2hhbm5lbHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjaGFubmVsc0NvbnRhaW5lciA9IHRoaXMuZ2V0U2VyaWVzQ29udGVudCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGhlYWRlcj5Qb2RDYXN0czwvaGVhZGVyPlxyXG5cdFx0XHRcdDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxyXG5cdFx0XHRcdDxoMj5VbHRpbW9zIFBvZENhc3RzPC9oMj5cclxuXHRcdFx0XHR7Y2xpcHNDb250YWluZXJ9XHJcblx0XHRcdFx0PGgyPlNlcmllczwvaDI+XHJcblx0XHRcdFx0e2NoYW5uZWxzQ29udGFpbmVyfVxyXG5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgIGhlYWRlcntcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHBhZGRpbmcgMTVweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzg1NzZjYTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0ICB9XHJcblx0XHQgIC5hdWRpb19jbGlwcyB7IFxyXG5cdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRncmlkLWdhcDogMjVweDtcclxuXHRcdFx0cGFkZGluZzogMTVweDtcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICAuY2xpcCB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICAuY2hhbm5lbCBpbWd7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ICB9XHJcblxyXG5cdFx0ICBoMSB7IFxyXG5cdFx0XHQgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdCAgbWFyZ2luOiAxNXB4XHJcblx0XHQgIH1cclxuXHJcblx0XHQgIGgyIHtcclxuXHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0XHRtYXJnaW46IDE1cHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMC45ZW07XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdCAgfVxyXG5cdFx0ICBwIHtcclxuXHRcdFx0bWFyZ2luOiAxNXB4O1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHQgIH1cclxuXHRcdGB9PC9zdHlsZT5cclxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cdFx0XHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Derevo\\platzi\\nextjs\\pages\\channel.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, _ref2, _ref3, reqChannel, reqAudio, reqSeries, channelId, _ref4, channel, _ref5, audio_clips, _ref6, channels;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([fetch("https://api.audioboom.com/channels/".concat(channelId)), fetch("https://api.audioboom.com/channels/".concat(channelId, "/audio_clips")), fetch("https://api.audioboom.com/channels/".concat(channelId, "/child_channels"))]);

              case 3:
                _ref2 = _context.sent;
                _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 3);
                reqChannel = _ref3[0];
                reqAudio = _ref3[1];
                reqSeries = _ref3[2];
                channelId = query.id;
                _context.next = 11;
                return reqChannel.json();

              case 11:
                _ref4 = _context.sent;
                channel = _ref4.body.channel;
                _context.next = 15;
                return reqAudio.json();

              case 15:
                _ref5 = _context.sent;
                audio_clips = _ref5.body.audio_clips;
                _context.next = 19;
                return reqSeries.json();

              case 19:
                _ref6 = _context.sent;
                channels = _ref6.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audio_clips: audio_clips,
                  channels: channels
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.c414bea121a3c6f2bb5e.hot-update.js.map