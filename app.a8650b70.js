(function(e) {
    function t(t) {
        for (var a, r, i = t[0], u = t[1], s = t[2], E = 0, d = []; E < i.length; E++) r = i[E], Object.prototype.hasOwnProperty.call(c, r) && c[r] && d.push(c[r][0]), c[r] = 0;
        for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        _ && _(t);
        while (d.length) d.shift()();
        return o.push.apply(o, s || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], a = !0, r = 1; r < n.length; r++) {
                var i = n[r];
                0 !== c[i] && (a = !1)
            }
            a && (o.splice(t--, 1), e = u(u.s = n[0]))
        }
        return e
    }
    var a = {},
        r = {
            app: 0
        },
        c = {
            app: 0
        },
        o = [];

    function i(e) {
        return u.p + "js/" + ({}[e] || e) + "." + {
            "chunk-1827d68e": "b89ae1b8",
            "chunk-2d22bcc3": "b709d8f4",
            "chunk-2d22cfac": "b716c0b2",
            "chunk-018d7abd": "27a36517",
            "chunk-54508a50": "5b7b618e",
            "chunk-6e0ecc5d": "8dd004ad",
            "chunk-27340eee": "1dcc4af8",
            "chunk-58d589d4": "b661c707",
            "chunk-7049ec69": "604e2799",
            "chunk-78bebf7b": "4fd84a43",
            "chunk-2d2216e9": "820a89a1",
            "chunk-0c3c8fb6": "ac5f02da",
            "chunk-b38dfd8a": "aca923b4",
            "chunk-0b7fa0da": "d7ad65f2",
            "chunk-0f1db514": "7806d4ea",
            "chunk-10b52267": "0156baf5",
            "chunk-251c2f93": "d1a241e9",
            "chunk-4a797c35": "67b3b518",
            "chunk-527ead37": "469af724",
            "chunk-5bb4a866": "344691ac",
            "chunk-63fe28f8": "b525d544",
            "chunk-6a70045c": "ec12d518",
            "chunk-74e3fe31": "bca43da8",
            "chunk-7a884b74": "b12cd3be",
            "chunk-9956bbb4": "f3c55ab7",
            "chunk-3a2931d3": "fef50431",
            "chunk-3c89f1ce": "19a6ddc8",
            "chunk-4685b23f": "60b09c2d",
            "chunk-59e04ab4": "b89abc26",
            "chunk-d20f3f16": "0e973dce",
            "chunk-783fff1b": "d0dcd5b8",
            "chunk-a14fca7a": "68057582"
        }[e] + ".js"
    }

    function u(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports
    }
    u.e = function(e) {
        var t = [],
            n = {
                "chunk-1827d68e": 1,
                "chunk-54508a50": 1,
                "chunk-27340eee": 1,
                "chunk-58d589d4": 1,
                "chunk-7049ec69": 1,
                "chunk-78bebf7b": 1,
                "chunk-2d2216e9": 1,
                "chunk-0c3c8fb6": 1,
                "chunk-0b7fa0da": 1,
                "chunk-0f1db514": 1,
                "chunk-10b52267": 1,
                "chunk-251c2f93": 1,
                "chunk-4a797c35": 1,
                "chunk-527ead37": 1,
                "chunk-5bb4a866": 1,
                "chunk-63fe28f8": 1,
                "chunk-6a70045c": 1,
                "chunk-74e3fe31": 1,
                "chunk-7a884b74": 1,
                "chunk-9956bbb4": 1,
                "chunk-3a2931d3": 1,
                "chunk-3c89f1ce": 1,
                "chunk-4685b23f": 1,
                "chunk-59e04ab4": 1,
                "chunk-783fff1b": 1,
                "chunk-a14fca7a": 1
            };
        r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function(t, n) {
            for (var a = "css/" + ({}[e] || e) + "." + {
                    "chunk-1827d68e": "614cbc27",
                    "chunk-2d22bcc3": "31d6cfe0",
                    "chunk-2d22cfac": "31d6cfe0",
                    "chunk-018d7abd": "31d6cfe0",
                    "chunk-54508a50": "604bcb09",
                    "chunk-6e0ecc5d": "31d6cfe0",
                    "chunk-27340eee": "05254951",
                    "chunk-58d589d4": "469d9ff5",
                    "chunk-7049ec69": "13d9aab6",
                    "chunk-78bebf7b": "4dbea570",
                    "chunk-2d2216e9": "2642a251",
                    "chunk-0c3c8fb6": "178e626e",
                    "chunk-b38dfd8a": "31d6cfe0",
                    "chunk-0b7fa0da": "02da179a",
                    "chunk-0f1db514": "17a49659",
                    "chunk-10b52267": "5e4cc6e3",
                    "chunk-251c2f93": "150e7135",
                    "chunk-4a797c35": "6209cff2",
                    "chunk-527ead37": "4a3976f9",
                    "chunk-5bb4a866": "657d75be",
                    "chunk-63fe28f8": "d0b9640f",
                    "chunk-6a70045c": "5b2327d9",
                    "chunk-74e3fe31": "ae7cce04",
                    "chunk-7a884b74": "3fd5a711",
                    "chunk-9956bbb4": "c2ff83ec",
                    "chunk-3a2931d3": "c479f30a",
                    "chunk-3c89f1ce": "6e4519d9",
                    "chunk-4685b23f": "c90f9c07",
                    "chunk-59e04ab4": "40e746e6",
                    "chunk-d20f3f16": "31d6cfe0",
                    "chunk-783fff1b": "614cbc27",
                    "chunk-a14fca7a": "655b0f2d"
                }[e] + ".css", c = u.p + a, o = document.getElementsByTagName("link"), i = 0; i < o.length; i++) {
                var s = o[i],
                    E = s.getAttribute("data-href") || s.getAttribute("href");
                if ("stylesheet" === s.rel && (E === a || E === c)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
                s = d[i], E = s.getAttribute("data-href");
                if (E === a || E === c) return t()
            }
            var _ = document.createElement("link");
            _.rel = "stylesheet", _.type = "text/css", _.onload = t, _.onerror = function(t) {
                var a = t && t.target && t.target.src || c,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = a, delete r[e], _.parentNode.removeChild(_), n(o)
            }, _.href = c;
            var T = document.getElementsByTagName("head")[0];
            T.appendChild(_)
        })).then((function() {
            r[e] = 0
        })));
        var a = c[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var o = new Promise((function(t, n) {
                    a = c[e] = [t, n]
                }));
                t.push(a[2] = o);
                var s, E = document.createElement("script");
                E.charset = "utf-8", E.timeout = 120, u.nc && E.setAttribute("nonce", u.nc), E.src = i(e);
                var d = new Error;
                s = function(t) {
                    E.onerror = E.onload = null, clearTimeout(_);
                    var n = c[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", d.name = "ChunkLoadError", d.type = a, d.request = r, n[1](d)
                        }
                        c[e] = void 0
                    }
                };
                var _ = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: E
                    })
                }), 12e4);
                E.onerror = E.onload = s, document.head.appendChild(E)
            }
        return Promise.all(t)
    }, u.m = e, u.c = a, u.d = function(e, t, n) {
        u.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, u.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, u.t = function(e, t) {
        if (1 & t && (e = u(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (u.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) u.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, u.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return u.d(t, "a", t), t
    }, u.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, u.p = "/", u.oe = function(e) {
        throw console.error(e), e
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        E = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var d = 0; d < s.length; d++) t(s[d]);
    var _ = E;
    o.push([4, "chunk-vendors"]), n()
})({
    0: function(e, t) {},
    1: function(e, t) {},
    "1dff": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        })), n.d(t, "a", (function() {
            return r
        })), n.d(t, "c", (function() {
            return c
        }));
        var a = {},
            r = {},
            c = {
                app: {
                    appName: "Ecomdy Admin",
                    appLogoImage: n("ed29")
                },
                layout: {
                    isRTL: !1,
                    skin: "light",
                    routerTransition: "zoom-fade",
                    type: "vertical",
                    contentWidth: "full",
                    menu: {
                        hidden: !1,
                        isCollapsed: !1
                    },
                    navbar: {
                        type: "floating",
                        backgroundColor: ""
                    },
                    footer: {
                        type: "static"
                    },
                    customizer: !1,
                    enableScrollToTop: !0
                }
            }
    },
    2: function(e, t) {},
    "21d3": function(e, t) {},
    3: function(e, t) {},
    "3e8d": function(e, t, n) {
        var a = {
            "./en.json": "d782"
        };

        function r(e) {
            var t = c(e);
            return n(t)
        }

        function c(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        r.keys = function() {
            return Object.keys(a)
        }, r.resolve = c, e.exports = r, r.id = "3e8d"
    },
    4: function(e, t, n) {
        e.exports = n("56d7")
    },
    4131: function(e, t, n) {},
    4360: function(e, t, n) {
        "use strict";
        var a = n("2b0e"),
            r = n("2f62"),
            c = n("5530"),
            o = n("5a50"),
            i = (n("99af"), n("fb6a"), n("7db0"), function() {
                var e = document.getElementById("loading-bg");
                e && (e.style.display = "block", e.style.position = "fixed")
            }),
            u = function() {
                var e = document.getElementById("loading-bg");
                e && (e.style.display = "none")
            },
            s = n("a74e"),
            E = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.loading = !0, e.error = "", t && i()
            },
            d = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.status = !0, e.loading = !1, e.error = "", t && u()
            },
            _ = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e.loading = !1, e.status = !1, e.error = t;
                var a = s["a"].getToken();
                401 === t.status && a && (s["a"].clearLocalStorage(), window.location.href = "/login"), n && u()
            },
            T = function(e) {
                return e.result
            },
            l = {
                GET_LIST_PARTNER_PERMISSION_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_PARTNER_PERMISSION_SUCCESS: function(e, t) {
                    d(e), e.listPartnerPermissions = t
                },
                GET_LIST_PARTNER_PERMISSION_FAILURE: function(e, t) {
                    _(e, t)
                },
                APPROVE_PARTNER_PERMISSION_REQUEST: function(e) {
                    E(e)
                },
                APPROVE_PARTNER_PERMISSION_SUCCESS: function(e) {
                    d(e)
                },
                APPROVE_PARTNER_PERMISSION_FAILURE: function(e, t) {
                    _(e, t)
                },
                REVOKE_PARTNER_PERMISSION_REQUEST: function(e) {
                    E(e)
                },
                REVOKE_PARTNER_PERMISSION_SUCCESS: function(e) {
                    d(e)
                },
                REVOKE_PARTNER_PERMISSION_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            S = n("1da1"),
            m = (n("96cf"), n("dde5")),
            f = {
                approvePartnerPermission: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("APPROVE_PARTNER_PERMISSION_REQUEST"), n.prev = 2, n.next = 5, m["i"].approvePartnerPermission(t);
                                case 5:
                                    r = n.sent, c = r.data, a("APPROVE_PARTNER_PERMISSION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("APPROVE_PARTNER_PERMISSION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                revokePartnerPermission: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("REVOKE_PARTNER_PERMISSION_REQUEST"), n.prev = 2, n.next = 5, m["i"].revokePartnerPermission(t);
                                case 5:
                                    r = n.sent, c = r.data, a("REVOKE_PARTNER_PERMISSION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("REVOKE_PARTNER_PERMISSION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListPartnerPermission: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_PARTNER_PERMISSION_REQUEST"), n.prev = 2, n.next = 5, m["i"].getListPartnerPermission(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_PARTNER_PERMISSION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_PARTNER_PERMISSION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            p = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listPartnerPermissions: function(e) {
                    return e.listPartnerPermissions
                }
            }),
            A = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listPartner: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    listPartnerPermissions: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: p,
                mutations: l,
                actions: f
            },
            R = n("1dff"),
            U = {
                namespaced: !0,
                state: {
                    windowWidth: 0,
                    shallShowOverlay: !1
                },
                getters: {
                    currentBreakPoint: function(e) {
                        var t = e.windowWidth;
                        return t >= R["a"].xl ? "xl" : t >= R["a"].lg ? "lg" : t >= R["a"].md ? "md" : t >= R["a"].sm ? "sm" : "xs"
                    }
                },
                mutations: {
                    UPDATE_WINDOW_WIDTH: function(e, t) {
                        e.windowWidth = t
                    },
                    TOGGLE_OVERLAY: function(e, t) {
                        e.shallShowOverlay = void 0 !== t ? t : !e.shallShowOverlay
                    }
                },
                actions: {}
            },
            C = (n("466d"), n("ac1f"), {
                namespaced: !0,
                state: {
                    layout: {
                        isRTL: R["c"].layout.isRTL,
                        skin: localStorage.getItem("vuexy-skin") || R["c"].layout.skin,
                        routerTransition: R["c"].layout.routerTransition,
                        type: R["c"].layout.type,
                        contentWidth: R["c"].layout.contentWidth,
                        menu: {
                            hidden: R["c"].layout.menu.hidden
                        },
                        navbar: {
                            type: R["c"].layout.navbar.type,
                            backgroundColor: R["c"].layout.navbar.backgroundColor
                        },
                        footer: {
                            type: R["c"].layout.footer.type
                        }
                    }
                },
                getters: {},
                mutations: {
                    TOGGLE_RTL: function(e) {
                        e.layout.isRTL = !e.layout.isRTL, document.documentElement.setAttribute("dir", e.layout.isRTL ? "rtl" : "ltr")
                    },
                    UPDATE_SKIN: function(e, t) {
                        e.layout.skin = t, localStorage.setItem("vuexy-skin", t), "dark" === t ? document.body.classList.add("dark-layout") : document.body.className.match("dark-layout") && document.body.classList.remove("dark-layout")
                    },
                    UPDATE_ROUTER_TRANSITION: function(e, t) {
                        e.layout.routerTransition = t
                    },
                    UPDATE_LAYOUT_TYPE: function(e, t) {
                        e.layout.type = t
                    },
                    UPDATE_CONTENT_WIDTH: function(e, t) {
                        e.layout.contentWidth = t
                    },
                    UPDATE_NAV_MENU_HIDDEN: function(e, t) {
                        e.layout.menu.hidden = t
                    },
                    UPDATE_NAVBAR_CONFIG: function(e, t) {
                        Object.assign(e.layout.navbar, t)
                    },
                    UPDATE_FOOTER_CONFIG: function(e, t) {
                        Object.assign(e.layout.footer, t)
                    }
                },
                actions: {}
            }),
            I = {
                namespaced: !0,
                state: {
                    isVerticalMenuCollapsed: R["c"].layout.menu.isCollapsed
                },
                getters: {},
                mutations: {
                    UPDATE_VERTICAL_MENU_COLLAPSED: function(e, t) {
                        e.isVerticalMenuCollapsed = t
                    }
                },
                actions: {}
            },
            h = (n("d3b7"), n("25f0"), n("4de4"), {
                namespaced: !0,
                state: {
                    notifications: [],
                    systemNotifications: []
                },
                getters: {
                    notifications: function(e) {
                        return e.notifications
                    }
                },
                mutations: {
                    PUSH_NOTIFICATION: function(e, t) {
                        e.notifications.push(Object(c["a"])(Object(c["a"])({}, t), {}, {
                            id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
                        }))
                    },
                    REMOVE_NOTIFICATION: function(e, t) {
                        e.notifications = e.notifications.filter((function(e) {
                            return e.id !== t.id
                        }))
                    },
                    REMOVE_ALL_NOTIFICATION: function(e) {
                        e.notifications = [], e.systemNotifications = []
                    }
                },
                actions: {
                    addNotification: function(e, t) {
                        return Object(S["a"])(regeneratorRuntime.mark((function n() {
                            var a;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        a = e.commit, a("PUSH_NOTIFICATION", t);
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    removeNotification: function(e, t) {
                        return Object(S["a"])(regeneratorRuntime.mark((function n() {
                            var a;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        a = e.commit, a("REMOVE_NOTIFICATION", t);
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    removeAllNotifications: function(e) {
                        return Object(S["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, n("REMOVE_ALL_NOTIFICATION");
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            }),
            g = {
                LOGIN_REQUEST: function(e) {
                    E(e)
                },
                LOGIN_SUCCESS: function(e, t, n) {
                    d(e), e.idToken = n, e.isLoggedIn = !0, e.user = t
                },
                LOGIN_FAILURE: function(e, t) {
                    _(e, t), e.isLoggedIn = !1
                },
                REGISTER_REQUEST: function(e) {
                    E(e)
                },
                REGISTER_SUCCESS: function(e) {
                    d(e)
                },
                REGISTER_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_ACCOUNT_INFO_REQUEST: function(e) {
                    E(e)
                },
                GET_ACCOUNT_INFO_SUCCESS: function(e, t) {
                    d(e), e.user = t
                },
                GET_ACCOUNT_INFO_FAILURE: function(e, t) {
                    _(e, t)
                },
                RESET_INIT_REQUEST: function(e) {
                    E(e)
                },
                RESET_INIT_SUCCESS: function(e) {
                    d(e)
                },
                RESET_INIT_FAILURE: function(e, t) {
                    _(e, t)
                },
                RESET_FINISH_REQUEST: function(e) {
                    E(e)
                },
                RESET_FINISH_SUCCESS: function(e) {
                    d(e)
                },
                RESET_FINISH_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_GENERAL_CONFIG_REQUEST: function(e) {
                    E(e)
                },
                GET_GENERAL_CONFIG_SUCCESS: function(e, t) {
                    d(e), e.generalConfigs = t
                },
                GET_GENERAL_CONFIG_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_PASSWORD_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_PASSWORD_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_PASSWORD_FAILURE: function(e, t) {
                    _(e, t)
                },
                LOGOUT: function(e) {
                    e.isLoggedIn = !1, e.idToken = ""
                },
                LOGIN_VERIFICATION_REQUEST: function(e) {
                    E(e)
                },
                LOGIN_VERIFICATION_SUCCESS: function(e, t) {
                    d(e), e.verificationCode.expiresIn = t.expiresIn
                },
                LOGIN_VERIFICATION_FAILURE: function(e, t) {
                    _(e, t), e.isLoggedIn = !1
                }
            },
            b = {
                login: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c, o;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, r = t.params, a("LOGIN_REQUEST"), n.prev = 3, n.next = 6, m["c"].login(r);
                                case 6:
                                    c = n.sent, o = c.data, s["a"].setToken(T(o).id_token), a("LOGIN_SUCCESS", T(o.result), T(o).id_token), n.next = 15;
                                    break;
                                case 12:
                                    n.prev = 12, n.t0 = n["catch"](3), a("LOGIN_FAILURE", n.t0);
                                case 15:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [3, 12]
                        ])
                    })))()
                },
                sendLoginVerificationCode: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c, o;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, r = t.params, a("LOGIN_REQUEST"), n.prev = 3, n.next = 6, m["c"].sendLoginVerificationCode(r);
                                case 6:
                                    c = n.sent, o = c.data, s["a"].setToken(T(o).id_token), a("LOGIN_SUCCESS", T(o.result), T(o).id_token), n.next = 15;
                                    break;
                                case 12:
                                    n.prev = 12, n.t0 = n["catch"](3), a("LOGIN_FAILURE", n.t0);
                                case 15:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [3, 12]
                        ])
                    })))()
                },
                register: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, r = t.params, a("REGISTER_REQUEST"), n.prev = 3, n.next = 6, m["c"].register(r);
                                case 6:
                                    a("REGISTER_SUCCESS"), n.next = 12;
                                    break;
                                case 9:
                                    n.prev = 9, n.t0 = n["catch"](3), a("REGISTER_FAILURE", n.t0);
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [3, 9]
                        ])
                    })))()
                },
                getAccountInfo: function(e) {
                    return Object(S["a"])(regeneratorRuntime.mark((function t() {
                        var n, a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.commit, n("GET_ACCOUNT_INFO_REQUEST"), t.prev = 2, t.next = 5, m["c"].getAccountInfo();
                                case 5:
                                    a = t.sent, r = a.data, n("GET_ACCOUNT_INFO_SUCCESS", T(r) || {}), localStorage.setItem("userData", JSON.stringify(T(r))), t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11, t.t0 = t["catch"](2), n("GET_ACCOUNT_INFO_FAILURE", t.t0);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 11]
                        ])
                    })))()
                },
                resetInit: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, r = t.params, a("RESET_INIT_REQUEST"), n.prev = 3, n.next = 6, m["c"].resetInit(r);
                                case 6:
                                    a("RESET_INIT_SUCCESS"), n.next = 12;
                                    break;
                                case 9:
                                    n.prev = 9, n.t0 = n["catch"](3), a("RESET_INIT_FAILURE", n.t0);
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [3, 9]
                        ])
                    })))()
                },
                resetFinish: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, r = t.params, a("RESET_FINISH_REQUEST"), n.prev = 3, n.next = 6, m["c"].resetFinish(r);
                                case 6:
                                    a("RESET_FINISH_SUCCESS"), n.next = 12;
                                    break;
                                case 9:
                                    n.prev = 9, n.t0 = n["catch"](3), a("RESET_FINISH_FAILURE", n.t0);
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [3, 9]
                        ])
                    })))()
                },
                getGeneralConfig: function(e) {
                    return Object(S["a"])(regeneratorRuntime.mark((function t() {
                        var n, a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.commit, n("GET_GENERAL_CONFIG_REQUEST"), t.prev = 2, t.next = 5, m["c"].getGeneralConfig();
                                case 5:
                                    a = t.sent, r = a.data, n("GET_GENERAL_CONFIG_SUCCESS", T(r) || {}), t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10, t.t0 = t["catch"](2), n("GET_GENERAL_CONFIG_FAILURE", t.t0);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updatePassword: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_PASSWORD_REQUEST"), n.prev = 2, n.next = 5, m["c"].updatePassword(t);
                                case 5:
                                    a("UPDATE_PASSWORD_SUCCESS"), n.next = 11;
                                    break;
                                case 8:
                                    n.prev = 8, n.t0 = n["catch"](2), a("UPDATE_PASSWORD_FAILURE", n.t0);
                                case 11:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 8]
                        ])
                    })))()
                },
                logout: function(e) {
                    var t = e.commit;
                    s["a"].clearLocalStorage(), t("LOGOUT")
                },
                getLoginVerificationCode: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("LOGIN_VERIFICATION_REQUEST"), n.prev = 2, n.next = 5, m["c"].getLoginVerificationCode(t);
                                case 5:
                                    r = n.sent, c = r.data, a("LOGIN_VERIFICATION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("LOGIN_VERIFICATION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            O = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                isLoggedIn: function(e) {
                    return e.isLoggedIn
                },
                user: function(e) {
                    return e.user
                },
                generalConfigs: function(e) {
                    return e.generalConfigs
                },
                verificationCode: function(e) {
                    return e.verificationCode
                }
            }),
            N = s["a"].getToken(),
            L = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    idToken: N,
                    isLoggedIn: !!N,
                    user: {
                        firstName: "",
                        lastName: "",
                        imageUrl: "",
                        email: "",
                        phoneNumber: ""
                    },
                    generalConfigs: {},
                    verificationCode: {}
                }),
                getters: O,
                mutations: g,
                actions: b
            },
            v = n("fddc"),
            P = n.n(v),
            k = n("bd80"),
            D = n.n(k),
            w = n("fea2"),
            G = n.n(w),
            y = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    userStats: {
                        content: []
                    },
                    depositStats: {
                        content: []
                    },
                    adsAccountStats: {
                        content: []
                    },
                    bonusTotal: 0
                }),
                getters: G.a,
                mutations: P.a,
                actions: D.a
            },
            M = {
                GET_ACCOUNTS_REQUEST: function(e) {
                    E(e)
                },
                GET_ACCOUNTS_SUCCESS: function(e, t) {
                    d(e), e.accountTickets = t
                },
                GET_ACCOUNTS_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_ACCOUNTS_NO_PAGING_REQUEST: function(e) {
                    E(e)
                },
                GET_ACCOUNTS_NO_PAGING_SUCCESS: function(e, t) {
                    d(e), e.listAccountNoPaging = t
                },
                GET_ACCOUNTS_NO_PAGING_FAILURE: function(e, t) {
                    _(e, t)
                },
                APPROVE_TICKET_STATUS_REQUEST: function(e) {
                    E(e)
                },
                APPROVE_TICKET_STATUS_SUCCESS: function(e) {
                    d(e)
                },
                APPROVE_TICKET_STATUS_FAILURE: function(e, t) {
                    _(e, t)
                },
                REJECT_TICKET_STATUS_REQUEST: function(e) {
                    E(e)
                },
                REJECT_TICKET_STATUS_SUCCESS: function(e) {
                    d(e)
                },
                REJECT_TICKET_STATUS_FAILURE: function(e, t) {
                    _(e, t)
                },
                COMMENT_TICKET_STATUS_REQUEST: function(e) {
                    E(e)
                },
                COMMENT_TICKET_STATUS_SUCCESS: function(e) {
                    d(e)
                },
                COMMENT_TICKET_STATUS_FAILURE: function(e, t) {
                    _(e, t)
                },
                CREARRE_ADS_STATUS_REQUEST: function(e) {
                    E(e)
                },
                CREARRE_ADS_STATUS_SUCCESS: function(e) {
                    d(e)
                },
                CREARRE_ADS_STATUS_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            j = {
                getAccountTickets: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_ACCOUNTS_REQUEST"), n.prev = 2, n.next = 5, m["b"].getAccountTickets(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_ACCOUNTS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_ACCOUNTS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getAccountNoPagingList: function(e) {
                    return Object(S["a"])(regeneratorRuntime.mark((function t() {
                        var n, a, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.commit, n("GET_ACCOUNTS_NO_PAGING_REQUEST"), t.prev = 2, t.next = 5, m["b"].getListAccountNoPaging();
                                case 5:
                                    a = t.sent, r = a.data, n("GET_ACCOUNTS_NO_PAGING_SUCCESS", T(r)), t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10, t.t0 = t["catch"](2), n("GET_ACCOUNTS_NO_PAGING_FAILURE", t.t0);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 10]
                        ])
                    })))()
                },
                approveTicket: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("APPROVE_TICKET_STATUS_REQUEST"), n.prev = 2, n.next = 5, m["b"].approveTicket(t);
                                case 5:
                                    r = n.sent, c = r.data, a("APPROVE_TICKET_STATUS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("APPROVE_TICKET_STATUS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                rejectTicket: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("REJECT_TICKET_STATUS_REQUEST"), n.prev = 2, n.next = 5, m["b"].rejectTicket(t);
                                case 5:
                                    r = n.sent, c = r.data, a("REJECT_TICKET_STATUS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("REJECT_TICKET_STATUS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                commentTicket: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("COMMENT_TICKET_STATUS_REQUEST"), n.prev = 2, n.next = 5, m["b"].commentTicket(t);
                                case 5:
                                    r = n.sent, c = r.data, a("COMMENT_TICKET_STATUS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("COMMENT_TICKET_STATUS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            x = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                accountTickets: function(e) {
                    return e.accountTickets
                },
                listAccountNoPaging: function(e) {
                    return e.listAccountNoPaging
                }
            }),
            F = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    accountTickets: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    listAccountNoPaging: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: x,
                mutations: M,
                actions: j
            },
            B = {
                GET_PAYMENT_TICKET_REQUEST: function(e) {
                    E(e)
                },
                GET_PAYMENT_TICKET_SUCCESS: function(e, t) {
                    d(e), e.paymentTickets = t
                },
                GET_PAYMENT_TICKET_FAILURE: function(e, t) {
                    _(e, t)
                },
                APPROVE_TICKET_STATUS_REQUEST: function(e) {
                    E(e)
                },
                APPROVE_TICKET_STATUS_SUCCESS: function(e) {
                    d(e)
                },
                APPROVE_TICKET_STATUS_FAILURE: function(e, t) {
                    _(e, t)
                },
                REJECT_TICKET_STATUS_REQUEST: function(e) {
                    E(e)
                },
                REJECT_TICKET_STATUS_SUCCESS: function(e) {
                    d(e)
                },
                REJECT_TICKET_STATUS_FAILURE: function(e, t) {
                    _(e, t)
                },
                COMMENT_TICKET_STATUS_REQUEST: function(e) {
                    E(e)
                },
                COMMENT_TICKET_STATUS_SUCCESS: function(e) {
                    d(e)
                },
                COMMENT_TICKET_STATUS_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_TRANSACTION_REQUEST: function(e) {
                    E(e)
                },
                GET_TRANSACTION_SUCCESS: function(e, t) {
                    d(e), e.transactions = t
                },
                GET_TRANSACTION_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_ADSHISTORIES_REQUEST: function(e) {
                    E(e)
                },
                GET_ADSHISTORIES_SUCCESS: function(e, t) {
                    d(e), e.adsAccountHistories = t
                },
                GET_ADSHISTORIES_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            Q = {
                getPaymentTickets: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_PAYMENT_TICKET_REQUEST"), n.prev = 2, n.next = 5, m["k"].getPaymentTickets(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_PAYMENT_TICKET_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_PAYMENT_TICKET_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                approveTicket: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("APPROVE_TICKET_STATUS_REQUEST"), n.prev = 2, n.next = 5, m["k"].approveTicket(t);
                                case 5:
                                    r = n.sent, c = r.data, a("APPROVE_TICKET_STATUS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("APPROVE_TICKET_STATUS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                rejectTicket: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("REJECT_TICKET_STATUS_REQUEST"), n.prev = 2, n.next = 5, m["k"].rejectTicket(t);
                                case 5:
                                    r = n.sent, c = r.data, a("REJECT_TICKET_STATUS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("REJECT_TICKET_STATUS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                commentTicket: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("COMMENT_TICKET_STATUS_REQUEST"), n.prev = 2, n.next = 5, m["k"].commentTicket(t);
                                case 5:
                                    r = n.sent, c = r.data, a("COMMENT_TICKET_STATUS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("COMMENT_TICKET_STATUS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getTransactions: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_TRANSACTION_REQUEST"), n.prev = 2, n.next = 5, m["k"].getTransactions(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_TRANSACTION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_TRANSACTION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getAdsAccountHistories: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_ADSHISTORIES_REQUEST"), n.prev = 2, n.next = 5, m["k"].getAdsAccountHistories(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_ADSHISTORIES_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_ADSHISTORIES_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            K = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                paymentTickets: function(e) {
                    return e.paymentTickets
                },
                transactions: function(e) {
                    return e.transactions
                },
                adsAccountHistories: function(e) {
                    return e.adsAccountHistories
                }
            }),
            V = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    paymentTickets: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    transactions: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    adsAccountHistories: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: K,
                mutations: B,
                actions: Q
            },
            H = {
                GET_USER_DETAIL_REQUEST: function(e) {
                    E(e)
                },
                GET_USER_DETAIL_SUCCESS: function(e, t) {
                    d(e), e.userDetail = t
                },
                GET_USER_DETAIL_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_ADS_ACCOUNTS_USER_REQUEST: function(e) {
                    E(e)
                },
                GET_ADS_ACCOUNTS_USER_SUCCESS: function(e, t) {
                    d(e), e.userAdsAccounts = t
                },
                GET_ADS_ACCOUNTS_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_USER_REQUEST: function(e) {
                    E(e)
                },
                GET_USER_SUCCESS: function(e, t) {
                    d(e), e.listUser = t
                },
                GET_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                ACTIVE_USER_REQUEST: function(e) {
                    E(e)
                },
                ACTIVE_USER_SUCCESS: function(e) {
                    d(e)
                },
                ACTIVE_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                BLOCK_USER_REQUEST: function(e) {
                    E(e)
                },
                BLOCK_USER_SUCCESS: function(e) {
                    d(e)
                },
                BLOCK_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                ADD_WHITE_LIST_BLOCK_REQUEST: function(e) {
                    E(e)
                },
                ADD_WHITE_LIST_BLOCK_SUCCESS: function(e) {
                    d(e)
                },
                ADD_WHITE_LIST_BLOCK_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_USER_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_USER_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                ADD_PRODUCT_LINKS_REQUEST: function(e) {
                    E(e)
                },
                ADD_PRODUCT_LINKS_SUCCESS: function(e) {
                    d(e)
                },
                ADD_PRODUCT_LINKS_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_STATUS_PRODUCT_LINKS_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_STATUS_PRODUCT_LINKS_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_STATUS_PRODUCT_LINKS_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_BALANCE_USER_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_BALANCE_USER_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_BALANCE_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                CHANGE_PLAN_TYPE_REQUEST: function(e) {
                    E(e)
                },
                CHANGE_PLAN_TYPE_SUCCESS: function(e) {
                    d(e)
                },
                CHANGE_PLAN_TYPE_FAILURE: function(e, t) {
                    _(e, t)
                },
                DELETE_ACCOUNT_REQUEST: function(e) {
                    E(e)
                },
                DELETE_ACCOUNT_SUCCESS: function(e) {
                    d(e)
                },
                DELETE_ACCOUNT_FAILURE: function(e, t) {
                    _(e, t)
                },
                ADD_USER_REQUEST: function(e) {
                    E(e)
                },
                ADD_USER_SUCCESS: function(e) {
                    d(e)
                },
                ADD_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                PROFILE_STATUS_UPDATE_REQUEST: function(e) {
                    E(e)
                },
                PROFILE_STATUS_UPDATE_SUCCESS: function(e) {
                    d(e)
                },
                PROFILE_STATUS_UPDATE_FAILURE: function(e, t) {
                    _(e, t)
                },
                MARK_KYC_USER_REQUEST: function(e) {
                    E(e)
                },
                MARK_KYC_USER_SUCCESS: function(e) {
                    d(e)
                },
                MARK_KYC_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_LIST_AM_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_AM_SUCCESS: function(e, t) {
                    d(e), e.listAM = t
                },
                GET_LIST_AM_FAILURE: function(e, t) {
                    _(e, t)
                },
                ASSIGN_TO_AM_REQUEST_REQUEST: function(e) {
                    E(e)
                },
                ASSIGN_TO_AM_REQUEST_SUCCESS: function(e) {
                    d(e)
                },
                ASSIGN_TO_AM_REQUEST_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_LIST_ADMIN_NOTE_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_ADMIN_NOTE_SUCCESS: function(e, t) {
                    d(e), e.listAdminNote = t
                },
                GET_LIST_ADMIN_NOTE_FAILURE: function(e, t) {
                    _(e, t)
                },
                ADD_NOTE_REQUEST: function(e) {
                    E(e)
                },
                ADD_NOTE_SUCCESS: function(e) {
                    d(e)
                },
                ADD_NOTE_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_NOTE_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_NOTE_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_NOTE_FAILURE: function(e, t) {
                    _(e, t)
                },
                DELETE_NOTE_REQUEST: function(e) {
                    E(e)
                },
                DELETE_NOTE_SUCCESS: function(e) {
                    d(e)
                },
                DELETE_NOTE_FAILURE: function(e, t) {
                    _(e, t)
                },
                ASSIGN_MULTI_TO_AM_REQUEST: function(e) {
                    E(e)
                },
                ASSIGN_MULTI_TO_AM_SUCCESS: function(e) {
                    d(e)
                },
                ASSIGN_MULTI_TO_AM_FAILURE: function(e, t) {
                    _(e, t)
                },
                RESIGN_MULTI_TO_AM_REQUEST: function(e) {
                    E(e)
                },
                RESIGN_MULTI_TO_AM_SUCCESS: function(e) {
                    d(e)
                },
                RESIGN_MULTI_TO_AM_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_LIST_PARTNER_BCS_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_PARTNER_BCS_SUCCESS: function(e, t) {
                    d(e);
                    var n = t.hasConnectedTikTok,
                        a = t.list;
                    e.hasConnectedTikTok = n, e.listPartnerBC = a || []
                },
                GET_LIST_PARTNER_BCS_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_TIER_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_TIER_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_TIER_FAILURE: function(e, t) {
                    _(e, t)
                },
                CREATE_ADS_ACCOUNT_REQUEST: function(e) {
                    E(e)
                },
                CREATE_ADS_ACCOUNT_SUCCESS: function(e) {
                    d(e)
                },
                CREATE_ADS_ACCOUNT_FAILURE: function(e, t) {
                    _(e, t)
                },
                CLOSE_ACCOUNT_REQUEST: function(e) {
                    E(e)
                },
                CLOSE_ACCOUNT_SUCCESS: function(e) {
                    d(e)
                },
                CLOSE_ACCOUNT_FAILURE: function(e, t) {
                    _(e, t)
                },
                DISCONNECT_TIKTOK_REQUEST: function(e) {
                    E(e)
                },
                DISCONNECT_TIKTOK_SUCCESS: function(e) {
                    d(e)
                },
                DISCONNECT_TIKTOK_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_DETAIL_USER_RELATED_REQUEST: function(e) {
                    E(e)
                },
                GET_DETAIL_USER_RELATED_SUCCESS: function(e, t) {
                    d(e), e.detailUserRelated = t
                },
                GET_DETAIL_USER_RELATED_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            Y = {
                getUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_USER_DETAIL_REQUEST"), n.prev = 2, n.next = 5, m["o"].getUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_USER_DETAIL_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_USER_DETAIL_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getAdsAccountsUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_ADS_ACCOUNTS_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].getAdsAccountsUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_ADS_ACCOUNTS_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_ADS_ACCOUNTS_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].getListUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                activeUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ACTIVE_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].activeUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ACTIVE_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ACTIVE_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                blockUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("BLOCK_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].blockUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("BLOCK_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("BLOCK_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                addWhiteListBlock: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ADD_WHITE_LIST_BLOCK_REQUEST"), n.prev = 2, n.next = 5, m["o"].addWhiteListBlock(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ADD_WHITE_LIST_BLOCK_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ADD_WHITE_LIST_BLOCK_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].updateUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                createProductLinks: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ADD_PRODUCT_LINKS_REQUEST"), n.prev = 2, n.next = 5, m["o"].createProductLinks(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ADD_PRODUCT_LINKS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ADD_PRODUCT_LINKS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateStatusProductLinks: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_STATUS_PRODUCT_LINKS_REQUEST"), n.prev = 2, n.next = 5, m["o"].updateStatusProductLinks(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_STATUS_PRODUCT_LINKS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_STATUS_PRODUCT_LINKS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateBalanceUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_BALANCE_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].updateBalanceUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_BALANCE_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_BALANCE_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                changePlanType: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("CHANGE_PLAN_TYPE_REQUEST"), n.prev = 2, n.next = 5, m["o"].changePlanType(t);
                                case 5:
                                    r = n.sent, c = r.data, a("CHANGE_PLAN_TYPE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("CHANGE_PLAN_TYPE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                deleteAdsAccount: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("DELETE_ACCOUNT_REQUEST"), n.prev = 2, n.next = 5, m["o"].deleteAdsAccount(t);
                                case 5:
                                    r = n.sent, c = r.data, a("DELETE_ACCOUNT_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("DELETE_ACCOUNT_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                addNewUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ADD_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].addNewUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ADD_USER_SUCCESS", c), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ADD_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                profileStatusUpdate: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("PROFILE_STATUS_UPDATE_REQUEST"), n.prev = 2, n.next = 5, m["o"].profileStatusUpdate(t);
                                case 5:
                                    r = n.sent, c = r.data, a("PROFILE_STATUS_UPDATE_SUCCESS", c), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("PROFILE_STATUS_UPDATE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                markKYCUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("MARK_KYC_USER_REQUEST"), n.prev = 2, n.next = 5, m["o"].markKYCUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("MARK_KYC_USER_SUCCESS", c), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("MARK_KYC_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListAM: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_AM_REQUEST"), n.prev = 2, n.next = 5, m["o"].getListAM(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_AM_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_AM_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListAdminNote: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_ADMIN_NOTE_REQUEST"), n.prev = 2, n.next = 5, m["o"].listAdminNote(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_ADMIN_NOTE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_ADMIN_NOTE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                handleAddNote: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ADD_NOTE_REQUEST"), n.prev = 2, n.next = 5, m["o"].addNote(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ADD_NOTE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ADD_NOTE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                handleUpdateNote: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_NOTE_REQUEST"), n.prev = 2, n.next = 5, m["o"].updateNote(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_NOTE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_NOTE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                handleDeleteNote: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("DELETE_NOTE_REQUEST"), n.prev = 2, n.next = 5, m["o"].deleteNote(t);
                                case 5:
                                    r = n.sent, c = r.data, a("DELETE_NOTE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("DELETE_NOTE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                assignMultiUserToAM: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ASSIGN_MULTI_TO_AM_REQUEST"), n.prev = 2, n.next = 5, m["o"].assignMultiUserToAM(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ASSIGN_MULTI_TO_AM_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ASSIGN_MULTI_TO_AM_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                resignMultiUserToAM: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("RESIGN_MULTI_TO_AM_REQUEST"), n.prev = 2, n.next = 5, m["o"].resignMultiUserToAM(t);
                                case 5:
                                    r = n.sent, c = r.data, a("RESIGN_MULTI_TO_AM_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("RESIGN_MULTI_TO_AM_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListPartnerBcs: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_PARTNER_BCS_REQUEST"), n.prev = 2, n.next = 5, m["o"].getListPartnerBcs(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_PARTNER_BCS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_PARTNER_BCS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateTier: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_TIER_REQUEST"), n.prev = 2, n.next = 5, m["o"].updateTier(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_TIER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_TIER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                createAdsAccount: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("CREATE_ADS_ACCOUNT_REQUEST"), n.prev = 2, n.next = 5, m["o"].createAdsAccount(t);
                                case 5:
                                    r = n.sent, c = r.data, a("CREATE_ADS_ACCOUNT_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("CREATE_ADS_ACCOUNT_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                closeAdsAccount: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("CLOSE_ACCOUNT_REQUEST"), n.prev = 2, n.next = 5, m["o"].closeAdsAccount(t);
                                case 5:
                                    r = n.sent, c = r.data, a("CLOSE_ACCOUNT_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("CLOSE_ACCOUNT_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                disconnectTiktok: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("DISCONNECT_TIKTOK_REQUEST"), n.prev = 2, n.next = 5, m["o"].disconnectTiktok(t);
                                case 5:
                                    r = n.sent, c = r.data, a("DISCONNECT_TIKTOK_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("DISCONNECT_TIKTOK_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                fetchDetailUserRelated: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_DETAIL_USER_RELATED_REQUEST"), n.prev = 2, n.next = 5, m["o"].fetchDetailUserRelated(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_DETAIL_USER_RELATED_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_DETAIL_USER_RELATED_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            W = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listUser: function(e) {
                    return e.listUser
                },
                userDetail: function(e) {
                    return e.userDetail
                },
                userAdsAccounts: function(e) {
                    return e.userAdsAccounts
                },
                listAM: function(e) {
                    return e.listAM
                },
                listAdminNote: function(e) {
                    return e.listAdminNote
                },
                hasConnectedTikTok: function(e) {
                    return e.hasConnectedTikTok
                },
                listPartnerBC: function(e) {
                    return e.listPartnerBC
                },
                detailUserRelated: function(e) {
                    return e.detailUserRelated
                }
            }),
            z = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listUser: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    userDetail: {},
                    userAdsAccounts: [],
                    listAM: [],
                    listAdminNote: [],
                    hasConnectedTikTok: !1,
                    listPartnerBC: [],
                    detailUserRelated: {}
                }),
                getters: W,
                mutations: H,
                actions: Y
            },
            J = {
                GET_ALL_TASKS: function(e) {
                    E(e)
                },
                GET_ALL_TASKS_SUCCESS: function(e, t) {
                    d(e), e.allTask = t
                },
                GET_ALL_TASKS_FAILURE: function(e, t) {
                    _(e, t)
                },
                SET_SEARCH_TERM: function(e, t) {
                    e.searchTask = t
                }
            },
            q = {
                getAllTask: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_ALL_TASKS"), n.prev = 2, n.next = 5, m["h"].getAllTask(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_ALL_TASKS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_ALL_TASKS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                setSearchTask: function(e, t) {
                    var n = e.commit;
                    n("SET_SEARCH_TERM", t)
                }
            },
            Z = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                allTask: function(e) {
                    return e.allTask
                },
                searchTask: function(e) {
                    return e.searchTask
                }
            }),
            $ = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    allTask: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    searchTask: {
                        id: "",
                        status: ""
                    }
                }),
                getters: Z,
                mutations: J,
                actions: q
            },
            X = {
                GET_SUBSCRIPTIONS_REQUEST: function(e) {
                    E(e)
                },
                GET_SUBSCRIPTIONS_SUCCESS: function(e, t) {
                    d(e), e.subscriptions = t
                },
                GET_SUBSCRIPTIONS_FAILURE: function(e, t) {
                    _(e, t)
                },
                APROVE_SUBSCRIPTION_REQUEST: function(e) {
                    E(e)
                },
                APROVE_SUBSCRIPTION_SUCCESS: function(e, t) {
                    d(e), e.subscriptions = t
                },
                APROVE_SUBSCRIPTION_FAILURE: function(e, t) {
                    _(e, t)
                },
                REJECT_SUBSCRIPTION_REQUEST: function(e) {
                    E(e)
                },
                REJECT_SUBSCRIPTION_SUCCESS: function(e, t) {
                    d(e), e.subscriptions = t
                },
                REJECT_SUBSCRIPTION_FAILURE: function(e, t) {
                    _(e, t)
                },
                DELETE_SUBSCRIPTION_REQUEST: function(e) {
                    E(e)
                },
                DELETE_SUBSCRIPTION_SUCCESS: function(e) {
                    d(e)
                },
                DELETE_SUBSCRIPTION_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            ee = {
                getSubscriptions: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_SUBSCRIPTIONS_REQUEST"), n.prev = 2, n.next = 5, m["n"].getSubscriptions(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_SUBSCRIPTIONS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_SUBSCRIPTIONS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                approveSubscription: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("APROVE_SUBSCRIPTION_REQUEST"), n.prev = 2, n.next = 5, m["n"].approveSubscription(t);
                                case 5:
                                    r = n.sent, c = r.data, a("APROVE_SUBSCRIPTION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("APROVE_SUBSCRIPTION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                rejectSubscription: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("REJECT_SUBSCRIPTION_REQUEST"), n.prev = 2, n.next = 5, m["n"].rejectSubscription(t);
                                case 5:
                                    r = n.sent, c = r.data, a("REJECT_SUBSCRIPTION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("REJECT_SUBSCRIPTION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                deleteSubscription: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("DELETE_SUBSCRIPTION_REQUEST"), n.prev = 2, n.next = 5, m["n"].deleteSubscription(t);
                                case 5:
                                    r = n.sent, c = r.data, a("DELETE_SUBSCRIPTION_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("DELETE_SUBSCRIPTION_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            te = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                subscriptions: function(e) {
                    return e.subscriptions
                }
            }),
            ne = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    subscriptions: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: te,
                mutations: X,
                actions: ee
            },
            ae = {
                GET_USER_ANALYTICS_REQUEST: function(e) {
                    E(e)
                },
                GET_USER_ANALYTICS_SUCCESS: function(e, t) {
                    d(e), e.user = t
                },
                GET_USER_ANALYTICS_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_DEPOSIT_ANALYTICS_REQUEST: function(e) {
                    E(e)
                },
                GET_DEPOSIT_ANALYTICS_SUCCESS: function(e, t) {
                    d(e), e.deposit = t
                },
                GET_DEPOSIT_ANALYTICS_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_SPENDING_ANALYTICS_REQUEST: function(e) {
                    E(e)
                },
                GET_SPENDING_ANALYTICS_SUCCESS: function(e, t) {
                    d(e), e.spending = t
                },
                GET_SPENDING_ANALYTICS_FAILURE: function(e, t) {
                    _(e, t)
                },
                SET_TYPE_USER_SORT: function(e, t) {
                    e.typeSort = t
                },
                SET_LIMIT_DAY_USER: function(e, t) {
                    e.limitDay = t
                },
                SET_LIMIT_MONTH_USER: function(e, t) {
                    e.limitMonth = t
                },
                SET_TYPE_DEPOSIT_SORT: function(e, t) {
                    e.typeSortDeposit = t
                },
                SET_LIMIT_DAY_DEPOSIT: function(e, t) {
                    e.limitDayDeposit = t
                },
                SET_LIMIT_MONTH_DEPOSIT: function(e, t) {
                    e.limitMonthDeposit = t
                },
                SET_TYPE_SPENDING_SORT: function(e, t) {
                    e.typeSortSpending = t
                },
                SET_LIMIT_DAY_SPENDING: function(e, t) {
                    e.limitDaySpending = t
                },
                SET_LIMIT_MONTH_SPENDING: function(e, t) {
                    e.limitMonthSpending = t
                },
                GET_USERS_REQUEST: function(e) {
                    E(e)
                },
                GET_USERS_SUCCESS: function(e, t) {
                    d(e), e.users = t
                },
                GET_USERS_FAILURE: function(e, t) {
                    _(e, t), e.users.totalUsers = null
                },
                GET_DEPOSITS_REQUEST: function(e) {
                    E(e)
                },
                GET_DEPOSITS_SUCCESS: function(e, t) {
                    d(e), e.deposits = t
                },
                GET_DEPOSITS_FAILURE: function(e, t) {
                    _(e, t), e.deposits.monthlyDeposit = null
                },
                GET_ADS_ACCOUNTS_REQUEST: function(e) {
                    E(e)
                },
                GET_ADS_ACCOUNTS_SUCCESS: function(e, t) {
                    d(e), e.adsAccounts = t
                },
                GET_ADS_ACCOUNTS_FAILURE: function(e, t) {
                    _(e, t), e.adsAccounts.totalAdsAccounts = null
                },
                GET_BONUS_REQUEST: function(e) {
                    E(e)
                },
                GET_BONUS_SUCCESS: function(e, t) {
                    d(e), e.bonus = t
                },
                GET_BONUS_FAILURE: function(e, t) {
                    _(e, t), e.bonus.totalBonus = null
                },
                GET_BALANCES_REQUEST: function(e) {
                    E(e)
                },
                GET_BALANCES_SUCCESS: function(e, t) {
                    d(e), e.balances = t
                },
                GET_BALANCES_FAILURE: function(e, t) {
                    _(e, t), e.balances.totalBalance = null
                }
            },
            re = {
                getUserAnalytics: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_USER_ANALYTICS_REQUEST"), n.prev = 2, n.next = 5, m["m"].getUserStats(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_USER_ANALYTICS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_USER_ANALYTICS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getDepositAnalytics: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_DEPOSIT_ANALYTICS_REQUEST"), n.prev = 2, n.next = 5, m["m"].getDepositStats(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_DEPOSIT_ANALYTICS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_DEPOSIT_ANALYTICS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getSpendingAnalytics: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_SPENDING_ANALYTICS_REQUEST"), n.prev = 2, n.next = 5, m["m"].getSpendingStats(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_SPENDING_ANALYTICS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_SPENDING_ANALYTICS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getUsers: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_USERS_REQUEST"), n.prev = 2, n.next = 5, m["m"].getUsers(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_USERS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_USERS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getDeposits: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_DEPOSITS_REQUEST"), n.prev = 2, n.next = 5, m["m"].getDeposits(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_DEPOSITS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_DEPOSITS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getAdsAccounts: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_ADS_ACCOUNTS_REQUEST"), n.prev = 2, n.next = 5, m["m"].getAdsAccount(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_ADS_ACCOUNTS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_ADS_ACCOUNTS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getBonus: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_BONUS_REQUEST"), n.prev = 2, n.next = 5, m["m"].getBonus(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_BONUS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_BONUS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getBalances: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_BALANCES_REQUEST"), n.prev = 2, n.next = 5, m["m"].getBalances(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_BALANCES_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_BALANCES_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            ce = (n("d81d"), n("2ef0")),
            oe = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                blockedUsers: function(e) {
                    var t = e.user.statisticsUser.filter((function(e) {
                            return "blocked" === e.status
                        })),
                        n = Object(ce["orderBy"])(t, [e.typeSort], ["asc"]),
                        a = [];
                    if ("day" === e.typeSort)
                        for (var r = function(e) {
                                var t = n.find((function(t) {
                                    return t.day === e
                                }));
                                t ? a.push({
                                    status: t.status,
                                    day: t.day,
                                    total: t.total
                                }) : a.push({
                                    status: "blocked",
                                    day: e,
                                    total: 0
                                })
                            }, c = 1; c <= e.limitDay; c += 1) r(c);
                    else
                        for (var o = function(e) {
                                var t = n.find((function(t) {
                                    return t.month === e
                                }));
                                t ? a.push({
                                    status: t.status,
                                    month: t.month,
                                    total: t.total
                                }) : a.push({
                                    status: "blocked",
                                    month: e,
                                    total: 0
                                })
                            }, i = 1; i <= e.limitMonth; i += 1) o(i);
                    return a.map((function(e) {
                        return e.total || 0
                    }))
                },
                activedUsers: function(e) {
                    var t = e.user.statisticsUser.filter((function(e) {
                            return "active" === e.status
                        })),
                        n = Object(ce["orderBy"])(t, [e.typeSort], ["asc"]),
                        a = [];
                    if ("day" === e.typeSort)
                        for (var r = function(e) {
                                var t = n.find((function(t) {
                                    return t.day === e
                                }));
                                t ? a.push({
                                    status: t.status,
                                    day: t.day,
                                    total: t.total
                                }) : a.push({
                                    status: "active",
                                    day: e,
                                    total: 0
                                })
                            }, c = 1; c <= e.limitDay; c += 1) r(c);
                    else
                        for (var o = function(e) {
                                var t = n.find((function(t) {
                                    return t.month === e
                                }));
                                t ? a.push({
                                    status: t.status,
                                    month: t.month,
                                    total: t.total
                                }) : a.push({
                                    status: "active",
                                    month: e,
                                    total: 0
                                })
                            }, i = 1; i <= e.limitMonth; i += 1) o(i);
                    return a.map((function(e) {
                        return e.total || 0
                    }))
                },
                typeSort: function(e) {
                    return e.typeSort
                },
                typeSortDeposit: function(e) {
                    return e.typeSortDeposit
                },
                typeSortSpending: function(e) {
                    return e.typeSortSpending
                },
                depositData: function(e) {
                    var t = Object(ce["orderBy"])(e.deposit.statisticsDeposit, [e.typeSortDeposit], ["asc"]),
                        n = [];
                    if ("day" === e.typeSortDeposit)
                        for (var a = function(e) {
                                var a = t.find((function(t) {
                                    return t.day === e
                                }));
                                a ? n.push({
                                    day: a.day,
                                    deposit: a.deposit
                                }) : n.push({
                                    day: e,
                                    deposit: 0
                                })
                            }, r = 1; r <= e.limitDayDeposit; r += 1) a(r);
                    else
                        for (var c = function(e) {
                                var a = t.find((function(t) {
                                    return t.month === e
                                }));
                                a ? n.push({
                                    month: a.month,
                                    deposit: a.deposit
                                }) : n.push({
                                    month: e,
                                    deposit: 0
                                })
                            }, o = 1; o <= e.limitMonthDeposit; o += 1) c(o);
                    return n.map((function(e) {
                        return e.deposit < 0 ? {
                            value: e.deposit,
                            itemStyle: {
                                color: "#F02548"
                            }
                        } : e.deposit || 0
                    }))
                },
                spendingData: function(e) {
                    var t = Object(ce["orderBy"])(e.spending.statisticsSpending, [e.typeSortSpending], ["asc"]),
                        n = [];
                    if ("day" === e.typeSortSpending)
                        for (var a = function(e) {
                                var a = t.find((function(t) {
                                    return t.day === e
                                })) || {
                                    day: e,
                                    spending: 0
                                };
                                n.push({
                                    day: a.day,
                                    spending: a.spending
                                })
                            }, r = 1; r <= e.limitDaySpending; r += 1) a(r);
                    else
                        for (var c = function(e) {
                                var a = t.find((function(t) {
                                    return t.month === e
                                })) || {
                                    month: e,
                                    spending: 0
                                };
                                n.push({
                                    month: a.month,
                                    spending: a.spending
                                })
                            }, o = 1; o <= e.limitMonthSpending; o += 1) c(o);
                    return n.map((function(e) {
                        return e.spending < 0 ? {
                            value: e.spending,
                            itemStyle: {
                                color: "#F02548"
                            }
                        } : e.spending || 0
                    }))
                },
                monthlyAnalytics: function(e) {
                    return [{
                        label: "Total User TTM",
                        value: null !== e.users.totalUsers ? e.users.totalUsers : "N/A",
                        icon: n("e1e1")
                    }, {
                        label: "Monthly Deposit",
                        value: null !== e.deposits.monthlyDeposit ? "$".concat(parseFloat(e.deposits.monthlyDeposit).toLocaleString("en-US")) : "N/A",
                        icon: n("f472")
                    }, {
                        label: "Total Ads Account",
                        value: null !== e.adsAccounts.totalAdsAccounts ? e.adsAccounts.totalAdsAccounts : "N/A",
                        icon: n("eabe")
                    }, {
                        label: "Total Bonus",
                        value: null !== e.bonus.totalBonus ? "$".concat(e.bonus.totalBonus) : "N/A",
                        icon: n("ded8")
                    }, {
                        label: "Total User’s balance",
                        value: e.balances.totalBalance >= 0 ? "$".concat(parseFloat(Math.floor(100 * e.balances.totalBalance) / 100).toLocaleString("en-US")) : "N/A",
                        icon: n("d98d")
                    }]
                }
            }),
            ie = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    user: {
                        statisticsUser: [],
                        totalUsers: 0
                    },
                    deposit: {
                        statisticsDeposit: []
                    },
                    spending: {
                        statisticsSpending: []
                    },
                    typeSort: "day",
                    limitDay: 0,
                    limitMonth: 0,
                    typeSortDeposit: "day",
                    typeSortSpending: "day",
                    limitDayDeposit: 0,
                    limitDaySpending: 0,
                    limitMonthDeposit: 0,
                    limitMonthSpending: 0,
                    users: {
                        statisticsUser: [],
                        totalUsers: 0
                    },
                    deposits: {
                        statisticsDeposit: [],
                        monthlyDeposit: 0
                    },
                    adsAccounts: {
                        totalAdsAccounts: 0,
                        monthlyTotalAdsAccount: 0,
                        monthlyStatisticsAdsAccount: []
                    },
                    bonus: {
                        totalBonus: 0
                    },
                    balances: {
                        totalBalance: 0
                    }
                }),
                getters: oe,
                mutations: ae,
                actions: re
            },
            ue = {
                GET_LIST_PRODUCT_LINKS_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_PRODUCT_LINKS_SUCCESS: function(e, t) {
                    d(e), e.listProductLinks = t
                },
                GET_LIST_PRODUCT_LINKS_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            se = {
                getListProductLinks: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_PRODUCT_LINKS_REQUEST"), n.prev = 2, n.next = 5, m["l"].getListProductLinks(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_PRODUCT_LINKS_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_PRODUCT_LINKS_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            Ee = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listProductLinks: function(e) {
                    return e.listProductLinks
                }
            }),
            de = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listProductLinks: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: Ee,
                mutations: ue,
                actions: se
            },
            _e = {
                ADD_KYC_USER_REQUEST: function(e) {
                    E(e)
                },
                ADD_KYC_USER_SUCCESS: function(e) {
                    d(e)
                },
                ADD_KYC_USER_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            Te = {
                addKYCUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ADD_KYC_USER_REQUEST"), n.prev = 2, n.next = 5, m["f"].createKYCUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ADD_KYC_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ADD_KYC_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            le = Object(c["a"])({}, o["h"]),
            Se = {
                namespaced: !0,
                state: Object(c["a"])({}, o["i"]),
                getters: le,
                mutations: _e,
                actions: Te
            },
            me = {
                GET_LIST_GIFT_CODE_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_GIFT_CODE_SUCCESS: function(e, t) {
                    d(e), e.listGiftCode = t
                },
                GET_LIST_GIFT_CODE_FAILURE: function(e, t) {
                    _(e, t)
                },
                DEACTIVATE_GIFT_CODE_REQUEST: function(e) {
                    E(e)
                },
                DEACTIVATE_GIFT_CODE_SUCCESS: function(e) {
                    d(e)
                },
                DEACTIVATE_GIFT_CODE_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_GIFT_CODE_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_GIFT_CODE_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_GIFT_CODE_FAILURE: function(e, t) {
                    _(e, t)
                },
                CREATE_GIFT_CODE_REQUEST: function(e) {
                    E(e)
                },
                CREATE_GIFT_CODE_SUCCESS: function(e) {
                    d(e)
                },
                CREATE_GIFT_CODE_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_LIST_PARTNER_NO_PAGING_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_PARTNER_NO_PAGING_SUCCESS: function(e, t) {
                    d(e), e.listPartnerNoPaging = t
                },
                GET_LIST_PARTNER_NO_PAGING_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_INFO_USER_REQUEST: function(e) {
                    E(e)
                },
                GET_INFO_USER_SUCCESS: function(e, t) {
                    var n;
                    d(e), (null === t || void 0 === t || null === (n = t.paging) || void 0 === n ? void 0 : n.total) > 0 ? e.partnerInfo = t : (e.partnerInfo = t, e.listGiftCode = {})
                },
                GET_INFO_USER_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            fe = {
                getListGiftCode: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_GIFT_CODE_REQUEST"), n.prev = 2, n.next = 5, m["d"].getListGiftCode(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_GIFT_CODE_SUCCESS", T(c) || []), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_GIFT_CODE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                deactivateGiftCode: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("DEACTIVATE_GIFT_CODE_REQUEST"), n.prev = 2, n.next = 5, m["d"].deactivateGiftCode(t);
                                case 5:
                                    r = n.sent, c = r.data, a("DEACTIVATE_GIFT_CODE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_GIFT_CODE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateGiftCode: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_GIFT_CODE_REQUEST"), n.prev = 2, n.next = 5, m["d"].updateGiftCode(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_GIFT_CODE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_GIFT_CODE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                createGiftCode: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("CREATE_GIFT_CODE_REQUEST"), n.prev = 2, n.next = 5, m["d"].createGiftCode(t);
                                case 5:
                                    r = n.sent, c = r.data, a("CREATE_GIFT_CODE_SUCCESS", c), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("CREATE_GIFT_CODE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListPartnerNoPaging: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_PARTNER_NO_PAGING_REQUEST"), n.prev = 2, n.next = 5, m["d"].getListPartnerNoPaging(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_PARTNER_NO_PAGING_SUCCESS", T(c) || {}), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_PARTNER_NO_PAGING_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getInfoUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_INFO_USER_REQUEST"), n.prev = 2, n.next = 5, m["d"].getInfoUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_INFO_USER_SUCCESS", T(c) || {}), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_INFO_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            pe = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listGiftCode: function(e) {
                    return e.listGiftCode
                },
                listPartnerNoPaging: function(e) {
                    return e.listPartnerNoPaging
                },
                partnerInfo: function(e) {
                    return e.partnerInfo
                }
            }),
            Ae = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listGiftCode: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    listPartnerNoPaging: {
                        content: [],
                        paging: {
                            total: 0
                        }
                    },
                    partnerInfo: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: pe,
                mutations: me,
                actions: fe
            },
            Re = {
                GET_MEMBER_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                GET_MEMBER_PARTNER_SUCCESS: function(e, t) {
                    d(e), e.listMemberPartner = t
                },
                GET_MEMBER_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_LIST_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_PARTNER_SUCCESS: function(e, t) {
                    d(e), e.listPartner = t
                },
                GET_LIST_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_TOTAL_MEMBER_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                GET_TOTAL_MEMBER_PARTNER_SUCCESS: function(e, t) {
                    d(e), e.totalMember = t
                },
                GET_TOTAL_MEMBER_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                CREATE_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                CREATE_PARTNER_SUCCESS: function(e) {
                    d(e)
                },
                CREATE_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                REJECT_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                REJECT_PARTNER_SUCCESS: function(e) {
                    d(e)
                },
                REJECT_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_ROLE_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_ROLE_PARTNER_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_ROLE_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                DELETE_ROLE_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                DELETE_ROLE_PARTNER_SUCCESS: function(e) {
                    d(e)
                },
                DELETE_ROLE_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPGRADE_TO_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                UPGRADE_TO_PARTNER_SUCCESS: function(e) {
                    d(e)
                },
                UPGRADE_TO_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                ASSIGN_TO_ANOTHER_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                ASSIGN_TO_ANOTHER_PARTNER_SUCCESS: function(e) {
                    d(e)
                },
                ASSIGN_TO_ANOTHER_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_SPENDING_DEPOSIT_PARTNER_DETAIL_REQUEST: function(e) {
                    E(e)
                },
                GET_SPENDING_DEPOSIT_PARTNER_DETAIL_SUCCESS: function(e, t) {
                    d(e), e.totalSpendingAndDeposit = t
                },
                GET_SPENDING_DEPOSIT_PARTNER_DETAIL_FAILURE: function(e, t) {
                    _(e, t), e.totalSpendingAndDeposit = null
                },
                GET_TOTAL_MEMBER_LIFE_TIME_PARTNER_DETAIL_REQUEST: function(e) {
                    E(e)
                },
                GET_TOTAL_MEMBER_LIFE_TIME_PARTNER_DETAIL_SUCCESS: function(e, t) {
                    d(e), e.totalMemberLifeTime = t
                },
                GET_TOTAL_MEMBER_LIFE_TIME_PARTNER_DETAIL_FAILURE: function(e, t) {
                    _(e, t), e.totalMemberLifeTime = null
                },
                GET_TOTAL_MEMBER_MONTH_PARTNER_DETAIL_REQUEST: function(e) {
                    E(e)
                },
                GET_TOTAL_MEMBER_MONTH_PARTNER_DETAIL_SUCCESS: function(e, t) {
                    d(e), e.totalMemberMonth = t
                },
                GET_TOTAL_MEMBER_MONTH_PARTNER_DETAIL_FAILURE: function(e, t) {
                    _(e, t), e.totalMemberMonth = null
                },
                GET_TOTAL_ADS_ACCOUNT_MONTH_PARTNER_DETAIL_REQUEST: function(e) {
                    E(e)
                },
                GET_TOTAL_ADS_ACCOUNT_MONTH_PARTNER_DETAIL_SUCCESS: function(e, t) {
                    d(e), e.totalAdsAccountMonth = t
                },
                GET_TOTAL_ADS_ACCOUNT_MONTH_PARTNER_DETAIL_FAILURE: function(e, t) {
                    _(e, t), e.totalAdsAccountMonth = null
                },
                GET_ADS_ACCOUNTS_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                GET_ADS_ACCOUNTS_PARTNER_SUCCESS: function(e, t) {
                    d(e), e.partnerAdsAccounts = t
                },
                GET_ADS_ACCOUNTS_PARTNER_FAILURE: function(e, t) {
                    _(e, t), e.partnerAdsAccounts.totalAdsAccounts = null
                },
                REMOVE_MEMBER_OF_PARTNERSHIP_REQUEST: function(e) {
                    E(e)
                },
                REMOVE_MEMBER_OF_PARTNERSHIP_SUCCESS: function(e) {
                    d(e)
                },
                REMOVE_MEMBER_OF_PARTNERSHIP_FAILURE: function(e, t) {
                    _(e, t)
                },
                GET_LIST_AD_ACCOUNT_USER_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_AD_ACCOUNT_USER_SUCCESS: function(e, t) {
                    d(e), e.listAdAccountUser = t
                },
                GET_LIST_AD_ACCOUNT_USER_FAILURE: function(e, t) {
                    _(e, t)
                },
                CHANGE_STATUS_FORM_WHITELIST_PARTNER_REQUEST: function(e) {
                    E(e)
                },
                CHANGE_STATUS_FORM_WHITELIST_PARTNER_SUCCESS: function(e) {
                    d(e)
                },
                CHANGE_STATUS_FORM_WHITELIST_PARTNER_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            Ue = {
                createPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("CREATE_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].createPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("CREATE_PARTNER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("CREATE_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].getListPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_PARTNER_SUCCESS", T(c) || []), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getTotalMemberPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_TOTAL_MEMBER_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].getTotalMemberPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_TOTAL_MEMBER_PARTNER_SUCCESS", T(c) || []), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_TOTAL_MEMBER_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListMemberPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_MEMBER_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].getListMemberPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_MEMBER_PARTNER_SUCCESS", T(c) || []), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_MEMBER_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                rejectPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("REJECT_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].rejectPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("REJECT_PARTNER_SUCCESS", T(c) || []), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("REJECT_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateRolePartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_ROLE_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].updateRolePartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_ROLE_PARTNER_SUCCESS", T(c) || []), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_ROLE_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                deleteRolePartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("DELETE_ROLE_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].deleteRolePartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("DELETE_ROLE_PARTNER_SUCCESS", T(c) || []), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("DELETE_ROLE_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                upgradeToPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPGRADE_TO_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].upgradeToPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPGRADE_TO_PARTNER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPGRADE_TO_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                assignToAnotherPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ASSIGN_TO_ANOTHER_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].assignToAnotherPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ASSIGN_TO_ANOTHER_PARTNER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ASSIGN_TO_ANOTHER_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getSpendingDepositPartnerDetail: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_SPENDING_DEPOSIT_PARTNER_DETAIL_REQUEST"), n.prev = 2, n.next = 5, m["j"].getSpendingDepositPartnerDetail(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_SPENDING_DEPOSIT_PARTNER_DETAIL_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_SPENDING_DEPOSIT_PARTNER_DETAIL_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getTotalMemberLifeTimePartnerDetail: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_TOTAL_MEMBER_LIFE_TIME_PARTNER_DETAIL_REQUEST"), n.prev = 2, n.next = 5, m["j"].getTotalMemberMonthPartnerDetail(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_TOTAL_MEMBER_LIFE_TIME_PARTNER_DETAIL_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_TOTAL_MEMBER_LIFE_TIME_PARTNER_DETAIL_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getTotalMemberMonthPartnerDetail: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_TOTAL_MEMBER_MONTH_PARTNER_DETAIL_REQUEST"), n.prev = 2, n.next = 5, m["j"].getTotalMemberMonthPartnerDetail(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_TOTAL_MEMBER_MONTH_PARTNER_DETAIL_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_TOTAL_MEMBER_MONTH_PARTNER_DETAIL_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getTotalAdsAccountMonthPartnerDetail: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_TOTAL_ADS_ACCOUNT_MONTH_PARTNER_DETAIL_REQUEST"), n.prev = 2, n.next = 5, m["j"].getTotalAdsAccountMonthPartnerDetail(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_TOTAL_ADS_ACCOUNT_MONTH_PARTNER_DETAIL_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_TOTAL_ADS_ACCOUNT_MONTH_PARTNER_DETAIL_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getAdsAccountsPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_ADS_ACCOUNTS_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].getAdsAccountsPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_ADS_ACCOUNTS_PARTNER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_ADS_ACCOUNTS_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                removeMember: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("REMOVE_MEMBER_OF_PARTNERSHIP_REQUEST"), n.prev = 2, n.next = 5, m["j"].removeMember(t);
                                case 5:
                                    r = n.sent, c = r.data, a("REMOVE_MEMBER_OF_PARTNERSHIP_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("REMOVE_MEMBER_OF_PARTNERSHIP_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                getListAdAccountUser: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_AD_ACCOUNT_USER_REQUEST"), n.prev = 2, n.next = 5, m["j"].getListAdAccountUser(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_AD_ACCOUNT_USER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_AD_ACCOUNT_USER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                changeStatusFormWhitelistPartner: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("CHANGE_STATUS_FORM_WHITELIST_PARTNER_REQUEST"), n.prev = 2, n.next = 5, m["j"].changeStatusFormWhitelistPartner(t);
                                case 5:
                                    r = n.sent, c = r.data, a("CHANGE_STATUS_FORM_WHITELIST_PARTNER_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("CHANGE_STATUS_FORM_WHITELIST_PARTNER_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            Ce = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listMemberPartner: function(e) {
                    return e.listMemberPartner
                },
                listPartner: function(e) {
                    return e.listPartner
                },
                totalMember: function(e) {
                    return e.totalMember
                },
                totalSpendingAndDeposit: function(e) {
                    return e.totalSpendingAndDeposit
                },
                partnerAdsAccounts: function(e) {
                    return e.partnerAdsAccounts
                },
                listAdAccountUser: function(e) {
                    return e.listAdAccountUser
                },
                listAnalysisPartnerDetail: function(e) {
                    var t, a, r, c, o, i, u;
                    return [{
                        label: "Total opened ad accounts",
                        value: null !== (null === (t = e.partnerAdsAccounts) || void 0 === t ? void 0 : t.totalAdsAccounts) ? "".concat(parseFloat(Math.floor(100 * (null === (a = e.partnerAdsAccounts) || void 0 === a ? void 0 : a.totalAdsAccounts)) / 100).toLocaleString("en-US")) : "N/A",
                        icon: n("eabe")
                    }, {
                        label: "Total Deposit",
                        value: null !== e.totalSpendingAndDeposit ? "$".concat(parseFloat(Math.floor(100 * (null === (r = e.totalSpendingAndDeposit) || void 0 === r ? void 0 : r.totalDeposit)) / 100).toLocaleString("en-US")) : "N/A",
                        icon: n("ded8")
                    }, {
                        label: "Total spending",
                        value: null !== e.totalSpendingAndDeposit ? "$".concat(parseFloat(Math.floor(100 * (null === (c = e.totalSpendingAndDeposit) || void 0 === c ? void 0 : c.totalSpending)) / 100).toLocaleString("en-US")) : "N/A",
                        icon: n("f472")
                    }, {
                        label: "Total members/blocked members",
                        value: null !== e.totalMemberLifeTime ? "".concat(null === (o = e.totalMemberLifeTime) || void 0 === o ? void 0 : o.totalUsers, "/").concat(null === (i = e.totalMemberLifeTime) || void 0 === i ? void 0 : i.totalBlockedUsers) : "N/A",
                        icon: n("e1e1")
                    }, {
                        label: "Total members spending",
                        value: null !== e.totalMemberLifeTime ? "".concat(null === (u = e.totalMemberLifeTime) || void 0 === u ? void 0 : u.totalSpendUsers) : "N/A",
                        icon: n("e1e1")
                    }]
                },
                monthlyMemberPartnerDetail: function(e) {
                    var t, a, r, c, o, i;
                    return [{
                        label: "Monthly Deposit",
                        value: null !== e.totalSpendingAndDeposit ? "$".concat(parseFloat(Math.floor(100 * (null === (t = e.totalSpendingAndDeposit) || void 0 === t ? void 0 : t.monthlyDeposit)) / 100).toLocaleString("en-US")) : "N/A",
                        icon: n("ded8")
                    }, {
                        label: "Monthly spending",
                        value: null !== e.totalSpendingAndDeposit ? "$".concat(parseFloat(Math.floor(100 * (null === (a = e.totalSpendingAndDeposit) || void 0 === a ? void 0 : a.monthlySpending)) / 100).toLocaleString("en-US")) : "N/A",
                        icon: n("f472")
                    }, {
                        label: "Monthly opened ad accounts",
                        value: e.totalAdsAccountMonth ? "".concat(null === (r = e.totalAdsAccountMonth) || void 0 === r ? void 0 : r.totalAdsAccounts) : "N/A",
                        icon: n("eabe")
                    }, {
                        label: "Monthly new members/blocked members",
                        value: null !== e.totalMemberMonth ? "".concat(null === (c = e.totalMemberMonth) || void 0 === c ? void 0 : c.totalUsers, "/").concat(null === (o = e.totalMemberMonth) || void 0 === o ? void 0 : o.totalBlockedUsers) : "N/A",
                        icon: n("e1e1")
                    }, {
                        label: "Monthly members spending",
                        value: null !== e.totalMemberMonth ? "".concat(null === (i = e.totalMemberMonth) || void 0 === i ? void 0 : i.totalSpendUsers) : "N/A",
                        icon: n("e1e1")
                    }]
                }
            }),
            Ie = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listPartner: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    listMemberPartner: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    },
                    totalMember: {},
                    totalSpendingAndDeposit: {},
                    partnerAdsAccounts: [],
                    totalMemberLifeTime: {},
                    totalAdsAccountMonth: {},
                    totalMemberMonth: {},
                    listAdAccountUser: []
                }),
                getters: Ce,
                mutations: Re,
                actions: Ue
            },
            he = {
                GET_LIST_MARKET_PACKAGE_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_MARKET_PACKAGE_SUCCESS: function(e, t) {
                    d(e), e.listMarketPackage = t
                },
                GET_LIST_MARKET_PACKAGE_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_A_PACKAGE_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_A_PACKAGE_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_A_PACKAGE_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            ge = {
                getListPackage: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_MARKET_PACKAGE_REQUEST"), n.prev = 2, n.next = 5, m["g"].getListPackage(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_MARKET_PACKAGE_SUCCESS", T(c) || {}), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_MARKET_PACKAGE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateAPackage: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_A_PACKAGE_REQUEST"), n.prev = 2, n.next = 5, m["g"].updateAPackage(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_A_PACKAGE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_A_PACKAGE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            be = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listMarketPackage: function(e) {
                    return e.listMarketPackage
                }
            }),
            Oe = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listMarketPackage: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: be,
                mutations: he,
                actions: ge
            },
            Ne = {
                GET_LIST_USER_INFO_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_USER_INFO_SUCCESS: function(e, t) {
                    d(e), e.listUserInfo = t
                },
                GET_LIST_USER_INFO_FAILURE: function(e, t) {
                    _(e, t)
                },
                HANDLE_USER_INFO_REQUEST: function(e) {
                    E(e)
                },
                HANDLE_USER_INFO_SUCCESS: function(e) {
                    d(e)
                },
                HANDLE_USER_INFO_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            Le = {
                getListUserInfo: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_USER_INFO_REQUEST"), n.prev = 2, n.next = 5, m["p"].getListUserInfo(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_USER_INFO_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_USER_INFO_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                verifyUserInfo: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("HANDLE_USER_INFO_REQUEST"), n.prev = 2, n.next = 5, m["p"].verifyUserInfo(t);
                                case 5:
                                    r = n.sent, c = r.data, a("HANDLE_USER_INFO_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("HANDLE_USER_INFO_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            ve = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listUserInfo: function(e) {
                    return e.listUserInfo
                }
            }),
            Pe = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listUserInfo: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: ve,
                mutations: Ne,
                actions: Le
            },
            ke = {
                GET_LIST_INACTIVE_AD_ACCOUNT_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_INACTIVE_AD_ACCOUNT_SUCCESS: function(e, t) {
                    d(e), e.listInactiveAdAccount = t
                },
                GET_LIST_INACTIVE_AD_ACCOUNT_FAILURE: function(e, t) {
                    _(e, t)
                },
                DISABLE_MULTI_INACTIVE_AD_ACCOUNT_REQUEST: function(e) {
                    E(e)
                },
                DISABLE_MULTI_INACTIVE_AD_ACCOUNT_SUCCESS: function(e) {
                    d(e)
                },
                DISABLE_MULTI_INACTIVE_AD_ACCOUNT_FAILURE: function(e, t) {
                    _(e, t)
                },
                REACTIVE_AD_ACCOUNT_REQUEST: function(e) {
                    E(e)
                },
                REACTIVE_AD_ACCOUNT_SUCCESS: function(e) {
                    d(e)
                },
                REACTIVE_AD_ACCOUNT_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            De = {
                getListInactiveAdAccount: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_INACTIVE_AD_ACCOUNT_REQUEST"), n.prev = 2, n.next = 5, m["e"].listInactiveAdAccount(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_INACTIVE_AD_ACCOUNT_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_INACTIVE_AD_ACCOUNT_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                deleteAdsAccounts: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("DISABLE_MULTI_INACTIVE_AD_ACCOUNT_REQUEST"), n.prev = 2, n.next = 5, m["e"].deleteAdsAccounts(t);
                                case 5:
                                    r = n.sent, c = r.data, a("DISABLE_MULTI_INACTIVE_AD_ACCOUNT_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("DISABLE_MULTI_INACTIVE_AD_ACCOUNT_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                reactiveAdAccounts: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("REACTIVE_AD_ACCOUNT_REQUEST"), n.prev = 2, n.next = 5, m["e"].reactiveAdAccounts(t);
                                case 5:
                                    r = n.sent, c = r.data, a("REACTIVE_AD_ACCOUNT_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("REACTIVE_AD_ACCOUNT_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            we = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listInactiveAdAccount: function(e) {
                    return e.listInactiveAdAccount
                }
            }),
            Ge = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listInactiveAdAccount: {
                        content: [],
                        paging: {
                            total: 0,
                            page: 1
                        }
                    }
                }),
                getters: we,
                mutations: ke,
                actions: De
            },
            ye = {
                GET_LIST_ACL_REQUEST: function(e) {
                    E(e)
                },
                GET_LIST_ACL_SUCCESS: function(e, t) {
                    d(e), e.listAcl = t
                },
                GET_LIST_ACL_FAILURE: function(e, t) {
                    _(e, t)
                },
                CREATE_ROLE_REQUEST: function(e) {
                    E(e)
                },
                CREATE_ROLE_SUCCESS: function(e) {
                    d(e)
                },
                CREATE_ROLE_FAILURE: function(e, t) {
                    _(e, t)
                },
                UPDATE_ROLE_REQUEST: function(e) {
                    E(e)
                },
                UPDATE_ROLE_SUCCESS: function(e) {
                    d(e)
                },
                UPDATE_ROLE_FAILURE: function(e, t) {
                    _(e, t)
                },
                ASSIGN_ROLE_REQUEST: function(e) {
                    E(e)
                },
                ASSIGN_ROLE_SUCCESS: function(e) {
                    d(e)
                },
                ASSIGN_ROLE_FAILURE: function(e, t) {
                    _(e, t)
                }
            },
            Me = {
                getListAcl: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("GET_LIST_ACL_REQUEST"), n.prev = 2, n.next = 5, m["a"].getListAcl(t);
                                case 5:
                                    r = n.sent, c = r.data, a("GET_LIST_ACL_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("GET_LIST_ACL_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                createRole: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("CREATE_ROLE_REQUEST"), n.prev = 2, n.next = 5, m["a"].createRole(t);
                                case 5:
                                    r = n.sent, c = r.data, a("CREATE_ROLE_SUCCESS", c), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("CREATE_ROLE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                updateRole: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("UPDATE_ROLE_REQUEST"), n.prev = 2, n.next = 5, m["a"].updateRole(t);
                                case 5:
                                    r = n.sent, c = r.data, a("UPDATE_ROLE_SUCCESS", c), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("UPDATE_ROLE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                assignRole: function(e, t) {
                    return Object(S["a"])(regeneratorRuntime.mark((function n() {
                        var a, r, c;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return a = e.commit, a("ASSIGN_ROLE_REQUEST"), n.prev = 2, n.next = 5, m["a"].assignRole(t);
                                case 5:
                                    r = n.sent, c = r.data, a("ASSIGN_ROLE_SUCCESS", T(c)), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n["catch"](2), a("ASSIGN_ROLE_FAILURE", n.t0);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                }
            },
            je = Object(c["a"])(Object(c["a"])({}, o["h"]), {}, {
                listAcl: function(e) {
                    return e.listAcl
                }
            }),
            xe = {
                namespaced: !0,
                state: Object(c["a"])(Object(c["a"])({}, o["i"]), {}, {
                    listAcl: {
                        roles: []
                    }
                }),
                getters: je,
                mutations: ye,
                actions: Me
            };
        a["default"].use(r["b"]);
        t["a"] = new r["b"].Store({
            modules: {
                app: U,
                appConfig: C,
                verticalMenu: I,
                notification: h,
                auth: L,
                stats: y,
                adsAccount: F,
                payment: V,
                user: z,
                myTask: $,
                subscription: ne,
                home: ie,
                productLinks: de,
                kyc: Se,
                giftCode: Ae,
                partner: Ie,
                marketPackage: Oe,
                verifyInfo: Pe,
                inactiveAdAccount: Ge,
                acl: xe,
                partnerPermission: A
            },
            strict: Object({
                NODE_ENV: "production",
                VUE_APP_SERVER_API: "https://tiktok-api.ecomdymedia.com",
                VUE_APP_SITE_URL: "https://tiktok-admin.ecomdymedia.com",
                VUE_APP_BASE_URL: "https://tiktok-api.ecomdymedia.com",
                VUE_APP_MEDIA_URL: "https://files.ecomdy.com",
                VUE_APP_COMPANY_NAME: "Ecomdy Media",
                VUE_APP_PLATFORM_NAME: "Ecomdy",
                VUE_APP_LOGO: "",
                VUE_APP_LOGO_NAME: "Ecomdy Admin",
                VUE_APP_FAVICON: "https://tiktok.ecomdymedia.com/favicon.ico",
                VUE_APP_OG_TITLE: "Ads Management ← Ecomdy Media",
                VUE_APP_OG_DESCRIPTION: "You are the clients of Ecomdy Media and passionate about sharing great services for eCommerce sellers? Or do you have lots of friends who need TikTok Ads Agency Accounts to run ads worldwide? So here is a chance for you to earn from all referrals?",
                VUE_APP_OG_SITE_NAME: "Ecomdy Media",
                VUE_APP_OG_IMG: "https://tiktok.ecomdymedia.com/share_rect.png",
                VUE_APP_PORT: "5002",
                VUE_APP_NODE_ENV: "production",
                BASE_URL: "/"
            }).DEV
        })
    },
    4678: function(e, t, n) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc10",
            "./be.js": "1fc10",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf755",
            "./tlh.js": "cf755",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function r(e) {
            var t = c(e);
            return n(t)
        }

        function c(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        r.keys = function() {
            return Object.keys(a)
        }, r.resolve = c, e.exports = r, r.id = "4678"
    },
    5: function(e, t) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e623"), n("e379"), n("5dc8"), n("37e1");
        var a, r, c = n("2b0e"),
            o = n("51c2"),
            i = n("dbbe"),
            u = n("b1e0"),
            s = n("a6f4"),
            E = (n("5df9"), n("6365")),
            d = n("0ec9"),
            _ = n.n(d),
            T = n("a18c"),
            l = n("4360"),
            S = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "h-100",
                    class: [e.skinClasses],
                    attrs: {
                        id: "app"
                    }
                }, [n(e.layout, {
                    tag: "component"
                }, [n("router-view")], 1)], 1)
            },
            m = [],
            f = (n("d3b7"), n("3ca3"), n("ddb0"), n("498a"), n("a9e3"), n("fb6a"), n("1dff")),
            p = n("04b0"),
            A = n("b8f2"),
            R = n("16ce"),
            U = function() {
                return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-018d7abd"), n.e("chunk-27340eee"), n.e("chunk-58d589d4")]).then(n.bind(null, "03d1"))
            },
            C = function() {
                return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-018d7abd"), n.e("chunk-27340eee"), n.e("chunk-7049ec69")]).then(n.bind(null, "2607"))
            },
            I = function() {
                return n.e("chunk-2d22bcc3").then(n.bind(null, "f102"))
            },
            h = {
                name: "Ecomdy Media",
                metaInfo: {
                    title: "Ads Management ← Ecomdy Media",
                    titleTemplate: "Ads Management ← Ecomdy Media",
                    meta: [{
                        "http-equiv": "Content-Type",
                        content: "text/html; charset=utf-8"
                    }, {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, {
                        name: "description",
                        content: "You are the clients of Ecomdy Media and passionate about sharing great services for eCommerce sellers? Or do you have lots of friends who need TikTok Ads Agency Accounts to run ads worldwide? So here is a chance for you to earn from all referrals?"
                    }, {
                        property: "og:title",
                        content: "Ads Management ← Ecomdy Media"
                    }, {
                        property: "og:site_name",
                        content: "Ecomdy Media"
                    }, {
                        property: "og:type",
                        content: "website"
                    }, {
                        property: "og:url",
                        content: "https://tiktok-admin.ecomdymedia.com"
                    }, {
                        property: "og:image",
                        content: "".concat("https://tiktok-admin.ecomdymedia.com", "/share_rect.png")
                    }, {
                        property: "og:description",
                        content: "You are the clients of Ecomdy Media and passionate about sharing great services for eCommerce sellers? Or do you have lots of friends who need TikTok Ads Agency Accounts to run ads worldwide? So here is a chance for you to earn from all referrals?"
                    }, {
                        name: "twitter:card",
                        content: "summary"
                    }, {
                        name: "twitter:site",
                        content: "".concat("https://tiktok-admin.ecomdymedia.com")
                    }, {
                        name: "twitter:title",
                        content: "Ads Management ← Ecomdy Media"
                    }, {
                        name: "twitter:description",
                        content: "You are the clients of Ecomdy Media and passionate about sharing great services for eCommerce sellers? Or do you have lots of friends who need TikTok Ads Agency Accounts to run ads worldwide? So here is a chance for you to earn from all referrals?"
                    }, {
                        name: "twitter:creator",
                        content: "@alligatorio"
                    }, {
                        name: "twitter:image:src",
                        content: "".concat("https://tiktok-admin.ecomdymedia.com", "/share_square.png")
                    }, {
                        itemprop: "name",
                        content: "Ads Management ← Ecomdy Media"
                    }, {
                        itemprop: "description",
                        content: "You are the clients of Ecomdy Media and passionate about sharing great services for eCommerce sellers? Or do you have lots of friends who need TikTok Ads Agency Accounts to run ads worldwide? So here is a chance for you to earn from all referrals?"
                    }, {
                        itemprop: "image",
                        content: "".concat("https://tiktok-admin.ecomdymedia.com", "/share_square.png")
                    }]
                },
                components: {
                    LayoutHorizontal: C,
                    LayoutVertical: U,
                    LayoutFull: I
                },
                computed: {
                    layout: function() {
                        return "full" === this.$route.meta.layout ? "layout-full" : "layout-".concat(this.contentLayoutType)
                    },
                    contentLayoutType: function() {
                        return this.$store.state.appConfig.layout.type
                    }
                },
                beforeCreate: function() {
                    for (var e = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"], t = 0, n = e.length; t < n; t++) f["b"][e[t]] = Object(R["a"])("--".concat(e[t]), document.documentElement).value.trim();
                    for (var a = ["xs", "sm", "md", "lg", "xl"], r = 0, c = a.length; r < c; r++) f["a"][a[r]] = Number(Object(R["a"])("--breakpoint-".concat(a[r]), document.documentElement).value.slice(0, -2));
                    var o = f["c"].layout.isRTL;
                    document.documentElement.setAttribute("dir", o ? "rtl" : "ltr")
                },
                setup: function() {
                    var e = Object(A["a"])(),
                        t = e.skin,
                        n = e.skinClasses;
                    "dark" === t.value && document.body.classList.add("dark-layout"), Object(p["provideToast"])({
                        hideProgressBar: !0,
                        closeOnClick: !1,
                        closeButton: !1,
                        icon: !1,
                        timeout: 3e3,
                        transition: "Vue-Toastification__fade"
                    }), l["a"].commit("app/UPDATE_WINDOW_WIDTH", window.innerWidth);
                    var a = Object(R["b"])(),
                        r = a.width;
                    return Object(s["watch"])(r, (function(e) {
                        l["a"].commit("app/UPDATE_WINDOW_WIDTH", e)
                    })), {
                        skinClasses: n
                    }
                }
            },
            g = h,
            b = n("2877"),
            O = Object(b["a"])(g, S, m, !1, null, null, null),
            N = O.exports,
            L = (n("b0c0"), n("5530")),
            v = n("0a35"),
            P = {
                name: "FeatherIcon",
                functional: !0,
                props: {
                    icon: {
                        required: !0,
                        type: [String, Object]
                    },
                    size: {
                        type: String,
                        default: "14"
                    },
                    badge: {
                        type: [String, Object, Number],
                        default: null
                    },
                    badgeClasses: {
                        type: [String, Object, Array],
                        default: "badge-primary"
                    }
                },
                render: function(e, t) {
                    var n = t.props,
                        a = t.data,
                        r = e(v[n.icon], Object(L["a"])({
                            props: {
                                size: n.size
                            }
                        }, a));
                    if (!n.badge) return r;
                    var c = e("span", {
                        staticClass: "badge badge-up badge-pill",
                        class: n.badgeClasses
                    }, [n.badge]);
                    return e("span", {
                        staticClass: "feather-icon position-relative"
                    }, [r, c])
                }
            },
            k = P,
            D = (n("8bd0"), Object(b["a"])(k, a, r, !1, null, null, null)),
            w = D.exports;
        c["default"].component(w.name, w);
        var G = n("2b88"),
            y = n.n(G);
        c["default"].use(y.a);
        var M = n("6c42");
        n("cc0f");
        c["default"].use(M["default"], {
            hideProgressBar: !0,
            closeOnClick: !1,
            closeButton: !1,
            icon: !1,
            timeout: 3e3,
            transition: "Vue-Toastification__fade"
        });
        var j = n("4eb5"),
            x = n.n(j);
        c["default"].use(x.a);
        n("21d3");
        var F = n("9541"),
            B = n.n(F);
        c["default"].use(B.a);
        var Q = n("58ca");
        c["default"].use(Q["a"]), c["default"].use(o["a"]), c["default"].use(i["a"]), c["default"].use(u["a"]), c["default"].use(s["default"]), c["default"].use(_.a), n("4131"), n("78a7"), c["default"].config.productionTip = !1, new c["default"]({
            router: T["a"],
            store: l["a"],
            i18n: E["a"],
            render: function(e) {
                return e(N)
            }
        }).$mount("#app")
    },
    "5a50": function(e, t, n) {
        "use strict";
        n.d(t, "u", (function() {
            return i
        })), n.d(t, "g", (function() {
            return s
        })), n.d(t, "s", (function() {
            return E
        })), n.d(t, "e", (function() {
            return d
        })), n.d(t, "k", (function() {
            return _
        })), n.d(t, "l", (function() {
            return T
        })), n.d(t, "j", (function() {
            return l
        })), n.d(t, "m", (function() {
            return S
        })), n.d(t, "h", (function() {
            return m
        })), n.d(t, "i", (function() {
            return f
        })), n.d(t, "c", (function() {
            return p
        })), n.d(t, "v", (function() {
            return A
        })), n.d(t, "t", (function() {
            return R
        })), n.d(t, "b", (function() {
            return U
        })), n.d(t, "x", (function() {
            return C
        })), n.d(t, "p", (function() {
            return I
        })), n.d(t, "o", (function() {
            return h
        })), n.d(t, "d", (function() {
            return g
        })), n.d(t, "a", (function() {
            return b
        })), n.d(t, "w", (function() {
            return O
        })), n.d(t, "n", (function() {
            return N
        })), n.d(t, "f", (function() {
            return L
        })), n.d(t, "r", (function() {
            return v
        })), n.d(t, "q", (function() {
            return P
        }));
        var a = n("c1df"),
            r = n.n(a),
            c = n("d531"),
            o = Object(c["extendMoment"])(r.a),
            i = [
                [{
                    font: []
                }, {
                    size: []
                }],
                ["bold", "italic", "underline"]
            ],
            u = o(),
            s = [{
                name: "Today",
                value: o.range(u.clone().subtract(0, "days"), u.clone())
            }, {
                name: "Last 7 days",
                value: o.range(u.clone().subtract(6, "days"), u.clone())
            }, {
                name: "Last Month",
                value: o.range(u.clone().subtract(1, "months").startOf("month"), u.clone().subtract(1, "months").endOf("month"))
            }, {
                name: "Last 3 Month",
                value: o.range(u.clone().subtract(3, "months").startOf("month"), u.clone().subtract(1, "months").endOf("month"))
            }],
            E = ["Argentina", "Australia", "Austria", "Bahrain", "Belarus", "Belgium", "Brazil", "Cambodia", "Canada", "Chile", "Colombia", "Czechia", "Denmark", "Egypt", "Ecuador", "Finland", "France", "Germany", "Greece", "Hungary", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kazakhstan", "Korea", "Kuwait", "Lebanon", "Malaysia", "Mexico", "Morocco", "Netherlands", "New Zealand", "Norway", "Oman", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia", "Singapore", "South Africa", "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Vietnam"],
            d = [{
                name: "Afghanistan",
                code: "AF"
            }, {
                name: "Åland Islands",
                code: "AX"
            }, {
                name: "Albania",
                code: "AL"
            }, {
                name: "Algeria",
                code: "DZ"
            }, {
                name: "American Samoa",
                code: "AS"
            }, {
                name: "Andorra",
                code: "AD"
            }, {
                name: "Angola",
                code: "AO"
            }, {
                name: "Anguilla",
                code: "AI"
            }, {
                name: "Antarctica",
                code: "AQ"
            }, {
                name: "Antigua and Barbuda",
                code: "AG"
            }, {
                name: "Argentina",
                code: "AR"
            }, {
                name: "Armenia",
                code: "AM"
            }, {
                name: "Aruba",
                code: "AW"
            }, {
                name: "Australia",
                code: "AU"
            }, {
                name: "Austria",
                code: "AT"
            }, {
                name: "Azerbaijan",
                code: "AZ"
            }, {
                name: "Bahamas",
                code: "BS"
            }, {
                name: "Bahrain",
                code: "BH"
            }, {
                name: "Bangladesh",
                code: "BD"
            }, {
                name: "Barbados",
                code: "BB"
            }, {
                name: "Belarus",
                code: "BY"
            }, {
                name: "Belgium",
                code: "BE"
            }, {
                name: "Belize",
                code: "BZ"
            }, {
                name: "Benin",
                code: "BJ"
            }, {
                name: "Bermuda",
                code: "BM"
            }, {
                name: "Bhutan",
                code: "BT"
            }, {
                name: "Bolivia",
                code: "BO"
            }, {
                name: "Bonaire, Sint Eustatius and Saba",
                code: "BQ"
            }, {
                name: "Bosnia and Herzegovina",
                code: "BA"
            }, {
                name: "Botswana",
                code: "BW"
            }, {
                name: "Bouvet Island",
                code: "BV"
            }, {
                name: "Brazil",
                code: "BR"
            }, {
                name: "British Indian Ocean Territory",
                code: "IO"
            }, {
                name: "Brunei Darussalam",
                code: "BN"
            }, {
                name: "Bulgaria",
                code: "BG"
            }, {
                name: "Burkina Faso",
                code: "BF"
            }, {
                name: "Burundi",
                code: "BI"
            }, {
                name: "Cambodia",
                code: "KH"
            }, {
                name: "Cameroon",
                code: "CM"
            }, {
                name: "Canada",
                code: "CA"
            }, {
                name: "Cape Verde",
                code: "CV"
            }, {
                name: "Cayman Islands",
                code: "KY"
            }, {
                name: "Central African Republic",
                code: "CF"
            }, {
                name: "Chad",
                code: "TD"
            }, {
                name: "Chile",
                code: "CL"
            }, {
                name: "China",
                code: "CN"
            }, {
                name: "Christmas Island",
                code: "CX"
            }, {
                name: "Cocos (Keeling) Islands",
                code: "CC"
            }, {
                name: "Colombia",
                code: "CO"
            }, {
                name: "Comoros",
                code: "KM"
            }, {
                name: "Congo, Republic of the (Brazzaville)",
                code: "CG"
            }, {
                name: "Congo, the Democratic Republic of the (Kinshasa)",
                code: "CD"
            }, {
                name: "Cook Islands",
                code: "CK"
            }, {
                name: "Costa Rica",
                code: "CR"
            }, {
                name: "Côte d'Ivoire, Republic of",
                code: "CI"
            }, {
                name: "Croatia",
                code: "HR"
            }, {
                name: "Cuba",
                code: "CU"
            }, {
                name: "Curaçao",
                code: "CW"
            }, {
                name: "Cyprus",
                code: "CY"
            }, {
                name: "Czech Republic",
                code: "CZ"
            }, {
                name: "Denmark",
                code: "DK"
            }, {
                name: "Djibouti",
                code: "DJ"
            }, {
                name: "Dominica",
                code: "DM"
            }, {
                name: "Dominican Republic",
                code: "DO"
            }, {
                name: "Ecuador",
                code: "EC"
            }, {
                name: "Egypt",
                code: "EG"
            }, {
                name: "El Salvador",
                code: "SV"
            }, {
                name: "Equatorial Guinea",
                code: "GQ"
            }, {
                name: "Eritrea",
                code: "ER"
            }, {
                name: "Estonia",
                code: "EE"
            }, {
                name: "Ethiopia",
                code: "ET"
            }, {
                name: "Falkland Islands (Islas Malvinas)",
                code: "FK"
            }, {
                name: "Faroe Islands",
                code: "FO"
            }, {
                name: "Fiji",
                code: "FJ"
            }, {
                name: "Finland",
                code: "FI"
            }, {
                name: "France",
                code: "FR"
            }, {
                name: "French Guiana",
                code: "GF"
            }, {
                name: "French Polynesia",
                code: "PF"
            }, {
                name: "French Southern and Antarctic Lands",
                code: "TF"
            }, {
                name: "Gabon",
                code: "GA"
            }, {
                name: "Gambia, The",
                code: "GM"
            }, {
                name: "Georgia",
                code: "GE"
            }, {
                name: "Germany",
                code: "DE"
            }, {
                name: "Ghana",
                code: "GH"
            }, {
                name: "Gibraltar",
                code: "GI"
            }, {
                name: "Greece",
                code: "GR"
            }, {
                name: "Greenland",
                code: "GL"
            }, {
                name: "Grenada",
                code: "GD"
            }, {
                name: "Guadeloupe",
                code: "GP"
            }, {
                name: "Guam",
                code: "GU"
            }, {
                name: "Guatemala",
                code: "GT"
            }, {
                name: "Guernsey",
                code: "GG"
            }, {
                name: "Guinea",
                code: "GN"
            }, {
                name: "Guinea-Bissau",
                code: "GW"
            }, {
                name: "Guyana",
                code: "GY"
            }, {
                name: "Haiti",
                code: "HT"
            }, {
                name: "Heard Island and McDonald Islands",
                code: "HM"
            }, {
                name: "Holy See (Vatican City)",
                code: "VA"
            }, {
                name: "Honduras",
                code: "HN"
            }, {
                name: "Hong Kong",
                code: "HK"
            }, {
                name: "Hungary",
                code: "HU"
            }, {
                name: "Iceland",
                code: "IS"
            }, {
                name: "India",
                code: "IN"
            }, {
                name: "Indonesia",
                code: "ID"
            }, {
                name: "Iran, Islamic Republic of",
                code: "IR"
            }, {
                name: "Iraq",
                code: "IQ"
            }, {
                name: "Ireland",
                code: "IE"
            }, {
                name: "Isle of Man",
                code: "IM"
            }, {
                name: "Israel",
                code: "IL"
            }, {
                name: "Italy",
                code: "IT"
            }, {
                name: "Jamaica",
                code: "JM"
            }, {
                name: "Japan",
                code: "JP"
            }, {
                name: "Jersey",
                code: "JE"
            }, {
                name: "Jordan",
                code: "JO"
            }, {
                name: "Kazakhstan",
                code: "KZ"
            }, {
                name: "Kenya",
                code: "KE"
            }, {
                name: "Kiribati",
                code: "KI"
            }, {
                name: "Korea, Democratic People's Republic of",
                code: "KP"
            }, {
                name: "Korea, Republic of",
                code: "KR"
            }, {
                name: "Kuwait",
                code: "KW"
            }, {
                name: "Kyrgyzstan",
                code: "KG"
            }, {
                name: "Laos",
                code: "LA"
            }, {
                name: "Latvia",
                code: "LV"
            }, {
                name: "Lebanon",
                code: "LB"
            }, {
                name: "Lesotho",
                code: "LS"
            }, {
                name: "Liberia",
                code: "LR"
            }, {
                name: "Libya",
                code: "LY"
            }, {
                name: "Liechtenstein",
                code: "LI"
            }, {
                name: "Lithuania",
                code: "LT"
            }, {
                name: "Luxembourg",
                code: "LU"
            }, {
                name: "Macao",
                code: "MO"
            }, {
                name: "Macedonia, Republic of",
                code: "MK"
            }, {
                name: "Madagascar",
                code: "MG"
            }, {
                name: "Malawi",
                code: "MW"
            }, {
                name: "Malaysia",
                code: "MY"
            }, {
                name: "Maldives",
                code: "MV"
            }, {
                name: "Mali",
                code: "ML"
            }, {
                name: "Malta",
                code: "MT"
            }, {
                name: "Marshall Islands",
                code: "MH"
            }, {
                name: "Martinique",
                code: "MQ"
            }, {
                name: "Mauritania",
                code: "MR"
            }, {
                name: "Mauritius",
                code: "MU"
            }, {
                name: "Mayotte",
                code: "YT"
            }, {
                name: "Mexico",
                code: "MX"
            }, {
                name: "Micronesia, Federated States of",
                code: "FM"
            }, {
                name: "Moldova",
                code: "MD"
            }, {
                name: "Monaco",
                code: "MC"
            }, {
                name: "Mongolia",
                code: "MN"
            }, {
                name: "Montenegro",
                code: "ME"
            }, {
                name: "Montserrat",
                code: "MS"
            }, {
                name: "Morocco",
                code: "MA"
            }, {
                name: "Mozambique",
                code: "MZ"
            }, {
                name: "Myanmar",
                code: "MM"
            }, {
                name: "Namibia",
                code: "NA"
            }, {
                name: "Nauru",
                code: "NR"
            }, {
                name: "Nepal",
                code: "NP"
            }, {
                name: "Netherlands",
                code: "NL"
            }, {
                name: "New Caledonia",
                code: "NC"
            }, {
                name: "New Zealand",
                code: "NZ"
            }, {
                name: "Nicaragua",
                code: "NI"
            }, {
                name: "Niger",
                code: "NE"
            }, {
                name: "Nigeria",
                code: "NG"
            }, {
                name: "Niue",
                code: "NU"
            }, {
                name: "Norfolk Island",
                code: "NF"
            }, {
                name: "Northern Mariana Islands",
                code: "MP"
            }, {
                name: "Norway",
                code: "NO"
            }, {
                name: "Oman",
                code: "OM"
            }, {
                name: "Pakistan",
                code: "PK"
            }, {
                name: "Palau",
                code: "PW"
            }, {
                name: "Palestine, State of",
                code: "PS"
            }, {
                name: "Panama",
                code: "PA"
            }, {
                name: "Papua New Guinea",
                code: "PG"
            }, {
                name: "Paraguay",
                code: "PY"
            }, {
                name: "Peru",
                code: "PE"
            }, {
                name: "Philippines",
                code: "PH"
            }, {
                name: "Pitcairn",
                code: "PN"
            }, {
                name: "Poland",
                code: "PL"
            }, {
                name: "Portugal",
                code: "PT"
            }, {
                name: "Puerto Rico",
                code: "PR"
            }, {
                name: "Qatar",
                code: "QA"
            }, {
                name: "Réunion",
                code: "RE"
            }, {
                name: "Romania",
                code: "RO"
            }, {
                name: "Russian Federation",
                code: "RU"
            }, {
                name: "Rwanda",
                code: "RW"
            }, {
                name: "Saint Barthélemy",
                code: "BL"
            }, {
                name: "Saint Helena, Ascension and Tristan da Cunha",
                code: "SH"
            }, {
                name: "Saint Kitts and Nevis",
                code: "KN"
            }, {
                name: "Saint Lucia",
                code: "LC"
            }, {
                name: "Saint Martin",
                code: "MF"
            }, {
                name: "Saint Pierre and Miquelon",
                code: "PM"
            }, {
                name: "Saint Vincent and the Grenadines",
                code: "VC"
            }, {
                name: "Samoa",
                code: "WS"
            }, {
                name: "San Marino",
                code: "SM"
            }, {
                name: "Sao Tome and Principe",
                code: "ST"
            }, {
                name: "Saudi Arabia",
                code: "SA"
            }, {
                name: "Senegal",
                code: "SN"
            }, {
                name: "Serbia",
                code: "RS"
            }, {
                name: "Seychelles",
                code: "SC"
            }, {
                name: "Sierra Leone",
                code: "SL"
            }, {
                name: "Singapore",
                code: "SG"
            }, {
                name: "Sint Maarten (Dutch part)",
                code: "SX"
            }, {
                name: "Slovakia",
                code: "SK"
            }, {
                name: "Slovenia",
                code: "SI"
            }, {
                name: "Solomon Islands",
                code: "SB"
            }, {
                name: "Somalia",
                code: "SO"
            }, {
                name: "South Africa",
                code: "ZA"
            }, {
                name: "South Georgia and South Sandwich Islands",
                code: "GS"
            }, {
                name: "South Sudan",
                code: "SS"
            }, {
                name: "Spain",
                code: "ES"
            }, {
                name: "Sri Lanka",
                code: "LK"
            }, {
                name: "Sudan",
                code: "SD"
            }, {
                name: "Suriname",
                code: "SR"
            }, {
                name: "Swaziland",
                code: "SZ"
            }, {
                name: "Sweden",
                code: "SE"
            }, {
                name: "Switzerland",
                code: "CH"
            }, {
                name: "Syrian Arab Republic",
                code: "SY"
            }, {
                name: "Taiwan",
                code: "TW"
            }, {
                name: "Tajikistan",
                code: "TJ"
            }, {
                name: "Tanzania, United Republic of",
                code: "TZ"
            }, {
                name: "Thailand",
                code: "TH"
            }, {
                name: "Timor-Leste",
                code: "TL"
            }, {
                name: "Togo",
                code: "TG"
            }, {
                name: "Tokelau",
                code: "TK"
            }, {
                name: "Tonga",
                code: "TO"
            }, {
                name: "Trinidad and Tobago",
                code: "TT"
            }, {
                name: "Tunisia",
                code: "TN"
            }, {
                name: "Turkey",
                code: "TR"
            }, {
                name: "Turkmenistan",
                code: "TM"
            }, {
                name: "Turks and Caicos Islands",
                code: "TC"
            }, {
                name: "Tuvalu",
                code: "TV"
            }, {
                name: "Uganda",
                code: "UG"
            }, {
                name: "Ukraine",
                code: "UA"
            }, {
                name: "United Arab Emirates",
                code: "AE"
            }, {
                name: "United Kingdom",
                code: "GB"
            }, {
                name: "United States",
                code: "US"
            }, {
                name: "United States Minor Outlying Islands",
                code: "UM"
            }, {
                name: "Uruguay",
                code: "UY"
            }, {
                name: "Uzbekistan",
                code: "UZ"
            }, {
                name: "Vanuatu",
                code: "VU"
            }, {
                name: "Venezuela, Bolivarian Republic of",
                code: "VE"
            }, {
                name: "Vietnam",
                code: "VN"
            }, {
                name: "Virgin Islands, British",
                code: "VG"
            }, {
                name: "Virgin Islands, U.S.",
                code: "VI"
            }, {
                name: "Wallis and Futuna",
                code: "WF"
            }, {
                name: "Western Sahara",
                code: "EH"
            }, {
                name: "Yemen",
                code: "YE"
            }, {
                name: "Zambia",
                code: "ZM"
            }, {
                name: "Zimbabwe",
                code: "ZW"
            }],
            _ = {
                SEA: "SEA",
                METAP: "METAP",
                UCE: "UCE",
                AUNZ: "AUNZ",
                OTHER: "OTHER"
            },
            T = [{
                label: "Tier 0",
                value: 0
            }, {
                label: "Tier I",
                value: 1
            }, {
                label: "Tier II",
                value: 2
            }, {
                label: "Tier III",
                value: 3
            }, {
                label: "Tier IV",
                value: 4
            }, {
                label: "Tier V",
                value: 5
            }, {
                label: "Tier VI",
                value: 6
            }],
            l = ["acl", "ads-account", "gift-code"],
            S = "id_token",
            m = {
                status: function(e) {
                    return e.status
                },
                loading: function(e) {
                    return e.loading
                },
                error: function(e) {
                    return e.error
                },
                message: function(e) {
                    return e.error && e.error.data.message
                }
            },
            f = {
                status: !1,
                error: null,
                message: "",
                loading: !1
            },
            p = {
                OPEN: "opening",
                APPROVED: "approved",
                REJECTED: "rejected",
                PENDING: "pending",
                CLOSED: "closed"
            },
            A = {
                PENDING: "pending",
                DONE: "done",
                REJECTED: "rejected"
            },
            R = {
                APPROVE: "Approve",
                REJECT: "Reject",
                VIEW: "View"
            },
            U = {
                SHOW_ACCOUNT_STATUS_NOT_APPROVED: "SHOW_ACCOUNT_STATUS_NOT_APPROVED",
                SHOW_ACCOUNT_STATUS_APPROVED: "SHOW_ACCOUNT_STATUS_APPROVED",
                SHOW_ACCOUNT_STATUS_IN_REVIEW: "SHOW_ACCOUNT_STATUS_IN_REVIEW",
                SHOW_ACCOUNT_STATUS_PUNISHED: "SHOW_ACCOUNT_STATUS_PUNISHED",
                CONTRACT_NOT_YET_EFFECTIVE: "CONTRACT_NOT_YET_EFFECTIVE",
                CLOSED: "CLOSED"
            },
            C = {
                ACTIVE: "active",
                BLOCKED: "blocked",
                BLOCKED_BY_ADMIN: "blockedByAdmin",
                BLOCKED_BY_RECHARGE_FAILED: "blockedByRechargeFailed",
                BLOCKED_BY_IP_VIOLATION: "blockedByIpViolation",
                BLOCKED_BY_DOMAIN_VIOLATION: "blockedByDomainViolation",
                BLOCKED_BY_CONTACT_VIOLATION: "blockedByContactViolation",
                BLOCKED_BY_PAYMENT_VIOLATION: "blockedByPaymentViolation"
            },
            I = {
                BLOCKED_BY_ADMIN: "BY_ADMIN",
                BLOCKED_BY_RECHARGE_FAILED: "BY_RECHARGE_FAILED",
                BLOCKED_BY_IP_VIOLATION: "IP_VIOLATION",
                BLOCKED_BY_PAYMENT_VIOLATION: "PAYMENT_VIOLATION",
                BLOCKED_BY_CONTACT_VIOLATION: "CONTACT_VIOLATION",
                BLOCKED_BY_DOMAIN_VIOLATION: "DOMAIN_VIOLATION"
            },
            h = {
                APPROVED: "approved",
                REVIEWING: "reviewing",
                REJECTED: "rejected",
                NOT_FOUND: "not_found"
            },
            g = {
                LIMITED: "limited",
                ACTIVATED: "activated"
            },
            b = {
                ADMIN: "ADMIN",
                ROOT: "ROOT",
                EXCLUSIVE_PARTNER: "EXCLUSIVE_PARTNER"
            },
            O = {
                ACTIVE: "active",
                BLOCKED: "blocked"
            },
            N = {
                PAYPAL: "paypal",
                PAYONEER: "payoneer",
                PINGPONG: "pingpong",
                USDT: "USDT",
                BUSD: "BUSD",
                TPBANK: "TPBank",
                CREDITCARD: "creditCard",
                AIRWALLEX: "airWallex",
                AIRWALLEXAUTO: "airWallexAuto",
                TRANSFERWISE: "transferWise",
                TAZAPAY: "tazapay",
                LIANLIAN: "lianlian"
            },
            L = {
                electron: "electron",
                maestro: "maestro",
                dankort: "dankort",
                interpayment: "interpayment",
                unionpay: "unionpay",
                visa: "visa",
                mastercard: "mastercard",
                amex: "amex",
                diners: "diners",
                discover: "discover",
                jcb: "jcb"
            },
            v = {
                NOT_FOUND: "not_found",
                REVIEWING: "reviewing",
                APPROVED: "approved",
                REJECTED: "rejected"
            },
            P = {
                SAVED: "saved",
                PAID: "paid",
                EXPIRED: "expired",
                ACTIVE: "active",
                DEACTIVATE: "deactivate"
            }
    },
    "602d4": function(e, t, n) {},
    6365: function(e, t, n) {
        "use strict";
        n("159b"), n("d3b7"), n("ddb0"), n("466d"), n("ac1f");
        var a = n("2b0e"),
            r = n("a925");

        function c() {
            var e = n("3e8d"),
                t = {};
            return e.keys().forEach((function(n) {
                var a = n.match(/([A-Za-z0-9-_]+)\./i);
                if (a && a.length > 1) {
                    var r = a[1];
                    t[r] = e(n)
                }
            })), t
        }
        a["default"].use(r["a"]), t["a"] = new r["a"]({
            locale: "en",
            fallbackLocale: "en",
            messages: c()
        })
    },
    "78a7": function(e, t, n) {},
    "7f80": function(e, t, n) {
        "use strict";
        var a = n("2b0e"),
            r = n("bc3a"),
            c = n.n(r),
            o = n("a74e"),
            i = window.location.origin,
            u = c.a.create({
                baseURL: i,
                withCredentials: !1,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(o["a"].getToken()),
                    timezone: o["a"].getTimezone()
                }
            });
        u.interceptors.request.use((function(e) {
            var t = o["a"].getToken();
            return t && (e.headers.Authorization = "Bearer ".concat(t)), e
        }), (function(e) {
            throw e.response
        })), u.interceptors.response.use(null, (function(e) {
            throw e.response
        })), a["default"].prototype.$http = u, t["a"] = u
    },
    "8bd0": function(e, t, n) {
        "use strict";
        n("602d4")
    },
    a18c: function(e, t, n) {
        "use strict";
        var a = n("1da1"),
            r = n("2909"),
            c = (n("96cf"), n("99af"), n("2b0e")),
            o = n("8c4f"),
            i = n("a74e"),
            u = (n("d3b7"), n("3ca3"), n("ddb0"), [{
                path: "/partner-permission",
                name: "partner-permission",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-6a70045c")]).then(n.bind(null, "3d09"))
                },
                meta: {
                    pageTitle: "Partner BC permission",
                    requireAuth: !0
                }
            }]),
            s = [{
                path: "/login",
                name: "login",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-3a2931d3")]).then(n.bind(null, "5326"))
                },
                meta: {
                    layout: "full",
                    requireNotAuth: !0
                }
            }, {
                path: "/register",
                name: "register",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-3c89f1ce")]).then(n.bind(null, "935e"))
                },
                meta: {
                    layout: "full",
                    requireNotAuth: !0
                }
            }, {
                path: "/forgot-password",
                name: "forgot-password",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-59e04ab4")]).then(n.bind(null, "fa67"))
                },
                meta: {
                    layout: "full",
                    requireNotAuth: !0
                }
            }, {
                path: "/reset-password",
                name: "reset-password",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-4685b23f")]).then(n.bind(null, "0bff"))
                },
                meta: {
                    layout: "full",
                    requireNotAuth: !0
                }
            }],
            E = [{
                path: "/",
                name: "dashboard",
                component: function() {
                    return Promise.all([n.e("chunk-2d22cfac"), n.e("chunk-018d7abd"), n.e("chunk-54508a50")]).then(n.bind(null, "b3d7"))
                },
                meta: {
                    pageTitle: "Dashboard",
                    requireAuth: !0,
                    requireSiteId: !1,
                    requirePlan: !1
                }
            }],
            d = n("6365"),
            _ = [{
                path: "/profile",
                name: "profile",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-d20f3f16")]).then(n.bind(null, "3b42"))
                },
                meta: {
                    pageTitle: d["a"].t("page.profile"),
                    requireAuth: !0,
                    requireSiteId: !0
                }
            }, {
                path: "/not-authorized",
                name: "not-authorized",
                component: function() {
                    return n.e("chunk-783fff1b").then(n.bind(null, "2015"))
                },
                meta: {
                    layout: "full",
                    resource: "Auth"
                }
            }, {
                path: "/introduction",
                name: "introduction",
                component: function() {
                    return n.e("chunk-1827d68e").then(n.bind(null, "a740"))
                },
                meta: {
                    layout: "full",
                    resource: "Auth"
                }
            }],
            T = [{
                path: "/error-404",
                name: "error-404",
                component: function() {
                    return n.e("chunk-a14fca7a").then(n.bind(null, "d80f"))
                },
                meta: {
                    layout: "full"
                }
            }, {
                path: "*",
                redirect: "error-404"
            }],
            l = [{
                path: "/ads-account",
                name: "ads-account",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-0f1db514")]).then(n.bind(null, "87f2"))
                },
                meta: {
                    pageTitle: "Ads Account Tickets",
                    breadcrumb: [{
                        text: "Listing tickets",
                        active: !0
                    }],
                    requireAuth: !0
                }
            }],
            S = [{
                path: "/payments",
                name: "payments",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-0b7fa0da")]).then(n.bind(null, "d699"))
                },
                meta: {
                    pageTitle: "Payments",
                    breadcrumb: [{
                        text: "Payment request tickets",
                        active: !0
                    }],
                    requireAuth: !0
                }
            }],
            m = [{
                path: "/users",
                name: "users",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-4a797c35")]).then(n.bind(null, "9419"))
                },
                meta: {
                    pageTitle: "User management",
                    requireAuth: !0
                }
            }, {
                path: "/user/:id",
                name: "user",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-63fe28f8")]).then(n.bind(null, "7f70"))
                },
                meta: {
                    pageTitle: "User detail",
                    requireAuth: !0
                }
            }],
            f = [{
                path: "/subscriptions",
                name: "subscriptions",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-7a884b74")]).then(n.bind(null, "1139"))
                },
                meta: {
                    pageTitle: "Review Subscription",
                    requireAuth: !0
                }
            }],
            p = [{
                path: "/productLinks",
                name: "productLinks",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-74e3fe31")]).then(n.bind(null, "3d65"))
                },
                meta: {
                    pageTitle: "Product Links",
                    requireAuth: !0
                }
            }],
            A = [{
                path: "/gift-code",
                name: "gift-code",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-251c2f93")]).then(n.bind(null, "6546"))
                },
                meta: {
                    pageTitle: "Gift code",
                    requireAuth: !0
                }
            }],
            R = [{
                path: "/partners",
                name: "partners",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-10b52267")]).then(n.bind(null, "9645"))
                },
                meta: {
                    pageTitle: "Partner management",
                    requireAuth: !0
                }
            }, {
                path: "/partner/:id",
                name: "partner",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-5bb4a866")]).then(n.bind(null, "8c17"))
                },
                meta: {
                    pageTitle: "Partner detail",
                    requireAuth: !0
                }
            }],
            U = [{
                path: "/market-partner",
                name: "market-partner",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-527ead37")]).then(n.bind(null, "39da"))
                },
                meta: {
                    pageTitle: "Market Package",
                    requireAuth: !0
                }
            }],
            C = [{
                path: "/verify-information",
                name: "verify-information",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-b38dfd8a"), n.e("chunk-2d22cfac"), n.e("chunk-9956bbb4")]).then(n.bind(null, "db54"))
                },
                meta: {
                    pageTitle: "Verify information",
                    requireAuth: !0
                }
            }],
            I = [{
                path: "/inactive-ad-account",
                name: "inactive-ad-account",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-2d22cfac"), n.e("chunk-018d7abd"), n.e("chunk-2d2216e9")]).then(n.bind(null, "293a"))
                },
                meta: {
                    pageTitle: "Inactive ad account",
                    requireAuth: !0
                }
            }],
            h = [{
                path: "/acl",
                name: "acl",
                component: function() {
                    return Promise.all([n.e("chunk-6e0ecc5d"), n.e("chunk-78bebf7b"), n.e("chunk-2d22cfac"), n.e("chunk-0c3c8fb6")]).then(n.bind(null, "3bb5"))
                },
                meta: {
                    pageTitle: "ACL management",
                    requireAuth: !0
                }
            }];
        c["default"].use(o["a"]);
        var g = o["a"].prototype.push;
        o["a"].prototype.push = function(e) {
            return g.call(this, e).catch((function(e) {
                return e
            }))
        };
        var b = new o["a"]({
            mode: "history",
            scrollBehavior: function() {
                return {
                    x: 0,
                    y: 0
                }
            },
            routes: [].concat(Object(r["a"])(s), Object(r["a"])(E), Object(r["a"])(l), Object(r["a"])(_), Object(r["a"])(T), Object(r["a"])(m), Object(r["a"])(S), Object(r["a"])(f), Object(r["a"])(p), Object(r["a"])(A), Object(r["a"])(R), Object(r["a"])(U), Object(r["a"])(C), Object(r["a"])(I), Object(r["a"])(h), Object(r["a"])(u))
        });
        b.beforeEach(function() {
            var e = Object(a["a"])(regeneratorRuntime.mark((function e(t, n, a) {
                var r, c, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = t.matched.some((function(e) {
                                return e.meta.requireAuth
                            })), c = t.matched.some((function(e) {
                                return e.meta.requireNotAuth
                            })), o = !!i["a"].getToken(), o ? c && a({
                                name: "dashboard"
                            }) : r && a({
                                name: "login",
                                query: {
                                    redirect: t.fullPath
                                }
                            }), e.abrupt("return", a());
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }()), b.afterEach((function() {
            var e = document.getElementById("loading-bg");
            e && (e.style.display = "none")
        }));
        t["a"] = b
    },
    a74e: function(e, t, n) {
        "use strict";
        var a = n("5a50"),
            r = n("3092"),
            c = n.n(r);
        t["a"] = {
            getToken: function() {
                return localStorage.getItem(a["m"]) || ""
            },
            removeToken: function() {
                localStorage.removeItem(a["m"])
            },
            getTimezone: function() {
                var e = localStorage.getItem("userData"),
                    t = JSON.parse(e) || {};
                return c()(t.roles, (function(e) {
                    return e === a["a"].EXCLUSIVE_PARTNER
                })) ? "+0" : "+7"
            },
            setToken: function(e) {
                localStorage.setItem(a["m"], e)
            },
            clearLocalStorage: function() {
                localStorage.removeItem(a["m"]), localStorage.removeItem("userData"), window.location.reload()
            }
        }
    },
    b8f2: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }));
        var a = n("a6f4"),
            r = n("4360");

        function c() {
            var e = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.verticalMenu.isVerticalMenuCollapsed
                    },
                    set: function(e) {
                        r["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED", e)
                    }
                }),
                t = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.isRTL
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/TOGGLE_RTL", e)
                    }
                }),
                n = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.skin
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_SKIN", e)
                    }
                }),
                c = Object(a["computed"])((function() {
                    return "bordered" === n.value ? "bordered-layout" : "semi-dark" === n.value ? "semi-dark-layout" : null
                })),
                o = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.routerTransition
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION", e)
                    }
                }),
                i = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.type
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_LAYOUT_TYPE", e)
                    }
                });
            Object(a["watch"])(i, (function(e) {
                "horizontal" === e && "semi-dark" === n.value && (n.value = "light")
            }));
            var u = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.contentWidth
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_CONTENT_WIDTH", e)
                    }
                }),
                s = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.menu.hidden
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN", e)
                    }
                }),
                E = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.navbar.backgroundColor
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG", {
                            backgroundColor: e
                        })
                    }
                }),
                d = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.navbar.type
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG", {
                            type: e
                        })
                    }
                }),
                _ = Object(a["computed"])({
                    get: function() {
                        return r["a"].state.appConfig.layout.footer.type
                    },
                    set: function(e) {
                        r["a"].commit("appConfig/UPDATE_FOOTER_CONFIG", {
                            type: e
                        })
                    }
                });
            return {
                isVerticalMenuCollapsed: e,
                isRTL: t,
                skin: n,
                skinClasses: c,
                routerTransition: o,
                navbarBackgroundColor: E,
                navbarType: d,
                footerType: _,
                layoutType: i,
                contentWidth: u,
                isNavMenuHidden: s
            }
        }
    },
    bd80: function(e, t) {},
    cc0f: function(e, t, n) {},
    d782: function(e) {
        e.exports = JSON.parse('{"common":{"textOr":"or","labelEmail":"Email","placeholderEmail":"Enter your email","labelFirstName":"First Name","labelLastName":"Last Name","labelPhone":"Phone","placeholderFirstName":"johndoe","placeholderLastName":"John Doe","placeholderPhone":"Input your phone number","labelPassword":"Password","btnLoginGoogle":"Log in with Google","btnLoginFacebook":"Log in with Facebook","btnBackToLogin":"Back to login","linkClickHere":"click here","btnUploadImage":"Upload Image","btnDelete":"Delete","textUploadImageSuccess":"Upload image success!","btnSave":"Save","btnSaveChanges":"Save changes","btnCancel":"Cancel","btnReset":"Reset","textLogOut":"Log out","btnAdd":"Add","btnClose":"Close","placeholderPassword":"Enter your password","placeholderName":"Enter your name","placeholderReferralCode":"Enter your referral code","placeholderWhatsapp":"Enter your whatsapp code","placeholderFacebook":"Enter your facebook profile link","placeholderNewPassword":"Enter your password","placeholderRepeatNewPassword":"Confirm your password","labelName":"Name","labelReferralCode":"Referral code","labelRepeatPassword":"Confirm password","search":"Search","requestedAt":"Requested At","approve":"Approve","reject":"Reject","textSearchUserByField":"Search {nameSearch} by field"},"layout":{"btnAddFund":"Add Fund","textDashboard":"Dashboard","textAutoMarketing":"AUTOMATION MARKETING","textEmail":"Email","textSMS":"SMS","textStoreSetting":"STORE SETTING","textTheme":"Theme","textPages":"Pages","textNavigation":"Navigation","textDomain":"Domain","textProfile":"Profile","textGoToYourStore":"Go to your Store","textChooseAnotherStore":"Choose another store","textLogOut":"Log out","textOverview":"Overview","textAddAccount":"My Ad Account","textPayment":"Payment","textReferral":"Referral Program","textPlatform":"Ecomdy Platform","textFaq":"FAQs","myTask":"My Tasks"},"page":{"storeSetting":"Store Setting","dashboard":"Dashboard","pages":"Pages","profile":"Profile","billing":"Billing","domain":"Domain"},"breadcrumb":{"textTheme":"Theme","textPages":"Pages","textAddPage":"Add Page","textEditPage":"Edit Page","textDomains":"Domain","textAddDomain":"Add Domain","textEditDomain":"Edit Domain"},"login":{"textSignIn":"Admin Login","textWelcome":"Welcome to","textGuide":"Skyrocket Your Sales & Revenue with TikTok Ads","linkForgotPassword":"Forgot Password?","btnSignIn":"Sign In","textNewOnPlatform":"New on our platform?","linkCreateAnAccount":"Create an account","textLoginSuccess":"Login success!","iDontHaveAnyAccount":"I don\'t have any account","registerNow":"Register now","textVerifyAccount":"Verify account","btnVerifyCode":"Verify Code"},"register":{"textWelcome":"Sign up","textGuide":"Run your business, not your software.","textIAgree":"I agree to","linkTerm":"privacy policy & terms","btnSignUp":"Sign Up","textAlreadyAccount":"I have an account","linkLogin":"Login now","textRegisterSuccess":"Check email to active account!","textBenefits":"The benefits when you become a member","textGetGlobal":"Get Global TiktokAds Agency Account","textFreeDayService":"14 days free service","textUnlimitedSpending":"Unlimited spending","textGlobalDeposit":"Global Deposit","textJoinWithCommunity":"Join with community","textLiveChat":"Live Chat","textSupport":"Support 24/7","textEarnMoney":"Earn money from Affiliate Marketing Programs"},"forgotPW":{"textWelcome":"Forgot Password?","textGuide":"Missing or forget account ? Here is the way you can get it back","btnSendLinkReset":"Send","textForgotPWSuccess":"Check email to reset password!","textNoAccount":"I don’t have any account","btnRegisterNow":"Register now","textLogin":"Login"},"resetPW":{"textWelcome":"Reset Password","textGuide":"Your new password must be different from previously used passwords","labelNewPassword":"New Password","labelConfirmPassword":"Confirm Password","btnSetNewPassword":"Set New Password","textResetPWSuccess":"Reset password success!","placeholderNewPW":"Enter your new password","placeholderConfirmPW":"Confirm your new password"},"activateAccount":{"textActivateSuccess":"Activate success!"},"homePageSetting":{"textSlideshow":"Slideshow","textRecommendUploadSlideshow":"2048 x 921 px recommend","btnAddSlideshow":"Add slideshow","labelImageLink":"Image Link","placeholderImageLink":"Input link","textRecentView":"Recent view","labelShowFeaturedCategory":"Show Featured Category"},"profile":{"textChangePassword":"Change Password","textGeneral":"General","descUploadImage":"Allowed JPG, PNG, SVG. Max size of 5MB","labelOldPassword":"Old Password","labelNewPassword":"New password","labelRetypeNewPassword":"Confirm new password","placeholderPassword":"******","textUpdateAccountSuccess":"Update account success!","textChangePasswordSuccess":"Change password success!","textChangePasswordFailed":"Change password failed!","textCurrentPasswordWrong":"Current password is wrong!"},"user":{"searchKeywords":"Keywords","btnAddNewUser":"Add user","regional":"Regional"},"account":{"searchKeywords":"Keywords","id":"Ticket ID","account":"Account","howToMake":"How to Make a Tiktok Ads Manager Account","inOrderTo":"In order to share your ads on TikTok you\'ll first need to create a TikTok Ads Manager account. This video will take you through the different steps that involves creating an account, completing your account setup, and passing the account review. ","bmIdPlh":"Enter your Business_ID","name":"Account name","sendIt":"Send It","pleaseFulfil":"*Please fill full information to get new account","alreadyAccount":"Already account exists ? Make a deposit","noAcc":"No account was found","accountInfo":"User Info","businessInfo":"Business Info","storeUrl":"Store Url","timeZone":"Timezone","currency":"Currency","status":"Status","requestAt":"Requested at","newAccount":"New Account","getYourAcc":"Get your account right now","cost":"Cost","balance":"Balance","action":"Actions","note":"Note","search":"Account search","placeholderSearch":"Search account...","labelDateFiler":"Date","textRejectSuccess":"Reject ticket successfully","textApproveSuccess":"Approve ticket successfully","textCommentSuccess":"Comment ticket successfully"},"payment":{"id":"Ticket ID","account":"Account","searchKeywords":"Keywords","userInfo":"User info","transactionInfo":"Transaction info","status":"Status","createdAt":"Created at","newAccount":"New Account","paymentMethod":"Payment Method","note":"Note","name":"Name","amount":"Amount","balance":"Balance","action":"Actions","search":"Account search","payload":"Payload","total":"Total","attachmentLink":"Attachment link","labelDateFiler":"Date","textRejectSuccess":"Reject ticket successfully","textApproveSuccess":"Approve ticket successfully","textCommentSuccess":"Comment ticket successfully"},"transaction":{"date":"Transaction date","type":"Transaction type","balance":"Balance change"},"pagination":{"pageLength":"Product link per page","showing":"Showing {pageFrom} to {pageTo}"}}')
    },
    d98d: function(e, t, n) {
        e.exports = n.p + "img/ic-black-dollar.4d1d1829.svg"
    },
    dde5: function(e, t, n) {
        "use strict";
        n.d(t, "m", (function() {
            return r
        })), n.d(t, "c", (function() {
            return c
        })), n.d(t, "k", (function() {
            return u
        })), n.d(t, "b", (function() {
            return E
        })), n.d(t, "o", (function() {
            return d
        })), n.d(t, "h", (function() {
            return _
        })), n.d(t, "n", (function() {
            return T
        })), n.d(t, "l", (function() {
            return l
        })), n.d(t, "f", (function() {
            return S
        })), n.d(t, "d", (function() {
            return m
        })), n.d(t, "j", (function() {
            return p
        })), n.d(t, "g", (function() {
            return A
        })), n.d(t, "p", (function() {
            return R
        })), n.d(t, "e", (function() {
            return U
        })), n.d(t, "a", (function() {
            return C
        })), n.d(t, "i", (function() {
            return I
        }));
        var a = n("7f80"),
            r = {
                getUserStats: function(e) {
                    return a["a"].get("/api/admin/statistics/users", {
                        params: e
                    })
                },
                getDepositStats: function(e) {
                    return a["a"].get("/api/admin/statistics/deposit", {
                        params: e
                    })
                },
                getSpendingStats: function(e) {
                    return a["a"].get("/api/admin/statistics/spending", {
                        params: e
                    })
                },
                getAdsAccountStats: function(e) {
                    return a["a"].get("/api/admin/statistics/ads-account", {
                        params: e
                    })
                },
                getBonusStats: function(e) {
                    return a["a"].get("/api/admin/statistics/bonus", {
                        params: e
                    })
                },
                getTopPaymentStats: function(e) {
                    return a["a"].get("/api/admin/statistics/payment-method", {
                        params: e
                    })
                },
                getTotalBalanceStats: function(e) {
                    return a["a"].get("/api/admin/statistics/balances", {
                        params: e
                    })
                },
                getPlanCharged: function(e) {
                    return a["a"].get("/api/admin/statistics/plan-charged", {
                        params: e
                    })
                },
                getUsers: function(e) {
                    return a["a"].get("/api/admin/statistics/users", {
                        params: e
                    })
                },
                getDeposits: function(e) {
                    return a["a"].get("/api/admin/statistics/deposit", {
                        params: e
                    })
                },
                getAdsAccount: function(e) {
                    return a["a"].get("/api/admin/statistics/ads-account", {
                        params: e
                    })
                },
                getBonus: function(e) {
                    return a["a"].get("/api/admin/statistics/bonus", {
                        params: e
                    })
                },
                getBalances: function(e) {
                    return a["a"].get("/api/admin/statistics/balances", {
                        params: e
                    })
                },
                getListBC: function() {
                    return a["a"].get("/api/admin/bcs/balance")
                }
            },
            c = {
                login: function(e) {
                    return a["a"].post("/api/users/login", e)
                },
                sendLoginVerificationCode: function(e) {
                    return a["a"].post("/api/admin/login", e)
                },
                register: function(e) {
                    return a["a"].post("/api/users/register", e)
                },
                resetInit: function(e) {
                    return a["a"].post("/api/users/forgot-password", e)
                },
                resetFinish: function(e) {
                    return a["a"].post("/api/users/reset-password", e)
                },
                getAccountInfo: function() {
                    return a["a"].get("/api/users")
                },
                getGeneralConfig: function() {
                    return a["a"].get("/api/admin/config-values")
                },
                updatePassword: function(e) {
                    return a["a"].patch("/api/users/change-password", e)
                },
                getLoginVerificationCode: function(e) {
                    return a["a"].post("/api/admin/login/send-verification", e)
                }
            },
            o = n("5530"),
            i = (n("99af"), n("7db0"), n("b64b"), "recharge_user_balance"),
            u = {
                getPaymentTickets: function(e) {
                    var t = Object(o["a"])(Object(o["a"])({}, e), {}, {
                        type: i
                    });
                    return a["a"].get("api/admin/tickets", {
                        params: t
                    })
                },
                approveTicket: function(e) {
                    return a["a"].patch("/api/admin/tickets/approve/".concat(e.id), {
                        adsAccountId: e.adsAccountId,
                        BCId: e.BCId
                    })
                },
                rejectTicket: function(e) {
                    return a["a"].patch("/api/admin/tickets/reject/".concat(e.id), {
                        message: e.message
                    })
                },
                commentTicket: function(e) {
                    return a["a"].post("/api/admin/tickets/".concat(e.id, "/comments"), {
                        message: e.message
                    })
                },
                getTransactions: function(e) {
                    var t = Object(o["a"])({}, e),
                        n = Object.keys(t).find((function(e) {
                            return "types[]" === e
                        }));
                    return n ? a["a"].get("api/admin/transactions", {
                        params: t
                    }) : a["a"].get("api/admin/transactions?types[]=add_fund_user_balance&types[]=admin_fix_recharge_money&types[]=admin_fix_withdraw_money&types[]=referral_payout&types[]=recharge_gift_code&types[]=stripe_subscription&types[]=user_tip_for_am", {
                        params: t
                    })
                },
                getAdsAccountHistories: function(e) {
                    var t = Object(o["a"])({}, e),
                        n = Object.keys(t).find((function(e) {
                            return "types[]" === e
                        }));
                    return n ? a["a"].get("api/admin/transactions", {
                        params: t
                    }) : a["a"].get("api/admin/transactions?types[]=refund_ads_account_balance&types[]=recharge_ads_account_balance&types=system_withdraw_due_to_inactive", {
                        params: t
                    })
                }
            },
            s = "create_ads_account",
            E = {
                getAccountTickets: function(e) {
                    var t = Object(o["a"])(Object(o["a"])({}, e), {}, {
                        type: s
                    });
                    return a["a"].get("api/admin/tickets", {
                        params: t
                    })
                },
                getListAccountNoPaging: function() {
                    var e = {
                        page: 1,
                        size: 20
                    };
                    return a["a"].get("api/admin/tickets", {
                        params: e
                    })
                },
                approveTicket: function(e) {
                    return a["a"].patch("/api/admin/tickets/approve/".concat(e.id), {
                        adsAccountId: e.adsAccountId,
                        BCId: e.BCId
                    })
                },
                rejectTicket: function(e) {
                    return a["a"].patch("/api/admin/tickets/reject/".concat(e.id), {
                        message: e.message
                    })
                },
                commentTicket: function(e) {
                    return a["a"].post("/api/admin/tickets/".concat(e.id, "/comments"), {
                        message: e.message
                    })
                },
                createAdsAccount: function(e) {
                    return a["a"].post("/api/admin/users/".concat(e.id, "/ads-accounts"), {
                        adsAccounts: e.adsAccounts,
                        skipCheckSpendingAdAccount: e.skipCheckSpendingAdAccount
                    })
                }
            },
            d = {
                getUser: function(e) {
                    var t = e.id;
                    return a["a"].get("/api/admin/users/".concat(t))
                },
                getAdsAccountsUser: function(e) {
                    var t = e.id,
                        n = e.page,
                        r = void 0 === n ? 1 : n,
                        c = e.size,
                        o = void 0 === c ? 10 : c,
                        i = e.keyword,
                        u = {
                            page: r,
                            size: o,
                            keyword: i
                        };
                    return a["a"].get("/api/admin/users/".concat(t, "/ads-accounts"), {
                        params: u
                    })
                },
                getListUser: function(e) {
                    return a["a"].get("/api/admin/users", {
                        params: e
                    })
                },
                activeUser: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id, "/status"), e)
                },
                blockUser: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id, "/status"), e)
                },
                addWhiteListBlock: function(e) {
                    return a["a"].patch("api/admin-users/".concat(e.id, "/whitelist-block"), {
                        whitelist: e.whitelist
                    })
                },
                updateUser: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id), e)
                },
                createProductLinks: function(e) {
                    return a["a"].put("/api/admin/users/".concat(e.id, "/product-profile"), e.detail)
                },
                updateBalanceUser: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id, "/balance"), e)
                },
                changePlanType: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id, "/plans"), e)
                },
                deleteAdsAccount: function(e) {
                    return a["a"].delete("/api/admin/users/".concat(e.userId, "/ads-accounts"), {
                        data: {
                            adsAccountIds: e.adsAccounts
                        }
                    })
                },
                addNewUser: function(e) {
                    return a["a"].post("/api/admin/users/create/black-agency", e)
                },
                profileStatusUpdate: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.idUser, "/profile-status"), e.detail)
                },
                getAvailableCreditCard: function(e) {
                    return a["a"].get("/api/admin/users/".concat(e.id, "/payment-methods"))
                },
                updateStatusProductLinks: function(e) {
                    return a["a"].put("/api/admin/users/".concat(e.id, "/product-profile"), e)
                },
                markKYCUser: function(e) {
                    return a["a"].put("api/admin/users/".concat(e.id, "/kyc/done"), e)
                },
                getListAM: function(e) {
                    return a["a"].get("/api/admin/accounts-management", {
                        params: e
                    })
                },
                listAdminNote: function(e) {
                    return a["a"].get("/api/admin/users/".concat(e.id, "/notes"), e)
                },
                addNote: function(e) {
                    return a["a"].post("/api/admin/users/".concat(e.id, "/notes"), e)
                },
                updateNote: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id, "/notes/").concat(e.noteId), e)
                },
                deleteNote: function(e) {
                    return a["a"].delete("/api/admin/users/".concat(e.id, "/notes"), {
                        data: {
                            noteIds: e.noteIds
                        }
                    })
                },
                assignMultiUserToAM: function(e) {
                    return a["a"].put("/api/admin/accounts-management/multi-users/assign", e)
                },
                resignMultiUserToAM: function(e) {
                    return a["a"].put("/api/admin/accounts-management/multi-users/resign", e)
                },
                getListPartnerBcs: function(e) {
                    return a["a"].get("/api/admin/ads-accounts/users/".concat(e.id, "/partner-bcs"), e)
                },
                updateTier: function(e) {
                    return a["a"].patch("api/admin/users/".concat(e.id, "/tier-level"), {
                        tierLevel: e.tier
                    })
                },
                createAdsAccount: function(e) {
                    return a["a"].post("/api/admin/ads-accounts", e)
                },
                closeAdsAccount: function(e) {
                    return a["a"].delete("/api/admin/ads-accounts/users/".concat(e.userId, "/close"), {
                        data: {
                            adsAccountIds: e.adsAccounts
                        }
                    })
                },
                disconnectTiktok: function(e) {
                    return a["a"].patch("/api/admin-users/".concat(e.id, "/disconnect-tiktok"))
                },
                fetchDetailUserRelated: function(e) {
                    var t = e.id;
                    return a["a"].get("/api/admin/ads-accounts/users/".concat(t, "/statistics"))
                }
            },
            _ = {
                getAllTask: function(e) {
                    var t = Object(o["a"])({}, e);
                    return a["a"].get("api/admin/tickets", {
                        params: t
                    })
                }
            },
            T = {
                getSubscriptions: function(e) {
                    var t = Object(o["a"])({}, e);
                    return a["a"].get("api/admin/users?sort=-plans.lastCanceledAt", {
                        params: t
                    })
                },
                approveSubscription: function(e) {
                    var t = Object(o["a"])({}, e);
                    return delete t.id, a["a"].post("/api/admin/users/".concat(e.id, "/plans/review-cancel"), {
                        params: t
                    })
                },
                rejectSubscription: function(e) {
                    var t = Object(o["a"])({}, e);
                    return delete t.id, a["a"].post("/api/admin/users/".concat(e.id, "/plans/review-cancel?skip=true"), {
                        params: t
                    })
                },
                deleteSubscription: function(e) {
                    return a["a"].delete("/api/admin/users/".concat(e.id, "/ads-accounts"), {
                        data: {
                            adsAccountIds: e.adsAccounts
                        }
                    })
                }
            },
            l = {
                getListProductLinks: function(e) {
                    return a["a"].get("/api/admin/users", {
                        params: e
                    })
                }
            },
            S = {
                createKYCUser: function(e) {
                    return a["a"].post("/api/admin/kyc-users", e)
                }
            },
            m = {
                getListGiftCode: function(e) {
                    return a["a"].get("/api/admin/gift-codes", {
                        params: e
                    })
                },
                getListPartnerNoPaging: function(e) {
                    return a["a"].get("/api/admin/partners/all", {
                        params: e
                    })
                },
                getUserInfo: function(e) {
                    return a["a"].get("/api/admin/users", {
                        params: e
                    })
                },
                deactivateGiftCode: function(e) {
                    return a["a"].put("/api/admin/gift-codes/".concat(e.id), e)
                },
                updateGiftCode: function(e) {
                    return a["a"].put("/api/admin/gift-codes/".concat(e.id), e)
                },
                createGiftCode: function(e) {
                    return a["a"].post("/api/admin/gift-codes", e)
                }
            },
            f = n("15fd"),
            p = {
                getListMemberPartner: function(e) {
                    return a["a"].get("/api/admin/users/".concat(e.id, "/partnership/members"), {
                        params: Object(o["a"])(Object(o["a"])({}, e), {}, {
                            id: null
                        })
                    })
                },
                getTotalMemberPartner: function(e) {
                    return a["a"].get("/api/admin/users/".concat(e.id, "/partnership/statistics/members"), {
                        params: Object(o["a"])(Object(o["a"])({}, e), {}, {
                            id: null
                        })
                    })
                },
                createPartner: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id, "/partnership"), e)
                },
                rejectPartner: function(e) {
                    return a["a"].delete("/api/admin/users/".concat(e.id, "/partnership"))
                },
                getListPartner: function(e) {
                    return a["a"].get("/api/admin/users/partnership", {
                        params: e
                    })
                },
                updateRolePartner: function(e) {
                    return a["a"].patch("/api/admin/users/".concat(e.id, "/acl"), e)
                },
                deleteRolePartner: function(e) {
                    return a["a"].delete("/api/admin/users/".concat(e.id, "/acl"), {
                        data: e
                    })
                },
                upgradeToPartner: function(e) {
                    return a["a"].patch("api/admin/users/".concat(e.id, "/partnership"), e)
                },
                assignToAnotherPartner: function(e) {
                    return a["a"].put("/api/admin/users/".concat(e.id, "/partner-member"), e)
                },
                getSpendingDepositPartnerDetail: function(e) {
                    return a["a"].get("/api/admin/users/".concat(e.id, "/partnership/statistics/spending-deposit"), {
                        params: e
                    })
                },
                getTotalMemberMonthPartnerDetail: function(e) {
                    return a["a"].get("/api/admin/users/".concat(e.id, "/partnership/statistics/members/all"), {
                        params: e
                    })
                },
                getTotalAdsAccountMonthPartnerDetail: function(e) {
                    return a["a"].get("/api/admin/users/".concat(e.id, "/partnership/statistics/ads-accounts"), {
                        params: e
                    })
                },
                getAdsAccountsPartner: function(e) {
                    return a["a"].get("api/admin/users/".concat(e.id, "/partnership/statistics/ads-accounts"), {
                        params: e
                    })
                },
                removeMember: function(e) {
                    return a["a"].delete("/api/admin/users/".concat(e.id, "/partnership/members"), {
                        data: {
                            memberLocalUserIds: e.memberLocalUserIds
                        }
                    })
                },
                getListAdAccountUser: function(e) {
                    return a["a"].get("/api/admin/ads-accounts/spending-today", {
                        params: e
                    })
                },
                changeStatusFormWhitelistPartner: function(e) {
                    var t = e.localUserId,
                        n = Object(f["a"])(e, ["localUserId"]);
                    return a["a"].patch("/api/admin/users/".concat(t, "/partnership/form-whitelist"), n)
                }
            },
            A = {
                getListPackage: function(e) {
                    return a["a"].get("/api/admin/partnership/packages", {
                        params: e
                    })
                },
                updateAPackage: function(e) {
                    return a["a"].patch("/api/admin/partnership/packages/".concat(e.id, "/price/").concat(e.priceId), e)
                }
            },
            R = {
                getListUserInfo: function(e) {
                    return a["a"].get("/api/admin/users/contact-info", {
                        params: e
                    })
                },
                verifyUserInfo: function(e) {
                    var t = e.id,
                        n = e.status,
                        r = Object(f["a"])(e, ["id", "status"]);
                    return a["a"].post("/api/admin/users/".concat(t, "/contact-info/").concat(n), r)
                }
            },
            U = {
                listInactiveAdAccount: function(e) {
                    return a["a"].get("/api/admin/ads-account-inactive-report", {
                        params: e
                    })
                },
                deleteAdsAccounts: function(e) {
                    return a["a"].delete("/api/admin/ads-accounts/disable", {
                        data: e
                    })
                },
                reactiveAdAccounts: function(e) {
                    return a["a"].post("/api/admin/ads-accounts/reactive", e)
                }
            },
            C = {
                getListAcl: function() {
                    return a["a"].get("/api/admin/roles")
                },
                createRole: function(e) {
                    return a["a"].post("/api/admin/roles", e)
                },
                updateRole: function(e) {
                    return a["a"].put("/api/admin/roles/acl", e)
                },
                assignRole: function(e) {
                    return a["a"].put("/api/admin/roles/users/".concat(e.id), {
                        roles: e.roles
                    })
                }
            },
            I = {
                approvePartnerPermission: function(e) {
                    return a["a"].post("/api/admin/ads-accounts/partner-bc-permissions/approve", e)
                },
                revokePartnerPermission: function(e) {
                    return a["a"].post("/api/admin/ads-accounts/partner-bc-permissions/".concat(e._id, "/revoke"))
                },
                getListPartnerPermission: function(e) {
                    return a["a"].get("/api/admin/ads-accounts/partners-bc-permissions", {
                        params: e
                    })
                }
            }
    },
    ded8: function(e, t, n) {
        e.exports = n.p + "img/ic-green-dollar.7afde286.svg"
    },
    e1e1: function(e, t, n) {
        e.exports = n.p + "img/ic-total-user.3da4942f.svg"
    },
    eabe: function(e, t, n) {
        e.exports = n.p + "img/ic-tiktok-user.7060e7e5.svg"
    },
    ed29: function(e, t, n) {
        e.exports = n.p + "img/logo.ccaa7dbd.svg"
    },
    f472: function(e, t, n) {
        e.exports = n.p + "img/ic-dollar.9eb4e058.svg"
    },
    fddc: function(e, t) {},
    fea2: function(e, t) {}
});