KISSY.add('components/abc/index', function(S, Pagelet, Overlay) {
    function Kwicks() {
        Kwicks.superclass.constructor.apply(this, arguments);
    }

    S.extend(Kwicks, Brick, {
        initialize: function() {
            S.log('Kwicks initialize');
        },
        destructor:function(){
            S.log('Kwicks destroy');
        }
    });

    return Kwicks;
}, {
    requires: ["brix/gallery/kwicks/index"]
});
