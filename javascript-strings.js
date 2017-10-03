SC.MODULE_INFO['cloudkit/error_catcher'].source = "SC.stringsFor(\"zh-tw\",{\"ErrorCatcher.Dialog.Caption\":'按一下 [傳送給 Apple]，表示您已同意讓 Apple 收集和使用此資訊作為支援服務的一部分，並用來改善 Apple 的產品和服務。此報告將包含個人資訊，如您的會員名稱和使用者資料。若要瞭解更多關於Apple 隱私權政策的資訊，請參閱 <a target=\"_BLANK\" href=\"https://www.apple.com/tw/privacy\">https://www.apple.com/privacy</a>。',\"ErrorCatcher.Dialog.CloseButton\":\"關閉\",\"ErrorCatcher.Dialog.Details\":\"詳細資訊\",\"ErrorCatcher.Dialog.ReloadButton\":\"重新上傳\",\"ErrorCatcher.Dialog.ReportButton\":\"傳送給 Apple\",\"ErrorCatcher.Dialog.Text\":\"發生錯誤造成此應用程式無法正常運作。透過傳送有關 iCloud 的診斷和用量資訊，協助 Apple 改進產品。\",\"ErrorCatcher.Dialog.Title\":\"%@ 已停止回應。\",\"ErrorCatcher.Dialog.Title.NoApp\":\"應用程式意外停止。\"}),CK.errorCatcher.mixin({MAX_RECENT_LOG_MESSAGES_SIZE:48e3,initMixin:function(){this._radarComponents=SC.merge(this._radarComponents,{contacts:{name:\"iCloud Contacts Web App\",version:\"All\"},mail:{name:\"iCloud Mail Web Client\",version:\"All\"},find:{name:\"iCloud FMiP Web\",version:\"1.0\"},fmf:{name:\"iCloud FMF Web\",version:\"1.0\"},calendar:{name:\"iCloud Calendar Web App\",version:\"All\"},cloudos:{name:\"iCloud CloudOS\",version:\"All\"},notes:{name:\"iCloud Notes Web App (IMAP)\",version:\"All\"},notes2:{name:\"iCloud Notes Web App\",version:\"All\"},photos:{name:\"iCloud Photos Web App\",version:\"All\"},photos2:{name:\"iCloud Photos 2 Web App\",version:\"All\"},reminders:{name:\"iCloud Reminders Web App\",version:\"All\"},iclouddrive:{name:\"iCloud Drive Web App\",version:\"All\"},settings:{name:\"iCloud Settings Web App\",version:\"All\"}})},moduleDidLoad:function(e,t){this.customize&&this.customize();var n=t.applicationName||\"cloudos\",r=SC.clone(t,YES),i;r.type=t.type,r=this._fieldsForHash(r,n),this.displayExceptionDialog\n(r,n,t)},displayExceptionDialog:function(e,t,n){var r=(\"AppTitle.\"+t).loc(),i=\"ErrorCatcher.Dialog.Text\".loc(),s=\"ErrorCatcher.Dialog.Caption\".loc(),o=e.type,u=e.text,a,f;e.errorTitle?f=e.errorTitle:r&&!CK.currentApplication?f=\"ErrorCatcher.Dialog.Title\".loc(r):f=\"ErrorCatcher.Dialog.Title.NoApp\".loc(),o!==\"exception\"&&(f=n.title?n.title:f,i=n.message?n.message:i);var l=this;this._alert=CW.Alert.show({message:f,description:i,escapeHTML:YES,layout:{centerX:0,width:500,centerY:0,minHeight:160},image:\"icon-icloud error\",leftButton:function(){var e=function(){for(var e=0;e<navigator.mimeTypes.length;e++){var t=navigator.mimeTypes[e];if(t.suffixes===\"x-snkp\"&&t.enabledPlugin)return!0}return!1}();if(!e||!SC.browser.isSafari)return;return{title:\"Create Radar\",action:\"createRadar\"}}(),rightButton:{title:\"ErrorCatcher.Dialog.ReportButton\".loc(),action:\"report\"},middleButton:{title:CK.errorCatcher._shouldReload(n.isFatal,t)?\"ErrorCatcher.Dialog.ReloadButton\".loc():\"ErrorCatcher.Dialog.CloseButton\".loc(),action:\"close\"},close:function(){l.exitErrorCatcher(n,t),this.remove()},report:function(){l.sendErrorReport(e,t,n),this.remove()},createRadar:function(){var n=l._radarComponents[t],r=window.escape(n?n.name:\"iCloud Web\"),i=window.escape(n?n.version:\"All\"),s=window.escape(e.error||\"\"),o=window.escape(\"* SUMMARY\\nRecap the problem title and/or include more descriptive summary information.\\n\\n* ERROR CATCHER LOG\\n\\n\"+u),a=\"rdar://new/problem/component=%@&version=%@&title=%@&description=%@\".fmt(r,i,s,o);window.location=a},extraViewPadding:{top:15,bottom:8},extraView:CW.DetailsDisclosureView\n.design({caption:s,disclosureTitle:\"ErrorCatcher.Dialog.Details\".loc(),contentView:SC.TextFieldView.design({layout:{height:90},isTextArea:YES,isVisible:NO,value:u,isEditable:NO,render:function(e){var t=SC.browser.isEdge?' style=\"height: 100%;\"':\"\";e.setClass(\"text-area\",YES),e.push('<div class=\"border\"></div>'),e.push('<div class=\"padding\"><textarea readonly class=\"field\"'+t+\">\"+this.get(\"value\")+\"</textarea></div>\")}})})}),CloudOS.recordStat(\"ErrorCatcherWasDisplayed\",{error:\"Error Catcher was displayed\",appName:t,type:n.type,isFatal:n.isFatal})},exitErrorCatcher:function(e,t){e.isFatal&&(CK.errorCatcher._shouldReload(YES,t)?CK.reloadWithReason(\"exitErrorCatcher\"):CloudOS.isCloudOSClient?CloudOS.appController.exitApplication(t,CK.EXIT_NON_FATAL):CK.currentApplication&&CK.currentApplication.isWindowApplication&&window.close()),e.dismissCallback&&e.dismissCallback.call(),CK.errorCatcher.set(\"isReporting\",NO)},sendErrorReport:function(e,t,n){var r=e.error||e.type,i=this,s,o,u,a;e.text=null,u={appName:t,errorTitle:r,errorType:n.type};for(s in e)o=e[s],o!==undefined&&o!==null&&(u[s]=o);a=CW.Request.postUrl(\"/reportError\"),a.set(\"addressPrefix\",\"https://feedbackws.icloud.com\"),a.set(\"useCrossDomain\",YES),a.set(\"isJSON\",YES),a.set(\"attachIdentifyingHeaders\",NO),a.header(\"Content-Type\",\"text/plain\"),a.notify(200,this,function(e){return i.exitErrorCatcher(n,t),YES}),a.notify(0,this,function(e){return i.exitErrorCatcher(n,t),YES}),SC.debug(\"CloudKit: Sending error catcher report for “%@”\",t),a.send(u)},_fieldsForHash:function(e,t){e||(e={});var n,r,i;e.buildNumber=SC.buildNumber,e.masteringNumber=\nSC.masteringNumber,e.time=(new Date).toString()+\"        (\"+Math.floor(new Date)+\")\",e.host=window.location.host,e.userAgent=navigator.userAgent+\"\",e.title=undefined,e.message=undefined,n=CloudOS.isCloudOSClient?CloudOS.authController&&CloudOS.authController.get(\"user\"):CloudOS.getUser(),n&&n.get&&(r=n.get(\"dsid\"),e.dsid=n.get(\"dsid\")),e.environment=function(){return CloudOS.isCloudOSClient?COS.authController.get(\"environment\"):CloudOS.getEnvironment()}(),e.recentLogMessages=function(){var t=e.log;return SC.none(t)&&(t=SC.Logger.stringifyRecordedLogMessages()||\"\"),t}().substr(-this.MAX_RECENT_LOG_MESSAGES_SIZE);var s=[],o,u,a,f,l,c,h,p;for(o in e){u=e[o];if(!u)continue;a=\"\",c=YES;for(f=0,l=o.length;f<l;++f)h=o.charAt(f),p=h.toUpperCase(),h===p&&(f===0&&(c=NO),c&&(a+=\" \")),a+=p;s.push(a),s.push(u+\"\\n\")}return e.text=s.join(\"\\n\"),e}});";