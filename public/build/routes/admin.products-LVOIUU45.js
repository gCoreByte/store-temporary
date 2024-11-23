import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  require_db
} from "/build/_shared/chunk-E7TNPIXH.js";
import {
  Button
} from "/build/_shared/chunk-NXXIG2H6.js";
import "/build/_shared/chunk-GIK2EE6Q.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Plus
} from "/build/_shared/chunk-DSDQICOT.js";
import {
  cn
} from "/build/_shared/chunk-XH4Q75SW.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link,
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

// app/routes/admin.products.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_auth = __toESM(require_auth(), 1);

// app/components/ui/table.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/table.tsx"
  );
  import.meta.hot.lastModified = "1732345095296.607";
}
var Table = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c2 = Table;
Table.displayName = "Table";
var TableHeader = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c4 = TableHeader;
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c6 = TableBody;
TableBody.displayName = "TableBody";
var TableFooter = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 46,
  columnNumber: 12
}, this));
_c8 = TableFooter;
TableFooter.displayName = "TableFooter";
var TableRow = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { ref, className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 52,
  columnNumber: 12
}, this));
_c10 = TableRow;
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { ref, className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 58,
  columnNumber: 12
}, this));
_c12 = TableHead;
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(_c13 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { ref, className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c14 = TableCell;
TableCell.displayName = "TableCell";
var TableCaption = React.forwardRef(_c15 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 70,
  columnNumber: 12
}, this));
_c16 = TableCaption;
TableCaption.displayName = "TableCaption";
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
var _c13;
var _c14;
var _c15;
var _c16;
$RefreshReg$(_c, "Table$React.forwardRef");
$RefreshReg$(_c2, "Table");
$RefreshReg$(_c3, "TableHeader$React.forwardRef");
$RefreshReg$(_c4, "TableHeader");
$RefreshReg$(_c5, "TableBody$React.forwardRef");
$RefreshReg$(_c6, "TableBody");
$RefreshReg$(_c7, "TableFooter$React.forwardRef");
$RefreshReg$(_c8, "TableFooter");
$RefreshReg$(_c9, "TableRow$React.forwardRef");
$RefreshReg$(_c10, "TableRow");
$RefreshReg$(_c11, "TableHead$React.forwardRef");
$RefreshReg$(_c12, "TableHead");
$RefreshReg$(_c13, "TableCell$React.forwardRef");
$RefreshReg$(_c14, "TableCell");
$RefreshReg$(_c15, "TableCaption$React.forwardRef");
$RefreshReg$(_c16, "TableCaption");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.products.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.products.tsx"
  );
  import.meta.hot.lastModified = "1732345340663.9211";
}
function AdminProducts() {
  _s();
  const {
    products
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Products" }, void 0, false, {
        fileName: "app/routes/admin.products.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        "Add Product"
      ] }, void 0, true, {
        fileName: "app/routes/admin.products.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.products.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.products.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Name" }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Slug" }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Variants" }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Total Stock" }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Actions" }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.products.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.products.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableBody, { children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { className: "font-medium", children: product.name }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 71,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: product.slug }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: product.variants.length }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: product.variants.reduce((acc, variant) => acc + variant.stock, 0) }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `${product.id}/edit`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", size: "sm", children: "Edit" }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.products.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this)
      ] }, product.id, true, {
        fileName: "app/routes/admin.products.tsx",
        lineNumber: 70,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.products.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.products.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.products.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.products.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(AdminProducts, "myEvnF20fcYyfWpqSQ3PXWXvEBg=", false, function() {
  return [useLoaderData];
});
_c17 = AdminProducts;
var _c17;
$RefreshReg$(_c17, "AdminProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminProducts as default
};
//# sourceMappingURL=/build/routes/admin.products-LVOIUU45.js.map
