/**
 * 解析 template
 * @param {string[]} literals
 * @param {...any} values 
 */
export function html(literals, ...values) {
    return values.reduce((prev, curr, i) => `${prev}${curr}${literals[i + 1]}`, literals[0])
}