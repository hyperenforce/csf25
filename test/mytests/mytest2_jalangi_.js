J$.iids = {"8":[12,5,12,12],"9":[2,10,2,17],"10":[12,5,12,12],"16":[16,5,16,11],"17":[2,18,2,22],"24":[21,5,21,10],"25":[2,10,2,23],"33":[2,10,2,23],"41":[2,10,2,23],"49":[5,14,5,16],"57":[5,24,5,32],"65":[5,34,5,38],"73":[5,14,5,39],"75":[5,14,5,23],"81":[5,14,5,39],"89":[5,14,5,39],"97":[6,13,6,15],"105":[6,23,6,30],"113":[6,32,6,36],"121":[6,13,6,37],"123":[6,13,6,22],"129":[6,13,6,37],"137":[6,13,6,37],"145":[7,14,7,16],"153":[7,24,7,32],"161":[7,34,7,38],"169":[7,14,7,39],"171":[7,14,7,23],"177":[7,14,7,39],"185":[7,14,7,39],"193":[8,14,8,16],"201":[8,24,8,32],"209":[8,34,8,38],"217":[8,14,8,39],"219":[8,14,8,23],"225":[8,14,8,39],"233":[8,14,8,39],"241":[12,6,12,12],"249":[13,11,13,15],"257":[13,11,13,15],"265":[13,3,13,16],"273":[15,10,15,14],"281":[15,10,15,14],"289":[15,1,15,15],"297":[16,5,16,11],"305":[18,11,18,16],"313":[18,11,18,16],"321":[18,3,18,17],"329":[21,5,21,10],"337":[22,12,22,17],"345":[22,12,22,17],"353":[22,3,22,18],"361":[1,1,24,20],"369":[1,1,24,20],"377":[1,1,24,20],"385":[1,1,24,20],"393":[1,1,24,20],"401":[1,1,24,20],"409":[12,1,14,2],"417":[16,1,20,2],"425":[21,1,23,2],"433":[1,1,24,20],"441":[1,1,24,20],"nBranches":6,"originalCodeFileName":"/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest2.js","instrumentedCodeFileName":"/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest2_jalangi_.js","code":"/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */\nvar S$ = require('S$');\n\n/* SYMBOLIC VARS */\nvar ucon_x = S$.symbol('ucon_x', true);\nvar con_y = S$.symbol('con_y', true);\nvar ucon_z = S$.symbol('ucon_z', true);\nvar supp_1 = S$.symbol('supp_1', true)\n// var supp_2 = S$.symbol('supp_2', true)\n\n/* MAIN JS PROGRAM */\nif (!supp_1){\n  con_y = true;\n}\nucon_z = true\nif (ucon_x){\n  // if (!supp_2){\n    con_y = false\n  // }\n}\nif (con_y){\n  ucon_z = false\n}\n/// END OF FILE ///\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(361, '/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest2_jalangi_.js', '/Users/tzuhan/+research/hyper_enforce/model_builder/mytests/mytest2.js');
            J$.N(369, 'S$', S$, 0);
            J$.N(377, 'ucon_x', ucon_x, 0);
            J$.N(385, 'con_y', con_y, 0);
            J$.N(393, 'ucon_z', ucon_z, 0);
            J$.N(401, 'supp_1', supp_1, 0);
            var S$ = J$.X1(41, J$.W(33, 'S$', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'S$', 21, false)), S$, 3));
            var ucon_x = J$.X1(89, J$.W(81, 'ucon_x', J$.M(73, J$.R(49, 'S$', S$, 1), 'symbol', 0)(J$.T(57, 'ucon_x', 21, false), J$.T(65, true, 23, false)), ucon_x, 3));
            var con_y = J$.X1(137, J$.W(129, 'con_y', J$.M(121, J$.R(97, 'S$', S$, 1), 'symbol', 0)(J$.T(105, 'con_y', 21, false), J$.T(113, true, 23, false)), con_y, 3));
            var ucon_z = J$.X1(185, J$.W(177, 'ucon_z', J$.M(169, J$.R(145, 'S$', S$, 1), 'symbol', 0)(J$.T(153, 'ucon_z', 21, false), J$.T(161, true, 23, false)), ucon_z, 3));
            var supp_1 = J$.X1(233, J$.W(225, 'supp_1', J$.M(217, J$.R(193, 'S$', S$, 1), 'symbol', 0)(J$.T(201, 'supp_1', 21, false), J$.T(209, true, 23, false)), supp_1, 3));
            if (J$.X1(409, J$.C(8, J$.U(10, '!', J$.R(241, 'supp_1', supp_1, 1))))) {
                J$.X1(265, con_y = J$.W(257, 'con_y', J$.T(249, true, 23, false), con_y, 2));
            }
            J$.X1(289, ucon_z = J$.W(281, 'ucon_z', J$.T(273, true, 23, false), ucon_z, 2));
            if (J$.X1(417, J$.C(16, J$.R(297, 'ucon_x', ucon_x, 1)))) {
                J$.X1(321, con_y = J$.W(313, 'con_y', J$.T(305, false, 23, false), con_y, 2));
            }
            if (J$.X1(425, J$.C(24, J$.R(329, 'con_y', con_y, 1)))) {
                J$.X1(353, ucon_z = J$.W(345, 'ucon_z', J$.T(337, false, 23, false), ucon_z, 2));
            }
        } catch (J$e) {
            J$.Ex(433, J$e);
        } finally {
            if (J$.Sr(441)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
