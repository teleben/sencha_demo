/**
 * The radio field is an enhanced version of the native browser radio controls and is a good way of allowing your user
 * to choose one option out of a selection of several (for example, choosing a favorite color):
 * 
 *     var form = Ext.create('Ext.form.Panel', {
 *         items: [
 *             {
 *                 xtype: 'radiofield',
 *                 name : 'color',
 *                 value: 'red',
 *                 label: 'Red',
 *                 checked: true
 *             },
 *             {
 *                 xtype: 'radiofield',
 *                 name : 'color',
 *                 value: 'green',
 *                 label: 'Green'
 *             },
 *             {
 *                 xtype: 'radiofield',
 *                 name : 'color',
 *                 value: 'blue',
 *                 label: 'Blue'
 *             }
 *         ]
 *     });
 * 
 * Above we created a simple form which allows the user to pick a color from the options red, green and blue. Because
 * we gave each of the fields above the same {@link #name}, the radio field ensures that only one of them can be 
 * checked at a time. When we come to get the values out of the form again or submit it to the server, only 1 value 
 * will be sent for each group of radio fields with the same name:
 * 
 *     form.getValues(); //looks like {color: 'red'}
 *     form.submit(); //sends a single field back to the server (in this case color: red)
 * 
 */
Ext.define('Ext.field.Radio', {
    extend: 'Ext.field.Checkbox',
    alias : 'widget.radiofield',
    alternateClassName: 'Ext.form.Radio',

    isRadio: true,

    config: {
        // @inherit
        ui: 'radio',

        // @inherit
        component: {
            type: 'radio',
            inputCls: Ext.baseCSSPrefix + 'input-radio'
        }
    },

    getValue: function() {
        return this._value;
    },

    setValue: function(value) {
        this._value = value;
        return this;
    },

    /**
     * Returns the selected value if this radio is part of a group (other radio fields with the same name, in the same FormPanel),
     * @return {String}
     */
    getGroupValue: function() {
        var fields = this.getSameGroupFields(),
            ln = fields.length,
            i = 0,
            field;

        for (; i < ln; i++) {
            field = fields[i];
            if (field.getChecked()) {
                return field.getValue();
            }
        }

        return null;
    },

    /**
     * Set the matched radio field's status (that has the same value as the given string) to checked
     * @param {String} value The value of the radio field to check
     * @return {Ext.field.Radio} The field that is checked
     */
    setGroupValue: function(value) {
        var fields = this.getSameGroupFields(),
            ln = fields.length,
            i = 0,
            field;

        for (; i < ln; i++) {
            field = fields[i];
            if (field.getValue() === value) {
                field.setChecked(true);
                return field;
            }
        }
    }
});