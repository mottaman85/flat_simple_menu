flat_simple_menu
=========

---
it's another simple menu on flat design. 


Version
----

1.0

Require
--------------
Jquery 9++

Installation
--------------

```sh
git clone https://github.com/mottaman85/flat_simple_menu.git
cd flat_simple_menu
```
only add menu.css and menu.js

```html
    <script src="menu.js"></script>
    <link rel="stylesheet" href="menu.css">
```

create beauty menu.

```html
    
     $(document).ready(function(){
        $("#menu").menuNelo({
            opts : [{
              text : 'Option 1',
              fn : function(){
                // Do something
              },
              active :  true
            },
            {
              text : 'Nelo',
              fn : function(){
              // Do something Again!!!
            }
            }]

          });
      })

```

each element on the array arg's to nelo function, it's an menu option.

    text: Label from button.
    fn : function on click execute.
    active : init active button

---
**say my name!!!!**
[@mottaman85]:http://twitter.com/mottman85

