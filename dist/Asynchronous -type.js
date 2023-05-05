"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const json = (yield fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
    return json;
});
const showData = () => __awaiter(void 0, void 0, void 0, function* () {
    const showApi = yield getData();
    console.log(showApi);
});
showData();
