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
  Link,
  useLoaderData
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);

// app/components/product-card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/product-card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/product-card.tsx"
  );
  import.meta.hot.lastModified = "1732335502000";
}
function ProductCard({
  product
}) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  const firstVariant = product.variants[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.slug}`, className: "group rounded-lg border p-4 hover:shadow-lg transition-shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-square overflow-hidden rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: firstVariant.image, alt: product.name, className: "h-full w-full object-cover transition-transform group-hover:scale-105" }, void 0, false, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: product.name }, void 0, false, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: product.description }, void 0, false, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 font-medium", children: [
        "From $",
        lowestPrice.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/product-card.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product-card.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product-card.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = ProductCard;
var _c;
$RefreshReg$(_c, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1732343472000.9995";
}
function Index() {
  _s();
  const {
    products
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold mb-8", children: "Featured Products" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCard, { product }, product.id, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 46,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s(Index, "myEvnF20fcYyfWpqSQ3PXWXvEBg=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-YLFLPPTQ.js.map
