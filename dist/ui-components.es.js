import { ref as F, toRefs as Y, reactive as ie, computed as te, watch as g, onMounted as ne, nextTick as N, openBlock as m, createElementBlock as V, withKeys as re, createVNode as x, unref as o, withCtx as b, renderSlot as v, createTextVNode as de, toDisplayString as j, createElementVNode as r, createCommentVNode as H, Fragment as le, renderList as oe, normalizeProps as D, guardReactiveProps as M, mergeProps as J, createBlock as I, withDirectives as ae, normalizeClass as L, vShow as ce, resolveDynamicComponent as we, withModifiers as se } from "vue";
import { Combobox as fe, ComboboxLabel as me, ComboboxInput as ye, ComboboxOptions as pe, ComboboxOption as be, TransitionRoot as xe, Dialog as ke, TransitionChild as ue, DialogPanel as $e, DialogTitle as Ce } from "@headlessui/vue";
import { XIcon as W, SelectorIcon as ge, CheckIcon as he } from "@heroicons/vue/solid";
import { get as l, templateRef as U, onClickOutside as ve, set as y, syncRef as Z } from "@vueuse/core";
import { vElementHover as Se } from "@vueuse/components";
const Be = ["onKeydown"], qe = { class: "relative" }, Ve = { class: "inline-block w-full rounded-md shadow-sm" }, Ae = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500 sm:text-sm sm:leading-5" }, Fe = { class: "block flex flex-wrap gap-2" }, Ie = { class: "flex items-center gap-1 rounded bg-blue-600 text-white px-2 py-0.5" }, Ke = ["onClick"], He = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, Oe = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, Te = {
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
  setup(t, { emit: u }) {
    const s = t, i = F(!1), f = () => y(i, !l(i)), { items: d, excludeSelected: C, modelValue: K, query: S } = Y(s), A = s.stringify ?? ((n) => (n == null ? void 0 : n.name) ?? n ?? ""), h = s.uniqueKey ?? ((n) => (n == null ? void 0 : n.id) ?? n), w = ie([]), k = F(l(S)), $ = F([]), B = te(() => w.filter((n) => l($).map(h).includes(h(n)))), q = s.filter ?? (async (n, p) => l(p).filter((e) => A(e).toLowerCase().includes(n.toLowerCase()))), ee = te(() => l(d).filter((n) => !l($).map(h).includes(h(n)))), P = F(l(d)), O = U("input"), z = () => y(i, !0), R = () => y(i, !1), T = () => l(O).$el.focus();
    function E(n) {
      n.value === "" && l(k) !== "" && (n.value = l(k));
    }
    async function Q() {
      y($, []), y(k, ""), await N(), T(), u("clear");
    }
    async function X(n) {
      y($, l($).filter((p) => h(p) !== h(n))), await N(), T();
    }
    const _ = U("container");
    return ve(_, () => R()), g(d, (n) => {
      n.forEach((p) => {
        w.findIndex((e) => h(e) === h(p)) === -1 && w.push(p);
      });
    }, { immediate: !0 }), g(K, (n) => y($, n), { immediate: !0 }), g($, (n) => u("update:modelValue", n)), g($, () => y(k, "")), g(k, (n) => u("update:query", n)), g(k, async (n) => {
      const p = await q(l(n), l(C) ? l(ee) : l(d));
      y(P, l(p) ?? []);
    }), g(S, (n) => y(k, n != null ? `${n}` : "")), Z(d, P, { direction: "ltr" }), g(k, (n) => l(O).$el.value = n), g($, () => s.autoHide && R()), g(k, () => z()), ne(() => N().then(() => l(O).$el.value = l(k))), ne(() => s.autofocus && T()), (n, p) => (m(), V("div", {
      ref_key: "container",
      ref: _,
      onKeydown: re(R, ["esc"]),
      onKeyup: p[4] || (p[4] = ({ code: e }) => ["ArrowUp", "ArrowDown"].includes(e) && z())
    }, [
      x(o(fe), {
        as: "div",
        modelValue: $.value,
        "onUpdate:modelValue": p[3] || (p[3] = (e) => $.value = e),
        multiple: ""
      }, {
        default: b(() => [
          v(n.$slots, "label", {}, () => [
            x(o(me), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: b(() => [
                de(j(t.label), 1)
              ]),
              _: 1
            })
          ]),
          r("div", qe, [
            r("span", Ve, [
              r("div", Ae, [
                r("span", Fe, [
                  $.value.length === 0 ? (m(), V("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: T
                  }, [
                    v(n.$slots, "empty-state")
                  ])) : H("", !0),
                  t.hideTags ? H("", !0) : (m(!0), V(le, { key: 1 }, oe(o(B), (e) => (m(), V("span", {
                    key: o(h)(e)
                  }, [
                    v(n.$slots, "selected-items", D(M({ item: e, stringify: o(A), remove: X })), () => [
                      r("span", Ie, [
                        r("span", null, j(o(A)(e)), 1),
                        r("button", {
                          role: "button",
                          onClick: (a) => X(e)
                        }, [
                          x(o(W), { class: "h-4 w-4" })
                        ], 8, Ke)
                      ])
                    ])
                  ]))), 128)),
                  x(o(ye), J({
                    ref_key: "input",
                    ref: O,
                    autocomplete: "off"
                  }, t.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: z,
                    onBlur: p[0] || (p[0] = (e) => E(e.target)),
                    onChange: p[1] || (p[1] = (e) => k.value = e.target.value)
                  }), null, 16)
                ]),
                r("div", He, [
                  t.clearable ? (m(), V("button", {
                    key: 0,
                    type: "button",
                    onClick: Q
                  }, [
                    $.value.length !== 0 ? (m(), I(o(W), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : H("", !0)
                  ])) : H("", !0),
                  r("button", {
                    type: "button",
                    onClick: f
                  }, [
                    x(o(ge), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            ae(r("div", Oe, [
              P.value.length > 0 ? (m(), I(o(pe), {
                key: 0,
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: b(() => [
                  (m(!0), V(le, null, oe(P.value, (e) => (m(), I(o(be), {
                    key: o(h)(e),
                    value: o(h)(e),
                    disabled: t.disabled.includes(o(h)(e)),
                    onClick: p[2] || (p[2] = () => t.autoHide && R())
                  }, {
                    default: b(({ active: a, selected: c }) => [
                      v(n.$slots, "default", D(M({ item: e, active: a, selected: c, stringify: o(A) })), () => [
                        r("li", {
                          class: L(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", a ? "bg-blue-600 text-white" : "text-gray-900"])
                        }, [
                          r("span", {
                            class: L(["block", { truncate: !a, "font-semibold": c, "font-normal": !c }])
                          }, j(o(A)(e)), 3),
                          c ? (m(), V("span", {
                            key: 0,
                            class: L(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": a, "text-blue-600": !a }])
                          }, [
                            x(o(he), { class: "h-5 w-5" })
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
              [ce, i.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, Be));
  }
}, Re = ["onKeydown"], Ee = { class: "relative" }, je = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, Le = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, Pe = {
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
  setup(t, { emit: u }) {
    const s = t, i = F(!1), f = () => y(i, !l(i)), { items: d, excludeSelected: C, modelValue: K, query: S } = Y(s), A = s.stringify ?? ((e) => (e == null ? void 0 : e.name) ?? e ?? void 0), h = (e) => {
      try {
        const a = A(e);
        if (a == null)
          throw Error("Cannot stringify nullish value");
        return `${a}`;
      } catch (a) {
        return console.debug("Unable to stringify item", e, a), "";
      }
    }, w = s.uniqueKey ?? ((e) => (e == null ? void 0 : e.id) ?? e), k = ie([]);
    function $(e) {
      return k.find((a) => w(a) === e);
    }
    const B = F(l(S)), q = F(), ee = s.filter ?? (async (e, a) => l(a).filter((c) => h(c).toLowerCase().includes(e.toLowerCase()))), P = te(() => l(d).filter((e) => w(e) !== w(l(K)))), O = F(l(d)), z = (e) => e != null ? h(e) : l(B), R = U("input"), T = () => y(i, !0), E = () => y(i, !1), Q = () => l(R).$el.focus();
    function X(e) {
      e.value === "" && l(B) !== "" && (e.value = l(B));
    }
    async function _() {
      y(q, void 0), y(B, ""), await N(), Q(), u("clear");
    }
    const n = (e) => l(q) != null && w(e) === w(l(q)), p = U("container");
    return ve(p, () => E()), g(d, (e) => {
      e.forEach((a) => {
        k.findIndex((c) => w(c) === w(a)) === -1 && k.push(a);
      });
    }, { immediate: !0 }), g(k, async () => {
      l(q) == null && s.modelValue != null && (y(q, $(w(s.modelValue))), await N(), E());
    }, { immediate: !0 }), g(K, (e) => y(q, $(e)), { immediate: !0 }), g(q, (e) => {
      w(e) !== w(s.modelValue) && u("update:modelValue", w(e));
    }), g(q, (e) => {
      e == null ? y(B, "") : y(B, h(e));
    }), g(B, (e) => u("update:query", e)), g(B, async (e) => {
      const a = await ee(l(e), l(C) ? l(P) : l(d));
      y(O, l(a) ?? []);
    }), g(S, (e) => y(B, e != null ? `${e}` : "")), g(q, () => s.autoHide && E()), g(B, () => T()), Z(d, O, { direction: "ltr" }), ne(() => s.autofocus && Q()), (e, a) => (m(), V("div", {
      ref_key: "container",
      ref: p,
      onKeydown: re(E, ["esc"]),
      onKeyup: a[4] || (a[4] = ({ code: c }) => ["ArrowUp", "ArrowDown"].includes(c) && T())
    }, [
      x(o(fe), {
        as: "div",
        modelValue: q.value,
        "onUpdate:modelValue": a[3] || (a[3] = (c) => q.value = c)
      }, {
        default: b(() => [
          v(e.$slots, "label", {}, () => [
            x(o(me), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: b(() => [
                de(j(t.label), 1)
              ]),
              _: 1
            })
          ]),
          r("div", Ee, [
            x(o(ye), J({
              ref_key: "input",
              ref: R,
              "display-value": z,
              autocomplete: "off"
            }, t.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: T,
              onBlur: a[0] || (a[0] = (c) => X(c.target)),
              onChange: a[1] || (a[1] = (c) => B.value = c.target.value)
            }), null, 16),
            r("div", je, [
              t.clearable ? (m(), V("button", {
                key: 0,
                type: "button",
                onClick: _
              }, [
                o(K) != null ? (m(), I(o(W), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : H("", !0)
              ])) : H("", !0),
              r("button", {
                type: "button",
                onClick: f
              }, [
                x(o(ge), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            ae(r("div", Le, [
              x(o(pe), {
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: b(() => [
                  (m(!0), V(le, null, oe(O.value, (c) => (m(), I(o(be), {
                    key: o(w)(c),
                    value: c,
                    disabled: t.disabled.includes(o(w)(c)),
                    onClick: a[2] || (a[2] = () => t.autoHide && E())
                  }, {
                    default: b(({ active: G }) => [
                      v(e.$slots, "default", D(M({ item: c, active: G, selected: n(c), stringify: h })), () => [
                        r("li", {
                          class: L(["relative cursor-pointer select-none py-2 pl-3 pr-9", G ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          r("span", {
                            class: L(["block", !G && "truncate", n(c) && "font-semibold"])
                          }, j(h(c)), 3),
                          n(c) ? (m(), V("span", {
                            key: 0,
                            class: L(["absolute inset-y-0 right-0 flex items-center pr-4", G ? "text-white" : "text-indigo-600"])
                          }, [
                            x(o(he), {
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
              [ce, i.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, Re));
  }
}, lt = {
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
    return (u, s) => Array.isArray(t.modelValue) ? (m(), I(Te, J({
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
      label: b(() => [
        v(u.$slots, "label")
      ]),
      "selected-items": b(({ item: i, stringify: f, remove: d }) => [
        v(u.$slots, "selected-items", D(M({ item: i, stringify: f, remove: d })))
      ]),
      default: b(({ item: i, active: f, selected: d, stringify: C }) => [
        v(u.$slots, "default", D(M({ item: i, active: f, selected: d, stringify: C })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (m(), I(Pe, J({
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
      label: b(() => [
        v(u.$slots, "label")
      ]),
      default: b(({ item: i, active: f, selected: d, stringify: C }) => [
        v(u.$slots, "default", D(M({ item: i, active: f, selected: d, stringify: C })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, ot = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(t) {
    const u = F(!1);
    function s(i) {
      u.value = i;
    }
    return (i, f) => ae((m(), I(we(t.as), null, {
      default: b(() => [
        v(i.$slots, "default", { isHovered: u.value })
      ]),
      _: 3
    })), [
      [o(Se), s]
    ]);
  }
}, De = /* @__PURE__ */ r("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), Me = { class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" }, ze = {
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
    const s = t, { open: i } = Y(s), f = F(s.open);
    function d() {
      u("close");
    }
    return Z(i, f, { direction: "ltr" }), (C, K) => (m(), I(o(xe), {
      as: "template",
      show: f.value
    }, {
      default: b(() => [
        x(o(ke), {
          as: "div",
          class: "relative z-10",
          onClose: d
        }, {
          default: b(() => [
            x(o(ue), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: b(() => [
                De
              ]),
              _: 1
            }),
            r("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: K[0] || (K[0] = se((...S) => C.submit && C.submit(...S), ["prevent"]))
            }, [
              r("div", Me, [
                x(o(ue), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: b(() => [
                    x(o($e), {
                      class: L([
                        t.hideCloseIcon ? "pt-5" : "pt-8",
                        "relative bg-white rounded-lg",
                        "px-4 pb-4",
                        "text-left overflow-hidden shadow-xl",
                        "transform transition-all",
                        "sm:max-w-lg sm:w-full"
                      ])
                    }, {
                      default: b(() => [
                        t.hideCloseIcon ? H("", !0) : (m(), V("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: d
                        }, [
                          x(o(W), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        v(C.$slots, "default")
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
}, Ne = ["onSubmit", "onReset"], Ue = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, Qe = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, Xe = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, st = {
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
    const s = t, { open: i } = Y(s), f = F(s.open), d = U("FormHTMLElement");
    async function C() {
      await (s.onSubmit ?? ((A) => u("submit", { form: l(A), visible: f })))({ form: l(d), visible: f }), s.hideOnSubmit && y(f, !1);
    }
    async function K() {
      await (s.onReset ?? ((A) => u("reset", { form: l(A), visible: f })))({ form: l(d), visible: f }), s.hideOnReset && y(f, !1);
    }
    return Z(i, f, { direction: "ltr" }), (S, A) => (m(), I(ze, { open: f.value }, {
      default: b(() => [
        r("form", {
          ref_key: "FormHTMLElement",
          ref: d,
          onSubmit: se(C, ["prevent"]),
          onReset: se(K, ["prevent"])
        }, [
          r("div", null, [
            v(S.$slots, "default", { form: o(d) })
          ]),
          v(S.$slots, "footer", {}, () => [
            r("footer", Ue, [
              v(S.$slots, "buttons", {}, () => [
                r("button", Qe, j(t.submitButtonText), 1),
                r("button", Xe, j(t.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, Ne)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, _e = (t, u) => {
  const s = t.__vccOpts || t;
  for (const [i, f] of u)
    s[i] = f;
  return s;
}, Ge = {}, Je = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function We(t, u) {
  return m(), V("div", Je, [
    v(t.$slots, "default")
  ]);
}
const at = /* @__PURE__ */ _e(Ge, [["render", We]]), ut = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(t) {
    return (u, s) => (m(), I(o(Ce), {
      as: t.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: b(() => [
        v(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
};
export {
  lt as ComboBox,
  ot as HoverableElement,
  ze as Modal,
  st as Prompt,
  at as PromptIcon,
  ut as PromptTitle
};
