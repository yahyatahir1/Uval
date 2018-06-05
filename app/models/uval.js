import DS from 'ember-data';

export default DS.Model.extend({
  MaterialName: DS.attr('string'),
  Thickness: DS.attr('string'),
  KValue: DS.attr('string'),
});
