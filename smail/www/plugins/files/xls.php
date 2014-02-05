<?php
/*
* xls методы для работы с xls документами. 
*
* Помимо получения данных в первозданном виде, 
* модуль также реализует определённый синтаксис в Excel для построения иерархичной структуры с данными.
*
* **Подключение**

	$xls=infra_load('*files/xls.php','r');

* **Использование**

	//Получаем данные из Excel "как есть"
	$data=xls_parse('*Главное меню.xls');
	//или
	$data=xls_make('*Главное меню.xls');
	//Создаём объект с вложенными группами root->book->sheet данные на страницах ещё не изменялись, 
	//но сгрупировались
	//descr - всё что до head
	//head - первая строка в которой больше 2х заполненых ячеек
	//data - всё что после head
	xls_processDescr($data);//descr приводится к виду ключ значение
	xls_run($data,function($group){//Бежим по всем группам
		unset($group['parent']);//Удалили рекурсивное свойсто parent
		for($i=0,$l=sizeof($group['data']);$i<$l;$i++){
			$pos=$group['data'][$i];
			unset($pos['group']);//Удалили рекурсивное свойсто group
		}
	});
	xls_init(path)
*/	
	@define('ROOT','../../../');
	require_once(ROOT.'infra/plugins/infra/infra.php');

/*var pathlib=require('path');
var util=require('util');
var csv=require('node-csv');
var crypto=require('crypto');
var fs=require('fs');
csv=csv.createParser(',','"','"');*/

infra_load('*files/excel_parser/oleread.php','r');
infra_load('*files/excel_parser/reader.php','r');
function &xls_parseTable($path,$list){
	$data=xls_parse($path,$list);
}
function &xls_parseAll($path){
	return infra_cache(array($path),'xls_parseAll',function &($file){
		$file=infra_theme($file);
		$data=array();
		if(!$file)return $data;
		$d = new Spreadsheet_Excel_Reader();
		$d->setOutputEncoding('utf-8');
		$d->read(ROOT.$file);
		infra_forr($d->boundsheets,function(&$sheets,&$data,$v,$k){
			$data[$v['name']]=&$sheets[$k]['cells'];
		},array(&$d->sheets,&$data));
		return $data;
	},array($path));
}
function &xls_parse($path,$list=false){
	$data=&xls_parseAll($path);
	if(!$list) $list=infra_foro($data,function(&$v,$k){return $k;});
	return $data[$list];
}

