"use strict";(self.webpackChunks_rani_my_favourite_books=self.webpackChunks_rani_my_favourite_books||[]).push([[699],{2699:(A,l,o)=>{o.r(l),o.d(l,{ContentDetailModule:()=>h});var r=o(9808),a=o(9118),u=o(2382),t=o(4893),m=o(3823),p=o(2684),c=o(9224),g=o(7423);function f(e,i){if(1&e&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.AsE(""," ","",n,"")}}function Z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"mat-card",2),t.TgZ(2,"mat-card-title"),t.TgZ(3,"p",3),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t.TgZ(6,"p"),t.TgZ(7,"strong"),t._uU(8,"ID:"),t.qZA(),t._uU(9),t.qZA(),t.qZA(),t._UZ(10,"img",4),t.TgZ(11,"mat-card-content"),t.TgZ(12,"p"),t.TgZ(13,"strong"),t._uU(14,"Description:"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"p"),t.TgZ(17,"strong"),t._uU(18,"PRIZE:"),t.qZA(),t._uU(19),t.qZA(),t.TgZ(20,"p"),t.TgZ(21,"strong"),t._uU(22,"SIZE:"),t.qZA(),t.YNc(23,f,2,2,"span",5),t.qZA(),t.qZA(),t.TgZ(24,"mat-card-actions"),t.TgZ(25,"button",6),t.NdJ("click",function(){return t.CHM(n),t.oxw().goToContentList()}),t._uU(26,"Go to Content List"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(4),t.Oqu(n.content.title),t.xp6(5),t.hij(" ",n.content.id,""),t.xp6(1),t.s9C("src",n.content.imgURL?n.content.imgURL:"../../assets/img/default.jpg",t.LSH),t.xp6(5),t.hij(" ",n.content.description,""),t.xp6(4),t.hij(" ",n.content.prize,""),t.xp6(4),t.Q6J("ngForOf",null==n.content?null:n.content.tags)}}const C=[{path:"",component:(()=>{class e{constructor(n,s,d,T){this.router=n,this.route=s,this.contentService=d,this.messageService=T}ngOnInit(){this.routeSub=this.route.params.subscribe(n=>{n&&n.id?this.contentService.getContentDetails(n.id).subscribe({next:s=>{this.content=s,this.messageService.add(`${s.title} content with id: ${s.id} is retrieved `)},error:()=>{this.router.navigate(["/page-not-found"])}}):this.goToContentList()})}goToContentList(){this.router.navigate(["/list"])}ngOnDestroy(){this.routeSub&&this.routeSub.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.F0),t.Y36(a.gz),t.Y36(m._),t.Y36(p.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-content-detail"]],decls:1,vars:1,consts:[["class","main-div",4,"ngIf"],[1,"main-div"],[1,"content-card"],["appHoverEffect",""],["mat-card-image","","width","150","height","150","alt","content-image",3,"src"],["appHoverEffect","","class","tag",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","type","button",3,"click"],["appHoverEffect","",1,"tag"]],template:function(n,s){1&n&&t.YNc(0,Z,27,6,"div",0),2&n&&t.Q6J("ngIf",s.content)},directives:[r.O5,c.a8,c.n5,c.$j,c.G2,c.dn,r.sg,c.hq,g.lW],styles:[".content-card[_ngcontent-%COMP%]{max-width:500px;min-width:500px}.main-div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),e})()},{path:"**",redirectTo:"page-not-found"}];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(C)],a.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,a.Bz,u.u5,u.UX,v,c.QW,g.ot]]}),e})()}}]);