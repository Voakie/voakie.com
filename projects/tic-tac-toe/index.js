$(document).ready(function () {
    $(".sqr").each(function (index, a) {
        $(a).attr("use", "true")
    })

    // 0 = X, 1 = O
    var mode = 0
    const X = "<div class='x inv'> <div class='x1'></div> <div class='x2'></div> </div>"
    const O = "<div class='o inv'> </div>"

    $(".sqr").on("click", function () {
        if ($(this).attr("use") == "true") {
            switch (mode) {
                case 0: // X
                    $(this).append(X)
                    $(this).addClass("temp")
                    remInv(this, "x");
                    $(this).attr("use", "false")
                    mode++
                    break
                case 1: // O
                    $(this).append(O)
                    $(this).addClass("temp")
                    remInv(this, "o");
                    $(this).attr("use", "false")
                    mode--
                    break
                default:
                    console.error("Error")
                    break
            }
        }
    })

    function remInv(obj, m) {
        setTimeout(function () {
            $(".temp ." + m).removeClass("inv")
            $(obj).addClass("no");
            $(obj).attr("m", m);
            $(obj).removeClass("temp")
            check()
        }, 10)
    }

    function check() {
        // ooo
        // xxx
        // ooo
        //
        // First row
        if (($(".sqr1").attr("m") + $(".sqr2").attr("m") + $(".sqr3").attr("m")) == "xxx") {
            console.log("Win for " + $(".sqr1").attr("m"));
            $(".sqr1").addClass("won")
            $(".sqr2").addClass("won")
            $(".sqr3").addClass("won")
            end("X")
        } else if (($(".sqr1").attr("m") + $(".sqr2").attr("m") + $(".sqr3").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr4").attr("m"));
            $(".sqr1").addClass("won")
            $(".sqr2").addClass("won")
            $(".sqr3").addClass("won")
            end("O")
        }
        // Second row
        else if (($(".sqr4").attr("m") + $(".sqr5").attr("m") + $(".sqr6").attr("m")) == "xxx") {
            console.log("Win for " + $(".sqr4").attr("m"));
            $(".sqr4").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr6").addClass("won")
            end("X")
        } else if (($(".sqr4").attr("m") + $(".sqr5").attr("m") + $(".sqr6").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr4").attr("m"));
            $(".sqr4").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr6").addClass("won")
            end("O")
        }
        // Last row
        else if (($(".sqr7").attr("m") + $(".sqr8").attr("m") + $(".sqr9").attr("m")) == "xxx") {
            console.log("Win for " + $(".sqr7").attr("m"));
            $(".sqr7").addClass("won")
            $(".sqr8").addClass("won")
            $(".sqr9").addClass("won")
            end("X")
        } else if (($(".sqr7").attr("m") + $(".sqr8").attr("m") + $(".sqr9").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr7").attr("m"));
            $(".sqr7").addClass("won")
            $(".sqr8").addClass("won")
            $(".sqr9").addClass("won")
            end("O")
        }

        // oxo
        // oxo
        // oxo
        //
        // First row
        if (($(".sqr1").attr("m") + $(".sqr4").attr("m") + $(".sqr7").attr("m")) == "xxx") {
            console.log("Win for " + $(".sqr1").attr("m"));
            $(".sqr1").addClass("won")
            $(".sqr4").addClass("won")
            $(".sqr7").addClass("won")
            end("X")
        } else if (($(".sqr1").attr("m") + $(".sqr4").attr("m") + $(".sqr7").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr1").attr("m"));
            $(".sqr1").addClass("won")
            $(".sqr4").addClass("won")
            $(".sqr7").addClass("won")
            end("O")
        }
        // Second row
        else if (($(".sqr2").attr("m") + $(".sqr5").attr("m") + $(".sqr8").attr("m")) == "xxx") {
            console.log("Win for " + $(".sqr2").attr("m"));
            $(".sqr2").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr8").addClass("won")
            end("X")
        } else if (($(".sqr2").attr("m") + $(".sqr5").attr("m") + $(".sqr8").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr2").attr("m"));
            $(".sqr2").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr8").addClass("won")
            end("O")
        }
        // Last row
        else if (($(".sqr3").attr("m") + $(".sqr6").attr("m") + $(".sqr9").attr("m")) == "xxx") {
            console.log("Win for " + $(".sqr3").attr("m"));
            $(".sqr3").addClass("won")
            $(".sqr6").addClass("won")
            $(".sqr9").addClass("won")
            end("X")
        } else if (($(".sqr3").attr("m") + $(".sqr6").attr("m") + $(".sqr9").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr3").attr("m"));
            $(".sqr3").addClass("won")
            $(".sqr6").addClass("won")
            $(".sqr9").addClass("won")
            end("O")
        }

        // xoo
        // oxo
        // oox
        //
        // First row
        if (($(".sqr1").attr("m") + $(".sqr5").attr("m") + $(".sqr9").attr("m")) == "xxx") {
            console.log("Win for " + $(".sqr1").attr("m"));
            $(".sqr1").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr9").addClass("won")
            end("X")
        } else if (($(".sqr1").attr("m") + $(".sqr5").attr("m") + $(".sqr9").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr1").attr("m"));
            $(".sqr1").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr9").addClass("won")
            end("O")
        }
        // Second row
        else if (($(".sqr3").attr("m") + $(".sqr5").attr("m") + $(".sqr7").attr("m")) == "xxx") {
            $(".sqr3").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr7").addClass("won")
            console.log("Win for " + $(".sqr3").attr("m"));
            end("X")
        } else if (($(".sqr3").attr("m") + $(".sqr5").attr("m") + $(".sqr7").attr("m")) == "ooo") {
            console.log("Win for " + $(".sqr3").attr("m"));
            $(".sqr3").addClass("won")
            $(".sqr5").addClass("won")
            $(".sqr7").addClass("won")
            end("O")
        }
    }

    function end(w) {
        $(".sqr").each(function (index, a) {
            $(a).attr("use", "false")
        })
        $("body").append("<h1>" + w + " has won!</h1>")
    }
})