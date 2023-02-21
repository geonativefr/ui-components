import { ref as O, toRefs as ee, reactive as ye, computed as ne, watch as $, onMounted as se, nextTick as X, openBlock as c, createElementBlock as V, withKeys as pe, createVNode as v, unref as n, withCtx as y, renderSlot as p, createTextVNode as ue, toDisplayString as j, createElementVNode as u, createCommentVNode as R, Fragment as J, renderList as Y, normalizeProps as _, guardReactiveProps as z, mergeProps as U, createBlock as H, withDirectives as re, normalizeClass as D, vShow as me, resolveDynamicComponent as ke, withModifiers as ae } from "vue";
import { Combobox as ie, ComboboxLabel as be, ComboboxInput as de, ComboboxOptions as ce, ComboboxOption as fe, TransitionRoot as ge, Dialog as he, TransitionChild as le, DialogPanel as ve, DialogTitle as Ce } from "@headlessui/vue";
import { XIcon as oe, SelectorIcon as we, CheckIcon as xe } from "@heroicons/vue/solid";
import { get as o, templateRef as Z, onClickOutside as $e, set as b, syncRef as G, refThrottled as qe, asyncComputed as Be } from "@vueuse/core";
import { vElementHover as Se } from "@vueuse/components";
const Ve = ["onKeydown"], Fe = { class: "relative" }, Ae = { class: "inline-block w-full rounded-md shadow-sm" }, Ie = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500 sm:text-sm sm:leading-5" }, Le = { class: "block flex flex-wrap gap-2" }, Ke = { class: "flex items-center gap-1 rounded bg-blue-600 text-white px-2 py-0.5" }, Oe = ["onClick"], He = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, Te = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, Re = {
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
  setup(t, { emit: i }) {
    const s = t, f = O(!1), m = () => b(f, !o(f)), { items: a, excludeSelected: F, modelValue: L, query: k } = ee(s), K = s.stringify ?? ((l) => (l == null ? void 0 : l.name) ?? l ?? ""), C = s.uniqueKey ?? ((l) => (l == null ? void 0 : l.id) ?? l), S = ye([]), q = O(o(k)), B = O([]), A = ne(() => S.filter((l) => o(B).map(C).includes(C(l)))), I = s.filter ?? (async (l, w) => o(w).filter((e) => K(e).toLowerCase().includes(l.toLowerCase()))), W = ne(() => o(a).filter((l) => !o(B).map(C).includes(C(l)))), M = O(o(a)), P = Z("input"), r = () => b(f, !0), x = () => b(f, !1), g = () => o(P).$el.focus();
    function T(l) {
      l.value === "" && o(q) !== "" && (l.value = o(q));
    }
    async function E() {
      b(B, []), b(q, ""), await X(), g(), i("clear");
    }
    async function Q(l) {
      b(B, o(B).filter((w) => C(w) !== C(l))), await X(), g();
    }
    const N = Z("container");
    return $e(N, () => x()), $(a, (l) => {
      l.forEach((w) => {
        S.findIndex((e) => C(e) === C(w)) === -1 && S.push(w);
      });
    }, { immediate: !0 }), $(L, (l) => b(B, l), { immediate: !0 }), $(B, (l) => i("update:modelValue", l)), $(B, () => b(q, "")), $(q, (l) => i("update:query", l)), $(q, async (l) => {
      const w = await I(o(l), o(F) ? o(W) : o(a));
      b(M, o(w) ?? []);
    }), $(k, (l) => b(q, l != null ? `${l}` : "")), G(a, M, { direction: "ltr" }), $(q, (l) => o(P).$el.value = l), $(B, () => s.autoHide && x()), $(q, () => r()), se(() => X().then(() => o(P).$el.value = o(q))), se(() => s.autofocus && g()), (l, w) => (c(), V("div", {
      ref_key: "container",
      ref: N,
      onKeydown: pe(x, ["esc"]),
      onKeyup: w[4] || (w[4] = ({ code: e }) => ["ArrowUp", "ArrowDown"].includes(e) && r())
    }, [
      v(n(ie), {
        as: "div",
        modelValue: B.value,
        "onUpdate:modelValue": w[3] || (w[3] = (e) => B.value = e),
        multiple: ""
      }, {
        default: y(() => [
          p(l.$slots, "label", {}, () => [
            v(n(be), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
              default: y(() => [
                ue(j(t.label), 1)
              ]),
              _: 1
            })
          ]),
          u("div", Fe, [
            u("span", Ae, [
              u("div", Ie, [
                u("span", Le, [
                  B.value.length === 0 ? (c(), V("span", {
                    key: 0,
                    class: "p-0.5 cursor-pointer empty:hidden",
                    onClick: g
                  }, [
                    p(l.$slots, "empty-state")
                  ])) : R("", !0),
                  t.hideTags ? R("", !0) : (c(!0), V(J, { key: 1 }, Y(n(A), (e) => (c(), V("span", {
                    key: n(C)(e)
                  }, [
                    p(l.$slots, "selected-items", _(z({ item: e, stringify: n(K), remove: Q })), () => [
                      u("span", Ke, [
                        u("span", null, j(n(K)(e)), 1),
                        u("button", {
                          role: "button",
                          onClick: (d) => Q(e)
                        }, [
                          v(n(oe), { class: "h-4 w-4" })
                        ], 8, Oe)
                      ])
                    ])
                  ]))), 128)),
                  v(n(de), U({
                    ref_key: "input",
                    ref: P,
                    autocomplete: "off"
                  }, t.inputAttrs, {
                    class: "reset border-none p-0 focus:ring-0 grow",
                    onFocus: r,
                    onBlur: w[0] || (w[0] = (e) => T(e.target)),
                    onChange: w[1] || (w[1] = (e) => q.value = e.target.value)
                  }), null, 16)
                ]),
                u("div", He, [
                  t.clearable ? (c(), V("button", {
                    key: 0,
                    type: "button",
                    onClick: E
                  }, [
                    B.value.length !== 0 ? (c(), H(n(oe), {
                      key: 0,
                      class: "h-5 w-5 text-gray-300",
                      "aria-hidden": "true"
                    })) : R("", !0)
                  ])) : R("", !0),
                  u("button", {
                    type: "button",
                    onClick: m
                  }, [
                    v(n(we), {
                      class: "h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ]),
            re(u("div", Te, [
              M.value.length > 0 ? (c(), H(n(ce), {
                key: 0,
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: y(() => [
                  (c(!0), V(J, null, Y(M.value, (e) => (c(), H(n(fe), {
                    key: n(C)(e),
                    value: n(C)(e),
                    disabled: t.disabled.includes(n(C)(e)),
                    onClick: w[2] || (w[2] = () => t.autoHide && x())
                  }, {
                    default: y(({ active: d, selected: h }) => [
                      p(l.$slots, "default", _(z({ item: e, active: d, selected: h, stringify: n(K) })), () => [
                        u("li", {
                          class: D(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", d ? "bg-blue-600 text-white" : "text-gray-900"])
                        }, [
                          u("span", {
                            class: D(["block", { truncate: !d, "font-semibold": h, "font-normal": !h }])
                          }, j(n(K)(e)), 3),
                          h ? (c(), V("span", {
                            key: 0,
                            class: D(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": d, "text-blue-600": !d }])
                          }, [
                            v(n(xe), { class: "h-5 w-5" })
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
              [me, f.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, Ve));
  }
}, _e = ["onKeydown"], Pe = { class: "relative" }, Ee = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, je = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" }, ze = {
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
  setup(t, { emit: i }) {
    const s = t, f = O(!1), m = () => b(f, !o(f)), { items: a, excludeSelected: F, modelValue: L, query: k } = ee(s), K = s.stringify ?? ((e) => (e == null ? void 0 : e.name) ?? e ?? void 0), C = (e) => {
      try {
        const d = K(e);
        if (d == null)
          throw Error("Cannot stringify nullish value");
        return `${d}`;
      } catch (d) {
        return console.debug("Unable to stringify item", e, d), "";
      }
    }, S = s.uniqueKey ?? ((e) => (e == null ? void 0 : e.id) ?? e), q = ye([]);
    function B(e) {
      return q.find((d) => S(d) === e);
    }
    const A = O(o(k)), I = O(), W = s.filter ?? (async (e, d) => o(d).filter((h) => C(h).toLowerCase().includes(e.toLowerCase()))), M = ne(() => o(a).filter((e) => S(e) !== S(o(L)))), P = O(o(a)), r = (e) => e != null ? C(e) : o(A), x = Z("input"), g = () => b(f, !0), T = () => b(f, !1), E = () => o(x).$el.focus();
    function Q(e) {
      e.value === "" && o(A) !== "" && (e.value = o(A));
    }
    async function N() {
      b(I, void 0), b(A, ""), await X(), E(), i("clear");
    }
    const l = (e) => o(I) != null && S(e) === S(o(I)), w = Z("container");
    return $e(w, () => T()), $(a, (e) => {
      e.forEach((d) => {
        q.findIndex((h) => S(h) === S(d)) === -1 && q.push(d);
      });
    }, { immediate: !0 }), $(q, async () => {
      o(I) == null && s.modelValue != null && (b(I, B(S(s.modelValue))), await X(), T());
    }, { immediate: !0 }), $(L, (e) => b(I, B(e)), { immediate: !0 }), $(I, (e) => {
      S(e) !== S(s.modelValue) && i("update:modelValue", S(e));
    }), $(I, (e) => {
      e == null ? b(A, "") : b(A, C(e));
    }), $(A, (e) => i("update:query", e)), $(A, async (e) => {
      const d = await W(o(e), o(F) ? o(M) : o(a));
      b(P, o(d) ?? []);
    }), $(k, (e) => b(A, e != null ? `${e}` : "")), $(I, () => s.autoHide && T()), $(A, () => g()), G(a, P, { direction: "ltr" }), se(() => s.autofocus && E()), (e, d) => (c(), V("div", {
      ref_key: "container",
      ref: w,
      onKeydown: pe(T, ["esc"]),
      onKeyup: d[4] || (d[4] = ({ code: h }) => ["ArrowUp", "ArrowDown"].includes(h) && g())
    }, [
      v(n(ie), {
        as: "div",
        modelValue: I.value,
        "onUpdate:modelValue": d[3] || (d[3] = (h) => I.value = h)
      }, {
        default: y(() => [
          p(e.$slots, "label", {}, () => [
            v(n(be), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
              default: y(() => [
                ue(j(t.label), 1)
              ]),
              _: 1
            })
          ]),
          u("div", Pe, [
            v(n(de), U({
              ref_key: "input",
              ref: x,
              "display-value": r,
              autocomplete: "off"
            }, t.inputAttrs, {
              class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
              onFocus: g,
              onBlur: d[0] || (d[0] = (h) => Q(h.target)),
              onChange: d[1] || (d[1] = (h) => A.value = h.target.value)
            }), null, 16),
            u("div", Ee, [
              t.clearable ? (c(), V("button", {
                key: 0,
                type: "button",
                onClick: N
              }, [
                n(L) != null ? (c(), H(n(oe), {
                  key: 0,
                  name: "x",
                  class: "h-5 w-5 text-gray-300",
                  "aria-hidden": "true"
                })) : R("", !0)
              ])) : R("", !0),
              u("button", {
                type: "button",
                onClick: m
              }, [
                v(n(we), {
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            re(u("div", je, [
              v(n(ce), {
                static: !t.autoHide,
                class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              }, {
                default: y(() => [
                  (c(!0), V(J, null, Y(P.value, (h) => (c(), H(n(fe), {
                    key: n(S)(h),
                    value: h,
                    disabled: t.disabled.includes(n(S)(h)),
                    onClick: d[2] || (d[2] = () => t.autoHide && T())
                  }, {
                    default: y(({ active: te }) => [
                      p(e.$slots, "default", _(z({ item: h, active: te, selected: l(h), stringify: C })), () => [
                        u("li", {
                          class: D(["relative cursor-pointer select-none py-2 pl-3 pr-9", te ? "bg-indigo-600 text-white" : "text-gray-900"])
                        }, [
                          u("span", {
                            class: D(["block", !te && "truncate", l(h) && "font-semibold"])
                          }, j(C(h)), 3),
                          l(h) ? (c(), V("span", {
                            key: 0,
                            class: D(["absolute inset-y-0 right-0 flex items-center pr-4", te ? "text-white" : "text-indigo-600"])
                          }, [
                            v(n(xe), {
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
              [me, f.value]
            ])
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 40, _e));
  }
}, bt = {
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
    return (i, s) => Array.isArray(t.modelValue) ? (c(), H(Re, U({
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
      "selected-items": y(({ item: f, stringify: m, remove: a }) => [
        p(i.$slots, "selected-items", _(z({ item: f, stringify: m, remove: a })))
      ]),
      default: y(({ item: f, active: m, selected: a, stringify: F }) => [
        p(i.$slots, "default", _(z({ item: f, active: m, selected: a, stringify: F })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (c(), H(ze, U({
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
      default: y(({ item: f, active: m, selected: a, stringify: F }) => [
        p(i.$slots, "default", _(z({ item: f, active: m, selected: a, stringify: F })))
      ]),
      _: 3
    }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
  }
}, gt = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(t) {
    const i = O(!1);
    function s(f) {
      i.value = f;
    }
    return (f, m) => re((c(), H(ke(t.as), null, {
      default: y(() => [
        p(f.$slots, "default", { isHovered: i.value })
      ]),
      _: 3
    })), [
      [n(Se), s]
    ]);
  }
}, Me = /* @__PURE__ */ u("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1), De = { class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" }, Ne = {
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
    const s = t, { open: f } = ee(s), m = O(s.open);
    function a() {
      i("close");
    }
    return G(f, m, { direction: "ltr" }), (F, L) => (c(), H(n(ge), {
      as: "template",
      show: m.value
    }, {
      default: y(() => [
        v(n(he), {
          as: "div",
          class: "relative z-10",
          onClose: a
        }, {
          default: y(() => [
            v(n(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: y(() => [
                Me
              ]),
              _: 1
            }),
            u("div", {
              class: "fixed z-10 inset-0 overflow-y-auto",
              onSubmit: L[0] || (L[0] = ae((...k) => F.submit && F.submit(...k), ["prevent"]))
            }, [
              u("div", De, [
                v(n(le), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                  "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                }, {
                  default: y(() => [
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
                      default: y(() => [
                        t.hideCloseIcon ? R("", !0) : (c(), V("button", {
                          key: 0,
                          type: "button",
                          class: "absolute top-0 right-0 p-3 focus:outline-none",
                          onClick: a
                        }, [
                          v(n(oe), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                        ])),
                        p(F.$slots, "default")
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
}, Ue = ["onSubmit", "onReset"], Qe = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" }, Ge = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
}, We = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
}, ht = {
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
    const s = t, { open: f } = ee(s), m = O(s.open), a = Z("FormHTMLElement");
    async function F() {
      await (s.onSubmit ?? ((K) => i("submit", { form: o(K), visible: m })))({ form: o(a), visible: m }), s.hideOnSubmit && b(m, !1);
    }
    async function L() {
      await (s.onReset ?? ((K) => i("reset", { form: o(K), visible: m })))({ form: o(a), visible: m }), s.hideOnReset && b(m, !1);
    }
    return G(f, m, { direction: "ltr" }), (k, K) => (c(), H(Ne, { open: m.value }, {
      default: y(() => [
        u("form", {
          ref_key: "FormHTMLElement",
          ref: a,
          onSubmit: ae(F, ["prevent"]),
          onReset: ae(L, ["prevent"])
        }, [
          u("div", null, [
            p(k.$slots, "default", { form: n(a) })
          ]),
          p(k.$slots, "footer", {}, () => [
            u("footer", Qe, [
              p(k.$slots, "buttons", {}, () => [
                u("button", Ge, j(t.submitButtonText), 1),
                u("button", We, j(t.resetButtonText), 1)
              ])
            ])
          ])
        ], 40, Ue)
      ]),
      _: 3
    }, 8, ["open"]));
  }
}, Xe = (t, i) => {
  const s = t.__vccOpts || t;
  for (const [f, m] of i)
    s[f] = m;
  return s;
}, Je = {}, Ye = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function Ze(t, i) {
  return c(), V("div", Ye, [
    p(t.$slots, "default")
  ]);
}
const vt = /* @__PURE__ */ Xe(Je, [["render", Ze]]), wt = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(t) {
    return (i, s) => (c(), H(n(Ce), {
      as: t.tag,
      class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
    }, {
      default: y(() => [
        p(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as"]));
  }
}, et = /* @__PURE__ */ u("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" }, null, -1), tt = { class: "fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20" }, nt = { class: "relative" }, lt = /* @__PURE__ */ u("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true",
  class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
}, [
  /* @__PURE__ */ u("path", {
    "fill-rule": "evenodd",
    d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
    "clip-rule": "evenodd"
  })
], -1), ot = { class: "border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14" }, st = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, at = {
  key: 0,
  class: "bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900"
}, ut = { class: "mt-2 text-sm text-gray-800" }, rt = { class: "border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14" }, it = /* @__PURE__ */ u("p", { class: "mt-4 font-semibold text-gray-900" }, "No results found", -1), dt = /* @__PURE__ */ u("p", { class: "mt-2 text-gray-500" }, "We couldn’t find anything with that term. Please try again.", -1), xt = {
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
  setup(t, { emit: i }) {
    const s = t, { open: f, query: m } = ee(s), a = O(o(m)), F = qe(a, s.delayBetweenRequests), L = O(!0), k = O(!1);
    G(f, L, { direction: "ltr" }), G(m, a, { direction: "ltr" });
    const K = async (r, x, g) => r === "" && s.prompt ? [] : x.filter((T) => g(T).toLowerCase().includes(r.toLowerCase())), C = s.filter ?? K, S = async function(r, x, g) {
      b(k, !0);
      try {
        return await C(r, x, g);
      } finally {
        b(k, !1);
      }
    }, q = Be(() => S(o(F), s.items, B), s.items), B = s.stringify ?? ((r) => r == null ? void 0 : r.name), A = s.groupGetter ?? (() => {
    }), I = ne(
      () => q.value.reduce((r, x) => {
        let g = A(x);
        return { ...r, [g]: [...r[g] || [], x] };
      }, {})
    );
    function W(r) {
      b(a, r);
    }
    $(F, (r) => i("update:query", r));
    function M(r) {
      i("pick", r), P();
    }
    function P() {
      i("close"), i("update:open", !1), b(L, !1);
    }
    return (r, x) => (c(), H(n(ge), {
      show: L.value,
      as: "template",
      onAfterLeave: x[2] || (x[2] = (g) => a.value = ""),
      appear: ""
    }, {
      default: y(() => [
        v(n(he), {
          as: "div",
          class: "relative z-10",
          onClose: x[1] || (x[1] = (g) => P())
        }, {
          default: y(() => [
            v(n(le), {
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: y(() => [
                et
              ]),
              _: 1
            }),
            u("div", tt, [
              v(n(le), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: y(() => [
                  v(n(ve), { class: "mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all" }, {
                    default: y(() => [
                      v(n(ie), { "onUpdate:modelValue": M }, {
                        default: y(() => [
                          u("div", nt, [
                            p(r.$slots, "search-icon", {}, () => [
                              lt
                            ]),
                            p(r.$slots, "input", _(z({ query: a.value })), () => [
                              v(n(de), {
                                class: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
                                placeholder: t.placeholder,
                                onChange: x[0] || (x[0] = (g) => W(g.target.value))
                              }, null, 8, ["placeholder"])
                            ])
                          ]),
                          t.enableLoader && k.value ? p(r.$slots, "loader", _(U({ key: 0 }, { query: a.value, isLoading: k.value })), () => [
                            u("div", ot, [
                              p(r.$slots, "loader-inner", {}, () => [
                                ue("Loading, please wait...")
                              ])
                            ])
                          ]) : t.prompt && a.value === "" ? p(r.$slots, "prompt", _(U({ key: 1 }, { query: a.value, isLoading: k.value })), () => [
                            u("div", st, [
                              p(r.$slots, "prompt-inner")
                            ])
                          ]) : !t.prompt || n(q).length > 0 ? (c(), H(n(ce), {
                            key: 2,
                            static: "",
                            class: "max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden"
                          }, {
                            default: y(() => [
                              (c(!0), V(J, null, Y(Object.entries(n(I)), ([g, T]) => (c(), V("li", { key: g }, [
                                p(r.$slots, "group", _(z({ group: g, items: T, query: a.value })), () => [
                                  g !== "undefined" ? (c(), V("h2", at, j(g), 1)) : R("", !0)
                                ]),
                                u("ul", ut, [
                                  (c(!0), V(J, null, Y(T, (E, Q) => (c(), H(n(fe), {
                                    key: E.id,
                                    value: E,
                                    as: "template"
                                  }, {
                                    default: y(({ active: N }) => [
                                      p(r.$slots, "default", _(z({ group: g, item: E, items: T, index: Q, active: N, stringify: n(B), query: a.value })), () => [
                                        u("li", {
                                          class: D(["cursor-pointer select-none px-4 py-2", N && "bg-indigo-600 text-white"])
                                        }, j(n(B)(E)), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))), 128))
                                ])
                              ]))), 128))
                            ]),
                            _: 3
                          })) : a.value !== "" && n(q).length === 0 ? p(r.$slots, "empty-state", _(U({ key: 3 }, { query: a.value, isLoading: k.value })), () => [
                            u("div", rt, [
                              p(r.$slots, "empty-state-inner", {}, () => [
                                it,
                                dt
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
};
export {
  bt as ComboBox,
  xt as CommandPalette,
  gt as HoverableElement,
  Ne as Modal,
  ht as Prompt,
  vt as PromptIcon,
  wt as PromptTitle
};
