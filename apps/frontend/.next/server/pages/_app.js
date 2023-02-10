/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AppContext.tsx":
/*!***********************************!*\
  !*** ./components/AppContext.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": () => (/* binding */ AppContext),\n/* harmony export */   \"AppWrapper\": () => (/* binding */ AppWrapper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types_HeroesFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/HeroesFilter */ \"./types/HeroesFilter.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ \"./utils/api.ts\");\n\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    searchQuery: \"\",\n    setSearchQuery: ()=>{},\n    selectedFilter: \"\",\n    setSelectedFilter: ()=>{},\n    loader: false,\n    visibleHeroes: []\n});\nfunction AppWrapper({ children  }) {\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedFilter, setSelectedFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types_HeroesFilter__WEBPACK_IMPORTED_MODULE_2__.HeroesFilter.ALL);\n    const [heroes, setHeroes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getHeroesFromServer = async ()=>{\n        try {\n            setLoader(true);\n            const heroesFromServer = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_3__.getAllHeroes)();\n            setHeroes(heroesFromServer);\n        } catch  {\n            throw new Error();\n        } finally{\n            setLoader(false);\n        }\n    };\n    const getVisibleHeroes = ()=>{\n        let visibleHeroes = heroes;\n        let normalizeQuery = searchQuery.trim().toLocaleLowerCase();\n        if (normalizeQuery.length > 0) {\n            visibleHeroes = visibleHeroes.filter((hero)=>hero.name.toLocaleLowerCase().includes(normalizeQuery) || hero.biography[\"full-name\"].toLocaleLowerCase().includes(normalizeQuery));\n        }\n        switch(selectedFilter){\n            case _types_HeroesFilter__WEBPACK_IMPORTED_MODULE_2__.HeroesFilter.MALES:\n                return visibleHeroes = visibleHeroes.filter((hero)=>hero.appearance.gender === \"Male\");\n            case _types_HeroesFilter__WEBPACK_IMPORTED_MODULE_2__.HeroesFilter.FEMALES:\n                return visibleHeroes = visibleHeroes.filter((hero)=>hero.appearance.gender === \"Female\");\n            case _types_HeroesFilter__WEBPACK_IMPORTED_MODULE_2__.HeroesFilter.ALL:\n                return visibleHeroes;\n            default:\n                return visibleHeroes;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getHeroesFromServer();\n    }, []);\n    const visibleHeroes = getVisibleHeroes();\n    console.log(visibleHeroes);\n    const contextValue = {\n        searchQuery,\n        setSearchQuery,\n        selectedFilter,\n        setSelectedFilter,\n        loader,\n        visibleHeroes\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\Appexoft\\\\everyhero\\\\apps\\\\frontend\\\\components\\\\AppContext.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Y7QUFFM0I7QUFDVDtBQWVyQyxNQUFNSywyQkFBYUwsb0RBQWFBLENBQXNCO0lBQzNETSxhQUFhO0lBQ2JDLGdCQUFnQixJQUFNLENBQUU7SUFDeEJDLGdCQUFnQjtJQUNoQkMsbUJBQW1CLElBQU0sQ0FBRTtJQUMzQkMsUUFBUSxLQUFLO0lBQ2JDLGVBQWUsRUFBRTtBQUNuQixHQUFHO0FBRUksU0FBU0MsV0FBWSxFQUFFQyxTQUFRLEVBQVMsRUFBRTtJQUMvQyxNQUFNLENBQUNQLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBZUMsaUVBQWdCO0lBQ25GLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBVSxFQUFFO0lBQ2hELE1BQU0sQ0FBQ1EsUUFBUU8sVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDLE1BQU1nQixzQkFBc0IsVUFBWTtRQUN0QyxJQUFJO1lBQ0ZELFVBQVUsSUFBSTtZQUNkLE1BQU1FLG1CQUFtQixNQUFNZix3REFBWUE7WUFFM0NZLFVBQVVHO1FBQ1osRUFBRSxPQUFNO1lBQ04sTUFBTSxJQUFJQyxRQUFRO1FBQ3BCLFNBQVU7WUFDUkgsVUFBVSxLQUFLO1FBQ2pCO0lBQ0Y7SUFFQSxNQUFNSSxtQkFBbUIsSUFBTTtRQUM3QixJQUFJVixnQkFBZ0JJO1FBQ3BCLElBQUlPLGlCQUFpQmhCLFlBQVlpQixJQUFJLEdBQUdDLGlCQUFpQjtRQUV6RCxJQUFJRixlQUFlRyxNQUFNLEdBQUcsR0FBRztZQUM3QmQsZ0JBQWdCQSxjQUFjZSxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLElBQUksQ0FBQ0osaUJBQWlCLEdBQUdLLFFBQVEsQ0FBQ1AsbUJBQW1CSyxLQUFLRyxTQUFTLENBQUMsWUFBWSxDQUFDTixpQkFBaUIsR0FBR0ssUUFBUSxDQUFDUDtRQUNsSyxDQUFDO1FBRUQsT0FBUWQ7WUFDTixLQUFLTCxtRUFBa0I7Z0JBQ3JCLE9BQU9RLGdCQUFnQkEsY0FBY2UsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLSyxVQUFVLENBQUNDLE1BQU0sS0FBSztZQUVqRixLQUFLOUIscUVBQW9CO2dCQUN2QixPQUFPUSxnQkFBZ0JBLGNBQWNlLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0ssVUFBVSxDQUFDQyxNQUFNLEtBQUs7WUFFakYsS0FBSzlCLGlFQUFnQjtnQkFDbkIsT0FBT1E7WUFFVDtnQkFDRSxPQUFPQTtRQUNYO0lBQ0Y7SUFFQVYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkaUI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNUCxnQkFBZ0JVO0lBRXRCYyxRQUFRQyxHQUFHLENBQUN6QjtJQUVaLE1BQU0wQixlQUFlO1FBQ25CL0I7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTixXQUFXaUMsUUFBUTtRQUFDQyxPQUFPRjtrQkFDekJ4Qjs7Ozs7O0FBR1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGV4dC50c3g/NWE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSUhlcm8gfSBmcm9tICcuLi8uLi8uLi9saWJzL2xpYi10eXBlcy9zcmMvaW5kZXgnO1xuaW1wb3J0IHsgSGVyb2VzRmlsdGVyIH0gZnJvbSAnLi4vdHlwZXMvSGVyb2VzRmlsdGVyJztcbmltcG9ydCB7IGdldEFsbEhlcm9lcyB9IGZyb20gJy4uL3V0aWxzL2FwaSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5pbnRlcmZhY2UgQXBwQ29udGV4dEludGVyZmFjZSB7XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmcsXG4gIHNldFNlYXJjaFF1ZXJ5OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PixcbiAgc2VsZWN0ZWRGaWx0ZXI6IEhlcm9lc0ZpbHRlciB8IHN0cmluZyxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXI6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEhlcm9lc0ZpbHRlciB8IHN0cmluZz4+LFxuICBsb2FkZXI6IGJvb2xlYW4sXG4gIHZpc2libGVIZXJvZXM6IElIZXJvW10sXG59O1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXBwQ29udGV4dEludGVyZmFjZT4oe1xuICBzZWFyY2hRdWVyeTogJycsXG4gIHNldFNlYXJjaFF1ZXJ5OiAoKSA9PiB7IH0sXG4gIHNlbGVjdGVkRmlsdGVyOiAnJyxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXI6ICgpID0+IHsgfSxcbiAgbG9hZGVyOiBmYWxzZSxcbiAgdmlzaWJsZUhlcm9lczogW10sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIgKHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbHRlciwgc2V0U2VsZWN0ZWRGaWx0ZXJdID0gdXNlU3RhdGU8SGVyb2VzRmlsdGVyPihIZXJvZXNGaWx0ZXIuQUxMKTtcbiAgY29uc3QgW2hlcm9lcywgc2V0SGVyb2VzXSA9IHVzZVN0YXRlPElIZXJvW10+KFtdKTtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnZXRIZXJvZXNGcm9tU2VydmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkZXIodHJ1ZSk7XG4gICAgICBjb25zdCBoZXJvZXNGcm9tU2VydmVyID0gYXdhaXQgZ2V0QWxsSGVyb2VzKCk7XG5cbiAgICAgIHNldEhlcm9lcyhoZXJvZXNGcm9tU2VydmVyKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRWaXNpYmxlSGVyb2VzID0gKCkgPT4ge1xuICAgIGxldCB2aXNpYmxlSGVyb2VzID0gaGVyb2VzO1xuICAgIGxldCBub3JtYWxpemVRdWVyeSA9IHNlYXJjaFF1ZXJ5LnRyaW0oKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKG5vcm1hbGl6ZVF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZpc2libGVIZXJvZXMgPSB2aXNpYmxlSGVyb2VzLmZpbHRlcihoZXJvID0+IGhlcm8ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZVF1ZXJ5KSB8fCBoZXJvLmJpb2dyYXBoeVsnZnVsbC1uYW1lJ10udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVRdWVyeSkpXG4gICAgfVxuXG4gICAgc3dpdGNoIChzZWxlY3RlZEZpbHRlcikge1xuICAgICAgY2FzZSBIZXJvZXNGaWx0ZXIuTUFMRVM6XG4gICAgICAgIHJldHVybiB2aXNpYmxlSGVyb2VzID0gdmlzaWJsZUhlcm9lcy5maWx0ZXIoaGVybyA9PiBoZXJvLmFwcGVhcmFuY2UuZ2VuZGVyID09PSAnTWFsZScpXG5cbiAgICAgIGNhc2UgSGVyb2VzRmlsdGVyLkZFTUFMRVM6XG4gICAgICAgIHJldHVybiB2aXNpYmxlSGVyb2VzID0gdmlzaWJsZUhlcm9lcy5maWx0ZXIoaGVybyA9PiBoZXJvLmFwcGVhcmFuY2UuZ2VuZGVyID09PSAnRmVtYWxlJylcblxuICAgICAgY2FzZSBIZXJvZXNGaWx0ZXIuQUxMOlxuICAgICAgICByZXR1cm4gdmlzaWJsZUhlcm9lc1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdmlzaWJsZUhlcm9lcztcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEhlcm9lc0Zyb21TZXJ2ZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHZpc2libGVIZXJvZXMgPSBnZXRWaXNpYmxlSGVyb2VzKCk7XG5cbiAgY29uc29sZS5sb2codmlzaWJsZUhlcm9lcylcblxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XG4gICAgc2VhcmNoUXVlcnksXG4gICAgc2V0U2VhcmNoUXVlcnksXG4gICAgc2VsZWN0ZWRGaWx0ZXIsXG4gICAgc2V0U2VsZWN0ZWRGaWx0ZXIsXG4gICAgbG9hZGVyLFxuICAgIHZpc2libGVIZXJvZXMsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9ID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVyb2VzRmlsdGVyIiwiZ2V0QWxsSGVyb2VzIiwiQXBwQ29udGV4dCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJzZWxlY3RlZEZpbHRlciIsInNldFNlbGVjdGVkRmlsdGVyIiwibG9hZGVyIiwidmlzaWJsZUhlcm9lcyIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsIkFMTCIsImhlcm9lcyIsInNldEhlcm9lcyIsInNldExvYWRlciIsImdldEhlcm9lc0Zyb21TZXJ2ZXIiLCJoZXJvZXNGcm9tU2VydmVyIiwiRXJyb3IiLCJnZXRWaXNpYmxlSGVyb2VzIiwibm9ybWFsaXplUXVlcnkiLCJ0cmltIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJsZW5ndGgiLCJmaWx0ZXIiLCJoZXJvIiwibmFtZSIsImluY2x1ZGVzIiwiYmlvZ3JhcGh5IiwiTUFMRVMiLCJhcHBlYXJhbmNlIiwiZ2VuZGVyIiwiRkVNQUxFUyIsImNvbnNvbGUiLCJsb2ciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContext */ \"./components/AppContext.tsx\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction CustomApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Welcome to frontend!\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Appexoft\\\\everyhero\\\\apps\\\\frontend\\\\pages\\\\_app.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Appexoft\\\\everyhero\\\\apps\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"app bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"F:\\\\Appexoft\\\\everyhero\\\\apps\\\\frontend\\\\pages\\\\_app.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Appexoft\\\\everyhero\\\\apps\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Appexoft\\\\everyhero\\\\apps\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ3lCO0FBQ2hDO0FBRXRCLFNBQVNFLFVBQVUsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUNyRCxxQkFDRSw4REFBQ0gsOERBQVVBOzswQkFDVCw4REFBQ0Qsa0RBQUlBOzBCQUNILDRFQUFDSzs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDSjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBBcHBXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcHBDb250ZXh0JztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZnVuY3Rpb24gQ3VzdG9tQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwV3JhcHBlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2VsY29tZSB0byBmcm9udGVuZCE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYXBwIGJnLXdoaXRlXCI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0FwcFdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUFwcDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiQXBwV3JhcHBlciIsIkN1c3RvbUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./types/HeroesFilter.ts":
