Ext.define('People.view.Main', {
    extend: 'Ext.Container',   
    requires: ['Ext.Carousel'],

    config: {
        //tabBarPosition: 'top',
        fullscreen: true,
        layout: 'vbox',
        items: [
            {    
                height: "20%",
                xtype: 'carousel',
                items: [
                    { cls: "head-1 head" },
                    { cls: "head-2 head" },
                    { cls: "head-3 head" },
                    { cls: "head-4 head" },
                    { cls: "head-5 head" },
                    { cls: "head-6 head" },
                    { cls: "head-7 head" }
                ]
            },
            { 
                height: "24%",
                xtype: 'carousel',
                items: [
                    { cls: "body-1 body" },
                    { cls: "body-2 body" },
                    { cls: "body-3 body" },
                    { cls: "body-4 body" },
                    { cls: "body-5 body" },
                    { cls: "body-6 body" },
                    { cls: "body-7 body" }
                ]
            },
            { 
                height: "56%",
                xtype: 'carousel',
                items: [
                    { cls: "legs-1 legs" },
                    { cls: "legs-2 legs" },
                    { cls: "legs-3 legs" },
                    { cls: "legs-4 legs" },
                    { cls: "legs-5 legs" },
                    { cls: "legs-6 legs" },
                    { cls: "legs-7 legs" },
                ]
            }
        ]
    }
});
