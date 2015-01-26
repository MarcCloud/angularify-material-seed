'use strict';
/**
 *
 * Todos view controller.
 */
function TodosController(){

    var self = this;
    self.heading = 'Todos';
    self.todos = [{done:true,summary:'Create seed project'},
                  {done:false,summary:'Do something else.'}];
}
module.exports=TodosController;