/*!*******************************!*\
  !*** ./types/HeroesFilter.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeroesFilter\": () => (/* binding */ HeroesFilter)\n/* harmony export */ });\nvar HeroesFilter;\n(function(HeroesFilter) {\n    HeroesFilter[\"ALL\"] = \"All\";\n    HeroesFilter[\"MALES\"] = \"Males\";\n    HeroesFilter[\"FEMALES\"] = \"Females\";\n})(HeroesFilter || (HeroesFilter = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBlcy9IZXJvZXNGaWx0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO1VBQUtBLFlBQVk7SUFBWkEsYUFDVkMsU0FBTTtJQURJRCxhQUVWRSxXQUFRO0lBRkVGLGFBR1ZHLGFBQVU7R0FIQUgsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHlwZXMvSGVyb2VzRmlsdGVyLnRzPzBhYTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSGVyb2VzRmlsdGVyIHtcbiAgQUxMID0gJ0FsbCcsXG4gIE1BTEVTID0gJ01hbGVzJyxcbiAgRkVNQUxFUyA9ICdGZW1hbGVzJ1xufTtcbiJdLCJuYW1lcyI6WyJIZXJvZXNGaWx0ZXIiLCJBTEwiLCJNQUxFUyIsIkZFTUFMRVMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./types/HeroesFilter.ts\n");

/***/ }),

