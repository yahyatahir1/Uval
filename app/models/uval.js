import DS from 'ember-data';

export default DS.Model.extend({
  MaterialName: DS.attr('string'),
  Thickness: DS.attr('number'),
  KValue: DS.attr('number'),
  OutsideSurface: DS.attr('string'),
  InsideSurface: DS.attr('string'),
  Resistivity: DS.attr('number'),
  Total: DS.attr('number'),
});
