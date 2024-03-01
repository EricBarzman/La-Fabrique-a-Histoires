BEGIN;

INSERT INTO "themes" ("id", "name", "thumbnail_path") VALUES
(1, 'En ville', '/assets/themes/ville.jpg'),
(2, 'En vacances', '/assets/themes/vacances.jpg'),
(3, 'À l''école', '/assets/themes/ecole.jpg');

INSERT INTO "levels" ("id", "name", "value") VALUES
(1, 'facile', 1),
(2, 'moyen', 2),
(3, 'difficile', 3);

INSERT INTO "stories" ("id", "title", "level_id", "theme_id", "thumbnail_path") VALUES
(1, 'La luge', 1, 2, '/assets/story1/h1-thumbnail.jpg'),
(2, 'La cuisine avec papy', 1, 1, '/assets/story2/h2-thumbnail.jpg'),
(3, 'Je me promène', 1, 1, '/assets/story3/h3-thumbnail.jpg'),
(4, 'Visite à la ferme', 2, 3, '/assets/story4/h4-thumbnail.jpg'),
(5, 'Je m''amuse à la plage', 2, 2, '/assets/story5/h5-thumbnail.jpg'),
(6, 'Le partage', 2, 3, '/assets/story6/h6-thumbnail.jpg'),
(7, 'Le voyage', 3, 2, '/assets/story7/h7-thumbnail.jpg'),
(8, 'J''ai perdu mon groupe', 3, 2, '/assets/story8/h8-thumbnail.jpg');

