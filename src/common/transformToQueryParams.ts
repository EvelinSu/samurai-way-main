export function transformToQueryParams<T>(params: T): string {
    const obj = Object.entries(params as {})
    const result = []
    for (let param of obj) param[1] && result.push(param.join("="))
    return "?" + result.join("&")
}