"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/StickyContainer.js


const StickyContainer = ()=>{
    return(/*#__PURE__*/ _jsxs("div", {
        className: "sticky-container",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "distance",
                children: "distance"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "price",
                children: "price"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "weight",
                children: "weight"
            }),
            /*#__PURE__*/ _jsx("button", {
                children: "arrow"
            })
        ]
    }));
};
/* harmony default export */ const components_StickyContainer = ((/* unused pure expression or super */ null && (StickyContainer)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Nav.js





const Nav = ()=>{
    const navMenu = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/homepage",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/eTv",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "etv"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/something",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: " something"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/somethingelse",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "somethingelse"
                    })
                })
            })
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "bg-blue-dark flex flex-row justify-between items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo-container mt-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/images/etv-logo-final-white.png",
                    width: 80,
                    height: 60,
                    className: "logo"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row justify-between items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "bg-yellow-dark hover:bg-yellow-light text-grey-darker font-bold p-2 mb-3 m-4 text-sm rounded-lg",
                    children: "Kaufberater"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Nav = (Nav);

;// CONCATENATED MODULE: ./components/Header.js



const Header = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {
        })
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Footer.js



const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "py-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "flex flex-row justify-between flex-wrap my-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-48 flex-col justify-start flex-wrap px-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: " text-sm font-bold",
                                children: "FIRST CATEGORY"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: " flex flex-col justify-between flex-wrap m-4 text-black",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 5"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-48 flex-col justify-start flex-wrap px-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: " text-sm font-bold",
                                children: "SECOND CATEGORY"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: " flex flex-col justify-between flex-wrap m-4 text-black",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 5"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-48 flex-col justify-start flex-wrap px-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: " text-sm font-bold",
                                children: "THIRD CATEGORY"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: " flex flex-col justify-between flex-wrap m-4 text-black",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 5"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-48 flex-col justify-start flex-wrap px-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: " text-sm font-bold",
                                children: "FORTH CATEGORY"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: " flex flex-col justify-start flex-wrap ml-2 mt-4 text-black",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "item 4"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row justify-start w-full flex-wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/images/etv-logo-final.png",
                        width: 60,
                        height: 40
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-blue-dark text-base font-bold leading-4",
                        children: [
                            " ",
                            "Elektrotransporter",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            }),
                            "Vergleich"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "p-3",
                children: "Hier k\xf6nnte noch etwas stehen, was Leute davon \xfcberzeugt, dass Ihr richtig gut seid!"
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.js




function Layout(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./apollo-client.js
// ./apollo-client.js

const client = new client_namespaceObject.ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new client_namespaceObject.InMemoryCache()
});
/* harmony default export */ const apollo_client = (client);

;// CONCATENATED MODULE: ./components/ErrorBoundary.js


class ErrorBoundary extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        {
            hasError: true;
        }
    }
    componentDidCatch(error1, errorInfo) {
        console.log(error1, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: this.state.hasError
            }));
        }
        return this.props.children;
    }
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#317EFB"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/images/icon-16x16.png",
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/images/icon-32x32.png",
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/images/apple-touch-icon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ErrorBoundary, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(client_namespaceObject.ApolloProvider, {
                    client: apollo_client,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                        ...pageProps,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61], () => (__webpack_exec__(443)));
module.exports = __webpack_exports__;

})();