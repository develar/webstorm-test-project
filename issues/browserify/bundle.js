;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (n) { return n * 11 }
},{}],2:[function(require,module,exports){
var foo = require('./foo');
var gamma = require('gamma');

var n = gamma(foo(5) * 3);
var txt = document.createTextNode(n);
document.body.appendChild(txt);
},{"./foo":1,"gamma":3}],3:[function(require,module,exports){
// transliterated from the python snippet here:
// http://en.wikipedia.org/wiki/Lanczos_approximation

var g = 7;
var p = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
];

var g_ln = 607/128;
var p_ln = [
    0.99999999999999709182,
    57.156235665862923517,
    -59.597960355475491248,
    14.136097974741747174,
    -0.49191381609762019978,
    0.33994649984811888699e-4,
    0.46523628927048575665e-4,
    -0.98374475304879564677e-4,
    0.15808870322491248884e-3,
    -0.21026444172410488319e-3,
    0.21743961811521264320e-3,
    -0.16431810653676389022e-3,
    0.84418223983852743293e-4,
    -0.26190838401581408670e-4,
    0.36899182659531622704e-5
];

// Spouge approximation (suitable for large arguments)
function lngamma(z) {

    if(z < 0) return Number('0/0');
    var x = p_ln[0];
    for(var i = p_ln.length - 1; i > 0; --i) x += p_ln[i] / (z + i);
    var t = z + g_ln + 0.5;
    return .5*Math.log(2*Math.PI)+(z+.5)*Math.log(t)-t+Math.log(x)-Math.log(z);
}

module.exports = function gamma (z) {
    if (z < 0.5) {
        return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    }
    else if(z > 100) return Math.exp(lngamma(z));
    else {
        z -= 1;
        var x = p[0];
        for (var i = 1; i < g + 2; i++) {
            x += p[i] / (z + i);
        }
        var t = z + g + 0.5;

        return Math.sqrt(2 * Math.PI)
            * Math.pow(t, z + 0.5)
            * Math.exp(-t)
            * x
        ;
    }
};

module.exports.log = lngamma;

},{}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZGV2ZWxhci9Eb2N1bWVudHMvd2Vic3Rvcm0tdGVzdC1wcm9qZWN0L2lzc3Vlcy9icm93c2VyaWZ5L2Zvby5qcyIsIi9Vc2Vycy9kZXZlbGFyL0RvY3VtZW50cy93ZWJzdG9ybS10ZXN0LXByb2plY3QvaXNzdWVzL2Jyb3dzZXJpZnkvbWFpbi5qcyIsIi9Vc2Vycy9kZXZlbGFyL0RvY3VtZW50cy93ZWJzdG9ybS10ZXN0LXByb2plY3Qvbm9kZV9tb2R1bGVzL2dhbW1hL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gKiAxMSB9IiwidmFyIGZvbyA9IHJlcXVpcmUoJy4vZm9vJyk7XG52YXIgZ2FtbWEgPSByZXF1aXJlKCdnYW1tYScpO1xuXG52YXIgbiA9IGdhbW1hKGZvbyg1KSAqIDMpO1xudmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0eHQpOyIsIi8vIHRyYW5zbGl0ZXJhdGVkIGZyb20gdGhlIHB5dGhvbiBzbmlwcGV0IGhlcmU6XG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhbmN6b3NfYXBwcm94aW1hdGlvblxuXG52YXIgZyA9IDc7XG52YXIgcCA9IFtcbiAgICAwLjk5OTk5OTk5OTk5OTgwOTkzLFxuICAgIDY3Ni41MjAzNjgxMjE4ODUxLFxuICAgIC0xMjU5LjEzOTIxNjcyMjQwMjgsXG4gICAgNzcxLjMyMzQyODc3NzY1MzEzLFxuICAgIC0xNzYuNjE1MDI5MTYyMTQwNTksXG4gICAgMTIuNTA3MzQzMjc4Njg2OTA1LFxuICAgIC0wLjEzODU3MTA5NTI2NTcyMDEyLFxuICAgIDkuOTg0MzY5NTc4MDE5NTcxNmUtNixcbiAgICAxLjUwNTYzMjczNTE0OTMxMTZlLTdcbl07XG5cbnZhciBnX2xuID0gNjA3LzEyODtcbnZhciBwX2xuID0gW1xuICAgIDAuOTk5OTk5OTk5OTk5OTk3MDkxODIsXG4gICAgNTcuMTU2MjM1NjY1ODYyOTIzNTE3LFxuICAgIC01OS41OTc5NjAzNTU0NzU0OTEyNDgsXG4gICAgMTQuMTM2MDk3OTc0NzQxNzQ3MTc0LFxuICAgIC0wLjQ5MTkxMzgxNjA5NzYyMDE5OTc4LFxuICAgIDAuMzM5OTQ2NDk5ODQ4MTE4ODg2OTllLTQsXG4gICAgMC40NjUyMzYyODkyNzA0ODU3NTY2NWUtNCxcbiAgICAtMC45ODM3NDQ3NTMwNDg3OTU2NDY3N2UtNCxcbiAgICAwLjE1ODA4ODcwMzIyNDkxMjQ4ODg0ZS0zLFxuICAgIC0wLjIxMDI2NDQ0MTcyNDEwNDg4MzE5ZS0zLFxuICAgIDAuMjE3NDM5NjE4MTE1MjEyNjQzMjBlLTMsXG4gICAgLTAuMTY0MzE4MTA2NTM2NzYzODkwMjJlLTMsXG4gICAgMC44NDQxODIyMzk4Mzg1Mjc0MzI5M2UtNCxcbiAgICAtMC4yNjE5MDgzODQwMTU4MTQwODY3MGUtNCxcbiAgICAwLjM2ODk5MTgyNjU5NTMxNjIyNzA0ZS01XG5dO1xuXG4vLyBTcG91Z2UgYXBwcm94aW1hdGlvbiAoc3VpdGFibGUgZm9yIGxhcmdlIGFyZ3VtZW50cylcbmZ1bmN0aW9uIGxuZ2FtbWEoeikge1xuXG4gICAgaWYoeiA8IDApIHJldHVybiBOdW1iZXIoJzAvMCcpO1xuICAgIHZhciB4ID0gcF9sblswXTtcbiAgICBmb3IodmFyIGkgPSBwX2xuLmxlbmd0aCAtIDE7IGkgPiAwOyAtLWkpIHggKz0gcF9sbltpXSAvICh6ICsgaSk7XG4gICAgdmFyIHQgPSB6ICsgZ19sbiArIDAuNTtcbiAgICByZXR1cm4gLjUqTWF0aC5sb2coMipNYXRoLlBJKSsoeisuNSkqTWF0aC5sb2codCktdCtNYXRoLmxvZyh4KS1NYXRoLmxvZyh6KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnYW1tYSAoeikge1xuICAgIGlmICh6IDwgMC41KSB7XG4gICAgICAgIHJldHVybiBNYXRoLlBJIC8gKE1hdGguc2luKE1hdGguUEkgKiB6KSAqIGdhbW1hKDEgLSB6KSk7XG4gICAgfVxuICAgIGVsc2UgaWYoeiA+IDEwMCkgcmV0dXJuIE1hdGguZXhwKGxuZ2FtbWEoeikpO1xuICAgIGVsc2Uge1xuICAgICAgICB6IC09IDE7XG4gICAgICAgIHZhciB4ID0gcFswXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBnICsgMjsgaSsrKSB7XG4gICAgICAgICAgICB4ICs9IHBbaV0gLyAoeiArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ID0geiArIGcgKyAwLjU7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgyICogTWF0aC5QSSlcbiAgICAgICAgICAgICogTWF0aC5wb3codCwgeiArIDAuNSlcbiAgICAgICAgICAgICogTWF0aC5leHAoLXQpXG4gICAgICAgICAgICAqIHhcbiAgICAgICAgO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmxvZyA9IGxuZ2FtbWE7XG4iXX0=
;