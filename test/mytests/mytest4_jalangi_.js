J$.iids = {"8":[10,5,10,19],"9":[2,10,2,17],"10":[10,5,10,19],"16":[11,5,11,29],"17":[2,18,2,22],"18":[11,5,11,29],"24":[12,5,12,25],"25":[2,10,2,23],"26":[12,5,12,25],"32":[15,5,15,25],"33":[2,10,2,23],"34":[15,5,15,25],"41":[2,10,2,23],"49":[6,13,6,15],"57":[6,23,6,30],"65":[6,32,6,36],"73":[6,13,6,37],"75":[6,13,6,22],"81":[6,13,6,37],"89":[6,13,6,37],"97":[7,16,7,18],"105":[7,26,7,36],"113":[7,38,7,46],"121":[7,16,7,47],"123":[7,16,7,25],"129":[7,16,7,47],"137":[7,16,7,47],"145":[10,5,10,10],"153":[10,14,10,19],"161":[11,5,11,13],"169":[11,17,11,29],"177":[12,5,12,13],"185":[12,17,12,25],"193":[15,5,15,13],"201":[15,17,15,25],"209":[16,16,16,28],"217":[16,16,16,28],"225":[16,5,16,29],"233":[17,13,17,17],"241":[17,13,17,17],"249":[17,5,17,18],"257":[1,1,19,20],"265":[1,1,19,20],"273":[1,1,19,20],"281":[1,1,19,20],"289":[10,1,10,23],"297":[11,1,11,33],"305":[12,1,12,29],"313":[15,1,18,2],"321":[1,1,19,20],"329":[1,1,19,20],"nBranches":8,"originalCodeFileName":"/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest4.js","instrumentedCodeFileName":"/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest4_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\nvar S$ = require('S$');\n\n/* SYMBOLIC VARS */\n// var ucon_x = S$.symbol('ucon_x', true);\nvar con_y = S$.symbol('con_y', true);\nvar str_test = S$.symbol('str_test', 'string')\n\n/* NECESSARY CONRETE TEST */\nif (con_y == false) {}\nif (str_test == 'not_string') {}\nif (str_test == 'string') {}\n\n/* MAIN JS PROGRAM */\nif (str_test == 'string') {\n    str_test = 'not_string'\n    con_y = true\n}\n/// END OF FILE ///\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(257, '/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest4_jalangi_.js', '/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest4.js');
            J$.N(265, 'S$', S$, 0);
            J$.N(273, 'con_y', con_y, 0);
            J$.N(281, 'str_test', str_test, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var con_y = J$.X1(89, J$.W(81, 'con_y', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'con_y', 21, false), J$.T(65, true, 23, false)), con_y, 3));
            var str_test = J$.X1(137, J$.W(129, 'str_test', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, 'str_test', 21, false), J$.T(113, 'string', 21, false)), str_test, 3));
            if (J$.X1(289, J$.C(8, J$.B(10, '==', J$.R(145, 'con_y', con_y, 1), J$.T(153, false, 23, false), 0)))) {
            }
            if (J$.X1(297, J$.C(16, J$.B(18, '==', J$.R(161, 'str_test', str_test, 1), J$.T(169, 'not_string', 21, false), 0)))) {
            }
            if (J$.X1(305, J$.C(24, J$.B(26, '==', J$.R(177, 'str_test', str_test, 1), J$.T(185, 'string', 21, false), 0)))) {
            }
            if (J$.X1(313, J$.C(32, J$.B(34, '==', J$.R(193, 'str_test', str_test, 1), J$.T(201, 'string', 21, false), 0)))) {
                J$.X1(225, str_test = J$.W(217, 'str_test', J$.T(209, 'not_string', 21, false), str_test, 2));
                J$.X1(249, con_y = J$.W(241, 'con_y', J$.T(233, true, 23, false), con_y, 2));
            }
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
