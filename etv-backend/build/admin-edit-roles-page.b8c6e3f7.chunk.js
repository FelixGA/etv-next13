(self["webpackChunketv_backend"] = self["webpackChunketv_backend"] || []).push([[2544],{

/***/ 5790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _Box=__webpack_require__(5493);var _Grid=__webpack_require__(34626);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _Typography=__webpack_require__(49425);var _Textarea=__webpack_require__(59626);var _TextInput=__webpack_require__(55967);var _Button=__webpack_require__(19408);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var RoleForm=function RoleForm(_ref){var disabled=_ref.disabled,role=_ref.role,values=_ref.values,errors=_ref.errors,onChange=_ref.onChange,onBlur=_ref.onBlur;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:true},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{justifyContent:"space-between"},/*#__PURE__*/_react["default"].createElement(_Box.Box,null,/*#__PURE__*/_react["default"].createElement(_Box.Box,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{fontWeight:"bold"},role?role.name:formatMessage({id:'Settings.roles.form.title',defaultMessage:'Details'}))),/*#__PURE__*/_react["default"].createElement(_Box.Box,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral500",variant:"pi"},role?role.description:formatMessage({id:'Settings.roles.form.description',defaultMessage:'Name and description of the role'})))),/*#__PURE__*/_react["default"].createElement(_Button.Button,{disabled:true,variant:"secondary"},formatMessage({id:'Settings.roles.form.button.users-with-role',defaultMessage:'{number, plural, =0 {# users} one {# user} other {# users}} with this role'},{number:role.usersCount}))),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{disabled:disabled,name:"name",error:errors.name&&formatMessage({id:errors.name}),label:formatMessage({id:'Settings.roles.form.input.name',defaultMessage:'Name'}),onChange:onChange,onBlur:onBlur,value:values.name||''})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6},/*#__PURE__*/_react["default"].createElement(_Textarea.Textarea,{disabled:disabled,label:formatMessage({id:'Settings.roles.form.input.description',defaultMessage:'Description'}),name:"description",error:errors.name&&formatMessage({id:errors.name}),onChange:onChange,onBlur:onBlur},values.description||''))))));};RoleForm.defaultProps={disabled:false,role:null,values:{name:'',description:''}};RoleForm.propTypes={disabled:_propTypes["default"].bool,errors:_propTypes["default"].object.isRequired,onBlur:_propTypes["default"].func.isRequired,onChange:_propTypes["default"].func.isRequired,role:_propTypes["default"].object,values:_propTypes["default"].object};var _default=RoleForm;exports.default=_default;

/***/ }),

/***/ 4397:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "Permissions", ({enumerable:true,get:function get(){return _Permissions["default"];}}));Object.defineProperty(exports, "RoleForm", ({enumerable:true,get:function get(){return _RoleForm["default"];}}));var _Permissions=_interopRequireDefault(__webpack_require__(74716));var _RoleForm=_interopRequireDefault(__webpack_require__(5790));

/***/ }),

