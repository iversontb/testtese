// Множитель для отступа (в пикселях)
multiplier = 20;

// Имя пункта меню
classname = "list_item_";

// Текущий сдвиг (!НЕ ИЗМЕНЯТЬ!)
cur_indent = 0;

// ID редактируемого дерева
treeID = "tree";

// Форма для редактирования
FormEdit = "#edititemdiv";

// Флаг изменения позиции
parent_change = false;

// Флаг что родителя не существует в данный момент движения
no_pseudo_parent = false;

// -------------------- Отступы! Все изменения завяаны только здесь. --------------------
// Получить целочисленное значение отступа
function GetIndent(JQueryObj){
  return Math.round(parseInt(JQueryObj.css("margin-left").replace("px", ""))/multiplier);
}

// Задать целочисленное значение отступа
function SetIndent(JQueryObj, indent){
  JQueryObj.css("margin-left", ""+indent*multiplier+"px");
  return 0;
}

// Добавить отступ к существующему. Требуется при перемещении подпунктов двигаемого пункта в основное дерево
function AddIndent(JQueryObj, indent){
  JQueryObj.each(function(i) {
    SetIndent($(this), GetIndent($(this))+indent);
  })
}

// -------------------- Классы --------------------
// Класс элемента меню
function MenuItemClass(get_id, get_pid, get_ord, get_indent) {
    this.indent = get_indent;
    this.id = get_id;
    this.pid = get_pid;
    this.ord = get_ord;
}

// Класс меню
function MenuClass(ClassID) {
    // Свойства
    this.size = $("#"+ClassID+" > li").length;
    this.items = new Array(this.size);
    //this.prefix = ClassID;
    this.JQueryElement = $("#"+ClassID);
    
    // Методы
    this.AddItem = function(id,pid,ord) {
      var MenuItem = new MenuItemClass(get_id, get_pid, get_ord);
      this.items[this.items.length] = MenuItem;
      return 0;
    };
    
    // Number - порядковый номер в списке li на текущее состояние. 
    // получает ID пункта меню (пзиция на начальное состояние)
    this.GetLiID = function(number){
        var obj = this.JQueryElement.children(":not(li.ui-state-highlight)").eq(number);
        for (var i = 0; i<window.ids.length; i++)
          { 
            var cclassName = classname+window.ids[i];
            if (obj.hasClass(cclassName))
            return window.ids[i];
          }
        return -1;
    }
    
    // Возвращает набор пунктов, являющихся детьми id-го элемента
    // id - порядковый номер в списке li на текущее состояние. 
    this.GetChildren = function(id){
      var Selector = "";
      var index = this.JQueryElement.children().index($("."+classname+id));
      var parentIndent = this.items[id].indent;
      // Начинаем цикл с этого пункта
      for (var i = id+1; i<this.size; i++){
        if (this.items[i].indent<=parentIndent) break;
        var CurSelector = classname+(this.GetLiID(i)); 
        if (Selector=="")
          Selector = "li."+CurSelector;
        else
          Selector += ", li."+CurSelector;
        }
      if (Selector=="") return;
      return $(Selector);
    }
    
    // Возвращает количество детей id-го элемента
    // id - порядковый номер в списке li на текущее состояние. 
    this.ChildrenCount = function(id){
      var Count = 0;
      var parentIndent = this.items[id].indent;
      for (var i = id+1; i<this.size; i++){
        if (this.items[i].indent<=parentIndent) 
          break;
        Count++;
        }
      return Count;
    }
    
    // Заполняем таблицу меню
    this.Fill = function() {
        // Стек - путь от корневого элемента к текущему
        var StackIDs = new Array(this.size);
        var StackORDs = new Array(this.size);
        
        StackIDs[0] = 0;
        StackORDs[0] = -1;
        var lastindent = 0;
        var lastid = 0;
        for (var i = 0; i<this.size; i++){
          // Parent ID
          var pid = 0;
          // order
          var ord = 0;
          // ID
          var id = this.GetLiID(i);
          
          // Получаем текущий отступ из документа
          var CurIndent = this.GetLiIndent(i);
          
          // Если отступ неправильный, приводим его к правильному
          if (CurIndent>lastindent+1) 
            CurIndent=lastindent+1;
          
          // Если отступ увеличился
          if (CurIndent==lastindent+1) {
            // Добавляем в путь текущий элемент
            StackIDs[CurIndent] = lastid;
            // Родительский ID равен ID прошлого элемента цикла (текущий i+1) 
            pid = lastid;
            // Начинаем новый отсчет порядковых номеров
            StackORDs[CurIndent] = 0;
            // Текущий порядковый номер 0
            ord = 0;
          }
          else {
            // Родительский ID равен значению в пути к элементу с текущим сдвигом
            pid = StackIDs[CurIndent];
            // Увеличиваем порядковый номер на 1
            ord = ++StackORDs[CurIndent];
          }
          // Сохраняем элемент
          this.items[i] = new MenuItemClass(id, pid, ord, CurIndent);
          
          // Сохраняем значение сдвига и ID для следующего цикла
          lastindent = CurIndent;
          lastid = id;
        }
        delete StackIDs;
        delete StackORDs;
        return 0;
    };
    
    // Деструктор
    this.destruct = function() {
        for (var i = 0; i<this.size; i++){
          delete this.items[i];
        }
        delete this.items;
        return 0;
    };
    
    // Получает значение отступа у пункта 
    // id - порядковый номер в списке li на текущее состояние. 
    this.GetLiIndent = function(id){
        return GetIndent(this.JQueryElement.children(":eq("+id+")"));
    };
}

