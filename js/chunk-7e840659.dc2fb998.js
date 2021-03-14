(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e840659"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],n={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},r=n,c=e("2877"),o=Object(c["a"])(r,s,i,!1,null,null,null);a["a"]=o.exports},efd9:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("table",{staticClass:"table mt-4"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,s){return e("tr",{key:s,class:{"text-secondary":!a.is_paid}},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,s){return e("li",{key:s},[t._v(" "+t._s(a.product.title)+" × "+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",[t._v(" "+t._s(a.payment)+" ")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(a.amount)+" ")]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var s=a.paid,i=e.target,n=!!i.checked;if(Array.isArray(s)){var r=null,c=t._i(s,r);i.checked?c<0&&t.$set(a,"paid",s.concat([r])):c>-1&&t.$set(a,"paid",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])])])})),0):t._e()]),e("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getOrders}})],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),r={name:"Orders",components:{Pagination:n["a"]},data:function(){return{pagination:{},orders:{user:{}},isLoading:!1}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("758e049c-13ea-4895-88ba-30bd03b23992","/admin/ec/orders?page=").concat(a,"&paged=10");this.$http.get(e).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1}))},setOrderPaid:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io","/api/").concat("758e049c-13ea-4895-88ba-30bd03b23992","/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io","/api/").concat("758e049c-13ea-4895-88ba-30bd03b23992","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){a.getOrders()}))}}},c=r,o=e("2877"),d=Object(o["a"])(c,s,i,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-7e840659.dc2fb998.js.map