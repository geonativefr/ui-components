import { openBlock as a, createElementBlock as y, createElementVNode as l, normalizeClass as k, createBlock as C, unref as n, renderSlot as p, createVNode as v, createCommentVNode as O, ref as H, computed as T, resolveDynamicComponent as ie, withCtx as m, toDisplayString as z, toRefs as W, reactive as ue, watch as q, onMounted as ae, nextTick as ee, resolveComponent as qe, withKeys as be, createTextVNode as de, Fragment as X, renderList as te, normalizeProps as P, guardReactiveProps as D, mergeProps as G, withDirectives as ce, vShow as ve, useAttrs as Me, withModifiers as re, Transition as Le, normalizeStyle as Ve, Teleport as Ae } from "vue";
import { get as i, templateRef as ne, onClickOutside as xe, set as h, syncRef as Y, refThrottled as Ie, asyncComputed as Fe, whenever as he, useMounted as Te, useMediaQuery as fe, refAutoReset as Oe, useMemory as je } from "@vueuse/core";
import { Combobox as pe, ComboboxLabel as we, ComboboxInput as ye, ComboboxOptions as me, ComboboxOption as ge, Switch as He, TransitionRoot as _e, Dialog as $e, TransitionChild as oe, DialogPanel as ke, DialogTitle as ze, Menu as Re, MenuButton as Pe, MenuItems as Ze } from "@headlessui/vue";
import { vElementHover as Ke } from "@vueuse/components";
import De from "md5";
import { v4 as Ee } from "uuid";
function Ue(e, t) {
  return a(), y("svg", {
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
function Ce(e, t) {
  return a(), y("svg", {
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
function Be(e, t) {
  return a(), y("svg", {
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
function Ne(e, t) {
  return a(), y("svg", {
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
function Ge(e, t) {
  return a(), y("svg", {
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
function Qe(e, t) {
  return a(), y("svg", {
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
function We(e, t) {
  return a(), y("svg", {
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
function Je(e, t) {
  return a(), y("svg", {
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
function le(e, t) {
  return a(), y("svg", {
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
}, st = { class: "-mx-1.5 -my-1.5" }, ot = /* @__PURE__ */ l("span", { class: "sr-only" }, "Dismiss", -1), $n = {
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
  setup(e, { emit: t }) {
    const o = e, s = (r) => r === o.type;
    return (r, d) => (a(), y("div", {
      class: k(["rounded-md p-4", { "bg-gray-50": s("default"), "bg-green-50": s("success"), "bg-red-50": s("danger"), "bg-yellow-50": s("warning"), "bg-primary-50": s("info") }])
    }, [
      l("div", Xe, [
        l("div", Ye, [
          s("success") ? (a(), C(n(Ue), {
            key: 0,
            class: k(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : s("warning") ? (a(), C(n(Ge), {
            key: 1,
            class: k(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : s("danger") ? (a(), C(n(Je), {
            key: 2,
            class: k(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (a(), C(n(Qe), {
            key: 3,
            class: k(["h-5 w-5", { "text-gray-400": s("default"), "text-primary-400": s("info") }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]))
        ]),
        l("div", et, [
          p(r.$slots, "default", {}, () => [
            l("p", {
              class: "font-medium text-gray-800",
              innerHTML: e.message
            }, null, 8, tt)
          ])
        ]),
        e.dismissable ? (a(), y("div", nt, [
          l("div", st, [
            l("button", {
              type: "button",
              class: k(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": s("default"), "bg-green-50": s("success"), "bg-red-50": s("danger"), "bg-yellow-50": s("warning"), "bg-primary-50": s("info") }, { "text-gray-400": s("default"), "text-green-400": s("success"), "text-red-400": s("danger"), "text-yellow-400": s("warning"), "text-primary-400": s("info") }]),
              onClick: d[0] || (d[0] = (w) => r.$emit("close"))
            }, [
              ot,
              v(n(le), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : O("", !0)
      ])
    ], 2));
  }
}, Se = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, lt = {}, at = {
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
function dt(e, t) {
  return a(), y("svg", at, ut);
}
const ct = /* @__PURE__ */ Se(lt, [["render", dt]]), ft = { key: 2 }, kn = {
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
    const t = e, o = H(["group", "disabled:opacity-80", "disabled:cursor-default"]), s = T(() => t.noFlex ? [] : ["inline-flex", "items-center", "justify-center", "gap-2"]), r = T(() => t.noPadding ? [] : ["py-2", "px-4"]), d = T(() => t.noBorder ? [] : ["border"]), w = T(() => t.noShadow ? [] : ["shadow-sm"]), B = T(() => t.noRound ? [] : ["rounded-md"]), b = T(() => t.noRing ? [] : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), M = T(() => [t.iconRight ? "-mr-1 order-last" : "-ml-1", "h-4 w-4 empty:hidden"]), _ = T(() => {
      const S = {
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
      if (t.as !== "button")
        for (const j of Object.keys(S)) {
          const E = S[j];
          for (const Z in E)
            E[Z] = E[Z].replaceAll("enabled:", "");
        }
      return S[t.theme] ?? S.default;
    }), I = T(() => [
      ...i(o),
      ...i(s),
      ...i(r),
      ...i(d),
      ...i(w),
      ...i(B),
      ...i(b),
      ...i(_)
    ]), L = T(() => t.loadingText ?? "Please wait..."), V = T(() => t.as === "button" ? t.type ?? "button" : void 0);
    return (S, j) => (a(), C(ie(e.as), {
      disabled: e.disabled || e.loading,
      type: n(V),
      class: k(n(I))
    }, {
      default: m(() => [
        e.loading ? (a(), C(ct, {
          key: 0,
          class: k(n(M))
        }, null, 8, ["class"])) : (a(), y("span", {
          key: 1,
          class: k(n(M))
        }, [
          p(S.$slots, "icon")
        ], 2)),
        e.loading ? (a(), y("span", ft, z(n(L)), 1)) : p(S.$slots, "default", { key: 3 })
      ]),
      _: 3
    }, 8, ["disabled", "type", "class"]));
  }
}, pt = ["onKeydown"], yt = { class: "relative" }, mt = { class: "inline-block w-full rounded-md shadow-sm" }, gt = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-primary-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500 sm:text-sm sm:leading-5" }, ht = { class: "block flex flex-wrap gap-2" }, bt = { class: "flex items-center gap-1 rounded bg-primary-600 text-white px-2 py-0.5" }, vt = ["onClick"], xt = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, wt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, _t = {
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
  setup(e, { emit: t }) {
    const o = e, s = H(!1), r = () => h(s, !i(s)), { items: d, excludeSelected: w, modelValue: B, query: b } = W(o), M = o.stringify ?? ((c) => (c == null ? void 0 : c.name) ?? c ?? ""), _ = o.uniqueKey ?? ((c) => (c == null ? void 0 : c.id) ?? c), I = ue([]), L = H(i(b)), V = H([]), S = T(() => I.filter((c) => i(V).map(_).includes(_(c)))), j = o.filter ?? (async (c, A) => i(A).filter((u) => M(u).toLowerCase().includes(c.toLowerCase()))), E = T(() => i(d).filter((c) => !i(V).map(_).includes(_(c)))), Z = H(i(d)), K = ne("input"), g = () => h(s, !0), F = () => h(s, !1), $ = () => i(K).$el.focus();
    function R(c) {
      c.value === "" && i(L) !== "" && (c.value = i(L));
    }
    async function U() {
      h(V, []), h(L, ""), await ee(), $(), t("clear");
    }
    async function J(c) {
      h(V, i(V).filter((A) => _(A) !== _(c))), await ee(), $();
    }
    const Q = ne("container");
    return xe(Q, () => F()), q(d, (c) => {
      c.forEach((A) => {
        I.findIndex((u) => _(u) === _(A)) === -1 && I.push(A);
      });
    }, { immediate: !0 }), q(B, (c) => h(V, c), { immediate: !0 }), q(V, (c) => t("update:modelValue", c)), q(V, () => h(L, "")), q(L, (c) => t("update:query", c)), q(L, async (c) => {
      const A = await j(i(c), i(w) ? i(E) : i(d));
      h(Z, i(A) ?? []);
    }), q(b, (c) => h(L, c != null ? `${c}` : "")), Y(d, Z, { direction: "ltr" }), q(L, (c) => i(K).$el.value = c), q(V, () => o.autoHide && F()), q(L, () => g()), ae(() => ee().then(() => i(K).$el.value = i(L))), ae(() => o.autofocus && $()), (c, A) => {
      const u = qe("XIcon");
      return a(), y("div", {
        ref_key: "container",
        ref: Q,
        onKeydown: be(F, ["esc"]),
        onKeyup: A[4] || (A[4] = ({ code: f }) => ["ArrowUp", "ArrowDown"].includes(f) && g())
      }, [
        v(n(pe), {
          as: "div",
          modelValue: V.value,
          "onUpdate:modelValue": A[3] || (A[3] = (f) => V.value = f),
          multiple: ""
        }, {
          default: m(() => [
            p(c.$slots, "label", {}, () => [
              v(n(we), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
                default: m(() => [
                  de(z(e.label), 1)
                ]),
                _: 1
              })
            ]),
            l("div", yt, [
              l("span", mt, [
                l("div", gt, [
                  l("span", ht, [
                    V.value.length === 0 ? (a(), y("span", {
                      key: 0,
                      class: "p-0.5 cursor-pointer empty:hidden",
                      onClick: $
                    }, [
                      p(c.$slots, "empty-state")
                    ])) : O("", !0),
                    e.hideTags ? O("", !0) : (a(!0), y(X, { key: 1 }, te(n(S), (f) => (a(), y("span", {
                      key: n(_)(f)
                    }, [
                      p(c.$slots, "selected-items", P(D({ item: f, stringify: n(M), remove: J })), () => [
                        l("span", bt, [
                          l("span", null, z(n(M)(f)), 1),
                          l("button", {
                            role: "button",
                            onClick: (x) => J(f)
                          }, [
                            v(u, { class: "h-4 w-4" })
                          ], 8, vt)
                        ])
                      ])
                    ]))), 128)),
                    v(n(ye), G({
                      ref_key: "input",
                      ref: K,
                      autocomplete: "off"
                    }, e.inputAttrs, {
                      class: "reset border-none p-0 focus:ring-0 grow",
                      onFocus: g,
                      onBlur: A[0] || (A[0] = (f) => R(f.target)),
                      onChange: A[1] || (A[1] = (f) => L.value = f.target.value)
                    }), null, 16)
                  ]),
                  l("div", xt, [
                    e.clearable ? (a(), y("button", {
                      key: 0,
                      type: "button",
                      onClick: U
                    }, [
                      V.value.length !== 0 ? (a(), C(n(le), {
                        key: 0,
                        class: "h-5 w-5 text-gray-300",
                        "aria-hidden": "true"
                      })) : O("", !0)
                    ])) : O("", !0),
                    l("button", {
                      type: "button",
                      onClick: r
                    }, [
                      v(n(Be), {
                        class: "h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                      })
                    ])
                  ])
                ])
              ]),
              ce(l("div", wt, [
                Z.value.length > 0 ? (a(), C(n(me), {
                  key: 0,
                  static: !e.autoHide,
                  class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
                }, {
                  default: m(() => [
                    (a(!0), y(X, null, te(Z.value, (f) => (a(), C(n(ge), {
                      key: n(_)(f),
                      value: n(_)(f),
                      disabled: e.disabled.includes(n(_)(f)),
                      onClick: A[2] || (A[2] = () => e.autoHide && F())
                    }, {
                      default: m(({ active: x, selected: N }) => [
                        p(c.$slots, "default", P(D({ item: f, active: x, selected: N, stringify: n(M) })), () => [
                          l("li", {
                            class: k(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", x ? "bg-primary-600 text-white" : "text-gray-900"])
                          }, [
                            l("span", {
                              class: k(["block", { truncate: !x, "font-semibold": N, "font-normal": !N }])
                            }, z(n(M)(f)), 3),
                            N ? (a(), y("span", {
                              key: 0,
                              class: k(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": x, "text-primary-600": !x }])
                            }, [
                              v(n(Ce), { class: "h-5 w-5" })
                            ], 2)) : O("", !0)
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]))), 128))
                  ]),
                  _: 3
                }, 8, ["static"])) : O("", !0)
              ], 512), [
                [ve, s.value]
              ])
            ])
          ]),
          _: 3
        }, 8, ["modelValue"])
      ], 40, pt);
    };
  }
}, $t = ["onKeydown"], kt = { class: "relative" }, Ct = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, Bt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, St = {
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
  setup(e, { emit: t }) {
    const o = e, s = H(!1), r = () => h(s, !i(s)), { items: d, excludeSelected: w, modelValue: B, query: b } = W(o), M = o.stringify ?? ((u) => (u == null ? void 0 : u.name) ?? u ?? void 0), _ = (u) => {
      try {
        const f = M(u);
        if (f == null)
          throw Error("Cannot stringify nullish value");
        return `${f}`;
      } catch (f) {
        return console.debug("Unable to stringify item", u, f), "";
      }
    }, I = o.uniqueKey ?? ((u) => (u == null ? void 0 : u.id) ?? u), L = ue([]);
    function V(u) {
      return L.find((f) => I(f) === u) || null;
    }
    const S = H(i(b)), j = H(), E = o.filter ?? (async (u, f) => i(f).filter((x) => _(x).toLowerCase().includes(u.toLowerCase()))), Z = T(() => i(d).filter((u) => I(u) !== I(i(B)))), K = H(i(d)), g = (u) => u != null ? _(u) : i(S), F = ne("input"), $ = () => h(s, !0), R = () => h(s, !1), U = () => i(F).$el.focus();
    function J(u) {
      u.value === "" && i(S) !== "" && (u.value = i(S));
    }
    async function Q() {
      h(j, null), h(S, ""), await ee(), U(), t("clear");
    }
    const c = (u) => i(j) != null && I(u) === I(i(j)), A = ne("container");
    return xe(A, () => R()), q(d, (u) => {
      u.forEach((f) => {
        L.findIndex((x) => I(x) === I(f)) === -1 && L.push(f);
      });
    }, { immediate: !0 }), q(L, async () => {
      i(j) == null && o.modelValue != null && (h(j, V(I(o.modelValue))), await ee(), R());
    }, { immediate: !0 }), q(B, (u) => h(j, V(u)), { immediate: !0 }), q(j, (u) => {
      I(u) !== I(o.modelValue) && t("update:modelValue", I(u));
    }), q(j, (u) => {
      u == null ? h(S, "") : h(S, _(u));
    }), q(S, (u) => t("update:query", u)), q(S, async (u) => {
      const f = await E(i(u), i(w) ? i(Z) : i(d));
      h(K, i(f) ?? []);
    }), q(b, (u) => h(S, u != null ? `${u}` : "")), q(j, () => o.autoHide && R()), q(S, () => $()), Y(d, K, { direction: "ltr" }), ae(() => o.autofocus && U()), (u, f) => (a(), y("div", {
      ref_key: "container",
      ref: A,
      onKeydown: be(R, ["esc"]),
      onKeyup: f[4] || (f[4] = ({ code: x }) => ["ArrowUp", "ArrowDown"].includes(x) && $())
    }, [
      v(n(pe), {
        as: "div",
        modelValue: j.value,
        "onUpdate:modelValue": f[3] || (f[3] = (x) => j.value = x)
      }, {
        default: m(() => [
          p(u.$slots, "label", {}, () => [
            v(n(we), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: m(() => [
                de(z(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", kt, [
            v(n(ye), G({
              ref_key: "input",
              ref: F,
              "display-value": g,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: $,
              onBlur: f[0] || (f[0] = (x) => J(x.target)),
              onChange: f[1] || (f[1] = (x) => S.value = x.target.value)
            }), null, 16),
            l("div", Ct, [
              e.clearable ? (a(), y("button", {
                key: 0,
                type: "button",
                onClick: Q
              }, [
                n(B) != null ? (a(), C(n(le), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : O("", !0)
              ])) : O("", !0),
              l("button", {
                type: "button",
                onClick: r
              }, [
                v(n(Be), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ce(l("div", Bt, [
              v(n(me), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: m(() => [
                  (a(!0), y(X, null, te(K.value, (x) => (a(), C(n(ge), {
                    key: n(I)(x),
                    value: x,
                    disabled: e.disabled.includes(n(I)(x)),
                    onClick: f[2] || (f[2] = () => e.autoHide && R())
                  }, {
                    default: m(({ active: N }) => [
                      p(u.$slots, "default", P(D({ item: x, active: N, selected: c(x), stringify: _ })), () => [
                        l("li", {
                          class: k(["relative cursor-pointer select-none py-2 pl-3 pr-9", N ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: k(["block", !N && "truncate", c(x) && "font-semibold"])
                          }, z(_(x)), 3),
                          c(x) ? (a(), y("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", N ? "text-white" : "text-indigo-600"])
                          }, [
                            v(n(Ce), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : O("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])
            ], 512), [
              [ve, s.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, $t));
  }
}, Cn = {
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
    return (t, o) => Array.isArray(e.modelValue) ? (a(), C(_t, G({
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
    }, t.$attrs), {
      label: m(() => [
        p(t.$slots, "label")
      ]),
      "selected-items": m(({ item: s, stringify: r, remove: d }) => [
        p(t.$slots, "selected-items", P(D({ item: s, stringify: r, remove: d })))
      ]),
      default: m(({ item: s, active: r, selected: d, stringify: w }) => [
        p(t.$slots, "default", P(D({ item: s, active: r, selected: d, stringify: w })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (a(), C(St, G({
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
    }, t.$attrs), {
      label: m(() => [
        p(t.$slots, "label")
      ]),
      default: m(({ item: s, active: r, selected: d, stringify: w }) => [
        p(t.$slots, "default", P(D({ item: s, active: r, selected: d, stringify: w })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, qt = /* @__PURE__ */ l("span", { class: "sr-only" }, "Use setting", -1), Mt = {
  key: 0,
  class: "h-3 w-3 text-gray-400",
  fill: "none",
  viewBox: "0 0 12 12"
}, Lt = /* @__PURE__ */ l("path", {
  d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Vt = [
  Lt
], At = {
  key: 0,
  class: "h-3 w-3 text-green-600",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, It = /* @__PURE__ */ l("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), Ft = [
  It
], Bn = {
  __name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const o = e, { modelValue: s } = W(o), r = H(n(s));
    function d(b) {
      r.value = b, t("update:modelValue", b), t("change", b);
    }
    q(s, () => r.value = s.value);
    const w = Me(), B = T(() => Object.keys(n(w)).includes("disabled") && n(w).disabled !== !1);
    return (b, M) => (a(), C(n(He), {
      modelValue: r.value,
      "onUpdate:modelValue": [
        M[0] || (M[0] = (_) => r.value = _),
        d
      ],
      class: k([r.value && !n(B) ? "bg-green-600" : "bg-gray-200", n(B) ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: m(() => [
        qt,
        l("span", {
          class: k([r.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          l("span", {
            class: k([r.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            n(B) ? O("", !0) : (a(), y("svg", Mt, Vt))
          ], 2),
          l("span", {
            class: k([r.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            n(B) ? O("", !0) : (a(), y("svg", At, Ft))
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}, Sn = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const t = H(!1);
    function o(s) {
      t.value = s;
    }
    return (s, r) => ce((a(), C(ie(e.as), null, {
      default: m(() => [
        p(s.$slots, "default", { isHovered: t.value })
      ]),
      _: 3
    })), [
      [n(Ke), o]
    ]);
  }
}, Tt = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Ot = { class: "flex items-center justify-center min-h-full p-4 text-center sm:p-0" }, jt = {
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
  setup(e, { emit: t }) {
    const o = e, { open: s } = W(o), r = H(o.open);
    function d() {
      t("close");
    }
    return Y(s, r, { direction: "ltr" }), (w, B) => (a(), C(n(_e), {
      as: "template",
      show: r.value
    }, {
      default: m(() => [
        v(n($e), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: m(() => [
            v(n(oe), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: m(() => [
                Tt
              ]),
              _: 1
            }),
            l("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: B[0] || (B[0] = re((...b) => w.submit && w.submit(...b), ["prevent"]))
            }, [
              l("div", Ot, [
                v(n(oe), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: m(() => [
                    v(n(ke), {
                      class: k([
                        e.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "max-w-lg w-full"
                      ])
                    }, {
                      default: m(() => [
                        e.hideCloseIcon ? O("", !0) : (a(), y("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: d
                        }, [
                          v(n(le), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        p(w.$slots, "default")
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
}, Ht = ["onSubmit", "onReset"], zt = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, Rt = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, Pt = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, qn = {
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
  setup(e, { emit: t }) {
    const o = e, { open: s } = W(o), r = H(o.open), d = ne("FormHTMLElement");
    async function w() {
      await (o.onSubmit ?? ((M) => t("submit", { form: i(M), visible: r })))({ form: i(d), visible: r }), o.hideOnSubmit && h(r, !1);
    }
    async function B() {
      await (o.onReset ?? ((M) => t("reset", { form: i(M), visible: r })))({ form: i(d), visible: r }), o.hideOnReset && h(r, !1);
    }
    return Y(s, r, { direction: "ltr" }), (b, M) => (a(), C(jt, { open: r.value }, {
      default: m(() => [
        l("form", {
          ref_key: "FormHTMLElement",
          ref: d,
          onSubmit: re(w, ["prevent"]),
          onReset: re(B, ["prevent"])
        }, [
          l("div", null, [
            p(b.$slots, "default", { form: n(d) })
          ]),
          p(b.$slots, "footer", {}, () => [
            l("footer", zt, [
              p(b.$slots, "buttons", {}, () => [
                l("button", Rt, z(e.submitButtonText), 1),
                l("button", Pt, z(e.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, Ht)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, Zt = {}, Kt = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Dt(e, t) {
  return a(), y("div", Kt, [
    p(e.$slots, "default")
  ]);
}
const Mn = /* @__PURE__ */ Se(Zt, [["render", Dt]]), Ln = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (t, o) => (a(), C(n(ze), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: m(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Et = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Ut = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Nt = { class: "relative" }, Gt = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, Qt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Wt = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, Jt = { class: "mt-2 text-sm text-gray-800" }, Xt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Yt = /* @__PURE__ */ l("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), en = /* @__PURE__ */ l("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), Vn = {
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
  setup(e, { emit: t }) {
    const o = e, { open: s, query: r } = W(o), d = H(i(r)), w = Ie(d, o.delayBetweenRequests), B = H(!0), b = H(!1);
    Y(s, B, { direction: "ltr" }), Y(r, d, { direction: "ltr" });
    const M = async (g, F, $) => g === "" && o.prompt ? [] : F.filter((R) => $(R).toLowerCase().includes(g.toLowerCase())), _ = o.filter ?? M, I = async function(g, F, $) {
      h(b, !0);
      try {
        return await _(g, F, $);
      } finally {
        h(b, !1);
      }
    }, L = Fe(() => I(i(w), o.items, V), o.items), V = o.stringify ?? ((g) => g == null ? void 0 : g.name), S = o.groupGetter ?? (() => {
    }), j = T(
      () => L.value.reduce((g, F) => {
        let $ = S(F);
        return { ...g, [$]: [...g[$] || [], F] };
      }, {})
    );
    function E(g) {
      h(d, g);
    }
    q(w, (g) => t("update:query", g));
    function Z(g) {
      t("pick", g), K();
    }
    function K() {
      t("close"), t("update:open", !1), h(B, !1);
    }
    return (g, F) => (a(), C(n(_e), {
      show: B.value,
      as: "template",
      onAfterLeave: F[2] || (F[2] = ($) => d.value = ""),
      appear: ""
    }, {
      default: m(() => [
        v(n($e), {
          as: "div",
          class: "relative z-10",
          onClose: F[1] || (F[1] = ($) => K())
        }, {
          default: m(() => [
            v(n(oe), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: m(() => [
                Et
              ]),
              _: 1
            }),
            l("div", Ut, [
              v(n(oe), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: m(() => [
                  v(n(ke), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: m(() => [
                      v(n(pe), { "onUpdate:modelValue": Z }, {
                        default: m(() => [
                          l("div", Nt, [
                            p(g.$slots, "search-icon", {}, () => [
                              v(n(We), { class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" })
                            ]),
                            p(g.$slots, "input", P(D({ query: d.value })), () => [
                              v(n(ye), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                style: { "box-shadow": "none" },
                                placeholder: e.placeholder,
                                onChange: F[0] || (F[0] = ($) => E($.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && b.value ? p(g.$slots, "loader", P(G({ key: 0 }, { query: d.value, isLoading: b.value })), () => [
                            l("div", Gt, [
                              p(g.$slots, "loader-inner", {}, () => [
                                de("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && d.value === "" ? p(g.$slots, "prompt", P(G({ key: 1 }, { query: d.value, isLoading: b.value })), () => [
                            l("div", Qt, [
                              p(g.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || n(L).length > 0 ? (a(), C(n(me), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: m(() => [
                              (a(!0), y(X, null, te(Object.entries(n(j)), ([$, R]) => (a(), y("li", { key: $ }, [
                                p(g.$slots, "group", P(D({ group: $, items: R, query: d.value })), () => [
                                  $ !== "undefined" ? (a(), y("h2", Wt, z($), 1)) : O("", !0)
                                ]),
                                l("ul", Jt, [
                                  (a(!0), y(X, null, te(R, (U, J) => (a(), C(n(ge), {
                                    key: U.id,
                                    value: U,
                                    as: "template"
                                  }, {
                                    default: m(({ active: Q }) => [
                                      p(g.$slots, "default", P(D({ group: $, item: U, items: R, index: J, active: Q, stringify: n(V), query: d.value })), () => [
                                        l("li", {
                                          class: k(["cursor-pointer select-none px-4 py-2", Q && "bg-indigo-600 text-white"])
                                        }, z(n(V)(U)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : d.value !== "" && n(L).length === 0 ? p(g.$slots, "empty-state", P(G({ key: 3 }, { query: d.value, isLoading: b.value })), () => [
                            l("div", Xt, [
                              p(g.$slots, "empty-state-inner", {}, () => [
                                Yt,
                                en
                              ])
                            ])
                          ]) : O("", !0)
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
}, tn = { class: "sr-only" }, An = {
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
    const t = e, o = T(() => {
      const s = ["size-7"];
      return t.disabled && s.push("opacity-60", "cursor-not-allowed"), t.iconClasses ?? s;
    });
    return (s, r) => (a(), C(n(Re), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: m(() => [
        v(n(Pe), {
          disabled: e.disabled,
          class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        }, {
          default: m(() => [
            l("span", tn, z(e.srOnly), 1),
            p(s.$slots, "icon", P(D({ iconClasses: n(o) })), () => [
              v(n(Ne), {
                class: k(n(o))
              }, null, 8, ["class"])
            ])
          ]),
          _: 3
        }, 8, ["disabled"]),
        v(Le, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: m(() => [
            e.disabled ? O("", !0) : (a(), C(n(Ze), {
              key: 0,
              class: k([
                e.fromBottom ? "bottom-0" : "top-0",
                e.fromLeft ? "left-7" : "right-7",
                "mx-3 origin-top-right absolute min-w-48 w-auto mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
              ])
            }, {
              default: m(() => [
                p(s.$slots, "default")
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
}, In = {
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
    const t = e, o = T(() => t.condition === !0), s = T(() => t.condition === !1), r = H(!1), d = () => r.value = !r.value, w = H(), B = () => {
      clearInterval(i(w)), i(o) && h(w, setInterval(d, t.interval));
    }, b = () => {
      clearInterval(i(w)), h(r, !1);
    };
    return he(o, B, { immediate: !0 }), he(s, b, { immediate: !0 }), (M, _) => (a(), y("span", {
      class: k([r.value ? "invisible" : "visible"])
    }, [
      p(M.$slots, "default")
    ], 2));
  }
}, nn = (e) => {
  let t = 0;
  for (let s = 0; s < e.length; s++)
    t = e.charCodeAt(s) + ((t << 5) - t);
  let o = "#";
  for (let s = 0; s < 3; s++) {
    let r = t >> s * 8 & 255;
    o += ("00" + r.toString(16)).substr(-2);
  }
  return o;
}, sn = { class: "text-xs font-medium leading-none text-white" }, Fn = {
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
    const t = e, { id: o } = W(t), s = T(() => nn(De(o.value.toLowerCase())));
    return (r, d) => (a(), y("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Ve({ backgroundColor: n(s) })
    }, [
      l("span", sn, z(e.text), 1)
    ], 4));
  }
}, on = { class: "absolute inset-0 overflow-auto" }, Tn = {
  __name: "Scrollable",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    return (t, o) => (a(), C(ie(e.as), { class: "relative" }, {
      default: m(() => [
        l("div", on, [
          p(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}, On = {
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
    return (t, o) => e.condition ? (a(), C(Ae, G({
      key: 0,
      to: e.to
    }, t.$attrs), [
      p(t.$slots, "default")
    ], 16, ["to"])) : p(t.$slots, "default", { key: 1 });
  }
}, jn = {
  __name: "UniqueId",
  setup(e) {
    const t = Ee();
    return (o, s) => p(o.$slots, "default", { id: n(t) });
  }
}, Hn = {
  __name: "WhenMounted",
  setup(e) {
    const t = Te();
    return (o, s) => n(t) ? p(o.$slots, "default", { key: 0 }) : O("", !0);
  }
}, se = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, zn = (e) => {
  const t = se[e] || 0;
  return fe(`(min-width: ${t}px)`);
}, Rn = (e) => {
  const t = se[e] || se.sm;
  return fe(`(max-width: ${t - 1}px)`);
}, ln = () => {
  const e = ue({});
  for (const t in se) {
    const o = se[t];
    e[t] = fe(`(min-width: ${o}px)`);
  }
  return T(() => {
    const t = Object.entries(e).filter(([o, s]) => s);
    return Object.keys(Object.fromEntries(t))[t.length - 1];
  });
}, an = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, rn = { class: "mx-auto text-5xl uppercase" }, Pn = {
  __name: "DebugBreakpoint",
  setup(e) {
    const t = Oe(!1, 200), o = ln();
    return q(o, () => h(t, !0)), (s, r) => n(t) ? (a(), y("div", an, [
      l("div", rn, z(n(o)), 1)
    ])) : O("", !0);
  }
}, un = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, dn = /* @__PURE__ */ l("div", null, "Used", -1), cn = { class: "text-right" }, fn = /* @__PURE__ */ l("div", null, "Allocated", -1), pn = { class: "text-right" }, yn = /* @__PURE__ */ l("div", null, "Limit", -1), mn = { class: "text-right" }, gn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, Zn = {
  __name: "DebugMemory",
  setup(e) {
    const t = (r) => `${(r / 1024 / 1024).toFixed(2)} MB`, { isSupported: o, memory: s } = je();
    return (r, d) => n(o) && n(s) ? (a(), y("div", un, [
      n(s) ? (a(), y(X, { key: 0 }, [
        dn,
        l("div", cn, z(t(n(s).usedJSHeapSize)), 1),
        fn,
        l("div", pn, z(t(n(s).totalJSHeapSize)), 1),
        yn,
        l("div", mn, z(t(n(s).jsHeapSizeLimit)), 1)
      ], 64)) : O("", !0)
    ])) : (a(), y("div", gn, " Performance memory API not supported "));
  }
};
export {
  $n as Alert,
  In as Blink,
  kn as Button,
  Cn as ComboBox,
  Vn as CommandPalette,
  An as ContextualMenu,
  Pn as DebugBreakpoint,
  Zn as DebugMemory,
  Fn as GeneratedAvatar,
  Sn as HoverableElement,
  jt as Modal,
  qn as Prompt,
  Mn as PromptIcon,
  Ln as PromptTitle,
  Tn as Scrollable,
  ct as SpinnerIcon,
  On as TeleportIf,
  Bn as Toggle,
  jn as UniqueId,
  Hn as WhenMounted,
  Rn as isMaxBreakpoint,
  zn as isMinBreakpoint,
  nn as stringToColor,
  ln as useCurrentBreakpoint
};
