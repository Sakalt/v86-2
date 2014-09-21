var ScreenHeight=0;
var ScreenWidth=0;
var isFullScreen=0;
var isLockMouse = 0;
var isToastShow=0;
var cpu;

function popupCopyright()
{
	popup(
"<h1>关于本软件</h1>\
本程序是基于<a href='https://github.com/copy/v86' target='_blank'>v86虚拟机</a>的HTML5开源虚拟机。本软件采用BSD协议分发，如果你以任何方式使用了本\
软件，就代表了你接受了此协议。软件原始部分著作权归原作者所有，新增加部分著作权由manageryzy所有。本软件所使用所有图片等资源著作权均为原作者所有。由于\
已经对图像资源进行了修改，请不要以任何形式进行二次分发。由于图像数目太多，许可证就不一一列出。演示所用操作系统镜像中的操作系统以及附带软件著作权均归\
原作者所有，仅为演示使用。请勿二次分发这些镜像。<br/>\
<h1>English Version</h1>\
* Copyright (c) 2014, Manageryzy  <br/>\
* All rights reserved.<br/>\
* Redistribution and use in source and binary forms, with or without<br/>\
* modification, are permitted provided that the following conditions are met:<br/>\
*<br/>\
*     * Redistributions of source code must retain the above copyright<br/>\
*       notice, this list of conditions and the following disclaimer.<br/>\
*     * Redistributions in binary form must reproduce the above copyright<br/>\
*       notice, this list of conditions and the following disclaimer in the<br/>\
*       documentation and/or other materials provided with the distribution.<br/>\
*     * Neither the name of Manageryzy, Berkeley nor the<br/>\
*       names of its contributors may be used to endorse or promote products<br/>\
*       derived from this software without specific prior written permission.<br/>\
*<br/>\
* THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS \"AS IS\" AND ANY<br/>\
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED<br/>\
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE<br/>\
* DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY<br/>\
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES<br/>\
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;<br/>\
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND<br/>\
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT<br/>\
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS<br/>\
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br/><br/>\
<h1>中文版</h1>\
* Copyright (c) 2014 著作权由manageryzy所有。著作权人保留一切权利。<br/>\
* <br/>\
* 这份授权条款，在使用者符合以下三条件的情形下，授予使用者使用及再散播本<br/>\
* 软件包装原始码及二进位可执行形式的权利，无论此包装是否经改作皆然：<br/>\
* <br/>\
* * 对于本软件源代码的再散播，必须保留上述的版权宣告、此三条件表列，以<br/>\
*   及下述的免责声明。<br/>\
* * 对于本套件二进位可执行形式的再散播，必须连带以文件以及／或者其他附<br/>\
*   于散播包装中的媒介方式，重制上述之版权宣告、此三条件表列，以及下述<br/>\
*   的免责声明。<br/>\
* * 未获事前取得书面许可，不得使用柏克莱加州大学或本软件贡献者之名称，<br/>\
*   来为本软件之衍生物做任何表示支持、认可或推广、促销之行为。<br/>\
* <br/>\
* 免责声明：本软件是由manageryzy及本软件之贡献者以现状（\"as is\"）提供，<br/>\
* 本软件包装不负任何明示或默示之担保责任，包括但不限于就适售性以及特定目<br/>\
* 的的适用性为默示性担保。manageryzy及本软件之贡献者，无论任何条件、<br/>\
* 无论成因或任何责任主义、无论此责任为因合约关系、无过失责任主义或因非违<br/>\
* 约之侵权（包括过失或其他原因等）而起，对于任何因使用本软件包装所产生的<br/>\
* 任何直接性、间接性、偶发性、特殊性、惩罚性或任何结果的损害（包括但不限<br/>\
* 于替代商品或劳务之购用、使用损失、资料损失、利益损失、业务中断等等），<br/>\
* 不负任何责任，即在该种使用已获事前告知可能会造成此类损害的情形下亦然。<br/><br/><br/>\
<h3>附：原始v86项目许可证：</h3><br/>\
Copyright (c) 2012-2014, Fabian Hemmer<br/>\
All rights reserved.<br/>\
<br/>\
Redistribution and use in source and binary forms, with or without<br/>\
modification, are permitted provided that the following conditions are met: <br/>\
<br/>\
1. Redistributions of source code must retain the above copyright notice, this<br/>\
   list of conditions and the following disclaimer. <br/>\
2. Redistributions in binary form must reproduce the above copyright notice,<br/>\
   this list of conditions and the following disclaimer in the documentation<br/>\
   and/or other materials provided with the distribution. <br/>\
<br/>\
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND<br/>\
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED<br/>\
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE<br/>\
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR<br/>\
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES<br/>\
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;<br/>\
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND<br/>\
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT<br/>\
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS<br/>\
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br/>\
<br/>\
The views and conclusions contained in the software and documentation are those<br/>\
of the authors and should not be interpreted as representing official policies, <br/>\
either expressed or implied, of the FreeBSD Project.<br/>\
");
}

