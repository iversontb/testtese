/* Copyright 2010 ITLife, Ltd. Togliatti, Samara Oblast, Russian Federation. http://statist.itlf.ru

History
15.05.2010 Вынесен js сюда
*/

window.statist={
	action_num:0,
	readCookie:function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},
	writeCookie: function(name,value,always) {
		if (always=='always') {
			var date = new Date();
			date.setTime(date.getTime()+(10*365*24*60*60*1000));//10 лет
			var expires = "; expires="+date.toGMTString();
		}else{ 
			var expires = "";//На одну сессию работы браузера
		}
		document.cookie = name+"="+value+expires+"; path=/";
		if(this.readCookie(name)===null){
			return false;
		}else{
			return true;
		}
	},
	init:function(){
		this.session_num=this.readCookie('statist_sn')||0;
		this.load_num=this.readCookie('statist_ln')||0;
		if(!this.load_num){
			this.session_num++;
			this.load_num=1;
		}else{
			this.load_num++;
		}
		this.writeCookie('statist_sn',this.session_num,'always');
		var r=this.writeCookie('statist_ln',this.load_num,'session');
		if(!r){//Значит кукисы отключены
			this.isinit=false;
			return false;
		}
		this.agent=navigator.userAgent;
		this.resolution=this.getResolution();
		this.referrer=document.http_referrer||document.referrer;//referrer можно сообщить указав document.http_referrer
		this.referrer=encodeURIComponent(this.referrer);

		if(window.infra&&infra.load){
			this.php='infra/lib/statist/statist.php';
		}
		if(!this.php){
			var scripts=document.getElementsByTagName('script');
			for(var i=0,l=scripts.length;i<l;i++){
				var src=scripts[i].src;
				if(src.indexOf('statist.php')!=-1){
					this.php=src;
					break;
				}
			}
		}
		if(!this.php){
			alert('Неправильно установлен Statist');
			this.isinit=false;
			return false;
		}
		this.isinit=true;
		return true;
	},
	checkImage:function(){
		if(!this.isinit||this.image_checked)return false;
		this.image_checked=true;
		var that=this;
		setTimeout(function(){
			var img=new Image();
			img.src=that.php+'?image=1';
		},100);
	},
	update:function(msg){
		msg=msg||'';
		var path=encodeURIComponent(decodeURIComponent(location.pathname)+decodeURIComponent(location.search)+decodeURIComponent(location.hash));
		var param='sent=1&agent='+this.agent+'&referrer='+this.referrer+'&path='+path+'&msg='+encodeURIComponent(msg)+'&session_num='+this.session_num+'&load_num='+this.load_num+'&action_num='+this.action_num+'&resolution='+this.resolution;
		var r=this.query(this.php,param);
		return r;
	},
	sent:function(msg){
		if(location.host=='127.0.0.1'){
			return;
		}
		if(!this.isinit)return false;
		this.action_num++;
		var r=this.update(msg);
		var that=this;
		setTimeout(function(){
			that.checkImage();
		},1000);
		return r;
	},
	getResolution:function(){
		var height=0; var width=0; 
		if (self.screen) { // for NN4 and IE4 
			width = screen.width 
			height = screen.height 
		} else if (self.java) { // for NN3 with enabled Java 
			var jkit = java.awt.Toolkit.getDefaultToolkit(); 
			var scrsize = jkit.getScreenSize(); 
			width = scrsize.width; 
			height = scrsize.height;
		}
		if(!height||!width){
			var resolution='';
		}else{
			var resolution=width+"x"+height;
		}
		return resolution;
	},
	query:function(path,params){//param без вопроса
		var transport = false;
		var actions = [
			function() {return new XMLHttpRequest()},
			function() {return new ActiveXObject('Msxml2.XMLHTTP')},
			function() {return new ActiveXObject('Microsoft.XMLHTTP')}
		];
		for(var i = 0; i < actions.length; i++) {
			try{
				transport = actions[i]();
				break;
			} catch (e) {}	
		}
		if(transport){
			transport.open('POST', path, true);
			transport.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			//transport.setRequestHeader("Content-length", params.length);
			//transport.setRequestHeader("Connection", "close");
			transport.send(params);
			return true;
		}else{
			return false;
		}
	},
	infra:function(){
		this.sent();
		infra.listen(infra.State,'onchange',function(){
			if(statist.wasfirst){
				statist.sent();
			}else{
				statist.wasfirst=true;
			}
		});
	}
}
statist.init();
