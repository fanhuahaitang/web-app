"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const test_utils_1 = require("@vue/test-utils");
const HelloWorld_vue_1 = __importDefault(require("@/components/HelloWorld.vue"));
describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = test_utils_1.shallowMount(HelloWorld_vue_1.default, {
            props: { msg }
        });
        chai_1.expect(wrapper.text()).to.include(msg);
    });
});