function &xls_make($path){
	$data=xls_parseAll($path);
	if(!$data)return;
	$p=pathinfo($path);
	$title=$p['filename'];

	$title=preg_replace('/^\d*\s*/','',$title);
	$parent=false;
	$groups=_xls_createGroup($title,$parent,'book');
	infra_foro($data,function(&$groups, &$data,$title){//Бежим по листам
		if($title{0}==='.')return;//Не применяем лист у которого точка в начале имени
		$group=_xls_createGroup($title,$groups,'list');
		if(!$group)return;
		$groups['childs'][]=&$group;
		
		$head=false;//Заголовки ещё не нашли
		$pgpy=false;//ПГПЯ Признак группы пустая ячейка в строке... а этом свойстве будет индекс ПГПЯ
		$wasdata=false;//Были ли до этого данные
		$wasgroup=false;
		//var empty=0;//Количество пустых строк
		$first_index=0;
		$argr=array(&$group);
		$args=array(&$head,&$pgpy,&$wasdata,&$wasgroup,&$argr,&$first_index);
		infra_foro($data,function(&$head,&$pgpy,&$wasdata,&$wasgroup,&$argr,&$first_index, &$row,$i){//Бежим по строкам 
			$count=0;
			$group=&$argr[0];
			infra_foro($row,function(&$count, &$cell){
				if($cell)$count++;
			},array(&$count));
			if(!$head){
				infra_foro($row,function(&$val,$i,&$b){
					$b[$i]=preg_replace('/\s+$/','',$b[$i]);
					$b[$i]=preg_replace('/^\s+/','',$b[$i]);
				});
				$head=($count>2);//Больше 2х не пустых ячеек будет заголовком
				foreach($row as $first_index=>$first_value)break;
				if($head){//Текущий row и есть заголовок
					$group['head']=&$row;
				}else{
					if($first_value=='ПГПЯ'){
						$pgpy=$row[$first_index+1]-1;//Индекс пустой ячейки
					}else{
						if($first_value)$group['descr'][]=&$row;
					}
				}
			}else{
				$isnewgroup=($row[$first_index]&&($count==1)&&strlen($row[$first_index])>1);//Если есть только первая ячейка и та длинее одного символа
				if(!$isnewgroup&&$pgpy&&sizeof($row[$first_index])!==1){
					$isnewgroup=!$row[$pgpy];
				}

				if($isnewgroup){
					if($wasdata&&$group['parent']){
						$parent=&$group['parent'];
					}else{
						$parent=&$group;//Если уже были данные то поднимаемся наверх
					}
					$g=_xls_createGroup($row[$first_index],$parent,'row',$row);//Создаём новую группу
					if(!$g)return;
					$wasgroup=true;
					$wasdata=false;
					
					//g.descr=g.parent.descr.concat(g.descr);
					
					$g['head']=&$g['parent']['head'];
					$g['parent']['childs'][]=&$g;
					//unset($group);
					unset($argr[0]);
					$argr[0]=&$g;
					//$group=&$g;//Теперь ссылка на новую группу и следующие данные будут добавляться в неё
					//Новая ссылка забивает на старую, простое присвоение это новое место куда указывает ссылка
				}else{
					if($count===1&&strlen($row[$first_index])===1){//подъём на уровень выше
						if($group['parent']&&$group['parent']['parent'])$group=&$group['parent'];
					}else{
						$wasdata=true;
						$group['data'][]=&$row;
					}
				}
			}
		},$args);
	},array(&$groups));
	return $groups;
}
function &xls_runPoss(&$data,$callback,$args=array(),$back=false,$i=0,&$group=false){
	return xls_runGroups($data,function($back,$callback,$args, &$group){
		return infra_forr($group['data'],$callback,$args);
	},array($back,$callback,&$args),$back);
}
function &xls_runGroups(&$data,$callback,$args=array(),$back=false,$i=0,&$group=false){
	if(!$back){
		$r=&call_user_func_array($callback,array_merge($args,array(&$data,$i,&$group)));
		if(!is_null($r))return $r;
	}
	$r=&infra_forr($data['childs'],function($callback,$back,$args, &$val,$i,&$group){
		return xls_runGroups($val,$callback,$args, $back,$i,$group);
	},array($callback,$back,$args),$back);
	if(!is_null($r))return $r;
	
	if($back){
		$r=&call_user_func_array($callback,array_merge($args,array(&$data,$i,&$group)));
		if(!is_null($r))return $r;
	}
}
function _xls_createGroup($title='',&$parent,$type,&$row=false){
	$tparam='';
	$descr=array();
	$miss=false;
	$t=explode(':',$title);
	if(!$t[0]&&$parent){
		array_shift($t);
		$title=implode(':',$t);
		foreach($parent['descr'] as $first_index=>$first_value)break;
		if(!infra_forr($parent['descr'],function($first_index, &$row){
			if($row[$first_index]=='Описание'){
				$row[$first_index+1].='<br>'.$title;
				return true;
			}
		},array($first_index))){
			array_push($parent['descr'],array('Описание',$title));
		}
		return false;
	}else{
		if(sizeof($t)>1){
			$title=$t[0];
			if($title=='Производитель'){//Производитель:KUKA будет означать что у текущей группы указан производитель
				$title=implode(':',$t[1]);
				$tparam='';
				array_push($descr,array('Производитель',$title));
				$miss=true;
			}else{
				$tparam=$t[1];
			}
		}
	}
	$title=preg_replace('/["+\']/',' ',$title);
	$title=preg_replace('/[\\/\\\\]/','',$title);
	$title=preg_replace('/^\s+/','',$title);
	$title=preg_replace('/\s+$/','',$title);
	$title=preg_replace('/\s+/',' ',$title);
	// title=title.toUpperCase();
	return array( 
		'tparam'=>$tparam,//Параметр у группы Сварка:asdfasd что угодно
		'groups'=>false,//Количество групп вместе с текущей
		'count'=>false,
		'row'=>&$row,//Вся строка группы
		'miss'=>$miss,//Группу надо расформировать, но мы не знаем ещё есть ли в ней позиции
		'type'=>$type,
		'parent'=>&$parent,
		'title'=>(string)$title,
		'head'=>array(),'descr'=>&$descr,'data'=>array(),'childs'=>array()
	);
}

