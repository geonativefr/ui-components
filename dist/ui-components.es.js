import { openBlock as l, createElementBlock as y, createElementVNode as o, normalizeClass as k, createBlock as C, unref as s, renderSlot as m, createVNode as _, createCommentVNode as j, ref as H, computed as I, resolveDynamicComponent as ue, withCtx as g, toDisplayString as R, toRefs as W, reactive as de, watch as L, onMounted as re, nextTick as Y, resolveComponent as Le, withKeys as ve, createTextVNode as ce, Fragment as X, renderList as ee, mergeProps as K, withDirectives as fe, vShow as xe, normalizeProps as Q, guardReactiveProps as oe, useAttrs as Ve, withModifiers as ie, Transition as Ae, normalizeStyle as Ie, Teleport as Fe } from "vue";
import { get as r, templateRef as te, onClickOutside as we, set as v, syncRef as ne, asyncComputed as _e, refThrottled as Te, whenever as be, useMounted as ze, useMediaQuery as pe, refAutoReset as Oe, useMemory as je } from "@vueuse/core";
import { Combobox as me, ComboboxLabel as $e, ComboboxInput as ye, ComboboxOptions as ge, ComboboxOption as he, Switch as He, TransitionRoot as ke, Dialog as Be, TransitionChild as le, DialogPanel as Ce, DialogTitle as Re, Menu as Pe, MenuButton as Ke, MenuItems as Ze } from "@headlessui/vue";
import { vElementHover as De } from "@vueuse/components";
import Ee from "md5";
import { v4 as Ue } from "uuid";
function Ne(e, n) {
  return l(), y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    o("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Se(e, n) {
  return l(), y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    o("path", {
      "fill-rule": "evenodd",
      d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function qe(e, n) {
  return l(), y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    o("path", {
      "fill-rule": "evenodd",
      d: "M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ge(e, n) {
  return l(), y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    o("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Qe(e, n) {
  return l(), y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    o("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function We(e, n) {
  return l(), y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    o("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ae(e, n) {
  return l(), y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    o("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Je = { class: "flex" }, Xe = {
  class: /* @__PURE__ */ k(["flex-shrink-0"])
}, Ye = { class: "ml-3" }, et = ["innerHTML"], tt = {
  key: 0,
  class: "ml-auto pl-3"
}, nt = { class: "-mx-1.5 -my-1.5" }, st = /* @__PURE__ */ o("span", { class: "sr-only" }, "Dismiss", -1), _n = {
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
    const a = e, t = (i) => i === a.type;
    return (i, c) => (l(), y("div", {
      class: k(["rounded-md p-4", { "bg-gray-50": t("default"), "bg-green-50": t("success"), "bg-red-50": t("danger"), "bg-yellow-50": t("warning"), "bg-primary-50": t("info") }])
    }, [
      o("div", Je, [
        o("div", Xe, [
          t("success") ? (l(), C(s(Ne), {
            key: 0,
            class: k(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : t("warning") ? (l(), C(s(Ge), {
            key: 1,
            class: k(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : t("danger") ? (l(), C(s(We), {
            key: 2,
            class: k(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (l(), C(s(Qe), {
            key: 3,
            class: k(["h-5 w-5", { "text-gray-400": t("default"), "text-primary-400": t("info") }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]))
        ]),
        o("div", Ye, [
          m(i.$slots, "default", {}, () => [
            o("p", {
              class: "font-medium text-gray-800",
              innerHTML: e.message
            }, null, 8, et)
          ])
        ]),
        e.dismissable ? (l(), y("div", tt, [
          o("div", nt, [
            o("button", {
              type: "button",
              class: k(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": t("default"), "bg-green-50": t("success"), "bg-red-50": t("danger"), "bg-yellow-50": t("warning"), "bg-primary-50": t("info") }, { "text-gray-400": t("default"), "text-green-400": t("success"), "text-red-400": t("danger"), "text-yellow-400": t("warning"), "text-primary-400": t("info") }]),
              onClick: c[0] || (c[0] = (f) => i.$emit("close"))
            }, [
              st,
              _(s(ae), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : j("", !0)
      ])
    ], 2));
  }
}, Me = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, i] of n)
    a[t] = i;
  return a;
}, ot = {}, lt = {
  class: "animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, at = /* @__PURE__ */ o("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), rt = /* @__PURE__ */ o("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), it = [
  at,
  rt
];
function ut(e, n) {
  return l(), y("svg", lt, it);
}
const dt = /* @__PURE__ */ Me(ot, [["render", ut]]), ct = { key: 2 }, $n = {
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
    const n = e, a = H(["group", "disabled:opacity-80", "disabled:cursor-default"]), t = I(() => n.noFlex ? [] : ["inline-flex", "items-center", "justify-center", "gap-2"]), i = I(() => n.noPadding ? [] : ["py-2", "px-4"]), c = I(() => n.noBorder ? [] : ["border"]), f = I(() => n.noShadow ? [] : ["shadow-sm"]), T = I(() => n.noRound ? [] : ["rounded-md"]), S = I(() => n.noRing ? [] : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), b = I(() => [n.iconRight ? "-mr-1 order-last" : "-ml-1", "h-4 w-4 empty:hidden"]), F = I(() => {
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
        for (const O of Object.keys(x)) {
          const z = x[O];
          for (const U in z)
            z[U] = z[U].replaceAll("enabled:", "");
        }
      return x[n.theme] ?? x.default;
    }), B = I(() => [
      ...r(a),
      ...r(t),
      ...r(i),
      ...r(c),
      ...r(f),
      ...r(T),
      ...r(S),
      ...r(F)
    ]), V = I(() => n.loadingText ?? "Please wait..."), q = I(() => n.as === "button" ? n.type ?? "button" : void 0);
    return (x, O) => (l(), C(ue(e.as), {
      disabled: e.disabled || e.loading,
      type: q.value,
      class: k(B.value)
    }, {
      default: g(() => [
        e.loading ? (l(), C(dt, {
          key: 0,
          class: k(b.value)
        }, null, 8, ["class"])) : (l(), y("span", {
          key: 1,
          class: k(b.value)
        }, [
          m(x.$slots, "icon")
        ], 2)),
        e.loading ? (l(), y("span", ct, R(V.value), 1)) : m(x.$slots, "default", { key: 3 })
      ]),
      _: 3
    }, 8, ["disabled", "type", "class"]));
  }
}, ft = { class: "relative" }, pt = { class: "inline-block w-full rounded-md shadow-sm" }, mt = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-primary-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500 sm:text-sm sm:leading-5" }, yt = { class: "block flex flex-wrap gap-2" }, gt = { class: "flex items-center gap-1 rounded bg-primary-600 text-white px-2 py-0.5" }, ht = ["onClick"], bt = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, vt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, xt = {
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
    const a = n, t = e, i = H(!1), c = () => v(i, !r(i)), { items: f, excludeSelected: T, modelValue: S, query: b } = W(t), F = t.stringify ?? ((d) => (d == null ? void 0 : d.name) ?? d ?? ""), B = t.uniqueKey ?? ((d) => (d == null ? void 0 : d.id) ?? d), V = de([]), q = H(r(b)), x = H([]), O = I(() => V.filter((d) => r(x).map(B).includes(B(d)))), z = t.filter ?? (async (d, M) => r(M).filter((u) => F(u).toLowerCase().includes(d.toLowerCase()))), U = I(() => r(f).filter((d) => !r(x).map(B).includes(B(d)))), N = H(r(f)), Z = te("input"), h = () => v(i, !0), A = () => v(i, !1), $ = () => r(Z).$el.focus();
    function P(d) {
      d.value === "" && r(q) !== "" && (d.value = r(q));
    }
    async function D() {
      v(x, []), v(q, ""), await Y(), $(), a("clear");
    }
    async function J(d) {
      v(x, r(x).filter((M) => B(M) !== B(d))), await Y(), $();
    }
    const G = te("container");
    return we(G, () => A()), L(f, (d) => {
      d.forEach((M) => {
        V.findIndex((u) => B(u) === B(M)) === -1 && V.push(M);
      });
    }, { immediate: !0 }), L(S, (d) => v(x, d), { immediate: !0 }), L(x, (d) => a("update:modelValue", d)), L(x, () => v(q, "")), L(q, (d) => a("update:query", d)), L(q, async (d) => {
      const M = await z(r(d), r(T) ? r(U) : r(f));
      v(N, r(M) ?? []);
    }), L(b, (d) => v(q, d != null ? `${d}` : "")), ne(f, N, { direction: "ltr" }), L(q, (d) => r(Z).$el.value = d), L(x, () => t.autoHide && A()), L(q, () => h()), re(() => Y().then(() => r(Z).$el.value = r(q))), re(() => t.autofocus && $()), (d, M) => {
      const u = Le("XIcon");
      return l(), y("div", {
        ref_key: "container",
        ref: G,
        onKeydown: ve(A, ["esc"]),
        onKeyup: M[4] || (M[4] = ({ code: p }) => ["ArrowUp", "ArrowDown"].includes(p) && h())
      }, [
        _(s(me), {
          as: "div",
          modelValue: x.value,
          "onUpdate:modelValue": M[3] || (M[3] = (p) => x.value = p),
          multiple: ""
        }, {
          default: g(() => [
            m(d.$slots, "label", {}, () => [
              _(s($e), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
                default: g(() => [
                  ce(R(e.label), 1)
                ]),
                _: 1
              })
            ]),
            o("div", ft, [
              o("span", pt, [
                o("div", mt, [
                  o("span", yt, [
                    x.value.length === 0 ? (l(), y("span", {
                      key: 0,
                      class: "p-0.5 cursor-pointer empty:hidden",
                      onClick: $
                    }, [
                      m(d.$slots, "empty-state")
                    ])) : j("", !0),
                    e.hideTags ? j("", !0) : (l(!0), y(X, { key: 1 }, ee(O.value, (p) => (l(), y("span", {
                      key: s(B)(p)
                    }, [
                      m(d.$slots, "selected-items", K({ ref_for: !0 }, { item: p, stringify: s(F), remove: J }), () => [
                        o("span", gt, [
                          o("span", null, R(s(F)(p)), 1),
                          o("button", {
                            role: "button",
                            onClick: (w) => J(p)
                          }, [
                            _(u, { class: "h-4 w-4" })
                          ], 8, ht)
                        ])
                      ])
                    ]))), 128)),
                    _(s(ye), K({
                      ref_key: "input",
                      ref: Z,
                      autocomplete: "off"
                    }, e.inputAttrs, {
                      class: "reset border-none p-0 focus:ring-0 grow",
                      onFocus: h,
                      onBlur: M[0] || (M[0] = (p) => P(p.target)),
                      onChange: M[1] || (M[1] = (p) => q.value = p.target.value)
                    }), null, 16)
                  ]),
                  o("div", bt, [
                    e.clearable ? (l(), y("button", {
                      key: 0,
                      type: "button",
                      onClick: D
                    }, [
                      x.value.length !== 0 ? (l(), C(s(ae), {
                        key: 0,
                        class: "h-5 w-5 text-gray-300",
                        "aria-hidden": "true"
                      })) : j("", !0)
                    ])) : j("", !0),
                    o("button", {
                      type: "button",
                      onClick: c
                    }, [
                      _(s(qe), {
                        class: "h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                      })
                    ])
                  ])
                ])
              ]),
              fe(o("div", vt, [
                N.value.length > 0 ? (l(), C(s(ge), {
                  key: 0,
                  static: !e.autoHide,
                  class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
                }, {
                  default: g(() => [
                    (l(!0), y(X, null, ee(N.value, (p) => (l(), C(s(he), {
                      key: s(B)(p),
                      value: s(B)(p),
                      disabled: e.disabled.includes(s(B)(p)),
                      onClick: M[2] || (M[2] = () => e.autoHide && A())
                    }, {
                      default: g(({ active: w, selected: E }) => [
                        m(d.$slots, "default", K({ ref_for: !0 }, { item: p, active: w, selected: E, stringify: s(F) }), () => [
                          o("li", {
                            class: k(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", w ? "bg-primary-600 text-white" : "text-gray-900"])
                          }, [
                            o("span", {
                              class: k(["block", { truncate: !w, "font-semibold": E, "font-normal": !E }])
                            }, R(s(F)(p)), 3),
                            E ? (l(), y("span", {
                              key: 0,
                              class: k(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": w, "text-primary-600": !w }])
                            }, [
                              _(s(Se), { class: "h-5 w-5" })
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
                [xe, i.value]
              ])
            ])
          ]),
          _: 3
        }, 8, ["modelValue"])
      ], 544);
    };
  }
}, wt = { class: "relative" }, _t = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, $t = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, kt = {
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
    const a = n, t = e, i = H(!1), c = () => v(i, !r(i)), { items: f, excludeSelected: T, modelValue: S, query: b } = W(t), F = t.stringify ?? ((u) => (u == null ? void 0 : u.name) ?? u ?? void 0), B = (u) => {
      try {
        const p = F(u);
        if (p == null)
          throw Error("Cannot stringify nullish value");
        return `${p}`;
      } catch (p) {
        return console.debug("Unable to stringify item", u, p), "";
      }
    }, V = t.uniqueKey ?? ((u) => (u == null ? void 0 : u.id) ?? u), q = de([]);
    function x(u) {
      return q.find((p) => V(p) === u) || null;
    }
    const O = H(r(b)), z = H(), U = t.filter ?? (async (u, p) => r(p).filter((w) => B(w).toLowerCase().includes(u.toLowerCase()))), N = I(() => r(f).filter((u) => V(u) !== V(r(S)))), Z = _e(() => U(r(O), r(T) ? r(N) : r(f)), []), h = (u) => u != null ? B(u) : r(O), A = te("input"), $ = () => v(i, !0), P = () => v(i, !1), D = () => r(A).$el.focus();
    function J(u) {
      u.value === "" && r(O) !== "" && (u.value = r(O));
    }
    async function G() {
      v(z, null), v(O, ""), await Y(), D(), a("clear");
    }
    const d = (u) => r(z) != null && V(u) === V(r(z)), M = te("container");
    return we(M, () => P()), L(f, (u) => {
      u.forEach((p) => {
        q.findIndex((w) => V(w) === V(p)) === -1 && q.push(p);
      });
    }, { immediate: !0 }), L(q, async () => {
      r(z) == null && t.modelValue != null && (v(z, x(V(t.modelValue))), await Y(), P());
    }, { immediate: !0 }), L(S, (u) => v(z, x(u)), { immediate: !0 }), L(z, (u) => {
      V(u) !== V(t.modelValue) && a("update:modelValue", V(u));
    }), L(z, (u) => {
      u == null ? v(O, "") : v(O, B(u));
    }), L(O, (u) => a("update:query", u)), L(b, (u) => v(O, u != null ? `${u}` : "")), L(z, () => t.autoHide && P()), L(O, () => $()), re(() => t.autofocus && D()), (u, p) => (l(), y("div", {
      ref_key: "container",
      ref: M,
      onKeydown: ve(P, ["esc"]),
      onKeyup: p[4] || (p[4] = ({ code: w }) => ["ArrowUp", "ArrowDown"].includes(w) && $())
    }, [
      _(s(me), {
        as: "div",
        modelValue: z.value,
        "onUpdate:modelValue": p[3] || (p[3] = (w) => z.value = w)
      }, {
        default: g(() => [
          m(u.$slots, "label", {}, () => [
            _(s($e), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: g(() => [
                ce(R(e.label), 1)
              ]),
              _: 1
            })
          ]),
          o("div", wt, [
            _(s(ye), K({
              ref_key: "input",
              ref: A,
              "display-value": h,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: $,
              onBlur: p[0] || (p[0] = (w) => J(w.target)),
              onChange: p[1] || (p[1] = (w) => O.value = w.target.value)
            }), null, 16),
            o("div", _t, [
              e.clearable ? (l(), y("button", {
                key: 0,
                type: "button",
                onClick: G
              }, [
                s(S) != null ? (l(), C(s(ae), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : j("", !0)
              ])) : j("", !0),
              o("button", {
                type: "button",
                onClick: c
              }, [
                _(s(qe), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            fe(o("div", $t, [
              _(s(ge), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: g(() => [
                  (l(!0), y(X, null, ee(s(Z), (w) => (l(), C(s(he), {
                    key: s(V)(w),
                    value: w,
                    disabled: e.disabled.includes(s(V)(w)),
                    onClick: p[2] || (p[2] = () => e.autoHide && P())
                  }, {
                    default: g(({ active: E }) => [
                      m(u.$slots, "default", K({ ref_for: !0 }, { item: w, active: E, selected: d(w), stringify: B }), () => [
                        o("li", {
                          class: k(["relative cursor-pointer select-none py-2 pl-3 pr-9", E ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          o("span", {
                            class: k(["block", !E && "truncate", d(w) && "font-semibold"])
                          }, R(B(w)), 3),
                          d(w) ? (l(), y("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", E ? "text-white" : "text-indigo-600"])
                          }, [
                            _(s(Se), {
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
              [xe, i.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 544));
  }
}, kn = {
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
    return (n, a) => Array.isArray(e.modelValue) ? (l(), C(xt, K({
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
      label: g(() => [
        m(n.$slots, "label")
      ]),
      "selected-items": g(({ item: t, stringify: i, remove: c }) => [
        m(n.$slots, "selected-items", Q(oe({ item: t, stringify: i, remove: c })))
      ]),
      default: g(({ item: t, active: i, selected: c, stringify: f }) => [
        m(n.$slots, "default", Q(oe({ item: t, active: i, selected: c, stringify: f })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (l(), C(kt, K({
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
      label: g(() => [
        m(n.$slots, "label")
      ]),
      default: g(({ item: t, active: i, selected: c, stringify: f }) => [
        m(n.$slots, "default", Q(oe({ item: t, active: i, selected: c, stringify: f })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, Bt = /* @__PURE__ */ o("span", { class: "sr-only" }, "Use setting", -1), Ct = {
  key: 0,
  class: "h-3 w-3 text-gray-400",
  fill: "none",
  viewBox: "0 0 12 12"
}, St = /* @__PURE__ */ o("path", {
  d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), qt = [
  St
], Mt = {
  key: 0,
  class: "h-3 w-3 text-green-600",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, Lt = /* @__PURE__ */ o("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), Vt = [
  Lt
], Bn = {
  __name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const a = e, t = n, { modelValue: i } = W(a), c = H(s(i));
    function f(b) {
      c.value = b, t("update:modelValue", b), t("change", b);
    }
    L(i, () => c.value = i.value);
    const T = Ve(), S = I(() => Object.keys(s(T)).includes("disabled") && s(T).disabled !== !1);
    return (b, F) => (l(), C(s(He), {
      modelValue: c.value,
      "onUpdate:modelValue": [
        F[0] || (F[0] = (B) => c.value = B),
        f
      ],
      class: k([c.value && !S.value ? "bg-green-600" : "bg-gray-200", S.value ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: g(() => [
        Bt,
        o("span", {
          class: k([c.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          o("span", {
            class: k([c.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            S.value ? j("", !0) : (l(), y("svg", Ct, qt))
          ], 2),
          o("span", {
            class: k([c.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            S.value ? j("", !0) : (l(), y("svg", Mt, Vt))
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}, Cn = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    const n = H(!1);
    function a(t) {
      n.value = t;
    }
    return (t, i) => fe((l(), C(ue(e.as), null, {
      default: g(() => [
        m(t.$slots, "default", { isHovered: n.value })
      ]),
      _: 3
    })), [
      [s(De), a]
    ]);
  }
}, At = /* @__PURE__ */ o("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), It = { class: "flex items-center justify-center min-h-full p-4 text-center sm:p-0" }, Ft = {
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
    const a = n, t = e, { open: i } = W(t), c = H(t.open);
    function f() {
      a("close");
    }
    return ne(i, c, { direction: "ltr" }), (T, S) => (l(), C(s(ke), {
      as: "template",
      show: c.value
    }, {
      default: g(() => [
        _(s(Be), {
          as: "div",
          class: "relative z-10",
          onClose: f
        }, {
          default: g(() => [
            _(s(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: g(() => [
                At
              ]),
              _: 1
            }),
            o("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: S[0] || (S[0] = ie((...b) => T.submit && T.submit(...b), ["prevent"]))
            }, [
              o("div", It, [
                _(s(le), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: g(() => [
                    _(s(Ce), {
                      class: k([
                        e.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "max-w-lg w-full"
                      ])
                    }, {
                      default: g(() => [
                        e.hideCloseIcon ? j("", !0) : (l(), y("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: f
                        }, [
                          _(s(ae), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        m(T.$slots, "default")
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
}, Tt = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, zt = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, Ot = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, Sn = {
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
    const a = n, t = e, { open: i } = W(t), c = H(t.open), f = te("FormHTMLElement");
    async function T() {
      await (t.onSubmit ?? ((F) => a("submit", { form: r(F), visible: c })))({ form: r(f), visible: c }), t.hideOnSubmit && v(c, !1);
    }
    async function S() {
      await (t.onReset ?? ((F) => a("reset", { form: r(F), visible: c })))({ form: r(f), visible: c }), t.hideOnReset && v(c, !1);
    }
    return ne(i, c, { direction: "ltr" }), (b, F) => (l(), C(Ft, { open: c.value }, {
      default: g(() => [
        o("form", {
          ref_key: "FormHTMLElement",
          ref: f,
          onSubmit: ie(T, ["prevent"]),
          onReset: ie(S, ["prevent"])
        }, [
          o("div", null, [
            m(b.$slots, "default", { form: s(f) })
          ]),
          m(b.$slots, "footer", {}, () => [
            o("footer", Tt, [
              m(b.$slots, "buttons", {}, () => [
                o("button", zt, R(e.submitButtonText), 1),
                o("button", Ot, R(e.resetButtonText), 1)
              ])
            ])
          ])
        ], 544)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, jt = {}, Ht = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Rt(e, n) {
  return l(), y("div", Ht, [
    m(e.$slots, "default")
  ]);
}
const qn = /* @__PURE__ */ Me(jt, [["render", Rt]]), Mn = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (n, a) => (l(), C(s(Re), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: g(() => [
        m(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Pt = /* @__PURE__ */ o("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Kt = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Zt = { class: "relative" }, Dt = /* @__PURE__ */ o("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true",
  class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
}, [
  /* @__PURE__ */ o("path", {
    "fill-rule": "evenodd",
    d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
    "clip-rule": "evenodd"
  })
], -1), Et = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, Ut = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Nt = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, Gt = { class: "mt-2 text-sm text-gray-800" }, Qt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Wt = /* @__PURE__ */ o("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), Jt = /* @__PURE__ */ o("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), Ln = {
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
    const a = n, t = e, { open: i, query: c } = W(t), f = H(r(c)), T = Te(f, t.delayBetweenRequests), S = H(!0), b = H(!1);
    ne(i, S, { direction: "ltr" }), ne(c, f, { direction: "ltr" });
    const F = async (h, A, $) => h === "" && t.prompt ? [] : A.filter((P) => $(P).toLowerCase().includes(h.toLowerCase())), B = t.filter ?? F, V = async function(h, A, $) {
      v(b, !0);
      try {
        return await B(h, A, $);
      } finally {
        v(b, !1);
      }
    }, q = _e(() => V(r(T), t.items, x), t.items), x = t.stringify ?? ((h) => h == null ? void 0 : h.name), O = t.groupGetter ?? (() => {
    }), z = I(
      () => q.value.reduce((h, A) => {
        let $ = O(A);
        return { ...h, [$]: [...h[$] || [], A] };
      }, {})
    );
    function U(h) {
      v(f, h);
    }
    L(T, (h) => a("update:query", h));
    function N(h) {
      a("pick", h), Z();
    }
    function Z() {
      a("close"), a("update:open", !1), v(S, !1);
    }
    return (h, A) => (l(), C(s(ke), {
      show: S.value,
      as: "template",
      onAfterLeave: A[2] || (A[2] = ($) => f.value = ""),
      appear: ""
    }, {
      default: g(() => [
        _(s(Be), {
          as: "div",
          class: "relative z-10",
          onClose: A[1] || (A[1] = ($) => Z())
        }, {
          default: g(() => [
            _(s(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: g(() => [
                Pt
              ]),
              _: 1
            }),
            o("div", Kt, [
              _(s(le), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: g(() => [
                  _(s(Ce), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: g(() => [
                      _(s(me), { "onUpdate:modelValue": N }, {
                        default: g(() => [
                          o("div", Zt, [
                            m(h.$slots, "search-icon", {}, () => [
                              Dt
                            ]),
                            m(h.$slots, "input", Q(oe({ query: f.value })), () => [
                              _(s(ye), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                style: { "box-shadow": "none" },
                                placeholder: e.placeholder,
                                onChange: A[0] || (A[0] = ($) => U($.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && b.value ? m(h.$slots, "loader", Q(K({ key: 0 }, { query: f.value, isLoading: b.value })), () => [
                            o("div", Et, [
                              m(h.$slots, "loader-inner", {}, () => [
                                ce("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && f.value === "" ? m(h.$slots, "prompt", Q(K({ key: 1 }, { query: f.value, isLoading: b.value })), () => [
                            o("div", Ut, [
                              m(h.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || s(q).length > 0 ? (l(), C(s(ge), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: g(() => [
                              (l(!0), y(X, null, ee(Object.entries(z.value), ([$, P]) => (l(), y("li", { key: $ }, [
                                m(h.$slots, "group", K({ ref_for: !0 }, { group: $, items: P, query: f.value }), () => [
                                  $ !== "undefined" ? (l(), y("h2", Nt, R($), 1)) : j("", !0)
                                ]),
                                o("ul", Gt, [
                                  (l(!0), y(X, null, ee(P, (D, J) => (l(), C(s(he), {
                                    key: D.id,
                                    value: D,
                                    as: "template"
                                  }, {
                                    default: g(({ active: G }) => [
                                      m(h.$slots, "default", K({ ref_for: !0 }, { group: $, item: D, items: P, index: J, active: G, stringify: s(x), query: f.value }), () => [
                                        o("li", {
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
                          })) : f.value !== "" && s(q).length === 0 ? m(h.$slots, "empty-state", Q(K({ key: 3 }, { query: f.value, isLoading: b.value })), () => [
                            o("div", Qt, [
                              m(h.$slots, "empty-state-inner", {}, () => [
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
}, Xt = { class: "sr-only" }, Yt = /* @__PURE__ */ o("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1), en = [
  Yt
], Vn = {
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
    }
  },
  setup(e) {
    const n = e, a = I(() => n.iconClasses ?? "h-5 w-5");
    return (t, i) => (l(), C(s(Pe), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: g(() => [
        _(s(Ke), { class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" }, {
          default: g(() => [
            o("span", Xt, R(e.srOnly), 1),
            (l(), y("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              class: k(a.value)
            }, en, 2))
          ]),
          _: 1
        }),
        _(Ae, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: g(() => [
            _(s(Ze), {
              class: k([
                e.fromBottom ? "bottom-0" : "top-0",
                e.fromLeft ? "left-7" : "right-7",
                "mx-3 origin-top-right absolute w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
              ])
            }, {
              default: g(() => [
                m(t.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}, An = {
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
    const n = e, a = I(() => n.condition === !0), t = I(() => n.condition === !1), i = H(!1), c = () => i.value = !i.value, f = H(), T = () => {
      clearInterval(r(f)), r(a) && v(f, setInterval(c, n.interval));
    }, S = () => {
      clearInterval(r(f)), v(i, !1);
    };
    return be(a, T, { immediate: !0 }), be(t, S, { immediate: !0 }), (b, F) => (l(), y("span", {
      class: k([i.value ? "invisible" : "visible"])
    }, [
      m(b.$slots, "default")
    ], 2));
  }
}, tn = (e) => {
  let n = 0;
  for (let t = 0; t < e.length; t++)
    n = e.charCodeAt(t) + ((n << 5) - n);
  let a = "#";
  for (let t = 0; t < 3; t++) {
    let i = n >> t * 8 & 255;
    a += ("00" + i.toString(16)).substr(-2);
  }
  return a;
}, nn = { class: "text-xs font-medium leading-none text-white" }, In = {
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
    const n = e, { id: a } = W(n), t = I(() => tn(Ee(a.value.toLowerCase())));
    return (i, c) => (l(), y("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Ie({ backgroundColor: t.value })
    }, [
      o("span", nn, R(e.text), 1)
    ], 4));
  }
}, sn = { class: "absolute inset-0 overflow-auto" }, Fn = {
  __name: "Scrollable",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    return (n, a) => (l(), C(ue(e.as), { class: "relative" }, {
      default: g(() => [
        o("div", sn, [
          m(n.$slots, "default")
        ])
      ]),
      _: 3
    }));
  }
}, Tn = {
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
    return (n, a) => e.condition ? (l(), C(Fe, K({
      key: 0,
      to: e.to
    }, n.$attrs), [
      m(n.$slots, "default")
    ], 16, ["to"])) : m(n.$slots, "default", { key: 1 });
  }
}, zn = {
  __name: "UniqueId",
  setup(e) {
    const n = Ue();
    return (a, t) => m(a.$slots, "default", { id: s(n) });
  }
}, On = {
  __name: "WhenMounted",
  setup(e) {
    const n = ze();
    return (a, t) => s(n) ? m(a.$slots, "default", { key: 0 }) : j("", !0);
  }
}, se = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, jn = (e) => {
  const n = se[e] || 0;
  return pe(`(min-width: ${n}px)`);
}, Hn = (e) => {
  const n = se[e] || se.sm;
  return pe(`(max-width: ${n - 1}px)`);
}, on = () => {
  const e = de({});
  for (const n in se) {
    const a = se[n];
    e[n] = pe(`(min-width: ${a}px)`);
  }
  return I(() => {
    const n = Object.entries(e).filter(([a, t]) => t);
    return Object.keys(Object.fromEntries(n))[n.length - 1];
  });
}, ln = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, an = { class: "mx-auto text-5xl uppercase" }, Rn = {
  __name: "DebugBreakpoint",
  setup(e) {
    const n = Oe(!1, 200), a = on();
    return L(a, () => v(n, !0)), (t, i) => s(n) ? (l(), y("div", ln, [
      o("div", an, R(s(a)), 1)
    ])) : j("", !0);
  }
}, rn = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, un = /* @__PURE__ */ o("div", null, "Used", -1), dn = { class: "text-right" }, cn = /* @__PURE__ */ o("div", null, "Allocated", -1), fn = { class: "text-right" }, pn = /* @__PURE__ */ o("div", null, "Limit", -1), mn = { class: "text-right" }, yn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, Pn = {
  __name: "DebugMemory",
  setup(e) {
    const n = (i) => `${(i / 1024 / 1024).toFixed(2)} MB`, { isSupported: a, memory: t } = je();
    return (i, c) => s(a) && s(t) ? (l(), y("div", rn, [
      s(t) ? (l(), y(X, { key: 0 }, [
        un,
        o("div", dn, R(n(s(t).usedJSHeapSize)), 1),
        cn,
        o("div", fn, R(n(s(t).totalJSHeapSize)), 1),
        pn,
        o("div", mn, R(n(s(t).jsHeapSizeLimit)), 1)
      ], 64)) : j("", !0)
    ])) : (l(), y("div", yn, " Performance memory API not supported "));
  }
};
export {
  _n as Alert,
  An as Blink,
  $n as Button,
  kn as ComboBox,
  Ln as CommandPalette,
  Vn as ContextualMenu,
  Rn as DebugBreakpoint,
  Pn as DebugMemory,
  In as GeneratedAvatar,
  Cn as HoverableElement,
  Ft as Modal,
  Sn as Prompt,
  qn as PromptIcon,
  Mn as PromptTitle,
  Fn as Scrollable,
  dt as SpinnerIcon,
  Tn as TeleportIf,
  Bn as Toggle,
  zn as UniqueId,
  On as WhenMounted,
  Hn as isMaxBreakpoint,
  jn as isMinBreakpoint,
  tn as stringToColor,
  on as useCurrentBreakpoint
};
