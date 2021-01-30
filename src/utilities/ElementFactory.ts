import { by, element, ElementArrayFinder, ElementFinder } from "protractor";

export enum IdentificationType {

    ID,
    XPATH,
    NAME,
    PARTIAL_LINKTEXT,
    LINKTEXT,
    CLASSNAME,
    TAGNAME,
    CSS,
    JS
}

export class ElementFactory {

    ElementLocator(obj): ElementFinder {
        switch (obj.type) {
            case IdentificationType[IdentificationType.ID]:
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.XPATH]:
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.CSS]:
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.NAME]:
                return element(by.name(obj.value));
            case IdentificationType[IdentificationType.TAGNAME]:
                return element(by.tagName(obj.value));
            case IdentificationType[IdentificationType.LINKTEXT]:
                return element(by.linkText(obj.value));
            case IdentificationType[IdentificationType.PARTIAL_LINKTEXT]:
                return element(by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.CLASSNAME]:
                return element(by.className(obj.value));
            case IdentificationType[IdentificationType.JS]:
                return element(by.js(obj.value));
            default:
                break;
        }
    }

    ElementsLocator(obj): ElementArrayFinder {
        switch (obj.type) {
            case IdentificationType[IdentificationType.ID]:
                return element.all(by.id(obj.value));
            case IdentificationType[IdentificationType.XPATH]:
                return element.all(by.xpath(obj.value));
            case IdentificationType[IdentificationType.CSS]:
                return element.all(by.css(obj.value));
            case IdentificationType[IdentificationType.NAME]:
                return element.all(by.name(obj.value));
            case IdentificationType[IdentificationType.TAGNAME]:
                return element.all(by.tagName(obj.value));
            case IdentificationType[IdentificationType.LINKTEXT]:
                return element.all(by.linkText(obj.value));
            case IdentificationType[IdentificationType.PARTIAL_LINKTEXT]:
                return element.all(by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.CLASSNAME]:
                return element.all(by.className(obj.value));
            case IdentificationType[IdentificationType.JS]:
                return element.all(by.js(obj.value));
            default:
                break;
        }
    }
}