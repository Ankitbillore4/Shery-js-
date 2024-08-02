Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});


Shery.makeMagnet(".navpart2 h3", {

    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});


Shery.textAnimate(".navpart1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});


Shery.imageEffect(".image1, .image2 ,.image3 , .image4", {
    style: 3,
    config: { "a": { "value": 1.83, "range": [0, 30] }, "b": { "value": -0.85, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7076710617087074 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0.02, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.81 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.21, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }

});


Shery.imageEffect(".Images", {
    style: 3,
   
    scrollSnapping: true,
    scrollSpeed: 6,
    touchSpeed: 6,
    damping: 7,
  });





//   Shery.imageEffect(".", {
//     style: 2, //Select Style
//     debug: true, // Debug Panel
//     config: {
//       /* Config made from debug panel */
//     },
//     preset: "./presets/wigglewobble.json",
//   });