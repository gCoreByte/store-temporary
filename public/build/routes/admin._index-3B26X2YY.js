import {
  require_auth
} from "/build/_shared/chunk-PY3EKTDQ.js";
import {
  DollarSign,
  Package,
  ShoppingCart
} from "/build/_shared/chunk-DSDQICOT.js";
import {
  cn
} from "/build/_shared/chunk-XH4Q75SW.js";
import {
  require_db
} from "/build/_shared/chunk-DXZPNPAJ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-IDYCBAX5.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-DJCTX2ZP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin._index.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_auth = __toESM(require_auth(), 1);

// app/components/ui/card.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/card.tsx"
  );
  import.meta.hot.lastModified = "1732345094981.2727";
}
var Card = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("rounded-xl border bg-card text-card-foreground shadow", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c2 = Card;
Card.displayName = "Card";
var CardHeader = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c4 = CardHeader;
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 38,
  columnNumber: 12
}, this));
_c6 = CardTitle;
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 44,
  columnNumber: 12
}, this));
_c8 = CardDescription;
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 50,
  columnNumber: 12
}, this));
_c10 = CardContent;
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 56,
  columnNumber: 12
}, this));
_c12 = CardFooter;
CardFooter.displayName = "CardFooter";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c, "Card$React.forwardRef");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "CardHeader$React.forwardRef");
$RefreshReg$(_c4, "CardHeader");
$RefreshReg$(_c5, "CardTitle$React.forwardRef");
$RefreshReg$(_c6, "CardTitle");
$RefreshReg$(_c7, "CardDescription$React.forwardRef");
$RefreshReg$(_c8, "CardDescription");
$RefreshReg$(_c9, "CardContent$React.forwardRef");
$RefreshReg$(_c10, "CardContent");
$RefreshReg$(_c11, "CardFooter$React.forwardRef");
$RefreshReg$(_c12, "CardFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin._index.tsx"
  );
  import.meta.hot.lastModified = "1732345339129.551";
}
function AdminIndex() {
  _s();
  const {
    stats
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold mb-8", children: "Dashboard Overview" }, void 0, false, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Total Products" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Package, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-2xl font-bold", children: stats.totalProducts }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Total Variants" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ShoppingCart, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-2xl font-bold", children: stats.totalVariants }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Low Stock Items" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DollarSign, { className: "h-4 w-4 text-muted-foreground" }, void 0, false, {
            fileName: "app/routes/admin._index.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-2xl font-bold", children: stats.lowStock }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin._index.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin._index.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(AdminIndex, "glWwXbowokwNwpVNU8Yux2Z5J1U=", false, function() {
  return [useLoaderData];
});
_c13 = AdminIndex;
var _c13;
$RefreshReg$(_c13, "AdminIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminIndex as default
};
//# sourceMappingURL=/build/routes/admin._index-3B26X2YY.js.map
