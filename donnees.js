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

nombre_questions("4","8","12","16", "20", "25");
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

theme("Les Moteurs Triphasés");

debut("Questions sur le fonctionnement et le câblage des moteurs triphasés.");

quest("Quelle est la fonction principale du stator dans un moteur asynchrone ?");
rep("[x] Transformer l'énergie électrique en énergie magnétique");
rep("[ ] Transformer l'énergie magnétique en énergie mécanique");
rep("[ ] Guider l'arbre moteur par rapport à l'ensemble fixe");

quest("Pourquoi le circuit magnétique est-il constitué d'un empilement de tôles feuilletées ?");
rep("[x] Pour limiter les pertes dues aux courants de Foucault");
rep("[ ] Pour augmenter la puissance mécanique");
rep("[ ] Pour faciliter le refroidissement par air");

quest("Sur un réseau 400 V triphasé, comment doit-on raccorder un moteur 230 V / 400 V ?");
rep("[ ] En couplage triangle (Δ)");
rep("[x] En couplage étoile (Y)");
rep("[ ] En raccordement direct monophasé");

quest("Quelle est la formule de la fréquence de rotation (n) du champ tournant ?");
rep("[ ] n = p / f");
rep("[ ] n = U / I");
rep("[x] n = f / p");

quest("Dans un moteur asynchrone, comment appelle-t-on la différence de vitesse entre le champ tournant et le rotor ?");
rep("[ ] Le déphasage");
rep("[x] Le glissement");
rep("[ ] La réluctance");

quest("Que se passe-t-il si l'on inverse deux phases à l'alimentation d'un moteur triphasé ?");
rep("[ ] Le moteur s'arrête immédiatement");
rep("[ ] La puissance utile est doublée");
rep("[x] Le sens de rotation s'inverse immédiatement");

quest("À combien peut s'élever l'intensité de démarrage par rapport au courant nominal ?");
rep("[ ] Elle reste identique");
rep("[ ] Environ 2 fois le courant nominal");
rep("[x] Environ 7 à 8 fois le courant nominal");

quest("Quel dispositif protège spécifiquement le moteur contre les surcharges modérées ?");
rep("[x] Le relais thermique");
rep("[ ] Le condensateur de démarrage");
rep("[ ] Le sectionneur");


quest("Quel est l'avantage principal du démarrage étoile-triangle ?");
rep("[ ] Augmenter le couple de démarrage");
rep("[x] Réduire le courant au moment du démarrage");
rep("[ ] Faire varier la vitesse de rotation");

quest("Que risque un moteur triphasé alimenté par seulement 2 phases au lieu de 3 ?");
rep("[x] Il va caler et risque de griller définitivement");
rep("[ ] Il passera automatiquement en mode monophasé");
rep("[ ] Il tournera plus vite");

theme("Synchrone vs Asynchrone");

debut("Différences fondamentales entre les technologies synchrones et asynchrones.");

quest("Quelle est la caractéristique principale du rotor d'un moteur synchrone ?");
rep("[ ] Il est constitué de conducteurs en court-circuit");
rep("[x] Il est constitué d'un aimant permanent ou alimenté en CC");
rep("[ ] Il est toujours en bois");

quest("Dans quel type de moteur la vitesse de rotation est-elle strictement égale à la vitesse du champ tournant ?");
rep("[x] Le moteur synchrone");
rep("[ ] Le moteur asynchrone");
rep("[ ] Le moteur universel");

quest("Un moteur asynchrone monophasé peut-il démarrer seul sans artifice ?");
rep("[x] Non, il ne crée pas de champ tournant initial");
rep("[ ] Oui, mais seulement dans le sens des aiguilles d'une montre");
rep("[ ] Oui, dès la mise sous tension");

quest("À quoi sert le condensateur sur un moteur asynchrone monophasé ?");
rep("[ ] À stocker de l'énergie pour les pannes");
rep("[x] À créer un déphasage pour générer un champ tournant de démarrage");
rep("[ ] À transformer le courant alternatif en continu");