/*function xls_getTable(&$data){//
	//используется data head
	$head=false;
	$tbl=array();
	infra_forr($data,function(&$head,&$tpl, &$row,$i){
		if(!$head&&sizeof($row)>2){
			$head=$row;
			return;
		}else if($head){
			$p=array();
			infra_foru($row,function(&$p,&$head, $propvalue,$i){
				$propname=$head[$i];
				if(!$propname)return;
				if($propname{0}=='.')return;//Колонки с точкой скрыты
				if($propvalue=='')return;
				if($propvalue{0}=='.')return;//Позиции у которых параметры начинаются с точки скрыты
				$p[$propname]=$propvalue;
			},array(&$p,&$head));
			$tpl[]=&$p;
		}
	},array(&$head,&$tpl));
	return $tpl;
}*/
function xls_processPoss(&$data){ //
	//используется data head
	$head=false;


	xls_runGroups($data,function(&$head, &$data){	
		if($data['head'])$head=&$data['head'];
		infra_forr($data['data'],function(&$head,&$data, &$pos,$i,&$group){
			$p=array();
			infra_foro($pos,function(&$p,&$head, $propvalue,$i){
				$propname=$head[$i];
				if(!$propname)return;
				if($propname{0}=='.')return;//Колонки с точкой скрыты
				if($propvalue=='')return;
				if($propvalue{0}=='.')return;//Позиции у которых параметры начинаются с точки скрыты
				$p[$propname]=$propvalue;
			},array(&$p,&$head));
			$p['group']=&$data;//Рекурсия
			$group[$i]=&$p;
		},array(&$head,&$data));
		unset($data['head']);
	},array(&$head));
}
function xls_print($data){
	echo '<pre>';
	xls_runGroups($data,function(&$group){ unset($group['parent']); });
	xls_runPoss($data,function(&$pos){ unset($pos['group']); });
	print_r($data);
}
function xls_processPossFilter(&$data,$props){//Если Нет какого-то свойства не учитываем позицию
	xls_runGroups($data,function(&$props, &$data){	
		$d=array();
		infra_forr($data['data'],function(&$props,&$d, &$pos){
			if(!infra_forr($props,function(&$pos, $name){
				if(!$pos[$name])return true;
			},array(&$pos))){
				$d[]=&$pos;
			}
		},array(&$props,&$d));
		$data['data']=$d;
	},array(&$props));
}
function xls_processPossPath(&$data){//
	//используется path групп
	xls_runPoss($data,function(&$pos){
		$data=&$pos['group'];
		$pos['path']=$data['path'];
		$pos['path'][]=$data['title'];
	});
}
function xls_processPossBe(&$data,$check1,$check2){//Если у позиции нет поля check1.. то оно будет равнятся полю check2
	//используется data
	xls_runPoss($data,function($check1,$check2, &$pos){	
		if(is_null($pos[$check1]))$pos[$check1]=$pos[$check2];
		if(is_null($pos[$check2]))$pos[$check2]=$pos[$check1];
	},array($check1,$check2));
}
function xls_forFS($str){
	$str=preg_replace('/[\'"\:\/\\\\#\$&]/',' ',$str);//Заменяем и точку, чтобы можно было сохранять в сессии как ключ
	$str=preg_replace('/^\s+/','',$str);
	$str=preg_replace('/\s+$/','',$str);
	$str=preg_replace('/\s+/',' ',$str);
	return $str;
}
function xls_processPossFS(&$data,$props){
	xls_runPoss($data,function(&$props, &$pos){	
		infra_fora($props,function(&$pos, $name){
			$pos[$name]=xls_forFS($pos[$name]);
		},array(&$pos));
	},array(&$props));
};
function xls_processPossMore(&$data,$props){
	xls_runPoss($data,function(&$props, &$pos,$i,&$group){	
		$p=array();
		$more=array();				
		
		
		$prop=array();
		infra_forr($props,function(&$prop, $name){
			$prop[$name]=true;
		},array(&$prop));
		
		infra_foro($pos,function(&$p,&$prop,&$more, &$val,$name){
			if($prop[$name])$p[$name]=&$val;
			else $more[$name]=&$val;
		},array(&$p,&$prop,&$more));
		$p['more']=&$more;
		$group[$i]=&$p;
	},array(&$props));
}