///////////////////////////////////////
//全屏相关

//进入全屏
function requestFullScreen() {
    var de = document.body;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullscreen) {
        de.webkitRequestFullscreen();
    }
    if(isLockMouse==1)
    {
    	lock_mouse(document.body);
    	document.getElementsByClassName("phone_keyboard")[0].focus();
    }
}
//退出全屏
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
}

//监听全屏事件，没用，浏览器不支持
function onFullscreenChange()
{
	if(isFullScreen==0)
	{
		isFullScreen=1;
		$('#screen2_nav_fullScreen').text('退出全屏');
	}
	else
	{
		isFullScreen=0;
		$('#screen2_nav_fullScreen').text('全屏');
	}	
}

function lock_mouse(elem)
{
    var fn = elem["requestPointerLock"] ||
                elem["mozRequestPointerLock"] ||
                elem["webkitRequestPointerLock"];

    if(fn)
    {
        fn.call(elem);
    }
}

/////////////////////////////////////////////
//popup的处理

//处理popup的点击事件
function onPopupCloseClick()
{
		$("#screen_popup").fadeOut();
		$("#popup_dialog_container").fadeOut();
}

function popup(msg)
{
	$('#popup_text').html(msg);
	$("#screen_popup").fadeIn();
	$("#popup_dialog_container").fadeIn();	
}


////////////////////////////////////////////
//toast的处理
function toast(msg)
{
	if(isToastShow==1)
	{
		setTimeout(function(){toast(msg);},1000);
		return;
	}
	isToastShow=1;
	setTimeout(function(){
		$('#toast_main').html(msg);
		$('#toast_container').animate({width: 'toggle'});
		$('#toast_container').fadeIn(1);
		setTimeout(function(){
			$('#toast_container').fadeOut(500);		
			isToastShow=0;
		},1500);
	},100);
}

////////////////////////////////////////////
//快速启动虚拟机

var FDD_Img_List = [
"images/kolibri.img",
"",
"images/windows101.img"	,
"images/openbsd.img",
"images/solar.img",
"images/freedos722.img"
];

var HD_Img_List = [
"",
"",
"",
"",
"",
""	
];

var CD_Img_List = [
"",
"images/linux.iso",
"",
"",
"",
""	
];

var XHRRequestListSize = 0;

// Load a file using XHR as an ArrayBuffer.
// If you want to use this, add some error handling
function simple_load_file(filename, done)
{
    var http = new XMLHttpRequest();

    http.open("get", filename, true);
    http.responseType = "arraybuffer";

    http.onload = function(e) {
        if(http.readyState === 4 && http.response) {
            done(http.response);
        }
    };
    http.send(null);
}