quest("Où utilise-t-on principalement les moteurs à Spires de Frager ?");
rep("[x] Pour les petits appareils comme les ventilateurs ou sèche-cheveux");
rep("[ ] Pour la traction électrique lourde");
rep("[ ] Dans les centrales électriques");

quest("Quel est l'inconvénient majeur d'un moteur à Spires de Frager ?");
rep("[ ] Il est extrêmement bruyant");
rep("[x] Il possède une puissance très faible et un mauvais rendement");
rep("[ ] Il nécessite une maintenance quotidienne");

quest("Quelle est l'application typique d'un petit moteur synchrone monophasé ?");
rep("[x] Les horloges et programmateurs (vitesse constante)");
rep("[ ] Les perceuses à percussion");
rep("[ ] Les compresseurs industriels");

quest("Comment se comporte un moteur synchrone en cas de forte surcharge ?");
rep("[ ] Il glisse de 10%");
rep("[x] Il s'arrête et vibre");
rep("[ ] Il augmente sa vitesse");

quest("Lequel est le plus utilisé en industrie pour sa robustesse et son faible coût ?");
rep("[ ] Le moteur synchrone");
rep("[x] Le moteur asynchrone");
rep("[ ] Le moteur universel");

quest("Peut-on changer le sens de rotation d'un moteur à Spires de Frager ?");
rep("[ ] Oui, via un boîtier électronique");
rep("[ ] Oui, en inversant la fiche de courant");
rep("[x] Non, c'est impossible par construction");


theme("Technique du froid : Dépannage");
debut("Les différentes pannes classique dans un système frigorifique");
quest("Comment évolue la HP dans la panne d'un détendeur trop petit ?");
rep("[ ] Diminue");
rep("[ ] Reste égale");
rep("[x] Augmente");
aj("images/détendeur.png");

theme("Moteurs CC et Universel");
debut("Moteurs à courant continu, universels et technologies sans balais.");

quest("Pourquoi appelle-t-on un moteur 'universel' ?");
rep("[x] Car il peut fonctionner en courant continu et alternatif");
rep("[ ] Car il possède toutes les protections intégrées");
rep("[ ] Parce qu'il est vendu partout dans le monde");

quest("Quel composant est responsable de l'inversion du courant dans les bobines d'un moteur CC classique ?");
rep("[ ] Le roulement à billes");
rep("[ ] Le stator");
rep("[x] Le collecteur et les balais");


quest("Quelle est la formule de la force contre-électromotrice (E') d'un moteur CC ?");
rep("[ ] E' = U + RI");
rep("[ ] E' = P / I");
rep("[x] E' = U - RI");


quest("Quel est le principal inconvénient des moteurs CC à balais ?");
rep("[ ] Ils sont trop silencieux");
rep("[x] L'usure des balais nécessite un entretien régulier");
rep("[ ] Ils ne peuvent pas varier de vitesse");

quest("Quelle est la particularité d'un moteur 'Brushless' ?");
rep("[x] Il n'a pas de collecteur ni de balais (commutation électronique)");
rep("[ ] Il utilise des balais en or");
rep("[ ] Il fonctionne sans électricité");

quest("Dans un moteur Brushless, quel élément est généralement le rotor ?");
rep("[x] Un ou plusieurs aimants permanents");
rep("[ ] Un noyau de fer doux uniquement");
rep("[ ] Une bobine de cuivre");

quest("À quoi servent les capteurs à effet Hall dans un moteur Brushless ?");
rep("[ ] À mesurer la température");
rep("[x] À connaître la position du rotor pour piloter les bobines");
rep("[ ] À protéger contre les courts-circuits");

quest("Quel type de moteur offre la plus grande précision pour le positionnement (ex: imprimante) ?");
rep("[ ] Le moteur asynchrone");
rep("[x] Le moteur pas à pas");
rep("[ ] Le moteur universel");

quest("Que se passe-t-il si un moteur CC est bloqué mécaniquement alors qu'il est sous tension ?");
rep("[ ] La tension s'annule");
rep("[x] Le courant devient très élevé et risque d'endommager le moteur");
rep("[ ] Il passe en mode générateur");

