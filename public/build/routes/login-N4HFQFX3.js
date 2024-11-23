import {
  Input,
  Label,
  z
} from "/build/_shared/chunk-5VRDHO3T.js";
import {
  useToast
} from "/build/_shared/chunk-YW5UE4MQ.js";
import "/build/_shared/chunk-G77ZFYEQ.js";
import {
  Button
} from "/build/_shared/chunk-NXXIG2H6.js";
import "/build/_shared/chunk-GIK2EE6Q.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_auth
} from "/build/_shared/chunk-PY3EKTDQ.js";
import "/build/_shared/chunk-XH4Q75SW.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  useActionData,
  useNavigation
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

// app/routes/login.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1732345359794.2427";
}
var LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
function Login() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    toast
  } = useToast();
  if (actionData?.error) {
    toast({
      title: "Error",
      description: actionData.error,
      variant: "destructive"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Sign in to your account" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md shadow-sm space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "email", children: "Email address" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "mt-1" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "password", children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "mt-1" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full", disabled: navigation.state === "submitting", children: navigation.state === "submitting" ? "Signing in..." : "Sign in" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 92,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(Login, "ejU0KXskKS6V4Ohk/tAsNEupiws=", false, function() {
  return [useActionData, useNavigation, useToast];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-N4HFQFX3.js.map