function QuickStartVM(choose)
{
    // For a minimal boot, we need at least 2 images: A bios and a disk image
    // (CD, HD or floppy). For non-serial output, a vgabios has to be specified
    if(CD_Img_List.length<choose)return;
    
    var images = {};
	XHRRequestListSize++;
    simple_load_file("bios/seabios.bin", function(buffer) {
        images.seabios = buffer;
        XHRRequestListSize--;
        cont(images,32 * 1024 * 1024,2 * 1024 * 1024,document.getElementById("QuickStartScreen"));
    });
    
	XHRRequestListSize++;
    simple_load_file("bios/vgabios.bin", function(buffer) {
        images.vga_bios = buffer;
        XHRRequestListSize--;
        cont(images,32 * 1024 * 1024,2 * 1024 * 1024,document.getElementById("QuickStartScreen"));
    });
    
	if(CD_Img_List[choose]!="")
	{
		XHRRequestListSize++;
		simple_load_file(CD_Img_List[choose], function(buffer) {
	        images.cdrom = buffer;
	        XHRRequestListSize--;
	        cont(images,32 * 1024 * 1024,2 * 1024 * 1024,document.getElementById("QuickStartScreen"));
	    });
	}
	
	if(HD_Img_List[choose]!="")
	{
		XHRRequestListSize++;
		simple_load_file(HD_Img_List[choose], function(buffer) {
	        images.hd = buffer;
	        XHRRequestListSize--;
	        cont(images,32 * 1024 * 1024,2 * 1024 * 1024,document.getElementById("QuickStartScreen"));
	    });
	}
	
	if(FDD_Img_List[choose]!="")
	{
		XHRRequestListSize++;
		simple_load_file(FDD_Img_List[choose], function(buffer) {
	        images.floppy = buffer;
	        XHRRequestListSize--;
	        cont(images,32 * 1024 * 1024,2 * 1024 * 1024,document.getElementById("QuickStartScreen"));
	    });
	} 
};

function CustomStartVM(CDURL,FDDURL,HDURL,MSIZE,VMSIZE)
{
    // For a minimal boot, we need at least 2 images: A bios and a disk image
    // (CD, HD or floppy). For non-serial output, a vgabios has to be specified
    
    var images = {};
	XHRRequestListSize++;
    simple_load_file("bios/seabios.bin", function(buffer) {
        images.seabios = buffer;
        XHRRequestListSize--;
        cont(images,MSIZE,VMSIZE,document.getElementById("CustomStartScreen"));
    });
    
	XHRRequestListSize++;
    simple_load_file("bios/vgabios.bin", function(buffer) {
        images.vga_bios = buffer;
        XHRRequestListSize--;
        cont(images,MSIZE,VMSIZE,document.getElementById("CustomStartScreen"));
    });
    
	if(CDURL!="")
	{
		XHRRequestListSize++;
		simple_load_file(CDURL, function(buffer) {
	        images.cdrom = buffer;
	        XHRRequestListSize--;
	        cont(images,MSIZE,VMSIZE,document.getElementById("CustomStartScreen"));
	    });
	}
	
	if(HDURL!="")
	{
		XHRRequestListSize++;
		simple_load_file(HDURL, function(buffer) {
	        images.hd = buffer;
	        XHRRequestListSize--;
	        cont(images,MSIZE,VMSIZE,document.getElementById("CustomStartScreen"));
	    });
	}
	
	if(FDDURL!="")
	{
		XHRRequestListSize++;
		simple_load_file(FDDURL, function(buffer) {
	        images.floppy = buffer;
	        XHRRequestListSize--;
	        cont(images,MSIZE,VMSIZE,document.getElementById("CustomStartScreen"));
	    });
	}

    
};

function cont(images,m_size,vm_size,container)
{
    // if(!images.seabios || !images.vga_bios || !images.cdrom) {
        // return;
    // }
    if(XHRRequestListSize>0)return;
    
    isLockMouse=1;

    //var container = document.getElementById("QuickStartScreen");
    cpu = new v86();
	
	var cpuSetting={
        // load_devices has to be set to true, otherwise no OS can run
        load_devices: true,

        // The CD image. All disk images have to be wrapped in SyncBuffer or an
        // object, that exports the same interface. A few examples are available 
        // in browser/lib.js
        //cdrom: new SyncBuffer(images.cdrom),

        //hda: images.hd, // a hard disk image
        //fda: images.floppy, // a floppy disk image

        // The bioses. If you don't need the vgabios, just leave it out.
        // Only pass ArrayBuffers here
        bios: images.seabios,
        vga_bios: images.vga_bios,

        // Adapters implement the communication from or to the emulator. These
        // default adapters (defined in browser/*.js) implement what you see
        // on copy.sh/v24. You could change them to programatically control the emulator
        mouse_adapter : new MouseAdapter(),
        screen_adapter: new ScreenAdapter(container),
        keyboard_adapter: new KeyboardAdapter(),

        vga_memory_size: vm_size,//2 * 1024 * 1024, // default 8M
        memory_size: m_size//32 * 1024 * 1024, // default 64M
   };
   
   if(typeof(images.cdrom) != "undefined")
   {
   		cpuSetting['cdrom']=new SyncBuffer(images.cdrom);
   }
   
   if(typeof(images.hd) != "undefined")
   {
   		cpuSetting['hda']=new SyncBuffer(images.hd);
   }
   
   if(typeof(images.floppy) != "undefined")
   {
   		cpuSetting['fda']=new SyncBuffer(images.floppy);
   }
   
	
    cpu.init(cpuSetting);

    cpu.run();
}


