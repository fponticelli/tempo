export type JSONPrimitive = string | boolean | number | null
export interface JSONObject extends Record<string, JSONValue> {}
export type JSONArray = JSONValue[]
export type JSONValue = JSONPrimitive | JSONObject | JSONArray
