一些组件化的基础类

#Example:
  MyWidget.html
  
    <div>
      <h1 title="<%=title%>"></h1>
      <div data-kb-attach-point="contentNode">
        ...some text
      </div>
      <button data-kb-attach-event="click:_onToggleClick">Toggle</button>
    </div>

  MyWidget.js
  
    define([
      "jquery",
      "kooboo/declare"
      "kooboo/_WidgetBase",
      "text!./templates/MyWidget.html"
    ], function($, declare, _WidgetBase, template){
      "use strict";
    
      //you can also use _WidgetBase.extend({...})
      var MyWidget = declare(_WidgetBase, {
        templateString: template,
        title: null,
        contentNode: null,
        _onToggleClick: function(){
          this.toggle();
        },
        toggle: function(){
           $(this.contentNode).toggle();
           return this;
        }
      });
    }
    
  main.js
  
    require([
      "kooboo/topic",
      "./MyWidget",
      "domReady!"
    ], function(topic, MyWidget){
      "use strict";
    
      var wgt = new MyWidget({
        title: "This is my widget"
      }/*, "#selector"*/)
        .appendTo(document.body)
        .startup();
      
      topic.subscribe("wgt:toggle", function(args){
        wgt.toggle();
      });
      
      ... ...
      ... ...
      
      topic.publish("wgt:toggle");
    });
