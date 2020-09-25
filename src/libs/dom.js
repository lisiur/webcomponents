/**
 * 
 * @param {HTMLElement} dom 
 * @param {string} prop 
 * @param {string} val 
 * @returns {string}
 */
export function attr(dom, prop, val) {
    if (val) {
        dom.setAttribute(prop, val)
    } else {
        return dom.getAttribute(prop)
    }
}
