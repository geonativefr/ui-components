import { ref as T, toRefs as X, reactive as fe, computed as te, watch as $, onMounted as se, nextTick as U, openBlock as d, createElementBlock as V, withKeys as ye, createVNode as v, unref as n, withCtx as f, renderSlot as m, createTextVNode as pe, toDisplayString as j, createElementVNode as a, createCommentVNode as H, Fragment as G, renderList as Q, normalizeProps as z, guardReactiveProps as M, mergeProps as ne, createBlock as O, withDirectives as ue, normalizeClass as D, vShow as me, resolveDynamicComponent as ke, withModifiers as ae } from "vue";
import { Combobox as re, ComboboxLabel as be, ComboboxInput as ie, ComboboxOptions as de, ComboboxOption as ce, TransitionRoot as ge, Dialog as he, TransitionChild as le, DialogPanel as ve, DialogTitle as Ce } from "@headlessui/vue";
import { XIcon as oe, SelectorIcon as xe, CheckIcon as we } from "@heroicons/vue/solid";
import { get as o, templateRef as W, onClickOutside as $e, set as g, syncRef as N, asyncComputed as Se } from "@vueuse/core";
import { vElementHover as Be } from "@vueuse/components";
const qe = ["onKeydown"], Ve = { class: "relative" }, Fe = { class: "inline-block w-full rounded-md shadow-sm" }, Ae = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500 sm:text-sm sm:leading-5" }, Ie = { class: "block flex flex-wrap gap-2" }, Ke = { class: "flex items-center gap-1 rounded bg-blue-600 text-white px-2 py-0.5" }, Oe = ["onClick"], He = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, Te = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, _e = {
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
  setup(t, { emit: u }) {
    const s = t, c = T(!1), y = () => g(c, !o(c)), { items: r, excludeSelected: q, modelValue: _, query: I } = X(s), F = s.stringify ?? ((l) => (l == null ? void 0 : l.name) ?? l ?? ""), x = s.uniqueKey ?? ((l) => (l == null ? void 0 : l.id) ?? l), k = fe([]), C = T(o(I)), S = T([]), K = te(() => k.filter((l) => o(S).map(x).includes(x(l)))), A = s.filter ?? (async (l, w) => o(w).filter((e) => F(e).toLowerCase().includes(l.toLowerCase()))), p = te(() => o(r).filter((l) => !o(S).map(x).includes(x(l)))), B = T(o(r)), h = W("input"), L = () => g(c, !0), R = () => g(c, !1), P = () => o(h).$el.focus();
    function E(l) {
      l.value === "" && o(C) !== "" && (l.value = o(C));
    }
    async function J() {
      g(S, []), g(C, ""), await U(), P(), u("clear");
    }
    async function Y(l) {
      g(S, o(S).filter((w) => x(w) !== x(l))), await U(), P();
    }
    const Z = W("container");
    return $e(Z, () => R()), $(r, (l) => {
      l.forEach((w) => {
        k.findIndex((e) => x(e) === x(w)) === -1 && k.push(w);
      });
    }, { immediate: !0 }), $(_, (l) => g(S, l), { immediate: !0 }), $(S, (l) => u("update:modelValue", l)), $(S, () => g(C, "")), $(C, (l) => u("update:query", l)), $(C, async (l) => {
      const w = await A(o(l), o(q) ? o(p) : o(r));
      g(B, o(w) ?? []);
    }), $(I, (l) => g(C, l != null ? `${l}` : "")), N(r, B, { direction: "ltr" }), $(C, (l) => o(h).$el.value = l), $(S, () => s.autoHide && R()), $(C, () => L()), se(() => U().then(() => o(h).$el.value = o(C))), se(() => s.autofocus && P()), (l, w) => (d(), V("div", {
      ref_key: "container",
      ref: Z,
      onKeydown: ye(R, ["esc"]),
      onKeyup: w[4] || (w[4] = ({ code: e }) => ["ArrowUp", "ArrowDown"].includes(e) && L())
    }, [
      v(n(re), {
        as: "div",
        modelValue: S.value,
        "onUpdate:modelValue": w[3] || (w[3] = (e) => S.value = e),
        multiple: ""
      }, {
        default: f(() => [
          m(l.$slots, "label", {}, () => [
            v(n(be), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: f(() => [
                pe(j(t.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", Ve, [
            a("span", Fe, [
              a("div", Ae, [
                a("span", Ie, [
                  S.value.length === 0 ? (d(), V("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: P
                  }, [
                    m(l.$slots, "empty-state")
                  ])) : H("", !0),
                  t.hideTags ? H("", !0) : (d(!0), V(G, { key: 1 }, Q(n(K), (e) => (d(), V("span", {
                    key: n(x)(e)
                  }, [
                    m(l.$slots, "selected-items", z(M({ item: e, stringify: n(F), remove: Y })), () => [
                      a("span", Ke, [
                        a("span", null, j(n(F)(e)), 1),
                        a("button", {
                          role: "button",
                          onClick: (i) => Y(e)
                        }, [
                          v(n(oe), { class: "h-4 w-4" })
                        ], 8, Oe)
                      ])
                    ])
                  ]))), 128)),
                  v(n(ie), ne({
                    ref_key: "input",
                    ref: h,
                    autocomplete: "off"
                  }, t.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: L,
                    onBlur: w[0] || (w[0] = (e) => E(e.target)),
                    onChange: w[1] || (w[1] = (e) => C.value = e.target.value)
                  }), null, 16)
                ]),
                a("div", He, [
                  t.clearable ? (d(), V("button", {
                    key: 0,
                    type: "button",
                    onClick: J
                  }, [
                    S.value.length !== 0 ? (d(), O(n(oe), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : H("", !0)
                  ])) : H("", !0),
                  a("button", {
                    type: "button",
                    onClick: y
                  }, [
                    v(n(xe), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            ue(a("div", Te, [
              B.value.length > 0 ? (d(), O(n(de), {
                key: 0,
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: f(() => [
                  (d(!0), V(G, null, Q(B.value, (e) => (d(), O(n(ce), {
                    key: n(x)(e),
                    value: n(x)(e),
                    disabled: t.disabled.includes(n(x)(e)),
                    onClick: w[2] || (w[2] = () => t.autoHide && R())
                  }, {
                    default: f(({ active: i, selected: b }) => [
                      m(l.$slots, "default", z(M({ item: e, active: i, selected: b, stringify: n(F) })), () => [
                        a("li", {
                          class: D(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", i ? "bg-blue-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: D(["block", { truncate: !i, "font-semibold": b, "font-normal": !b }])
                          }, j(n(F)(e)), 3),
                          b ? (d(), V("span", {
                            key: 0,
                            class: D(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": i, "text-blue-600": !i }])
                          }, [
                            v(n(we), { class: "h-5 w-5" })
                          ], 2)) : H("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])) : H("", !0)
            ], 512), [
              [me, c.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, qe));
  }
}, Re = ["onKeydown"], Le = { class: "relative" }, Pe = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, Ee = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, je = {
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
  setup(t, { emit: u }) {
    const s = t, c = T(!1), y = () => g(c, !o(c)), { items: r, excludeSelected: q, modelValue: _, query: I } = X(s), F = s.stringify ?? ((e) => (e == null ? void 0 : e.name) ?? e ?? void 0), x = (e) => {
      try {
        const i = F(e);
        if (i == null)
          throw Error("Cannot stringify nullish value");
        return `${i}`;
      } catch (i) {
        return console.debug("Unable to stringify item", e, i), "";
      }
    }, k = s.uniqueKey ?? ((e) => (e == null ? void 0 : e.id) ?? e), C = fe([]);
    function S(e) {
      return C.find((i) => k(i) === e);
    }
    const K = T(o(I)), A = T(), p = s.filter ?? (async (e, i) => o(i).filter((b) => x(b).toLowerCase().includes(e.toLowerCase()))), B = te(() => o(r).filter((e) => k(e) !== k(o(_)))), h = T(o(r)), L = (e) => e != null ? x(e) : o(K), R = W("input"), P = () => g(c, !0), E = () => g(c, !1), J = () => o(R).$el.focus();
    function Y(e) {
      e.value === "" && o(K) !== "" && (e.value = o(K));
    }
    async function Z() {
      g(A, void 0), g(K, ""), await U(), J(), u("clear");
    }
    const l = (e) => o(A) != null && k(e) === k(o(A)), w = W("container");
    return $e(w, () => E()), $(r, (e) => {
      e.forEach((i) => {
        C.findIndex((b) => k(b) === k(i)) === -1 && C.push(i);
      });
    }, { immediate: !0 }), $(C, async () => {
      o(A) == null && s.modelValue != null && (g(A, S(k(s.modelValue))), await U(), E());
    }, { immediate: !0 }), $(_, (e) => g(A, S(e)), { immediate: !0 }), $(A, (e) => {
      k(e) !== k(s.modelValue) && u("update:modelValue", k(e));
    }), $(A, (e) => {
      e == null ? g(K, "") : g(K, x(e));
    }), $(K, (e) => u("update:query", e)), $(K, async (e) => {
      const i = await p(o(e), o(q) ? o(B) : o(r));
      g(h, o(i) ?? []);
    }), $(I, (e) => g(K, e != null ? `${e}` : "")), $(A, () => s.autoHide && E()), $(K, () => P()), N(r, h, { direction: "ltr" }), se(() => s.autofocus && J()), (e, i) => (d(), V("div", {
      ref_key: "container",
      ref: w,
      onKeydown: ye(E, ["esc"]),
      onKeyup: i[4] || (i[4] = ({ code: b }) => ["ArrowUp", "ArrowDown"].includes(b) && P())
    }, [
      v(n(re), {
        as: "div",
        modelValue: A.value,
        "onUpdate:modelValue": i[3] || (i[3] = (b) => A.value = b)
      }, {
        default: f(() => [
          m(e.$slots, "label", {}, () => [
            v(n(be), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: f(() => [
                pe(j(t.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", Le, [
            v(n(ie), ne({
              ref_key: "input",
              ref: R,
              "display-value": L,
              autocomplete: "off"
            }, t.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: P,
              onBlur: i[0] || (i[0] = (b) => Y(b.target)),
              onChange: i[1] || (i[1] = (b) => K.value = b.target.value)
            }), null, 16),
            a("div", Pe, [
              t.clearable ? (d(), V("button", {
                key: 0,
                type: "button",
                onClick: Z
              }, [
                n(_) != null ? (d(), O(n(oe), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : H("", !0)
              ])) : H("", !0),
              a("button", {
                type: "button",
                onClick: y
              }, [
                v(n(xe), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ue(a("div", Ee, [
              v(n(de), {
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: f(() => [
                  (d(!0), V(G, null, Q(h.value, (b) => (d(), O(n(ce), {
                    key: n(k)(b),
                    value: b,
                    disabled: t.disabled.includes(n(k)(b)),
                    onClick: i[2] || (i[2] = () => t.autoHide && E())
                  }, {
                    default: f(({ active: ee }) => [
                      m(e.$slots, "default", z(M({ item: b, active: ee, selected: l(b), stringify: x })), () => [
                        a("li", {
                          class: D(["relative cursor-pointer select-none py-2 pl-3 pr-9", ee ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: D(["block", !ee && "truncate", l(b) && "font-semibold"])
                          }, j(x(b)), 3),
                          l(b) ? (d(), V("span", {
                            key: 0,
                            class: D(["absolute inset-y-0 right-0 flex items-center pr-4", ee ? "text-white" : "text-indigo-600"])
                          }, [
                            v(n(we), {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : H("", !0)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))), 128))
                ]),
                _: 3
              }, 8, ["static"])
            ], 512), [
              [me, c.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, Re));
  }
}, pt = {
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
  setup(t) {
    return (u, s) => Array.isArray(t.modelValue) ? (d(), O(_e, ne({
      key: 0,
      items: t.items,
      "model-value": t.modelValue,
      stringify: t.stringify,
      "unique-key": t.uniqueKey,
      filter: t.filter,
      "input-attrs": t.inputAttrs,
      "exclude-selected": t.excludeSelected,
      clearable: t.clearable,
      label: t.label
    }, u.$attrs), {
      label: f(() => [
        m(u.$slots, "label")
      ]),
      "selected-items": f(({ item: c, stringify: y, remove: r }) => [
        m(u.$slots, "selected-items", z(M({ item: c, stringify: y, remove: r })))
      ]),
      default: f(({ item: c, active: y, selected: r, stringify: q }) => [
        m(u.$slots, "default", z(M({ item: c, active: y, selected: r, stringify: q })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (d(), O(je, ne({
      key: 1,
      items: t.items,
      "model-value": t.modelValue,
      stringify: t.stringify,
      "unique-key": t.uniqueKey,
      filter: t.filter,
      "input-attrs": t.inputAttrs,
      "exclude-selected": t.excludeSelected,
      clearable: t.clearable,
      label: t.label
    }, u.$attrs), {
      label: f(() => [
        m(u.$slots, "label")
      ]),
      default: f(({ item: c, active: y, selected: r, stringify: q }) => [
        m(u.$slots, "default", z(M({ item: c, active: y, selected: r, stringify: q })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, mt = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(t) {
    const u = T(!1);
    function s(c) {
      u.value = c;
    }
    return (c, y) => ue((d(), O(ke(t.as), null, {
      default: f(() => [
        m(c.$slots, "default", { isHovered: u.value })
      ]),
      _: 3
    })), [
      [n(Be), s]
    ]);
  }
}, ze = /* @__PURE__ */ a("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Me = { class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" }, De = {
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
  setup(t, { emit: u }) {
    const s = t, { open: c } = X(s), y = T(s.open);
    function r() {
      u("close");
    }
    return N(c, y, { direction: "ltr" }), (q, _) => (d(), O(n(ge), {
      as: "template",
      show: y.value
    }, {
      default: f(() => [
        v(n(he), {
          as: "div",
          class: "relative z-10",
          onClose: r
        }, {
          default: f(() => [
            v(n(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: f(() => [
                ze
              ]),
              _: 1
            }),
            a("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: _[0] || (_[0] = ae((...I) => q.submit && q.submit(...I), ["prevent"]))
            }, [
              a("div", Me, [
                v(n(le), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: f(() => [
                    v(n(ve), {
                      class: D([
                        t.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "sm:max-w-lg sm:w-full"
                      ])
                    }, {
                      default: f(() => [
                        t.hideCloseIcon ? H("", !0) : (d(), V("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: r
                        }, [
                          v(n(oe), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        m(q.$slots, "default")
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
}, Ne = ["onSubmit", "onReset"], Ue = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, Ge = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, Qe = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, bt = {
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
  setup(t, { emit: u }) {
    const s = t, { open: c } = X(s), y = T(s.open), r = W("FormHTMLElement");
    async function q() {
      await (s.onSubmit ?? ((F) => u("submit", { form: o(F), visible: y })))({ form: o(r), visible: y }), s.hideOnSubmit && g(y, !1);
    }
    async function _() {
      await (s.onReset ?? ((F) => u("reset", { form: o(F), visible: y })))({ form: o(r), visible: y }), s.hideOnReset && g(y, !1);
    }
    return N(c, y, { direction: "ltr" }), (I, F) => (d(), O(De, { open: y.value }, {
      default: f(() => [
        a("form", {
          ref_key: "FormHTMLElement",
          ref: r,
          onSubmit: ae(q, ["prevent"]),
          onReset: ae(_, ["prevent"])
        }, [
          a("div", null, [
            m(I.$slots, "default", { form: n(r) })
          ]),
          m(I.$slots, "footer", {}, () => [
            a("footer", Ue, [
              m(I.$slots, "buttons", {}, () => [
                a("button", Ge, j(t.submitButtonText), 1),
                a("button", Qe, j(t.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, Ne)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, We = (t, u) => {
  const s = t.__vccOpts || t;
  for (const [c, y] of u)
    s[c] = y;
  return s;
}, Xe = {}, Je = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Ye(t, u) {
  return d(), V("div", Je, [
    m(t.$slots, "default")
  ]);
}
const gt = /* @__PURE__ */ We(Xe, [["render", Ye]]), ht = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(t) {
    return (u, s) => (d(), O(n(Ce), {
      as: t.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: f(() => [
        m(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, Ze = /* @__PURE__ */ a("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), et = { class: "fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" }, tt = { class: "relative" }, nt = /* @__PURE__ */ a("svg", {
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
], -1), lt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, ot = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, st = { class: "mt-2 text-sm text-gray-800" }, at = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, ut = /* @__PURE__ */ a("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), rt = /* @__PURE__ */ a("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), vt = {
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
    placeholder: {
      type: String,
      default: "Search..."
    }
  },
  emits: ["close", "update:open", "update:query", "pick"],
  setup(t, { emit: u }) {
    const s = t, { open: c, query: y } = X(s), r = T(o(y)), q = T(!0);
    N(c, q, { direction: "ltr" }), N(y, r, { direction: "ltr" });
    const _ = async (p, B, h) => p === "" && s.prompt ? [] : B.filter((L) => h(L).toLowerCase().includes(p.toLowerCase())), I = s.filter ?? _, F = Se(() => I(o(r), s.items, x), s.items), x = s.stringify ?? ((p) => p == null ? void 0 : p.name), k = s.groupGetter ?? (() => {
    }), C = te(
      () => F.value.reduce((p, B) => {
        let h = k(B);
        return { ...p, [h]: [...p[h] || [], B] };
      }, {})
    );
    function S(p) {
      g(r, p), u("update:query", p);
    }
    function K(p) {
      u("pick", p), A();
    }
    function A() {
      u("close"), u("update:open", !1), g(q, !1);
    }
    return (p, B) => (d(), O(n(ge), {
      show: q.value,
      as: "template",
      onAfterLeave: B[2] || (B[2] = (h) => r.value = ""),
      appear: ""
    }, {
      default: f(() => [
        v(n(he), {
          as: "div",
          class: "relative z-10",
          onClose: B[1] || (B[1] = (h) => A())
        }, {
          default: f(() => [
            v(n(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: f(() => [
                Ze
              ]),
              _: 1
            }),
            a("div", et, [
              v(n(le), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: f(() => [
                  v(n(ve), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: f(() => [
                      v(n(re), { "onUpdate:modelValue": K }, {
                        default: f(() => [
                          a("div", tt, [
                            m(p.$slots, "search-icon", {}, () => [
                              nt
                            ]),
                            m(p.$slots, "input", { query: r.value }, () => [
                              v(n(ie), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                placeholder: t.placeholder,
                                onChange: B[0] || (B[0] = (h) => S(h.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          t.prompt && r.value === "" ? m(p.$slots, "prompt", { key: 0 }, () => [
                            a("div", lt, [
                              m(p.$slots, "prompt-inner")
                            ])
                          ]) : !t.prompt || n(F).length > 0 ? (d(), O(n(de), {
                            key: 1,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: f(() => [
                              (d(!0), V(G, null, Q(Object.entries(n(C)), ([h, L]) => (d(), V("li", { key: h }, [
                                m(p.$slots, "group", z(M({ group: h, items: L })), () => [
                                  h !== "undefined" ? (d(), V("h2", ot, j(h), 1)) : H("", !0)
                                ]),
                                a("ul", st, [
                                  (d(!0), V(G, null, Q(L, (R, P) => (d(), O(n(ce), {
                                    key: R.id,
                                    value: R,
                                    as: "template"
                                  }, {
                                    default: f(({ active: E }) => [
                                      m(p.$slots, "default", z(M({ group: h, item: R, items: L, index: P, active: E, stringify: n(x) })), () => [
                                        a("li", {
                                          class: D(["cursor-pointer select-none px-4 py-2", E && "bg-indigo-600 text-white"])
                                        }, j(n(x)(R)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : H("", !0),
                          r.value !== "" && n(F).length === 0 ? m(p.$slots, "empty-state", { key: 2 }, () => [
                            a("div", at, [
                              m(p.$slots, "empty-state-inner", {}, () => [
                                ut,
                                rt
                              ])
                            ])
                          ]) : H("", !0)
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
};
export {
  pt as ComboBox,
  vt as CommandPalette,
  mt as HoverableElement,
  De as Modal,
  bt as Prompt,
  gt as PromptIcon,
  ht as PromptTitle
};