INSERT INTO "blocks" ("id", "story_id", "alphanum", "type", "label_text", "choice_question", "background_img_path", "boy_character_img_path", "girl_character_img_path", "rest_img_path") VALUES
-- h1
(1, 1, 'A1', 'start', 'À la montagne, il y a de la neige partout !', NULL, '/assets/story1/h1a1-backgrd.jpg', '/assets/story1/h1a1-boy.jpg', '/assets/story1/h1a1-girl.jpg', '/assets/story1/h1a1-rest.jpg'),
(2, 1, 'B1', 'middle', 'Je descends la piste très vite sur ma luge !', NULL, '/assets/story1/h1b1-backgrd.jpg', '/assets/story1/h1b1-boy.jpg', '/assets/story1/h1b1-girl.jpg', '/assets/story1/h1b1-rest.jpg'),
(3, 1, 'C1', 'middle', 'Je suis arrivé en bas', 'Qu’est-ce que je fais ?', '/assets/story1/h1c1-backgrd.jpg', '/assets/story1/h1c1-boy.jpg', '/assets/story1/h1c1-girl.jpg', '/assets/story1/h1c1-rest.jpg'),
(4, 1, 'D1', 'end', 'Je prends un bon bain pour me réchauffer !', NULL, '/assets/story1/h1d1-backgrd.jpg', '/assets/story1/h1d1-boy.jpg', '/assets/story1/h1d1-girl.jpg', '/assets/story1/h1d1-rest.jpg'),
-- h2
(5, 2, 'A1', 'start', 'Aujourd’hui, on fait un gâteau avec Papy. Miam, ça va être bon !', NULL, '/assets/story2/h2a1-backgrd.jpg', '/assets/story2/h2a1-boy.jpg', '/assets/story2/h2a1-girl.jpg', '/assets/story2/h2a1-rest.jpg'), 
(6, 2, 'B1', 'middle', 'D’abord, il faut trouver les ingrédients !', NULL, '/assets/story2/h2b1-backgrd.jpg', '/assets/story2/h2b1-boy.jpg', '/assets/story2/h2b1-girl.jpg', '/assets/story2/h2b1-rest.jpg'),
(7, 2, 'C1', 'middle', 'Maintenant qu’on a les ingrédients, on va pouvoir préparer le gâteau !', 'Tu veux que l’on ajoute du chocolat ou des pommes ?', '/assets/story2/h2c1-backgrd.jpg', '/assets/story2/h2c1-boy.jpg', '/assets/story2/h2c1-girl.jpg', '/assets/story2/h2c1-rest.jpg'),
(8, 2, 'D1', 'end', 'On a fait un superbe gâteau à la pomme et ça sent bon dans la cuisine', NULL, '/assets/story2/h2d1-backgrd.jpg', '/assets/story2/h2d1-boy.jpg', '/assets/story2/h2d1-girl.jpg', '/assets/story2/h2d1-rest.jpg'),
(9, 2, 'D2', 'end', 'On a fait un superbe gâteau au chocolat et ça sent bon dans la cuisine', NULL, '/assets/story2/h2d2-backgrd.jpg', '/assets/story2/h2d2-boy.jpg', '/assets/story2/h2d2-girl.jpg', '/assets/story2/h2d2-rest.jpg'),
-- h3
(10, 3, 'A1', 'start', 'Je me promène dans la rue', NULL,'/assets/story3/h3a1-backgrd.jpg', '/assets/story3/h3a1-boy.jpg', '/assets/story3/h3a1-girl.jpg', '/assets/story3/h3a1-rest.jpg'), 
(11, 3, 'B1', 'middle', 'Je suis à un croisement', 'Où dois-je aller ?', '/assets/story3/h3b1-backgrd.jpg', '/assets/story3/h3b1-boy.jpg', '/assets/story3/h3b1-girl.jpg', '/assets/story3/h3b1-rest.jpg'),
(12, 3, 'C1', 'middle', 'Je joue avec des enfants, on s’amuse bien !', NULL, '/assets/story3/h3c1-backgrd.jpg', '/assets/story3/h3c1-boy.jpg', '/assets/story3/h3c1-girl.jpg', '/assets/story3/h3c1-rest.jpg'),
(13, 3, 'C2', 'middle', 'Je donne du pain aux canards', NULL, '/assets/story3/h3c2-backgrd.jpg', '/assets/story3/h3c2-boy.jpg', '/assets/story3/h3c2-girl.jpg', '/assets/story3/h3c2-rest.jpg'),
(14, 3, 'D1', 'end', 'Je rentre à la maison. J’ai passé une bonne journée', NULL, '/assets/story3/h3d1-backgrd.jpg', '/assets/story3/h3d1-boy.jpg', '/assets/story3/h3d1-girl.jpg', '/assets/story3/h3d1-rest.jpg'),
-- h4
(15, 4, 'A1', 'start', 'Bonjour les enfants, vous êtes à la petite ferme Lilas et Marguerite. Aujourd’hui, vous allez découvrir les animaux ', 'Vous voulez voir les lapins ou les chèvres, en premier ?', '/assets/story4/h4a1-backgrd.jpg', '/assets/story4/h4a1-boy.jpg', '/assets/story4/h4a1-girl.jpg', '/assets/story4/h4a1-rest.jpg'),
(16, 4, 'B1', 'middle', 'Les lapins sont si doux et mignons !', 'Que voulez-vous voir, maintenant ?','/assets/story4/h4b1-backgrd.jpg', '/assets/story4/h4b1-boy.jpg', '/assets/story4/h4b1-girl.jpg', '/assets/story4/h4b1-rest.jpg'),
(17, 4, 'B2', 'middle', 'Les chèvres ont des yeux bizarres, tout en ligne ! Mais elles sont gentilles »','Et maintenant, on va voir qui ?', '/assets/story4/h4b2-backgrd.jpg', '/assets/story4/h4b2-boy.jpg', '/assets/story4/h4b2-girl.jpg', '/assets/story4/h4b2-rest.jpg'),
(18, 4, 'C1', 'middle', 'Elles caquettent, les poules ! Elles n’aiment pas être seules ! Toujours avec une amie !', NULL,'/assets/story4/h4c1-backgrd.jpg', '/assets/story4/h4c1-boy.jpg', '/assets/story4/h4c1-girl.jpg', '/assets/story4/h4c1-rest.jpg'),
(19, 4, 'C2', 'middle', 'Les vaches sont des ruminants. Elles broutent tout le temps !', NULL,'/assets/story4/h4c2-backgrd.jpg', '/assets/story4/h4c2-boy.jpg', '/assets/story4/h4c2-girl.jpg', '/assets/story4/h4c2-rest.jpg'),
(20, 4, 'C3', 'middle', 'Les ânes ne sont pas bêtes, ils sont même très malins !', NULL, '/assets/story4/h4c3-backgrd.jpg', '/assets/story4/h4c3-boy.jpg', '/assets/story4/h4c3-girl.jpg', '/assets/story4/h4c3-rest.jpg'),
(21, 4, 'D1', 'end', 'J’espère que tu as appris plein de choses et aimé voir nos animaux. Au revoir, on se revoit vite !', NULL, '/assets/story4/h4d1-backgrd.jpg', '/assets/story4/h4d1-boy.jpg', '/assets/story4/h4d1-girl.jpg', '/assets/story4/h4d1-rest.jpg'),
(22, 4, 'D2', 'end', 'J’espère que tu as appris plein de choses et aimé voir nos animaux. Au revoir, on se revoit vite !', NULL, '/assets/story4/h4d2-backgrd.jpg', '/assets/story4/h4d2-boy.jpg', '/assets/story4/h4d2-girl.jpg', '/assets/story4/h4d2-rest.jpg'),
-- h5
(23, 5, 'A1', 'start', 'Je vais à la plage avec mes parents. Il fait beau !', 'Qu’est-ce que je fais ?', '/assets/story5/h5a1-backgrd.jpg', '/assets/story5/h5a1-boy.jpg', '/assets/story5/h5a1-girl.jpg', '/assets/story5/h5a1-rest.jpg'),
(24, 5, 'B1', 'middle', 'Dans la mer, je regarde le fond de l’eau avec mes lunettes', 'Où est-ce que je vais ?', '/assets/story5/h5b1-backgrd.jpg', '/assets/story5/h5b1-boy.jpg', '/assets/story5/h5b1-girl.jpg', '/assets/story5/h5b1-rest.jpg'),
(25, 5, 'B2', 'middle', 'Il y a plein de coquillage à ramasser. Mais aussi beaucoup de sable pour faire un château', 'Qu’est-ce que je veux faire ?', '/assets/story5/h5b2-backgrd.jpg', '/assets/story5/h5b2-boy.jpg', '/assets/story5/h5b2-girl.jpg', '/assets/story5/h5b2-rest.jpg'),
(26, 5, 'C1', 'middle', 'Dans l’eau, il y a une étoile de mer !', NULL, '/assets/story5/h5c1-backgrd.jpg', '/assets/story5/h5c1-boy.jpg', '/assets/story5/h5c1-girl.jpg', '/assets/story5/h5c1-rest.jpg'),
(27, 5, 'C2', 'middle', 'Dans l’eau, il y a des petits poissons !', NULL, '/assets/story5/h5c2-backgrd.jpg', '/assets/story5/h5c2-boy.jpg', '/assets/story5/h5c2-girl.jpg', '/assets/story5/h5c2-rest.jpg'),
(28, 5, 'C3', 'middle', 'Avec les coquillages que je ramasse, je fais un collier pour ma maman !', NULL, '/assets/story5/h5c3-backgrd.jpg', '/assets/story5/h5c3-boy.jpg', '/assets/story5/h5c3-girl.jpg', '/assets/story5/h5c3-rest.jpg'),
(29, 5, 'C4', 'middle', 'Je fais un grand château et mes parents me félicitent !', NULL, '/assets/story5/h5c4-backgrd.jpg', '/assets/story5/h5c4-boy.jpg', '/assets/story5/h5c4-girl.jpg', '/assets/story5/h5c4-rest.jpg'),
(30, 5, 'D1', 'end', 'Je sors de l’eau, je me sèche et je me repose après cette exploration.', NULL, '/assets/story5/h5d1-backgrd.jpg', '/assets/story5/h5d1-boy.jpg', '/assets/story5/h5d1-girl.jpg', '/assets/story5/h5d1-rest.jpg'),
(31, 5, 'D2', 'end', 'Après cet effort, je fais une bonne sieste.', NULL, '/assets/story5/h5d2-backgrd.jpg', '/assets/story5/h5d2-boy.jpg', '/assets/story5/h5d2-girl.jpg', '/assets/story5/h5d2-rest.jpg'),
-- h6
(32, 6, 'A1', 'start', 'Aujourd’hui, c’est peinture ! Il faut faire un beau dessin !', 'Je prends des couleurs le premier, ou bien j’attends ?', '/assets/story6/h6a1-backgrd.jpg', '/assets/story6/h6a1-boy.jpg', '/assets/story6/h6a1-girl.jpg', '/assets/story6/h6a1-rest.jpg'),
(33, 6, 'B1', 'middle', 'Je me mets à dessiner le plus vite possible !', NULL, '/assets/story6/h6b1-backgrd.jpg', '/assets/story6/h6b1-boy.jpg', '/assets/story6/h6b1-girl.jpg', '/assets/story6/h6b1-rest.jpg'),
(34, 6, 'B2', 'middle', 'Quand j’arrive, il n’y a plus qu’un tube moche.', NULL, '/assets/story6/h6b2-backgrd.jpg', '/assets/story6/h6b2-boy.jpg', '/assets/story6/h6b2-girl.jpg', '/assets/story6/h6b2-rest.jpg'),
(35, 6, 'C1', 'middle', 'Mon amie veut que je lui prête une couleur.', 'Est-ce que je prête ?', '/assets/story6/h6c1-backgrd.jpg', '/assets/story6/h6c1-boy.jpg', '/assets/story6/h6c1-girl.jpg', '/assets/story6/h6c1-rest.jpg'),
(36, 6, 'C2', 'middle', 'Mon amie est en train de dessiner.', 'J''ai envie d''une couleur', '/assets/story6/h6c2-backgrd.jpg', '/assets/story6/h6c2-boy.jpg', '/assets/story6/h6c2-girl.jpg', '/assets/story6/h6c2-rest.jpg'),
(37, 6, 'D1', 'end', 'J’ai fait un dessin. Il manque un peu des couleurs.', NULL, '/assets/story6/h6d1-backgrd.jpg', '/assets/story6/h6d1-boy.jpg', '/assets/story6/h6d1-girl.jpg', '/assets/story6/h6d1-rest.jpg'),
(38, 6, 'D2', 'end', 'Mon amie me donne une couleur que je n’ai pas. Avec toutes ces couleurs, on fait plein de dessins très beaux !', NULL, '/assets/story6/h6d2-backgrd.jpg', '/assets/story6/h6d2-boy.jpg', '/assets/story6/h6d2-girl.jpg', '/assets/story6/h6d2-rest.jpg'),
-- h7
(39, 7, 'A1', 'start', 'Avec maman, on doit aller voir mon petit ami de jeu. Il habite une autre ville, au bord de la mer !', 'Comment y va-t-on ?', '/assets/story7/h7a1-backgrd.jpg', '/assets/story7/h7a1-boy.jpg', '/assets/story7/h7a1-girl.jpg', '/assets/story7/h7a1-rest.jpg'),
(40, 7, 'B1', 'middle', 'Le bus nous emmène jusqu’à l’arrêt.', 'Et maintenant, que faisons-nous ?', '/assets/story7/h7b1-backgrd.jpg', '/assets/story7/h7b1-boy.jpg', '/assets/story7/h7b1-girl.jpg', '/assets/story7/h7b1-rest.jpg'),
(41, 7, 'B2', 'middle', 'En marchant, on trouve une trottinette électrique par terre !', 'Doit-on s’en servir ?', '/assets/story7/h7b2-backgrd.jpg', '/assets/story7/h7b2-boy.jpg', '/assets/story7/h7b2-girl.jpg', '/assets/story7/h7b2-rest.jpg'),
(42, 7, 'C1', 'middle', 'Je retrouve mon ami pour jouer chez lui aux lego !', NULL, '/assets/story7/h7c1-backgrd.jpg', '/assets/story7/h7c1-boy.jpg', '/assets/story7/h7c1-girl.jpg', '/assets/story7/h7c1-rest.jpg'),
(43, 7, 'C2', 'middle', 'Le taxi met beaucoup de temps, nous sommes en retard.', NULL, '/assets/story7/h7c2-backgrd.jpg', '/assets/story7/h7c2-boy.jpg', '/assets/story7/h7c2-girl.jpg', '/assets/story7/h7c2-rest.jpg'),
(44, 7, 'C3', 'middle', 'On se retrouve au port, c’est juste à côté de chez lui !', NULL, '/assets/story7/h7c3-backgrd.jpg', '/assets/story7/h7c3-boy.jpg', '/assets/story7/h7c3-girl.jpg', '/assets/story7/h7c3-rest.jpg'),
(45, 7, 'C4', 'middle', 'On est arrivé en avance ! Comme ça, on peut faire une balade, avant de jouer.', NULL, '/assets/story7/h7c4-backgrd.jpg', '/assets/story7/h7c4-boy.jpg', '/assets/story7/h7c4-girl.jpg', '/assets/story7/h7c4-rest.jpg'),
(46, 7, 'C5', 'middle', 'On a mal aux pieds, alors on s’arrête. Papa passe justement en voiture ! Il nous emmène chez mon ami !', NULL, '/assets/story7/h7c5-backgrd.jpg', '/assets/story7/h7c5-boy.jpg', '/assets/story7/h7c5-girl.jpg', '/assets/story7/h7c5-rest.jpg'),
(47, 7, 'D1', 'end', 'Après le jeu, on a même le droit à une glace, pour le goûter !', NULL, '/assets/story7/h7d1-backgrd.jpg', '/assets/story7/h7d1-boy.jpg', '/assets/story7/h7d1-girl.jpg', '/assets/story7/h7d1-rest.jpg'),
(48, 7, 'D2', 'end', 'Nous n’avons pas beaucoup de temps pour jouer ensemble...', NULL, '/assets/story7/h7d2-backgrd.jpg', '/assets/story7/h7d2-boy.jpg', '/assets/story7/h7d2-girl.jpg', '/assets/story7/h7d2-rest.jpg'),
-- h8
(49, 8, 'A1', 'start', 'A la colo de ski en montagne, je perds mon groupe ! J’ai un peu peur.', 'Que dois-je faire ?', '/assets/story8/h8a1-backgrd.jpg', '/assets/story8/h8a1-boy.jpg', '/assets/story8/h8a1-girl.jpg', '/assets/story8/h8a1-rest.jpg'),
(50, 8, 'B1', 'middle', 'Les adultes sont gentils. Ils me posent des questions. Ils me demandent le nom de ma colonie.', 'Est-ce que je me souviens du nom ?', '/assets/story8/h8b1-backgrd.jpg', '/assets/story8/h8b1-boy.jpg', '/assets/story8/h8b1-girl.jpg', '/assets/story8/h8b1-rest.jpg'),
(51, 8, 'B2', 'middle', 'Je marche longtemps. Je reste là où il y a du monde, sans m’éloigner du sentier.', NULL, '/assets/story8/h8b2-backgrd.jpg', '/assets/story8/h8b2-boy.jpg', '/assets/story8/h8b2-girl.jpg', '/assets/story8/h8b2-rest.jpg'),
(52, 8, 'B3', 'middle', 'Il n’y a personne mais j’attends. C’est ici que le groupe est parti.', NULL, '/assets/story8/h8b3-backgrd.jpg', '/assets/story8/h8b3-boy.jpg', '/assets/story8/h8b3-girl.jpg', '/assets/story8/h8b3-rest.jpg'),
(53, 8, 'C1', 'middle', 'Ce n’est pas grave. Les adultes m’emmènent au chalet au bas de la montagne. Tout à coup, le moniteur entre dans le chalet !', NULL, '/assets/story8/h8c1-backgrd.jpg', '/assets/story8/h8c1-boy.jpg', '/assets/story8/h8c1-girl.jpg', '/assets/story8/h8c1-rest.jpg'),
(54, 8, 'C2', 'middle', 'Les adultes appellent la colonie. Ils m’emmènent au chalet en bas de la montagne. Le moniteur m’y attend déjà !', NULL, '/assets/story8/h8c2-backgrd.jpg', '/assets/story8/h8c2-boy.jpg', '/assets/story8/h8c2-girl.jpg', '/assets/story8/h8c2-rest.jpg'),
(55, 8, 'C3', 'middle', 'J’arrive en bas de la piste de ski. Il n’y a personne.', NULL, '/assets/story8/h8c3-backgrd.jpg', '/assets/story8/h8c3-boy.jpg', '/assets/story8/h8c3-girl.jpg', '/assets/story8/h8c3-rest.jpg'),
(56, 8, 'C4', 'middle', 'Tout à coup, le moniteur de la colonie arrive ! Il a vu que je n’étais plus là, il est venu me chercher !', NULL, '/assets/story8/h8c4-backgrd.jpg', '/assets/story8/h8c4-boy.jpg', '/assets/story8/h8c4-girl.jpg', '/assets/story8/h8c4-rest.jpg'),
(57, 8, 'D1', 'end', 'Ouf ! Tout le monde est content de me revoir ! Pour fêter ça, la colonie a droit à une raclette !', NULL, '/assets/story8/h8d1-backgrd.jpg', '/assets/story8/h8d1-boy.jpg', '/assets/story8/h8d1-girl.jpg', '/assets/story8/h8d1-rest.jpg'),
(58, 8, 'D2', 'end', 'Le moniteur arrive, tout inquiet ! Il me gronde, il dit que j’aurais dû les attendre !', NULL, '/assets/story8/h8d2-backgrd.jpg', '/assets/story8/h8d2-boy.jpg', '/assets/story8/h8d2-girl.jpg', '/assets/story8/h8d2-rest.jpg');