function xls_merge(&$gr,&$addgr){//Всё из группы addgr нужно перенести в gr
	$i=infra_forr($addgr['parent']['childs'],function(&$addgr, &$v,$i){if(infra_isEqual($v,$addgr))return $i;},array(&$addgr));
	array_splice($addgr['parent']['childs'],$i,1);//Удалили addgr там где группа была до этоо, заменив на новую
	
	infra_forr($addgr['childs'],function(&$gr, &$val){
		$val['parent']=&$gr;
		$gr['childs'][]=&$val;
	},array(&$gr));

	infra_fori($addgr['descr'],function(&$gr, $des,$key){
		if(is_null($gr['descr'][$key])){
			$gr['descr'][$key]=$des;
		};
	},array(&$gr));

	if($gr['tparam'])$gr['tparam'].=','.$addgr['tparam'];
	else $gr['tparam']=$addgr['tparam'];

	infra_forr($addgr['data'],function(&$gr, &$val){
		$val['group']=&$gr;
		$gr['data'][]=&$val;
	},array(&$gr));
}
function xls_processGroupFilter(&$data){
	$all=array();
	xls_runGroups($data,function(&$all, &$gr,$i,&$group){
		if(!$all[$gr['title']]){
			$all[$gr['title']]=&$gr;
		}else{//Ну вот и нашли повторение
			//var group=all[gr.title].parent.childs
			//var i=infra.forr(group,function(v,i){if(v===all[gr.title])return i});
			//group.splice(i,1);
			
			xls_merge($gr,$all[$gr['title']]);//Добавляем в первое совпадение

			$all[$gr['title']]=&$gr;
		}
	},array(&$all),true);

	xls_runGroups($data,function(&$gr,$i,&$group){//Удаляем пустые группы
		if(!$group) return;//Кроме верхней группы
		if(!sizeof($gr['childs'])&&!sizeof($gr['data'])){
			array_splice($group,$i,1);
		}
	},array(),true);
}
/*function xls_getPare(&$data){//из [['asdf',1],['2sx',2]] делает {'asdf':1,'2sx':2}
	$tbl=array();
	infra_forr($data,function(&$tpl, $row){
		$tbl[$row[0]]=$row[1];
	},array(&$tbl));
	return $tbl;
}*/
function xls_processDescr(&$data){//
	xls_runGroups($data,function(&$gr){
		$descr=array();
		infra_foru($gr['descr'],function(&$descr, $row){
			$row=array_values($row);
			$descr[$row[0]]=$row[1];
		},array(&$descr));
		$gr['descr']=&$descr;
	});
}
function xls_processGroupCalculate(&$data){
	xls_runGroups($data,function(&$data){
		$data['count']=sizeof($data['data']);
		$data['groups']=1;
		infra_forr($data['childs'],function(&$data, &$d){
			$data['count']+=$d['count'];
			$data['groups']+=$d['groups'];
		},array(&$data));
	},array(),true);
};
function xls_processGroupPath(&$data){
	xls_runGroups($data,function($data){
		$data['path']=array();
		if($data['parent']&&$data['parent']['parent']){
			infra_forr($data['parent']['path'],function(&$data, $name){
				$data['path'][]=$name;
			},array(&$data));
			$data['path'][]=$data['parent']['title'];
		}
	});
};
function xls_processClass(&$data,$clsname,$musthave=false){
	
	$run=function(&$data,$run,$clsname,$musthave, $clsvalue=''){
		if($data['type']=='book'&&$musthave){
			$data['miss']=true;
			$clsvalue=xls_forFS($data['title']);
		}else if($data['type']=='list'&&$data['descr'][$clsname]){//Если в descr указан класс то имя листа игнорируется иначе это будет группой каталога, а классом будет считаться имя книги
			$data['miss']=true;//Если у листа есть позиции без группы он не расформировывается
			$clsvalue=xls_forFS($data['descr'][$clsname]);
		}else if($data['type']=='row'&&$data['descr'][$clsname]){
			$clsvalue=xls_forFS($data['descr'][$clsname]);
		}
		infra_forr($data['data'],function($clsname,$clsvalue, &$pos){
			if(!$pos[$clsname]){
				$pos[$clsname]=$clsvalue;//У позиции будет установлен ближайший класс
			}else{
				$pos[$clsname]=xls_forFS($pos[$clsname]);
			}
		},array($clsname,$clsvalue));
		
		infra_forr($data['childs'],function($run,$clsvalue,$clsname,$musthave, &$data){
			$run($data,$run,$clsname,$musthave, $clsvalue);
		},array($run,$clsvalue,$clsname,$musthave));
	};
	$run($data,$run,$clsname,$musthave);
	return $data;
}
function xls_processGroupMiss(&$data){

	$numArgs=func_num_args();
	if($numArgs>1){
		trigger_error(sprintf('%s: expects at least 1 parameters, %s given', __FUNCTION__, $numArgs), E_USER_WARNING);
		return false;
	}

/*		
		echo '<pre>';
		xls_runGroups($data,function(&$g){
			unset($g['parent']);
		});
		xls_runPoss($data,function(&$p){
			unset($p['group']);
		});
		print_r($data);
		echo '<hr>';*/


	xls_runGroups($data,function(&$gr,$i,&$childs){
		if($gr['miss']&&$gr['parent']){
			//Берём детей missгруппы и переносим их в родительскую
			infra_forr($gr['childs'],function(&$parent, &$g){
				$g['parent']=&$parent;
			},array(&$gr['parent']));
			array_splice($childs,$i,1,$gr['childs']);

			infra_forr($gr['data'],function(&$parent, &$p){
				$p['group']=&$parent;
				$parent['data'][]=$p;
			},array(&$gr['parent']));

			//infra_forr($gr['childs'],function(&$gr,&$childs, &$d){
		//		array_splice($childs,($i++)-1,0,array(&$d));
		//		$d['parent']=&$gr['parent'];
		//	},array(&$gr,&$childs));
		//	$arr[]=&$gr;
		}
	},array(),true);//Если бежим вперёд повторы несколько раз находим, так как добавляем в конец// Если бежим сзади рушится порядок

	/*$arr=array();
	array_reverse($arr);
	infra_forr($arr,function(&$gr){
		//echo '<pre>';
		//echo '<b>'.$gr['title'].'</b><br>';
		$i=infra_forr($gr['parent']['childs'],function(&$gr, &$val,$i){if(infra_isEqual($val,$gr))return $i;},array(&$gr));

		if(!is_null($i)){
			array_splice($gr['parent']['childs'],$i,1);
		}
		infra_forr($gr['data'],function(&$gr, &$d){
			$d['group']=&$gr['parent'];
			$gr['parent']['data'][]=&$d;
		},array(&$gr));
	},array(),true);

	
	
	//infra.bug(data);
	//this.run(data,function(gr,i,group){
	//	console.log(group);
	//	if(gr.del){
	//		
	//		group.splice(i,1);
	//	}
	//},true);
	 */
}
function _xls_sort($a,$b){
	return ($a < $b) ? -1 : ($a > $b) ? 1 : 0;
}
function _xls_sortName($a,$b){
	$a=$a['Наименование'];
	$b=$b['Наименование'];
	return ($a < $b) ? -1 : ($a > $b) ? 1 : 0;
}
function xls_pageList(&$poss,$page,$count,$sort,$numbers){
	$all=sizeof($poss);
	$pages=ceil($all/$count);
	if($page>$pages)$page=$pages;
	if($page<1)$page=1;
	if($numbers<1)$numbers=1;
	$numbers--;
	//page pages numbers first last
	$first=floor($numbers/2);
	$tfirst=$first;
	$last=$numbers-$first;
	$show=array();

	while($tfirst){
		$p=$page-$tfirst;
		if($p<1){
			$last++;
			$first--;
		}
		$tfirst--;
	}
	while($last){
		$p=$page+$last;
		if($p<=$pages){
			$show[]=$p;
		}else{
			$first++;
		}	
		$last--;
	}
	while($first){
		$p=$page-$first;
		if($p>0){
			$show[]=$p;
		}
		$first--;
	}
	$show[]=(int)$page;
	//usort($show,'_xls_sort');
	sort($show);

	if($sort=='name'){
		usort($poss,'_xls_sortName');
	}
	infra_forr($poss,function(&$p,$i){
		$p['num']=$i+1;
	});
	$next=$page+1;
	$prev=$page-1;
	if($prev<1)$prev=1;
	if($next>$pages)$next=$pages;
	$r=array(
		'next'=>$next,
		'prev'=>$prev,
		'show'=>$show,//Список страниц
		'page'=>$page,//Текущая страница
		'sort'=>$sort,//сортировка
		'list'=>array(),//Список позиций на выбранной странице
		'pages'=>$pages//Всего страниц
	);

	$start=($page*$count-$count);
	for($i=$start,$l=$start+$count;$i<$l;$i++){
		if(!$poss[$i])break;
		$r['list'][]=&$poss[$i];
	}
	return $r;
}
infra_load('*infra/ext/seq.php','r');
function xls_preparePosFiles(&$pos,$pth,$props=array()){
	if(!$pos['images'])$pos['images']=array();
	if(!$pos['texts'])$pos['texts']=array();
	if(!$pos['files'])$pos['files']=array();
	$dir=array();
	if(infra_forr($props,function(&$dir,&$pos, $name){
		$rname=infra_seq_right($name);
		$val=infra_seq_get($pos,$rname);
		if(!$val)return true;
		$dir[]=$val;
	},array(&$dir,&$pos))){
		return;
	}

	if($dir){
		$dir=implode('/',$dir).'/';
		$dir=$pth.$dir;
	}else{
		$dir=$pth;
	}
	$dir=infra_theme($dir,'fd');
	if(!$dir) return false;
	if(is_dir(ROOT.$dir)){
		$paths=glob(ROOT.$dir.'*');
	}else if(is_file(ROOT.$dir)){
		$paths=array(ROOT.$dir);
		$p=pathinfo(ROOT.$dir);
		$dir=$p['dirname'].'/';
		$dir=str_replace(ROOT,'',$dir);
	}
	infra_forr($paths,function(&$pos,$dir, $p){
		$d=explode('/',$p);
		$name=array_pop($d);
		preg_match('/\.(\w{0,4})$/',$name,$m);
		$ext=$m[1];
		//if(!$ext)return;
		if(!is_file(ROOT.$dir.$name))return;
		//$name=preg_replace('/\.\w{0,4}$/','',$name);

		/*$p=pathinfo($p);
		$name=$p['basename'];
		$ext=strtolower($p['extension']);*/
		$name=infra_toutf($dir.$name);
		if($name{0}=='.')return;
		$im=array('png','gif','jpg');
		$te=array('html','tpl','mht');
		if(infra_forr($im,function($ext, $e){if($ext==$e)return true;},array($ext))){
			$pos['images'][]=$name;
		}else if(infra_forr($te,function($ext, $e){if($ext==$e)return true;},array($ext))){
			$pos['texts'][]=$name;
		}else{
			if($ext!='db'){
				$pos['files'][]=$name;
			}
		}
	},array(&$pos,$dir));
}

