(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{D57K:function(e,t,s){"use strict";function i(e,t,s,i){return new(s||(s=Promise))((function(o,r){function n(e){try{a(i.next(e))}catch(t){r(t)}}function l(e){try{a(i.throw(e))}catch(t){r(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,l)}a((i=i.apply(e,t||[])).next())}))}s.d(t,"a",(function(){return i}))},"aGB+":function(e,t,s){"use strict";var i=s("D57K"),o=s("kZht"),r=s("C05f"),n=s("ZTXN"),l=s("ROBh"),a=s("6uGs"),c=s("pBDD"),d=s("mW0F");class h{constructor(e){this.notifier=e}call(e,t){const s=new p(e),i=Object(d.a)(s,this.notifier);return i&&!s.seenValue?(s.add(i),t.subscribe(s)):s}}class p extends c.a{constructor(e){super(e),this.seenValue=!1}notifyNext(e,t,s,i,o){this.seenValue=!0,this.complete()}notifyComplete(){}}var u=s("YtkY"),_=s("4e/d"),f=s("An66");s.d(t,"a",(function(){return w})),s.d(t,"b",(function(){return j})),s.d(t,"c",(function(){return x})),s.d(t,"d",(function(){return k})),s.d(t,"e",(function(){return q})),s.d(t,"f",(function(){return H})),s.d(t,"g",(function(){return D})),s.d(t,"h",(function(){return E})),s.d(t,"i",(function(){return M})),s.d(t,"j",(function(){return A})),s.d(t,"k",(function(){return O}));let g=(()=>{class e{static uniqueID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}static isElement(e){return!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}static isString(e){return!("string"!=typeof e)}static extendValue(...e){let t=e[0];for(let s=1;s<e.length;s++)void 0!==e[s]&&(t=e[s]);return t}}return e._uniqueNumber=1,e.nextUID=()=>(e._uniqueNumber++).toString(),e})();class m{constructor(e){g.isElement(e)?this._createFromFakePath(e.value):this._createFromObject(e)}_createFromFakePath(e){this.lastModifiedDate=null,this.size=null,this.type="like/"+e.slice(e.lastIndexOf(".")+1).toLowerCase(),this.name=e.split(/(\\|\/)/g).pop()}_createFromObject(e){this.lastModifiedDate=new Date(e.lastModified||e.lastModifiedDate.getTime()),this.size=e.size,this.type=e.type,this.name=e.name}}const F={},v={total:0,loaded:0,percent:0,speed:0,speedToText:"0 bytes"};class b{constructor(e,t,s){this._progress$=new r.a(0),this._speed$=new r.a(v),this.options=Object.assign({},F,t),this._speedDefault={},this._id=g.uniqueID(),this._isUploading=!1,this._isUploaded=!1,this._isSuccess=!1,this._isCancel=!1,this._isError=!1;const i=g.isElement(e),o=new m(i?e.files[0]:e);this._file=o,this._fileElement=i?e.files[0]:e,this._fileActive=!1,void 0!==s&&this.bindUploader(s)}set protocol(e){this._protocol=e}get id(){return this._id}get progressPercent$(){return this._progress$.asObservable()}get progress$(){return this._speed$.asObservable()}get progress(){return this._progress$.getValue()}get element(){return this._fileElement}get object(){return this._file}get name(){return this._file.name}get type(){return this._file.type}get date(){return this._file.lastModifiedDate}get size(){return this._file.size}get inQueue(){return this._fileActive}get response(){return this._response}get success(){return this._isSuccess}get error(){return this._isError}bindUploader(e){this._uploader=e;const t=this._uploader.addFile(this);this._setFileActive(t)}bindOptions(e){var t;const s=Object.assign(Object.assign({},this.options.formData),null===(t=e)||void 0===t?void 0:t.formData);this.options=Object.assign(Object.assign(Object.assign({},this.options),e),{formData:s})}getUploader(){return this._uploader}upload(){let e;try{e=this.getUploader()}catch(t){throw new Error("Couldn`t upload because uploader was not defined. ERR_MSG: "+t.message)}this._isUploading=!0;try{e.uploadFile(this)}catch(t){}}cancel(){this._isUploading&&this.getUploader().cancelUploadFile(this)}_cancel(){this._isUploading&&(this._isCancel=!0,this._isUploaded=!1,this._isUploading=!1)}remove(){let e;try{e=this.getUploader()}catch(t){throw new Error("Couldn`t remove because uploader was not defined. ERR_MSG: "+t.message)}this._isUploading&&this.cancel(),e.removeFile(this),this._setFileActive(!1)}isUploaded(){return this._isUploaded}isUploading(){return this._isUploading}canUpload(){return!(this._isUploaded||this._isUploading||this._isSuccess||this._isError)}handleImageLoad(){this._imageLoad=!0}onBeforeUpload(){}onProgressSpeed(e){e=e}onProgress(e){e=e}onSuccess(e,t,s){e=e,t=t,s=s}onError(e,t,s){e=e,t=t,s=s}_onBeforeUpload(){this._isUploading=!0,this._isUploaded=!1,this._isSuccess=!1,this._isCancel=!1,this._isError=!1,this._progress$.next(0),this.onBeforeUpload()}_onProgressFileSpeed(e){this._speed$.next(e),this.onProgressSpeed(e)}_onProgress(e){this._progress$.next(e),this.onProgress(e)}_onSuccess(e,t,s){this._isUploading=!1,this._isUploaded=!0,this._isSuccess=!0,this._isError=!1,this._response=e,this.onSuccess(e,t,s),this._uploader.options.removeBySuccess&&this.remove()}_onError(e,t,s){this._isUploading=!1,this._isUploaded=!1,this._isSuccess=!1,this._isError=!0,this._response=e,this.onError(e,t,s)}_setFileActive(e){this._fileActive=e}}function U(e){return["options","progressPercent$","progress$","handleImageLoad","canUpload","isUploading","isUploaded","remove","_cancel","cancel","upload","getUploader","onBeforeUpload","onProgressSpeed","onProgress","onSuccess","onError","_onBeforeUpload","_onProgressFileSpeed","_onProgress","_onSuccess","_onError"].every(t=>t in e)}let w=(()=>{let e=class{constructor(e,t){this.element=e,this.renderer=t,this.fileHoverStart=new o.n,this.fileHoverEnd=new o.n,this.fileAccepted=new o.n,this.fileRejected=new o.n,this._InputFile=null}ngOnInit(){this._files=[],this.renderer.addClass(this.element.nativeElement,"drop-area")}ngOnDestroy(){if(this._files.length>0)for(const e of this._files)U(e)&&(e.isUploaded()||(e.cancel(),this.uploader.removeFile(e)))}onDragOver(e){if(null===this._InputFile){if(this._InputFile=this.getDataTransferObject(e),null===this._InputFile)return;this.renderer.addClass(this.element.nativeElement,"drop-enter"),this.renderer.setAttribute(this.element.nativeElement,"dropValueText","Drop now"),this.fileHoverStart.emit()}this.preventAndStopEventPropagation(e)}onDragLeave(e){if(null!==this._InputFile){if(this.renderer.removeClass(this.element.nativeElement,"drop-enter"),this.renderer.setAttribute(this.element.nativeElement,"dropValueText",""),this._InputFile=null,e.currentTarget===this.element[0])return;this.fileHoverEnd.emit()}this.preventAndStopEventPropagation(e)}onDrop(e){if(null!==this._InputFile){if(this.renderer.removeClass(this.element.nativeElement,"drop-enter"),this.renderer.setAttribute(this.element.nativeElement,"dropValueText",""),this.fileHoverEnd.emit(),this._InputFile=this.getDataTransferObject(e),0===this._InputFile.files.length)return void(this._InputFile=null);const t=this._InputFile.files;if(!this.hasFiles(this._InputFile.types))return;this.readFile(t),this.fileAccepted.emit(this._files),this._InputFile=null}this.preventAndStopEventPropagation(e)}preventAndStopEventPropagation(e){e.preventDefault(),e.stopPropagation()}readFile(e){let t;for(let i=0;i<e.length;i++){const o=e[i];try{t=new b(o,this.fileOptions,this.uploader)}catch(s){throw this.fileRejected.emit(s),new Error("Something goes wrong e: "+s.message)}t.inQueue&&this._files.push(t)}}getDataTransferObject(e){return e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer}hasFiles(e){return!!e&&(e.indexOf?-1!==e.indexOf("Files"):!!e.contains&&e.contains("Files"))}};return e.\u0275fac=function(t){return new(t||e)(o.Jb(o.l),o.Jb(o.D))},e.\u0275dir=o.Eb({type:e,selectors:[["","ngxFile2Drop",""]],hostBindings:function(e,t){1&e&&o.Ub("dragover",(function(e){return t.onDragOver(e)}))("dragleave",(function(e){return t.onDragLeave(e)}))("drop",(function(e){return t.onDrop(e)}))},inputs:{fileOptions:"fileOptions",uploader:"uploader"},outputs:{fileHoverStart:"fileHoverStart",fileHoverEnd:"fileHoverEnd",fileAccepted:"fileAccepted",fileRejected:"fileRejected"}}),e})(),x=(()=>{let e=class{constructor(){this.role="input",this.type="file",this.fileHoverStart=new o.n,this.fileHoverEnd=new o.n,this.fileAccepted=new o.n,this.fileRejected=new o.n,this._InputFile=null}ngOnInit(){this._files=[]}ngOnDestroy(){if(this._files.length>0)for(const e of this._files)U(e)&&(e.isUploaded()||(e.cancel(),this.uploader.removeFile(e)))}onChange(e){this._InputFile=this.getEventTarget(e),0!==this._InputFile.files.length?(this.readFile(this._InputFile.files),this.fileAccepted.emit(this._files),this._InputFile=null,this.preventAndStopEventPropagation(e)):this._InputFile=null}preventAndStopEventPropagation(e){e.preventDefault(),e.stopPropagation()}readFile(e){let t;for(let i=0;i<e.length;i++){const o=e[i];try{t=new b(o,this.fileOptions,this.uploader)}catch(s){throw this.fileRejected.emit(s),new Error("Something goes wrong e: "+s.message)}t.inQueue&&this._files.push(t)}}getEventTarget(e){return e.target}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=o.Eb({type:e,selectors:[["","ngxFile2Select",""]],hostVars:2,hostBindings:function(e,t){1&e&&o.Ub("change",(function(e){return t.onChange(e)})),2&e&&o.Ab("role",t.role)("type",t.type)},inputs:{fileOptions:"fileOptions",uploader:"uploader"},outputs:{fileHoverStart:"fileHoverStart",fileHoverEnd:"fileHoverEnd",fileAccepted:"fileAccepted",fileRejected:"fileRejected"}}),e})();const{FileReader:y}=window;let E=(()=>{let e=class{constructor(e,t){this.el=e}ngOnChanges(){const e=new y,t=this.el;if(t.nativeElement.src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 200 150'%2F%3E",e.onloadend=()=>{t.nativeElement.src=e.result},this.image)return e.readAsDataURL(this.image.element)}};return e.\u0275fac=function(t){return new(t||e)(o.Jb(o.l),o.Jb(o.D))},e.\u0275dir=o.Eb({type:e,selectors:[["img","imgPreview",""]],inputs:{image:"image"},features:[o.xb()]}),e})(),k=(()=>{let e=class{constructor(){this.units=["bytes","KB","MB","GB","TB","PB"]}transform(e=0,t=2){if(!isFinite(e))return"?";let s=0;for(;e>=1024;)e/=1024,s++;return e.toFixed(+t)+" "+this.units[s]}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Ib({name:"fileSize",type:e,pure:!0}),e})(),A=(()=>{let e=class{constructor(e,t){this.el=e,this.renderer=t}ngOnChanges(){if(this.el.nativeElement.value=this.progress.percent,this.progress.speed>0){const e=new k;this.renderer.setAttribute(this.el.nativeElement,"speedText",e.transform(this.progress.loaded))}else this.renderer.setAttribute(this.el.nativeElement,"speedText","")}};return e.\u0275fac=function(t){return new(t||e)(o.Jb(o.l),o.Jb(o.D))},e.\u0275dir=o.Eb({type:e,selectors:[["progress","progressBar",""]],inputs:{progress:"progress"},features:[o.xb()]}),e})();const{FormData:S}=window;class C{constructor(){this._id=g.uniqueID(),this.progress=new o.n,this.load=new o.n,this.error=new o.n,this.abort=new o.n,this._connections=[]}set connection(e){const{_file:t,_connection:s}=e;this.isConnected(t)||this._connections.push({id:t.id,connection:s})}_onLoad(e,t,s,i){const o=e.getUploader();var r,n,l,a;r=e,n=t,l=s,a=i,this._isSuccessCode(s)?o._onSuccessFile(r,n,l,a):o._onErrorFile(r,n,l,a),o._onCompleteFile(e,t,s,i)}_onError(e,t,s,i){const o=e.getUploader();o._onErrorFile(e,t,s,i),o._onCompleteFile(e,t,s,i)}_onAbort(e,t,s,i){const o=e.getUploader();o._onErrorFile(e,t,s,i),o._onCompleteFile(e,t,s,i)}_isSuccessCode(e){return e>=200&&e<300||304===e}isConnected(e){for(const t of this._connections)if(t.id===e.id)return t;return!1}removeConnection(e){let t=null;for(const s in this._connections)this._connections.hasOwnProperty(s)&&(t=this._connections[s],e.id===t.id&&this._connections.splice(+s,1))}}class P extends C{constructor(){super()}run(e){let t,s;const i=e.getUploader(),o=g.extendValue(i.options.formData,e.options.formData),r=g.extendValue(i.options.withCredentials,e.options.withCredentials),n=g.extendValue(i.options.method,e.options.method),l=g.extendValue(i.options.url,e.options.url),a=g.extendValue(i.options.alias,e.options.alias),c=g.extendValue(i.options.headers,e.options.headers),d=(new Date).getTime();let h=0,p=0,u=null;const _=new k;if(t=new XMLHttpRequest,this.connection={_file:e,_connection:t},s=new S,void 0!==o)for(const g in o)o.hasOwnProperty(g)&&s.append(g,o[g]);if(s.append(a,e.element,e.name),"number"!=typeof e.size)throw new TypeError("We need the file size.");const f=s=>{const o=i._parseHeaders(t.getAllResponseHeaders()),r=i._transformResponse(t.response,o);this.error.emit({_file:e,response:r,status:t.status,headers:o})};t.upload.addEventListener("progress",t=>{if(t.lengthComputable){const s=(new Date).getTime()-d;h=t.loaded-h,p=h/s*1e3,p=parseInt(p,10),u=_.transform(p);const i={total:t.total,loaded:t.loaded,percent:Math.round(t.loaded/t.total*100),speed:p,speedToText:u};this.progress.emit({_file:e,_data:i})}}),t.onreadystatechange=function(e){4===this.readyState&&this.status>=400&&f()},t.onload=s=>{const o=i._parseHeaders(t.getAllResponseHeaders()),r=i._transformResponse(t.response,o);this.load.emit({_file:e,response:r,status:t.status,headers:o})},t.addEventListener("abort",s=>{const o=i._parseHeaders(t.getAllResponseHeaders()),r=i._transformResponse(t.response,o);this.abort.emit({_file:e,response:r,status:t.status,headers:o})}),t.open(n,l,!0),t.withCredentials=r;for(const g in c)c.hasOwnProperty(g)&&t.setRequestHeader(g,c[g]);t.send(s)}cancel(e){const t=this.isConnected(e);t&&(t.connection.abort(),this.removeConnection(e))}}var D=function(e){return e.beforeAddingFile="beforeAddingFile",e.afterAddingFile="afterAddingFile",e.errorAddingFile="errorAddingFile",e.removeFile="removeFile",e.prepareUploadFile="prepareUploadFile",e.progressUploadFile="progressUploadFile",e.progressUploadSpeed="progressUploadSpeed",e.successUploadFile="successUploadFile",e.completeUploadFile="completeUploadFile",e.failedUploadFile="failedUploadFile",e.cancelUploadFile="cancelUploadFile",e.prepareUploadAll="prepareUploadAll",e.progressUploadAll="progressUploadAll",e.completeUploadAll="completeUploadAll",e}({});class O{constructor(e,t,s=0){this._type=null,this._callback=null,this._priority=null,this._type=e,this._callback=t,this._priority=+s}get type(){return this._type}get priority(){return this._priority}get callback(){return this._callback}}class H extends class{constructor(e,t){this.type=e,this.transferOptionsDefault={url:"",alias:"file",headers:{},filters:[],formData:[],autoUpload:!1,method:"POST",removeBySuccess:!1,enableCors:!1,withCredentials:!1,uniqueFiles:!1},this._$queue=new r.a([]),this._queue=[];const s=document.createElement("div");if(this._isHTML5=!!(File&&FormData&&FileReader),this._isDragAndDrop="draggable"in s||"ondragstart"in s&&"ondrop"in s,this._id=g.uniqueID(),this._hooks=[],!this._isHTML5)throw new Error("Your browser doesn't support HTML5. Our NgxFileUploader can't work here.");this.options=Object.assign({},this.transferOptionsDefault,t)}get id(){return this._id}get queue$(){return this._$queue.asObservable()}get queueObs(){return this._queue}bindOptions(e){this.options=Object.assign(Object.assign({},this.options),e)}isHTML5(){return this._isHTML5}isDragAndDrop(){return this._isDragAndDrop}hook(e){if(-1!==this._hookExists(e))throw new Error(`Hook with the Type [${e.type}] and the same callback still exists.`);this._hooks.push(e),this._hooks.sort((e,t)=>e.type===t.type?e.priority>t.priority?-1:e.priority<t.priority?1:0:e.type<t.type?-1:e.type>t.type?1:void 0)}removeHook(e){const t=this._hookExists(e);return t>=0&&(this._hooks.splice(t,1),!0)}activeHooks(){return this._hooks.map(e=>`${D[e.type]}->prio:${e.priority}`)}addFile(e){let t=!1;try{t=this.validate(e)}catch(i){t=!1}if(!t)return this._onAddFileError(e),!1;const s=this._queue;return this.options.uniqueFiles?-1===this.inQueue(e)?(this._runHook(D.beforeAddingFile,e),s.push(e),this._$queue.next(s),this._onAddFile(e),this._runHook(D.afterAddingFile,e),this.options.autoUpload&&e.upload(),!0):(this._onAddFileError(e),!1):(this._runHook(D.beforeAddingFile,e),s.push(e),this._$queue.next(s),this._onAddFile(e),this._runHook(D.afterAddingFile,e),this.options.autoUpload&&e.upload(),!0)}removeFile(e){const t=this.inQueue(e);return-1!==t&&(this._queue.splice(t,1),this._$queue.next(this._queue),this._onRemoveFile(e),!0)}inQueue(e){return this._queue.findIndex(t=>t.id===e.id||t.name+t.type+t.size===e.name+e.type+e.size)}addFilter(e){this._filterExists(e)||this.options.filters.push(e)}validate(e){return!(this.options.filters.length>0)||this.options.filters.some(t=>t.validate(e))}setProtocol(e){this._protocol=e}getProtocol(){return this._protocol}isSuccessCode(e){return e>=200&&e<300||304===e}upload(){this._onBeforeUploadAll();for(const e of this.queueObs)this.uploadFile(e)}cancel(){for(const e of this.queueObs)this.cancelUploadFile(e)}remove(){const e=[...this.queueObs];for(const t of e)this.removeFile(t)}uploadFile(e){-1===this.inQueue(e)&&this.addFile(e),this._onBeforeUpload(e),this.getProtocol().run(e)}cancelUploadFile(e){-1!==this.inQueue(e)&&(e.isUploading&&this.getProtocol().cancel(e),e.isUploading&&e._cancel())}onAddFile(e){}onAddFileError(e){}onRemoveFile(e){}onBeforeUploadAll(e){}onBeforeUpload(e){}onProgress(e,t){}onProgressFile(e,t){}onProgressFileSpeed(e,t){}onSuccess(e,t,s,i){}onError(e,t,s,i){}onCancel(e,t,s,i){}onComplete(e,t,s,i){}onCompleteAll(e){}_onAddFile(e){this.onAddFile(e)}_onAddFileError(e){this._runHook(D.errorAddingFile,e),this.onAddFileError(e)}_onRemoveFile(e){this._runHook(D.removeFile,e),this.onRemoveFile(e)}_onBeforeUploadAll(){this._runHook(D.prepareUploadAll,this),this.onBeforeUploadAll(this)}_onBeforeUpload(e){this._runHook(D.prepareUploadFile,e),e._onBeforeUpload(),this.onBeforeUpload(e)}_onProgressFileSpeed(e,t){this._runHook(D.progressUploadSpeed,e,t),e._onProgressFileSpeed(t),this.onProgressFileSpeed(e,t)}_onProgressFile(e,t){this._runHook(D.progressUploadFile,e,t),e._onProgress(t),this.onProgressFile(e,t),this._onProgress()}_onProgress(){const e=this._queue;if(e.length>0){let t=0;for(const s of e)s.success||s.error?t+=100:s.isUploading&&(t+=s.progress);t=Math.floor(t/e.length),this._runHook(D.progressUploadAll,t),this.onProgress(this,t),t>=100&&this._onCompleteAll()}}_onSuccessFile(e,t,s,i){this._runHook(D.successUploadFile,e,t,s,i),e._onSuccess(t,s,i),this.onSuccess(e,t,s,i)}_onErrorFile(e,t,s,i){this._runHook(D.failedUploadFile,e,t,s,i),e._onError(t,s,i),this.onError(e,t,s,i)}_onCancelFile(e,t,s,i){this._runHook(D.cancelUploadFile,e,t,s,i),e._onError(t,s,i),this.onCancel(e,t,s,i)}_onCompleteFile(e,t,s,i){this._runHook(D.completeUploadFile,e,t,s,i),this._onProgress(),this.onComplete(e,t,s,i)}_onCompleteAll(){this._runHook(D.completeUploadAll,this),this.onCompleteAll(this)}_parseHeaders(e){const t={};let s,i,o;if(!e)return t;const r=e.split("\n");for(const n of r)o=n.indexOf(":"),s=n.slice(0,o).trim().toLowerCase(),i=n.slice(o+1).trim(),s&&(t[s]=t[s]?t[s]+", "+i:i);return t}_transformResponse(e,t){return e}_runHook(e,...t){for(const s in this._hooks)if(this._hooks.hasOwnProperty(s)){const i=this._hooks[s];if(i.type===e)switch(e){case D.beforeAddingFile:case D.prepareUploadAll:case D.prepareUploadFile:case D.afterAddingFile:case D.errorAddingFile:case D.completeUploadAll:case D.progressUploadAll:case D.removeFile:i.callback(t[0]);break;case D.progressUploadFile:case D.progressUploadSpeed:i.callback(t[0],t[1]);break;case D.cancelUploadFile:case D.successUploadFile:case D.failedUploadFile:case D.completeUploadFile:i.callback(t[0],t[1],t[2],t[3]);break;default:throw new Error("hookType unknown or not defined")}}}_hookExists(e){for(const t in this._hooks)if(this._hooks.hasOwnProperty(t)){const s=this._hooks[t];if(s.type===e.type&&""+s.callback==""+e.callback)return+t}return-1}_filterExists(e){const t=this.options.filters;for(const s of t)if(s.name===e.name)return!0;return!1}}{constructor(e,t){super("FileUploader",e),this._subs=[],this.setProtocol(void 0===t?new P:t),this.init()}init(){this.destroy();const e=this.getProtocol().progress.subscribe(e=>{const{_file:t,_data:s}=e;U(t)&&(this._onProgressFile(t,s.percent),this._onProgressFileSpeed(t,s))},e=>{throw new Error(e)});this._subs.push(e);const t=this.getProtocol().load.subscribe(e=>{const{_file:t,response:s,status:i,headers:o}=e;if(U(t)){const e=t.getUploader();r=t,n=s,l=i,a=o,this.isSuccessCode(i)?e._onSuccessFile(r,n,l,a):e._onErrorFile(r,n,l,a),e._onCompleteFile(t,s,i,o)}var r,n,l,a},e=>{throw new Error(e)});this._subs.push(t);const s=this.getProtocol().error.subscribe(e=>{const{_file:t,response:s,status:i,headers:o}=e;if(U(t)){const e=t.getUploader();e._onErrorFile(t,s,i,o),e._onCompleteFile(t,s,i,o)}},e=>{throw new Error(e)});this._subs.push(s);const i=this.getProtocol().abort.subscribe(e=>{const{_file:t,response:s,status:i,headers:o}=e;if(U(t)){const e=t.getUploader();e._onCancelFile(t,s,i,o),e._onCompleteFile(t,s,i,o)}},e=>{throw new Error(e)});this._subs.push(i)}destroy(){for(const e of this._subs)e.unsubscribe();this._subs=[]}}var T=function(e){return e.regex="regex",e.callback="callback",e}({});class j{constructor(e,t,s="name"){if(this._name="",this._regex=null,this._regCheck=null,this._callback=null,this._type=null,this._name=e,t instanceof RegExp)return this._type=T.regex,this._regex=t,void(this._regCheck=s);if(t instanceof Function)return this._type=T.callback,void(this._callback=t);throw new Error("FilterData is not defined.")}get name(){return this._name}get type(){return this._type}validate(e){let t=!1;if(this._type===T.regex)return this._regexpCheck(e);if(this._type!==T.callback)throw new Error("Filter type is not defined.");return t=this._callback(e),t}_regexpCheck(e){let t=!1;switch(this._regCheck){case"name":t=null!=e.object.name.match(this._regex);break;case"type":t=null!=e.object.type.match(this._regex);break;case"date":const s=new f.e("en-US").transform(e.object.lastModifiedDate,"yyyy-MM-dd hh:mm:ss");s&&s.match(this._regex)&&(t=!0);break;default:throw new Error("RegExp can only check on `name | type | date`.")}return t}}class I extends C{constructor(e){super(),this._httpClient=e,this.ngUnsubscribe=new n.a}run(e){return Object(i.a)(this,void 0,void 0,(function*(){let t;const s=e.getUploader(),i=g.extendValue(s.options.formData,e.options.formData),o=g.extendValue(s.options.withCredentials,e.options.withCredentials),r=g.extendValue(s.options.method,e.options.method),n=g.extendValue(s.options.url,e.options.url),l=g.extendValue(s.options.alias,e.options.alias),c=g.extendValue(s.options.headers,e.options.headers,{"Content-Type":"multipart/form-data"}),d=(new Date).getTime();if(this.connection={_file:e,_connection:null},t=new FormData,void 0!==i)for(const e of i)for(const s in e)e.hasOwnProperty(s)&&t.append(s,e[s]);if(t.append(l,e.element,e.name),"number"!=typeof e.size)throw new TypeError("We need the file size.");const h=new a.d(r,n,t,{headers:c,reportProgress:!0,withCredentials:o}),p=this._httpClient.request(h);yield this.handleMethode(e,p,d)}))}handleMethode(e,t,s){return Object(i.a)(this,void 0,void 0,(function*(){let i=0,o=0,r=null;const n=new k;let c,d,p,f;return t.pipe((g=this.ngUnsubscribe,e=>e.lift(new h(g))),Object(u.a)(t=>{switch(t.type){case a.c.UploadProgress:const l=(new Date).getTime()-s;i=t.loaded-i,o=i/l*1e3,o=parseInt(o,10),r=n.transform(o);const h={total:t.total,loaded:t.loaded,percent:Math.round(t.loaded/t.total*100),speed:o,speedToText:r};return f=this.isConnected(e),f&&this.progress.emit({_file:e,_data:h}),t;case a.c.Response:return c=t.headers,d=t.body,p=t.status,f=this.isConnected(e),f&&this.load.emit({_file:e,response:d,status:p,headers:c}),t;default:return t}}),Object(_.a)((t="operation",s)=>i=>(console.log(`${t} failed: ${i.message}`),this.error.emit({_file:e,response:s,status:i.status,headers:{}}),console.error(i),Object(l.a)(s)))).toPromise();var g}))}cancel(e){this.isConnected(e)&&(this.ngUnsubscribe.next(),this.ngUnsubscribe.complete(),this.abort.emit({_file:e,response:{},status:999,headers:{}}),this.removeConnection(e))}}const R=new o.q(null);let q=(()=>{let e=class{constructor(e,t){this._httpClient=e,this._config=t,this._uploadServices={},t&&t.url&&(this.registerUploadService("default",new H(t)),this.useAngularProtocol("default"))}registerUploadService(e,t){if(null!=this._uploadServices[e])throw new Error(`Upload service with the key [${e}] exists.`);this._config&&t.bindOptions(Object.assign(Object.assign({},this._config),t.options)),this._uploadServices[e]={uploader:t}}setHook(e,t,s,i=0){this._checkUploader(e),this._uploadServices[e].uploader.hook(new O(t,s,i))}useAngularProtocol(e){this._checkUploader(e),this._uploadServices[e].uploader.setProtocol(new I(this._httpClient)),this._uploadServices[e].uploader.init()}useDefaultProtocol(e){this._checkUploader(e),this._uploadServices[e].uploader.setProtocol(new P),this._uploadServices[e].uploader.init()}getUploader(e){return this._checkUploader(e),this._uploadServices[e].uploader}addFile(e,t){this._checkUploader(e),t.bindUploader(this._uploadServices[e].uploader)}addFiles(e,t){this._checkUploader(e);for(const s of t)s.bindUploader(this._uploadServices[e].uploader)}startAll(e){this._checkUploader(e),this._uploadServices[e].uploader.upload()}startFile(e,t){this._checkUploader(e),null==t.getUploader()&&t.bindUploader(this._uploadServices[e].uploader),this._uploadServices[e].uploader.uploadFile(t)}cancelAll(e){this._checkUploader(e),this._uploadServices[e].uploader.cancel()}cancelFile(e,t){this._checkUploader(e),this._uploadServices[e].uploader.cancelUploadFile(t)}_checkUploader(e){if(null==this._uploadServices[e])throw new Error(`Upload service with the key [${e}] doesn't exists.`)}};return e.\u0275fac=function(t){return new(t||e)(o.Qb(a.a),o.Qb(R,8))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac}),e})();var B;const $=[q];let M=(()=>{let e=B=class{static forRoot(e={}){return{ngModule:B,providers:[...$,{provide:R,useValue:e}]}}};return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[]]}),e})()}}]);