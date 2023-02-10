import { ref as T, toRefs as W, reactive as fe, computed as te, watch as $, onMounted as se, nextTick as N, openBlock as c, createElementBlock as q, withKeys as ye, createVNode as h, unref as n, withCtx as y, renderSlot as p, createTextVNode as me, toDisplayString as E, createElementVNode as a, createCommentVNode as H, Fragment as U, renderList as G, normalizeProps as j, guardReactiveProps as z, mergeProps as ne, createBlock as O, withDirectives as ue, normalizeClass as M, vShow as pe, resolveDynamicComponent as ke, withModifiers as ae } from "vue";
import { Combobox as re, ComboboxLabel as be, ComboboxInput as ie, ComboboxOptions as de, ComboboxOption as ce, TransitionRoot as ge, Dialog as he, TransitionChild as le, DialogPanel as ve, DialogTitle as Ce } from "@headlessui/vue";
import { XIcon as oe, SelectorIcon as xe, CheckIcon as we } from "@heroicons/vue/solid";
import { get as o, templateRef as Q, onClickOutside as $e, set as g, syncRef as X, asyncComputed as Se } from "@vueuse/core";
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
  setup(t, { emit: i }) {
    const s = t, r = T(!1), m = () => g(r, !o(r)), { items: f, excludeSelected: A, modelValue: _, query: B } = W(s), V = s.stringify ?? ((l) => (l == null ? void 0 : l.name) ?? l ?? ""), w = s.uniqueKey ?? ((l) => (l == null ? void 0 : l.id) ?? l), k = fe([]), C = T(o(B)), S = T([]), F = te(() => k.filter((l) => o(S).map(w).includes(w(l)))), u = s.filter ?? (async (l, v) => o(v).filter((e) => V(e).toLowerCase().includes(l.toLowerCase()))), I = te(() => o(f).filter((l) => !o(S).map(w).includes(w(l)))), x = T(o(f)), K = Q("input"), L = () => g(r, !0), P = () => g(r, !1), R = () => o(K).$el.focus();
    function D(l) {
      l.value === "" && o(C) !== "" && (l.value = o(C));
    }
    async function J() {
      g(S, []), g(C, ""), await N(), R(), i("clear");
    }
    async function Y(l) {
      g(S, o(S).filter((v) => w(v) !== w(l))), await N(), R();
    }
    const Z = Q("container");
    return $e(Z, () => P()), $(f, (l) => {
      l.forEach((v) => {
        k.findIndex((e) => w(e) === w(v)) === -1 && k.push(v);
      });
    }, { immediate: !0 }), $(_, (l) => g(S, l), { immediate: !0 }), $(S, (l) => i("update:modelValue", l)), $(S, () => g(C, "")), $(C, (l) => i("update:query", l)), $(C, async (l) => {
      const v = await u(o(l), o(A) ? o(I) : o(f));
      g(x, o(v) ?? []);
    }), $(B, (l) => g(C, l != null ? `${l}` : "")), X(f, x, { direction: "ltr" }), $(C, (l) => o(K).$el.value = l), $(S, () => s.autoHide && P()), $(C, () => L()), se(() => N().then(() => o(K).$el.value = o(C))), se(() => s.autofocus && R()), (l, v) => (c(), q("div", {
      ref_key: "container",
      ref: Z,
      onKeydown: ye(P, ["esc"]),
      onKeyup: v[4] || (v[4] = ({ code: e }) => ["ArrowUp", "ArrowDown"].includes(e) && L())
    }, [
      h(n(re), {
        as: "div",
        modelValue: S.value,
        "onUpdate:modelValue": v[3] || (v[3] = (e) => S.value = e),
        multiple: ""
      }, {
        default: y(() => [
          p(l.$slots, "label", {}, () => [
            h(n(be), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: y(() => [
                me(E(t.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", Ve, [
            a("span", Fe, [
              a("div", Ae, [
                a("span", Ie, [
                  S.value.length === 0 ? (c(), q("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: R
                  }, [
                    p(l.$slots, "empty-state")
                  ])) : H("", !0),
                  t.hideTags ? H("", !0) : (c(!0), q(U, { key: 1 }, G(n(F), (e) => (c(), q("span", {
                    key: n(w)(e)
                  }, [
                    p(l.$slots, "selected-items", j(z({ item: e, stringify: n(V), remove: Y })), () => [
                      a("span", Ke, [
                        a("span", null, E(n(V)(e)), 1),
                        a("button", {
                          role: "button",
                          onClick: (d) => Y(e)
                        }, [
                          h(n(oe), { class: "h-4 w-4" })
                        ], 8, Oe)
                      ])
                    ])
                  ]))), 128)),
                  h(n(ie), ne({
                    ref_key: "input",
                    ref: K,
                    autocomplete: "off"
                  }, t.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: L,
                    onBlur: v[0] || (v[0] = (e) => D(e.target)),
                    onChange: v[1] || (v[1] = (e) => C.value = e.target.value)
                  }), null, 16)
                ]),
                a("div", He, [
                  t.clearable ? (c(), q("button", {
                    key: 0,
                    type: "button",
                    onClick: J
                  }, [
                    S.value.length !== 0 ? (c(), O(n(oe), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : H("", !0)
                  ])) : H("", !0),
                  a("button", {
                    type: "button",
                    onClick: m
                  }, [
                    h(n(xe), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            ue(a("div", Te, [
              x.value.length > 0 ? (c(), O(n(de), {
                key: 0,
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: y(() => [
                  (c(!0), q(U, null, G(x.value, (e) => (c(), O(n(ce), {
                    key: n(w)(e),
                    value: n(w)(e),
                    disabled: t.disabled.includes(n(w)(e)),
                    onClick: v[2] || (v[2] = () => t.autoHide && P())
                  }, {
                    default: y(({ active: d, selected: b }) => [
                      p(l.$slots, "default", j(z({ item: e, active: d, selected: b, stringify: n(V) })), () => [
                        a("li", {
                          class: M(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", d ? "bg-blue-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: M(["block", { truncate: !d, "font-semibold": b, "font-normal": !b }])
                          }, E(n(V)(e)), 3),
                          b ? (c(), q("span", {
                            key: 0,
                            class: M(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": d, "text-blue-600": !d }])
                          }, [
                            h(n(we), { class: "h-5 w-5" })
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
              [pe, r.value]
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
  setup(t, { emit: i }) {
    const s = t, r = T(!1), m = () => g(r, !o(r)), { items: f, excludeSelected: A, modelValue: _, query: B } = W(s), V = s.stringify ?? ((e) => (e == null ? void 0 : e.name) ?? e ?? void 0), w = (e) => {
      try {
        const d = V(e);
        if (d == null)
          throw Error("Cannot stringify nullish value");
        return `${d}`;
      } catch (d) {
        return console.debug("Unable to stringify item", e, d), "";
      }
    }, k = s.uniqueKey ?? ((e) => (e == null ? void 0 : e.id) ?? e), C = fe([]);
    function S(e) {
      return C.find((d) => k(d) === e);
    }
    const F = T(o(B)), u = T(), I = s.filter ?? (async (e, d) => o(d).filter((b) => w(b).toLowerCase().includes(e.toLowerCase()))), x = te(() => o(f).filter((e) => k(e) !== k(o(_)))), K = T(o(f)), L = (e) => e != null ? w(e) : o(F), P = Q("input"), R = () => g(r, !0), D = () => g(r, !1), J = () => o(P).$el.focus();
    function Y(e) {
      e.value === "" && o(F) !== "" && (e.value = o(F));
    }
    async function Z() {
      g(u, void 0), g(F, ""), await N(), J(), i("clear");
    }
    const l = (e) => o(u) != null && k(e) === k(o(u)), v = Q("container");
    return $e(v, () => D()), $(f, (e) => {
      e.forEach((d) => {
        C.findIndex((b) => k(b) === k(d)) === -1 && C.push(d);
      });
    }, { immediate: !0 }), $(C, async () => {
      o(u) == null && s.modelValue != null && (g(u, S(k(s.modelValue))), await N(), D());
    }, { immediate: !0 }), $(_, (e) => g(u, S(e)), { immediate: !0 }), $(u, (e) => {
      k(e) !== k(s.modelValue) && i("update:modelValue", k(e));
    }), $(u, (e) => {
      e == null ? g(F, "") : g(F, w(e));
    }), $(F, (e) => i("update:query", e)), $(F, async (e) => {
      const d = await I(o(e), o(A) ? o(x) : o(f));
      g(K, o(d) ?? []);
    }), $(B, (e) => g(F, e != null ? `${e}` : "")), $(u, () => s.autoHide && D()), $(F, () => R()), X(f, K, { direction: "ltr" }), se(() => s.autofocus && J()), (e, d) => (c(), q("div", {
      ref_key: "container",
      ref: v,
      onKeydown: ye(D, ["esc"]),
      onKeyup: d[4] || (d[4] = ({ code: b }) => ["ArrowUp", "ArrowDown"].includes(b) && R())
    }, [
      h(n(re), {
        as: "div",
        modelValue: u.value,
        "onUpdate:modelValue": d[3] || (d[3] = (b) => u.value = b)
      }, {
        default: y(() => [
          p(e.$slots, "label", {}, () => [
            h(n(be), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: y(() => [
                me(E(t.label), 1)
              ]),
              _: 1
            })
          ]),
          a("div", Le, [
            h(n(ie), ne({
              ref_key: "input",
              ref: P,
              "display-value": L,
              autocomplete: "off"
            }, t.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: R,
              onBlur: d[0] || (d[0] = (b) => Y(b.target)),
              onChange: d[1] || (d[1] = (b) => F.value = b.target.value)
            }), null, 16),
            a("div", Pe, [
              t.clearable ? (c(), q("button", {
                key: 0,
                type: "button",
                onClick: Z
              }, [
                n(_) != null ? (c(), O(n(oe), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : H("", !0)
              ])) : H("", !0),
              a("button", {
                type: "button",
                onClick: m
              }, [
                h(n(xe), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ue(a("div", Ee, [
              h(n(de), {
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: y(() => [
                  (c(!0), q(U, null, G(K.value, (b) => (c(), O(n(ce), {
                    key: n(k)(b),
                    value: b,
                    disabled: t.disabled.includes(n(k)(b)),
                    onClick: d[2] || (d[2] = () => t.autoHide && D())
                  }, {
                    default: y(({ active: ee }) => [
                      p(e.$slots, "default", j(z({ item: b, active: ee, selected: l(b), stringify: w })), () => [
                        a("li", {
                          class: M(["relative cursor-pointer select-none py-2 pl-3 pr-9", ee ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          a("span", {
                            class: M(["block", !ee && "truncate", l(b) && "font-semibold"])
                          }, E(w(b)), 3),
                          l(b) ? (c(), q("span", {
                            key: 0,
                            class: M(["absolute inset-y-0 right-0 flex items-center pr-4", ee ? "text-white" : "text-indigo-600"])
                          }, [
                            h(n(we), {
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
              [pe, r.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, Re));
  }
}, mt = {
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
    return (i, s) => Array.isArray(t.modelValue) ? (c(), O(_e, ne({
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
    }, i.$attrs), {
      label: y(() => [
        p(i.$slots, "label")
      ]),
      "selected-items": y(({ item: r, stringify: m, remove: f }) => [
        p(i.$slots, "selected-items", j(z({ item: r, stringify: m, remove: f })))
      ]),
      default: y(({ item: r, active: m, selected: f, stringify: A }) => [
        p(i.$slots, "default", j(z({ item: r, active: m, selected: f, stringify: A })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (c(), O(je, ne({
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
    }, i.$attrs), {
      label: y(() => [
        p(i.$slots, "label")
      ]),
      default: y(({ item: r, active: m, selected: f, stringify: A }) => [
        p(i.$slots, "default", j(z({ item: r, active: m, selected: f, stringify: A })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, pt = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(t) {
    const i = T(!1);
    function s(r) {
      i.value = r;
    }
    return (r, m) => ue((c(), O(ke(t.as), null, {
      default: y(() => [
        p(r.$slots, "default", { isHovered: i.value })
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
  setup(t, { emit: i }) {
    const s = t, { open: r } = W(s), m = T(s.open);
    function f() {
      i("close");
    }
    return X(r, m, { direction: "ltr" }), (A, _) => (c(), O(n(ge), {
      as: "template",
      show: m.value
    }, {
      default: y(() => [
        h(n(he), {
          as: "div",
          class: "relative z-10",
          onClose: f
        }, {
          default: y(() => [
            h(n(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: y(() => [
                ze
              ]),
              _: 1
            }),
            a("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: _[0] || (_[0] = ae((...B) => A.submit && A.submit(...B), ["prevent"]))
            }, [
              a("div", Me, [
                h(n(le), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: y(() => [
                    h(n(ve), {
                      class: M([
                        t.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "sm:max-w-lg sm:w-full"
                      ])
                    }, {
                      default: y(() => [
                        t.hideCloseIcon ? H("", !0) : (c(), q("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: f
                        }, [
                          h(n(oe), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        p(A.$slots, "default")
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
  setup(t, { emit: i }) {
    const s = t, { open: r } = W(s), m = T(s.open), f = Q("FormHTMLElement");
    async function A() {
      await (s.onSubmit ?? ((V) => i("submit", { form: o(V), visible: m })))({ form: o(f), visible: m }), s.hideOnSubmit && g(m, !1);
    }
    async function _() {
      await (s.onReset ?? ((V) => i("reset", { form: o(V), visible: m })))({ form: o(f), visible: m }), s.hideOnReset && g(m, !1);
    }
    return X(r, m, { direction: "ltr" }), (B, V) => (c(), O(De, { open: m.value }, {
      default: y(() => [
        a("form", {
          ref_key: "FormHTMLElement",
          ref: f,
          onSubmit: ae(A, ["prevent"]),
          onReset: ae(_, ["prevent"])
        }, [
          a("div", null, [
            p(B.$slots, "default", { form: n(f) })
          ]),
          p(B.$slots, "footer", {}, () => [
            a("footer", Ue, [
              p(B.$slots, "buttons", {}, () => [
                a("button", Ge, E(t.submitButtonText), 1),
                a("button", Qe, E(t.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, Ne)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, We = (t, i) => {
  const s = t.__vccOpts || t;
  for (const [r, m] of i)
    s[r] = m;
  return s;
}, Xe = {}, Je = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Ye(t, i) {
  return c(), q("div", Je, [
    p(t.$slots, "default")
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
    return (i, s) => (c(), O(n(Ce), {
      as: t.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: y(() => [
        p(i.$slots, "default")
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
  emits: ["close", "update:open", "pick"],
  setup(t, { emit: i }) {
    const s = t, r = T(""), { open: m } = W(s), f = T(!0);
    X(m, f, { direction: "ltr" });
    const A = async (u, I, x) => u === "" && s.prompt ? [] : I.filter((K) => x(K).toLowerCase().includes(u.toLowerCase())), _ = s.filter ?? A, B = Se(() => _(o(r), s.items, V), s.items), V = s.stringify ?? ((u) => u == null ? void 0 : u.name), w = s.groupGetter ?? (() => {
    }), k = te(
      () => B.value.reduce((u, I) => {
        let x = w(I);
        return { ...u, [x]: [...u[x] || [], I] };
      }, {})
    );
    function C(u) {
      g(r, u);
    }
    function S(u) {
      i("pick", u), F();
    }
    function F() {
      i("close"), i("update:open", !1), g(f, !1);
    }
    return (u, I) => (c(), O(n(ge), {
      show: f.value,
      as: "template",
      onAfterLeave: I[2] || (I[2] = (x) => r.value = ""),
      appear: ""
    }, {
      default: y(() => [
        h(n(he), {
          as: "div",
          class: "relative z-10",
          onClose: I[1] || (I[1] = (x) => F())
        }, {
          default: y(() => [
            h(n(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: y(() => [
                Ze
              ]),
              _: 1
            }),
            a("div", et, [
              h(n(le), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: y(() => [
                  h(n(ve), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: y(() => [
                      h(n(re), { "onUpdate:modelValue": S }, {
                        default: y(() => [
                          a("div", tt, [
                            p(u.$slots, "search-icon", {}, () => [
                              nt
                            ]),
                            p(u.$slots, "input", { query: r.value }, () => [
                              h(n(ie), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                placeholder: t.placeholder,
                                onChange: I[0] || (I[0] = (x) => C(x.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          t.prompt && r.value === "" ? p(u.$slots, "prompt", { key: 0 }, () => [
                            a("div", lt, [
                              p(u.$slots, "prompt-inner")
                            ])
                          ]) : !t.prompt || n(B).length > 0 ? (c(), O(n(de), {
                            key: 1,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2"
                          }, {
                            default: y(() => [
                              (c(!0), q(U, null, G(Object.entries(n(k)), ([x, K]) => (c(), q("li", { key: x }, [
                                p(u.$slots, "group", j(z({ group: x, items: K })), () => [
                                  x !== "undefined" ? (c(), q("h2", ot, E(x), 1)) : H("", !0)
                                ]),
                                a("ul", st, [
                                  (c(!0), q(U, null, G(K, (L, P) => (c(), O(n(ce), {
                                    key: L.id,
                                    value: L,
                                    as: "template"
                                  }, {
                                    default: y(({ active: R }) => [
                                      p(u.$slots, "default", j(z({ group: x, item: L, items: K, index: P, active: R, stringify: n(V) })), () => [
                                        a("li", {
                                          class: M(["cursor-pointer select-none px-4 py-2", R && "bg-indigo-600 text-white"])
                                        }, E(n(V)(L)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : H("", !0),
                          r.value !== "" && n(B).length === 0 ? p(u.$slots, "empty-state", { key: 2 }, () => [
                            a("div", at, [
                              p(u.$slots, "empty-state-inner", {}, () => [
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
  mt as ComboBox,
  vt as CommandPalette,
  pt as HoverableElement,
  De as Modal,
  bt as Prompt,
  gt as PromptIcon,
  ht as PromptTitle
};
