$(document).ready(function () {
  $(".send").on("click", function () {
    var theme = $(".theme").val()
    var bg = $(".bg").val()
    var _time_ = $(".time").val()
    var lang = $(".language").val()
    var text = $(".text").val()
    var td = $(".td").val()

    if (_time_ == "") {
      alert("No time specified!")
      return
    }

    var _time = _time_.split(" ")
    var time = ""
    for (i = 0; i < _time.length; i++) {
      time += _time[i]
    }
    time += "00"

    document.location.href =
      "index.html?t=" +
      encodeURIComponent(theme) +
      "&i=" +
      encodeURIComponent(bg) +
      "&c=" +
      encodeURIComponent(time) +
      "&l=" +
      encodeURIComponent(lang) +
      "&txt=" +
      encodeURIComponent(text) +
      "&td=" +
      encodeURIComponent(td)
  })
})
