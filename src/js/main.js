"use strict";

var landingapp = document.querySelector(".landing-app");

function landingApp(index) {
  var inth = index;

  //Video bg
  function mediabgFun() {
    var video = inth.querySelector("#landingvideo");
    video.addEventListener( "canplay", function() {
      video.play();
    });
  }

  mediabgFun();

  //Sound
  var vaudiobtn = inth.querySelector(".sound-icon");

  function toggleSound() {
    var audioElem = inth.querySelector("#landingaudio");
    if (audioElem.paused){
      audioElem.play();
      vaudiobtn.setAttribute("data-audio", "on");
    } else {
      audioElem.pause();
      vaudiobtn.setAttribute("data-audio", "off");
    }
  }

  vaudiobtn.onclick = toggleSound;

  //fun length constructor
  function modalFunlength(inx, inxfun) {
    var inlth = inx;
    var inlthfun = inxfun;
    var vi;
    for (vi = 0; vi < inlth.length; vi++) {
      inlth[vi].addEventListener('click', function() {
        inlthfun(this);
      });
    }
  }

  //Modal
  var vactmodal = inth.querySelectorAll("a[data-toggle='modal']");
  var vactclose = inth.querySelectorAll("[data-close='modal']");
  var vmodal = inth.querySelectorAll(".modal-container");

  function modalFunact(inx) {
    var intthis = inx.getAttribute("data-target");
    var intselector = "[data-label='"+intthis+"']";
    var intselect = inth.querySelector(intselector);
    intselect.setAttribute("data-toggle", "in");
  }

  function modalFunclose(inx) {
    inx.parentNode.setAttribute("data-toggle", "fade");
  }

  modalFunlength(vactmodal,modalFunact);
  modalFunlength(vactclose,modalFunclose);

  //Auth
  var intauth = inth.querySelector(".auth-container");
  var vactauth = intauth.querySelectorAll("a[data-toggle='auth']");
  var authwidget = intauth.querySelectorAll(".widget[data-toggle]");

  function uauthwidgetFun() {
    var i;
    for (i = 0; i < authwidget.length; i++) {
        authwidget[i].setAttribute("data-toggle", "fade");
    }
  }

  function authFuncint(inx) {
    var intthis = inx.getAttribute("data-target");
    var intselector = "[data-label='"+intthis+"']";
    var intselect = inth.querySelector(intselector);
    uauthwidgetFun();
    intselect.setAttribute("data-toggle", "in");
  }

  modalFunlength(vactauth,authFuncint);

}

landingApp(landingapp);