quest("Comment varie la vitesse d'un moteur universel ?");
rep("[ ] Elle ne dépend que du nombre de pôles");
rep("[ ] Elle est fixe à 3000 tr/min");
rep("[x] Elle est proportionnelle à la tension d'alimentation");
quest("CC1 - Quel composant permet d'inverser le sens du courant dans un moteur à courant continu ?");
rep("[ ] L'inducteur");
rep("[ ] Les paliers");
rep("[ ] Le rotor seul");
rep("[ ] Le stator");
rep("[x] Le collecteur et les balais");

quest("CC2 - Quel est le principal usage des moteurs à courant continu de faible puissance ?");
rep("[ ] Applications industrielles de haute puissance");
rep("[ ] Alimentation de réseaux électriques");
rep("[ ] Transmission de données");
rep("[ ] Conversion d'énergie solaire");
rep("[x] Applications portatives comme les jouets ou brosses à dents");

quest("CC3 - Quel est le principal inconvénient du moteur à courant continu par rapport aux machines asynchrones ?");
rep("[ ] Il ne fonctionne qu’en courant alternatif");
rep("[x] Il est moins robuste");
rep("[ ] Il ne peut pas être réversible");
rep("[ ] Il ne peut pas réguler la vitesse");

quest("CC4 - Quelle est la fonction principale du stator dans un moteur à courant continu à aimant permanent ?");
rep("[ ] Supporter le rotor mécaniquement");
rep("[x] Créer un flux magnétique fixe");
rep("[ ] Fournir un courant électrique au rotor");
rep("[ ] Inverser le sens du courant");
rep("[ ] Générer un courant alternatif");

quest("CC5 - Quelle est la conséquence d'une pression insuffisante des balais sur le collecteur ?");
rep("[ ] Une meilleure conduction électrique");
rep("[ ] Une réduction de la consommation électrique");
rep("[ ] Une usure plus lente des composants");
rep("[ ] Une augmentation de la vitesse de rotation");
rep("[x] La formation d'arcs électriques et des parasites");

quest("CC6 - Quelle est la principale caractéristique du moteur à courant continu à aimant permanent ?");
rep("[ ] Il nécessite une alimentation en courant alternatif");
rep("[x] Il utilise des aimants permanents pour le stator");
rep("[ ] Il fonctionne uniquement avec une excitation à électroaimant");
rep("[ ] Il ne comporte pas de collecteur ni de balais");
rep("[ ] Il ne peut pas être utilisé dans des applications portatives");

quest("CC7 - Quelle relation exprime la puissance mécanique en fonction du couple et de la vitesse de rotation ?");
rep("[ ] P = V × I");
rep("[ ] P = R × I²");
rep("[ ] P = U × I");
rep("[ ] P = N × Ø");
rep("[x] P = C × ω");

quest("CC8 - Dans un moteur à courant continu à excitation, que peut faire le moteur en mode générateur ?");
rep("[ ] Fonctionner sans alimentation extérieure");
rep("[x] Restituer de l’énergie au réseau");
rep("[ ] Ne pas fonctionner en mode générateur");
rep("[ ] Produire un courant alternatif");
rep("[ ] Consommer de l’énergie uniquement");

quest("CC9 - Quel est le rôle du rotor dans un moteur à courant continu ?");
rep("[ ] Il sert uniquement de support mécanique");
rep("[x] Il comporte des bobinages qui créent le champ magnétique");
rep("[ ] Il fixe le stator");
rep("[ ] Il ne participe pas au fonctionnement électrique");
rep("[ ] Il génère le flux magnétique fixe");

quest("CC10 - Quel est l'avantage principal du moteur à courant continu avec variateur électronique ?");
rep("[ ] Il ne produit pas de parasites électriques");
rep("[ ] Il est plus robuste que les moteurs asynchrones");
rep("[x] Il offre une large plage de variation de vitesse");
rep("[ ] Il fonctionne sans alimentation électrique");
rep("[ ] Il ne nécessite pas d'entretien");

