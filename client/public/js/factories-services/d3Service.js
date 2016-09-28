/**
 * Created by payetted on 9/28/2016.
 */

(function () {


    var d3Service = function () {

// https://d3js.org Version 4.2.6. Copyright 2016 Mike Bostock.

        var d3 = (function (t, n) {
            "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.d3 = t.d3 || {})
        })(this, function (t) {
            "use strict";
            function n(t) {
                return function (n, e) {
                    return ms(t(n), e)
                }
            }

            function e(t, n, e) {
                var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
                return o >= Rs ? i *= 10 : o >= Us ? i *= 5 : o >= Ds && (i *= 2), n < t ? -i : i
            }

            function r(t) {
                return t.length
            }

            function i() {
            }

            function o(t, n) {
                var e = new i;
                if (t instanceof i)t.each(function (t, n) {
                    e.set(n, t)
                }); else if (Array.isArray(t)) {
                    var r, o = -1, u = t.length;
                    if (null == n)for (; ++o < u;)e.set(o, t[o]); else for (; ++o < u;)e.set(n(r = t[o], o, t), r)
                } else if (t)for (var a in t)e.set(a, t[a]);
                return e
            }

            function u() {
                return {}
            }

            function a(t, n, e) {
                t[n] = e
            }

            function c() {
                return o()
            }

            function s(t, n, e) {
                t.set(n, e)
            }

            function f() {
            }

            function l(t, n) {
                var e = new f;
                if (t instanceof f)t.each(function (t) {
                    e.add(t)
                }); else if (t) {
                    var r = -1, i = t.length;
                    if (null == n)for (; ++r < i;)e.add(t[r]); else for (; ++r < i;)e.add(n(t[r], r, t))
                }
                return e
            }

            function h(t) {
                return +t
            }

            function p(t) {
                return t * t
            }

            function d(t) {
                return t * (2 - t)
            }

            function v(t) {
                return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
            }

            function _(t) {
                return t * t * t
            }

            function y(t) {
                return --t * t * t + 1
            }

            function g(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }

            function m(t) {
                return 1 - Math.cos(t * xf)
            }

            function x(t) {
                return Math.sin(t * xf)
            }

            function b(t) {
                return (1 - Math.cos(mf * t)) / 2
            }

            function w(t) {
                return Math.pow(2, 10 * t - 10)
            }

            function M(t) {
                return 1 - Math.pow(2, -10 * t)
            }

            function T(t) {
                return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
            }

            function N(t) {
                return 1 - Math.sqrt(1 - t * t)
            }

            function k(t) {
                return Math.sqrt(1 - --t * t)
            }

            function S(t) {
                return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
            }

            function A(t) {
                return 1 - E(1 - t)
            }

            function E(t) {
                return (t = +t) < bf ? Cf * t * t : t < Mf ? Cf * (t -= wf) * t + Tf : t < kf ? Cf * (t -= Nf) * t + Sf : Cf * (t -= Af) * t + Ef
            }

            function C(t) {
                return ((t *= 2) <= 1 ? 1 - E(1 - t) : E(t - 1) + 1) / 2
            }

            function z(t, n) {
                return t[0] - n[0] || t[1] - n[1]
            }

            function P(t) {
                for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
                    for (; r > 1 && jf(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;)--r;
                    e[r++] = i
                }
                return e.slice(0, r)
            }

            function q() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = []
            }

            function L() {
                return new q
            }

            function R(t, n, e, r) {
                if (isNaN(n) || isNaN(e))return t;
                var i, o, u, a, c, s, f, l, h, p = t._root, d = {data: r}, v = t._x0, _ = t._y0, y = t._x1, g = t._y1;
                if (!p)return t._root = d, t;
                for (; p.length;)if ((s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (_ + g) / 2)) ? _ = u : g = u, i = p, !(p = p[l = f << 1 | s]))return i[l] = d, t;
                if (a = +t._x.call(null, p.data), c = +t._y.call(null, p.data), n === a && e === c)return d.next = p, i ? i[l] = d : t._root = d, t;
                do i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (_ + g) / 2)) ? _ = u : g = u; while ((l = f << 1 | s) === (h = (c >= u) << 1 | a >= o));
                return i[h] = p, i[l] = d, t
            }

            function U(t) {
                var n, e, r, i, o = t.length, u = new Array(o), a = new Array(o), c = 1 / 0, s = 1 / 0, f = -(1 / 0), l = -(1 / 0);
                for (e = 0; e < o; ++e)isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < c && (c = r), r > f && (f = r), i < s && (s = i), i > l && (l = i));
                for (f < c && (c = this._x0, f = this._x1), l < s && (s = this._y0, l = this._y1), this.cover(c, s).cover(f, l), e = 0; e < o; ++e)R(this, u[e], a[e], t[e]);
                return this
            }

            function D(t) {
                for (var n = 0, e = t.length; n < e; ++n)this.remove(t[n]);
                return this
            }

            function O(t) {
                return t[0]
            }

            function F(t) {
                return t[1]
            }

            function I(t, n, e) {
                var r = new Y(null == n ? O : n, null == e ? F : e, NaN, NaN, NaN, NaN);
                return null == t ? r : r.addAll(t)
            }

            function Y(t, n, e, r, i, o) {
                this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
            }

            function B(t) {
                for (var n = {data: t.data}, e = n; t = t.next;)e = e.next = {data: t.data};
                return n
            }

            function j(t) {
                if (!(t >= 1))throw new Error;
                this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
            }

            function H(t) {
                if (!t._start)try {
                    X(t)
                } catch (n) {
                    if (t._tasks[t._ended + t._active - 1])W(t, n); else if (!t._data)throw n
                }
            }

            function X(t) {
                for (; t._start = t._waiting && t._active < t._size;) {
                    var n = t._ended + t._active, e = t._tasks[n], r = e.length - 1, i = e[r];
                    e[r] = V(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || hl)
                }
            }

            function V(t, n) {
                return function (e, r) {
                    t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? W(t, e) : (t._data[n] = r, t._waiting ? H(t) : $(t))))
                }
            }

            function W(t, n) {
                var e, r = t._tasks.length;
                for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort))try {
                    e.abort()
                } catch (t) {
                }
                t._active = NaN, $(t)
            }

            function $(t) {
                if (!t._active && t._call) {
                    var n = t._data;
                    t._data = void 0, t._call(t._error, n)
                }
            }

            function Z(t) {
                return new j(arguments.length ? +t : 1 / 0)
            }

            function G(t) {
                return t.innerRadius
            }

            function J(t) {
                return t.outerRadius
            }

            function Q(t) {
                return t.startAngle
            }

            function K(t) {
                return t.endAngle
            }

            function tt(t) {
                return t && t.padAngle
            }

            function nt(t) {
                return t >= 1 ? _l : t <= -1 ? -_l : Math.asin(t)
            }

            function et(t, n, e, r, i, o, u, a) {
                var c = e - t, s = r - n, f = u - i, l = a - o, h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
                return [t + h * c, n + h * s]
            }

            function rt(t, n, e, r, i, o, u) {
                var a = t - e, c = n - r, s = (u ? o : -o) / Math.sqrt(a * a + c * c), f = s * c, l = -s * a, h = t + f, p = n + l, d = e + f, v = r + l, _ = (h + d) / 2, y = (p + v) / 2, g = d - h, m = v - p, x = g * g + m * m, b = i - o, w = h * v - d * p, M = (m < 0 ? -1 : 1) * Math.sqrt(Math.max(0, b * b * x - w * w)), T = (w * m - g * M) / x, N = (-w * g - m * M) / x, k = (w * m + g * M) / x, S = (-w * g + m * M) / x, A = T - _, E = N - y, C = k - _, z = S - y;
                return A * A + E * E > C * C + z * z && (T = k, N = S), {
                    cx: T,
                    cy: N,
                    x01: -f,
                    y01: -l,
                    x11: T * (i / b - 1),
                    y11: N * (i / b - 1)
                }
            }

            function it(t) {
                this._context = t
            }

            function ot(t) {
                return t[0]
            }

            function ut(t) {
                return t[1]
            }

            function at(t) {
                this._curve = t
            }

            function ct(t) {
                function n(n) {
                    return new at(t(n))
                }

                return n._curve = t, n
            }

            function st(t) {
                var n = t.curve;
                return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
                    return arguments.length ? n(ct(t)) : n()._curve
                }, t
            }

            function ft(t, n, e) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

            function lt(t) {
                this._context = t
            }

            function ht(t) {
                this._context = t
            }

            function pt(t) {
                this._context = t
            }

            function dt(t, n) {
                this._basis = new lt(t), this._beta = n
            }

            function vt(t, n, e) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

            function _t(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }

            function yt(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }

            function gt(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }

            function mt(t, n, e) {
                var r = t._x1, i = t._y1, o = t._x2, u = t._y2;
                if (t._l01_a > dl) {
                    var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
                }
                if (t._l23_a > dl) {
                    var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, f = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f
                }
                t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
            }

            function xt(t, n) {
                this._context = t, this._alpha = n
            }

            function bt(t, n) {
                this._context = t, this._alpha = n
            }

            function wt(t, n) {
                this._context = t, this._alpha = n
            }

            function Mt(t) {
                this._context = t
            }

            function Tt(t) {
                return t < 0 ? -1 : 1
            }

            function Nt(t, n, e) {
                var r = t._x1 - t._x0, i = n - t._x1, o = (t._y1 - t._y0) / (r || i < 0 && -0), u = (e - t._y1) / (i || r < 0 && -0), a = (o * i + u * r) / (r + i);
                return (Tt(o) + Tt(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
            }

            function kt(t, n) {
                var e = t._x1 - t._x0;
                return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function St(t, n, e) {
                var r = t._x0, i = t._y0, o = t._x1, u = t._y1, a = (o - r) / 3;
                t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
            }

            function At(t) {
                this._context = t
            }

            function Et(t) {
                this._context = new Ct(t)
            }

            function Ct(t) {
                this._context = t
            }

            function zt(t) {
                return new At(t)
            }

            function Pt(t) {
                return new Et(t)
            }

            function qt(t) {
                this._context = t
            }

            function Lt(t) {
                var n, e, r = t.length - 1, i = new Array(r), o = new Array(r), u = new Array(r);
                for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
                for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n)e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
                for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)i[n] = (u[n] - i[n + 1]) / o[n];
                for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)o[n] = 2 * t[n + 1] - i[n + 1];
                return [i, o]
            }

            function Rt(t, n) {
                this._context = t, this._t = n
            }

            function Ut(t) {
                return new Rt(t, 0)
            }

            function Dt(t) {
                return new Rt(t, 1)
            }

            function Ot(t, n) {
                return t[n]
            }

            function Ft(t) {
                for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
                return e
            }

            function It(t, n) {
                var e = Object.create(t.prototype);
                for (var r in n)e[r] = n[r];
                return e
            }

            function Yt() {
            }

            function Bt(t) {
                var n;
                return t = (t + "").trim().toLowerCase(), (n = wh.exec(t)) ? (n = parseInt(n[1], 16), new Wt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Mh.exec(t)) ? jt(parseInt(n[1], 16)) : (n = Th.exec(t)) ? new Wt(n[1], n[2], n[3], 1) : (n = Nh.exec(t)) ? new Wt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = kh.exec(t)) ? Ht(n[1], n[2], n[3], n[4]) : (n = Sh.exec(t)) ? Ht(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Ah.exec(t)) ? $t(n[1], n[2] / 100, n[3] / 100, 1) : (n = Eh.exec(t)) ? $t(n[1], n[2] / 100, n[3] / 100, n[4]) : Ch.hasOwnProperty(t) ? jt(Ch[t]) : "transparent" === t ? new Wt(NaN, NaN, NaN, 0) : null
            }

            function jt(t) {
                return new Wt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function Ht(t, n, e, r) {
                return r <= 0 && (t = n = e = NaN), new Wt(t, n, e, r)
            }

            function Xt(t) {
                return t instanceof Yt || (t = Bt(t)), t ? (t = t.rgb(), new Wt(t.r, t.g, t.b, t.opacity)) : new Wt
            }

            function Vt(t, n, e, r) {
                return 1 === arguments.length ? Xt(t) : new Wt(t, n, e, null == r ? 1 : r)
            }

            function Wt(t, n, e, r) {
                this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
            }

            function $t(t, n, e, r) {
                return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Jt(t, n, e, r)
            }

            function Zt(t) {
                if (t instanceof Jt)return new Jt(t.h, t.s, t.l, t.opacity);
                if (t instanceof Yt || (t = Bt(t)), !t)return new Jt;
                if (t instanceof Jt)return t;
                t = t.rgb();
                var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), u = NaN, a = o - i, c = (o + i) / 2;
                return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new Jt(u, a, c, t.opacity)
            }

            function Gt(t, n, e, r) {
                return 1 === arguments.length ? Zt(t) : new Jt(t, n, e, null == r ? 1 : r)
            }

            function Jt(t, n, e, r) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function Qt(t, n, e) {
                return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }

            function Kt(t) {
                if (t instanceof nn)return new nn(t.l, t.a, t.b, t.opacity);
                if (t instanceof sn) {
                    var n = t.h * zh;
                    return new nn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
                }
                t instanceof Wt || (t = Xt(t));
                var e = un(t.r), r = un(t.g), i = un(t.b), o = en((.4124564 * e + .3575761 * r + .1804375 * i) / Lh), u = en((.2126729 * e + .7151522 * r + .072175 * i) / Rh), a = en((.0193339 * e + .119192 * r + .9503041 * i) / Uh);
                return new nn(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity)
            }

            function tn(t, n, e, r) {
                return 1 === arguments.length ? Kt(t) : new nn(t, n, e, null == r ? 1 : r)
            }

            function nn(t, n, e, r) {
                this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
            }

            function en(t) {
                return t > Ih ? Math.pow(t, 1 / 3) : t / Fh + Dh
            }

            function rn(t) {
                return t > Oh ? t * t * t : Fh * (t - Dh)
            }

            function on(t) {
                return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function un(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function an(t) {
                if (t instanceof sn)return new sn(t.h, t.c, t.l, t.opacity);
                t instanceof nn || (t = Kt(t));
                var n = Math.atan2(t.b, t.a) * Ph;
                return new sn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
            }

            function cn(t, n, e, r) {
                return 1 === arguments.length ? an(t) : new sn(t, n, e, null == r ? 1 : r)
            }

            function sn(t, n, e, r) {
                this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
            }

            function fn(t) {
                if (t instanceof hn)return new hn(t.h, t.s, t.l, t.opacity);
                t instanceof Wt || (t = Xt(t));
                var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = ($h * r + Vh * n - Wh * e) / ($h + Vh - Wh), o = r - i, u = (Xh * (e - i) - jh * o) / Hh, a = Math.sqrt(u * u + o * o) / (Xh * i * (1 - i)), c = a ? Math.atan2(u, o) * Ph - 120 : NaN;
                return new hn(c < 0 ? c + 360 : c, a, i, t.opacity)
            }

            function ln(t, n, e, r) {
                return 1 === arguments.length ? fn(t) : new hn(t, n, e, null == r ? 1 : r)
            }

            function hn(t, n, e, r) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function pn(t, n, e, r, i) {
                var o = t * t, u = o * t;
                return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
            }

            function dn(t, n) {
                return function (e) {
                    return t + e * n
                }
            }

            function vn(t, n, e) {
                return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
                    return Math.pow(t + r * n, e)
                }
            }

            function _n(t, n) {
                var e = n - t;
                return e ? dn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : np(isNaN(t) ? n : t)
            }

            function yn(t) {
                return 1 === (t = +t) ? gn : function (n, e) {
                    return e - n ? vn(n, e, t) : np(isNaN(n) ? e : n)
                }
            }

            function gn(t, n) {
                var e = n - t;
                return e ? dn(t, e) : np(isNaN(t) ? n : t)
            }

            function mn(t) {
                return function (n) {
                    var e, r, i = n.length, o = new Array(i), u = new Array(i), a = new Array(i);
                    for (e = 0; e < i; ++e)r = Vt(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
                    return o = t(o), u = t(u), a = t(a), r.opacity = 1, function (t) {
                        return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
                    }
                }
            }

            function xn(t) {
                return function () {
                    return t
                }
            }

            function bn(t) {
                return function (n) {
                    return t(n) + ""
                }
            }

            function wn(t) {
                return "none" === t ? vp : (Zh || (Zh = document.createElement("DIV"), Gh = document.documentElement, Jh = document.defaultView), Zh.style.transform = t, t = Jh.getComputedStyle(Gh.appendChild(Zh), null).getPropertyValue("transform"), Gh.removeChild(Zh), t = t.slice(7, -1).split(","), _p(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
            }

            function Mn(t) {
                return null == t ? vp : (Qh || (Qh = document.createElementNS("http://www.w3.org/2000/svg", "g")), Qh.setAttribute("transform", t), (t = Qh.transform.baseVal.consolidate()) ? (t = t.matrix, _p(t.a, t.b, t.c, t.d, t.e, t.f)) : vp)
            }

            function Tn(t, n, e, r) {
                function i(t) {
                    return t.length ? t.pop() + " " : ""
                }

                function o(t, r, i, o, u, a) {
                    if (t !== i || r !== o) {
                        var c = u.push("translate(", null, n, null, e);
                        a.push({i: c - 4, x: ap(t, i)}, {i: c - 2, x: ap(r, o)})
                    } else(i || o) && u.push("translate(" + i + n + o + e)
                }

                function u(t, n, e, o) {
                    t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                        i: e.push(i(e) + "rotate(", null, r) - 2,
                        x: ap(t, n)
                    })) : n && e.push(i(e) + "rotate(" + n + r)
                }

                function a(t, n, e, o) {
                    t !== n ? o.push({
                        i: e.push(i(e) + "skewX(", null, r) - 2,
                        x: ap(t, n)
                    }) : n && e.push(i(e) + "skewX(" + n + r)
                }

                function c(t, n, e, r, o, u) {
                    if (t !== e || n !== r) {
                        var a = o.push(i(o) + "scale(", null, ",", null, ")");
                        u.push({i: a - 4, x: ap(t, e)}, {i: a - 2, x: ap(n, r)})
                    } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                }

                return function (n, e) {
                    var r = [], i = [];
                    return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
                        for (var n, e = -1, o = i.length; ++e < o;)r[(n = i[e]).i] = n.x(t);
                        return r.join("")
                    }
                }
            }

            function Nn(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }

            function kn(t) {
                return ((t = Math.exp(t)) - 1 / t) / 2
            }

            function Sn(t) {
                return ((t = Math.exp(2 * t)) - 1) / (t + 1)
            }

            function An(t) {
                return function (n, e) {
                    var r = t((n = Gt(n)).h, (e = Gt(e)).h), i = gn(n.s, e.s), o = gn(n.l, e.l), u = gn(n.opacity, e.opacity);
                    return function (t) {
                        return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + ""
                    }
                }
            }

            function En(t, n) {
                var e = gn((t = tn(t)).l, (n = tn(n)).l), r = gn(t.a, n.a), i = gn(t.b, n.b), o = gn(t.opacity, n.opacity);
                return function (n) {
                    return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
                }
            }

            function Cn(t) {
                return function (n, e) {
                    var r = t((n = cn(n)).h, (e = cn(e)).h), i = gn(n.c, e.c), o = gn(n.l, e.l), u = gn(n.opacity, e.opacity);
                    return function (t) {
                        return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + ""
                    }
                }
            }

            function zn(t) {
                return function n(e) {
                    function r(n, r) {
                        var i = t((n = ln(n)).h, (r = ln(r)).h), o = gn(n.s, r.s), u = gn(n.l, r.l), a = gn(n.opacity, r.opacity);
                        return function (t) {
                            return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + ""
                        }
                    }

                    return e = +e, r.gamma = n, r
                }(1)
            }

            function Pn() {
                for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in r)throw new Error("illegal type: " + t);
                    r[t] = []
                }
                return new qn(r)
            }

            function qn(t) {
                this._ = t
            }

            function Ln(t, n) {
                return t.trim().split(/^|\s+/).map(function (t) {
                    var e = "", r = t.indexOf(".");
                    if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t))throw new Error("unknown type: " + t);
                    return {type: t, name: e}
                })
            }

            function Rn(t, n) {
                for (var e, r = 0, i = t.length; r < i; ++r)if ((e = t[r]).name === n)return e.value
            }

            function Un(t, n, e) {
                for (var r = 0, i = t.length; r < i; ++r)if (t[r].name === n) {
                    t[r] = zp, t = t.slice(0, r).concat(t.slice(r + 1));
                    break
                }
                return null != e && t.push({name: n, value: e}), t
            }

            function Dn(t) {
                return new Function("d", "return {" + t.map(function (t, n) {
                        return JSON.stringify(t) + ": d[" + n + "]"
                    }).join(",") + "}")
            }

            function On(t, n) {
                var e = Dn(t);
                return function (r, i) {
                    return n(e(r), i, t)
                }
            }

            function Fn(t) {
                var n = Object.create(null), e = [];
                return t.forEach(function (t) {
                    for (var r in t)r in n || e.push(n[r] = r)
                }), e
            }

            function In(t) {
                return function (n, e) {
                    t(null == n ? e : null)
                }
            }

            function Yn(t) {
                var n = t.responseType;
                return n && "text" !== n ? t.response : t.responseText
            }

            function Bn(t, n) {
                return function (e) {
                    return t(e.responseText, n)
                }
            }

            function jn() {
                return od || (cd(Hn), od = ad.now() + ud)
            }

            function Hn() {
                od = 0
            }

            function Xn() {
                this._call = this._time = this._next = null
            }

            function Vn(t, n, e) {
                var r = new Xn;
                return r.restart(t, n, e), r
            }

            function Wn() {
                jn(), ++td;
                for (var t, n = Pp; n;)(t = od - n._time) >= 0 && n._call.call(null, t), n = n._next;
                --td
            }

            function $n() {
                od = (id = ad.now()) + ud, td = nd = 0;
                try {
                    Wn()
                } finally {
                    td = 0, Gn(), od = 0
                }
            }

            function Zn() {
                var t = ad.now(), n = t - id;
                n > rd && (ud -= n, id = t)
            }

            function Gn() {
                for (var t, n, e = Pp, r = 1 / 0; e;)e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Pp = n);
                qp = t, Jn(r)
            }

            function Jn(t) {
                if (!td) {
                    nd && (nd = clearTimeout(nd));
                    var n = t - od;
                    n > 24 ? (t < 1 / 0 && (nd = setTimeout($n, n)), ed && (ed = clearInterval(ed))) : (ed || (ed = setInterval(Zn, rd)), td = 1, cd($n))
                }
            }

            function Qn(t, n, e, r) {
                function i(n) {
                    return t(n = new Date(+n)), n
                }

                return i.floor = i, i.ceil = function (e) {
                    return t(e = new Date(e - 1)), n(e, 1), t(e), e
                }, i.round = function (t) {
                    var n = i(t), e = i.ceil(t);
                    return t - n < e - t ? n : e
                }, i.offset = function (t, e) {
                    return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                }, i.range = function (e, r, o) {
                    var u = [];
                    if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0))return u;
                    do u.push(new Date(+e)); while (n(e, o), t(e), e < r);
                    return u
                }, i.filter = function (e) {
                    return Qn(function (n) {
                        if (n >= n)for (; t(n), !e(n);)n.setTime(n - 1)
                    }, function (t, r) {
                        if (t >= t)for (; --r >= 0;)for (; n(t, 1), !e(t););
                    })
                }, e && (i.count = function (n, r) {
                    return ld.setTime(+n), hd.setTime(+r), t(ld), t(hd), Math.floor(e(ld, hd))
                }, i.every = function (t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                        return r(n) % t === 0
                    } : function (n) {
                        return i.count(0, n) % t === 0
                    }) : i : null
                }), i
            }

            function Kn(t) {
                return Qn(function (n) {
                    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                }, function (t, n) {
                    t.setDate(t.getDate() + 7 * n)
                }, function (t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * _d) / md
                })
            }

            function te(t) {
                return Qn(function (n) {
                    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                }, function (t, n) {
                    t.setUTCDate(t.getUTCDate() + 7 * n)
                }, function (t, n) {
                    return (n - t) / md
                })
            }

            function ne(t) {
                if (!(n = Tv.exec(t)))throw new Error("invalid format: " + t);
                var n, e = n[1] || " ", r = n[2] || ">", i = n[3] || "-", o = n[4] || "", u = !!n[5], a = n[6] && +n[6], c = !!n[7], s = n[8] && +n[8].slice(1), f = n[9] || "";
                "n" === f ? (c = !0, f = "g") : Mv[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = s, this.type = f
            }

            function ee(t) {
                return t
            }

            function re(n) {
                return kv = Av(n), t.format = kv.format, t.formatPrefix = kv.formatPrefix, kv
            }

            function ie(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return n.setFullYear(t.y), n
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function oe(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return n.setUTCFullYear(t.y), n
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function ue(t) {
                return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
            }

            function ae(t) {
                function n(t, n) {
                    return function (e) {
                        var r, i, o, u = [], a = -1, c = 0, s = t.length;
                        for (e instanceof Date || (e = new Date(+e)); ++a < s;)37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = qv[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
                        return u.push(t.slice(c, a)), u.join("")
                    }
                }

                function e(t, n) {
                    return function (e) {
                        var i = ue(1900), o = r(i, t, e += "", 0);
                        if (o != e.length)return null;
                        if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                            "w" in i || (i.w = "W" in i ? 1 : 0);
                            var u = "Z" in i ? oe(ue(i.y)).getUTCDay() : n(ue(i.y)).getDay();
                            i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (u + 5) % 7 : i.w + 7 * i.U - (u + 6) % 7
                        }
                        return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, oe(i)) : n(i)
                    }
                }

                function r(t, n, e, r) {
                    for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
                        if (r >= c)return -1;
                        if (i = n.charCodeAt(u++), 37 === i) {
                            if (i = n.charAt(u++), o = B[i in qv ? n.charAt(u++) : i], !o || (r = o(t, e, r)) < 0)return -1
                        } else if (i != e.charCodeAt(r++))return -1
                    }
                    return r
                }

                function i(t, n, e) {
                    var r = C.exec(n.slice(e));
                    return r ? (t.p = z[r[0].toLowerCase()], e + r[0].length) : -1
                }

                function o(t, n, e) {
                    var r = L.exec(n.slice(e));
                    return r ? (t.w = R[r[0].toLowerCase()], e + r[0].length) : -1
                }

                function u(t, n, e) {
                    var r = P.exec(n.slice(e));
                    return r ? (t.w = q[r[0].toLowerCase()], e + r[0].length) : -1
                }

                function a(t, n, e) {
                    var r = O.exec(n.slice(e));
                    return r ? (t.m = F[r[0].toLowerCase()], e + r[0].length) : -1
                }

                function c(t, n, e) {
                    var r = U.exec(n.slice(e));
                    return r ? (t.m = D[r[0].toLowerCase()], e + r[0].length) : -1
                }

                function s(t, n, e) {
                    return r(t, w, n, e)
                }

                function f(t, n, e) {
                    return r(t, M, n, e)
                }

                function l(t, n, e) {
                    return r(t, T, n, e)
                }

                function h(t) {
                    return S[t.getDay()]
                }

                function p(t) {
                    return k[t.getDay()]
                }

                function d(t) {
                    return E[t.getMonth()]
                }

                function v(t) {
                    return A[t.getMonth()]
                }

                function _(t) {
                    return N[+(t.getHours() >= 12)]
                }

                function y(t) {
                    return S[t.getUTCDay()]
                }

                function g(t) {
                    return k[t.getUTCDay()]
                }

                function m(t) {
                    return E[t.getUTCMonth()]
                }

                function x(t) {
                    return A[t.getUTCMonth()]
                }

                function b(t) {
                    return N[+(t.getUTCHours() >= 12)]
                }

                var w = t.dateTime, M = t.date, T = t.time, N = t.periods, k = t.days, S = t.shortDays, A = t.months, E = t.shortMonths, C = fe(N), z = le(N), P = fe(k), q = le(k), L = fe(S), R = le(S), U = fe(A), D = le(A), O = fe(E), F = le(E), I = {
                    a: h,
                    A: p,
                    b: d,
                    B: v,
                    c: null,
                    d: ke,
                    e: ke,
                    H: Se,
                    I: Ae,
                    j: Ee,
                    L: Ce,
                    m: ze,
                    M: Pe,
                    p: _,
                    S: qe,
                    U: Le,
                    w: Re,
                    W: Ue,
                    x: null,
                    X: null,
                    y: De,
                    Y: Oe,
                    Z: Fe,
                    "%": tr
                }, Y = {
                    a: y,
                    A: g,
                    b: m,
                    B: x,
                    c: null,
                    d: Ie,
                    e: Ie,
                    H: Ye,
                    I: Be,
                    j: je,
                    L: He,
                    m: Xe,
                    M: Ve,
                    p: b,
                    S: We,
                    U: $e,
                    w: Ze,
                    W: Ge,
                    x: null,
                    X: null,
                    y: Je,
                    Y: Qe,
                    Z: Ke,
                    "%": tr
                }, B = {
                    a: o,
                    A: u,
                    b: a,
                    B: c,
                    c: s,
                    d: me,
                    e: me,
                    H: be,
                    I: be,
                    j: xe,
                    L: Te,
                    m: ge,
                    M: we,
                    p: i,
                    S: Me,
                    U: pe,
                    w: he,
                    W: de,
                    x: f,
                    X: l,
                    y: _e,
                    Y: ve,
                    Z: ye,
                    "%": Ne
                };
                return I.x = n(M, I), I.X = n(T, I), I.c = n(w, I), Y.x = n(M, Y), Y.X = n(T, Y), Y.c = n(w, Y), {
                    format: function (t) {
                        var e = n(t += "", I);
                        return e.toString = function () {
                            return t
                        }, e
                    }, parse: function (t) {
                        var n = e(t += "", ie);
                        return n.toString = function () {
                            return t
                        }, n
                    }, utcFormat: function (t) {
                        var e = n(t += "", Y);
                        return e.toString = function () {
                            return t
                        }, e
                    }, utcParse: function (t) {
                        var n = e(t, oe);
                        return n.toString = function () {
                            return t
                        }, n
                    }
                }
            }

            function ce(t, n, e) {
                var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
                return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
            }

            function se(t) {
                return t.replace(Uv, "\\$&")
            }

            function fe(t) {
                return new RegExp("^(?:" + t.map(se).join("|") + ")", "i")
            }

            function le(t) {
                for (var n = {}, e = -1, r = t.length; ++e < r;)n[t[e].toLowerCase()] = e;
                return n
            }

            function he(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 1));
                return r ? (t.w = +r[0], e + r[0].length) : -1
            }

            function pe(t, n, e) {
                var r = Lv.exec(n.slice(e));
                return r ? (t.U = +r[0], e + r[0].length) : -1
            }

            function de(t, n, e) {
                var r = Lv.exec(n.slice(e));
                return r ? (t.W = +r[0], e + r[0].length) : -1
            }

            function ve(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 4));
                return r ? (t.y = +r[0], e + r[0].length) : -1
            }

            function _e(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 2));
                return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
            }

            function ye(t, n, e) {
                var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
                return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
            }

            function ge(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 2));
                return r ? (t.m = r[0] - 1, e + r[0].length) : -1
            }

            function me(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 2));
                return r ? (t.d = +r[0], e + r[0].length) : -1
            }

            function xe(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 3));
                return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
            }

            function be(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 2));
                return r ? (t.H = +r[0], e + r[0].length) : -1
            }

            function we(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 2));
                return r ? (t.M = +r[0], e + r[0].length) : -1
            }

            function Me(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 2));
                return r ? (t.S = +r[0], e + r[0].length) : -1
            }

            function Te(t, n, e) {
                var r = Lv.exec(n.slice(e, e + 3));
                return r ? (t.L = +r[0], e + r[0].length) : -1
            }

            function Ne(t, n, e) {
                var r = Rv.exec(n.slice(e, e + 1));
                return r ? e + r[0].length : -1
            }

            function ke(t, n) {
                return ce(t.getDate(), n, 2)
            }

            function Se(t, n) {
                return ce(t.getHours(), n, 2)
            }

            function Ae(t, n) {
                return ce(t.getHours() % 12 || 12, n, 2)
            }

            function Ee(t, n) {
                return ce(1 + kd.count(Hd(t), t), n, 3)
            }

            function Ce(t, n) {
                return ce(t.getMilliseconds(), n, 3)
            }

            function ze(t, n) {
                return ce(t.getMonth() + 1, n, 2)
            }

            function Pe(t, n) {
                return ce(t.getMinutes(), n, 2)
            }

            function qe(t, n) {
                return ce(t.getSeconds(), n, 2)
            }

            function Le(t, n) {
                return ce(Ad.count(Hd(t), t), n, 2)
            }

            function Re(t) {
                return t.getDay()
            }

            function Ue(t, n) {
                return ce(Ed.count(Hd(t), t), n, 2)
            }

            function De(t, n) {
                return ce(t.getFullYear() % 100, n, 2)
            }

            function Oe(t, n) {
                return ce(t.getFullYear() % 1e4, n, 4)
            }

            function Fe(t) {
                var n = t.getTimezoneOffset();
                return (n > 0 ? "-" : (n *= -1, "+")) + ce(n / 60 | 0, "0", 2) + ce(n % 60, "0", 2)
            }

            function Ie(t, n) {
                return ce(t.getUTCDate(), n, 2)
            }

            function Ye(t, n) {
                return ce(t.getUTCHours(), n, 2)
            }

            function Be(t, n) {
                return ce(t.getUTCHours() % 12 || 12, n, 2)
            }

            function je(t, n) {
                return ce(1 + Gd.count(dv(t), t), n, 3)
            }

            function He(t, n) {
                return ce(t.getUTCMilliseconds(), n, 3)
            }

            function Xe(t, n) {
                return ce(t.getUTCMonth() + 1, n, 2)
            }

            function Ve(t, n) {
                return ce(t.getUTCMinutes(), n, 2)
            }

            function We(t, n) {
                return ce(t.getUTCSeconds(), n, 2)
            }

            function $e(t, n) {
                return ce(Qd.count(dv(t), t), n, 2)
            }

            function Ze(t) {
                return t.getUTCDay()
            }

            function Ge(t, n) {
                return ce(Kd.count(dv(t), t), n, 2)
            }

            function Je(t, n) {
                return ce(t.getUTCFullYear() % 100, n, 2)
            }

            function Qe(t, n) {
                return ce(t.getUTCFullYear() % 1e4, n, 4)
            }

            function Ke() {
                return "+0000"
            }

            function tr() {
                return "%"
            }

            function nr(n) {
                return Ev = ae(n), t.timeFormat = Ev.format, t.timeParse = Ev.parse, t.utcFormat = Ev.utcFormat, t.utcParse = Ev.utcParse, Ev
            }

            function er(t) {
                return t.toISOString()
            }

            function rr(t) {
                var n = new Date(t);
                return isNaN(n) ? null : n
            }

            function ir(t) {
                function n(n) {
                    var o = n + "", u = e.get(o);
                    if (!u) {
                        if (i !== jv)return i;
                        e.set(o, u = r.push(n))
                    }
                    return t[(u - 1) % t.length]
                }

                var e = o(), r = [], i = jv;
                return t = null == t ? [] : Bv.call(t), n.domain = function (t) {
                    if (!arguments.length)return r.slice();
                    r = [], e = o();
                    for (var i, u, a = -1, c = t.length; ++a < c;)e.has(u = (i = t[a]) + "") || e.set(u, r.push(i));
                    return n
                }, n.range = function (e) {
                    return arguments.length ? (t = Bv.call(e), n) : t.slice()
                }, n.unknown = function (t) {
                    return arguments.length ? (i = t, n) : i
                }, n.copy = function () {
                    return ir().domain(r).range(t).unknown(i)
                }, n
            }

            function or() {
                function t() {
                    var t = i().length, r = u[1] < u[0], l = u[r - 0], h = u[1 - r];
                    n = (h - l) / Math.max(1, t - c + 2 * s), a && (n = Math.floor(n)), l += (h - l - n * (t - c)) * f, e = n * (1 - c), a && (l = Math.round(l), e = Math.round(e));
                    var p = Ls(t).map(function (t) {
                        return l + n * t
                    });
                    return o(r ? p.reverse() : p)
                }

                var n, e, r = ir().unknown(void 0), i = r.domain, o = r.range, u = [0, 1], a = !1, c = 0, s = 0, f = .5;
                return delete r.unknown, r.domain = function (n) {
                    return arguments.length ? (i(n), t()) : i()
                }, r.range = function (n) {
                    return arguments.length ? (u = [+n[0], +n[1]], t()) : u.slice()
                }, r.rangeRound = function (n) {
                    return u = [+n[0], +n[1]], a = !0, t()
                }, r.bandwidth = function () {
                    return e
                }, r.step = function () {
                    return n
                }, r.round = function (n) {
                    return arguments.length ? (a = !!n, t()) : a
                }, r.padding = function (n) {
                    return arguments.length ? (c = s = Math.max(0, Math.min(1, n)), t()) : c
                }, r.paddingInner = function (n) {
                    return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
                }, r.paddingOuter = function (n) {
                    return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s
                }, r.align = function (n) {
                    return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
                }, r.copy = function () {
                    return or().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)
                }, t()
            }

            function ur(t) {
                var n = t.copy;
                return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
                    return ur(n())
                }, t
            }

            function ar() {
                return ur(or().paddingInner(1))
            }

            function cr(t, n) {
                return (n -= t = +t) ? function (e) {
                    return (e - t) / n
                } : Hv(n)
            }

            function sr(t) {
                return function (n, e) {
                    var r = t(n = +n, e = +e);
                    return function (t) {
                        return t <= n ? 0 : t >= e ? 1 : r(t)
                    }
                }
            }

            function fr(t) {
                return function (n, e) {
                    var r = t(n = +n, e = +e);
                    return function (t) {
                        return t <= 0 ? n : t >= 1 ? e : r(t)
                    }
                }
            }

            function lr(t, n, e, r) {
                var i = t[0], o = t[1], u = n[0], a = n[1];
                return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)), function (t) {
                    return u(i(t))
                }
            }

            function hr(t, n, e, r) {
                var i = Math.min(t.length, n.length) - 1, o = new Array(i), u = new Array(i), a = -1;
                for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;)o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
                return function (n) {
                    var e = ws(t, n, 1, i) - 1;
                    return u[e](o[e](n))
                }
            }

            function pr(t, n) {
                return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
            }

            function dr(t, n) {
                function e() {
                    return i = Math.min(a.length, c.length) > 2 ? hr : lr, o = u = null, r
                }

                function r(n) {
                    return (o || (o = i(a, c, f ? sr(t) : t, s)))(+n)
                }

                var i, o, u, a = Vv, c = Vv, s = hp, f = !1;
                return r.invert = function (t) {
                    return (u || (u = i(c, a, cr, f ? fr(n) : n)))(+t)
                }, r.domain = function (t) {
                    return arguments.length ? (a = Yv.call(t, Xv), e()) : a.slice()
                }, r.range = function (t) {
                    return arguments.length ? (c = Bv.call(t), e()) : c.slice()
                }, r.rangeRound = function (t) {
                    return c = Bv.call(t), s = pp, e()
                }, r.clamp = function (t) {
                    return arguments.length ? (f = !!t, e()) : f
                }, r.interpolate = function (t) {
                    return arguments.length ? (s = t, e()) : s
                }, e()
            }

            function vr(t) {
                var n = t.domain;
                return t.ticks = function (t) {
                    var e = n();
                    return Os(e[0], e[e.length - 1], null == t ? 10 : t)
                }, t.tickFormat = function (t, e) {
                    return Wv(n(), t, e)
                }, t.nice = function (r) {
                    var i = n(), o = i.length - 1, u = null == r ? 10 : r, a = i[0], c = i[o], s = e(a, c, u);
                    return s && (s = e(Math.floor(a / s) * s, Math.ceil(c / s) * s, u), i[0] = Math.floor(a / s) * s, i[o] = Math.ceil(c / s) * s, n(i)), t
                }, t
            }

            function _r() {
                var t = dr(cr, ap);
                return t.copy = function () {
                    return pr(t, _r())
                }, vr(t)
            }

            function yr() {
                function t(t) {
                    return +t
                }

                var n = [0, 1];
                return t.invert = t, t.domain = t.range = function (e) {
                    return arguments.length ? (n = Yv.call(e, Xv), t) : n.slice()
                }, t.copy = function () {
                    return yr().domain(n)
                }, vr(t)
            }

            function gr(t, n) {
                return (n = Math.log(n / t)) ? function (e) {
                    return Math.log(e / t) / n
                } : Hv(n)
            }

            function mr(t, n) {
                return t < 0 ? function (e) {
                    return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
                } : function (e) {
                    return Math.pow(n, e) * Math.pow(t, 1 - e)
                }
            }

            function xr(t) {
                return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
            }

            function br(t) {
                return 10 === t ? xr : t === Math.E ? Math.exp : function (n) {
                    return Math.pow(t, n)
                }
            }

            function wr(t) {
                return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
                    return Math.log(n) / t
                })
            }

            function Mr(t) {
                return function (n) {
                    return -t(-n)
                }
            }

            function Tr() {
                function n() {
                    return o = wr(i), u = br(i), r()[0] < 0 && (o = Mr(o), u = Mr(u)), e
                }

                var e = dr(gr, mr).domain([1, 10]), r = e.domain, i = 10, o = wr(10), u = br(10);
                return e.base = function (t) {
                    return arguments.length ? (i = +t, n()) : i
                }, e.domain = function (t) {
                    return arguments.length ? (r(t), n()) : r()
                }, e.ticks = function (t) {
                    var n, e = r(), a = e[0], c = e[e.length - 1];
                    (n = c < a) && (h = a, a = c, c = h);
                    var s, f, l, h = o(a), p = o(c), d = null == t ? 10 : +t, v = [];
                    if (!(i % 1) && p - h < d) {
                        if (h = Math.round(h) - 1, p = Math.round(p) + 1, a > 0) {
                            for (; h < p; ++h)for (f = 1, s = u(h); f < i; ++f)if (l = s * f, !(l < a)) {
                                if (l > c)break;
                                v.push(l)
                            }
                        } else for (; h < p; ++h)for (f = i - 1, s = u(h); f >= 1; --f)if (l = s * f, !(l < a)) {
                            if (l > c)break;
                            v.push(l)
                        }
                    } else v = Os(h, p, Math.min(p - h, d)).map(u);
                    return n ? v.reverse() : v
                }, e.tickFormat = function (n, r) {
                    if (null == r && (r = 10 === i ? ".0e" : ","), "function" != typeof r && (r = t.format(r)), n === 1 / 0)return r;
                    null == n && (n = 10);
                    var a = Math.max(1, i * n / e.ticks().length);
                    return function (t) {
                        var n = t / u(Math.round(o(t)));
                        return n * i < i - .5 && (n *= i), n <= a ? r(t) : ""
                    }
                }, e.nice = function () {
                    return r($v(r(), {
                        floor: function (t) {
                            return u(Math.floor(o(t)))
                        }, ceil: function (t) {
                            return u(Math.ceil(o(t)))
                        }
                    }))
                }, e.copy = function () {
                    return pr(e, Tr().base(i))
                }, e
            }

            function Nr(t, n) {
                return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
            }

            function kr() {
                function t(t, n) {
                    return (n = Nr(n, e) - (t = Nr(t, e))) ? function (r) {
                        return (Nr(r, e) - t) / n
                    } : Hv(n)
                }

                function n(t, n) {
                    return n = Nr(n, e) - (t = Nr(t, e)), function (r) {
                        return Nr(t + n * r, 1 / e)
                    }
                }

                var e = 1, r = dr(t, n), i = r.domain;
                return r.exponent = function (t) {
                    return arguments.length ? (e = +t, i(i())) : e
                }, r.copy = function () {
                    return pr(r, kr().exponent(e))
                }, vr(r)
            }

            function Sr() {
                return kr().exponent(.5)
            }

            function Ar() {
                function t() {
                    var t = 0, o = Math.max(1, r.length);
                    for (i = new Array(o - 1); ++t < o;)i[t - 1] = Ys(e, t / o);
                    return n
                }

                function n(t) {
                    if (!isNaN(t = +t))return r[ws(i, t)]
                }

                var e = [], r = [], i = [];
                return n.invertExtent = function (t) {
                    var n = r.indexOf(t);
                    return n < 0 ? [NaN, NaN] : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]]
                }, n.domain = function (n) {
                    if (!arguments.length)return e.slice();
                    e = [];
                    for (var r, i = 0, o = n.length; i < o; ++i)r = n[i], null == r || isNaN(r = +r) || e.push(r);
                    return e.sort(ms), t()
                }, n.range = function (n) {
                    return arguments.length ? (r = Bv.call(n), t()) : r.slice()
                }, n.quantiles = function () {
                    return i.slice()
                }, n.copy = function () {
                    return Ar().domain(e).range(r)
                }, n
            }

            function Er() {
                function t(t) {
                    if (t <= t)return u[ws(o, t, 0, i)]
                }

                function n() {
                    var n = -1;
                    for (o = new Array(i); ++n < i;)o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
                    return t
                }

                var e = 0, r = 1, i = 1, o = [.5], u = [0, 1];
                return t.domain = function (t) {
                    return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
                }, t.range = function (t) {
                    return arguments.length ? (i = (u = Bv.call(t)).length - 1, n()) : u.slice()
                }, t.invertExtent = function (t) {
                    var n = u.indexOf(t);
                    return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
                }, t.copy = function () {
                    return Er().domain([e, r]).range(u)
                }, vr(t)
            }

            function Cr() {
                function t(t) {
                    if (t <= t)return e[ws(n, t, 0, r)]
                }

                var n = [.5], e = [0, 1], r = 1;
                return t.domain = function (i) {
                    return arguments.length ? (n = Bv.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
                }, t.range = function (i) {
                    return arguments.length ? (e = Bv.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
                }, t.invertExtent = function (t) {
                    var r = e.indexOf(t);
                    return [n[r - 1], n[r]]
                }, t.copy = function () {
                    return Cr().domain(n).range(e)
                }, t
            }

            function zr(t) {
                return new Date(t);
            }

            function Pr(t) {
                return t instanceof Date ? +t : +new Date(+t)
            }

            function qr(t, n, r, i, o, u, a, c, s) {
                function f(e) {
                    return (a(e) < e ? v : u(e) < e ? _ : o(e) < e ? y : i(e) < e ? g : n(e) < e ? r(e) < e ? m : x : t(e) < e ? b : w)(e)
                }

                function l(n, r, i, o) {
                    if (null == n && (n = 10), "number" == typeof n) {
                        var u = Math.abs(i - r) / n, a = xs(function (t) {
                            return t[2]
                        }).right(M, u);
                        a === M.length ? (o = e(r / n_, i / n_, n), n = t) : a ? (a = M[u / M[a - 1][2] < M[a][2] / u ? a - 1 : a], o = a[1], n = a[0]) : (o = e(r, i, n), n = c)
                    }
                    return null == o ? n : n.every(o)
                }

                var h = dr(cr, ap), p = h.invert, d = h.domain, v = s(".%L"), _ = s(":%S"), y = s("%I:%M"), g = s("%I %p"), m = s("%a %d"), x = s("%b %d"), b = s("%B"), w = s("%Y"), M = [[a, 1, Zv], [a, 5, 5 * Zv], [a, 15, 15 * Zv], [a, 30, 30 * Zv], [u, 1, Gv], [u, 5, 5 * Gv], [u, 15, 15 * Gv], [u, 30, 30 * Gv], [o, 1, Jv], [o, 3, 3 * Jv], [o, 6, 6 * Jv], [o, 12, 12 * Jv], [i, 1, Qv], [i, 2, 2 * Qv], [r, 1, Kv], [n, 1, t_], [n, 3, 3 * t_], [t, 1, n_]];
                return h.invert = function (t) {
                    return new Date(p(t))
                }, h.domain = function (t) {
                    return arguments.length ? d(Yv.call(t, Pr)) : d().map(zr)
                }, h.ticks = function (t, n) {
                    var e, r = d(), i = r[0], o = r[r.length - 1], u = o < i;
                    return u && (e = i, i = o, o = e), e = l(t, i, o, n), e = e ? e.range(i, o + 1) : [], u ? e.reverse() : e
                }, h.tickFormat = function (t, n) {
                    return null == n ? f : s(n)
                }, h.nice = function (t, n) {
                    var e = d();
                    return (t = l(t, e[0], e[e.length - 1], n)) ? d($v(e, t)) : h
                }, h.copy = function () {
                    return pr(h, qr(t, n, r, i, o, u, a, c, s))
                }, h
            }

            function Lr(t) {
                var n = t.length;
                return function (e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }

            function Rr(t) {
                function n(n) {
                    var o = (n - e) / (r - e);
                    return t(i ? Math.max(0, Math.min(1, o)) : o)
                }

                var e = 0, r = 1, i = !1;
                return n.domain = function (t) {
                    return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
                }, n.clamp = function (t) {
                    return arguments.length ? (i = !!t, n) : i
                }, n.interpolator = function (e) {
                    return arguments.length ? (t = e, n) : t
                }, n.copy = function () {
                    return Rr(t).domain([e, r]).clamp(i)
                }, vr(n)
            }

            function Ur(t) {
                return function () {
                    var n = this.ownerDocument, e = this.namespaceURI;
                    return e === g_ && n.documentElement.namespaceURI === g_ ? n.createElement(t) : n.createElementNS(e, t)
                }
            }

            function Dr(t) {
                return function () {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
            }

            function Or() {
                return new Fr
            }

            function Fr() {
                this._ = "@" + (++w_).toString(36)
            }

            function Ir(t, n, e) {
                return t = Yr(t, n, e), function (n) {
                    var e = n.relatedTarget;
                    e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                }
            }

            function Yr(n, e, r) {
                return function (i) {
                    var o = t.event;
                    t.event = i;
                    try {
                        n.call(this, this.__data__, e, r)
                    } finally {
                        t.event = o
                    }
                }
            }

            function Br(t) {
                return t.trim().split(/^|\s+/).map(function (t) {
                    var n = "", e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
                })
            }

            function jr(t) {
                return function () {
                    var n = this.__on;
                    if (n) {
                        for (var e, r = 0, i = -1, o = n.length; r < o; ++r)e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++i ? n.length = i : delete this.__on
                    }
                }
            }

            function Hr(t, n, e) {
                var r = S_.hasOwnProperty(t.type) ? Ir : Yr;
                return function (i, o, u) {
                    var a, c = this.__on, s = r(n, o, u);
                    if (c)for (var f = 0, l = c.length; f < l; ++f)if ((a = c[f]).type === t.type && a.name === t.name)return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void(a.value = n);
                    this.addEventListener(t.type, s, e), a = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: s,
                        capture: e
                    }, c ? c.push(a) : this.__on = [a]
                }
            }

            function Xr(n, e, r, i) {
                var o = t.event;
                n.sourceEvent = t.event, t.event = n;
                try {
                    return e.apply(r, i)
                } finally {
                    t.event = o
                }
            }

            function Vr() {
            }

            function Wr() {
                return []
            }

            function $r(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }

            function Zr(t, n, e, r, i, o) {
                for (var u, a = 0, c = n.length, s = o.length; a < s; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new $r(t, o[a]);
                for (; a < c; ++a)(u = n[a]) && (i[a] = u)
            }

            function Gr(t, n, e, r, i, o, u) {
                var a, c, s, f = {}, l = n.length, h = o.length, p = new Array(l);
                for (a = 0; a < l; ++a)(c = n[a]) && (p[a] = s = Y_ + u.call(c, c.__data__, a, n), s in f ? i[a] = c : f[s] = c);
                for (a = 0; a < h; ++a)s = Y_ + u.call(t, o[a], a, o), (c = f[s]) ? (r[a] = c, c.__data__ = o[a], f[s] = null) : e[a] = new $r(t, o[a]);
                for (a = 0; a < l; ++a)(c = n[a]) && f[p[a]] === c && (i[a] = c)
            }

            function Jr(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }

            function Qr(t) {
                return function () {
                    this.removeAttribute(t)
                }
            }

            function Kr(t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function ti(t, n) {
                return function () {
                    this.setAttribute(t, n)
                }
            }

            function ni(t, n) {
                return function () {
                    this.setAttributeNS(t.space, t.local, n)
                }
            }

            function ei(t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            }

            function ri(t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            }

            function ii(t) {
                return function () {
                    this.style.removeProperty(t)
                }
            }

            function oi(t, n, e) {
                return function () {
                    this.style.setProperty(t, n, e)
                }
            }

            function ui(t, n, e) {
                return function () {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            }

            function ai(t) {
                return function () {
                    delete this[t]
                }
            }

            function ci(t, n) {
                return function () {
                    this[t] = n
                }
            }

            function si(t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            }

            function fi(t) {
                return t.trim().split(/^|\s+/)
            }

            function li(t) {
                return t.classList || new hi(t)
            }

            function hi(t) {
                this._node = t, this._names = fi(t.getAttribute("class") || "")
            }

            function pi(t, n) {
                for (var e = li(t), r = -1, i = n.length; ++r < i;)e.add(n[r])
            }

            function di(t, n) {
                for (var e = li(t), r = -1, i = n.length; ++r < i;)e.remove(n[r])
            }

            function vi(t) {
                return function () {
                    pi(this, t)
                }
            }

            function _i(t) {
                return function () {
                    di(this, t)
                }
            }

            function yi(t, n) {
                return function () {
                    (n.apply(this, arguments) ? pi : di)(this, t)
                }
            }

            function gi() {
                this.textContent = ""
            }

            function mi(t) {
                return function () {
                    this.textContent = t
                }
            }

            function xi(t) {
                return function () {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n
                }
            }

            function bi() {
                this.innerHTML = ""
            }

            function wi(t) {
                return function () {
                    this.innerHTML = t
                }
            }

            function Mi(t) {
                return function () {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n
                }
            }

            function Ti() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function Ni() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function ki() {
                return null
            }

            function Si() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function Ai(t, n, e) {
                var r = ty(t), i = r.CustomEvent;
                i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }

            function Ei(t, n) {
                return function () {
                    return Ai(this, t, n)
                }
            }

            function Ci(t, n) {
                return function () {
                    return Ai(this, t, n.apply(this, arguments))
                }
            }

            function zi(t, n) {
                this._groups = t, this._parents = n
            }

            function Pi() {
                return new zi([[document.documentElement]], py)
            }

            function qi(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n]) || e.state > xy)throw new Error("too late");
                return e
            }

            function Li(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n]) || e.state > wy)throw new Error("too late");
                return e
            }

            function Ri(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n]))throw new Error("too late");
                return e
            }

            function Ui(t, n, e) {
                function r(t) {
                    e.state = by, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay)
                }

                function i(r) {
                    var s, f, l, h;
                    if (e.state !== by)return u();
                    for (s in c)if (h = c[s], h.name === e.name) {
                        if (h.state === My)return sd(i);
                        h.state === Ty ? (h.state = ky, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete c[s]) : +s < n && (h.state = ky, h.timer.stop(), delete c[s])
                    }
                    if (sd(function () {
                            e.state === My && (e.state = Ty, e.timer.restart(o, e.delay, e.time), o(r))
                        }), e.state = wy, e.on.call("start", t, t.__data__, e.index, e.group), e.state === wy) {
                        for (e.state = My, a = new Array(l = e.tween.length), s = 0, f = -1; s < l; ++s)(h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (a[++f] = h);
                        a.length = f + 1
                    }
                }

                function o(n) {
                    for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = Ny, 1), i = -1, o = a.length; ++i < o;)a[i].call(null, r);
                    e.state === Ny && (e.on.call("end", t, t.__data__, e.index, e.group), u())
                }

                function u() {
                    e.state = ky, e.timer.stop(), delete c[n];
                    for (var r in c)return;
                    delete t.__transition
                }

                var a, c = t.__transition;
                c[n] = e, e.timer = Vn(r, 0, e.time)
            }

            function Di(t, n) {
                var e, r;
                return function () {
                    var i = Li(this, t), o = i.tween;
                    if (o !== e) {
                        r = e = o;
                        for (var u = 0, a = r.length; u < a; ++u)if (r[u].name === n) {
                            r = r.slice(), r.splice(u, 1);
                            break
                        }
                    }
                    i.tween = r
                }
            }

            function Oi(t, n, e) {
                var r, i;
                if ("function" != typeof e)throw new Error;
                return function () {
                    var o = Li(this, t), u = o.tween;
                    if (u !== r) {
                        i = (r = u).slice();
                        for (var a = {name: n, value: e}, c = 0, s = i.length; c < s; ++c)if (i[c].name === n) {
                            i[c] = a;
                            break
                        }
                        c === s && i.push(a)
                    }
                    o.tween = i
                }
            }

            function Fi(t, n, e) {
                var r = t._id;
                return t.each(function () {
                    var t = Li(this, r);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                }), function (t) {
                    return Ri(t, r).value[n]
                }
            }

            function Ii(t) {
                return function () {
                    this.removeAttribute(t)
                }
            }

            function Yi(t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            }

            function Bi(t, n, e) {
                var r, i;
                return function () {
                    var o = this.getAttribute(t);
                    return o === e ? null : o === r ? i : i = n(r = o, e)
                }
            }

            function ji(t, n, e) {
                var r, i;
                return function () {
                    var o = this.getAttributeNS(t.space, t.local);
                    return o === e ? null : o === r ? i : i = n(r = o, e)
                }
            }

            function Hi(t, n, e) {
                var r, i, o;
                return function () {
                    var u, a = e(this);
                    return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
                }
            }

            function Xi(t, n, e) {
                var r, i, o;
                return function () {
                    var u, a = e(this);
                    return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
                }
            }

            function Vi(t, n) {
                function e() {
                    var e = this, r = n.apply(e, arguments);
                    return r && function (n) {
                            e.setAttributeNS(t.space, t.local, r(n))
                        }
                }

                return e._value = n, e
            }

            function Wi(t, n) {
                function e() {
                    var e = this, r = n.apply(e, arguments);
                    return r && function (n) {
                            e.setAttribute(t, r(n))
                        }
                }

                return e._value = n, e
            }

            function $i(t, n) {
                return function () {
                    qi(this, t).delay = +n.apply(this, arguments)
                }
            }

            function Zi(t, n) {
                return n = +n, function () {
                    qi(this, t).delay = n
                }
            }

            function Gi(t, n) {
                return function () {
                    Li(this, t).duration = +n.apply(this, arguments)
                }
            }

            function Ji(t, n) {
                return n = +n, function () {
                    Li(this, t).duration = n
                }
            }

            function Qi(t, n) {
                if ("function" != typeof n)throw new Error;
                return function () {
                    Li(this, t).ease = n
                }
            }

            function Ki(t) {
                return (t + "").trim().split(/^|\s+/).every(function (t) {
                    var n = t.indexOf(".");
                    return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                })
            }

            function to(t, n, e) {
                var r, i, o = Ki(n) ? qi : Li;
                return function () {
                    var u = o(this, t), a = u.on;
                    a !== r && (i = (r = a).copy()).on(n, e), u.on = i
                }
            }

            function no(t) {
                return function () {
                    var n = this.parentNode;
                    for (var e in this.__transition)if (+e !== t)return;
                    n && n.removeChild(this)
                }
            }

            function eo(t, n) {
                var e, r, i;
                return function () {
                    var o = ty(this).getComputedStyle(this, null), u = o.getPropertyValue(t), a = (this.style.removeProperty(t), o.getPropertyValue(t));
                    return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a)
                }
            }

            function ro(t) {
                return function () {
                    this.style.removeProperty(t)
                }
            }

            function io(t, n, e) {
                var r, i;
                return function () {
                    var o = ty(this).getComputedStyle(this, null).getPropertyValue(t);
                    return o === e ? null : o === r ? i : i = n(r = o, e)
                }
            }

            function oo(t, n, e) {
                var r, i, o;
                return function () {
                    var u = ty(this).getComputedStyle(this, null), a = u.getPropertyValue(t), c = e(this);
                    return null == c && (this.style.removeProperty(t), c = u.getPropertyValue(t)), a === c ? null : a === r && c === i ? o : o = n(r = a, i = c)
                }
            }

            function uo(t, n, e) {
                function r() {
                    var r = this, i = n.apply(r, arguments);
                    return i && function (n) {
                            r.style.setProperty(t, i(n), e)
                        }
                }

                return r._value = n, r
            }

            function ao(t) {
                return function () {
                    this.textContent = t
                }
            }

            function co(t) {
                return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n
                }
            }

            function so(t, n, e, r) {
                this._groups = t, this._parents = n, this._name = e, this._id = r
            }

            function fo(t) {
                return Pi().transition(t)
            }

            function lo() {
                return ++Zy
            }

            function ho(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)if (!(t = t.parentNode))return Jy.time = jn(), Jy;
                return e
            }

            function po(t, n, e) {
                var r = t(e);
                return "translate(" + (isFinite(r) ? r : n(e)) + ",0)"
            }

            function vo(t, n, e) {
                var r = t(e);
                return "translate(0," + (isFinite(r) ? r : n(e)) + ")"
            }

            function _o(t) {
                var n = t.bandwidth() / 2;
                return t.round() && (n = Math.round(n)), function (e) {
                    return t(e) + n
                }
            }

            function yo() {
                return !this.__axis
            }

            function go(t, n) {
                function e(e) {
                    var s, f = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i, l = null == o ? n.tickFormat ? n.tickFormat.apply(n, r) : eg : o, h = Math.max(u, 0) + c, p = t === rg || t === og ? po : vo, d = n.range(), v = d[0] + .5, _ = d[d.length - 1] + .5, y = (n.bandwidth ? _o : eg)(n.copy()), g = e.selection ? e.selection() : e, m = g.selectAll(".domain").data([null]), x = g.selectAll(".tick").data(f, n).order(), b = x.exit(), w = x.enter().append("g").attr("class", "tick"), M = x.select("line"), T = x.select("text"), N = t === rg || t === ug ? -1 : 1, k = t === ug || t === ig ? (s = "x", "y") : (s = "y", "x");
                    m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), x = x.merge(w), M = M.merge(w.append("line").attr("stroke", "#000").attr(s + "2", N * u).attr(k + "1", .5).attr(k + "2", .5)), T = T.merge(w.append("text").attr("fill", "#000").attr(s, N * h).attr(k, .5).attr("dy", t === rg ? "0em" : t === og ? "0.71em" : "0.32em")), e !== g && (m = m.transition(e), x = x.transition(e), M = M.transition(e), T = T.transition(e), b = b.transition(e).attr("opacity", ag).attr("transform", function (t) {
                        return p(y, this.parentNode.__axis || y, t)
                    }), w.attr("opacity", ag).attr("transform", function (t) {
                        return p(this.parentNode.__axis || y, y, t)
                    })), b.remove(), m.attr("d", t === ug || t == ig ? "M" + N * a + "," + v + "H0.5V" + _ + "H" + N * a : "M" + v + "," + N * a + "V0.5H" + _ + "V" + N * a), x.attr("opacity", 1).attr("transform", function (t) {
                        return p(y, y, t)
                    }), M.attr(s + "2", N * u), T.attr(s, N * h).text(l), g.filter(yo).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ig ? "start" : t === ug ? "end" : "middle"), g.each(function () {
                        this.__axis = y
                    })
                }

                var r = [], i = null, o = null, u = 6, a = 6, c = 3;
                return e.scale = function (t) {
                    return arguments.length ? (n = t, e) : n
                }, e.ticks = function () {
                    return r = ng.call(arguments), e
                }, e.tickArguments = function (t) {
                    return arguments.length ? (r = null == t ? [] : ng.call(t), e) : r.slice()
                }, e.tickValues = function (t) {
                    return arguments.length ? (i = null == t ? null : ng.call(t), e) : i && i.slice()
                }, e.tickFormat = function (t) {
                    return arguments.length ? (o = t, e) : o
                }, e.tickSize = function (t) {
                    return arguments.length ? (u = a = +t, e) : u
                }, e.tickSizeInner = function (t) {
                    return arguments.length ? (u = +t, e) : u
                }, e.tickSizeOuter = function (t) {
                    return arguments.length ? (a = +t, e) : a
                }, e.tickPadding = function (t) {
                    return arguments.length ? (c = +t, e) : c
                }, e
            }

            function mo(t) {
                return go(rg, t)
            }

            function xo(t) {
                return go(ig, t)
            }

            function bo(t) {
                return go(og, t)
            }

            function wo(t) {
                return go(ug, t)
            }

            function Mo(t, n) {
                return t.parent === n.parent ? 1 : 2
            }

            function To(t) {
                return t.reduce(No, 0) / t.length
            }

            function No(t, n) {
                return t + n.x
            }

            function ko(t) {
                return 1 + t.reduce(So, 0)
            }

            function So(t, n) {
                return Math.max(t, n.y)
            }

            function Ao(t) {
                for (var n; n = t.children;)t = n[0];
                return t
            }

            function Eo(t) {
                for (var n; n = t.children;)t = n[n.length - 1];
                return t
            }

            function Co(t, n) {
                if (t === n)return t;
                var e = t.ancestors(), r = n.ancestors(), i = null;
                for (t = e.pop(), n = r.pop(); t === n;)i = t, t = e.pop(), n = r.pop();
                return i
            }

            function zo(t, n) {
                var e, r, i, o, u, a = new Uo(t), c = +t.value && (a.value = t.value), s = [a];
                for (null == n && (n = qo); e = s.pop();)if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))for (e.children = new Array(u), o = u - 1; o >= 0; --o)s.push(r = e.children[o] = new Uo(i[o])), r.parent = e, r.depth = e.depth + 1;
                return a.eachBefore(Ro)
            }

            function Po() {
                return zo(this).eachBefore(Lo)
            }

            function qo(t) {
                return t.children
            }

            function Lo(t) {
                t.data = t.data.data
            }

            function Ro(t) {
                var n = 0;
                do t.height = n; while ((t = t.parent) && t.height < ++n)
            }

            function Uo(t) {
                this.data = t, this.depth = this.height = 0, this.parent = null
            }

            function Do(t) {
                this._ = t, this.next = null
            }

            function Oo(t, n) {
                var e = n.x - t.x, r = n.y - t.y, i = t.r - n.r;
                return i * i + 1e-6 > e * e + r * r
            }

            function Fo(t, n) {
                var e, r, i, o = null, u = t.head;
                switch (n.length) {
                    case 1:
                        e = Io(n[0]);
                        break;
                    case 2:
                        e = Yo(n[0], n[1]);
                        break;
                    case 3:
                        e = Bo(n[0], n[1], n[2])
                }
                for (; u;)i = u._, r = u.next, e && Oo(e, i) ? o = u : (o ? (t.tail = o, o.next = null) : t.head = t.tail = null, n.push(i), e = Fo(t, n), n.pop(), t.head ? (u.next = t.head, t.head = u) : (u.next = null, t.head = t.tail = u), o = t.tail, o.next = r), u = r;
                return t.tail = o, e
            }

            function Io(t) {
                return {x: t.x, y: t.y, r: t.r}
            }

            function Yo(t, n) {
                var e = t.x, r = t.y, i = t.r, o = n.x, u = n.y, a = n.r, c = o - e, s = u - r, f = a - i, l = Math.sqrt(c * c + s * s);
                return {x: (e + o + c / l * f) / 2, y: (r + u + s / l * f) / 2, r: (l + i + a) / 2}
            }

            function Bo(t, n, e) {
                var r = t.x, i = t.y, o = t.r, u = n.x, a = n.y, c = n.r, s = e.x, f = e.y, l = e.r, h = 2 * (r - u), p = 2 * (i - a), d = 2 * (c - o), v = r * r + i * i - o * o - u * u - a * a + c * c, _ = 2 * (r - s), y = 2 * (i - f), g = 2 * (l - o), m = r * r + i * i - o * o - s * s - f * f + l * l, x = _ * p - h * y, b = (p * m - y * v) / x - r, w = (y * d - p * g) / x, M = (_ * v - h * m) / x - i, T = (h * g - _ * d) / x, N = w * w + T * T - 1, k = 2 * (b * w + M * T + o), S = b * b + M * M - o * o, A = (-k - Math.sqrt(k * k - 4 * N * S)) / (2 * N);
                return {x: b + w * A + r, y: M + T * A + i, r: A}
            }

            function jo(t, n, e) {
                var r = t.x, i = t.y, o = n.r + e.r, u = t.r + e.r, a = n.x - r, c = n.y - i, s = a * a + c * c;
                if (s) {
                    var f = .5 + ((u *= u) - (o *= o)) / (2 * s), l = Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) / (2 * s);
                    e.x = r + f * a + l * c, e.y = i + f * c - l * a
                } else e.x = r + u, e.y = i
            }

            function Ho(t, n) {
                var e = n.x - t.x, r = n.y - t.y, i = t.r + n.r;
                return i * i > e * e + r * r
            }

            function Xo(t, n, e) {
                var r = t.x - n, i = t.y - e;
                return r * r + i * i
            }

            function Vo(t) {
                this._ = t, this.next = null, this.previous = null
            }

            function Wo(t) {
                if (!(i = t.length))return 0;
                var n, e, r, i;
                if (n = t[0], n.x = 0, n.y = 0, !(i > 1))return n.r;
                if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2))return n.r + e.r;
                jo(e, n, r = t[2]);
                var o, u, a, c, s, f, l, h = n.r * n.r, p = e.r * e.r, d = r.r * r.r, v = h + p + d, _ = h * n.x + p * e.x + d * r.x, y = h * n.y + p * e.y + d * r.y;
                n = new Vo(n), e = new Vo(e), r = new Vo(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
                t:for (a = 3; a < i; ++a) {
                    if (jo(n._, e._, r = t[a]), r = new Vo(r), (s = n.previous) === (c = e.next)) {
                        if (Ho(c._, r._)) {
                            n = e, e = c, --a;
                            continue t
                        }
                    } else {
                        f = c._.r, l = s._.r;
                        do if (f <= l) {
                            if (Ho(c._, r._)) {
                                e = c, n.next = e, e.previous = n, --a;
                                continue t
                            }
                            c = c.next, f += c._.r
                        } else {
                            if (Ho(s._, r._)) {
                                n = s, n.next = e, e.previous = n, --a;
                                continue t
                            }
                            s = s.previous, l += s._.r
                        } while (c !== s.next)
                    }
                    for (r.previous = n, r.next = e, n.next = e.previous = e = r, v += d = r._.r * r._.r, _ += d * r._.x, y += d * r._.y, h = Xo(n._, o = _ / v, u = y / v); (r = r.next) !== e;)(d = Xo(r._, o, u)) < h && (n = r, h = d);
                    e = n.next
                }
                for (n = [e._], r = e; (r = r.next) !== e;)n.push(r._);
                for (r = xg(n), a = 0; a < i; ++a)n = t[a], n.x -= r.x, n.y -= r.y;
                return r.r
            }

            function $o(t) {
                return null == t ? null : Zo(t)
            }

            function Zo(t) {
                if ("function" != typeof t)throw new Error;
                return t
            }

            function Go() {
                return 0
            }

            function Jo(t) {
                return Math.sqrt(t.value)
            }

            function Qo(t) {
                return function (n) {
                    n.children || (n.r = Math.max(0, +t(n) || 0))
                }
            }

            function Ko(t, n) {
                return function (e) {
                    if (r = e.children) {
                        var r, i, o, u = r.length, a = t(e) * n || 0;
                        if (a)for (i = 0; i < u; ++i)r[i].r += a;
                        if (o = Wo(r), a)for (i = 0; i < u; ++i)r[i].r -= a;
                        e.r = o + a
                    }
                }
            }

            function tu(t) {
                return function (n) {
                    var e = n.parent;
                    n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
                }
            }

            function nu(t) {
                return t.id
            }

            function eu(t) {
                return t.parentId
            }

            function ru(t, n) {
                return t.parent === n.parent ? 1 : 2
            }

            function iu(t) {
                var n = t.children;
                return n ? n[0] : t.t
            }

            function ou(t) {
                var n = t.children;
                return n ? n[n.length - 1] : t.t
            }

            function uu(t, n, e) {
                var r = e / (n.i - t.i);
                n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
            }

            function au(t) {
                for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c)
            }

            function cu(t, n, e) {
                return t.a.parent === n.parent ? t.a : e
            }

            function su(t, n) {
                this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
            }

            function fu(t) {
                for (var n, e, r, i, o, u = new su(t, 0), a = [u]; n = a.pop();)if (r = n._.children)for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i)a.push(e = n.children[i] = new su(r[i], i)), e.parent = n;
                return (u.parent = new su(null, 0)).children = [u], u
            }

            function lu(t, n, e, r, i, o) {
                for (var u, a, c, s, f, l, h, p, d, v, _, y, g = [], m = n.children, x = 0, b = m.length, w = n.value; x < b;) {
                    for (s = i - e, f = o - r, h = p = l = m[x].value, _ = Math.max(f / s, s / f) / (w * t), y = l * l * _, v = Math.max(p / y, y / h), c = x + 1; c < b; ++c) {
                        if (l += a = m[c].value, a < h && (h = a), a > p && (p = a), y = l * l * _, d = Math.max(p / y, y / h), d > v) {
                            l -= a;
                            break
                        }
                        v = d
                    }
                    g.push(u = {
                        value: l,
                        dice: s < f,
                        children: m.slice(x, c)
                    }), u.dice ? Ng(u, e, r, i, w ? r += f * l / w : o) : Pg(u, e, r, w ? e += s * l / w : i, o), w -= l, x = c
                }
                return g
            }

            function hu(t) {
                return t.x + t.vx
            }

            function pu(t) {
                return t.y + t.vy
            }

            function du(t, n) {
                return n
            }

            function vu(t) {
                return t.x
            }

            function _u(t) {
                return t.y
            }

            function yu() {
                t.event.stopImmediatePropagation()
            }

            function gu(t, n) {
                var e = t.document.documentElement, r = dy(t).on("dragstart.drag", null);
                n && (r.on("click.drag", Gg, !0), setTimeout(function () {
                    r.on("click.drag", null)
                }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
            }

            function mu(t, n, e, r, i, o, u, a, c, s) {
                this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s
            }

            function xu() {
                return !t.event.button
            }

            function bu() {
                return this.parentNode
            }

            function wu(n) {
                return null == n ? {x: t.event.x, y: t.event.y} : n
            }

            function Mu(t) {
                return t[0]
            }

            function Tu(t) {
                return t[1]
            }

            function Nu() {
                this._ = null
            }

            function ku(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function Su(t, n) {
                var e = n, r = n.R, i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
            }

            function Au(t, n) {
                var e = n, r = n.L, i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
            }

            function Eu(t) {
                for (; t.L;)t = t.L;
                return t
            }

            function Cu(t, n, e, r) {
                var i = [null, null], o = om.push(i) - 1;
                return i.left = t, i.right = n, e && Pu(i, t, n, e), r && Pu(i, n, t, r), rm[t.index].halfedges.push(o), rm[n.index].halfedges.push(o), i
            }

            function zu(t, n, e) {
                var r = [n, e];
                return r.left = t, r
            }

            function Pu(t, n, e, r) {
                t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
            }

            function qu(t, n, e, r, i) {
                var o, u = t[0], a = t[1], c = u[0], s = u[1], f = a[0], l = a[1], h = 0, p = 1, d = f - c, v = l - s;
                if (o = n - c, d || !(o > 0)) {
                    if (o /= d, d < 0) {
                        if (o < h)return;
                        o < p && (p = o)
                    } else if (d > 0) {
                        if (o > p)return;
                        o > h && (h = o)
                    }
                    if (o = r - c, d || !(o < 0)) {
                        if (o /= d, d < 0) {
                            if (o > p)return;
                            o > h && (h = o)
                        } else if (d > 0) {
                            if (o < h)return;
                            o < p && (p = o)
                        }
                        if (o = e - s, v || !(o > 0)) {
                            if (o /= v, v < 0) {
                                if (o < h)return;
                                o < p && (p = o)
                            } else if (v > 0) {
                                if (o > p)return;
                                o > h && (h = o)
                            }
                            if (o = i - s, v || !(o < 0)) {
                                if (o /= v, v < 0) {
                                    if (o > p)return;
                                    o > h && (h = o)
                                } else if (v > 0) {
                                    if (o < h)return;
                                    o < p && (p = o)
                                }
                                return !(h > 0 || p < 1) || (h > 0 && (t[0] = [c + h * d, s + h * v]), p < 1 && (t[1] = [c + p * d, s + p * v]), !0)
                            }
                        }
                    }
                }
            }

            function Lu(t, n, e, r, i) {
                var o = t[1];
                if (o)return !0;
                var u, a, c = t[0], s = t.left, f = t.right, l = s[0], h = s[1], p = f[0], d = f[1], v = (l + p) / 2, _ = (h + d) / 2;
                if (d === h) {
                    if (v < n || v >= r)return;
                    if (l > p) {
                        if (c) {
                            if (c[1] >= i)return
                        } else c = [v, e];
                        o = [v, i]
                    } else {
                        if (c) {
                            if (c[1] < e)return
                        } else c = [v, i];
                        o = [v, e]
                    }
                } else if (u = (l - p) / (d - h), a = _ - u * v, u < -1 || u > 1)if (l > p) {
                    if (c) {
                        if (c[1] >= i)return
                    } else c = [(e - a) / u, e];
                    o = [(i - a) / u, i]
                } else {
                    if (c) {
                        if (c[1] < e)return
                    } else c = [(i - a) / u, i];
                    o = [(e - a) / u, e]
                } else if (h < d) {
                    if (c) {
                        if (c[0] >= r)return
                    } else c = [n, u * n + a];
                    o = [r, u * r + a]
                } else {
                    if (c) {
                        if (c[0] < n)return
                    } else c = [r, u * r + a];
                    o = [n, u * n + a]
                }
                return t[0] = c, t[1] = o, !0
            }

            function Ru(t, n, e, r) {
                for (var i, o = om.length; o--;)Lu(i = om[o], t, n, e, r) && qu(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > cm || Math.abs(i[0][1] - i[1][1]) > cm) || delete om[o]
            }

            function Uu(t) {
                return rm[t.index] = {site: t, halfedges: []}
            }

            function Du(t, n) {
                var e = t.site, r = n.left, i = n.right;
                return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
            }

            function Ou(t, n) {
                return n[+(n.left !== t.site)]
            }

            function Fu(t, n) {
                return n[+(n.left === t.site)]
            }

            function Iu() {
                for (var t, n, e, r, i = 0, o = rm.length; i < o; ++i)if ((t = rm[i]) && (r = (n = t.halfedges).length)) {
                    var u = new Array(r), a = new Array(r);
                    for (e = 0; e < r; ++e)u[e] = e, a[e] = Du(t, om[n[e]]);
                    for (u.sort(function (t, n) {
                        return a[n] - a[t]
                    }), e = 0; e < r; ++e)a[e] = n[u[e]];
                    for (e = 0; e < r; ++e)n[e] = a[e]
                }
            }

            function Yu(t, n, e, r) {
                var i, o, u, a, c, s, f, l, h, p, d, v, _ = rm.length, y = !0;
                for (i = 0; i < _; ++i)if (o = rm[i]) {
                    for (u = o.site, c = o.halfedges, a = c.length; a--;)om[c[a]] || c.splice(a, 1);
                    for (a = 0, s = c.length; a < s;)p = Fu(o, om[c[a]]), d = p[0], v = p[1], f = Ou(o, om[c[++a % s]]), l = f[0], h = f[1], (Math.abs(d - l) > cm || Math.abs(v - h) > cm) && (c.splice(a, 0, om.push(zu(u, p, Math.abs(d - t) < cm && r - v > cm ? [t, Math.abs(l - t) < cm ? h : r] : Math.abs(v - r) < cm && e - d > cm ? [Math.abs(h - r) < cm ? l : e, r] : Math.abs(d - e) < cm && v - n > cm ? [e, Math.abs(l - e) < cm ? h : n] : Math.abs(v - n) < cm && d - t > cm ? [Math.abs(h - n) < cm ? l : t, n] : null)) - 1), ++s);
                    s && (y = !1)
                }
                if (y) {
                    var g, m, x, b = 1 / 0;
                    for (i = 0, y = null; i < _; ++i)(o = rm[i]) && (u = o.site, g = u[0] - t, m = u[1] - n, x = g * g + m * m, x < b && (b = x, y = o));
                    if (y) {
                        var w = [t, n], M = [t, r], T = [e, r], N = [e, n];
                        y.halfedges.push(om.push(zu(u = y.site, w, M)) - 1, om.push(zu(u, M, T)) - 1, om.push(zu(u, T, N)) - 1, om.push(zu(u, N, w)) - 1)
                    }
                }
                for (i = 0; i < _; ++i)(o = rm[i]) && (o.halfedges.length || delete rm[i])
            }

            function Bu() {
                ku(this), this.x = this.y = this.arc = this.site = this.cy = null
            }

            function ju(t) {
                var n = t.P, e = t.N;
                if (n && e) {
                    var r = n.site, i = t.site, o = e.site;
                    if (r !== o) {
                        var u = i[0], a = i[1], c = r[0] - u, s = r[1] - a, f = o[0] - u, l = o[1] - a, h = 2 * (c * l - s * f);
                        if (!(h >= -sm)) {
                            var p = c * c + s * s, d = f * f + l * l, v = (l * p - s * d) / h, _ = (c * d - f * p) / h, y = um.pop() || new Bu;
                            y.arc = t, y.site = i, y.x = v + u, y.y = (y.cy = _ + a) + Math.sqrt(v * v + _ * _), t.circle = y;
                            for (var g = null, m = im._; m;)if (y.y < m.y || y.y === m.y && y.x <= m.x) {
                                if (!m.L) {
                                    g = m.P;
                                    break
                                }
                                m = m.L
                            } else {
                                if (!m.R) {
                                    g = m;
                                    break
                                }
                                m = m.R
                            }
                            im.insert(g, y), g || (nm = y)
                        }
                    }
                }
            }

            function Hu(t) {
                var n = t.circle;
                n && (n.P || (nm = n.N), im.remove(n), um.push(n), ku(n), t.circle = null)
            }

            function Xu() {
                ku(this), this.edge = this.site = this.circle = null
            }

            function Vu(t) {
                var n = am.pop() || new Xu;
                return n.site = t, n
            }

            function Wu(t) {
                Hu(t), em.remove(t), am.push(t), ku(t)
            }

            function $u(t) {
                var n = t.circle, e = n.x, r = n.cy, i = [e, r], o = t.P, u = t.N, a = [t];
                Wu(t);
                for (var c = o; c.circle && Math.abs(e - c.circle.x) < cm && Math.abs(r - c.circle.cy) < cm;)o = c.P, a.unshift(c), Wu(c), c = o;
                a.unshift(c), Hu(c);
                for (var s = u; s.circle && Math.abs(e - s.circle.x) < cm && Math.abs(r - s.circle.cy) < cm;)u = s.N, a.push(s), Wu(s), s = u;
                a.push(s), Hu(s);
                var f, l = a.length;
                for (f = 1; f < l; ++f)s = a[f], c = a[f - 1], Pu(s.edge, c.site, s.site, i);
                c = a[0], s = a[l - 1], s.edge = Cu(c.site, s.site, null, i), ju(c), ju(s)
            }

            function Zu(t) {
                for (var n, e, r, i, o = t[0], u = t[1], a = em._; a;)if (r = Gu(a, u) - o, r > cm)a = a.L; else {
                    if (i = o - Ju(a, u), !(i > cm)) {
                        r > -cm ? (n = a.P, e = a) : i > -cm ? (n = a, e = a.N) : n = e = a;
                        break
                    }
                    if (!a.R) {
                        n = a;
                        break
                    }
                    a = a.R
                }
                Uu(t);
                var c = Vu(t);
                if (em.insert(n, c), n || e) {
                    if (n === e)return Hu(n), e = Vu(n.site), em.insert(c, e), c.edge = e.edge = Cu(n.site, c.site), ju(n), void ju(e);
                    if (!e)return void(c.edge = Cu(n.site, c.site));
                    Hu(n), Hu(e);
                    var s = n.site, f = s[0], l = s[1], h = t[0] - f, p = t[1] - l, d = e.site, v = d[0] - f, _ = d[1] - l, y = 2 * (h * _ - p * v), g = h * h + p * p, m = v * v + _ * _, x = [(_ * g - p * m) / y + f, (h * m - v * g) / y + l];
                    Pu(e.edge, s, d, x), c.edge = Cu(s, t, null, x), e.edge = Cu(t, d, null, x), ju(n), ju(e)
                }
            }

            function Gu(t, n) {
                var e = t.site, r = e[0], i = e[1], o = i - n;
                if (!o)return r;
                var u = t.P;
                if (!u)return -(1 / 0);
                e = u.site;
                var a = e[0], c = e[1], s = c - n;
                if (!s)return a;
                var f = a - r, l = 1 / o - 1 / s, h = f / s;
                return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2
            }

            function Ju(t, n) {
                var e = t.N;
                if (e)return Gu(e, n);
                var r = t.site;
                return r[1] === n ? r[0] : 1 / 0
            }

            function Qu(t, n, e) {
                return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
            }

            function Ku(t, n) {
                return n[1] - t[1] || n[0] - t[0]
            }

            function ta(t, n) {
                var e, r, i, o = t.sort(Ku).pop();
                for (om = [], rm = new Array(t.length), em = new Nu, im = new Nu; ;)if (i = nm, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x))o[0] === e && o[1] === r || (Zu(o), e = o[0], r = o[1]), o = t.pop(); else {
                    if (!i)break;
                    $u(i.arc)
                }
                if (Iu(), n) {
                    var u = +n[0][0], a = +n[0][1], c = +n[1][0], s = +n[1][1];
                    Ru(u, a, c, s), Yu(u, a, c, s)
                }
                this.edges = om, this.cells = rm, em = im = om = rm = null
            }

            function na(t, n, e) {
                this.target = t, this.type = n, this.transform = e
            }

            function ea(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }

            function ra(t) {
                return t.__zoom || hm
            }

            function ia() {
                t.event.stopImmediatePropagation()
            }

            function oa() {
                return !t.event.button
            }

            function ua() {
                var t, n, e = this;
                return e instanceof SVGElement ? (e = e.ownerSVGElement || e, t = e.width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]]
            }

            function aa() {
                return this.__zoom || hm
            }

            function ca() {
                t.event.stopImmediatePropagation()
            }

            function sa(t) {
                return {type: t}
            }

            function fa() {
                return !t.event.button
            }

            function la() {
                var t = this.ownerSVGElement || this;
                return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
            }

            function ha(t) {
                for (; !t.__brush;)if (!(t = t.parentNode))return;
                return t.__brush
            }

            function pa(t) {
                return t[0][0] === t[1][0] || t[0][1] === t[1][1]
            }

            function da(t) {
                var n = t.__brush;
                return n ? n.dim.output(n.selection) : null
            }

            function va() {
                return ya(wm)
            }

            function _a() {
                return ya(Mm)
            }

            function ya(n) {
                function e(t) {
                    var e = t.property("__brush", a).selectAll(".overlay").data([sa("overlay")]);
                    e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Nm.overlay).merge(e).each(function () {
                        var t = ha(this).extent;
                        dy(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                    }), t.selectAll(".selection").data([sa("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Nm.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                    var i = t.selectAll(".handle").data(n.handles, function (t) {
                        return t.type
                    });
                    i.exit().remove(), i.enter().append("rect").attr("class", function (t) {
                        return "handle handle--" + t.type
                    }).attr("cursor", function (t) {
                        return Nm[t.type]
                    }), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", u)
                }

                function r() {
                    var t = dy(this), n = ha(this).selection;
                    n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
                        return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2
                    }).attr("y", function (t) {
                        return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2
                    }).attr("width", function (t) {
                        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h
                    }).attr("height", function (t) {
                        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h
                    })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
                }

                function i(t, n) {
                    return t.__brush.emitter || new o(t, n)
                }

                function o(t, n) {
                    this.that = t, this.args = n, this.state = t.__brush, this.active = 0
                }

                function u() {
                    function e() {
                        var t = P_(T);
                        !U || w || M || (Math.abs(t[0] - O[0]) > Math.abs(t[1] - O[1]) ? M = !0 : w = !0), O = t, b = !0, ym(), o()
                    }

                    function o() {
                        var t;
                        switch (m = O[0] - D[0], x = O[1] - D[1], k) {
                            case mm:
                            case gm:
                                S && (m = Math.max(P - l, Math.min(L - v, m)), h = l + m, _ = v + m), A && (x = Math.max(q - p, Math.min(R - y, x)), d = p + x, g = y + x);
                                break;
                            case xm:
                                S < 0 ? (m = Math.max(P - l, Math.min(L - l, m)), h = l + m, _ = v) : S > 0 && (m = Math.max(P - v, Math.min(L - v, m)), h = l, _ = v + m), A < 0 ? (x = Math.max(q - p, Math.min(R - p, x)), d = p + x, g = y) : A > 0 && (x = Math.max(q - y, Math.min(R - y, x)), d = p, g = y + x);
                                break;
                            case bm:
                                S && (h = Math.max(P, Math.min(L, l - m * S)), _ = Math.max(P, Math.min(L, v + m * S))), A && (d = Math.max(q, Math.min(R, p - x * A)), g = Math.max(q, Math.min(R, y + x * A)))
                        }
                        _ < h && (S *= -1, t = l, l = v, v = t, t = h, h = _, _ = t, N in km && Y.attr("cursor", Nm[N = km[N]])), g < d && (A *= -1, t = p, p = y, y = t, t = d, d = g, g = t, N in Sm && Y.attr("cursor", Nm[N = Sm[N]])), E.selection && (z = E.selection), w && (h = z[0][0], _ = z[1][0]), M && (d = z[0][1], g = z[1][1]), z[0][0] === h && z[0][1] === d && z[1][0] === _ && z[1][1] === g || (E.selection = [[h, d], [_, g]], r.call(T), F.brush())
                    }

                    function u() {
                        if (ca(), t.event.touches) {
                            if (t.event.touches.length)return;
                            c && clearTimeout(c), c = setTimeout(function () {
                                c = null
                            }, 500), I.on("touchmove.brush touchend.brush touchcancel.brush", null)
                        } else gu(t.event.view, b), B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                        I.attr("pointer-events", "all"), Y.attr("cursor", Nm.overlay), E.selection && (z = E.selection), pa(z) && (E.selection = null, r.call(T)), F.end()
                    }

                    function a() {
                        switch (t.event.keyCode) {
                            case 16:
                                U = S && A;
                                break;
                            case 18:
                                k === xm && (S && (v = _ - m * S, l = h + m * S), A && (y = g - x * A, p = d + x * A), k = bm, o());
                                break;
                            case 32:
                                k !== xm && k !== bm || (S < 0 ? v = _ - m : S > 0 && (l = h - m), A < 0 ? y = g - x : A > 0 && (p = d - x), k = mm, Y.attr("cursor", Nm.selection), o());
                                break;
                            default:
                                return
                        }
                        ym()
                    }

                    function s() {
                        switch (t.event.keyCode) {
                            case 16:
                                U && (w = M = U = !1, o());
                                break;
                            case 18:
                                k === bm && (S < 0 ? v = _ : S > 0 && (l = h), A < 0 ? y = g : A > 0 && (p = d), k = xm, o());
                                break;
                            case 32:
                                k === mm && (t.event.altKey ? (S && (v = _ - m * S, l = h + m * S), A && (y = g - x * A, p = d + x * A), k = bm) : (S < 0 ? v = _ : S > 0 && (l = h), A < 0 ? y = g : A > 0 && (p = d), k = xm), Y.attr("cursor", Nm[N]), o());
                                break;
                            default:
                                return
                        }
                        ym()
                    }

                    if (t.event.touches) {
                        if (t.event.changedTouches.length < t.event.touches.length)return ym()
                    } else if (c)return;
                    if (f.apply(this, arguments)) {
                        var l, h, p, d, v, _, y, g, m, x, b, w, M, T = this, N = t.event.target.__data__.type, k = "selection" === (t.event.metaKey ? N = "overlay" : N) ? gm : t.event.altKey ? bm : xm, S = n === Mm ? null : Am[N], A = n === wm ? null : Em[N], E = ha(T), C = E.extent, z = E.selection, P = C[0][0], q = C[0][1], L = C[1][0], R = C[1][1], U = S && A && t.event.shiftKey, D = P_(T), O = D, F = i(T, arguments).beforestart();
                        "overlay" === N ? E.selection = z = [[l = n === Mm ? P : D[0], p = n === wm ? q : D[1]], [v = n === Mm ? L : l, y = n === wm ? R : p]] : (l = z[0][0], p = z[0][1], v = z[1][0], y = z[1][1]), h = l, d = p, _ = v, g = y;
                        var I = dy(T).attr("pointer-events", "none"), Y = I.selectAll(".overlay").attr("cursor", Nm[N]);
                        if (t.event.touches)I.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", u, !0); else {
                            var B = dy(t.event.view).on("keydown.brush", a, !0).on("keyup.brush", s, !0).on("mousemove.brush", e, !0).on("mouseup.brush", u, !0);
                            Jg(t.event.view)
                        }
                        ca(), Ay(T), r.call(T), F.start()
                    }
                }

                function a() {
                    var t = this.__brush || {selection: null};
                    return t.extent = s.apply(this, arguments), t.dim = n, t
                }

                var c, s = la, f = fa, l = Pn(e, "start", "brush", "end"), h = 6;
                return e.move = function (t, e) {
                    t.selection ? t.on("start.brush", function () {
                        i(this, arguments).beforestart().start()
                    }).on("interrupt.brush end.brush", function () {
                        i(this, arguments).end()
                    }).tween("brush", function () {
                        function t(t) {
                            u.selection = 1 === t && pa(s) ? null : f(t), r.call(o), a.brush()
                        }

                        var o = this, u = o.__brush, a = i(o, arguments), c = u.selection, s = n.input("function" == typeof e ? e.apply(this, arguments) : e, u.extent), f = hp(c, s);
                        return c && s ? t : t(1);
                    }) : t.each(function () {
                        var t = this, o = arguments, u = t.__brush, a = n.input("function" == typeof e ? e.apply(t, o) : e, u.extent), c = i(t, o).beforestart();
                        Ay(t), u.selection = null == a || pa(a) ? null : a, r.call(t), c.start().brush().end()
                    })
                }, o.prototype = {
                    beforestart: function () {
                        return 1 === ++this.active && (this.state.emitter = this, this.starting = !0), this
                    }, start: function () {
                        return this.starting && (this.starting = !1, this.emit("start")), this
                    }, brush: function () {
                        return this.emit("brush"), this
                    }, end: function () {
                        return 0 === --this.active && (delete this.state.emitter, this.emit("end")), this
                    }, emit: function (t) {
                        Xr(new _m(e, t, n.output(this.state.selection)), l.apply, l, [t, this.that, this.args])
                    }
                }, e.extent = function (t) {
                    return arguments.length ? (s = "function" == typeof t ? t : vm([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), e) : s
                }, e.filter = function (t) {
                    return arguments.length ? (f = "function" == typeof t ? t : vm(!!t), e) : f
                }, e.handleSize = function (t) {
                    return arguments.length ? (h = +t, e) : h
                }, e.on = function () {
                    var t = l.on.apply(l, arguments);
                    return t === l ? e : t
                }, e
            }

            function ga(t) {
                return function (n, e) {
                    return t(n.source.value + n.target.value, e.source.value + e.target.value)
                }
            }

            function ma(t) {
                return t.source
            }

            function xa(t) {
                return t.target
            }

            function ba(t) {
                return t.radius
            }

            function wa(t) {
                return t.startAngle
            }

            function Ma(t) {
                return t.endAngle
            }

            function Ta() {
                this.reset()
            }

            function Na(t, n, e) {
                var r = t.s = n + e, i = r - n, o = r - i;
                t.t = n - o + (e - i)
            }

            function ka(t) {
                return t > 1 ? 0 : t < -1 ? wx : Math.acos(t)
            }

            function Sa(t) {
                return t > 1 ? Mx : t < -1 ? -Mx : Math.asin(t)
            }

            function Aa(t) {
                return (t = Ux(t / 2)) * t
            }

            function Ea() {
            }

            function Ca(t, n) {
                t && Yx.hasOwnProperty(t.type) && Yx[t.type](t, n)
            }

            function za(t, n, e) {
                var r, i = -1, o = t.length - e;
                for (n.lineStart(); ++i < o;)r = t[i], n.point(r[0], r[1], r[2]);
                n.lineEnd()
            }

            function Pa(t, n) {
                var e = -1, r = t.length;
                for (n.polygonStart(); ++e < r;)za(t[e], n, 1);
                n.polygonEnd()
            }

            function qa() {
                Xx.point = Ra
            }

            function La() {
                Ua(Bm, jm)
            }

            function Ra(t, n) {
                Xx.point = Ua, Bm = t, jm = n, t *= Sx, n *= Sx, Hm = t, Xm = zx(n = n / 2 + Tx), Vm = Ux(n)
            }

            function Ua(t, n) {
                t *= Sx, n *= Sx, n = n / 2 + Tx;
                var e = t - Hm, r = e >= 0 ? 1 : -1, i = r * e, o = zx(n), u = Ux(n), a = Vm * u, c = Xm * o + a * zx(i), s = a * r * Ux(i);
                jx.add(Cx(s, c)), Hm = t, Xm = o, Vm = u
            }

            function Da(t) {
                return [Cx(t[1], t[0]), Sa(t[2])]
            }

            function Oa(t) {
                var n = t[0], e = t[1], r = zx(e);
                return [r * zx(n), r * Ux(n), Ux(e)]
            }

            function Fa(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }

            function Ia(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function Ya(t, n) {
                t[0] += n[0], t[1] += n[1], t[2] += n[2]
            }

            function Ba(t, n) {
                return [t[0] * n, t[1] * n, t[2] * n]
            }

            function ja(t) {
                var n = Ox(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }

            function Ha(t, n) {
                nx.push(ex = [Wm = t, Zm = t]), n < $m && ($m = n), n > Gm && (Gm = n)
            }

            function Xa(t, n) {
                var e = Oa([t * Sx, n * Sx]);
                if (tx) {
                    var r = Ia(tx, e), i = [r[1], -r[0], 0], o = Ia(i, r);
                    ja(o), o = Da(o);
                    var u, a = t - Jm, c = a > 0 ? 1 : -1, s = o[0] * kx * c, f = Ax(a) > 180;
                    f ^ (c * Jm < s && s < c * t) ? (u = o[1] * kx, u > Gm && (Gm = u)) : (s = (s + 360) % 360 - 180, f ^ (c * Jm < s && s < c * t) ? (u = -o[1] * kx, u < $m && ($m = u)) : (n < $m && ($m = n), n > Gm && (Gm = n))), f ? t < Jm ? Ja(Wm, t) > Ja(Wm, Zm) && (Zm = t) : Ja(t, Zm) > Ja(Wm, Zm) && (Wm = t) : Zm >= Wm ? (t < Wm && (Wm = t), t > Zm && (Zm = t)) : t > Jm ? Ja(Wm, t) > Ja(Wm, Zm) && (Zm = t) : Ja(t, Zm) > Ja(Wm, Zm) && (Wm = t)
                } else Ha(t, n);
                tx = e, Jm = t
            }

            function Va() {
                $x.point = Xa
            }

            function Wa() {
                ex[0] = Wm, ex[1] = Zm, $x.point = Ha, tx = null
            }

            function $a(t, n) {
                if (tx) {
                    var e = t - Jm;
                    Wx.add(Ax(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
                } else Qm = t, Km = n;
                Xx.point(t, n), Xa(t, n)
            }

            function Za() {
                Xx.lineStart()
            }

            function Ga() {
                $a(Qm, Km), Xx.lineEnd(), Ax(Wx) > xx && (Wm = -(Zm = 180)), ex[0] = Wm, ex[1] = Zm, tx = null
            }

            function Ja(t, n) {
                return (n -= t) < 0 ? n + 360 : n
            }

            function Qa(t, n) {
                return t[0] - n[0]
            }

            function Ka(t, n) {
                return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
            }

            function tc(t, n) {
                t *= Sx, n *= Sx;
                var e = zx(n);
                nc(e * zx(t), e * Ux(t), Ux(n))
            }

            function nc(t, n, e) {
                ++rx, ox += (t - ox) / rx, ux += (n - ux) / rx, ax += (e - ax) / rx
            }

            function ec() {
                Gx.point = rc
            }

            function rc(t, n) {
                t *= Sx, n *= Sx;
                var e = zx(n);
                _x = e * zx(t), yx = e * Ux(t), gx = Ux(n), Gx.point = ic, nc(_x, yx, gx)
            }

            function ic(t, n) {
                t *= Sx, n *= Sx;
                var e = zx(n), r = e * zx(t), i = e * Ux(t), o = Ux(n), u = Cx(Ox((u = yx * o - gx * i) * u + (u = gx * r - _x * o) * u + (u = _x * i - yx * r) * u), _x * r + yx * i + gx * o);
                ix += u, cx += u * (_x + (_x = r)), sx += u * (yx + (yx = i)), fx += u * (gx + (gx = o)), nc(_x, yx, gx)
            }

            function oc() {
                Gx.point = tc
            }

            function uc() {
                Gx.point = cc
            }

            function ac() {
                sc(dx, vx), Gx.point = tc
            }

            function cc(t, n) {
                dx = t, vx = n, t *= Sx, n *= Sx, Gx.point = sc;
                var e = zx(n);
                _x = e * zx(t), yx = e * Ux(t), gx = Ux(n), nc(_x, yx, gx)
            }

            function sc(t, n) {
                t *= Sx, n *= Sx;
                var e = zx(n), r = e * zx(t), i = e * Ux(t), o = Ux(n), u = yx * o - gx * i, a = gx * r - _x * o, c = _x * i - yx * r, s = Ox(u * u + a * a + c * c), f = _x * r + yx * i + gx * o, l = s && -ka(f) / s, h = Cx(s, f);
                lx += l * u, hx += l * a, px += l * c, ix += h, cx += h * (_x + (_x = r)), sx += h * (yx + (yx = i)), fx += h * (gx + (gx = o)), nc(_x, yx, gx)
            }

            function fc(t, n) {
                return [t > wx ? t - Nx : t < -wx ? t + Nx : t, n]
            }

            function lc(t, n, e) {
                return (t %= Nx) ? n || e ? Kx(pc(t), dc(n, e)) : pc(t) : n || e ? dc(n, e) : fc
            }

            function hc(t) {
                return function (n, e) {
                    return n += t, [n > wx ? n - Nx : n < -wx ? n + Nx : n, e]
                }
            }

            function pc(t) {
                var n = hc(t);
                return n.invert = hc(-t), n
            }

            function dc(t, n) {
                function e(t, n) {
                    var e = zx(n), a = zx(t) * e, c = Ux(t) * e, s = Ux(n), f = s * r + a * i;
                    return [Cx(c * o - f * u, a * r - s * i), Sa(f * o + c * u)]
                }

                var r = zx(t), i = Ux(t), o = zx(n), u = Ux(n);
                return e.invert = function (t, n) {
                    var e = zx(n), a = zx(t) * e, c = Ux(t) * e, s = Ux(n), f = s * o - c * u;
                    return [Cx(c * o + s * u, a * r + f * i), Sa(f * r - a * i)]
                }, e
            }

            function vc(t, n, e, r, i, o) {
                if (e) {
                    var u = zx(n), a = Ux(n), c = r * e;
                    null == i ? (i = n + r * Nx, o = n - c / 2) : (i = _c(u, i), o = _c(u, o), (r > 0 ? i < o : i > o) && (i += r * Nx));
                    for (var s, f = i; r > 0 ? f > o : f < o; f -= c)s = Da([u, -a * zx(f), -a * Ux(f)]), t.point(s[0], s[1])
                }
            }

            function _c(t, n) {
                n = Oa(n), n[0] -= t, ja(n);
                var e = ka(-n[1]);
                return ((-n[2] < 0 ? -e : e) + Nx - xx) % Nx
            }

            function yc(t, n, e, r) {
                this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
            }

            function gc(t) {
                if (n = t.length) {
                    for (var n, e, r = 0, i = t[0]; ++r < n;)i.n = e = t[r], e.p = i, i = e;
                    i.n = e = t[0], e.p = i
                }
            }

            function mc(t, n, e, r) {
                function i(i, o) {
                    return t <= i && i <= e && n <= o && o <= r
                }

                function o(i, o, a, s) {
                    var f = 0, l = 0;
                    if (null == i || (f = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0) {
                        do s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n); while ((f = (f + a + 4) % 4) !== l)
                    } else s.point(o[0], o[1])
                }

                function u(r, i) {
                    return Ax(r[0] - t) < xx ? i > 0 ? 0 : 3 : Ax(r[0] - e) < xx ? i > 0 ? 2 : 1 : Ax(r[1] - n) < xx ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                }

                function a(t, n) {
                    return c(t.x, n.x)
                }

                function c(t, n) {
                    var e = u(t, 1), r = u(n, 1);
                    return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
                }

                return function (u) {
                    function c(t, n) {
                        i(t, n) && k.point(t, n)
                    }

                    function s() {
                        for (var n = 0, e = 0, i = _.length; e < i; ++e)for (var o, u, a = _[e], c = 1, s = a.length, f = a[0], l = f[0], h = f[1]; c < s; ++c)o = l, u = h, f = a[c], l = f[0], h = f[1], u <= r ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n : h <= r && (l - o) * (r - u) < (h - u) * (t - o) && --n;
                        return n
                    }

                    function f() {
                        k = S, v = [], _ = [], N = !0
                    }

                    function l() {
                        var t = s(), n = N && t, e = (v = Ws(v)).length;
                        (n || e) && (u.polygonStart(), n && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), e && _b(v, a, t, o, u), u.polygonEnd()), k = u, v = _ = y = null
                    }

                    function h() {
                        A.point = d, _ && _.push(y = []), T = !0, M = !1, b = w = NaN
                    }

                    function p() {
                        v && (d(g, m), x && M && S.rejoin(), v.push(S.result())), A.point = c, M && k.lineEnd()
                    }

                    function d(o, u) {
                        var a = i(o, u);
                        if (_ && y.push([o, u]), T)g = o, m = u, x = a, T = !1, a && (k.lineStart(), k.point(o, u)); else if (a && M)k.point(o, u); else {
                            var c = [b = Math.max(gb, Math.min(yb, b)), w = Math.max(gb, Math.min(yb, w))], s = [o = Math.max(gb, Math.min(yb, o)), u = Math.max(gb, Math.min(yb, u))];
                            db(c, s, t, n, e, r) ? (M || (k.lineStart(), k.point(c[0], c[1])), k.point(s[0], s[1]), a || k.lineEnd(), N = !1) : a && (k.lineStart(), k.point(o, u), N = !1)
                        }
                        b = o, w = u, M = a
                    }

                    var v, _, y, g, m, x, b, w, M, T, N, k = u, S = pb(), A = {
                        point: c,
                        lineStart: h,
                        lineEnd: p,
                        polygonStart: f,
                        polygonEnd: l
                    };
                    return A
                }
            }

            function xc() {
                bb.point = wc, bb.lineEnd = bc
            }

            function bc() {
                bb.point = bb.lineEnd = Ea
            }

            function wc(t, n) {
                t *= Sx, n *= Sx, tb = t, nb = Ux(n), eb = zx(n), bb.point = Mc
            }

            function Mc(t, n) {
                t *= Sx, n *= Sx;
                var e = Ux(n), r = zx(n), i = Ax(t - tb), o = zx(i), u = Ux(i), a = r * u, c = eb * e - nb * r * o, s = nb * e + eb * r * o;
                xb.add(Cx(Ox(a * a + c * c), s)), tb = t, nb = e, eb = r
            }

            function Tc(t, n, e) {
                var r = Ls(t, n - xx, e).concat(n);
                return function (t) {
                    return r.map(function (n) {
                        return [t, n]
                    })
                }
            }

            function Nc(t, n, e) {
                var r = Ls(t, n - xx, e).concat(n);
                return function (t) {
                    return r.map(function (n) {
                        return [n, t]
                    })
                }
            }

            function kc() {
                zb.point = Sc
            }

            function Sc(t, n) {
                zb.point = Ac, rb = ob = t, ib = ub = n
            }

            function Ac(t, n) {
                Cb.add(ub * t - ob * n), ob = t, ub = n
            }

            function Ec() {
                Ac(rb, ib)
            }

            function Cc(t, n) {
                t < Pb && (Pb = t), t > Lb && (Lb = t), n < qb && (qb = n), n > Rb && (Rb = n)
            }

            function zc(t, n) {
                Db += t, Ob += n, ++Fb
            }

            function Pc() {
                Vb.point = qc
            }

            function qc(t, n) {
                Vb.point = Lc, zc(sb = t, fb = n)
            }

            function Lc(t, n) {
                var e = t - sb, r = n - fb, i = Ox(e * e + r * r);
                Ib += i * (sb + t) / 2, Yb += i * (fb + n) / 2, Bb += i, zc(sb = t, fb = n)
            }

            function Rc() {
                Vb.point = zc
            }

            function Uc() {
                Vb.point = Oc
            }

            function Dc() {
                Fc(ab, cb)
            }

            function Oc(t, n) {
                Vb.point = Fc, zc(ab = sb = t, cb = fb = n)
            }

            function Fc(t, n) {
                var e = t - sb, r = n - fb, i = Ox(e * e + r * r);
                Ib += i * (sb + t) / 2, Yb += i * (fb + n) / 2, Bb += i, i = fb * t - sb * n, jb += i * (sb + t), Hb += i * (fb + n), Xb += 3 * i, zc(sb = t, fb = n)
            }

            function Ic(t) {
                this._context = t
            }

            function Yc() {
                this._string = []
            }

            function Bc(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }

            function jc(t) {
                return t.length > 1
            }

            function Hc(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - Mx - xx : Mx - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Mx - xx : Mx - n[1])
            }

            function Xc(t) {
                var n, e = NaN, r = NaN, i = NaN;
                return {
                    lineStart: function () {
                        t.lineStart(), n = 1
                    }, point: function (o, u) {
                        var a = o > 0 ? wx : -wx, c = Ax(o - e);
                        Ax(c - wx) < xx ? (t.point(e, r = (r + u) / 2 > 0 ? Mx : -Mx), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= wx && (Ax(e - i) < xx && (e -= i * xx), Ax(o - a) < xx && (o -= a * xx), r = Vc(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
                    }, lineEnd: function () {
                        t.lineEnd(), e = r = NaN
                    }, clean: function () {
                        return 2 - n
                    }
                }
            }

            function Vc(t, n, e, r) {
                var i, o, u = Ux(t - e);
                return Ax(u) > xx ? Ex((Ux(n) * (o = zx(r)) * Ux(e) - Ux(r) * (i = zx(n)) * Ux(t)) / (i * o * u)) : (n + r) / 2
            }

            function Wc(t, n, e, r) {
                var i;
                if (null == t)i = e * Mx, r.point(-wx, i), r.point(0, i), r.point(wx, i), r.point(wx, 0), r.point(wx, -i), r.point(0, -i), r.point(-wx, -i), r.point(-wx, 0), r.point(-wx, i); else if (Ax(t[0] - n[0]) > xx) {
                    var o = t[0] < n[0] ? wx : -wx;
                    i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
                } else r.point(n[0], n[1])
            }

            function $c(t) {
                function n() {
                }

                var e = n.prototype = Object.create(Zc.prototype);
                for (var r in t)e[r] = t[r];
                return function (t) {
                    var e = new n;
                    return e.stream = t, e
                }
            }

            function Zc() {
            }

            function Gc(t, n, e) {
                var r = n[1][0] - n[0][0], i = n[1][1] - n[0][1], o = t.clipExtent && t.clipExtent();
                t.scale(150).translate([0, 0]), null != o && t.clipExtent(null), Bx(e, t.stream(Ub));
                var u = Ub.result(), a = Math.min(r / (u[1][0] - u[0][0]), i / (u[1][1] - u[0][1])), c = +n[0][0] + (r - a * (u[1][0] + u[0][0])) / 2, s = +n[0][1] + (i - a * (u[1][1] + u[0][1])) / 2;
                return null != o && t.clipExtent(o), t.scale(150 * a).translate([c, s])
            }

            function Jc(t) {
                return function (n, e) {
                    return Gc(t, [[0, 0], n], e)
                }
            }

            function Qc(t) {
                return function (n, e) {
                    return Gc(t, n, e)
                }
            }

            function Kc(t) {
                return $c({
                    point: function (n, e) {
                        n = t(n, e), this.stream.point(n[0], n[1])
                    }
                })
            }

            function ts(t, n) {
                function e(r, i, o, u, a, c, s, f, l, h, p, d, v, _) {
                    var y = s - r, g = f - i, m = y * y + g * g;
                    if (m > 4 * n && v--) {
                        var x = u + h, b = a + p, w = c + d, M = Ox(x * x + b * b + w * w), T = Sa(w /= M), N = Ax(Ax(w) - 1) < xx || Ax(o - l) < xx ? (o + l) / 2 : Cx(b, x), k = t(N, T), S = k[0], A = k[1], E = S - r, C = A - i, z = g * E - y * C;
                        (z * z / m > n || Ax((y * E + g * C) / m - .5) > .3 || u * h + a * p + c * d < nw) && (e(r, i, o, u, a, c, S, A, N, x /= M, b /= M, w, v, _), _.point(S, A), e(S, A, N, x, b, w, s, f, l, h, p, d, v, _))
                    }
                }

                return function (n) {
                    function r(e, r) {
                        e = t(e, r), n.point(e[0], e[1])
                    }

                    function i() {
                        y = NaN, w.point = o, n.lineStart()
                    }

                    function o(r, i) {
                        var o = Oa([r, i]), u = t(r, i);
                        e(y, g, _, m, x, b, y = u[0], g = u[1], _ = r, m = o[0], x = o[1], b = o[2], tw, n), n.point(y, g)
                    }

                    function u() {
                        w.point = r, n.lineEnd()
                    }

                    function a() {
                        i(), w.point = c, w.lineEnd = s
                    }

                    function c(t, n) {
                        o(f = t, n), l = y, h = g, p = m, d = x, v = b, w.point = o
                    }

                    function s() {
                        e(y, g, _, m, x, b, l, h, f, p, d, v, tw, n), w.lineEnd = u, u()
                    }

                    var f, l, h, p, d, v, _, y, g, m, x, b, w = {
                        point: r,
                        lineStart: i,
                        lineEnd: u,
                        polygonStart: function () {
                            n.polygonStart(), w.lineStart = a
                        },
                        polygonEnd: function () {
                            n.polygonEnd(), w.lineStart = i
                        }
                    };
                    return w
                }
            }

            function ns(t) {
                return es(function () {
                    return t
                })()
            }

            function es(t) {
                function n(t) {
                    return t = f(t[0] * Sx, t[1] * Sx), [t[0] * _ + a, c - t[1] * _]
                }

                function e(t) {
                    return t = f.invert((t[0] - a) / _, (c - t[1]) / _), t && [t[0] * kx, t[1] * kx]
                }

                function r(t, n) {
                    return t = u(t, n), [t[0] * _ + a, c - t[1] * _]
                }

                function i() {
                    f = Kx(s = lc(b, w, M), u);
                    var t = u(m, x);
                    return a = y - t[0] * _, c = g + t[1] * _, o()
                }

                function o() {
                    return d = v = null, n
                }

                var u, a, c, s, f, l, h, p, d, v, _ = 150, y = 480, g = 250, m = 0, x = 0, b = 0, w = 0, M = 0, T = null, N = Jb, k = null, S = Ab, A = .5, E = ew(r, A);
                return n.stream = function (t) {
                    return d && v === t ? d : d = rw(N(s, E(S(v = t))))
                }, n.clipAngle = function (t) {
                    return arguments.length ? (N = +t ? Qb(T = t * Sx, 6 * Sx) : (T = null, Jb), o()) : T * kx
                }, n.clipExtent = function (t) {
                    return arguments.length ? (S = null == t ? (k = l = h = p = null, Ab) : mc(k = +t[0][0], l = +t[0][1], h = +t[1][0], p = +t[1][1]), o()) : null == k ? null : [[k, l], [h, p]]
                }, n.scale = function (t) {
                    return arguments.length ? (_ = +t, i()) : _
                }, n.translate = function (t) {
                    return arguments.length ? (y = +t[0], g = +t[1], i()) : [y, g]
                }, n.center = function (t) {
                    return arguments.length ? (m = t[0] % 360 * Sx, x = t[1] % 360 * Sx, i()) : [m * kx, x * kx]
                }, n.rotate = function (t) {
                    return arguments.length ? (b = t[0] % 360 * Sx, w = t[1] % 360 * Sx, M = t.length > 2 ? t[2] % 360 * Sx : 0, i()) : [b * kx, w * kx, M * kx]
                }, n.precision = function (t) {
                    return arguments.length ? (E = ew(r, A = t * t), o()) : Ox(A)
                }, n.fitExtent = Qc(n), n.fitSize = Jc(n), function () {
                    return u = t.apply(this, arguments), n.invert = u.invert && e, i()
                }
            }

            function rs(t) {
                var n = 0, e = wx / 3, r = es(t), i = r(n, e);
                return i.parallels = function (t) {
                    return arguments.length ? r(n = t[0] * Sx, e = t[1] * Sx) : [n * kx, e * kx]
                }, i
            }

            function is(t, n) {
                function e(t, n) {
                    var e = Ox(o - 2 * i * Ux(n)) / i;
                    return [e * Ux(t *= i), u - e * zx(t)]
                }

                var r = Ux(t), i = (r + Ux(n)) / 2, o = 1 + r * (2 * i - r), u = Ox(o) / i;
                return e.invert = function (t, n) {
                    var e = u - n;
                    return [Cx(t, e) / i, Sa((o - (t * t + e * e) * i * i) / (2 * i))]
                }, e
            }

            function os(t) {
                var n = t.length;
                return {
                    point: function (e, r) {
                        for (var i = -1; ++i < n;)t[i].point(e, r)
                    }, sphere: function () {
                        for (var e = -1; ++e < n;)t[e].sphere()
                    }, lineStart: function () {
                        for (var e = -1; ++e < n;)t[e].lineStart()
                    }, lineEnd: function () {
                        for (var e = -1; ++e < n;)t[e].lineEnd()
                    }, polygonStart: function () {
                        for (var e = -1; ++e < n;)t[e].polygonStart()
                    }, polygonEnd: function () {
                        for (var e = -1; ++e < n;)t[e].polygonEnd()
                    }
                }
            }

            function us(t) {
                return function (n, e) {
                    var r = zx(n), i = zx(e), o = t(r * i);
                    return [o * i * Ux(n), o * Ux(e)]
                }
            }

            function as(t) {
                return function (n, e) {
                    var r = Ox(n * n + e * e), i = t(r), o = Ux(i), u = zx(i);
                    return [Cx(n * o, r * u), Sa(r && e * o / r)]
                }
            }

            function cs(t, n) {
                return [t, Lx(Fx((Mx + n) / 2))]
            }

            function ss(t) {
                var n, e = ns(t), r = e.scale, i = e.translate, o = e.clipExtent;
                return e.scale = function (t) {
                    return arguments.length ? (r(t), n && e.clipExtent(null), e) : r()
                }, e.translate = function (t) {
                    return arguments.length ? (i(t), n && e.clipExtent(null), e) : i()
                }, e.clipExtent = function (t) {
                    if (!arguments.length)return n ? null : o();
                    if (n = null == t) {
                        var u = wx * r(), a = i();
                        t = [[a[0] - u, a[1] - u], [a[0] + u, a[1] + u]]
                    }
                    return o(t), e
                }, e.clipExtent(null)
            }

            function fs(t) {
                return Fx((Mx + t) / 2)
            }

            function ls(t, n) {
                function e(t, n) {
                    o > 0 ? n < -Mx + xx && (n = -Mx + xx) : n > Mx - xx && (n = Mx - xx);
                    var e = o / Rx(fs(n), i);
                    return [e * Ux(i * t), o - e * zx(i * t)]
                }

                var r = zx(t), i = t === n ? Ux(t) : Lx(r / zx(n)) / Lx(fs(n) / fs(t)), o = r * Rx(fs(t), i) / i;
                return i ? (e.invert = function (t, n) {
                    var e = o - n, r = Dx(i) * Ox(t * t + e * e);
                    return [Cx(t, e) / i, 2 * Ex(Rx(o / r, 1 / i)) - Mx]
                }, e) : cs
            }

            function hs(t, n) {
                return [t, n]
            }

            function ps(t, n) {
                function e(t, n) {
                    var e = o - n, r = i * t;
                    return [e * Ux(r), o - e * zx(r)]
                }

                var r = zx(t), i = t === n ? Ux(t) : (r - zx(n)) / (n - t), o = r / i + t;
                return Ax(i) < xx ? hs : (e.invert = function (t, n) {
                    var e = o - n;
                    return [Cx(t, e) / i, o - Dx(i) * Ox(t * t + e * e)]
                }, e)
            }

            function ds(t, n) {
                var e = zx(n), r = zx(t) * e;
                return [e * Ux(t) / r, Ux(n) / r]
            }

            function vs(t, n) {
                return [zx(n) * Ux(t), Ux(n)]
            }

            function _s(t, n) {
                var e = zx(n), r = 1 + zx(t) * e;
                return [e * Ux(t) / r, Ux(n) / r]
            }

            function ys(t, n) {
                return [Lx(Fx((Mx + n) / 2)), -t]
            }

            var gs = "4.2.6", ms = function (t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }, xs = function (t) {
                return 1 === t.length && (t = n(t)), {
                    left: function (n, e, r, i) {
                        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) < 0 ? r = o + 1 : i = o
                        }
                        return r
                    }, right: function (n, e, r, i) {
                        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) > 0 ? i = o : r = o + 1
                        }
                        return r
                    }
                }
            }, bs = xs(ms), ws = bs.right, Ms = bs.left, Ts = function (t, n) {
                return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }, Ns = function (t) {
                return null === t ? NaN : +t
            }, ks = function (t, n) {
                var e, r, i = t.length, o = 0, u = 0, a = -1, c = 0;
                if (null == n)for (; ++a < i;)isNaN(e = Ns(t[a])) || (r = e - o, o += r / ++c, u += r * (e - o)); else for (; ++a < i;)isNaN(e = Ns(n(t[a], a, t))) || (r = e - o, o += r / ++c, u += r * (e - o));
                if (c > 1)return u / (c - 1)
            }, Ss = function (t, n) {
                var e = ks(t, n);
                return e ? Math.sqrt(e) : e
            }, As = function (t, n) {
                var e, r, i, o = -1, u = t.length;
                if (null == n) {
                    for (; ++o < u;)if (null != (r = t[o]) && r >= r) {
                        e = i = r;
                        break
                    }
                    for (; ++o < u;)null != (r = t[o]) && (e > r && (e = r), i < r && (i = r))
                } else {
                    for (; ++o < u;)if (null != (r = n(t[o], o, t)) && r >= r) {
                        e = i = r;
                        break
                    }
                    for (; ++o < u;)null != (r = n(t[o], o, t)) && (e > r && (e = r), i < r && (i = r))
                }
                return [e, i]
            }, Es = Array.prototype, Cs = Es.slice, zs = Es.map, Ps = function (t) {
                return function () {
                    return t
                }
            }, qs = function (t) {
                return t
            }, Ls = function (t, n, e) {
                t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;)o[r] = t + r * e;
                return o
            }, Rs = Math.sqrt(50), Us = Math.sqrt(10), Ds = Math.sqrt(2), Os = function (t, n, r) {
                var i = e(t, n, r);
                return Ls(Math.ceil(t / i) * i, Math.floor(n / i) * i + i / 2, i)
            }, Fs = function (t) {
                return Math.ceil(Math.log(t.length) / Math.LN2) + 1
            }, Is = function () {
                function t(t) {
                    var i, o, u = t.length, a = new Array(u);
                    for (i = 0; i < u; ++i)a[i] = n(t[i], i, t);
                    var c = e(a), s = c[0], f = c[1], l = r(a, s, f);
                    Array.isArray(l) || (l = Os(s, f, l));
                    for (var h = l.length; l[0] <= s;)l.shift(), --h;
                    for (; l[h - 1] >= f;)l.pop(), --h;
                    var p, d = new Array(h + 1);
                    for (i = 0; i <= h; ++i)p = d[i] = [], p.x0 = i > 0 ? l[i - 1] : s, p.x1 = i < h ? l[i] : f;
                    for (i = 0; i < u; ++i)o = a[i], s <= o && o <= f && d[ws(l, o, 0, h)].push(t[i]);
                    return d
                }

                var n = qs, e = As, r = Fs;
                return t.value = function (e) {
                    return arguments.length ? (n = "function" == typeof e ? e : Ps(e), t) : n
                }, t.domain = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : Ps([n[0], n[1]]), t) : e
                }, t.thresholds = function (n) {
                    return arguments.length ? (r = "function" == typeof n ? n : Ps(Array.isArray(n) ? Cs.call(n) : n), t) : r
                }, t
            }, Ys = function (t, n, e) {
                if (null == e && (e = Ns), r = t.length) {
                    if ((n = +n) <= 0 || r < 2)return +e(t[0], 0, t);
                    if (n >= 1)return +e(t[r - 1], r - 1, t);
                    var r, i = (r - 1) * n, o = Math.floor(i), u = +e(t[o], o, t), a = +e(t[o + 1], o + 1, t);
                    return u + (a - u) * (i - o)
                }
            }, Bs = function (t, n, e) {
                return t = zs.call(t, Ns).sort(ms), Math.ceil((e - n) / (2 * (Ys(t, .75) - Ys(t, .25)) * Math.pow(t.length, -1 / 3)))
            }, js = function (t, n, e) {
                return Math.ceil((e - n) / (3.5 * Ss(t) * Math.pow(t.length, -1 / 3)))
            }, Hs = function (t, n) {
                var e, r, i = -1, o = t.length;
                if (null == n) {
                    for (; ++i < o;)if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < o;)null != (r = t[i]) && r > e && (e = r)
                } else {
                    for (; ++i < o;)if (null != (r = n(t[i], i, t)) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < o;)null != (r = n(t[i], i, t)) && r > e && (e = r)
                }
                return e
            }, Xs = function (t, n) {
                var e, r = 0, i = t.length, o = -1, u = i;
                if (null == n)for (; ++o < i;)isNaN(e = Ns(t[o])) ? --u : r += e; else for (; ++o < i;)isNaN(e = Ns(n(t[o], o, t))) ? --u : r += e;
                if (u)return r / u
            }, Vs = function (t, n) {
                var e, r = [], i = t.length, o = -1;
                if (null == n)for (; ++o < i;)isNaN(e = Ns(t[o])) || r.push(e); else for (; ++o < i;)isNaN(e = Ns(n(t[o], o, t))) || r.push(e);
                return Ys(r.sort(ms), .5)
            }, Ws = function (t) {
                for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;)u += t[o].length;
                for (e = new Array(u); --i >= 0;)for (r = t[i], n = r.length; --n >= 0;)e[--u] = r[n];
                return e
            }, $s = function (t, n) {
                var e, r, i = -1, o = t.length;
                if (null == n) {
                    for (; ++i < o;)if (null != (r = t[i]) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < o;)null != (r = t[i]) && e > r && (e = r)
                } else {
                    for (; ++i < o;)if (null != (r = n(t[i], i, t)) && r >= r) {
                        e = r;
                        break
                    }
                    for (; ++i < o;)null != (r = n(t[i], i, t)) && e > r && (e = r)
                }
                return e
            }, Zs = function (t) {
                for (var n = 0, e = t.length - 1, r = t[0], i = new Array(e < 0 ? 0 : e); n < e;)i[n] = [r, r = t[++n]];
                return i
            }, Gs = function (t, n) {
                for (var e = n.length, r = new Array(e); e--;)r[e] = t[n[e]];
                return r
            }, Js = function (t, n) {
                if (e = t.length) {
                    var e, r, i = 0, o = 0, u = t[o];
                    for (n || (n = ms); ++i < e;)(n(r = t[i], u) < 0 || 0 !== n(u, u)) && (u = r, o = i);
                    return 0 === n(u, u) ? o : void 0
                }
            }, Qs = function (t, n, e) {
                for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;)i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
                return t
            }, Ks = function (t, n) {
                var e, r = 0, i = t.length, o = -1;
                if (null == n)for (; ++o < i;)(e = +t[o]) && (r += e); else for (; ++o < i;)(e = +n(t[o], o, t)) && (r += e);
                return r
            }, tf = function (t) {
                if (!(o = t.length))return [];
                for (var n = -1, e = $s(t, r), i = new Array(e); ++n < e;)for (var o, u = -1, a = i[n] = new Array(o); ++u < o;)a[u] = t[u][n];
                return i
            }, nf = function () {
                return tf(arguments)
            }, ef = "$";
            i.prototype = o.prototype = {
                constructor: i, has: function (t) {
                    return ef + t in this
                }, get: function (t) {
                    return this[ef + t]
                }, set: function (t, n) {
                    return this[ef + t] = n, this
                }, remove: function (t) {
                    var n = ef + t;
                    return n in this && delete this[n]
                }, clear: function () {
                    for (var t in this)t[0] === ef && delete this[t]
                }, keys: function () {
                    var t = [];
                    for (var n in this)n[0] === ef && t.push(n.slice(1));
                    return t
                }, values: function () {
                    var t = [];
                    for (var n in this)n[0] === ef && t.push(this[n]);
                    return t
                }, entries: function () {
                    var t = [];
                    for (var n in this)n[0] === ef && t.push({key: n.slice(1), value: this[n]});
                    return t
                }, size: function () {
                    var t = 0;
                    for (var n in this)n[0] === ef && ++t;
                    return t
                }, empty: function () {
                    for (var t in this)if (t[0] === ef)return !1;
                    return !0
                }, each: function (t) {
                    for (var n in this)n[0] === ef && t(this[n], n.slice(1), this)
                }
            };
            var rf = function () {
                function t(n, i, u, a) {
                    if (i >= f.length)return null != r ? r(n) : null != e ? n.sort(e) : n;
                    for (var c, s, l, h = -1, p = n.length, d = f[i++], v = o(), _ = u(); ++h < p;)(l = v.get(c = d(s = n[h]) + "")) ? l.push(s) : v.set(c, [s]);
                    return v.each(function (n, e) {
                        a(_, e, t(n, i, u, a))
                    }), _
                }

                function n(t, e) {
                    if (++e > f.length)return t;
                    var i, o = l[e - 1];
                    return null != r && e >= f.length ? i = t.entries() : (i = [], t.each(function (t, r) {
                        i.push({key: r, values: n(t, e)})
                    })), null != o ? i.sort(function (t, n) {
                        return o(t.key, n.key)
                    }) : i
                }

                var e, r, i, f = [], l = [];
                return i = {
                    object: function (n) {
                        return t(n, 0, u, a)
                    }, map: function (n) {
                        return t(n, 0, c, s)
                    }, entries: function (e) {
                        return n(t(e, 0, c, s), 0)
                    }, key: function (t) {
                        return f.push(t), i
                    }, sortKeys: function (t) {
                        return l[f.length - 1] = t, i
                    }, sortValues: function (t) {
                        return e = t, i
                    }, rollup: function (t) {
                        return r = t, i
                    }
                }
            }, of = o.prototype;
            f.prototype = l.prototype = {
                constructor: f,
                has: of.has,
                add: function (t) {
                    return t += "", this[ef + t] = t, this
                },
                remove: of.remove,
                clear: of.clear,
                values: of.keys,
                size: of.size,
                empty: of.empty,
                each: of.each
            };
            var uf = function (t) {
                var n = [];
                for (var e in t)n.push(e);
                return n
            }, af = function (t) {
                var n = [];
                for (var e in t)n.push(t[e]);
                return n
            }, cf = function (t) {
                var n = [];
                for (var e in t)n.push({key: e, value: t[e]});
                return n
            }, sf = function (t, n) {
                return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t, function () {
                    return Math.random() * n + t
                }
            }, ff = function (t, n) {
                var e, r;
                return t = null == t ? 0 : +t, n = null == n ? 1 : +n, function () {
                    var i;
                    if (null != e)i = e, e = null; else do e = 2 * Math.random() - 1, i = 2 * Math.random() - 1, r = e * e + i * i; while (!r || r > 1);
                    return t + n * i * Math.sqrt(-2 * Math.log(r) / r)
                }
            }, lf = function () {
                var t = ff.apply(this, arguments);
                return function () {
                    return Math.exp(t())
                }
            }, hf = function (t) {
                return function () {
                    for (var n = 0, e = 0; e < t; ++e)n += Math.random();
                    return n
                }
            }, pf = function (t) {
                var n = hf(t);
                return function () {
                    return n() / t
                }
            }, df = function (t) {
                return function () {
                    return -Math.log(1 - Math.random()) / t
                }
            }, vf = 3, _f = function t(n) {
                function e(t) {
                    return Math.pow(t, n)
                }

                return n = +n, e.exponent = t, e
            }(vf), yf = function t(n) {
                function e(t) {
                    return 1 - Math.pow(1 - t, n)
                }

                return n = +n, e.exponent = t, e
            }(vf), gf = function t(n) {
                function e(t) {
                    return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                }

                return n = +n, e.exponent = t, e
            }(vf), mf = Math.PI, xf = mf / 2, bf = 4 / 11, wf = 6 / 11, Mf = 8 / 11, Tf = .75, Nf = 9 / 11, kf = 10 / 11, Sf = .9375, Af = 21 / 22, Ef = 63 / 64, Cf = 1 / bf / bf, zf = 1.70158, Pf = function t(n) {
                function e(t) {
                    return t * t * ((n + 1) * t - n)
                }

                return n = +n, e.overshoot = t, e
            }(zf), qf = function t(n) {
                function e(t) {
                    return --t * t * ((n + 1) * t + n) + 1
                }

                return n = +n, e.overshoot = t, e
            }(zf), Lf = function t(n) {
                function e(t) {
                    return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                }

                return n = +n, e.overshoot = t, e
            }(zf), Rf = 2 * Math.PI, Uf = 1, Df = .3, Of = function t(n, e) {
                function r(t) {
                    return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
                }

                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Rf);
                return r.amplitude = function (n) {
                    return t(n, e * Rf)
                }, r.period = function (e) {
                    return t(n, e)
                }, r
            }(Uf, Df), Ff = function t(n, e) {
                function r(t) {
                    return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
                }

                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Rf);
                return r.amplitude = function (n) {
                    return t(n, e * Rf)
                }, r.period = function (e) {
                    return t(n, e)
                }, r
            }(Uf, Df), If = function t(n, e) {
                function r(t) {
                    return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
                }

                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Rf);
                return r.amplitude = function (n) {
                    return t(n, e * Rf)
                }, r.period = function (e) {
                    return t(n, e)
                }, r
            }(Uf, Df), Yf = function (t) {
                for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;)n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
                return o / 2
            }, Bf = function (t) {
                for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;)n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
                return c *= 3, [o / c, u / c]
            }, jf = function (t, n, e) {
                return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
            }, Hf = function (t) {
                if ((e = t.length) < 3)return null;
                var n, e, r = new Array(e), i = new Array(e);
                for (n = 0; n < e; ++n)r[n] = [+t[n][0], +t[n][1], n];
                for (r.sort(z), n = 0; n < e; ++n)i[n] = [r[n][0], -r[n][1]];
                var o = P(r), u = P(i), a = u[0] === o[0], c = u[u.length - 1] === o[o.length - 1], s = [];
                for (n = o.length - 1; n >= 0; --n)s.push(t[r[o[n]][2]]);
                for (n = +a; n < u.length - c; ++n)s.push(t[r[u[n]][2]]);
                return s
            }, Xf = function (t, n) {
                for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], s = o[1], f = !1, l = 0; l < i; ++l)o = t[l], e = o[0], r = o[1], r > a != s > a && u < (c - e) * (a - r) / (s - r) + e && (f = !f), c = e, s = r;
                return f
            }, Vf = function (t) {
                for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;)n = u, e = a, o = t[r], u = o[0], a = o[1], n -= u, e -= a, c += Math.sqrt(n * n + e * e);
                return c
            }, Wf = Math.PI, $f = 2 * Wf, Zf = 1e-6, Gf = $f - Zf;
            q.prototype = L.prototype = {
                constructor: q, moveTo: function (t, n) {
                    this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n)
                }, closePath: function () {
                    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._.push("Z"))
                }, lineTo: function (t, n) {
                    this._.push("L", this._x1 = +t, ",", this._y1 = +n)
                }, quadraticCurveTo: function (t, n, e, r) {
                    this._.push("Q", +t, ",", +n, ",", this._x1 = +e, ",", this._y1 = +r)
                }, bezierCurveTo: function (t, n, e, r, i, o) {
                    this._.push("C", +t, ",", +n, ",", +e, ",", +r, ",", this._x1 = +i, ",", this._y1 = +o)
                }, arcTo: function (t, n, e, r, i) {
                    t = +t, n = +n, e = +e, r = +r, i = +i;
                    var o = this._x1, u = this._y1, a = e - t, c = r - n, s = o - t, f = u - n, l = s * s + f * f;
                    if (i < 0)throw new Error("negative radius: " + i);
                    if (null === this._x1)this._.push("M", this._x1 = t, ",", this._y1 = n); else if (l > Zf)if (Math.abs(f * a - c * s) > Zf && i) {
                        var h = e - o, p = r - u, d = a * a + c * c, v = h * h + p * p, _ = Math.sqrt(d), y = Math.sqrt(l), g = i * Math.tan((Wf - Math.acos((d + l - v) / (2 * _ * y))) / 2), m = g / y, x = g / _;
                        Math.abs(m - 1) > Zf && this._.push("L", t + m * s, ",", n + m * f), this._.push("A", i, ",", i, ",0,0,", +(f * h > s * p), ",", this._x1 = t + x * a, ",", this._y1 = n + x * c)
                    } else this._.push("L", this._x1 = t, ",", this._y1 = n); else;
                }, arc: function (t, n, e, r, i, o) {
                    t = +t, n = +n, e = +e;
                    var u = e * Math.cos(r), a = e * Math.sin(r), c = t + u, s = n + a, f = 1 ^ o, l = o ? r - i : i - r;
                    if (e < 0)throw new Error("negative radius: " + e);
                    null === this._x1 ? this._.push("M", c, ",", s) : (Math.abs(this._x1 - c) > Zf || Math.abs(this._y1 - s) > Zf) && this._.push("L", c, ",", s), e && (l > Gf ? this._.push("A", e, ",", e, ",0,1,", f, ",", t - u, ",", n - a, "A", e, ",", e, ",0,1,", f, ",", this._x1 = c, ",", this._y1 = s) : (l < 0 && (l = l % $f + $f), this._.push("A", e, ",", e, ",0,", +(l >= Wf), ",", f, ",", this._x1 = t + e * Math.cos(i), ",", this._y1 = n + e * Math.sin(i))))
                }, rect: function (t, n, e, r) {
                    this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n, "h", +e, "v", +r, "h", -e, "Z")
                }, toString: function () {
                    return this._.join("")
                }
            };
            var Jf = function (t) {
                var n = +this._x.call(null, t), e = +this._y.call(null, t);
                return R(this.cover(n, e), n, e, t)
            }, Qf = function (t, n) {
                if (isNaN(t = +t) || isNaN(n = +n))return this;
                var e = this._x0, r = this._y0, i = this._x1, o = this._y1;
                if (isNaN(e))i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1; else {
                    if (!(e > t || t > i || r > n || n > o))return this;
                    var u, a, c = i - e, s = this._root;
                    switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                        case 0:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, o = r + c, t > i || n > o);
                            break;
                        case 1:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, o = r + c, e > t || n > o);
                            break;
                        case 2:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, i = e + c, r = o - c, t > i || r > n);
                            break;
                        case 3:
                            do u = new Array(4), u[a] = s, s = u; while (c *= 2, e = i - c, r = o - c, e > t || r > n)
                    }
                    this._root && this._root.length && (this._root = s)
                }
                return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
            }, Kf = function () {
                var t = [];
                return this.visit(function (n) {
                    if (!n.length)do t.push(n.data); while (n = n.next)
                }), t
            }, tl = function (t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
            }, nl = function (t, n, e, r, i) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
            }, el = function (t, n, e) {
                var r, i, o, u, a, c, s, f = this._x0, l = this._y0, h = this._x1, p = this._y1, d = [], v = this._root;
                for (v && d.push(new nl(v, f, l, h, p)), null == e ? e = 1 / 0 : (f = t - e, l = n - e, h = t + e, p = n + e, e *= e); c = d.pop();)if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > p || (u = c.x1) < f || (a = c.y1) < l))if (v.length) {
                    var _ = (i + u) / 2, y = (o + a) / 2;
                    d.push(new nl(v[3], _, y, u, a), new nl(v[2], i, y, _, a), new nl(v[1], _, o, u, y), new nl(v[0], i, o, _, y)), (s = (n >= y) << 1 | t >= _) && (c = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - s], d[d.length - 1 - s] = c)
                } else {
                    var g = t - +this._x.call(null, v.data), m = n - +this._y.call(null, v.data), x = g * g + m * m;
                    if (x < e) {
                        var b = Math.sqrt(e = x);
                        f = t - b, l = n - b, h = t + b, p = n + b, r = v.data
                    }
                }
                return r
            }, rl = function (t) {
                if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t)))return this;
                var n, e, r, i, o, u, a, c, s, f, l, h, p = this._root, d = this._x0, v = this._y0, _ = this._x1, y = this._y1;
                if (!p)return this;
                if (p.length)for (; ;) {
                    if ((s = o >= (a = (d + _) / 2)) ? d = a : _ = a, (f = u >= (c = (v + y) / 2)) ? v = c : y = c, n = p, !(p = p[l = f << 1 | s]))return this;
                    if (!p.length)break;
                    (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
                }
                for (; p.data !== t;)if (r = p, !(p = p.next))return this;
                return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this)
            }, il = function () {
                return this._root
            }, ol = function () {
                var t = 0;
                return this.visit(function (n) {
                    if (!n.length)do++t; while (n = n.next)
                }), t
            }, ul = function (t) {
                var n, e, r, i, o, u, a = [], c = this._root;
                for (c && a.push(new nl(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
                    var s = (r + o) / 2, f = (i + u) / 2;
                    (e = c[3]) && a.push(new nl(e, s, f, o, u)), (e = c[2]) && a.push(new nl(e, r, f, s, u)), (e = c[1]) && a.push(new nl(e, s, i, o, f)), (e = c[0]) && a.push(new nl(e, r, i, s, f))
                }
                return this
            }, al = function (t) {
                var n, e = [], r = [];
                for (this._root && e.push(new nl(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var i = n.node;
                    if (i.length) {
                        var o, u = n.x0, a = n.y0, c = n.x1, s = n.y1, f = (u + c) / 2, l = (a + s) / 2;
                        (o = i[0]) && e.push(new nl(o, u, a, f, l)), (o = i[1]) && e.push(new nl(o, f, a, c, l)), (o = i[2]) && e.push(new nl(o, u, l, f, s)), (o = i[3]) && e.push(new nl(o, f, l, c, s))
                    }
                    r.push(n)
                }
                for (; n = r.pop();)t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            }, cl = function (t) {
                return arguments.length ? (this._x = t, this) : this._x
            }, sl = function (t) {
                return arguments.length ? (this._y = t, this) : this._y
            }, fl = I.prototype = Y.prototype;
            fl.copy = function () {
                var t, n, e = new Y(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r = this._root;
                if (!r)return e;
                if (!r.length)return e._root = B(r), e;
                for (t = [{
                    source: r,
                    target: e._root = new Array(4)
                }]; r = t.pop();)for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
                    source: n,
                    target: r.target[i] = new Array(4)
                }) : r.target[i] = B(n));
                return e
            }, fl.add = Jf, fl.addAll = U, fl.cover = Qf, fl.data = Kf, fl.extent = tl, fl.find = el, fl.remove = rl, fl.removeAll = D, fl.root = il, fl.size = ol, fl.visit = ul, fl.visitAfter = al, fl.x = cl, fl.y = sl;
            var ll = [].slice, hl = {};
            j.prototype = Z.prototype = {
                constructor: j, defer: function (t) {
                    if ("function" != typeof t || this._call)throw new Error;
                    if (null != this._error)return this;
                    var n = ll.call(arguments, 1);
                    return n.push(t), ++this._waiting, this._tasks.push(n), H(this), this
                }, abort: function () {
                    return null == this._error && W(this, new Error("abort")), this
                }, await: function (t) {
                    if ("function" != typeof t || this._call)throw new Error;
                    return this._call = function (n, e) {
                        t.apply(null, [n].concat(e))
                    }, $(this), this
                }, awaitAll: function (t) {
                    if ("function" != typeof t || this._call)throw new Error;
                    return this._call = t, $(this), this
                }
            };
            var pl = function (t) {
                return function () {
                    return t
                }
            }, dl = 1e-12, vl = Math.PI, _l = vl / 2, yl = 2 * vl, gl = function () {
                function t() {
                    var t, s, f = +n.apply(this, arguments), l = +e.apply(this, arguments), h = o.apply(this, arguments) - _l, p = u.apply(this, arguments) - _l, d = Math.abs(p - h), v = p > h;
                    if (c || (c = t = L()), l < f && (s = l, l = f, f = s), l > dl)if (d > yl - dl)c.moveTo(l * Math.cos(h), l * Math.sin(h)), c.arc(0, 0, l, h, p, !v), f > dl && (c.moveTo(f * Math.cos(p), f * Math.sin(p)), c.arc(0, 0, f, p, h, v)); else {
                        var _, y, g = h, m = p, x = h, b = p, w = d, M = d, T = a.apply(this, arguments) / 2, N = T > dl && (i ? +i.apply(this, arguments) : Math.sqrt(f * f + l * l)), k = Math.min(Math.abs(l - f) / 2, +r.apply(this, arguments)), S = k, A = k;
                        if (N > dl) {
                            var E = nt(N / f * Math.sin(T)), C = nt(N / l * Math.sin(T));
                            (w -= 2 * E) > dl ? (E *= v ? 1 : -1, x += E, b -= E) : (w = 0, x = b = (h + p) / 2), (M -= 2 * C) > dl ? (C *= v ? 1 : -1, g += C, m -= C) : (M = 0, g = m = (h + p) / 2)
                        }
                        var z = l * Math.cos(g), P = l * Math.sin(g), q = f * Math.cos(b), R = f * Math.sin(b);
                        if (k > dl) {
                            var U = l * Math.cos(m), D = l * Math.sin(m), O = f * Math.cos(x), F = f * Math.sin(x);
                            if (d < vl) {
                                var I = w > dl ? et(z, P, O, F, U, D, q, R) : [q, R], Y = z - I[0], B = P - I[1], j = U - I[0], H = D - I[1], X = 1 / Math.sin(Math.acos((Y * j + B * H) / (Math.sqrt(Y * Y + B * B) * Math.sqrt(j * j + H * H))) / 2), V = Math.sqrt(I[0] * I[0] + I[1] * I[1]);
                                S = Math.min(k, (f - V) / (X - 1)), A = Math.min(k, (l - V) / (X + 1))
                            }
                        }
                        M > dl ? A > dl ? (_ = rt(O, F, z, P, l, A, v), y = rt(U, D, q, R, l, A, v), c.moveTo(_.cx + _.x01, _.cy + _.y01), A < k ? c.arc(_.cx, _.cy, A, Math.atan2(_.y01, _.x01), Math.atan2(y.y01, y.x01), !v) : (c.arc(_.cx, _.cy, A, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !v), c.arc(0, 0, l, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(y.cy + y.y11, y.cx + y.x11), !v), c.arc(y.cx, y.cy, A, Math.atan2(y.y11, y.x11), Math.atan2(y.y01, y.x01), !v))) : (c.moveTo(z, P), c.arc(0, 0, l, g, m, !v)) : c.moveTo(z, P), f > dl && w > dl ? S > dl ? (_ = rt(q, R, U, D, f, -S, v), y = rt(z, P, O, F, f, -S, v), c.lineTo(_.cx + _.x01, _.cy + _.y01), S < k ? c.arc(_.cx, _.cy, S, Math.atan2(_.y01, _.x01), Math.atan2(y.y01, y.x01), !v) : (c.arc(_.cx, _.cy, S, Math.atan2(_.y01, _.x01), Math.atan2(_.y11, _.x11), !v),
                            c.arc(0, 0, f, Math.atan2(_.cy + _.y11, _.cx + _.x11), Math.atan2(y.cy + y.y11, y.cx + y.x11), v), c.arc(y.cx, y.cy, S, Math.atan2(y.y11, y.x11), Math.atan2(y.y01, y.x01), !v))) : c.arc(0, 0, f, b, x, v) : c.lineTo(q, R)
                    } else c.moveTo(0, 0);
                    if (c.closePath(), t)return c = null, t + "" || null
                }

                var n = G, e = J, r = pl(0), i = null, o = Q, u = K, a = tt, c = null;
                return t.centroid = function () {
                    var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2, r = (+o.apply(this, arguments) + +u.apply(this, arguments)) / 2 - vl / 2;
                    return [Math.cos(r) * t, Math.sin(r) * t]
                }, t.innerRadius = function (e) {
                    return arguments.length ? (n = "function" == typeof e ? e : pl(+e), t) : n
                }, t.outerRadius = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : pl(+n), t) : e
                }, t.cornerRadius = function (n) {
                    return arguments.length ? (r = "function" == typeof n ? n : pl(+n), t) : r
                }, t.padRadius = function (n) {
                    return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : pl(+n), t) : i
                }, t.startAngle = function (n) {
                    return arguments.length ? (o = "function" == typeof n ? n : pl(+n), t) : o
                }, t.endAngle = function (n) {
                    return arguments.length ? (u = "function" == typeof n ? n : pl(+n), t) : u
                }, t.padAngle = function (n) {
                    return arguments.length ? (a = "function" == typeof n ? n : pl(+n), t) : a
                }, t.context = function (n) {
                    return arguments.length ? (c = null == n ? null : n, t) : c
                }, t
            };
            it.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._point = 0
                }, lineEnd: function () {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, n)
                    }
                }
            };
            var ml = function (t) {
                return new it(t)
            }, xl = function () {
                function t(t) {
                    var a, c, s, f = t.length, l = !1;
                    for (null == i && (u = o(s = L())), a = 0; a <= f; ++a)!(a < f && r(c = t[a], a, t)) === l && ((l = !l) ? u.lineStart() : u.lineEnd()), l && u.point(+n(c, a, t), +e(c, a, t));
                    if (s)return u = null, s + "" || null
                }

                var n = ot, e = ut, r = pl(!0), i = null, o = ml, u = null;
                return t.x = function (e) {
                    return arguments.length ? (n = "function" == typeof e ? e : pl(+e), t) : n
                }, t.y = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : pl(+n), t) : e
                }, t.defined = function (n) {
                    return arguments.length ? (r = "function" == typeof n ? n : pl(!!n), t) : r
                }, t.curve = function (n) {
                    return arguments.length ? (o = n, null != i && (u = o(i)), t) : o
                }, t.context = function (n) {
                    return arguments.length ? (null == n ? i = u = null : u = o(i = n), t) : i
                }, t
            }, bl = function () {
                function t(t) {
                    var n, f, l, h, p, d = t.length, v = !1, _ = new Array(d), y = new Array(d);
                    for (null == a && (s = c(p = L())), n = 0; n <= d; ++n) {
                        if (!(n < d && u(h = t[n], n, t)) === v)if (v = !v)f = n, s.areaStart(), s.lineStart(); else {
                            for (s.lineEnd(), s.lineStart(), l = n - 1; l >= f; --l)s.point(_[l], y[l]);
                            s.lineEnd(), s.areaEnd()
                        }
                        v && (_[n] = +e(h, n, t), y[n] = +i(h, n, t), s.point(r ? +r(h, n, t) : _[n], o ? +o(h, n, t) : y[n]))
                    }
                    if (p)return s = null, p + "" || null
                }

                function n() {
                    return xl().defined(u).curve(c).context(a)
                }

                var e = ot, r = null, i = pl(0), o = ut, u = pl(!0), a = null, c = ml, s = null;
                return t.x = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : pl(+n), r = null, t) : e
                }, t.x0 = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : pl(+n), t) : e
                }, t.x1 = function (n) {
                    return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : pl(+n), t) : r
                }, t.y = function (n) {
                    return arguments.length ? (i = "function" == typeof n ? n : pl(+n), o = null, t) : i
                }, t.y0 = function (n) {
                    return arguments.length ? (i = "function" == typeof n ? n : pl(+n), t) : i
                }, t.y1 = function (n) {
                    return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : pl(+n), t) : o
                }, t.lineX0 = t.lineY0 = function () {
                    return n().x(e).y(i)
                }, t.lineY1 = function () {
                    return n().x(e).y(o)
                }, t.lineX1 = function () {
                    return n().x(r).y(i)
                }, t.defined = function (n) {
                    return arguments.length ? (u = "function" == typeof n ? n : pl(!!n), t) : u
                }, t.curve = function (n) {
                    return arguments.length ? (c = n, null != a && (s = c(a)), t) : c
                }, t.context = function (n) {
                    return arguments.length ? (null == n ? a = s = null : s = c(a = n), t) : a
                }, t
            }, wl = function (t, n) {
                return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }, Ml = function (t) {
                return t
            }, Tl = function () {
                function t(t) {
                    var a, c, s, f, l, h = t.length, p = 0, d = new Array(h), v = new Array(h), _ = +i.apply(this, arguments), y = Math.min(yl, Math.max(-yl, o.apply(this, arguments) - _)), g = Math.min(Math.abs(y) / h, u.apply(this, arguments)), m = g * (y < 0 ? -1 : 1);
                    for (a = 0; a < h; ++a)(l = v[d[a] = a] = +n(t[a], a, t)) > 0 && (p += l);
                    for (null != e ? d.sort(function (t, n) {
                        return e(v[t], v[n])
                    }) : null != r && d.sort(function (n, e) {
                        return r(t[n], t[e])
                    }), a = 0, s = p ? (y - h * m) / p : 0; a < h; ++a, _ = f)c = d[a], l = v[c], f = _ + (l > 0 ? l * s : 0) + m, v[c] = {
                        data: t[c],
                        index: a,
                        value: l,
                        startAngle: _,
                        endAngle: f,
                        padAngle: g
                    };
                    return v
                }

                var n = Ml, e = wl, r = null, i = pl(0), o = pl(yl), u = pl(0);
                return t.value = function (e) {
                    return arguments.length ? (n = "function" == typeof e ? e : pl(+e), t) : n
                }, t.sortValues = function (n) {
                    return arguments.length ? (e = n, r = null, t) : e
                }, t.sort = function (n) {
                    return arguments.length ? (r = n, e = null, t) : r
                }, t.startAngle = function (n) {
                    return arguments.length ? (i = "function" == typeof n ? n : pl(+n), t) : i
                }, t.endAngle = function (n) {
                    return arguments.length ? (o = "function" == typeof n ? n : pl(+n), t) : o
                }, t.padAngle = function (n) {
                    return arguments.length ? (u = "function" == typeof n ? n : pl(+n), t) : u
                }, t
            }, Nl = ct(ml);
            at.prototype = {
                areaStart: function () {
                    this._curve.areaStart()
                }, areaEnd: function () {
                    this._curve.areaEnd()
                }, lineStart: function () {
                    this._curve.lineStart()
                }, lineEnd: function () {
                    this._curve.lineEnd()
                }, point: function (t, n) {
                    this._curve.point(n * Math.sin(t), n * -Math.cos(t))
                }
            };
            var kl = function () {
                return st(xl().curve(Nl))
            }, Sl = function () {
                var t = bl().curve(Nl), n = t.curve, e = t.lineX0, r = t.lineX1, i = t.lineY0, o = t.lineY1;
                return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
                    return st(e())
                }, delete t.lineX0, t.lineEndAngle = function () {
                    return st(r())
                }, delete t.lineX1, t.lineInnerRadius = function () {
                    return st(i())
                }, delete t.lineY0, t.lineOuterRadius = function () {
                    return st(o())
                }, delete t.lineY1, t.curve = function (t) {
                    return arguments.length ? n(ct(t)) : n()._curve
                }, t
            }, Al = {
                draw: function (t, n) {
                    var e = Math.sqrt(n / vl);
                    t.moveTo(e, 0), t.arc(0, 0, e, 0, yl)
                }
            }, El = {
                draw: function (t, n) {
                    var e = Math.sqrt(n / 5) / 2;
                    t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                }
            }, Cl = Math.sqrt(1 / 3), zl = 2 * Cl, Pl = {
                draw: function (t, n) {
                    var e = Math.sqrt(n / zl), r = e * Cl;
                    t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                }
            }, ql = .8908130915292852, Ll = Math.sin(vl / 10) / Math.sin(7 * vl / 10), Rl = Math.sin(yl / 10) * Ll, Ul = -Math.cos(yl / 10) * Ll, Dl = {
                draw: function (t, n) {
                    var e = Math.sqrt(n * ql), r = Rl * e, i = Ul * e;
                    t.moveTo(0, -e), t.lineTo(r, i);
                    for (var o = 1; o < 5; ++o) {
                        var u = yl * o / 5, a = Math.cos(u), c = Math.sin(u);
                        t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
                    }
                    t.closePath()
                }
            }, Ol = {
                draw: function (t, n) {
                    var e = Math.sqrt(n), r = -e / 2;
                    t.rect(r, r, e, e)
                }
            }, Fl = Math.sqrt(3), Il = {
                draw: function (t, n) {
                    var e = -Math.sqrt(n / (3 * Fl));
                    t.moveTo(0, 2 * e), t.lineTo(-Fl * e, -e), t.lineTo(Fl * e, -e), t.closePath()
                }
            }, Yl = -.5, Bl = Math.sqrt(3) / 2, jl = 1 / Math.sqrt(12), Hl = 3 * (jl / 2 + 1), Xl = {
                draw: function (t, n) {
                    var e = Math.sqrt(n / Hl), r = e / 2, i = e * jl, o = r, u = e * jl + e, a = -o, c = u;
                    t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(Yl * r - Bl * i, Bl * r + Yl * i), t.lineTo(Yl * o - Bl * u, Bl * o + Yl * u), t.lineTo(Yl * a - Bl * c, Bl * a + Yl * c), t.lineTo(Yl * r + Bl * i, Yl * i - Bl * r), t.lineTo(Yl * o + Bl * u, Yl * u - Bl * o), t.lineTo(Yl * a + Bl * c, Yl * c - Bl * a), t.closePath()
                }
            }, Vl = [Al, El, Pl, Ol, Dl, Il, Xl], Wl = function () {
                function t() {
                    var t;
                    if (r || (r = t = L()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t)return r = null, t + "" || null
                }

                var n = pl(Al), e = pl(64), r = null;
                return t.type = function (e) {
                    return arguments.length ? (n = "function" == typeof e ? e : pl(e), t) : n
                }, t.size = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : pl(+n), t) : e
                }, t.context = function (n) {
                    return arguments.length ? (r = null == n ? null : n, t) : r
                }, t
            }, $l = function () {
            };
            lt.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                }, lineEnd: function () {
                    switch (this._point) {
                        case 3:
                            ft(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            ft(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var Zl = function (t) {
                return new lt(t)
            };
            ht.prototype = {
                areaStart: $l, areaEnd: $l, lineStart: function () {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
                }, lineEnd: function () {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath();
                            break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                    }
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = n;
                            break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = n;
                            break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                            break;
                        default:
                            ft(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var Gl = function (t) {
                return new ht(t)
            };
            pt.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                }, lineEnd: function () {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                            var e = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + n) / 6;
                            this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            ft(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var Jl = function (t) {
                return new pt(t)
            };
            dt.prototype = {
                lineStart: function () {
                    this._x = [], this._y = [], this._basis.lineStart()
                }, lineEnd: function () {
                    var t = this._x, n = this._y, e = t.length - 1;
                    if (e > 0)for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;)r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
                    this._x = this._y = null, this._basis.lineEnd()
                }, point: function (t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            var Ql = function t(n) {
                function e(t) {
                    return 1 === n ? new lt(t) : new dt(t, n)
                }

                return e.beta = function (n) {
                    return t(+n)
                }, e
            }(.85);
            _t.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                }, lineEnd: function () {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            vt(this, this._x1, this._y1)
                    }
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2, this._x1 = t, this._y1 = n;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            vt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Kl = function t(n) {
                function e(t) {
                    return new _t(t, n)
                }

                return e.tension = function (n) {
                    return t(+n)
                }, e
            }(0);
            yt.prototype = {
                areaStart: $l, areaEnd: $l, lineStart: function () {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
                }, lineEnd: function () {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            vt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var th = function t(n) {
                function e(t) {
                    return new yt(t, n)
                }

                return e.tension = function (n) {
                    return t(+n)
                }, e
            }(0);
            gt.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                }, lineEnd: function () {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            vt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var nh = function t(n) {
                function e(t) {
                    return new gt(t, n)
                }

                return e.tension = function (n) {
                    return t(+n)
                }, e
            }(0);
            xt.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                }, lineEnd: function () {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            this.point(this._x2, this._y2)
                    }
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t, r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            mt(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var eh = function t(n) {
                function e(t) {
                    return n ? new xt(t, n) : new _t(t, 0)
                }

                return e.alpha = function (n) {
                    return t(+n)
                }, e
            }(.5);
            bt.prototype = {
                areaStart: $l, areaEnd: $l, lineStart: function () {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                }, lineEnd: function () {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                }, point: function (t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t, r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            mt(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var rh = function t(n) {
                function e(t) {
                    return n ? new bt(t, n) : new yt(t, 0)
                }

                return e.alpha = function (n) {
                    return t(+n)
                }, e
            }(.5);
            wt.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                }, lineEnd: function () {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t, r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            mt(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var ih = function t(n) {
                function e(t) {
                    return n ? new wt(t, n) : new gt(t, 0)
                }

                return e.alpha = function (n) {
                    return t(+n)
                }, e
            }(.5);
            Mt.prototype = {
                areaStart: $l, areaEnd: $l, lineStart: function () {
                    this._point = 0
                }, lineEnd: function () {
                    this._point && this._context.closePath()
                }, point: function (t, n) {
                    t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
                }
            };
            var oh = function (t) {
                return new Mt(t)
            };
            At.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                }, lineEnd: function () {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1);
                            break;
                        case 3:
                            St(this, this._t0, kt(this, this._t0))
                    }
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                }, point: function (t, n) {
                    var e = NaN;
                    if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, St(this, kt(this, e = Nt(this, t, n)), e);
                                break;
                            default:
                                St(this, this._t0, e = Nt(this, t, n))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                    }
                }
            }, (Et.prototype = Object.create(At.prototype)).point = function (t, n) {
                At.prototype.point.call(this, n, t)
            }, Ct.prototype = {
                moveTo: function (t, n) {
                    this._context.moveTo(n, t)
                }, closePath: function () {
                    this._context.closePath()
                }, lineTo: function (t, n) {
                    this._context.lineTo(n, t)
                }, bezierCurveTo: function (t, n, e, r, i, o) {
                    this._context.bezierCurveTo(n, t, r, e, o, i)
                }
            }, qt.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x = [], this._y = []
                }, lineEnd: function () {
                    var t = this._x, n = this._y, e = t.length;
                    if (e)if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e)this._context.lineTo(t[1], n[1]); else for (var r = Lt(t), i = Lt(n), o = 0, u = 1; u < e; ++o, ++u)this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                }, point: function (t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            var uh = function (t) {
                return new qt(t)
            };
            Rt.prototype = {
                areaStart: function () {
                    this._line = 0
                }, areaEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._x = this._y = NaN, this._point = 0
                }, lineEnd: function () {
                    0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
                }, point: function (t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0)this._context.lineTo(this._x, n), this._context.lineTo(t, n); else {
                                var e = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                            }
                    }
                    this._x = t, this._y = n
                }
            };
            var ah = function (t) {
                return new Rt(t, .5)
            }, ch = Array.prototype.slice, sh = function (t, n) {
                if ((r = t.length) > 1)for (var e, r, i = 1, o = t[n[0]], u = o.length; i < r; ++i) {
                    e = o, o = t[n[i]];
                    for (var a = 0; a < u; ++a)o[a][1] += o[a][0] = isNaN(e[a][1]) ? e[a][0] : e[a][1]
                }
            }, fh = function (t) {
                for (var n = t.length, e = new Array(n); --n >= 0;)e[n] = n;
                return e
            }, lh = function () {
                function t(t) {
                    var o, u, a = n.apply(this, arguments), c = t.length, s = a.length, f = new Array(s);
                    for (o = 0; o < s; ++o) {
                        for (var l, h = a[o], p = f[o] = new Array(c), d = 0; d < c; ++d)p[d] = l = [0, +i(t[d], h, d, t)], l.data = t[d];
                        p.key = h
                    }
                    for (o = 0, u = e(f); o < s; ++o)f[u[o]].index = o;
                    return r(f, u), f
                }

                var n = pl([]), e = fh, r = sh, i = Ot;
                return t.keys = function (e) {
                    return arguments.length ? (n = "function" == typeof e ? e : pl(ch.call(e)), t) : n
                }, t.value = function (n) {
                    return arguments.length ? (i = "function" == typeof n ? n : pl(+n), t) : i
                }, t.order = function (n) {
                    return arguments.length ? (e = null == n ? fh : "function" == typeof n ? n : pl(ch.call(n)), t) : e
                }, t.offset = function (n) {
                    return arguments.length ? (r = null == n ? sh : n, t) : r
                }, t
            }, hh = function (t, n) {
                if ((r = t.length) > 0) {
                    for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                        for (i = e = 0; e < r; ++e)i += t[e][o][1] || 0;
                        if (i)for (e = 0; e < r; ++e)t[e][o][1] /= i
                    }
                    sh(t, n)
                }
            }, ph = function (t, n) {
                if ((e = t.length) > 0) {
                    for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                        for (var u = 0, a = 0; u < e; ++u)a += t[u][r][1] || 0;
                        i[r][1] += i[r][0] = -a / 2
                    }
                    sh(t, n)
                }
            }, dh = function (t, n) {
                if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                    for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                        for (var a = 0, c = 0, s = 0; a < i; ++a) {
                            for (var f = t[n[a]], l = f[u][1] || 0, h = f[u - 1][1] || 0, p = (l - h) / 2, d = 0; d < a; ++d) {
                                var v = t[n[d]], _ = v[u][1] || 0, y = v[u - 1][1] || 0;
                                p += _ - y
                            }
                            c += l, s += p * l
                        }
                        e[u - 1][1] += e[u - 1][0] = o, c && (o -= s / c)
                    }
                    e[u - 1][1] += e[u - 1][0] = o, sh(t, n)
                }
            }, vh = function (t) {
                var n = t.map(Ft);
                return fh(t).sort(function (t, e) {
                    return n[t] - n[e]
                })
            }, _h = function (t) {
                return vh(t).reverse()
            }, yh = function (t) {
                var n, e, r = t.length, i = t.map(Ft), o = fh(t).sort(function (t, n) {
                    return i[n] - i[t]
                }), u = 0, a = 0, c = [], s = [];
                for (n = 0; n < r; ++n)e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], s.push(e));
                return s.reverse().concat(c)
            }, gh = function (t) {
                return fh(t).reverse()
            }, mh = function (t, n, e) {
                t.prototype = n.prototype = e, e.constructor = t
            }, xh = .7, bh = 1 / xh, wh = /^#([0-9a-f]{3})$/, Mh = /^#([0-9a-f]{6})$/, Th = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/, Nh = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, kh = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, Sh = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, Ah = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, Eh = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, Ch = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };
            mh(Yt, Bt, {
                displayable: function () {
                    return this.rgb().displayable()
                }, toString: function () {
                    return this.rgb() + ""
                }
            }), mh(Wt, Vt, It(Yt, {
                brighter: function (t) {
                    return t = null == t ? bh : Math.pow(bh, t), new Wt(this.r * t, this.g * t, this.b * t, this.opacity)
                }, darker: function (t) {
                    return t = null == t ? xh : Math.pow(xh, t), new Wt(this.r * t, this.g * t, this.b * t, this.opacity)
                }, rgb: function () {
                    return this
                }, displayable: function () {
                    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
                }, toString: function () {
                    var t = this.opacity;
                    return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
                }
            })), mh(Jt, Gt, It(Yt, {
                brighter: function (t) {
                    return t = null == t ? bh : Math.pow(bh, t), new Jt(this.h, this.s, this.l * t, this.opacity)
                }, darker: function (t) {
                    return t = null == t ? xh : Math.pow(xh, t), new Jt(this.h, this.s, this.l * t, this.opacity)
                }, rgb: function () {
                    var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < .5 ? e : 1 - e) * n, i = 2 * e - r;
                    return new Wt(Qt(t >= 240 ? t - 240 : t + 120, i, r), Qt(t, i, r), Qt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
                }, displayable: function () {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                }
            }));
            var zh = Math.PI / 180, Ph = 180 / Math.PI, qh = 18, Lh = .95047, Rh = 1, Uh = 1.08883, Dh = 4 / 29, Oh = 6 / 29, Fh = 3 * Oh * Oh, Ih = Oh * Oh * Oh;
            mh(nn, tn, It(Yt, {
                brighter: function (t) {
                    return new nn(this.l + qh * (null == t ? 1 : t), this.a, this.b, this.opacity)
                }, darker: function (t) {
                    return new nn(this.l - qh * (null == t ? 1 : t), this.a, this.b, this.opacity)
                }, rgb: function () {
                    var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500, e = isNaN(this.b) ? t : t - this.b / 200;
                    return t = Rh * rn(t), n = Lh * rn(n), e = Uh * rn(e), new Wt(on(3.2404542 * n - 1.5371385 * t - .4985314 * e), on(-.969266 * n + 1.8760108 * t + .041556 * e), on(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
                }
            })), mh(sn, cn, It(Yt, {
                brighter: function (t) {
                    return new sn(this.h, this.c, this.l + qh * (null == t ? 1 : t), this.opacity)
                }, darker: function (t) {
                    return new sn(this.h, this.c, this.l - qh * (null == t ? 1 : t), this.opacity)
                }, rgb: function () {
                    return Kt(this).rgb()
                }
            }));
            var Yh = -.14861, Bh = 1.78277, jh = -.29227, Hh = -.90649, Xh = 1.97294, Vh = Xh * Hh, Wh = Xh * Bh, $h = Bh * jh - Hh * Yh;
            mh(hn, ln, It(Yt, {
                brighter: function (t) {
                    return t = null == t ? bh : Math.pow(bh, t), new hn(this.h, this.s, this.l * t, this.opacity)
                }, darker: function (t) {
                    return t = null == t ? xh : Math.pow(xh, t), new hn(this.h, this.s, this.l * t, this.opacity)
                }, rgb: function () {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * zh, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
                    return new Wt(255 * (n + e * (Yh * r + Bh * i)), 255 * (n + e * (jh * r + Hh * i)), 255 * (n + e * (Xh * r)), this.opacity)
                }
            }));
            var Zh, Gh, Jh, Qh, Kh = function (t) {
                var n = t.length - 1;
                return function (e) {
                    var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), i = t[r], o = t[r + 1], u = r > 0 ? t[r - 1] : 2 * i - o, a = r < n - 1 ? t[r + 2] : 2 * o - i;
                    return pn((e - r / n) * n, u, i, o, a)
                }
            }, tp = function (t) {
                var n = t.length;
                return function (e) {
                    var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n), i = t[(r + n - 1) % n], o = t[r % n], u = t[(r + 1) % n], a = t[(r + 2) % n];
                    return pn((e - r / n) * n, i, o, u, a)
                }
            }, np = function (t) {
                return function () {
                    return t
                }
            }, ep = function t(n) {
                function e(t, n) {
                    var e = r((t = Vt(t)).r, (n = Vt(n)).r), i = r(t.g, n.g), o = r(t.b, n.b), u = r(t.opacity, n.opacity);
                    return function (n) {
                        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
                    }
                }

                var r = yn(n);
                return e.gamma = t, e
            }(1), rp = mn(Kh), ip = mn(tp), op = function (t, n) {
                var e, r = n ? n.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(r), u = new Array(r);
                for (e = 0; e < i; ++e)o[e] = hp(t[e], n[e]);
                for (; e < r; ++e)u[e] = n[e];
                return function (t) {
                    for (e = 0; e < i; ++e)u[e] = o[e](t);
                    return u
                }
            }, up = function (t, n) {
                var e = new Date;
                return t = +t, n -= t, function (r) {
                    return e.setTime(t + n * r), e
                }
            }, ap = function (t, n) {
                return t = +t, n -= t, function (e) {
                    return t + n * e
                }
            }, cp = function (t, n) {
                var e, r = {}, i = {};
                null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
                for (e in n)e in t ? r[e] = hp(t[e], n[e]) : i[e] = n[e];
                return function (t) {
                    for (e in r)i[e] = r[e](t);
                    return i
                }
            }, sp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fp = new RegExp(sp.source, "g"), lp = function (t, n) {
                var e, r, i, o = sp.lastIndex = fp.lastIndex = 0, u = -1, a = [], c = [];
                for (t += "", n += ""; (e = sp.exec(t)) && (r = fp.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
                    i: u,
                    x: ap(e, r)
                })), o = fp.lastIndex;
                return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? bn(c[0].x) : xn(n) : (n = c.length, function (t) {
                    for (var e, r = 0; r < n; ++r)a[(e = c[r]).i] = e.x(t);
                    return a.join("")
                })
            }, hp = function (t, n) {
                var e, r = typeof n;
                return null == n || "boolean" === r ? np(n) : ("number" === r ? ap : "string" === r ? (e = Bt(n)) ? (n = e, ep) : lp : n instanceof Bt ? ep : n instanceof Date ? up : Array.isArray(n) ? op : isNaN(n) ? cp : ap)(t, n)
            }, pp = function (t, n) {
                return t = +t, n -= t, function (e) {
                    return Math.round(t + n * e)
                }
            }, dp = 180 / Math.PI, vp = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            }, _p = function (t, n, e, r, i, o) {
                var u, a, c;
                return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
                    translateX: i,
                    translateY: o,
                    rotate: Math.atan2(n, t) * dp,
                    skewX: Math.atan(c) * dp,
                    scaleX: u,
                    scaleY: a
                }
            }, yp = Tn(wn, "px, ", "px)", "deg)"), gp = Tn(Mn, ", ", ")", ")"), mp = Math.SQRT2, xp = 2, bp = 4, wp = 1e-12, Mp = function (t, n) {
                var e, r, i = t[0], o = t[1], u = t[2], a = n[0], c = n[1], s = n[2], f = a - i, l = c - o, h = f * f + l * l;
                if (h < wp)r = Math.log(s / u) / mp, e = function (t) {
                    return [i + t * f, o + t * l, u * Math.exp(mp * t * r)]
                }; else {
                    var p = Math.sqrt(h), d = (s * s - u * u + bp * h) / (2 * u * xp * p), v = (s * s - u * u - bp * h) / (2 * s * xp * p), _ = Math.log(Math.sqrt(d * d + 1) - d), y = Math.log(Math.sqrt(v * v + 1) - v);
                    r = (y - _) / mp, e = function (t) {
                        var n = t * r, e = Nn(_), a = u / (xp * p) * (e * Sn(mp * n + _) - kn(_));
                        return [i + a * f, o + a * l, u * e / Nn(mp * n + _)]
                    }
                }
                return e.duration = 1e3 * r, e
            }, Tp = An(_n), Np = An(gn), kp = Cn(_n), Sp = Cn(gn), Ap = zn(_n), Ep = zn(gn), Cp = function (t, n) {
                for (var e = new Array(n), r = 0; r < n; ++r)e[r] = t(r / (n - 1));
                return e
            }, zp = {
                value: function () {
                }
            };
            qn.prototype = Pn.prototype = {
                constructor: qn, on: function (t, n) {
                    var e, r = this._, i = Ln(t + "", r), o = -1, u = i.length;
                    {
                        if (!(arguments.length < 2)) {
                            if (null != n && "function" != typeof n)throw new Error("invalid callback: " + n);
                            for (; ++o < u;)if (e = (t = i[o]).type)r[e] = Un(r[e], t.name, n); else if (null == n)for (e in r)r[e] = Un(r[e], t.name, null);
                            return this
                        }
                        for (; ++o < u;)if ((e = (t = i[o]).type) && (e = Rn(r[e], t.name)))return e
                    }
                }, copy: function () {
                    var t = {}, n = this._;
                    for (var e in n)t[e] = n[e].slice();
                    return new qn(t)
                }, call: function (t, n) {
                    if ((e = arguments.length - 2) > 0)for (var e, r, i = new Array(e), o = 0; o < e; ++o)i[o] = arguments[o + 2];
                    if (!this._.hasOwnProperty(t))throw new Error("unknown type: " + t);
                    for (r = this._[t], o = 0, e = r.length; o < e; ++o)r[o].value.apply(n, i)
                }, apply: function (t, n, e) {
                    if (!this._.hasOwnProperty(t))throw new Error("unknown type: " + t);
                    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)r[i].value.apply(n, e)
                }
            };
            var Pp, qp, Lp = function (t) {
                function n(t, n) {
                    var r, i, o = e(t, function (t, e) {
                        return r ? r(t, e - 1) : (i = t, void(r = n ? On(t, n) : Dn(t)))
                    });
                    return o.columns = i, o
                }

                function e(t, n) {
                    function e() {
                        if (f >= s)return u;
                        if (i)return i = !1, o;
                        var n, e = f;
                        if (34 === t.charCodeAt(e)) {
                            for (var r = e; r++ < s;)if (34 === t.charCodeAt(r)) {
                                if (34 !== t.charCodeAt(r + 1))break;
                                ++r
                            }
                            return f = r + 2, n = t.charCodeAt(r + 1), 13 === n ? (i = !0, 10 === t.charCodeAt(r + 2) && ++f) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"')
                        }
                        for (; f < s;) {
                            var a = 1;
                            if (n = t.charCodeAt(f++), 10 === n)i = !0; else if (13 === n)i = !0, 10 === t.charCodeAt(f) && (++f, ++a); else if (n !== c)continue;
                            return t.slice(e, f - a)
                        }
                        return t.slice(e)
                    }

                    for (var r, i, o = {}, u = {}, a = [], s = t.length, f = 0, l = 0; (r = e()) !== u;) {
                        for (var h = []; r !== o && r !== u;)h.push(r), r = e();
                        n && null == (h = n(h, l++)) || a.push(h)
                    }
                    return a
                }

                function r(n, e) {
                    return null == e && (e = Fn(n)), [e.map(u).join(t)].concat(n.map(function (n) {
                        return e.map(function (t) {
                            return u(n[t]);
                        }).join(t)
                    })).join("\n")
                }

                function i(t) {
                    return t.map(o).join("\n")
                }

                function o(n) {
                    return n.map(u).join(t)
                }

                function u(t) {
                    return null == t ? "" : a.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t
                }

                var a = new RegExp('["' + t + "\n]"), c = t.charCodeAt(0);
                return {parse: n, parseRows: e, format: r, formatRows: i}
            }, Rp = Lp(","), Up = Rp.parse, Dp = Rp.parseRows, Op = Rp.format, Fp = Rp.formatRows, Ip = Lp("\t"), Yp = Ip.parse, Bp = Ip.parseRows, jp = Ip.format, Hp = Ip.formatRows, Xp = function (t, n) {
                function e(t) {
                    var n, e = f.status;
                    if (!e && Yn(f) || e >= 200 && e < 300 || 304 === e) {
                        if (u)try {
                            n = u.call(r, f)
                        } catch (t) {
                            return void c.call("error", r, t)
                        } else n = f;
                        c.call("load", r, n)
                    } else c.call("error", r, t)
                }

                var r, i, u, a, c = Pn("beforesend", "progress", "load", "error"), s = o(), f = new XMLHttpRequest, l = null, h = null, p = 0;
                if ("undefined" == typeof XDomainRequest || "withCredentials" in f || !/^(http(s)?:)?\/\//.test(t) || (f = new XDomainRequest), "onload" in f ? f.onload = f.onerror = f.ontimeout = e : f.onreadystatechange = function (t) {
                        f.readyState > 3 && e(t)
                    }, f.onprogress = function (t) {
                        c.call("progress", r, t)
                    }, r = {
                        header: function (t, n) {
                            return t = (t + "").toLowerCase(), arguments.length < 2 ? s.get(t) : (null == n ? s.remove(t) : s.set(t, n + ""), r)
                        }, mimeType: function (t) {
                            return arguments.length ? (i = null == t ? null : t + "", r) : i
                        }, responseType: function (t) {
                            return arguments.length ? (a = t, r) : a
                        }, timeout: function (t) {
                            return arguments.length ? (p = +t, r) : p
                        }, user: function (t) {
                            return arguments.length < 1 ? l : (l = null == t ? null : t + "", r)
                        }, password: function (t) {
                            return arguments.length < 1 ? h : (h = null == t ? null : t + "", r)
                        }, response: function (t) {
                            return u = t, r
                        }, get: function (t, n) {
                            return r.send("GET", t, n)
                        }, post: function (t, n) {
                            return r.send("POST", t, n)
                        }, send: function (n, e, o) {
                            return f.open(n, t, !0, l, h), null == i || s.has("accept") || s.set("accept", i + ",*/*"), f.setRequestHeader && s.each(function (t, n) {
                                f.setRequestHeader(n, t)
                            }), null != i && f.overrideMimeType && f.overrideMimeType(i), null != a && (f.responseType = a), p > 0 && (f.timeout = p), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = In(o)), null != o && r.on("error", o).on("load", function (t) {
                                o(null, t)
                            }), c.call("beforesend", r, f), f.send(null == e ? null : e), r
                        }, abort: function () {
                            return f.abort(), r
                        }, on: function () {
                            var t = c.on.apply(c, arguments);
                            return t === c ? r : t
                        }
                    }, null != n) {
                    if ("function" != typeof n)throw new Error("invalid callback: " + n);
                    return r.get(n)
                }
                return r
            }, Vp = function (t, n) {
                return function (e, r) {
                    var i = Xp(e).mimeType(t).response(n);
                    if (null != r) {
                        if ("function" != typeof r)throw new Error("invalid callback: " + r);
                        return i.get(r)
                    }
                    return i
                }
            }, Wp = Vp("text/html", function (t) {
                return document.createRange().createContextualFragment(t.responseText)
            }), $p = Vp("application/json", function (t) {
                return JSON.parse(t.responseText)
            }), Zp = Vp("text/plain", function (t) {
                return t.responseText
            }), Gp = Vp("application/xml", function (t) {
                var n = t.responseXML;
                if (!n)throw new Error("parse error");
                return n
            }), Jp = function (t, n) {
                return function (e, r, i) {
                    arguments.length < 3 && (i = r, r = null);
                    var o = Xp(e).mimeType(t);
                    return o.row = function (t) {
                        return arguments.length ? o.response(Bn(n, r = t)) : r
                    }, o.row(r), i ? o.get(i) : o
                }
            }, Qp = Jp("text/csv", Up), Kp = Jp("text/tab-separated-values", Yp), td = 0, nd = 0, ed = 0, rd = 1e3, id = 0, od = 0, ud = 0, ad = "object" == typeof performance && performance.now ? performance : Date, cd = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
                setTimeout(t, 17)
            };
            Xn.prototype = Vn.prototype = {
                constructor: Xn, restart: function (t, n, e) {
                    if ("function" != typeof t)throw new TypeError("callback is not a function");
                    e = (null == e ? jn() : +e) + (null == n ? 0 : +n), this._next || qp === this || (qp ? qp._next = this : Pp = this, qp = this), this._call = t, this._time = e, Jn()
                }, stop: function () {
                    this._call && (this._call = null, this._time = 1 / 0, Jn())
                }
            };
            var sd = function (t, n, e) {
                var r = new Xn;
                return n = null == n ? 0 : +n, r.restart(function (e) {
                    r.stop(), t(e + n)
                }, n, e), r
            }, fd = function (t, n, e) {
                var r = new Xn, i = n;
                return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? jn() : +e, r.restart(function o(u) {
                    u += i, r.restart(o, i += n, e), t(u)
                }, n, e), r)
            }, ld = new Date, hd = new Date, pd = Qn(function () {
            }, function (t, n) {
                t.setTime(+t + n)
            }, function (t, n) {
                return n - t
            });
            pd.every = function (t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Qn(function (n) {
                    n.setTime(Math.floor(n / t) * t)
                }, function (n, e) {
                    n.setTime(+n + e * t)
                }, function (n, e) {
                    return (e - n) / t
                }) : pd : null
            };
            var dd = pd.range, vd = 1e3, _d = 6e4, yd = 36e5, gd = 864e5, md = 6048e5, xd = Qn(function (t) {
                t.setTime(Math.floor(t / vd) * vd)
            }, function (t, n) {
                t.setTime(+t + n * vd)
            }, function (t, n) {
                return (n - t) / vd
            }, function (t) {
                return t.getUTCSeconds()
            }), bd = xd.range, wd = Qn(function (t) {
                t.setTime(Math.floor(t / _d) * _d)
            }, function (t, n) {
                t.setTime(+t + n * _d)
            }, function (t, n) {
                return (n - t) / _d
            }, function (t) {
                return t.getMinutes()
            }), Md = wd.range, Td = Qn(function (t) {
                var n = t.getTimezoneOffset() * _d % yd;
                n < 0 && (n += yd), t.setTime(Math.floor((+t - n) / yd) * yd + n)
            }, function (t, n) {
                t.setTime(+t + n * yd)
            }, function (t, n) {
                return (n - t) / yd
            }, function (t) {
                return t.getHours()
            }), Nd = Td.range, kd = Qn(function (t) {
                t.setHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setDate(t.getDate() + n)
            }, function (t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * _d) / gd
            }, function (t) {
                return t.getDate() - 1
            }), Sd = kd.range, Ad = Kn(0), Ed = Kn(1), Cd = Kn(2), zd = Kn(3), Pd = Kn(4), qd = Kn(5), Ld = Kn(6), Rd = Ad.range, Ud = Ed.range, Dd = Cd.range, Od = zd.range, Fd = Pd.range, Id = qd.range, Yd = Ld.range, Bd = Qn(function (t) {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setMonth(t.getMonth() + n)
            }, function (t, n) {
                return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
            }, function (t) {
                return t.getMonth()
            }), jd = Bd.range, Hd = Qn(function (t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setFullYear(t.getFullYear() + n)
            }, function (t, n) {
                return n.getFullYear() - t.getFullYear()
            }, function (t) {
                return t.getFullYear()
            });
            Hd.every = function (t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Qn(function (n) {
                    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                }, function (n, e) {
                    n.setFullYear(n.getFullYear() + e * t)
                }) : null
            };
            var Xd = Hd.range, Vd = Qn(function (t) {
                t.setUTCSeconds(0, 0)
            }, function (t, n) {
                t.setTime(+t + n * _d)
            }, function (t, n) {
                return (n - t) / _d
            }, function (t) {
                return t.getUTCMinutes()
            }), Wd = Vd.range, $d = Qn(function (t) {
                t.setUTCMinutes(0, 0, 0)
            }, function (t, n) {
                t.setTime(+t + n * yd)
            }, function (t, n) {
                return (n - t) / yd
            }, function (t) {
                return t.getUTCHours()
            }), Zd = $d.range, Gd = Qn(function (t) {
                t.setUTCHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setUTCDate(t.getUTCDate() + n)
            }, function (t, n) {
                return (n - t) / gd
            }, function (t) {
                return t.getUTCDate() - 1
            }), Jd = Gd.range, Qd = te(0), Kd = te(1), tv = te(2), nv = te(3), ev = te(4), rv = te(5), iv = te(6), ov = Qd.range, uv = Kd.range, av = tv.range, cv = nv.range, sv = ev.range, fv = rv.range, lv = iv.range, hv = Qn(function (t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setUTCMonth(t.getUTCMonth() + n)
            }, function (t, n) {
                return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
            }, function (t) {
                return t.getUTCMonth()
            }), pv = hv.range, dv = Qn(function (t) {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function (t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n)
            }, function (t, n) {
                return n.getUTCFullYear() - t.getUTCFullYear()
            }, function (t) {
                return t.getUTCFullYear()
            });
            dv.every = function (t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? Qn(function (n) {
                    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                }, function (n, e) {
                    n.setUTCFullYear(n.getUTCFullYear() + e * t)
                }) : null
            };
            var vv, _v = dv.range, yv = function (t, n) {
                if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)return null;
                var e, r = t.slice(0, e);
                return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
            }, gv = function (t) {
                return t = yv(Math.abs(t)), t ? t[1] : NaN
            }, mv = function (t, n) {
                return function (e, r) {
                    for (var i = e.length, o = [], u = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));)a = t[u = (u + 1) % t.length];
                    return o.reverse().join(n)
                }
            }, xv = function (t, n) {
                t = t.toPrecision(n);
                t:for (var e, r = t.length, i = 1, o = -1; i < r; ++i)switch (t[i]) {
                    case".":
                        o = e = i;
                        break;
                    case"0":
                        0 === o && (o = i), e = i;
                        break;
                    case"e":
                        break t;
                    default:
                        o > 0 && (o = 0)
                }
                return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
            }, bv = function (t, n) {
                var e = yv(t, n);
                if (!e)return t + "";
                var r = e[0], i = e[1], o = i - (vv = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, u = r.length;
                return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + yv(t, Math.max(0, n + o - 1))[0]
            }, wv = function (t, n) {
                var e = yv(t, n);
                if (!e)return t + "";
                var r = e[0], i = e[1];
                return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            }, Mv = {
                "": xv, "%": function (t, n) {
                    return (100 * t).toFixed(n)
                }, b: function (t) {
                    return Math.round(t).toString(2)
                }, c: function (t) {
                    return t + ""
                }, d: function (t) {
                    return Math.round(t).toString(10)
                }, e: function (t, n) {
                    return t.toExponential(n)
                }, f: function (t, n) {
                    return t.toFixed(n)
                }, g: function (t, n) {
                    return t.toPrecision(n)
                }, o: function (t) {
                    return Math.round(t).toString(8)
                }, p: function (t, n) {
                    return wv(100 * t, n)
                }, r: wv, s: bv, X: function (t) {
                    return Math.round(t).toString(16).toUpperCase()
                }, x: function (t) {
                    return Math.round(t).toString(16)
                }
            }, Tv = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i, Nv = function (t) {
                return new ne(t)
            };
            ne.prototype.toString = function () {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
            };
            var kv, Sv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Av = function (t) {
                function n(t) {
                    function n(t) {
                        var n, i, c, g = d, m = v;
                        if ("c" === p)m = _(t) + m, t = ""; else {
                            t = +t;
                            var x = (t < 0 || 1 / t < 0) && (t *= -1, !0);
                            if (t = _(t, h), x)for (n = -1, i = t.length, x = !1; ++n < i;)if (c = t.charCodeAt(n), 48 < c && c < 58 || "x" === p && 96 < c && c < 103 || "X" === p && 64 < c && c < 71) {
                                x = !0;
                                break
                            }
                            if (g = (x ? "(" === a ? a : "-" : "-" === a || "(" === a ? "" : a) + g, m = m + ("s" === p ? Sv[8 + vv / 3] : "") + (x && "(" === a ? ")" : ""), y)for (n = -1, i = t.length; ++n < i;)if (c = t.charCodeAt(n), 48 > c || c > 57) {
                                m = (46 === c ? o + t.slice(n + 1) : t.slice(n)) + m, t = t.slice(0, n);
                                break
                            }
                        }
                        l && !s && (t = r(t, 1 / 0));
                        var b = g.length + t.length + m.length, w = b < f ? new Array(f - b + 1).join(e) : "";
                        switch (l && s && (t = r(w + t, w.length ? f - m.length : 1 / 0), w = ""), u) {
                            case"<":
                                return g + t + m + w;
                            case"=":
                                return g + w + t + m;
                            case"^":
                                return w.slice(0, b = w.length >> 1) + g + t + m + w.slice(b)
                        }
                        return w + g + t + m
                    }

                    t = Nv(t);
                    var e = t.fill, u = t.align, a = t.sign, c = t.symbol, s = t.zero, f = t.width, l = t.comma, h = t.precision, p = t.type, d = "$" === c ? i[0] : "#" === c && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "", v = "$" === c ? i[1] : /[%p]/.test(p) ? "%" : "", _ = Mv[p], y = !p || /[defgprs%]/.test(p);
                    return h = null == h ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h)), n.toString = function () {
                        return t + ""
                    }, n
                }

                function e(t, e) {
                    var r = n((t = Nv(t), t.type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(gv(e) / 3))), o = Math.pow(10, -i), u = Sv[8 + i / 3];
                    return function (t) {
                        return r(o * t) + u
                    }
                }

                var r = t.grouping && t.thousands ? mv(t.grouping, t.thousands) : ee, i = t.currency, o = t.decimal;
                return {format: n, formatPrefix: e}
            };
            re({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]});
            var Ev, Cv = function (t) {
                return Math.max(0, -gv(Math.abs(t)))
            }, zv = function (t, n) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(gv(n) / 3))) - gv(Math.abs(t)))
            }, Pv = function (t, n) {
                return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, gv(n) - gv(t)) + 1
            }, qv = {"-": "", _: " ", 0: "0"}, Lv = /^\s*\d+/, Rv = /^%/, Uv = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
            nr({
                dateTime: "%x, %X",
                date: "%-m/%-d/%Y",
                time: "%-I:%M:%S %p",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            var Dv = "%Y-%m-%dT%H:%M:%S.%LZ", Ov = Date.prototype.toISOString ? er : t.utcFormat(Dv), Fv = +new Date("2000-01-01T00:00:00.000Z") ? rr : t.utcParse(Dv), Iv = Array.prototype, Yv = Iv.map, Bv = Iv.slice, jv = {name: "implicit"}, Hv = function (t) {
                return function () {
                    return t
                }
            }, Xv = function (t) {
                return +t
            }, Vv = [0, 1], Wv = function (n, r, i) {
                var o, u = n[0], a = n[n.length - 1], c = e(u, a, null == r ? 10 : r);
                switch (i = Nv(null == i ? ",f" : i), i.type) {
                    case"s":
                        var s = Math.max(Math.abs(u), Math.abs(a));
                        return null != i.precision || isNaN(o = zv(c, s)) || (i.precision = o), t.formatPrefix(i, s);
                    case"":
                    case"e":
                    case"g":
                    case"p":
                    case"r":
                        null != i.precision || isNaN(o = Pv(c, Math.max(Math.abs(u), Math.abs(a)))) || (i.precision = o - ("e" === i.type));
                        break;
                    case"f":
                    case"%":
                        null != i.precision || isNaN(o = Cv(c)) || (i.precision = o - 2 * ("%" === i.type))
                }
                return t.format(i)
            }, $v = function (t, n) {
                t = t.slice();
                var e, r = 0, i = t.length - 1, o = t[r], u = t[i];
                return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
            }, Zv = 1e3, Gv = 60 * Zv, Jv = 60 * Gv, Qv = 24 * Jv, Kv = 7 * Qv, t_ = 30 * Qv, n_ = 365 * Qv, e_ = function () {
                return qr(Hd, Bd, Ad, kd, Td, wd, xd, pd, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
            }, r_ = function () {
                return qr(dv, hv, Qd, Gd, $d, Vd, xd, pd, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
            }, i_ = function (t) {
                return t.match(/.{6}/g).map(function (t) {
                    return "#" + t
                })
            }, o_ = i_("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), u_ = i_("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), a_ = i_("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), c_ = i_("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), s_ = Ep(ln(300, .5, 0), ln(-240, .5, 1)), f_ = Ep(ln(-100, .75, .35), ln(80, 1.5, .8)), l_ = Ep(ln(260, .75, .35), ln(80, 1.5, .8)), h_ = ln(), p_ = function (t) {
                (t < 0 || t > 1) && (t -= Math.floor(t));
                var n = Math.abs(t - .5);
                return h_.h = 360 * t - 100, h_.s = 1.5 - 1.5 * n, h_.l = .8 - .9 * n, h_ + ""
            }, d_ = Lr(i_("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), v_ = Lr(i_("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), __ = Lr(i_("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), y_ = Lr(i_("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), g_ = "http://www.w3.org/1999/xhtml", m_ = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: g_,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            }, x_ = function (t) {
                var n = t += "", e = n.indexOf(":");
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), m_.hasOwnProperty(n) ? {
                    space: m_[n],
                    local: t
                } : t
            }, b_ = function (t) {
                var n = x_(t);
                return (n.local ? Dr : Ur)(n)
            }, w_ = 0;
            Fr.prototype = Or.prototype = {
                constructor: Fr, get: function (t) {
                    for (var n = this._; !(n in t);)if (!(t = t.parentNode))return;
                    return t[n]
                }, set: function (t, n) {
                    return t[this._] = n
                }, remove: function (t) {
                    return this._ in t && delete t[this._]
                }, toString: function () {
                    return this._
                }
            };
            var M_ = function (t) {
                return function () {
                    return this.matches(t)
                }
            };
            if ("undefined" != typeof document) {
                var T_ = document.documentElement;
                if (!T_.matches) {
                    var N_ = T_.webkitMatchesSelector || T_.msMatchesSelector || T_.mozMatchesSelector || T_.oMatchesSelector;
                    M_ = function (t) {
                        return function () {
                            return N_.call(this, t)
                        }
                    }
                }
            }
            var k_ = M_, S_ = {};
            if (t.event = null, "undefined" != typeof document) {
                var A_ = document.documentElement;
                "onmouseenter" in A_ || (S_ = {mouseenter: "mouseover", mouseleave: "mouseout"})
            }
            var E_ = function (t, n, e) {
                var r, i, o = Br(t + ""), u = o.length;
                {
                    if (!(arguments.length < 2)) {
                        for (a = n ? Hr : jr, null == e && (e = !1), r = 0; r < u; ++r)this.each(a(o[r], n, e));
                        return this
                    }
                    var a = this.node().__on;
                    if (a)for (var c, s = 0, f = a.length; s < f; ++s)for (r = 0, c = a[s]; r < u; ++r)if ((i = o[r]).type === c.type && i.name === c.name)return c.value
                }
            }, C_ = function () {
                for (var n, e = t.event; n = e.sourceEvent;)e = n;
                return e
            }, z_ = function (t, n) {
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
                }
                var i = t.getBoundingClientRect();
                return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
            }, P_ = function (t) {
                var n = C_();
                return n.changedTouches && (n = n.changedTouches[0]), z_(t, n)
            }, q_ = function (t) {
                return null == t ? Vr : function () {
                    return this.querySelector(t)
                }
            }, L_ = function (t) {
                "function" != typeof t && (t = q_(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)for (var o, u, a = n[i], c = a.length, s = r[i] = new Array(c), f = 0; f < c; ++f)(o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[f] = u);
                return new zi(r, this._parents)
            }, R_ = function (t) {
                return null == t ? Wr : function () {
                    return this.querySelectorAll(t)
                }
            }, U_ = function (t) {
                "function" != typeof t && (t = R_(t));
                for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)for (var u, a = n[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
                return new zi(r, i)
            }, D_ = function (t) {
                "function" != typeof t && (t = k_(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
                return new zi(r, this._parents)
            }, O_ = function (t) {
                return new Array(t.length)
            }, F_ = function () {
                return new zi(this._enter || this._groups.map(O_), this._parents)
            };
            $r.prototype = {
                constructor: $r, appendChild: function (t) {
                    return this._parent.insertBefore(t, this._next)
                }, insertBefore: function (t, n) {
                    return this._parent.insertBefore(t, n)
                }, querySelector: function (t) {
                    return this._parent.querySelector(t)
                }, querySelectorAll: function (t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var I_ = function (t) {
                return function () {
                    return t
                }
            }, Y_ = "$", B_ = function (t, n) {
                if (!t)return p = new Array(this.size()), s = -1, this.each(function (t) {
                    p[++s] = t
                }), p;
                var e = n ? Gr : Zr, r = this._parents, i = this._groups;
                "function" != typeof t && (t = I_(t));
                for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
                    var f = r[s], l = i[s], h = l.length, p = t.call(f, f && f.__data__, s, r), d = p.length, v = a[s] = new Array(d), _ = u[s] = new Array(d), y = c[s] = new Array(h);
                    e(f, l, v, _, y, p, n);
                    for (var g, m, x = 0, b = 0; x < d; ++x)if (g = v[x]) {
                        for (x >= b && (b = x + 1); !(m = _[b]) && ++b < d;);
                        g._next = m || null
                    }
                }
                return u = new zi(u, r), u._enter = a, u._exit = c, u
            }, j_ = function () {
                return new zi(this._exit || this._groups.map(O_), this._parents)
            }, H_ = function (t) {
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
                for (; a < r; ++a)u[a] = n[a];
                return new zi(u, this._parents)
            }, X_ = function () {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
                return this
            }, V_ = function (t) {
                function n(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }

                t || (t = Jr);
                for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; f < c; ++f)(u = a[f]) && (s[f] = u);
                    s.sort(n)
                }
                return new zi(i, this._parents).order()
            }, W_ = function () {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            }, $_ = function () {
                var t = new Array(this.size()), n = -1;
                return this.each(function () {
                    t[++n] = this
                }), t
            }, Z_ = function () {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                    var u = r[i];
                    if (u)return u
                }
                return null
            }, G_ = function () {
                var t = 0;
                return this.each(function () {
                    ++t
                }), t
            }, J_ = function () {
                return !this.node()
            }, Q_ = function (t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
                return this
            }, K_ = function (t, n) {
                var e = x_(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                }
                return this.each((null == n ? e.local ? Kr : Qr : "function" == typeof n ? e.local ? ri : ei : e.local ? ni : ti)(e, n))
            }, ty = function (t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            }, ny = function (t, n, e) {
                var r;
                return arguments.length > 1 ? this.each((null == n ? ii : "function" == typeof n ? ui : oi)(t, n, null == e ? "" : e)) : ty(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
            }, ey = function (t, n) {
                return arguments.length > 1 ? this.each((null == n ? ai : "function" == typeof n ? si : ci)(t, n)) : this.node()[t]
            };
            hi.prototype = {
                add: function (t) {
                    var n = this._names.indexOf(t);
                    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                }, remove: function (t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                }, contains: function (t) {
                    return this._names.indexOf(t) >= 0
                }
            };
            var ry = function (t, n) {
                var e = fi(t + "");
                if (arguments.length < 2) {
                    for (var r = li(this.node()), i = -1, o = e.length; ++i < o;)if (!r.contains(e[i]))return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? yi : n ? vi : _i)(e, n))
            }, iy = function (t) {
                return arguments.length ? this.each(null == t ? gi : ("function" == typeof t ? xi : mi)(t)) : this.node().textContent
            }, oy = function (t) {
                return arguments.length ? this.each(null == t ? bi : ("function" == typeof t ? Mi : wi)(t)) : this.node().innerHTML
            }, uy = function () {
                return this.each(Ti)
            }, ay = function () {
                return this.each(Ni)
            }, cy = function (t) {
                var n = "function" == typeof t ? t : b_(t);
                return this.select(function () {
                    return this.appendChild(n.apply(this, arguments))
                })
            }, sy = function (t, n) {
                var e = "function" == typeof t ? t : b_(t), r = null == n ? ki : "function" == typeof n ? n : q_(n);
                return this.select(function () {
                    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                })
            }, fy = function () {
                return this.each(Si)
            }, ly = function (t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            }, hy = function (t, n) {
                return this.each(("function" == typeof n ? Ci : Ei)(t, n))
            }, py = [null];
            zi.prototype = Pi.prototype = {
                constructor: zi,
                select: L_,
                selectAll: U_,
                filter: D_,
                data: B_,
                enter: F_,
                exit: j_,
                merge: H_,
                order: X_,
                sort: V_,
                call: W_,
                nodes: $_,
                node: Z_,
                size: G_,
                empty: J_,
                each: Q_,
                attr: K_,
                style: ny,
                property: ey,
                classed: ry,
                text: iy,
                html: oy,
                raise: uy,
                lower: ay,
                append: cy,
                insert: sy,
                remove: fy,
                datum: ly,
                on: E_,
                dispatch: hy
            };
            var dy = function (t) {
                return "string" == typeof t ? new zi([[document.querySelector(t)]], [document.documentElement]) : new zi([[t]], py)
            }, vy = function (t) {
                return "string" == typeof t ? new zi([document.querySelectorAll(t)], [document.documentElement]) : new zi([null == t ? [] : t], py)
            }, _y = function (t, n, e) {
                arguments.length < 3 && (e = n, n = C_().changedTouches);
                for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)if ((r = n[i]).identifier === e)return z_(t, r);
                return null
            }, yy = function (t, n) {
                null == n && (n = C_().touches);
                for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)i[e] = z_(t, n[e]);
                return i
            }, gy = Pn("start", "end", "interrupt"), my = [], xy = 0, by = 1, wy = 2, My = 3, Ty = 4, Ny = 5, ky = 6, Sy = function (t, n, e, r, i, o) {
                var u = t.__transition;
                if (u) {
                    if (e in u)return
                } else t.__transition = {};
                Ui(t, e, {
                    name: n,
                    index: r,
                    group: i,
                    on: gy,
                    tween: my,
                    time: o.time,
                    delay: o.delay,
                    duration: o.duration,
                    ease: o.ease,
                    timer: null,
                    state: xy
                })
            }, Ay = function (t, n) {
                var e, r, i, o = t.__transition, u = !0;
                if (o) {
                    n = null == n ? null : n + "";
                    for (i in o)(e = o[i]).name === n ? (r = e.state === My, e.state = ky, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                    u && delete t.__transition
                }
            }, Ey = function (t) {
                return this.each(function () {
                    Ay(this, t)
                })
            }, Cy = function (t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = Ri(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)if ((r = i[o]).name === t)return r.value;
                    return null
                }
                return this.each((null == n ? Di : Oi)(e, t, n))
            }, zy = function (t, n) {
                var e;
                return ("number" == typeof n ? ap : n instanceof Bt ? ep : (e = Bt(n)) ? (n = e, ep) : lp)(t, n)
            }, Py = function (t, n) {
                var e = x_(t), r = "transform" === e ? gp : zy;
                return this.attrTween(t, "function" == typeof n ? (e.local ? Xi : Hi)(e, r, Fi(this, "attr." + t, n)) : null == n ? (e.local ? Yi : Ii)(e) : (e.local ? ji : Bi)(e, r, n))
            }, qy = function (t, n) {
                var e = "attr." + t;
                if (arguments.length < 2)return (e = this.tween(e)) && e._value;
                if (null == n)return this.tween(e, null);
                if ("function" != typeof n)throw new Error;
                var r = x_(t);
                return this.tween(e, (r.local ? Vi : Wi)(r, n))
            }, Ly = function (t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? $i : Zi)(n, t)) : Ri(this.node(), n).delay
            }, Ry = function (t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? Gi : Ji)(n, t)) : Ri(this.node(), n).duration
            }, Uy = function (t) {
                var n = this._id;
                return arguments.length ? this.each(Qi(n, t)) : Ri(this.node(), n).ease
            }, Dy = function (t) {
                "function" != typeof t && (t = k_(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
                return new so(r, this._parents, this._name, this._id)
            }, Oy = function (t) {
                if (t._id !== this._id)throw new Error;
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l), p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
                for (; a < r; ++a)u[a] = n[a];
                return new so(u, this._parents, this._name, this._id)
            }, Fy = function (t, n) {
                var e = this._id;
                return arguments.length < 2 ? Ri(this.node(), e).on.on(t) : this.each(to(e, t, n))
            }, Iy = function () {
                return this.on("end.remove", no(this._id))
            }, Yy = function (t) {
                var n = this._name, e = this._id;
                "function" != typeof t && (t = q_(t));
                for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)for (var a, c, s = r[u], f = s.length, l = o[u] = new Array(f), h = 0; h < f; ++h)(a = s[h]) && (c = t.call(a, a.__data__, h, s)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, Sy(l[h], n, e, h, l, Ri(a, e)));
                return new so(o, this._parents, n, e)
            }, By = function (t) {
                var n = this._name, e = this._id;
                "function" != typeof t && (t = R_(t));
                for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)for (var c, s = r[a], f = s.length, l = 0; l < f; ++l)if (c = s[l]) {
                    for (var h, p = t.call(c, c.__data__, l, s), d = Ri(c, e), v = 0, _ = p.length; v < _; ++v)(h = p[v]) && Sy(h, n, e, v, p, d);
                    o.push(p), u.push(c)
                }
                return new so(o, u, n, e)
            }, jy = Pi.prototype.constructor, Hy = function () {
                return new jy(this._groups, this._parents)
            }, Xy = function (t, n, e) {
                var r = "transform" == (t += "") ? yp : zy;
                return null == n ? this.styleTween(t, eo(t, r)).on("end.style." + t, ro(t)) : this.styleTween(t, "function" == typeof n ? oo(t, r, Fi(this, "style." + t, n)) : io(t, r, n), e)
            }, Vy = function (t, n, e) {
                var r = "style." + (t += "");
                if (arguments.length < 2)return (r = this.tween(r)) && r._value;
                if (null == n)return this.tween(r, null);
                if ("function" != typeof n)throw new Error;
                return this.tween(r, uo(t, n, null == e ? "" : e))
            }, Wy = function (t) {
                return this.tween("text", "function" == typeof t ? co(Fi(this, "text", t)) : ao(null == t ? "" : t + ""))
            }, $y = function () {
                for (var t = this._name, n = this._id, e = lo(), r = this._groups, i = r.length, o = 0; o < i; ++o)for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)if (u = a[s]) {
                    var f = Ri(u, n);
                    Sy(u, t, e, s, a, {
                        time: f.time + f.delay + f.duration,
                        delay: 0,
                        duration: f.duration,
                        ease: f.ease
                    })
                }
                return new so(r, this._parents, t, e)
            }, Zy = 0, Gy = Pi.prototype;
            so.prototype = fo.prototype = {
                constructor: so,
                select: Yy,
                selectAll: By,
                filter: Dy,
                merge: Oy,
                selection: Hy,
                transition: $y,
                call: Gy.call,
                nodes: Gy.nodes,
                node: Gy.node,
                size: Gy.size,
                empty: Gy.empty,
                each: Gy.each,
                on: Fy,
                attr: Py,
                attrTween: qy,
                style: Xy,
                styleTween: Vy,
                text: Wy,
                remove: Iy,
                tween: Cy,
                delay: Ly,
                duration: Ry,
                ease: Uy
            };
            var Jy = {time: null, delay: 0, duration: 250, ease: g}, Qy = function (t) {
                var n, e;
                t instanceof so ? (n = t._id, t = t._name) : (n = lo(), (e = Jy).time = jn(), t = null == t ? null : t + "");
                for (var r = this._groups, i = r.length, o = 0; o < i; ++o)for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && Sy(u, t, n, s, a, e || ho(u, n));
                return new so(r, this._parents, t, n)
            };
            Pi.prototype.interrupt = Ey,
                Pi.prototype.transition = Qy;
            var Ky = [null], tg = function (t, n) {
                var e, r, i = t.__transition;
                if (i) {
                    n = null == n ? null : n + "";
                    for (r in i)if ((e = i[r]).state > by && e.name === n)return new so([[t]], Ky, n, +r)
                }
                return null
            }, ng = Array.prototype.slice, eg = function (t) {
                return t
            }, rg = 1, ig = 2, og = 3, ug = 4, ag = 1e-6, cg = function () {
                function t(t) {
                    var o, u = 0;
                    t.eachAfter(function (t) {
                        var e = t.children;
                        e ? (t.x = To(e), t.y = ko(e)) : (t.x = o ? u += n(t, o) : 0, t.y = 0, o = t)
                    });
                    var a = Ao(t), c = Eo(t), s = a.x - n(a, c) / 2, f = c.x + n(c, a) / 2;
                    return t.eachAfter(i ? function (n) {
                        n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r
                    } : function (n) {
                        n.x = (n.x - s) / (f - s) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r
                    })
                }

                var n = Mo, e = 1, r = 1, i = !1;
                return t.separation = function (e) {
                    return arguments.length ? (n = e, t) : n
                }, t.size = function (n) {
                    return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r]
                }, t.nodeSize = function (n) {
                    return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null
                }, t
            }, sg = function (t) {
                var n, e, r, i, o = this, u = [o];
                do for (n = u.reverse(), u = []; o = n.pop();)if (t(o), e = o.children)for (r = 0, i = e.length; r < i; ++r)u.push(e[r]); while (u.length);
                return this
            }, fg = function (t) {
                for (var n, e, r = this, i = [r]; r = i.pop();)if (t(r), n = r.children)for (e = n.length - 1; e >= 0; --e)i.push(n[e]);
                return this
            }, lg = function (t) {
                for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)if (u.push(i), n = i.children)for (e = 0, r = n.length; e < r; ++e)o.push(n[e]);
                for (; i = u.pop();)t(i);
                return this
            }, hg = function (t) {
                return this.eachAfter(function (n) {
                    for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;)e += r[i].value;
                    n.value = e
                })
            }, pg = function (t) {
                return this.eachBefore(function (n) {
                    n.children && n.children.sort(t)
                })
            }, dg = function (t) {
                for (var n = this, e = Co(n, t), r = [n]; n !== e;)n = n.parent, r.push(n);
                for (var i = r.length; t !== e;)r.splice(i, 0, t), t = t.parent;
                return r
            }, vg = function () {
                for (var t = this, n = [t]; t = t.parent;)n.push(t);
                return n
            }, _g = function () {
                var t = [];
                return this.each(function (n) {
                    t.push(n)
                }), t
            }, yg = function () {
                var t = [];
                return this.eachBefore(function (n) {
                    n.children || t.push(n)
                }), t
            }, gg = function () {
                var t = this, n = [];
                return t.each(function (e) {
                    e !== t && n.push({source: e.parent, target: e})
                }), n
            };
            Uo.prototype = zo.prototype = {
                constructor: Uo,
                each: sg,
                eachAfter: lg,
                eachBefore: fg,
                sum: hg,
                sort: pg,
                path: dg,
                ancestors: vg,
                descendants: _g,
                leaves: yg,
                links: gg,
                copy: Po
            };
            var mg = function (t) {
                for (var n, e = (t = t.slice()).length, r = null, i = r; e;) {
                    var o = new Do(t[e - 1]);
                    i = i ? i.next = o : r = o, t[n] = t[--e]
                }
                return {head: r, tail: i}
            }, xg = function (t) {
                return Fo(mg(t), [])
            }, bg = function (t) {
                return Wo(t), t
            }, wg = function (t) {
                return function () {
                    return t
                }
            }, Mg = function () {
                function t(t) {
                    return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Qo(n)).eachAfter(Ko(i, .5)).eachBefore(tu(1)) : t.eachBefore(Qo(Jo)).eachAfter(Ko(Go, 1)).eachAfter(Ko(i, t.r / Math.min(e, r))).eachBefore(tu(Math.min(e, r) / (2 * t.r))), t
                }

                var n = null, e = 1, r = 1, i = Go;
                return t.radius = function (e) {
                    return arguments.length ? (n = $o(e), t) : n
                }, t.size = function (n) {
                    return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
                }, t.padding = function (n) {
                    return arguments.length ? (i = "function" == typeof n ? n : wg(+n), t) : i
                }, t
            }, Tg = function (t) {
                t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
            }, Ng = function (t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;)o = u[a], o.y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
            }, kg = function () {
                function t(t) {
                    var u = t.height + 1;
                    return t.x0 = t.y0 = i, t.x1 = e, t.y1 = r / u, t.eachBefore(n(r, u)), o && t.eachBefore(Tg), t
                }

                function n(t, n) {
                    return function (e) {
                        e.children && Ng(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                        var r = e.x0, o = e.y0, u = e.x1 - i, a = e.y1 - i;
                        u < r && (r = u = (r + u) / 2), a < o && (o = a = (o + a) / 2), e.x0 = r, e.y0 = o, e.x1 = u, e.y1 = a
                    }
                }

                var e = 1, r = 1, i = 0, o = !1;
                return t.round = function (n) {
                    return arguments.length ? (o = !!n, t) : o
                }, t.size = function (n) {
                    return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
                }, t.padding = function (n) {
                    return arguments.length ? (i = +n, t) : i
                }, t
            }, Sg = "$", Ag = {depth: -1}, Eg = {}, Cg = function () {
                function t(t) {
                    var r, i, o, u, a, c, s, f = t.length, l = new Array(f), h = {};
                    for (i = 0; i < f; ++i)r = t[i], a = l[i] = new Uo(r), null != (c = n(r, i, t)) && (c += "") && (s = Sg + (a.id = c), h[s] = s in h ? Eg : a);
                    for (i = 0; i < f; ++i)if (a = l[i], c = e(t[i], i, t), null != c && (c += "")) {
                        if (u = h[Sg + c], !u)throw new Error("missing: " + c);
                        if (u === Eg)throw new Error("ambiguous: " + c);
                        u.children ? u.children.push(a) : u.children = [a], a.parent = u
                    } else {
                        if (o)throw new Error("multiple roots");
                        o = a
                    }
                    if (!o)throw new Error("no root");
                    if (o.parent = Ag, o.eachBefore(function (t) {
                            t.depth = t.parent.depth + 1, --f
                        }).eachBefore(Ro), o.parent = null, f > 0)throw new Error("cycle");
                    return o
                }

                var n = nu, e = eu;
                return t.id = function (e) {
                    return arguments.length ? (n = Zo(e), t) : n
                }, t.parentId = function (n) {
                    return arguments.length ? (e = Zo(n), t) : e
                }, t
            };
            su.prototype = Object.create(Uo.prototype);
            var zg = function () {
                function t(t) {
                    var r = fu(t);
                    if (r.eachAfter(n), r.parent.m = -r.z, r.eachBefore(e), c)t.eachBefore(i); else {
                        var s = t, f = t, l = t;
                        t.eachBefore(function (t) {
                            t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t)
                        });
                        var h = s === f ? 1 : o(s, f) / 2, p = h - s.x, d = u / (f.x + h + p), v = a / (l.depth || 1);
                        t.eachBefore(function (t) {
                            t.x = (t.x + p) * d, t.y = t.depth * v
                        })
                    }
                    return t
                }

                function n(t) {
                    var n = t.children, e = t.parent.children, i = t.i ? e[t.i - 1] : null;
                    if (n) {
                        au(t);
                        var u = (n[0].z + n[n.length - 1].z) / 2;
                        i ? (t.z = i.z + o(t._, i._), t.m = t.z - u) : t.z = u
                    } else i && (t.z = i.z + o(t._, i._));
                    t.parent.A = r(t, i, t.parent.A || e[0])
                }

                function e(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function r(t, n, e) {
                    if (n) {
                        for (var r, i = t, u = t, a = n, c = i.parent.children[0], s = i.m, f = u.m, l = a.m, h = c.m; a = ou(a), i = iu(i), a && i;)c = iu(c), u = ou(u), u.a = t, r = a.z + l - i.z - s + o(a._, i._), r > 0 && (uu(cu(a, t, e), t, r), s += r, f += r), l += a.m, s += i.m, h += c.m, f += u.m;
                        a && !ou(u) && (u.t = a, u.m += l - f), i && !iu(c) && (c.t = i, c.m += s - h, e = t)
                    }
                    return e
                }

                function i(t) {
                    t.x *= u, t.y = t.depth * a
                }

                var o = ru, u = 1, a = 1, c = null;
                return t.separation = function (n) {
                    return arguments.length ? (o = n, t) : o
                }, t.size = function (n) {
                    return arguments.length ? (c = !1, u = +n[0], a = +n[1], t) : c ? null : [u, a]
                }, t.nodeSize = function (n) {
                    return arguments.length ? (c = !0, u = +n[0], a = +n[1], t) : c ? [u, a] : null
                }, t
            }, Pg = function (t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;)o = u[a], o.x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s
            }, qg = (1 + Math.sqrt(5)) / 2, Lg = function t(n) {
                function e(t, e, r, i, o) {
                    lu(n, t, e, r, i, o)
                }

                return e.ratio = function (n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(qg), Rg = function () {
                function t(t) {
                    return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), u = [0], r && t.eachBefore(Tg), t
                }

                function n(t) {
                    var n = u[t.depth], r = t.x0 + n, i = t.y0 + n, o = t.x1 - n, h = t.y1 - n;
                    o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = u[t.depth + 1] = a(t) / 2, r += l(t) - n, i += c(t) - n, o -= s(t) - n, h -= f(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h))
                }

                var e = Lg, r = !1, i = 1, o = 1, u = [0], a = Go, c = Go, s = Go, f = Go, l = Go;
                return t.round = function (n) {
                    return arguments.length ? (r = !!n, t) : r
                }, t.size = function (n) {
                    return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o]
                }, t.tile = function (n) {
                    return arguments.length ? (e = Zo(n), t) : e
                }, t.padding = function (n) {
                    return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
                }, t.paddingInner = function (n) {
                    return arguments.length ? (a = "function" == typeof n ? n : wg(+n), t) : a
                }, t.paddingOuter = function (n) {
                    return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
                }, t.paddingTop = function (n) {
                    return arguments.length ? (c = "function" == typeof n ? n : wg(+n), t) : c
                }, t.paddingRight = function (n) {
                    return arguments.length ? (s = "function" == typeof n ? n : wg(+n), t) : s
                }, t.paddingBottom = function (n) {
                    return arguments.length ? (f = "function" == typeof n ? n : wg(+n), t) : f
                }, t.paddingLeft = function (n) {
                    return arguments.length ? (l = "function" == typeof n ? n : wg(+n), t) : l
                }, t
            }, Ug = function (t, n, e, r, i) {
                function o(t, n, e, r, i, u, a) {
                    if (t >= n - 1) {
                        var s = c[t];
                        return s.x0 = r, s.y0 = i, s.x1 = u, s.y1 = a, void 0
                    }
                    for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d;) {
                        var v = p + d >>> 1;
                        f[v] < h ? p = v + 1 : d = v
                    }
                    var _ = f[p] - l, y = e - _;
                    if (a - i > u - r) {
                        var g = (i * y + a * _) / e;
                        o(t, p, _, r, i, u, g), o(p, n, y, r, g, u, a)
                    } else {
                        var m = (r * y + u * _) / e;
                        o(t, p, _, r, i, m, a), o(p, n, y, m, i, u, a)
                    }
                }

                var u, a, c = t.children, s = c.length, f = new Array(s + 1);
                for (f[0] = a = u = 0; u < s; ++u)f[u + 1] = a += c[u].value;
                o(0, s, t.value, n, e, r, i)
            }, Dg = function (t, n, e, r, i) {
                (1 & t.depth ? Pg : Ng)(t, n, e, r, i)
            }, Og = function t(n) {
                function e(t, e, r, i, o) {
                    if ((u = t._squarify) && u.ratio === n)for (var u, a, c, s, f, l = -1, h = u.length, p = t.value; ++l < h;) {
                        for (a = u[l], c = a.children, s = a.value = 0, f = c.length; s < f; ++s)a.value += c[s].value;
                        a.dice ? Ng(a, e, r, i, r += (o - r) * a.value / p) : Pg(a, e, r, e += (i - e) * a.value / p, o), p -= a.value
                    } else t._squarify = u = lu(n, t, e, r, i, o), u.ratio = n
                }

                return e.ratio = function (n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(qg), Fg = function (t, n) {
                function e() {
                    var e, i, o = r.length, u = 0, a = 0;
                    for (e = 0; e < o; ++e)i = r[e], u += i.x, a += i.y;
                    for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e)i = r[e], i.x -= u, i.y -= a
                }

                var r;
                return null == t && (t = 0), null == n && (n = 0), e.initialize = function (t) {
                    r = t
                }, e.x = function (n) {
                    return arguments.length ? (t = +n, e) : t
                }, e.y = function (t) {
                    return arguments.length ? (n = +t, e) : n
                }, e
            }, Ig = function (t) {
                return function () {
                    return t
                }
            }, Yg = function () {
                return 1e-6 * (Math.random() - .5)
            }, Bg = function (t) {
                function n() {
                    function t(t, e, r, i, u) {
                        var a = t.data, p = t.r, d = l + p;
                        {
                            if (!a)return e > s + d || i < s - d || r > f + d || u < f - d;
                            if (a.index > n) {
                                var v = s - a.x - a.vx, _ = f - a.y - a.vy, y = v * v + _ * _;
                                y < d * d && (0 === v && (v = Yg(), y += v * v), 0 === _ && (_ = Yg(), y += _ * _), y = (d - (y = Math.sqrt(y))) / y * o, c.vx += (v *= y) * (d = (p *= p) / (h + p)), c.vy += (_ *= y) * d, a.vx -= v * (d = 1 - d), a.vy -= _ * d)
                            }
                        }
                    }

                    for (var n, a, c, s, f, l, h, p = r.length, d = 0; d < u; ++d)for (a = I(r, hu, pu).visitAfter(e), n = 0; n < p; ++n)c = r[n], l = i[n], h = l * l, s = c.x + c.vx, f = c.y + c.vy, a.visit(t)
                }

                function e(t) {
                    if (t.data)return t.r = i[t.data.index];
                    for (var n = t.r = 0; n < 4; ++n)t[n] && t[n].r > t.r && (t.r = t[n].r)
                }

                var r, i, o = 1, u = 1;
                return "function" != typeof t && (t = Ig(null == t ? 1 : +t)), n.initialize = function (n) {
                    var e, o = (r = n).length;
                    for (i = new Array(o), e = 0; e < o; ++e)i[e] = +t(r[e], e, r)
                }, n.iterations = function (t) {
                    return arguments.length ? (u = +t, n) : u
                }, n.strength = function (t) {
                    return arguments.length ? (o = +t, n) : o
                }, n.radius = function (e) {
                    return arguments.length ? (t = "function" == typeof e ? e : Ig(+e), n) : t
                }, n
            }, jg = function (t) {
                function n(t) {
                    return 1 / Math.min(f[t.source.index], f[t.target.index])
                }

                function e(n) {
                    for (var e = 0, r = t.length; e < v; ++e)for (var i, o, u, s, f, h, p, d = 0; d < r; ++d)i = t[d], o = i.source, u = i.target, s = u.x + u.vx - o.x - o.vx || Yg(), f = u.y + u.vy - o.y - o.vy || Yg(), h = Math.sqrt(s * s + f * f), h = (h - c[d]) / h * n * a[d], s *= h, f *= h, u.vx -= s * (p = l[d]), u.vy -= f * p, o.vx += s * (p = 1 - p), o.vy += f * p
                }

                function r() {
                    if (s) {
                        var n, e, r = s.length, p = t.length, d = o(s, h);
                        for (n = 0, f = new Array(r); n < r; ++n)f[n] = 0;
                        for (n = 0; n < p; ++n)e = t[n], e.index = n, "object" != typeof e.source && (e.source = d.get(e.source)), "object" != typeof e.target && (e.target = d.get(e.target)), ++f[e.source.index], ++f[e.target.index];
                        for (n = 0, l = new Array(p); n < p; ++n)e = t[n], l[n] = f[e.source.index] / (f[e.source.index] + f[e.target.index]);
                        a = new Array(p), i(), c = new Array(p), u()
                    }
                }

                function i() {
                    if (s)for (var n = 0, e = t.length; n < e; ++n)a[n] = +p(t[n], n, t)
                }

                function u() {
                    if (s)for (var n = 0, e = t.length; n < e; ++n)c[n] = +d(t[n], n, t)
                }

                var a, c, s, f, l, h = du, p = n, d = Ig(30), v = 1;
                return null == t && (t = []), e.initialize = function (t) {
                    s = t, r()
                }, e.links = function (n) {
                    return arguments.length ? (t = n, r(), e) : t
                }, e.id = function (t) {
                    return arguments.length ? (h = t, e) : h
                }, e.iterations = function (t) {
                    return arguments.length ? (v = +t, e) : v
                }, e.strength = function (t) {
                    return arguments.length ? (p = "function" == typeof t ? t : Ig(+t), i(), e) : p
                }, e.distance = function (t) {
                    return arguments.length ? (d = "function" == typeof t ? t : Ig(+t), u(), e) : d
                }, e
            }, Hg = 10, Xg = Math.PI * (3 - Math.sqrt(5)), Vg = function (t) {
                function n() {
                    e(), d.call("tick", u), a < c && (p.stop(), d.call("end", u))
                }

                function e() {
                    var n, e, r = t.length;
                    for (a += (f - a) * s, h.each(function (t) {
                        t(a)
                    }), n = 0; n < r; ++n)e = t[n], null == e.fx ? e.x += e.vx *= l : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= l : (e.y = e.fy, e.vy = 0)
                }

                function r() {
                    for (var n, e = 0, r = t.length; e < r; ++e) {
                        if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
                            var i = Hg * Math.sqrt(e), o = e * Xg;
                            n.x = i * Math.cos(o), n.y = i * Math.sin(o)
                        }
                        (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                    }
                }

                function i(n) {
                    return n.initialize && n.initialize(t), n
                }

                var u, a = 1, c = .001, s = 1 - Math.pow(c, 1 / 300), f = 0, l = .6, h = o(), p = Vn(n), d = Pn("tick", "end");
                return null == t && (t = []), r(), u = {
                    tick: e, restart: function () {
                        return p.restart(n), u
                    }, stop: function () {
                        return p.stop(), u
                    }, nodes: function (n) {
                        return arguments.length ? (t = n, r(), h.each(i), u) : t
                    }, alpha: function (t) {
                        return arguments.length ? (a = +t, u) : a
                    }, alphaMin: function (t) {
                        return arguments.length ? (c = +t, u) : c
                    }, alphaDecay: function (t) {
                        return arguments.length ? (s = +t, u) : +s
                    }, alphaTarget: function (t) {
                        return arguments.length ? (f = +t, u) : f
                    }, velocityDecay: function (t) {
                        return arguments.length ? (l = 1 - t, u) : 1 - l
                    }, force: function (t, n) {
                        return arguments.length > 1 ? (null == n ? h.remove(t) : h.set(t, i(n)), u) : h.get(t)
                    }, find: function (n, e, r) {
                        var i, o, u, a, c, s = 0, f = t.length;
                        for (null == r ? r = 1 / 0 : r *= r, s = 0; s < f; ++s)a = t[s], i = n - a.x, o = e - a.y, u = i * i + o * o, u < r && (c = a, r = u);
                        return c
                    }, on: function (t, n) {
                        return arguments.length > 1 ? (d.on(t, n), u) : d.on(t)
                    }
                }
            }, Wg = function () {
                function t(t) {
                    var n, a = i.length, c = I(i, vu, _u).visitAfter(e);
                    for (u = t, n = 0; n < a; ++n)o = i[n], c.visit(r)
                }

                function n() {
                    if (i) {
                        var t, n = i.length;
                        for (a = new Array(n), t = 0; t < n; ++t)a[t] = +c(i[t], t, i)
                    }
                }

                function e(t) {
                    var n, e, r, i, o, u = 0;
                    if (t.length) {
                        for (r = i = o = 0; o < 4; ++o)(n = t[o]) && (e = n.value) && (u += e, r += e * n.x, i += e * n.y);
                        t.x = r / u, t.y = i / u
                    } else {
                        n = t, n.x = n.data.x, n.y = n.data.y;
                        do u += a[n.data.index]; while (n = n.next)
                    }
                    t.value = u
                }

                function r(t, n, e, r) {
                    if (!t.value)return !0;
                    var i = t.x - o.x, c = t.y - o.y, h = r - n, p = i * i + c * c;
                    if (h * h / l < p)return p < f && (0 === i && (i = Yg(), p += i * i), 0 === c && (c = Yg(), p += c * c), p < s && (p = Math.sqrt(s * p)), o.vx += i * t.value * u / p, o.vy += c * t.value * u / p), !0;
                    if (!(t.length || p >= f)) {
                        (t.data !== o || t.next) && (0 === i && (i = Yg(), p += i * i), 0 === c && (c = Yg(), p += c * c), p < s && (p = Math.sqrt(s * p)));
                        do t.data !== o && (h = a[t.data.index] * u / p, o.vx += i * h, o.vy += c * h); while (t = t.next)
                    }
                }

                var i, o, u, a, c = Ig(-30), s = 1, f = 1 / 0, l = .81;
                return t.initialize = function (t) {
                    i = t, n()
                }, t.strength = function (e) {
                    return arguments.length ? (c = "function" == typeof e ? e : Ig(+e), n(), t) : c
                }, t.distanceMin = function (n) {
                    return arguments.length ? (s = n * n, t) : Math.sqrt(s)
                }, t.distanceMax = function (n) {
                    return arguments.length ? (f = n * n, t) : Math.sqrt(f)
                }, t.theta = function (n) {
                    return arguments.length ? (l = n * n, t) : Math.sqrt(l)
                }, t
            }, $g = function (t) {
                function n(t) {
                    for (var n, e = 0, u = r.length; e < u; ++e)n = r[e], n.vx += (o[e] - n.x) * i[e] * t
                }

                function e() {
                    if (r) {
                        var n, e = r.length;
                        for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
                    }
                }

                var r, i, o, u = Ig(.1);
                return "function" != typeof t && (t = Ig(null == t ? 0 : +t)), n.initialize = function (t) {
                    r = t, e()
                }, n.strength = function (t) {
                    return arguments.length ? (u = "function" == typeof t ? t : Ig(+t), e(), n) : u
                }, n.x = function (r) {
                    return arguments.length ? (t = "function" == typeof r ? r : Ig(+r), e(), n) : t
                }, n
            }, Zg = function (t) {
                function n(t) {
                    for (var n, e = 0, u = r.length; e < u; ++e)n = r[e], n.vy += (o[e] - n.y) * i[e] * t
                }

                function e() {
                    if (r) {
                        var n, e = r.length;
                        for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
                    }
                }

                var r, i, o, u = Ig(.1);
                return "function" != typeof t && (t = Ig(null == t ? 0 : +t)), n.initialize = function (t) {
                    r = t, e()
                }, n.strength = function (t) {
                    return arguments.length ? (u = "function" == typeof t ? t : Ig(+t), e(), n) : u
                }, n.y = function (r) {
                    return arguments.length ? (t = "function" == typeof r ? r : Ig(+r), e(), n) : t
                }, n
            }, Gg = function () {
                t.event.preventDefault(), t.event.stopImmediatePropagation()
            }, Jg = function (t) {
                var n = t.document.documentElement, e = dy(t).on("dragstart.drag", Gg, !0);
                "onselectstart" in n ? e.on("selectstart.drag", Gg, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            }, Qg = function (t) {
                return function () {
                    return t
                }
            };
            mu.prototype.on = function () {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var Kg = function () {
                function n(t) {
                    t.on("mousedown.drag", e).on("touchstart.drag", o).on("touchmove.drag", u).on("touchend.drag touchcancel.drag", a).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function e() {
                    if (!f && l.apply(this, arguments)) {
                        var n = c("mouse", h.apply(this, arguments), P_, this, arguments);
                        n && (dy(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), Jg(t.event.view), yu(), s = !1, n("start"))
                    }
                }

                function r() {
                    Gg(), s = !0, d.mouse("drag")
                }

                function i() {
                    dy(t.event.view).on("mousemove.drag mouseup.drag", null), gu(t.event.view, s), Gg(), d.mouse("end")
                }

                function o() {
                    if (l.apply(this, arguments)) {
                        var n, e, r = t.event.changedTouches, i = h.apply(this, arguments), o = r.length;
                        for (n = 0; n < o; ++n)(e = c(r[n].identifier, i, _y, this, arguments)) && (yu(), e("start"))
                    }
                }

                function u() {
                    var n, e, r = t.event.changedTouches, i = r.length;
                    for (n = 0; n < i; ++n)(e = d[r[n].identifier]) && (Gg(), e("drag"))
                }

                function a() {
                    var n, e, r = t.event.changedTouches, i = r.length;
                    for (f && clearTimeout(f), f = setTimeout(function () {
                        f = null
                    }, 500), n = 0; n < i; ++n)(e = d[r[n].identifier]) && (yu(), e("end"))
                }

                function c(e, r, i, o, u) {
                    var a, c, s, f = i(r, e), l = v.copy();
                    if (Xr(new mu(n, "beforestart", a, e, _, f[0], f[1], 0, 0, l), function () {
                            return null != (t.event.subject = a = p.apply(o, u)) && (c = a.x - f[0] || 0, s = a.y - f[1] || 0, !0)
                        }))return function t(h) {
                        var p, v = f;
                        switch (h) {
                            case"start":
                                d[e] = t, p = _++;
                                break;
                            case"end":
                                delete d[e], --_;
                            case"drag":
                                f = i(r, e), p = _
                        }
                        Xr(new mu(n, h, a, e, p, f[0] + c, f[1] + s, f[0] - v[0], f[1] - v[1], l), l.apply, l, [h, o, u])
                    }
                }

                var s, f, l = xu, h = bu, p = wu, d = {}, v = Pn("start", "drag", "end"), _ = 0;
                return n.filter = function (t) {
                    return arguments.length ? (l = "function" == typeof t ? t : Qg(!!t), n) : l
                }, n.container = function (t) {
                    return arguments.length ? (h = "function" == typeof t ? t : Qg(t), n) : h
                }, n.subject = function (t) {
                    return arguments.length ? (p = "function" == typeof t ? t : Qg(t), n) : p
                }, n.on = function () {
                    var t = v.on.apply(v, arguments);
                    return t === v ? n : t
                }, n
            }, tm = function (t) {
                return function () {
                    return t
                }
            };
            Nu.prototype = {
                constructor: Nu, insert: function (t, n) {
                    var e, r, i;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;)t = t.L;
                            t.L = n
                        } else t.R = n;
                        e = t
                    } else this._ ? (t = Eu(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;)r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Su(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Au(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Au(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Su(this, r))), e = t.U;
                    this._.C = !1
                }, remove: function (t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n, e, r, i = t.U, o = t.L, u = t.R;
                    if (e = o ? u ? Eu(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                        if (t && t.C)return void(t.C = !1);
                        do {
                            if (t === this._)break;
                            if (t === i.L) {
                                if (n = i.R, n.C && (n.C = !1, i.C = !0, Su(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                    n.R && n.R.C || (n.L.C = !1, n.C = !0, Au(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Su(this, i), t = this._;
                                    break
                                }
                            } else if (n = i.L, n.C && (n.C = !1, i.C = !0, Au(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                                n.L && n.L.C || (n.R.C = !1, n.C = !0, Su(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Au(this, i), t = this._;
                                break
                            }
                            n.C = !0, t = i, i = i.U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
                }
            };
            var nm, em, rm, im, om, um = [], am = [], cm = 1e-6, sm = 1e-12;
            ta.prototype = {
                constructor: ta, polygons: function () {
                    var t = this.edges;
                    return this.cells.map(function (n) {
                        var e = n.halfedges.map(function (e) {
                            return Ou(n, t[e])
                        });
                        return e.data = n.site.data, e
                    })
                }, triangles: function () {
                    var t = [], n = this.edges;
                    return this.cells.forEach(function (e, r) {
                        for (var i, o = e.site, u = e.halfedges, a = -1, c = u.length, s = n[u[c - 1]], f = s.left === o ? s.right : s.left; ++a < c;)i = f, s = n[u[a]], f = s.left === o ? s.right : s.left, r < i.index && r < f.index && Qu(o, i, f) < 0 && t.push([o.data, i.data, f.data])
                    }), t
                }, links: function () {
                    return this.edges.filter(function (t) {
                        return t.right
                    }).map(function (t) {
                        return {source: t.left.data, target: t.right.data}
                    })
                }
            };
            var fm = function () {
                function t(t) {
                    return new ta(t.map(function (r, i) {
                        var o = [Math.round(n(r, i, t) / cm) * cm, Math.round(e(r, i, t) / cm) * cm];
                        return o.index = i, o.data = r, o
                    }), r)
                }

                var n = Mu, e = Tu, r = null;
                return t.polygons = function (n) {
                    return t(n).polygons()
                }, t.links = function (n) {
                    return t(n).links()
                }, t.triangles = function (n) {
                    return t(n).triangles()
                }, t.x = function (e) {
                    return arguments.length ? (n = "function" == typeof e ? e : tm(+e), t) : n
                }, t.y = function (n) {
                    return arguments.length ? (e = "function" == typeof n ? n : tm(+n), t) : e
                }, t.extent = function (n) {
                    return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
                }, t.size = function (n) {
                    return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
                }, t
            }, lm = function (t) {
                return function () {
                    return t
                }
            };
            ea.prototype = {
                constructor: ea, scale: function (t) {
                    return 1 === t ? this : new ea(this.k * t, this.x, this.y)
                }, translate: function (t, n) {
                    return 0 === t & 0 === n ? this : new ea(this.k, this.x + this.k * t, this.y + this.k * n)
                }, apply: function (t) {
                    return [t[0] * this.k + this.x, t[1] * this.k + this.y]
                }, applyX: function (t) {
                    return t * this.k + this.x
                }, applyY: function (t) {
                    return t * this.k + this.y
                }, invert: function (t) {
                    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
                }, invertX: function (t) {
                    return (t - this.x) / this.k
                }, invertY: function (t) {
                    return (t - this.y) / this.k
                }, rescaleX: function (t) {
                    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
                }, rescaleY: function (t) {
                    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
                }, toString: function () {
                    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
                }
            };
            var hm = new ea(1, 0, 0);
            ra.prototype = ea.prototype;
            var pm = function () {
                t.event.preventDefault(), t.event.stopImmediatePropagation()
            }, dm = function () {
                function n(t) {
                    t.on("wheel.zoom", s).on("mousedown.zoom", f).on("dblclick.zoom", l).on("touchstart.zoom", h).on("touchmove.zoom", p).on("touchend.zoom touchcancel.zoom", d).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", aa)
                }

                function e(t, n) {
                    return n = Math.max(m, Math.min(x, n)), n === t.k ? t : new ea(n, t.x, t.y)
                }

                function r(t, n, e) {
                    var r = n[0] - e[0] * t.k, i = n[1] - e[1] * t.k;
                    return r === t.x && i === t.y ? t : new ea(t.k, r, i)
                }

                function i(t, n) {
                    var e = Math.min(0, t.invertX(n[0][0]) - b) || Math.max(0, t.invertX(n[1][0]) - w), r = Math.min(0, t.invertY(n[0][1]) - M) || Math.max(0, t.invertY(n[1][1]) - T);
                    return e || r ? t.translate(e, r) : t
                }

                function o(t) {
                    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                }

                function u(t, n, e) {
                    t.on("start.zoom", function () {
                        a(this, arguments).start()
                    }).on("interrupt.zoom end.zoom", function () {
                        a(this, arguments).end()
                    }).tween("zoom", function () {
                        var t = this, r = arguments, i = a(t, r), u = g.apply(t, r), c = e || o(u), s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]), f = t.__zoom, l = "function" == typeof n ? n.apply(t, r) : n, h = Mp(f.invert(c).concat(s / f.k), l.invert(c).concat(s / l.k));
                        return function (t) {
                            if (1 === t)t = l; else {
                                var n = h(t), e = s / n[2];
                                t = new ea(e, c[0] - n[0] * e, c[1] - n[1] * e)
                            }
                            i.zoom(null, t)
                        }
                    })
                }

                function a(t, n) {
                    for (var e, r = 0, i = k.length; r < i; ++r)if ((e = k[r]).that === t)return e;
                    return new c(t, n)
                }

                function c(t, n) {
                    this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = g.apply(t, n)
                }

                function s() {
                    function n() {
                        o.wheel = null, o.end()
                    }

                    if (y.apply(this, arguments)) {
                        var o = a(this, arguments), u = this.__zoom, c = Math.max(m, Math.min(x, u.k * Math.pow(2, -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500))), s = P_(this);
                        if (o.wheel)o.mouse[0][0] === s[0] && o.mouse[0][1] === s[1] || (o.mouse[1] = u.invert(o.mouse[0] = s)), clearTimeout(o.wheel); else {
                            if (u.k === c)return;
                            o.mouse = [s, u.invert(s)], Ay(this), o.start()
                        }
                        pm(), o.wheel = setTimeout(n, E), o.zoom("mouse", i(r(e(u, c), o.mouse[0], o.mouse[1]), o.extent))
                    }
                }

                function f() {
                    function n() {
                        pm(), o.moved = !0, o.zoom("mouse", i(r(o.that.__zoom, o.mouse[0] = P_(o.that), o.mouse[1]), o.extent))
                    }

                    function e() {
                        u.on("mousemove.zoom mouseup.zoom", null), gu(t.event.view, o.moved), pm(), o.end()
                    }

                    if (!_ && y.apply(this, arguments)) {
                        var o = a(this, arguments), u = dy(t.event.view).on("mousemove.zoom", n, !0).on("mouseup.zoom", e, !0), c = P_(this);
                        Jg(t.event.view), ia(), o.mouse = [c, this.__zoom.invert(c)], Ay(this), o.start()
                    }
                }

                function l() {
                    if (y.apply(this, arguments)) {
                        var o = this.__zoom, a = P_(this), c = o.invert(a), s = o.k * (t.event.shiftKey ? .5 : 2), f = i(r(e(o, s), a, c), g.apply(this, arguments));
                        pm(), N > 0 ? dy(this).transition().duration(N).call(u, f, a) : dy(this).call(n.transform, f)
                    }
                }

                function h() {
                    if (y.apply(this, arguments)) {
                        var n, e, r, i = a(this, arguments), o = t.event.changedTouches, u = o.length;
                        for (ia(), n = 0; n < u; ++n)e = o[n], r = _y(this, o, e.identifier), r = [r, this.__zoom.invert(r), e.identifier], i.touch0 ? i.touch1 || (i.touch1 = r) : i.touch0 = r;
                        return v && (v = clearTimeout(v), !i.touch1) ? (i.end(), l.apply(this, arguments)) : void(t.event.touches.length === u && (v = setTimeout(function () {
                            v = null
                        }, A), Ay(this), i.start()))
                    }
                }

                function p() {
                    var n, o, u, c, s = a(this, arguments), f = t.event.changedTouches, l = f.length;
                    for (pm(), v && (v = clearTimeout(v)), n = 0; n < l; ++n)o = f[n], u = _y(this, f, o.identifier), s.touch0 && s.touch0[2] === o.identifier ? s.touch0[0] = u : s.touch1 && s.touch1[2] === o.identifier && (s.touch1[0] = u);
                    if (o = s.that.__zoom, s.touch1) {
                        var h = s.touch0[0], p = s.touch0[1], d = s.touch1[0], _ = s.touch1[1], y = (y = d[0] - h[0]) * y + (y = d[1] - h[1]) * y, g = (g = _[0] - p[0]) * g + (g = _[1] - p[1]) * g;
                        o = e(o, Math.sqrt(y / g)), u = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2], c = [(p[0] + _[0]) / 2, (p[1] + _[1]) / 2]
                    } else {
                        if (!s.touch0)return;
                        u = s.touch0[0], c = s.touch0[1]
                    }
                    s.zoom("touch", i(r(o, u, c), s.extent))
                }

                function d() {
                    var n, e, r = a(this, arguments), i = t.event.changedTouches, o = i.length;
                    for (ia(), _ && clearTimeout(_), _ = setTimeout(function () {
                        _ = null
                    }, A), n = 0; n < o; ++n)e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                    r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 || r.end()
                }

                var v, _, y = oa, g = ua, m = 0, x = 1 / 0, b = -x, w = x, M = b, T = w, N = 250, k = [], S = Pn("start", "zoom", "end"), A = 500, E = 150;
                return n.transform = function (t, n) {
                    var e = t.selection ? t.selection() : t;
                    e.property("__zoom", aa), t !== e ? u(t, n) : e.interrupt().each(function () {
                        a(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                    })
                }, n.scaleBy = function (t, e) {
                    n.scaleTo(t, function () {
                        var t = this.__zoom.k, n = "function" == typeof e ? e.apply(this, arguments) : e;
                        return t * n
                    })
                }, n.scaleTo = function (t, u) {
                    n.transform(t, function () {
                        var t = g.apply(this, arguments), n = this.__zoom, a = o(t), c = n.invert(a), s = "function" == typeof u ? u.apply(this, arguments) : u;
                        return i(r(e(n, s), a, c), t)
                    })
                }, n.translateBy = function (t, e, r) {
                    n.transform(t, function () {
                        return i(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), g.apply(this, arguments))
                    })
                }, c.prototype = {
                    start: function () {
                        return 1 === ++this.active && (this.index = k.push(this) - 1, this.emit("start")), this
                    }, zoom: function (t, n) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                    }, end: function () {
                        return 0 === --this.active && (k.splice(this.index, 1), this.index = -1, this.emit("end")), this
                    }, emit: function (t) {
                        Xr(new na(n, t, this.that.__zoom), S.apply, S, [t, this.that, this.args])
                    }
                }, n.filter = function (t) {
                    return arguments.length ? (y = "function" == typeof t ? t : lm(!!t), n) : y
                }, n.extent = function (t) {
                    return arguments.length ? (g = "function" == typeof t ? t : lm([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), n) : g
                }, n.scaleExtent = function (t) {
                    return arguments.length ? (m = +t[0], x = +t[1], n) : [m, x]
                }, n.translateExtent = function (t) {
                    return arguments.length ? (b = +t[0][0], w = +t[1][0], M = +t[0][1], T = +t[1][1], n) : [[b, M], [w, T]]
                }, n.duration = function (t) {
                    return arguments.length ? (N = +t, n) : N
                }, n.on = function () {
                    var t = S.on.apply(S, arguments);
                    return t === S ? n : t
                }, n
            }, vm = function (t) {
                return function () {
                    return t
                }
            }, _m = function (t, n, e) {
                this.target = t, this.type = n, this.selection = e
            }, ym = function () {
                t.event.preventDefault(), t.event.stopImmediatePropagation()
            }, gm = {name: "drag"}, mm = {name: "space"}, xm = {name: "handle"}, bm = {name: "center"}, wm = {
                name: "x",
                handles: ["e", "w"].map(sa),
                input: function (t, n) {
                    return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
                },
                output: function (t) {
                    return t && [t[0][0], t[1][0]]
                }
            }, Mm = {
                name: "y", handles: ["n", "s"].map(sa), input: function (t, n) {
                    return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
                }, output: function (t) {
                    return t && [t[0][1], t[1][1]]
                }
            }, Tm = {
                name: "xy",
                handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(sa),
                input: function (t) {
                    return t
                },
                output: function (t) {
                    return t
                }
            }, Nm = {
                overlay: "crosshair",
                selection: "move",
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            }, km = {e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se"}, Sm = {
                n: "s",
                s: "n",
                nw: "sw",
                ne: "se",
                se: "ne",
                sw: "nw"
            }, Am = {
                overlay: 1,
                selection: 1,
                n: null,
                e: 1,
                s: null,
                w: -1,
                nw: -1,
                ne: 1,
                se: 1,
                sw: -1
            }, Em = {
                overlay: 1,
                selection: 1,
                n: -1,
                e: null,
                s: 1,
                w: null,
                nw: -1,
                ne: -1,
                se: 1,
                sw: 1
            }, Cm = function () {
                return ya(Tm)
            }, zm = Math.cos, Pm = Math.sin, qm = Math.PI, Lm = qm / 2, Rm = 2 * qm, Um = Math.max, Dm = function () {
                function t(t) {
                    var o, u, a, c, s, f, l = t.length, h = [], p = Ls(l), d = [], v = [], _ = v.groups = new Array(l), y = new Array(l * l);
                    for (o = 0, s = -1; ++s < l;) {
                        for (u = 0, f = -1; ++f < l;)u += t[s][f];
                        h.push(u), d.push(Ls(l)), o += u
                    }
                    for (e && p.sort(function (t, n) {
                        return e(h[t], h[n])
                    }), r && d.forEach(function (n, e) {
                        n.sort(function (n, i) {
                            return r(t[e][n], t[e][i])
                        })
                    }), o = Um(0, Rm - n * l) / o, c = o ? n : Rm / l, u = 0, s = -1; ++s < l;) {
                        for (a = u, f = -1; ++f < l;) {
                            var g = p[s], m = d[g][f], x = t[g][m], b = u, w = u += x * o;
                            y[m * l + g] = {index: g, subindex: m, startAngle: b, endAngle: w, value: x}
                        }
                        _[g] = {index: g, startAngle: a, endAngle: u, value: h[g]}, u += c
                    }
                    for (s = -1; ++s < l;)for (f = s - 1; ++f < l;) {
                        var M = y[f * l + s], T = y[s * l + f];
                        (M.value || T.value) && v.push(M.value < T.value ? {source: T, target: M} : {
                            source: M,
                            target: T
                        })
                    }
                    return i ? v.sort(i) : v
                }

                var n = 0, e = null, r = null, i = null;
                return t.padAngle = function (e) {
                    return arguments.length ? (n = Um(0, e), t) : n
                }, t.sortGroups = function (n) {
                    return arguments.length ? (e = n, t) : e
                }, t.sortSubgroups = function (n) {
                    return arguments.length ? (r = n, t) : r
                }, t.sortChords = function (n) {
                    return arguments.length ? (null == n ? i = null : (i = ga(n))._ = n, t) : i && i._
                }, t
            }, Om = Array.prototype.slice, Fm = function (t) {
                return function () {
                    return t
                }
            }, Im = function () {
                function t() {
                    var t, a = Om.call(arguments), c = n.apply(this, a), s = e.apply(this, a), f = +r.apply(this, (a[0] = c, a)), l = i.apply(this, a) - Lm, h = o.apply(this, a) - Lm, p = f * zm(l), d = f * Pm(l), v = +r.apply(this, (a[0] = s, a)), _ = i.apply(this, a) - Lm, y = o.apply(this, a) - Lm;
                    if (u || (u = t = L()), u.moveTo(p, d), u.arc(0, 0, f, l, h), l === _ && h === y || (u.quadraticCurveTo(0, 0, v * zm(_), v * Pm(_)), u.arc(0, 0, v, _, y)), u.quadraticCurveTo(0, 0, p, d), u.closePath(), t)return u = null, t + "" || null
                }

                var n = ma, e = xa, r = ba, i = wa, o = Ma, u = null;
                return t.radius = function (n) {
                    return arguments.length ? (r = "function" == typeof n ? n : Fm(+n), t) : r
                }, t.startAngle = function (n) {
                    return arguments.length ? (i = "function" == typeof n ? n : Fm(+n), t) : i
                }, t.endAngle = function (n) {
                    return arguments.length ? (o = "function" == typeof n ? n : Fm(+n), t) : o
                }, t.source = function (e) {
                    return arguments.length ? (n = e, t) : n
                }, t.target = function (n) {
                    return arguments.length ? (e = n, t) : e
                }, t.context = function (n) {
                    return arguments.length ? (u = null == n ? null : n, t) : u
                }, t
            }, Ym = function () {
                return new Ta
            };
            Ta.prototype = {
                constructor: Ta, reset: function () {
                    this.s = this.t = 0
                }, add: function (t) {
                    Na(mx, t, this.t), Na(this, mx.s, this.s), this.s ? this.t += mx.t : this.s = mx.t
                }, valueOf: function () {
                    return this.s
                }
            };
            var Bm, jm, Hm, Xm, Vm, Wm, $m, Zm, Gm, Jm, Qm, Km, tx, nx, ex, rx, ix, ox, ux, ax, cx, sx, fx, lx, hx, px, dx, vx, _x, yx, gx, mx = new Ta, xx = 1e-6, bx = 1e-12, wx = Math.PI, Mx = wx / 2, Tx = wx / 4, Nx = 2 * wx, kx = 180 / wx, Sx = wx / 180, Ax = Math.abs, Ex = Math.atan, Cx = Math.atan2, zx = Math.cos, Px = Math.ceil, qx = Math.exp, Lx = Math.log, Rx = Math.pow, Ux = Math.sin, Dx = Math.sign || function (t) {
                    return t > 0 ? 1 : t < 0 ? -1 : 0
                }, Ox = Math.sqrt, Fx = Math.tan, Ix = {
                Feature: function (t, n) {
                    Ca(t.geometry, n)
                }, FeatureCollection: function (t, n) {
                    for (var e = t.features, r = -1, i = e.length; ++r < i;)Ca(e[r].geometry, n)
                }
            }, Yx = {
                Sphere: function (t, n) {
                    n.sphere()
                }, Point: function (t, n) {
                    t = t.coordinates, n.point(t[0], t[1], t[2])
                }, MultiPoint: function (t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)t = e[r], n.point(t[0], t[1], t[2])
                }, LineString: function (t, n) {
                    za(t.coordinates, n, 0)
                }, MultiLineString: function (t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)za(e[r], n, 0)
                }, Polygon: function (t, n) {
                    Pa(t.coordinates, n)
                }, MultiPolygon: function (t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)Pa(e[r], n)
                }, GeometryCollection: function (t, n) {
                    for (var e = t.geometries, r = -1, i = e.length; ++r < i;)Ca(e[r], n)
                }
            }, Bx = function (t, n) {
                t && Ix.hasOwnProperty(t.type) ? Ix[t.type](t, n) : Ca(t, n)
            }, jx = Ym(), Hx = Ym(), Xx = {
                point: Ea, lineStart: Ea, lineEnd: Ea, polygonStart: function () {
                    jx.reset(), Xx.lineStart = qa, Xx.lineEnd = La
                }, polygonEnd: function () {
                    var t = +jx;
                    Hx.add(t < 0 ? Nx + t : t), this.lineStart = this.lineEnd = this.point = Ea
                }, sphere: function () {
                    Hx.add(Nx)
                }
            }, Vx = function (t) {
                return Hx.reset(), Bx(t, Xx), 2 * Hx
            }, Wx = Ym(), $x = {
                point: Ha, lineStart: Va, lineEnd: Wa, polygonStart: function () {
                    $x.point = $a, $x.lineStart = Za, $x.lineEnd = Ga, Wx.reset(), Xx.polygonStart()
                }, polygonEnd: function () {
                    Xx.polygonEnd(), $x.point = Ha, $x.lineStart = Va, $x.lineEnd = Wa, jx < 0 ? (Wm = -(Zm = 180), $m = -(Gm = 90)) : Wx > xx ? Gm = 90 : Wx < -xx && ($m = -90), ex[0] = Wm, ex[1] = Zm
                }
            }, Zx = function (t) {
                var n, e, r, i, o, u, a;
                if (Gm = Zm = -(Wm = $m = 1 / 0), nx = [], Bx(t, $x), e = nx.length) {
                    for (nx.sort(Qa), n = 1, r = nx[0], o = [r]; n < e; ++n)i = nx[n], Ka(r, i[0]) || Ka(r, i[1]) ? (Ja(r[0], i[1]) > Ja(r[0], r[1]) && (r[1] = i[1]), Ja(i[0], r[1]) > Ja(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                    for (u = -(1 / 0), e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n)i = o[n], (a = Ja(r[1], i[0])) > u && (u = a, Wm = i[0], Zm = r[1])
                }
                return nx = ex = null, Wm === 1 / 0 || $m === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Wm, $m], [Zm, Gm]]
            }, Gx = {
                sphere: Ea, point: tc, lineStart: ec, lineEnd: oc, polygonStart: function () {
                    Gx.lineStart = uc, Gx.lineEnd = ac
                }, polygonEnd: function () {
                    Gx.lineStart = ec, Gx.lineEnd = oc
                }
            }, Jx = function (t) {
                rx = ix = ox = ux = ax = cx = sx = fx = lx = hx = px = 0, Bx(t, Gx);
                var n = lx, e = hx, r = px, i = n * n + e * e + r * r;
                return i < bx && (n = cx, e = sx, r = fx, ix < xx && (n = ox, e = ux, r = ax), i = n * n + e * e + r * r, i < bx) ? [NaN, NaN] : [Cx(e, n) * kx, Sa(r / Ox(i)) * kx];
            }, Qx = function (t) {
                return function () {
                    return t
                }
            }, Kx = function (t, n) {
                function e(e, r) {
                    return e = t(e, r), n(e[0], e[1])
                }

                return t.invert && n.invert && (e.invert = function (e, r) {
                    return e = n.invert(e, r), e && t.invert(e[0], e[1])
                }), e
            };
            fc.invert = fc;
            var tb, nb, eb, rb, ib, ob, ub, ab, cb, sb, fb, lb = function (t) {
                function n(n) {
                    return n = t(n[0] * Sx, n[1] * Sx), n[0] *= kx, n[1] *= kx, n
                }

                return t = lc(t[0] * Sx, t[1] * Sx, t.length > 2 ? t[2] * Sx : 0), n.invert = function (n) {
                    return n = t.invert(n[0] * Sx, n[1] * Sx), n[0] *= kx, n[1] *= kx, n
                }, n
            }, hb = function () {
                function t(t, n) {
                    e.push(t = r(t, n)), t[0] *= kx, t[1] *= kx
                }

                function n() {
                    var t = i.apply(this, arguments), n = o.apply(this, arguments) * Sx, c = u.apply(this, arguments) * Sx;
                    return e = [], r = lc(-t[0] * Sx, -t[1] * Sx, 0).invert, vc(a, n, c, 1), t = {
                        type: "Polygon",
                        coordinates: [e]
                    }, e = r = null, t
                }

                var e, r, i = Qx([0, 0]), o = Qx(90), u = Qx(6), a = {point: t};
                return n.center = function (t) {
                    return arguments.length ? (i = "function" == typeof t ? t : Qx([+t[0], +t[1]]), n) : i
                }, n.radius = function (t) {
                    return arguments.length ? (o = "function" == typeof t ? t : Qx(+t), n) : o
                }, n.precision = function (t) {
                    return arguments.length ? (u = "function" == typeof t ? t : Qx(+t), n) : u
                }, n
            }, pb = function () {
                var t, n = [];
                return {
                    point: function (n, e) {
                        t.push([n, e])
                    }, lineStart: function () {
                        n.push(t = [])
                    }, lineEnd: Ea, rejoin: function () {
                        n.length > 1 && n.push(n.pop().concat(n.shift()))
                    }, result: function () {
                        var e = n;
                        return n = [], t = null, e
                    }
                }
            }, db = function (t, n, e, r, i, o) {
                var u, a = t[0], c = t[1], s = n[0], f = n[1], l = 0, h = 1, p = s - a, d = f - c;
                if (u = e - a, p || !(u > 0)) {
                    if (u /= p, p < 0) {
                        if (u < l)return;
                        u < h && (h = u)
                    } else if (p > 0) {
                        if (u > h)return;
                        u > l && (l = u)
                    }
                    if (u = i - a, p || !(u < 0)) {
                        if (u /= p, p < 0) {
                            if (u > h)return;
                            u > l && (l = u)
                        } else if (p > 0) {
                            if (u < l)return;
                            u < h && (h = u)
                        }
                        if (u = r - c, d || !(u > 0)) {
                            if (u /= d, d < 0) {
                                if (u < l)return;
                                u < h && (h = u)
                            } else if (d > 0) {
                                if (u > h)return;
                                u > l && (l = u)
                            }
                            if (u = o - c, d || !(u < 0)) {
                                if (u /= d, d < 0) {
                                    if (u > h)return;
                                    u > l && (l = u)
                                } else if (d > 0) {
                                    if (u < l)return;
                                    u < h && (h = u)
                                }
                                return l > 0 && (t[0] = a + l * p, t[1] = c + l * d), h < 1 && (n[0] = a + h * p, n[1] = c + h * d), !0
                            }
                        }
                    }
                }
            }, vb = function (t, n) {
                return Ax(t[0] - n[0]) < xx && Ax(t[1] - n[1]) < xx
            }, _b = function (t, n, e, r, i) {
                var o, u, a = [], c = [];
                if (t.forEach(function (t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, r = t[0], u = t[n];
                            if (vb(r, u)) {
                                for (i.lineStart(), o = 0; o < n; ++o)i.point((r = t[o])[0], r[1]);
                                return void i.lineEnd()
                            }
                            a.push(e = new yc(r, t, null, !0)), c.push(e.o = new yc(r, null, e, !1)), a.push(e = new yc(u, t, null, !1)), c.push(e.o = new yc(u, null, e, !0))
                        }
                    }), a.length) {
                    for (c.sort(n), gc(a), gc(c), o = 0, u = c.length; o < u; ++o)c[o].e = e = !e;
                    for (var s, f, l = a[0]; ;) {
                        for (var h = l, p = !0; h.v;)if ((h = h.n) === l)return;
                        s = h.z, i.lineStart();
                        do {
                            if (h.v = h.o.v = !0, h.e) {
                                if (p)for (o = 0, u = s.length; o < u; ++o)i.point((f = s[o])[0], f[1]); else r(h.x, h.n.x, 1, i);
                                h = h.n
                            } else {
                                if (p)for (s = h.p.z, o = s.length - 1; o >= 0; --o)i.point((f = s[o])[0], f[1]); else r(h.x, h.p.x, -1, i);
                                h = h.p
                            }
                            h = h.o, s = h.z, p = !p
                        } while (!h.v);
                        i.lineEnd()
                    }
                }
            }, yb = 1e9, gb = -yb, mb = function () {
                var t, n, e, r = 0, i = 0, o = 960, u = 500;
                return e = {
                    stream: function (e) {
                        return t && n === e ? t : t = mc(r, i, o, u)(n = e)
                    }, extent: function (a) {
                        return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [[r, i], [o, u]]
                    }
                }
            }, xb = Ym(), bb = {
                sphere: Ea,
                point: Ea,
                lineStart: xc,
                lineEnd: Ea,
                polygonStart: Ea,
                polygonEnd: Ea
            }, wb = function (t) {
                return xb.reset(), Bx(t, bb), +xb
            }, Mb = [null, null], Tb = {type: "LineString", coordinates: Mb}, Nb = function (t, n) {
                return Mb[0] = t, Mb[1] = n, wb(Tb)
            }, kb = function () {
                function t() {
                    return {type: "MultiLineString", coordinates: n()}
                }

                function n() {
                    return Ls(Px(o / _) * _, i, _).map(h).concat(Ls(Px(s / y) * y, c, y).map(p)).concat(Ls(Px(r / d) * d, e, d).filter(function (t) {
                        return Ax(t % _) > xx
                    }).map(f)).concat(Ls(Px(a / v) * v, u, v).filter(function (t) {
                        return Ax(t % y) > xx
                    }).map(l))
                }

                var e, r, i, o, u, a, c, s, f, l, h, p, d = 10, v = d, _ = 90, y = 360, g = 2.5;
                return t.lines = function () {
                    return n().map(function (t) {
                        return {type: "LineString", coordinates: t}
                    })
                }, t.outline = function () {
                    return {
                        type: "Polygon",
                        coordinates: [h(o).concat(p(c).slice(1), h(i).reverse().slice(1), p(s).reverse().slice(1))]
                    }
                }, t.extent = function (n) {
                    return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
                }, t.extentMajor = function (n) {
                    return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], c = +n[1][1], o > i && (n = o, o = i, i = n), s > c && (n = s, s = c, c = n), t.precision(g)) : [[o, s], [i, c]]
                }, t.extentMinor = function (n) {
                    return arguments.length ? (r = +n[0][0], e = +n[1][0], a = +n[0][1], u = +n[1][1], r > e && (n = r, r = e, e = n), a > u && (n = a, a = u, u = n), t.precision(g)) : [[r, a], [e, u]]
                }, t.step = function (n) {
                    return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
                }, t.stepMajor = function (n) {
                    return arguments.length ? (_ = +n[0], y = +n[1], t) : [_, y]
                }, t.stepMinor = function (n) {
                    return arguments.length ? (d = +n[0], v = +n[1], t) : [d, v]
                }, t.precision = function (n) {
                    return arguments.length ? (g = +n, f = Tc(a, u, 90), l = Nc(r, e, g), h = Tc(s, c, 90), p = Nc(o, i, g), t) : g
                }, t.extentMajor([[-180, -90 + xx], [180, 90 - xx]]).extentMinor([[-180, -80 - xx], [180, 80 + xx]])
            }, Sb = function (t, n) {
                var e = t[0] * Sx, r = t[1] * Sx, i = n[0] * Sx, o = n[1] * Sx, u = zx(r), a = Ux(r), c = zx(o), s = Ux(o), f = u * zx(e), l = u * Ux(e), h = c * zx(i), p = c * Ux(i), d = 2 * Sa(Ox(Aa(o - r) + u * c * Aa(i - e))), v = Ux(d), _ = d ? function (t) {
                    var n = Ux(t *= d) / v, e = Ux(d - t) / v, r = e * f + n * h, i = e * l + n * p, o = e * a + n * s;
                    return [Cx(i, r) * kx, Cx(o, Ox(r * r + i * i)) * kx]
                } : function () {
                    return [e * kx, r * kx]
                };
                return _.distance = d, _
            }, Ab = function (t) {
                return t
            }, Eb = Ym(), Cb = Ym(), zb = {
                point: Ea, lineStart: Ea, lineEnd: Ea, polygonStart: function () {
                    zb.lineStart = kc, zb.lineEnd = Ec
                }, polygonEnd: function () {
                    zb.lineStart = zb.lineEnd = zb.point = Ea, Eb.add(Ax(Cb)), Cb.reset()
                }, result: function () {
                    var t = Eb / 2;
                    return Eb.reset(), t
                }
            }, Pb = 1 / 0, qb = Pb, Lb = -Pb, Rb = Lb, Ub = {
                point: Cc,
                lineStart: Ea,
                lineEnd: Ea,
                polygonStart: Ea,
                polygonEnd: Ea,
                result: function () {
                    var t = [[Pb, qb], [Lb, Rb]];
                    return Lb = Rb = -(qb = Pb = 1 / 0), t
                }
            }, Db = 0, Ob = 0, Fb = 0, Ib = 0, Yb = 0, Bb = 0, jb = 0, Hb = 0, Xb = 0, Vb = {
                point: zc,
                lineStart: Pc,
                lineEnd: Rc,
                polygonStart: function () {
                    Vb.lineStart = Uc, Vb.lineEnd = Dc
                },
                polygonEnd: function () {
                    Vb.point = zc, Vb.lineStart = Pc, Vb.lineEnd = Rc
                },
                result: function () {
                    var t = Xb ? [jb / Xb, Hb / Xb] : Bb ? [Ib / Bb, Yb / Bb] : Fb ? [Db / Fb, Ob / Fb] : [NaN, NaN];
                    return Db = Ob = Fb = Ib = Yb = Bb = jb = Hb = Xb = 0, t
                }
            };
            Ic.prototype = {
                _radius: 4.5, pointRadius: function (t) {
                    return this._radius = t, this
                }, polygonStart: function () {
                    this._line = 0
                }, polygonEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._point = 0
                }, lineEnd: function () {
                    0 === this._line && this._context.closePath(), this._point = NaN
                }, point: function (t, n) {
                    switch (this._point) {
                        case 0:
                            this._context.moveTo(t, n), this._point = 1;
                            break;
                        case 1:
                            this._context.lineTo(t, n);
                            break;
                        default:
                            this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Nx)
                    }
                }, result: Ea
            }, Yc.prototype = {
                _circle: Bc(4.5), pointRadius: function (t) {
                    return this._circle = Bc(t), this
                }, polygonStart: function () {
                    this._line = 0
                }, polygonEnd: function () {
                    this._line = NaN
                }, lineStart: function () {
                    this._point = 0
                }, lineEnd: function () {
                    0 === this._line && this._string.push("Z"), this._point = NaN
                }, point: function (t, n) {
                    switch (this._point) {
                        case 0:
                            this._string.push("M", t, ",", n), this._point = 1;
                            break;
                        case 1:
                            this._string.push("L", t, ",", n);
                            break;
                        default:
                            this._string.push("M", t, ",", n, this._circle)
                    }
                }, result: function () {
                    if (this._string.length) {
                        var t = this._string.join("");
                        return this._string = [], t
                    }
                }
            };
            var Wb = function () {
                function t(t) {
                    return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), Bx(t, e(i))), i.result()
                }

                var n, e, r, i, o = 4.5;
                return t.area = function (t) {
                    return Bx(t, e(zb)), zb.result()
                }, t.bounds = function (t) {
                    return Bx(t, e(Ub)), Ub.result()
                }, t.centroid = function (t) {
                    return Bx(t, e(Vb)), Vb.result()
                }, t.projection = function (r) {
                    return arguments.length ? (e = null == (n = r) ? Ab : r.stream, t) : n
                }, t.context = function (n) {
                    return arguments.length ? (i = null == (r = n) ? new Yc : new Ic(n), "function" != typeof o && i.pointRadius(o), t) : r
                }, t.pointRadius = function (n) {
                    return arguments.length ? (o = "function" == typeof n ? n : (i.pointRadius(+n), +n), t) : o
                }, t.projection(null).context(null)
            }, $b = Ym(), Zb = function (t, n) {
                var e = n[0], r = n[1], i = [Ux(e), -zx(e), 0], o = 0, u = 0;
                $b.reset();
                for (var a = 0, c = t.length; a < c; ++a)if (f = (s = t[a]).length)for (var s, f, l = s[f - 1], h = l[0], p = l[1] / 2 + Tx, d = Ux(p), v = zx(p), _ = 0; _ < f; ++_, h = g, d = x, v = b, l = y) {
                    var y = s[_], g = y[0], m = y[1] / 2 + Tx, x = Ux(m), b = zx(m), w = g - h, M = w >= 0 ? 1 : -1, T = M * w, N = T > wx, k = d * x;
                    if ($b.add(Cx(k * M * Ux(T), v * b + k * zx(T))), o += N ? w + M * Nx : w, N ^ h >= e ^ g >= e) {
                        var S = Ia(Oa(l), Oa(y));
                        ja(S);
                        var A = Ia(i, S);
                        ja(A);
                        var E = (N ^ w >= 0 ? -1 : 1) * Sa(A[2]);
                        (r > E || r === E && (S[0] || S[1])) && (u += N ^ w >= 0 ? 1 : -1)
                    }
                }
                return (o < -xx || o < xx && $b < -xx) ^ 1 & u
            }, Gb = function (t, n, e, r) {
                return function (i, o) {
                    function u(n, e) {
                        var r = i(n, e);
                        t(n = r[0], e = r[1]) && o.point(n, e)
                    }

                    function a(t, n) {
                        var e = i(t, n);
                        _.point(e[0], e[1])
                    }

                    function c() {
                        b.point = a, _.lineStart()
                    }

                    function s() {
                        b.point = u, _.lineEnd()
                    }

                    function f(t, n) {
                        v.push([t, n]);
                        var e = i(t, n);
                        m.point(e[0], e[1])
                    }

                    function l() {
                        m.lineStart(), v = []
                    }

                    function h() {
                        f(v[0][0], v[0][1]), m.lineEnd();
                        var t, n, e, r, i = m.clean(), u = g.result(), a = u.length;
                        if (v.pop(), p.push(v), v = null, a)if (1 & i) {
                            if (e = u[0], (n = e.length - 1) > 0) {
                                for (x || (o.polygonStart(), x = !0), o.lineStart(), t = 0; t < n; ++t)o.point((r = e[t])[0], r[1]);
                                o.lineEnd()
                            }
                        } else a > 1 && 2 & i && u.push(u.pop().concat(u.shift())), d.push(u.filter(jc))
                    }

                    var p, d, v, _ = n(o), y = i.invert(r[0], r[1]), g = pb(), m = n(g), x = !1, b = {
                        point: u,
                        lineStart: c,
                        lineEnd: s,
                        polygonStart: function () {
                            b.point = f, b.lineStart = l, b.lineEnd = h, d = [], p = []
                        },
                        polygonEnd: function () {
                            b.point = u, b.lineStart = c, b.lineEnd = s, d = Ws(d);
                            var t = Zb(p, y);
                            d.length ? (x || (o.polygonStart(), x = !0), _b(d, Hc, t, e, o)) : t && (x || (o.polygonStart(), x = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), x && (o.polygonEnd(), x = !1), d = p = null
                        },
                        sphere: function () {
                            o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                        }
                    };
                    return b
                }
            }, Jb = Gb(function () {
                return !0
            }, Xc, Wc, [-wx, -Mx]), Qb = function (t, n) {
                function e(e, r, i, o) {
                    vc(o, t, n, i, e, r)
                }

                function r(t, n) {
                    return zx(t) * zx(n) > a
                }

                function i(t) {
                    var n, e, i, a, f;
                    return {
                        lineStart: function () {
                            a = i = !1, f = 1
                        }, point: function (l, h) {
                            var p, d = [l, h], v = r(l, h), _ = c ? v ? 0 : u(l, h) : v ? u(l + (l < 0 ? wx : -wx), h) : 0;
                            if (!n && (a = i = v) && t.lineStart(), v !== i && (p = o(n, d), (vb(n, p) || vb(d, p)) && (d[0] += xx, d[1] += xx, v = r(d[0], d[1]))), v !== i)f = 0, v ? (t.lineStart(), p = o(d, n), t.point(p[0], p[1])) : (p = o(n, d), t.point(p[0], p[1]), t.lineEnd()), n = p; else if (s && n && c ^ v) {
                                var y;
                                _ & e || !(y = o(d, n, !0)) || (f = 0, c ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                            }
                            !v || n && vb(n, d) || t.point(d[0], d[1]), n = d, i = v, e = _
                        }, lineEnd: function () {
                            i && t.lineEnd(), n = null
                        }, clean: function () {
                            return f | (a && i) << 1
                        }
                    }
                }

                function o(t, n, e) {
                    var r = Oa(t), i = Oa(n), o = [1, 0, 0], u = Ia(r, i), c = Fa(u, u), s = u[0], f = c - s * s;
                    if (!f)return !e && t;
                    var l = a * c / f, h = -a * s / f, p = Ia(o, u), d = Ba(o, l), v = Ba(u, h);
                    Ya(d, v);
                    var _ = p, y = Fa(d, _), g = Fa(_, _), m = y * y - g * (Fa(d, d) - 1);
                    if (!(m < 0)) {
                        var x = Ox(m), b = Ba(_, (-y - x) / g);
                        if (Ya(b, d), b = Da(b), !e)return b;
                        var w, M = t[0], T = n[0], N = t[1], k = n[1];
                        T < M && (w = M, M = T, T = w);
                        var S = T - M, A = Ax(S - wx) < xx, E = A || S < xx;
                        if (!A && k < N && (w = N, N = k, k = w), E ? A ? N + k > 0 ^ b[1] < (Ax(b[0] - M) < xx ? N : k) : N <= b[1] && b[1] <= k : S > wx ^ (M <= b[0] && b[0] <= T)) {
                            var C = Ba(_, (-y + x) / g);
                            return Ya(C, d), [b, Da(C)]
                        }
                    }
                }

                function u(n, e) {
                    var r = c ? t : wx - t, i = 0;
                    return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
                }

                var a = zx(t), c = a > 0, s = Ax(a) > xx;
                return Gb(r, i, e, c ? [0, -t] : [-wx, t - wx])
            }, Kb = function (t) {
                return {stream: $c(t)}
            };
            Zc.prototype = {
                point: function (t, n) {
                    this.stream.point(t, n)
                }, sphere: function () {
                    this.stream.sphere()
                }, lineStart: function () {
                    this.stream.lineStart()
                }, lineEnd: function () {
                    this.stream.lineEnd()
                }, polygonStart: function () {
                    this.stream.polygonStart()
                }, polygonEnd: function () {
                    this.stream.polygonEnd()
                }
            };
            var tw = 16, nw = zx(30 * Sx), ew = function (t, n) {
                return +n ? ts(t, n) : Kc(t)
            }, rw = $c({
                point: function (t, n) {
                    this.stream.point(t * Sx, n * Sx)
                }
            }), iw = function () {
                return rs(is).scale(155.424).center([0, 33.6442])
            }, ow = function () {
                return iw().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
            }, uw = function () {
                function t(t) {
                    var n = t[0], e = t[1];
                    return a = null, i.point(n, e), a || (o.point(n, e), a) || (u.point(n, e), a)
                }

                function n() {
                    return e = r = null, t
                }

                var e, r, i, o, u, a, c = ow(), s = iw().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), f = iw().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = {
                    point: function (t, n) {
                        a = [t, n]
                    }
                };
                return t.invert = function (t) {
                    var n = c.scale(), e = c.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                    return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? s : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? f : c).invert(t)
                }, t.stream = function (t) {
                    return e && r === t ? e : e = os([c.stream(r = t), s.stream(t), f.stream(t)])
                }, t.precision = function (t) {
                    return arguments.length ? (c.precision(t), s.precision(t), f.precision(t), n()) : c.precision()
                }, t.scale = function (n) {
                    return arguments.length ? (c.scale(n), s.scale(.35 * n), f.scale(n), t.translate(c.translate())) : c.scale()
                }, t.translate = function (t) {
                    if (!arguments.length)return c.translate();
                    var e = c.scale(), r = +t[0], a = +t[1];
                    return i = c.translate(t).clipExtent([[r - .455 * e, a - .238 * e], [r + .455 * e, a + .238 * e]]).stream(l), o = s.translate([r - .307 * e, a + .201 * e]).clipExtent([[r - .425 * e + xx, a + .12 * e + xx], [r - .214 * e - xx, a + .234 * e - xx]]).stream(l), u = f.translate([r - .205 * e, a + .212 * e]).clipExtent([[r - .214 * e + xx, a + .166 * e + xx], [r - .115 * e - xx, a + .234 * e - xx]]).stream(l), n()
                }, t.fitExtent = Qc(t), t.fitSize = Jc(t), t.scale(1070)
            }, aw = us(function (t) {
                return Ox(2 / (1 + t))
            });
            aw.invert = as(function (t) {
                return 2 * Sa(t / 2)
            });
            var cw = function () {
                return ns(aw).scale(124.75).clipAngle(179.999)
            }, sw = us(function (t) {
                return (t = ka(t)) && t / Ux(t)
            });
            sw.invert = as(function (t) {
                return t
            });
            var fw = function () {
                return ns(sw).scale(79.4188).clipAngle(179.999)
            };
            cs.invert = function (t, n) {
                return [t, 2 * Ex(qx(n)) - Mx]
            };
            var lw = function () {
                return ss(cs).scale(961 / Nx)
            }, hw = function () {
                return rs(ls).scale(109.5).parallels([30, 30])
            };
            hs.invert = hs;
            var pw = function () {
                return ns(hs).scale(152.63)
            }, dw = function () {
                return rs(ps).scale(131.154).center([0, 13.9389])
            };
            ds.invert = as(Ex);
            var vw = function () {
                return ns(ds).scale(144.049).clipAngle(60)
            };
            vs.invert = as(Sa);
            var _w = function () {
                return ns(vs).scale(249.5).clipAngle(90 + xx)
            };
            _s.invert = as(function (t) {
                return 2 * Ex(t)
            });
            var yw = function () {
                return ns(_s).scale(250).clipAngle(142)
            };
            ys.invert = function (t, n) {
                return [-n, 2 * Ex(qx(t)) - Mx]
            };
            var gw = function () {
                var t = ss(ys), n = t.center, e = t.rotate;
                return t.center = function (t) {
                    return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
                }, t.rotate = function (t) {
                    return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
                }, e([0, 0, 90]).scale(159.155)
            };
            t.version = gs, t.bisect = ws, t.bisectRight = ws, t.bisectLeft = Ms, t.ascending = ms, t.bisector = xs, t.descending = Ts, t.deviation = Ss, t.extent = As, t.histogram = Is, t.thresholdFreedmanDiaconis = Bs, t.thresholdScott = js, t.thresholdSturges = Fs, t.max = Hs, t.mean = Xs, t.median = Vs, t.merge = Ws, t.min = $s, t.pairs = Zs, t.permute = Gs, t.quantile = Ys, t.range = Ls, t.scan = Js, t.shuffle = Qs, t.sum = Ks, t.ticks = Os, t.tickStep = e, t.transpose = tf, t.variance = ks, t.zip = nf, t.entries = cf, t.keys = uf, t.values = af, t.map = o, t.set = l, t.nest = rf, t.randomUniform = sf, t.randomNormal = ff, t.randomLogNormal = lf, t.randomBates = pf, t.randomIrwinHall = hf, t.randomExponential = df, t.easeLinear = h, t.easeQuad = v, t.easeQuadIn = p, t.easeQuadOut = d, t.easeQuadInOut = v, t.easeCubic = g, t.easeCubicIn = _, t.easeCubicOut = y, t.easeCubicInOut = g, t.easePoly = gf, t.easePolyIn = _f, t.easePolyOut = yf, t.easePolyInOut = gf, t.easeSin = b, t.easeSinIn = m, t.easeSinOut = x, t.easeSinInOut = b, t.easeExp = T, t.easeExpIn = w, t.easeExpOut = M, t.easeExpInOut = T, t.easeCircle = S, t.easeCircleIn = N, t.easeCircleOut = k, t.easeCircleInOut = S, t.easeBounce = E, t.easeBounceIn = A, t.easeBounceOut = E, t.easeBounceInOut = C, t.easeBack = Lf, t.easeBackIn = Pf, t.easeBackOut = qf, t.easeBackInOut = Lf, t.easeElastic = Ff, t.easeElasticIn = Of, t.easeElasticOut = Ff, t.easeElasticInOut = If, t.polygonArea = Yf, t.polygonCentroid = Bf, t.polygonHull = Hf, t.polygonContains = Xf, t.polygonLength = Vf, t.path = L, t.quadtree = I, t.queue = Z, t.arc = gl, t.area = bl, t.line = xl, t.pie = Tl, t.radialArea = Sl, t.radialLine = kl, t.symbol = Wl, t.symbols = Vl, t.symbolCircle = Al, t.symbolCross = El, t.symbolDiamond = Pl, t.symbolSquare = Ol, t.symbolStar = Dl, t.symbolTriangle = Il,t.symbolWye = Xl,t.curveBasisClosed = Gl,t.curveBasisOpen = Jl,t.curveBasis = Zl,t.curveBundle = Ql,t.curveCardinalClosed = th,t.curveCardinalOpen = nh,t.curveCardinal = Kl,t.curveCatmullRomClosed = rh,t.curveCatmullRomOpen = ih,t.curveCatmullRom = eh,t.curveLinearClosed = oh,t.curveLinear = ml,t.curveMonotoneX = zt,t.curveMonotoneY = Pt,t.curveNatural = uh,t.curveStep = ah,t.curveStepAfter = Dt,t.curveStepBefore = Ut,t.stack = lh,t.stackOffsetExpand = hh,t.stackOffsetNone = sh,t.stackOffsetSilhouette = ph,t.stackOffsetWiggle = dh,t.stackOrderAscending = vh,t.stackOrderDescending = _h,t.stackOrderInsideOut = yh,t.stackOrderNone = fh,t.stackOrderReverse = gh,t.color = Bt,t.rgb = Vt,t.hsl = Gt,t.lab = tn,t.hcl = cn,t.cubehelix = ln,t.interpolate = hp,t.interpolateArray = op,t.interpolateDate = up,t.interpolateNumber = ap,t.interpolateObject = cp,t.interpolateRound = pp,t.interpolateString = lp,t.interpolateTransformCss = yp,t.interpolateTransformSvg = gp,t.interpolateZoom = Mp,t.interpolateRgb = ep,t.interpolateRgbBasis = rp,t.interpolateRgbBasisClosed = ip,t.interpolateHsl = Tp,t.interpolateHslLong = Np,t.interpolateLab = En,t.interpolateHcl = kp,t.interpolateHclLong = Sp,t.interpolateCubehelix = Ap,t.interpolateCubehelixLong = Ep,t.interpolateBasis = Kh,t.interpolateBasisClosed = tp,t.quantize = Cp,t.dispatch = Pn,t.dsvFormat = Lp,t.csvParse = Up,t.csvParseRows = Dp,t.csvFormat = Op,t.csvFormatRows = Fp,t.tsvParse = Yp,t.tsvParseRows = Bp,t.tsvFormat = jp,t.tsvFormatRows = Hp,t.request = Xp,t.html = Wp,t.json = $p,t.text = Zp,t.xml = Gp,t.csv = Qp,t.tsv = Kp,t.now = jn,t.timer = Vn,t.timerFlush = Wn,t.timeout = sd,t.interval = fd,t.timeInterval = Qn,t.timeMillisecond = pd,t.timeMilliseconds = dd,t.timeSecond = xd,t.timeSeconds = bd,t.timeMinute = wd,t.timeMinutes = Md,t.timeHour = Td,t.timeHours = Nd,t.timeDay = kd,t.timeDays = Sd,t.timeWeek = Ad,t.timeWeeks = Rd,t.timeSunday = Ad,t.timeSundays = Rd,t.timeMonday = Ed,t.timeMondays = Ud,t.timeTuesday = Cd,t.timeTuesdays = Dd;
            t.timeWednesday = zd;
            t.timeWednesdays = Od, t.timeThursday = Pd, t.timeThursdays = Fd, t.timeFriday = qd, t.timeFridays = Id, t.timeSaturday = Ld, t.timeSaturdays = Yd, t.timeMonth = Bd, t.timeMonths = jd, t.timeYear = Hd, t.timeYears = Xd, t.utcMillisecond = pd, t.utcMilliseconds = dd, t.utcSecond = xd, t.utcSeconds = bd, t.utcMinute = Vd, t.utcMinutes = Wd, t.utcHour = $d, t.utcHours = Zd, t.utcDay = Gd, t.utcDays = Jd, t.utcWeek = Qd, t.utcWeeks = ov, t.utcSunday = Qd, t.utcSundays = ov, t.utcMonday = Kd, t.utcMondays = uv, t.utcTuesday = tv, t.utcTuesdays = av, t.utcWednesday = nv, t.utcWednesdays = cv, t.utcThursday = ev, t.utcThursdays = sv, t.utcFriday = rv, t.utcFridays = fv, t.utcSaturday = iv, t.utcSaturdays = lv, t.utcMonth = hv, t.utcMonths = pv, t.utcYear = dv, t.utcYears = _v, t.formatLocale = Av, t.formatDefaultLocale = re, t.formatSpecifier = Nv, t.precisionFixed = Cv, t.precisionPrefix = zv, t.precisionRound = Pv, t.isoFormat = Ov, t.isoParse = Fv, t.timeFormatLocale = ae, t.timeFormatDefaultLocale = nr, t.scaleBand = or, t.scalePoint = ar, t.scaleIdentity = yr, t.scaleLinear = _r, t.scaleLog = Tr, t.scaleOrdinal = ir, t.scaleImplicit = jv, t.scalePow = kr, t.scaleSqrt = Sr, t.scaleQuantile = Ar, t.scaleQuantize = Er, t.scaleThreshold = Cr, t.scaleTime = e_, t.scaleUtc = r_, t.schemeCategory10 = o_, t.schemeCategory20b = u_, t.schemeCategory20c = a_, t.schemeCategory20 = c_, t.scaleSequential = Rr, t.interpolateCubehelixDefault = s_, t.interpolateRainbow = p_, t.interpolateWarm = f_, t.interpolateCool = l_, t.interpolateViridis = d_, t.interpolateMagma = v_, t.interpolateInferno = __, t.interpolatePlasma = y_, t.creator = b_, t.customEvent = Xr, t.local = Or, t.matcher = k_, t.mouse = P_, t.namespace = x_, t.namespaces = m_, t.select = dy, t.selectAll = vy, t.selection = Pi, t.selector = q_, t.selectorAll = R_, t.touch = _y, t.touches = yy, t.window = ty, t.active = tg, t.interrupt = Ay, t.transition = fo, t.axisTop = mo, t.axisRight = xo, t.axisBottom = bo, t.axisLeft = wo, t.cluster = cg,t.hierarchy = zo,t.pack = Mg,t.packSiblings = bg,t.packEnclose = xg,t.partition = kg,t.stratify = Cg,t.tree = zg,t.treemap = Rg,t.treemapBinary = Ug,t.treemapDice = Ng,t.treemapSlice = Pg,t.treemapSliceDice = Dg,t.treemapSquarify = Lg,t.treemapResquarify = Og,t.forceCenter = Fg,t.forceCollide = Bg,t.forceLink = jg,t.forceManyBody = Wg,t.forceSimulation = Vg,t.forceX = $g,t.forceY = Zg,t.drag = Kg,t.dragDisable = Jg,t.dragEnable = gu,t.voronoi = fm,t.zoom = dm,t.zoomIdentity = hm,t.zoomTransform = ra,t.brush = Cm,t.brushX = va,t.brushY = _a,t.brushSelection = da,t.chord = Dm,t.ribbon = Im,t.geoAlbers = ow,t.geoAlbersUsa = uw,t.geoArea = Vx,t.geoAzimuthalEqualArea = cw,t.geoAzimuthalEqualAreaRaw = aw,t.geoAzimuthalEquidistant = fw,t.geoAzimuthalEquidistantRaw = sw,t.geoBounds = Zx,t.geoCentroid = Jx,t.geoCircle = hb,t.geoClipExtent = mb,t.geoConicConformal = hw,t.geoConicConformalRaw = ls,t.geoConicEqualArea = iw,t.geoConicEqualAreaRaw = is,t.geoConicEquidistant = dw,t.geoConicEquidistantRaw = ps,t.geoDistance = Nb,t.geoEquirectangular = pw,t.geoEquirectangularRaw = hs,t.geoGnomonic = vw,t.geoGnomonicRaw = ds,t.geoGraticule = kb,t.geoInterpolate = Sb,t.geoLength = wb,t.geoMercator = lw,t.geoMercatorRaw = cs,t.geoOrthographic = _w,t.geoOrthographicRaw = vs,t.geoPath = Wb,t.geoProjection = ns,t.geoProjectionMutator = es,t.geoRotation = lb,t.geoStereographic = yw,t.geoStereographicRaw = _s,t.geoStream = Bx,t.geoTransform = Kb,t.geoTransverseMercator = gw,t.geoTransverseMercatorRaw = ys,Object.defineProperty(t, "__esModule", {value: !0})
        });

//When the service is called the user will be getting back the raw d3 IIFE object with all it's methods. Theorectically.
        return d3;

    };


    angular.module('angular-app').factory('d3Service', d3Service);


}());