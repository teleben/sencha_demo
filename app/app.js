Ext.application({
    name: 'Sencha Demo',

    launch: function() { 
        Ext.create("Ext.form.Panel", {
            fullscreen: true,
            title: 'Home',
            iconCls: 'home',
            cls: 'home',
			layout: {
            	type: 'vbox',
            	align: 'stretch'},
            defaults: {flex: 1},      
            items: [
        		{
            		xtype: 'panel',
            		margin: '50 10 5 10',
            		html : [
            			'<h1>Telelanguage</h1>',
                        '<p>Speak any language with Telelanguage.</p>',
                    ].join("")
          	 	},
               	{
               		xtype: 'fieldset',
            		title: 'Login',
            		instructions: '',
            		items: [
            			{
            				xtype: 'textfield',
	               			name : 'user',
	               			label: 'Email'
               			},
               			{
               				xtype: 'passwordfield',
               				name : 'pass',
               				label: 'Password'
               			}
            		]
	           	},
               	{
	               	xtype: 'panel',
	               	margin: '50 10 5 10',
	               	html : [
	               		'<h2>Sign Up!</h2>',
	               	].join("")
               	}
        	]
        });
    }
});