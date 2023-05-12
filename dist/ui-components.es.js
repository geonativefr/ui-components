import { openBlock as u, createElementBlock as m, normalizeClass as B, createElementVNode as l, createBlock as S, unref as n, renderSlot as f, createVNode as w, createCommentVNode as R, ref as O, computed as _, resolveDynamicComponent as ie, withCtx as p, toDisplayString as j, toRefs as W, reactive as ue, watch as M, onMounted as le, nextTick as Z, withKeys as be, createTextVNode as de, Fragment as X, renderList as ee, normalizeProps as P, guardReactiveProps as N, mergeProps as G, withDirectives as ce, vShow as ve, useAttrs as qe, withModifiers as re, Transition as Ie, normalizeStyle as Ve, Teleport as Me } from "vue";
import { CheckCircleIcon as Ae, ExclamationIcon as Te, XCircleIcon as Fe, InformationCircleIcon as ze, XIcon as te, SelectorIcon as xe, CheckIcon as we } from "@heroicons/vue/solid";
import { get as r, templateRef as ne, onClickOutside as _e, set as b, syncRef as Y, refThrottled as Oe, asyncComputed as Le, whenever as he, useMounted as Re, useMediaQuery as fe, refAutoReset as je, useMemory as He } from "@vueuse/core";
import { Combobox as pe, ComboboxLabel as $e, ComboboxInput as ye, ComboboxOptions as me, ComboboxOption as ge, Switch as Pe, TransitionRoot as ke, Dialog as Ce, TransitionChild as ae, DialogPanel as Be, DialogTitle as Ke, Menu as De, MenuButton as Ee, MenuItems as Ue } from "@headlessui/vue";
import { vElementHover as Ne } from "@vueuse/components";
import Ge from "md5";
import { v4 as Qe } from "uuid";
const We = { class: "flex" }, Je = {
  class: /* @__PURE__ */ B(["flex-shrink-0"])
}, Xe = { class: "ml-3" }, Ye = ["innerHTML"], Ze = {
  key: 0,
  class: "ml-auto pl-3"
}, et = { class: "-mx-1.5 -my-1.5" }, tt = /* @__PURE__ */ l("span", { class: "sr-only" }, "Dismiss", -1), Cn = {
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
    const o = e, s = (i) => i === o.type;
    return (i, d) => (u(), m("div", {
      class: B(["rounded-md p-4", { "bg-gray-50": s("default"), "bg-green-50": s("success"), "bg-red-50": s("danger"), "bg-yellow-50": s("warning"), "bg-primary-50": s("info") }])
    }, [
      l("div", We, [
        l("div", Je, [
          s("success") ? (u(), S(n(Ae), {
            key: 0,
            class: B(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : s("warning") ? (u(), S(n(Te), {
            key: 1,
            class: B(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : s("danger") ? (u(), S(n(Fe), {
            key: 2,
            class: B(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (u(), S(n(ze), {
            key: 3,
            class: B(["h-5 w-5", { "text-gray-400": s("default"), "text-primary-400": s("info") }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]))
        ]),
        l("div", Xe, [
          f(i.$slots, "default", {}, () => [
            l("p", {
              class: "font-medium text-gray-800",
              innerHTML: e.message
            }, null, 8, Ye)
          ])
        ]),
        e.dismissable ? (u(), m("div", Ze, [
          l("div", et, [
            l("button", {
              type: "button",
              class: B(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": s("default"), "bg-green-50": s("success"), "bg-red-50": s("danger"), "bg-yellow-50": s("warning"), "bg-primary-50": s("info") }, { "text-gray-400": s("default"), "text-green-400": s("success"), "text-red-400": s("danger"), "text-yellow-400": s("warning"), "text-primary-400": s("info") }]),
              onClick: d[0] || (d[0] = (v) => i.$emit("close"))
            }, [
              tt,
              w(n(te), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : R("", !0)
      ])
    ], 2));
  }
}, Se = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, i] of t)
    o[s] = i;
  return o;
}, nt = {}, st = {
  class: "animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ot = /* @__PURE__ */ l("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), at = /* @__PURE__ */ l("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), lt = [
  ot,
  at
];
function rt(e, t) {
  return u(), m("svg", st, lt);
}
const it = /* @__PURE__ */ Se(nt, [["render", rt]]), ut = { key: 2 }, Bn = {
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
    icon: {
      type: String,
      default: void 0
    },
    iconRight: {
      type: Boolean,
      default: !1
    },
    iconType: {
      type: String,
      default: "solid"
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
    const t = e, o = O(["group", "disabled:opacity-80", "disabled:cursor-default"]), s = _(() => t.noFlex ? [] : ["flex", "items-center", "justify-center", "gap-2"]), i = _(() => t.noPadding ? [] : ["py-2", "px-4"]), d = _(() => t.noBorder ? [] : ["border"]), v = _(() => t.noShadow ? [] : ["shadow-sm"]), $ = _(() => t.noRound ? [] : ["rounded-md"]), g = _(() => t.noRing ? [] : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), q = _(() => [t.iconRight ? "-mr-1 order-last" : "-ml-1", "h-4 w-4 empty:hidden"]), x = _(() => {
      const V = {
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
        for (const L of Object.keys(V)) {
          const E = V[L];
          for (const K in E)
            E[K] = E[K].replaceAll("enabled:", "");
        }
      return V[t.theme] ?? V.default;
    }), I = _(() => [
      ...r(o),
      ...r(s),
      ...r(i),
      ...r(d),
      ...r(v),
      ...r($),
      ...r(g),
      ...r(x)
    ]), A = _(() => t.loadingText ?? "Please wait..."), T = _(() => t.as === "button" ? t.type ?? "button" : void 0);
    return (V, L) => (u(), S(ie(e.as), {
      disabled: e.disabled || e.loading,
      type: n(T),
      class: B(n(I))
    }, {
      default: p(() => [
        e.loading ? (u(), S(it, {
          key: 0,
          class: B(n(q))
        }, null, 8, ["class"])) : (u(), m("span", {
          key: 1,
          class: B(n(q))
        }, [
          f(V.$slots, "icon")
        ], 2)),
        e.loading ? (u(), m("span", ut, j(n(A)), 1)) : f(V.$slots, "default", { key: 3 })
      ]),
      _: 3
    }, 8, ["disabled", "type", "class"]));
  }
}, dt = ["onKeydown"], ct = { class: "relative" }, ft = { class: "inline-block w-full rounded-md shadow-sm" }, pt = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-primary-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500 sm:text-sm sm:leading-5" }, yt = { class: "block flex flex-wrap gap-2" }, mt = { class: "flex items-center gap-1 rounded bg-primary-600 text-white px-2 py-0.5" }, gt = ["onClick"], ht = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, bt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, vt = {
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
    const o = e, s = O(!1), i = () => b(s, !r(s)), { items: d, excludeSelected: v, modelValue: $, query: g } = W(o), q = o.stringify ?? ((c) => (c == null ? void 0 : c.name) ?? c ?? ""), x = o.uniqueKey ?? ((c) => (c == null ? void 0 : c.id) ?? c), I = ue([]), A = O(r(g)), T = O([]), V = _(() => I.filter((c) => r(T).map(x).includes(x(c)))), L = o.filter ?? (async (c, F) => r(F).filter((a) => q(a).toLowerCase().includes(c.toLowerCase()))), E = _(() => r(d).filter((c) => !r(T).map(x).includes(x(c)))), K = O(r(d)), D = ne("input"), y = () => b(s, !0), z = () => b(s, !1), k = () => r(D).$el.focus();
    function H(c) {
      c.value === "" && r(A) !== "" && (c.value = r(A));
    }
    async function U() {
      b(T, []), b(A, ""), await Z(), k(), t("clear");
    }
    async function J(c) {
      b(T, r(T).filter((F) => x(F) !== x(c))), await Z(), k();
    }
    const Q = ne("container");
    return _e(Q, () => z()), M(d, (c) => {
      c.forEach((F) => {
        I.findIndex((a) => x(a) === x(F)) === -1 && I.push(F);
      });
    }, { immediate: !0 }), M($, (c) => b(T, c), { immediate: !0 }), M(T, (c) => t("update:modelValue", c)), M(T, () => b(A, "")), M(A, (c) => t("update:query", c)), M(A, async (c) => {
      const F = await L(r(c), r(v) ? r(E) : r(d));
      b(K, r(F) ?? []);
    }), M(g, (c) => b(A, c != null ? `${c}` : "")), Y(d, K, { direction: "ltr" }), M(A, (c) => r(D).$el.value = c), M(T, () => o.autoHide && z()), M(A, () => y()), le(() => Z().then(() => r(D).$el.value = r(A))), le(() => o.autofocus && k()), (c, F) => (u(), m("div", {
      ref_key: "container",
      ref: Q,
      onKeydown: be(z, ["esc"]),
      onKeyup: F[4] || (F[4] = ({ code: a }) => ["ArrowUp", "ArrowDown"].includes(a) && y())
    }, [
      w(n(pe), {
        as: "div",
        modelValue: T.value,
        "onUpdate:modelValue": F[3] || (F[3] = (a) => T.value = a),
        multiple: ""
      }, {
        default: p(() => [
          f(c.$slots, "label", {}, () => [
            w(n($e), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: p(() => [
                de(j(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", ct, [
            l("span", ft, [
              l("div", pt, [
                l("span", yt, [
                  T.value.length === 0 ? (u(), m("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: k
                  }, [
                    f(c.$slots, "empty-state")
                  ])) : R("", !0),
                  e.hideTags ? R("", !0) : (u(!0), m(X, { key: 1 }, ee(n(V), (a) => (u(), m("span", {
                    key: n(x)(a)
                  }, [
                    f(c.$slots, "selected-items", P(N({ item: a, stringify: n(q), remove: J })), () => [
                      l("span", mt, [
                        l("span", null, j(n(q)(a)), 1),
                        l("button", {
                          role: "button",
                          onClick: (h) => J(a)
                        }, [
                          w(n(te), { class: "h-4 w-4" })
                        ], 8, gt)
                      ])
                    ])
                  ]))), 128)),
                  w(n(ye), G({
                    ref_key: "input",
                    ref: D,
                    autocomplete: "off"
                  }, e.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: y,
                    onBlur: F[0] || (F[0] = (a) => H(a.target)),
                    onChange: F[1] || (F[1] = (a) => A.value = a.target.value)
                  }), null, 16)
                ]),
                l("div", ht, [
                  e.clearable ? (u(), m("button", {
                    key: 0,
                    type: "button",
                    onClick: U
                  }, [
                    T.value.length !== 0 ? (u(), S(n(te), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : R("", !0)
                  ])) : R("", !0),
                  l("button", {
                    type: "button",
                    onClick: i
                  }, [
                    w(n(xe), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            ce(l("div", bt, [
              K.value.length > 0 ? (u(), S(n(me), {
                key: 0,
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (u(!0), m(X, null, ee(K.value, (a) => (u(), S(n(ge), {
                    key: n(x)(a),
                    value: n(x)(a),
                    disabled: e.disabled.includes(n(x)(a)),
                    onClick: F[2] || (F[2] = () => e.autoHide && z())
                  }, {
                    default: p(({ active: h, selected: C }) => [
                      f(c.$slots, "default", P(N({ item: a, active: h, selected: C, stringify: n(q) })), () => [
                        l("li", {
                          class: B(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", h ? "bg-primary-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: B(["block", { truncate: !h, "font-semibold": C, "font-normal": !C }])
                          }, j(n(q)(a)), 3),
                          C ? (u(), m("span", {
                            key: 0,
                            class: B(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": h, "text-primary-600": !h }])
                          }, [
                            w(n(we), { class: "h-5 w-5" })
                          ], 2)) : R("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])) : R("", !0)
            ], 512), [
              [ve, s.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, dt));
  }
}, xt = ["onKeydown"], wt = { class: "relative" }, _t = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, $t = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, kt = {
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
    const o = e, s = O(!1), i = () => b(s, !r(s)), { items: d, excludeSelected: v, modelValue: $, query: g } = W(o), q = o.stringify ?? ((a) => (a == null ? void 0 : a.name) ?? a ?? void 0), x = (a) => {
      try {
        const h = q(a);
        if (h == null)
          throw Error("Cannot stringify nullish value");
        return `${h}`;
      } catch (h) {
        return console.debug("Unable to stringify item", a, h), "";
      }
    }, I = o.uniqueKey ?? ((a) => (a == null ? void 0 : a.id) ?? a), A = ue([]);
    function T(a) {
      return A.find((h) => I(h) === a);
    }
    const V = O(r(g)), L = O(), E = o.filter ?? (async (a, h) => r(h).filter((C) => x(C).toLowerCase().includes(a.toLowerCase()))), K = _(() => r(d).filter((a) => I(a) !== I(r($)))), D = O(r(d)), y = (a) => a != null ? x(a) : r(V), z = ne("input"), k = () => b(s, !0), H = () => b(s, !1), U = () => r(z).$el.focus();
    function J(a) {
      a.value === "" && r(V) !== "" && (a.value = r(V));
    }
    async function Q() {
      b(L, void 0), b(V, ""), await Z(), U(), t("clear");
    }
    const c = (a) => r(L) != null && I(a) === I(r(L)), F = ne("container");
    return _e(F, () => H()), M(d, (a) => {
      a.forEach((h) => {
        A.findIndex((C) => I(C) === I(h)) === -1 && A.push(h);
      });
    }, { immediate: !0 }), M(A, async () => {
      r(L) == null && o.modelValue != null && (b(L, T(I(o.modelValue))), await Z(), H());
    }, { immediate: !0 }), M($, (a) => b(L, T(a)), { immediate: !0 }), M(L, (a) => {
      I(a) !== I(o.modelValue) && t("update:modelValue", I(a));
    }), M(L, (a) => {
      a == null ? b(V, "") : b(V, x(a));
    }), M(V, (a) => t("update:query", a)), M(V, async (a) => {
      const h = await E(r(a), r(v) ? r(K) : r(d));
      b(D, r(h) ?? []);
    }), M(g, (a) => b(V, a != null ? `${a}` : "")), M(L, () => o.autoHide && H()), M(V, () => k()), Y(d, D, { direction: "ltr" }), le(() => o.autofocus && U()), (a, h) => (u(), m("div", {
      ref_key: "container",
      ref: F,
      onKeydown: be(H, ["esc"]),
      onKeyup: h[4] || (h[4] = ({ code: C }) => ["ArrowUp", "ArrowDown"].includes(C) && k())
    }, [
      w(n(pe), {
        as: "div",
        modelValue: L.value,
        "onUpdate:modelValue": h[3] || (h[3] = (C) => L.value = C)
      }, {
        default: p(() => [
          f(a.$slots, "label", {}, () => [
            w(n($e), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: p(() => [
                de(j(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", wt, [
            w(n(ye), G({
              ref_key: "input",
              ref: z,
              "display-value": y,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: k,
              onBlur: h[0] || (h[0] = (C) => J(C.target)),
              onChange: h[1] || (h[1] = (C) => V.value = C.target.value)
            }), null, 16),
            l("div", _t, [
              e.clearable ? (u(), m("button", {
                key: 0,
                type: "button",
                onClick: Q
              }, [
                n($) != null ? (u(), S(n(te), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : R("", !0)
              ])) : R("", !0),
              l("button", {
                type: "button",
                onClick: i
              }, [
                w(n(xe), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ce(l("div", $t, [
              w(n(me), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (u(!0), m(X, null, ee(D.value, (C) => (u(), S(n(ge), {
                    key: n(I)(C),
                    value: C,
                    disabled: e.disabled.includes(n(I)(C)),
                    onClick: h[2] || (h[2] = () => e.autoHide && H())
                  }, {
                    default: p(({ active: oe }) => [
                      f(a.$slots, "default", P(N({ item: C, active: oe, selected: c(C), stringify: x })), () => [
                        l("li", {
                          class: B(["relative cursor-pointer select-none py-2 pl-3 pr-9", oe ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: B(["block", !oe && "truncate", c(C) && "font-semibold"])
                          }, j(x(C)), 3),
                          c(C) ? (u(), m("span", {
                            key: 0,
                            class: B(["absolute inset-y-0 right-0 flex items-center pr-4", oe ? "text-white" : "text-indigo-600"])
                          }, [
                            w(n(we), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : R("", !0)
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
    ], 40, xt));
  }
}, Sn = {
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
    return (t, o) => Array.isArray(e.modelValue) ? (u(), S(vt, G({
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
      label: p(() => [
        f(t.$slots, "label")
      ]),
      "selected-items": p(({ item: s, stringify: i, remove: d }) => [
        f(t.$slots, "selected-items", P(N({ item: s, stringify: i, remove: d })))
      ]),
      default: p(({ item: s, active: i, selected: d, stringify: v }) => [
        f(t.$slots, "default", P(N({ item: s, active: i, selected: d, stringify: v })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (u(), S(kt, G({
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
      label: p(() => [
        f(t.$slots, "label")
      ]),
      default: p(({ item: s, active: i, selected: d, stringify: v }) => [
        f(t.$slots, "default", P(N({ item: s, active: i, selected: d, stringify: v })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, Ct = ["value"], qn = {
  __name: "TextInput",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    noPadding: {
      type: Boolean,
      default: !1
    },
    noBorder: {
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
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = O([
      "group",
      "disabled:opacity-80",
      "disabled:cursor-default",
      "text-gray-900",
      "placeholder:text-gray-400",
      "focus:ring-primary-600"
    ]), i = _(() => o.noPadding ? [] : ["p-1.5"]), d = _(() => o.noBorder ? [] : ["border"]), v = _(() => o.noRound ? [] : ["rounded-md"]), $ = _(() => o.noRing ? [] : ["ring-1", "ring-inset", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), g = _(() => [
      ...r(s),
      ...r(i),
      ...r(d),
      ...r(v),
      ...r($)
    ]);
    return (q, x) => (u(), m("input", {
      value: e.modelValue,
      class: B(n(g)),
      onInput: x[0] || (x[0] = (I) => t("update:modelValue", I.target.value))
    }, null, 42, Ct));
  }
}, Bt = /* @__PURE__ */ l("span", { class: "sr-only" }, "Use setting", -1), St = {
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
}, null, -1), It = [
  qt
], Vt = {
  key: 0,
  class: "h-3 w-3 text-green-600",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, Mt = /* @__PURE__ */ l("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), At = [
  Mt
], In = {
  __name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const o = e, { modelValue: s } = W(o), i = O(n(s));
    function d(g) {
      i.value = g, t("update:modelValue", g), t("change", g);
    }
    M(s, () => i.value = s.value);
    const v = qe(), $ = _(() => Object.keys(n(v)).includes("disabled") && n(v).disabled !== !1);
    return (g, q) => (u(), S(n(Pe), {
      modelValue: i.value,
      "onUpdate:modelValue": [
        q[0] || (q[0] = (x) => i.value = x),
        d
      ],
      class: B([i.value && !n($) ? "bg-green-600" : "bg-gray-200", n($) ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: p(() => [
        Bt,
        l("span", {
          class: B([i.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          l("span", {
            class: B([i.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            n($) ? R("", !0) : (u(), m("svg", St, It))
          ], 2),
          l("span", {
            class: B([i.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            n($) ? R("", !0) : (u(), m("svg", Vt, At))
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}, Vn = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const t = O(!1);
    function o(s) {
      t.value = s;
    }
    return (s, i) => ce((u(), S(ie(e.as), null, {
      default: p(() => [
        f(s.$slots, "default", { isHovered: t.value })
      ]),
      _: 3
    })), [
      [n(Ne), o]
    ]);
  }
}, Tt = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Ft = { class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" }, zt = {
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
    const o = e, { open: s } = W(o), i = O(o.open);
    function d() {
      t("close");
    }
    return Y(s, i, { direction: "ltr" }), (v, $) => (u(), S(n(ke), {
      as: "template",
      show: i.value
    }, {
      default: p(() => [
        w(n(Ce), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: p(() => [
            w(n(ae), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: p(() => [
                Tt
              ]),
              _: 1
            }),
            l("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: $[0] || ($[0] = re((...g) => v.submit && v.submit(...g), ["prevent"]))
            }, [
              l("div", Ft, [
                w(n(ae), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: p(() => [
                    w(n(Be), {
                      class: B([
                        e.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "sm:max-w-lg sm:w-full"
                      ])
                    }, {
                      default: p(() => [
                        e.hideCloseIcon ? R("", !0) : (u(), m("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: d
                        }, [
                          w(n(te), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        f(v.$slots, "default")
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
}, Ot = ["onSubmit", "onReset"], Lt = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, Rt = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, jt = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, Mn = {
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
    const o = e, { open: s } = W(o), i = O(o.open), d = ne("FormHTMLElement");
    async function v() {
      await (o.onSubmit ?? ((q) => t("submit", { form: r(q), visible: i })))({ form: r(d), visible: i }), o.hideOnSubmit && b(i, !1);
    }
    async function $() {
      await (o.onReset ?? ((q) => t("reset", { form: r(q), visible: i })))({ form: r(d), visible: i }), o.hideOnReset && b(i, !1);
    }
    return Y(s, i, { direction: "ltr" }), (g, q) => (u(), S(zt, { open: i.value }, {
      default: p(() => [
        l("form", {
          ref_key: "FormHTMLElement",
          ref: d,
          onSubmit: re(v, ["prevent"]),
          onReset: re($, ["prevent"])
        }, [
          l("div", null, [
            f(g.$slots, "default", { form: n(d) })
          ]),
          f(g.$slots, "footer", {}, () => [
            l("footer", Lt, [
              f(g.$slots, "buttons", {}, () => [
                l("button", Rt, j(e.submitButtonText), 1),
                l("button", jt, j(e.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, Ot)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, Ht = {}, Pt = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Kt(e, t) {
  return u(), m("div", Pt, [
    f(e.$slots, "default")
  ]);
}
const An = /* @__PURE__ */ Se(Ht, [["render", Kt]]), Tn = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (t, o) => (u(), S(n(Ke), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: p(() => [
        f(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Dt = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Et = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Ut = { class: "relative" }, Nt = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true",
  class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
    "clip-rule": "evenodd"
  })
], -1), Gt = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, Qt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Wt = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, Jt = { class: "mt-2 text-sm text-gray-800" }, Xt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Yt = /* @__PURE__ */ l("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), Zt = /* @__PURE__ */ l("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), Fn = {
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
    const o = e, { open: s, query: i } = W(o), d = O(r(i)), v = Oe(d, o.delayBetweenRequests), $ = O(!0), g = O(!1);
    Y(s, $, { direction: "ltr" }), Y(i, d, { direction: "ltr" });
    const q = async (y, z, k) => y === "" && o.prompt ? [] : z.filter((H) => k(H).toLowerCase().includes(y.toLowerCase())), x = o.filter ?? q, I = async function(y, z, k) {
      b(g, !0);
      try {
        return await x(y, z, k);
      } finally {
        b(g, !1);
      }
    }, A = Le(() => I(r(v), o.items, T), o.items), T = o.stringify ?? ((y) => y == null ? void 0 : y.name), V = o.groupGetter ?? (() => {
    }), L = _(
      () => A.value.reduce((y, z) => {
        let k = V(z);
        return { ...y, [k]: [...y[k] || [], z] };
      }, {})
    );
    function E(y) {
      b(d, y);
    }
    M(v, (y) => t("update:query", y));
    function K(y) {
      t("pick", y), D();
    }
    function D() {
      t("close"), t("update:open", !1), b($, !1);
    }
    return (y, z) => (u(), S(n(ke), {
      show: $.value,
      as: "template",
      onAfterLeave: z[2] || (z[2] = (k) => d.value = ""),
      appear: ""
    }, {
      default: p(() => [
        w(n(Ce), {
          as: "div",
          class: "relative z-10",
          onClose: z[1] || (z[1] = (k) => D())
        }, {
          default: p(() => [
            w(n(ae), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: p(() => [
                Dt
              ]),
              _: 1
            }),
            l("div", Et, [
              w(n(ae), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: p(() => [
                  w(n(Be), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: p(() => [
                      w(n(pe), { "onUpdate:modelValue": K }, {
                        default: p(() => [
                          l("div", Ut, [
                            f(y.$slots, "search-icon", {}, () => [
                              Nt
                            ]),
                            f(y.$slots, "input", P(N({ query: d.value })), () => [
                              w(n(ye), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                style: { "box-shadow": "none" },
                                placeholder: e.placeholder,
                                onChange: z[0] || (z[0] = (k) => E(k.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && g.value ? f(y.$slots, "loader", P(G({ key: 0 }, { query: d.value, isLoading: g.value })), () => [
                            l("div", Gt, [
                              f(y.$slots, "loader-inner", {}, () => [
                                de("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && d.value === "" ? f(y.$slots, "prompt", P(G({ key: 1 }, { query: d.value, isLoading: g.value })), () => [
                            l("div", Qt, [
                              f(y.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || n(A).length > 0 ? (u(), S(n(me), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: p(() => [
                              (u(!0), m(X, null, ee(Object.entries(n(L)), ([k, H]) => (u(), m("li", { key: k }, [
                                f(y.$slots, "group", P(N({ group: k, items: H, query: d.value })), () => [
                                  k !== "undefined" ? (u(), m("h2", Wt, j(k), 1)) : R("", !0)
                                ]),
                                l("ul", Jt, [
                                  (u(!0), m(X, null, ee(H, (U, J) => (u(), S(n(ge), {
                                    key: U.id,
                                    value: U,
                                    as: "template"
                                  }, {
                                    default: p(({ active: Q }) => [
                                      f(y.$slots, "default", P(N({ group: k, item: U, items: H, index: J, active: Q, stringify: n(T), query: d.value })), () => [
                                        l("li", {
                                          class: B(["cursor-pointer select-none px-4 py-2", Q && "bg-indigo-600 text-white"])
                                        }, j(n(T)(U)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : d.value !== "" && n(A).length === 0 ? f(y.$slots, "empty-state", P(G({ key: 3 }, { query: d.value, isLoading: g.value })), () => [
                            l("div", Xt, [
                              f(y.$slots, "empty-state-inner", {}, () => [
                                Yt,
                                Zt
                              ])
                            ])
                          ]) : R("", !0)
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
}, en = { class: "sr-only" }, tn = /* @__PURE__ */ l("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1), nn = [
  tn
], zn = {
  __name: "ContextualMenu",
  props: {
    iconClasses: {
      type: [String, Array],
      default: void 0
    },
    srOnly: {
      type: String,
      default: "Open"
    }
  },
  setup(e) {
    const t = e, o = _(() => t.iconClasses ?? "h-5 w-5");
    return (s, i) => (u(), S(n(De), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: p(() => [
        w(n(Ee), { class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" }, {
          default: p(() => [
            l("span", en, j(e.srOnly), 1),
            (u(), m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              class: B(n(o))
            }, nn, 2))
          ]),
          _: 1
        }),
        w(Ie, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: p(() => [
            w(n(Ue), { class: "mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" }, {
              default: p(() => [
                f(s.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}, On = {
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
    const t = e, o = _(() => t.condition === !0), s = _(() => t.condition === !1), i = O(!1), d = () => i.value = !i.value, v = O(), $ = () => {
      clearInterval(r(v)), r(o) && b(v, setInterval(d, t.interval));
    }, g = () => {
      clearInterval(r(v)), b(i, !1);
    };
    return he(o, $, { immediate: !0 }), he(s, g, { immediate: !0 }), (q, x) => (u(), m("span", {
      class: B([i.value ? "invisible" : "visible"])
    }, [
      f(q.$slots, "default")
    ], 2));
  }
}, sn = (e) => {
  let t = 0;
  for (let s = 0; s < e.length; s++)
    t = e.charCodeAt(s) + ((t << 5) - t);
  let o = "#";
  for (let s = 0; s < 3; s++) {
    let i = t >> s * 8 & 255;
    o += ("00" + i.toString(16)).substr(-2);
  }
  return o;
}, on = { class: "text-xs font-medium leading-none text-white" }, Ln = {
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
    const t = e, { id: o } = W(t), s = _(() => sn(Ge(o.value.toLowerCase())));
    return (i, d) => (u(), m("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Ve({ backgroundColor: n(s) })
    }, [
      l("span", on, j(e.text), 1)
    ], 4));
  }
}, an = { class: "absolute inset-0 overflow-auto" }, Rn = {
  __name: "Scrollable",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    return (t, o) => (u(), S(ie(e.as), { class: "relative" }, {
      default: p(() => [
        l("div", an, [
          f(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}, jn = {
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
    return (t, o) => e.condition ? (u(), S(Me, G({
      key: 0,
      to: e.to
    }, t.$attrs), [
      f(t.$slots, "default")
    ], 16, ["to"])) : f(t.$slots, "default", { key: 1 });
  }
}, Hn = {
  __name: "UniqueId",
  setup(e) {
    const t = Qe();
    return (o, s) => f(o.$slots, "default", { id: n(t) });
  }
}, Pn = {
  __name: "WhenMounted",
  setup(e) {
    const t = Re();
    return (o, s) => n(t) ? f(o.$slots, "default", { key: 0 }) : R("", !0);
  }
}, se = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, Kn = (e) => {
  const t = se[e] || 0;
  return fe(`(min-width: ${t}px)`);
}, Dn = (e) => {
  const t = se[e] || se.sm;
  return fe(`(max-width: ${t - 1}px)`);
}, ln = () => {
  const e = ue({});
  for (const t in se) {
    const o = se[t];
    e[t] = fe(`(min-width: ${o}px)`);
  }
  return _(() => {
    const t = Object.entries(e).filter(([o, s]) => s);
    return Object.keys(Object.fromEntries(t))[t.length - 1];
  });
}, rn = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, un = { class: "mx-auto text-5xl uppercase" }, En = {
  __name: "DebugBreakpoint",
  setup(e) {
    const t = je(!1, 200), o = ln();
    return M(o, () => b(t, !0)), (s, i) => n(t) ? (u(), m("div", rn, [
      l("div", un, j(n(o)), 1)
    ])) : R("", !0);
  }
}, dn = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, cn = /* @__PURE__ */ l("div", null, "Used", -1), fn = { class: "text-right" }, pn = /* @__PURE__ */ l("div", null, "Allocated", -1), yn = { class: "text-right" }, mn = /* @__PURE__ */ l("div", null, "Limit", -1), gn = { class: "text-right" }, hn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, Un = {
  __name: "DebugMemory",
  setup(e) {
    const t = (i) => `${(i / 1024 / 1024).toFixed(2)} MB`, { isSupported: o, memory: s } = He();
    return (i, d) => n(o) && n(s) ? (u(), m("div", dn, [
      n(s) ? (u(), m(X, { key: 0 }, [
        cn,
        l("div", fn, j(t(n(s).usedJSHeapSize)), 1),
        pn,
        l("div", yn, j(t(n(s).totalJSHeapSize)), 1),
        mn,
        l("div", gn, j(t(n(s).jsHeapSizeLimit)), 1)
      ], 64)) : R("", !0)
    ])) : (u(), m("div", hn, " Performance memory API not supported "));
  }
};
export {
  Cn as Alert,
  On as Blink,
  Bn as Button,
  Sn as ComboBox,
  Fn as CommandPalette,
  zn as ContextualMenu,
  En as DebugBreakpoint,
  Un as DebugMemory,
  Ln as GeneratedAvatar,
  Vn as HoverableElement,
  zt as Modal,
  Mn as Prompt,
  An as PromptIcon,
  Tn as PromptTitle,
  Rn as Scrollable,
  it as SpinnerIcon,
  jn as TeleportIf,
  qn as TextInput,
  In as Toggle,
  Hn as UniqueId,
  Pn as WhenMounted,
  Dn as isMaxBreakpoint,
  Kn as isMinBreakpoint,
  sn as stringToColor,
  ln as useCurrentBreakpoint
};
