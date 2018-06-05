import Component from '@ember/component';

export default Component.extend({

  Resistivity: computed('model.Thickness', 'model.KValue', function() {
    let firstName = this.get('Thickness');
    let lastName = this.get('KValue');

    return `${Thickness} ${KValue}`;
})
});
