var co2=(()=>{var A=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var W=(a,e)=>{for(var t in e)A(a,t,{get:e[t],enumerable:!0})},Y=(a,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of w(e))!F.call(a,r)&&r!==t&&A(a,r,{get:()=>e[r],enumerable:!(n=K(e,r))||n.enumerable});return a};var H=a=>Y(A({},"__esModule",{value:!0}),a);var te={};W(te,{averageIntensity:()=>R,co2:()=>V,default:()=>ee,hosting:()=>b,marginalIntensity:()=>L});var T=4883333333333333e-25;var m=class{constructor(e){this.options=e,this.KWH_PER_BYTE_FOR_NETWORK=T}perByte(e,t){if(e<1)return 0;if(t){let r=e*72e-12*0,i=e*T*475;return r+i}let n=72e-12+T;return e*n*519}};var D=m;var C={GIGABYTE:1e9};var k={AFG:120.48,AFRICA:484.7,ALB:23.44,DZA:485.49,ASM:687.5,AGO:195.98,ATG:657.14,ARG:344.31,ARM:222.68,ABW:591.4,ASEAN:508.2,ASIA:534.89,AUS:501.7,AUT:158.22,AZE:469.58,BHS:698.11,BHR:494.02,BGD:574.28,BRB:644.86,BLR:425.9,BEL:167.11,BLZ:484.38,BEN:666.67,BTN:24.44,BOL:335.4,BIH:553.47,BWA:794.52,BRA:102.04,BRN:493.59,BGR:399.72,BFA:611.43,BDI:250,CPV:600,KHM:400.46,CMR:278.26,CAN:125.84,CYM:684.93,CAF:0,TCD:677.42,CHL:332.61,CHN:533.98,COL:163.99,COM:714.29,COG:395.52,COD:25.36,COK:400,CRI:37.21,CIV:410.75,HRV:246.29,CUB:654.68,CYP:589.35,CZE:414.8,DNK:180.42,DJI:666.67,DMA:529.41,DOM:549.8,ECU:183.63,EGY:469.63,SLV:194.23,GNQ:492.96,ERI:688.89,EST:460.26,SWZ:189.19,ETH:25.19,EU:276.63,EUROPE:297.05,FLK:500,FRO:428.57,FJI:289.47,FIN:131.71,FRA:84.88,GUF:254.72,PYF:471.43,G20:442.57,G7:344.31,GAB:397.38,GMB:700,GEO:134.83,DEU:385.39,GHA:361.2,GRC:344.41,GRL:133.33,GRD:714.29,GLP:623.53,GUM:670.33,GTM:304.71,GIN:208.63,GNB:750,GUY:642.28,HTI:606.06,HND:373.96,HKG:609.93,HUN:222.1,ISL:28.56,IND:633.4,IDN:619.03,IRN:487.86,IRQ:531.36,IRL:346.43,ISR:537.57,ITA:372.63,JAM:537.93,JPN:494.86,JOR:391.13,KAZ:635.57,KEN:101.13,KIR:666.67,XKX:767,KWT:574.56,KGZ:104.43,LAO:242.18,"LATIN AMERICA AND CARIBBEAN":237.91,LVA:183.43,LBN:663.1,LSO:20,LBR:304.35,LBY:558.85,LTU:195.7,LUX:162.6,MAC:491.53,MDG:483.25,MWI:133.8,MYS:543.87,MDV:651.52,MLI:463.13,MLT:433.48,MTQ:698.63,MRT:526.6,MUS:611.11,MEX:423.81,"MIDDLE EAST":519.92,MDA:666.67,MNG:749.66,MNE:392.75,MSR:1e3,MAR:630.75,MOZ:126.63,MMR:330.8,NAM:63.69,NRU:750,NPL:24.51,NLD:354.31,NCL:610.12,NZL:105.22,NIC:354.21,NER:622.22,NGA:368.11,"NORTH AMERICA":336.68,PRK:102.42,MKD:543.71,NOR:28.93,OCEANIA:450.73,OECD:341.08,OMN:488.27,PAK:344.16,PSE:465.12,PAN:152.68,PNG:526.75,PRY:25.49,PER:256.51,POL:633.23,PRT:234.61,PRI:612.39,QAT:490.28,REU:519.03,ROU:264.24,RUS:363.68,RWA:294.12,KNA:681.82,LCA:685.71,SPM:800,VCT:500,WSM:470.59,STP:600,SAU:557.78,SEN:523.13,SRB:582.13,SYC:615.39,SLE:47.62,SGP:488.78,SVK:140.14,SVN:237.38,SLB:727.27,SOM:634.15,ZAF:708.21,KOR:437.6,SSD:684.21,ESP:217.42,LKA:501.53,SDN:288.13,SUR:356.44,SWE:45.12,CHE:41.28,SYR:541.17,TWN:560.98,TJK:83.63,TZA:366.75,THA:501.57,PHL:594.45,TGO:460.32,TON:625,TTO:491.41,TUN:469.43,TUR:413.6,TKM:490.19,TCA:703.7,UGA:52.27,UKR:232.74,ARE:407.98,GBR:261.16,USA:368.1,URY:150.13,UZB:505.41,VUT:571.43,VEN:212.48,VNM:386.49,VGB:714.29,VIR:685.71,WORLD:437.66,YEM:559.66,ZMB:84.7,ZWE:392.28},j="average";var R={data:k,type:j};var v=.81,O=.52,S=.14,p=.15,P=.19,c=R.data.WORLD,f=50,g=.75,N=.25,y=.02;var E=a=>parseFloat(a.toFixed(2));function B(a){if(typeof a!="object")throw new Error("Options must be an object");let e={};if(a?.gridIntensity){e.gridIntensity={};let{device:t,dataCenter:n,network:r}=a.gridIntensity;(t||t===0)&&(typeof t=="object"?(R.data[t.country?.toUpperCase()]||(console.warn(`"${t.country}" is not a valid country. Please use a valid 3 digit ISO 3166 country code. 
See https://developers.thegreenwebfoundation.org/co2js/data/ for more information. 
Falling back to global average grid intensity.`),e.gridIntensity.device={value:c}),e.gridIntensity.device={country:t.country,value:parseFloat(R.data[t.country?.toUpperCase()])}):typeof t=="number"?e.gridIntensity.device={value:t}:(e.gridIntensity.device={value:c},console.warn(`The device grid intensity must be a number or an object. You passed in a ${typeof t}. 
Falling back to global average grid intensity.`))),(n||n===0)&&(typeof n=="object"?(R.data[n.country?.toUpperCase()]||(console.warn(`"${n.country}" is not a valid country. Please use a valid 3 digit ISO 3166 country code. 
See https://developers.thegreenwebfoundation.org/co2js/data/ for more information.  
Falling back to global average grid intensity.`),e.gridIntensity.dataCenter={value:c}),e.gridIntensity.dataCenter={country:n.country,value:parseFloat(R.data[n.country?.toUpperCase()])}):typeof n=="number"?e.gridIntensity.dataCenter={value:n}:(e.gridIntensity.dataCenter={value:c},console.warn(`The data center grid intensity must be a number or an object. You passed in a ${typeof n}. 
Falling back to global average grid intensity.`))),(r||r===0)&&(typeof r=="object"?(R.data[r.country?.toUpperCase()]||(console.warn(`"${r.country}" is not a valid country. Please use a valid 3 digit ISO 3166 country code. 
See https://developers.thegreenwebfoundation.org/co2js/data/ for more information.  Falling back to global average grid intensity. 
Falling back to global average grid intensity.`),e.gridIntensity.network={value:c}),e.gridIntensity.network={country:r.country,value:parseFloat(R.data[r.country?.toUpperCase()])}):typeof r=="number"?e.gridIntensity.network={value:r}:(e.gridIntensity.network={value:c},console.warn(`The network grid intensity must be a number or an object. You passed in a ${typeof r}. 
Falling back to global average grid intensity.`)))}return(a?.dataReloadRatio||a.dataReloadRatio===0)&&(typeof a.dataReloadRatio=="number"?a.dataReloadRatio>=0&&a.dataReloadRatio<=1?e.dataReloadRatio=a.dataReloadRatio:(e.dataReloadRatio=y,console.warn(`The dataReloadRatio option must be a number between 0 and 1. You passed in ${a.dataReloadRatio}. 
Falling back to default value.`)):(e.dataReloadRatio=y,console.warn(`The dataReloadRatio option must be a number. You passed in a ${typeof a.dataReloadRatio}. 
Falling back to default value.`))),(a?.firstVisitPercentage||a.firstVisitPercentage===0)&&(typeof a.firstVisitPercentage=="number"?a.firstVisitPercentage>=0&&a.firstVisitPercentage<=1?e.firstVisitPercentage=a.firstVisitPercentage:(e.firstVisitPercentage=g,console.warn(`The firstVisitPercentage option must be a number between 0 and 1. You passed in ${a.firstVisitPercentage}. 
Falling back to default value.`)):(e.firstVisitPercentage=g,console.warn(`The firstVisitPercentage option must be a number. You passed in a ${typeof a.firstVisitPercentage}. 
Falling back to default value.`))),(a?.returnVisitPercentage||a.returnVisitPercentage===0)&&(typeof a.returnVisitPercentage=="number"?a.returnVisitPercentage>=0&&a.returnVisitPercentage<=1?e.returnVisitPercentage=a.returnVisitPercentage:(e.returnVisitPercentage=N,console.warn(`The returnVisitPercentage option must be a number between 0 and 1. You passed in ${a.returnVisitPercentage}. 
Falling back to default value.`)):(e.returnVisitPercentage=N,console.warn(`The returnVisitPercentage option must be a number. You passed in a ${typeof a.returnVisitPercentage}. 
Falling back to default value.`))),e}function _(a=""){return{"User-Agent":`co2js/0.14.2 ${a}`}}var G=class{constructor(e){this.options=e}energyPerByteByComponent(e){let n=e/C.GIGABYTE*v;return{consumerDeviceEnergy:n*O,networkEnergy:n*S,productionEnergy:n*P,dataCenterEnergy:n*p}}co2byComponent(e,t=c,n={}){let r=c,i=c,o=c,d=c;if(n?.gridIntensity){let{device:s,network:l,dataCenter:I}=n.gridIntensity;(s?.value||s?.value===0)&&(r=s.value),(l?.value||l?.value===0)&&(i=l.value),(I?.value||I?.value===0)&&(o=I.value)}t===!0&&(o=f);let u={};for(let[s,l]of Object.entries(e))s.startsWith("dataCenterEnergy")?u[s.replace("Energy","CO2")]=l*o:s.startsWith("consumerDeviceEnergy")?u[s.replace("Energy","CO2")]=l*r:s.startsWith("networkEnergy")?u[s.replace("Energy","CO2")]=l*i:u[s.replace("Energy","CO2")]=l*d;return u}perByte(e,t=!1,n=!1,r={}){e<1&&(e=0);let i=this.energyPerByteByComponent(e,r);if(typeof t!="boolean")throw new Error(`perByte expects a boolean for the carbon intensity value. Received: ${t}`);let o=this.co2byComponent(i,t,r),u=Object.values(o).reduce((s,l)=>s+l);return n?{...o,total:u}:u}perVisit(e,t=!1,n=!1,r={}){let i=this.energyPerVisitByComponent(e,r);if(typeof t!="boolean")throw new Error(`perVisit expects a boolean for the carbon intensity value. Received: ${t}`);let o=this.co2byComponent(i,t,r),u=Object.values(o).reduce((s,l)=>s+l);return n?{...o,total:u}:u}energyPerByte(e){let t=this.energyPerByteByComponent(e);return Object.values(t).reduce((r,i)=>r+i)}energyPerVisitByComponent(e,t={},n=g,r=N,i=y){(t.dataReloadRatio||t.dataReloadRatio===0)&&(i=t.dataReloadRatio),(t.firstVisitPercentage||t.firstVisitPercentage===0)&&(n=t.firstVisitPercentage),(t.returnVisitPercentage||t.returnVisitPercentage===0)&&(r=t.returnVisitPercentage);let o=this.energyPerByteByComponent(e),d={},u=Object.values(o);for(let[s,l]of Object.entries(o))d[`${s} - first`]=l*n,d[`${s} - subsequent`]=l*r*i;return d}energyPerVisit(e){let t=0,n=0,r=Object.entries(this.energyPerVisitByComponent(e));for(let[i,o]of r)i.indexOf("first")>0&&(t+=o);for(let[i,o]of r)i.indexOf("subsequent")>0&&(n+=o);return t+n}emissionsPerVisitInGrams(e,t=c){return E(e*t)}annualEnergyInKwh(e,t=1e3){return e*t*12}annualEmissionsInGrams(e,t=1e3){return e*t*12}annualSegmentEnergy(e){return{consumerDeviceEnergy:E(e*O),networkEnergy:E(e*S),dataCenterEnergy:E(e*p),productionEnergy:E(e*P)}}};var h=G;var M=class{constructor(e){if(this.model=new h,e?.model==="1byte")this.model=new D;else if(e?.model==="swd")this.model=new h;else if(e?.model)throw new Error(`"${e.model}" is not a valid model. Please use "1byte" for the OneByte model, and "swd" for the Sustainable Web Design model.
See https://developers.thegreenwebfoundation.org/co2js/models/ to learn more about the models available in CO2.js.`);this._segment=e?.results==="segment"}perByte(e,t=!1){return this.model.perByte(e,t,this._segment)}perVisit(e,t=!1){if(this.model?.perVisit)return this.model.perVisit(e,t,this._segment);throw new Error(`The perVisit() method is not supported in the model you are using. Try using perByte() instead.
See https://developers.thegreenwebfoundation.org/co2js/methods/ to learn more about the methods available in CO2.js.`)}perByteTrace(e,t=!1,n={}){let r={};return n&&(r=B(n)),{co2:this.model.perByte(e,t,this._segment,r),green:t,variables:{description:"Below are the variables used to calculate this CO2 estimate.",bytes:e,gridIntensity:{description:"The grid intensity (grams per kilowatt-hour) used to calculate this CO2 estimate.",network:r?.gridIntensity?.network?.value??c,dataCenter:t?f:r?.gridIntensity?.dataCenter?.value??c,production:c,device:r?.gridIntensity?.device?.value??c}}}}perVisitTrace(e,t=!1,n={}){if(this.model?.perVisit){let r={};return n&&(r=B(n)),{co2:this.model.perVisit(e,t,this._segment,r),green:t,variables:{description:"Below are the variables used to calculate this CO2 estimate.",bytes:e,gridIntensity:{description:"The grid intensity (grams per kilowatt-hour) used to calculate this CO2 estimate.",network:r?.gridIntensity?.network?.value??c,dataCenter:t?f:r?.gridIntensity?.dataCenter?.value??c,production:c,device:r?.gridIntensity?.device?.value??c},dataReloadRatio:r?.dataReloadRatio??.02,firstVisitPercentage:r?.firstVisitPercentage??.75,returnVisitPercentage:r?.returnVisitPercentage??.25}}}else throw new Error(`The perVisitDetailed() method is not supported in the model you are using. Try using perByte() instead.
See https://developers.thegreenwebfoundation.org/co2js/methods/ to learn more about the methods available in CO2.js.`)}perDomain(e,t){let n=[];for(let r of Object.keys(e.domains)){let i;t&&t.indexOf(r)>-1?i=this.perByte(e.domains[r].transferSize,!0):i=this.perByte(e.domains[r].transferSize),n.push({domain:r,co2:i,transferSize:e.domains[r].transferSize})}return n.sort((r,i)=>i.co2-r.co2),n}perPage(e,t){let n=this.perDomain(e,t),r=0;for(let i of n)r+=i.co2;return r}perContentType(e,t){let n={};for(let i of e.assets){let o=new URL(i.url).domain,d=i.transferSize,u=this.perByte(d,t&&t.indexOf(o)>-1),s=i.type;n[s]||(n[s]={co2:0,transferSize:0}),n[s].co2+=u,n[s].transferSize+=d}let r=[];for(let i of Object.keys(n))r.push({type:i,co2:n[i].co2,transferSize:n[i].transferSize});return r.sort((i,o)=>o.co2-i.co2),r}dirtiestResources(e,t){let n=[];for(let r of e.assets){let i=new URL(r.url).domain,o=r.transferSize,d=this.perByte(o,t&&t.indexOf(i)>-1);n.push({url:r.url,co2:d,transferSize:o})}return n.sort((r,i)=>i.co2-r.co2),n.slice(0,n.length>10?10:n.length)}perParty(e,t){let n=0,r=0,i=e.firstPartyRegEx;for(let o of Object.keys(e.domains))o.match(i)?n+=this.perByte(e.domains[o].transferSize,t&&t.indexOf(o)>-1):r+=this.perByte(e.domains[o].transferSize,t&&t.indexOf(o)>-1);return{firstParty:n,thirdParty:r}}};var V=M;function x(a,e){return typeof a=="string"?Z(a,e):$(a,e)}async function Z(a,e){return(await(await fetch(`https://api.thegreenwebfoundation.org/greencheck/${a}`,{headers:_(e)})).json()).green}async function $(a,e){try{let t="https://api.thegreenwebfoundation.org/v2/greencheckmulti",n=JSON.stringify(a),i=await(await fetch(`${t}/${n}`,{headers:_(e)})).json();return z(i)}catch{return[]}}function z(a){return Object.entries(a).filter(([n,r])=>r.green).map(([n,r])=>r.url)}var U={check:x};function J(a,e){return U.check(a,e)}var b={check:J};var Q={AFG:"414",ALB:"0",DZA:"528",ASM:"753",AND:"188",AGO:"1476",AIA:"753",ATG:"753",ARG:"478",ARM:"390",ABW:"753",AUS:"808",AUT:"242",AZE:"534","AZORES (PORTUGAL)":"753",BHS:"753",BHR:"726",BGD:"528",BRB:"749",BLR:"400",BEL:"252",BLZ:"403",BEN:"745",BMU:"753",BTN:"0",BOL:"604",BES:"753",BIH:"1197",BWA:"1486",BRA:"284",VGB:"753",BRN:"681",BGR:"911",BFA:"753",BDI:"414",KHM:"1046",CMR:"659",CAN:"372",CYM:"753",CPV:"753",CAF:"188",TCD:"753","CHANNEL ISLANDS (U.K)":"753",CHL:"657",CHN:"899",COL:"410",COM:"753",COD:"0",COG:"659",COK:"753",CRI:"108",CIV:"466",HRV:"294",CUB:"559",CUW:"876",CYP:"751",CZE:"902",DNK:"362",DJI:"753",DMA:"753",DOM:"601",ECU:"560",EGY:"554",SLV:"547",GNQ:"632",ERI:"915",EST:"1057",SWZ:"0",ETH:"0",FLK:"753",FRO:"753",FJI:"640",FIN:"267",FRA:"158",GUF:"423",PYF:"753",GAB:"946",GMB:"753",GEO:"289",DEU:"650",GHA:"495",GIB:"779",GRC:"507",GRL:"264",GRD:"753",GLP:"753",GUM:"753",GTM:"798",GIN:"753",GNB:"753",GUY:"847",HTI:"1048",HND:"662",HUN:"296",ISL:"0",IND:"951",IDN:"783",IRN:"592",IRQ:"1080",IRL:"380",IMN:"436",ISR:"394",ITA:"414",JAM:"711",JPN:"471",JOR:"529",KAZ:"797",KEN:"574",KIR:"753",PRK:"754",KOR:"555",XKX:"1145",KWT:"675",KGZ:"217",LAO:"1069",LVA:"240",LBN:"794",LSO:"0",LBR:"677",LBY:"668",LIE:"151",LTU:"211",LUX:"220",MDG:"876","MADEIRA (PORTUGAL)":"663",MWI:"489",MYS:"551",MDV:"753",MLI:"1076",MLT:"520",MHL:"753",MTQ:"753",MRT:"753",MUS:"700",MYT:"753",MEX:"531",FSM:"753",MDA:"541",MCO:"158",MNG:"1366",MNE:"899",MSR:"753",MAR:"729",MOZ:"234",MMR:"719",NAM:"355",NRU:"753",NPL:"0",NLD:"326",NCL:"779",NZL:"246",NIC:"675",NER:"772",NGA:"526",NIU:"753",MKD:"851",MNP:"753",NOR:"47",OMN:"479",PAK:"592",PLW:"753",PSE:"719",PAN:"477",PNG:"597",PRY:"0",PER:"473",PHL:"672",POL:"828",PRT:"389",PRI:"596",QAT:"503",REU:"772",ROU:"489",RUS:"476",RWA:"712",SHN:"753",KNA:"753",LCA:"753",MAF:"753",SPM:"753",VCT:"753",WSM:"753",SMR:"414",STP:"753",SAU:"592",SEN:"870",SRB:"1086",SYC:"753",SLE:"489",SGP:"379",SXM:"753",SVK:"332",SVN:"620",SLB:"753",SOM:"753",ZAF:"1070",SSD:"890",ESP:"402",LKA:"731",SDN:"736",SUR:"1029",SWE:"68",CHE:"48",SYR:"713",TWN:"484",TJK:"255",TZA:"531",THA:"450",TLS:"753",TGO:"859",TON:"753",TTO:"559",TUN:"468",TUR:"376",TKM:"927",TCA:"753",TUV:"753",UGA:"279",UKR:"768",ARE:"556",GBR:"380",USA:"416",URY:"174",UZB:"612",VUT:"753",VEN:"711",VNM:"560",VIR:"650",YEM:"807",ZMB:"416",ZWE:"1575","MEMO:  EU 27":"409"},q="marginal",X="2021";var L={data:Q,type:q,year:X};var ee={co2:V,hosting:b,averageIntensity:R,marginalIntensity:L};return H(te);})();
//# sourceMappingURL=index.js.map
