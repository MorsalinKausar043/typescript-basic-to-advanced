type a1 = number;
type a2 = undefined;
type a3 = string;

type allType = a1 extends string ? null : a2 extends number ? string : a3 extends null ? number : never;