/***/ "./utils/api.ts":
/*!**********************!*\
  !*** ./utils/api.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllHeroes\": () => (/* binding */ getAllHeroes)\n/* harmony export */ });\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetch */ \"./utils/fetch.ts\");\n\nconst getAllHeroes = ()=>(0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__.getHeroes)(\"/heros\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDMkM7QUFFcEMsTUFBTUMsZUFBZSxJQUFNRCx1REFBU0EsQ0FBVSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLnRzPzZlZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUhlcm8gfSBmcm9tICcuLi8uLi8uLi9saWJzL2xpYi10eXBlcy9zcmMvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0SGVyb2VzIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsSGVyb2VzID0gKCkgPT4gZ2V0SGVyb2VzPElIZXJvW10+KCcvaGVyb3MnKTsiXSwibmFtZXMiOlsiZ2V0SGVyb2VzIiwiZ2V0QWxsSGVyb2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/api.ts\n");

/***/ }),

/***/ "./utils/fetch.ts":
/*!************************!*\
  !*** ./utils/fetch.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHeroes\": () => (/* binding */ getHeroes)\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:3333/api\";\nfunction getHeroes(url) {\n    return fetch(BASE_URL + url).then((response)=>{\n        if (!response.ok) {\n            throw new Error();\n        }\n        return response.json();\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9mZXRjaC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBVztBQUVWLFNBQVNDLFVBQ2RDLEdBQVcsRUFDQztJQUNaLE9BQU9DLE1BQU1ILFdBQVdFLEtBQ3JCRSxJQUFJLENBQUNDLENBQUFBLFdBQVk7UUFDaEIsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxRQUFRO1FBQ3BCLENBQUM7UUFFRCxPQUFPRixTQUFTRyxJQUFJO0lBQ3RCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2ZldGNoLnRzP2UwOWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMzMzL2FwaSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZXJvZXM8VD4oXG4gIHVybDogc3RyaW5nLFxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBmZXRjaChCQVNFX1VSTCArIHVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG59Il0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiZ2V0SGVyb2VzIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/fetch.ts\n");

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();