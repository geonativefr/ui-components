import { openBlock as i, createElementBlock as m, normalizeClass as k, createElementVNode as l, createBlock as C, unref as s, renderSlot as f, createVNode as v, createCommentVNode as L, ref as j, computed as z, resolveDynamicComponent as ie, withCtx as p, toDisplayString as H, toRefs as W, reactive as ue, watch as V, onMounted as le, nextTick as Y, withKeys as be, createTextVNode as de, Fragment as X, renderList as Z, normalizeProps as P, guardReactiveProps as N, mergeProps as G, withDirectives as ce, vShow as ve, useAttrs as Ie, withModifiers as re, Transition as Me, normalizeStyle as Ae, Teleport as Ve } from "vue";
import { CheckCircleIcon as Fe, ExclamationIcon as Te, XCircleIcon as ze, InformationCircleIcon as Oe, XIcon as ee, SelectorIcon as xe, CheckIcon as we } from "@heroicons/vue/solid";
import { get as u, templateRef as te, onClickOutside as _e, set as b, syncRef as ne, asyncComputed as $e, refThrottled as Le, whenever as he, useMounted as je, useMediaQuery as fe, refAutoReset as He, useMemory as Re } from "@vueuse/core";
import { Combobox as pe, ComboboxLabel as ke, ComboboxInput as ye, ComboboxOptions as me, ComboboxOption as ge, Switch as Pe, TransitionRoot as Ce, Dialog as Be, TransitionChild as ae, DialogPanel as Se, DialogTitle as Ke, Menu as De, MenuButton as Ee, MenuItems as Ue } from "@headlessui/vue";
import { vElementHover as Ne } from "@vueuse/components";
import Ge from "md5";
import { v4 as Qe } from "uuid";
const We = { class: "flex" }, Je = {
  class: /* @__PURE__ */ k(["flex-shrink-0"])
}, Xe = { class: "ml-3" }, Ye = ["innerHTML"], Ze = {
  key: 0,
  class: "ml-auto pl-3"
}, et = { class: "-mx-1.5 -my-1.5" }, tt = /* @__PURE__ */ l("span", { class: "sr-only" }, "Dismiss", -1), kn = {
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
    const o = e, n = (r) => r === o.type;
    return (r, d) => (i(), m("div", {
      class: k(["rounded-md p-4", { "bg-gray-50": n("default"), "bg-green-50": n("success"), "bg-red-50": n("danger"), "bg-yellow-50": n("warning"), "bg-primary-50": n("info") }])
    }, [
      l("div", We, [
        l("div", Je, [
          n("success") ? (i(), C(s(Fe), {
            key: 0,
            class: k(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : n("warning") ? (i(), C(s(Te), {
            key: 1,
            class: k(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : n("danger") ? (i(), C(s(ze), {
            key: 2,
            class: k(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (i(), C(s(Oe), {
            key: 3,
            class: k(["h-5 w-5", { "text-gray-400": n("default"), "text-primary-400": n("info") }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]))
        ]),
        l("div", Xe, [
          f(r.$slots, "default", {}, () => [
            l("p", {
              class: "font-medium text-gray-800",
              innerHTML: e.message
            }, null, 8, Ye)
          ])
        ]),
        e.dismissable ? (i(), m("div", Ze, [
          l("div", et, [
            l("button", {
              type: "button",
              class: k(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": n("default"), "bg-green-50": n("success"), "bg-red-50": n("danger"), "bg-yellow-50": n("warning"), "bg-primary-50": n("info") }, { "text-gray-400": n("default"), "text-green-400": n("success"), "text-red-400": n("danger"), "text-yellow-400": n("warning"), "text-primary-400": n("info") }]),
              onClick: d[0] || (d[0] = (x) => r.$emit("close"))
            }, [
              tt,
              v(s(ee), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : L("", !0)
      ])
    ], 2));
  }
}, qe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
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
  return i(), m("svg", st, lt);
}
const it = /* @__PURE__ */ qe(nt, [["render", rt]]), ut = { key: 2 }, Cn = {
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
    const t = e, o = j(["group", "disabled:opacity-80", "disabled:cursor-default"]), n = z(() => t.noFlex ? [] : ["inline-flex", "items-center", "justify-center", "gap-2"]), r = z(() => t.noPadding ? [] : ["py-2", "px-4"]), d = z(() => t.noBorder ? [] : ["border"]), x = z(() => t.noShadow ? [] : ["shadow-sm"]), B = z(() => t.noRound ? [] : ["rounded-md"]), g = z(() => t.noRing ? [] : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), q = z(() => [t.iconRight ? "-mr-1 order-last" : "-ml-1", "h-4 w-4 empty:hidden"]), w = z(() => {
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
        for (const O of Object.keys(S)) {
          const D = S[O];
          for (const K in D)
            D[K] = D[K].replaceAll("enabled:", "");
        }
      return S[t.theme] ?? S.default;
    }), F = z(() => [
      ...u(o),
      ...u(n),
      ...u(r),
      ...u(d),
      ...u(x),
      ...u(B),
      ...u(g),
      ...u(w)
    ]), I = z(() => t.loadingText ?? "Please wait..."), M = z(() => t.as === "button" ? t.type ?? "button" : void 0);
    return (S, O) => (i(), C(ie(e.as), {
      disabled: e.disabled || e.loading,
      type: M.value,
      class: k(F.value)
    }, {
      default: p(() => [
        e.loading ? (i(), C(it, {
          key: 0,
          class: k(q.value)
        }, null, 8, ["class"])) : (i(), m("span", {
          key: 1,
          class: k(q.value)
        }, [
          f(S.$slots, "icon")
        ], 2)),
        e.loading ? (i(), m("span", ut, H(I.value), 1)) : f(S.$slots, "default", { key: 3 })
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
    const o = e, n = j(!1), r = () => b(n, !u(n)), { items: d, excludeSelected: x, modelValue: B, query: g } = W(o), q = o.stringify ?? ((c) => (c == null ? void 0 : c.name) ?? c ?? ""), w = o.uniqueKey ?? ((c) => (c == null ? void 0 : c.id) ?? c), F = ue([]), I = j(u(g)), M = j([]), S = z(() => F.filter((c) => u(M).map(w).includes(w(c)))), O = o.filter ?? (async (c, A) => u(A).filter((a) => q(a).toLowerCase().includes(c.toLowerCase()))), D = z(() => u(d).filter((c) => !u(M).map(w).includes(w(c)))), K = j(u(d)), E = te("input"), y = () => b(n, !0), T = () => b(n, !1), _ = () => u(E).$el.focus();
    function R(c) {
      c.value === "" && u(I) !== "" && (c.value = u(I));
    }
    async function U() {
      b(M, []), b(I, ""), await Y(), _(), t("clear");
    }
    async function J(c) {
      b(M, u(M).filter((A) => w(A) !== w(c))), await Y(), _();
    }
    const Q = te("container");
    return _e(Q, () => T()), V(d, (c) => {
      c.forEach((A) => {
        F.findIndex((a) => w(a) === w(A)) === -1 && F.push(A);
      });
    }, { immediate: !0 }), V(B, (c) => b(M, c), { immediate: !0 }), V(M, (c) => t("update:modelValue", c)), V(M, () => b(I, "")), V(I, (c) => t("update:query", c)), V(I, async (c) => {
      const A = await O(u(c), u(x) ? u(D) : u(d));
      b(K, u(A) ?? []);
    }), V(g, (c) => b(I, c != null ? `${c}` : "")), ne(d, K, { direction: "ltr" }), V(I, (c) => u(E).$el.value = c), V(M, () => o.autoHide && T()), V(I, () => y()), le(() => Y().then(() => u(E).$el.value = u(I))), le(() => o.autofocus && _()), (c, A) => (i(), m("div", {
      ref_key: "container",
      ref: Q,
      onKeydown: be(T, ["esc"]),
      onKeyup: A[4] || (A[4] = ({ code: a }) => ["ArrowUp", "ArrowDown"].includes(a) && y())
    }, [
      v(s(pe), {
        as: "div",
        modelValue: M.value,
        "onUpdate:modelValue": A[3] || (A[3] = (a) => M.value = a),
        multiple: ""
      }, {
        default: p(() => [
          f(c.$slots, "label", {}, () => [
            v(s(ke), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: p(() => [
                de(H(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", ct, [
            l("span", ft, [
              l("div", pt, [
                l("span", yt, [
                  M.value.length === 0 ? (i(), m("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: _
                  }, [
                    f(c.$slots, "empty-state")
                  ])) : L("", !0),
                  e.hideTags ? L("", !0) : (i(!0), m(X, { key: 1 }, Z(S.value, (a) => (i(), m("span", {
                    key: s(w)(a)
                  }, [
                    f(c.$slots, "selected-items", P(N({ item: a, stringify: s(q), remove: J })), () => [
                      l("span", mt, [
                        l("span", null, H(s(q)(a)), 1),
                        l("button", {
                          role: "button",
                          onClick: (h) => J(a)
                        }, [
                          v(s(ee), { class: "h-4 w-4" })
                        ], 8, gt)
                      ])
                    ])
                  ]))), 128)),
                  v(s(ye), G({
                    ref_key: "input",
                    ref: E,
                    autocomplete: "off"
                  }, e.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: y,
                    onBlur: A[0] || (A[0] = (a) => R(a.target)),
                    onChange: A[1] || (A[1] = (a) => I.value = a.target.value)
                  }), null, 16)
                ]),
                l("div", ht, [
                  e.clearable ? (i(), m("button", {
                    key: 0,
                    type: "button",
                    onClick: U
                  }, [
                    M.value.length !== 0 ? (i(), C(s(ee), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : L("", !0)
                  ])) : L("", !0),
                  l("button", {
                    type: "button",
                    onClick: r
                  }, [
                    v(s(xe), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            ce(l("div", bt, [
              K.value.length > 0 ? (i(), C(s(me), {
                key: 0,
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (i(!0), m(X, null, Z(K.value, (a) => (i(), C(s(ge), {
                    key: s(w)(a),
                    value: s(w)(a),
                    disabled: e.disabled.includes(s(w)(a)),
                    onClick: A[2] || (A[2] = () => e.autoHide && T())
                  }, {
                    default: p(({ active: h, selected: $ }) => [
                      f(c.$slots, "default", P(N({ item: a, active: h, selected: $, stringify: s(q) })), () => [
                        l("li", {
                          class: k(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", h ? "bg-primary-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: k(["block", { truncate: !h, "font-semibold": $, "font-normal": !$ }])
                          }, H(s(q)(a)), 3),
                          $ ? (i(), m("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": h, "text-primary-600": !h }])
                          }, [
                            v(s(we), { class: "h-5 w-5" })
                          ], 2)) : L("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])) : L("", !0)
            ], 512), [
              [ve, n.value]
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
    const o = e, n = j(!1), r = () => b(n, !u(n)), { items: d, excludeSelected: x, modelValue: B, query: g } = W(o), q = o.stringify ?? ((a) => (a == null ? void 0 : a.name) ?? a ?? void 0), w = (a) => {
      try {
        const h = q(a);
        if (h == null)
          throw Error("Cannot stringify nullish value");
        return `${h}`;
      } catch (h) {
        return console.debug("Unable to stringify item", a, h), "";
      }
    }, F = o.uniqueKey ?? ((a) => (a == null ? void 0 : a.id) ?? a), I = ue([]);
    function M(a) {
      return I.find((h) => F(h) === a) || null;
    }
    const S = j(u(g)), O = j(), D = o.filter ?? (async (a, h) => u(h).filter(($) => w($).toLowerCase().includes(a.toLowerCase()))), K = z(() => u(d).filter((a) => F(a) !== F(u(B)))), E = $e(() => D(u(S), u(x) ? u(K) : u(d)), []), y = (a) => a != null ? w(a) : u(S), T = te("input"), _ = () => b(n, !0), R = () => b(n, !1), U = () => u(T).$el.focus();
    function J(a) {
      a.value === "" && u(S) !== "" && (a.value = u(S));
    }
    async function Q() {
      b(O, null), b(S, ""), await Y(), U(), t("clear");
    }
    const c = (a) => u(O) != null && F(a) === F(u(O)), A = te("container");
    return _e(A, () => R()), V(d, (a) => {
      a.forEach((h) => {
        I.findIndex(($) => F($) === F(h)) === -1 && I.push(h);
      });
    }, { immediate: !0 }), V(I, async () => {
      u(O) == null && o.modelValue != null && (b(O, M(F(o.modelValue))), await Y(), R());
    }, { immediate: !0 }), V(B, (a) => b(O, M(a)), { immediate: !0 }), V(O, (a) => {
      F(a) !== F(o.modelValue) && t("update:modelValue", F(a));
    }), V(O, (a) => {
      a == null ? b(S, "") : b(S, w(a));
    }), V(S, (a) => t("update:query", a)), V(g, (a) => b(S, a != null ? `${a}` : "")), V(O, () => o.autoHide && R()), V(S, () => _()), le(() => o.autofocus && U()), (a, h) => (i(), m("div", {
      ref_key: "container",
      ref: A,
      onKeydown: be(R, ["esc"]),
      onKeyup: h[4] || (h[4] = ({ code: $ }) => ["ArrowUp", "ArrowDown"].includes($) && _())
    }, [
      v(s(pe), {
        as: "div",
        modelValue: O.value,
        "onUpdate:modelValue": h[3] || (h[3] = ($) => O.value = $)
      }, {
        default: p(() => [
          f(a.$slots, "label", {}, () => [
            v(s(ke), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: p(() => [
                de(H(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", wt, [
            v(s(ye), G({
              ref_key: "input",
              ref: T,
              "display-value": y,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: _,
              onBlur: h[0] || (h[0] = ($) => J($.target)),
              onChange: h[1] || (h[1] = ($) => S.value = $.target.value)
            }), null, 16),
            l("div", _t, [
              e.clearable ? (i(), m("button", {
                key: 0,
                type: "button",
                onClick: Q
              }, [
                s(B) != null ? (i(), C(s(ee), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : L("", !0)
              ])) : L("", !0),
              l("button", {
                type: "button",
                onClick: r
              }, [
                v(s(xe), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ce(l("div", $t, [
              v(s(me), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (i(!0), m(X, null, Z(s(E), ($) => (i(), C(s(ge), {
                    key: s(F)($),
                    value: $,
                    disabled: e.disabled.includes(s(F)($)),
                    onClick: h[2] || (h[2] = () => e.autoHide && R())
                  }, {
                    default: p(({ active: oe }) => [
                      f(a.$slots, "default", P(N({ item: $, active: oe, selected: c($), stringify: w })), () => [
                        l("li", {
                          class: k(["relative cursor-pointer select-none py-2 pl-3 pr-9", oe ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: k(["block", !oe && "truncate", c($) && "font-semibold"])
                          }, H(w($)), 3),
                          c($) ? (i(), m("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", oe ? "text-white" : "text-indigo-600"])
                          }, [
                            v(s(we), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : L("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])
            ], 512), [
              [ve, n.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, xt));
  }
}, Bn = {
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
    return (t, o) => Array.isArray(e.modelValue) ? (i(), C(vt, G({
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
      "selected-items": p(({ item: n, stringify: r, remove: d }) => [
        f(t.$slots, "selected-items", P(N({ item: n, stringify: r, remove: d })))
      ]),
      default: p(({ item: n, active: r, selected: d, stringify: x }) => [
        f(t.$slots, "default", P(N({ item: n, active: r, selected: d, stringify: x })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (i(), C(kt, G({
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
      default: p(({ item: n, active: r, selected: d, stringify: x }) => [
        f(t.$slots, "default", P(N({ item: n, active: r, selected: d, stringify: x })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, Ct = /* @__PURE__ */ l("span", { class: "sr-only" }, "Use setting", -1), Bt = {
  key: 0,
  class: "h-3 w-3 text-gray-400",
  fill: "none",
  viewBox: "0 0 12 12"
}, St = /* @__PURE__ */ l("path", {
  d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), qt = [
  St
], It = {
  key: 0,
  class: "h-3 w-3 text-green-600",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, Mt = /* @__PURE__ */ l("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), At = [
  Mt
], Sn = {
  __name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const o = e, { modelValue: n } = W(o), r = j(s(n));
    function d(g) {
      r.value = g, t("update:modelValue", g), t("change", g);
    }
    V(n, () => r.value = n.value);
    const x = Ie(), B = z(() => Object.keys(s(x)).includes("disabled") && s(x).disabled !== !1);
    return (g, q) => (i(), C(s(Pe), {
      modelValue: r.value,
      "onUpdate:modelValue": [
        q[0] || (q[0] = (w) => r.value = w),
        d
      ],
      class: k([r.value && !B.value ? "bg-green-600" : "bg-gray-200", B.value ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: p(() => [
        Ct,
        l("span", {
          class: k([r.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          l("span", {
            class: k([r.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            B.value ? L("", !0) : (i(), m("svg", Bt, qt))
          ], 2),
          l("span", {
            class: k([r.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            B.value ? L("", !0) : (i(), m("svg", It, At))
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}, qn = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const t = j(!1);
    function o(n) {
      t.value = n;
    }
    return (n, r) => ce((i(), C(ie(e.as), null, {
      default: p(() => [
        f(n.$slots, "default", { isHovered: t.value })
      ]),
      _: 3
    })), [
      [s(Ne), o]
    ]);
  }
}, Vt = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Ft = { class: "flex items-center justify-center min-h-full p-4 text-center sm:p-0" }, Tt = {
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
    const o = e, { open: n } = W(o), r = j(o.open);
    function d() {
      t("close");
    }
    return ne(n, r, { direction: "ltr" }), (x, B) => (i(), C(s(Ce), {
      as: "template",
      show: r.value
    }, {
      default: p(() => [
        v(s(Be), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: p(() => [
            v(s(ae), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: p(() => [
                Vt
              ]),
              _: 1
            }),
            l("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: B[0] || (B[0] = re((...g) => x.submit && x.submit(...g), ["prevent"]))
            }, [
              l("div", Ft, [
                v(s(ae), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: p(() => [
                    v(s(Se), {
                      class: k([
                        e.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "max-w-lg w-full"
                      ])
                    }, {
                      default: p(() => [
                        e.hideCloseIcon ? L("", !0) : (i(), m("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: d
                        }, [
                          v(s(ee), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        f(x.$slots, "default")
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
}, zt = ["onSubmit", "onReset"], Ot = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, Lt = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, jt = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, In = {
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
    const o = e, { open: n } = W(o), r = j(o.open), d = te("FormHTMLElement");
    async function x() {
      await (o.onSubmit ?? ((q) => t("submit", { form: u(q), visible: r })))({ form: u(d), visible: r }), o.hideOnSubmit && b(r, !1);
    }
    async function B() {
      await (o.onReset ?? ((q) => t("reset", { form: u(q), visible: r })))({ form: u(d), visible: r }), o.hideOnReset && b(r, !1);
    }
    return ne(n, r, { direction: "ltr" }), (g, q) => (i(), C(Tt, { open: r.value }, {
      default: p(() => [
        l("form", {
          ref_key: "FormHTMLElement",
          ref: d,
          onSubmit: re(x, ["prevent"]),
          onReset: re(B, ["prevent"])
        }, [
          l("div", null, [
            f(g.$slots, "default", { form: s(d) })
          ]),
          f(g.$slots, "footer", {}, () => [
            l("footer", Ot, [
              f(g.$slots, "buttons", {}, () => [
                l("button", Lt, H(e.submitButtonText), 1),
                l("button", jt, H(e.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, zt)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, Ht = {}, Rt = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Pt(e, t) {
  return i(), m("div", Rt, [
    f(e.$slots, "default")
  ]);
}
const Mn = /* @__PURE__ */ qe(Ht, [["render", Pt]]), An = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (t, o) => (i(), C(s(Ke), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: p(() => [
        f(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Kt = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Dt = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Et = { class: "relative" }, Ut = /* @__PURE__ */ l("svg", {
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
], -1), Nt = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, Gt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Qt = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, Wt = { class: "mt-2 text-sm text-gray-800" }, Jt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Xt = /* @__PURE__ */ l("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), Yt = /* @__PURE__ */ l("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), Vn = {
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
    const o = e, { open: n, query: r } = W(o), d = j(u(r)), x = Le(d, o.delayBetweenRequests), B = j(!0), g = j(!1);
    ne(n, B, { direction: "ltr" }), ne(r, d, { direction: "ltr" });
    const q = async (y, T, _) => y === "" && o.prompt ? [] : T.filter((R) => _(R).toLowerCase().includes(y.toLowerCase())), w = o.filter ?? q, F = async function(y, T, _) {
      b(g, !0);
      try {
        return await w(y, T, _);
      } finally {
        b(g, !1);
      }
    }, I = $e(() => F(u(x), o.items, M), o.items), M = o.stringify ?? ((y) => y == null ? void 0 : y.name), S = o.groupGetter ?? (() => {
    }), O = z(
      () => I.value.reduce((y, T) => {
        let _ = S(T);
        return { ...y, [_]: [...y[_] || [], T] };
      }, {})
    );
    function D(y) {
      b(d, y);
    }
    V(x, (y) => t("update:query", y));
    function K(y) {
      t("pick", y), E();
    }
    function E() {
      t("close"), t("update:open", !1), b(B, !1);
    }
    return (y, T) => (i(), C(s(Ce), {
      show: B.value,
      as: "template",
      onAfterLeave: T[2] || (T[2] = (_) => d.value = ""),
      appear: ""
    }, {
      default: p(() => [
        v(s(Be), {
          as: "div",
          class: "relative z-10",
          onClose: T[1] || (T[1] = (_) => E())
        }, {
          default: p(() => [
            v(s(ae), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: p(() => [
                Kt
              ]),
              _: 1
            }),
            l("div", Dt, [
              v(s(ae), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: p(() => [
                  v(s(Se), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: p(() => [
                      v(s(pe), { "onUpdate:modelValue": K }, {
                        default: p(() => [
                          l("div", Et, [
                            f(y.$slots, "search-icon", {}, () => [
                              Ut
                            ]),
                            f(y.$slots, "input", P(N({ query: d.value })), () => [
                              v(s(ye), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                style: { "box-shadow": "none" },
                                placeholder: e.placeholder,
                                onChange: T[0] || (T[0] = (_) => D(_.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && g.value ? f(y.$slots, "loader", P(G({ key: 0 }, { query: d.value, isLoading: g.value })), () => [
                            l("div", Nt, [
                              f(y.$slots, "loader-inner", {}, () => [
                                de("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && d.value === "" ? f(y.$slots, "prompt", P(G({ key: 1 }, { query: d.value, isLoading: g.value })), () => [
                            l("div", Gt, [
                              f(y.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || s(I).length > 0 ? (i(), C(s(me), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: p(() => [
                              (i(!0), m(X, null, Z(Object.entries(O.value), ([_, R]) => (i(), m("li", { key: _ }, [
                                f(y.$slots, "group", P(N({ group: _, items: R, query: d.value })), () => [
                                  _ !== "undefined" ? (i(), m("h2", Qt, H(_), 1)) : L("", !0)
                                ]),
                                l("ul", Wt, [
                                  (i(!0), m(X, null, Z(R, (U, J) => (i(), C(s(ge), {
                                    key: U.id,
                                    value: U,
                                    as: "template"
                                  }, {
                                    default: p(({ active: Q }) => [
                                      f(y.$slots, "default", P(N({ group: _, item: U, items: R, index: J, active: Q, stringify: s(M), query: d.value })), () => [
                                        l("li", {
                                          class: k(["cursor-pointer select-none px-4 py-2", Q && "bg-indigo-600 text-white"])
                                        }, H(s(M)(U)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : d.value !== "" && s(I).length === 0 ? f(y.$slots, "empty-state", P(G({ key: 3 }, { query: d.value, isLoading: g.value })), () => [
                            l("div", Jt, [
                              f(y.$slots, "empty-state-inner", {}, () => [
                                Xt,
                                Yt
                              ])
                            ])
                          ]) : L("", !0)
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
}, Zt = { class: "sr-only" }, en = /* @__PURE__ */ l("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1), tn = [
  en
], Fn = {
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
    const t = e, o = z(() => t.iconClasses ?? "h-5 w-5");
    return (n, r) => (i(), C(s(De), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: p(() => [
        v(s(Ee), { class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" }, {
          default: p(() => [
            l("span", Zt, H(e.srOnly), 1),
            (i(), m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              class: k(o.value)
            }, tn, 2))
          ]),
          _: 1
        }),
        v(Me, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: p(() => [
            v(s(Ue), { class: "mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" }, {
              default: p(() => [
                f(n.$slots, "default")
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
}, Tn = {
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
    const t = e, o = z(() => t.condition === !0), n = z(() => t.condition === !1), r = j(!1), d = () => r.value = !r.value, x = j(), B = () => {
      clearInterval(u(x)), u(o) && b(x, setInterval(d, t.interval));
    }, g = () => {
      clearInterval(u(x)), b(r, !1);
    };
    return he(o, B, { immediate: !0 }), he(n, g, { immediate: !0 }), (q, w) => (i(), m("span", {
      class: k([r.value ? "invisible" : "visible"])
    }, [
      f(q.$slots, "default")
    ], 2));
  }
}, nn = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = e.charCodeAt(n) + ((t << 5) - t);
  let o = "#";
  for (let n = 0; n < 3; n++) {
    let r = t >> n * 8 & 255;
    o += ("00" + r.toString(16)).substr(-2);
  }
  return o;
}, sn = { class: "text-xs font-medium leading-none text-white" }, zn = {
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
    const t = e, { id: o } = W(t), n = z(() => nn(Ge(o.value.toLowerCase())));
    return (r, d) => (i(), m("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Ae({ backgroundColor: n.value })
    }, [
      l("span", sn, H(e.text), 1)
    ], 4));
  }
}, on = { class: "absolute inset-0 overflow-auto" }, On = {
  __name: "Scrollable",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    return (t, o) => (i(), C(ie(e.as), { class: "relative" }, {
      default: p(() => [
        l("div", on, [
          f(t.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}, Ln = {
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
    return (t, o) => e.condition ? (i(), C(Ve, G({
      key: 0,
      to: e.to
    }, t.$attrs), [
      f(t.$slots, "default")
    ], 16, ["to"])) : f(t.$slots, "default", { key: 1 });
  }
}, jn = {
  __name: "UniqueId",
  setup(e) {
    const t = Qe();
    return (o, n) => f(o.$slots, "default", { id: s(t) });
  }
}, Hn = {
  __name: "WhenMounted",
  setup(e) {
    const t = je();
    return (o, n) => s(t) ? f(o.$slots, "default", { key: 0 }) : L("", !0);
  }
}, se = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, Rn = (e) => {
  const t = se[e] || 0;
  return fe(`(min-width: ${t}px)`);
}, Pn = (e) => {
  const t = se[e] || se.sm;
  return fe(`(max-width: ${t - 1}px)`);
}, an = () => {
  const e = ue({});
  for (const t in se) {
    const o = se[t];
    e[t] = fe(`(min-width: ${o}px)`);
  }
  return z(() => {
    const t = Object.entries(e).filter(([o, n]) => n);
    return Object.keys(Object.fromEntries(t))[t.length - 1];
  });
}, ln = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, rn = { class: "mx-auto text-5xl uppercase" }, Kn = {
  __name: "DebugBreakpoint",
  setup(e) {
    const t = He(!1, 200), o = an();
    return V(o, () => b(t, !0)), (n, r) => s(t) ? (i(), m("div", ln, [
      l("div", rn, H(s(o)), 1)
    ])) : L("", !0);
  }
}, un = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, dn = /* @__PURE__ */ l("div", null, "Used", -1), cn = { class: "text-right" }, fn = /* @__PURE__ */ l("div", null, "Allocated", -1), pn = { class: "text-right" }, yn = /* @__PURE__ */ l("div", null, "Limit", -1), mn = { class: "text-right" }, gn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, Dn = {
  __name: "DebugMemory",
  setup(e) {
    const t = (r) => `${(r / 1024 / 1024).toFixed(2)} MB`, { isSupported: o, memory: n } = Re();
    return (r, d) => s(o) && s(n) ? (i(), m("div", un, [
      s(n) ? (i(), m(X, { key: 0 }, [
        dn,
        l("div", cn, H(t(s(n).usedJSHeapSize)), 1),
        fn,
        l("div", pn, H(t(s(n).totalJSHeapSize)), 1),
        yn,
        l("div", mn, H(t(s(n).jsHeapSizeLimit)), 1)
      ], 64)) : L("", !0)
    ])) : (i(), m("div", gn, " Performance memory API not supported "));
  }
};
export {
  kn as Alert,
  Tn as Blink,
  Cn as Button,
  Bn as ComboBox,
  Vn as CommandPalette,
  Fn as ContextualMenu,
  Kn as DebugBreakpoint,
  Dn as DebugMemory,
  zn as GeneratedAvatar,
  qn as HoverableElement,
  Tt as Modal,
  In as Prompt,
  Mn as PromptIcon,
  An as PromptTitle,
  On as Scrollable,
  it as SpinnerIcon,
  Ln as TeleportIf,
  Sn as Toggle,
  jn as UniqueId,
  Hn as WhenMounted,
  Pn as isMaxBreakpoint,
  Rn as isMinBreakpoint,
  nn as stringToColor,
  an as useCurrentBreakpoint
};
