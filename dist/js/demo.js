/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

$(function () {
  'use strict'

  // Skin switcher
  var currentSkin = 'skin-blue'

  $('#layout-skins-list [data-skin]').click(function (e) {
    e.preventDefault()
    var skinName = $(this).data('skin')
    $('body').removeClass(currentSkin)
    $('body').addClass(skinName)
    currentSkin = skinName
  })
})
