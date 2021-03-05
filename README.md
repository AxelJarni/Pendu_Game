# Projet à rendre : Un jeu du pendu
La startup dans laquelle vous travaillez a été très satisfaite de votre jeu la semaine précédente.
Votre création a fait un vrai carton dans l’équipe à tel point qu’elle est devenue le jeu auquel tout le monde joue à la pause.
Votre direction s’est donc dit qu’elle allait vous confier un second projet, elle souhaiterait commercialiser un jeu du pendu en navigateur. 
Elle vous a donc de produire un MVP (minimum viable product) de l’application. Pour l’instant du JavaScript suffira, il n’y a pas encore besoin d’interface graphique.

## Règles du jeu
Le joueur doit découvrir le mot caché. Il débute avec 7 points et chaque tour indique une lettre qu'il pense être dans le mot. 
Si il se trompe et qu'elle ne s'y trouve pas, il perd un point. Si il a trouvé une bonne lettre, elle s'affiche alors dans le mot caché !
La partie se termine lorsque le joueur à trouvé le mot complet, ou si il a perdu tout ses points.

### Spécifications fonctionnelles
- Quand l’utilisateur arrive sur la page index.html le jeu démarre
- Par défaut l’ordinateur choisit un mot au hasard dans une liste et affiche au joueur le mot à deviner sous forme de underscores.
- Le joueur peut rentrer une lettre
- L’ordinateur vérifie qu’une seule lettr e a été rentrée et si cette lettre est présente dans le mot, remplace tous les underscores correspondant par la lettre avant de d’afficher à nouveau le mot. Si la lettre n’était pas présente le joueur perd un point
- Le joueur démarre à 7 point, s’il arriv e à zéro, il a perdu, s’il trouve toutes les lettres du mot avant, il a gagné

### Spécifications techniques
- Le projet est codé dans une base boilerplate qui respecte les standards de l’industrie
- Le JavaScript est dans un fichier séparé
- Le code est comm enté, indenté, lisible et maintenable
- Le code fait usage au maximum des fonctions et des nouvelles normes JS
- Le jeu est accessible via un fichier index.html
- Le code du projet est disponible sur un repository GitHub
- Le repository contient un fichier README, une description, des mots clef et des commits