//  -------------------- Общие функции --------------------

  //
  function saveParams(){
      if ($(".edit_page").val() == -1)
        updateitem( $(".edit_liid").val(), 
                    $(".edit_liname").val(), 
                    0, 
                    $(".edit_value_free").val(), 
                    $(".edit_icon").val(), 
                    $(".edit_dom_param").val());
      else 
        updateitem( $(".edit_liid").val(), 
                    $(".edit_liname").val(), 
                    1, 
                    $(".edit_page").val(), 
                    $(".edit_icon").val(), 
                    $(".edit_dom_param").val());
  }

  // Модифицируем форму редактирования
  function set_edit_data(data){
    for (var key in data) {
        var val = data[key];
        switch (key) { 
            case "name": 
              $(".edit_liname").val(data[key]);
              break;
            case "id": 
              $(".edit_liid").val(data[key]);
              break;
            case "type":
              // Если тип - произвольная ссылка
              if (data[key] == 0) {
                $(".edit_value_free").val(data["value"]);
                $(".edit_page").val(-1);
                $("#link_text").show();
              }
              else{
                $("#link_text").hide();
                $(".edit_value_free").val("");
                $(".edit_page").val(data["value"]);
              }
              break;
            case "icon":
              $(".edit_icon").val(data[key]);
              break;   
            case "dom_param":
              $(".edit_dom_param").val(data[key]);
              break;
        }  
    }
  }

  
  function ToggleEditForm(id){
      if ($(FormEdit).css("display")=="none")
      { 
        window.current_edited_item = id;
        showEditAjax(id);
      }
      else  {
        if (window.current_edited_item == id) 
        {
            window.current_edited_item = -1;
            HideEditForm();
        }
        else
        {
            HideEditForm();
            window.current_edited_item = id;
            showEditAjax(id);
        }
      }
  }

  // Показать фору редактирования
  function ShowEditForm(id){
      $("#dialog").dialog("open");

      $("#"+treeID+" > li."+classname+id).css("background-color","#FAA");
//      $(FormEdit).appendTo("li."+classname+id).slideDown();
  }
  
  // Скрыть форму редактирования
  function HideEditForm(){
        $("#dialog").dialog("close");
      $("#"+treeID+" > li").css("background-color","transparent");
/*      $(FormEdit).hide();
      $(FormEdit).insertAfter($("#"+treeID));*/
  }
  
  // Редактировать пункт дерева
  function edititem(id){
      var left_offset = $("li."+classname+id).offset().left+$("li."+classname+id).width();
      var top_offset = $("li."+classname+id).offset().top-$(document).scrollTop();
      $( "#dialog" ).dialog( "option", "position", [left_offset,top_offset] );
      ToggleEditForm(id);
  }

  // Заполнить дерево. Берет табличку полученную аяксом и разворачивает в одноуровневый список с отступами
  function FillTree(TreeID, Texts, Indents, IDs){    
    // Чистим
    $("#"+TreeID).empty();
    window.ids = IDs;
    for (var i = 0; i<Texts.length; i++){ 
      selected = "";
//      if (window.current_edited_item == IDs[i]) selected = " style=\"background-color: #FAA;\" ";
      
      // Добавляем к дереву пункт, попутно обвешивая его кнопками
      $("#"+TreeID).append("<li "+selected+" class='"+classname+IDs[i]+"'>"+
        "<span style=\"cursor:move\">"+Texts[i]+"</span>"+" "+getMoveButton()+" "+
        getEditButton(IDs[i])+" "+getDeleteButton(IDs[i])+"</li>");
       
      // Задаем отступ
      SetIndent($("#"+TreeID+" > li."+classname+IDs[i]), Indents[i]);
      if (window.current_edited_item == IDs[i]) $("#"+TreeID+" > li."+classname+IDs[i]).css("background-color","#FAA");
      }

      function getDeleteButton(id){  
        // href=\"?act=DelItemLi&id="+window.item_id+"&liid="+IDs[i]+"\" - ссылка на удаление без аякса
        return "<img onclick=\"delitem("+id+");\" style=\"cursor:pointer\" src=\"images/delete.png\" title=\"Удалить\">";
      }

      function getEditButton(id){
        // href=\"?act=EditItem&id="+window.item_id+"&liid="+id+"\" - ссылка на редактирование без аякса
        return "<img onclick=\"edititem("+id+");\" style=\"cursor:pointer\" src=\"images/edit.png\" title=\"Редактировать\" >";
      }
      function getMoveButton(){
        return "<img style=\"cursor:move\" src=\"images/move.png\" title=\"Вы можете перетащить элемент для изменения его положения в списке\" >";
      }
  }

  // Создаем объект дерева в памяти и делаем список сортируемым
  function set_sortable(ID, data){
   FillTree(ID, data.texts, data.indents, data.ids);
   CurrentMenu = new MenuClass(ID);
   CurrentMenu.Fill();
   //showTree(1, CurrentMenu);       
 
   $("#"+ID).sortable({
    placeholder: "ui-state-highlight",
    start: function(event, ui) {
      // Убираем форму редактирования
      //HideEditForm();
      //add_log("start"); 
      start_indent = GetIndent(ui.item);
      startx = ui.originalPosition.left+start_indent*multiplier; 
      cur_indent = start_indent;
      start_text = ui.item.text();
      var cur_index = ui.item.index();
      ui.item.addClass("movable_item");
      if (CurrentMenu.ChildrenCount(cur_index))
        {
        var Children = CurrentMenu.GetChildren(cur_index);
        // Оборачиваем детей в ul
        var Wrapped = Children.wrapAll("<ul class='movable_branch'></ul>");
        // Клонируем в подменю
        ui.item.append(Wrapped.clone());
        // Оборачиваем их (хз зачем, клонируются без обертки)
        ui.item.children().wrapAll("<ul class='movable_branch'></ul>");
        // Удаляем исходные пункты из меню
        Wrapped.remove();
        shadow_height = ui.item.find("ul").css("height");
        $(".ui-state-highlight").css("height", shadow_height);
        }

  if (start_indent>0){
    // Подсвечиваем потенциальный родительский пункт
    // Берем первый предыдущий от тени
    var pseudo_parent = $("li.ui-state-highlight").prev("li:last");
    if (pseudo_parent.hasClass("movable_item")) 
        pseudo_parent = pseudo_parent.prev("li");
    // Считаем сдвиг
    var parent_indent = GetPrevIndent();
    // Перебираем к началу пока отступ не изменится
    while (parent_indent >= cur_indent+start_indent){
    // Если текущий пункт первый - выходим
        if (pseudo_parent.length == 0) break;
        pseudo_parent = pseudo_parent.prev();
        parent_indent = GetIndent(pseudo_parent);
    }
    if (pseudo_parent.length != 0) {
      prev_parent = pseudo_parent;
      pseudo_parent.css("background-color","#FCC");
    }
  } else {
    // Предполагаемого родителя нет!
    no_pseudo_parent = true; 
    // Указываем в качестве предыдущего какой нить пункт
    prev_parent = $("#"+treeID).children(":first"); 
    }
      },
      
    sort: function(event, ui) { SetShadowIndent(ui); },
    change: function(event, ui) { SetShadowIndent(ui); parent_change = true; },
    stop: function(event, ui) { 
      prev_parent.css("background-color","transparent");
      var HTML_Element = ui.item;
      // Проверяем что сдвиг неотрицательный
      if (cur_indent+start_indent<0) cur_indent=0-start_indent;
      // Проверяем, что сдвиг не больше, чем значение родительского здвига+1 (имитация дочернего пункта дерева)
      var prev_item = ui.item.prev();
      if (prev_item.length == 0) 
        cur_indent = -start_indent;
      else
        {
        prev_indent = GetIndent(prev_item);
        if (prev_indent<cur_indent+start_indent) cur_indent=prev_indent-start_indent+1;
        }
      // Выбираем детей из пункта
      var Children = ui.item.find("ul.movable_branch > li");
      // Устанавливаем детям отступ
      AddIndent(Children, cur_indent);
      // Вставляем после пункта
      Children.insertAfter(ui.item);
      // Возвращаем содержимое пункта который таскали
      ui.item.text(start_text);
      // Удаляем ошметки
      $("ul.movable_branch").remove();
      ui.item.removeClass("movable_item");
      
      // Задаем отступ пункта
      SetIndent(HTML_Element, start_indent+cur_indent);
      // Читаем дерево
      CurrentMenu.Fill();
      //showTree(1, CurrentMenu);       
      set_tree(CurrentMenu.items);
      }
   }).disableSelection();
  }
  
  // отрисовка тени
  function SetShadowIndent(ui){
   // Считаем отступ
    var new_cur_indent = Math.round((ui.offset.left-startx)/multiplier)+start_indent;
    // Проверяем что сдвиг неотрицательный
    if (new_cur_indent+start_indent<0) new_cur_indent=0-start_indent;
    var prev_indent = GetPrevIndent();
    // Проверяем что сдвиг не больше чем значение родительского здвига+1 (имитация дочернего пункта дерева)
    if (prev_indent<new_cur_indent+start_indent) new_cur_indent=prev_indent-start_indent+1;

    // Если он изменился
    if ((new_cur_indent!=cur_indent)||parent_change){
      parent_change = false;
      // Сохраняем новое значение
      cur_indent = new_cur_indent;
      // Изменяем стиль
      var shadow = $(".ui-state-highlight");
      SetIndent(shadow, cur_indent+start_indent);

      // Убираем маркер с предыдущего родтеля
      if (prev_parent.length != 0)
        prev_parent.css("background-color","transparent");

      // Подсвечиваем потенциальный родительский пункт
      if (cur_indent+start_indent>0) {
          // Берем первый предыдущий от тени
          var pseudo_parent = $("li.ui-state-highlight").prev("li:last");
          if (pseudo_parent.hasClass("movable_item")) 
              pseudo_parent = pseudo_parent.prev("li");
          // Считаем сдвиг
          var parent_indent = GetPrevIndent();
          // Перебираем к началу пока отступ не изменится
          while (parent_indent >= cur_indent+start_indent){
          // Если текущий пункт первый - выходим
              if (pseudo_parent.length == 0) break;
              pseudo_parent = pseudo_parent.prev();
              parent_indent = GetIndent(pseudo_parent);
          }
          // Если есть отображаемый родитель
          if (pseudo_parent.length != 0) {
            prev_parent = pseudo_parent;
            pseudo_parent.css("background-color","#FCC");
          } 
      }
    }

  }
    // Получить отступ предыдущего пункта (для определения возможности положения текущего)
    function GetPrevIndent(){
          // Определяем сдвиг предыдущего пункта
          var prev_item = $("li.ui-state-highlight").prev("li");
          if (prev_item.hasClass("movable_item")) 
            prev_item = prev_item.prev("li");
          if (prev_item.length == 0) 
            prev_indent = -1;
          else
            prev_indent = GetIndent(prev_item);
          return prev_indent;
    }