$(document).ready(function($) {
	
	//检查浏览器兼容
	//popup('这是一个PopUp的测试呢<br>这是第二行的说');
	if(!Modernizr.canvas)
 	{
 		popup('还在用古董浏览器么，赶紧更换现代浏览器吧！');
 	}
 	
 	/*  全屏事件，浏览器不支持(╯‵□′)╯︵┻━┻
 	document.addEventListener("fullscreenchange", onFullscreenChange());
	document.addEventListener("webkitfullscreenchange", onFullscreenChange());
	document.addEventListener("mozfullscreenchange", onFullscreenChange());
	document.addEventListener("MSFullscreenChange", onFullscreenChange());*/
	
	//重新缩放监视器窗口大小
	ScreenHeight= window.screen.height - 200;
	ScreenWidth = 4*ScreenHeight/3;
	if(ScreenWidth>window.screen.width-510)
		ScreenWidth=window.screen.width-510;
	ScreenHeight= ScreenWidth*3/4;
	
	$('#screen2_quickstart_vm').height(ScreenHeight);
	$('#screen2_quickstart_vm').width(ScreenWidth);
	
	$('#screen2_custumstart_vm').height(ScreenHeight);
	$('#screen2_custumstart_vm').width(ScreenWidth);
	
	
	
	///////////////////////////////////////////////////////////////////////////////////
	//第一页的按钮
	
	$("#screen1_main_button").click(function() {
		requestFullScreen();
		$("#screen1_cover").animate({height: "1000px"},{ duration: 800, queue: false }, function() {
		  $("#screen1_cover").remove();
		});
		$("#screen1").animate({height:"0px"},{ duration: 500, queue: false },function(){$("#screen1").remove();});
		$("#screen2_quickstart_container").animate({top:"0%"},{ duration: 500, queue: false });
		$("#screen2_main_container").animate({top:"0%"},{ duration: 500, queue: false });
		$("#screen2_costumstart_container").animate({top:"0%"},{ duration: 500, queue: false });
		$('#copyright').css("color", "#FFFFFF");
		toast('请点击图标继续');
	});
	
	
	/////////////////////////////////////////////////////////////////////////////////////
	//第二页得到按钮
	
	//选择自定义启动
	$('#screen2_main_right_cover').click(function() {
		$("#screen2_main_container").animate({left: "-100%"},{ duration: 800, queue: false });
		$("#screen2_costumstart_container").animate({left: "0%"},{ duration: 800, queue: false });
		$('#copyright').fadeOut(1000);
		toast('请填写镜像的URL之后启动虚拟机');
	});
	
	//选择快速启动
	$('#screen2_main_left_cover').click(function() {
		$("#screen2_main_container").animate({left: "100%"},{ duration: 800, queue: false });
		$("#screen2_quickstart_container").animate({left: "0%"},{ duration: 800, queue: false });
		$('#copyright').fadeOut(1000);
		toast('请选择右侧预置的镜像');
	});
	
	//导航栏的主页
	$('#screen2_nav_home').click(function() {
		$("#screen2_main_container").animate({left: "0%"},{ duration: 800, queue: false });
		$("#screen2_quickstart_container").animate({left: "-100%"},{ duration: 800, queue: false });
		$("#screen2_costumstart_container").animate({left: "100%"},{ duration: 800, queue: false });
		$('#copyright').fadeIn(1000);
		toast('请点击图标继续');
	});
	
	//导航栏的全屏
	$('#screen2_nav_fullScreen').click(function() {
		if(document.fullscreenElement ||
    		document.webkitFullscreenElement ||
   			document.mozFullScreenElement ||
    		document.msFullscreenElement)
			exitFullscreen();
		else
			requestFullScreen();
			
		$('#copyright').fadeIn(1000,function(){$('#copyright').fadeOut(5000);});
	});
	
	//快速启动页面的系统选择页
	$('#screen2_quickstart_select>*').click(function() {		
		var i=0;
		$('#screen2_nav_home').fadeOut(3000);
		$('#screen2_quickstart_select>*').fadeOut(3000);

		switch(this.id)
		{
		case 'Select_KolibriOS':
			toast('警告：您选择的系统运行缓慢!!!');
			QuickStartVM(0);
			break;
		case 'Select_Linux':
			QuickStartVM(1);
			break;
		case 'Select_Windows':
			QuickStartVM(2);
			break;
		case 'Select_OpenBSD':
			QuickStartVM(3);
			break;
		case 'Select_Sol':
			toast('警告：您选择的系统运行缓慢!!!');
			QuickStartVM(4);
			break;
		case 'Select_FreeDOS':
			QuickStartVM(5);
			break;
		}
		
		$('#screen2_quickstart_select').fadeOut();
		$('#screen2_quickstart_control').fadeIn();
		lock_mouse(document.body);
		
		toast('系统启动！<br>鼠标已经被锁定！');
		toast('ESC键退出全屏并且解除鼠标锁定');
	});
	
	$('#QuickStart_Pause').click(function() {
		if($('#QuickStart_Pause').text()!='启动')
		{	
			cpu.stop();
			$('#QuickStart_Pause').text('启动');
		}
		else
		{
			cpu.run();
			$('#QuickStart_Pause').text('暂停');
		}
	});
	
	$('#QuickStart_Hide').click(function() {
		lock_mouse(document.body);
		toast('鼠标已经被锁定！');
	});
	
	//自定义vm页面
	$('#CustumVMRun').click(function() {
		if(typeof(cpu)=='undefined')
		{
			var CDURL,HDURL,FDDURL,MemorySize,VideoMemorySize;
			
			$('#screen2_nav_home').fadeOut(1000);
			$('#CustumVMRun').text('暂停');
			$('#CustomStart_Hide').fadeIn();
			
			CDURL=$('#CustumCDUrl').val();
			HDURL=$('#CustumFDDUrl').val();
			FDDURL=$('#CustumHDUrl').val();
			MemorySize=parseInt($('#CustumMemory').val());
			VideoMemorySize=parseInt($('#CustomVideoMemory').val());
			
			$('#CustumCDUrl').attr("disabled","disabled");
			$('#CustumFDDUrl').attr("disabled","disabled");
			$('#CustumHDUrl').attr("disabled","disabled");
			$('#CustumMemory').attr("disabled","disabled");
			$('#CustomVideoMemory').attr("disabled","disabled");
			
			CustomStartVM(CDURL,FDDURL,HDURL,MemorySize*1024*1024,VideoMemorySize*1024*1024);
			lock_mouse(document.body);
			
			toast('系统启动！<br>鼠标已经被锁定！');
			toast('ESC键退出全屏并且解除鼠标锁定');
			return;
		}
		if($('#CustumVMRun').text()!="暂停")
		{
			cpu.run();
			$('#CustumVMRun').text('暂停');
		}
		else
		{
			cpu.stop();
			$('#CustumVMRun').text('运行');
		}
	});
	
	$('#CustomStart_Hide').click(function() {
		lock_mouse(document.body);
		toast('鼠标已经被锁定！');
	});
	
	$('#CustumCDUrl').removeAttr('disabled');
	$('#CustumFDDUrl').removeAttr('disabled');
	$('#CustumHDUrl').removeAttr('disabled');
	$('#CustumMemory').removeAttr('disabled');
	$('#CustomVideoMemory').removeAttr('disabled');
	
	
	//版权页面的popup
	$('#copyright').click(function() {popupCopyright();});
	$('#screen2_nav_about').click(function() {popupCopyright();});
	
	toast('初始化完成！');
});

