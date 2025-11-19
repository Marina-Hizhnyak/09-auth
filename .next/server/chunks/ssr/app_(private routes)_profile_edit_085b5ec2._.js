module.exports = [
"[project]/app/(private routes)/profile/edit/EditProfilePage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "EditProfilePage-module__XoJWpq__actions",
  "avatar": "EditProfilePage-module__XoJWpq__avatar",
  "cancelButton": "EditProfilePage-module__XoJWpq__cancelButton",
  "formTitle": "EditProfilePage-module__XoJWpq__formTitle",
  "input": "EditProfilePage-module__XoJWpq__input",
  "mainContent": "EditProfilePage-module__XoJWpq__mainContent",
  "profileCard": "EditProfilePage-module__XoJWpq__profileCard",
  "profileInfo": "EditProfilePage-module__XoJWpq__profileInfo",
  "saveButton": "EditProfilePage-module__XoJWpq__saveButton",
  "usernameWrapper": "EditProfilePage-module__XoJWpq__usernameWrapper",
});
}),
"[project]/app/(private routes)/profile/edit/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/clientApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/authStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/(private routes)/profile/edit/EditProfilePage.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
function EditProfilePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [avatar, setAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let ignore = false;
        const loadUser = async ()=>{
            try {
                setIsLoading(true);
                setError(null);
                let currentUser = user;
                if (!currentUser) {
                    currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMe"])();
                    setUser(currentUser);
                }
                if (!ignore && currentUser) {
                    setUsername(currentUser.username ?? '');
                    setEmail(currentUser.email ?? '');
                    setAvatar(currentUser.avatar ?? 'https://ac.goit.global/img/user-avatar-placeholder.jpg');
                }
            } catch (err) {
                console.error(err);
                setError('Failed to load profile data.');
            } finally{
                if (!ignore) {
                    setIsLoading(false);
                }
            }
        };
        loadUser();
        return ()=>{
            ignore = true;
        };
    }, [
        user,
        setUser
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setError(null);
        try {
            setIsSaving(true);
            const updatedUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMe"])({
                username
            });
            setUser(updatedUser);
            router.push('/profile');
        } catch (err) {
            console.error(err);
            setError('Failed to update profile.');
        } finally{
            setIsSaving(false);
        }
    };
    const handleCancel = ()=>{
        router.push('/profile');
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCard,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading profile..."
                }, void 0, false, {
                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formTitle,
                    children: "Edit Profile"
                }, void 0, false, {
                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: avatar || 'https://ac.goit.global/img/user-avatar-placeholder.jpg',
                    alt: "User Avatar",
                    width: 120,
                    height: 120,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar
                }, void 0, false, {
                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileInfo,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usernameWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "username",
                                    children: "Username:"
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "username",
                                    type: "text",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                    value: username,
                                    onChange: (e)=>setUsername(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Email: ",
                                email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveButton,
                                    disabled: isSaving,
                                    children: isSaving ? 'Saving…' : 'Save'
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$private__routes$292f$profile$2f$edit$2f$EditProfilePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton,
                                    onClick: handleCancel,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(private routes)/profile/edit/page.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28private%20routes%29_profile_edit_085b5ec2._.js.map