$(function () {

    var controller = new ScrollMagic.Controller();
    
     var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: 1500
        })
        .setTween(".bg1", 0.7, {
            y: "-200px"
        })
        .addTo(controller);
    
    
    var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: 1500
        })
        .setTween(".bg2", 0.7, {
            y: "-200px"
        })
        .addTo(controller);
    
  

//    var scene = new ScrollMagic.Scene({
//            triggerElement: ".bg0",
//            duration: 7000
//        })
//        .setTween(".bg1", 0.7, {
//            y: "-500px"
//        })
//        .addIndicators({
//            name: "1 (duration: 300)"
//        }) // add indicators (requires plugin)
//        .addTo(controller);
//    
//    var scene = new ScrollMagic.Scene({
//            triggerElement: ".bg0",
//            duration: 3000
//        })
//        .setTween(".bg2", 0.7, {
//            y: "-800px"
//        })
//        .addIndicators({
//            name: "1 (duration: 300)"
//        }) // add indicators (requires plugin)
//        .addTo(controller);

});
