# Simple grails application that uses AngularJs

This application was built to test how AngularJs could be integrated in a grails 3.0.4 project. I did not use any of the angular plugins that already exists. It is my understanding that the plugin simplify the distribution of templates and the CRUD operations. Right now, we access the templates and the actions via the same controller, it might get messy if your controllers use many templates.

This application was built in one afternoon, so please be gentle.

Feel free to leave comments!

Possible improvement : 
- Better URL mapping
- Use HTTP delete instead of post for item removal
- Integrate bower
- This approach is proably cleaner http://hantsy.blogspot.ca/2013/11/create-restful-application-with_7975.html