quest("CC11 - Quelle est la relation correcte entre la tension appliquée au moteur à courant continu et sa vitesse de rotation ?");
rep("[ ] La tension n’a aucun effet sur la vitesse");
rep("[ ] Plus la tension est élevée, plus le couple diminue systématiquement");
rep("[x] Une augmentation de la tension entraîne une augmentation de la vitesse de rotation");
rep("[ ] Une baisse de la tension fait augmenter la vitesse");
rep("[ ] La tension ne sert qu’à alimenter les balais et n’influence pas le moteur");

quest("CC12 - Pourquoi un moteur à courant continu possède-t-il un couple de démarrage élevé ?");
rep("[ ] Parce que la tension est automatiquement multipliée au démarrage");
rep("[ ] Parce que le stator produit un flux magnétique variable");
rep("[x] Parce que le courant dans l’induit est élevé à basse vitesse");
rep("[ ] Parce que le collecteur supprime totalement les pertes électriques");
rep("[ ] Parce que la vitesse de rotation est maximale au démarrage");

quest("CC13 - Quel est le rôle principal du collecteur dans un moteur à courant continu ?");
rep("[ ] Diminuer la résistance de l’induit");
rep("[x] Assurer la commutation du courant entre les bobines du rotor");
rep("[ ] Réguler la vitesse automatiquement");
rep("[ ] Alimenter directement le stator");
rep("[ ] Transformer le courant continu en courant alternatif");

quest("CC14 - Quelle action permet de changer le sens de rotation d’un moteur à courant continu ?");
rep("[ ] Changer uniquement la position du stator");
rep("[ ] Inverser les polarités du collecteur");
rep("[ ] Réduire la tension d’alimentation");
rep("[ ] Modifier la fréquence d'alimentation");
rep("[x] Inverser la polarité de l’alimentation du rotor (ou de l’induit)");

quest("Q15 - Quelle est l’influence de la charge mécanique sur la vitesse d’un moteur à courant continu ?");
rep("[x] Une augmentation de la charge tend à diminuer la vitesse");
rep("[ ] Une augmentation de la charge augmente la vitesse");
rep("[ ] La charge n’a aucun effet sur la vitesse");
rep("[ ] La charge modifie seulement la tension, pas la vitesse");
rep("[ ] La charge fait varier uniquement la direction du flux magnétique");

quest("CC16 - Pourquoi doit-on entretenir régulièrement les balais d’un moteur à courant continu ?");
rep("[ ] Pour augmenter la tension fournie au moteur");
rep("[ ] Pour empêcher le moteur de fonctionner à vide");
rep("[x] Pour limiter l’usure, les arcs électriques et garantir une bonne conduction");
rep("[ ] Pour éliminer le flux magnétique du stator");
rep("[ ] Pour éviter que le moteur tourne trop vite");

quest("CC17 - Dans un moteur à courant continu, que se passe-t-il lorsque la vitesse augmente ?");
rep("[ ] Le courant dans l’induit augmente systématiquement");
rep("[ ] Le couple augmente proportionnellement");
rep("[ ] La tension d’alimentation diminue automatiquement");
rep("[ ] Le flux magnétique du stator devient variable");
rep("[x] La force contre-électromotrice (f.c.é.m) augmente");

quest("CC18 - Lorsqu’un moteur à courant continu est bloqué mécaniquement (rotor immobile), que se passe-t-il ?");
rep("[ ] La force contre-électromotrice augmente fortement");
rep("[ ] Le moteur continue à tourner à faible vitesse");
rep("[ ] Le couple devient nul et la température diminue");
rep("[x] Le courant dans l’induit devient très élevé et risque d’endommager le moteur");
rep("[ ] Le moteur génère spontanément du courant");

theme("Pannes des systèmes frigorifiques");
debut("Dépannage commun des systèmes frigorifique.");

quest("P001 - Surchauffe importante, sous-refroidissement faible et BP faible sont les symptôme de :");
rep("[x] manque de fluide frigorigène");
rep("[ ] détendeur déréglé");
rep("[ ] évaporateur encrassé");
rep("[ ] déshydrateur bouché");

