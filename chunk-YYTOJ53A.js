import{u as C,z as l}from"./chunk-AUG4K3LK.js";import{$ as p,Eb as d,Ja as f,Lb as y,Na as s,S as m,Y as o,Ya as u,eb as b,kb as v,lb as g,mb as r,nb as a,ob as h,zb as x}from"./chunk-CDFBLEAI.js";import"./chunk-CWTPBX7D.js";var _=(()=>{let t=class t{constructor(){this._HttpClient=o(C)}getAllBrand(){return this._HttpClient.get(`${l.baseUrl}/api/v1/brands`)}getAllgetAllBrandById(n){return this._HttpClient.get(`${l.baseUrl}/api/v1/brands/${n}`)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var S=(e,t)=>t._id;function E(e,t){if(e&1&&(r(0,"div",3)(1,"div",5)(2,"div",6),h(3,"img",7),a()()()),e&2){let c=t.$implicit;s(3),x("alt",c.slug),b("src",c.image,f)}}function I(e,t){e&1&&(r(0,"h3",4)(1,"span",8),d(2,"There is no brands"),a()())}var k=(()=>{let t=class t{constructor(){this.brandList=u([]),this._brandService=o(_)}ngOnInit(){this._brandService.getAllBrand().subscribe({next:n=>{this.brandList.set(n.data)}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=p({type:t,selectors:[["app-brands"]],standalone:!0,features:[y],decls:8,vars:1,consts:[[1,"container-fluid","mt-5"],[1,"text-main","fw-bold","p-3","text-center","shadow","text-uppercase","my-5"],[1,"row","g-3","m-4"],[1,"col-md-3"],[1,"text-center","text-danger","my-4","fs-5"],[1,"brand","text-center"],["role","button"],[1,"brand-img","w-75",3,"src","alt"],[1,"fw-bold","fs-2"]],template:function(i,w){i&1&&(r(0,"section")(1,"div",0)(2,"h2",1),d(3,"Popular Brands "),a(),r(4,"div",2),v(5,E,4,2,"div",3,S,!1,I,3,0,"h3",4),a()()()),i&2&&(s(5),g(w.brandList()))}});let e=t;return e})();export{k as BrandsComponent};
