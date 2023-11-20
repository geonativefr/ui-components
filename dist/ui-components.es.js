import { openBlock as i, createElementBlock as m, normalizeClass as k, createElementVNode as a, createBlock as C, unref as o, renderSlot as f, createVNode as v, createCommentVNode as L, ref as j, computed as V, resolveDynamicComponent as ie, withCtx as p, toDisplayString as H, toRefs as W, reactive as ue, watch as F, onMounted as ae, nextTick as Y, withKeys as be, createTextVNode as de, Fragment as X, renderList as Z, normalizeProps as P, guardReactiveProps as N, mergeProps as G, withDirectives as ce, vShow as ve, useAttrs as qe, withModifiers as re, Transition as Ie, normalizeStyle as Me, Teleport as Ae } from "vue";
import { CheckCircleIcon as Ve, ExclamationIcon as Fe, XCircleIcon as Te, InformationCircleIcon as ze, XIcon as ee, SelectorIcon as xe, CheckIcon as we } from "@heroicons/vue/solid";
import { get as u, templateRef as te, onClickOutside as _e, set as b, syncRef as ne, refThrottled as Oe, asyncComputed as Le, whenever as he, useMounted as je, useMediaQuery as fe, refAutoReset as He, useMemory as Re } from "@vueuse/core";
import { Combobox as pe, ComboboxLabel as $e, ComboboxInput as ye, ComboboxOptions as me, ComboboxOption as ge, Switch as Pe, TransitionRoot as ke, Dialog as Ce, TransitionChild as le, DialogPanel as Be, DialogTitle as Ke, Menu as De, MenuButton as Ee, MenuItems as Ue } from "@headlessui/vue";
import { vElementHover as Ne } from "@vueuse/components";
import Ge from "md5";
import { v4 as Qe } from "uuid";
const We = { class: "flex" }, Je = {
  class: /* @__PURE__ */ k(["flex-shrink-0"])
}, Xe = { class: "ml-3" }, Ye = ["innerHTML"], Ze = {
  key: 0,
  class: "ml-auto pl-3"
}, et = { class: "-mx-1.5 -my-1.5" }, tt = /* @__PURE__ */ a("span", { class: "sr-only" }, "Dismiss", -1), kn = {
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
    const s = e, n = (r) => r === s.type;
    return (r, d) => (i(), m("div", {
      class: k(["rounded-md p-4", { "bg-gray-50": n("default"), "bg-green-50": n("success"), "bg-red-50": n("danger"), "bg-yellow-50": n("warning"), "bg-primary-50": n("info") }])
    }, [
      a("div", We, [
        a("div", Je, [
          n("success") ? (i(), C(o(Ve), {
            key: 0,
            class: k(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : n("warning") ? (i(), C(o(Fe), {
            key: 1,
            class: k(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : n("danger") ? (i(), C(o(Te), {
            key: 2,
            class: k(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (i(), C(o(ze), {
            key: 3,
            class: k(["h-5 w-5", { "text-gray-400": n("default"), "text-primary-400": n("info") }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]))
        ]),
        a("div", Xe, [
          f(r.$slots, "default", {}, () => [
            a("p", {
              class: "font-medium text-gray-800",
              innerHTML: e.message
            }, null, 8, Ye)
          ])
        ]),
        e.dismissable ? (i(), m("div", Ze, [
          a("div", et, [
            a("button", {
              type: "button",
              class: k(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": n("default"), "bg-green-50": n("success"), "bg-red-50": n("danger"), "bg-yellow-50": n("warning"), "bg-primary-50": n("info") }, { "text-gray-400": n("default"), "text-green-400": n("success"), "text-red-400": n("danger"), "text-yellow-400": n("warning"), "text-primary-400": n("info") }]),
              onClick: d[0] || (d[0] = (x) => r.$emit("close"))
            }, [
              tt,
              v(o(ee), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : L("", !0)
      ])
    ], 2));
  }
}, Se = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, nt = {}, st = {
  class: "animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ot = /* @__PURE__ */ a("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), lt = /* @__PURE__ */ a("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), at = [
  ot,
  lt
];
function rt(e, t) {
  return i(), m("svg", st, at);
}
const it = /* @__PURE__ */ Se(nt, [["render", rt]]), ut = { key: 2 }, Cn = {
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
    const t = e, s = j(["group", "disabled:opacity-80", "disabled:cursor-default"]), n = V(() => t.noFlex ? [] : ["inline-flex", "items-center", "justify-center", "gap-2"]), r = V(() => t.noPadding ? [] : ["py-2", "px-4"]), d = V(() => t.noBorder ? [] : ["border"]), x = V(() => t.noShadow ? [] : ["shadow-sm"]), B = V(() => t.noRound ? [] : ["rounded-md"]), g = V(() => t.noRing ? [] : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), q = V(() => [t.iconRight ? "-mr-1 order-last" : "-ml-1", "h-4 w-4 empty:hidden"]), w = V(() => {
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
    }), T = V(() => [
      ...u(s),
      ...u(n),
      ...u(r),
      ...u(d),
      ...u(x),
      ...u(B),
      ...u(g),
      ...u(w)
    ]), I = V(() => t.loadingText ?? "Please wait..."), M = V(() => t.as === "button" ? t.type ?? "button" : void 0);
    return (S, O) => (i(), C(ie(e.as), {
      disabled: e.disabled || e.loading,
      type: M.value,
      class: k(T.value)
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
    const s = e, n = j(!1), r = () => b(n, !u(n)), { items: d, excludeSelected: x, modelValue: B, query: g } = W(s), q = s.stringify ?? ((c) => (c == null ? void 0 : c.name) ?? c ?? ""), w = s.uniqueKey ?? ((c) => (c == null ? void 0 : c.id) ?? c), T = ue([]), I = j(u(g)), M = j([]), S = V(() => T.filter((c) => u(M).map(w).includes(w(c)))), O = s.filter ?? (async (c, A) => u(A).filter((l) => q(l).toLowerCase().includes(c.toLowerCase()))), D = V(() => u(d).filter((c) => !u(M).map(w).includes(w(c)))), K = j(u(d)), E = te("input"), y = () => b(n, !0), z = () => b(n, !1), _ = () => u(E).$el.focus();
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
    return _e(Q, () => z()), F(d, (c) => {
      c.forEach((A) => {
        T.findIndex((l) => w(l) === w(A)) === -1 && T.push(A);
      });
    }, { immediate: !0 }), F(B, (c) => b(M, c), { immediate: !0 }), F(M, (c) => t("update:modelValue", c)), F(M, () => b(I, "")), F(I, (c) => t("update:query", c)), F(I, async (c) => {
      const A = await O(u(c), u(x) ? u(D) : u(d));
      b(K, u(A) ?? []);
    }), F(g, (c) => b(I, c != null ? `${c}` : "")), ne(d, K, { direction: "ltr" }), F(I, (c) => u(E).$el.value = c), F(M, () => s.autoHide && z()), F(I, () => y()), ae(() => Y().then(() => u(E).$el.value = u(I))), ae(() => s.autofocus && _()), (c, A) => (i(), m("div", {
      ref_key: "container",
      ref: Q,
      onKeydown: be(z, ["esc"]),
      onKeyup: A[4] || (A[4] = ({ code: l }) => ["ArrowUp", "ArrowDown"].includes(l) && y())
    }, [
      v(o(pe), {
        as: "div",
        modelValue: M.value,
        "onUpdate:modelValue": A[3] || (A[3] = (l) => M.value = l),
        multiple: ""
      }, {
        default: p(() => [
          f(c.$slots, "label", {}, () => [
            v(o($e), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: p(() => [
                de(H(e.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", ct, [
            a("span", ft, [
              a("div", pt, [
                a("span", yt, [
                  M.value.length === 0 ? (i(), m("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: _
                  }, [
                    f(c.$slots, "empty-state")
                  ])) : L("", !0),
                  e.hideTags ? L("", !0) : (i(!0), m(X, { key: 1 }, Z(S.value, (l) => (i(), m("span", {
                    key: o(w)(l)
                  }, [
                    f(c.$slots, "selected-items", P(N({ item: l, stringify: o(q), remove: J })), () => [
                      a("span", mt, [
                        a("span", null, H(o(q)(l)), 1),
                        a("button", {
                          role: "button",
                          onClick: (h) => J(l)
                        }, [
                          v(o(ee), { class: "h-4 w-4" })
                        ], 8, gt)
                      ])
                    ])
                  ]))), 128)),
                  v(o(ye), G({
                    ref_key: "input",
                    ref: E,
                    autocomplete: "off"
                  }, e.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: y,
                    onBlur: A[0] || (A[0] = (l) => R(l.target)),
                    onChange: A[1] || (A[1] = (l) => I.value = l.target.value)
                  }), null, 16)
                ]),
                a("div", ht, [
                  e.clearable ? (i(), m("button", {
                    key: 0,
                    type: "button",
                    onClick: U
                  }, [
                    M.value.length !== 0 ? (i(), C(o(ee), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : L("", !0)
                  ])) : L("", !0),
                  a("button", {
                    type: "button",
                    onClick: r
                  }, [
                    v(o(xe), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            ce(a("div", bt, [
              K.value.length > 0 ? (i(), C(o(me), {
                key: 0,
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (i(!0), m(X, null, Z(K.value, (l) => (i(), C(o(ge), {
                    key: o(w)(l),
                    value: o(w)(l),
                    disabled: e.disabled.includes(o(w)(l)),
                    onClick: A[2] || (A[2] = () => e.autoHide && z())
                  }, {
                    default: p(({ active: h, selected: $ }) => [
                      f(c.$slots, "default", P(N({ item: l, active: h, selected: $, stringify: o(q) })), () => [
                        a("li", {
                          class: k(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", h ? "bg-primary-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: k(["block", { truncate: !h, "font-semibold": $, "font-normal": !$ }])
                          }, H(o(q)(l)), 3),
                          $ ? (i(), m("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": h, "text-primary-600": !h }])
                          }, [
                            v(o(we), { class: "h-5 w-5" })
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
    const s = e, n = j(!1), r = () => b(n, !u(n)), { items: d, excludeSelected: x, modelValue: B, query: g } = W(s), q = s.stringify ?? ((l) => (l == null ? void 0 : l.name) ?? l ?? void 0), w = (l) => {
      try {
        const h = q(l);
        if (h == null)
          throw Error("Cannot stringify nullish value");
        return `${h}`;
      } catch (h) {
        return console.debug("Unable to stringify item", l, h), "";
      }
    }, T = s.uniqueKey ?? ((l) => (l == null ? void 0 : l.id) ?? l), I = ue([]);
    function M(l) {
      return I.find((h) => T(h) === l) || null;
    }
    const S = j(u(g)), O = j(), D = s.filter ?? ((l, h) => u(h).filter(($) => w($).toLowerCase().includes(l.toLowerCase()))), K = V(() => u(d).filter((l) => T(l) !== T(u(B)))), E = V(() => D(u(S), u(x) ? u(K) : u(d))), y = (l) => l != null ? w(l) : u(S), z = te("input"), _ = () => b(n, !0), R = () => b(n, !1), U = () => u(z).$el.focus();
    function J(l) {
      l.value === "" && u(S) !== "" && (l.value = u(S));
    }
    async function Q() {
      b(O, null), b(S, ""), await Y(), U(), t("clear");
    }
    const c = (l) => u(O) != null && T(l) === T(u(O)), A = te("container");
    return _e(A, () => R()), F(d, (l) => {
      l.forEach((h) => {
        I.findIndex(($) => T($) === T(h)) === -1 && I.push(h);
      });
    }, { immediate: !0 }), F(I, async () => {
      u(O) == null && s.modelValue != null && (b(O, M(T(s.modelValue))), await Y(), R());
    }, { immediate: !0 }), F(B, (l) => b(O, M(l)), { immediate: !0 }), F(O, (l) => {
      T(l) !== T(s.modelValue) && t("update:modelValue", T(l));
    }), F(O, (l) => {
      l == null ? b(S, "") : b(S, w(l));
    }), F(S, (l) => t("update:query", l)), F(g, (l) => b(S, l != null ? `${l}` : "")), F(O, () => s.autoHide && R()), F(S, () => _()), ae(() => s.autofocus && U()), (l, h) => (i(), m("div", {
      ref_key: "container",
      ref: A,
      onKeydown: be(R, ["esc"]),
      onKeyup: h[4] || (h[4] = ({ code: $ }) => ["ArrowUp", "ArrowDown"].includes($) && _())
    }, [
      v(o(pe), {
        as: "div",
        modelValue: O.value,
        "onUpdate:modelValue": h[3] || (h[3] = ($) => O.value = $)
      }, {
        default: p(() => [
          f(l.$slots, "label", {}, () => [
            v(o($e), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: p(() => [
                de(H(e.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", wt, [
            v(o(ye), G({
              ref_key: "input",
              ref: z,
              "display-value": y,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: _,
              onBlur: h[0] || (h[0] = ($) => J($.target)),
              onChange: h[1] || (h[1] = ($) => S.value = $.target.value)
            }), null, 16),
            a("div", _t, [
              e.clearable ? (i(), m("button", {
                key: 0,
                type: "button",
                onClick: Q
              }, [
                o(B) != null ? (i(), C(o(ee), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : L("", !0)
              ])) : L("", !0),
              a("button", {
                type: "button",
                onClick: r
              }, [
                v(o(xe), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ce(a("div", $t, [
              v(o(me), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (i(!0), m(X, null, Z(E.value, ($) => (i(), C(o(ge), {
                    key: o(T)($),
                    value: $,
                    disabled: e.disabled.includes(o(T)($)),
                    onClick: h[2] || (h[2] = () => e.autoHide && R())
                  }, {
                    default: p(({ active: oe }) => [
                      f(l.$slots, "default", P(N({ item: $, active: oe, selected: c($), stringify: w })), () => [
                        a("li", {
                          class: k(["relative cursor-pointer select-none py-2 pl-3 pr-9", oe ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: k(["block", !oe && "truncate", c($) && "font-semibold"])
                          }, H(w($)), 3),
                          c($) ? (i(), m("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", oe ? "text-white" : "text-indigo-600"])
                          }, [
                            v(o(we), {
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
    return (t, s) => Array.isArray(e.modelValue) ? (i(), C(vt, G({
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
}, Ct = /* @__PURE__ */ a("span", { class: "sr-only" }, "Use setting", -1), Bt = {
  key: 0,
  class: "h-3 w-3 text-gray-400",
  fill: "none",
  viewBox: "0 0 12 12"
}, St = /* @__PURE__ */ a("path", {
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
}, Mt = /* @__PURE__ */ a("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), At = [
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
    const s = e, { modelValue: n } = W(s), r = j(o(n));
    function d(g) {
      r.value = g, t("update:modelValue", g), t("change", g);
    }
    F(n, () => r.value = n.value);
    const x = qe(), B = V(() => Object.keys(o(x)).includes("disabled") && o(x).disabled !== !1);
    return (g, q) => (i(), C(o(Pe), {
      modelValue: r.value,
      "onUpdate:modelValue": [
        q[0] || (q[0] = (w) => r.value = w),
        d
      ],
      class: k([r.value && !B.value ? "bg-green-600" : "bg-gray-200", B.value ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: p(() => [
        Ct,
        a("span", {
          class: k([r.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          a("span", {
            class: k([r.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            B.value ? L("", !0) : (i(), m("svg", Bt, qt))
          ], 2),
          a("span", {
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
    function s(n) {
      t.value = n;
    }
    return (n, r) => ce((i(), C(ie(e.as), null, {
      default: p(() => [
        f(n.$slots, "default", { isHovered: t.value })
      ]),
      _: 3
    })), [
      [o(Ne), s]
    ]);
  }
}, Vt = /* @__PURE__ */ a("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Ft = { class: "flex items-center justify-center min-h-full p-4 text-center sm:p-0" }, Tt = {
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
    const s = e, { open: n } = W(s), r = j(s.open);
    function d() {
      t("close");
    }
    return ne(n, r, { direction: "ltr" }), (x, B) => (i(), C(o(ke), {
      as: "template",
      show: r.value
    }, {
      default: p(() => [
        v(o(Ce), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: p(() => [
            v(o(le), {
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
            a("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: B[0] || (B[0] = re((...g) => x.submit && x.submit(...g), ["prevent"]))
            }, [
              a("div", Ft, [
                v(o(le), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: p(() => [
                    v(o(Be), {
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
                          v(o(ee), { class: "h-5 w-5 text-gray-800 hover:text-black" })
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
    const s = e, { open: n } = W(s), r = j(s.open), d = te("FormHTMLElement");
    async function x() {
      await (s.onSubmit ?? ((q) => t("submit", { form: u(q), visible: r })))({ form: u(d), visible: r }), s.hideOnSubmit && b(r, !1);
    }
    async function B() {
      await (s.onReset ?? ((q) => t("reset", { form: u(q), visible: r })))({ form: u(d), visible: r }), s.hideOnReset && b(r, !1);
    }
    return ne(n, r, { direction: "ltr" }), (g, q) => (i(), C(Tt, { open: r.value }, {
      default: p(() => [
        a("form", {
          ref_key: "FormHTMLElement",
          ref: d,
          onSubmit: re(x, ["prevent"]),
          onReset: re(B, ["prevent"])
        }, [
          a("div", null, [
            f(g.$slots, "default", { form: o(d) })
          ]),
          f(g.$slots, "footer", {}, () => [
            a("footer", Ot, [
              f(g.$slots, "buttons", {}, () => [
                a("button", Lt, H(e.submitButtonText), 1),
                a("button", jt, H(e.resetButtonText), 1)
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
const Mn = /* @__PURE__ */ Se(Ht, [["render", Pt]]), An = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (t, s) => (i(), C(o(Ke), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: p(() => [
        f(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Kt = /* @__PURE__ */ a("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Dt = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Et = { class: "relative" }, Ut = /* @__PURE__ */ a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true",
  class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
}, [
  /* @__PURE__ */ a("path", {
    "fill-rule": "evenodd",
    d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
    "clip-rule": "evenodd"
  })
], -1), Nt = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, Gt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Qt = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, Wt = { class: "mt-2 text-sm text-gray-800" }, Jt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Xt = /* @__PURE__ */ a("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), Yt = /* @__PURE__ */ a("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), Vn = {
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
    const s = e, { open: n, query: r } = W(s), d = j(u(r)), x = Oe(d, s.delayBetweenRequests), B = j(!0), g = j(!1);
    ne(n, B, { direction: "ltr" }), ne(r, d, { direction: "ltr" });
    const q = async (y, z, _) => y === "" && s.prompt ? [] : z.filter((R) => _(R).toLowerCase().includes(y.toLowerCase())), w = s.filter ?? q, T = async function(y, z, _) {
      b(g, !0);
      try {
        return await w(y, z, _);
      } finally {
        b(g, !1);
      }
    }, I = Le(() => T(u(x), s.items, M), s.items), M = s.stringify ?? ((y) => y == null ? void 0 : y.name), S = s.groupGetter ?? (() => {
    }), O = V(
      () => I.value.reduce((y, z) => {
        let _ = S(z);
        return { ...y, [_]: [...y[_] || [], z] };
      }, {})
    );
    function D(y) {
      b(d, y);
    }
    F(x, (y) => t("update:query", y));
    function K(y) {
      t("pick", y), E();
    }
    function E() {
      t("close"), t("update:open", !1), b(B, !1);
    }
    return (y, z) => (i(), C(o(ke), {
      show: B.value,
      as: "template",
      onAfterLeave: z[2] || (z[2] = (_) => d.value = ""),
      appear: ""
    }, {
      default: p(() => [
        v(o(Ce), {
          as: "div",
          class: "relative z-10",
          onClose: z[1] || (z[1] = (_) => E())
        }, {
          default: p(() => [
            v(o(le), {
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
            a("div", Dt, [
              v(o(le), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: p(() => [
                  v(o(Be), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: p(() => [
                      v(o(pe), { "onUpdate:modelValue": K }, {
                        default: p(() => [
                          a("div", Et, [
                            f(y.$slots, "search-icon", {}, () => [
                              Ut
                            ]),
                            f(y.$slots, "input", P(N({ query: d.value })), () => [
                              v(o(ye), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                style: { "box-shadow": "none" },
                                placeholder: e.placeholder,
                                onChange: z[0] || (z[0] = (_) => D(_.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && g.value ? f(y.$slots, "loader", P(G({ key: 0 }, { query: d.value, isLoading: g.value })), () => [
                            a("div", Nt, [
                              f(y.$slots, "loader-inner", {}, () => [
                                de("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && d.value === "" ? f(y.$slots, "prompt", P(G({ key: 1 }, { query: d.value, isLoading: g.value })), () => [
                            a("div", Gt, [
                              f(y.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || o(I).length > 0 ? (i(), C(o(me), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: p(() => [
                              (i(!0), m(X, null, Z(Object.entries(O.value), ([_, R]) => (i(), m("li", { key: _ }, [
                                f(y.$slots, "group", P(N({ group: _, items: R, query: d.value })), () => [
                                  _ !== "undefined" ? (i(), m("h2", Qt, H(_), 1)) : L("", !0)
                                ]),
                                a("ul", Wt, [
                                  (i(!0), m(X, null, Z(R, (U, J) => (i(), C(o(ge), {
                                    key: U.id,
                                    value: U,
                                    as: "template"
                                  }, {
                                    default: p(({ active: Q }) => [
                                      f(y.$slots, "default", P(N({ group: _, item: U, items: R, index: J, active: Q, stringify: o(M), query: d.value })), () => [
                                        a("li", {
                                          class: k(["cursor-pointer select-none px-4 py-2", Q && "bg-indigo-600 text-white"])
                                        }, H(o(M)(U)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : d.value !== "" && o(I).length === 0 ? f(y.$slots, "empty-state", P(G({ key: 3 }, { query: d.value, isLoading: g.value })), () => [
                            a("div", Jt, [
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
}, Zt = { class: "sr-only" }, en = /* @__PURE__ */ a("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1), tn = [
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
    const t = e, s = V(() => t.iconClasses ?? "h-5 w-5");
    return (n, r) => (i(), C(o(De), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: p(() => [
        v(o(Ee), { class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" }, {
          default: p(() => [
            a("span", Zt, H(e.srOnly), 1),
            (i(), m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              class: k(s.value)
            }, tn, 2))
          ]),
          _: 1
        }),
        v(Ie, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: p(() => [
            v(o(Ue), { class: "mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" }, {
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
    const t = e, s = V(() => t.condition === !0), n = V(() => t.condition === !1), r = j(!1), d = () => r.value = !r.value, x = j(), B = () => {
      clearInterval(u(x)), u(s) && b(x, setInterval(d, t.interval));
    }, g = () => {
      clearInterval(u(x)), b(r, !1);
    };
    return he(s, B, { immediate: !0 }), he(n, g, { immediate: !0 }), (q, w) => (i(), m("span", {
      class: k([r.value ? "invisible" : "visible"])
    }, [
      f(q.$slots, "default")
    ], 2));
  }
}, nn = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = e.charCodeAt(n) + ((t << 5) - t);
  let s = "#";
  for (let n = 0; n < 3; n++) {
    let r = t >> n * 8 & 255;
    s += ("00" + r.toString(16)).substr(-2);
  }
  return s;
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
    const t = e, { id: s } = W(t), n = V(() => nn(Ge(s.value.toLowerCase())));
    return (r, d) => (i(), m("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Me({ backgroundColor: n.value })
    }, [
      a("span", sn, H(e.text), 1)
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
    return (t, s) => (i(), C(ie(e.as), { class: "relative" }, {
      default: p(() => [
        a("div", on, [
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
    return (t, s) => e.condition ? (i(), C(Ae, G({
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
    return (s, n) => f(s.$slots, "default", { id: o(t) });
  }
}, Hn = {
  __name: "WhenMounted",
  setup(e) {
    const t = je();
    return (s, n) => o(t) ? f(s.$slots, "default", { key: 0 }) : L("", !0);
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
}, ln = () => {
  const e = ue({});
  for (const t in se) {
    const s = se[t];
    e[t] = fe(`(min-width: ${s}px)`);
  }
  return V(() => {
    const t = Object.entries(e).filter(([s, n]) => n);
    return Object.keys(Object.fromEntries(t))[t.length - 1];
  });
}, an = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, rn = { class: "mx-auto text-5xl uppercase" }, Kn = {
  __name: "DebugBreakpoint",
  setup(e) {
    const t = He(!1, 200), s = ln();
    return F(s, () => b(t, !0)), (n, r) => o(t) ? (i(), m("div", an, [
      a("div", rn, H(o(s)), 1)
    ])) : L("", !0);
  }
}, un = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, dn = /* @__PURE__ */ a("div", null, "Used", -1), cn = { class: "text-right" }, fn = /* @__PURE__ */ a("div", null, "Allocated", -1), pn = { class: "text-right" }, yn = /* @__PURE__ */ a("div", null, "Limit", -1), mn = { class: "text-right" }, gn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, Dn = {
  __name: "DebugMemory",
  setup(e) {
    const t = (r) => `${(r / 1024 / 1024).toFixed(2)} MB`, { isSupported: s, memory: n } = Re();
    return (r, d) => o(s) && o(n) ? (i(), m("div", un, [
      o(n) ? (i(), m(X, { key: 0 }, [
        dn,
        a("div", cn, H(t(o(n).usedJSHeapSize)), 1),
        fn,
        a("div", pn, H(t(o(n).totalJSHeapSize)), 1),
        yn,
        a("div", mn, H(t(o(n).jsHeapSizeLimit)), 1)
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
  ln as useCurrentBreakpoint
};