quest("P002 - Surchauffe faible et sous-refroidissement faible sont les symptômes de :");
rep("[ ] clapet de compresseur cassé");
rep("[ ] excès de fluide frigorigène");
rep("[ ] filtre à l'aspiration bouché");
rep("[x] détendeur trop ouvert");

quest("P003 - BP normale à légèrement haute et HP haute :");
rep("[ ] excès de fluide frigorigène");
rep("[ ] présence d'incondensable");
rep("[x] les deux réponses");

quest("P004 - Les symptômes pour un manque de fluide frigorigène sont :");
rep("[x] surchauffe élevée et sous-refroidissement faible");
rep("[ ] surchauffe faible et sous-refroidissement élevé");
rep("[ ] surchauffe faible et sous-refroidissement faible");
rep("[ ] surchauffe élevée et sous-refroidissement élevée");

quest("P005 - Les symptômes pour un ventilateur de l'évaporateur en panne sont :");
rep("[ ] BP haute");
rep("[x] BP faible");
rep("[ ] HP haute");
rep("[ ] HP faible");

quest("P006 - La présence d'incondensable dans un circuit frigorifique génère :");
rep("[x] une augmentation de la HP");
rep("[ ] une augmentation de la BP");
rep("[ ] une diminution de la BP");
rep("[ ] une augmentation de la surchauffe");

quest("P007 - Un sous-refroidissement qui augmente génère :");
rep("[ ] pas de changement de la production frigorifique");
rep("[x] une augmentation de la production frigorifique");
rep("[ ] une diminution de la production frigorifique");
rep("[ ] une augmentation de la surchauffe");

quest("P008 - La surchauffe est la différence entre :");
rep("[ ] température au bulbe et HP");
rep("[ ] BP et HP");
rep("[x] température au bulbe et BP");
rep("[ ] température d'aspiration et BP");

quest("P009 - Le sous-refroidissement est la différence entre :");
rep("[ ] température de refoulement et HP");
rep("[x] température sortie condenseur et HP");
rep("[ ] BP et HP");
rep("[ ] température au bulbe et BP");

quest("P010 - Le ventilateur en panne d'un condenseur à air provoque :");
rep("[x] une augmentation de la HP");
rep("[x] une augmentation du taux de compression");
rep("[ ] une augmentation du sous-refroidissement");

quest("P011 - La prise en glace d'un évaporateur à air peut être due à :");
rep("[x] BP faible");
rep("[x] système de dégivrage défectueux");
rep("[x] manque de débit d'air à l'évaporateur");
rep("[x] humidité dans la chambre froide");

quest("P012 - Un pompage du détendeur peut être dû à :");
rep("[x] détendeur trop puissant");
rep("[ ] manque de fluide dans l'installation");
rep("[ ] excès de fluide dans l'installation");
rep("[x] détendeur trop ouvert");

quest("P013 - À surchauffe trop élevée correspond, sans aucun doute, à :");
rep("[ ] détendeur trop ouvert");
rep("[ ] excès de fluide dans l'installation");
rep("[x] on ne peut pas diagnostiquer précisément");
rep("[ ] détendeur trop fermé");

quest("P014 - Sur un détendeur, si le bulbe est percé :");
rep("[x] le détendeur se ferme");
rep("[ ] tout le fluide de l'installation peut être perdu");
rep("[ ] le détendeur s'ouvre");
rep("[ ] excès de fluide dans l'installation");

quest("P015 - Des incondensables dans un circuit frigorifique provoque :");
rep("[ ] diminution de la consommation électrique du compresseur");
rep("[ ] augmentation de la surchauffe");
rep("[x] augmentation HP");
rep("[x] augmentation température de refoulement compresseur");

quest("P016 - Des incondensables dans un circuit frigorifique provoque :");
rep("[ ] augmentation de la puissance frigorifique");
rep("[x] augmentation de la consommation électrique du compresseur");
rep("[ ] diminution de la surchauffe");
rep("[x] augmentation de la température de condensation");

quest("P017 - Un excès de fluide dans un circuit frigorifique provoque :");
rep("[ ] augmentation de la surchauffe");
rep("[x] augmentation HP");
rep("[ ] diminution de la consommation électrique du compresseur");
rep("[x] augmentation température de refoulement compresseur");

