import{i as m,o as n,c as r,a as e,t as c,n as b,j as Q,_ as p,b as o,F as g,r as k,d as l,f as u}from"./entry.fd525412.js";import{h as A}from"./houses.4becff18.js";import{_ as v}from"./nuxt-img.2d9a3d3e.js";import{u as f}from"./vue.f36acd1f.408dbdd6.js";const w={key:0,class:"row"},x=Q('<h4 class="link item-long" data-v-c1dbbea4>建案</h4><h4 class="header item" data-v-c1dbbea4>Q1成交</h4><h4 class="header item" data-v-c1dbbea4>Q2成交</h4><h4 class="header item" data-v-c1dbbea4>Q3成交</h4><h4 class="header item" data-v-c1dbbea4>Q1均價</h4><h4 class="header item" data-v-c1dbbea4>Q2均價</h4><h4 class="header item" data-v-c1dbbea4>Q3均價</h4>',7),P=[x],$=["href"],q={class:"header item"},y={class:"header item"},N={class:"header item"},R={class:"header item"},M={class:"header item"},j={class:"header item"},B=m({__name:"Row",props:{建案:{},AQ1:{},AQ2:{},AQ3:{},AQ4:{},PQ1:{},PQ2:{},PQ3:{},PQ4:{},index:{},isHeader:{type:Boolean}},setup(i){return(t,s)=>t.isHeader?(n(),r("div",w,P)):(n(),r("div",{key:1,class:"row",style:b(t.index%2===0?{background:"rgba(128,128,128,0.15)"}:{background:"rgba(255,255,255,0.1)"})},[e("a",{href:`/market/${t.建案}`,class:"link item-long"},c(t.建案),9,$),e("p",q,c(t.AQ1),1),e("p",y,c(t.AQ2),1),e("p",N,c(t.AQ3),1),e("p",R,c(t.PQ1),1),e("p",M,c(t.PQ2),1),e("p",j,c(t.PQ3),1)],4))}});const S=p(B,[["__scopeId","data-v-c1dbbea4"]]),H={class:""},V={class:""},F=e("h3",null,"A7建案 熱銷排行榜 - 2023 Q1-Q3",-1),T=e("p",null,[l(" 資料來源; Facebook A7重劃區大小事 / "),e("a",{href:"https://www.facebook.com/groups/1951117865015671/permalink/6606775252783219/?mibextid=uJjRxr"},"李世豪 2023/11/11"),l("。 ")],-1),z={class:""},I={class:""},C={__name:"Table",setup(i){const t={newSorted:[...A].filter(s=>s.選擇2==="Y").sort((s,_)=>s.No-_.No)};return(s,_)=>{const d=S;return n(),r("div",H,[e("div",V,[F,T,e("div",z,[e("div",I,[o(d,{isHeader:!0}),(n(!0),r(g,null,k(t.newSorted,(a,h)=>(n(),u(d,{key:a.id,No:a.No,建案:a.建案,AQ1:a.實價登錄數Q1,AQ2:a.實價登錄數Q2,AQ3:a.實價登錄數Q3,PQ1:a.實價平均Q1,PQ2:a.實價平均Q2,PQ3:a.實價平均Q3,index:h},null,8,["No","建案","AQ1","AQ2","AQ3","PQ1","PQ2","PQ3","index"]))),128))])])])])}}},D=C,E={},J={class:"flex flex-col"};function L(i,t){const s=v;return n(),r("div",J,[o(s,{src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/market/MAR-002.png",alt:"A7房市分析2",class:"w-[1600px] m-2 shadow-lg"}),o(s,{src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/market/MAR-001.png",alt:"A7房市分析1",class:"w-[800px] m-2 shadow-lg"}),o(s,{src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/market/MAR-003.png",alt:"A7房市分析3",class:"w-[800px] m-2 shadow-lg"}),o(s,{src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/market/MAR-004.png",alt:"A7房市分析4",class:"w-[800px] m-2 shadow-lg"}),o(s,{src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/market/MAR-005.png",alt:"A7房市分析5",class:"w-[800px] m-2 shadow-lg"})])}const O=p(E,[["render",L]]),Y={class:"container"},G=e("h1",null,"城市探索 - A7重劃區 建案房屋市場行情",-1),K=e("h1",{class:"mt-4"},"房屋市場分析看板",-1),ee={__name:"index",setup(i){return f({title:"房市行情"}),(t,s)=>{const _=D,d=O;return n(),r("div",Y,[G,o(_),K,o(d)])}}};export{ee as default};