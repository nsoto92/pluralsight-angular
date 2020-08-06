import { Component } from '@angular/core';

@Component({            //Component decorator defines Metadata for component, prefix with @ and suffix with ()
  selector: 'pm-root',    // Selector property defines name of component to be used in HTML, not necessary if component not used in HTM    
  template: // Template defines view for HTML
    `         
<div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
</div>
`
})
export class AppComponent {               //use PascalCasing for classes and append Component to class name, include export key word
  pageTitle: string = 'Wezt Product Management'    //camelCase porperty name, include  data type and default value
}