INSERT INTO "choices" ("id", "origin_block_id", "destination_block_id", "choice_label") VALUES
-- h1
(1, 1, 2, NULL),
(2, 2, 3, NULL),
(3, 3, 2, 'Je remonte en haut'),
(4, 3, 4, 'Je rentre au chalet'),
-- h2
(5, 5, 6, NULL),                       
(6, 6, 7, NULL),
(7,7, 8, 'Des pommes'),
(8,7, 9, 'Du chocolat'),
-- h3
(9, 10, 11, NULL),
(10,11, 12, 'Vers les jeux'),
(11,11, 13, 'Vers l’étang aux canards'),
(12,12,14, NULL),
(13, 13, 14, NULL),
-- h4
(14,15,16, 'Les lapins !'),
(15,15,17, 'Les chèvres !'),
(16,16,18, 'Les poules !'),
(17,16,19, 'Les vaches !'),
(18,17,20,' Les ânes ! '),
(19,18,21, NULL),
(20,19,22, NULL),
(21,20,21,NULL),
-- h5
(22, 23, 24, 'Je vais me baigner'),
(23, 23, 25, 'Je joue dans le sable'),
(24, 24, 26, 'A gauche'),
(25, 24, 27, 'A droite'),
(26, 26, 30, NULL),
(27, 27, 30, NULL),
(28, 25, 28, 'Ramasser les coquillages'),
(29, 25, 29, 'Faire un château de sable'),
(30, 28, 31, NULL),
(31, 29, 31, NULL),
-- h6
(32, 32, 33, 'Je prends très vite quelques couleurs et je pars dans mon coin'),
(33, 32, 34, 'J’attends que les autres se servent'),
(34, 33, 35, NULL),
(35, 34, 36, NULL),
(36, 35, 37, 'Non. Je n’ai pas envie de partager !'),
(37, 35, 38, 'Oui, j’ai envie de partager'),
(38, 36, 38, 'Je lui demande de partager avec moi'),
(39, 36, 37, 'Je lui prends une couleur sans demander'),
-- h7
(40, 39, 40, 'Nous prenons le bus'),
(41, 39, 41, 'On marche'),
(42, 40, 42, 'Nous prenons un train'),
(43, 40, 43, 'Nous prenons le taxi'),
(44, 40, 44, 'Nous prenons le bateau'),
(45, 42, 47, NULL),
(46, 43, 48, NULL),
(47, 44, 47, NULL),
(48, 41, 45, 'Oui ! On va aller vite, avec !'),
(49, 41, 46, 'Non, c’est bon pour la santé de marcher !'),
(50, 45, 47, NULL),
(51, 46, 47, NULL),
-- h8
(52, 49, 50, 'Je parle aux adultes qui passent'),
(53, 49, 51, 'Je pars droit devant moi'),
(54, 49, 52, 'Je décide de revenir sur mes pas'),
(55, 50, 53, 'J’ai oublié…'),
(56, 50, 54, 'Je m’en rappelle ! Ma colonie, c’est « Edelweiss » !'),
(57, 53, 57, NULL),
(58, 54, 57, NULL),
(59, 51, 55, NULL),
(60, 55, 58, NULL),
(61, 52, 56, NULL),
(62, 56, 57, NULL);


COMMIT;