"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementFactory = exports.IdentificationType = void 0;
const protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["ID"] = 0] = "ID";
    IdentificationType[IdentificationType["XPATH"] = 1] = "XPATH";
    IdentificationType[IdentificationType["NAME"] = 2] = "NAME";
    IdentificationType[IdentificationType["PARTIAL_LINKTEXT"] = 3] = "PARTIAL_LINKTEXT";
    IdentificationType[IdentificationType["LINKTEXT"] = 4] = "LINKTEXT";
    IdentificationType[IdentificationType["CLASSNAME"] = 5] = "CLASSNAME";
    IdentificationType[IdentificationType["TAGNAME"] = 6] = "TAGNAME";
    IdentificationType[IdentificationType["CSS"] = 7] = "CSS";
    IdentificationType[IdentificationType["JS"] = 8] = "JS";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
class ElementFactory {
    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.ID]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.XPATH]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.CSS]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.NAME]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.TAGNAME]:
                return protractor_1.element(protractor_1.by.tagName(obj.value));
            case IdentificationType[IdentificationType.LINKTEXT]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PARTIAL_LINKTEXT]:
                return protractor_1.element(protractor_1.by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.CLASSNAME]:
                return protractor_1.element(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.JS]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            default:
                break;
        }
    }
    ElementsLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.ID]:
                return protractor_1.element.all(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.XPATH]:
                return protractor_1.element.all(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.CSS]:
                return protractor_1.element.all(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.NAME]:
                return protractor_1.element.all(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.TAGNAME]:
                return protractor_1.element.all(protractor_1.by.tagName(obj.value));
            case IdentificationType[IdentificationType.LINKTEXT]:
                return protractor_1.element.all(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PARTIAL_LINKTEXT]:
                return protractor_1.element.all(protractor_1.by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.CLASSNAME]:
                return protractor_1.element.all(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.JS]:
                return protractor_1.element.all(protractor_1.by.js(obj.value));
            default:
                break;
        }
    }
}
exports.ElementFactory = ElementFactory;
//# sourceMappingURL=ElementFactory.js.map