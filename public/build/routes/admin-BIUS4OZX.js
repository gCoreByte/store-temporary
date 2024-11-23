import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  Button
} from "/build/_shared/chunk-NXXIG2H6.js";
import "/build/_shared/chunk-GIK2EE6Q.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  LayoutDashboard,
  LogOut,
  Package,
  ShoppingCart
} from "/build/_shared/chunk-DSDQICOT.js";
import "/build/_shared/chunk-XH4Q75SW.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link,
  Outlet
} from "/build/_shared/chunk-IDYCBAX5.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-DJCTX2ZP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.tsx"
  );
  import.meta.hot.lastModified = "1732345341261.7493";
}
function AdminLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-64 bg-gray-900 text-white p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-bold mb-8", children: "Admin Dashboard" }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "w-full justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutDashboard, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          "Dashboard"
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "w-full justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Package, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          "Products"
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/orders", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "w-full justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCart, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          "Orders"
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "w-full justify-start text-red-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "mr-2 h-4 w-4" }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          "Logout"
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c = AdminLayout;
var _c;
$RefreshReg$(_c, "AdminLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminLayout as default
};
//# sourceMappingURL=/build/routes/admin-BIUS4OZX.js.map
