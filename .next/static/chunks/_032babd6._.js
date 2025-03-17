(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_032babd6._.js", {

"[project]/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "capitalize": (()=>capitalize),
    "convertToSlug": (()=>convertToSlug),
    "getTitleCase": (()=>getTitleCase),
    "handleErrors": (()=>handleErrors),
    "isRelativeUrl": (()=>isRelativeUrl),
    "isValidUrl": (()=>isValidUrl),
    "parseChildrenToSlug": (()=>parseChildrenToSlug)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/slugify/slugify.js [app-client] (ecmascript)");
;
const isRelativeUrl = (url)=>url.startsWith("/") || url.startsWith("#") || url.startsWith("?");
const isValidUrl = (url)=>{
    try {
        new URL(url);
        return true;
    } catch (e) {
        console.log(e);
        return isRelativeUrl(url);
    }
};
const capitalize = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
const getTitleCase = (name)=>{
    const titleTemp = name.replace(/([A-Z])/g, " $1");
    return titleTemp.charAt(0).toUpperCase() + titleTemp.slice(1);
};
async function handleErrors(promise) {
    try {
        const data = await promise;
        return [
            data,
            undefined
        ];
    } catch (err) {
        return [
            undefined,
            err instanceof Error ? err.message : JSON.stringify(err)
        ];
    }
}
function convertToSlug(text, { fallback } = {
    fallback: "top-level"
}) {
    if (!text) return fallback;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(text.trim(), {
        lower: true,
        remove: /[^a-zA-Z0-9 ]/g
    });
}
function parseChildrenToSlug(children) {
    if (!children) return "";
    return convertToSlug(children.map((child)=>child.text).join(""));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/richtext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RichText": (()=>RichText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sanity-image.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
const components = {
    block: {
        h2: ({ children, value })=>{
            const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildrenToSlug"])(value.children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: slug,
                className: "scroll-m-20 border-b pb-2 text-3xl font-semibold first:mt-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 14,
                columnNumber: 14
            }, this);
        },
        h3: ({ children, value })=>{
            const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildrenToSlug"])(value.children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                id: slug,
                className: "scroll-m-20 text-2xl font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 23,
                columnNumber: 14
            }, this);
        },
        h4: ({ children, value })=>{
            const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildrenToSlug"])(value.children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                id: slug,
                className: "scroll-m-20 text-xl font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        },
        h5: ({ children, value })=>{
            const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildrenToSlug"])(value.children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                id: slug,
                className: "scroll-m-20 text-lg font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 41,
                columnNumber: 14
            }, this);
        },
        h6: ({ children, value })=>{
            const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChildrenToSlug"])(value.children);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                id: slug,
                className: "scroll-m-20 text-base font-semibold",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 50,
                columnNumber: 14
            }, this);
        }
    },
    marks: {
        code: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                className: "rounded-md border border-white/10 bg-opacity-5 p-1 text-sm lg:whitespace-nowrap",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 58,
                columnNumber: 11
            }, this),
        customLink: ({ children, value })=>{
            if (!value.href || value.href === "#") {
                console.warn("🚀 link is not set", value);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "underline decoration-dotted underline-offset-2",
                    children: "Link Broken"
                }, void 0, false, {
                    fileName: "[project]/components/richtext.tsx",
                    lineNumber: 67,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "underline decoration-dotted underline-offset-2",
                href: value.href,
                prefetch: false,
                "aria-label": `Link to ${value?.href}`,
                target: value.openInNewTab ? "_blank" : "_self",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        }
    },
    types: {
        image: ({ value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityImage"], {
                    asset: value,
                    className: "w-full h-auto rounded-lg",
                    width: 1600,
                    height: 900
                }, void 0, false, {
                    fileName: "[project]/components/richtext.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/richtext.tsx",
                lineNumber: 79,
                columnNumber: 11
            }, this)
    },
    hardBreak: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/components/richtext.tsx",
            lineNumber: 83,
            columnNumber: 20
        }, this)
};
function RichText(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "cd51054ec708475990f0494003fecf83101810c3b91ccfc8a51d2ff4bb289173") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cd51054ec708475990f0494003fecf83101810c3b91ccfc8a51d2ff4bb289173";
    }
    const { richText, className } = t0;
    if (!richText) {
        return null;
    }
    let t1;
    if ($[1] !== className) {
        t1 = cn("prose prose-zinc prose-headings:scroll-m-24 prose-headings:text-opacity-90 prose-p:text-opacity-80 prose-a:decoration-dotted prose-ol:text-opacity-80 prose-ul:text-opacity-80 prose-h2:border-b prose-h2:pb-2 prose-h2:text-3xl prose-h2:font-semibold prose-h2:first:mt-0 max-w-none dark:prose-invert", className);
        $[1] = className;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = richText;
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
            value: t2,
            components: components,
            onMissingComponent: _temp
        }, void 0, false, {
            fileName: "[project]/components/richtext.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t1 || $[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/richtext.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_c = RichText;
function _temp(_, t0) {
    const { nodeType, type } = t0;
    return console.log("missing component", nodeType, type);
}
var _c;
__turbopack_context__.k.register(_c, "RichText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/cta.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CTABlock": (()=>CTABlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/components/badge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/richtext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sanity-buttons.tsx [app-client] (ecmascript)");
;
;
;
;
;
function CTABlock(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "22aff14b2d10058f57463457d1725b58be6c2cd62a7794a3fcefefbba12a1861") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "22aff14b2d10058f57463457d1725b58be6c2cd62a7794a3fcefefbba12a1861";
    }
    const { richText, title, eyebrow, buttons } = t0;
    let t1;
    if ($[1] !== eyebrow) {
        t1 = eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
            variant: "secondary",
            className: "bg-zinc-200 dark:text-black",
            children: eyebrow
        }, void 0, false, {
            fileName: "[project]/components/sections/cta.tsx",
            lineNumber: 21,
            columnNumber: 21
        }, this);
        $[1] = eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold md:text-5xl text-balance",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/sections/cta.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== richText) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-lg text-muted-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
                richText: richText,
                className: "text-balance"
            }, void 0, false, {
                fileName: "[project]/components/sections/cta.tsx",
                lineNumber: 37,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/cta.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[5] = richText;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== buttons) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityButtons"], {
                buttons: buttons,
                buttonClassName: "w-full sm:w-auto",
                className: "w-full sm:w-fit grid gap-2 sm:grid-flow-col lg:justify-start mb-8"
            }, void 0, false, {
                fileName: "[project]/components/sections/cta.tsx",
                lineNumber: 45,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/cta.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[7] = buttons;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t1 || $[10] !== t2 || $[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "features",
            className: "my-6 md:my-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-muted py-16 rounded-3xl px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto space-y-8",
                        children: [
                            t1,
                            t2,
                            t3,
                            t4
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/cta.tsx",
                        lineNumber: 53,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/cta.tsx",
                    lineNumber: 53,
                    columnNumber: 107
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/cta.tsx",
                lineNumber: 53,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/cta.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_c = CTABlock;
var _c;
__turbopack_context__.k.register(_c, "CTABlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/faq-accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FaqAccordion": (()=>FaqAccordion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/components/accordion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/components/badge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/richtext.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
function FaqAccordion(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "6996ebb79a603cf5308a0889ff019008107a04d7c930515bd6b4b8d2b95a067a") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6996ebb79a603cf5308a0889ff019008107a04d7c930515bd6b4b8d2b95a067a";
    }
    const { eyebrow, title, subtitle, faqs, link } = t0;
    let t1;
    if ($[1] !== eyebrow) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
            variant: "secondary",
            children: eyebrow
        }, void 0, false, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold md:text-5xl",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== subtitle) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-normal text-[#374151] text-balance dark:text-zinc-400",
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = subtitle;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full flex-col items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center space-y-4 text-center sm:space-y-6 md:text-center",
                children: [
                    t1,
                    t2,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/faq-accordion.tsx",
                lineNumber: 48,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== faqs) {
        t5 = faqs?.map(_temp);
        $[11] = faqs;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Accordion, {
            type: "single",
            collapsible: true,
            className: "w-full",
            defaultValue: "3",
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== link) {
        t7 = link?.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-1 text-xs",
                    children: link?.title
                }, void 0, false, {
                    fileName: "[project]/components/sections/faq-accordion.tsx",
                    lineNumber: 74,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: link.href ?? "#",
                    target: link.openInNewTab ? "_blank" : "_self",
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-[500] leading-6",
                            children: link?.description
                        }, void 0, false, {
                            fileName: "[project]/components/sections/faq-accordion.tsx",
                            lineNumber: 74,
                            columnNumber: 212
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full border p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 16,
                                className: "text-[#374151] dark:text-neutral-300"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/faq-accordion.tsx",
                                lineNumber: 74,
                                columnNumber: 325
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/faq-accordion.tsx",
                            lineNumber: 74,
                            columnNumber: 283
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/faq-accordion.tsx",
                    lineNumber: 74,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 74,
            columnNumber: 24
        }, this);
        $[15] = link;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t6 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-16 max-w-xl mx-auto",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== t4 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "my-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6",
                children: [
                    t4,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/faq-accordion.tsx",
                lineNumber: 91,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/faq-accordion.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[20] = t4;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_c = FaqAccordion;
function _temp(faq, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
        value: faq?._id,
        className: "py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionTrigger, {
                className: "py-2 text-[15px] leading-6 hover:no-underline group",
                children: faq?.title
            }, void 0, false, {
                fileName: "[project]/components/sections/faq-accordion.tsx",
                lineNumber: 101,
                columnNumber: 102
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContent, {
                className: "pb-2 text-muted-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
                    richText: faq?.richText ?? [],
                    className: "text-sm md:text-base"
                }, void 0, false, {
                    fileName: "[project]/components/sections/faq-accordion.tsx",
                    lineNumber: 101,
                    columnNumber: 272
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/faq-accordion.tsx",
                lineNumber: 101,
                columnNumber: 215
            }, this)
        ]
    }, `AccordionItem-${faq?._id}-${index}`, true, {
        fileName: "[project]/components/sections/faq-accordion.tsx",
        lineNumber: 101,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "FaqAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/feature-cards-with-icon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FeatureCardsWithIcon": (()=>FeatureCardsWithIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/components/badge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/richtext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sanity-icon.tsx [app-client] (ecmascript)");
;
;
;
;
;
function FeatureCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "8464bc314a21bd0ec8770a7ee309d1661452c4e5e8d37825a9a11f88985506eb") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8464bc314a21bd0ec8770a7ee309d1661452c4e5e8d37825a9a11f88985506eb";
    }
    const { card } = t0;
    let t1;
    if ($[1] !== card) {
        t1 = card ?? {};
        $[1] = card;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { icon, title, richText } = t1;
    let t2;
    if ($[3] !== icon) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mb-9 flex w-fit p-3 items-center justify-center rounded-full bg-background drop-shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityIcon"], {
                icon: icon
            }, void 0, false, {
                fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
                lineNumber: 31,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = icon;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-medium md:text-2xl mb-2",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = title;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== richText) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
            richText: richText,
            className: "font-normal text-sm md:text-[16px] text-black/90 leading-7 text-balance dark:text-neutral-300"
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[7] = richText;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t2 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl bg-accent p-8 md:min-h-[300px] md:p-8",
            children: [
                t2,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = FeatureCard;
function FeatureCardsWithIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "8464bc314a21bd0ec8770a7ee309d1661452c4e5e8d37825a9a11f88985506eb") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8464bc314a21bd0ec8770a7ee309d1661452c4e5e8d37825a9a11f88985506eb";
    }
    const { eyebrow, title, richText, cards } = t0;
    let t1;
    if ($[1] !== eyebrow) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
            variant: "secondary",
            children: eyebrow
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[1] = eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold md:text-5xl",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== richText) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
            richText: richText,
            className: "text-base md:text-lg text-balance max-w-3xl"
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[5] = richText;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full flex-col items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center space-y-4 text-center sm:space-y-6 md:text-center",
                children: [
                    t1,
                    t2,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
                lineNumber: 113,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== cards) {
        t5 = cards?.map(_temp);
        $[11] = cards;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mt-20 grid gap-8 lg:grid-cols-3",
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t4 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "features",
            className: "my-6 md:my-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6",
                children: [
                    t4,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
                lineNumber: 139,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[15] = t4;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_c1 = FeatureCardsWithIcon;
function _temp(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
        card: card
    }, `FeatureCard-${card?._key}-${index}`, false, {
        fileName: "[project]/components/sections/feature-cards-with-icon.tsx",
        lineNumber: 149,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FeatureCard");
__turbopack_context__.k.register(_c1, "FeatureCardsWithIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroBlock": (()=>HeroBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/components/badge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/richtext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sanity-buttons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sanity-image.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
function HeroBlock(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "72164502c64c5c3c46c75b859d1acb5da14dcd994cf1cf3bfca44f50ef87d67e") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "72164502c64c5c3c46c75b859d1acb5da14dcd994cf1cf3bfca44f50ef87d67e";
    }
    const { title, buttons, badge, image, richText } = t0;
    let t1;
    if ($[1] !== badge) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
            variant: "secondary",
            children: badge
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[1] = badge;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl lg:text-6xl font-semibold text-balance",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== richText) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
            richText: richText,
            className: "text-base md:text-lg font-normal"
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = richText;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== buttons) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityButtons"], {
            buttons: buttons,
            buttonClassName: "w-full sm:w-auto",
            className: "w-full sm:w-fit grid gap-2 sm:grid-flow-col lg:justify-start mb-8"
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[10] = buttons;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t1 || $[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-full grid-rows-[auto_1fr_auto] gap-4 items-center justify-items-center text-center lg:items-start lg:justify-items-start lg:text-left",
            children: [
                t1,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== image) {
        t7 = image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-96 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityImage"], {
                asset: image,
                loading: "eager",
                width: 800,
                height: 800,
                priority: true,
                quality: 80,
                className: "max-h-96 w-full rounded-3xl object-cover"
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 74,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 74,
            columnNumber: 19
        }, this);
        $[16] = image;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t6 || $[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "hero",
            className: "mt-4 md:my-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid items-center gap-8 lg:grid-cols-2",
                    children: [
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/hero.tsx",
                    lineNumber: 82,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/hero.tsx",
                lineNumber: 82,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/hero.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    return t8;
}
_c = HeroBlock;
var _c;
__turbopack_context__.k.register(_c, "HeroBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/image-link-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CTACard": (()=>CTACard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sanity-image.tsx [app-client] (ecmascript)");
;
;
;
;
;
function CTACard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "8589049fc8eec0bd321bec36d527aab372201f176e6237aa0b22e80f00072f28") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8589049fc8eec0bd321bec36d527aab372201f176e6237aa0b22e80f00072f28";
    }
    const { card, className } = t0;
    let t1;
    if ($[1] !== card) {
        t1 = card ?? {};
        $[1] = card;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { image, description, title, href } = t1;
    const t2 = href ?? "#";
    let t3;
    if ($[3] !== className) {
        t3 = cn("rounded-3xl p-4 md:p-8 transition-colors relative overflow-hidden group flex flex-col justify-end xl:h-[400px]", className);
        $[3] = className;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== image) {
        t4 = image?.asset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-[1] mix-blend-multiply",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sanity$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SanityImage"], {
                asset: image,
                loading: "eager",
                priority: true,
                quality: 100,
                fill: true,
                className: "object-cover grayscale pointer-events-none group-hover:opacity-100 group-hover:transition-opacity duration-1000 opacity-40 dark:opacity-60 dark:hover:opacity-[2] dark:saturate-200"
            }, void 0, false, {
                fileName: "[project]/components/image-link-card.tsx",
                lineNumber: 42,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/image-link-card.tsx",
            lineNumber: 42,
            columnNumber: 26
        }, this);
        $[5] = image;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-[500] text-[#111827] dark:text-neutral-300",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/image-link-card.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[7] = title;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-[#374151] xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 delay-150 dark:text-neutral-300",
            children: description
        }, void 0, false, {
            fileName: "[project]/components/image-link-card.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[9] = description;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-[2] pt-64 flex flex-col space-y-2 mb-4 duration-500 xl:absolute xl:top-24 group-hover:top-8 xl:inset-x-8",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/image-link-card.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t2 || $[15] !== t3 || $[16] !== t4 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t2,
            className: t3,
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/image-link-card.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[14] = t2;
        $[15] = t3;
        $[16] = t4;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_c = CTACard;
var _c;
__turbopack_context__.k.register(_c, "CTACard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/image-link-cards.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImageLinkCards": (()=>ImageLinkCards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/components/badge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$link$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/image-link-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/richtext.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
function ImageLinkCards(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "5acf5c21346794fe49fb67732ee2f896dc1c09c14f3d818d38da63bac08a4f8e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5acf5c21346794fe49fb67732ee2f896dc1c09c14f3d818d38da63bac08a4f8e";
    }
    const { richText, title, eyebrow, cards } = t0;
    let t1;
    if ($[1] !== eyebrow) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
            variant: "secondary",
            children: eyebrow
        }, void 0, false, {
            fileName: "[project]/components/sections/image-link-cards.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-semibold md:text-5xl text-balance",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/sections/image-link-cards.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== richText) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
            richText: richText,
            className: "text-balance"
        }, void 0, false, {
            fileName: "[project]/components/sections/image-link-cards.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[5] = richText;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center space-y-4 text-center sm:space-y-6 md:text-center",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/image-link-cards.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== cards) {
        t5 = Array.isArray(cards) && cards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 grid w-full grid-cols-1 gap-4 lg:gap-1 sm:grid-cols-2 lg:grid-cols-4",
            children: cards?.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$link$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTACard"], {
                    card: card,
                    className: cn("bg-muted-foreground/10 dark:bg-zinc-800", idx === 0 && "lg:rounded-l-3xl lg:rounded-r-none", idx === cards.length - 1 && "lg:rounded-r-3xl lg:rounded-l-none", idx !== 0 && idx !== cards.length - 1 && "lg:rounded-none")
                }, card._key, false, {
                    fileName: "[project]/components/sections/image-link-cards.tsx",
                    lineNumber: 56,
                    columnNumber: 173
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/sections/image-link-cards.tsx",
            lineNumber: 56,
            columnNumber: 54
        }, this);
        $[11] = cards;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "image-link-cards",
            className: "my-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col items-center",
                    children: [
                        t4,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/image-link-cards.tsx",
                    lineNumber: 64,
                    columnNumber: 107
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/image-link-cards.tsx",
                lineNumber: 64,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/image-link-cards.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_c = ImageLinkCards;
var _c;
__turbopack_context__.k.register(_c, "ImageLinkCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/action/newsletter-submission.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"40b9151ad585abd1665e70093db23dd0db27d16388":"newsletterSubmission"} */ __turbopack_context__.s({
    "newsletterSubmission": (()=>newsletterSubmission)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
;
var newsletterSubmission = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b9151ad585abd1665e70093db23dd0db27d16388", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "newsletterSubmission");
}}),
"[project]/components/sections/subscribe-newsletter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SubscribeNewsletter": (()=>SubscribeNewsletter),
    "default": (()=>SubscribeNewsletterButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@workspace/ui/components/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom-experimental/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$action$2f$newsletter$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/action/newsletter-submission.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/richtext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function SubscribeNewsletterButton() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "b5fee0d2653386e16ea4ad873d7f12cb69a616c42f03f6867c9f95ded284f8f4") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b5fee0d2653386e16ea4ad873d7f12cb69a616c42f03f6867c9f95ded284f8f4";
    }
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"])();
    const t0 = pending ? "Subscribing..." : "Subscribe to newsletter";
    let t1;
    if ($[1] !== pending) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                className: "animate-spin text-black",
                size: 16,
                strokeWidth: 2,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/subscribe-newsletter.tsx",
                lineNumber: 34,
                columnNumber: 78
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "text-black dark:text-neutral-300",
                size: 16,
                strokeWidth: 2,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/subscribe-newsletter.tsx",
                lineNumber: 34,
                columnNumber: 178
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/subscribe-newsletter.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[1] = pending;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== pending || $[4] !== t0 || $[5] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            size: "icon",
            type: "submit",
            disabled: pending,
            className: "size-8 aspect-square bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700",
            "aria-label": t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/components/sections/subscribe-newsletter.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[3] = pending;
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_s(SubscribeNewsletterButton, "jhoM4l+GnnRJq1+2o1VHFTL5Kos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2d$experimental$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"]
    ];
});
_c = SubscribeNewsletterButton;
function SubscribeNewsletter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "b5fee0d2653386e16ea4ad873d7f12cb69a616c42f03f6867c9f95ded284f8f4") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b5fee0d2653386e16ea4ad873d7f12cb69a616c42f03f6867c9f95ded284f8f4";
    }
    const { title, subTitle, helperText } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-4 text-xl font-semibold text-gray-900 dark:text-neutral-300 sm:text-3xl md:text-5xl text-balance",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/sections/subscribe-newsletter.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== subTitle) {
        t2 = subTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
            richText: subTitle,
            className: "mb-6 text-sm text-gray-600 sm:mb-8 text-balance sm:text-base dark:text-neutral-300"
        }, void 0, false, {
            fileName: "[project]/components/sections/subscribe-newsletter.tsx",
            lineNumber: 75,
            columnNumber: 22
        }, this);
        $[3] = subTitle;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2",
            action: __TURBOPACK__imported__module__$5b$project$5d2f$action$2f$newsletter$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsletterSubmission"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex bg-white dark:bg-zinc-200 items-center border rounded-xl p-2 drop-shadow-lg md:w-96 justify-between pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        name: "email",
                        required: true,
                        placeholder: "Enter your email address",
                        className: "rounded-e-none border-e-0 focus-visible:ring-0 outline-none bg-transparent w-full dark:text-zinc-900 dark:placeholder:text-zinc-900"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/subscribe-newsletter.tsx",
                        lineNumber: 83,
                        columnNumber: 254
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubscribeNewsletterButton, {}, void 0, false, {
                        fileName: "[project]/components/sections/subscribe-newsletter.tsx",
                        lineNumber: 83,
                        columnNumber: 488
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/subscribe-newsletter.tsx",
                lineNumber: 83,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/subscribe-newsletter.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== helperText) {
        t4 = helperText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$richtext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichText"], {
            richText: helperText,
            className: "mt-3 text-sm text-gray-800 opacity-80 sm:mt-4 dark:text-neutral-300"
        }, void 0, false, {
            fileName: "[project]/components/sections/subscribe-newsletter.tsx",
            lineNumber: 90,
            columnNumber: 24
        }, this);
        $[6] = helperText;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t2 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "subscribe",
            className: "px-4 py-8 sm:py-12 md:py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto px-4 md:px-8 py-8 sm:py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto text-center",
                    children: [
                        t1,
                        t2,
                        t3,
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/subscribe-newsletter.tsx",
                    lineNumber: 98,
                    columnNumber: 219
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/subscribe-newsletter.tsx",
                lineNumber: 98,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/subscribe-newsletter.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[8] = t1;
        $[9] = t2;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_c1 = SubscribeNewsletter;
var _c, _c1;
__turbopack_context__.k.register(_c, "SubscribeNewsletterButton");
__turbopack_context__.k.register(_c1, "SubscribeNewsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/pagebuilder.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageBuilder": (()=>PageBuilder)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-experimental/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/visual-editing/dist/_chunks-es/SharedStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/visual-editing-csm/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$cta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/cta.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$faq$2d$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/faq-accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$feature$2d$cards$2d$with$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/feature-cards-with-icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$image$2d$link$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/image-link-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$subscribe$2d$newsletter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/subscribe-newsletter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const BLOCK_COMPONENTS = {
    cta: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$cta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTABlock"],
    faqAccordion: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$faq$2d$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaqAccordion"],
    hero: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroBlock"],
    featureCardsIcon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$feature$2d$cards$2d$with$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCardsWithIcon"],
    subscribeNewsletter: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$subscribe$2d$newsletter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscribeNewsletter"],
    imageLinkCards: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$image$2d$link$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageLinkCards"]
};
function PageBuilder(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "f64e581bec17f1b34cae9bc461273e500f447d275ab32393fa5c21df7f08b142") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f64e581bec17f1b34cae9bc461273e500f447d275ab32393fa5c21df7f08b142";
    }
    const { pageBuilder: t1, id, type } = t0;
    let t2;
    if ($[1] !== t1) {
        t2 = t1 === undefined ? [] : t1;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const initialPageBuilder = t2;
    let t3;
    if ($[3] !== id) {
        t3 = (currentPageBuilder, action)=>{
            if (action.id === id && action.document.pageBuilder) {
                return action.document.pageBuilder;
            }
            return currentPageBuilder;
        };
        $[3] = id;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const pageBuilder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(initialPageBuilder, t3);
    let t4;
    if ($[5] !== id || $[6] !== type) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDataAttribute"])({
            id,
            baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioUrl"],
            projectId: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
            dataset: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
            type,
            path: "pageBuilder"
        }).toString();
        $[5] = id;
        $[6] = type;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== id || $[9] !== pageBuilder || $[10] !== type) {
        let t6;
        if ($[12] !== id || $[13] !== type) {
            t6 = (block)=>{
                const Component = BLOCK_COMPONENTS[block._type];
                if (!Component) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center p-8 text-center text-muted-foreground bg-muted rounded-lg",
                        children: [
                            "Component not found for block type: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                children: block._type
                            }, void 0, false, {
                                fileName: "[project]/components/pagebuilder.tsx",
                                lineNumber: 80,
                                columnNumber: 199
                            }, this)
                        ]
                    }, `${block._type}-${block._key}`, true, {
                        fileName: "[project]/components/pagebuilder.tsx",
                        lineNumber: 80,
                        columnNumber: 18
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sanity": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2d$csm$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDataAttribute"])({
                        id,
                        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioUrl"],
                        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
                        dataset: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
                        type,
                        path: `pageBuilder[_key=="${block._key}"]`
                    }).toString(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                        ...block
                    }, void 0, false, {
                        fileName: "[project]/components/pagebuilder.tsx",
                        lineNumber: 89,
                        columnNumber: 24
                    }, this)
                }, `${block._type}-${block._key}`, false, {
                    fileName: "[project]/components/pagebuilder.tsx",
                    lineNumber: 82,
                    columnNumber: 16
                }, this);
            };
            $[12] = id;
            $[13] = type;
            $[14] = t6;
        } else {
            t6 = $[14];
        }
        t5 = pageBuilder.map(t6);
        $[8] = id;
        $[9] = pageBuilder;
        $[10] = type;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[15] !== t4 || $[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$experimental$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-col gap-16 my-16 max-w-7xl mx-auto",
            "data-sanity": t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/pagebuilder.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    return t6;
}
_s(PageBuilder, "IJCj4be8I4sxB2hU7wF47By2u1A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$visual$2d$editing$2f$dist$2f$_chunks$2d$es$2f$SharedStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"]
    ];
});
_c = PageBuilder;
var _c;
__turbopack_context__.k.register(_c, "PageBuilder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_032babd6._.js.map