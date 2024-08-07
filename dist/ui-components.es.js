import { openBlock as a, createElementBlock as m, createElementVNode as l, normalizeClass as k, createBlock as B, unref as s, renderSlot as p, createVNode as w, createCommentVNode as j, ref as z, computed as I, resolveDynamicComponent as ue, withCtx as y, toDisplayString as R, toRefs as Q, reactive as de, watch as q, onMounted as re, nextTick as Y, withKeys as ve, createTextVNode as ce, Fragment as J, renderList as te, mergeProps as Z, withDirectives as fe, vShow as xe, normalizeProps as N, guardReactiveProps as ee, useAttrs as Me, withModifiers as ie, Transition as Le, normalizeStyle as Ve, Teleport as Ae } from "vue";
import { get as i, templateRef as ne, onClickOutside as we, set as v, syncRef as X, refThrottled as Ie, asyncComputed as Fe, whenever as be, useMounted as Te, useMediaQuery as pe, refAutoReset as Oe, useMemory as je } from "@vueuse/core";
import { Combobox as me, ComboboxLabel as _e, ComboboxInput as ye, ComboboxOptions as ge, ComboboxOption as he, Switch as He, TransitionRoot as $e, Dialog as ke, TransitionChild as ae, DialogPanel as Be, DialogTitle as ze, Menu as Re, MenuButton as Pe, MenuItems as Ze } from "@headlessui/vue";
import { vElementHover as Ke } from "@vueuse/components";
import De from "md5";
import { v4 as Ee } from "uuid";
function Ue(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ce(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Se(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ne(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ge(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Qe(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function We(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Je(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function se(e, n) {
  return a(), m("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    l("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Xe = { class: "flex" }, Ye = {
  class: /* @__PURE__ */ k(["flex-shrink-0"])
}, et = { class: "ml-3" }, tt = ["innerHTML"], nt = {
  key: 0,
  class: "ml-auto pl-3"
}, st = { class: "-mx-1.5 -my-1.5" }, lt = /* @__PURE__ */ l("span", { class: "sr-only" }, "Dismiss", -1), xn = {
  __name: "Alert",
  props: {
    message: {
      type: String,
      required: !1,
      default: ""
    },
    type: {
      type: String,
      default: () => "default",
      validator: (e) => ["default", "success", "danger", "warning", "info"].includes(e)
    },
    dismissable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const r = e, t = (u) => u === r.type;
    return (u, f) => (a(), m("div", {
      class: k(["rounded-md p-4", { "bg-gray-50": t("default"), "bg-green-50": t("success"), "bg-red-50": t("danger"), "bg-yellow-50": t("warning"), "bg-primary-50": t("info") }])
    }, [
      l("div", Xe, [
        l("div", Ye, [
          t("success") ? (a(), B(s(Ue), {
            key: 0,
            class: k(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : t("warning") ? (a(), B(s(Ge), {
            key: 1,
            class: k(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : t("danger") ? (a(), B(s(Je), {
            key: 2,
            class: k(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (a(), B(s(Qe), {
            key: 3,
            class: k(["h-5 w-5", { "text-gray-400": t("default"), "text-primary-400": t("info") }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]))
        ]),
        l("div", et, [
          p(u.$slots, "default", {}, () => [
            l("p", {
              class: "font-medium text-gray-800",
              innerHTML: e.message
            }, null, 8, tt)
          ])
        ]),
        e.dismissable ? (a(), m("div", nt, [
          l("div", st, [
            l("button", {
              type: "button",
              class: k(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": t("default"), "bg-green-50": t("success"), "bg-red-50": t("danger"), "bg-yellow-50": t("warning"), "bg-primary-50": t("info") }, { "text-gray-400": t("default"), "text-green-400": t("success"), "text-red-400": t("danger"), "text-yellow-400": t("warning"), "text-primary-400": t("info") }]),
              onClick: f[0] || (f[0] = (d) => u.$emit("close"))
            }, [
              lt,
              w(s(se), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : j("", !0)
      ])
    ], 2));
  }
}, qe = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [t, u] of n)
    r[t] = u;
  return r;
}, ot = {}, at = {
  class: "animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, rt = /* @__PURE__ */ l("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), it = /* @__PURE__ */ l("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), ut = [
  rt,
  it
];
function dt(e, n) {
  return a(), m("svg", at, ut);
}
const ct = /* @__PURE__ */ qe(ot, [["render", dt]]), ft = { key: 2 }, wn = {
  __name: "Button",
  props: {
    as: {
      type: [String, Object],
      default: () => "button"
    },
    type: {
      type: String,
      default: void 0
    },
    noFlex: {
      type: Boolean,
      default: !1
    },
    noPadding: {
      type: Boolean,
      default: !1
    },
    noBorder: {
      type: Boolean,
      default: !1
    },
    noShadow: {
      type: Boolean,
      default: !1
    },
    noRound: {
      type: Boolean,
      default: !1
    },
    noRing: {
      type: Boolean,
      default: !1
    },
    theme: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "danger", "cancel"].includes(e)
    },
    iconRight: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingText: {
      type: String,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = e, r = z(["group", "disabled:opacity-80", "disabled:cursor-default"]), t = I(() => n.noFlex ? [] : ["inline-flex", "items-center", "justify-center", "gap-2"]), u = I(() => n.noPadding ? [] : ["py-2", "px-4"]), f = I(() => n.noBorder ? [] : ["border"]), d = I(() => n.noShadow ? [] : ["shadow-sm"]), T = I(() => n.noRound ? [] : ["rounded-md"]), S = I(() => n.noRing ? [] : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), b = I(() => [n.iconRight ? "-mr-1 order-last" : "-ml-1", "h-4 w-4 empty:hidden"]), F = I(() => {
      const x = {
        default: ["enabled:hover:bg-gray-50"],
        primary: [
          "text-white",
          "bg-primary-700",
          "enabled:hover:bg-primary-800",
          "enabled:focus:ring-primary-500"
        ],
        danger: [
          "text-white",
          "bg-red-600",
          "enabled:hover:bg-red-700",
          "enabled:focus:ring-red-500"
        ],
        cancel: [
          "text-gray-700",
          "bg-white",
          "enabled:hover:bg-gray-600 enabled:hover:text-white enabled:hover:border-gray-200",
          "enabled:focus:ring-primary-500"
        ]
      };
      if (n.as !== "button")
        for (const H of Object.keys(x)) {
          const O = x[H];
          for (const E in O)
            O[E] = O[E].replaceAll("enabled:", "");
        }
      return x[n.theme] ?? x.default;
    }), C = I(() => [
      ...i(r),
      ...i(t),
      ...i(u),
      ...i(f),
      ...i(d),
      ...i(T),
      ...i(S),
      ...i(F)
    ]), V = I(() => n.loadingText ?? "Please wait..."), M = I(() => n.as === "button" ? n.type ?? "button" : void 0);
    return (x, H) => (a(), B(ue(e.as), {
      disabled: e.disabled || e.loading,
      type: M.value,
      class: k(C.value)
    }, {
      default: y(() => [
        e.loading ? (a(), B(ct, {
          key: 0,
          class: k(b.value)
        }, null, 8, ["class"])) : (a(), m("span", {
          key: 1,
          class: k(b.value)
        }, [
          p(x.$slots, "icon")
        ], 2)),
        e.loading ? (a(), m("span", ft, R(V.value), 1)) : p(x.$slots, "default", { key: 3 })
      ]),
      _: 3
    }, 8, ["disabled", "type", "class"]));
  }
}, pt = { class: "relative" }, mt = { class: "inline-block w-full rounded-md shadow-sm" }, yt = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-primary-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500 sm:text-sm sm:leading-5" }, gt = { class: "block flex flex-wrap gap-2" }, ht = { class: "flex items-center gap-1 rounded bg-primary-600 text-white px-2 py-0.5" }, bt = ["onClick"], vt = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, xt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, wt = {
  __name: "MultiCombobox",
  props: {
    items: {
      type: Array,
      // Choices of the combobox.
      required: !0
    },
    modelValue: {
      type: Array,
      // Selected choices of the combobox.
      default: () => []
    },
    query: {
      default: ""
    },
    stringify: {
      type: Function,
      // How to render a choice as a string.
      default: void 0
    },
    uniqueKey: {
      type: Function,
      // How to render a choice as a unique ID.
      default: void 0
    },
    filter: {
      type: Function,
      // How to filter choices based on query.
      default: void 0
    },
    inputAttrs: {
      type: Object,
      // Attributes to pass to the <input> tag.
      default: () => ({})
    },
    excludeSelected: {
      type: Boolean,
      // Exclude already selected choices from available items.
      default: !1
    },
    hideTags: {
      type: Boolean,
      // Hide selected choices as "tags".
      default: !1
    },
    clearable: {
      type: Boolean,
      // Display a clear button to remove all selected choices.
      default: !1
    },
    label: {
      type: String,
      // Label to display.
      default: void 0
    },
    disabled: {
      type: Array,
      // Choices that are not selectable.
      default: () => []
    },
    autoHide: {
      type: Boolean,
      // Hide choices after picking one.
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update:query", "clear"],
  setup(e, { emit: n }) {
    const r = n, t = e, u = z(!1), f = () => v(u, !i(u)), { items: d, excludeSelected: T, modelValue: S, query: b } = Q(t), F = t.stringify ?? ((c) => (c == null ? void 0 : c.name) ?? c ?? ""), C = t.uniqueKey ?? ((c) => (c == null ? void 0 : c.id) ?? c), V = de([]), M = z(i(b)), x = z([]), H = I(() => V.filter((c) => i(x).map(C).includes(C(c)))), O = t.filter ?? (async (c, L) => i(L).filter((o) => F(o).toLowerCase().includes(c.toLowerCase()))), E = I(() => i(d).filter((c) => !i(x).map(C).includes(C(c)))), U = z(i(d)), K = ne("input"), g = () => v(u, !0), A = () => v(u, !1), _ = () => i(K).$el.focus();
    function P(c) {
      c.value === "" && i(M) !== "" && (c.value = i(M));
    }
    async function D() {
      v(x, []), v(M, ""), await Y(), _(), r("clear");
    }
    async function W(c) {
      v(x, i(x).filter((L) => C(L) !== C(c))), await Y(), _();
    }
    const G = ne("container");
    return we(G, () => A()), q(d, (c) => {
      c.forEach((L) => {
        V.findIndex((o) => C(o) === C(L)) === -1 && V.push(L);
      });
    }, { immediate: !0 }), q(S, (c) => v(x, c), { immediate: !0 }), q(x, (c) => r("update:modelValue", c)), q(x, () => v(M, "")), q(M, (c) => r("update:query", c)), q(M, async (c) => {
      const L = await O(i(c), i(T) ? i(E) : i(d));
      v(U, i(L) ?? []);
    }), q(b, (c) => v(M, c != null ? `${c}` : "")), X(d, U, { direction: "ltr" }), q(M, (c) => i(K).$el.value = c), q(x, () => t.autoHide && A()), q(M, () => g()), re(() => Y().then(() => i(K).$el.value = i(M))), re(() => t.autofocus && _()), (c, L) => (a(), m("div", {
      ref_key: "container",
      ref: G,
      onKeydown: ve(A, ["esc"]),
      onKeyup: L[4] || (L[4] = ({ code: o }) => ["ArrowUp", "ArrowDown"].includes(o) && g())
    }, [
      w(s(me), {
        as: "div",
        modelValue: x.value,
        "onUpdate:modelValue": L[3] || (L[3] = (o) => x.value = o),
        multiple: ""
      }, {
        default: y(() => [
          p(c.$slots, "label", {}, () => [
            w(s(_e), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: y(() => [
                ce(R(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", pt, [
            l("span", mt, [
              l("div", yt, [
                l("span", gt, [
                  x.value.length === 0 ? (a(), m("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: _
                  }, [
                    p(c.$slots, "empty-state")
                  ])) : j("", !0),
                  e.hideTags ? j("", !0) : (a(!0), m(J, { key: 1 }, te(H.value, (o) => (a(), m("span", {
                    key: s(C)(o)
                  }, [
                    p(c.$slots, "selected-items", Z({ ref_for: !0 }, { item: o, stringify: s(F), remove: W }), () => [
                      l("span", ht, [
                        l("span", null, R(s(F)(o)), 1),
                        l("button", {
                          role: "button",
                          onClick: (h) => W(o)
                        }, [
                          w(s(se), { class: "h-4 w-4" })
                        ], 8, bt)
                      ])
                    ])
                  ]))), 128)),
                  w(s(ye), Z({
                    ref_key: "input",
                    ref: K,
                    autocomplete: "off"
                  }, e.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: g,
                    onBlur: L[0] || (L[0] = (o) => P(o.target)),
                    onChange: L[1] || (L[1] = (o) => M.value = o.target.value)
                  }), null, 16)
                ]),
                l("div", vt, [
                  e.clearable ? (a(), m("button", {
                    key: 0,
                    type: "button",
                    onClick: D
                  }, [
                    x.value.length !== 0 ? (a(), B(s(se), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : j("", !0)
                  ])) : j("", !0),
                  l("button", {
                    type: "button",
                    onClick: f
                  }, [
                    w(s(Se), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            fe(l("div", xt, [
              U.value.length > 0 ? (a(), B(s(ge), {
                key: 0,
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: y(() => [
                  (a(!0), m(J, null, te(U.value, (o) => (a(), B(s(he), {
                    key: s(C)(o),
                    value: s(C)(o),
                    disabled: e.disabled.includes(s(C)(o)),
                    onClick: L[2] || (L[2] = () => e.autoHide && A())
                  }, {
                    default: y(({ active: h, selected: $ }) => [
                      p(c.$slots, "default", Z({ ref_for: !0 }, { item: o, active: h, selected: $, stringify: s(F) }), () => [
                        l("li", {
                          class: k(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", h ? "bg-primary-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: k(["block", { truncate: !h, "font-semibold": $, "font-normal": !$ }])
                          }, R(s(F)(o)), 3),
                          $ ? (a(), m("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": h, "text-primary-600": !h }])
                          }, [
                            w(s(Ce), { class: "h-5 w-5" })
                          ], 2)) : j("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])) : j("", !0)
            ], 512), [
              [xe, u.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 544));
  }
}, _t = { class: "relative" }, $t = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, kt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, Bt = {
  __name: "SingleCombobox",
  props: {
    items: {
      type: Array,
      // Choices of the combobox.
      required: !0
    },
    modelValue: {
      type: [String, Number, Object],
      // Selected choice of the combobox.
      default: null
    },
    query: {
      default: ""
    },
    stringify: {
      type: Function,
      // How to render a choice as a string.
      default: void 0
    },
    uniqueKey: {
      type: Function,
      // How to render a choice as a unique ID.
      default: void 0
    },
    filter: {
      type: Function,
      // How to filter choices based on query.
      default: void 0
    },
    inputAttrs: {
      type: Object,
      // Attributes to pass to the <input> tag.
      default: () => ({})
    },
    excludeSelected: {
      type: Boolean,
      // Exclude already selected choices from available items.
      default: !1
    },
    clearable: {
      type: Boolean,
      // Display a clear button to remove all selected choices.
      default: !1
    },
    label: {
      type: String,
      // Label to display.
      default: void 0
    },
    disabled: {
      type: Array,
      // Choices that are not selectable.
      default: () => []
    },
    autoHide: {
      type: Boolean,
      // Hide choices after picking one.
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update:query", "clear"],
  setup(e, { emit: n }) {
    const r = n, t = e, u = z(!1), f = () => v(u, !i(u)), { items: d, excludeSelected: T, modelValue: S, query: b } = Q(t), F = t.stringify ?? ((o) => (o == null ? void 0 : o.name) ?? o ?? void 0), C = (o) => {
      try {
        const h = F(o);
        if (h == null)
          throw Error("Cannot stringify nullish value");
        return `${h}`;
      } catch (h) {
        return console.debug("Unable to stringify item", o, h), "";
      }
    }, V = t.uniqueKey ?? ((o) => (o == null ? void 0 : o.id) ?? o), M = de([]);
    function x(o) {
      return M.find((h) => V(h) === o) || null;
    }
    const H = z(i(b)), O = z(), E = t.filter ?? (async (o, h) => i(h).filter(($) => C($).toLowerCase().includes(o.toLowerCase()))), U = I(() => i(d).filter((o) => V(o) !== V(i(S)))), K = z(i(d)), g = (o) => o != null ? C(o) : i(H), A = ne("input"), _ = () => v(u, !0), P = () => v(u, !1), D = () => i(A).$el.focus();
    function W(o) {
      o.value === "" && i(H) !== "" && (o.value = i(H));
    }
    async function G() {
      v(O, null), v(H, ""), await Y(), D(), r("clear");
    }
    const c = (o) => i(O) != null && V(o) === V(i(O)), L = ne("container");
    return we(L, () => P()), q(d, (o) => {
      o.forEach((h) => {
        M.findIndex(($) => V($) === V(h)) === -1 && M.push(h);
      });
    }, { immediate: !0 }), q(M, async () => {
      i(O) == null && t.modelValue != null && (v(O, x(V(t.modelValue))), await Y(), P());
    }, { immediate: !0 }), q(S, (o) => v(O, x(o)), { immediate: !0 }), q(O, (o) => {
      V(o) !== V(t.modelValue) && r("update:modelValue", V(o));
    }), q(O, (o) => {
      o == null ? v(H, "") : v(H, C(o));
    }), q(H, (o) => r("update:query", o)), q(H, async (o) => {
      const h = await E(i(o), i(T) ? i(U) : i(d));
      v(K, i(h) ?? []);
    }), q(b, (o) => v(H, o != null ? `${o}` : "")), q(O, () => t.autoHide && P()), q(H, () => _()), X(d, K, { direction: "ltr" }), re(() => t.autofocus && D()), (o, h) => (a(), m("div", {
      ref_key: "container",
      ref: L,
      onKeydown: ve(P, ["esc"]),
      onKeyup: h[4] || (h[4] = ({ code: $ }) => ["ArrowUp", "ArrowDown"].includes($) && _())
    }, [
      w(s(me), {
        as: "div",
        modelValue: O.value,
        "onUpdate:modelValue": h[3] || (h[3] = ($) => O.value = $)
      }, {
        default: y(() => [
          p(o.$slots, "label", {}, () => [
            w(s(_e), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: y(() => [
                ce(R(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", _t, [
            w(s(ye), Z({
              ref_key: "input",
              ref: A,
              "display-value": g,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: _,
              onBlur: h[0] || (h[0] = ($) => W($.target)),
              onChange: h[1] || (h[1] = ($) => H.value = $.target.value)
            }), null, 16),
            l("div", $t, [
              e.clearable ? (a(), m("button", {
                key: 0,
                type: "button",
                onClick: G
              }, [
                s(S) != null ? (a(), B(s(se), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : j("", !0)
              ])) : j("", !0),
              l("button", {
                type: "button",
                onClick: f
              }, [
                w(s(Se), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            fe(l("div", kt, [
              w(s(ge), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: y(() => [
                  (a(!0), m(J, null, te(K.value, ($) => (a(), B(s(he), {
                    key: s(V)($),
                    value: $,
                    disabled: e.disabled.includes(s(V)($)),
                    onClick: h[2] || (h[2] = () => e.autoHide && P())
                  }, {
                    default: y(({ active: oe }) => [
                      p(o.$slots, "default", Z({ ref_for: !0 }, { item: $, active: oe, selected: c($), stringify: C }), () => [
                        l("li", {
                          class: k(["relative cursor-pointer select-none py-2 pl-3 pr-9", oe ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: k(["block", !oe && "truncate", c($) && "font-semibold"])
                          }, R(C($)), 3),
                          c($) ? (a(), m("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", oe ? "text-white" : "text-indigo-600"])
                          }, [
                            w(s(Ce), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : j("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])
            ], 512), [
              [xe, u.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 544));
  }
}, _n = {
  __name: "ComboBox",
  props: {
    items: {
      type: Array,
      required: !0
    },
    modelValue: {
      type: [String, Number, Object, Array],
      default: void 0
    },
    stringify: {
      type: Function,
      default: void 0
    },
    uniqueKey: {
      type: Function,
      default: void 0
    },
    filter: {
      type: Function,
      default: void 0
    },
    inputAttrs: {
      type: Object,
      default: () => ({})
    },
    excludeSelected: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    return (n, r) => Array.isArray(e.modelValue) ? (a(), B(wt, Z({
      key: 0,
      items: e.items,
      "model-value": e.modelValue,
      stringify: e.stringify,
      "unique-key": e.uniqueKey,
      filter: e.filter,
      "input-attrs": e.inputAttrs,
      "exclude-selected": e.excludeSelected,
      clearable: e.clearable,
      label: e.label
    }, n.$attrs), {
      label: y(() => [
        p(n.$slots, "label")
      ]),
      "selected-items": y(({ item: t, stringify: u, remove: f }) => [
        p(n.$slots, "selected-items", N(ee({ item: t, stringify: u, remove: f })))
      ]),
      default: y(({ item: t, active: u, selected: f, stringify: d }) => [
        p(n.$slots, "default", N(ee({ item: t, active: u, selected: f, stringify: d })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (a(), B(Bt, Z({
      key: 1,
      items: e.items,
      "model-value": e.modelValue,
      stringify: e.stringify,
      "unique-key": e.uniqueKey,
      filter: e.filter,
      "input-attrs": e.inputAttrs,
      "exclude-selected": e.excludeSelected,
      clearable: e.clearable,
      label: e.label
    }, n.$attrs), {
      label: y(() => [
        p(n.$slots, "label")
      ]),
      default: y(({ item: t, active: u, selected: f, stringify: d }) => [
        p(n.$slots, "default", N(ee({ item: t, active: u, selected: f, stringify: d })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, Ct = /* @__PURE__ */ l("span", { class: "sr-only" }, "Use setting", -1), St = {
  key: 0,
  class: "h-3 w-3 text-gray-400",
  fill: "none",
  viewBox: "0 0 12 12"
}, qt = /* @__PURE__ */ l("path", {
  d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Mt = [
  qt
], Lt = {
  key: 0,
  class: "h-3 w-3 text-green-600",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, Vt = /* @__PURE__ */ l("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), At = [
  Vt
], $n = {
  __name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const r = e, t = n, { modelValue: u } = Q(r), f = z(s(u));
    function d(b) {
      f.value = b, t("update:modelValue", b), t("change", b);
    }
    q(u, () => f.value = u.value);
    const T = Me(), S = I(() => Object.keys(s(T)).includes("disabled") && s(T).disabled !== !1);
    return (b, F) => (a(), B(s(He), {
      modelValue: f.value,
      "onUpdate:modelValue": [
        F[0] || (F[0] = (C) => f.value = C),
        d
      ],
      class: k([f.value && !S.value ? "bg-green-600" : "bg-gray-200", S.value ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: y(() => [
        Ct,
        l("span", {
          class: k([f.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          l("span", {
            class: k([f.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            S.value ? j("", !0) : (a(), m("svg", St, Mt))
          ], 2),
          l("span", {
            class: k([f.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            S.value ? j("", !0) : (a(), m("svg", Lt, At))
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}, kn = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const n = z(!1);
    function r(t) {
      n.value = t;
    }
    return (t, u) => fe((a(), B(ue(e.as), null, {
      default: y(() => [
        p(t.$slots, "default", { isHovered: n.value })
      ]),
      _: 3
    })), [
      [s(Ke), r]
    ]);
  }
}, It = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Ft = { class: "flex items-center justify-center min-h-full p-4 text-center sm:p-0" }, Tt = {
  __name: "Modal",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    hideCloseIcon: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["submit", "reset", "close"],
  setup(e, { emit: n }) {
    const r = n, t = e, { open: u } = Q(t), f = z(t.open);
    function d() {
      r("close");
    }
    return X(u, f, { direction: "ltr" }), (T, S) => (a(), B(s($e), {
      as: "template",
      show: f.value
    }, {
      default: y(() => [
        w(s(ke), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: y(() => [
            w(s(ae), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: y(() => [
                It
              ]),
              _: 1
            }),
            l("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: S[0] || (S[0] = ie((...b) => T.submit && T.submit(...b), ["prevent"]))
            }, [
              l("div", Ft, [
                w(s(ae), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: y(() => [
                    w(s(Be), {
                      class: k([
                        e.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "max-w-lg w-full"
                      ])
                    }, {
                      default: y(() => [
                        e.hideCloseIcon ? j("", !0) : (a(), m("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: d
                        }, [
                          w(s(se), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        p(T.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                })
              ])
            ], 32)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}, Ot = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, jt = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, Ht = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, Bn = {
  __name: "Prompt",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    resetButtonText: {
      type: String,
      default: "Cancel"
    },
    submitButtonText: {
      type: String,
      default: "Submit"
    },
    onReset: {
      type: Function,
      default: void 0
    },
    onSubmit: {
      type: Function,
      default: void 0
    },
    hideOnSubmit: {
      type: Boolean,
      default: !0
    },
    hideOnReset: {
      type: Boolean,
      default: !0
    },
    noFooter: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["submit", "reset"],
  setup(e, { emit: n }) {
    const r = n, t = e, { open: u } = Q(t), f = z(t.open), d = ne("FormHTMLElement");
    async function T() {
      await (t.onSubmit ?? ((F) => r("submit", { form: i(F), visible: f })))({ form: i(d), visible: f }), t.hideOnSubmit && v(f, !1);
    }
    async function S() {
      await (t.onReset ?? ((F) => r("reset", { form: i(F), visible: f })))({ form: i(d), visible: f }), t.hideOnReset && v(f, !1);
    }
    return X(u, f, { direction: "ltr" }), (b, F) => (a(), B(Tt, { open: f.value }, {
      default: y(() => [
        l("form", {
          ref_key: "FormHTMLElement",
          ref: d,
          onSubmit: ie(T, ["prevent"]),
          onReset: ie(S, ["prevent"])
        }, [
          l("div", null, [
            p(b.$slots, "default", { form: s(d) })
          ]),
          p(b.$slots, "footer", {}, () => [
            l("footer", Ot, [
              p(b.$slots, "buttons", {}, () => [
                l("button", jt, R(e.submitButtonText), 1),
                l("button", Ht, R(e.resetButtonText), 1)
              ])
            ])
          ])
        ], 544)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, zt = {}, Rt = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Pt(e, n) {
  return a(), m("div", Rt, [
    p(e.$slots, "default")
  ]);
}
const Cn = /* @__PURE__ */ qe(zt, [["render", Pt]]), Sn = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (n, r) => (a(), B(s(ze), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: y(() => [
        p(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Zt = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Kt = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Dt = { class: "relative" }, Et = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, Ut = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Nt = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, Gt = { class: "mt-2 text-sm text-gray-800" }, Qt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Wt = /* @__PURE__ */ l("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), Jt = /* @__PURE__ */ l("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), qn = {
  __name: "CommandPalette",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    query: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    groupGetter: {
      type: Function,
      default: void 0
    },
    stringify: {
      type: Function,
      default: void 0
    },
    filter: {
      type: Function,
      default: void 0
    },
    prompt: {
      type: Boolean,
      default: !1
    },
    enableLoader: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Search..."
    },
    delayBetweenRequests: {
      type: Number,
      default: 0
    }
  },
  emits: ["close", "update:open", "update:query", "pick"],
  setup(e, { emit: n }) {
    const r = n, t = e, { open: u, query: f } = Q(t), d = z(i(f)), T = Ie(d, t.delayBetweenRequests), S = z(!0), b = z(!1);
    X(u, S, { direction: "ltr" }), X(f, d, { direction: "ltr" });
    const F = async (g, A, _) => g === "" && t.prompt ? [] : A.filter((P) => _(P).toLowerCase().includes(g.toLowerCase())), C = t.filter ?? F, V = async function(g, A, _) {
      v(b, !0);
      try {
        return await C(g, A, _);
      } finally {
        v(b, !1);
      }
    }, M = Fe(() => V(i(T), t.items, x), t.items), x = t.stringify ?? ((g) => g == null ? void 0 : g.name), H = t.groupGetter ?? (() => {
    }), O = I(
      () => M.value.reduce((g, A) => {
        let _ = H(A);
        return { ...g, [_]: [...g[_] || [], A] };
      }, {})
    );
    function E(g) {
      v(d, g);
    }
    q(T, (g) => r("update:query", g));
    function U(g) {
      r("pick", g), K();
    }
    function K() {
      r("close"), r("update:open", !1), v(S, !1);
    }
    return (g, A) => (a(), B(s($e), {
      show: S.value,
      as: "template",
      onAfterLeave: A[2] || (A[2] = (_) => d.value = ""),
      appear: ""
    }, {
      default: y(() => [
        w(s(ke), {
          as: "div",
          class: "relative z-10",
          onClose: A[1] || (A[1] = (_) => K())
        }, {
          default: y(() => [
            w(s(ae), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: y(() => [
                Zt
              ]),
              _: 1
            }),
            l("div", Kt, [
              w(s(ae), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: y(() => [
                  w(s(Be), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: y(() => [
                      w(s(me), { "onUpdate:modelValue": U }, {
                        default: y(() => [
                          l("div", Dt, [
                            p(g.$slots, "search-icon", {}, () => [
                              w(s(We), { class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" })
                            ]),
                            p(g.$slots, "input", N(ee({ query: d.value })), () => [
                              w(s(ye), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                style: { "box-shadow": "none" },
                                placeholder: e.placeholder,
                                onChange: A[0] || (A[0] = (_) => E(_.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && b.value ? p(g.$slots, "loader", N(Z({ key: 0 }, { query: d.value, isLoading: b.value })), () => [
                            l("div", Et, [
                              p(g.$slots, "loader-inner", {}, () => [
                                ce("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && d.value === "" ? p(g.$slots, "prompt", N(Z({ key: 1 }, { query: d.value, isLoading: b.value })), () => [
                            l("div", Ut, [
                              p(g.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || s(M).length > 0 ? (a(), B(s(ge), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: y(() => [
                              (a(!0), m(J, null, te(Object.entries(O.value), ([_, P]) => (a(), m("li", { key: _ }, [
                                p(g.$slots, "group", Z({ ref_for: !0 }, { group: _, items: P, query: d.value }), () => [
                                  _ !== "undefined" ? (a(), m("h2", Nt, R(_), 1)) : j("", !0)
                                ]),
                                l("ul", Gt, [
                                  (a(!0), m(J, null, te(P, (D, W) => (a(), B(s(he), {
                                    key: D.id,
                                    value: D,
                                    as: "template"
                                  }, {
                                    default: y(({ active: G }) => [
                                      p(g.$slots, "default", Z({ ref_for: !0 }, { group: _, item: D, items: P, index: W, active: G, stringify: s(x), query: d.value }), () => [
                                        l("li", {
                                          class: k(["cursor-pointer select-none px-4 py-2", G && "bg-indigo-600 text-white"])
                                        }, R(s(x)(D)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : d.value !== "" && s(M).length === 0 ? p(g.$slots, "empty-state", N(Z({ key: 3 }, { query: d.value, isLoading: b.value })), () => [
                            l("div", Qt, [
                              p(g.$slots, "empty-state-inner", {}, () => [
                                Wt,
                                Jt
                              ])
                            ])
                          ]) : j("", !0)
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}, Xt = { class: "sr-only" }, Mn = {
  __name: "ContextualMenu",
  props: {
    iconClasses: {
      type: [String, Array],
      default: void 0
    },
    srOnly: {
      type: String,
      default: "Open"
    },
    fromBottom: {
      type: Boolean,
      default: !1
    },
    fromLeft: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const n = e, r = I(() => {
      const t = ["size-7"];
      return n.disabled && t.push("opacity-60", "cursor-not-allowed"), n.iconClasses ?? t;
    });
    return (t, u) => (a(), B(s(Re), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: y(() => [
        w(s(Pe), {
          disabled: e.disabled,
          class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        }, {
          default: y(() => [
            l("span", Xt, R(e.srOnly), 1),
            p(t.$slots, "icon", N(ee({ iconClasses: r.value })), () => [
              w(s(Ne), {
                class: k(r.value)
              }, null, 8, ["class"])
            ])
          ]),
          _: 3
        }, 8, ["disabled"]),
        w(Le, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: y(() => [
            e.disabled ? j("", !0) : (a(), B(s(Ze), {
              key: 0,
              class: k([
                e.fromBottom ? "bottom-0" : "top-0",
                e.fromLeft ? "left-7" : "right-7",
                "mx-3 origin-top-right absolute min-w-48 w-auto mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
              ])
            }, {
              default: y(() => [
                p(t.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}, Ln = {
  __name: "Blink",
  props: {
    condition: {
      type: Boolean,
      default: !0
    },
    interval: {
      type: Number,
      default: 1e3
    }
  },
  setup(e) {
    const n = e, r = I(() => n.condition === !0), t = I(() => n.condition === !1), u = z(!1), f = () => u.value = !u.value, d = z(), T = () => {
      clearInterval(i(d)), i(r) && v(d, setInterval(f, n.interval));
    }, S = () => {
      clearInterval(i(d)), v(u, !1);
    };
    return be(r, T, { immediate: !0 }), be(t, S, { immediate: !0 }), (b, F) => (a(), m("span", {
      class: k([u.value ? "invisible" : "visible"])
    }, [
      p(b.$slots, "default")
    ], 2));
  }
}, Yt = (e) => {
  let n = 0;
  for (let t = 0; t < e.length; t++)
    n = e.charCodeAt(t) + ((n << 5) - n);
  let r = "#";
  for (let t = 0; t < 3; t++) {
    let u = n >> t * 8 & 255;
    r += ("00" + u.toString(16)).substr(-2);
  }
  return r;
}, en = { class: "text-xs font-medium leading-none text-white" }, Vn = {
  __name: "GeneratedAvatar",
  props: {
    id: {
      type: String,
      required: !0
    },
    text: {
      type: String
    }
  },
  setup(e) {
    const n = e, { id: r } = Q(n), t = I(() => Yt(De(r.value.toLowerCase())));
    return (u, f) => (a(), m("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Ve({ backgroundColor: t.value })
    }, [
      l("span", en, R(e.text), 1)
    ], 4));
  }
}, tn = { class: "absolute inset-0 overflow-auto" }, An = {
  __name: "Scrollable",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    return (n, r) => (a(), B(ue(e.as), { class: "relative" }, {
      default: y(() => [
        l("div", tn, [
          p(n.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}, In = {
  __name: "TeleportIf",
  props: {
    condition: {
      type: Boolean,
      required: !0
    },
    to: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (n, r) => e.condition ? (a(), B(Ae, Z({
      key: 0,
      to: e.to
    }, n.$attrs), [
      p(n.$slots, "default")
    ], 16, ["to"])) : p(n.$slots, "default", { key: 1 });
  }
}, Fn = {
  __name: "UniqueId",
  setup(e) {
    const n = Ee();
    return (r, t) => p(r.$slots, "default", { id: s(n) });
  }
}, Tn = {
  __name: "WhenMounted",
  setup(e) {
    const n = Te();
    return (r, t) => s(n) ? p(r.$slots, "default", { key: 0 }) : j("", !0);
  }
}, le = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, On = (e) => {
  const n = le[e] || 0;
  return pe(`(min-width: ${n}px)`);
}, jn = (e) => {
  const n = le[e] || le.sm;
  return pe(`(max-width: ${n - 1}px)`);
}, nn = () => {
  const e = de({});
  for (const n in le) {
    const r = le[n];
    e[n] = pe(`(min-width: ${r}px)`);
  }
  return I(() => {
    const n = Object.entries(e).filter(([r, t]) => t);
    return Object.keys(Object.fromEntries(n))[n.length - 1];
  });
}, sn = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, ln = { class: "mx-auto text-5xl uppercase" }, Hn = {
  __name: "DebugBreakpoint",
  setup(e) {
    const n = Oe(!1, 200), r = nn();
    return q(r, () => v(n, !0)), (t, u) => s(n) ? (a(), m("div", sn, [
      l("div", ln, R(s(r)), 1)
    ])) : j("", !0);
  }
}, on = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, an = /* @__PURE__ */ l("div", null, "Used", -1), rn = { class: "text-right" }, un = /* @__PURE__ */ l("div", null, "Allocated", -1), dn = { class: "text-right" }, cn = /* @__PURE__ */ l("div", null, "Limit", -1), fn = { class: "text-right" }, pn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, zn = {
  __name: "DebugMemory",
  setup(e) {
    const n = (u) => `${(u / 1024 / 1024).toFixed(2)} MB`, { isSupported: r, memory: t } = je();
    return (u, f) => s(r) && s(t) ? (a(), m("div", on, [
      s(t) ? (a(), m(J, { key: 0 }, [
        an,
        l("div", rn, R(n(s(t).usedJSHeapSize)), 1),
        un,
        l("div", dn, R(n(s(t).totalJSHeapSize)), 1),
        cn,
        l("div", fn, R(n(s(t).jsHeapSizeLimit)), 1)
      ], 64)) : j("", !0)
    ])) : (a(), m("div", pn, " Performance memory API not supported "));
  }
};
export {
  xn as Alert,
  Ln as Blink,
  wn as Button,
  _n as ComboBox,
  qn as CommandPalette,
  Mn as ContextualMenu,
  Hn as DebugBreakpoint,
  zn as DebugMemory,
  Vn as GeneratedAvatar,
  kn as HoverableElement,
  Tt as Modal,
  Bn as Prompt,
  Cn as PromptIcon,
  Sn as PromptTitle,
  An as Scrollable,
  ct as SpinnerIcon,
  In as TeleportIf,
  $n as Toggle,
  Fn as UniqueId,
  Tn as WhenMounted,
  jn as isMaxBreakpoint,
  On as isMinBreakpoint,
  Yt as stringToColor,
  nn as useCurrentBreakpoint
};
