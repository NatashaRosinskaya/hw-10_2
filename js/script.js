  const Dom = function(){
        this.create = function(name){
            this.element = document.createElement(name);
            return this.element
        }

        this.html = function(html, element){
            element = element || this.element; 
            element.innerHTML = html;
        }

        this.classAdd = function(name, element){
            element = element || this.element; 
            element.classList.add(name);
        }

        this.classRemove = function(name, element){
            element = element || this.element; 
            element.classList.remove(name);
        }

        this.append = function(to, element, before){
            element = element || this.element; 

            if(!before){ 
                to.appendChild (element);
            } else
                to.insertBefore (element, before);
        }
           this.search = function(selector, element){ 
              element = element || document;

              let result = element.querySelectorAll (selector);
              if (result.length == 1) result = result[0]
              return result;
        }
    
       
        this.attr = function(element, name, text){
           element = element.setAttribute(name, text);
           return this.attr
        }

        this.classToggle = function(name, element){
            element = element || this.element; 
            element.classList.toggle(name);
        }
    
        this.hasClass = function(name, element){
            
            element = element.hasAttribute(name);

            
        }

        this.on = function (element, eventName, functionName){
            element.addEventListener('functionName', (event)=>{
            console.log(this.on)
        })
        }
    }

    const $ = new Dom();
    console.log ($);

    let h1 = $.create('h1')
    $.html('Заголовок', h1)
    console.log(h1);

    let p = $.create('p')
    $.html('Текстовый абзац', p)
    console.log(p);

    $.classAdd('p1', p);

    $.append(document.body, h1);
    $.append(document.body, p);

    let button = $.create ('button');
    $.html ('Button', button);

    $.append(document.body, button, p)

    let p2 = $.create('p')
    $.html('Ещё один абзац', p2);
    $.append(document.body, p2);
    console.log(p2);

    console.log ($.search('p'));
    console.log ($.search('h1'));

    //hw
    $.attr(h1,'id', 'title');

    let div = $.create('div')
    console.log (div)
    
    $.classToggle('discription', div);
    
    //не работают
    console.log($.hasClass('href', div))
    $.on (button, event, 'click')
    


   