// -------------------- AJAX --------------------
  // Получаем дерево
  function get_tree(){
       $.ajax({
          type: 'POST',
          url: "/admin/ajax/menu_edit.php",
          dataType: 'JSON',
          data:{event:"get", table:window.tablename},
          success: function(data){
            set_sortable(treeID, data);
          }
       });
  }

  // сохраняем дерево
  function set_tree(items){
       $.ajax({
          type: 'POST',
          url: "/admin/ajax/menu_edit.php",
          dataType: 'JSON',
          data:{event:"set", menu:items, table:window.tablename},
          success: function(data){
            set_sortable(treeID, data);
          }
       });
  }
  
  // Добавить пункт
  function additem(){
         $.ajax({
          type: 'POST',
          url: "/admin/ajax/menu_edit.php",
          dataType: 'JSON',
          data:{event:"add", table:window.tablename},
          success: function(data){
            set_sortable(treeID, data);
          }
       });
  }
  
  // Добавить пункт с заданными параметрами
  function additemfull(pid_, ord_, name_, type_, value_, icon_, dom_param_){
         $.ajax({
          type: 'POST',
          url: "/admin/ajax/menu_edit.php",
          dataType: 'JSON',
          data:{event:"add", pid:pid_, ord:ord_, name:name_, type:type_, value:value_, icon:icon_, dom_param:dom_param_, table:window.tablename},
          success: function(data){
            set_sortable(treeID, data);
          }
       });
  }

  // Удалить пункт дерева
  function delitem(id){
       if (!window.confirm('Удалить?')) return false;
       $.ajax({
          type: 'POST',
          url: "/admin/ajax/menu_edit.php",
          dataType: 'JSON',
          data:{event:"del", id:id, table:window.tablename},
          success: function(data){
            set_sortable(treeID, data);
          }
       });
  }

  // Обновить пункт дерева
  function updateitem(id_, name_, type_, value_, icon_, dom_param_){
       $.ajax({
          type: 'POST',
          url: "/admin/ajax/menu_edit.php",
          dataType: 'JSON',
          data:{event:"upd", id:id_, name:name_, type:type_, value:value_, icon:icon_, dom_param:dom_param_, table:window.tablename},
          success: function(data){
            set_sortable(treeID, data);
          }
       });
  }
  
  // Получить значения пункта
  function showEditAjax(id){
       $.ajax({
          type: 'POST',
          url: "/admin/ajax/menu_edit.php",
          dataType: 'JSON',
          data:{event:"chg", id:id, table:window.tablename},
          success: function(data){
            set_edit_data(data);
            ShowEditForm(id);
          }
       });
  }
  
// Получаем дерево при открытии страницы
$(document).ready(function() {
  HideEditForm();
  get_tree();
  
  // Клик кнопки "добавить пункт"
  $("#additem").click(function(){
    additem();
  });
});

$(function(){
  $("#dialog").dialog({
    position: ["right","top"],
    draggable: true,
    show: 'slide',
  	autoOpen: false,
  	minWidth: 500,
  	close: function(event, ui) {             
            window.current_edited_item = -1;
            $("#"+treeID+" > li").css("background-color","transparent");
},
    buttons: {
      "Применить": function() {
        saveParams();
      },
      "Закрыть": function() {
        ToggleEditForm(window.current_edited_item);
      }
    }
  });
});