quest("P018 - Un excès de fluide dans un circuit frigorifique provoque :");
rep("[x] augmentation de la consommation électrique du compresseur");
rep("[x] augmentation de la puissance frigorifique");
rep("[ ] diminution de la surchauffe");
rep("[ ] augmentation de la température de condensation");

quest("P019 - Un manque de fluide dans un circuit frigorifique provoque :");
rep("[x] diminution de la température d'évaporation");
rep("[x] surchauffe importante");
rep("[x] diminution de la température de condensation");
rep("[ ] sous-refroidissement élevé");

quest("P020 - Un manque de fluide dans un circuit frigorifique provoque :");
rep("[ ] surchauffe faible");
rep("[x] diminution de la BP");
rep("[x] sous-refroidissement faible");
rep("[x] puissance frigorifique faible");

quest("P021 - Un condenseur à air encrassé provoque :");
rep("[ ] surchauffe élevée");
rep("[x] HP élevée");
rep("[x] diminution du Δt sur l'air (temp. sortie d'air - temp. entrée d'air)");
rep("[x] diminution de la puissance frigorifique");

quest("P022 - Voici une installation au R22 et les mesures suivantes (points de mesure entre crochets). BP : -8 °C et HP : 35 °C. [5] : 31 °C et [12] : 0 °C. Qu'en déduisez-vous ?");
rep("[x] sous-refroidissement correcte");
rep("[ ] surchauffe trop élevée");
rep("[ ] sous-refroidissement trop faible");
rep("[x] surchauffe correcte");
aj("images/p022.png");

quest("P023 - Le sous-refroidissement donne une indication sur :");
rep("[ ] la nature du fluide frigorigène");
rep("[x] la charge en fluide frigorigène");
rep("[ ] le réglage du détendeur");

quest("P024 - Avec une installation au R134a en fonctionnement normal, la température d'entrée d'air au condenseur est de 20 °C, on aura alors environ :");
rep("[ ] HP de 12 bar");
rep("[x] HP de 8 bar");
rep("[ ] HP de 14 bar");

quest("P025 - Quelle zone n'appartient pas à l'évaporateur :");
rep("[ ] la surchauffe");
rep("[ ] l'évaporation");
rep("[x] la désurchauffe");

quest("P026 - En fonctionnement normal, la surchauffe doit être comprise entre :");
rep("[x] 5 et 8 °C");
rep("[ ] 0 et 4 °C");
rep("[ ] 10 et 15 °C");

quest("P027 - La valeur de la surchauffe dépend du fluide utilisé :");
rep("[ ] vrai");
rep("[x] faux");

quest("P028 - Si la surchauffe est trop grande, alors on aura :");
rep("[x] une mauvaise puissance frigorifique");
rep("[ ] une BP élevée");
rep("[ ] des risques de coup de liquide");

quest("P029 - Si la surchauffe est trop grande, on risque :");
rep("[x] d'avoir une température de refoulement trop élevée");
rep("[ ] d'avoir une prédétente");
rep("[ ] d'abimer le détendeur");

quest("P030 - L'ensemble de l'installation est bien réglé, sauf la surchauffe qui est trop faible. Alors je ne pourrais jamais avoir :");
rep("[x] une BP faible");
rep("[ ] une mauvaise puissance frigorifique");
rep("[ ] des coups de liquide");

quest("P031 - Si la BP diminue, alors :");
rep("[ ] on piège moins d'eau sur l'évaporateur");
rep("[x] l'humidité relative de la chambre froide diminue");
rep("[ ] la puissance frigorifique augmente");

quest("P032 - Si la BP augmente, alors :");
rep("[x] le débit masse augmente");
rep("[ ] la puissance frigorifique diminue");
rep("[ ] la HP diminue");

quest("P033 - Si la HP augmente, alors :");
rep("[x] la puissance frigorifique diminue");
rep("[ ] le débit masse augmente");
rep("[ ] la puissance du détendeur diminue");

