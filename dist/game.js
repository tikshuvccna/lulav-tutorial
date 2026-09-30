(()=>{var pd=Object.defineProperty;var md=(i,t,e)=>t in i?pd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Yc=(i,t,e)=>md(i,typeof t!="symbol"?t+"":t,e);var di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Th=0,Ll=1,Ah=2;var Ai=1,Rh=2,Ms=3,pi=0,je=1,Fe=2,Un=0,bs=1,Dl=2,Nl=3,Ul=4,Ch=5;var Ri=100,Ph=101,Ih=102,Lh=103,Dh=104,Nh=200,Uh=201,Fh=202,Oh=203,Fl=204,Ol=205,Bh=206,kh=207,zh=208,Hh=209,Vh=210,Gh=211,Wh=212,Xh=213,qh=214,fa=0,pa=1,ma=2,is=3,ga=4,_a=5,xa=6,ya=7,Bl=0,Yh=1,Zh=2,En=0,kl=1,zl=2,Hl=3,Mr=4,Vl=5,Gl=6,Wl=7;var Xl=300,mi=301,Ci=302,Ya=303,Za=304,br=306,Ti=1e3,In=1001,va=1002,Le=1003,$h=1004;var Sr=1005;var Ne=1006,$a=1007;var gi=1008;var nn=1009,ql=1010,Yl=1011,Ss=1012,Ja=1013,wn=1014,pn=1015,Tn=1016,Ka=1017,ja=1018,Es=1020,Zl=35902,$l=35899,Jl=1021,Kl=1022,mn=1023,Ln=1026,_i=1027,Qa=1028,to=1029,xi=1030,eo=1031;var no=1033,Er=33776,wr=33777,Tr=33778,Ar=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,Rr=37490,fo=37491,po=37808,mo=37809,go=37810,_o=37811,xo=37812,yo=37813,vo=37814,Mo=37815,bo=37816,So=37817,Eo=37818,wo=37819,To=37820,Ao=37821,Ro=36492,Co=36494,Po=36495,Io=36283,Lo=36284,Cr=36285,Do=36286;var Ys=2300,Ma=2301,ua=2302,Sl=2303,El=2400,wl=2401,Tl=2402;var Jh=3200;var No=0,Kh=1,Jn="",Ge="srgb",Zs="srgb-linear",$s="linear",ee="srgb";var da=7680;var jh=519,Qh=512,tu=513,eu=514,Uo=515,nu=516,iu=517,Fo=518,su=519,jl=35044;var Ql="300 es",bn=2e3,ss=2001;function gd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=Js("canvas");return i.style.display="block",i}var Zc={},rs=null;function Ks(...i){let t="THREE."+i.shift();rs?rs("log",t,...i):console.log(t,...i)}function au(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=au(i);let t="THREE."+i.shift();if(rs)rs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Lt(...i){i=au(i);let t="THREE."+i.shift();if(rs)rs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function wi(...i){let t=i.join(" ");t in Zc||(Zc[t]=!0,Pt(...i))}function ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lu={[fa]:pa,[ma]:xa,[ga]:ya,[is]:_a,[pa]:fa,[xa]:ma,[ya]:ga,[_a]:is},Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=1234567,Xs=Math.PI/180,as=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function xd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yd(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function vd(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function Md(i,t=1){return t-Math.abs(tc(i,t*2)-t)}function bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ed(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wd(i,t){return i+Math.random()*(t-i)}function Td(i){return i*(.5-Math.random())}function Ad(i){i!==void 0&&($c=i);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rd(i){return i*Xs}function Cd(i){return i*as}function Pd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ec={DEG2RAD:Xs,RAD2DEG:as,generateUUID:Xn,clamp:zt,euclideanModulo:tc,mapLinear:xd,inverseLerp:yd,lerp:qs,damp:vd,pingpong:Md,smoothstep:bd,smootherstep:Sd,randInt:Ed,randFloat:wd,randFloatSpread:Td,seededRandom:Ad,degToRad:Rd,radToDeg:Cd,isPowerOfTwo:Pd,ceilPowerOfTwo:Id,floorPowerOfTwo:Ld,setQuaternionFromProperEuler:Dd,normalize:ie,denormalize:Mn},ac=class ac{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ac.prototype.isVector2=!0;var gt=ac,We=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oc=class oc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oc.prototype.isVector3=!0;var I=oc,tl=new I,Jc=new We,lc=class lc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],T=s[4],M=s[7],S=s[2],E=s[5],P=s[8];return r[0]=a*y+o*v+l*S,r[3]=a*m+o*T+l*E,r[6]=a*p+o*M+l*P,r[1]=c*y+h*v+d*S,r[4]=c*m+h*T+d*E,r[7]=c*p+h*M+d*P,r[2]=u*y+f*v+g*S,r[5]=u*m+f*T+g*E,r[8]=u*p+f*M+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(t,e)),this}rotate(t){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-t)),this}translate(t,e){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lc.prototype.isMatrix3=!0;var Nt=lc,el=new Nt,Kc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){let i={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?$s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zs]:{primaries:t,whitePoint:n,transfer:$s,toXYZ:Kc,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Kc,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var Xt=Nd();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=Js("canvas")),Bi.width=t.width,Bi.height=t.height;let s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ud=0,os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nl(s[a].image)):r.push(nl(s[a]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Fd=0,il=new I,Je=class i extends Sn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,s=In,r=Ne,a=gi,o=mn,l=nn,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Xn(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Xl;Je.DEFAULT_ANISOTROPY=1;var cc=class cc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(f+1)/2,S=(p+1)/2,E=(h+u)/4,P=(d+y)/4,x=(g+m)/4;return T>M&&T>S?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=P/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=x/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=P/r,s=x/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cc.prototype.isVector4=!0;var _e=cc,Sa=class extends Sn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},js=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qa=class qa{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Od,t,Bd)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ni.crossVectors(n,rn),ni.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ni.crossVectors(n,rn)),ni.normalize(),zr.crossVectors(rn,ni),s[0]=ni.x,s[4]=zr.x,s[8]=rn.x,s[1]=ni.y,s[5]=zr.y,s[9]=rn.y,s[2]=ni.z,s[6]=zr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],T=n[7],M=n[11],S=n[15],E=s[0],P=s[4],x=s[8],w=s[12],C=s[1],U=s[5],O=s[9],z=s[13],A=s[2],D=s[6],k=s[10],H=s[14],Y=s[3],X=s[7],j=s[11],et=s[15];return r[0]=a*E+o*C+l*A+c*Y,r[4]=a*P+o*U+l*D+c*X,r[8]=a*x+o*O+l*k+c*j,r[12]=a*w+o*z+l*H+c*et,r[1]=h*E+d*C+u*A+f*Y,r[5]=h*P+d*U+u*D+f*X,r[9]=h*x+d*O+u*k+f*j,r[13]=h*w+d*z+u*H+f*et,r[2]=g*E+y*C+m*A+p*Y,r[6]=g*P+y*U+m*D+p*X,r[10]=g*x+y*O+m*k+p*j,r[14]=g*w+y*z+m*H+p*et,r[3]=v*E+T*C+M*A+S*Y,r[7]=v*P+T*U+M*D+S*X,r[11]=v*x+T*O+M*k+S*j,r[15]=v*w+T*z+M*H+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],v=l*f-c*u,T=o*f-c*d,M=o*u-l*d,S=a*f-c*h,E=a*u-l*h,P=a*d-o*h;return e*(y*v-m*T+p*M)-n*(g*v-m*S+p*E)+s*(g*T-y*S+p*P)-r*(g*M-y*E+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=e*o-n*a,T=e*l-s*a,M=e*c-r*a,S=n*l-s*o,E=n*c-r*o,P=s*c-r*l,x=h*y-d*g,w=h*m-u*g,C=h*p-f*g,U=d*m-u*y,O=d*p-f*y,z=u*p-f*m,A=v*z-T*O+M*U+S*C-E*w+P*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return t[0]=(o*z-l*O+c*U)*D,t[1]=(s*O-n*z-r*U)*D,t[2]=(y*P-m*E+p*S)*D,t[3]=(u*E-d*P-f*S)*D,t[4]=(l*C-a*z-c*w)*D,t[5]=(e*z-s*C+r*w)*D,t[6]=(m*M-g*P-p*T)*D,t[7]=(h*P-u*M+f*T)*D,t[8]=(a*O-o*C+c*x)*D,t[9]=(n*C-e*O-r*x)*D,t[10]=(g*E-y*M+p*v)*D,t[11]=(d*M-h*E-f*v)*D,t[12]=(o*w-a*U-l*x)*D,t[13]=(e*U-n*w+s*x)*D,t[14]=(y*T-g*S-m*v)*D,t[15]=(h*S-d*T+u*v)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,v=l*c,T=l*h,M=l*d,S=n.x,E=n.y,P=n.z;return s[0]=(1-(y+p))*S,s[1]=(f+M)*S,s[2]=(g-T)*S,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+T)*P,s[9]=(m-v)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ki.set(s[0],s[1],s[2]).length(),o=ki.set(s[4],s[5],s[6]).length(),l=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let c=1/a,h=1/o,d=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ss)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===bn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ss)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};qa.prototype.isMatrix4=!0;var jt=qa,ki=new I,xn=new jt,Od=new I(0,0,0),Bd=new I(1,1,1),ni=new I,zr=new I,rn=new I,Qc=new jt,th=new We,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return th.setFromEuler(this),this.setFromQuaternion(th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kd=0,eh=new I,zi=new We,kn=new jt,Hr=new I,Us=new I,zd=new I,Hd=new We,nh=new I(1,0,0),ih=new I(0,1,0),sh=new I(0,0,1),rh={type:"added"},Vd={type:"removed"},Hi={type:"childadded",child:null},sl={type:"childremoved",child:null},ue=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new dn,n=new We,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Nt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(nh,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nh,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Us,Hr,this.up):kn.lookAt(Hr,Us,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(kn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ue.DEFAULT_UP=new I(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $t=class extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gd={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=tc(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=rl(a,r,t+1/3),this.g=rl(a,r,t),this.b=rl(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Xt.workingToColorSpace(Ve.copy(this),t),Math.round(zt(Ve.r*255,0,255))*65536+Math.round(zt(Ve.g*255,0,255))*256+Math.round(zt(Ve.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ge){Xt.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Vr);let n=qs(ii.h,Vr.h,e),s=qs(ii.s,Vr.s,e),r=qs(ii.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Dt;Dt.NAMES=cu;var Qs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tr=class extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new I,zn=new I,al=new I,Hn=new I,Vi=new I,Gi=new I,ah=new I,ol=new I,ll=new I,cl=new I,hl=new _e,ul=new _e,dl=new _e,Wn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),zn.subVectors(n,e),al.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(zn),l=yn.dot(al),c=zn.dot(zn),h=zn.dot(al),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,n),dl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hl,r.x),a.addScaledVector(ul,r.y),a.addScaledVector(dl,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),zn.subVectors(t,e),yn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),yn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),ol.subVectors(t,n);let l=Vi.dot(ol),c=Gi.dot(ol);if(l<=0&&c<=0)return e.copy(n);ll.subVectors(t,s);let h=Vi.dot(ll),d=Gi.dot(ll);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);cl.subVectors(t,r);let f=Vi.dot(cl),g=Gi.dot(cl);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Gi,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ah.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(ah,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),Wr.subVectors(this.max,Fs),Wi.subVectors(t.a,Fs),Xi.subVectors(t.b,Fs),qi.subVectors(t.c,Fs),si.subVectors(Xi,Wi),ri.subVectors(qi,Xi),Mi.subVectors(Wi,qi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Mi.z,Mi.y,si.z,0,-si.x,ri.z,0,-ri.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-ri.y,ri.x,0,-Mi.y,Mi.x,0];return!fl(e,Wi,Xi,qi,Wr)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Wi,Xi,qi,Wr))?!1:(Xr.crossVectors(si,ri),e=[Xr.x,Xr.y,Xr.z],fl(e,Wi,Xi,qi,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,Gr=new fn,Wi=new I,Xi=new I,qi=new I,si=new I,ri=new I,Mi=new I,Fs=new I,Wr=new I,Xr=new I,bi=new I;function fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);let o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Se=new I,qr=new gt,Wd=0,Te=class extends Sn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var nr=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xd=new fn,Os=new I,pl=new I,Yn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(pl)),this.expandByPoint(Os.copy(t.center).sub(pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qd=0,un=new jt,ml=new ue,Yi=new I,an=new fn,Bs=new fn,Ie=new I,me=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gd(t)?nr:er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(an.min,Bs.min),an.expandByPoint(Ie),Ie.addVectors(an.max,Bs.max),an.expandByPoint(Ie)):(an.expandByPoint(Bs.min),an.expandByPoint(Bs.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),Ie.add(Yi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;let c=new I,h=new I,d=new I,u=new gt,f=new gt,g=new gt,y=new I,m=new I;function p(x,w,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[x].add(y),o[w].add(y),o[C].add(y),l[x].add(m),l[w].add(m),l[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,w=v.length;x<w;++x){let C=v[x],U=C.start,O=C.count;for(let z=U,A=U+O;z<A;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let T=new I,M=new I,S=new I,E=new I;function P(x){S.fromBufferAttribute(s,x),E.copy(S);let w=o[x];T.copy(w),T.sub(S.multiplyScalar(S.dot(w))).normalize(),M.crossVectors(E,w);let U=M.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,U)}for(let x=0,w=v.length;x<w;++x){let C=v[x],U=C.start,O=C.count;for(let z=U,A=U+O;z<A;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Te(u,h,d)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ir=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},$e=new I,hs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gl=new I,Yd=new I,Zd=new Nt,on=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gl.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zd.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$d=0,Dn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=bs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ol,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new on().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},us=class extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zi,ks=new I,$i=new I,Ji=new I,Ki=new gt,zs=new gt,hu=new jt,Yr=new I,Hs=new I,Zr=new I,oh=new gt,_l=new gt,lh=new gt,sr=class extends ue{constructor(t=new us){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ir(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new hs(n,3,0,!1)),Zi.setAttribute("uv",new hs(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;$r(Yr.set(-.5,-.5,0),Ji,a,$i,s,r),$r(Hs.set(.5,-.5,0),Ji,a,$i,s,r),$r(Zr.set(.5,.5,0),Ji,a,$i,s,r),oh.set(0,0),_l.set(1,0),lh.set(1,1);let o=t.ray.intersectTriangle(Yr,Hs,Zr,!1,ks);if(o===null&&($r(Hs.set(-.5,.5,0),Ji,a,$i,s,r),_l.set(0,1),o=t.ray.intersectTriangle(Yr,Zr,Hs,!1,ks),o===null))return;let l=t.ray.origin.distanceTo(ks);l<t.near||l>t.far||e.push({distance:l,point:ks.clone(),uv:Wn.getInterpolation(ks,Yr,Hs,Zr,oh,_l,lh,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $r(i,t,e,n,s,r){Ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*Ki.x-s*Ki.y,zs.y=s*Ki.x+r*Ki.y):zs.copy(Ki),i.copy(t),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(hu)}var Gn=new I,xl=new I,Jr=new I,Kr=new I,oi=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xl.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Kr.copy(this.origin).sub(xl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=Kr.dot(this.direction),l=-Kr.dot(Jr),c=Kr.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xl).addScaledVector(Jr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,v=n.y-a.y,T=n.z-a.z,M=Math.abs(l),S=Math.abs(c),E=Math.abs(h),P,x,w,C,U,O,z,A,D,k,H,Y;if(M>=S&&M>=E?(w=l,O=d,D=g,Y=p,l>=0?(P=c,x=h,C=u,U=f,z=y,A=m,k=v,H=T):(P=h,x=c,C=f,U=u,z=m,A=y,k=T,H=v)):S>=E?(w=c,O=u,D=y,Y=v,c>=0?(P=h,x=l,C=f,U=d,z=m,A=g,k=T,H=p):(P=l,x=h,C=d,U=f,z=g,A=m,k=p,H=T)):(w=h,O=f,D=m,Y=T,h>=0?(P=l,x=c,C=d,U=u,z=g,A=y,k=p,H=v):(P=c,x=l,C=u,U=d,z=y,A=g,k=v,H=p)),w===0)return null;let X=P/w,j=x/w,et=1/w,Ct=C-X*O,At=U-j*O,oe=z-X*D,Yt=A-j*D,Kt=k-X*Y,$=H-j*Y,tt=Kt*Yt-$*oe,vt=Ct*$-At*Kt,Ut=oe*At-Yt*Ct;if(s){if(tt<0||vt<0||Ut<0)return null}else if((tt<0||vt<0||Ut<0)&&(tt>0||vt>0||Ut>0))return null;let xt=tt+vt+Ut;if(xt===0)return null;let Ht=et*(tt*O+vt*D+Ut*Y);return(xt>0?Ht<0:Ht>0)?null:this.at(Ht/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ch=new jt,Si=new oi,jr=new Yn,hh=new I,Qr=new I,ta=new I,ea=new I,yl=new I,na=new I,uh=new I,ia=new I,pt=class extends ue{constructor(t=new me,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(yl.fromBufferAttribute(d,t),a?na.addScaledVector(yl,h):na.addScaledVector(yl.sub(e),h))}e.add(na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(jr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(jr,hh)===null||Si.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),Si.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,S=T;M<S;M+=3){let E=o.getX(M),P=o.getX(M+1),x=o.getX(M+2);s=sa(this,p,t,n,c,h,d,E,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=sa(this,a,t,n,c,h,d,v,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,S=T;M<S;M+=3){let E=M,P=M+1,x=M+2;s=sa(this,p,t,n,c,h,d,E,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,T=m+1,M=m+2;s=sa(this,a,t,n,c,h,d,v,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jd(i,t,e,n,s,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;ia.copy(o),ia.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Qr),i.getVertexPosition(l,ta),i.getVertexPosition(c,ea);let h=Jd(i,t,e,n,Qr,ta,ea,uh);if(h){let d=new I;Wn.getBarycoord(uh,Qr,ta,ea,d),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,l,c,d,new gt)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,l,c,d,new gt)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Wn.getNormal(Qr,ta,ea,u.normal),h.face=u,h.barycoord=d}return h}var rr=class extends Je{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,h=Le,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ds=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new jt,dh=new jt,ra=[],fh=new fn,Kd=new jt,Vs=new pt,Gs=new Yn,fs=class extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),fh.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Gs.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),dh.multiplyMatrices(n,ji),Vs.matrixWorld=dh,Vs.raycast(t,ra);for(let a=0,o=ra.length;a<o;a++){let l=ra[a];l.instanceId=r,l.object=this,e.push(l)}ra.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,Qa,pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new Yn,jd=new gt(.5,.5),aa=new I,ps=class{constructor(t=new on,e=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],v=r[12],T=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-g,S-v).normalize(),s[1].setComponents(c+a,f+h,p+g,S+v).normalize(),s[2].setComponents(c+o,f+d,p+y,S+T).normalize(),s[3].setComponents(c-o,f-d,p-y,S-T).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,S-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-M).normalize(),e===bn)s[5].setComponents(c+l,f+u,p+m,S+M).normalize();else if(e===ss)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);let e=jd.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(aa.x=s.normal.x>0?t.max.x:t.min.x,aa.y=s.normal.y>0?t.max.y:t.min.y,aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ar=class extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wa=new I,Ta=new I,ph=new jt,Ws=new oi,oa=new Yn,vl=new I,mh=new I,Aa=class extends ue{constructor(t=new me,e=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wa.fromBufferAttribute(e,s-1),Ta.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wa.distanceTo(Ta);t.setAttribute("lineDistance",new Ft(n,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;ph.copy(s).invert(),Ws.copy(t.ray).applyMatrix4(ph);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),v=h.getX(y+1),T=la(this,t,Ws,l,p,v,y);T&&e.push(T)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=la(this,t,Ws,l,y,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=la(this,t,Ws,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=la(this,t,Ws,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function la(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(wa.fromBufferAttribute(o,s),Ta.fromBufferAttribute(o,r),e.distanceSqToSegment(wa,Ta,vl,mh)>n)return;vl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vl);if(!(c<t.near||c>t.far))return{distance:c,point:mh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var gh=new I,_h=new I,Ra=class extends Aa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gh.fromBufferAttribute(e,s),_h.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gh.distanceTo(_h);t.setAttribute("lineDistance",new Ft(n,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var or=class extends Je{constructor(t=[],e=mi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ms=class extends Je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends Je{constructor(t,e,n=wn,s,r,a,o=Le,l=Le,c,h=Ln,d=1){if(h!==Ln&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ca=class extends li{constructor(t,e=wn,n=mi,s,r,a=Le,o=Le,l,c=Ln){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lr=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ke=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2));function g(y,m,p,v,T,M,S,E,P,x,w){let C=M/P,U=S/x,O=M/2,z=S/2,A=E/2,D=P+1,k=x+1,H=0,Y=0,X=new I;for(let j=0;j<k;j++){let et=j*U-z;for(let Ct=0;Ct<D;Ct++){let At=Ct*C-O;X[y]=At*v,X[m]=et*T,X[p]=A,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(Ct/P),d.push(1-j/x),H+=1}}for(let j=0;j<x;j++)for(let et=0;et<P;et++){let Ct=u+et+D*j,At=u+et+D*(j+1),oe=u+(et+1)+D*(j+1),Yt=u+(et+1)+D*j;l.push(Ct,At,Yt),l.push(At,oe,Yt),Y+=6}o.addGroup(f,Y,w),f+=Y,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Zn=class i extends me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,y=s+1,m=new I,p=new I;for(let v=0;v<=g;v++){let T=0,M=0,S=0,E=0;if(v<=n){let w=v/n,C=w*Math.PI/2;M=-h-t*Math.cos(C),S=t*Math.sin(C),E=-t*Math.cos(C),T=w*d}else if(v<=n+r){let w=(v-n)/r;M=-h+w*e,S=t,E=0,T=d+w*u}else{let w=(v-n-r)/n,C=w*Math.PI/2;M=h+t*Math.sin(C),S=t*Math.cos(C),E=t*Math.sin(C),T=d+u+w*d}let P=Math.max(0,Math.min(1,T/f)),x=0;v===0?x=.5/s:v===g&&(x=-.5/s);for(let w=0;w<=s;w++){let C=w/s,U=C*Math.PI*2,O=Math.sin(U),z=Math.cos(U);p.x=-S*z,p.y=M,p.z=S*O,o.push(p.x,p.y,p.z),m.set(-S*z,E,S*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+x,P)}if(v>0){let w=(v-1)*y;for(let C=0;C<s;C++){let U=w+C,O=w+C+1,z=v*y+C,A=v*y+C+1;a.push(U,O,z),a.push(O,A,z)}}}this.setIndex(a),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},cr=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new gt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(o,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},de=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ft(d,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function v(){let M=new I,S=new I,E=0,P=(e-t)/n;for(let x=0;x<=r;x++){let w=[],C=x/r,U=C*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,A=z*l+o,D=Math.sin(A),k=Math.cos(A);S.x=U*D,S.y=-C*n+m,S.z=U*k,d.push(S.x,S.y,S.z),M.set(D,P,k).normalize(),u.push(M.x,M.y,M.z),f.push(z,1-C),w.push(g++)}y.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let C=y[w][x],U=y[w+1][x],O=y[w+1][x+1],z=y[w][x+1];(t>0||w!==0)&&(h.push(C,U,z),E+=3),(e>0||w!==r-1)&&(h.push(U,O,z),E+=3)}c.addGroup(p,E,0),p+=E}function T(M){let S=g,E=new gt,P=new I,x=0,w=M===!0?t:e,C=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let A=O/s*l+o,D=Math.cos(A),k=Math.sin(A);P.x=w*k,P.y=m*C,P.z=w*D,d.push(P.x,P.y,P.z),u.push(0,C,0),E.x=D*.5+.5,E.y=k*.5*C+.5,f.push(E.x,E.y),g++}for(let O=0;O<s;O++){let z=S+O,A=U+O;M===!0?h.push(A,A+1,z):h.push(A+1,A,z),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$n=class i extends de{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pa=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new I,M=new I,S=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],T),f(e[E+1],M),f(e[E+2],S),l(T,M,S,v)}function l(v,T,M,S){let E=S+1,P=[];for(let x=0;x<=E;x++){P[x]=[];let w=v.clone().lerp(M,x/E),C=T.clone().lerp(M,x/E),U=E-x;for(let O=0;O<=U;O++)O===0&&x===E?P[x][O]=w:P[x][O]=w.clone().lerp(C,O/U)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let C=Math.floor(w/2);w%2===0?(u(P[x][C+1]),u(P[x+1][C]),u(P[x][C])):(u(P[x][C+1]),u(P[x+1][C+1]),u(P[x+1][C]))}}function c(v){let T=new I;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(v),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let v=new I;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let M=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(M,1-S)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let T=a[v+0],M=a[v+2],S=a[v+4],E=Math.max(T,M,S),P=Math.min(T,M,S);E>.9&&P<.1&&(T<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,T){let M=v*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function g(){let v=new I,T=new I,M=new I,S=new I,E=new gt,P=new gt,x=new gt;for(let w=0,C=0;w<r.length;w+=9,C+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),E.set(a[C+0],a[C+1]),P.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),S.copy(v).add(T).add(M).divideScalar(3);let U=m(S);y(E,C+0,v,U),y(P,C+2,T,U),y(x,C+4,M,U)}}function y(v,T,M,S){S<0&&v.x===1&&(a[T]=v.x-1),M.x===0&&M.z===0&&(a[T]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var hr=class i extends Pa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ur=class i extends me{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=zt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new I,u=new gt,f=new I,g=new I,y=new I,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let v=0;v<=e;v++){let T=n+v*h*s,M=Math.sin(T),S=Math.cos(T);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*M,d.y=t[E].y,d.z=t[E].x*S,a.push(d.x,d.y,d.z),u.x=v/e,u.y=E/(t.length-1),o.push(u.x,u.y);let P=l[3*E+0]*M,x=l[3*E+1],w=l[3*E+0]*S;c.push(P,x,w)}}for(let v=0;v<e;v++)for(let T=0;T<t.length-1;T++){let M=T+v*t.length,S=M,E=M+t.length,P=M+t.length+1,x=M+1;r.push(S,E,x),r.push(P,x,E)}this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("uv",new Ft(o,2)),this.setAttribute("normal",new Ft(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Nn=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let T=0;T<c;T++){let M=T*d-r;g.push(M,-v,0),y.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let T=v+c*p,M=v+c*(p+1),S=v+1+c*(p+1),E=v+1+c*p;f.push(T,M,E),f.push(M,S,E)}this.setIndex(f),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(y,3)),this.setAttribute("uv",new Ft(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},dr=class i extends me{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new I,g=new gt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let v=p+m,T=v,M=v+n+1,S=v+n+2,E=v+1;o.push(T,M,E),o.push(M,S,E)}}this.setIndex(o),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Xe=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],T=p/n,M=a+T*o,S=t*Math.cos(M),E=Math.sqrt(t*t-S*S),P=0;p===0&&a===0?P=.5/e:p===n&&l===Math.PI&&(P=-.5/e);for(let x=0;x<=e;x++){let w=x/e,C=s+w*r;d.x=-E*Math.cos(C),d.y=S,d.z=E*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(w+P,1-T),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let T=h[p][v+1],M=h[p][v],S=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(T,M,E),(p!==n-1||l<Math.PI)&&f.push(M,S,E)}this.setIndex(f),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(y,3)),this.setAttribute("uv",new Ft(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gs=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,f=new I,g=new I;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,v=(s+1)*(y-1)+m-1,T=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(p,v,M),l.push(v,T,M)}this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Pi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(xh(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(xh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Pi(i[e]);for(let s in n)t[s]=n[s]}return t}function xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var uu={clone:Pi,merge:Ye},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ia=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var La=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Da=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ml(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wl:r=t,o=2*e-n;break;case Tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:a=t,l=2*n-e;break;case Tl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,v=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+v*a[c+S]+T*a[l+S]+M*a[d+S];return r}},Ua=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Fa=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oa=class extends ci{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,v=d[p],T=d[p+1],M=t*u+g*2,S=h[M],E=h[M+1],P=sf(n,e,v,S,s);r[g]=du(P,y,T,E,m)}return r}};function du(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function nf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function sf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=du(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=nf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qi(e,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qi(t.times,Array),values:Qi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ml(t.settings)&&(n.settings={inTangents:Qi(t.settings.inTangents,Array),outTangents:Qi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case Ma:e=this.InterpolantFactoryMethodLinear;break;case ua:e=this.InterpolantFactoryMethodSmooth;break;case Sl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ml(this.settings)&&(yh(this.settings.inTangents,t),yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&_d(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ua,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ml(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Ma;var hi=class extends cn{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ys;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};Ba.prototype.ValueTypeName="color";var ka=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="number";var za=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)We.slerpFlat(r,0,a,c-o,a,c,l);return r}},fr=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends cn{constructor(t,e,n){super(t,e,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ys;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};Ha.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fu=new Va,Ga=class{constructor(t){this.manager=t!==void 0?t:fu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},pr=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bl=new jt,vh=new I,Mh=new I,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(vh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(bl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ss||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ca=new I,ha=new We,Pn=new I,gr=class extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ca,ha,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,Pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ca,ha,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new I,bh=new gt,Sh=new gt,De=class extends gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Sh),e.subVectors(Sh,bh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Al=class extends mr{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0}},_r=class extends _s{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xs=class extends gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rl=class extends mr{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Rl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ts=-90,es=1,Wa=class extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new De(ts,es,t,e);r.layers=this.layers,this.add(r);let a=new De(ts,es,t,e);a.layers=this.layers,this.add(a);let o=new De(ts,es,t,e);o.layers=this.layers,this.add(o);let l=new De(ts,es,t,e);l.layers=this.layers,this.add(l);let c=new De(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xa=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ic="\\[\\]\\.:\\/",rf=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",af="[^"+ic.replace("\\.","")+"]",of=/((?:WC+[\/:])*)/.source.replace("WC",sc),lf=/(WCOD+)?/.source.replace("WCOD",af),cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),uf=new RegExp("^"+of+lf+cf+hf+"$"),df=["material","materials","bones","map"],Cl=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rf,"")}static parseTrackName(t){let e=uf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);df.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Cl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R_=new Float32Array(1);var Eh=new jt,xr=class{constructor(t,e,n=0,s=1/0){this.ray=new oi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Lt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(t,e=!0,n=[]){return Pl(t,this,n,e),n.sort(wh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pl(t[s],this,n,e);return n.sort(wh),n}};function wh(i,t){return i.distance-t.distance}function Pl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Pl(r[a],t,e,!0)}}var vs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var hc=class hc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};hc.prototype.isMatrix2=!0;var Il=hc;var yr=class extends Ra{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new me;r.setIndex(new Te(n,1)),r.setAttribute("position",new Ft(s,3)),super(r,new ar({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var vr=class extends Sn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function rc(i,t,e,n){let s=ff(n);switch(e){case Jl:return i*t;case Qa:return i*t/s.components*s.byteLength;case to:return i*t/s.components*s.byteLength;case xi:return i*t*2/s.components*s.byteLength;case eo:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case no:return i*t*4/s.components*s.byteLength;case Er:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:case ao:return Math.max(i,16)*Math.max(t,8)/4;case io:case ro:return Math.max(i,8)*Math.max(t,8)/2;case oo:case lo:case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case co:case Rr:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ro:case Co:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Io:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cr:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ff(i){switch(i){case nn:case ql:return{byteLength:1,components:1};case Ss:case Yl:case Tn:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case wn:case Ja:case pn:return{byteLength:4,components:1};case Zl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Uu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_p=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:yf,alphahash_pars_fragment:vf,alphamap_fragment:Mf,alphamap_pars_fragment:bf,alphatest_fragment:Sf,alphatest_pars_fragment:Ef,aomap_fragment:wf,aomap_pars_fragment:Tf,batching_pars_vertex:Af,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:Pf,bsdfs:If,iridescence_fragment:Lf,bumpmap_pars_fragment:Df,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:zf,color_vertex:Hf,common:Vf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:qf,emissivemap_fragment:Yf,emissivemap_pars_fragment:Zf,colorspace_fragment:$f,colorspace_pars_fragment:Jf,envmap_fragment:Kf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Qf,envmap_pars_vertex:tp,envmap_physical_pars_fragment:up,envmap_vertex:ep,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:hp,lights_toon_fragment:dp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:_p,lights_fragment_begin:xp,lights_fragment_maps:yp,lights_fragment_end:vp,lightprobes_pars_fragment:Mp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:wp,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Lp,morphcolor_vertex:Dp,morphnormal_vertex:Np,morphtarget_pars_vertex:Up,morphtarget_vertex:Fp,normal_fragment_begin:Op,normal_fragment_maps:Bp,normal_pars_fragment:kp,normal_pars_vertex:zp,normal_vertex:Hp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:Zp,premultiplied_alpha_fragment:$p,project_vertex:Jp,dithering_fragment:Kp,dithering_pars_fragment:jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:xm,background_vert:ym,background_frag:vm,backgroundCube_vert:Mm,backgroundCube_frag:bm,cube_vert:Sm,cube_frag:Em,depth_vert:wm,depth_frag:Tm,distance_vert:Am,distance_frag:Rm,equirect_vert:Cm,equirect_frag:Pm,linedashed_vert:Im,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Nm,meshlambert_vert:Um,meshlambert_frag:Fm,meshmatcap_vert:Om,meshmatcap_frag:Bm,meshnormal_vert:km,meshnormal_frag:zm,meshphong_vert:Hm,meshphong_frag:Vm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:Zm,shadow_vert:$m,shadow_frag:Jm,sprite_vert:Km,sprite_frag:jm},ut={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},On={basic:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ye([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ye([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ye([ut.points,ut.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ye([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ye([ut.common,ut.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ye([ut.sprite,ut.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Ye([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Ye([ut.lights,ut.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};On.physical={uniforms:Ye([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Oo={r:0,b:0,g:0},Qm=new jt,Fu=new Nt;Fu.set(-1,0,0,0,1,0,0,0,1);function tg(i,t,e,n,s,r){let a=new Dt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let M=v.backgroundBlurriness>0;T=t.get(T,M)}return T}function g(v){let T=!1,M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),T=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,T){let M=f(T);M&&(M.isCubeTexture||M.mapping===br)?(c===void 0&&(c=new pt(new Ke(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Pi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fu),c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==ee,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pt(new Nn(2,2),new ln({name:"BackgroundMaterial",uniforms:Pi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Oo,nc(i)),e.buffers.color.setClear(Oo.r,Oo.g,Oo.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:y,dispose:p}}function eg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,O,z,A,D){let k=!1,H=d(U,A,z,O);r!==H&&(r=H,c(r.object)),k=f(U,A,z,D),k&&g(U,A,z,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(U,O,z,A),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,O,z,A){let D=A.wireframe===!0,k=n[O.id];k===void 0&&(k={},n[O.id]=k);let H=U.isInstancedMesh===!0?U.id:0,Y=k[H];Y===void 0&&(Y={},k[H]=Y);let X=Y[z.id];X===void 0&&(X={},Y[z.id]=X);let j=X[D];return j===void 0&&(j=u(l()),X[D]=j),j}function u(U){let O=[],z=[],A=[];for(let D=0;D<e;D++)O[D]=0,z[D]=0,A[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:A,object:U,attributes:{},index:null}}function f(U,O,z,A){let D=r.attributes,k=O.attributes,H=0,Y=z.getAttributes();for(let X in Y)if(Y[X].location>=0){let et=D[X],Ct=k[X];if(Ct===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Ct=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Ct=U.instanceColor)),et===void 0||et.attribute!==Ct||Ct&&et.data!==Ct.data)return!0;H++}return r.attributesNum!==H||r.index!==A}function g(U,O,z,A){let D={},k=O.attributes,H=0,Y=z.getAttributes();for(let X in Y)if(Y[X].location>=0){let et=k[X];et===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let Ct={};Ct.attribute=et,et&&et.data&&(Ct.data=et.data),D[X]=Ct,H++}r.attributes=D,r.attributesNum=H,r.index=A}function y(){let U=r.newAttributes;for(let O=0,z=U.length;O<z;O++)U[O]=0}function m(U){p(U,0)}function p(U,O){let z=r.newAttributes,A=r.enabledAttributes,D=r.attributeDivisors;z[U]=1,A[U]===0&&(i.enableVertexAttribArray(U),A[U]=1),D[U]!==O&&(i.vertexAttribDivisor(U,O),D[U]=O)}function v(){let U=r.newAttributes,O=r.enabledAttributes;for(let z=0,A=O.length;z<A;z++)O[z]!==U[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function T(U,O,z,A,D,k,H){H===!0?i.vertexAttribIPointer(U,O,z,D,k):i.vertexAttribPointer(U,O,z,A,D,k)}function M(U,O,z,A){y();let D=A.attributes,k=z.getAttributes(),H=O.defaultAttributeValues;for(let Y in k){let X=k[Y];if(X.location>=0){let j=D[Y];if(j===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let et=j.normalized,Ct=j.itemSize,At=t.get(j);if(At===void 0)continue;let oe=At.buffer,Yt=At.type,Kt=At.bytesPerElement,$=Yt===i.INT||Yt===i.UNSIGNED_INT||j.gpuType===Ja;if(j.isInterleavedBufferAttribute){let tt=j.data,vt=tt.stride,Ut=j.offset;if(tt.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt,tt.meshPerAttribute);U.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let xt=0;xt<X.locationSize;xt++)T(X.location+xt,Ct/X.locationSize,Yt,et,vt*Kt,(Ut+Ct/X.locationSize*xt)*Kt,$)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt,j.meshPerAttribute);U.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let tt=0;tt<X.locationSize;tt++)T(X.location+tt,Ct/X.locationSize,Yt,et,Ct*Kt,Ct/X.locationSize*tt*Kt,$)}}else if(H!==void 0){let et=H[Y];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}v()}function S(){w();for(let U in n){let O=n[U];for(let z in O){let A=O[z];for(let D in A){let k=A[D];for(let H in k)h(k[H].object),delete k[H];delete A[D]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let z in O){let A=O[z];for(let D in A){let k=A[D];for(let H in k)h(k[H].object),delete k[H];delete A[D]}}delete n[U.id]}function P(U){for(let O in n){let z=n[O];for(let A in z){let D=z[A];if(D[U.id]===void 0)continue;let k=D[U.id];for(let H in k)h(k[H].object),delete k[H];delete D[U.id]}}}function x(U){for(let O in n){let z=n[O],A=U.isInstancedMesh===!0?U.id:0,D=z[A];if(D!==void 0){for(let k in D){let H=D[k];for(let Y in H)h(H[Y].object),delete H[Y];delete D[k]}delete z[A],Object.keys(z).length===0&&delete n[O]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function ng(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ig(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let x=P===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==nn&&P!==pn&&!x&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:M,maxSamples:S,samples:E}}function sg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new on,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,M=p.clippingState||null;l.value=M,M=h(g,u,T,f);for(let S=0;S!==T;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==y;++T,M+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Ts=4,rg=6,ag=20,og=256,Pr=new xs,pu=new Dt,uc=null,dc=0,fc=0,pc=!1,lg=new I,Ii=new I,ko=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=lg}=r;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Tn,format:mn,colorSpace:Zs,depthBuffer:!1},s=mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cg(r)),this._blurMaterial=ug(r,t,e),this._ggxMaterial=hg(r,t,e)}return s}_compileMaterial(t){let e=new pt(new me,t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,s,r){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(pu),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Ke,new Ue({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(pu),p=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let S=this._cubeSize;ws(s,M*S,T>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===mi||t.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Ts?n-g+Ts:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ws(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ws(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Pr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ts?s-this._lodMax+Ts:0),u=4*(this._cubeSize-h);ws(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Pr)}};function cg(i){let t=[],e=[],n=i,s=i-Ts+1+rg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let v=p%3*2/3-1,T=p>2?0:-1,M=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(M,f*u*p);for(let S=0;S<u;S++){let E=h[S*2]*2-1,P=h[S*2+1]*2-1;p===0?Ii.set(1,P,E):p===1?Ii.set(-E,1,-P):p===2?Ii.set(-E,P,1):p===3?Ii.set(-1,P,-E):p===4?Ii.set(-E,-1,P):Ii.set(E,P,-1),Ii.toArray(y,(p*u+S)*f)}}let m=new me;m.setAttribute("position",new Te(g,f)),m.setAttribute("outputDirection",new Te(y,f)),e.push(new pt(m,null)),n>Ts&&n--}return{lodMeshes:e,sizeLods:t}}function mu(i,t,e){let n=new en(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hg(i,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ug(i,t,e){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function gu(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function _u(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zo=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Un});r.uniforms.tEquirect.value=e;let a=new pt(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=Ne),new Wa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function dg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ya||f===Za)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new zo(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ya||f===Za,y=f===mi||f===Ci;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ko(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||y&&v&&l(v)?(n===null&&(n=new ko(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Ya?u.mapping=mi:f===Za&&(u.mapping=Ci),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function fg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function pg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let v=f.array;y=f.version;for(let T=0,M=v.length;T<M;T+=3){let S=v[T+0],E=v[T+1],P=v[T+2];u.push(S,E,E,P,P,S)}}else{let v=g.array;y=g.version;for(let T=0,M=v.length/3-1;T<M;T+=3){let S=T+0,E=T+1,P=T+2;u.push(S,E,E,P,P,S)}}let m=new(g.count>=65535?nr:er)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function mg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){let n=new WeakMap,s=new _e;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let M=o.attributes.position.count*T,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*S*4*d),P=new js(E,M,S,d);P.type=pn,P.needsUpdate=!0;let x=T*4;for(let C=0;C<d;C++){let U=m[C],O=p[C],z=v[C],A=M*S*4*C;for(let D=0;D<U.count;D++){let k=D*x;f===!0&&(s.fromBufferAttribute(U,D),E[A+k+0]=s.x,E[A+k+1]=s.y,E[A+k+2]=s.z,E[A+k+3]=0),g===!0&&(s.fromBufferAttribute(O,D),E[A+k+4]=s.x,E[A+k+5]=s.y,E[A+k+6]=s.z,E[A+k+7]=0),y===!0&&(s.fromBufferAttribute(z,D),E[A+k+8]=s.x,E[A+k+9]=s.y,E[A+k+10]=s.z,E[A+k+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new gt(M,S)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var yg={[kl]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[Mr]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Wl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function vg(i,t,e,n,s,r){let a=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new me;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let h=new Ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pt(c,h),u=new xs(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,v=[],T=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let E=0;E<v.length;E++){let P=v[E];P.setSize&&P.setSize(M,S)}},this.setEffects=function(M){v=M,T=v.length>0&&v[0].isRenderPass===!0;let S=a.width,E=a.height;v.length>0&&o===null&&(o=new en(S,E,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new en(S,E,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<v.length;P++){let x=v[P];x.setSize&&x.setSize(S,E)}},this.begin=function(M,S){if(y||M.toneMapping===En&&v.length===0)return!1;if(p=S,S!==null){let E=S.width,P=S.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return T===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=En,!0},this.hasRenderPass=function(){return T},this.end=function(M,S){M.toneMapping=m,y=!0;let E=a,P=o;for(let x=0;x<v.length;x++){let w=v[x];w.enabled!==!1&&(w.render(M,P,E,S),w.needsSwap!==!1&&(E=P,P=P===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},Xt.getTransfer(f)===ee&&(h.defines.SRGB_TRANSFER="");let x=yg[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ou=new Je,_c=new li(1,1),Bu=new js,ku=new Ea,zu=new or,xu=[],yu=[],vu=new Float32Array(16),Mu=new Float32Array(9),bu=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xu[s];if(r===void 0&&(r=new Float32Array(s),xu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Go(i,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),Re(e,n)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),Re(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;vu.set(n),i.uniformMatrix4fv(this.addr,!1,vu),Re(e,n)}}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=e.isReversedDepthBuffer()?Fo:Uo,r=_c):r=Ou,e.setTexture2D(t||r,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ku,s)}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bu,s)}function zg(i){switch(i){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Eg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Hg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gg(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qg(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yg(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zg(i,t){i.uniform1iv(this.addr,t)}function $g(i,t){i.uniform2iv(this.addr,t)}function Jg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function jg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function t0(i,t){i.uniform3uiv(this.addr,t)}function e0(i,t){i.uniform4uiv(this.addr,t)}function n0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_c:a=Ou;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function i0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ku,r[a])}function s0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zu,r[a])}function r0(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bu,r[a])}function a0(i){switch(i){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return $g;case 35668:case 35672:return Jg;case 35669:case 35673:return Kg;case 5125:return jg;case 36294:return Qg;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a0(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function Su(i,t){i.seq.push(t),i.map[t.id]=t}function o0(i,t,e){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),a=mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Su(e,c===void 0?new xc(o,i,t):new yc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new vc(o),Su(e,d)),e=d}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);o0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Eu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var l0=37297,c0=0;function h0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var wu=new Nt;function u0(i){Xt._getMatrix(wu,Xt.workingColorSpace,i);let t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case $s:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+h0(i.getShaderSource(t),o)}else return r}function d0(i,t){let e=u0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var f0={[kl]:"Linear",[zl]:"Reinhard",[Hl]:"Cineon",[Mr]:"ACESFilmic",[Gl]:"AgX",[Wl]:"Neutral",[Vl]:"Custom"};function p0(i,t){let e=f0[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bo=new I;function m0(){Xt.getLuminanceCoefficients(Bo);let i=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function _0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Lr(i){return i!==""}function Au(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(y0,M0)}var v0=new Map;function M0(i,t){let e=kt[t];if(e===void 0){let n=v0.get(t);if(n!==void 0)e=kt[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mc(e)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(b0,S0)}function S0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var E0={[Ai]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function w0(i){return E0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T0={[mi]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function A0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var R0={[Ci]:"ENVMAP_MODE_REFRACTION"};function C0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P0={[Bl]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function I0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P0[i.combine]||"ENVMAP_BLENDING_NONE"}function L0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=w0(e),c=A0(e),h=C0(e),d=I0(e),u=L0(e),f=g0(e),g=_0(r),y=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?kt.tonemapping_pars_fragment:"",e.toneMapping!==En?p0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,d0("linearToOutputTexel",e.outputColorSpace),m0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Mc(a),a=Au(a,e),a=Ru(a,e),o=Mc(o),o=Au(o,e),o=Ru(o,e),a=Cu(a),o=Cu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=v+m+a,M=v+p+o,S=Eu(s,s.VERTEX_SHADER,T),E=Eu(s,s.FRAGMENT_SHADER,M);s.attachShader(y,S),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(U){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(S)||"",A=s.getShaderInfoLog(E)||"",D=O.trim(),k=z.trim(),H=A.trim(),Y=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,E);else{let j=Tu(s,S,"vertex"),et=Tu(s,E,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+j+`
`+et)}else D!==""?Pt("WebGLProgram: Program Info Log:",D):(k===""||H==="")&&(X=!1);X&&(U.diagnostics={runnable:Y,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(E),x=new As(s,y),w=x0(s,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,l0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}var N0=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=N0++,this.code=t,this.usedTimes=0}};function U0(i){return i===xi||i===Rr||i===Cr}function F0(i,t,e,n,s,r){let a=new ls,o=new bc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,C,U,O,z){let A=U.fog,D=O.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||k,H),X=Y&&Y.mapping===br?Y.image.height:null,j=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let et=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Ct=et!==void 0?et.length:0,At=0;D.morphAttributes.position!==void 0&&(At=1),D.morphAttributes.normal!==void 0&&(At=2),D.morphAttributes.color!==void 0&&(At=3);let oe,Yt,Kt,$;if(j){let ce=On[j];oe=ce.vertexShader,Yt=ce.fragmentShader}else{oe=x.vertexShader,Yt=x.fragmentShader;let ce=o.getVertexShaderStage(x),Qt=o.getFragmentShaderStage(x);o.update(x,ce,Qt),Kt=ce.id,$=Qt.id}let tt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,xt=O.isBatchedMesh===!0,Ht=!!x.map,we=!!x.matcap,Vt=!!Y,Jt=!!x.aoMap,le=!!x.lightMap,Wt=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,Pe=!!x.displacementMap,tn=!!x.emissiveMap,xe=!!x.metalnessMap,Me=!!x.roughnessMap,F=x.anisotropy>0,ke=x.clearcoat>0,ne=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,B=x.sheen>0,W=x.transmission>0,Z=F&&!!x.anisotropyMap,st=ke&&!!x.clearcoatMap,rt=ke&&!!x.clearcoatNormalMap,J=ke&&!!x.clearcoatRoughnessMap,Q=_&&!!x.iridescenceMap,at=_&&!!x.iridescenceThicknessMap,wt=B&&!!x.sheenColorMap,ht=B&&!!x.sheenRoughnessMap,ot=!!x.specularMap,Tt=!!x.specularColorMap,It=!!x.specularIntensityMap,Ot=W&&!!x.transmissionMap,N=W&&!!x.thicknessMap,lt=!!x.gradientMap,K=!!x.alphaMap,ct=x.alphaTest>0,mt=!!x.alphaHash,nt=!!x.extensions,Rt=En;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let St={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:Yt,defines:x.defines,customVertexShaderID:Kt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xt,batchingColor:xt&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:we,envMap:Vt,envMapMode:Vt&&Y.mapping,envMapCubeUVHeight:X,aoMap:Jt,lightMap:le,bumpMap:Wt,normalMap:ge,displacementMap:Pe,emissiveMap:tn,normalMapObjectSpace:ge&&x.normalMapType===Kh,normalMapTangentSpace:ge&&x.normalMapType===No,packedNormalMap:ge&&x.normalMapType===No&&U0(x.normalMap.format),metalnessMap:xe,roughnessMap:Me,anisotropy:F,anisotropyMap:Z,clearcoat:ke,clearcoatMap:st,clearcoatNormalMap:rt,clearcoatRoughnessMap:J,dispersion:ne,retroreflection:R,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:B,sheenColorMap:wt,sheenRoughnessMap:ht,specularMap:ot,specularColorMap:Tt,specularIntensityMap:It,transmission:W,transmissionMap:Ot,thicknessMap:N,gradientMap:lt,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:mt,combine:x.combine,mapUv:Ht&&g(x.map.channel),aoMapUv:Jt&&g(x.aoMap.channel),lightMapUv:le&&g(x.lightMap.channel),bumpMapUv:Wt&&g(x.bumpMap.channel),normalMapUv:ge&&g(x.normalMap.channel),displacementMapUv:Pe&&g(x.displacementMap.channel),emissiveMapUv:tn&&g(x.emissiveMap.channel),metalnessMapUv:xe&&g(x.metalnessMap.channel),roughnessMapUv:Me&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:st&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&g(x.sheenRoughnessMap.channel),specularMapUv:ot&&g(x.specularMap.channel),specularColorMapUv:Tt&&g(x.specularColorMap.channel),specularIntensityMapUv:It&&g(x.specularIntensityMap.channel),transmissionMapUv:Ot&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:K&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ge||F),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(Ht||K),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:At,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&Xt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:tn&&x.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fe,flipSided:x.side===je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(w,x),v(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let w=f[x.type],C;if(w){let U=On[w];C=uu.clone(U.uniforms)}else C=x.uniforms;return C}function M(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new D0(i,w,x,s),c.push(C),h.set(w,C)),C}function S(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:P}}function O0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function B0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Iu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=a(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function l(u,f,g,y,m,p,v){v.reversedDepth===!0&&(m=-m);let T=o(u,f,g,y,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(u,f,g,y,m,p){let v=o(u,f,g,y,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||B0),n.length>1&&n.sort(f||Iu),s.length>1&&s.sort(f||Iu)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function k0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lu,i.set(n,[a])):s>=r.length?(a=new Lu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Dt};break;case"SpotLight":e={position:new I,direction:new I,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function H0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var V0=0;function G0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W0(i){let t=new z0,e=H0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new jt,a=new jt;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,T=0,M=0,S=0,E=0,P=0,x=0,w=0,C=0;c.sort(G0);for(let O=0,z=c.length;O<z;O++){let A=c[O],D=A.color,k=A.intensity,H=A.distance,Y=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===xi?Y=A.shadow.map.texture:Y=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=D.r*k,d+=D.g*k,u+=D.b*k;else if(A.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(A.sh.coefficients[X],k);C++}else if(A.isSunLight){let X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let j=A.shadow,et=e.get(A);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=Y;let Ct=j.getViewportCount();for(let At=0;At<Ct;At++)n.sunShadowMatrix[y+At]=j.getMatrix(At),n.sunShadowCascade[y+At]=j._cascadeData[At];y+=Ct,g++}n.sun[f]=X,f++}else if(A.isDirectionalLight){let X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let j=A.shadow,et=e.get(A);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=A.shadow.matrix,S++}n.directional[m]=X,m++}else if(A.isSpotLight){let X=t.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(D).multiplyScalar(k),X.distance=H,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,n.spot[v]=X;let j=A.shadow;if(A.map&&(n.spotLightMap[x]=A.map,x++,j.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[v]=j.matrix,A.castShadow){let et=e.get(A);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.spotShadow[v]=et,n.spotShadowMap[v]=Y,P++}v++}else if(A.isRectAreaLight){let X=t.get(A);X.color.copy(D).multiplyScalar(k),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),n.rectArea[T]=X,T++}else if(A.isPointLight){let X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){let j=A.shadow,et=e.get(A);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=A.shadow.matrix,E++}n.point[p]=X,p++}else if(A.isHemisphereLight){let X=t.get(A);X.skyColor.copy(A.color).multiplyScalar(k),X.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[M]=X,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==v||U.rectAreaLength!==T||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==P||U.numSpotMaps!==x||U.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=v,U.rectAreaLength=T,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=P,U.numSpotMaps=x,U.numLightProbes=C,n.version=V0++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let M=c[v];if(M.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(M.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Du(i){let t=new W0(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function X0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Du(i),t.set(s,[o])):r>=a.length?(o=new Du(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z0=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],$0=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Nu=new jt,Ir=new I,gc=new I;function J0(i,t,e){let n=new ps,s=new gt,r=new gt,a=new _e,o=new La,l=new Da,c={},h=e.maxTextureSize,d={[pi]:je,[je]:pi,[Fe]:Fe},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:q0,fragmentShader:Y0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ai;let p=this.type;this.render=function(E,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Rh&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ai);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Un),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=p!==this.type;z&&P.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(D=>D.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,D=E.length;A<D;A++){let k=E[A],H=k.shadow;if(H===void 0){Pt("WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Y=H.getFrameExtents();s.multiply(Y),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,H.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ms){if(k.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new en(s.x,s.y,{format:xi,type:Tn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),H.map.texture.name=k.name+".shadowMap",H.map.depthTexture=new li(s.x,s.y,pn),H.map.depthTexture.name=k.name+".shadowMapDepth",H.map.depthTexture.format=Ln,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le}else k.isPointLight?(H.map=new zo(s.x),H.map.depthTexture=new Ca(s.x,wn)):(H.map=new en(s.x,s.y),H.map.depthTexture=new li(s.x,s.y,wn)),H.map.depthTexture.name=k.name+".shadowMap",H.map.depthTexture.format=Ln,this.type===Ai?(H.map.depthTexture.compareFunction=X?Fo:Uo,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Le,H.map.depthTexture.magFilter=Le);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();k.isPointLight!==!0&&H.updateMatrices(k,x);for(let et=0;et<j;et++){let Ct=H.getCamera(et);if(k.isPointLight){let At=H.camera,oe=H.matrix,Yt=k.distance||At.far;Yt!==At.far&&(At.far=Yt,At.updateProjectionMatrix()),Ir.setFromMatrixPosition(k.matrixWorld),At.position.copy(Ir),gc.copy(At.position),gc.add(Z0[et]),At.up.copy($0[et]),At.lookAt(gc),At.updateMatrixWorld(),oe.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Nu.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Nu,At.coordinateSystem,At.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,et),i.clear();else{et===0&&(i.setRenderTarget(H.map),i.clear());let At=H.getViewport(et);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),O.viewport(a)}n=H.getFrustum(et),M(P,x,Ct,k,this.type)}H.isPointLightShadow!==!0&&this.type===Ms&&v(H,x),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,U)};function v(E,P){let x=t.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new en(s.x,s.y,{format:xi,type:Tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,x,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,x,f,y,null)}function T(E,P,x,w){let C=null,U=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)C=U;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=C.uuid,z=P.uuid,A=c[O];A===void 0&&(A={},c[O]=A);let D=A[z];D===void 0&&(D=C.clone(),A[z]=D,P.addEventListener("dispose",S)),C=D}if(C.visible=P.visible,C.wireframe=P.wireframe,w===Ms?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:d[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=x}return C}function M(E,P,x,w,C){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Ms)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let z=t.update(E),A=E.material;if(Array.isArray(A)){let D=z.groups;for(let k=0,H=D.length;k<H;k++){let Y=D[k],X=A[Y.materialIndex];if(X&&X.visible){let j=T(E,X,w,C);E.onBeforeShadow(i,E,P,x,z,j,Y),i.renderBufferDirect(x,null,z,j,E,Y),E.onAfterShadow(i,E,P,x,z,j,Y)}}}else if(A.visible){let D=T(E,A,w,C);E.onBeforeShadow(i,E,P,x,z,D,null),i.renderBufferDirect(x,null,z,D,E,null),E.onAfterShadow(i,E,P,x,z,D,null)}}let O=E.children;for(let z=0,A=O.length;z<A;z++)M(O[z],P,x,w,C)}function S(E){E.target.removeEventListener("dispose",S);for(let x in c){let w=c[x],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function K0(i,t){function e(){let N=!1,lt=new _e,K=null,ct=new _e(0,0,0,0);return{setMask:function(mt){K!==mt&&!N&&(i.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){N=mt},setClear:function(mt,nt,Rt,St,ce){ce===!0&&(mt*=St,nt*=St,Rt*=St),lt.set(mt,nt,Rt,St),ct.equals(lt)===!1&&(i.clearColor(mt,nt,Rt,St),ct.copy(lt))},reset:function(){N=!1,K=null,ct.set(-1,0,0,0)}}}function n(){let N=!1,lt=!1,K=null,ct=null,mt=null;return{setReversed:function(nt){if(lt!==nt){let Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;let St=mt;mt=null,this.setClear(St)}},getReversed:function(){return lt},setTest:function(nt){nt?tt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(nt){K!==nt&&!N&&(i.depthMask(nt),K=nt)},setFunc:function(nt){if(lt&&(nt=lu[nt]),ct!==nt){switch(nt){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=nt}},setLocked:function(nt){N=nt},setClear:function(nt){mt!==nt&&(mt=nt,lt&&(nt=1-nt),i.clearDepth(nt))},reset:function(){N=!1,K=null,ct=null,mt=null,lt=!1}}}function s(){let N=!1,lt=null,K=null,ct=null,mt=null,nt=null,Rt=null,St=null,ce=null;return{setTest:function(Qt){N||(Qt?tt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!N&&(i.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,_n,Rn){(K!==Qt||ct!==_n||mt!==Rn)&&(i.stencilFunc(Qt,_n,Rn),K=Qt,ct=_n,mt=Rn)},setOp:function(Qt,_n,Rn){(nt!==Qt||Rt!==_n||St!==Rn)&&(i.stencilOp(Qt,_n,Rn),nt=Qt,Rt=_n,St=Rn)},setLocked:function(Qt){N=Qt},setClear:function(Qt){ce!==Qt&&(i.clearStencil(Qt),ce=Qt)},reset:function(){N=!1,lt=null,K=null,ct=null,mt=null,nt=null,Rt=null,St=null,ce=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,v=null,T=null,M=null,S=null,E=null,P=null,x=new Dt(0,0,0),w=0,C=!1,U=null,O=null,z=null,A=null,D=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Y=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Y>=2);let j=null,et={},Ct=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),oe=new _e().fromArray(Ct),Yt=new _e().fromArray(At);function Kt(N,lt,K,ct){let mt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(N,nt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<K;Rt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(lt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return nt}let $={};$[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(is),Wt(!1),ge(Ll),tt(i.CULL_FACE),Jt(Un);function tt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function vt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ut(N,lt){return u[N]!==lt?(i.bindFramebuffer(N,lt),u[N]=lt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function xt(N,lt){let K=g,ct=!1;if(N){K=f.get(lt),K===void 0&&(K=[],f.set(lt,K));let mt=N.textures;if(K.length!==mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Rt=mt.length;nt<Rt;nt++)K[nt]=i.COLOR_ATTACHMENT0+nt;K.length=mt.length,ct=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ct=!0);ct&&i.drawBuffers(K)}function Ht(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let we={[Ri]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};we[Lh]=i.MIN,we[Dh]=i.MAX;let Vt={[Nh]:i.ZERO,[Uh]:i.ONE,[Fh]:i.SRC_COLOR,[Fl]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function Jt(N,lt,K,ct,mt,nt,Rt,St,ce,Qt){if(N===Un){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),N!==Ch){if(N!==p||Qt!==C){if((v!==Ri||S!==Ri)&&(i.blendEquation(i.FUNC_ADD),v=Ri,S=Ri),Qt)switch(N){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Lt("WebGLState: Invalid blending: ",N);break}else switch(N){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nl:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",N);break}T=null,M=null,E=null,P=null,x.set(0,0,0),w=0,p=N,C=Qt}return}mt=mt||lt,nt=nt||K,Rt=Rt||ct,(lt!==v||mt!==S)&&(i.blendEquationSeparate(we[lt],we[mt]),v=lt,S=mt),(K!==T||ct!==M||nt!==E||Rt!==P)&&(i.blendFuncSeparate(Vt[K],Vt[ct],Vt[nt],Vt[Rt]),T=K,M=ct,E=nt,P=Rt),(St.equals(x)===!1||ce!==w)&&(i.blendColor(St.r,St.g,St.b,ce),x.copy(St),w=ce),p=N,C=!1}function le(N,lt){N.side===Fe?vt(i.CULL_FACE):tt(i.CULL_FACE);let K=N.side===je;lt&&(K=!K),Wt(K),N.blending===bs&&N.transparent===!1?Jt(Un):Jt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ct=N.stencilWrite;o.setTest(ct),ct&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),tn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function ge(N){N!==Th?(tt(i.CULL_FACE),N!==O&&(N===Ll?i.cullFace(i.BACK):N===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),O=N}function Pe(N){N!==z&&(H&&i.lineWidth(N),z=N)}function tn(N,lt,K){N?(tt(i.POLYGON_OFFSET_FILL),(A!==lt||D!==K)&&(A=lt,D=K,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,K))):vt(i.POLYGON_OFFSET_FILL)}function xe(N){N?tt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Me(N){N===void 0&&(N=i.TEXTURE0+k-1),j!==N&&(i.activeTexture(N),j=N)}function F(N,lt,K){K===void 0&&(j===null?K=i.TEXTURE0+k-1:K=j);let ct=et[K];ct===void 0&&(ct={type:void 0,texture:void 0},et[K]=ct),(ct.type!==N||ct.texture!==lt)&&(j!==K&&(i.activeTexture(K),j=K),i.bindTexture(N,lt||$[N]),ct.type=N,ct.texture=lt)}function ke(){let N=et[j];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function B(){try{i.texSubImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function st(){try{i.texStorage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function rt(){try{i.texStorage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function J(){try{i.texImage2D(...arguments)}catch(N){Lt("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){Lt("WebGLState:",N)}}function at(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function wt(N,lt){d[N]!==lt&&(i.pixelStorei(N,lt),d[N]=lt)}function ht(N){oe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function ot(N){Yt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Yt.copy(N))}function Tt(N,lt){let K=c.get(lt);K===void 0&&(K=new WeakMap,c.set(lt,K));let ct=K.get(N);ct===void 0&&(ct=i.getUniformBlockIndex(lt,N.name),K.set(N,ct))}function It(N,lt){let ct=c.get(lt).get(N);l.get(lt)!==ct&&(i.uniformBlockBinding(lt,ct,N.__bindingPointIndex),l.set(lt,ct))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,et={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,v=null,T=null,M=null,S=null,E=null,P=null,x=new Dt(0,0,0),w=0,C=!1,U=null,O=null,z=null,A=null,D=null,oe.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:Ut,drawBuffers:xt,useProgram:Ht,setBlending:Jt,setMaterial:le,setFlipSided:Wt,setCullFace:ge,setLineWidth:Pe,setPolygonOffset:tn,setScissorTest:xe,activeTexture:Me,bindTexture:F,unbindTexture:ke,compressedTexImage2D:ne,compressedTexImage3D:R,texImage2D:J,texImage3D:Q,pixelStorei:wt,getParameter:at,updateUBOMapping:Tt,uniformBlockBinding:It,texStorage2D:st,texStorage3D:rt,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:ht,viewport:ot,reset:Ot}}function j0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,_){return g?new OffscreenCanvas(R,_):Js("canvas")}function m(R,_,B){let W=1,Z=ne(R);if((Z.width>B||Z.height>B)&&(W=B/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let st=Math.floor(W*Z.width),rt=Math.floor(W*Z.height);u===void 0&&(u=y(st,rt));let J=_?y(st,rt):u;return J.width=st,J.height=rt,J.getContext("2d").drawImage(R,0,0,st,rt),Pt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+st+"x"+rt+")."),J}else return"data"in R&&Pt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,_,B,W,Z,st=!1){if(R!==null){if(i[R]!==void 0)return i[R];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt;W&&(rt=t.get("EXT_texture_norm16"),rt||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&rt&&(J=rt.R16_EXT),B===i.SHORT&&rt&&(J=rt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),_===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&rt&&(J=rt.RG16_EXT),B===i.SHORT&&rt&&(J=rt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&rt&&(J=rt.RGB16_EXT),B===i.SHORT&&rt&&(J=rt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let Q=st?$s:Xt.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Q===ee?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&rt&&(J=rt.RGBA16_EXT),B===i.SHORT&&rt&&(J=rt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(R,_){let B;return R?_===null||_===wn||_===Es?B=i.DEPTH24_STENCIL8:_===pn?B=i.DEPTH32F_STENCIL8:_===Ss&&(B=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wn||_===Es?B=i.DEPTH_COMPONENT24:_===pn?B=i.DEPTH_COMPONENT32F:_===Ss&&(B=i.DEPTH_COMPONENT16),B}function E(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Le&&R.minFilter!==Ne?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function P(R){let _=R.target;_.removeEventListener("dispose",P),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(R){let _=R.target;_.removeEventListener("dispose",x),U(_)}function w(R){let _=n.get(R);if(_.__webglInit===void 0)return;let B=R.source,W=f.get(B);if(W){let Z=W[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(R),Object.keys(W).length===0&&f.delete(B)}n.remove(R)}function C(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let B=R.source,W=f.get(B);delete W[_.__cacheKey],a.memory.textures--}function U(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Z=0;Z<_.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=R.textures;for(let W=0,Z=B.length;W<Z;W++){let st=n.get(B[W]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(R)}let O=0;function z(){O=0}function A(){return O}function D(R){O=R}function k(){let R=O;return R>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function H(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Y(R,_){let B=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let W=R.image;if(W===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,R,_);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function X(R,_){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){vt(B,R,_);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function j(R,_){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){vt(B,R,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function et(R,_){let B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Ut(B,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let Ct={[Ti]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},At={[Le]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},oe={[Qh]:i.NEVER,[su]:i.ALWAYS,[tu]:i.LESS,[Uo]:i.LEQUAL,[eu]:i.EQUAL,[Fo]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function Yt(R,_){if(_.type===pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ne||_.magFilter===$a||_.magFilter===Sr||_.magFilter===gi||_.minFilter===Ne||_.minFilter===$a||_.minFilter===Sr||_.minFilter===gi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ct[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ct[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ct[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,At[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,At[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Le||_.minFilter!==Sr&&_.minFilter!==gi||_.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(R,_){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",P));let W=_.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let st=H(_);if(st!==R.__cacheKey){Z[st]===void 0&&(Z[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[st].usedTimes++;let rt=Z[R.__cacheKey];rt!==void 0&&(Z[R.__cacheKey].usedTimes--,rt.usedTimes===0&&C(_)),R.__cacheKey=st,R.__webglTexture=Z[st].texture}return B}function $(R,_,B){return Math.floor(Math.floor(R/B)/_)}function tt(R,_,B,W){let st=R.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,W,_.data);else{st.sort((wt,ht)=>wt.start-ht.start);let rt=0;for(let wt=1;wt<st.length;wt++){let ht=st[rt],ot=st[wt],Tt=ht.start+ht.count,It=$(ot.start,_.width,4),Ot=$(ht.start,_.width,4);ot.start<=Tt+1&&It===Ot&&$(ot.start+ot.count-1,_.width,4)===It?ht.count=Math.max(ht.count,ot.start+ot.count-ht.start):(++rt,st[rt]=ot)}st.length=rt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let wt=0,ht=st.length;wt<ht;wt++){let ot=st[wt],Tt=Math.floor(ot.start/4),It=Math.ceil(ot.count/4),Ot=Tt%_.width,N=Math.floor(Tt/_.width),lt=It,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Ot,N,lt,K,B,W,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function vt(R,_,B){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let Z=Kt(R,_),st=_.source;e.bindTexture(W,R.__webglTexture,i.TEXTURE0+B);let rt=n.get(st);if(st.version!==rt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=Xt.getPrimaries(Xt.workingColorSpace),ct=_.colorSpace===Jn?null:Xt.getPrimaries(_.colorSpace),mt=_.colorSpace===Jn||K===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=ke(_,Q);let at=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),ht=M(_.internalFormat,at,wt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(W,_);let ot,Tt=_.mipmaps,It=_.isVideoTexture!==!0,Ot=rt.__version===void 0||Z===!0,N=st.dataReady,lt=E(_,Q);if(_.isDepthTexture)ht=S(_.format===_i,_.type),Ot&&(It?e.texStorage2D(i.TEXTURE_2D,1,ht,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,at,wt,null));else if(_.isDataTexture)if(Tt.length>0){It&&Ot&&e.texStorage2D(i.TEXTURE_2D,lt,ht,Tt[0].width,Tt[0].height);for(let K=0,ct=Tt.length;K<ct;K++)ot=Tt[K],It?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,at,wt,ot.data):e.texImage2D(i.TEXTURE_2D,K,ht,ot.width,ot.height,0,at,wt,ot.data);_.generateMipmaps=!1}else It?(Ot&&e.texStorage2D(i.TEXTURE_2D,lt,ht,Q.width,Q.height),N&&tt(_,Q,at,wt)):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,at,wt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){It&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,Tt[0].width,Tt[0].height,Q.depth);for(let K=0,ct=Tt.length;K<ct;K++)if(ot=Tt[K],_.format!==mn)if(at!==null)if(It){if(N)if(_.layerUpdates.size>0){let mt=rc(ot.width,ot.height,_.format,_.type);for(let nt of _.layerUpdates){let Rt=ot.data.subarray(nt*mt/ot.data.BYTES_PER_ELEMENT,(nt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,nt,ot.width,ot.height,1,at,Rt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,Q.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ht,ot.width,ot.height,Q.depth,0,ot.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,Q.depth,at,wt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,ht,ot.width,ot.height,Q.depth,0,at,wt,ot.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{It&&Ot&&e.texStorage2D(i.TEXTURE_2D,lt,ht,Tt[0].width,Tt[0].height);for(let K=0,ct=Tt.length;K<ct;K++)ot=Tt[K],_.format!==mn?at!==null?It?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,K,ht,ot.width,ot.height,0,ot.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,at,wt,ot.data):e.texImage2D(i.TEXTURE_2D,K,ht,ot.width,ot.height,0,at,wt,ot.data)}else if(_.isDataArrayTexture)if(It){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,Q.width,Q.height,Q.depth),N)if(_.layerUpdates.size>0){let K=rc(Q.width,Q.height,_.format,_.type);for(let ct of _.layerUpdates){let mt=Q.data.subarray(ct*K/Q.data.BYTES_PER_ELEMENT,(ct+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,Q.width,Q.height,1,at,wt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,Q.width,Q.height,Q.depth,0,at,wt,Q.data);else if(_.isData3DTexture)It?(Ot&&e.texStorage3D(i.TEXTURE_3D,lt,ht,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ht,Q.width,Q.height,Q.depth,0,at,wt,Q.data);else if(_.isFramebufferTexture){if(Ot)if(It)e.texStorage2D(i.TEXTURE_2D,lt,ht,Q.width,Q.height);else{let K=Q.width,ct=Q.height;for(let mt=0;mt<lt;mt++)e.texImage2D(i.TEXTURE_2D,mt,ht,K,ct,0,at,wt,null),K>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),d.add(_),K.onpaint=ct=>{let mt=ct.changedElements;for(let nt of d)mt.includes(nt.image)&&(nt.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let mt=i.RGBA,nt=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,nt,Rt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(It&&Ot){let K=ne(Tt[0]);e.texStorage2D(i.TEXTURE_2D,lt,ht,K.width,K.height)}for(let K=0,ct=Tt.length;K<ct;K++)ot=Tt[K],It?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,at,wt,ot):e.texImage2D(i.TEXTURE_2D,K,ht,at,wt,ot);_.generateMipmaps=!1}else if(It){if(Ot){let K=ne(Q);e.texStorage2D(i.TEXTURE_2D,lt,ht,K.width,K.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,ht,at,wt,Q);p(_)&&v(W),rt.__version=st.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ut(R,_,B){if(_.image.length!==6)return;let W=Kt(R,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let st=n.get(Z);if(Z.version!==st.__version||W===!0){e.activeTexture(i.TEXTURE0+B);let rt=Xt.getPrimaries(Xt.workingColorSpace),J=_.colorSpace===Jn?null:Xt.getPrimaries(_.colorSpace),Q=_.colorSpace===Jn||rt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let at=_.isCompressedTexture||_.image[0].isCompressedTexture,wt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!at&&!wt?ht[nt]=m(_.image[nt],!0,s.maxCubemapSize):ht[nt]=wt?_.image[nt].image:_.image[nt],ht[nt]=ke(_,ht[nt]);let ot=ht[0],Tt=r.convert(_.format,_.colorSpace),It=r.convert(_.type),Ot=M(_.internalFormat,Tt,It,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,lt=st.__version===void 0||W===!0,K=Z.dataReady,ct=E(_,ot);Yt(i.TEXTURE_CUBE_MAP,_);let mt;if(at){N&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ot,ot.width,ot.height);for(let nt=0;nt<6;nt++){mt=ht[nt].mipmaps;for(let Rt=0;Rt<mt.length;Rt++){let St=mt[Rt];_.format!==mn?Tt!==null?N?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Ot,St.width,St.height,0,St.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,0,0,St.width,St.height,Tt,It,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt,Ot,St.width,St.height,0,Tt,It,St.data)}}}else{if(mt=_.mipmaps,N&&lt){mt.length>0&&ct++;let nt=ne(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ot,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(wt){N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,Tt,It,ht[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,ht[nt].width,ht[nt].height,0,Tt,It,ht[nt].data);for(let Rt=0;Rt<mt.length;Rt++){let ce=mt[Rt].image[nt].image;N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,ce.width,ce.height,Tt,It,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Ot,ce.width,ce.height,0,Tt,It,ce.data)}}else{N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Tt,It,ht[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,Tt,It,ht[nt]);for(let Rt=0;Rt<mt.length;Rt++){let St=mt[Rt];N?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,0,0,Tt,It,St.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Rt+1,Ot,Tt,It,St.image[nt])}}}p(_)&&v(i.TEXTURE_CUBE_MAP),st.__version=Z.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function xt(R,_,B,W,Z,st){let rt=r.convert(B.format,B.colorSpace),J=r.convert(B.type),Q=M(B.internalFormat,rt,J,B.normalized,B.colorSpace),at=n.get(_),wt=n.get(B);if(wt.__renderTarget=_,!at.__hasExternalTextures){let ht=Math.max(1,_.width>>st),ot=Math.max(1,_.height>>st);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,st,Q,ht,ot,_.depth,0,rt,J,null):e.texImage2D(Z,st,Q,ht,ot,0,rt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,wt.__webglTexture,0,xe(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,wt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(R,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let W=_.depthTexture,Z=W&&W.isDepthTexture?W.type:null,st=S(_.stencilBuffer,Z),rt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(_),st,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,R)}else{let W=_.textures;for(let Z=0;Z<W.length;Z++){let st=W[Z],rt=r.convert(st.format,st.colorSpace),J=r.convert(st.type),Q=M(st.internalFormat,rt,J,st.normalized,st.colorSpace);Me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(_),Q,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(R,_,B){let W=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);let at=r.convert(_.depthTexture.format),wt=r.convert(_.depthTexture.type),ht;_.depthTexture.format===Ln?ht=i.DEPTH_COMPONENT24:_.depthTexture.format===_i&&(ht=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,_.width,_.height,0,at,wt,null)}}else Y(_.depthTexture,0);let st=Z.__webglTexture,rt=xe(_),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Q=_.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ln)Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,st,0);else if(_.depthTexture.format===_i)Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(R){let _=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=W}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)we(_.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?we(_.__webglFramebuffer[0],R,0):we(_.__webglFramebuffer,R,0)}else if(B){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),Ht(_.__webglDepthbuffer[W],R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ht(_.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(R,_,B){let W=n.get(R);_!==void 0&&xt(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Vt(R)}function le(R){let _=R.texture,B=n.get(R),W=n.get(_);R.addEventListener("dispose",x);let Z=R.textures,st=R.isWebGLCubeRenderTarget===!0,rt=Z.length>1;if(rt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),st){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Q=0;Q<_.mipmaps.length;Q++)B.__webglFramebuffer[J][Q]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(rt)for(let J=0,Q=Z.length;J<Q;J++){let at=n.get(Z[J]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Me(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let Q=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let at=r.convert(Q.format,Q.colorSpace),wt=r.convert(Q.type),ht=M(Q.internalFormat,at,wt,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),ot=xe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ht,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)xt(B.__webglFramebuffer[J][Q],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else xt(B.__webglFramebuffer[J],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let J=0,Q=Z.length;J<Q;J++){let at=Z[J],wt=n.get(at),ht=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,wt.__webglTexture),Yt(ht,at),xt(B.__webglFramebuffer,R,at,i.COLOR_ATTACHMENT0+J,ht,0),p(at)&&v(ht)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),Yt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)xt(B.__webglFramebuffer[Q],R,_,i.COLOR_ATTACHMENT0,J,Q);else xt(B.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&v(J),e.unbindTexture()}R.depthBuffer&&Vt(R)}function Wt(R){let _=R.textures;for(let B=0,W=_.length;B<W;B++){let Z=_[B];if(p(Z)){let st=T(R),rt=n.get(Z).__webglTexture;e.bindTexture(st,rt),v(st),e.unbindTexture()}}}let ge=[],Pe=[];function tn(R){if(R.samples>0){if(Me(R)===!1){let _=R.textures,B=R.width,W=R.height,Z=i.COLOR_BUFFER_BIT,st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(R),J=_.length>1;if(J)for(let at=0;at<_.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let Q=R.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<_.length;at++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let wt=n.get(_[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Z,i.NEAREST),l===!0&&(ge.length=0,Pe.length=0,ge.push(i.COLOR_ATTACHMENT0+at),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ge.push(st),Pe.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let at=0;at<_.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);let wt=n.get(_[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function xe(R){return Math.min(s.maxSamples,R.samples)}function Me(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(R){let _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function ke(R,_){let B=R.colorSpace,W=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Zs&&B!==Jn&&(Xt.getTransfer(B)===ee?(W!==mn||Z!==nn)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",B)),_}function ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.getTextureUnits=A,this.setTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=Jt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Q0(i,t){function e(n,s=Jn){let r,a=Xt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ql)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===mn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Qa)return i.RED;if(n===to)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===no)return i.RGBA_INTEGER;if(n===Er||n===wr||n===Tr||n===Ar)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===Rr||n===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ho)return r.COMPRESSED_R11_EAC;if(n===uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rr)return r.COMPRESSED_RG11_EAC;if(n===fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===xo||n===yo||n===vo||n===Mo||n===bo||n===So||n===Eo||n===wo||n===To||n===Ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Co||n===Po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Io||n===Lo||n===Cr||n===Do)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:t_,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends Sn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ec,p={},v=e.getContextAttributes(),T=null,M=null,S=[],E=[],P=new gt,x=null,w=null,C=new De;C.viewport=new _e;let U=new De;U.viewport=new _e;let O=[C,U],z=new Xa,A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=S[$];return tt===void 0&&(tt=new cs,S[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=S[$];return tt===void 0&&(tt=new cs,S[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=S[$];return tt===void 0&&(tt=new cs,S[$]=tt),tt.getHandSpace()};function k($){let tt=E.indexOf($.inputSource);if(tt===-1)return;let vt=S[tt];vt!==void 0&&(vt.update($.inputSource,$.frame,c||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<S.length;$++){let tt=E[$];tt!==null&&(E[$]=null,S[$].disconnect(tt))}A=null,D=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ut=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=v.stencil?_i:Ln,Ut=v.stencil?Es:wn);let Ht={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new en(u.textureWidth,u.textureHeight,{format:mn,type:nn,depthTexture:new li(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new en(f.framebufferWidth,f.framebufferHeight,{format:mn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let tt=0;tt<$.removed.length;tt++){let vt=$.removed[tt],Ut=E.indexOf(vt);Ut>=0&&(E[Ut]=null,S[Ut].disconnect(vt))}for(let tt=0;tt<$.added.length;tt++){let vt=$.added[tt],Ut=E.indexOf(vt);if(Ut===-1){for(let Ht=0;Ht<S.length;Ht++)if(Ht>=E.length){E.push(vt),Ut=Ht;break}else if(E[Ht]===null){E[Ht]=vt,Ut=Ht;break}if(Ut===-1)break}let xt=S[Ut];xt&&xt.connect(vt)}}let X=new I,j=new I;function et($,tt,vt){X.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let Ut=X.distanceTo(j),xt=tt.projectionMatrix.elements,Ht=vt.projectionMatrix.elements,we=xt[14]/(xt[10]-1),Vt=xt[14]/(xt[10]+1),Jt=(xt[9]+1)/xt[5],le=(xt[9]-1)/xt[5],Wt=(xt[8]-1)/xt[0],ge=(Ht[8]+1)/Ht[0],Pe=we*Wt,tn=we*ge,xe=Ut/(-Wt+ge),Me=xe*-Wt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Me),$.translateZ(xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=we+xe,ke=Vt+xe,ne=Pe-Me,R=tn+(Ut-Me),_=Jt*Vt/ke*F,B=le*Vt/ke*F;$.projectionMatrix.makePerspective(ne,R,_,B,F,ke),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ct($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=U.near=C.near=tt,z.far=U.far=C.far=vt,(A!==z.near||D!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),A=z.near,D=z.far),z.layers.mask=$.layers.mask|6,C.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;let Ut=$.parent,xt=z.cameras;Ct(z,Ut);for(let Ht=0;Ht<xt.length;Ht++)Ct(xt[Ht],Ut);xt.length===2?et(z,C,U):z.projectionMatrix.copy(C.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),At($,z,Ut)};function At($,tt,vt){vt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=as*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return p[$]};let oe=null;function Yt($,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ut=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Ut=!0);for(let Vt=0;Vt<vt.length;Vt++){let Jt=vt[Vt],le=null;if(f!==null)le=f.getViewport(Jt);else{let ge=d.getViewSubImage(u,Jt);le=ge.viewport,Vt===0&&(t.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(M))}let Wt=O[Vt];Wt===void 0&&(Wt=new De,Wt.layers.enable(Vt),Wt.viewport=new _e,O[Vt]=Wt),Wt.matrix.fromArray(Jt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Jt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),Vt===0&&(z.matrix.copy(Wt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ut===!0&&z.cameras.push(Wt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Vt=d.getDepthInformation(vt[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,s.renderState)}if(xt&&xt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Vt=0;Vt<vt.length;Vt++){let Jt=vt[Vt].camera;if(Jt){let le=p[Jt];le||(le=new lr,p[Jt]=le);let Wt=d.getCameraImage(Jt);le.sourceTexture=Wt}}}}for(let vt=0;vt<S.length;vt++){let Ut=E[vt],xt=S[vt];Ut!==null&&xt!==void 0&&xt.update(Ut,tt,c||a)}oe&&oe($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Kt=new Uu;Kt.setAnimationLoop(Yt),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}},n_=new jt,Hu=new Nt;Hu.set(-1,0,0,0,1,0,0,0,1);function i_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),T=v.envMap,M=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let E=S.program;n.uniformBlockBinding(M,E)}function c(M,S){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",v));let P=S.program;n.updateUBOMapping(M,P);let x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let S=d();M.__bindingPointIndex=S;let E=i.createBuffer(),P=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=s[M.id],E=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let x=0,w=E.length;x<w;x++){let C=E[x];if(Array.isArray(C))for(let U=0,O=C.length;U<O;U++)f(C[U],x,U,P);else f(C,x,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,S,E,P){if(y(M,S,E,P)===!0){let x=M.__offset,w=M.value;if(Array.isArray(w)){let C=0;for(let U=0;U<w.length;U++){let O=w[U],z=p(O);g(O,M.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,S,E){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,E)}function y(M,S,E,P){let x=M.value,w=S+"_"+E;if(P[w]===void 0)return typeof x=="number"||typeof x=="boolean"?P[w]=x:ArrayBuffer.isView(x)?P[w]=x.slice():P[w]=x.clone(),!0;{let C=P[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return P[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(M){let S=M.uniforms,E=0,P=16;for(let w=0,C=S.length;w<C;w++){let U=Array.isArray(S[w])?S[w]:[S[w]];for(let O=0,z=U.length;O<z;O++){let A=U[O],D=Array.isArray(A.value)?A.value:[A.value];for(let k=0,H=D.length;k<H;k++){let Y=D[k],X=p(Y),j=E%P,et=j%X.boundary,Ct=j+et;E+=et,Ct!==0&&P-Ct<X.storage&&(E+=P-Ct),A.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,E+=X.storage}}}let x=E%P;return x>0&&(E+=P-x),M.__size=E,M.__cache={},this}function p(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",M),S}function v(M){let S=M.target;S.removeEventListener("dispose",v);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function a_(){return Fn===null&&(Fn=new rr(r_,16,16,xi,Tn),Fn.name="DFG_LUT",Fn.minFilter=Ne,Fn.magFilter=Ne,Fn.wrapS=In,Fn.wrapT=In,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var Ho=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([no,eo,to]),p=new Set([nn,wn,Ss,Es,Ka,ja]),v=new Uint32Array(4),T=new Int32Array(4),M=new I,S=null,E=null,P=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,O=null,z=null,A=null,D=null;this._outputColorSpace=Ge;let k=0,H=0,Y=null,X=-1,j=null,et=new _e,Ct=new _e,At=null,oe=new Dt(0),Yt=0,Kt=e.width,$=e.height,tt=1,vt=null,Ut=null,xt=new _e(0,0,Kt,$),Ht=new _e(0,0,Kt,$),we=!1,Vt=new ps,Jt=!1,le=!1,Wt=new jt,ge=new I,Pe=new _e,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Me(){return Y===null?tt:1}let F=n;function ke(b,L){return e.getContext(b,L)}let ne,R,_,B,W,Z,st,rt,J,Q,at,wt,ht,ot,Tt,It,Ot,N,lt,K,ct,mt,nt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",_n,!1),F===null){let L="webgl2";if(F=ke(L,b),F===null)throw ke(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(b){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Lt("WebGLRenderer: "+b.message),b}function Rt(){ne=new fg(F),ne.init(),ct=new Q0(F,ne),R=new ig(F,ne,t,ct),_=new K0(F,ne),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),z=F.createFramebuffer(),A=F.createFramebuffer(),D=F.createFramebuffer(),B=new gg(F),W=new O0,Z=new j0(F,ne,_,W,R,ct,B),st=new dg(C),rt=new xf(F),mt=new eg(F,rt),J=new pg(F,rt,B,mt),Q=new xg(F,J,rt,mt,B),N=new _g(F,R,Z),Tt=new sg(W),at=new F0(C,st,ne,R,mt,Tt),wt=new i_(C,W),ht=new k0,ot=new X0(ne),Ot=new tg(C,st,_,Q,g,l),It=new J0(C,Q,R),nt=new s_(F,B,R,_),lt=new ng(F,ne,B),K=new mg(F,ne,B),B.programs=at.programs,C.capabilities=R,C.extensions=ne,C.properties=W,C.renderLists=ht,C.shadowMap=It,C.state=_,C.info=B}y!==nn&&(w=new vg(y,e.width,e.height,o,s,r));let St=new wc(C,F);this.xr=St,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(Kt,$,!1))},this.getSize=function(b){return b.set(Kt,$)},this.setSize=function(b,L,q=!0){if(St.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=b,$=L,e.width=Math.floor(b*tt),e.height=Math.floor(L*tt),q===!0&&(e.style.width=b+"px",e.style.height=L+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(Kt*tt,$*tt).floor()},this.setDrawingBufferSize=function(b,L,q){Kt=b,$=L,tt=q,e.width=Math.floor(b*q),e.height=Math.floor(L*q),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(y===nn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(xt)},this.setViewport=function(b,L,q,V){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,L,q,V),_.viewport(et.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,L,q,V){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,L,q,V),_.scissor(Ct.copy(Ht).multiplyScalar(tt).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(b){_.setScissorTest(we=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Ut=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,q=!0){let V=0;if(b){let G=!1;if(Y!==null){let ft=Y.texture.format;G=m.has(ft)}if(G){let ft=Y.texture.type,yt=p.has(ft),dt=Ot.getClearColor(),Mt=Ot.getClearAlpha(),Et=dt.r,Bt=dt.g,Gt=dt.b;yt?(v[0]=Et,v[1]=Bt,v[2]=Gt,v[3]=Mt,F.clearBufferuiv(F.COLOR,0,v)):(T[0]=Et,T[1]=Bt,T[2]=Gt,T[3]=Mt,F.clearBufferiv(F.COLOR,0,T))}else V|=F.COLOR_BUFFER_BIT}L&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Ot.dispose(),ht.dispose(),ot.dispose(),W.dispose(),st.dispose(),Q.dispose(),mt.dispose(),nt.dispose(),at.dispose(),St.dispose(),St.removeEventListener("sessionstart",Bc),St.removeEventListener("sessionend",kc),vi.stop()};function ce(b){b.preventDefault(),Ks("WebGLRenderer: Context Lost."),U=!0}function Qt(){Ks("WebGLRenderer: Context Restored."),U=!1;let b=B.autoReset,L=It.enabled,q=It.autoUpdate,V=It.needsUpdate,G=It.type;Rt(),B.autoReset=b,It.enabled=L,It.autoUpdate=q,It.needsUpdate=V,It.type=G}function _n(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rn(b){let L=b.target;L.removeEventListener("dispose",Rn),od(L)}function od(b){ld(b),W.remove(b)}function ld(b){let L=W.get(b).programs;L!==void 0&&(L.forEach(function(q){at.releaseProgram(q)}),b.isShaderMaterial&&at.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,q,V,G,ft){L===null&&(L=tn);let yt=G.isMesh&&G.matrixWorld.determinantAffine()<0,dt=ud(b,L,q,V,G);_.setMaterial(V,yt);let Mt=q.index,Et=1;if(V.wireframe===!0){if(Mt=J.getWireframeAttribute(q),Mt===void 0)return;Et=2}let Bt=q.drawRange,Gt=q.attributes.position,bt=Bt.start*Et,te=(Bt.start+Bt.count)*Et;ft!==null&&(bt=Math.max(bt,ft.start*Et),te=Math.min(te,(ft.start+ft.count)*Et)),Mt!==null?(bt=Math.max(bt,0),te=Math.min(te,Mt.count)):Gt!=null&&(bt=Math.max(bt,0),te=Math.min(te,Gt.count));let be=te-bt;if(be<0||be===1/0)return;mt.setup(G,V,dt,q,Mt);let fe,ae=lt;if(Mt!==null&&(fe=rt.get(Mt),ae=K,ae.setIndex(fe)),G.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Me()),ae.setMode(F.LINES)):ae.setMode(F.TRIANGLES);else if(G.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),_.setLineWidth(ze*Me()),G.isLineSegments?ae.setMode(F.LINES):G.isLineLoop?ae.setMode(F.LINE_LOOP):ae.setMode(F.LINE_STRIP)}else G.isPoints?ae.setMode(F.POINTS):G.isSprite&&ae.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ze=G._multiDrawStarts,_t=G._multiDrawCounts,Ze=G._multiDrawCount,Zt=Mt?rt.get(Mt).bytesPerElement:1,hn=W.get(V).currentProgram.getUniforms();for(let Cn=0;Cn<Ze;Cn++)hn.setValue(F,"_gl_DrawID",Cn),ae.render(ze[Cn]/Zt,_t[Cn])}else if(G.isInstancedMesh)ae.renderInstances(bt,be,G.count);else if(q.isInstancedBufferGeometry){let ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_t=Math.min(q.instanceCount,ze);ae.renderInstances(bt,be,_t)}else ae.render(bt,be)};function Oc(b,L,q,V){O!==null&&b.isNodeMaterial&&O.setObject(V,b),Jt===!0&&Tt.setState(b,q,!1),b.transparent===!0&&b.side===Fe&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,kr(b,L,V),b.side=pi,b.needsUpdate=!0,kr(b,L,V),b.side=Fe):kr(b,L,V)}this.compile=function(b,L,q=null){q===null&&(q=b),O!==null&&O.renderStart(b,L,q),E=ot.get(q),E.init(L),x.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),le=this.localClippingEnabled,Jt=Tt.init(this.clippingPlanes,le),Jt===!0&&Tt.setGlobalState(this.clippingPlanes,L),O!==null&&It.render(E.state.shadowsArray,q,L);let V=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ft=G.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){let dt=ft[yt];Oc(dt,q,L,G),V.add(dt)}else Oc(ft,q,L,G),V.add(ft)}),E=x.pop(),O!==null&&O.renderEnd(),V},this.compileAsync=function(b,L,q=null){let V=this.compile(b,L,q);return new Promise(G=>{function ft(){if(V.forEach(function(yt){let Mt=W.get(yt).currentProgram;(Mt===void 0||Mt.isReady())&&V.delete(yt)}),V.size===0){G(b);return}setTimeout(ft,10)}ne.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let jo=null;function cd(b){jo&&jo(b)}function Bc(){vi.stop()}function kc(){vi.start()}let vi=new Uu;vi.setAnimationLoop(cd),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(b){jo=b,St.setAnimationLoop(b),b===null?vi.stop():vi.start()},St.addEventListener("sessionstart",Bc),St.addEventListener("sessionend",kc),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(b,L);let q=St.enabled===!0&&St.isPresenting===!0,V=w!==null&&(Y===null||q)&&w.begin(C,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(L),L=St.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,L,Y),E=ot.get(b,x.length),E.init(L),E.state.textureUnits=Z.getTextureUnits(),x.push(E),Wt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Vt.setFromProjectionMatrix(Wt,bn,L.reversedDepth),le=this.localClippingEnabled,Jt=Tt.init(this.clippingPlanes,le),S=ht.get(b,P.length),S.init(),P.push(S),St.enabled===!0&&St.isPresenting===!0){let yt=C.xr.getDepthSensingMesh();yt!==null&&Qo(yt,L,-1/0,C.sortObjects)}Qo(b,L,0,C.sortObjects),S.finish(),O!==null&&O.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(vt,Ut),xe=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,xe&&Ot.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Jt===!0&&Tt.beginShadows();let G=E.state.shadowsArray;if(It.render(G,b,L),Jt===!0&&Tt.endShadows(),(V&&w.hasRenderPass())===!1){let yt=S.opaque,dt=S.transmissive;if(E.setupLights(),L.isArrayCamera){let Mt=L.cameras;if(dt.length>0)for(let Et=0,Bt=Mt.length;Et<Bt;Et++){let Gt=Mt[Et];Hc(yt,dt,b,Gt)}xe&&Ot.render(b);for(let Et=0,Bt=Mt.length;Et<Bt;Et++){let Gt=Mt[Et];zc(S,b,Gt,Gt.viewport)}}else dt.length>0&&Hc(yt,dt,b,L),xe&&Ot.render(b),zc(S,b,L)}Y!==null&&H===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),V&&w.end(C),b.isScene===!0&&b.onAfterRender(C,b,L),mt.resetDefaultState(),X=-1,j=null,x.pop(),x.length>0?(E=x[x.length-1],Z.setTextureUnits(E.state.textureUnits),Jt===!0&&Tt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,O!==null&&O.renderEnd()};function Qo(b,L,q,V){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Vt)){V&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Wt);let yt=Q.update(b),dt=b.material;dt.visible&&S.push(b,yt,dt,q,Pe.z,null,L)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Vt))){let yt=Q.update(b),dt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Pe.copy(yt.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(Wt)),Array.isArray(dt)){let Mt=yt.groups;for(let Et=0,Bt=Mt.length;Et<Bt;Et++){let Gt=Mt[Et],bt=dt[Gt.materialIndex];bt&&bt.visible&&S.push(b,yt,bt,q,Pe.z,Gt,L)}}else dt.visible&&S.push(b,yt,dt,q,Pe.z,null,L)}}let ft=b.children;for(let yt=0,dt=ft.length;yt<dt;yt++)Qo(ft[yt],L,q,V)}function zc(b,L,q,V){let{opaque:G,transmissive:ft,transparent:yt}=b;E.setupLightsView(q),Jt===!0&&Tt.setGlobalState(C.clippingPlanes,q),V&&_.viewport(et.copy(V)),G.length>0&&Br(G,L,q),ft.length>0&&Br(ft,L,q),yt.length>0&&Br(yt,L,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Hc(b,L,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let bt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new en(1,1,{generateMipmaps:!0,type:bt?Tn:nn,minFilter:gi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let ft=E.state.transmissionRenderTarget[V.id],yt=V.viewport||et;ft.setSize(yt.z*C.transmissionResolutionScale,yt.w*C.transmissionResolutionScale);let dt=C.getRenderTarget(),Mt=C.getActiveCubeFace(),Et=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(oe),Yt=C.getClearAlpha(),Yt<1&&C.setClearColor(16777215,.5),C.clear(),xe&&Ot.render(q);let Bt=C.toneMapping;C.toneMapping=En;let Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Jt===!0&&Tt.setGlobalState(C.clippingPlanes,V),Br(b,q,V),Z.updateMultisampleRenderTarget(ft),Z.updateRenderTargetMipmap(ft),ne.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let te=0,be=L.length;te<be;te++){let fe=L[te],{object:ae,geometry:ze,material:_t,group:Ze}=fe;if(_t.side===Fe&&ae.layers.test(V.layers)){let Zt=_t.side;_t.side=je,_t.needsUpdate=!0,Vc(ae,q,V,ze,_t,Ze),_t.side=Zt,_t.needsUpdate=!0,bt=!0}}bt===!0&&(Z.updateMultisampleRenderTarget(ft),Z.updateRenderTargetMipmap(ft))}C.setRenderTarget(dt,Mt,Et),C.setClearColor(oe,Yt),Gt!==void 0&&(V.viewport=Gt),C.toneMapping=Bt}function Br(b,L,q){let V=L.isScene===!0?L.overrideMaterial:null;for(let G=0,ft=b.length;G<ft;G++){let yt=b[G],{object:dt,geometry:Mt,group:Et}=yt,Bt=yt.material;Bt.allowOverride===!0&&V!==null&&(Bt=V),dt.layers.test(q.layers)&&Vc(dt,L,q,Mt,Bt,Et)}}function Vc(b,L,q,V,G,ft){O!==null&&G.isNodeMaterial&&O.setObject(b,G),b.onBeforeRender(C,L,q,V,G,ft),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(C,L,q,V,b,ft),G.transparent===!0&&G.side===Fe&&G.forceSinglePass===!1?(G.side=je,G.needsUpdate=!0,C.renderBufferDirect(q,L,V,G,b,ft),G.side=pi,G.needsUpdate=!0,C.renderBufferDirect(q,L,V,G,b,ft),G.side=Fe):C.renderBufferDirect(q,L,V,G,b,ft),b.onAfterRender(C,L,q,V,G,ft)}function kr(b,L,q){L.isScene!==!0&&(L=tn);let V=W.get(b),G=E.state.lights,ft=E.state.shadowsArray,yt=G.state.version,dt=at.getParameters(b,G.state,ft,L,q,E.state.lightProbeGridArray),Mt=at.getProgramCacheKey(dt),Et=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,V.fog=L.fog;let Bt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=st.get(b.envMap||V.environment,Bt),V.envMapRotation=V.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",Rn),Et=new Map,V.programs=Et);let Gt=Et.get(Mt);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===yt)return Wc(b,dt),Gt}else dt.uniforms=at.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,q,dt),b.onBeforeCompile(dt,C),Gt=at.acquireProgram(dt,Mt),Et.set(Mt,Gt),V.uniforms=dt.uniforms;let bt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bt.clippingPlanes=Tt.uniform),Wc(b,dt),V.needsLights=fd(b),V.lightsStateVersion=yt,V.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Gt,V.uniformsList=null,Gt}function Gc(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=As.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Wc(b,L){let q=W.get(b);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function hd(b,L){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let q=0,V=b.length;q<V;q++){let G=b[q];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function ud(b,L,q,V,G){L.isScene!==!0&&(L=tn),Z.resetTextureUnits();let ft=L.fog,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?L.environment:null,dt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Xt.workingColorSpace,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Et=st.get(V.envMap||yt,Mt),Bt=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),bt=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,be=!!q.morphAttributes.color,fe=En;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(fe=C.toneMapping);let ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ze=ae!==void 0?ae.length:0,_t=W.get(V),Ze=E.state.lights;if(Jt===!0&&(le===!0||b!==j)){let he=b===j&&V.id===X;Tt.setState(V,b,he)}let Zt=!1;V.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ze.state.version||_t.outputColorSpace!==dt||G.isBatchedMesh&&_t.batching===!1||!G.isBatchedMesh&&_t.batching===!0||G.isBatchedMesh&&_t.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&_t.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&_t.instancing===!1||!G.isInstancedMesh&&_t.instancing===!0||G.isSkinnedMesh&&_t.skinning===!1||!G.isSkinnedMesh&&_t.skinning===!0||G.isInstancedMesh&&_t.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_t.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_t.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_t.instancingMorph===!1&&G.morphTexture!==null||_t.envMap!==Et||V.fog===!0&&_t.fog!==ft||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Tt.numPlanes||_t.numIntersection!==Tt.numIntersection)||_t.vertexAlphas!==Bt||_t.vertexTangents!==Gt||_t.morphTargets!==bt||_t.morphNormals!==te||_t.morphColors!==be||_t.toneMapping!==fe||_t.morphTargetsCount!==ze||!!_t.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,_t.__version=V.version);let hn=_t.currentProgram;Zt===!0&&(hn=kr(V,L,G),O&&V.isNodeMaterial&&O.onUpdateProgram(V,hn,_t));let Cn=!1,Qn=!1,Fi=!1,re=hn.getUniforms(),ve=_t.uniforms;if(_.useProgram(hn.program)&&(Cn=!0,Qn=!0,Fi=!0),V.id!==X&&(X=V.id,Qn=!0),_t.needsLights){let he=hd(E.state.lightProbeGridArray,G);_t.lightProbeGrid!==he&&(_t.lightProbeGrid=he,Qn=!0)}if(Cn||j!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),re.setValue(F,"projectionMatrix",b.projectionMatrix),re.setValue(F,"viewMatrix",b.matrixWorldInverse);let ei=re.map.cameraPosition;ei!==void 0&&ei.setValue(F,ge.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&re.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&re.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Qn=!0,Fi=!0)}if(_t.needsLights&&(Ze.state.sunShadowMap.length>0&&re.setValue(F,"sunShadowMap",Ze.state.sunShadowMap,Z),Ze.state.directionalShadowMap.length>0&&re.setValue(F,"directionalShadowMap",Ze.state.directionalShadowMap,Z),Ze.state.spotShadowMap.length>0&&re.setValue(F,"spotShadowMap",Ze.state.spotShadowMap,Z),Ze.state.pointShadowMap.length>0&&re.setValue(F,"pointShadowMap",Ze.state.pointShadowMap,Z)),G.isSkinnedMesh){re.setOptional(F,G,"bindMatrix"),re.setOptional(F,G,"bindMatrixInverse");let he=G.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),re.setValue(F,"boneTexture",he.boneTexture,Z))}G.isBatchedMesh&&(re.setOptional(F,G,"batchingTexture"),re.setValue(F,"batchingTexture",G._matricesTexture,Z),re.setOptional(F,G,"batchingIdTexture"),re.setValue(F,"batchingIdTexture",G._indirectTexture,Z),re.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&re.setValue(F,"batchingColorTexture",G._colorsTexture,Z));let ti=q.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&N.update(G,q,hn),(Qn||_t.receiveShadow!==G.receiveShadow)&&(_t.receiveShadow=G.receiveShadow,re.setValue(F,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&L.environment!==null&&(ve.envMapIntensity.value=L.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=a_()),Qn){if(re.setValue(F,"toneMappingExposure",C.toneMappingExposure),_t.needsLights&&dd(ve,Fi),ft&&V.fog===!0&&wt.refreshFogUniforms(ve,ft),wt.refreshMaterialUniforms(ve,V,tt,$,E.state.transmissionRenderTarget[b.id]),_t.needsLights&&_t.lightProbeGrid){let he=_t.lightProbeGrid;ve.probesSH.value=he.texture,ve.probesMin.value.copy(he.boundingBox.min),ve.probesMax.value.copy(he.boundingBox.max),ve.probesResolution.value.copy(he.resolution)}As.upload(F,Gc(_t),ve,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(As.upload(F,Gc(_t),ve,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&re.setValue(F,"center",G.center),re.setValue(F,"modelViewMatrix",G.modelViewMatrix),re.setValue(F,"normalMatrix",G.normalMatrix),re.setValue(F,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let he=V.uniformsGroups;for(let ei=0,Oi=he.length;ei<Oi;ei++){let qc=he[ei];nt.update(qc,hn),nt.bind(qc,hn)}}return hn}function dd(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function fd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,L,q){let V=W.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=L,W.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let q=W.get(b);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,q=0){Y=b,k=L,H=q;let V=null,G=!1,ft=!1;if(b){let dt=W.get(b);if(dt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(b.viewport),Ct.copy(b.scissor),At=b.scissorTest,_.viewport(et),_.scissor(Ct),_.setScissorTest(At),X=-1;return}else if(dt.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(dt.__hasExternalTextures)Z.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Bt=b.depthTexture;if(dt.__boundDepthTexture!==Bt){if(Bt!==null&&W.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}let Mt=b.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);let Et=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?V=Et[L][q]:V=Et[L],G=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?V=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Et)?V=Et[q]:V=Et,et.copy(b.viewport),Ct.copy(b.scissor),At=b.scissorTest}else et.copy(xt).multiplyScalar(tt).floor(),Ct.copy(Ht).multiplyScalar(tt).floor(),At=we;if(q!==0&&(V=z),_.bindFramebuffer(F.FRAMEBUFFER,V)&&_.drawBuffers(b,V),_.viewport(et),_.scissor(Ct),_.setScissorTest(At),G){let dt=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,q)}else if(ft){let dt=L;for(let Mt=0;Mt<b.textures.length;Mt++){let Et=W.get(b.textures[Mt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Mt,Et.__webglTexture,q,dt)}}else if(b!==null&&q!==0){let dt=W.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,q)}X=-1};function Xc(b){let L=W.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=R.textureFormatReadable(b.format),L.__typeReadable=R.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,q,V,G,ft,yt,dt=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Mt=Mt[yt]),Mt){_.bindFramebuffer(F.FRAMEBUFFER,Mt);try{let Et=b.textures[dt],Bt=Et.format,Gt=Et.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt);let bt=Xc(Et);if(bt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-V&&q>=0&&q<=b.height-G&&F.readPixels(L,q,V,G,ct.convert(Bt),ct.convert(Gt),ft)}finally{let Et=Y!==null?W.get(Y).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,L,q,V,G,ft,yt,dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Mt=Mt[yt]),Mt)if(L>=0&&L<=b.width-V&&q>=0&&q<=b.height-G){_.bindFramebuffer(F.FRAMEBUFFER,Mt);let Et=b.textures[dt],Bt=Et.format,Gt=Et.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt);let bt=Xc(Et);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,te),F.bufferData(F.PIXEL_PACK_BUFFER,ft.byteLength,F.STREAM_READ),F.readPixels(L,q,V,G,ct.convert(Bt),ct.convert(Gt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let be=Y!==null?W.get(Y).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,be);let fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ou(F,fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,te),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ft),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(te),F.deleteSync(fe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,q=0){let V=Math.pow(2,-q),G=Math.floor(b.image.width*V),ft=Math.floor(b.image.height*V),yt=L!==null?L.x:0,dt=L!==null?L.y:0;Z.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,yt,dt,G,ft),_.unbindTexture()},this.copyTextureToTexture=function(b,L,q=null,V=null,G=0,ft=0){let yt,dt,Mt,Et,Bt,Gt,bt,te,be,fe=b.isCompressedTexture?b.mipmaps[ft]:b.image;if(q!==null)yt=q.max.x-q.min.x,dt=q.max.y-q.min.y,Mt=q.isBox3?q.max.z-q.min.z:1,Et=q.min.x,Bt=q.min.y,Gt=q.isBox3?q.min.z:0;else{let ve=Math.pow(2,-G);yt=Math.floor(fe.width*ve),dt=Math.floor(fe.height*ve),b.isDataArrayTexture?Mt=fe.depth:b.isData3DTexture?Mt=Math.floor(fe.depth*ve):Mt=1,Et=0,Bt=0,Gt=0}V!==null?(bt=V.x,te=V.y,be=V.z):(bt=0,te=0,be=0);let ae=ct.convert(L.format),ze=ct.convert(L.type),_t;L.isData3DTexture?(Z.setTexture3D(L,0),_t=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Z.setTexture2DArray(L,0),_t=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(L,0),_t=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let Ze=_.getParameter(F.UNPACK_ROW_LENGTH),Zt=_.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=_.getParameter(F.UNPACK_SKIP_PIXELS),Cn=_.getParameter(F.UNPACK_SKIP_ROWS),Qn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,fe.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),_.pixelStorei(F.UNPACK_SKIP_ROWS,Bt),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt);let Fi=b.isDataArrayTexture||b.isData3DTexture,re=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let ve=W.get(b),ti=W.get(L),he=W.get(ve.__renderTarget),ei=W.get(ti.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,he.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Oi=0;Oi<Mt;Oi++)Fi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,Gt+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(L).__webglTexture,ft,be+Oi)),F.blitFramebuffer(Et,Bt,yt,dt,bt,te,yt,dt,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||W.has(b)){let ve=W.get(b),ti=W.get(L);_.bindFramebuffer(F.READ_FRAMEBUFFER,A),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,D);for(let he=0;he<Mt;he++)Fi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ve.__webglTexture,G,Gt+he):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,G),re?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ti.__webglTexture,ft,be+he):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ti.__webglTexture,ft),G!==0?F.blitFramebuffer(Et,Bt,yt,dt,bt,te,yt,dt,F.COLOR_BUFFER_BIT,F.NEAREST):re?F.copyTexSubImage3D(_t,ft,bt,te,be+he,Et,Bt,yt,dt):F.copyTexSubImage2D(_t,ft,bt,te,Et,Bt,yt,dt);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else re?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(_t,ft,bt,te,be,yt,dt,Mt,ae,ze,fe.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(_t,ft,bt,te,be,yt,dt,Mt,ae,fe.data):F.texSubImage3D(_t,ft,bt,te,be,yt,dt,Mt,ae,ze,fe):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ft,bt,te,yt,dt,ae,ze,fe.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ft,bt,te,fe.width,fe.height,ae,fe.data):F.texSubImage2D(F.TEXTURE_2D,ft,bt,te,yt,dt,ae,ze,fe);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ze),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),_.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),_.pixelStorei(F.UNPACK_SKIP_ROWS,Cn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Qn),ft===0&&L.generateMipmaps&&F.generateMipmap(_t),_.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){k=0,H=0,Y=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Vu={type:"change"},Rc={type:"start"},Wu={type:"end"},Wo=new oi,Gu=new on,o_=Math.cos(70*ec.DEG2RAD),Ce=new I,sn=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6,Xo=class extends vr{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new We,this._lastTargetPosition=new I,this._quat=new We().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vs,this._sphericalDelta=new vs,this._scale=1,this._panOffset=new I,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new I,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=l_.bind(this),this._onPointerUp=h_.bind(this),this._onContextMenu=__.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=p_.bind(this),this._onTouchStart=m_.bind(this),this._onTouchMove=g_.bind(this),this._onMouseDown=u_.bind(this),this._onMouseMove=d_.bind(this),this._interceptControlDown=x_.bind(this),this._interceptControlUp=y_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=se.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vu),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ce.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wo.origin.copy(this.object.position),Wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wo.direction))<o_?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wo.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(Vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function l_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function h_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function u_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Rc)}function d_(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f_(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function p_(i){this.enabled!==!1&&this._handleKeyDown(i)}function m_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Rc)}function g_(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function __(i){this.enabled!==!1&&i.preventDefault()}function x_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Xu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);let g=Xu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Xu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Te(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Zu=new I(0,1,0);function Bn(i=1){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var An=(i,t={})=>new qe({color:i,roughness:.75,metalness:0,...t}),Cc={},Ee=(i,t,e={})=>Cc[i]??(Cc[i]=An(t,e));function Cs(i,t,{fold:e=.25,bend:n=0,segs:s=6,teeth:r=!1,shape:a="ovate"}={}){let o=[],l=[],c=r?s*2:s;for(let d=0;d<=c;d++){let u=d/c,f;a==="ovate"?f=Math.sin(Math.PI*Math.pow(u,.75))*(1-.25*u):a==="lance"?f=Math.sin(Math.PI*Math.pow(u,.9))*.95+.05*(1-u):f=1-Math.pow(u,2.2),f=Math.max(f,0)*t,r&&d%2===1&&d<c&&(f*=.55);let g=u*i,y=n*i*u*u;o.push(-f/2,g,y+e*f*.5,0,g,y-e*f*.5,f/2,g,y+e*f*.5)}for(let d=0;d<c;d++){let u=d*3,f=(d+1)*3;l.push(u,f,u+1,u+1,f,f+1,u+1,f+1,u+2,u+2,f+1,f+2)}let h=new me;return h.setAttribute("position",new Ft(o,3)),h.setIndex(l),h.computeVertexNormals(),h}function Yu(i,t,e){let n=new I().subVectors(e,t),s=Math.max(n.length(),1e-4);i.position.copy(t).addScaledVector(n,.5),i.scale.set(1,s,1),i.quaternion.setFromUnitVectors(Zu,n.multiplyScalar(1/s))}function Pc(i,t,e=null){let n=i.map(({geo:s,obj:r},a)=>{let o=r;for(;o.parent;)o=o.parent;o.updateMatrixWorld(!0);let l=s.clone();if(l.applyMatrix4(r.matrixWorld),e){let c=new Dt(e[a%e.length]),h=l.attributes.position.count,d=new Float32Array(h*3);for(let u=0;u<h;u++)d[u*3]=c.r,d[u*3+1]=c.g,d[u*3+2]=c.b;l.setAttribute("color",new Te(d,3))}return l});return new pt(qu(n,!1),t)}function Dr({length:i=.62,open:t=!1,seed:e=7}={}){let n=new $t,s=Bn(e),r=Ee("spine",13942906,{roughness:.55}),a=new pt(new de(.0035,.0105,i*.98,8),r);a.scale.x=1.5,a.position.set(0,i*.49,.013),a.userData.part="spine",n.add(a);let o=[4164154,4954687,3570228,5677892,3108913],l=46,c=[],h=new Map;for(let f=0;f<l;f++){let g=.05+f/l*(i*.62)+s()*.02,y=Math.min(i-g-.005,.3+s()*.12),m=(s()-.5)*Math.PI*1.15,p=.008+s()*.011,v=Cs(y,.036,{fold:.9,segs:8,shape:"blade"}),T=new ue,M=t?.1+s()*.16:.012+s()*.02;T.position.set(Math.sin(m)*p,g,-Math.cos(m)*p+.004),T.rotation.set(-M*Math.cos(m),m*(t?.35:.08),M*Math.sin(m)*1.5),c.push({geo:v,obj:T})}let d=new ue;d.position.set(0,i*.5,-.002),c.push({geo:Cs(i*.5,.026,{fold:1,segs:10,shape:"blade"}),obj:d});let u=Pc(c,Ee("lulavLeaves",16777215,{side:Fe,roughness:.6,vertexColors:!0}),[...o,...o.slice().reverse(),5218367]);return u.userData.part="tiyumet",n.add(u),n.userData.length=i,n.userData.kind="lulav",n}function Ps({length:i=.44,variant:t="kosher",seed:e=3}={}){let n=new $t,s=Bn(e),r=new pt(new de(.0022,.0042,i,6),Ee("hstem",6048302));r.position.y=i/2,n.add(r);let a=Ee("hleaf",3050052,{side:Fe,roughness:.5,emissive:866842,emissiveIntensity:.7}),o=t==="kosher"?3:2,l=18,c=[];for(let h=0;h<l;h++){let d=h/(l-1),u=.05+d*(i-.06),f=h*(t==="kosher"?1.05:1.6);for(let g=0;g<o;g++){let y=f+g*Math.PI*2/o;t==="pairs"&&g===1&&(y=f+Math.PI);let m=.05-.02*d,p=Cs(m,m*.42,{fold:.35,segs:5,shape:"ovate"}),v=new $t;v.position.y=u+(t==="pairs"&&g===2?.012:0),v.rotation.y=y;let T=new ue;T.rotation.x=.85-.3*d+(s()-.5)*.12,T.position.set(0,0,.002),v.add(T),c.push({geo:p,obj:T})}}return n.add(Pc(c,a)),n.userData.length=i,n.userData.kind="hadas",n}function Is({length:i=.42,variant:t="smooth",seed:e=5}={}){let n=new $t,s=Bn(e),r=new pt(new de(.0022,.0038,i,6),Ee("astem"+t,t==="smooth"?9190187:8149562));r.position.y=i/2,n.add(r);let a=t==="smooth",o=Ee("aleaf"+t,a?8826190:5212724,{side:Fe,roughness:.55}),l=14,c=[];for(let h=0;h<l;h++){let d=h/(l-1),u=.04+d*(i-.06),f=h*2.4+s()*.3,g=(a?.11:.085)-.045*d,y=Cs(g,a?.016:.028,{fold:.2,bend:a?-.15:-.05,segs:8,teeth:!a,shape:"lance"}),m=new $t;m.position.y=u,m.rotation.y=f;let p=new ue;p.rotation.x=.55-.2*d,m.add(p),c.push({geo:y,obj:p})}return n.add(Pc(c,o)),n.userData.length=i,n.userData.kind="arava",n}function Ic({seed:i=11}={}){let t=new $t,e=Bn(i),n=[[0,-.058],[.011,-.055],[.025,-.045],[.036,-.026],[.041,-.002],[.038,.02],[.03,.04],[.018,.053],[.009,.059],[0,.061]].map(([g,y])=>new gt(g,y)),s=new ur(n,40),r=s.attributes.position,a=[],o=new Dt(15257916),l=new Dt(12042810),c=e()*10;for(let g=0;g<r.count;g++){let y=r.getX(g),m=r.getY(g),p=r.getZ(g),v=Math.sin(y*260+c)*Math.sin(m*300+p*200)*.0016+Math.sin(p*340+m*180)*.0012,T=Math.hypot(y,p)||1;r.setXYZ(g,y+y/T*v,m,p+p/T*v);let M=.5+.5*Math.sin(m*90+y*40+c),S=o.clone().lerp(l,M*.5);a.push(S.r,S.g,S.b)}s.setAttribute("color",new Ft(a,3)),s.computeVertexNormals();let h=new pt(s,new qe({vertexColors:!0,roughness:.6}));h.userData.part="body",t.add(h);let d=new pt(new $n(.0065,.016,8),Ee("pitam",3877400));d.position.y=.066,d.userData.part="pitam",t.add(d);let u=new pt(new de(.011,.014,.008,12),Ee("ukatz",7031336));u.position.y=-.058,u.userData.part="ukatz",t.add(u);let f=new pt(new de(.004,.005,.014,8),Ee("ukatz",7031336));return f.position.y=-.066,f.userData.part="ukatz",t.add(f),t.userData.kind="etrog",t}var Yo={shulchan:{label:"\u05D4\u05D3\u05E1\u05D9\u05DD \u05DE\u05D9\u05DE\u05D9\u05DF, \u05E2\u05E8\u05D1\u05D5\u05EA \u05DE\u05E9\u05DE\u05D0\u05DC",slots:[{kind:"hadas",pos:[.03,.03],tilt:[0,.03]},{kind:"hadas",pos:[.042,.02],tilt:[0,.05]},{kind:"hadas",pos:[.018,.04],tilt:[0,.02]},{kind:"arava",pos:[-.03,.03],tilt:[0,-.03]},{kind:"arava",pos:[-.042,.02],tilt:[0,-.05]}]},ari:{label:"\u05E2\u05E8\u05D1\u05D4 \u05DE\u05D9\u05DE\u05D9\u05DF \u05D5\u05DE\u05E9\u05DE\u05D0\u05DC, \u05D5\u05E9\u05DC\u05E9\u05D4 \u05D4\u05D3\u05E1\u05D9\u05DD \u05DE\u05DB\u05E1\u05D9\u05DD",slots:[{kind:"arava",pos:[.022,.028],tilt:[0,.02]},{kind:"arava",pos:[-.022,.028],tilt:[0,-.02]},{kind:"hadas",pos:[.036,.04],tilt:[0,.04]},{kind:"hadas",pos:[-.036,.04],tilt:[0,-.04]},{kind:"hadas",pos:[.006,.05],tilt:[0,.03]}]}},Oe={lulav:.66,hadas:.54,arava:.51};function Nr({arrangement:i="shulchan",hadasTip:t=Oe.hadas,aravaTip:e=Oe.arava,lulavLen:n=Oe.lulav,rings:s=3,slotCount:r=5,seed:a=1,handle:o=!0}={}){let l=new $t,c=Dr({length:n,seed:7+a});l.add(c);let h=Yo[i],d=[],u=0,f=0;if(h.slots.forEach((g,y)=>{let m=g.kind==="hadas",p=m?u++:f++;if(y>=r)return;let v=m?t:e,T=m?Ps({length:v,seed:3+p}):Is({length:v,seed:5+p});T.position.set(g.pos[0],0,g.pos[1]),T.rotation.set(g.tilt[0],0,-g.tilt[1]),l.add(T),d.push(T)}),l.userData.parts=d,l.userData.lulav=c,[.16,.24,.32].slice(0,s).forEach(g=>l.add(Zo(g))),o&&r>0){let g=new pt(new de(.031,.029,.11,14),Ee("wrap",9075258));g.position.set(0,.06,.016),l.add(g)}return l.userData.kind="bundle",l}function Zo(i,t=!1){let e=new pt(new gs(.045,t?.012:.0055,8,24),t?new Ue({color:16766029,transparent:!0,opacity:.55,depthTest:!1}):Ee("ring",12100682,{roughness:.5}));return e.rotation.x=Math.PI/2,e.position.set(0,i,.02),e.scale.set(.9,.7,1),e.userData.ringY=i,e}var $u=14725260;function v_(i=1){let t=new $t,e=Ee("skin",$u,{roughness:.6}),n=new pt(new Xe(.048,16,12),e);n.scale.set(1.05,1.05,.75),n.position.set(0,0,.05),t.add(n);let s=.034;for(let a=0;a<4;a++){let o=new gs(s+.006,.0095,8,18,Math.PI*1.25);o.rotateX(Math.PI/2),o.rotateY(i*.35+(i>0?0:Math.PI*.75));let l=new pt(o,e);l.position.y=(a-1.5)*.02,l.scale.x=i,t.add(l)}let r=new pt(new Zn(.0105,.05,4,8),e);return r.rotation.z=Math.PI/2,r.position.set(-i*.012,.045,-.03),t.add(r),t}var qo=class{constructor(){this.root=new $t;let t=Ee("shirt",16052714,{roughness:.85}),e=Ee("trousers",2830138),n=Ee("skin",$u,{roughness:.6}),s=Ee("hair",3811868),r=Ee("kippa",2969482,{roughness:.9});for(let f of[-1,1]){let g=new pt(new Zn(.075,.7,4,10),e);g.position.set(f*.09,.5,0),g.castShadow=!0,this.root.add(g);let y=new pt(new Ke(.11,.07,.26),Ee("shoe",1710618));y.position.set(f*.09,.035,-.05),y.castShadow=!0,this.root.add(y)}this.hips=new $t,this.hips.position.y=.95,this.root.add(this.hips),this.torso=new $t,this.hips.add(this.torso);let a=new pt(new Zn(.165,.34,6,14),t);a.scale.z=.72,a.position.y=.24,a.castShadow=!0,this.torso.add(a);let o=new pt(new Zn(.15,.1,6,14),e);o.scale.z=.75,o.position.y=-.04,o.castShadow=!0,this.hips.add(o);let l=new pt(new Xe(.115,24,18),n);l.scale.set(.92,1.08,1),l.position.y=.72,l.castShadow=!0,this.torso.add(l);let c=new pt(new Xe(.122,24,12,0,Math.PI*2,0,Math.PI*.42),r);c.scale.set(.92,1.08,1),c.position.y=.73,this.torso.add(c);let h=new pt(new Xe(.085,20,14),s);h.scale.set(1,.72,.8),h.position.set(0,.655,-.06),this.torso.add(h);let d=new pt(new $n(.014,.03,8),n);d.rotation.x=-Math.PI/2,d.position.set(0,.722,-.122),this.torso.add(d);for(let f of[-1,1]){let g=new pt(new Xe(.012,8,8),Ee("eye",1776411));g.position.set(f*.04,.745,-.105),this.torso.add(g);let y=new pt(new Zn(.008,.06,3,6),s);y.position.set(f*.112,.7,-.03),this.torso.add(y)}this.shoulderR=new ue,this.shoulderR.position.set(.2,.47,0),this.torso.add(this.shoulderR),this.shoulderL=new ue,this.shoulderL.position.set(-.2,.47,0),this.torso.add(this.shoulderL),this.arms={};let u=Ee("sleeve",15855334,{roughness:.85});for(let f of["r","l"]){let g=new pt(new de(.048,.042,1,12),u),y=new pt(new de(.04,.034,1,12),u),m=new pt(new Xe(.044,12,10),u),p=new pt(new Xe(.052,12,10),u),v=new pt(new de(.037,.037,.03,12),n);[g,y,m,p,v].forEach(S=>{S.castShadow=!0,this.root.add(S)});let T=v_(f==="r"?1:-1);T.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),this.root.add(T);let M=new ue;this.root.add(M),this.arms[f]={upper:g,fore:y,elbow:m,shoulderBall:p,wristCuff:v,fist:T,anchor:M,target:new I(f==="r"?.28:-.28,.85,-.05),grip:.6,elbowOut:f==="r"?1:-1}}this.lean=0,this.A=.33,this.B=.31}setHand(t,e,n){let s=this.arms[t];s.target.copy(e),n!==void 0&&(s.grip=n)}update(){this.torso.rotation.x=-this.lean,this.root.updateMatrixWorld(!0);for(let t of["r","l"]){let e=this.arms[t],n=new I;(t==="r"?this.shoulderR:this.shoulderL).getWorldPosition(n);let s=e.target;e.fist.position.copy(s),e.fist.scale.set(e.grip,1,e.grip),e.anchor.position.copy(s);let r=new I(s.x+(t==="r"?.005:-.005),s.y-.03,s.z+.09*Math.max(.7,e.grip)),a=new I().subVectors(r,n),o=a.length(),l=this.A+this.B-.002;o>l&&(r.copy(n).addScaledVector(a.normalize(),l),o=l,a.subVectors(r,n));let c=a.clone().normalize(),h=(this.A*this.A-this.B*this.B+o*o)/(2*o),d=Math.sqrt(Math.max(this.A*this.A-h*h,0)),u=new I(e.elbowOut*.7,-1,.55);u.addScaledVector(c,-u.dot(c)).normalize();let f=new I().copy(n).addScaledVector(c,h).addScaledVector(u,d);Yu(e.upper,n,f),Yu(e.fore,f,r),e.elbow.position.copy(f),e.shoulderBall.position.copy(n),e.wristCuff.position.copy(r),e.wristCuff.quaternion.setFromUnitVectors(Zu,new I().subVectors(s,r).normalize()),e.fist.rotation.set(0,0,0)}}};var ye={east:{v:new I(0,0,-1),name:"\u05DE\u05D6\u05E8\u05D7",rel:"\u05E7\u05D3\u05D9\u05DE\u05D4"},south:{v:new I(1,0,0),name:"\u05D3\u05E8\u05D5\u05DD",rel:"\u05D9\u05DE\u05D9\u05DF"},west:{v:new I(0,0,1),name:"\u05DE\u05E2\u05E8\u05D1",rel:"\u05D0\u05D7\u05D5\u05E8"},north:{v:new I(-1,0,0),name:"\u05E6\u05E4\u05D5\u05DF",rel:"\u05E9\u05DE\u05D0\u05DC"},up:{v:new I(0,1,0),name:"\u05DE\u05E2\u05DC\u05D4",rel:"\u05DE\u05E2\u05DC\u05D4"},down:{v:new I(0,-1,0),name:"\u05DE\u05D8\u05D4",rel:"\u05DE\u05D8\u05D4"}},M_=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Lc={table:{pos:[0,1.7,1.4],target:[0,1.15,-.6]},tableClose:{pos:[0,1.58,1.1],target:[0,1.15,-.5]},tableSide:{pos:[1.15,1.35,-.1],target:[0,.98,-.55]},hero:{pos:[1.75,1.6,-2.15],target:[0,1.12,-.15]},heroClose:{pos:[1.05,1.5,-1.6],target:[.06,1.3,-.4]},handsFront:{pos:[.05,1.3,-1.25],target:[.05,1.2,-.4]},behind:{pos:[.55,1.75,2.3],target:[0,1.25,-.5]},compass:{pos:[.4,2.3,2.7],target:[0,.75,-.5]},front:{pos:[0,1.55,-2.5],target:[0,1.15,0]}};function Ju(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new ms(n);return s.colorSpace=Ge,s.anisotropy=4,s}function yi(i,{size:t=64,color:e="#fff",bg:n="rgba(20,30,50,.72)",scale:s=.0022,pad:r=22}={}){let a=document.createElement("canvas"),o=a.getContext("2d");o.font=`700 ${t}px Heebo, Arial, sans-serif`;let l=Math.ceil(o.measureText(i).width)+r*2,c=t+r;if(a.width=l,a.height=c,o.font=`700 ${t}px Heebo, Arial, sans-serif`,o.direction="rtl",o.textAlign="center",o.textBaseline="middle",n){o.fillStyle=n;let u=c/2;o.beginPath(),o.moveTo(u,0),o.lineTo(l-u,0),o.arc(l-u,u,u,-Math.PI/2,Math.PI/2),o.lineTo(u,c),o.arc(u,u,u,Math.PI/2,-Math.PI/2),o.fill()}o.fillStyle=e,o.fillText(i,l/2,c/2+2);let h=new ms(a);h.colorSpace=Ge;let d=new sr(new us({map:h,transparent:!0,depthTest:!1}));return d.scale.set(l*s,c*s,1),d.renderOrder=10,d}var $o=class{constructor(t){Yc(this,"POSE",{rest:{r:[.27,.85,-.02],l:[-.27,.85,-.02],lean:0,gripR:.7,gripL:.7},carry:{r:[.11,1.14,-.4],l:[.04,1.2,-.4],lean:.06,gripR:1.05,gripL:1.45}});this.canvas=t,this.renderer=new Ho({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ai,this.renderer.toneMapping=Mr,this.renderer.toneMappingExposure=1.05,this.scene=new tr,this.scene.background=new Dt(12180722),this.scene.fog=new Qs(13625077,9,30),this.camera=new De(45,1,.05,60),this.camera.position.set(...Lc.hero.pos),this.controls=new Xo(this.camera,t),this.controls.target.set(...Lc.hero.target),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=.5,this.controls.maxDistance=4.2,this.controls.maxPolarAngle=Math.PI*.53,this.controls.enablePan=!1,this.stage=new $t,this.scene.add(this.stage),this.tweens=[],this.pickables=[],this.updaters=[],this.shakeToken=0,this.raycaster=new xr,this.time=0,this.buildLights(),this.buildSukkah(),this.buildTable(),this.buildAvatar(),this.buildMarkers(),this.buildHighlight(),this.last=performance.now(),this.shakeOff=new I,this.rustle=0,this.handBase={r:new I(.27,.85,-.02),l:new I(-.27,.85,-.02),lean:0},this.followHands=!0,this.resize(),addEventListener("resize",()=>this.resize()),this.hoverCb=null,t.addEventListener("pointermove",e=>this.onMove(e)),t.addEventListener("pointerdown",e=>{this.downAt=[e.clientX,e.clientY]}),t.addEventListener("pointerup",e=>{if(!this.downAt)return;let n=Math.hypot(e.clientX-this.downAt[0],e.clientY-this.downAt[1]);this.downAt=null,n<6&&this.pickCb&&this.pickCb(this.pickAt(e.clientX,e.clientY),e)})}buildLights(){this.scene.add(new pr(14085375,10126432,.85));let t=new ys(16773328,2.3);t.position.set(2.5,7,3.5),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let e=t.shadow.camera;e.left=-3.6,e.right=3.6,e.top=3.6,e.bottom=-3.6,e.near=1,e.far=16,t.shadow.bias=-4e-4,t.shadow.normalBias=.02,this.scene.add(t),this.sun=t;let n=new ys(16774368,1.2);n.position.set(-1.5,3,-4),this.scene.add(n);let s=new _r(16769712,8,6,2);s.position.set(0,2.2,.6),this.scene.add(s)}buildSukkah(){let t=new $t;this.scene.add(t);let e=Ju(512,512,(A,D,k)=>{let H=Bn(4);for(let Y=0;Y<8;Y++){let X=42+H()*12;A.fillStyle=`hsl(30 ${38+H()*12}% ${X}%)`,A.fillRect(0,Y*k/8,D,k/8),A.strokeStyle="rgba(60,35,15,.5)",A.lineWidth=2,A.strokeRect(0,Y*k/8,D,k/8);for(let j=0;j<40;j++){A.strokeStyle=`rgba(80,50,20,${.05+H()*.1})`,A.beginPath();let et=Y*k/8+H()*(k/8);A.moveTo(H()*D,et),A.lineTo(H()*D,et+(H()-.5)*4),A.stroke()}}});e.wrapS=e.wrapT=Ti,e.repeat.set(2.5,2.5);let n=new pt(new Nn(4.8,5.6),new qe({map:e,roughness:.8}));n.rotation.x=-Math.PI/2,n.position.set(0,0,-.1),n.receiveShadow=!0,t.add(n);let s=new pt(new cr(40,48),new qe({color:8299100,roughness:1}));s.rotation.x=-Math.PI/2,s.position.y=-.02,s.receiveShadow=!0,t.add(s);let r=Ju(256,256,(A,D,k)=>{A.fillStyle="#f2ecdd",A.fillRect(0,0,D,k);let H=Bn(9);for(let Y=0;Y<D;Y+=3)A.fillStyle=`rgba(150,130,90,${.03+H()*.05})`,A.fillRect(Y,0,1+H()*2,k);for(let Y=0;Y<k;Y+=4)A.fillStyle="rgba(120,100,70,.03)",A.fillRect(0,Y,D,1)});r.wrapS=r.wrapT=Ti,r.repeat.set(4,2);let a=new qe({map:r,roughness:.95,side:Fe}),o=2.55,l=4.8,c=5.6,h=new pt(new Nn(l,o),a);h.position.set(0,o/2,-c/2-.1),h.receiveShadow=!0,t.add(h);for(let A of[-1,1]){let D=new pt(new Nn(c,o),a);D.rotation.y=Math.PI/2,D.position.set(A*l/2,o/2,-.1),D.receiveShadow=!0,t.add(D)}let d=An(9067051,{roughness:.85});for(let A of[-l/2,l/2])for(let D of[-c/2-.1,c/2-.1]){let k=new pt(new Ke(.09,o+.1,.09),d);k.position.set(A,o/2,D),k.castShadow=!0,t.add(k)}let u=new $t;this.roof=u,t.add(u);let f=new de(.02,.022,l+.3,6);f.rotateZ(Math.PI/2);let g=22,y=new fs(f,An(11569738,{roughness:.8}),g),m=new jt;for(let A=0;A<g;A++)m.makeTranslation(0,o+.03,-c/2+.05+A*(c-.1)/(g-1)-.1),y.setMatrixAt(A,m);y.castShadow=!0,u.add(y);let p=new Ke(.06,.06,c+.2);for(let A of[-l/2+.05,0,l/2-.05]){let D=new pt(p,d);D.position.set(A,o-.02,-.1),D.castShadow=!0,u.add(D)}let v=Cs(1.5,.34,{fold:.15,segs:10,shape:"blade"});v.rotateX(-Math.PI/2);let T=46,M=new fs(v,new qe({color:4880942,side:Fe,roughness:.8}),T),S=Bn(21),E=new We,P=new dn,x=new I,w=new I;for(let A=0;A<T;A++)w.set((S()-.5)*(l+.4),o+.07+S()*.05,(S()-.5)*(c+.2)-.1),P.set((S()-.5)*.1,S()*Math.PI*2,(S()-.5)*.1),E.setFromEuler(P),x.setScalar(.9+S()*.6),m.compose(w,E,x),M.setMatrixAt(A,m);M.castShadow=!0,u.add(M);let C=new $t;t.add(C);let U=[12597547,15105570,9323693,15844367,2600544],O=Bn(33);for(let A=0;A<16;A++){let D=(O()-.5)*3.8,k=-2.2+O()*3.6,H=.25+O()*.45,Y=new pt(new de(.002,.002,H,3),An(15658734));Y.position.set(D,o-H/2,k),C.add(Y);let X=new pt(new Xe(.05+O()*.03,12,10),An(U[A%5],{roughness:.5}));X.position.set(D,o-H-.04,k),X.castShadow=!0,C.add(X)}let z=Bn(77);for(let A=0;A<14;A++){let D=A/14*Math.PI*2+z(),k=8+z()*8,H=new $t,Y=new pt(new de(.15,.2,1.6,6),An(7031339));Y.position.y=.8;let X=new pt(new hr(1.3+z()*.7,0),An(5147195,{flatShading:!0}));X.position.y=2.4,H.add(Y,X),H.position.set(Math.cos(D)*k,0,Math.sin(D)*k),this.scene.add(H)}}buildTable(){let t=new $t,e=An(8081190,{roughness:.75}),n=new pt(new Ke(1.5,.04,.74),e);n.position.y=.8,n.castShadow=!0,n.receiveShadow=!0,t.add(n);for(let o of[-1,1])for(let l of[-1,1]){let c=new pt(new Ke(.06,.8,.06),e);c.position.set(o*.7,.4,l*.32),c.castShadow=!0,t.add(c)}let s=new pt(new Ke(1.56,.012,.8),An(16448250,{roughness:.95}));s.position.y=.828,s.receiveShadow=!0,t.add(s);let r=new pt(new Ke(1.56,.16,.012),An(16448250,{roughness:.95}));r.position.set(0,.75,.4),t.add(r);let a=r.clone();a.position.z=-.4,t.add(a),t.position.set(0,0,-.66),this.scene.add(t),this.table=t,this.tableTop=.834}buildAvatar(){this.avatar=new qo,this.scene.add(this.avatar.root),this.avatar.update()}buildMarkers(){this.markers=new $t,this.markers.visible=!1,this.scene.add(this.markers);let t=new Ue({color:16762941,transparent:!0,opacity:.9,depthTest:!1});this.arrow=new $t;let e=new pt(new de(.018,.018,.4,10),t);e.position.y=.2;let n=new pt(new $n(.055,.14,12),t);n.position.y=.47,this.arrow.add(e,n),this.arrow.renderOrder=9,this.arrow.traverse(c=>{c.renderOrder=9}),this.arrow.visible=!1,this.scene.add(this.arrow),this.dirLabels={};let s={east:[0,.05,-1.55],south:[1.55,.05,0],west:[0,.05,1.55],north:[-1.55,.05,0],up:[0,1.95,-.5],down:[0,.12,-.5]};for(let c of Object.keys(ye)){let h=["up","down"].includes(c)?ye[c].name:`${ye[c].name} \xB7 ${ye[c].rel}`,d=yi(h,{size:54,scale:.0015});d.position.set(...s[c]),this.markers.add(d),this.dirLabels[c]=d}let r=new pt(new dr(1.42,1.48,64),new Ue({color:16762941,transparent:!0,opacity:.6}));r.rotation.x=-Math.PI/2,r.position.y=.01,this.markers.add(r);let a=new pt(new Nn(2.9,.02),new Ue({color:16777215,transparent:!0,opacity:.35}));a.rotation.x=-Math.PI/2,a.position.y=.012;let o=a.clone();o.rotation.z=Math.PI/2,this.markers.add(a,o);let l=new pt(new $n(.09,.22,3),new Ue({color:16762941}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-1.3),l.rotation.z=0,this.markers.add(l)}buildHighlight(){this.hl=new yr(new fn,16762941),this.hl.material.depthTest=!1,this.hl.material.transparent=!0,this.hl.renderOrder=8,this.hl.visible=!1,this.scene.add(this.hl),this.hlTarget=null}resize(){let t=this.canvas.clientWidth||innerWidth,e=this.canvas.clientHeight||innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t/e<.8?60:45,this.applyView(t,e)}setViewShift(t,e){this.shift=[t,e],this.resize()}applyView(t,e){let[n,s]=this.shift||[0,0];n||s?this.camera.setViewOffset(t,e,n,s,t,e):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}setMarkers(t){this.markers.visible=t}setAvatarVisible(t){this.avatar.root.visible=t}highlight(t){this.hlTarget=t,this.hl.visible=!!t}tween(t,e,n=M_){return new Promise(s=>{this.tweens.push({t:0,dur:Math.max(t,.001),fn:e,ease:n,res:s})})}setCamera(t,e=1.1){let n=typeof t=="string"?Lc[t]:t,s=this.camera.position.clone(),r=this.controls.target.clone(),a=new I(...n.pos),o=new I(...n.target);return e<=0?(this.camera.position.copy(a),this.controls.target.copy(o),Promise.resolve()):(this.camTween=!0,this.tween(e,l=>{this.camera.position.lerpVectors(s,a,l),this.controls.target.lerpVectors(r,o,l)}).then(()=>{this.camTween=!1}))}clearStage(){for(this.detachItems();this.stage.children.length;)this.stage.children.pop().traverse?.(e=>{e.geometry?.dispose?.()});this.pickables=[],this.updaters=[],this.pickCb=null,this.hoverCb=null,this.highlight(null)}detachItems(){for(let t of["r","l"]){let e=this.avatar.arms[t].anchor;[...e.children].forEach(n=>e.remove(n))}this.held=null}addPickable(t){this.pickables.push(t)}pickAt(t,e){let n=this.canvas.getBoundingClientRect(),s=new gt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=this.raycaster.intersectObjects(this.pickables,!0),a=o=>{let l=o;for(;l;){if(l.userData&&l.userData.pick)return l;l=l.parent}return null};for(let o of r){let l=a(o.object);if(!l)continue;let h=r.find(d=>a(d.object)===l&&["pitam","ukatz"].includes(d.object.userData.part))||o;return{root:l,pick:l.userData.pick,part:h.object.userData.part,point:h.point}}return null}onMove(t){if(!this.pickables.length){this.canvas.style.cursor="";return}let e=this.pickAt(t.clientX,t.clientY);this.canvas.style.cursor=e?"pointer":"",this.hoverCb&&this.hoverCb(e)}attach(t,e){this.avatar.arms[e==="r"?"r":"l"].anchor.attach(t)}settleInHand(t,e,n=.5){let s=t.position.clone(),r=t.quaternion.clone(),a=e==="r"?new I(0,-.075,0):new I(0,0,0),o=new We;return e==="l"&&o.setFromEuler(new dn(0,0,this.etrogInverted?Math.PI:0)),this.tween(n,l=>{t.position.lerpVectors(s,a,l),t.quaternion.slerpQuaternions(r,o,l)})}setEtrogInverted(t){this.etrogInverted=t}async flipEtrog(t,e=.7){let n=this.held?.etrog;if(!n)return;let s=n.rotation.z,r=t?0:Math.PI;await this.tween(e,a=>{n.rotation.z=s+(r-s)*a,n.rotation.x=Math.sin(a*Math.PI)*.6}),n.rotation.x=0,this.etrogInverted=!t}async handsTo({r:t,l:e,lean:n,gripR:s,gripL:r},a=.9){let o=this.handBase,l=o.r.clone(),c=o.l.clone(),h=o.lean,d=this.avatar.arms,u=d.r.grip,f=d.l.grip;await this.tween(a,g=>{t&&o.r.lerpVectors(l,new I(...t),g),e&&o.l.lerpVectors(c,new I(...e),g),n!==void 0&&(o.lean=h+(n-h)*g),s!==void 0&&(d.r.grip=u+(s-u)*g),r!==void 0&&(d.l.grip=f+(r-f)*g)})}shake(t,{reps:e=3,dur:n=1.6,amp:s=.3,rustle:r=!1}={}){let a=ye[t].v.clone(),l=(s??.3)*({east:.3,south:.3,west:.3,north:.3,up:.3,down:.3}[t]/.3);this.setArrow(t);let c=++this.shakeToken;return this.tween(n,h=>{if(c!==this.shakeToken)return;let d=Math.pow(Math.sin(Math.PI*e*h),2);t==="west"?this.shakeOff.set(.2,.12,.5).multiplyScalar(d):this.shakeOff.copy(a).multiplyScalar(l*d),this.rustle=r?d:0},h=>h).then(()=>{c===this.shakeToken&&(this.shakeOff.set(0,0,0),this.rustle=0,this.arrow.visible=!1)})}async shakeSequence(t,e={}){this.stopShake=!1;for(let n of t){if(this.stopShake)break;await this.shake(n,e)}}setArrow(t){let e=ye[t].v;this.arrow.visible=this.markers.visible;let n=new I(.06,1.2,-.4);this.arrow.position.copy(n).addScaledVector(e,.1),this.arrow.quaternion.setFromUnitVectors(new I(0,1,0),e);for(let s of Object.keys(this.dirLabels))this.dirLabels[s].material.opacity=s===t?1:.45}start(){let t=()=>{requestAnimationFrame(t);let e=performance.now(),n=Math.min((e-this.last)/1e3,.05);this.last=e,this.tick(n)};t()}tick(t){this.update(t),this.render()}ff(t,e=.05){for(let n=0;n<t;n+=e)this.update(e);this.render()}render(){this.renderer.render(this.scene,this.camera)}update(t){this.time+=t;for(let n=this.tweens.length-1;n>=0;n--){let s=this.tweens[n];s.t+=t;let r=Math.min(s.t/s.dur,1);s.fn(s.ease(r)),r>=1&&(this.tweens.splice(n,1),s.res())}for(let n of this.updaters)n(t,this.time);let e=this.avatar;if(e.root.visible){e.lean=this.handBase.lean,e.setHand("r",this.handBase.r.clone().add(this.shakeOff)),e.setHand("l",this.handBase.l.clone().add(this.shakeOff)),e.update();let n=this.held?.bundle;n&&(n.rotation.z=Math.sin(this.time*70)*.05*this.rustle,n.rotation.x=Math.cos(this.time*61)*.03*this.rustle)}this.hlTarget&&(this.hl.box.setFromObject(this.hlTarget),this.hl.box.expandByScalar(.012),this.hl.material.opacity=.55+.45*Math.sin(this.time*6)),this.roof.visible=this.camera.position.y<2.4,this.controls.update()}};var Ls=null,Ur=!1;function Ku(){try{Ls??(Ls=new(window.AudioContext||window.webkitAudioContext)),Ls.state==="suspended"&&Ls.resume()}catch{Ls=null}return Ls}function Ds(i,t=.15,e="sine",n=.12,s=0){let r=Ku();if(!r||Ur)return;let a=r.currentTime+s,o=r.createOscillator(),l=r.createGain();o.type=e,o.frequency.setValueAtTime(i,a),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(r.destination),o.start(a),o.stop(a+t+.02)}function b_(i=.25,t=.08){let e=Ku();if(!e||Ur)return;let n=Math.floor(e.sampleRate*i),s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let c=0;c<n;c++)r[c]=(Math.random()*2-1)*(1-c/n);let a=e.createBufferSource();a.buffer=s;let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=3200,o.Q.value=.7;let l=e.createGain();l.gain.value=t,a.connect(o).connect(l).connect(e.destination),a.start()}var qt={ok(){Ds(660,.12,"triangle",.12),Ds(880,.18,"triangle",.12,.09)},bad(){Ds(220,.2,"sawtooth",.07),Ds(170,.25,"sawtooth",.07,.1)},click(){Ds(520,.05,"square",.04)},win(){[523,659,784,1046].forEach((i,t)=>Ds(i,.25,"triangle",.12,t*.12))},rustle(){b_(.28,.07)},setMuted(i){Ur=i},isMuted(){return Ur}};function ju(i){try{if(Ur||!("speechSynthesis"in window))return!1;let t=new SpeechSynthesisUtterance(i);return t.lang="he-IL",t.rate=.85,speechSynthesis.cancel(),speechSynthesis.speak(t),!0}catch{return!1}}function Dc(){try{speechSynthesis.cancel()}catch{}}var Fr={ashkenaz:{key:"ashkenaz",name:"\u05D0\u05E9\u05DB\u05E0\u05D6",arrangement:"shulchan",order:["east","south","west","north","up","down"],rustle:!0,why:["\u05E1\u05D3\u05E8 \u05D4\u05E8\u05D5\u05D7\u05D5\u05EA \u05D4\u05E4\u05E9\u05D5\u05D8 \u05E9\u05DC \u05E1\u05D9\u05D1\u05D5\u05D1 \u05E1\u05D1\u05D9\u05D1 \u05D4\u05E2\u05D5\u05DC\u05DD: \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D1\u05E7\u05D3\u05D9\u05DE\u05D4 (\u05DE\u05D6\u05E8\u05D7), \u05E4\u05D5\u05E0\u05D9\u05DD \u05D9\u05DE\u05D9\u05E0\u05D4 (\u05D3\u05E8\u05D5\u05DD), \u05D0\u05D7\u05D5\u05E8\u05D4 (\u05DE\u05E2\u05E8\u05D1) \u05D5\u05E9\u05DE\u05D0\u05DC\u05D4 (\u05E6\u05E4\u05D5\u05DF) \u2014 \u05D5\u05D0\u05D6 \u05DE\u05E2\u05DC\u05D4 \u05D5\u05DE\u05D8\u05D4.",'\u05DB\u05DA \u05DB\u05EA\u05D1 \u05DE\u05E8\u05DF \u05D4\u05E9\u05D5\u05DC\u05D7\u05DF \u05E2\u05E8\u05D5\u05DA (\u05D0\u05D5"\u05D7 \u05EA\u05E8\u05E0\u05D0), \u05D5\u05DB\u05DA \u05E0\u05D5\u05D4\u05D2\u05D9\u05DD \u05D1\u05D0\u05E9\u05DB\u05E0\u05D6. \u05D1\u05E7\u05D4\u05D9\u05DC\u05D5\u05EA \u05D0\u05E9\u05DB\u05E0\u05D6 \u05E0\u05D5\u05D4\u05D2\u05D9\u05DD \u05D2\u05DD "\u05DC\u05DB\u05E1\u05DB\u05E1" \u2014 \u05DC\u05D4\u05E9\u05DE\u05D9\u05E2 \u05E8\u05E9\u05E8\u05D5\u05E9 \u05E7\u05DC \u05D1\u05E2\u05DC\u05D9 \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05E9\u05E2\u05EA \u05D4\u05E0\u05E2\u05E0\u05D5\u05E2.'],hallelSummary:`\u05D4\u05E7\u05D4\u05DC \u05DE\u05E0\u05E2\u05E0\u05E2 \u05D1\u05D4\u05DC\u05DC \u05EA\u05E9\u05E2 \u05E4\u05E2\u05DE\u05D9\u05DD: \u05D1\u05DB\u05DC "\u05D4\u05D5\u05D3\u05D5 \u05DC\u05D4' \u05DB\u05D9 \u05D8\u05D5\u05D1" (\u05D1\u05E4\u05EA\u05D9\u05D7\u05D4 \u05D5\u05D2\u05DD \u05D1\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05D4\u05E7\u05D4\u05DC, \u05D5\u05D1\u05E1\u05D5\u05E3 \u05D4\u05D4\u05DC\u05DC) \u05D5\u05D1\u05DB\u05DC "\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0".`,tag:"\u05E7\u05D3\u05D9\u05DE\u05D4 \xB7 \u05D9\u05DE\u05D9\u05DF \xB7 \u05D0\u05D7\u05D5\u05E8 \xB7 \u05E9\u05DE\u05D0\u05DC \xB7 \u05DE\u05E2\u05DC\u05D4 \xB7 \u05DE\u05D8\u05D4"},sepharad:{key:"sepharad",name:'\u05E1\u05E4\u05E8\u05D3 (\u05DE\u05E0\u05D4\u05D2 \u05D4\u05D0\u05E8"\u05D9)',arrangement:"shulchan",order:["south","north","east","up","down","west"],rustle:!1,why:['\u05E2\u05DC \u05E4\u05D9 \u05D4\u05D0\u05E8"\u05D9 \u05D4\u05E7\u05D3\u05D5\u05E9 \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DE\u05D9\u05DE\u05D9\u05DF \u05D5\u05D0\u05D7\u05E8 \u05DB\u05DA \u05DE\u05E9\u05DE\u05D0\u05DC, \u05D5\u05D6\u05D4 \u05D4\u05E1\u05D3\u05E8 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D0\u05E6\u05DC \u05E8\u05D5\u05D1 \u05E2\u05D3\u05D5\u05EA \u05E1\u05E4\u05E8\u05D3 \u05D5\u05D4\u05D7\u05E1\u05D9\u05D3\u05D9\u05DD.',"\u05D1\u05E7\u05D1\u05DC\u05D4, \u05E9\u05E9\u05EA \u05D4\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \u05DB\u05E0\u05D2\u05D3 \u05E9\u05E9\u05EA \u05D4\u05DE\u05D9\u05D3\u05D5\u05EA: \u05D3\u05E8\u05D5\u05DD \u2014 \u05D7\u05E1\u05D3, \u05E6\u05E4\u05D5\u05DF \u2014 \u05D2\u05D1\u05D5\u05E8\u05D4, \u05DE\u05D6\u05E8\u05D7 \u2014 \u05EA\u05E4\u05D0\u05E8\u05EA, \u05DE\u05E2\u05DC\u05D4 \u2014 \u05E0\u05E6\u05D7, \u05DE\u05D8\u05D4 \u2014 \u05D4\u05D5\u05D3, \u05DE\u05E2\u05E8\u05D1 \u2014 \u05D9\u05E1\u05D5\u05D3."],hallelSummary:`\u05D7\u05DE\u05D9\u05E9\u05D4 \u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD \u05D1\u05E1\u05DA \u05D4\u05DB\u05D5\u05DC: \u05D0\u05D7\u05D3 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4, \u05D0\u05D7\u05D3 \u05D1"\u05D4\u05D5\u05D3\u05D5 \u05DC\u05D4'" \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF, \u05E9\u05E0\u05D9\u05D9\u05DD \u05D1"\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0" (\u05D1\u05E9\u05EA\u05D9 \u05D4\u05E4\u05E2\u05DE\u05D9\u05DD \u05E9\u05E0\u05D0\u05DE\u05E8), \u05D5\u05D0\u05D7\u05D3 \u05D1"\u05D4\u05D5\u05D3\u05D5 \u05DC\u05D4'" \u05E9\u05D1\u05E1\u05D5\u05E3 \u05D4\u05D4\u05DC\u05DC.`,tag:"\u05D9\u05DE\u05D9\u05DF \xB7 \u05E9\u05DE\u05D0\u05DC \xB7 \u05E7\u05D3\u05D9\u05DE\u05D4 \xB7 \u05DE\u05E2\u05DC\u05D4 \xB7 \u05DE\u05D8\u05D4 \xB7 \u05D0\u05D7\u05D5\u05E8"},chabad:{key:"chabad",name:'\u05D7\u05D1"\u05D3',arrangement:"ari",order:["south","north","east","up","down","west"],rustle:!1,why:['\u05D7\u05D1"\u05D3 \u05E0\u05D5\u05D4\u05D2\u05D9\u05DD \u05DB\u05D3\u05E2\u05EA \u05D4\u05D0\u05E8"\u05D9: \u05D3\u05E8\u05D5\u05DD, \u05E6\u05E4\u05D5\u05DF, \u05DE\u05D6\u05E8\u05D7, \u05DE\u05E2\u05DC\u05D4, \u05DE\u05D8\u05D4, \u05DE\u05E2\u05E8\u05D1 \u2014 \u05DB\u05E9\u05D1\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05E9\u05DC\u05D5\u05E9 \u05E4\u05E2\u05DE\u05D9\u05DD.','\u05D1\u05D7\u05D1"\u05D3 \u05D2\u05DD \u05D0\u05D5\u05D2\u05D3\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05D7\u05E8\u05EA: \u05E2\u05E8\u05D1\u05D4 \u05DE\u05D9\u05DE\u05D9\u05DF \u05D5\u05DE\u05E9\u05DE\u05D0\u05DC \u05DC\u05E9\u05D3\u05E8\u05D4, \u05D5\u05E9\u05DC\u05E9\u05EA \u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05DE\u05E2\u05DC\u05D9\u05D4\u05DF \u2014 \u05D0\u05D7\u05D3 \u05DE\u05D9\u05DE\u05D9\u05DF, \u05D0\u05D7\u05D3 \u05DE\u05E9\u05DE\u05D0\u05DC \u05D5\u05D0\u05D7\u05D3 \u05D1\u05D0\u05DE\u05E6\u05E2 \u05E2\u05DC \u05D2\u05D1\u05D9 \u05D4\u05E9\u05D3\u05E8\u05D4.'],hallelSummary:`\u05D1\u05D4\u05DC\u05DC \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05D0\u05E8\u05D1\u05E2 \u05E4\u05E2\u05DE\u05D9\u05DD (\u05D1\u05E0\u05D5\u05E1\u05E3 \u05DC\u05E0\u05E2\u05E0\u05D5\u05E2 \u05E9\u05D0\u05D7\u05E8\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4): "\u05D4\u05D5\u05D3\u05D5" \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF, "\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0" \u05D5\u05E9\u05D5\u05D1 "\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0", \u05D5"\u05D4\u05D5\u05D3\u05D5" \u05E9\u05D1\u05E1\u05D5\u05E3. \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05DC\u05D5\u05E9 \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA.`,tag:"\u05D9\u05DE\u05D9\u05DF \xB7 \u05E9\u05DE\u05D0\u05DC \xB7 \u05E7\u05D3\u05D9\u05DE\u05D4 \xB7 \u05DE\u05E2\u05DC\u05D4 \xB7 \u05DE\u05D8\u05D4 \xB7 \u05D0\u05D7\u05D5\u05E8"}},Kn={etrog:{name:"\u05D0\u05EA\u05E8\u05D5\u05D2",verse:"\u05E4\u05B0\u05BC\u05E8\u05B4\u05D9 \u05E2\u05B5\u05E5 \u05D4\u05B8\u05D3\u05B8\u05E8",color:"#e5cf45",facts:['"\u05E4\u05E8\u05D9 \u05E2\u05E5 \u05D4\u05D3\u05E8" \u2014 \u05E4\u05E8\u05D9 \u05D4\u05E2\u05E5 \u05E9\u05D4\u05D5\u05D0 "\u05D4\u05D3\u05D5\u05E8": \u05E8\u05D9\u05D7\u05D5 \u05D5\u05D8\u05E2\u05DE\u05D5 \u05E0\u05E2\u05D9\u05DE\u05D9\u05DD \u05D5\u05D4\u05D5\u05D0 \u05E0\u05E9\u05D0\u05E8 \u05E2\u05DC \u05D4\u05D0\u05D9\u05DC\u05DF \u05DE\u05E9\u05E0\u05D4 \u05DC\u05E9\u05E0\u05D4.',"\u05D1\u05E8\u05D0\u05E9\u05D5 \u05D4<b>\u05E4\u05D9\u05D8\u05DD</b> (\u05D4\u05D1\u05DC\u05D9\u05D8\u05D4 \u05D4\u05E7\u05D8\u05E0\u05D4 \u05E9\u05DE\u05DE\u05E0\u05D4 \u05E0\u05E4\u05E8\u05D7 \u05D4\u05E4\u05E8\u05D7) \u05D5\u05D1\u05E7\u05E6\u05D4\u05D5 \u05D4\u05EA\u05D7\u05EA\u05D5\u05DF \u05D4<b>\u05E2\u05D5\u05E7\u05E5</b>, \u05E9\u05D1\u05D5 \u05D4\u05D9\u05D4 \u05DE\u05D7\u05D5\u05D1\u05E8 \u05DC\u05E2\u05E5.","\u05E6\u05E8\u05D9\u05DA \u05D0\u05EA\u05E8\u05D5\u05D2 \u05E9\u05DC\u05DD, \u05E0\u05E7\u05D9 \u05D5\u05DC\u05D0 \u05E4\u05D2\u05D5\u05DD. \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D0\u05D5\u05D7\u05D6\u05D9\u05DD \u05DB\u05D3\u05E8\u05DA \u05D2\u05D9\u05D3\u05D5\u05DC\u05D5: \u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4, \u05E2\u05D5\u05E7\u05E5 \u05DC\u05DE\u05D8\u05D4."],taste:!0,smell:!0,body:"\u05D4\u05DC\u05D1"},lulav:{name:"\u05DC\u05D5\u05DC\u05D1",verse:"\u05DB\u05B7\u05BC\u05E4\u05B9\u05BC\u05EA \u05EA\u05B0\u05BC\u05DE\u05B8\u05E8\u05B4\u05D9\u05DD",color:"#4b9a3f",facts:['\u05E2\u05E0\u05E3 \u05E9\u05DC \u05E2\u05E5 \u05EA\u05DE\u05E8 \u05E9\u05E2\u05D3\u05D9\u05D9\u05DF <b>\u05E1\u05D2\u05D5\u05E8</b> \u2014 \u05E2\u05DC\u05D9\u05D5 \u05E6\u05DE\u05D5\u05D3\u05D9\u05DD \u05D6\u05D4 \u05DC\u05D6\u05D4 \u05DC"\u05E9\u05D3\u05E8\u05D4" \u05E9\u05D1\u05D0\u05DE\u05E6\u05E2\u05D5. \u05D0\u05DD \u05D4\u05E2\u05DC\u05D9\u05DD \u05E0\u05E4\u05E8\u05D3\u05D5 \u05D5\u05D4\u05EA\u05E4\u05D6\u05E8\u05D5 \u2014 \u05D4\u05DC\u05D5\u05DC\u05D1 \u05E4\u05E1\u05D5\u05DC.',"\u05D4<b>\u05E9\u05D3\u05E8\u05D4</b> \u05D4\u05D9\u05D0 \u05D4\u05D2\u05D1 \u05D4\u05E7\u05E9\u05D4 \u05D5\u05D4\u05E6\u05D4\u05D1\u05D4\u05D1 \u05E9\u05DC \u05D4\u05DC\u05D5\u05DC\u05D1. \u05D0\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D0\u05D5\u05D7\u05D6\u05D9\u05DD \u05DB\u05E9\u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05D0\u05DC \u05D4\u05DE\u05D7\u05D6\u05D9\u05E7.",'\u05D1\u05E8\u05D0\u05E9\u05D5 \u05D4<b>\u05EA\u05D9\u05D5\u05DE\u05EA</b> \u2014 \u05E9\u05E0\u05D9 \u05D4\u05E2\u05DC\u05D9\u05DD \u05D4\u05D0\u05DE\u05E6\u05E2\u05D9\u05D9\u05DD \u05D4\u05DE\u05D7\u05D5\u05D1\u05E8\u05D9\u05DD. \u05D0\u05D5\u05E8\u05DA \u05D4\u05DC\u05D5\u05DC\u05D1 \u05DC\u05E4\u05D7\u05D5\u05EA \u05D0\u05E8\u05D1\u05E2\u05D4 \u05D8\u05E4\u05D7\u05D9\u05DD (\u05D1\u05E2\u05E8\u05DA 32 \u05E1"\u05DE \u05D5\u05DE\u05E2\u05DC\u05D4).'],taste:!0,smell:!1,body:"\u05D4\u05E9\u05D3\u05E8\u05D4"},hadas:{name:"\u05D4\u05D3\u05E1",verse:"\u05D5\u05B7\u05E2\u05B2\u05E0\u05B7\u05E3 \u05E2\u05B5\u05E5 \u05E2\u05B8\u05D1\u05B9\u05EA",color:"#1f6b34",facts:['"\u05E2\u05E0\u05E3 \u05E2\u05E5 \u05E2\u05D1\u05D5\u05EA" \u2014 \u05D4\u05D3\u05E1 <b>\u05DE\u05E1\u05D5\u05DC\u05E1\u05DC</b>: \u05D1\u05DB\u05DC "\u05E7\u05D5\u05DE\u05D4" \u05D1\u05E2\u05E0\u05E3 \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD <b>\u05E9\u05DC\u05D5\u05E9\u05D4 \u05E2\u05DC\u05D9\u05DD</b> \u05D1\u05D0\u05D5\u05EA\u05D5 \u05D2\u05D5\u05D1\u05D4, \u05D5\u05E2\u05E0\u05E4\u05D9\u05D5 \u05DE\u05DB\u05E1\u05D9\u05DD \u05D0\u05EA \u05E2\u05E6\u05D9\u05D5.','\u05D4\u05D3\u05E1 \u05E9\u05D1\u05D5 \u05D4\u05E2\u05DC\u05D9\u05DD \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05D1\u05D6\u05D5\u05D2\u05D5\u05EA, \u05D5\u05DC\u05D0 \u05D1\u05E9\u05DC\u05E9\u05D5\u05EA \u2014 \u05E4\u05E1\u05D5\u05DC (\u05D4\u05D3\u05E1 "\u05E9\u05D5\u05D8\u05D4").','\u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E9\u05DC\u05D5\u05E9\u05D4 \u05E2\u05E0\u05E4\u05D9\u05DD, \u05DB\u05DC \u05D0\u05D7\u05D3 \u05D1\u05D0\u05D5\u05E8\u05DA \u05E9\u05DC \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D8\u05E4\u05D7\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA (\u05D1\u05E2\u05E8\u05DA 24\u201329 \u05E1"\u05DE). \u05DC\u05D6\u05D4 \u05E8\u05D9\u05D7 \u05E0\u05E4\u05DC\u05D0 \u05D5\u05D0\u05D9\u05DF \u05DC\u05D5 \u05D8\u05E2\u05DD.'],taste:!1,smell:!0,body:"\u05D4\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD"},arava:{name:"\u05E2\u05E8\u05D1\u05D4",verse:"\u05D5\u05B0\u05E2\u05B7\u05E8\u05B0\u05D1\u05B5\u05D9 \u05E0\u05B8\u05D7\u05B7\u05DC",color:"#86ad4e",facts:['"\u05E2\u05E8\u05D1\u05D9 \u05E0\u05D7\u05DC" \u2014 \u05E2\u05DC\u05D9\u05DD <b>\u05D0\u05E8\u05D5\u05DB\u05D9\u05DD \u05D5\u05E6\u05E8\u05D9\u05DD</b>, \u05E9\u05E4\u05EA\u05DD <b>\u05D7\u05DC\u05E7\u05D4</b> (\u05DC\u05D0 \u05DE\u05E9\u05D5\u05E0\u05E0\u05EA), \u05D5\u05E7\u05E0\u05D4 \u05D4\u05E2\u05E0\u05E3 \u05D0\u05D3\u05DE\u05D3\u05DD.',"\u05E2\u05E8\u05D1\u05D4 \u05E9\u05D4\u05E2\u05DC\u05D9\u05DD \u05E9\u05DC\u05D4 \u05DE\u05E9\u05D5\u05E0\u05E0\u05D9\u05DD \u05D5\u05E8\u05D7\u05D1\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8 \u2014 \u05D6\u05D5 \u05E6\u05E4\u05E6\u05E4\u05D4 \u05D0\u05D5 \u05DE\u05D9\u05DF \u05D0\u05D7\u05E8, \u05D5\u05E4\u05E1\u05D5\u05DC\u05D4.","\u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E9\u05EA\u05D9 \u05E2\u05E0\u05E4\u05D9 \u05E2\u05E8\u05D1\u05D4, \u05DB\u05DC \u05D0\u05D7\u05D3 \u05DC\u05E4\u05D7\u05D5\u05EA \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D8\u05E4\u05D7\u05D9\u05DD. \u05D0\u05D9\u05DF \u05DC\u05D4 \u05DC\u05D0 \u05D8\u05E2\u05DD \u05D5\u05DC\u05D0 \u05E8\u05D9\u05D7."],taste:!1,smell:!1,body:"\u05D4\u05E9\u05E4\u05EA\u05D9\u05D9\u05DD"}},Jo={netilat:["\u05D1\u05B8\u05BC\u05E8\u05D5\u05BC\u05DA\u05B0","\u05D0\u05B7\u05EA\u05B8\u05BC\u05D4","\u05D4'","\u05D0\u05B1\u05DC\u05B9\u05D4\u05B5\u05D9\u05E0\u05D5\u05BC","\u05DE\u05B6\u05DC\u05B6\u05DA\u05B0","\u05D4\u05B8\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD,","\u05D0\u05B2\u05E9\u05B6\u05C1\u05E8","\u05E7\u05B4\u05D3\u05B0\u05BC\u05E9\u05B8\u05C1\u05E0\u05D5\u05BC","\u05D1\u05B0\u05BC\u05DE\u05B4\u05E6\u05B0\u05D5\u05B9\u05EA\u05B8\u05D9\u05D5","\u05D5\u05B0\u05E6\u05B4\u05D5\u05B8\u05BC\u05E0\u05D5\u05BC","\u05E2\u05B7\u05DC","\u05E0\u05B0\u05D8\u05B4\u05D9\u05DC\u05B7\u05EA","\u05DC\u05D5\u05BC\u05DC\u05B8\u05D1."],shehecheyanu:["\u05D1\u05B8\u05BC\u05E8\u05D5\u05BC\u05DA\u05B0","\u05D0\u05B7\u05EA\u05B8\u05BC\u05D4","\u05D4'","\u05D0\u05B1\u05DC\u05B9\u05D4\u05B5\u05D9\u05E0\u05D5\u05BC","\u05DE\u05B6\u05DC\u05B6\u05DA\u05B0","\u05D4\u05B8\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD,","\u05E9\u05B6\u05C1\u05D4\u05B6\u05D7\u05B1\u05D9\u05B8\u05E0\u05D5\u05BC","\u05D5\u05B0\u05E7\u05B4\u05D9\u05B0\u05BC\u05DE\u05B8\u05E0\u05D5\u05BC","\u05D5\u05B0\u05D4\u05B4\u05D2\u05B4\u05BC\u05D9\u05E2\u05B8\u05E0\u05D5\u05BC","\u05DC\u05B7\u05D6\u05B0\u05BC\u05DE\u05B7\u05DF","\u05D4\u05B7\u05D6\u05B6\u05BC\u05D4."]},S_=[{w:"\u05D4\u05D5\u05B9\u05D3\u05D5\u05BC",dir:0},{w:"\u05DC\u05B7\u05D4'",dir:null},{w:"\u05DB\u05B4\u05BC\u05D9",dir:1},{w:"\u05D8\u05D5\u05B9\u05D1,",dir:2},{w:"\u05DB\u05B4\u05BC\u05D9",dir:3},{w:"\u05DC\u05B0\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD",dir:4},{w:"\u05D7\u05B7\u05E1\u05B0\u05D3\u05BC\u05D5\u05B9.",dir:5}],E_=[{w:"\u05D0\u05B8\u05E0\u05B8\u05BC\u05D0",dir:[0,1]},{w:"\u05D4'",dir:null},{w:"\u05D4\u05D5\u05B9\u05E9\u05B4\u05C1\u05D9\u05E2\u05B8\u05D4",dir:[2,3]},{w:"\u05E0\u05B8\u05BC\u05D0.",dir:[4,5]}],Qu=i=>i.split(" ").map(t=>({w:t,dir:null}));function td(i){let t=[],e=(r,a)=>({words:S_,star:r,kind:"hodu",tag:a}),n=(r,a)=>({words:E_,star:r,kind:"ana",tag:a}),s=(r,a)=>({words:Qu(r),star:!1,kind:"plain",tag:a});return i==="ashkenaz"?(t.push(e(!0,'\u05E9"\u05E5')),t.push(e(!0,"\u05E7\u05D4\u05DC")),t.push(s("\u05D9\u05B9\u05D0\u05DE\u05B7\u05E8 \u05E0\u05B8\u05D0 \u05D9\u05B4\u05E9\u05B0\u05C2\u05E8\u05B8\u05D0\u05B5\u05DC, \u05DB\u05B4\u05BC\u05D9 \u05DC\u05B0\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD \u05D7\u05B7\u05E1\u05B0\u05D3\u05BC\u05D5\u05B9.",'\u05E9"\u05E5')),t.push(e(!0,"\u05E7\u05D4\u05DC")),t.push(s("\u05D9\u05B9\u05D0\u05DE\u05B0\u05E8\u05D5\u05BC \u05E0\u05B8\u05D0 \u05D1\u05B5\u05D9\u05EA \u05D0\u05B7\u05D4\u05B2\u05E8\u05B9\u05DF, \u05DB\u05B4\u05BC\u05D9 \u05DC\u05B0\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD \u05D7\u05B7\u05E1\u05B0\u05D3\u05BC\u05D5\u05B9.",'\u05E9"\u05E5')),t.push(e(!0,"\u05E7\u05D4\u05DC")),t.push(s("\u05D9\u05B9\u05D0\u05DE\u05B0\u05E8\u05D5\u05BC \u05E0\u05B8\u05D0 \u05D9\u05B4\u05E8\u05B0\u05D0\u05B5\u05D9 \u05D4', \u05DB\u05B4\u05BC\u05D9 \u05DC\u05B0\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD \u05D7\u05B7\u05E1\u05B0\u05D3\u05BC\u05D5\u05B9.",'\u05E9"\u05E5')),t.push(e(!0,"\u05E7\u05D4\u05DC"))):(t.push(e(!0)),t.push(s("\u05D9\u05B9\u05D0\u05DE\u05B7\u05E8 \u05E0\u05B8\u05D0 \u05D9\u05B4\u05E9\u05B0\u05C2\u05E8\u05B8\u05D0\u05B5\u05DC, \u05DB\u05B4\u05BC\u05D9 \u05DC\u05B0\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD \u05D7\u05B7\u05E1\u05B0\u05D3\u05BC\u05D5\u05B9.")),t.push(s("\u05D9\u05B9\u05D0\u05DE\u05B0\u05E8\u05D5\u05BC \u05E0\u05B8\u05D0 \u05D1\u05B5\u05D9\u05EA \u05D0\u05B7\u05D4\u05B2\u05E8\u05B9\u05DF, \u05DB\u05B4\u05BC\u05D9 \u05DC\u05B0\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD \u05D7\u05B7\u05E1\u05B0\u05D3\u05BC\u05D5\u05B9.")),t.push(s("\u05D9\u05B9\u05D0\u05DE\u05B0\u05E8\u05D5\u05BC \u05E0\u05B8\u05D0 \u05D9\u05B4\u05E8\u05B0\u05D0\u05B5\u05D9 \u05D4', \u05DB\u05B4\u05BC\u05D9 \u05DC\u05B0\u05E2\u05D5\u05B9\u05DC\u05B8\u05DD \u05D7\u05B7\u05E1\u05B0\u05D3\u05BC\u05D5\u05B9."))),t.push({words:Qu("\xB7 \xB7 \xB7  (\u05D4\u05DE\u05E9\u05DA \u05D4\u05D4\u05DC\u05DC)  \xB7 \xB7 \xB7"),star:!1,kind:"gap"}),t.push(s("\u05D6\u05B6\u05D4 \u05D4\u05B7\u05D9\u05BC\u05D5\u05B9\u05DD \u05E2\u05B8\u05E9\u05B8\u05C2\u05D4 \u05D4', \u05E0\u05B8\u05D2\u05B4\u05D9\u05DC\u05B8\u05D4 \u05D5\u05B0\u05E0\u05B4\u05E9\u05B0\u05C2\u05DE\u05B0\u05D7\u05B8\u05D4 \u05D1\u05D5\u05B9.")),t.push(n(!0,i==="ashkenaz"?'\u05E9"\u05E5':void 0)),t.push(n(!0,i==="ashkenaz"?"\u05E7\u05D4\u05DC":void 0)),t.push(s("\u05D0\u05B8\u05E0\u05B8\u05BC\u05D0 \u05D4' \u05D4\u05B7\u05E6\u05B0\u05DC\u05B4\u05D9\u05D7\u05B8\u05D4 \u05E0\u05B8\u05BC\u05D0. \u05D0\u05B8\u05E0\u05B8\u05BC\u05D0 \u05D4' \u05D4\u05B7\u05E6\u05B0\u05DC\u05B4\u05D9\u05D7\u05B8\u05D4 \u05E0\u05B8\u05BC\u05D0.")),t.push(s("\u05D1\u05B8\u05BC\u05E8\u05D5\u05BC\u05DA\u05B0 \u05D4\u05B7\u05D1\u05B8\u05BC\u05D0 \u05D1\u05B0\u05BC\u05E9\u05B5\u05C1\u05DD \u05D4', \u05D1\u05B5\u05BC\u05E8\u05B7\u05DB\u05B0\u05E0\u05D5\u05BC\u05DB\u05B6\u05DD \u05DE\u05B4\u05D1\u05B5\u05BC\u05D9\u05EA \u05D4'.")),t.push(s("\u05D0\u05B5\u05DC \u05D4' \u05D5\u05B7\u05D9\u05B8\u05BC\u05D0\u05B6\u05E8 \u05DC\u05B8\u05E0\u05D5\u05BC, \u05D0\u05B4\u05E1\u05B0\u05E8\u05D5\u05BC \u05D7\u05B7\u05D2 \u05D1\u05B7\u05BC\u05E2\u05B2\u05D1\u05B9\u05EA\u05B4\u05D9\u05DD \u05E2\u05B7\u05D3 \u05E7\u05B7\u05E8\u05B0\u05E0\u05D5\u05B9\u05EA \u05D4\u05B7\u05DE\u05B4\u05BC\u05D6\u05B0\u05D1\u05B5\u05BC\u05D7\u05B7.")),t.push(s("\u05D0\u05B5\u05DC\u05B4\u05D9 \u05D0\u05B7\u05EA\u05B8\u05BC\u05D4 \u05D5\u05B0\u05D0\u05D5\u05B9\u05D3\u05B6\u05DA\u05B8\u05BC, \u05D0\u05B1\u05DC\u05B9\u05D4\u05B7\u05D9 \u05D0\u05B2\u05E8\u05D5\u05B9\u05DE\u05B0\u05DE\u05B6\u05DA\u05B8\u05BC.")),i==="ashkenaz"?(t.push(e(!0,'\u05E9"\u05E5')),t.push(e(!0,"\u05E7\u05D4\u05DC"))):t.push(e(!0)),t}var Nc=[{species:"etrog",type:"\u05D9\u05E9 \u05D1\u05D5 \u05D8\u05E2\u05DD \u05D5\u05E8\u05D9\u05D7",means:"\u05D1\u05E2\u05DC\u05D9 \u05EA\u05D5\u05E8\u05D4 \u05D5\u05DE\u05E2\u05E9\u05D9\u05DD \u05D8\u05D5\u05D1\u05D9\u05DD"},{species:"lulav",type:"\u05D9\u05E9 \u05D1\u05D5 \u05D8\u05E2\u05DD \u05D5\u05D0\u05D9\u05DF \u05D1\u05D5 \u05E8\u05D9\u05D7",means:"\u05D1\u05E2\u05DC\u05D9 \u05EA\u05D5\u05E8\u05D4 \u05D1\u05DC\u05D9 \u05DE\u05E2\u05E9\u05D9\u05DD"},{species:"hadas",type:"\u05D9\u05E9 \u05D1\u05D5 \u05E8\u05D9\u05D7 \u05D5\u05D0\u05D9\u05DF \u05D1\u05D5 \u05D8\u05E2\u05DD",means:"\u05D1\u05E2\u05DC\u05D9 \u05DE\u05E2\u05E9\u05D9\u05DD \u05D1\u05DC\u05D9 \u05EA\u05D5\u05E8\u05D4"},{species:"arava",type:"\u05D0\u05D9\u05DF \u05D1\u05D4 \u05D8\u05E2\u05DD \u05D5\u05D0\u05D9\u05DF \u05D1\u05D4 \u05E8\u05D9\u05D7",means:"\u05D0\u05D9\u05DF \u05D1\u05D4\u05DD \u05EA\u05D5\u05E8\u05D4 \u05D5\u05DE\u05E2\u05E9\u05D9\u05DD"}],ed="\u05D4\u05DE\u05E9\u05D7\u05E7 \u05E0\u05D5\u05E2\u05D3 \u05DC\u05DC\u05D9\u05DE\u05D5\u05D3. \u05D1\u05E9\u05D0\u05DC\u05D5\u05EA \u05D4\u05DC\u05DB\u05D4 \u05DC\u05DE\u05E2\u05E9\u05D4 \u2014 \u05E4\u05E0\u05D5 \u05DC\u05E8\u05D1 \u05D0\u05D5 \u05DC\u05DE\u05D5\u05E8\u05D4 \u05D4\u05D5\u05E8\u05D0\u05D4, \u05D5\u05E0\u05D4\u05D2\u05D5 \u05DC\u05E4\u05D9 \u05DE\u05E0\u05D4\u05D2 \u05E7\u05D4\u05D9\u05DC\u05EA\u05DB\u05DD.";var Be=(i,t=document)=>t.querySelector(i);function it(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t||{}))r===!1||r==null||(s==="class"?n.className=r:s==="html"?n.innerHTML=r:s.startsWith("on")?n.addEventListener(s.slice(2),r):n.setAttribute(s,r));for(let s of e.flat())s==null||s===!1||n.append(s.nodeType?s:document.createTextNode(s));return n}var Li=i=>{let t=[...i];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t};var nd="lulav-tutorial-v1",Ko=class{constructor(t){this.w=t,this.chapters=[],this.state={nusach:"ashkenaz",progress:{},muted:!1},this.load(),this.score=0,this.ci=-1,this.si=0,this.ctx=null,this.keyHandlers=[],this.el={panel:Be("#panel"),tag:Be("#stepTag"),title:Be("#stepTitle"),body:Be("#stepBody"),task:Be("#task"),fb:Be("#fb"),prev:Be("#prev"),next:Be("#next"),hint:Be("#hint"),overlay:Be("#overlay"),score:Be("#score"),chapterName:Be("#chapterName"),dots:Be("#dots"),nusachBtn:Be("#nusachBtn"),muteBtn:Be("#muteBtn"),menuBtn:Be("#menuBtn")},this.el.prev.onclick=()=>{qt.click(),this.goStep(this.si-1)},this.el.next.onclick=()=>{qt.click(),this.nextStep()},this.el.hint.onclick=()=>{qt.click(),this.ctx?.step?.hint?.(this.ctx)},this.el.menuBtn.onclick=()=>this.showMenu(),this.el.nusachBtn.onclick=()=>this.showMenu(!0),this.el.muteBtn.onclick=()=>{this.state.muted=!this.state.muted,qt.setMuted(this.state.muted),this.state.muted&&Dc(),this.updateChrome(),this.save()},addEventListener("keydown",e=>{if(!this.el.overlay.classList.contains("show")&&!["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)){for(let n of this.keyHandlers)if(n(e)===!0){e.preventDefault();break}}}),qt.setMuted(this.state.muted)}get N(){return Fr[this.state.nusach]}load(){try{let t=JSON.parse(localStorage.getItem(nd)||"null");t&&Object.assign(this.state,t)}catch{}}save(){try{localStorage.setItem(nd,JSON.stringify(this.state))}catch{}}totalScore(){return Object.values(this.state.progress).reduce((t,e)=>t+(e.score||0),0)}showMenu(t=!1){let e=this.el.overlay;e.innerHTML="",e.classList.add("show");let n=it("div",{class:"menu"});n.append(it("div",{class:"menu-head"},it("div",{class:"logo",html:"\u{1F33F}\u{1F34B}"}),it("h1",{},"\u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD"),it("p",{class:"sub"},"\u05DE\u05D3\u05E8\u05D9\u05DA \u05EA\u05DC\u05EA\u05BE\u05DE\u05DE\u05D3\u05D9 \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05D8\u05D9\u05D1\u05D9: \u05DE\u05D4\u05E8\u05DB\u05D1\u05EA \u05D4\u05D0\u05D2\u05D3 \u05D5\u05E2\u05D3 \u05E0\u05E2\u05E0\u05D5\u05E2 \u05D1\u05D4\u05DC\u05DC")));let s=it("section",{class:"nusach"},it("h2",{},"\u05D1\u05D7\u05E8\u05D5 \u05E0\u05D5\u05E1\u05D7 / \u05DE\u05E0\u05D4\u05D2")),r=it("div",{class:"nus-row"});for(let c of Object.values(Fr)){let h=it("button",{class:"nus"+(c.key===this.state.nusach?" sel":""),onclick:()=>{qt.click(),this.state.nusach!==c.key&&(this.nusachChanged=!0),this.state.nusach=c.key,this.save(),this.updateChrome(),[...r.children].forEach(d=>d.classList.toggle("sel",d===h))}},it("b",{},c.name),it("small",{},c.tag));r.append(h)}s.append(r),n.append(s);let a=it("section",{class:"chapters"},it("h2",{},"\u05D4\u05E4\u05E8\u05E7\u05D9\u05DD")),o=it("div",{class:"ch-grid"});this.chapters.forEach((c,h)=>{let d=this.state.progress[c.id],u=d?.stars||0;o.append(it("button",{class:"ch"+(d?" done":""),onclick:()=>{qt.click(),this.startChapter(h)}},it("span",{class:"ch-ic"},c.icon),it("span",{class:"ch-tx"},it("b",{},`${h+1}. ${c.title}`),it("small",{},c.blurb)),it("span",{class:"ch-st"},d?"\u2605".repeat(u)+"\u2606".repeat(3-u):"\u2606\u2606\u2606")))}),a.append(o),n.append(a);let l=this.chapters.findIndex(c=>!this.state.progress[c.id]);n.append(it("div",{class:"menu-foot"},it("button",{class:"primary big",onclick:()=>{qt.click(),this.startChapter(l<0?0:l)}},l<=0?"\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05DC\u05DE\u05D5\u05D3 \u25C0":"\u05D4\u05DE\u05E9\u05D9\u05DB\u05D5 \u05DE\u05D4\u05E4\u05E8\u05E7 "+(l+1)+" \u25C0"),this.ci>=0?it("button",{class:"ghost",onclick:()=>{e.classList.remove("show"),this.nusachChanged&&(this.nusachChanged=!1,this.startChapter(this.ci))}},"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05DE\u05E9\u05D7\u05E7"):null,it("p",{class:"disc"},ed),it("p",{class:"disc small"},"\u05D8\u05D9\u05E4: \u05D2\u05E8\u05E8\u05D5 \u05D1\u05E2\u05DB\u05D1\u05E8 (\u05D0\u05D5 \u05D1\u05D0\u05E6\u05D1\u05E2) \u05DB\u05D3\u05D9 \u05DC\u05E1\u05D5\u05D1\u05D1 \u05D0\u05EA \u05D4\u05DE\u05E6\u05DC\u05DE\u05D4, \u05D5\u05D2\u05DC\u05DC\u05D5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05E7\u05E8\u05D1."))),e.append(n),t&&s.scrollIntoView({block:"nearest"})}updateChrome(){this.el.score.textContent=this.totalScore()+this.currentChapterScore(),this.el.nusachBtn.textContent="\u{1F4DC} "+this.N.name,this.el.muteBtn.textContent=this.state.muted?"\u{1F507}":"\u{1F50A}"}currentChapterScore(){return this.chapterScore||0}startChapter(t){this.el.overlay.classList.remove("show"),this.ci=t,this.chapterScore=0,this.chapterMistakes=0;let e=this.chapters[t];this.chapterState={},this.steps=e.steps(this),this.el.chapterName.textContent=`${t+1}. ${e.title}`,this.el.dots.innerHTML="",this.steps.forEach(()=>this.el.dots.append(it("i"))),this.stepDone=this.steps.map(()=>!1),this.goStep(0)}nextStep(){this.si<this.steps.length-1?this.goStep(this.si+1):this.finishChapter()}goStep(t){if(t<0||t>=this.steps.length)return;this.teardown(),this.si=t;let e=this.steps[t],n=this.makeCtx(e);this.ctx=n,this.el.tag.textContent=`\u05E9\u05DC\u05D1 ${t+1} \u05DE\u05EA\u05D5\u05DA ${this.steps.length}`,this.el.title.textContent=e.title,this.el.body.innerHTML=typeof e.body=="function"?e.body(n):e.body||"",this.el.task.innerHTML="",this.el.fb.className="",this.el.fb.textContent="",this.el.panel.classList.remove("flash"),[...this.el.dots.children].forEach((s,r)=>{s.className=(r===t?"cur ":"")+(this.stepDone[r]?"ok":"")}),this.el.prev.disabled=t===0,this.el.hint.style.display=e.hint?"":"none",this.refreshNext(),Be("#pscroll").scrollTop=0,this.updateChrome(),e.auto&&this.markDone(n,0,!0);try{e.enter?.(n)?.catch?.(r=>console.error(r))}catch(s){console.error(s)}}refreshNext(){let t=this.si===this.steps.length-1;this.el.next.textContent=t?"\u05E1\u05D9\u05D5\u05DD \u05D4\u05E4\u05E8\u05E7 \u2713":"\u05D4\u05D1\u05D0 \u25C0",this.el.next.disabled=!this.stepDone[this.si],this.el.next.classList.toggle("pulse",!!this.stepDone[this.si])}teardown(){this.ctx&&(this.ctx.alive=!1,this.ctx.cleanups.forEach(t=>{try{t()}catch{}})),this.keyHandlers=[],Dc(),this.w.stopShake=!0,this.w.pickCb=null,this.w.hoverCb=null}markDone(t,e=100,n=!1){if(this.stepDone[this.si])return;this.stepDone[this.si]=!0;let s=n?0:Math.max(20,e-t.mistakes*25);this.chapterScore+=s,this.chapterMistakes+=t.mistakes,[...this.el.dots.children][this.si]?.classList.add("ok"),this.refreshNext(),this.updateChrome(),n||(qt.ok(),this.toast(`+${s}`))}finishChapter(){let t=this.chapters[this.ci],e=this.chapterMistakes,n=e<=1?3:e<=5?2:1,s=this.state.progress[t.id],r=Math.max(s?.score||0,this.chapterScore);this.state.progress[t.id]={stars:Math.max(s?.stars||0,n),score:r},this.save(),this.updateChrome(),qt.win();let a=this.el.overlay;a.innerHTML="",a.classList.add("show");let o=this.chapters.every(h=>this.state.progress[h.id]),l=this.ci===this.chapters.length-1,c=it("div",{class:"menu summary"},it("div",{class:"logo",html:o&&l?"\u{1F3C6}":"\u{1F389}"}),it("h1",{},o&&l?"\u05E1\u05D9\u05D9\u05DE\u05EA\u05DD \u05D0\u05EA \u05DB\u05DC \u05D4\u05DE\u05D3\u05E8\u05D9\u05DA!":`\u05E1\u05D9\u05D9\u05DE\u05EA\u05DD: ${t.title}`),it("div",{class:"stars"},"\u2605".repeat(n)+"\u2606".repeat(3-n)),it("p",{class:"sub"},`\u05E0\u05D9\u05E7\u05D5\u05D3 \u05D1\u05E4\u05E8\u05E7: ${this.chapterScore} \xB7 \u05D8\u05E2\u05D5\u05D9\u05D5\u05EA: ${e}`),t.recap?it("div",{class:"recap",html:t.recap(this)}):null,o&&l?it("div",{class:"cert"},it("h3",{},"\u05EA\u05E2\u05D5\u05D3\u05EA \u05E0\u05D5\u05D8\u05DC \u05DC\u05D5\u05DC\u05D1"),it("p",{},`\u05E2\u05DC \u05E9\u05E1\u05D9\u05D9\u05DD/\u05D4 \u05D0\u05EA \u05D4\u05DE\u05D3\u05E8\u05D9\u05DA \u05D1\u05E0\u05D5\u05E1\u05D7 ${this.N.name} \xB7 \u05E0\u05D9\u05E7\u05D5\u05D3 \u05DB\u05D5\u05DC\u05DC ${this.totalScore()}`),it("p",{class:"small"},"\u05D7\u05D2 \u05E9\u05DE\u05D7! \u05E9\u05D9\u05D4\u05D9\u05D4 \u05DC\u05DB\u05DD \u05D9\u05D5\u05DD \u05E0\u05E2\u05D9\u05DD \u05E9\u05DC \u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD. \u{1F33F}")):null,it("div",{class:"menu-foot"},l?null:it("button",{class:"primary big",onclick:()=>{qt.click(),this.startChapter(this.ci+1)}},"\u05DC\u05E4\u05E8\u05E7 \u05D4\u05D1\u05D0 \u25C0"),it("button",{class:"ghost",onclick:()=>{qt.click(),this.startChapter(this.ci)}},"\u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05EA \u05D4\u05E4\u05E8\u05E7"),it("button",{class:"ghost",onclick:()=>this.showMenu()},"\u05DC\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E4\u05E8\u05E7\u05D9\u05DD")));a.append(c)}makeCtx(t){let e=this,n={game:e,w:e.w,N:e.N,step:t,mistakes:0,alive:!0,cleanups:[],task:e.el.task,shared:e.chapterState,onExit(s){n.cleanups.push(s)},onKey(s){e.keyHandlers.push(s)},complete(s=100){e.markDone(n,s)},isDone:()=>e.stepDone[e.si],say(s){e.el.body.innerHTML=s},info(s){e.feedback(s,"info")},good(s){e.feedback(s,"ok")},mistake(s){n.mistakes++,qt.bad(),e.feedback(s||"\u05DC\u05D0 \u05D1\u05D3\u05D9\u05D5\u05E7 \u2014 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1.","bad"),e.el.panel.classList.remove("flash"),e.el.panel.offsetWidth,e.el.panel.classList.add("flash")},clear(){e.el.task.innerHTML=""},add(s){return e.el.task.append(s),s},mc(s,r,{cls:a=""}={}){return new Promise(o=>{let l=it("div",{class:"mc "+a},it("p",{class:"q",html:s})),c=[];Li(r).forEach(h=>{let d=it("button",{class:"opt",html:h.t});d.onclick=()=>{d.disabled||(qt.click(),h.ok?(c.forEach(u=>{u.disabled=!0}),d.classList.add("ok"),n.good(h.why||"\u05E0\u05DB\u05D5\u05DF!"),o(h)):(d.classList.add("bad"),d.disabled=!0,n.mistake(h.why||"\u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7 \u2014 \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1.")))},c.push(d),l.append(d)}),n.add(l)})},order(s,r,{numbered:a=!0}={}){return new Promise(o=>{let l=it("div",{class:"order"},it("p",{class:"q",html:s})),c=it("div",{class:"pool"}),h=it("ol",{class:"seq"}),d=0;Li(r.map((u,f)=>({t:u,i:f}))).forEach(u=>{let f=it("button",{class:"opt",html:u.t});f.onclick=()=>{qt.click(),u.i===d?(d++,f.remove(),h.append(it("li",{class:"ok",html:u.t})),d===r.length&&(n.good("\u05D4\u05E1\u05D3\u05E8 \u05E0\u05DB\u05D5\u05DF!"),o())):n.mistake("\u05D6\u05D4 \u05DC\u05D0 \u05D4\u05E6\u05E2\u05D3 \u05D4\u05D1\u05D0 \u05D1\u05E1\u05D3\u05E8. \u05D7\u05E9\u05D1\u05D5: \u05DE\u05D4 \u05E7\u05D5\u05E8\u05D4 \u05E7\u05D5\u05D3\u05DD?")},c.append(f)}),l.append(c,h),n.add(l)})},match(s,r,a,{onLeft:o,onMatch:l,explain:c}={}){return new Promise(h=>{let d=it("div",{class:"match"},it("p",{class:"q",html:s})),u=it("div",{class:"cols"}),f=it("div",{class:"col"}),g=it("div",{class:"col"}),y=null,m=0,p={};r.forEach(v=>{let T=it("button",{class:"opt"},v.dot?it("i",{class:"dot",style:`background:${v.dot}`}):null,v.label);T.onclick=()=>{T.classList.contains("locked")||(qt.click(),y=v,Object.values(p).forEach(M=>M.classList.remove("sel")),T.classList.add("sel"),o?.(v))},p[v.id]=T,f.append(T)}),Li(a).forEach(v=>{let T=it("button",{class:"opt"},v.label);T.onclick=()=>{if(!T.classList.contains("locked")){if(!y){n.info("\u05E7\u05D5\u05D3\u05DD \u05D1\u05D7\u05E8\u05D5 \u05E4\u05E8\u05D9\u05D8 \u05DE\u05D4\u05E2\u05DE\u05D5\u05D3\u05D4 \u05D4\u05D9\u05DE\u05E0\u05D9\u05EA.");return}y.id===v.id?(qt.ok(),T.classList.add("locked","ok"),p[y.id].classList.add("locked","ok"),p[y.id].classList.remove("sel"),n.good(c?.(y.id)||"\u05E0\u05DB\u05D5\u05DF!"),l?.(y),y=null,++m===r.length&&h()):n.mistake("\u05D4\u05D4\u05EA\u05D0\u05DE\u05D4 \u05DC\u05D0 \u05E0\u05DB\u05D5\u05E0\u05D4. \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1.")}},g.append(T)}),u.append(f,g),d.append(u),n.add(d)})},button(s,r,a="primary"){let o=it("button",{class:a,onclick:()=>{qt.click(),r(o)}},s);return n.add(o),o}};return n}feedback(t,e){let n=this.el.fb;n.className="show "+e,n.innerHTML=t,clearTimeout(this.fbT),e!=="bad"&&(this.fbT=setTimeout(()=>{n.className=e==="ok"?"show ok":"show "+e},0))}toast(t){let e=it("div",{class:"toast"},t);document.body.append(e),setTimeout(()=>e.remove(),1400)}};var Ui=.834,jn=i=>new Promise(t=>setTimeout(t,i)),Ns={rest:{r:[.27,.85,-.02],l:[-.27,.85,-.02],lean:0,gripR:.7,gripL:.7},carry:{r:[.11,1.14,-.4],l:[.04,1.2,-.4],lean:.06,gripR:1.05,gripL:1.45}},Di=["etrog","hadas","arava","lulav"],rd={etrog:-.52,hadas:-.18,arava:.18,lulav:.52};function Fc(i,t){i.handBase.r.set(...t.r),i.handBase.l.set(...t.l),i.handBase.lean=t.lean,i.avatar.arms.r.grip=t.gripR,i.avatar.arms.l.grip=t.gripL,i.shakeOff.set(0,0,0)}function Qe(i,{avatar:t=!1,table:e=!0,cam:n="table",markers:s=!1,dur:r=.9}={}){let a=i.w;a.clearStage(),a.stopShake=!0,a.shakeToken++,a.arrow.visible=!1,a.setAvatarVisible(t),a.table.visible=e,a.setMarkers(s),a.held=null,Fc(a,Ns.rest),a.setCamera(n,r),a.hoverCb=o=>a.highlight(o?o.root:null)}function w_(i,t,e=.05,n=.08){let s=new $t,r=new pt(new de(e,e*.8,n,18),new qe({color:14272928,roughness:.5}));return r.position.y=n/2,r.castShadow=!0,s.add(r),s.position.set(i,Ui,t),s}function Uc(i,t,e=.07){let n=new pt(new de(e,e,t,8),new Ue({visible:!1}));return n.position.y=t/2,n}function Ni(i,t,e,n,{pick:s=!0,scale:r=1,obj:a=null,hit:o=!0,stand:l=!0,lift:c=0}={}){let h=new $t,d=a,u=.6;if(d||(t==="etrog"&&(d=Ic()),t==="lulav"&&(d=Dr({length:Oe.lulav})),t==="hadas"&&(d=Ps({length:Oe.hadas})),t==="arava"&&(d=Is({length:Oe.arava}))),t==="etrog"){let f=new pt(new de(.045,.05,.025,20),new qe({color:13215850,roughness:.5}));f.position.y=.0125,l&&h.add(f),d.position.y=(l?.025:0)+.062+c,u=.16}else{let f=w_(0,0);f.position.set(0,0,0),h.add(f),d.position.y=.06,u=(d.userData.length||.5)+.1}return h.add(d),h.scale.setScalar(r),h.position.set(e,Ui,n),s&&(o&&h.add(Uc(i,u)),h.userData.pick={id:t},i.addPickable(h)),h.userData.obj=d,i.stage.add(h),h}function Or(i,{pick:t=!1}={}){let e={};for(let n of Di)e[n]=Ni(i,n,rd[n],-.62,{pick:t});return e}function id(i){let t=n=>n.order.map(s=>ye[s].name).join(" \u2190 "),e=Object.values(Fr).map(n=>i==="dirs"?`<tr><th>${n.name}</th><td>${t(n)}</td></tr>`:`<tr><th>${n.name}</th><td>${{ashkenaz:"9 \u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD \u05D1\u05D4\u05DC\u05DC (\u05D4\u05E7\u05D4\u05DC)",sepharad:"5 \u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD, \u05DB\u05D5\u05DC\u05DC \u05D6\u05D4 \u05E9\u05D0\u05D7\u05E8\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4",chabad:"5 \u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD, \u05DB\u05D5\u05DC\u05DC \u05D6\u05D4 \u05E9\u05D0\u05D7\u05E8\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4; \u05D1\u05DB\u05DC \u05D0\u05D7\u05D3 18 \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA"}[n.key]}</td></tr>`);return i!=="dirs"&&e.push(`<tr><th>\u05EA\u05D9\u05DE\u05DF</th><td>4 \u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD (\u05D0\u05D9\u05DF \u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05E2\u05DC "\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0")</td></tr>`),`<table class="cmp"><thead><tr><th>\u05E0\u05D5\u05E1\u05D7</th><th>${i==="dirs"?"\u05E1\u05D3\u05E8 \u05D4\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD":"\u05DB\u05DE\u05D4 \u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD"}</th></tr></thead><tbody>${e.join("")}</tbody></table>`}function gn(i,{inverted:t=!0,cam:e="heroClose",table:n=!1,markers:s=!1,etrogPitamLabel:r=!1}={}){Qe(i,{avatar:!0,table:n,cam:e,markers:s});let a=i.w,o=Nr({arrangement:i.N.arrangement}),l=Ic();return a.stage.add(o,l),a.attach(o,"r"),a.attach(l,"l"),o.position.set(0,-.075,0),o.rotation.set(0,0,0),l.position.set(0,0,0),l.rotation.set(0,0,t?Math.PI:0),a.held={bundle:o,etrog:l},a.etrogInverted=t,Fc(a,Ns.carry),{bundle:o,etrog:l}}function sd(i,t,e){let n=i.N,s=i.w,r=n.key==="chabad",a=td(n.key),o=r?.9:.36,l=r?3:1,c=0;a.forEach(A=>{A.start=c,A.slots=[];let D=0;A.words.forEach((k,H)=>{let Y=k.dir==null?[]:Array.isArray(k.dir)?k.dir:[k.dir],X;A.kind==="gap"?X=.25:A.star?X=Y.length?o*Y.length:.28:X=.4,A.slots.push({i:H,start:D,dur:X,moves:A.star?Y:[]}),D+=X}),A.total=D+(A.kind==="gap"?.4:.7),A.end=A.start+A.total,A.allMoves=A.slots.flatMap(k=>k.moves),c=A.end});let h=a.filter(A=>A.star).length,d=it("div",{class:"hallel "+t}),u=it("div",{class:"hstat"}),f=it("div",{class:"hbox"}),g=a.map(A=>{let D=it("div",{class:"hline "+A.kind+(A.star?" star":"")});A.tag&&D.append(it("span",{class:"htag"},A.tag));let k=A.words.map((H,Y)=>{let X=H.dir==null?[]:Array.isArray(H.dir)?H.dir:[H.dir],j=it("small",{},X.length&&A.star?X.map(Ct=>ye[n.order[Ct]].name).join("\xB7"):""),et=it("span",{class:"wd"},it("span",{class:"w"},H.w),j);return D.append(et),{s:et,chip:j,dirs:X}});return A.star&&t==="guide"&&D.append(it("span",{class:"mark"},"\u{1F932}")),f.append(D),{row:D,ws:k}});d.append(u,f);let y=!1,m=0,p=0,v=0,T=0,M=0,S=-1,E=new Set,P=new Set,x=!1,w=()=>{u.innerHTML=t==="play"?`\u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD: <b>${v}</b> \xB7 \u05D8\u05E2\u05D5\u05D9\u05D5\u05EA: <b>${T+M}</b>`:`\u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD \u05D1\u05D4\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05D7 ${n.name}: <b>${h}</b>`};w();let C=A=>{A.length&&(s.stopShake=!1,s.shakeSequence(A.map(D=>n.order[D]),{reps:l,dur:o,rustle:n.rustle}),n.rustle&&qt.rustle())};function U(){if(!y||t!=="play")return;let A=a[S];A&&A.star&&!E.has(S)?(E.add(S),v++,g[S].row.classList.add("hit"),qt.ok(),C(A.allMoves)):(T++,qt.bad(),i.mistake(A&&A.star?"\u05DB\u05D1\u05E8 \u05E0\u05D9\u05E2\u05E0\u05E2\u05EA\u05DD \u05D1\u05E9\u05D5\u05E8\u05D4 \u05D4\u05D6\u05D5.":`\u05DB\u05D0\u05DF \u05DC\u05D0 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u2014 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05E8\u05E7 \u05D1"\u05D4\u05D5\u05D3\u05D5 \u05DC\u05D4'" \u05D5\u05D1"\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0".`)),w()}function O(){if(!y||!i.alive)return;let A=(performance.now()-m)/1e3,D=a.findIndex(k=>A>=k.start&&A<k.end);if(A>=c&&(D=-2),D!==S){if(S>=0){let k=a[S];g[S].row.classList.remove("active"),g[S].row.classList.add("past"),k.star&&t==="play"&&!E.has(S)&&(M++,g[S].row.classList.add("miss"),i.mistake(`\u05E4\u05E1\u05E4\u05E1\u05EA\u05DD \u05E0\u05E2\u05E0\u05D5\u05E2 \u2014 "\u05D4\u05D5\u05D3\u05D5" / "\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0" \u05D4\u05DD \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05DC\u05E0\u05E2\u05E0\u05E2.`),w()),t==="play"&&g[S].ws.forEach(H=>{H.dirs.length&&k.star&&(H.chip.style.opacity=1)})}S=D,S>=0&&(g[S].row.classList.add("active"),g[S].row.scrollIntoView({block:"center",behavior:"smooth"}))}if(S>=0){let k=a[S],H=A-k.start;k.slots.forEach(Y=>{let X=H>=Y.start&&H<Y.start+Y.dur;g[S].ws[Y.i].s.classList.toggle("on",X),t==="guide"&&k.star&&H>=Y.start&&!P.has(S+":"+Y.i)&&(P.add(S+":"+Y.i),Y.moves.length&&(s.stopShake=!1,s.shakeSequence(Y.moves.map(j=>n.order[j]),{reps:l,dur:o,rustle:n.rustle}),n.rustle&&qt.rustle()))})}if(D===-2&&!x){x=!0,y=!1,e?.({hits:v,wrong:T,missed:M,total:h});return}p=requestAnimationFrame(O)}let z={el:d,start(){cancelAnimationFrame(p),g.forEach(A=>{A.row.className=A.row.className.replace(/\b(active|past|hit|miss)\b/g,"").trim(),A.ws.forEach(D=>{D.s.classList.remove("on"),t==="play"&&(D.chip.style.opacity=0)})}),v=0,T=0,M=0,S=-1,x=!1,E.clear(),P.clear(),w(),y=!0,m=performance.now()+1200,i.info(t==="play"?'\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05DC\u05D5\u05DE\u05E8 \u05D0\u05EA \u05D4\u05D4\u05DC\u05DC... \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC "\u05E0\u05E2\u05E0\u05E2\u05D5" (\u05D0\u05D5 \u05E8\u05D5\u05D5\u05D7) \u05D1\u05D6\u05DE\u05DF \u05D4\u05E0\u05DB\u05D5\u05DF!':"\u05E6\u05E4\u05D5: \u05D4\u05D3\u05DE\u05D5\u05EA \u05DE\u05E0\u05E2\u05E0\u05E2\u05EA \u05D1\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF \u05DC\u05E4\u05D9 \u05D4\u05E0\u05D5\u05E1\u05D7 \u05E9\u05D1\u05D7\u05E8\u05EA\u05DD."),p=requestAnimationFrame(O)},press:U,stop(){y=!1,cancelAnimationFrame(p)},lines:a,totalStars:h};return i.onExit(()=>z.stop()),z}function ad(){return[{id:"meet",icon:"\u{1F33F}",title:"\u05D4\u05DB\u05E8\u05EA \u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD",blurb:"\u05D0\u05EA\u05E8\u05D5\u05D2, \u05DC\u05D5\u05DC\u05D1, \u05D4\u05D3\u05E1 \u05D5\u05E2\u05E8\u05D1\u05D4 \u2014 \u05D0\u05D9\u05DA \u05DE\u05D6\u05D4\u05D9\u05DD \u05DB\u05DC \u05D0\u05D7\u05D3",recap:()=>"<ul><li>\u05D0\u05EA\u05E8\u05D5\u05D2: \u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4, \u05E2\u05D5\u05E7\u05E5 \u05DC\u05DE\u05D8\u05D4</li><li>\u05DC\u05D5\u05DC\u05D1: \u05E1\u05D2\u05D5\u05E8, \u05D5\u05D4\u05E9\u05D3\u05E8\u05D4 \u05D4\u05D9\u05D0 \u05D4\u05D2\u05D1 \u05D4\u05E7\u05E9\u05D4</li><li>\u05D4\u05D3\u05E1: \u05E9\u05DC\u05D5\u05E9\u05D4 \u05E2\u05DC\u05D9\u05DD \u05D1\u05DB\u05DC \u05E7\u05D5\u05DE\u05D4</li><li>\u05E2\u05E8\u05D1\u05D4: \u05E2\u05DC\u05D4 \u05D0\u05E8\u05D5\u05DA \u05D5\u05D7\u05DC\u05E7, \u05E7\u05E0\u05D4 \u05D0\u05D3\u05DE\u05D3\u05DD</li></ul>",steps:()=>[{title:"\u05D0\u05E8\u05D1\u05E2\u05D4 \u05DE\u05D9\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05E9\u05D5\u05DC\u05D7\u05DF",body:`<p>\u05D4\u05EA\u05D5\u05E8\u05D4 \u05DE\u05E6\u05D5\u05D5\u05D4: <b>"\u05D5\u05BC\u05DC\u05B0\u05E7\u05B7\u05D7\u05B0\u05EA\u05B6\u05BC\u05DD \u05DC\u05B8\u05DB\u05B6\u05DD \u05D1\u05B7\u05BC\u05D9\u05BC\u05D5\u05B9\u05DD \u05D4\u05B8\u05E8\u05B4\u05D0\u05E9\u05C1\u05D5\u05B9\u05DF \u05E4\u05B0\u05BC\u05E8\u05B4\u05D9 \u05E2\u05B5\u05E5 \u05D4\u05B8\u05D3\u05B8\u05E8, \u05DB\u05B7\u05BC\u05E4\u05B9\u05BC\u05EA \u05EA\u05B0\u05BC\u05DE\u05B8\u05E8\u05B4\u05D9\u05DD \u05D5\u05B7\u05E2\u05B2\u05E0\u05B7\u05E3 \u05E2\u05B5\u05E5 \u05E2\u05B8\u05D1\u05B9\u05EA \u05D5\u05B0\u05E2\u05B7\u05E8\u05B0\u05D1\u05B5\u05D9 \u05E0\u05B8\u05D7\u05B7\u05DC"</b> (\u05D5\u05D9\u05E7\u05E8\u05D0 \u05DB\u05D2, \u05DE).</p>
                 <p>\u05DC\u05E4\u05E0\u05D9\u05DB\u05DD \u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD. <b>\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05DB\u05DC \u05D0\u05D7\u05D3</b> \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05E7\u05E8\u05D1 \u05D0\u05DC\u05D9\u05D5 \u05D5\u05DC\u05E7\u05E8\u05D5\u05D0 \u05E2\u05DC\u05D9\u05D5.</p>`,enter(i){let t=i.w;Qe(i,{cam:"table"});let e=Or(t,{pick:!0}),n=new Set,s=it("div",{class:"chips"}),r={};Di.forEach(c=>{r[c]=it("span",{class:"chip"},Kn[c].name),s.append(r[c])});let a=it("div",{class:"info"},it("p",{class:"muted"},"\u05E2\u05D3\u05D9\u05D9\u05DF \u05DC\u05D0 \u05D1\u05D7\u05E8\u05EA\u05DD \u05DE\u05D9\u05DF. \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D0\u05D7\u05D3 \u05DE\u05D4\u05DD \u05D1\u05E1\u05E6\u05E0\u05D4 (\u05D0\u05D5 \u05E2\u05DC \u05D4\u05E9\u05DD \u05DB\u05D0\u05DF)."));i.add(s),i.add(a);let o=null,l=c=>{o=c;let h=Kn[c];qt.click(),a.innerHTML="",a.append(it("div",{class:"verse",style:`border-color:${h.color}`},h.verse),it("h3",{},h.name),it("ul",{},h.facts.map(f=>it("li",{html:f}))),it("button",{class:"ghost",onclick:()=>{o=null,t.setCamera("table",.8)}},"\u21A9 \u05D7\u05D6\u05E8\u05D4 \u05DC\u05DB\u05DC \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD"));let d=rd[c],u=Ui+(c==="etrog"?.09:.3);t.setCamera({pos:[d*.6,1.28,.62],target:[d,u,-.62]},.9),n.add(c),r[c].classList.add("ok"),n.size===4&&!i.isDone()&&(i.complete(60),i.good("\u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3! \u05D4\u05DB\u05E8\u05EA\u05DD \u05D0\u05EA \u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD. \u05E2\u05D1\u05E8\u05D5 \u05DC\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0."))};Di.forEach(c=>{r[c].onclick=()=>l(c)}),t.pickCb=c=>{c&&l(c.pick.id)},t.updaters.push(c=>{Di.forEach(h=>{let d=e[h].userData.obj;h===o&&(d.rotation.y+=c*.9)})})}},{title:"\u05DE\u05D9 \u05D4\u05DB\u05E9\u05E8? \u2014 \u05D1\u05D7\u05E0\u05D5 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DB\u05DD",body:"<p>\u05E2\u05DB\u05E9\u05D9\u05D5 \u05DC\u05D5\u05DE\u05D3\u05D9\u05DD \u05DC\u05D4\u05D1\u05D3\u05D9\u05DC \u05D1\u05D9\u05DF <b>\u05DB\u05E9\u05E8</b> \u05DC<b>\u05E4\u05E1\u05D5\u05DC</b>. \u05D1\u05DB\u05DC \u05E1\u05E6\u05E0\u05D4 \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E0\u05DB\u05D5\u05DF (\u05DE\u05D5\u05EA\u05E8 \u05DC\u05E1\u05D5\u05D1\u05D1 \u05D0\u05EA \u05D4\u05DE\u05E6\u05DC\u05DE\u05D4).</p>",hint:i=>i.info(i.shared.hint||"\u05D4\u05EA\u05D1\u05D5\u05E0\u05E0\u05D5 \u05D4\u05D9\u05D8\u05D1 \u05D1\u05E2\u05DC\u05D9\u05DD."),async enter(i){let t=i.w,e=i.add(it("p",{class:"q big"},"")),n=({prompt:c,items:h,cam:d="tableClose",scale:u=1.4,hint:f})=>new Promise(g=>{Qe(i,{cam:d}),i.shared.hint=f,e.textContent=c;let y=h.length===2?[-.24,.24]:[-.4,0,.4],m=!1;Li(h).forEach((p,v)=>{let T=Ni(t,p.id,y[v],-.6,{pick:!0,scale:p.scale??u,obj:p.make()});T.userData.pick={it:p}}),t.pickCb=p=>{if(!p||m)return;let v=p.pick.it;v.ok?(m=!0,t.highlight(p.root),i.good(v.why),g()):i.mistake(v.why)}});if(await n({prompt:"\u{1F33F} \u05D0\u05D9\u05D6\u05D4 \u05D4\u05D3\u05E1 \u05DB\u05E9\u05E8?",hint:'\u05E1\u05E4\u05E8\u05D5 \u05DB\u05DE\u05D4 \u05E2\u05DC\u05D9\u05DD \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DE\u05DB\u05DC "\u05E7\u05D5\u05DE\u05D4" \u05E9\u05DC \u05D4\u05E2\u05E0\u05E3.',items:[{id:"hadas",make:()=>Ps({length:Oe.hadas,variant:"kosher"}),ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! \u05D1\u05D4\u05D3\u05E1 \u05DE\u05E1\u05D5\u05DC\u05E1\u05DC \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD <b>\u05E9\u05DC\u05D5\u05E9\u05D4 \u05E2\u05DC\u05D9\u05DD</b> \u05DE\u05DB\u05DC \u05E7\u05D5\u05DE\u05D4."},{id:"hadas",make:()=>Ps({length:Oe.hadas,variant:"pairs",seed:9}),ok:!1,why:'\u05D4\u05E2\u05DC\u05D9\u05DD \u05DB\u05D0\u05DF \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD <b>\u05D1\u05D6\u05D5\u05D2\u05D5\u05EA</b> \u05D5\u05DC\u05D0 \u05D1\u05E9\u05DC\u05E9\u05D5\u05EA \u2014 \u05D6\u05D4 \u05D4\u05D3\u05E1 "\u05E9\u05D5\u05D8\u05D4", \u05E4\u05E1\u05D5\u05DC.'}]}),!i.alive||(await jn(1300),await n({prompt:"\u{1F33F} \u05D0\u05D9\u05D6\u05D5 \u05E2\u05E8\u05D1\u05D4 \u05DB\u05E9\u05E8\u05D4?",hint:"\u05E2\u05E8\u05D1\u05D4 \u05DB\u05E9\u05E8\u05D4: \u05E2\u05DC\u05D4 \u05D0\u05E8\u05D5\u05DA \u05D5\u05E6\u05E8, \u05E9\u05E4\u05D4 \u05D7\u05DC\u05E7\u05D4 \u05D5\u05E7\u05E0\u05D4 \u05D0\u05D3\u05DE\u05D3\u05DD.",items:[{id:"arava",make:()=>Is({length:Oe.arava,variant:"smooth"}),ok:!0,why:'\u05E0\u05DB\u05D5\u05DF! \u05E2\u05DC\u05D4 <b>\u05D0\u05E8\u05D5\u05DA \u05D5\u05E6\u05E8 \u05E2\u05DD \u05E9\u05E4\u05D4 \u05D7\u05DC\u05E7\u05D4</b> \u05D5\u05E7\u05E0\u05D4 \u05D0\u05D3\u05DE\u05D3\u05DD \u2014 "\u05E2\u05E8\u05D1\u05D9 \u05E0\u05D7\u05DC".'},{id:"arava",make:()=>Is({length:Oe.arava,variant:"serrated",seed:8}),ok:!1,why:"\u05D4\u05E2\u05DC\u05D9\u05DD \u05DB\u05D0\u05DF <b>\u05DE\u05E9\u05D5\u05E0\u05E0\u05D9\u05DD</b> \u05D5\u05E8\u05D7\u05D1\u05D9\u05DD \u2014 \u05D6\u05D5 \u05E6\u05E4\u05E6\u05E4\u05D4 \u05D0\u05D5 \u05DE\u05D9\u05DF \u05D0\u05D7\u05E8, \u05DC\u05D0 \u05E2\u05E8\u05D1\u05D4 \u05DB\u05E9\u05E8\u05D4."}]}),!i.alive)||(await jn(1300),await n({prompt:"\u{1F334} \u05D0\u05D9\u05D6\u05D4 \u05DC\u05D5\u05DC\u05D1 \u05DB\u05E9\u05E8?",scale:1,cam:"tableClose",hint:"\u05DC\u05D5\u05DC\u05D1 \u05DB\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E1\u05D2\u05D5\u05E8 \u2014 \u05D4\u05E2\u05DC\u05D9\u05DD \u05E6\u05DE\u05D5\u05D3\u05D9\u05DD \u05DC\u05E9\u05D3\u05E8\u05D4.",items:[{id:"lulav",make:()=>Dr({length:Oe.lulav,open:!1}),ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! \u05D4\u05DC\u05D5\u05DC\u05D1 <b>\u05E1\u05D2\u05D5\u05E8</b>: \u05D4\u05E2\u05DC\u05D9\u05DD \u05E6\u05DE\u05D5\u05D3\u05D9\u05DD \u05D6\u05D4 \u05DC\u05D6\u05D4."},{id:"lulav",make:()=>Dr({length:Oe.lulav,open:!0,seed:3}),ok:!1,why:'\u05D4\u05E2\u05DC\u05D9\u05DD \u05DB\u05D0\u05DF <b>\u05E0\u05E4\u05D5\u05E6\u05D9\u05DD</b> \u05D5\u05DE\u05EA\u05E4\u05D6\u05E8\u05D9\u05DD \u2014 \u05DC\u05D5\u05DC\u05D1 "\u05E0\u05E4\u05D5\u05E5" \u05E4\u05E1\u05D5\u05DC.'}]}),!i.alive))return;await jn(1300),Qe(i,{cam:{pos:[0,1.25,.6],target:[0,1.25,-.6]}}),e.textContent="\u{1F34B} \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05E4\u05D9\u05D8\u05DD \u05E9\u05DC \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2",i.shared.hint="\u05D4\u05E4\u05D9\u05D8\u05DD \u05D4\u05D5\u05D0 \u05D4\u05D1\u05DC\u05D9\u05D8\u05D4 \u05D4\u05E7\u05D8\u05E0\u05D4 \u05D5\u05D4\u05DB\u05D4\u05D4 \u05D1\u05E7\u05E6\u05D4 \u05D4\u05E2\u05DC\u05D9\u05D5\u05DF.";let r=Ni(t,"etrog",0,-.6,{pick:!0,scale:2.6,hit:!1,stand:!1,lift:.1}).userData.obj,a=new pt(new Xe(.02,8,8),new Ue({visible:!1}));a.position.y=.066,a.userData.part="pitam",r.add(a);let o=new pt(new Xe(.02,8,8),new Ue({visible:!1}));o.position.y=-.062,o.userData.part="ukatz",r.add(o);let l=0;await new Promise(c=>{t.pickCb=h=>{if(!h)return;let d=h.part;if(l===0)if(d==="pitam"){l=1;let u=yi("\u05E4\u05D9\u05D8\u05DD",{size:56,scale:7e-4});u.position.set(0,.11,0),r.add(u),i.good("\u05E0\u05DB\u05D5\u05DF! \u05D6\u05D4 \u05D4<b>\u05E4\u05D9\u05D8\u05DD</b>. \u05E2\u05DB\u05E9\u05D9\u05D5 \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4<b>\u05E2\u05D5\u05E7\u05E5</b> \u2014 \u05D4\u05E7\u05E6\u05D4 \u05D4\u05EA\u05D7\u05EA\u05D5\u05DF, \u05E9\u05D1\u05D5 \u05D4\u05D9\u05D4 \u05DE\u05D7\u05D5\u05D1\u05E8 \u05DC\u05E2\u05E5."),e.textContent="\u{1F34B} \u05E2\u05DB\u05E9\u05D9\u05D5 \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05E2\u05D5\u05E7\u05E5"}else i.mistake(d==="ukatz"?"\u05D6\u05D4 \u05D4\u05E2\u05D5\u05E7\u05E5 (\u05DC\u05DE\u05D8\u05D4). \u05D4\u05E4\u05D9\u05D8\u05DD \u05D4\u05D5\u05D0 \u05D1\u05E7\u05E6\u05D4 \u05D4\u05E2\u05DC\u05D9\u05D5\u05DF.":"\u05D6\u05D4 \u05D2\u05D5\u05E3 \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2. \u05D7\u05E4\u05E9\u05D5 \u05D0\u05EA \u05D4\u05D1\u05DC\u05D9\u05D8\u05D4 \u05D4\u05E7\u05D8\u05E0\u05D4 \u05D5\u05D4\u05DB\u05D4\u05D4 \u05D1\u05E7\u05E6\u05D4 \u05D4\u05E2\u05DC\u05D9\u05D5\u05DF.");else if(l===1)if(d==="ukatz"){l=2;let u=yi("\u05E2\u05D5\u05E7\u05E5",{size:56,scale:7e-4});u.position.set(0,-.11,0),r.add(u),i.good("\u05DE\u05E6\u05D5\u05D9\u05DF! \u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4 \u05D5\u05E2\u05D5\u05E7\u05E5 \u05DC\u05DE\u05D8\u05D4 \u2014 \u05DB\u05DA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D2\u05D3\u05DC \u05E2\u05DC \u05D4\u05E2\u05E5."),c()}else i.mistake("\u05D4\u05E2\u05D5\u05E7\u05E5 \u05D4\u05D5\u05D0 \u05D4\u05E7\u05E6\u05D4 \u05D4\u05EA\u05D7\u05EA\u05D5\u05DF, \u05E9\u05D1\u05D5 \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05D9\u05D4 \u05DE\u05D7\u05D5\u05D1\u05E8 \u05DC\u05E2\u05E0\u05E3.")}}),i.complete(100)}}]},{id:"why",icon:"\u{1F4DC}",title:"\u05DC\u05DE\u05D4 \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD?",blurb:"\u05D4\u05E6\u05D9\u05D5\u05D5\u05D9, \u05D4\u05DE\u05D3\u05E8\u05E9 \u05E2\u05DC \u05D0\u05E8\u05D1\u05E2\u05D4 \u05E1\u05D5\u05D2\u05D9 \u05D9\u05D4\u05D5\u05D3\u05D9\u05DD, \u05D5\u05E8\u05DE\u05D6\u05D9 \u05D4\u05D0\u05D9\u05D1\u05E8\u05D9\u05DD",recap:()=>`<ul><li>\u05E6\u05D9\u05D5\u05D5\u05D9 \u05D4\u05EA\u05D5\u05E8\u05D4: "\u05D5\u05DC\u05E7\u05D7\u05EA\u05DD \u05DC\u05DB\u05DD... \u05D5\u05E9\u05DE\u05D7\u05EA\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D4' \u05D0\u05DC\u05D4\u05D9\u05DB\u05DD \u05E9\u05D1\u05E2\u05EA \u05D9\u05DE\u05D9\u05DD"</li><li>\u05D0\u05E8\u05D1\u05E2\u05D4 \u05E1\u05D5\u05D2\u05D9\u05DD \u05D1\u05E2\u05DD \u05D9\u05E9\u05E8\u05D0\u05DC \u2014 \u05E7\u05E9\u05D5\u05E8\u05D9\u05DD \u05D1\u05D0\u05D2\u05D5\u05D3\u05D4 \u05D0\u05D7\u05EA</li><li>\u05D4\u05DE\u05D9\u05E0\u05D9\u05DD \u05DB\u05E0\u05D2\u05D3 \u05D0\u05D9\u05D1\u05E8\u05D9 \u05D4\u05D2\u05D5\u05E3</li></ul>`,steps:()=>[{title:"\u05D4\u05E6\u05D9\u05D5\u05D5\u05D9 \u05D5\u05D4\u05E9\u05DE\u05D7\u05D4",auto:!0,body:`<div class="verse big">"\u05D5\u05BC\u05DC\u05B0\u05E7\u05B7\u05D7\u05B0\u05EA\u05B6\u05BC\u05DD \u05DC\u05B8\u05DB\u05B6\u05DD \u05D1\u05B7\u05BC\u05D9\u05BC\u05D5\u05B9\u05DD \u05D4\u05B8\u05E8\u05B4\u05D0\u05E9\u05C1\u05D5\u05B9\u05DF \u05E4\u05B0\u05BC\u05E8\u05B4\u05D9 \u05E2\u05B5\u05E5 \u05D4\u05B8\u05D3\u05B8\u05E8 \u05DB\u05B7\u05BC\u05E4\u05B9\u05BC\u05EA \u05EA\u05B0\u05BC\u05DE\u05B8\u05E8\u05B4\u05D9\u05DD \u05D5\u05B7\u05E2\u05B2\u05E0\u05B7\u05E3 \u05E2\u05B5\u05E5 \u05E2\u05B8\u05D1\u05B9\u05EA \u05D5\u05B0\u05E2\u05B7\u05E8\u05B0\u05D1\u05B5\u05D9 \u05E0\u05B8\u05D7\u05B7\u05DC, <em>\u05D5\u05BC\u05E9\u05B0\u05C2\u05DE\u05B7\u05D7\u05B0\u05EA\u05B6\u05BC\u05DD \u05DC\u05B4\u05E4\u05B0\u05E0\u05B5\u05D9 \u05D4' \u05D0\u05B1\u05DC\u05B9\u05D4\u05B5\u05D9\u05DB\u05B6\u05DD \u05E9\u05B4\u05C1\u05D1\u05B0\u05E2\u05B7\u05EA \u05D9\u05B8\u05DE\u05B4\u05D9\u05DD</em>."</div>
                 <p class="src">\u05D5\u05D9\u05E7\u05E8\u05D0 \u05DB\u05D2, \u05DE</p>
                 <ul>
                   <li><b>\u05DE\u05E6\u05D5\u05D5\u05EA \u05D4\u05EA\u05D5\u05E8\u05D4</b> \u2014 \u05DC\u05E7\u05D9\u05D7\u05D4 \u05E9\u05DC \u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD \u05DB\u05D1\u05D9\u05D8\u05D5\u05D9 \u05E9\u05DC \u05E9\u05DE\u05D7\u05D4 \u05D1\u05D7\u05D2 \u05D4\u05E1\u05D5\u05DB\u05D5\u05EA. \u05D1\u05D1\u05D9\u05EA \u05D4\u05DE\u05E7\u05D3\u05E9 \u05E0\u05D8\u05DC\u05D5 \u05DB\u05DC \u05E9\u05D1\u05E2\u05EA \u05D4\u05D9\u05DE\u05D9\u05DD; \u05D5\u05DE\u05D0\u05D6 \u05D4\u05D7\u05D5\u05E8\u05D1\u05DF \u05E0\u05D5\u05D4\u05D2\u05D9\u05DD \u05DB\u05DA \u05D2\u05DD \u05DE\u05EA\u05E7\u05E0\u05EA \u05D7\u05DB\u05DE\u05D9\u05DD, "\u05D6\u05DB\u05E8 \u05DC\u05DE\u05E7\u05D3\u05E9".</li>
                   <li><b>\u05D4\u05D5\u05D3\u05D9\u05D4 \u05E2\u05DC \u05D4\u05E4\u05E8\u05D9 \u05D5\u05D4\u05D2\u05E9\u05DD</b> \u2014 \u05D7\u05D2 \u05D4\u05E1\u05D5\u05DB\u05D5\u05EA \u05D4\u05D5\u05D0 \u05D6\u05DE\u05DF \u05D0\u05E1\u05D9\u05E3, \u05D5\u05D1\u05D5 \u05E0\u05D9\u05D3\u05D5\u05E0\u05D9\u05DD \u05E2\u05DC \u05D4\u05DE\u05D9\u05DD. \u05D4\u05E2\u05E8\u05D1\u05D4 \u05D5\u05D4\u05DC\u05D5\u05DC\u05D1 \u05E9\u05D2\u05D3\u05DC\u05D9\u05DD \u05DC\u05D9\u05D3 \u05DE\u05D9\u05DD \u05DE\u05D6\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05D2\u05E9\u05DD.</li>
                   <li><b>\u05E0\u05D9\u05E6\u05D7\u05D5\u05DF \u05D1\u05D3\u05D9\u05DF</b> \u2014 \u05DC\u05E4\u05D9 \u05D4\u05DE\u05D3\u05E8\u05E9 (\u05D5\u05D9\u05E7\u05E8\u05D0 \u05E8\u05D1\u05D4 \u05DC, \u05D1) \u05DE\u05D9 \u05E9\u05D9\u05D5\u05E6\u05D0 \u05DE\u05D9\u05D5\u05DD \u05D4\u05DB\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD \u05D5\u05DC\u05D5\u05DC\u05D1\u05D5 \u05D1\u05D9\u05D3\u05D5 \u2014 \u05D4\u05D5\u05D0 \u05D9\u05D5\u05E6\u05D0 \u05DE\u05E0\u05E6\u05D7.</li>
                 </ul>`,enter(i){Qe(i,{cam:"table"}),Or(i.w)}},{title:"\u05D0\u05E8\u05D1\u05E2\u05D4 \u05E1\u05D5\u05D2\u05D9 \u05D9\u05D4\u05D5\u05D3\u05D9\u05DD \u2014 \u05D0\u05D2\u05D5\u05D3\u05D4 \u05D0\u05D7\u05EA",body:"<p>\u05D4\u05DE\u05D3\u05E8\u05E9 (\u05D5\u05D9\u05E7\u05E8\u05D0 \u05E8\u05D1\u05D4 \u05DC, \u05D9\u05D1) \u05DE\u05E9\u05D5\u05D5\u05D4 \u05DB\u05DC \u05DE\u05D9\u05DF \u05DC\u05E1\u05D5\u05D2 \u05D0\u05D7\u05E8 \u05D1\u05E2\u05DD \u05D9\u05E9\u05E8\u05D0\u05DC, \u05DC\u05E4\u05D9 <b>\u05D8\u05E2\u05DD</b> (\u05EA\u05D5\u05E8\u05D4) \u05D5<b>\u05E8\u05D9\u05D7</b> (\u05DE\u05E2\u05E9\u05D9\u05DD \u05D8\u05D5\u05D1\u05D9\u05DD). \u05D1\u05D7\u05E8\u05D5 \u05DE\u05D9\u05DF \u05D1\u05E6\u05D3 \u05D9\u05DE\u05D9\u05DF \u05D5\u05D0\u05D6 \u05D4\u05EA\u05D0\u05D9\u05DE\u05D5 \u05DC\u05D5 \u05D0\u05EA \u05D4\u05EA\u05D9\u05D0\u05D5\u05E8.</p>",async enter(i){let t=i.w;Qe(i,{cam:"table"});let e=Or(t);await i.match("\u05D4\u05EA\u05D0\u05D9\u05DE\u05D5 \u05DB\u05DC \u05DE\u05D9\u05DF \u05DC\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E9\u05DC\u05D5:",Di.map(n=>({id:n,label:Kn[n].name,dot:Kn[n].color})),Nc.map(n=>({id:n.species,label:n.type})),{onLeft:n=>t.highlight(e[n.id]),explain:n=>{let s=Nc.find(r=>r.species===n);return`\u05E0\u05DB\u05D5\u05DF! ${Kn[n].name} \u2014 \u05DB\u05DE\u05D5 ${s.means}.`}}),i.alive&&(t.highlight(null),i.add(it("div",{class:"verse"},'\u05DE\u05D4 \u05E2\u05D5\u05E9\u05D4 \u05D4\u05E7\u05D1"\u05D4? \u2014 "\u05D9\u05B4\u05E7\u05B8\u05BC\u05E9\u05B0\u05C1\u05E8\u05D5\u05BC \u05DB\u05BB\u05DC\u05B8\u05BC\u05DD \u05D0\u05B2\u05D2\u05BB\u05D3\u05B8\u05BC\u05D4 \u05D0\u05B7\u05D7\u05B7\u05EA, \u05D5\u05B0\u05D4\u05B5\u05DF \u05DE\u05B0\u05DB\u05B7\u05E4\u05B0\u05BC\u05E8\u05B4\u05D9\u05DF \u05D0\u05B5\u05DC\u05BC\u05D5\u05BC \u05E2\u05B7\u05DC \u05D0\u05B5\u05DC\u05BC\u05D5\u05BC."')),i.complete(100))}},{title:"\u05D4\u05DE\u05D9\u05E0\u05D9\u05DD \u05D5\u05D4\u05D0\u05D9\u05D1\u05E8\u05D9\u05DD",body:"<p>\u05D1\u05DE\u05D3\u05E8\u05E9 \u05E0\u05D5\u05E1\u05E3 (\u05D5\u05D9\u05E7\u05E8\u05D0 \u05E8\u05D1\u05D4 \u05DC, \u05D9\u05D3) \u05DB\u05DC \u05DE\u05D9\u05DF \u05E8\u05D5\u05DE\u05D6 \u05DC\u05D0\u05D9\u05D1\u05E8 \u05D1\u05D2\u05D5\u05E3 \u05D4\u05D0\u05D3\u05DD \u05E9\u05D1\u05D5 \u05D4\u05D5\u05D0 \u05DE\u05E9\u05D1\u05D7 \u05D0\u05EA \u05D1\u05D5\u05E8\u05D0\u05D5. \u05D4\u05EA\u05D0\u05D9\u05DE\u05D5:</p>",async enter(i){let t=i.w;Qe(i,{cam:"table"});let e=Or(t),n={etrog:"\u05D4\u05DC\u05D1",lulav:"\u05D4\u05E9\u05D3\u05E8\u05D4",hadas:"\u05D4\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD",arava:"\u05D4\u05E9\u05E4\u05EA\u05D9\u05D9\u05DD"};await i.match("\u05D0\u05D9\u05D6\u05D4 \u05D0\u05D9\u05D1\u05E8 \u05DE\u05E1\u05DE\u05DC \u05DB\u05DC \u05DE\u05D9\u05DF?",Di.map(s=>({id:s,label:Kn[s].name,dot:Kn[s].color})),Di.map(s=>({id:s,label:n[s]})),{onLeft:s=>t.highlight(e[s.id]),explain:s=>`\u05E0\u05DB\u05D5\u05DF! ${Kn[s].name} \u05DB\u05E0\u05D2\u05D3 ${n[s]}.`}),i.alive&&(t.highlight(null),i.add(it("p",{class:"note"},"\u05DB\u05E9\u05D0\u05D5\u05D7\u05D6\u05D9\u05DD \u05D0\u05EA \u05DB\u05D5\u05DC\u05DD \u05D9\u05D7\u05D3 \u2014 \u05DB\u05DC \u05D4\u05D2\u05D5\u05E3 \u05DB\u05D5\u05DC\u05D5 \u05DE\u05E9\u05D1\u05D7: \u05D4\u05DC\u05D1, \u05D4\u05E9\u05D3\u05E8\u05D4, \u05D4\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05D4\u05E9\u05E4\u05EA\u05D9\u05D9\u05DD.")),i.complete(100))}},{title:"\u05E9\u05D0\u05DC\u05EA \u05E1\u05D9\u05DB\u05D5\u05DD",body:"<p>\u05D1\u05D3\u05E7\u05D5 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DB\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05D4\u05E8\u05DB\u05D1\u05D4.</p>",async enter(i){Qe(i,{cam:"table"}),Or(i.w),await i.mc(`\u05D4\u05E4\u05E1\u05D5\u05E7 \u05DE\u05E1\u05D9\u05D9\u05DD \u05D0\u05EA \u05DE\u05E6\u05D5\u05D5\u05EA \u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD \u05D1\u05DE\u05D9\u05DC\u05D9\u05DD "\u05D5\u05BC___ \u05DC\u05B4\u05E4\u05B0\u05E0\u05B5\u05D9 \u05D4' \u05D0\u05B1\u05DC\u05B9\u05D4\u05B5\u05D9\u05DB\u05B6\u05DD \u05E9\u05B4\u05C1\u05D1\u05B0\u05E2\u05B7\u05EA \u05D9\u05B8\u05DE\u05B4\u05D9\u05DD". \u05DE\u05D4 \u05D7\u05E1\u05E8?`,[{t:"\u05D5\u05E9\u05DE\u05D7\u05EA\u05DD",ok:!0,why:`\u05E0\u05DB\u05D5\u05DF! "\u05D5\u05E9\u05DE\u05D7\u05EA\u05DD \u05DC\u05E4\u05E0\u05D9 \u05D4' \u05D0\u05DC\u05D4\u05D9\u05DB\u05DD \u05E9\u05D1\u05E2\u05EA \u05D9\u05DE\u05D9\u05DD" \u2014 \u05DE\u05E6\u05D5\u05D5\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D4\u05D9\u05D0 \u05D1\u05D9\u05D8\u05D5\u05D9 \u05E9\u05DC \u05E9\u05DE\u05D7\u05D4.`},{t:"\u05D5\u05D6\u05DB\u05E8\u05EA\u05DD",ok:!1,why:'"\u05D5\u05D6\u05DB\u05E8\u05EA\u05DD" \u05E0\u05D0\u05DE\u05E8 \u05D1\u05E6\u05D9\u05E6\u05D9\u05EA. \u05DB\u05D0\u05DF \u05E0\u05D0\u05DE\u05E8 "\u05D5\u05E9\u05DE\u05D7\u05EA\u05DD".'},{t:"\u05D5\u05E9\u05DE\u05E8\u05EA\u05DD",ok:!1,why:'"\u05D5\u05E9\u05DE\u05E8\u05EA\u05DD" \u05D0\u05D9\u05E0\u05E0\u05D5 \u05D4\u05E4\u05E1\u05D5\u05E7 \u05DB\u05D0\u05DF. \u05D7\u05E9\u05D1\u05D5 \u05E2\u05DC \u05D4\u05D7\u05D2 \u2014 \u05D6\u05DE\u05DF \u05E9\u05DE\u05D7\u05EA\u05E0\u05D5.'}]),i.alive&&(await i.mc("\u05DE\u05D3\u05D5\u05E2 \u05E7\u05D5\u05E9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D0\u05E8\u05D1\u05E2\u05EA \u05D4\u05DE\u05D9\u05E0\u05D9\u05DD \u05D9\u05D7\u05D3 \u05DC\u05D0\u05D2\u05D3 \u05D0\u05D7\u05D3?",[{t:'\u05DB\u05D3\u05D9 \u05E9\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D9\u05E9\u05E8\u05D0\u05DC \u05D9\u05D4\u05D9\u05D5 "\u05D0\u05D2\u05D5\u05D3\u05D4 \u05D0\u05D7\u05EA" \u05D5\u05D9\u05DB\u05E4\u05E8\u05D5 \u05D6\u05D4 \u05E2\u05DC \u05D6\u05D4',ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! \u05DB\u05DA \u05DC\u05D9\u05DE\u05D3\u05D5 \u05D7\u05DB\u05DE\u05D9\u05DD \u05D1\u05DE\u05D3\u05E8\u05E9."},{t:"\u05E8\u05E7 \u05DB\u05D3\u05D9 \u05E9\u05D9\u05D4\u05D9\u05D4 \u05E0\u05D5\u05D7 \u05DC\u05D0\u05D7\u05D5\u05D6",ok:!1,why:"\u05D9\u05E9 \u05D1\u05D6\u05D4 \u05D2\u05DD \u05E0\u05D5\u05D7\u05D5\u05EA, \u05D0\u05D1\u05DC \u05D4\u05D8\u05E2\u05DD \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05D1\u05DE\u05D3\u05E8\u05E9 \u05D4\u05D5\u05D0 \u05D4\u05D0\u05D7\u05D3\u05D5\u05EA."},{t:"\u05DB\u05D3\u05D9 \u05E9\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05DC\u05D0 \u05D9\u05EA\u05D1\u05DC\u05D1\u05DC \u05D1\u05D4\u05D3\u05E1",ok:!1,why:"\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D1\u05DB\u05DC\u05DC \u05DC\u05D0 \u05E0\u05E7\u05E9\u05E8 \u2014 \u05D4\u05D5\u05D0 \u05DE\u05D5\u05D7\u05D6\u05E7 \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC."}]),i.alive&&i.complete(100))}}]},{id:"build",icon:"\u{1F9F5}",title:"\u05D4\u05E8\u05DB\u05D1\u05EA \u05D4\u05D0\u05D2\u05D3",blurb:"\u05E9\u05D3\u05E8\u05D4 \u05D0\u05DC\u05D9\u05DA, \u05D1\u05D7\u05D9\u05E8\u05EA \u05D4\u05E2\u05E0\u05E4\u05D9\u05DD, \u05D2\u05D1\u05D4\u05D9\u05DD \u05D5\u05E7\u05E9\u05D9\u05E8\u05D4",recap:i=>`<ul><li>\u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05D0\u05DC \u05D4\u05DE\u05D7\u05D6\u05D9\u05E7</li><li>\u05E1\u05D9\u05D3\u05D5\u05E8 \u05D1\u05E0\u05D5\u05E1\u05D7 \u05E9\u05DC\u05DB\u05DD: ${Yo[i.N.arrangement].label}</li><li>\u05D4\u05DC\u05D5\u05DC\u05D1 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D1\u05D8\u05E4\u05D7 \u05DC\u05E4\u05D7\u05D5\u05EA</li><li>\u05E7\u05D5\u05E9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05D2\u05D3 \u05D1\u05D8\u05D1\u05E2\u05D5\u05EA; \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05DC\u05D0 \u05E0\u05E7\u05E9\u05E8</li></ul>`,steps:i=>{let t=Yo[i.N.arrangement],e=[];t.slots.forEach((r,a)=>{let o=e[e.length-1];o&&o.kind===r.kind?o.n++:e.push({kind:r.kind,n:1,start:a})});let n=(r,a,o=0,l=-.5)=>{let c=new $t,h=new pt(new de(.06,.07,.03,20),new qe({color:11569738,roughness:.7}));h.position.y=.015,c.add(h);let d=Nr({arrangement:i.N.arrangement,...a});return d.position.y=.03,c.add(d),c.position.set(o,Ui,l),r.stage.add(c),{holder:c,bundle:d}},s=[];return s.push({title:"\u05D4\u05DC\u05D5\u05DC\u05D1: \u05D4\u05E9\u05D3\u05E8\u05D4 \u05D0\u05DC\u05D9\u05DA",body:`<p>\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D1\u05DC\u05D5\u05DC\u05D1. <b>\u05D4\u05E9\u05D3\u05E8\u05D4</b> \u2014 \u05D4\u05D2\u05D1 \u05D4\u05E7\u05E9\u05D4 \u05D5\u05D4\u05E6\u05D4\u05D1\u05D4\u05D1 \u2014 \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05E4\u05E0\u05D5\u05EA <b>\u05D0\u05DC \u05D4\u05DE\u05D7\u05D6\u05D9\u05E7</b> (\u05D0\u05DC\u05D9\u05DB\u05DD), \u05D5\u05D4\u05E2\u05DC\u05D9\u05DD \u05D4\u05E4\u05E0\u05D9\u05DE\u05D9\u05D9\u05DD \u05DE\u05D5\u05E4\u05E0\u05D9\u05DD \u05D4\u05D7\u05D5\u05E6\u05D4.</p>
                 <p>\u05E1\u05D5\u05D1\u05D1\u05D5 \u05D0\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1 \u05E2\u05D3 \u05E9\u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05D0\u05DC\u05D9\u05DB\u05DD (\u05D4\u05DE\u05E6\u05DC\u05DE\u05D4 \u05D4\u05D9\u05D0 \u05D4\u05DE\u05D7\u05D6\u05D9\u05E7).</p>`,hint:r=>{let a=r.shared.lulavRef;if(a&&!a.userData.lab){let o=yi("\u05E9\u05D3\u05E8\u05D4",{size:56,scale:.0012});o.position.set(0,.35,.05),a.add(o),a.userData.lab=o}},enter(r){let a=r.w;Qe(r,{cam:"tableClose"});let{holder:o,bundle:l}=n(a,{slotCount:0,rings:0,handle:!1},0,-.5);r.shared.lulavRef=l;let c=[Math.PI/2,Math.PI,-Math.PI/2][Math.floor(Math.random()*3)];l.rotation.y=c;let h=!1,d=async u=>{if(h)return;h=!0;let f=c;c+=u,await a.tween(.45,y=>{l.rotation.y=f+(c-f)*y}),h=!1;let g=Math.cos(c);g>.94&&!r.isDone()?(r.good("\u05E0\u05DB\u05D5\u05DF! \u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05D0\u05DC\u05D9\u05DB\u05DD."),r.complete(100)):g<-.5&&r.info("\u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05DE\u05DB\u05DD \u05D5\u05D4\u05DC\u05D0\u05D4 \u2014 \u05E1\u05D5\u05D1\u05D1\u05D5 \u05E2\u05D5\u05D3.")};r.add(it("div",{class:"row"},it("button",{class:"primary",onclick:()=>{qt.click(),d(Math.PI/2)}},"\u27F2 \u05E1\u05D5\u05D1\u05D1\u05D5 \u05E9\u05DE\u05D0\u05DC\u05D4"),it("button",{class:"primary",onclick:()=>{qt.click(),d(-Math.PI/2)}},"\u05E1\u05D5\u05D1\u05D1\u05D5 \u05D9\u05DE\u05D9\u05E0\u05D4 \u27F3"))),r.onKey(u=>u.code==="ArrowLeft"?(d(Math.PI/2),!0):u.code==="ArrowRight"?(d(-Math.PI/2),!0):!1),r.add(it("p",{class:"muted"},'\u05E8\u05DE\u05D6: \u05DB\u05E4\u05EA\u05D5\u05E8 "\u05E8\u05DE\u05D6" \u05D9\u05E1\u05DE\u05DF \u05DC\u05DB\u05DD \u05D4\u05D9\u05DB\u05DF \u05D4\u05E9\u05D3\u05E8\u05D4.'))}}),e.forEach(r=>{let a=r.kind==="hadas";s.push({title:a?`\u05D4\u05D3\u05E1\u05D9\u05DD \u2014 ${r.n} \u05E2\u05E0\u05E4\u05D9\u05DD \u05DB\u05E9\u05E8\u05D9\u05DD`:`\u05E2\u05E8\u05D1\u05D5\u05EA \u2014 ${r.n} \u05E2\u05E0\u05E4\u05D9\u05DD \u05DB\u05E9\u05E8\u05D5\u05EA`,body:a?`<p>\u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD <b>${r.n} \u05E2\u05E0\u05E4\u05D9 \u05D4\u05D3\u05E1</b> \u05DC\u05D0\u05D2\u05D3. \u05D9\u05E9 \u05E2\u05DC \u05D4\u05E9\u05D5\u05DC\u05D7\u05DF \u05E2\u05E0\u05E4\u05D9\u05DD \u05DB\u05E9\u05E8\u05D9\u05DD \u05D5\u05E4\u05E1\u05D5\u05DC\u05D9\u05DD \u2014 \u05D1\u05D7\u05E8\u05D5 \u05E8\u05E7 \u05D0\u05EA \u05D4\u05DB\u05E9\u05E8\u05D9\u05DD (\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4\u05DD).</p><p class="note">${t.label}.</p>`:`<p>\u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD <b>${r.n} \u05E2\u05E0\u05E4\u05D9 \u05E2\u05E8\u05D1\u05D4</b> \u05DC\u05D0\u05D2\u05D3. \u05D1\u05D7\u05E8\u05D5 \u05E8\u05E7 \u05E2\u05E8\u05D1\u05D5\u05EA \u05DB\u05E9\u05E8\u05D5\u05EA (\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4\u05DF).</p><p class="note">${t.label}.</p>`,hint:o=>o.info(a?"\u05D4\u05D3\u05E1 \u05DB\u05E9\u05E8: \u05E9\u05DC\u05D5\u05E9\u05D4 \u05E2\u05DC\u05D9\u05DD \u05D1\u05DB\u05DC \u05E7\u05D5\u05DE\u05D4.":"\u05E2\u05E8\u05D1\u05D4 \u05DB\u05E9\u05E8\u05D4: \u05E2\u05DC\u05D9\u05DD \u05D0\u05E8\u05D5\u05DB\u05D9\u05DD \u05D5\u05E6\u05E8\u05D9\u05DD, \u05E9\u05E4\u05D4 \u05D7\u05DC\u05E7\u05D4, \u05E7\u05E0\u05D4 \u05D0\u05D3\u05DE\u05D3\u05DD."),enter(o){let l=o.w;Qe(o,{cam:"table"});let c={n:0,holder:null,bundle:null},h=()=>{c.holder&&l.stage.remove(c.holder);let p=n(l,{slotCount:r.start+c.n,rings:0},-.42,-.5);c.holder=p.holder,c.bundle=p.bundle};h();let d=r.n,u=Array.from({length:d},(p,v)=>({ok:!0,seed:20+v})),f=Array.from({length:2},(p,v)=>({ok:!1,seed:40+v})),g=[-.08,.1,.28,.46,.64].slice(0,u.length+f.length),y=o.add(it("div",{class:"counter"},`\u05D7\u05D5\u05D1\u05E8\u05D5: 0 \u05DE\u05EA\u05D5\u05DA ${d}`));Li([...u,...f]).forEach((p,v)=>{let T=a?Ps({length:Oe.hadas,variant:p.ok?"kosher":"pairs",seed:p.seed}):Is({length:Oe.arava,variant:p.ok?"smooth":"serrated",seed:p.seed}),M=Ni(l,a?"hadas":"arava",g[v],-.86,{pick:!0,obj:T});M.userData.pick={c:p}});let m=!1;l.pickCb=async p=>{if(!p||m||!p.pick.c)return;if(!p.pick.c.ok){o.mistake(a?"\u05D1\u05E2\u05E0\u05E3 \u05D4\u05D6\u05D4 \u05D4\u05E2\u05DC\u05D9\u05DD \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD <b>\u05D1\u05D6\u05D5\u05D2\u05D5\u05EA</b> \u2014 \u05D4\u05D3\u05E1 \u05E4\u05E1\u05D5\u05DC.":"\u05D1\u05E2\u05E0\u05E3 \u05D4\u05D6\u05D4 \u05D4\u05E2\u05DC\u05D9\u05DD <b>\u05DE\u05E9\u05D5\u05E0\u05E0\u05D9\u05DD</b> \u05D5\u05E8\u05D7\u05D1\u05D9\u05DD \u2014 \u05DC\u05D0 \u05E2\u05E8\u05D1\u05D4 \u05DB\u05E9\u05E8\u05D4.");return}m=!0,l.pickables=l.pickables.filter(S=>S!==p.root);let T=p.root.position.clone(),M=new I(-.42,Ui+.2,-.46);await l.tween(.6,S=>{p.root.position.lerpVectors(T,M,S),p.root.position.y+=Math.sin(S*Math.PI)*.18}),l.stage.remove(p.root),c.n++,h(),qt.ok(),y.textContent=`\u05D7\u05D5\u05D1\u05E8\u05D5: ${c.n} \u05DE\u05EA\u05D5\u05DA ${d}`,m=!1,c.n===d&&(o.good("\u05DE\u05E6\u05D5\u05D9\u05DF! \u05DB\u05DC \u05D4\u05E2\u05E0\u05E4\u05D9\u05DD \u05D4\u05DB\u05E9\u05E8\u05D9\u05DD \u05D7\u05D5\u05D1\u05E8\u05D5."),o.complete(100))}}})}),s.push({title:"\u05D2\u05D5\u05D1\u05D4 \u05D4\u05E2\u05E0\u05E4\u05D9\u05DD",body:'<p>\u05D0\u05D9\u05D6\u05D4 \u05D0\u05D2\u05D3 \u05DE\u05E1\u05D5\u05D3\u05E8 \u05E0\u05DB\u05D5\u05DF? <b>\u05D4\u05DC\u05D5\u05DC\u05D1 \u05D4\u05D5\u05D0 \u05D4\u05D2\u05D1\u05D5\u05D4 \u05DE\u05DB\u05D5\u05DC\u05DD</b> \u2014 \u05D4\u05D5\u05D0 \u05E2\u05D5\u05DC\u05D4 \u05E2\u05DC \u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D5\u05D4\u05E2\u05E8\u05D1\u05D5\u05EA <b>\u05D1\u05D8\u05E4\u05D7 \u05DC\u05E4\u05D7\u05D5\u05EA</b> (\u05DB\u05BE8\u201310 \u05E1"\u05DE). \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05D0\u05D2\u05D3 \u05D4\u05DE\u05E1\u05D5\u05D3\u05E8 \u05E0\u05DB\u05D5\u05DF.</p>',hint:r=>r.info("\u05D7\u05E4\u05E9\u05D5 \u05D0\u05EA \u05D4\u05D0\u05D2\u05D3 \u05E9\u05D1\u05D5 \u05E8\u05D0\u05E9 \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05D5\u05DC\u05D8 \u05D1\u05D1\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E2\u05DC \u05D4\u05D4\u05D3\u05E1\u05D9\u05DD, \u05D0\u05DA \u05DC\u05D0 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D3\u05D9."),enter(r){let a=r.w;Qe(r,{cam:"table"});let o=[{hadasTip:.7,aravaTip:.62,ok:!1,why:"\u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05DB\u05D0\u05DF \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05DE\u05D4\u05DC\u05D5\u05DC\u05D1. \u05D4\u05DC\u05D5\u05DC\u05D1 \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D4\u05D2\u05D1\u05D5\u05D4 \u05DE\u05DB\u05D5\u05DC\u05DD."},{hadasTip:.62,aravaTip:.58,ok:!1,why:'\u05D4\u05DC\u05D5\u05DC\u05D1 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05E8\u05E7 \u05D1\u05DB\u05DE\u05D4 \u05E1"\u05DE \u2014 \u05E6\u05E8\u05D9\u05DA <b>\u05D8\u05E4\u05D7 \u05DC\u05E4\u05D7\u05D5\u05EA</b>.'},{hadasTip:Oe.hadas,aravaTip:Oe.arava,ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D1\u05D8\u05E4\u05D7 \u05D5\u05D9\u05D5\u05EA\u05E8, \u05D5\u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05DE\u05E2\u05D8 \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05DE\u05D4\u05E2\u05E8\u05D1\u05D5\u05EA (\u05DE\u05DF \u05D4\u05D4\u05D9\u05D3\u05D5\u05E8)."}];Li(o).forEach((c,h)=>{let{holder:d}=n(a,{hadasTip:c.hadasTip,aravaTip:c.aravaTip,rings:3,arrangement:i.N.arrangement},[-.5,0,.5][h],-.55);d.userData.pick={d:c};let u=Uc(a,.75,.09);d.add(u),a.addPickable(d);let f=yi(["\u05D0","\u05D1","\u05D2"][h],{size:56,scale:.0016});f.position.set(0,.86,0),d.add(f)});let l=!1;a.pickCb=c=>{if(!c||l)return;let h=c.pick.d;h.ok?(l=!0,a.highlight(c.root),r.good(h.why),r.complete(100)):r.mistake(h.why)}}}),s.push({title:"\u05E7\u05D5\u05E9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05D2\u05D3",body:`<p>\u05DB\u05D3\u05D9 \u05E9\u05D9\u05D4\u05D9\u05D5 "\u05D0\u05D2\u05D5\u05D3\u05D4 \u05D0\u05D7\u05EA" \u05E7\u05D5\u05E9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D5\u05D4\u05E2\u05E8\u05D1\u05D5\u05EA \u05D0\u05DC \u05E9\u05D3\u05E8\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1. <b>\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05D8\u05D1\u05E2\u05D5\u05EA \u05D4\u05D6\u05D5\u05D4\u05E8\u05D5\u05EA</b> \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E0\u05D9\u05D7 \u05D0\u05D5\u05EA\u05DF \u2014 \u05E0\u05D4\u05D5\u05D2 <b>\u05E9\u05DC\u05D5\u05E9 \u05D8\u05D1\u05E2\u05D5\u05EA</b>, \u05D1\u05D2\u05D1\u05D4\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD.</p>
                 <p class="note">\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D0\u05D9\u05E0\u05D5 \u05E0\u05E7\u05E9\u05E8: \u05D4\u05D5\u05D0 \u05E0\u05E9\u05D0\u05E8 \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC.</p>`,enter(r){let a=r.w;Qe(r,{cam:"tableClose"});let{holder:o,bundle:l}=n(a,{slotCount:5,rings:0},0,-.5),c=0;[.16,.24,.32].forEach(h=>{let d=Zo(h,!0);d.scale.set(1.15,.9,1.15);let u=new pt(new de(.06,.06,.05,12),new Ue({visible:!1}));u.position.set(0,h,.02),u.userData.pick={ring:h,ghost:d},d.userData.pick={ring:h,ghost:d,hitM:u},u.userData.pick.hitM=u,l.add(d,u),a.addPickable(u),a.addPickable(d)}),a.pickCb=h=>{if(!h||!h.pick.ring)return;let{ring:d,ghost:u,hitM:f}=h.pick;a.pickables=a.pickables.filter(g=>g!==u&&g!==f),l.remove(u,f),l.add(Zo(d)),c++,qt.ok(),a.highlight(null),c===3&&(r.good("\u05D4\u05D0\u05D2\u05D3 \u05E7\u05E9\u05D5\u05E8 \u05D4\u05D9\u05D8\u05D1!"),r.complete(100))}}}),s.push({title:"\u05D4\u05D0\u05D2\u05D3 \u05DE\u05D5\u05DB\u05DF",auto:!0,body:`<p>\u05D4\u05D0\u05D2\u05D3 \u05E9\u05DC\u05DB\u05DD \u05DE\u05D5\u05DB\u05DF \u2014 \u05D1\u05E1\u05D9\u05D3\u05D5\u05E8 \u05E9\u05DC \u05E0\u05D5\u05E1\u05D7 <b>${i.N.name}</b>: <b>${t.label}</b>.</p>
                 <ul><li>\u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05D0\u05DC\u05D9\u05DB\u05DD.</li><li>\u05D4\u05DC\u05D5\u05DC\u05D1 \u05D2\u05D1\u05D5\u05D4 \u05DE\u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D1\u05D8\u05E4\u05D7 \u05DC\u05E4\u05D7\u05D5\u05EA.</li><li>\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05E0\u05E9\u05D0\u05E8 \u05E0\u05E4\u05E8\u05D3, \u05DC\u05D9\u05D3\u05D9\u05D9\u05DD.</li></ul>
                 <p class="note">\u05D9\u05E9 \u05E7\u05D4\u05D9\u05DC\u05D5\u05EA \u05D5\u05DE\u05E0\u05D4\u05D2\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05D1\u05E1\u05D9\u05D3\u05D5\u05E8 \u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D5\u05D4\u05E2\u05E8\u05D1\u05D5\u05EA \u05E1\u05D1\u05D9\u05D1 \u05D4\u05DC\u05D5\u05DC\u05D1 \u2014 \u05E0\u05D4\u05D2\u05D5 \u05DB\u05DE\u05E0\u05D4\u05D2 \u05E7\u05D4\u05D9\u05DC\u05EA\u05DB\u05DD.</p>`,enter(r){let a=r.w;Qe(r,{cam:"tableClose"});let{bundle:o}=n(a,{slotCount:5,rings:3},0,-.5),l=Ni(a,"etrog",.35,-.5,{pick:!1});a.updaters.push(c=>{o.rotation.y+=c*.5})}}),s}},{id:"hold",icon:"\u{1F932}",title:"\u05D0\u05D7\u05D9\u05D6\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4",blurb:"\u05DC\u05D5\u05DC\u05D1 \u05D1\u05D9\u05DE\u05D9\u05DF, \u05D0\u05EA\u05E8\u05D5\u05D2 \u05D1\u05E9\u05DE\u05D0\u05DC \u2014 \u05D5\u05DC\u05DE\u05D4 \u05D4\u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05D8\u05D4",recap:()=>"<ul><li>\u05D4\u05DC\u05D5\u05DC\u05D1 (\u05E2\u05DD \u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D5\u05D4\u05E2\u05E8\u05D1\u05D5\u05EA) \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF, \u05D4\u05E9\u05D3\u05E8\u05D4 \u05D0\u05DC\u05D9\u05DA</li><li>\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC</li><li>\u05DC\u05E4\u05E0\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4 \u2014 \u05D4\u05E4\u05D9\u05D8\u05DD <b>\u05DC\u05DE\u05D8\u05D4</b></li></ul>",steps:i=>[{title:"\u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05D0\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1 \u2014 \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF",body:`<p>\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D1<b>\u05DC\u05D5\u05DC\u05D1</b>: \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5 <b>\u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF</b>, \u05DB\u05E9\u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05D0\u05DC\u05D9\u05DB\u05DD. \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05DC\u05D5\u05DC\u05D1 \u05E2\u05DC \u05D4\u05E9\u05D5\u05DC\u05D7\u05DF.</p>
                 <p class="note">\u05DE\u05D9 \u05E9\u05E9\u05DE\u05D0\u05DC\u05D9 (\u05D0\u05D9\u05D8\u05E8 \u05D9\u05D3) \u2014 \u05D9\u05E9\u05D0\u05DC \u05D0\u05EA \u05E8\u05D1\u05D5 \u05D1\u05D0\u05D9\u05D6\u05D5 \u05D9\u05D3 \u05DC\u05D0\u05D7\u05D5\u05D6.</p>`,enter(t){let e=t.w;Qe(t,{avatar:!0,table:!0,cam:"hero"});let n=new $t,s=new pt(new de(.06,.07,.03,20),new qe({color:11569738}));s.position.y=.015,n.add(s);let r=Nr({arrangement:i.N.arrangement});r.position.y=.03,n.add(r),n.position.set(.3,Ui,-.42),n.userData.pick={id:"bundle"},n.add(Uc(e,.7,.08)),e.stage.add(n),e.addPickable(n);let a=Ni(e,"etrog",-.2,-.42,{pick:!0});t.shared.et=a;let o=!1;e.pickCb=async l=>{if(!l||o||t.isDone())return;if(l.pick.id==="etrog"){t.mistake("\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05D3\u05D5\u05D5\u05E7\u05D0 \u05D1\u05DC\u05D5\u05DC\u05D1, \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF. \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D9\u05D1\u05D5\u05D0 \u05D0\u05D7\u05E8 \u05DB\u05DA.");return}o=!0,e.highlight(null),e.pickables=[];let c=new I().setFromMatrixPosition(r.matrixWorld).add(new I(0,.075,0));await e.handsTo({r:[c.x,c.y,c.z],lean:.3,gripR:1.05},.9),e.attach(r,"r"),r.position.set(0,-.075,0),e.stage.remove(n),await e.handsTo({r:Ns.carry.r,lean:.15},.9),t.good("\u05E0\u05D4\u05D3\u05E8! \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF \u05D5\u05D4\u05E9\u05D3\u05E8\u05D4 \u05E4\u05D5\u05E0\u05D4 \u05D0\u05DC\u05D9\u05DB\u05DD."),t.complete(100)}}},{title:"\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u2014 \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC",body:"<p>\u05E2\u05DB\u05E9\u05D9\u05D5 \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05D0\u05EA <b>\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2</b> \u05D1\u05D9\u05D3 <b>\u05E9\u05DE\u05D0\u05DC</b>. \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2.</p>",enter(t){let e=t.w;Qe(t,{avatar:!0,table:!0,cam:"hero"});let n=Nr({arrangement:i.N.arrangement});e.stage.add(n),e.attach(n,"r"),n.position.set(0,-.075,0),e.held={bundle:n,etrog:null},Fc(e,{...Ns.carry,l:Ns.rest.l,gripL:.7,lean:.15});let s=Ni(e,"etrog",-.2,-.42,{pick:!0}),r=!1;e.pickCb=async a=>{if(!a||r||t.isDone())return;r=!0,e.highlight(null),e.pickables=[];let o=new I(-.2,Ui+.087,-.42);await e.handsTo({l:[o.x,o.y,o.z],lean:.3,gripL:1.45},.9);let l=s.userData.obj;e.stage.add(l),l.position.copy(o),l.scale.set(1,1,1),l.rotation.set(0,0,0),e.stage.remove(s),e.attach(l,"l"),l.position.set(0,0,0),e.held.etrog=l,await e.handsTo({l:Ns.carry.l,lean:.06},.9),t.good("\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC. \u05E2\u05DB\u05E9\u05D9\u05D5 \u05E6\u05E8\u05D9\u05DA \u05DC\u05E1\u05D3\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05E0\u05DB\u05D5\u05DF \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4."),t.complete(100)}}},{title:"\u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u2014 \u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05D8\u05D4",body:`<p>\u05DC\u05E4\u05E0\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4 \u05DE\u05D7\u05D6\u05D9\u05E7\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 <b>\u05D4\u05E4\u05D5\u05DA</b>: \u05D4\u05E4\u05D9\u05D8\u05DD <b>\u05DC\u05DE\u05D8\u05D4</b> \u05D5\u05D4\u05E2\u05D5\u05E7\u05E5 \u05DC\u05DE\u05E2\u05DC\u05D4. \u05E1\u05D5\u05D1\u05D1\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05DC\u05EA\u05E0\u05D5\u05D7\u05D4 \u05D4\u05E0\u05DB\u05D5\u05E0\u05D4.</p>
                 <p class="note">\u05DB\u05E8\u05D2\u05E2 \u05D4\u05D5\u05D0 \u05DE\u05D5\u05D7\u05D6\u05E7 "\u05DB\u05D3\u05E8\u05DA \u05D2\u05D9\u05D3\u05D5\u05DC\u05D5" \u2014 \u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4.</p>`,hint:t=>t.info("\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05DB\u05E4\u05EA\u05D5\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05E2\u05D3 \u05E9\u05D4\u05E4\u05D9\u05D8\u05DD \u05E4\u05D5\u05E0\u05D4 \u05DC\u05DE\u05D8\u05D4."),enter(t){let e=t.w,{etrog:n}=gn(t,{inverted:!1,table:!0,cam:"heroClose"}),s=yi("\u05E4\u05D9\u05D8\u05DD",{size:50,scale:7e-4});s.position.set(.1,.075,0),n.add(s);let r=yi("\u05E2\u05D5\u05E7\u05E5",{size:50,scale:7e-4});r.position.set(.1,-.075,0),n.add(r);let a=!1,o=t.button("\u{1F504} \u05D4\u05E4\u05DB\u05D5 \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2",async()=>{a||(a=!0,await e.flipEtrog(e.etrogInverted),a=!1,e.etrogInverted?(t.good("\u05E0\u05DB\u05D5\u05DF! \u05D4\u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05D8\u05D4."),t.complete(100)):t.info("\u05DB\u05E8\u05D2\u05E2 \u05D4\u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4. \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4 \u2014 \u05D4\u05E4\u05D9\u05D8\u05DD \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05DE\u05D8\u05D4."))})}},{title:"\u05DC\u05DE\u05D4 \u05D4\u05E4\u05D5\u05DA?",body:"<p>\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D5\u05DA \u05D5\u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05D9\u05DE\u05D9\u05DF \u2014 \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05D1\u05E8\u05DB\u05D4. \u05D0\u05D1\u05DC \u05DC\u05DE\u05D4 \u05DE\u05D7\u05D6\u05D9\u05E7\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D5\u05DA?</p>",async enter(t){gn(t,{inverted:!0,table:!0,cam:"heroClose"}),await t.mc("\u05DC\u05DE\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4 \u05DE\u05D7\u05D6\u05D9\u05E7\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D5\u05DA (\u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05D8\u05D4)?",[{t:'\u05DB\u05D3\u05D9 \u05E9\u05DC\u05D0 \u05DC\u05E7\u05D9\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D1\u05E8\u05DB\u05D4 \u2014 \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4 \u05DE\u05EA\u05E7\u05D9\u05D9\u05DE\u05EA \u05DB\u05E9\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05DE\u05D5\u05D7\u05D6\u05E7 \u05DB\u05D3\u05E8\u05DA \u05D2\u05D9\u05D3\u05D5\u05DC\u05D5 (\u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4), \u05D5\u05D4\u05D1\u05E8\u05DB\u05D4 \u05E0\u05D0\u05DE\u05E8\u05EA "\u05E2\u05D5\u05D1\u05E8 \u05DC\u05E2\u05E9\u05D9\u05D9\u05EA\u05DF", \u05DC\u05E4\u05E0\u05D9 \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4',ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! \u05DB\u05DA \u05D4\u05D1\u05E8\u05DB\u05D4 \u05D1\u05D0\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4, \u05D5\u05DB\u05E9\u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5 \u05D0\u05D7\u05E8\u05D9\u05D4 \u2014 \u05DE\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4."},{t:"\u05DB\u05D3\u05D9 \u05E9\u05D4\u05E4\u05D9\u05D8\u05DD \u05DC\u05D0 \u05D9\u05E9\u05D1\u05E8",ok:!1,why:"\u05D6\u05D5 \u05DC\u05D0 \u05D4\u05E1\u05D9\u05D1\u05D4. \u05D4\u05D8\u05E2\u05DD \u05E7\u05E9\u05D5\u05E8 \u05DC\u05DB\u05DA \u05E9\u05D4\u05D1\u05E8\u05DB\u05D4 \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05DC\u05E4\u05E0\u05D9 \u05E7\u05D9\u05D5\u05DD \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4."},{t:"\u05DB\u05D9 \u05DB\u05DA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D9\u05E6\u05D9\u05D1 \u05D9\u05D5\u05EA\u05E8 \u05D1\u05D9\u05D3",ok:!1,why:'\u05D9\u05E6\u05D9\u05D1\u05D5\u05EA \u05D4\u05D9\u05D0 \u05DC\u05D0 \u05D4\u05D8\u05E2\u05DD. \u05D4\u05E1\u05D9\u05D1\u05D4 \u05D4\u05D9\u05D0 "\u05E2\u05D5\u05D1\u05E8 \u05DC\u05E2\u05E9\u05D9\u05D9\u05EA\u05DF" \u2014 \u05D1\u05E8\u05DB\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4.'}]),t.alive&&(await t.mc("\u05D1\u05D0\u05D9\u05D6\u05D5 \u05D9\u05D3 \u05D0\u05D5\u05D7\u05D6\u05D9\u05DD \u05D0\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1 (\u05E2\u05DD \u05D4\u05D4\u05D3\u05E1\u05D9\u05DD \u05D5\u05D4\u05E2\u05E8\u05D1\u05D5\u05EA) \u05D5\u05D1\u05D0\u05D9\u05D6\u05D5 \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2?",[{t:"\u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF, \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC",ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! (\u05DE\u05D9 \u05E9\u05E9\u05DE\u05D0\u05DC\u05D9 \u05D9\u05E9\u05D0\u05DC \u05D0\u05EA \u05E8\u05D1\u05D5.)"},{t:"\u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC, \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF",ok:!1,why:"\u05D4\u05D4\u05E4\u05DA: \u05D4\u05DC\u05D5\u05DC\u05D1 \u2014 \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF."},{t:"\u05D4\u05DB\u05D5\u05DC \u05D1\u05D9\u05D3 \u05D0\u05D7\u05EA",ok:!1,why:"\u05D9\u05E9 \u05E9\u05EA\u05D9 \u05D9\u05D3\u05D9\u05D9\u05DD, \u05D5\u05D1\u05E1\u05D5\u05E3 \u05DE\u05E6\u05DE\u05D9\u05D3\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05D6\u05D5 \u05DC\u05D6\u05D5."}]),t.alive&&t.complete(100))}}]},{id:"bless",icon:"\u{1F64F}",title:"\u05D4\u05D1\u05E8\u05DB\u05D4",blurb:"\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1, \u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5 \u05D5\u05D4\u05E1\u05D3\u05E8 \u05D4\u05E0\u05DB\u05D5\u05DF",recap:()=>'<ul><li>"\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1" \u2014 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4, \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D5\u05DA</li><li>\u05D1\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u2014 \u05D2\u05DD "\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5", \u05D5\u05D0\u05D6 \u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2</li><li>\u05D0\u05D7\u05E8 \u05DB\u05DA \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD</li></ul>',steps:()=>[{title:"\u05DE\u05D1\u05E8\u05DB\u05D9\u05DD: \u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1",body:'<p>\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D5\u05DA, \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05D9\u05DE\u05D9\u05DF \u2014 \u05DE\u05D1\u05E8\u05DB\u05D9\u05DD. \u05D4\u05D1\u05E8\u05DB\u05D4 \u05E0\u05D0\u05DE\u05E8\u05EA <b>\u05DC\u05E4\u05E0\u05D9</b> \u05E7\u05D9\u05D5\u05DD \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4 ("\u05E2\u05D5\u05D1\u05E8 \u05DC\u05E2\u05E9\u05D9\u05D9\u05EA\u05DF"):</p>',enter(i){gn(i,{inverted:!0,cam:"heroClose"});let t=it("div",{class:"bless"}),e=Jo.netilat.map(r=>it("span",{class:"bw"},r));t.append(...e.flatMap(r=>[r," "])),i.add(t);let n=!1,s=i.button("\u25B6 \u05D0\u05DE\u05E8\u05D5 \u05D0\u05EA \u05D4\u05D1\u05E8\u05DB\u05D4",async()=>{if(n)return;n=!0,e.forEach(a=>a.classList.remove("on","done"));let r=ju(Jo.netilat.join(" "));for(let a of e){if(!i.alive)return;a.classList.add("on"),await jn(r?620:480),a.classList.remove("on"),a.classList.add("done")}if(n=!1,!i.isDone()){i.good("\u05E2\u05DB\u05E9\u05D9\u05D5 \u05E2\u05D5\u05E0\u05D9\u05DD <b>\u05D0\u05DE\u05DF</b>.");let a=i.button("\u05D0\u05DE\u05DF \u{1F64F}",()=>{a.remove(),i.complete(100)},"primary big")}});i.add(it("p",{class:"muted"},"\u05D0\u05DD \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05EA\u05D5\u05DE\u05DA \u2014 \u05EA\u05D9\u05E9\u05DE\u05E2 \u05D2\u05DD \u05D4\u05E7\u05E8\u05D0\u05D4 (\u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E9\u05EA\u05D9\u05E7 \u05D1\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D4\u05E8\u05DE\u05E7\u05D5\u05DC)."))}},{title:"\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5 \u2014 \u05DE\u05EA\u05D9?",body:`<p>\u05D1\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05D1\u05D5 \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05DC\u05D5\u05DC\u05D1 \u05D1\u05E9\u05E0\u05D4 \u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05D1\u05E8\u05DB\u05EA <b>\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5</b> \u2014 <b>\u05D0\u05D7\u05E8\u05D9</b> "\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1" \u05D5\u05DC\u05E4\u05E0\u05D9 \u05E9\u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2:</p>
                 <div class="bless mini">${Jo.shehecheyanu.join(" ")}</div>`,async enter(i){gn(i,{inverted:!0,cam:"heroClose"}),await i.mc("\u05D4\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC \u05E1\u05D5\u05DB\u05D5\u05EA (\u05D1\u05D7\u05D5\u05DC), \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05DC\u05D5\u05DC\u05D1 \u05DC\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D4\u05E9\u05E0\u05D4. \u05D0\u05D9\u05DC\u05D5 \u05D1\u05E8\u05DB\u05D5\u05EA \u05DE\u05D1\u05E8\u05DB\u05D9\u05DD?",[{t:'"\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1" \u05D5\u05D0\u05D7\u05E8\u05D9\u05D4 "\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5"',ok:!0,why:'\u05E0\u05DB\u05D5\u05DF! \u05E7\u05D5\u05D3\u05DD "\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1" \u05D5\u05D0\u05D7\u05E8\u05D9\u05D4 "\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5".'},{t:'\u05E8\u05E7 "\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1"',ok:!1,why:'\u05D1\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05D1\u05E9\u05E0\u05D4 \u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05D2\u05DD "\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5".'},{t:'"\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5" \u05D5\u05D0\u05D7\u05E8\u05D9\u05D4 "\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1"',ok:!1,why:'\u05D4\u05E1\u05D3\u05E8: \u05E7\u05D5\u05D3\u05DD \u05D1\u05E8\u05DB\u05EA \u05D4\u05DE\u05E6\u05D5\u05D5\u05D4, \u05D5\u05D0\u05D7\u05E8\u05D9\u05D4 "\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5".'}]),i.alive&&(await jn(600),i.clear(),await i.mc("\u05D4\u05D9\u05D5\u05DD \u05D4\u05E9\u05DC\u05D9\u05E9\u05D9 \u05E9\u05DC \u05D4\u05D7\u05D2 \u2014 \u05DE\u05D4 \u05DE\u05D1\u05E8\u05DB\u05D9\u05DD?",[{t:'\u05E8\u05E7 "\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1"',ok:!0,why:'\u05E0\u05DB\u05D5\u05DF! "\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5" \u05E0\u05D0\u05DE\u05E8 \u05E8\u05E7 \u05D1\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF (\u05D1\u05E4\u05E2\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05E9\u05E0\u05D4).'},{t:'"\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1" \u05D5"\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5"',ok:!1,why:'"\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5" \u05E0\u05D0\u05DE\u05E8 \u05E8\u05E7 \u05D1\u05E4\u05E2\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D1\u05E9\u05E0\u05D4.'}]),i.alive&&(await jn(600),i.clear(),await i.mc("\u05D7\u05DC \u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC \u05E1\u05D5\u05DB\u05D5\u05EA \u05D1\u05E9\u05D1\u05EA. \u05D4\u05D0\u05DD \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05DC\u05D5\u05DC\u05D1?",[{t:"\u05DC\u05D0 \u2014 \u05D0\u05D9\u05DF \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05DC\u05D5\u05DC\u05D1 \u05D1\u05E9\u05D1\u05EA (\u05D5\u05D4\u05E0\u05D8\u05D9\u05DC\u05D4 \u05D5\u05D4\u05D1\u05E8\u05DB\u05D4 \u05E0\u05D3\u05D7\u05D5\u05EA \u05DC\u05D9\u05D5\u05DD \u05D4\u05D1\u05D0)",ok:!0,why:'\u05E0\u05DB\u05D5\u05DF! \u05D1\u05E9\u05D1\u05EA \u05D0\u05D9\u05DF \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05DC\u05D5\u05DC\u05D1, \u05D5"\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5" \u05E0\u05D0\u05DE\u05E8 \u05D1\u05E4\u05E2\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05E9\u05E0\u05D5\u05D8\u05DC\u05D9\u05DD.'},{t:"\u05DB\u05DF, \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DB\u05DE\u05D5 \u05D1\u05E9\u05D0\u05E8 \u05D4\u05D9\u05DE\u05D9\u05DD",ok:!1,why:"\u05D1\u05E9\u05D1\u05EA \u05D0\u05D9\u05DF \u05E0\u05D5\u05D8\u05DC\u05D9\u05DD \u05DC\u05D5\u05DC\u05D1. (\u05DE\u05E7\u05D5\u05E8\u05D4 \u05D1\u05D2\u05D6\u05E8\u05EA \u05D7\u05DB\u05DE\u05D9\u05DD.)"}]),i.alive&&i.complete(100)))}},{title:"\u05E1\u05D3\u05E8 \u05D4\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA",body:"<p>\u05E1\u05D3\u05E8\u05D5 \u05E0\u05DB\u05D5\u05DF \u05D0\u05EA \u05D4\u05E9\u05DC\u05D1\u05D9\u05DD \u05DE\u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05D0\u05D7\u05E8\u05D5\u05DF \u2014 \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD.</p>",async enter(i){let t=i.w;gn(i,{inverted:!0,cam:"heroClose"}),await i.order("\u05DE\u05D4 \u05D4\u05E1\u05D3\u05E8?",["\u05D0\u05D5\u05D7\u05D6\u05D9\u05DD \u05DC\u05D5\u05DC\u05D1 \u05D1\u05D9\u05D3 \u05D9\u05DE\u05D9\u05DF \u05D5\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D5\u05DA \u05D1\u05D9\u05D3 \u05E9\u05DE\u05D0\u05DC",'\u05DE\u05D1\u05E8\u05DB\u05D9\u05DD "\u05E2\u05DC \u05E0\u05D8\u05D9\u05DC\u05EA \u05DC\u05D5\u05DC\u05D1"','\u05D1\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF: \u05DE\u05D1\u05E8\u05DB\u05D9\u05DD "\u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5"',"\u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 (\u05E4\u05D9\u05D8\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4) \u05D5\u05DE\u05E6\u05DE\u05D9\u05D3\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D3\u05D9\u05D9\u05DD","\u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05DC\u05DB\u05DC \u05D4\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD"]),i.alive&&(await t.flipEtrog(!0),await t.handsTo({r:[.09,1.14,-.4],l:[.03,1.2,-.4]},.5),i.good("\u05DB\u05DA \u05E2\u05D5\u05E9\u05D9\u05DD: \u05D4\u05D0\u05EA\u05E8\u05D5\u05D2 \u05D4\u05E4\u05D5\u05DA \u2014 \u05D1\u05E8\u05DB\u05D4 \u2014 \u05E9\u05D4\u05D7\u05D9\u05D9\u05E0\u05D5 \u2014 \u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u2014 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD."),i.complete(100))}}]},{id:"shake",icon:"\u{1F9ED}",title:"\u05D4\u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD",blurb:"\u05DC\u05D0\u05D9\u05D6\u05D4 \u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD, \u05D1\u05D0\u05D9\u05D6\u05D4 \u05E1\u05D3\u05E8 \u2014 \u05D5\u05DC\u05DE\u05D4",recap:i=>`<ul><li>\u05E9\u05E9\u05D4 \u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD: ${i.N.order.map(t=>ye[t].name).join(", ")}</li><li>\u05D1\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05DC\u05D5\u05E9 \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA, \u05D4\u05DC\u05D5\u05DC\u05D1 \u05E0\u05E9\u05D0\u05E8 \u05D6\u05E7\u05D5\u05E3</li><li>\u05D4\u05D8\u05E2\u05DD (\u05E1\u05D5\u05DB\u05D4 \u05DC\u05D6 \u05D1): \u05DE\u05D5\u05DC\u05D9\u05DA \u05D5\u05DE\u05D1\u05D9\u05D0 \u2014 \u05DC\u05DE\u05D9 \u05E9\u05D4\u05D0\u05E8\u05D1\u05E2 \u05E8\u05D5\u05D7\u05D5\u05EA \u05E9\u05DC\u05D5; \u05DE\u05E2\u05DC\u05D4 \u05D5\u05DE\u05D5\u05E8\u05D9\u05D3 \u2014 \u05DC\u05DE\u05D9 \u05E9\u05D4\u05E9\u05DE\u05D9\u05DD \u05D5\u05D4\u05D0\u05E8\u05E5 \u05E9\u05DC\u05D5</li></ul>`,steps:i=>{let t=i.N,e=t.order.map(n=>`${ye[n].name} (${ye[n].rel})`);return[{title:"\u05DB\u05DC\u05DC\u05D9 \u05D4\u05E0\u05E2\u05E0\u05D5\u05E2",body:`<p>\u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05DB\u05E9\u05D4\u05D9\u05D3\u05D9\u05D9\u05DD \u05E6\u05DE\u05D5\u05D3\u05D5\u05EA \u05D6\u05D5 \u05DC\u05D6\u05D5. <b>\u05DE\u05D5\u05DC\u05D9\u05DB\u05D9\u05DD \u05D5\u05DE\u05D1\u05D9\u05D0\u05D9\u05DD</b> (\u05DE\u05D5\u05E9\u05D9\u05D8\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D3\u05D9\u05D9\u05DD \u05DC\u05DB\u05D9\u05D5\u05D5\u05DF \u05D5\u05D7\u05D5\u05D6\u05E8\u05D9\u05DD) \u2014 \u05E9\u05DC\u05D5\u05E9 \u05E4\u05E2\u05DE\u05D9\u05DD \u05D1\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF. \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD \u05E2\u05DD \u05D4\u05E4\u05E0\u05D9\u05DD <b>\u05DC\u05DE\u05D6\u05E8\u05D7</b>: \u05E7\u05D3\u05D9\u05DE\u05D4 \u2014 \u05DE\u05D6\u05E8\u05D7, \u05D9\u05DE\u05D9\u05DF \u2014 \u05D3\u05E8\u05D5\u05DD, \u05E9\u05DE\u05D0\u05DC \u2014 \u05E6\u05E4\u05D5\u05DF, \u05D0\u05D7\u05D5\u05E8\u05D4 \u2014 \u05DE\u05E2\u05E8\u05D1 (\u05DE\u05D9 \u05E9\u05D0\u05D9\u05E0\u05D5 \u05D9\u05D5\u05D3\u05E2 \u05D4\u05D9\u05DB\u05DF \u05D4\u05DE\u05D6\u05E8\u05D7 \u2014 \u05D4\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \u05E0\u05E7\u05D1\u05E2\u05D9\u05DD \u05DC\u05E4\u05D9 \u05D2\u05D5\u05E4\u05D5).</p>
                   <ul><li><b>\u05D4\u05DC\u05D5\u05DC\u05D1 \u05E0\u05E9\u05D0\u05E8 \u05D6\u05E7\u05D5\u05E3</b> \u05D1\u05DB\u05DC \u05D4\u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u2014 \u05D2\u05DD \u05DB\u05E9\u05DE\u05D5\u05E8\u05D9\u05D3\u05D9\u05DD: \u05DE\u05D5\u05E8\u05D9\u05D3\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D3\u05D9\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3, \u05DC\u05D0 \u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1.</li>
                   ${t.rustle?'<li>\u05D1\u05D0\u05E9\u05DB\u05E0\u05D6 \u05E0\u05D5\u05D4\u05D2\u05D9\u05DD "\u05DC\u05DB\u05E1\u05DB\u05E1": \u05DC\u05DC\u05D7\u05D5\u05E9 \u05D1\u05E2\u05DC\u05D9 \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D1\u05E9\u05E2\u05EA \u05D4\u05E0\u05E2\u05E0\u05D5\u05E2.</li>':""}</ul>`,async enter(n){let s=n.w;gn(n,{inverted:!1,cam:"hero",markers:!0}),s.setCamera("hero",.8),n.add(it("div",{class:"row wrap"},["east","south","up","down"].map(r=>it("button",{class:"ghost",onclick:()=>{qt.click(),s.stopShake=!1,s.shake(r,{reps:3,dur:1.5,rustle:t.rustle}),t.rustle&&qt.rustle()}},`\u05D4\u05D3\u05D2\u05DE\u05D4: ${ye[r].name}`)))),await n.mc("\u05D1\u05E0\u05E2\u05E0\u05D5\u05E2 \u05DB\u05DC\u05E4\u05D9 \u05DE\u05D8\u05D4 \u2014 \u05DE\u05D4 \u05E2\u05D5\u05E9\u05D9\u05DD \u05D1\u05DC\u05D5\u05DC\u05D1?",[{t:"\u05DE\u05D5\u05E8\u05D9\u05D3\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D3\u05D9\u05D9\u05DD \u05D5\u05D4\u05DC\u05D5\u05DC\u05D1 \u05E0\u05E9\u05D0\u05E8 \u05D6\u05E7\u05D5\u05E3",ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! \u05D4\u05DC\u05D5\u05DC\u05D1 \u05E0\u05E9\u05D0\u05E8 \u05EA\u05DE\u05D9\u05D3 \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF \u05D2\u05D9\u05D3\u05D5\u05DC\u05D5, \u05DB\u05DC\u05E4\u05D9 \u05DE\u05E2\u05DC\u05D4."},{t:"\u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05D0\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1 \u05DB\u05E9\u05E8\u05D0\u05E9\u05D5 \u05DB\u05DC\u05E4\u05D9 \u05DE\u05D8\u05D4",ok:!1,why:'\u05DC\u05D0 \u2014 \u05DE\u05D9\u05DF \u05E9\u05D2\u05D3\u05DC \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05E9\u05D0\u05E8 "\u05DB\u05D3\u05E8\u05DA \u05D2\u05D9\u05D3\u05D5\u05DC\u05D5", \u05D6\u05E7\u05D5\u05E3.'}]),n.alive&&n.complete(100)}},{title:`\u05D4\u05E1\u05D3\u05E8 \u05D1\u05E0\u05D5\u05E1\u05D7 ${t.name}`,body:`<p>\u05D1\u05E0\u05D5\u05E1\u05D7 <b>${t.name}</b> \u05D4\u05E1\u05D3\u05E8 \u05D4\u05D5\u05D0:</p>
                   <ol class="order-list">${e.map(n=>`<li>${n}</li>`).join("")}</ol>
                   ${t.why.map(n=>`<p class="why">${n}</p>`).join("")}
                   <h4 class="sec">\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05E0\u05D5\u05E1\u05D7\u05D9\u05DD</h4>${id("dirs")}`,enter(n){let s=n.w;gn(n,{inverted:!1,cam:"hero",markers:!0});let r=!1;n.button("\u25B6 \u05D4\u05E8\u05D0\u05D5 \u05DC\u05D9 \u05D0\u05EA \u05D4\u05E1\u05D3\u05E8",async()=>{r||(r=!0,s.stopShake=!1,await s.shakeSequence(t.order,{reps:3,dur:1.4,rustle:t.rustle}),r=!1,n.alive&&!n.isDone()&&(n.good("\u05D6\u05D4 \u05D4\u05E1\u05D3\u05E8. \u05E2\u05DB\u05E9\u05D9\u05D5 \u05E0\u05EA\u05E8\u05D2\u05DC!"),n.complete(60)))})}},{title:"\u05EA\u05E8\u05D2\u05D5\u05DC: \u05E0\u05E2\u05E0\u05E2\u05D5 \u05D1\u05E1\u05D3\u05E8 \u05D4\u05E0\u05DB\u05D5\u05DF",body:`<p>\u05E0\u05E2\u05E0\u05E2\u05D5 \u05D1\u05E1\u05D3\u05E8 \u05E9\u05DC \u05E0\u05D5\u05E1\u05D7 <b>${t.name}</b> \u2014 \u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05D4\u05DB\u05E4\u05EA\u05D5\u05E8\u05D9\u05DD (\u05D0\u05D5 \u05D1\u05DE\u05E7\u05DC\u05D3\u05EA: W \u05E7\u05D3\u05D9\u05DE\u05D4 \xB7 D \u05D9\u05DE\u05D9\u05DF \xB7 S \u05D0\u05D7\u05D5\u05E8\u05D4 \xB7 A \u05E9\u05DE\u05D0\u05DC \xB7 E \u05DE\u05E2\u05DC\u05D4 \xB7 Q \u05DE\u05D8\u05D4).</p>`,hint:n=>{let s=n.shared.idx||0;n.info(`\u05D4\u05DB\u05D9\u05D5\u05D5\u05DF \u05D4\u05D1\u05D0: <b>${ye[t.order[s]].name}</b> (${ye[t.order[s]].rel})`)},enter(n){let s=n.w;gn(n,{inverted:!1,cam:"hero",markers:!0}),n.shared.idx=0;let r=it("div",{class:"chips"},t.order.map(()=>it("span",{class:"chip"},"\xB7")));n.add(r);let a=it("div",{class:"dpad"}),o=(d,u)=>{let f=it("button",{class:"dbtn "+u,onclick:()=>c(d)},it("b",{},ye[d].rel),it("small",{},ye[d].name));a.append(f)};o("east","n"),o("north","w"),o("south","e"),o("west","s"),o("up","u"),o("down","d"),n.add(a);let l=!1,c=async d=>{if(l||n.isDone())return;let u=n.shared.idx;if(d!==t.order[u]){n.mistake(`\u05DC\u05D0 \u05D6\u05D4. \u05D1\u05E0\u05D5\u05E1\u05D7 ${t.name} ${u===0?"\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD":"\u05D0\u05D7\u05E8\u05D9 "+ye[t.order[u-1]].name+" \u05D1\u05D0\u05D9\u05DD"} \u05D1<b>${ye[t.order[u]].name}</b>.`);return}l=!0,r.children[u].textContent=ye[d].name,r.children[u].classList.add("ok"),n.shared.idx++,s.stopShake=!1,t.rustle&&qt.rustle(),await s.shake(d,{reps:3,dur:1.25,rustle:t.rustle}),l=!1,n.shared.idx===t.order.length&&n.alive&&(n.good("\u05DE\u05E6\u05D5\u05D9\u05DF! \u05E9\u05E9\u05EA \u05D4\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \u05D1\u05E1\u05D3\u05E8 \u05D4\u05E0\u05DB\u05D5\u05DF."),n.complete(100))},h={KeyW:"east",ArrowUp:"east",KeyD:"south",ArrowRight:"south",KeyS:"west",ArrowDown:"west",KeyA:"north",ArrowLeft:"north",KeyE:"up",PageUp:"up",KeyQ:"down",PageDown:"down"};n.onKey(d=>h[d.code]?(c(h[d.code]),!0):!1)}},{title:"\u05DC\u05DE\u05D4 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD?",body:"<p>\u05DE\u05D4 \u05D4\u05D8\u05E2\u05DD? \u05D4\u05D2\u05DE\u05E8\u05D0 (\u05E1\u05D5\u05DB\u05D4 \u05DC\u05D6 \u05D1) \u05DE\u05D1\u05D9\u05D0\u05D4 \u05DB\u05DE\u05D4 \u05D8\u05E2\u05DE\u05D9\u05DD \u2014 \u05D1\u05D3\u05E7\u05D5 \u05D0\u05EA \u05E2\u05E6\u05DE\u05DB\u05DD:</p>",async enter(n){if(gn(n,{inverted:!1,cam:"hero",markers:!0}),await n.mc('\u05DC\u05E4\u05D9 \u05E8\u05D1\u05D9 \u05D9\u05D5\u05D7\u05E0\u05DF, \u05DE\u05D4 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA "\u05DE\u05D5\u05DC\u05D9\u05DA \u05D5\u05DE\u05D1\u05D9\u05D0" (\u05DC\u05D0\u05E8\u05D1\u05E2 \u05D4\u05E8\u05D5\u05D7\u05D5\u05EA)?',[{t:'\u05DC\u05DE\u05D9 \u05E9\u05D0\u05E8\u05D1\u05E2 \u05D4\u05E8\u05D5\u05D7\u05D5\u05EA \u05E9\u05DC\u05D5 \u2014 \u05D4\u05DB\u05E8\u05D4 \u05E9\u05D4\u05E7\u05D1"\u05D4 \u05E9\u05D5\u05DC\u05D8 \u05D1\u05DB\u05DC \u05D4\u05E2\u05D5\u05DC\u05DD',ok:!0,why:'\u05E0\u05DB\u05D5\u05DF! "\u05DE\u05D5\u05DC\u05D9\u05DA \u05D5\u05DE\u05D1\u05D9\u05D0 \u2014 \u05DC\u05DE\u05D9 \u05E9\u05D4\u05D0\u05E8\u05D1\u05E2 \u05E8\u05D5\u05D7\u05D5\u05EA \u05E9\u05DC\u05D5".'},{t:"\u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05E8\u05D7\u05E7 \u05DE\u05D4\u05D0\u05EA\u05E8\u05D5\u05D2",ok:!1,why:"\u05DC\u05D0. \u05D6\u05D5 \u05D4\u05DB\u05E8\u05D6\u05D4 \u05E2\u05DC \u05DE\u05DC\u05DB\u05D5\u05EA \u05D4' \u05D1\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF."},{t:"\u05DB\u05D3\u05D9 \u05DC\u05D4\u05E9\u05DE\u05D9\u05E2 \u05E8\u05E9\u05E8\u05D5\u05E9",ok:!1,why:'\u05D4\u05E8\u05E9\u05E8\u05D5\u05E9 \u05D4\u05D5\u05D0 \u05DE\u05E0\u05D4\u05D2 ("\u05DB\u05D9\u05E1\u05DB\u05D5\u05E1"), \u05DC\u05D0 \u05D4\u05D8\u05E2\u05DD \u05E9\u05DC \u05D4\u05D2\u05DE\u05E8\u05D0.'}]),!n.alive||(await jn(500),n.clear(),await n.mc('\u05D5"\u05DE\u05E2\u05DC\u05D4 \u05D5\u05DE\u05D5\u05E8\u05D9\u05D3"?',[{t:"\u05DC\u05DE\u05D9 \u05E9\u05D4\u05E9\u05DE\u05D9\u05DD \u05D5\u05D4\u05D0\u05E8\u05E5 \u05E9\u05DC\u05D5",ok:!0,why:'\u05E0\u05DB\u05D5\u05DF! "\u05DE\u05E2\u05DC\u05D4 \u05D5\u05DE\u05D5\u05E8\u05D9\u05D3 \u2014 \u05DC\u05DE\u05D9 \u05E9\u05D4\u05E9\u05DE\u05D9\u05DD \u05D5\u05D4\u05D0\u05E8\u05E5 \u05E9\u05DC\u05D5".'},{t:"\u05DB\u05D3\u05D9 \u05DC\u05E0\u05E2\u05E8 \u05D0\u05EA \u05D4\u05D0\u05D1\u05E7",ok:!1,why:"\u05D4\u05D8\u05E2\u05DD \u05D4\u05D5\u05D0 \u05D4\u05DB\u05E8\u05D4 \u05D1\u05D1\u05D5\u05E8\u05D0 \u05E9\u05DE\u05D9\u05DD \u05D5\u05D0\u05E8\u05E5."}]),!n.alive)||(await jn(500),n.clear(),await n.mc("\u05DC\u05E4\u05D9 \u05D4\u05E1\u05D1\u05E8 \u05E0\u05D5\u05E1\u05E3 \u05D1\u05D2\u05DE\u05E8\u05D0, \u05D4\u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD \u05D1\u05D0\u05D9\u05DD \u05DB\u05D3\u05D9...",[{t:"\u05DC\u05E2\u05E6\u05D5\u05E8 \u05E8\u05D5\u05D7\u05D5\u05EA \u05E8\u05E2\u05D5\u05EA (\u05D1\u05D4\u05D5\u05DC\u05DB\u05D4 \u05D5\u05D4\u05D1\u05D0\u05D4) \u05D5\u05D8\u05DC\u05DC\u05D9\u05DD \u05E8\u05E2\u05D9\u05DD (\u05D1\u05DE\u05E2\u05DC\u05D4 \u05D5\u05DE\u05D5\u05E8\u05D9\u05D3)",ok:!0,why:"\u05E0\u05DB\u05D5\u05DF! \u05D2\u05DD \u05D1\u05E7\u05E9\u05D4 \u05E2\u05DC \u05D1\u05E8\u05DB\u05EA \u05D4\u05D2\u05E9\u05DE\u05D9\u05DD \u05D5\u05D4\u05D8\u05DC."},{t:"\u05DC\u05D4\u05D1\u05E8\u05D9\u05D7 \u05D9\u05EA\u05D5\u05E9\u05D9\u05DD",ok:!1,why:"\u05DC\u05D0 \u2014 \u05D4\u05D8\u05E2\u05DD \u05E7\u05E9\u05D5\u05E8 \u05DC\u05E8\u05D5\u05D7\u05D5\u05EA \u05D5\u05DC\u05D8\u05DC\u05DC\u05D9\u05DD."}]),!n.alive))return;await jn(500),n.clear();let s=t.order.map(o=>ye[o].name).join(" \u2190 "),r=["south","north","east","up","down","west"].map(o=>ye[o].name).join(" \u2190 "),a=["east","south","west","north","up","down"].map(o=>ye[o].name).join(" \u2190 ");await n.mc(`\u05D0\u05D9\u05D6\u05D4 \u05E1\u05D3\u05E8 \u05D4\u05D5\u05D0 \u05E9\u05DC \u05E0\u05D5\u05E1\u05D7 <b>${t.name}</b>?`,[{t:s,ok:!0,why:`\u05E0\u05DB\u05D5\u05DF! ${t.why[0]}`},{t:t.key==="ashkenaz"?r:a,ok:!1,why:"\u05D6\u05D4 \u05D4\u05E1\u05D3\u05E8 \u05E9\u05DC \u05E0\u05D5\u05E1\u05D7 \u05D0\u05D7\u05E8. \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1."},{t:"\u05DE\u05E2\u05DC\u05D4 \u2190 \u05DE\u05D8\u05D4 \u2190 \u05DE\u05D6\u05E8\u05D7 \u2190 \u05DE\u05E2\u05E8\u05D1 \u2190 \u05E6\u05E4\u05D5\u05DF \u2190 \u05D3\u05E8\u05D5\u05DD",ok:!1,why:"\u05D6\u05D4 \u05DC\u05D0 \u05E1\u05D3\u05E8 \u05E9\u05DC \u05D0\u05E3 \u05E0\u05D5\u05E1\u05D7."}]),n.alive&&n.complete(100)}}]}},{id:"hallel",icon:"\u{1F3B5}",title:"\u05E0\u05E2\u05E0\u05D5\u05E2 \u05D1\u05D4\u05DC\u05DC",blurb:"\u05D0\u05D9\u05E4\u05D4 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05D1\u05EA\u05E4\u05D9\u05DC\u05EA \u05D4\u05DC\u05DC \u2014 \u05DC\u05E4\u05D9 \u05D4\u05E0\u05D5\u05E1\u05D7",recap:i=>`<ul><li>${i.N.hallelSummary}</li><li>\u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05D1"\u05D4\u05D5\u05D3\u05D5 \u05DC\u05D4' \u05DB\u05D9 \u05D8\u05D5\u05D1" \u05D5\u05D1"\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0" (\u05D5\u05DC\u05D0 \u05D1"\u05D4\u05E6\u05DC\u05D9\u05D7\u05D4 \u05E0\u05D0")</li><li>\u05D1"\u05D4\u05D5\u05D3\u05D5" \u05E9\u05D9\u05E9\u05D4 \u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \u05DC\u05E9\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD; \u05D1"\u05D0\u05E0\u05D0" \u2014 \u05E9\u05EA\u05D9 \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4</li></ul>`,steps:i=>{let t=i.N;return[{title:"\u05D0\u05D9\u05E4\u05D4 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05D1\u05D4\u05DC\u05DC?",auto:!0,body:`<p>\u05D1\u05D4\u05DC\u05DC \u05D0\u05D5\u05D7\u05D6\u05D9\u05DD \u05D0\u05EA \u05D4\u05DC\u05D5\u05DC\u05D1 \u05D5\u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D4\u05DE\u05E1\u05D5\u05D9\u05DE\u05D9\u05DD. \u05D4\u05DB\u05DC\u05DC (\u05E1\u05D5\u05DB\u05D4 \u05DC\u05D6 \u05D1): \u05D1\u05E4\u05E1\u05D5\u05E7 <b>"\u05D4\u05D5\u05D3\u05D5 \u05DC\u05D4' \u05DB\u05D9 \u05D8\u05D5\u05D1 \u05DB\u05D9 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D7\u05E1\u05D3\u05D5"</b> \u2014 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05D4\u05DC\u05DC \u05D5\u05D1\u05E1\u05D5\u05E4\u05D5, \u05D5\u05D1<b>"\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0"</b>.</p>
                   <p><b>\u05D1\u05E0\u05D5\u05E1\u05D7 ${t.name}:</b> ${t.hallelSummary}</p>
                   <ul>
                     <li><b>\u05D4\u05D5\u05D3\u05D5</b> \u2014 \u05D4\u05D5\u05D3\u05D0\u05D4 \u05E2\u05DC \u05D4\u05D7\u05E1\u05D3; <b>\u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0</b> \u2014 \u05EA\u05E4\u05D9\u05DC\u05D4 \u05DC\u05D9\u05E9\u05D5\u05E2\u05D4 \u05D5\u05DC\u05D2\u05E9\u05DE\u05D9\u05DD. \u05D1"\u05D4\u05E6\u05DC\u05D9\u05D7\u05D4 \u05E0\u05D0" \u05DC\u05D0 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD.</li>
                     <li>\u05DE\u05D9\u05DC\u05D4\u05BE\u05DE\u05D9\u05DC\u05D4: \u05D1"\u05D4\u05D5\u05D3\u05D5 \u05DC\u05D4' \u05DB\u05D9 \u05D8\u05D5\u05D1 \u05DB\u05D9 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D7\u05E1\u05D3\u05D5" \u05D9\u05E9 \u05E9\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05DC\u05D1\u05D3 \u05E9\u05DD \u05D4' \u2014 <b>\u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05DB\u05D9\u05D5\u05D5\u05DF</b> \u05DC\u05E4\u05D9 \u05E1\u05D3\u05E8 \u05D4\u05E0\u05D5\u05E1\u05D7 (\u05E9\u05DD \u05D4' \u2014 \u05DC\u05D0 \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD). \u05D1"\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0" \u05E9\u05DC\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D9\u05DD, \u05D5\u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 <b>\u05E9\u05E0\u05D9 \u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD</b>.</li>
                     ${t.key==="chabad"?'<li>\u05D1\u05D7\u05D1"\u05D3 \u05D1\u05DB\u05DC \u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05DC\u05D5\u05E9 \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA (18 \u05EA\u05E0\u05D5\u05E2\u05D5\u05EA \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD).</li>':""}
                     <li>\u05D1\u05E0\u05D5\u05E1\u05D7 \u05EA\u05D9\u05DE\u05DF \u05DE\u05E0\u05E2\u05E0\u05E2\u05D9\u05DD \u05D0\u05E8\u05D1\u05E2 \u05E4\u05E2\u05DE\u05D9\u05DD, \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D7\u05D5\u05D6\u05E8\u05D9\u05DD \u05E2\u05DC "\u05D0\u05E0\u05D0 \u05D4' \u05D4\u05D5\u05E9\u05D9\u05E2\u05D4 \u05E0\u05D0".</li>
                   </ul>
                   <h4 class="sec">\u05D4\u05E9\u05D5\u05D5\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05E0\u05D5\u05E1\u05D7\u05D9\u05DD</h4>${id("hallel")}
                   <p class="note">\u05E4\u05E8\u05D8\u05D9 \u05D4\u05D7\u05D6\u05E8\u05D5\u05EA \u05D5\u05D4\u05DB\u05D9\u05D5\u05D5\u05E0\u05D9\u05DD \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7\u05D9\u05DD \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05D1\u05D9\u05DF \u05E7\u05D4\u05D9\u05DC\u05D5\u05EA \u2014 \u05E0\u05D4\u05D2\u05D5 \u05DB\u05DE\u05E0\u05D4\u05D2 \u05E7\u05D4\u05D9\u05DC\u05EA\u05DB\u05DD.</p>`,enter(e){gn(e,{inverted:!1,cam:"hero",markers:!0})}},{title:"\u05E6\u05E4\u05D5: \u05D4\u05D4\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05D7 \u05E9\u05DC\u05DB\u05DD",auto:!0,body:`<p>\u05D4\u05D3\u05DE\u05D5\u05EA \u05EA\u05E0\u05E2\u05E0\u05E2 \u05D1\u05DB\u05DC \u05DE\u05E7\u05D5\u05DD \u05D1\u05D4\u05DC\u05DC \u05DC\u05E4\u05D9 \u05E0\u05D5\u05E1\u05D7 <b>${t.name}</b>. \u05E9\u05D9\u05DE\u05D5 \u05DC\u05D1 \u05DE\u05EA\u05D9 \u05DE\u05D5\u05E4\u05D9\u05E2 \u{1F932} \u05D5\u05DC\u05D0\u05D9\u05D6\u05D4 \u05DB\u05D9\u05D5\u05D5\u05DF \u05D1\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4.</p>`,enter(e){gn(e,{inverted:!1,cam:"hero",markers:!0});let n=sd(e,"guide",()=>{e.good("\u05D6\u05D4 \u05D4\u05E1\u05D3\u05E8 \u05D4\u05DE\u05DC\u05D0 \u05E9\u05DC \u05D4\u05D4\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05D7 \u05E9\u05DC\u05DB\u05DD."),e.complete(80)});e.add(n.el),e.add(it("div",{class:"row"},it("button",{class:"primary",onclick:()=>{qt.click(),n.start()}},"\u25B6 \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5"),it("button",{class:"ghost",onclick:()=>{qt.click(),n.start()}},"\u21BB \u05E9\u05D5\u05D1")))}},{title:"\u05D0\u05EA\u05D2\u05E8: \u05E0\u05E2\u05E0\u05E2\u05D5 \u05D1\u05D6\u05DE\u05DF \u05D4\u05E0\u05DB\u05D5\u05DF",body:`<p>\u05D4\u05D4\u05DC\u05DC \u05DE\u05EA\u05E7\u05D3\u05DD \u2014 <b>\u05DC\u05D7\u05E6\u05D5 "\u05E0\u05E2\u05E0\u05E2\u05D5" (\u05D0\u05D5 \u05E8\u05D5\u05D5\u05D7)</b> \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05E6\u05E8\u05D9\u05DA \u05DC\u05E0\u05E2\u05E0\u05E2 \u05D1\u05E0\u05D5\u05E1\u05D7 <b>${t.name}</b>. \u05D0\u05DC \u05EA\u05E0\u05E2\u05E0\u05E2\u05D5 \u05D1\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05D0\u05D7\u05E8\u05D9\u05DD! \u05DE\u05D5\u05EA\u05E8 \u05E2\u05D3 5 \u05D8\u05E2\u05D5\u05D9\u05D5\u05EA.</p>`,enter(e){let n=e.w;gn(e,{inverted:!1,cam:"hero",markers:!0});let s=sd(e,"play",a=>{let o=a.wrong+a.missed;o<=5?(e.good(`\u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3! ${a.hits} \u05DE\u05EA\u05D5\u05DA ${a.total} \u05E0\u05E2\u05E0\u05D5\u05E2\u05D9\u05DD \u05D1\u05D6\u05DE\u05DF.`),e.complete(100)):e.info(`\u05D4\u05D9\u05D5 ${o} \u05D8\u05E2\u05D5\u05D9\u05D5\u05EA. \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u2014 \u05D0\u05EA\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD!`)});e.add(s.el);let r=it("button",{class:"primary big shake",onclick:()=>s.press()},"\u{1F932} \u05E0\u05E2\u05E0\u05E2\u05D5!");e.add(it("div",{class:"row"},r,it("button",{class:"ghost",onclick:()=>{qt.click(),s.start()}},"\u25B6 \u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 / \u21BB"))),e.onKey(a=>a.code==="Space"?(s.press(),!0):!1)}}]}}]}function T_(){let i=document.getElementById("c"),t;try{t=new $o(i)}catch(s){document.body.insertAdjacentHTML("beforeend",'<div class="fatal">\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05D0\u05D9\u05E0\u05D5 \u05EA\u05D5\u05DE\u05DA \u05D1\u2011WebGL, \u05D5\u05DC\u05DB\u05DF \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D4\u05E6\u05D9\u05D2 \u05D0\u05EA \u05D4\u05DE\u05E9\u05D7\u05E7 \u05D4\u05EA\u05DC\u05EA\u05BE\u05DE\u05DE\u05D3\u05D9.</div>'),console.error(s);return}let e=new Ko(t);e.chapters=ad();let n=()=>{let r=document.getElementById("panel").getBoundingClientRect(),a=innerWidth>820;t.setViewShift(a?Math.round(r.width/2+8):0,a?0:Math.round(r.height/2))};addEventListener("resize",n),n(),t.start(),t.setCamera("hero",0),e.updateChrome(),e.showMenu(),window.__game=e,window.__world=t}T_();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
