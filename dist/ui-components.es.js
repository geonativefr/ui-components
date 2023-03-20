import { openBlock as i, createElementBlock as h, normalizeClass as I, createElementVNode as a, createBlock as B, unref as t, renderSlot as f, createVNode as v, createCommentVNode as F, ref as L, toRefs as Q, reactive as ie, computed as R, watch as k, onMounted as ae, nextTick as Z, withKeys as he, withCtx as p, createTextVNode as ue, toDisplayString as H, Fragment as J, renderList as ee, normalizeProps as K, guardReactiveProps as E, mergeProps as N, withDirectives as de, vShow as be, useAttrs as qe, resolveDynamicComponent as ve, withModifiers as re, Transition as Ie, normalizeStyle as Me, Teleport as Ve } from "vue";
import { CheckCircleIcon as Ae, ExclamationIcon as ze, XCircleIcon as Fe, InformationCircleIcon as Le, XIcon as te, SelectorIcon as xe, CheckIcon as we } from "@heroicons/vue/solid";
import { Combobox as ce, ComboboxLabel as _e, ComboboxInput as fe, ComboboxOptions as pe, ComboboxOption as ye, Switch as Te, TransitionRoot as $e, Dialog as ke, TransitionChild as le, DialogPanel as Ce, DialogTitle as Oe, Menu as He, MenuButton as je, MenuItems as Ke } from "@headlessui/vue";
import { get as d, templateRef as ne, onClickOutside as Be, set as g, syncRef as X, refThrottled as Pe, asyncComputed as Re, whenever as ge, useMounted as De, useMediaQuery as me, refAutoReset as Ee, useMemory as Ue } from "@vueuse/core";
import { vElementHover as Ne } from "@vueuse/components";
import Ge from "md5";
import { v4 as Qe } from "uuid";
const We = { class: "flex" }, Je = {
  class: /* @__PURE__ */ I(["flex-shrink-0"])
}, Xe = { class: "ml-3" }, Ye = ["innerHTML"], Ze = {
  key: 0,
  class: "ml-auto pl-3"
}, et = { class: "-mx-1.5 -my-1.5" }, tt = /* @__PURE__ */ a("span", { class: "sr-only" }, "Dismiss", -1), _n = {
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
  setup(e, { emit: s }) {
    const o = e, n = (r) => r === o.type;
    return (r, u) => (i(), h("div", {
      class: I(["rounded-md p-4", { "bg-gray-50": n("default"), "bg-green-50": n("success"), "bg-red-50": n("danger"), "bg-yellow-50": n("warning"), "bg-blue-50": n("info") }])
    }, [
      a("div", We, [
        a("div", Je, [
          n("success") ? (i(), B(t(Ae), {
            key: 0,
            class: I(["h-5 w-5 text-green-400"]),
            "aria-hidden": "true"
          })) : n("warning") ? (i(), B(t(ze), {
            key: 1,
            class: I(["h-5 w-5 text-yellow-400"]),
            "aria-hidden": "true"
          })) : n("danger") ? (i(), B(t(Fe), {
            key: 2,
            class: I(["h-5 w-5 text-red-400"]),
            "aria-hidden": "true"
          })) : (i(), B(t(Le), {
            key: 3,
            class: I(["h-5 w-5", { "text-gray-400": n("default"), "text-blue-400": n("info") }]),
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
        e.dismissable ? (i(), h("div", Ze, [
          a("div", et, [
            a("button", {
              type: "button",
              class: I(["inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2", { "bg-gray-50": n("default"), "bg-green-50": n("success"), "bg-red-50": n("danger"), "bg-yellow-50": n("warning"), "bg-blue-50": n("info") }, { "text-gray-400": n("default"), "text-green-400": n("success"), "text-red-400": n("danger"), "text-yellow-400": n("warning"), "text-blue-400": n("info") }]),
              onClick: u[0] || (u[0] = (_) => r.$emit("close"))
            }, [
              tt,
              v(t(te), {
                class: "h-5 w-5",
                "aria-hidden": "true"
              })
            ], 2)
          ])
        ])) : F("", !0)
      ])
    ], 2));
  }
}, nt = ["onKeydown"], st = { class: "relative" }, ot = { class: "inline-block w-full rounded-md shadow-sm" }, lt = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500 sm:text-sm sm:leading-5" }, at = { class: "block flex flex-wrap gap-2" }, rt = { class: "flex items-center gap-1 rounded bg-blue-600 text-white px-2 py-0.5" }, it = ["onClick"], ut = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, dt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, ct = {
  __name: "MultiCombobox",
  props: {
    items: {
      type: Array,
      required: !0
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    query: {
      default: ""
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
    hideTags: {
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
    },
    disabled: {
      type: Array,
      default: () => []
    },
    autoHide: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update:query", "clear"],
  setup(e, { emit: s }) {
    const o = e, n = L(!1), r = () => g(n, !d(n)), { items: u, excludeSelected: _, modelValue: S, query: b } = Q(o), A = o.stringify ?? ((c) => (c == null ? void 0 : c.name) ?? c ?? ""), $ = o.uniqueKey ?? ((c) => (c == null ? void 0 : c.id) ?? c), z = ie([]), M = L(d(b)), V = L([]), T = R(() => z.filter((c) => d(V).map($).includes($(c)))), O = o.filter ?? (async (c, C) => d(C).filter((l) => A(l).toLowerCase().includes(c.toLowerCase()))), Y = R(() => d(u).filter((c) => !d(V).map($).includes($(c)))), U = L(d(u)), P = ne("input"), y = () => g(n, !0), q = () => g(n, !1), x = () => d(P).$el.focus();
    function j(c) {
      c.value === "" && d(M) !== "" && (c.value = d(M));
    }
    async function D() {
      g(V, []), g(M, ""), await Z(), x(), s("clear");
    }
    async function W(c) {
      g(V, d(V).filter((C) => $(C) !== $(c))), await Z(), x();
    }
    const G = ne("container");
    return Be(G, () => q()), k(u, (c) => {
      c.forEach((C) => {
        z.findIndex((l) => $(l) === $(C)) === -1 && z.push(C);
      });
    }, { immediate: !0 }), k(S, (c) => g(V, c), { immediate: !0 }), k(V, (c) => s("update:modelValue", c)), k(V, () => g(M, "")), k(M, (c) => s("update:query", c)), k(M, async (c) => {
      const C = await O(d(c), d(_) ? d(Y) : d(u));
      g(U, d(C) ?? []);
    }), k(b, (c) => g(M, c != null ? `${c}` : "")), X(u, U, { direction: "ltr" }), k(M, (c) => d(P).$el.value = c), k(V, () => o.autoHide && q()), k(M, () => y()), ae(() => Z().then(() => d(P).$el.value = d(M))), ae(() => o.autofocus && x()), (c, C) => (i(), h("div", {
      ref_key: "container",
      ref: G,
      onKeydown: he(q, ["esc"]),
      onKeyup: C[4] || (C[4] = ({ code: l }) => ["ArrowUp", "ArrowDown"].includes(l) && y())
    }, [
      v(t(ce), {
        as: "div",
        modelValue: V.value,
        "onUpdate:modelValue": C[3] || (C[3] = (l) => V.value = l),
        multiple: ""
      }, {
        default: p(() => [
          f(c.$slots, "label", {}, () => [
            v(t(_e), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: p(() => [
                ue(H(e.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", st, [
            a("span", ot, [
              a("div", lt, [
                a("span", at, [
                  V.value.length === 0 ? (i(), h("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: x
                  }, [
                    f(c.$slots, "empty-state")
                  ])) : F("", !0),
                  e.hideTags ? F("", !0) : (i(!0), h(J, { key: 1 }, ee(t(T), (l) => (i(), h("span", {
                    key: t($)(l)
                  }, [
                    f(c.$slots, "selected-items", K(E({ item: l, stringify: t(A), remove: W })), () => [
                      a("span", rt, [
                        a("span", null, H(t(A)(l)), 1),
                        a("button", {
                          role: "button",
                          onClick: (m) => W(l)
                        }, [
                          v(t(te), { class: "h-4 w-4" })
                        ], 8, it)
                      ])
                    ])
                  ]))), 128)),
                  v(t(fe), N({
                    ref_key: "input",
                    ref: P,
                    autocomplete: "off"
                  }, e.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: y,
                    onBlur: C[0] || (C[0] = (l) => j(l.target)),
                    onChange: C[1] || (C[1] = (l) => M.value = l.target.value)
                  }), null, 16)
                ]),
                a("div", ut, [
                  e.clearable ? (i(), h("button", {
                    key: 0,
                    type: "button",
                    onClick: D
                  }, [
                    V.value.length !== 0 ? (i(), B(t(te), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : F("", !0)
                  ])) : F("", !0),
                  a("button", {
                    type: "button",
                    onClick: r
                  }, [
                    v(t(xe), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            de(a("div", dt, [
              U.value.length > 0 ? (i(), B(t(pe), {
                key: 0,
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (i(!0), h(J, null, ee(U.value, (l) => (i(), B(t(ye), {
                    key: t($)(l),
                    value: t($)(l),
                    disabled: e.disabled.includes(t($)(l)),
                    onClick: C[2] || (C[2] = () => e.autoHide && q())
                  }, {
                    default: p(({ active: m, selected: w }) => [
                      f(c.$slots, "default", K(E({ item: l, active: m, selected: w, stringify: t(A) })), () => [
                        a("li", {
                          class: I(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", m ? "bg-blue-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: I(["block", { truncate: !m, "font-semibold": w, "font-normal": !w }])
                          }, H(t(A)(l)), 3),
                          w ? (i(), h("span", {
                            key: 0,
                            class: I(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": m, "text-blue-600": !m }])
                          }, [
                            v(t(we), { class: "h-5 w-5" })
                          ], 2)) : F("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])) : F("", !0)
            ], 512), [
              [be, n.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, nt));
  }
}, ft = ["onKeydown"], pt = { class: "relative" }, yt = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, mt = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, gt = {
  __name: "SingleCombobox",
  props: {
    items: {
      type: Array,
      required: !0
    },
    modelValue: {
      type: [String, Number, Object],
      default: null
    },
    query: {
      default: ""
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
    },
    disabled: {
      type: Array,
      default: () => []
    },
    autoHide: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "update:query", "clear"],
  setup(e, { emit: s }) {
    const o = e, n = L(!1), r = () => g(n, !d(n)), { items: u, excludeSelected: _, modelValue: S, query: b } = Q(o), A = o.stringify ?? ((l) => (l == null ? void 0 : l.name) ?? l ?? void 0), $ = (l) => {
      try {
        const m = A(l);
        if (m == null)
          throw Error("Cannot stringify nullish value");
        return `${m}`;
      } catch (m) {
        return console.debug("Unable to stringify item", l, m), "";
      }
    }, z = o.uniqueKey ?? ((l) => (l == null ? void 0 : l.id) ?? l), M = ie([]);
    function V(l) {
      return M.find((m) => z(m) === l);
    }
    const T = L(d(b)), O = L(), Y = o.filter ?? (async (l, m) => d(m).filter((w) => $(w).toLowerCase().includes(l.toLowerCase()))), U = R(() => d(u).filter((l) => z(l) !== z(d(S)))), P = L(d(u)), y = (l) => l != null ? $(l) : d(T), q = ne("input"), x = () => g(n, !0), j = () => g(n, !1), D = () => d(q).$el.focus();
    function W(l) {
      l.value === "" && d(T) !== "" && (l.value = d(T));
    }
    async function G() {
      g(O, void 0), g(T, ""), await Z(), D(), s("clear");
    }
    const c = (l) => d(O) != null && z(l) === z(d(O)), C = ne("container");
    return Be(C, () => j()), k(u, (l) => {
      l.forEach((m) => {
        M.findIndex((w) => z(w) === z(m)) === -1 && M.push(m);
      });
    }, { immediate: !0 }), k(M, async () => {
      d(O) == null && o.modelValue != null && (g(O, V(z(o.modelValue))), await Z(), j());
    }, { immediate: !0 }), k(S, (l) => g(O, V(l)), { immediate: !0 }), k(O, (l) => {
      z(l) !== z(o.modelValue) && s("update:modelValue", z(l));
    }), k(O, (l) => {
      l == null ? g(T, "") : g(T, $(l));
    }), k(T, (l) => s("update:query", l)), k(T, async (l) => {
      const m = await Y(d(l), d(_) ? d(U) : d(u));
      g(P, d(m) ?? []);
    }), k(b, (l) => g(T, l != null ? `${l}` : "")), k(O, () => o.autoHide && j()), k(T, () => x()), X(u, P, { direction: "ltr" }), ae(() => o.autofocus && D()), (l, m) => (i(), h("div", {
      ref_key: "container",
      ref: C,
      onKeydown: he(j, ["esc"]),
      onKeyup: m[4] || (m[4] = ({ code: w }) => ["ArrowUp", "ArrowDown"].includes(w) && x())
    }, [
      v(t(ce), {
        as: "div",
        modelValue: O.value,
        "onUpdate:modelValue": m[3] || (m[3] = (w) => O.value = w)
      }, {
        default: p(() => [
          f(l.$slots, "label", {}, () => [
            v(t(_e), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: p(() => [
                ue(H(e.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", pt, [
            v(t(fe), N({
              ref_key: "input",
              ref: q,
              "display-value": y,
              autocomplete: "off"
            }, e.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: x,
              onBlur: m[0] || (m[0] = (w) => W(w.target)),
              onChange: m[1] || (m[1] = (w) => T.value = w.target.value)
            }), null, 16),
            a("div", yt, [
              e.clearable ? (i(), h("button", {
                key: 0,
                type: "button",
                onClick: G
              }, [
                t(S) != null ? (i(), B(t(te), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : F("", !0)
              ])) : F("", !0),
              a("button", {
                type: "button",
                onClick: r
              }, [
                v(t(xe), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            de(a("div", mt, [
              v(t(pe), {
                static: !e.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: p(() => [
                  (i(!0), h(J, null, ee(P.value, (w) => (i(), B(t(ye), {
                    key: t(z)(w),
                    value: w,
                    disabled: e.disabled.includes(t(z)(w)),
                    onClick: m[2] || (m[2] = () => e.autoHide && j())
                  }, {
                    default: p(({ active: oe }) => [
                      f(l.$slots, "default", K(E({ item: w, active: oe, selected: c(w), stringify: $ })), () => [
                        a("li", {
                          class: I(["relative cursor-pointer select-none py-2 pl-3 pr-9", oe ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: I(["block", !oe && "truncate", c(w) && "font-semibold"])
                          }, H($(w)), 3),
                          c(w) ? (i(), h("span", {
                            key: 0,
                            class: I(["absolute inset-y-0 right-0 flex items-center pr-4", oe ? "text-white" : "text-indigo-600"])
                          }, [
                            v(t(we), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : F("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])
            ], 512), [
              [be, n.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, ft));
  }
}, $n = {
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
    return (s, o) => Array.isArray(e.modelValue) ? (i(), B(ct, N({
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
    }, s.$attrs), {
      label: p(() => [
        f(s.$slots, "label")
      ]),
      "selected-items": p(({ item: n, stringify: r, remove: u }) => [
        f(s.$slots, "selected-items", K(E({ item: n, stringify: r, remove: u })))
      ]),
      default: p(({ item: n, active: r, selected: u, stringify: _ }) => [
        f(s.$slots, "default", K(E({ item: n, active: r, selected: u, stringify: _ })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (i(), B(gt, N({
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
    }, s.$attrs), {
      label: p(() => [
        f(s.$slots, "label")
      ]),
      default: p(({ item: n, active: r, selected: u, stringify: _ }) => [
        f(s.$slots, "default", K(E({ item: n, active: r, selected: u, stringify: _ })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, ht = /* @__PURE__ */ a("span", { class: "sr-only" }, "Use setting", -1), bt = {
  key: 0,
  class: "h-3 w-3 text-gray-400",
  fill: "none",
  viewBox: "0 0 12 12"
}, vt = /* @__PURE__ */ a("path", {
  d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), xt = [
  vt
], wt = {
  key: 0,
  class: "h-3 w-3 text-green-600",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, _t = /* @__PURE__ */ a("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" }, null, -1), $t = [
  _t
], kn = {
  __name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: s }) {
    const o = e, { modelValue: n } = Q(o), r = L(t(n));
    function u(b) {
      r.value = b, s("update:modelValue", b), s("change", b);
    }
    k(n, () => r.value = n.value);
    const _ = qe(), S = R(() => Object.keys(t(_)).includes("disabled") && t(_).disabled !== !1);
    return (b, A) => (i(), B(t(Te), {
      modelValue: r.value,
      "onUpdate:modelValue": [
        A[0] || (A[0] = ($) => r.value = $),
        u
      ],
      class: I([r.value && !t(S) ? "bg-green-600" : "bg-gray-200", t(S) ? "cursor-not-allowed" : "", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"])
    }, {
      default: p(() => [
        ht,
        a("span", {
          class: I([r.value ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])
        }, [
          a("span", {
            class: I([r.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            t(S) ? F("", !0) : (i(), h("svg", bt, xt))
          ], 2),
          a("span", {
            class: I([r.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"]),
            "aria-hidden": "true"
          }, [
            t(S) ? F("", !0) : (i(), h("svg", wt, $t))
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
    const s = L(!1);
    function o(n) {
      s.value = n;
    }
    return (n, r) => de((i(), B(ve(e.as), null, {
      default: p(() => [
        f(n.$slots, "default", { isHovered: s.value })
      ]),
      _: 3
    })), [
      [t(Ne), o]
    ]);
  }
}, kt = /* @__PURE__ */ a("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Ct = { class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" }, Bt = {
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
  setup(e, { emit: s }) {
    const o = e, { open: n } = Q(o), r = L(o.open);
    function u() {
      s("close");
    }
    return X(n, r, { direction: "ltr" }), (_, S) => (i(), B(t($e), {
      as: "template",
      show: r.value
    }, {
      default: p(() => [
        v(t(ke), {
          as: "div",
          class: "relative z-10",
          onClose: u
        }, {
          default: p(() => [
            v(t(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: p(() => [
                kt
              ]),
              _: 1
            }),
            a("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: S[0] || (S[0] = re((...b) => _.submit && _.submit(...b), ["prevent"]))
            }, [
              a("div", Ct, [
                v(t(le), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: p(() => [
                    v(t(Ce), {
                      class: I([
                        e.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "sm:max-w-lg sm:w-full"
                      ])
                    }, {
                      default: p(() => [
                        e.hideCloseIcon ? F("", !0) : (i(), h("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: u
                        }, [
                          v(t(te), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        f(_.$slots, "default")
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
}, St = ["onSubmit", "onReset"], qt = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, It = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, Mt = {
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
  setup(e, { emit: s }) {
    const o = e, { open: n } = Q(o), r = L(o.open), u = ne("FormHTMLElement");
    async function _() {
      await (o.onSubmit ?? ((A) => s("submit", { form: d(A), visible: r })))({ form: d(u), visible: r }), o.hideOnSubmit && g(r, !1);
    }
    async function S() {
      await (o.onReset ?? ((A) => s("reset", { form: d(A), visible: r })))({ form: d(u), visible: r }), o.hideOnReset && g(r, !1);
    }
    return X(n, r, { direction: "ltr" }), (b, A) => (i(), B(Bt, { open: r.value }, {
      default: p(() => [
        a("form", {
          ref_key: "FormHTMLElement",
          ref: u,
          onSubmit: re(_, ["prevent"]),
          onReset: re(S, ["prevent"])
        }, [
          a("div", null, [
            f(b.$slots, "default", { form: t(u) })
          ]),
          f(b.$slots, "footer", {}, () => [
            a("footer", qt, [
              f(b.$slots, "buttons", {}, () => [
                a("button", It, H(e.submitButtonText), 1),
                a("button", Mt, H(e.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, St)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, Se = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of s)
    o[n] = r;
  return o;
}, Vt = {}, At = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function zt(e, s) {
  return i(), h("div", At, [
    f(e.$slots, "default")
  ]);
}
const Sn = /* @__PURE__ */ Se(Vt, [["render", zt]]), qn = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (s, o) => (i(), B(t(Oe), {
      as: e.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: p(() => [
        f(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Ft = /* @__PURE__ */ a("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), Lt = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, Tt = { class: "relative" }, Ot = /* @__PURE__ */ a("svg", {
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
], -1), Ht = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, jt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Kt = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, Pt = { class: "mt-2 text-sm text-gray-800" }, Rt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, Dt = /* @__PURE__ */ a("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), Et = /* @__PURE__ */ a("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), In = {
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
  setup(e, { emit: s }) {
    const o = e, { open: n, query: r } = Q(o), u = L(d(r)), _ = Pe(u, o.delayBetweenRequests), S = L(!0), b = L(!1);
    X(n, S, { direction: "ltr" }), X(r, u, { direction: "ltr" });
    const A = async (y, q, x) => y === "" && o.prompt ? [] : q.filter((j) => x(j).toLowerCase().includes(y.toLowerCase())), $ = o.filter ?? A, z = async function(y, q, x) {
      g(b, !0);
      try {
        return await $(y, q, x);
      } finally {
        g(b, !1);
      }
    }, M = Re(() => z(d(_), o.items, V), o.items), V = o.stringify ?? ((y) => y == null ? void 0 : y.name), T = o.groupGetter ?? (() => {
    }), O = R(
      () => M.value.reduce((y, q) => {
        let x = T(q);
        return { ...y, [x]: [...y[x] || [], q] };
      }, {})
    );
    function Y(y) {
      g(u, y);
    }
    k(_, (y) => s("update:query", y));
    function U(y) {
      s("pick", y), P();
    }
    function P() {
      s("close"), s("update:open", !1), g(S, !1);
    }
    return (y, q) => (i(), B(t($e), {
      show: S.value,
      as: "template",
      onAfterLeave: q[2] || (q[2] = (x) => u.value = ""),
      appear: ""
    }, {
      default: p(() => [
        v(t(ke), {
          as: "div",
          class: "relative z-10",
          onClose: q[1] || (q[1] = (x) => P())
        }, {
          default: p(() => [
            v(t(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: p(() => [
                Ft
              ]),
              _: 1
            }),
            a("div", Lt, [
              v(t(le), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: p(() => [
                  v(t(Ce), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: p(() => [
                      v(t(ce), { "onUpdate:modelValue": U }, {
                        default: p(() => [
                          a("div", Tt, [
                            f(y.$slots, "search-icon", {}, () => [
                              Ot
                            ]),
                            f(y.$slots, "input", K(E({ query: u.value })), () => [
                              v(t(fe), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                placeholder: e.placeholder,
                                onChange: q[0] || (q[0] = (x) => Y(x.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          e.enableLoader && b.value ? f(y.$slots, "loader", K(N({ key: 0 }, { query: u.value, isLoading: b.value })), () => [
                            a("div", Ht, [
                              f(y.$slots, "loader-inner", {}, () => [
                                ue("Loading, please wait...")
                              ])
                            ])
                          ]) : e.prompt && u.value === "" ? f(y.$slots, "prompt", K(N({ key: 1 }, { query: u.value, isLoading: b.value })), () => [
                            a("div", jt, [
                              f(y.$slots, "prompt-inner")
                            ])
                          ]) : !e.prompt || t(M).length > 0 ? (i(), B(t(pe), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: p(() => [
                              (i(!0), h(J, null, ee(Object.entries(t(O)), ([x, j]) => (i(), h("li", { key: x }, [
                                f(y.$slots, "group", K(E({ group: x, items: j, query: u.value })), () => [
                                  x !== "undefined" ? (i(), h("h2", Kt, H(x), 1)) : F("", !0)
                                ]),
                                a("ul", Pt, [
                                  (i(!0), h(J, null, ee(j, (D, W) => (i(), B(t(ye), {
                                    key: D.id,
                                    value: D,
                                    as: "template"
                                  }, {
                                    default: p(({ active: G }) => [
                                      f(y.$slots, "default", K(E({ group: x, item: D, items: j, index: W, active: G, stringify: t(V), query: u.value })), () => [
                                        a("li", {
                                          class: I(["cursor-pointer select-none px-4 py-2", G && "bg-indigo-600 text-white"])
                                        }, H(t(V)(D)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : u.value !== "" && t(M).length === 0 ? f(y.$slots, "empty-state", K(N({ key: 3 }, { query: u.value, isLoading: b.value })), () => [
                            a("div", Rt, [
                              f(y.$slots, "empty-state-inner", {}, () => [
                                Dt,
                                Et
                              ])
                            ])
                          ]) : F("", !0)
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
}, Ut = {}, Nt = {
  class: "animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Gt = /* @__PURE__ */ a("circle", {
  class: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Qt = /* @__PURE__ */ a("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Wt = [
  Gt,
  Qt
];
function Jt(e, s) {
  return i(), h("svg", Nt, Wt);
}
const Mn = /* @__PURE__ */ Se(Ut, [["render", Jt]]), Xt = { class: "sr-only" }, Yt = /* @__PURE__ */ a("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" }, null, -1), Zt = [
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
    }
  },
  setup(e) {
    const s = e, o = R(() => s.iconClasses ?? "h-5 w-5");
    return (n, r) => (i(), B(t(He), {
      as: "div",
      class: "relative flex justify-end items-center"
    }, {
      default: p(() => [
        v(t(je), { class: "w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" }, {
          default: p(() => [
            a("span", Xt, H(e.srOnly), 1),
            (i(), h("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              class: I(t(o))
            }, Zt, 2))
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
            v(t(Ke), { class: "mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" }, {
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
    const s = e, o = R(() => s.condition === !0), n = R(() => s.condition === !1), r = L(!1), u = () => r.value = !r.value, _ = L(), S = () => {
      clearInterval(d(_)), d(o) && g(_, setInterval(u, s.interval));
    }, b = () => {
      clearInterval(d(_)), g(r, !1);
    };
    return ge(o, S, { immediate: !0 }), ge(n, b, { immediate: !0 }), (A, $) => (i(), h("span", {
      class: I([r.value ? "invisible" : "visible"])
    }, [
      f(A.$slots, "default")
    ], 2));
  }
}, en = (e) => {
  let s = 0;
  for (let n = 0; n < e.length; n++)
    s = e.charCodeAt(n) + ((s << 5) - s);
  let o = "#";
  for (let n = 0; n < 3; n++) {
    let r = s >> n * 8 & 255;
    o += ("00" + r.toString(16)).substr(-2);
  }
  return o;
}, tn = { class: "text-xs font-medium leading-none text-white" }, zn = {
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
    const s = e, { id: o } = Q(s), n = R(() => en(Ge(o.value.toLowerCase())));
    return (r, u) => (i(), h("span", {
      class: "inline-flex items-center justify-center rounded-full p-4",
      style: Me({ backgroundColor: t(n) })
    }, [
      a("span", tn, H(e.text), 1)
    ], 4));
  }
}, nn = { class: "absolute inset-0 overflow-auto" }, Fn = {
  __name: "Scrollable",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(e) {
    return (s, o) => (i(), B(ve(e.as), { class: "relative" }, {
      default: p(() => [
        a("div", nn, [
          f(s.$slots, "default")
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
    return (s, o) => e.condition ? (i(), B(Ve, N({
      key: 0,
      to: e.to
    }, s.$attrs), [
      f(s.$slots, "default")
    ], 16, ["to"])) : f(s.$slots, "default", { key: 1 });
  }
}, Tn = {
  __name: "UniqueId",
  setup(e) {
    const s = Qe();
    return (o, n) => f(o.$slots, "default", { id: t(s) });
  }
}, On = {
  __name: "WhenMounted",
  setup(e) {
    const s = De();
    return (o, n) => t(s) ? f(o.$slots, "default", { key: 0 }) : F("", !0);
  }
}, se = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}, Hn = (e) => {
  const s = se[e] || 0;
  return me(`(min-width: ${s}px)`);
}, jn = (e) => {
  const s = se[e] || se.sm;
  return me(`(max-width: ${s - 1}px)`);
}, sn = () => {
  const e = ie({});
  for (const s in se) {
    const o = se[s];
    e[s] = me(`(min-width: ${o}px)`);
  }
  return R(() => {
    const s = Object.entries(e).filter(([o, n]) => n);
    return Object.keys(Object.fromEntries(s))[s.length - 1];
  });
}, on = {
  key: 0,
  class: "absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden"
}, ln = { class: "mx-auto text-5xl uppercase" }, Kn = {
  __name: "DebugBreakpoint",
  setup(e) {
    const s = Ee(!1, 200), o = sn();
    return k(o, () => g(s, !0)), (n, r) => t(s) ? (i(), h("div", on, [
      a("div", ln, H(t(o)), 1)
    ])) : F("", !0);
  }
}, an = {
  key: 0,
  class: "inline-grid grid-cols-2 gap-x-4 gap-y-2 w-full"
}, rn = /* @__PURE__ */ a("div", null, "Used", -1), un = { class: "text-right" }, dn = /* @__PURE__ */ a("div", null, "Allocated", -1), cn = { class: "text-right" }, fn = /* @__PURE__ */ a("div", null, "Limit", -1), pn = { class: "text-right" }, yn = {
  key: 1,
  class: "text-xs italic text-gray-600"
}, Pn = {
  __name: "DebugMemory",
  setup(e) {
    const s = (r) => `${(r / 1024 / 1024).toFixed(2)} MB`, { isSupported: o, memory: n } = Ue();
    return (r, u) => t(o) && t(n) ? (i(), h("div", an, [
      t(n) ? (i(), h(J, { key: 0 }, [
        rn,
        a("div", un, H(s(t(n).usedJSHeapSize)), 1),
        dn,
        a("div", cn, H(s(t(n).totalJSHeapSize)), 1),
        fn,
        a("div", pn, H(s(t(n).jsHeapSizeLimit)), 1)
      ], 64)) : F("", !0)
    ])) : (i(), h("div", yn, " Performance memory API not supported "));
  }
};
export {
  _n as Alert,
  An as Blink,
  $n as ComboBox,
  In as CommandPalette,
  Vn as ContextualMenu,
  Kn as DebugBreakpoint,
  Pn as DebugMemory,
  zn as GeneratedAvatar,
  Cn as HoverableElement,
  Bt as Modal,
  Bn as Prompt,
  Sn as PromptIcon,
  qn as PromptTitle,
  Fn as Scrollable,
  Mn as SpinnerIcon,
  Ln as TeleportIf,
  kn as Toggle,
  Tn as UniqueId,
  On as WhenMounted,
  jn as isMaxBreakpoint,
  Hn as isMinBreakpoint,
  en as stringToColor,
  sn as useCurrentBreakpoint
};