quest("P034 - Si la HP diminue, alors :");
rep("[ ] la température d'entrée d'air au condenseur a augmenté");
rep("[x] l'intensité absorbée par le moteur du compresseur diminue");
rep("[ ] le débit masse diminue");

quest("P035 - Une installation a été prévue pour fonctionner au R134a :");
rep("[ ] impossible de démarrer l'installation sans détendeur au R134a");
rep("[x] un détendeur au R12 fera l'affaire");

quest("P036 - L'installation étant en fonctionnement, que se passe-t-il si on coupe le capillaire du détendeur thermostatique ?");
rep("[ ] une fuite va se déclarer et risquer de vider l'ensemble de l'installation");
rep("[ ] le détendeur va fonctionner sans contrôle de la surchauffe");
rep("[x] le pressostat BP va arrêter le compresseur");

quest("P037 - Si l'hélice d'un ventilateur d'évaporateur est bloquée :");
rep("[ ] rien ne se passe");
rep("[x] le thermique du moteur va couper");
rep("[ ] le fusible de protection va fondre");

theme("La physique du froid");
debut("La physique du froid.");
quest("Q001. - La puissance au condenseur à air est déterminée par la formule :");
rep("[ ] ρ =m/V");
rep("[ ] Δp = ρ.g.h");
rep("[ ] F = m.g");
rep("[x] Φk = K.S.Δθ");

quest("Q002. - La variation de pression est déterminée par la formule :");
rep("[ ] Φk = K.S.Δθ");
rep("[ ] F = m.g");
rep("[ ] ρ = m/V");
rep("[x] Δp = ρ.g.h");

quest("Q003. - La force est déterminée par la formule :");
rep("[x] F = m.g");
rep("[ ] ρ = m/V");
rep("[ ] Δp = ρ.g.h");
rep("[ ] Φk = K.S.Δθ");

quest("Q004. - La masse volumique est déterminée par la formule :");
rep("[x] ρ = m/V");
rep("[ ] Φk = K.S.Δθ");
rep("[ ] F = m.g");
rep("[ ] Δp = ρ.g.h");

quest("Q005. - La chaleur latente de vaporisation de l'eau est :");
rep("[ ] 334 kJ.kg-1 (autre notation 334 kJ/kg)");
rep("[ ] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");
rep("[x] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");

quest("Q006. - La chaleur massique de l'eau liquide est :");
rep("[ ] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");
rep("[ ] 334 kJ.kg-1 (autre notation 334 kJ/kg)");
rep("[x] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");

quest("Q007. - La chaleur latente de fusion de la glace est :");
rep("[ ] 4,185 kJ.kg-1.K-1 (autre notation 4,185 kJ/(kg.K) )");
rep("[ ] 2 258 kJ.kg-1 (autre notation 2 258 kJ/kg)");
rep("[x] 334 kJ.kg-1 (autre notation 334 kJ/kg)");

quest("Q008. - L'unité de mesure principale de la pression est :");
rep("[ ] le bar (bar)");
rep("[x] le pascal (Pa)");
rep("[ ] le joule (J)");
rep("[ ] le kelvin (K)");

quest("Q009. - L'unité de mesure usuelle de la pression est :");
rep("[ ] le joule (J)");
rep("[ ] le pascal (Pa)");
rep("[ ] le kelvin (K)");
rep("[x] le bar (bar)");

quest("Q010. - L'unité de mesure principale de la température est :");
rep("[ ] le pascal (Pa)");
rep("[ ] le degré Celcius (°C)");
rep("[ ] le bar (bar)");
rep("[x] le kelvin (K)");

quest("Q011. - L'unité de mesure principale de l'énergie (ou travail) est :");
rep("[x] le joule (J)");
rep("[ ] le bar (bar)");
rep("[ ] le kelvin (K)");
rep("[ ] le pascal (Pa)");

quest("Q012. - L'intensité d'un courant électrique se mesure par :");
rep("[ ] le volt (V)");
rep("[ ] le kelvin (K)");
rep("[ ] le joule (J)");
rep("[x] l'ampère (A)");

