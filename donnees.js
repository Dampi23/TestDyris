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

nombre_questions("4","8","12","16");
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


theme("La Loi d'Ohm");

debut("Questions sur la relation entre Tension, Courant et Résistance.");

quest("Quelle est la formule correcte de la Loi d'Ohm ?");
rep("[ ] P = U x I");
rep("[x] U = R x I");
rep("[ ] R = U x I");
rep("[ ] U = R / I");

quest("Si la résistance R augmente (dans un circuit simple), que fait l'intensité I ?");
rep("[ ] L'intensité augmente");
rep("[x] L'intensité diminue");
rep("[ ] L'intensité reste la même");

quest("Un appareil de 10 Ohms est branché sur 20 Volts. Quelle est l'intensité ? (I = U / R)");
rep("[ ] 0.5 Ampère");
rep("[x] 2 Ampères");
rep("[ ] 200 Ampères");


theme("Le Multimètre");

debut("Savoir utiliser les appareils de mesure.");

quest("Pour mesurer une tension (en Volts), comment branche-t-on le multimètre ?");
rep("[ ] En série (on coupe le circuit)");
rep("[x] En dérivation / parallèle (aux bornes du composant)");
rep("[ ] On ne le branche pas, on utilise une pince");

quest("Sur quel mode doit-on régler le multimètre pour mesurer un courant ?");
rep("[ ] Voltmètre");
rep("[x] Ampèremètre");
rep("[ ] Ohmmètre");

quest("Quelle borne est commune à toutes les mesures sur un multimètre ?");
rep("[ ] La borne V");
rep("[ ] La borne A");
rep("[x] La borne COM");


theme("Courant Continu (DC)");

debut("Le courant fourni par les piles et batteries.");

quest("Quel est le symbole du courant continu ?");
rep("[x] DC (ou un trait droit)");
rep("[ ] AC (ou une vague)");
rep("[ ] Hz");

quest("Dans un circuit en courant continu, les électrons circulent :");
rep("[x] Du pôle négatif vers le pôle positif");
rep("[ ] Du pôle positif vers le pôle négatif");
rep("[ ] Dans les deux sens alternativement");

quest("Laquelle de ces sources fournit du courant continu ?");
rep("[ ] Une prise de courant murale");
rep("[x] Une batterie de voiture");
rep("[ ] Un alternateur de centrale");


theme("Courant Alternatif (AC)");

debut("Le courant du secteur (maison).");

quest("Quel est le symbole du courant alternatif ?");
rep("[ ] DC");
rep("[x] AC (ou une sinusoïde ~)");
rep("[ ] + / -");

quest("En France, quelle est la fréquence du courant alternatif domestique ?");
rep("[ ] 20 Hz");
rep("[x] 50 Hz");
rep("[ ] 60 Hz");
rep("[ ] 230 Hz");

quest("Comment appelle-t-on la courbe représentative du courant alternatif ?");
rep("[ ] Une droite");
rep("[ ] Une parabole");
rep("[x] Une sinusoïde");


theme("Sécurité et Unités");

quest("Reliez chaque grandeur à son unité ://2");
rep("Tension : [Volt]");
rep("Intensité : [Ampère]");
rep("Résistance : [Ohm]");
rep("Puissance : [Watt]");

quest("Quel composant protège un circuit contre les surintensités ?");
rep("[ ] Une lampe");
rep("[x] Un fusible ou un disjoncteur");
rep("[ ] Un interrupteur");
rep("[ ] Une pile");
