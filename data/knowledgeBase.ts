
import { Category } from '../types';
import { ICONS } from '../constants';

export const knowledgeData: Category[] = [
    {
        id: 'mathematiques',
        title: 'MATHÉMATIQUES',
        icon: ICONS.MATH,
        subCategories: [
            {
                id: 'nombres-et-operation',
                title: 'NOMBRES ET OPÉRATION',
                content: [
                    { type: 'paragraph', text: "Ce domaine couvre la compréhension des nombres, leur représentation et les opérations arithmétiques." },
                    { type: 'subheading', text: "Numération (valeur de position et unités)" },
                    { type: 'list', items: [
                        "**Nombres entiers**: Les sources présentent des nombres allant de l'unité simple jusqu'aux **millions**. On retrouve des chiffres aux rangs de l'**unité**, la **dizaine**, la **centaine**, l'**unité de mille** (millier), la **dizaine de mille**, la **centaine de mille** et l'**unité de million**. Par exemple, le nombre `105 040,07` montre des centaines de mille, et des nombres comme `9 300 000` et `7 080 024` atteignent les millions. Le terme \"milliard\" n'est pas explicitement illustré.",
                        "**Nombres décimaux**: Les nombres décimaux sont abordés jusqu'au **millième**, incluant le **dixième** et le **centième**. On apprend à placer la virgule correctement pour des lectures spécifiques.",
                        { main: "**Représentation des nombres**: Les nombres peuvent être représentés sous différentes formes :", sublist: [
                            "En **chiffres** et en **lettres**.",
                            "Dans un **abaque** pour visualiser la valeur de position.",
                            "Sur des **droites graduées**.",
                            "Sous forme de **fractions**.",
                            "Sous forme de **pourcentages**."
                        ]},
                        "**Comparaison de nombres**: Utilisation des signes `>`, `<`, et `=` pour comparer des nombres entiers, décimaux et des fractions.",
                        { main: "**Relations entre nombres**:", sublist: [
                            "**Multiples et diviseurs**: Identification de multiples et de diviseurs.",
                            "**Nombres pairs et impairs**.",
                            "**Nombres premiers**: Concept mentionné sans définition explicite."
                        ]}
                    ]},
                    { type: 'subheading', text: 'Opérations' },
                    { type: 'list', items: [
                        '**Types d\'opérations**: **somme** (addition), **soustraction**, **multiplication** et **division**.',
                        '**Techniques de calcul**: L\'accent est mis sur l\'**estimation** des résultats avant le calcul précis.',
                        { main: '**Propriétés des opérations**:', sublist: ['**Commutativité**', '**Distributivité**', '**Compensation**', '**Opérations réciproques**'] },
                        '**Vérification des résultats**: Démarches pour vérifier les divisions (`dividende = diviseur × quotient + reste`).',
                        '**Problèmes concrets**: Application des opérations à des situations de la vie courante.',
                    ]}
                ]
            },
            {
                id: 'grandeurs',
                title: 'GRANDEURS',
                content: [
                    { type: 'paragraph', text: 'Ce domaine se concentre sur les concepts de mesure et les unités associées.' },
                    { type: 'subheading', text: 'Types de grandeurs et leurs unités' },
                    { type: 'list', items: [
                        "**Longueur / Distance**: **mm**, **cm**, **dm**, **m**, **dam**, **km**.",
                        "**Capacité / Volume de liquide**: **ml**, **cl**, **dl**, **l**, **kl**, **hl**.",
                        "**Volume de solide**: **cm³**, **m³**.",
                        "**Aire / Surface**: **cm²**, **dm²**, **m²**, **ha**.",
                        "**Masse / Poids**: **g**, **hg**, **kg**, **dag**.",
                        "**Durée / Temps**: **secondes**, **minutes**, **heures**, **jours**, **semaines**, **mois**, **années**.",
                        "**Température**: **degrés Celsius (°C)**.",
                        "**Coût / Prix**: **euro (€)**.",
                        "**Énergie**: **kilocalories (kcal)**."
                    ]},
                    { type: 'subheading', text: 'Préfixes des unités de mesure' },
                    { type: 'list', items: [
                        "**déca**- : 10 fois plus grand.",
                        "**hecto**- : 100 fois plus grand.",
                        "**kilo**- : 1000 fois plus grand.",
                        "**déci**- : 10 fois plus petit.",
                        "**centi**- : 100 fois plus petit.",
                        "**milli**- : 1000 fois plus petit."
                    ]},
                    { type: 'subheading', text: 'Estimation et conversions' },
                    { type: 'list', items: [
                        '**Estimation et approximation**: Choisir l\'étalon (unité de mesure) qui convient. Estimer des mesures ou des quantités.',
                        '**Conversions**: Effectuer des conversions entre différentes unités de la même grandeur.'
                    ]}
                ]
            },
            {
                id: 'solides-et-figures',
                title: 'SOLIDES ET FIGURES',
                content: [
                    { type: 'paragraph', text: 'Ce domaine se concentre sur les propriétés géométriques des formes et des objets en 2D et 3D.' },
                    { type: 'subheading', text: 'Polygones (Figures planes)' },
                    { type: 'list', items: [
                        { main: '**Identification et propriétés**:', sublist: [
                            '**Triangle**: rectangle, isocèle, scalène, acutangle, obtusangle. La somme des angles est de **180°**.',
                            '**Quadrilatère**: carré, rectangle, losange, parallélogramme, trapèze, cerf-volant.',
                            '**Polygones réguliers**: pentagone, hexagone, octogone.'
                        ]},
                        '**Axes de symétrie**: Ligne qui divise une figure en deux parties images miroirs.',
                        '**Tracé et construction de figures**: Utilisation d\'instruments (règle, compas).',
                        { main: '**Transformations géométriques**:', sublist: [
                            '**Agrandissement / Réduction**: Reproduire une figure à une échelle différente.',
                            '**Déplacement / Translation**: Déplacer une figure sans changer son orientation ni sa taille.',
                            '**Tessellation / Pavage**: Compléter un motif de carrelage.'
                        ]}
                    ]},
                    { type: 'subheading', text: 'Solides (Figures 3D)' },
                    { type: 'list', items: [
                         { main: '**Identification et propriétés**:', sublist: [
                            '**Cube**: 6 faces carrées, 8 sommets, 12 arêtes.',
                            '**Parallélépipède rectangle**.',
                            '**Prisme droit**: à base hexagonale ou triangulaire.',
                            '**Pyramide**: à base carrée ou triangulaire.',
                            '**Non-polyèdres**: cylindre, cône, sphère.'
                         ]},
                         '**Développements (Nets)**: Plans 2D qui forment un solide 3D une fois pliés.',
                         '**Vues d\'un solide**: Comprendre ce que l\'on voit d\'un solide selon différents points de vue.'
                    ]}
                ]
            }
        ]
    },
    {
        id: 'francais',
        title: 'FRANÇAIS',
        icon: ICONS.FRENCH,
        subCategories: [
             {
                id: 'francais-comprehension-orale',
                title: 'Savoir Écouter',
                content: [
                    { type: 'paragraph', text: 'Compétences liées à la compréhension de textes entendus.' },
                    { type: 'list', items: [
                        'Identifier le **titre**, l\'**auteur** et l\'**intention principale**.',
                        'Extraire des **informations spécifiques**.',
                        'Comprendre le **sens de mots et expressions** dans le contexte.',
                        'Identifier le **locuteur** et le **destinataire**.',
                        'Reconstituer l\'**ordre chronologique**.',
                        'Juger de la **validité d\'une affirmation**.'
                    ]}
                ]
            },
            {
                id: 'francais-production-ecrite',
                title: 'Savoir Écrire',
                content: [
                    { type: 'paragraph', text: 'Compétences liées à la rédaction de textes.' },
                    { type: 'list', items: [
                        '**Préparation de l\'écrit**: Noter des éléments, imaginer des situations.',
                        { main: '**Consignes de rédaction**:', sublist: [
                            'Respecter un **titre** ou une **fin imposée**.',
                            'Intégrer une **phrase donnée**.',
                            'Créer des **paragraphes** et utiliser des **mots de liaison**.',
                            'Construire correctement les **phrases**.',
                            'Respecter une **longueur minimale** et soigner la **présentation**.'
                        ]},
                        '**Genre de texte**: Inventer une histoire (fictionnel) ou rédiger une lettre.'
                    ]}
                ]
            },
            {
                id: 'francais-comprehension-ecrite',
                title: 'Lire Fictionnel et Informatif',
                content: [
                    { type: 'paragraph', text: 'Compétences liées à la compréhension de textes lus.' },
                    { type: 'subheading', text: 'Lire Fictionnel' },
                    { type: 'list', items: [
                        'Identifier l\'**intention de l\'auteur** (raconter, émouvoir).',
                        'Extraire des **informations clés** sur l\'histoire.',
                        'Comprendre le **sens de mots et expressions**.',
                        'Identifier les **classes de mots** et les **temps de conjugaison**.',
                        'Analyser la **structure des phrases** et l\'**ordre chronologique**.',
                        'Tirer une **morale** ou une **leçon**.'
                    ]},
                    { type: 'subheading', text: 'Lire Informatif' },
                    { type: 'list', items: [
                        'Identifier le **type de texte** (article, affiche) et son **intention**.',
                        'Localiser et extraire des **informations spécifiques**.',
                        'Comprendre le **sens de mots et expressions** techniques.',
                        'Identifier la **structure d\'organisation** du texte.',
                        'Analyser la **fonction d\'un groupe de mots** (sujet, complément).',
                        'Juger de la **validité d\'une affirmation**.'
                    ]}
                ]
            }
        ]
    },
    {
        id: 'eveil',
        title: 'ÉVEIL',
        icon: ICONS.EVEIL,
        subCategories: [
            {
                id: 'eveil-scientifique',
                title: 'Initiation Scientifique',
                content: [
                    { type: 'subheading', text: 'Le Corps Humain' },
                    { type: 'list', items: [
                        '**Appareils du corps**: Identification des appareils (respiratoire, digestif, locomoteur, circulatoire) et de leurs **fonctions principales**.',
                        '**Organes**: Nommer les organes principaux (cœur, poumons, estomac, etc.) et les situer.',
                        '**Sens et organes des sens**: Les 5 sens et les organes associés.'
                    ]},
                    { type: 'subheading', text: 'Le Monde Vivant' },
                    { type: 'list', items: [
                        '**Classification animale**: Utiliser des **attributs** pour classer des animaux.',
                        '**Cycles de vie des végétaux**: Pollinisation, germination, etc.',
                        '**Caractéristiques du vivant**: Échange de gaz, croissance, reproduction, nutrition.',
                        '**Régime alimentaire**: **Carnivore**, **herbivore**, **omnivore**.'
                    ]},
                     { type: 'subheading', text: 'Phénomènes Physiques et Technologie' },
                    { type: 'list', items: [
                        '**Météo**: Interpréter un bulletin météo (température, vent, précipitations).',
                        '**Équilibre**: Variables qui influencent l\'équilibre d\'une structure.',
                        '**Électricité**: Distinction entre **conducteurs** et **isolants**.',
                        '**Effets du froid/chaleur**: **Dilatation** et **contraction**.',
                        '**Flottaison**: Densité de l\'objet par rapport au liquide.',
                        '**Impact du changement climatique**: Différence entre fonte des glaces terrestres et marines.'
                    ]}
                ]
            },
            {
                id: 'eveil-historique-geographique',
                title: 'Formation Historique et Géographique',
                content: [
                    { type: 'subheading', text: 'Temps et Périodes Historiques' },
                    { type: 'list', items: [
                        '**Lignes du temps**: Représenter et situer des périodes (Préhistoire, Antiquité, Moyen Âge, etc.).',
                        '**Chronologie**: Ordonner des événements.',
                        '**Traces du passé**: Identifier la nature des documents historiques.',
                        '**Modes de vie au fil du temps**: Comprendre l\'évolution des sociétés.',
                        '**Événements marquants**: Guerres mondiales, Traité de Rome, etc.'
                    ]},
                    { type: 'subheading', text: 'Géographie et Organisation de l\'Espace' },
                    { type: 'list', items: [
                        '**Cartographie et localisation**: Utiliser des **coordonnées** et des **points cardinaux**.',
                        '**Milieux et Paysages**: Distinction entre paysages **ruraux** et **urbains**.',
                        '**Géographie humaine et économique**: Distribution des ressources, démographie, migrations animales.'
                    ]}
                ]
            }
        ]
    }
];