quest("Q013. - L'unité de mesure de la tension d'un circuit électrique est :");
rep("[ ] le joule (J)");
rep("[x] le volt (V)");
rep("[ ] l'ampère (A)");
rep("[ ] le kelvin (K)");

quest("Q014. - L'unité de mesure de la résistance électrique est :");
rep("[ ] volt (V)");
rep("[ ] ampère (A)");
rep("[ ] joule (J)");
rep("[x] ohm (Ω)");

quest("Q015. - L'unité de mesure de la fréquence est :");
rep("[ ] le joule (J)");
rep("[x] le hertz (Hz)");
rep("[ ] l'ohm (Ω)");
rep("[ ] le volt (V)");

quest("Q016. - Le zéro absolu correspond à :");
rep("[x] -273,15 °C");
rep("[ ] -40 °F");
rep("[ ] 0 °C");

quest("Q017. - La température de -40 °C est équivalente à :");
rep("[ ] 32 °F");
rep("[ ] 0 °F");
rep("[ ] -18 °F");
rep("[x] -40 °F");

quest("Q018. - λ (lambda) est le symbole pour représenter la conductivité thermique. Quelle est son unité de mesure ?");
rep("[x] W.m-1.K-1 (autre notation : W/(m.K) )");
rep("[ ] W.m-2.K-1 (autre notation : W/(m2.K) )");
rep("[ ] m2.K.W-1 (autre notation : m2.K/W )");
rep("[ ] m.K.W-1 (autre notation : m.K/W )");

quest("Q019. - Quel est le nom de naissance de Lord Kelvin ?");
rep("[ ] Mickael Faraday");
rep("[x] William Thomson");
rep("[ ] Sadi Carnot");
rep("[ ] Celcius");

quest("Q020. - Sélectionner les égalités correctes :");
rep("[x] 1 W = 1 J/s");
rep("[x] -40 °C = -40 °F");
rep("[x] 1 bar = 100 000 Pa");
rep("[x] 1 atm = 1013 hPa");

quest("Q021. - La loi de Charles est : p1/T1 = p2/T2 , avec :");
rep("[ ] p en bar relatif et T en kelvin (K)");
rep("[x] p en bar absolu et T en kelvin (K)");
rep("[ ] p en bar relatif et T en degré Celcius (°C)");

quest("Q022. - La température de 0 °C est équivalente à :");
rep("[x] 32 °F");
rep("[ ] 0 °F");
rep("[ ] -18 °F");
rep("[ ] -40 °F");

quest("Q023. - La température de 0 °F est proche de :");
rep("[ ] 37 °C");
rep("[ ] 0 °C");
rep("[ ] -18 °C");
rep("[x] -40 °C");

quest("Q024. - Identifier la ou les bonnes notations pour le kilowattheure :");
rep("[ ] Kwh");
rep("[ ] KWh");
rep("[ ] kwh");
rep("[x] kWh");

quest("Q025. - Identifier la ou les bonnes notations pour le kilogramme :");
rep("[x] kg");
rep("[ ] Kgs");
rep("[ ] Kg");
rep("[ ] kgs");

quest("Q026. - Identifier la ou les bonnes notations pour le kilomètre :");
rep("[ ] Kms");
rep("[ ] Km");
rep("[x] km");
rep("[ ] kms");

quest("Q027. - Identifier la bonne notation pour le symbole de l'unité de mesure de la pression en pascal :");
rep("[ ] pa");
rep("[x] Pa");

quest("Q028. - Identifier la bonne notation pour le symbole de l'unité de mesure de la pression en bar :");
rep("[ ] Bar");
rep("[x] bar");

quest("Q029. - Identifier la bonne notation pour le symbole de l'unité de mesure de la température en kelvin :");
rep("[x] K");
rep("[ ] °K");

quest("Q030. - R est le symbole pour représenter la résistance thermique. Quelle est son unité de mesure ?");
rep("[ ] m.K.W-1 (autre notation : m.K/W )");
rep("[ ] W.m-1.K-1 (autre notation : W/(m.K) )");
rep("[ ] W.m-2.K-1 (autre notation : W/(m2.K) )");
rep("[x] m2.K.W-1 (autre notation : m2.K/W )");