/***/ 46781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _Box=__webpack_require__(5493);var _Button=__webpack_require__(19408);var _Layout=__webpack_require__(78862);var _Main=__webpack_require__(62031);var _Stack=__webpack_require__(9008);var _formik=__webpack_require__(80831);var _Link=__webpack_require__(85104);var _ArrowLeft=_interopRequireDefault(__webpack_require__(68717));var _get=_interopRequireDefault(__webpack_require__(27361));var _reactIntl=__webpack_require__(97132);var _reactRouterDom=__webpack_require__(39711);var _components=__webpack_require__(4397);var _hooks=__webpack_require__(63376);var _schema=_interopRequireDefault(__webpack_require__(88245));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var EditPage=function EditPage(){var toggleNotification=(0,_helperPlugin.useNotification)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)('/settings/roles/:id'),id=_useRouteMatch.params.id;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),isSubmitting=_useState2[0],setIsSubmiting=_useState2[1];var permissionsRef=(0,_react.useRef)();var _useOverlayBlocker=(0,_helperPlugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var _useFetchPermissionsL=(0,_hooks.useFetchPermissionsLayout)(id),isLayoutLoading=_useFetchPermissionsL.isLoading,permissionsLayout=_useFetchPermissionsL.data;var _useFetchRole=(0,_hooks.useFetchRole)(id),role=_useFetchRole.role,rolePermissions=_useFetchRole.permissions,isRoleLoading=_useFetchRole.isLoading,onSubmitSucceeded=_useFetchRole.onSubmitSucceeded;var handleEditRoleSubmit=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(data){var _permissionsRef$curre,permissionsToSend,didUpdateConditions,errorMessage,message;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;lockApp();setIsSubmiting(true);_permissionsRef$curre=permissionsRef.current.getPermissions(),permissionsToSend=_permissionsRef$curre.permissionsToSend,didUpdateConditions=_permissionsRef$curre.didUpdateConditions;_context.next=6;return(0,_helperPlugin.request)("/admin/roles/".concat(id),{method:'PUT',body:data});case 6:if(!(role.code!=='strapi-super-admin')){_context.next=10;break;}_context.next=9;return(0,_helperPlugin.request)("/admin/roles/".concat(id,"/permissions"),{method:'PUT',body:{permissions:permissionsToSend}});case 9:if(didUpdateConditions){trackUsage('didUpdateConditions');}case 10:permissionsRef.current.setFormAfterSubmit();onSubmitSucceeded({name:data.name,description:data.description});toggleNotification({type:'success',message:{id:'notification.success.saved'}});_context.next=21;break;case 15:_context.prev=15;_context.t0=_context["catch"](0);console.error(_context.t0.response);errorMessage=(0,_get["default"])(_context.t0,'response.payload.message','An error occured');message=(0,_get["default"])(_context.t0,'response.payload.data.permissions[0]',errorMessage);toggleNotification({type:'warning',message:message});case 21:_context.prev=21;setIsSubmiting(false);unlockApp();return _context.finish(21);case 25:case"end":return _context.stop();}}},_callee,null,[[0,15,21,25]]);}));return function handleEditRoleSubmit(_x){return _ref.apply(this,arguments);};}();var isFormDisabled=role.code==='strapi-super-admin';return/*#__PURE__*/_react["default"].createElement(_Main.Main,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"Roles"}),/*#__PURE__*/_react["default"].createElement(_formik.Formik,{enableReinitialize:true,initialValues:{name:role.name,description:role.description},onSubmit:handleEditRoleSubmit,validationSchema:_schema["default"],validateOnChange:false},function(_ref2){var handleSubmit=_ref2.handleSubmit,values=_ref2.values,errors=_ref2.errors,handleChange=_ref2.handleChange,handleBlur=_ref2.handleBlur;return/*#__PURE__*/_react["default"].createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{primaryAction:/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{horizontal:true,size:2},/*#__PURE__*/_react["default"].createElement(_Button.Button,{disabled:role.code==='strapi-super-admin',onClick:handleSubmit,loading:isSubmitting,size:"L"},formatMessage({id:'app.components.Button.save',defaultMessage:'Save'}))),title:formatMessage({id:'Settings.roles.edit.title',defaultMessage:'Edit a role'}),subtitle:formatMessage({id:'Settings.roles.create.description',defaultMessage:'Define the rights given to the role'}),navigationAction:/*#__PURE__*/_react["default"].createElement(_Link.Link,{startIcon:/*#__PURE__*/_react["default"].createElement(_ArrowLeft["default"],null),to:"/settings/roles"},formatMessage({id:'app.components.go-back',defaultMessage:'Go back'}))}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:6},/*#__PURE__*/_react["default"].createElement(_components.RoleForm,{isLoading:isRoleLoading,disabled:isFormDisabled,errors:errors,values:values,onChange:handleChange,onBlur:handleBlur,role:role}),!isLayoutLoading&&!isRoleLoading?/*#__PURE__*/_react["default"].createElement(_Box.Box,{shadow:"filterShadow",hasRadius:true},/*#__PURE__*/_react["default"].createElement(_components.Permissions,{isFormDisabled:isFormDisabled,permissions:rolePermissions,ref:permissionsRef,layout:permissionsLayout})):/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:true},/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null))))));}));};var _default=EditPage;exports.default=_default;

/***/ }),

/***/ 88245:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _helperPlugin=__webpack_require__(68547);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var schema=yup.object().shape({name:yup.string().required(_helperPlugin.translatedErrors.required)});var _default=schema;exports.default=_default;

/***/ }),

/***/ 19144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _reactRouterDom=__webpack_require__(39711);var _permissions=_interopRequireDefault(__webpack_require__(13240));var _EditPage=_interopRequireDefault(__webpack_require__(46781));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ProtectedEditPage=function ProtectedEditPage(){var permissions=(0,_react.useMemo)(function(){return{read:_permissions["default"].settings.roles.read,update:_permissions["default"].settings.roles.update};},[]);var _useRBAC=(0,_helperPlugin.useRBAC)(permissions),isLoading=_useRBAC.isLoading,_useRBAC$allowedActio=_useRBAC.allowedActions,canRead=_useRBAC$allowedActio.canRead,canUpdate=_useRBAC$allowedActio.canUpdate;if(isLoading){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null);}if(!canRead&&!canUpdate){return/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect,{to:"/"});}return/*#__PURE__*/_react["default"].createElement(_EditPage["default"],null);};var _default=ProtectedEditPage;exports.default=_default;

/***/ })

}]);