function &xls_init($path,$musthaveproducers=null){//Возвращает полностью гототовый массив
	$config=array();
	if(is_array($musthaveproducers))$config=$musthaveproducers;

	if(is_null($musthaveproducers))$musthaveproducers=true;
	if(infra_isAssoc($path)===true)return $path;
	$parent=false;
	$data=_xls_createGroup('Каталог',$parent,'set');//Сделали группу в которую объединяются все остальные
	$data['miss']=true;//Если в группе будет только одна подгруппа она удалится... подгруппа поднимится на уровень выше
	
	$ar=array();		
	infra_fora($path,function(&$ar, $path){
		if(infra_theme($path,'f')){
			$ar[]=$path;
		}else if(infra_theme($path,'d')){
			$files=glob(ROOT.infra_theme($path,'d').'*');
			infra_forr($files,function($path,&$ar, $file){
				$file=pathinfo($file,PATHINFO_BASENAME);
				if($file{0}=='.')return;
				$ext=strtolower(pathinfo($file,PATHINFO_EXTENSION));
				if($ext=='xls')$ar[]=$path.infra_toutf($file);
			},array($path,&$ar));
		}
	},array(&$ar));
	
	infra_forr($ar,function(&$data, $path){
		$d=xls_make($path);
		if(!$d)return;
		$d['parent']=&$data;
		$data['childs'][]=&$d;
	},array(&$data));


	//if(data.childs.length==1)data=data.childs[0];

	xls_processDescr($data);
	
	xls_processPoss($data);


	xls_processClass($data,'Производитель',$musthaveproducers);//Должен быть обязательно

	xls_processPossBe($data,'Артикул','Наименование');//Если есть что-то из этого то второе будет такимже если второго нет

	xls_processPossFilter($data,array('Артикул'));//Обязательно должны быть
	xls_processPossBe($data,'Артикул','Наименование');//Если есть что-то из этого то второе будет такимже если второго нет
	xls_processPossFS($data,array('Артикул'));//Заменяем левые символы в свойстве

	//infra.forr(data.childs,function(d){console.log(d.title)});
	//this.run(data,function(d){ console.log(d.descr)});
	xls_processGroupMiss($data);//Группы miss(производители) расформировываются
/*	xls_runPoss($data,function(&$pos){
		echo $pos['group']['title'].' '.$pos['Производитель'].' '.$pos['Артикул'].'<br>';
	},array());
	exit;*/
		/*echo '<pre>';
		$data=$data['childs'][0];
		unset($data['parent']);
		print_r($data);
		exit;*/
	//this.run(data,function(d){ infra.bug(d.title) });		
	if($config['upper']){
		xls_runGroups($data,function(&$group){
			$group['title']=strtoupper($group['title']);
		});
	}


	xls_processGroupFilter($data);//Объединяются группы с одинаковым именем, Удаляются пустые группы
		/*xls_runPoss($data,function(&$p){
			echo $p['Артикул'].'<br>';
		});
	exit;*/
	/*xls_runGroups($data,function(&$g){
		if($g['title']=='Профессиональные моющие средства'){
			echo $g['tparam'].'<br>';
			echo 'data:'.sizeof($g['data']).'<br>';
			echo 'childs:'.sizeof($g['childs']).'<br>';
			unset($g['data']);
			unset($g['parent']);
			unset($g['childs']);
			echo '<Pre>';
			var_dump($g);
			exit;
		}
	});*/
	
	xls_processGroupCalculate($data);//Добавляются свойства count groups сколько позиций и групп группы должны быть уже определены... почищены...				
	
	xls_processGroupPath($data);
	xls_processPossPath($data);

	xls_processPossMore($data,array('path','group','Производитель','Наименование','Описание','Артикул'));//позициям + more		

	return $data;
};
?>

