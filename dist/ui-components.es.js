import { openBlock as a, createElementBlock as y, createElementVNode as l, normalizeClass as k, createBlock as C, unref as n, renderSlot as p, createVNode as w, createCommentVNode as z, ref as j, computed as T, resolveDynamicComponent as ie, withCtx as m, toDisplayString as H, toRefs as W, reactive as ue, watch as A, onMounted as ae, nextTick as Y, resolveComponent as Me, withKeys as be, createTextVNode as de, Fragment as X, renderList as ee, normalizeProps as P, guardReactiveProps as Z, mergeProps as G, withDirectives as ce, vShow as ve, useAttrs as Le, withModifiers as re, Transition as Ve, normalizeStyle as Ae, Teleport as Ie } from "vue";
import { get as i, templateRef as te, onClickOutside as xe, set as b, syncRef as ne, asyncComputed as we, refThrottled as Fe, whenever as he, useMounted as Te, useMediaQuery as fe, refAutoReset as ze, useMemory as Oe } from "@vueuse/core";
import { Combobox as pe, ComboboxLabel as _e, ComboboxInput as ye, ComboboxOptions as me, ComboboxOption as ge, Switch as je, TransitionRoot as $e, Dialog as ke, TransitionChild as oe, DialogPanel as Ce, DialogTitle as He, Menu as Re, MenuButton as Pe, MenuItems as Ke } from "@headlessui/vue";
import { vElementHover as Ze } from "@vueuse/components";
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
      d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Se(e, t) {
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
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
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
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
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
const We = { class: "flex" }, Je = {
  class: /* @__PURE__ */ k(["flex-shrink-0"])
}, Xe = { class: "ml-3" }, Ye = ["innerHTML"], et = {
  key: 0,
  class: "ml-auto pl-3"
}, tt = { class: "-mx-1.5 -my-1.5" }, nt = /* @__PURE__ */ l("span", { class: "sr-only" }, "Dismiss", -1), kn = {
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
      l("div", We, [
        l("div", Je, [
          s("success") ? (a(), C(n(Ue), {
            key: 0,
            class: k(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : s("warning") ? (a(), C(n(Ne), {
            key: 1,
            class: k(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : s("danger") ? (a(), C(n(Qe), {
            key: 2,
            class: k(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (a(), C(n(Ge), {
            key: 3,
            class: k(["h-5 w-5", { "text-gray-400": s("default"), "text-primary-400": s("info") }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]))
        ]),
        l("div", Xe, [
          p(r.$slots, "default", {}, () => [
            l("p", {
              class: "font-medium text-gray-800",
              innerHTML: e.message
            }, null, 8, Ye)
          ])
        ]),
        e.dismissable ? (a(), y("div", et, [
          l("div", tt, [
            l("button", {
              type: "button",
              class: k(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": s("default"), "bg-green-50": s("success"), "bg-red-50": s("danger"), "bg-yellow-50": s("warning"), "bg-primary-50": s("info") }, { "text-gray-400": s("default"), "text-green-400": s("success"), "text-red-400": s("danger"), "text-yellow-400": s("warning"), "text-primary-400": s("info") }]),
              onClick: d[0] || (d[0] = (x) => r.$emit("close"))
            }, [
              nt,
              w(n(le), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : z("", !0)
      ])
    ], 2));
  }
}, qe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, st = {}, ot = {
  class: "animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, lt = /* @__PURE__ */ l("circle", {
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
}, null, -1), rt = [
  lt,
  at
];
function it(e, t) {
  return a(), y("svg", ot, rt);
}
const ut = /* @__PURE__ */ qe(st, [["render", it]]), dt = { key: 2 }, Cn = {
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
    const t = e, o = j(["group", "disabled:opacity-80", "disabled:cursor-default"]), s = T(() => t.noFlex ? [] : ["inline-flex", "items-center", "justify-center", "gap-2"]), r = T(() => t.noPadding ? [] : ["py-2", "px-4"]), d = T(() => t.noBorder ? [] : ["border"]), x = T(() => t.noShadow ? [] : ["shadow-sm"]), B = T(() => t.noRound ? [] : ["rounded-md"]), h = T(() => t.noRing ? [] : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"]), q = T(() => [t.iconRight ? "-mr-1 order-last" : "-ml-1", "h-4 w-4 empty:hidden"]), _ = T(() => {
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
    }), I = T(() => [
      ...i(o),
      ...i(s),
      ...i(r),
      ...i(d),
      ...i(x),
      ...i(B),
      ...i(h),
      ...i(_)
    ]), M = T(() => t.loadingText ?? "Please wait..."), L = T(() => t.as === "button" ? t.type ?? "button" : void 0);
    return (S, O) => (a(), C(ie(e.as), {
      disabled: e.disabled || e.loading,
      type: n(L),
      class: k(n(I))
    }, {
      default: m(() => [
        e.loading ? (a(), C(ut, {
          key: 0,
          class: k(n(q))
        }, null, 8, ["class"])) : (a(), y("span", {
          key: 1,
          class: k(n(q))
        }, [
          p(S.$slots, "icon")
        ], 2)),
        e.loading ? (a(), y("span", dt, H(n(M)), 1)) : p(S.$slots, "default", { key: 3 })
      ]),
      _: 3
    }, 8, ["disabled", "type", "class"]));
  }
}, ct = ["onKeydown"], ft = { class: "relative" }, pt = { class: "inline-block w-full rounded-md shadow-sm" }, yt = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-primary-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500 sm:text-sm sm:leading-5" }, mt = { class: "block flex flex-wrap gap-2" }, gt = { class: "flex items-center gap-1 rounded bg-primary-600 text-white px-2 py-0.5" }, ht = ["onClick"], bt = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, vt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, xt = {
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
    const o = e, s = j(!1), r = () => b(s, !i(s)), { items: d, excludeSelected: x, modelValue: B, query: h } = W(o), q = o.stringify ?? ((c) => (c == null ? void 0 : c.name) ?? c ?? ""), _ = o.uniqueKey ?? ((c) => (c == null ? void 0 : c.id) ?? c), I = ue([]), M = j(i(h)), L = j([]), S = T(() => I.filter((c) => i(L).map(_).includes(_(c)))), O = o.filter ?? (async (c, V) => i(V).filter((u) => q(u).toLowerCase().includes(c.toLowerCase()))), D = T(() => i(d).filter((c) => !i(L).map(_).includes(_(c)))), K = j(i(d)), E = te("input"), g = () => b(s, !0), F = () => b(s, !1), $ = () => i(E).$el.focus();
    function R(c) {
      c.value === "" && i(M) !== "" && (c.value = i(M));
    }
    async function U() {
      b(L, []), b(M, ""), await Y(), $(), t("clear");
    }
    async function J(c) {
      b(L, i(L).filter((V) => _(V) !== _(c))), await Y(), $();
    }
    const Q = te("container");
    return xe(Q, () => F()), A(d, (c) => {
      c.forEach((V) => {
        I.findIndex((u) => _(u) === _(V)) === -1 && I.push(V);
      });
    }, { immediate: !0 }), A(B, (c) => b(L, c), { immediate: !0 }), A(L, (c) => t("update:modelValue", c)), A(L, () => b(M, "")), A(M, (c) => t("update:query", c)), A(M, async (c) => {
      const V = await O(i(c), i(x) ? i(D) : i(d));
      b(K, i(V) ?? []);
    }), A(h, (c) => b(M, c != null ? `${c}` : "")), ne(d, K, { direction: "ltr" }), A(M, (c) => i(E).$el.value = c), A(L, () => o.autoHide && F()), A(M, () => g()), ae(() => Y().then(() => i(E).$el.value = i(M))), ae(() => o.autofocus && $()), (c, V) => {
      const u = Me("XIcon");
      return a(), y("div", {
        ref_key: "container",
        ref: Q,
        onKeydown: be(F, ["esc"]),
        onKeyup: V[4] || (V[4] = ({ code: f }) => ["ArrowUp", "ArrowDown"].includes(f) && g())
      }, [
        w(n(pe), {
          as: "div",
          modelValue: L.value,
          "onUpdate:modelValue": V[3] || (V[3] = (f) => L.value = f),
          multiple: ""
        }, {
          default: m(() => [
            p(c.$slots, "label", {}, () => [
              w(n(_e), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
                default: m(() => [
                  de(H(e.label), 1)
                ]),
                _: 1
              })
            ]),
            l("div", ft, [
              l("span", pt, [
                l("div", yt, [
                  l("span", mt, [
                    L.value.length === 0 ? (a(), y("span", {
                      key: 0,
                      class: "p-0.5 cursor-pointer empty:hidden",
                      onClick: $
                    }, [
                      p(c.$slots, "empty-state")
                    ])) : z("", !0),
                    e.hideTags ? z("", !0) : (a(!0), y(X, { key: 1 }, ee(n(S), (f) => (a(), y("span", {
                      key: n(_)(f)
                    }, [
                      p(c.$slots, "selected-items", P(Z({ item: f, stringify: n(q), remove: J })), () => [
                        l("span", gt, [
                          l("span", null, H(n(q)(f)), 1),
                          l("button", {
                            role: "button",
                            onClick: (v) => J(f)
                          }, [
                            w(u, { class: "h-4 w-4" })
                          ], 8, ht)
                        ])
                      ])
                    ]))), 128)),
                    w(n(ye), G({
                      ref_key: "input",
                      ref: E,
                      autocomplete: "off"
                    }, e.inputAttrs, {
                      class: "reset border-none p-0 focus:ring-0 grow",
                      onFocus: g,
                      onBlur: V[0] || (V[0] = (f) => R(f.target)),
                      onChange: V[1] || (V[1] = (f) => M.value = f.target.value)
                    }), null, 16)
                  ]),
                  l("div", bt, [
                    e.clearable ? (a(), y("button", {
                      key: 0,
                      type: "button",
                      onClick: U
                    }, [
                      L.value.length !== 0 ? (a(), C(n(le), {
                        key: 0,
                        class: "h-5 w-5 text-gray-300",
                        "aria-hidden": "true"
                      })) : z("", !0)
                    ])) : z("", !0),
                    l("button", {
                      type: "button",
                      onClick: r
                    }, [
                      w(n(Se), {
                        class: "h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                      })
                    ])
                  ])
                ])
              ]),
              ce(l("div", vt, [
                K.value.length > 0 ? (a(), C(n(me), {
                  key: 0,
                  static: !e.autoHide,
                  class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
                }, {
                  default: m(() => [
                    (a(!0), y(X, null, ee(K.value, (f) => (a(), C(n(ge), {
                      key: n(_)(f),
                      value: n(_)(f),
                      disabled: e.disabled.includes(n(_)(f)),
                      onClick: V[2] || (V[2] = () => e.autoHide && F())
                    }, {
                      default: m(({ active: v, selected: N }) => [
                        p(c.$slots, "default", P(Z({ item: f, active: v, selected: N, stringify: n(q) })), () => [
                          l("li", {
                            class: k(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", v ? "bg-primary-600 text-white" : "text-gray-900"])
                          }, [
                            l("span", {
                              class: k(["block", { truncate: !v, "font-semibold": N, "font-normal": !N }])
                            }, H(n(q)(f)), 3),
                            N ? (a(), y("span", {
                              key: 0,
                              class: k(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": v, "text-primary-600": !v }])
                            }, [
                              w(n(Be), { class: "h-5 w-5" })
                            ], 2)) : z("", !0)
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]))), 128))
                  ]),
                  _: 3
                }, 8, ["static"])) : z("", !0)
              ], 512), [
                [ve, s.value]
              ])
            ])
          ]),
          _: 3
        }, 8, ["modelValue"])
      ], 40, ct);
    };
  }
}, wt = ["onKeydown"], _t = { class: "relative" }, $t = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, kt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, Ct = {
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
    const o = e, s = j(!1), r = () => b(s, !i(s)), { items: d, excludeSelected: x, modelValue: B, query: h } = W(o), q = o.stringify ?? ((u) => (u == null ? void 0 : u.name) ?? u ?? void 0), _ = (u) => {
      try {
        const f = q(u);
        if (f == null)
          throw Error("Cannot stringify nullish value");
        return `${f}`;
      } catch (f) {
        return console.debug("Unable to stringify item", u, f), "";
      }
    }, I = o.uniqueKey ?? ((u) => (u == null ? void 0 : u.id) ?? u), M = ue([]);
    function L(u) {
      return M.find((f) => I(f) === u) || null;
    }
    const S = j(i(h)), O = j(), D = o.filter ?? (async (u, f) => i(f).filter((v) => _(v).toLowerCase().includes(u.toLowerCase()))), K = T(() => i(d).filter((u) => I(u) !== I(i(B)))), E = we(() => D(i(S), i(x) ? i(K) : i(d)), []), g = (u) => u != null ? _(u) : i(S), F = te("input"), $ = () => b(s, !0), R = () => b(s, !1), U = () => i(F).$el.focus();
    function J(u) {
      u.value === "" && i(S) !== "" && (u.value = i(S));
    }
    async function Q() {
      b(O, null), b(S, ""), await Y(), U(), t("clear");
    }
    const c = (u) => i(O) != null && I(u) === I(i(O)), V = te("container");
    return xe(V, () => R()), A(d, (u) => {
      u.forEach((f) => {
        M.findIndex((v) => I(v) === I(f)) === -1 && M.push(f);
      });
    }, { immediate: !0 }), A(M, async () => {
      i(O) == null && o.modelValue != null && (b(O, L(I(o.modelValue))), await Y(), R());
    }, { immediate: !0 }), A(B, (u) => b(O, L(u)), { immediate: !0 }), A(O, (u) => {
      I(u) !== I(o.modelValue) && t("update:modelValue", I(u));
    }), A(O, (u) => {
      u == null ? b(S, "") : b(S, _(u));
    }), A(S, (u) => t("update:query", u)), A(h, (u) => b(S, u != null ? `${u}` : "")), A(O, () => o.autoHide && R()), A(S, () => $()), ae(() => o.autofocus && U()), (u, f) => (a(), y("div", {
      ref_key: "container",
      ref: V,
      onKeydown: be(R, ["esc"]),
      onKeyup: f[4] || (f[4] = ({ code: v }) => ["ArrowUp", "ArrowDown"].includes(v) && $())
    }, [
      w(n(pe), {
        as: "div",
        modelValue: O.value,
        "onUpdate:modelValue": f[3] || (f[3] = (v) => O.value = v)
      }, {
        default: m(() => [
          p(u.$slots, "label", {}, () => [
            w(n(_e), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: m(() => [
                de(H(e.label), 1)
              ]),
              _: 1
            })
          ]),
          l("div", _t, [
            w(n(ye), G({
              ref_key: "input",
              ref: F,
              "display-value": g,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: $,
              onBlur: f[0] || (f[0] = (v) => J(v.target)),
              onChange: f[1] || (f[1] = (v) => S.value = v.target.value)
            }), null, 16),
            l("div", $t, [
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
                })) : z("", !0)
              ])) : z("", !0),
              l("button", {
                type: "button",
                onClick: r
              }, [
                w(n(Se), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ce(l("div", kt, [
              w(n(me), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: m(() => [
                  (a(!0), y(X, null, ee(n(E), (v) => (a(), C(n(ge), {
                    key: n(I)(v),
                    value: v,
                    disabled: e.disabled.includes(n(I)(v)),
                    onClick: f[2] || (f[2] = () => e.autoHide && R())
                  }, {
                    default: m(({ active: N }) => [
                      p(u.$slots, "default", P(Z({ item: v, active: N, selected: c(v), stringify: _ })), () => [
                        l("li", {
                          class: k(["relative cursor-pointer select-none py-2 pl-3 pr-9", N ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          l("span", {
                            class: k(["block", !N && "truncate", c(v) && "font-semibold"])
                          }, H(_(v)), 3),
                          c(v) ? (a(), y("span", {
                            key: 0,
                            class: k(["absolute inset-y-0 right-0 flex items-center pr-4", N ? "text-white" : "text-indigo-600"])
                          }, [
                            w(n(Be), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : z("", !0)
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
    ], 40, wt));
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
    return (t, o) => Array.isArray(e.modelValue) ? (a(), C(xt, G({
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
        p(t.$slots, "selected-items", P(Z({ item: s, stringify: r, remove: d })))
      ]),
      default: m(({ item: s, active: r, selected: d, stringify: x }) => [
        p(t.$slots, "default", P(Z({ item: s, active: r, selected: d, stringify: x })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (a(), C(Ct, G({
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
      default: m(({ item: s, active: r, selected: d, stringify: x }) => [
        p(t.$slots, "default", P(Z({ item: s, active: r, selected: d, stringify: x })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
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
}, null, -1), Mt = [
  qt
], Lt = {
  key: 0,
  class: "h-3 w-3 text-green-600",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, Vt = /* @__PURE__ */ l("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), At = [
  Vt
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
    const o = e, { modelValue: s } = W(o), r = j(n(s));
    function d(h) {
      r.value = h, t("update:modelValue", h), t("change", h);
    }
    A(s, () => r.value = s.value);
    const x = Le(), B = T(() => Object.keys(n(x)).includes("disabled") && n(x).disabled !== !1);
    return (h, q) => (a(), C(n(je), {
      modelValue: r.value,
      "onUpdate:modelValue": [
        q[0] || (q[0] = (_) => r.value = _),
        d
      ],
      class: k([r.value && !n(B) ? "bg-green-600" : "bg-gray-200", n(B) ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: m(() => [
        Bt,
        l("span", {
          class: k([r.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          l("span", {
            class: k([r.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            n(B) ? z("", !0) : (a(), y("svg", St, Mt))
          ], 2),
          l("span", {
            class: k([r.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            n(B) ? z("", !0) : (a(), y("svg", Lt, At))
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
    function o(s) {
      t.value = s;
    }
    return (s, r) => ce((a(), C(ie(e.as), null, {
      default: m(() => [
        p(s.$slots, "default", { isHovered: t.value })
      ]),
      _: 3
    })), [
      [n(Ze), o]
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
  setup(e, { emit: t }) {
    const o = e, { open: s } = W(o), r = j(o.open);
    function d() {
      t("close");
    }
    return ne(s, r, { direction: "ltr" }), (x, B) => (a(), C(n($e), {
      as: "template",
      show: r.value
    }, {
      default: m(() => [
        w(n(ke), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: m(() => [
            w(n(oe), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: m(() => [
                It
              ]),
              _: 1
            }),
            l("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: B[0] || (B[0] = re((...h) => x.submit && x.submit(...h), ["prevent"]))
            }, [
              l("div", Ft, [
                w(n(oe), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: m(() => [
                    w(n(Ce), {
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
                        e.hideCloseIcon ? z("", !0) : (a(), y("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: d
                        }, [
                          w(n(le), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        p(x.$slots, "default")
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
}, zt = ["onSubmit", "onReset"], Ot = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, jt = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, Ht = {
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
    const o = e, { open: s } = W(o), r = j(o.open), d = te("FormHTMLElement");
    async function x() {
      await (o.onSubmit ?? ((q) => t("submit", { form: i(q), visible: r })))({ form: i(d), visible: r }), o.hideOnSubmit && b(r, !1);
    }
    async function B() {
      await (o.onReset ?? ((q) => t("reset", { form: i(q), visible: r })))({ form: i(d), visible: r }), o.hideOnReset && b(r, !1);
    }
    return ne(s, r, { direction: "ltr" }), (h, q) => (a(), C(Tt, { open: r.value }, {
      default: m(() => [
        l("form", {
          ref_key: "FormHTMLElement",
          ref: d,
          onSubmit: re(x, ["prevent"]),
          onReset: re(B, ["prevent"])
        }, [
          l("div", null, [
            p(h.$slots, "default", { form: n(d) })
          ]),
          p(h.$slots, "footer", {}, () => [
            l("footer", Ot, [
              p(h.$slots, "buttons", {}, () => [
                l("button", jt, H(e.submitButtonText), 1),
                l("button", Ht, H(e.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, zt)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, Rt = {}, Pt = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Kt(e, t) {
  return a(), y("div", Pt, [
    p(e.$slots, "default")
  ]);
}
const Ln = /* @__PURE__ */ qe(Rt, [["render", Kt]]), Vn = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (t, o) => (a(), C(n(He), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: m(() => [
        p(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Zt = /* @__PURE__ */ l("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Dt = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Et = { class: "relative" }, Ut = /* @__PURE__ */ l("svg", {
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
}, Wt = { class: "mt-2 text-sm text-gray-800" }, Jt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Xt = /* @__PURE__ */ l("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), Yt = /* @__PURE__ */ l("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), An = {
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
    const o = e, { open: s, query: r } = W(o), d = j(i(r)), x = Fe(d, o.delayBetweenRequests), B = j(!0), h = j(!1);
    ne(s, B, { direction: "ltr" }), ne(r, d, { direction: "ltr" });
    const q = async (g, F, $) => g === "" && o.prompt ? [] : F.filter((R) => $(R).toLowerCase().includes(g.toLowerCase())), _ = o.filter ?? q, I = async function(g, F, $) {
      b(h, !0);
      try {
        return await _(g, F, $);
      } finally {
        b(h, !1);
      }
    }, M = we(() => I(i(x), o.items, L), o.items), L = o.stringify ?? ((g) => g == null ? void 0 : g.name), S = o.groupGetter ?? (() => {
    }), O = T(
      () => M.value.reduce((g, F) => {
        let $ = S(F);
        return { ...g, [$]: [...g[$] || [], F] };
      }, {})
    );
    function D(g) {
      b(d, g);
    }
    A(x, (g) => t("update:query", g));
    function K(g) {
      t("pick", g), E();
    }
    function E() {
      t("close"), t("update:open", !1), b(B, !1);
    }
    return (g, F) => (a(), C(n($e), {
      show: B.value,
      as: "template",
      onAfterLeave: F[2] || (F[2] = ($) => d.value = ""),
      appear: ""
    }, {
      default: m(() => [
        w(n(ke), {
          as: "div",
          class: "relative z-10",
          onClose: F[1] || (F[1] = ($) => E())
        }, {
          default: m(() => [
            w(n(oe), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: m(() => [
                Zt
              ]),
              _: 1
            }),
            l("div", Dt, [
              w(n(oe), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: m(() => [
                  w(n(Ce), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: m(() => [
                      w(n(pe), { "onUpdate:modelValue": K }, {
                        default: m(() => [
                          l("div", Et, [
                            p(g.$slots, "search-icon", {}, () => [
                              Ut
                            ]),
                            p(g.$slots, "input", P(Z({ query: d.value })), () => [
                              w(n(ye), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                style: { "box-shadow": "none" },
                                placeholder: e.placeholder,
                                onChange: F[0] || (F[0] = ($) => D($.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && h.value ? p(g.$slots, "loader", P(G({ key: 0 }, { query: d.value, isLoading: h.value })), () => [
                            l("div", Nt, [
                              p(g.$slots, "loader-inner", {}, () => [
                                de("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && d.value === "" ? p(g.$slots, "prompt", P(G({ key: 1 }, { query: d.value, isLoading: h.value })), () => [
                            l("div", Gt, [
                              p(g.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || n(M).length > 0 ? (a(), C(n(me), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: m(() => [
                              (a(!0), y(X, null, ee(Object.entries(n(O)), ([$, R]) => (a(), y("li", { key: $ }, [
                                p(g.$slots, "group", P(Z({ group: $, items: R, query: d.value })), () => [
                                  $ !== "undefined" ? (a(), y("h2", Qt, H($), 1)) : z("", !0)
                                ]),
                                l("ul", Wt, [
                                  (a(!0), y(X, null, ee(R, (U, J) => (a(), C(n(ge), {
                                    key: U.id,
                                    value: U,
                                    as: "template"
                                  }, {
                                    default: m(({ active: Q }) => [
                                      p(g.$slots, "default", P(Z({ group: $, item: U, items: R, index: J, active: Q, stringify: n(L), query: d.value })), () => [
                                        l("li", {
                                          class: k(["cursor-pointer select-none px-4 py-2", Q && "bg-indigo-600 text-white"])
                                        }, H(n(L)(U)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : d.value !== "" && n(M).length === 0 ? p(g.$slots, "empty-state", P(G({ key: 3 }, { query: d.value, isLoading: h.value })), () => [
                            l("div", Jt, [
                              p(g.$slots, "empty-state-inner", {}, () => [
                                Xt,
                                Yt
                              ])
                            ])
                          ]) : z("", !0)
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
], In = {
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
      const s = ["h-5", "w-5"];
      return t.disabled && s.push("opacity-60", "cursor-not-allowed"), t.iconClasses ?? s;
    });
    return (s, r) => (a(), C(n(Re), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: m(() => [
        w(n(Pe), {
          disabled: e.disabled,
          class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        }, {
          default: m(() => [
            l("span", en, H(e.srOnly), 1),
            p(s.$slots, "icon", P(Z({ iconClasses: n(o) })), () => [
              (a(), y("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                class: k(n(o))
              }, nn, 2))
            ])
          ]),
          _: 3
        }, 8, ["disabled"]),
        w(Ve, {
          "enter-active-class": "transition ease-out duration-100",
          "enter-from-class": "transform opacity-0 scale-95",
          "enter-to-class": "transform opacity-100 scale-100",
          "leave-active-class": "transition ease-in duration-75",
          "leave-from-class": "transform opacity-100 scale-100",
          "leave-to-class": "transform opacity-0 scale-95"
        }, {
          default: m(() => [
            e.disabled ? z("", !0) : (a(), C(n(Ke), {
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
}, Fn = {
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
    const t = e, o = T(() => t.condition === !0), s = T(() => t.condition === !1), r = j(!1), d = () => r.value = !r.value, x = j(), B = () => {
      clearInterval(i(x)), i(o) && b(x, setInterval(d, t.interval));
    }, h = () => {
      clearInterval(i(x)), b(r, !1);
    };
    return he(o, B, { immediate: !0 }), he(s, h, { immediate: !0 }), (q, _) => (a(), y("span", {
      class: k([r.value ? "invisible" : "visible"])
    }, [
      p(q.$slots, "default")
    ], 2));
  }
}, sn = (e) => {
  let t = 0;
  for (let s = 0; s < e.length; s++)
    t = e.charCodeAt(s) + ((t << 5) - t);
  let o = "#";
  for (let s = 0; s < 3; s++) {
    let r = t >> s * 8 & 255;
    o += ("00" + r.toString(16)).substr(-2);
  }
  return o;
}, on = { class: "text-xs font-medium leading-none text-white" }, Tn = {
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
    const t = e, { id: o } = W(t), s = T(() => sn(De(o.value.toLowerCase())));
    return (r, d) => (a(), y("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Ae({ backgroundColor: n(s) })
    }, [
      l("span", on, H(e.text), 1)
    ], 4));
  }
}, ln = { class: "absolute inset-0 overflow-auto" }, zn = {
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
        l("div", ln, [
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
    return (t, o) => e.condition ? (a(), C(Ie, G({
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
    return (o, s) => n(t) ? p(o.$slots, "default", { key: 0 }) : z("", !0);
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
  return T(() => {
    const t = Object.entries(e).filter(([o, s]) => s);
    return Object.keys(Object.fromEntries(t))[t.length - 1];
  });
}, rn = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, un = { class: "mx-auto text-5xl uppercase" }, Kn = {
  __name: "DebugBreakpoint",
  setup(e) {
    const t = ze(!1, 200), o = an();
    return A(o, () => b(t, !0)), (s, r) => n(t) ? (a(), y("div", rn, [
      l("div", un, H(n(o)), 1)
    ])) : z("", !0);
  }
}, dn = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, cn = /* @__PURE__ */ l("div", null, "Used", -1), fn = { class: "text-right" }, pn = /* @__PURE__ */ l("div", null, "Allocated", -1), yn = { class: "text-right" }, mn = /* @__PURE__ */ l("div", null, "Limit", -1), gn = { class: "text-right" }, hn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, Zn = {
  __name: "DebugMemory",
  setup(e) {
    const t = (r) => `${(r / 1024 / 1024).toFixed(2)} MB`, { isSupported: o, memory: s } = Oe();
    return (r, d) => n(o) && n(s) ? (a(), y("div", dn, [
      n(s) ? (a(), y(X, { key: 0 }, [
        cn,
        l("div", fn, H(t(n(s).usedJSHeapSize)), 1),
        pn,
        l("div", yn, H(t(n(s).totalJSHeapSize)), 1),
        mn,
        l("div", gn, H(t(n(s).jsHeapSizeLimit)), 1)
      ], 64)) : z("", !0)
    ])) : (a(), y("div", hn, " Performance memory API not supported "));
  }
};
export {
  kn as Alert,
  Fn as Blink,
  Cn as Button,
  Bn as ComboBox,
  An as CommandPalette,
  In as ContextualMenu,
  Kn as DebugBreakpoint,
  Zn as DebugMemory,
  Tn as GeneratedAvatar,
  qn as HoverableElement,
  Tt as Modal,
  Mn as Prompt,
  Ln as PromptIcon,
  Vn as PromptTitle,
  zn as Scrollable,
  ut as SpinnerIcon,
  On as TeleportIf,
  Sn as Toggle,
  jn as UniqueId,
  Hn as WhenMounted,
  Pn as isMaxBreakpoint,
  Rn as isMinBreakpoint,
  sn as stringToColor,
  an as useCurrentBreakpoint
};
