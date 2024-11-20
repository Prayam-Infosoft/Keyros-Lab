import {atom} from "recoil";

export const errorAtom = atom({
    key: "errorAtom",
    default: ""
})

export const userIdAtom = atom({
    key: "userIdAtom",
    default: ""
})

export const licenseKeyAtom = atom({
    key: "licenseKeyAtom",
    default: ""
})

export const validateUrlAtom = atom({
    key: "validateUrlAtom",
    default: "http://localhost:8787/api/license/validate-license"
})

export const refreshTokenAtom = atom({
    key: "refreshTokenAtom",
    default: ""
})

export const refreshUrlAtom = atom({
    key: "refreshUrlAtom",
    default: "http://localhost:8787/api/license/refresh-token"
})

export const validateResponseAtom = atom({
    key: "validateResponseAtom",
    default: ""
})

export const refreshResponseAtom = atom({
    key: "refreshResponseAtom",
    default: ""
})