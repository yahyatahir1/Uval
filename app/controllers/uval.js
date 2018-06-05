import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    addForm: function()
    {
      var MaterialName=this.get('model.MaterialName');
      var Thickness=this.get('model.Thickness');
      var KValue=this.get('model.KValue');

      var newUval=this.store.createRecord('uval',
        {
          MaterialName:MaterialName,
          Thickness:Thickness,
          KValue:KValue,
        });
    }
  }
});
