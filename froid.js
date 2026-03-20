// LES OPTIONS

mode_presentation("1");
mode_evaluation("1");
mode_sauvegarde("1");
code("test","test");
code("essai","essai");
titre("Électricité Fondamentale");
introduction("Testez vos connaissances sur les bases de l'électricité.");
introduction("Thèmes abordés : Loi d'Ohm, Multimètre, AC/DC.");
introduction("Identifiant : \"test\" | Mot de passe : \"test\".");

nombre_questions("4","8","12","16", "20", "25", "30");
fenetre_info("MODE D'EMPLOI","pages/mode_emploi.html");
url_quitter("http://dyris.free.fr/");

coef_rep_juste("2");
coef_rep_fausse("-1");
coef_rep_nulle("0");
note_sur("20");

appreciation("16","20","C'est très bien !||Parfait !||Excellent travail !");
appreciation("13","16","Bon travail !");
appreciation("10","13","Ensemble moyen.");
appreciation("6","10","Vous devriez relire votre cours sur l'électricité.");
appreciation("0","6","Ne vous découragez pas ! Révisez les bases (Loi d'Ohm).");
non_termine("Vous avez quitté l'exercice sans avoir répondu à toutes les questions !");

juste("Parfait !||Excellent !||Juste !||Correct !||Bravo !");
faux("Non...||Faux...||Erreur...||Inexact...");
abandon("Tentez de répondre la prochaine fois !");
chronometre("45","Le temps imparti est écoulé ! Soyez plus vif.");


// LE QUESTIONNAIRE


theme("froid");

debut("Questionfroids sur la relation entre Tension, Courant et Résistance.");

quest("Quellefroid est la formule correcte de la Loi d'Ohm ?");
rep("[ ] P = U x I");
rep("[x] U = R x I");
rep("[ ] R = U x I");
rep("[ ] U = R / I");
