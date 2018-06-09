import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    addForm: function()
    {
      var MaterialName=this.get('model.MaterialName');
      var Thickness=this.get('model.Thickness');
      var KValue=this.get('model.KValue');
      var InsideSurface=this.get('model.InsideSurface');
      var OutsideSurface=this.get('model.OutsideSurface');
      var Resistivity = this.get('model.Resistivity');
      var Total = 0;



      var newUval=this.store.createRecord('uval',
        {
          MaterialName:MaterialName,
          Thickness:Thickness,
          KValue:KValue,
          InsideSurface:'0.13',
          OutsideSurface:'0.04',
          Resistivity:Resistivity,

          Total:function()
          {
            return this.get('Thickness') + this.get('KValue');
          }.property('Thickness', 'KValue'),
        //  Resistivity.get('Total');

        });



    }
  }
});
