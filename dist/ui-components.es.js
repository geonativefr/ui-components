import { ref, toRefs, reactive, computed, watch, onMounted, nextTick, openBlock, createElementBlock, withKeys, createVNode, unref, withCtx, renderSlot, createTextVNode, toDisplayString, createElementVNode, createCommentVNode, Fragment, renderList, normalizeProps, guardReactiveProps, mergeProps, createBlock, withDirectives, normalizeClass, vShow, resolveDynamicComponent, withModifiers } from "vue";
import { Combobox, ComboboxLabel, ComboboxInput, ComboboxOptions, ComboboxOption, TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from "@headlessui/vue";
import { XIcon, SelectorIcon, CheckIcon } from "@heroicons/vue/solid";
import { get, templateRef, onClickOutside, set, syncRef, whenever } from "@vueuse/core";
import { vElementHover } from "@vueuse/components";
const _hoisted_1$4 = ["onKeydown"];
const _hoisted_2$3 = { class: "relative" };
const _hoisted_3$2 = { class: "inline-block w-full rounded-md shadow-sm" };
const _hoisted_4$2 = { class: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500 sm:text-sm sm:leading-5" };
const _hoisted_5 = { class: "block flex flex-wrap gap-2" };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "flex items-center gap-1 rounded bg-blue-600 text-white px-2 py-0.5" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" };
const _hoisted_10 = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" };
const _sfc_main$7 = {
  __name: "MultiCombobox",
  props: {
    items: {
      type: Array,
      required: true
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
      default: false
    },
    hideSelected: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
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
      default: false
    }
  },
  emits: ["update:modelValue", "update:query", "clear"],
  setup(__props, { emit }) {
    var _a, _b, _c;
    const props = __props;
    const open = ref(false);
    const toggle = () => set(open, !get(open));
    const { items, excludeSelected, modelValue, query: inputQuery } = toRefs(props);
    const stringify = (_a = props.stringify) != null ? _a : (item) => {
      var _a2, _b2;
      return (_b2 = (_a2 = item == null ? void 0 : item.name) != null ? _a2 : item) != null ? _b2 : "";
    };
    const uniqueKey = (_b = props.uniqueKey) != null ? _b : (item) => {
      var _a2;
      return (_a2 = item == null ? void 0 : item.id) != null ? _a2 : item;
    };
    const cachedItems = reactive([]);
    const query = ref(get(inputQuery));
    const selectedKeys = ref([]);
    const selectedItems = computed(() => cachedItems.filter((item) => get(selectedKeys).map(uniqueKey).includes(uniqueKey(item))));
    const filter = (_c = props.filter) != null ? _c : async (query2, items2) => get(items2).filter((item) => stringify(item).toLowerCase().includes(query2.toLowerCase()));
    const filteredItems = computed(() => get(items).filter((item) => !get(selectedKeys).map(uniqueKey).includes(uniqueKey(item))));
    const availableItems = ref(get(items));
    const input = templateRef("input");
    const showOptions = () => set(open, true);
    const hideOptions = () => set(open, false);
    const focus = () => get(input).$el.focus();
    function onBlur(target) {
      if (target.value === "" && get(query) !== "") {
        target.value = get(query);
      }
    }
    async function clear() {
      set(selectedKeys, []);
      set(query, "");
      await nextTick();
      focus();
      emit("clear");
    }
    async function remove(itemToRemove) {
      set(selectedKeys, get(selectedKeys).filter((item) => uniqueKey(item) !== uniqueKey(itemToRemove)));
      await nextTick();
      focus();
    }
    const container = templateRef("container");
    onClickOutside(container, () => hideOptions());
    watch(items, (items2) => {
      items2.forEach((item) => {
        if (cachedItems.findIndex((cachedItem) => uniqueKey(cachedItem) === uniqueKey(item)) === -1) {
          cachedItems.push(item);
        }
      });
    }, { immediate: true });
    watch(modelValue, (ids) => set(selectedKeys, ids), { immediate: true });
    watch(selectedKeys, (ids) => emit("update:modelValue", ids));
    watch(selectedKeys, () => set(query, ""));
    watch(query, (query2) => emit("update:query", query2));
    watch(query, async (query2) => {
      var _a2;
      return set(availableItems, (_a2 = await filter(get(query2), get(excludeSelected) ? get(filteredItems) : get(items))) != null ? _a2 : []);
    });
    watch(inputQuery, (value) => set(query, value != null ? `${value}` : ""));
    syncRef(items, availableItems, { direction: "ltr" });
    watch(query, (query2) => get(input).$el.value = query2);
    watch(selectedKeys, () => props.autoHide && hideOptions());
    watch(query, () => showOptions());
    onMounted(() => nextTick().then(() => get(input).$el.value = get(query)));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        onKeydown: withKeys(hideOptions, ["esc"]),
        onKeyup: _cache[4] || (_cache[4] = ({ code }) => ["ArrowUp", "ArrowDown"].includes(code) && showOptions())
      }, [
        createVNode(unref(Combobox), {
          as: "div",
          modelValue: selectedKeys.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedKeys.value = $event),
          multiple: ""
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createVNode(unref(ComboboxLabel), { class: "block text-sm font-medium leading-5 text-gray-700 empty:hidden" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.label), 1)
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", _hoisted_2$3, [
              createElementVNode("span", _hoisted_3$2, [
                createElementVNode("div", _hoisted_4$2, [
                  createElementVNode("span", _hoisted_5, [
                    selectedKeys.value.length === 0 ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      class: "p-0.5 cursor-pointer empty:hidden",
                      onClick: focus
                    }, [
                      renderSlot(_ctx.$slots, "empty-state")
                    ])) : createCommentVNode("", true),
                    !__props.hideSelected ? (openBlock(), createElementBlock("span", _hoisted_6, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectedItems), (item) => {
                        return openBlock(), createElementBlock("span", {
                          key: unref(uniqueKey)(item)
                        }, [
                          renderSlot(_ctx.$slots, "selected-items", normalizeProps(guardReactiveProps({ item, stringify: unref(stringify), remove })), () => [
                            createElementVNode("span", _hoisted_7, [
                              createElementVNode("span", null, toDisplayString(unref(stringify)(item)), 1),
                              createElementVNode("button", {
                                role: "button",
                                onClick: ($event) => remove(item)
                              }, [
                                createVNode(unref(XIcon), { class: "h-4 w-4" })
                              ], 8, _hoisted_8)
                            ])
                          ])
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    createVNode(unref(ComboboxInput), mergeProps({
                      ref_key: "input",
                      ref: input,
                      autocomplete: "off"
                    }, __props.inputAttrs, {
                      class: "reset border-none p-0 focus:ring-0 grow",
                      onFocus: showOptions,
                      onBlur: _cache[0] || (_cache[0] = ($event) => onBlur($event.target)),
                      onChange: _cache[1] || (_cache[1] = ($event) => query.value = $event.target.value)
                    }), null, 16)
                  ]),
                  createElementVNode("div", _hoisted_9, [
                    __props.clearable ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      onClick: clear
                    }, [
                      selectedKeys.value.length !== 0 ? (openBlock(), createBlock(unref(XIcon), {
                        key: 0,
                        class: "h-5 w-5 text-gray-300",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createElementVNode("button", {
                      type: "button",
                      onClick: toggle
                    }, [
                      createVNode(unref(SelectorIcon), {
                        class: "h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                      })
                    ])
                  ])
                ])
              ]),
              withDirectives(createElementVNode("div", _hoisted_10, [
                availableItems.value.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                  key: 0,
                  static: "",
                  class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(availableItems.value, (item) => {
                      return openBlock(), createBlock(unref(ComboboxOption), {
                        key: unref(uniqueKey)(item),
                        value: unref(uniqueKey)(item),
                        disabled: __props.disabled.includes(unref(uniqueKey)(item)),
                        onClick: _cache[2] || (_cache[2] = () => __props.autoHide && hideOptions())
                      }, {
                        default: withCtx(({ active, selected }) => [
                          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ item, active, selected, stringify: unref(stringify) })), () => [
                            createElementVNode("li", {
                              class: normalizeClass(["relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none", active ? "bg-blue-600 text-white" : "text-gray-900"])
                            }, [
                              createElementVNode("span", {
                                class: normalizeClass(["block truncate", { "font-semibold": selected, "font-normal": !selected }])
                              }, toDisplayString(unref(stringify)(item)), 3),
                              selected ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: normalizeClass(["absolute inset-y-0 right-0 flex items-center pr-4", { "text-white": active, "text-blue-600": !active }])
                              }, [
                                createVNode(unref(CheckIcon), { class: "h-5 w-5" })
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"]);
                    }), 128))
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 512), [
                [vShow, open.value]
              ])
            ])
          ]),
          _: 3
        }, 8, ["modelValue"])
      ], 40, _hoisted_1$4);
    };
  }
};
const _hoisted_1$3 = ["onKeydown"];
const _hoisted_2$2 = { class: "relative" };
const _hoisted_3$1 = { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" };
const _hoisted_4$1 = { class: "absolute mt-1 w-full rounded-md bg-white shadow-lg z-10" };
const _sfc_main$6 = {
  __name: "SingleCombobox",
  props: {
    items: {
      type: Array,
      required: true
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
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
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
      default: false
    }
  },
  emits: ["update:modelValue", "update:query", "clear"],
  setup(__props, { emit }) {
    var _a, _b, _c;
    const props = __props;
    const open = ref(false);
    const toggle = () => set(open, !get(open));
    const { items, excludeSelected, modelValue, query: inputQuery } = toRefs(props);
    const stringifyFn = (_a = props.stringify) != null ? _a : (item) => {
      var _a2, _b2;
      return (_b2 = (_a2 = item == null ? void 0 : item.name) != null ? _a2 : item) != null ? _b2 : void 0;
    };
    const stringify = (item) => {
      try {
        const stringified = stringifyFn(item);
        if (stringified == null) {
          throw Error("Cannot stringify nullish value");
        }
        return `${stringified}`;
      } catch (e) {
        console.debug("Unable to stringify item", item, e);
        return "";
      }
    };
    const uniqueKey = (_b = props.uniqueKey) != null ? _b : (item) => {
      var _a2;
      return (_a2 = item == null ? void 0 : item.id) != null ? _a2 : item;
    };
    function getItemByUniqueKey(id) {
      return props.items.find((item) => uniqueKey(item) === id);
    }
    const query = ref(get(inputQuery));
    const selectedItem = ref();
    const filter = (_c = props.filter) != null ? _c : async (query2, items2) => get(items2).filter((item) => stringify(item).toLowerCase().includes(query2.toLowerCase()));
    const filteredItems = computed(() => get(items).filter((item) => uniqueKey(item) !== uniqueKey(get(modelValue))));
    const availableItems = ref(get(items));
    const displayValueFn = (item) => item != null ? stringify(item) : get(query);
    const input = templateRef("input");
    const showOptions = () => set(open, true);
    const hideOptions = () => set(open, false);
    const focus = () => get(input).$el.focus();
    function onBlur(target) {
      if (target.value === "" && get(query) !== "") {
        target.value = get(query);
      }
    }
    async function clear() {
      set(selectedItem, void 0);
      set(query, "");
      await nextTick();
      focus();
      emit("clear");
    }
    const container = templateRef("container");
    onClickOutside(container, () => hideOptions());
    watch(modelValue, (id) => set(selectedItem, getItemByUniqueKey(id)), { immediate: true });
    watch(selectedItem, (item) => emit("update:modelValue", uniqueKey(item)));
    whenever(selectedItem, (item) => set(query, stringify(item)));
    watch(query, (query2) => emit("update:query", query2));
    watch(query, async (query2) => {
      var _a2;
      return set(availableItems, (_a2 = await filter(get(query2), get(excludeSelected) ? get(filteredItems) : get(items))) != null ? _a2 : []);
    });
    watch(inputQuery, (value) => set(query, value != null ? `${value}` : ""));
    watch(selectedItem, () => props.autoHide && hideOptions());
    watch(query, () => showOptions());
    syncRef(items, availableItems, { direction: "ltr" });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        onKeydown: withKeys(hideOptions, ["esc"]),
        onKeyup: _cache[4] || (_cache[4] = ({ code }) => ["ArrowUp", "ArrowDown"].includes(code) && showOptions())
      }, [
        createVNode(unref(Combobox), {
          as: "div",
          modelValue: selectedItem.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedItem.value = $event)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createVNode(unref(ComboboxLabel), { class: "block text-sm font-medium text-gray-700 mb-1 empty:hidden" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.label), 1)
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", _hoisted_2$2, [
              createVNode(unref(ComboboxInput), mergeProps({
                ref_key: "input",
                ref: input,
                "display-value": displayValueFn,
                autocomplete: "off"
              }, __props.inputAttrs, {
                class: "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm",
                onFocus: showOptions,
                onBlur: _cache[0] || (_cache[0] = ($event) => onBlur($event.target)),
                onChange: _cache[1] || (_cache[1] = ($event) => query.value = $event.target.value)
              }), null, 16),
              createElementVNode("div", _hoisted_3$1, [
                __props.clearable ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  onClick: clear
                }, [
                  unref(modelValue) != null ? (openBlock(), createBlock(unref(XIcon), {
                    key: 0,
                    name: "x",
                    class: "h-5 w-5 text-gray-300",
                    "aria-hidden": "true"
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createElementVNode("button", {
                  type: "button",
                  onClick: toggle
                }, [
                  createVNode(unref(SelectorIcon), {
                    class: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  })
                ])
              ]),
              withDirectives(createElementVNode("div", _hoisted_4$1, [
                availableItems.value.length > 0 ? (openBlock(), createBlock(unref(ComboboxOptions), {
                  key: 0,
                  static: "",
                  class: "shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(availableItems.value, (item) => {
                      return openBlock(), createBlock(unref(ComboboxOption), {
                        key: unref(uniqueKey)(item),
                        value: item,
                        disabled: __props.disabled.includes(unref(uniqueKey)(item)),
                        onClick: _cache[2] || (_cache[2] = () => __props.autoHide && hideOptions())
                      }, {
                        default: withCtx(({ active, selected }) => [
                          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ item, active, selected, stringify })), () => [
                            createElementVNode("li", {
                              class: normalizeClass(["relative cursor-pointer select-none py-2 pl-3 pr-9", active ? "bg-indigo-600 text-white" : "text-gray-900"])
                            }, [
                              createElementVNode("span", {
                                class: normalizeClass(["block truncate", selected && "font-semibold"])
                              }, toDisplayString(stringify(item)), 3),
                              selected ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: normalizeClass(["absolute inset-y-0 right-0 flex items-center pr-4", active ? "text-white" : "text-indigo-600"])
                              }, [
                                createVNode(unref(CheckIcon), {
                                  class: "h-5 w-5",
                                  "aria-hidden": "true"
                                })
                              ], 2)) : createCommentVNode("", true)
                            ], 2)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"]);
                    }), 128))
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 512), [
                [vShow, open.value]
              ])
            ])
          ]),
          _: 3
        }, 8, ["modelValue"])
      ], 40, _hoisted_1$3);
    };
  }
};
const _sfc_main$5 = {
  __name: "ComboBox",
  props: {
    items: {
      type: Array,
      required: true
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
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Array.isArray(__props.modelValue) ? (openBlock(), createBlock(_sfc_main$7, mergeProps({
        key: 0,
        items: __props.items,
        "model-value": __props.modelValue,
        stringify: __props.stringify,
        "unique-key": __props.uniqueKey,
        filter: __props.filter,
        "input-attrs": __props.inputAttrs,
        "exclude-selected": __props.excludeSelected,
        clearable: __props.clearable,
        label: __props.label
      }, _ctx.$attrs), {
        label: withCtx(() => [
          renderSlot(_ctx.$slots, "label")
        ]),
        "selected-items": withCtx(({ item, stringify, remove }) => [
          renderSlot(_ctx.$slots, "selected-items", normalizeProps(guardReactiveProps({ item, stringify, remove })))
        ]),
        default: withCtx(({ item, active, selected, stringify }) => [
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ item, active, selected, stringify })))
        ]),
        _: 3
      }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"])) : (openBlock(), createBlock(_sfc_main$6, mergeProps({
        key: 1,
        items: __props.items,
        "model-value": __props.modelValue,
        stringify: __props.stringify,
        "unique-key": __props.uniqueKey,
        filter: __props.filter,
        "input-attrs": __props.inputAttrs,
        "exclude-selected": __props.excludeSelected,
        clearable: __props.clearable,
        label: __props.label
      }, _ctx.$attrs), {
        label: withCtx(() => [
          renderSlot(_ctx.$slots, "label")
        ]),
        default: withCtx(({ item, active, selected, stringify }) => [
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ item, active, selected, stringify })))
        ]),
        _: 3
      }, 16, ["items", "model-value", "stringify", "unique-key", "filter", "input-attrs", "exclude-selected", "clearable", "label"]));
    };
  }
};
const _sfc_main$4 = {
  __name: "HoverableElement",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  setup(__props) {
    const isHovered = ref(false);
    function onHover(state) {
      isHovered.value = state;
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(resolveDynamicComponent(__props.as), null, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", { isHovered: isHovered.value })
        ]),
        _: 3
      })), [
        [unref(vElementHover), onHover]
      ]);
    };
  }
};
const _hoisted_1$2 = /* @__PURE__ */ createElementVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, -1);
const _hoisted_2$1 = { class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" };
const _sfc_main$3 = {
  __name: "Modal",
  props: {
    open: {
      type: Boolean,
      default: false
    },
    hideCloseIcon: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit", "reset", "close"],
  setup(__props, { emit }) {
    const props = __props;
    const { open } = toRefs(props);
    const visible = ref(props.open);
    function close() {
      emit("close");
    }
    syncRef(open, visible, { direction: "ltr" });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(TransitionRoot), {
        as: "template",
        show: visible.value
      }, {
        default: withCtx(() => [
          createVNode(unref(Dialog), {
            as: "div",
            class: "relative z-10",
            onClose: close
          }, {
            default: withCtx(() => [
              createVNode(unref(TransitionChild), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  _hoisted_1$2
                ]),
                _: 1
              }),
              createElementVNode("div", {
                class: "fixed z-10 inset-0 overflow-y-auto",
                onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.submit && _ctx.submit(...args), ["prevent"]))
              }, [
                createElementVNode("div", _hoisted_2$1, [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                    "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(DialogPanel), {
                        class: normalizeClass([
                          __props.hideCloseIcon ? "pt-5" : "pt-8",
                          "relative bg-white rounded-lg",
                          "px-4 pb-4",
                          "text-left overflow-hidden shadow-xl",
                          "transform transition-all",
                          "sm:max-w-lg sm:w-full"
                        ])
                      }, {
                        default: withCtx(() => [
                          !__props.hideCloseIcon ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            type: "button",
                            class: "absolute top-0 right-0 p-3 focus:outline-none",
                            onClick: close
                          }, [
                            createVNode(unref(XIcon), { class: "h-5 w-5 text-gray-800 hover:text-black" })
                          ])) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "default")
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
      }, 8, ["show"]);
    };
  }
};
const _hoisted_1$1 = ["onSubmit", "onReset"];
const _hoisted_2 = { class: "mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden" };
const _hoisted_3 = {
  type: "submit",
  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
};
const _hoisted_4 = {
  type: "reset",
  class: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
};
const _sfc_main$2 = {
  __name: "Prompt",
  props: {
    open: {
      type: Boolean,
      default: false
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
      default: true
    },
    hideOnReset: {
      type: Boolean,
      default: true
    },
    noFooter: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit", "reset"],
  setup(__props, { emit }) {
    const props = __props;
    const { open } = toRefs(props);
    const visible = ref(props.open);
    const FormHTMLElement = templateRef("FormHTMLElement");
    async function submit() {
      var _a;
      const onSubmit = (_a = props.onSubmit) != null ? _a : (FormHTMLElement2) => emit("submit", { form: get(FormHTMLElement2), visible });
      await onSubmit({ form: get(FormHTMLElement), visible });
      if (props.hideOnSubmit) {
        set(visible, false);
      }
    }
    async function reset() {
      var _a;
      const onReset = (_a = props.onReset) != null ? _a : (FormHTMLElement2) => emit("reset", { form: get(FormHTMLElement2), visible });
      await onReset({ form: get(FormHTMLElement), visible });
      if (props.hideOnReset) {
        set(visible, false);
      }
    }
    syncRef(open, visible, { direction: "ltr" });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3, { open: visible.value }, {
        default: withCtx(() => [
          createElementVNode("form", {
            ref_key: "FormHTMLElement",
            ref: FormHTMLElement,
            onSubmit: withModifiers(submit, ["prevent"]),
            onReset: withModifiers(reset, ["prevent"])
          }, [
            createElementVNode("div", null, [
              renderSlot(_ctx.$slots, "default", { form: unref(FormHTMLElement) })
            ]),
            renderSlot(_ctx.$slots, "footer", {}, () => [
              createElementVNode("footer", _hoisted_2, [
                renderSlot(_ctx.$slots, "buttons", {}, () => [
                  createElementVNode("button", _hoisted_3, toDisplayString(__props.submitButtonText), 1),
                  createElementVNode("button", _hoisted_4, toDisplayString(__props.resetButtonText), 1)
                ])
              ])
            ])
          ], 40, _hoisted_1$1)
        ]),
        _: 3
      }, 8, ["open"]);
    };
  }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
const _hoisted_1 = {
  class: "mx-auto flex items-center justify-center h-12 w-12 mb-3 sm:mb-5",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var PromptIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = {
  __name: "PromptTitle",
  props: {
    tag: {
      type: String,
      default: "h3"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogTitle), {
        as: __props.tag,
        class: "mb-2 text-center text-lg leading-6 font-medium text-gray-900"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["as"]);
    };
  }
};
export { _sfc_main$5 as ComboBox, _sfc_main$4 as HoverableElement, _sfc_main$3 as Modal, _sfc_main$2 as Prompt, PromptIcon, _sfc_main as PromptTitle };
