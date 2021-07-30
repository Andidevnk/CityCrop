export const CATEGORIES = [
  {
    id: '101',
    type: 'greens',
    image: require('assets/imgs/categories/leafy-greens.jpeg'),
    name: 'Leafy Greens',
  },
  {
    id: '102',
    type: 'greens',
    image: require('assets/imgs/categories/herbs.jpeg'),
    name: 'Herbs',
  },
  {
    id: '103',
    type: 'greens',
    image: require('assets/imgs/categories/lettuces.jpeg'),
    name: 'Lettuces',
  },
  {
    id: '105',
    type: 'greens',
    image: require('assets/imgs/categories/exotic.jpeg'),
    name: 'Exotic',
  },
  {
    id: '104',
    type: 'microgreens',
    image: require('assets/imgs/categories/microgreens.jpeg'),
    name: 'Microgreens',
  },
];

export const PLANTS = [
  {
    id: '1001',
    categoryId: '101',
    name: 'Swiss Chard',
    image: require('assets/imgs/plants/leafy-greens/swiss_chard.png'),
    binomialName: 'Beta vulgaris',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Vibrant, lush, and colorful, Swiss chard is Related to beet and beet greens. Leaves are large and deep green while stalks can be red, orange, yellow, pink, or white.',
    commonUse:
      'Fresh young chard can be used raw in salads but mature chard leaves and stalks are typically cooked or sautéed; the bitterness fades with cooking, leaving a refined flavor which is more delicate than that of cooked spinach.',
    needsDome: true,
  },
  {
    id: '1002',
    categoryId: '101',
    name: 'Upland Cress',
    image: require('assets/imgs/plants/leafy-greens/upland_cress.png'),
    binomialName: 'Barbarea verna',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Upland cress is considered a less potent substitute for watercress. Often referred to as the “baby” cress.',
    commonUse:
      'Commonly used as a leafy herb like parsley, basil or mint; chopped up for marinades and dressings or stirred into soups or casseroles. Use it as a green, ripping the tender leaves into salads and stir-fries.',
    needsDome: true,
  },
  {
    id: '1003',
    categoryId: '101',
    name: 'Arugula',
    image: require('assets/imgs/plants/leafy-greens/arugula.png'),
    binomialName: 'Eruca sativa',
    duration: 28,
    germinationDays: 2,
    characteristics:
      'Nutty, bitter green available in several varieties like Astro, Wasabi and Surrey. Great as garnish or as a base to a dish.',
    commonUse:
      'Typically used in salads and as a garnish, the strong flavor of arugula is best when balanced with more mild flavors.',
    needsDome: true,
  },
  {
    id: '1004',
    categoryId: '101',
    name: 'Frisee',
    image: require('assets/imgs/plants/leafy-greens/frisee.png'),
    binomialName: 'Cichorium endivia var crisum',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Frisée, a member of the chicory family, has a frizzy texture, as well as a deliciously bitter edge. Look for fresh-looking leaves that go from greenish yellow to white.',
    commonUse:
      'What’s wonderful about frisée is that it is the perfect accent for any salad. Its bitter flavor adds just the right balance, especially when paired with fruity dressings. Its puffy, cloudlike shape provides an appealing contrast to flatter lettuce leaves.',
    needsDome: true,
  },
  {
    id: '1005',
    categoryId: '101',
    name: 'Pak Choi Karaoke',
    image: require('assets/imgs/plants/leafy-greens/pak_choi_karaoke.png'),
    binomialName: 'Brassica Rapa',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Similar to bok choi or chinese white cabbage, with darker leaves, and whiter, wider stems.',
    commonUse:
      'Often cooked and used in asian dishes, joi choi is also delicious raw.',
    needsDome: false,
  },
  {
    id: '1006',
    categoryId: '101',
    name: 'Mizuna',
    image: require('assets/imgs/plants/leafy-greens/mizuna.png'),
    binomialName: 'Brassica Rapa',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Mizuna which means “water greens” in Japanese, is a mild, mustardy green with curled fringed leaves that have apiquant, mild peppery flavor; slightly spicy, but less so than arugula',
    commonUse:
      'Often pickled in Japanese cuisine, mizuna has a fresh crisp taste that can be used on its own or cooked. Best used wilted, or as a substitute for argula. Lends itself well to asian dishes.',
    needsDome: false,
  },
  {
    id: '1007',
    categoryId: '101',
    name: 'Mustard Green Fire',
    image: require('assets/imgs/plants/leafy-greens/mustard_green_fire.png'),
    binomialName: 'Brassica juncea',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Spicy, dense leaves. Related to kale, cabbage, and collard greens, mustard has large deep green leaves that curl slightly. It resembles a headless cabbage.',
    commonUse:
      'Often used in Southern American cooking and chinese cooking, it is commonly used both raw or cooked. Try it in salad, pizza, gumbo, or sauteed on its own.',
    needsDome: false,
  },
  {
    id: '1008',
    categoryId: '101',
    name: 'Mustard Red Lion',
    image: require('assets/imgs/plants/leafy-greens/mustard_red_lion.png'),
    binomialName: 'Brassica juncea',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'The red counterpart to green mustard. Sharp, garlicky flavor. Broad wrinkled leaves with a violet purple overlay on green. Leaves are succulent and tender.',
    commonUse:
      'Commonly implemented as a salad green, pot herb or braising green. Pairs well with rich meats and creamy sauces. Virtually interchangable with other varieties of mustard but more striking in appearance.',
    needsDome: false,
  },
  {
    id: '1009',
    categoryId: '101',
    name: 'Kale Scarlet',
    image: require('assets/imgs/plants/leafy-greens/kale_scarlet.png'),
    binomialName: 'Brassica oleracea',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Small-leafed with smooth deep green leaves and stark white veins. Less tough than typical kale and light in flavor.',
    commonUse:
      'Often used in southern, and chinese cooking. Can be consumed raw or cooked. Try it in salad, pizza, gumbo, or sauteed on its own.',
    needsDome: false,
  },
  {
    id: '1010',
    categoryId: '101',
    name: 'Komatsuna Comred',
    image: require('assets/imgs/plants/leafy-greens/komatsuna_comred.png'),
    binomialName: 'Brassica rapa perviridis',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'A hybrid of spinach and mustard with deep red and purple leaves, best for baby greens. The leaves are round, flat and purple on top with green undersides and green stems.',
    commonUse:
      'Commonly implemented as a salad green, pot herb or braising green. Pairs well with rich meats and creamy sauces. Virtually interchangable with other varieties of mustard but more striking in appearance.',
    needsDome: false,
  },
  {
    id: '1011',
    categoryId: '101',
    name: 'Green Sorrel',
    image: require('assets/imgs/plants/leafy-greens/green_sorrel.png'),
    binomialName: 'Rumex acetosa',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Small, edible green plant from the Polygonaceae family, same as buckwheat and rhubarb. Translating to “sour” in french, Sorrel has an intense lemony tang.',
    commonUse:
      'Use it as a leafy herb - like parsley, basil. or mint - chopping it up to use in marinades and dressings or stir it into soups or casseroles. Use it as a green, ripping the tender leaves into salads and stir-fries.',
    needsDome: false,
  },
  {
    id: '1012',
    categoryId: '101',
    name: 'Red Sorrel',
    image: require('assets/imgs/plants/leafy-greens/red_sorrel.png'),
    binomialName: 'Rumex sanguineus var',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Red sorrel is a leafy herb that grows low to the ground with slender stems. It has bright lime-green leaves with dark maroon stems and veins that run the entirety of the leaf. Red sorrel leaves are shaped like an arrow with slightly curled edges.',
    commonUse:
      'Best prepared fresh. More mature leaves can be cooked like spinach or used in stir- fries. The bright, tangy flavor of Red sorrel pairs well with fish, veal, eggs and potatoes, in soup or gratin.',
    needsDome: false,
  },
  {
    id: '1013',
    categoryId: '102',
    name: 'Basil Red Shiraz',
    image: require('assets/imgs/plants/herbs/basil_red_shiraz.png'),
    binomialName: 'Ocimum basilicum',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Amethyst Basil is a Genovese basil that has thick, turned down leaves that are deep purple in color.',
    commonUse:
      'Salads, desserts, good pairing with Middle Eastern and Italian cuisine.',
    needsDome: true,
  },
  {
    id: '1014',
    categoryId: '102',
    name: 'Genovese Basil',
    image: require('assets/imgs/plants/herbs/genovese_basil.png'),
    binomialName: 'Ocimum basilicum',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Large-leafed green common basil with thick foliage and a sweet and pungent flavor. Best used raw.',
    commonUse:
      'Most commonly used in pestos and Italian dishes. They are a wonderful complement to deserts and cocktails. Can be used raw, cooked, or dried.',
    needsDome: true,
  },
  {
    id: '1015',
    categoryId: '102',
    name: 'Holy Basil',
    image: require('assets/imgs/plants/herbs/holy_basil.png'),
    binomialName: 'Ocimum sanctum',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'When freshly picked, the aromatic leaves hold a spicy, peppery bite and a delicious combination of basil and mint flavors.',
    commonUse:
      'Holy basil is best used fresh, as its leaves cannot maintain their aroma after a few days in the refrigerator.',
    needsDome: true,
  },
  {
    id: '1016',
    categoryId: '102',
    name: 'Lemon Basil',
    image: require('assets/imgs/plants/herbs/lemon_basil.png'),
    binomialName: 'Ocimum basilicum',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'A small and tender-leafed basil with a pronounced lemony taste; similar to lemon verbena.',
    commonUse:
      'Best in desserts. Lemon basil is mild enough to flavor grilled fish or shrimp and can be substituted for basil if you are looking for a fresh twist of flavor. Great for summer dishes.',
    needsDome: true,
  },
  {
    id: '1017',
    categoryId: '102',
    name: 'Thai Basil',
    image: require('assets/imgs/plants/herbs/thai_basil.png'),
    binomialName: 'Ocimum basilicum',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'This tropical variety of sweet basil provides the unusual basil flavor present in many Thai dishes that it has come to be identified as “Thai basil,” even though the Vietnamese and Laotians also use lots of it in their cuisine',
    commonUse:
      'Southern and Easterrn cuisine. It’s pungent flavor lends itself well to curries, salads, and spicy dishes.',
    needsDome: true,
  },
  {
    id: '1018',
    categoryId: '102',
    name: 'Cilantro',
    image: require('assets/imgs/plants/herbs/cilantro.png'),
    binomialName: 'Coriandrum sativum',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'An herb with wide delicate lacy green leaves and a pungent flavor that is widely used in dishes throughout the Caribbean, Latin America, and the Far East.',
    commonUse:
      'Best used fresh, it pairs well with the likes of avocado, chicken, fish, ice cream, lamb, lentils, mayonnaise, peppers, pork, rice, salads, salsas, shellfish, tomatoes, yogurt',
    needsDome: false,
  },
  {
    id: '1019',
    categoryId: '102',
    name: 'Common Mint',
    image: require('assets/imgs/plants/herbs/common_mint.png'),
    binomialName: 'Mentha viridis',
    duration: 21,
    germinationDays: 5,
    characteristics:
      'There are many varieties of mint, but common mint, or peppermint, is most well known. It is a hearty herb with textured, teardrop shaped leaves.',
    commonUse:
      'Typically used in desserts and drinks, mint is also a wonderful accompaniment to rich steak and lamb dishes, and complements dairy nicely. You’ll often find it used in Mediterranean and Middle-Eastern cuisines.',
    needsDome: false,
  },
  {
    id: '1020',
    categoryId: '102',
    name: 'Dill',
    image: require('assets/imgs/plants/herbs/dill.png'),
    binomialName: 'Anethum graveolens',
    duration: 28,
    germinationDays: 10,
    characteristics:
      'Native to Southwest Asia and India, dill is a popular culinary herb used in the kitchen along with chives or parsley.',
    commonUse:
      'Dill is best when used fresh as it loses its flavor rapidly if dried. Commonly paired with Fish, pickles and soups.',
    needsDome: false,
  },
  {
    id: '1021',
    categoryId: '102',
    name: 'Bronze Fennel',
    image: require('assets/imgs/plants/herbs/bronze_fennel.png'),
    binomialName: 'Foeniculum vulgare',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Bronze Fennel can be used in place of Green Fennel in any recipe, and the wispy leaves with their unique bronze color add a lot of visual interest',
    commonUse:
      'Commonly used in meat dishes, sausages, and alongside red meat. It’s fronds add a sweet anise flavor to salad dressings and salad dishes, and can also be a nice complement to sweet dessert.',
    needsDome: false,
  },
  {
    id: '1022',
    categoryId: '102',
    name: 'Green Fennel',
    image: require('assets/imgs/plants/herbs/green_fennel.png'),
    binomialName: 'Foeniculum vulgare',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Classic fennel. With a sweet licorice flavor, green fennel has soft wispy leaves with a blue-green color. Similar in look to dill, but wth a pungent anise scent and flavor.',
    commonUse:
      'Commonly used in meat dishes, sausages, and alongside red meat. It’s fronds add a sweet anise flavor to salad dressings and salad dishes, and can also be a nice complement to sweet desserts',
    needsDome: false,
  },
  {
    id: '1023',
    categoryId: '102',
    name: 'Parsley',
    image: require('assets/imgs/plants/herbs/parsley.png'),
    binomialName: 'Petroselinum crispum',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Native to the Mediterranean, parlsey is one of the most commonly used herbs in the world. Bright green with three pronged leaves, there is a flat and curly variety.',
    commonUse:
      'Used across the world in a variety of dishes, parsley is often used uncooked. A popular garnish, typically used in soups, stews, and salads.',
    needsDome: false,
  },
  {
    id: '1024',
    categoryId: '102',
    name: 'Sage',
    image: require('assets/imgs/plants/herbs/sage.png'),
    binomialName: 'Salvia officinalis',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Sage is an aromatic herb with an earthy warm flavor and soft downy blue-green leaves that are light in tone.',
    commonUse:
      'Commonly used in rich winter dishes, sage is popular in breads, potatoes, and other starchy foods. Can be used dried, fresh, and cooked, sage is often sauteed in butter before use. Pairs well with squash, cheese, and roasted vegetables.',
    needsDome: false,
  },
  {
    id: '1025',
    categoryId: '102',
    name: 'Savory',
    image: require('assets/imgs/plants/herbs/savory.png'),
    binomialName: 'Satureja hortensis',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Commonly used in “herbes de provence”, savory has slender, bronze-green leaves and is most commonly used in its dried form.',
    commonUse:
      'Most commonly used in bean dishes, though also used in high quantities with meats. Can coat liberally, or be used as a generous stuffing.',
    needsDome: false,
  },
  {
    id: '1026',
    categoryId: '102',
    name: 'Thyme',
    image: require('assets/imgs/plants/herbs/thyme.png'),
    binomialName: 'Thymus serpyllum',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Thyme is a member of the mint family, and also a relative to oregano. This flowering herb grows in spindly, low lying bunches and can be eaten fresh or dried.',
    commonUse:
      'One of the many fresh herbs used in many Italian kitchens. The aromatic flavor of thyme complements Southern Italian sauces of hot peppers and eggplants, as well as being a primary herb in soups and stews.',
    needsDome: false,
  },
  {
    id: '1027',
    categoryId: '102',
    name: 'Marjoram',
    image: require('assets/imgs/plants/herbs/marjoram.png'),
    binomialName: 'Origanum vulgare',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Marjoram looks very similar to oregano. It grows like a small shrub and the leaves are more elliptical than those of oregano, with the same fuzzy texture.',
    commonUse:
      'Marjoram is most often associated with flavoring poultry stuffings or sausages. Marjoram can act as a replacement for recipes that call for oregano, and because of it’s sweeter flavor, can be used to flavor desserts as well.',
    needsDome: true,
  },
  {
    id: '1028',
    categoryId: '102',
    name: 'Chives Garlic',
    image: require('assets/imgs/plants/herbs/chives_garlic.png'),
    binomialName: 'Allium tuberosum',
    duration: 35,
    germinationDays: 4,
    characteristics:
      'Chives grow in clusters, their blade-like leaves growing straight upward. The green leaves are hollow, and come to a point.',
    commonUse:
      'Chives are used as both a garnish and as an aromatic herb. Typically, Chives are added at the end of the cooking process because they lose flavor when heated.',
    needsDome: true,
  },
  {
    id: '1029',
    categoryId: '103',
    name: 'Red Oak Lettuce',
    image: require('assets/imgs/plants/lettuces/red_oak_lettuce.png'),
    binomialName: 'Lactuca sativa',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Delicious lettuce with stunning burgundy tipped leaves, named after the shape of their leaves that are similar to oak.',
    commonUse:
      'Red Oak’s exceptional good looks beautifully dress up fresh green salads. Use as a decorative edible bed for turkey, chicken or any protein. Tuck in pita bread and sandwiches.',
    needsDome: true,
  },
  {
    id: '1030',
    categoryId: '103',
    name: 'Lettuce Lobjoits Green Cos',
    image: require('assets/imgs/plants/lettuces/lettuce_lobjoits_green_cos.png'),
    binomialName: 'Lectuca sativa var longifolia',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Romaine is a variety of lettuce that grows in a tall head of sturdy dark green leaves with firm ribs down their centers. Unlike most lettuces, it is tolerant of heat.',
    commonUse:
      'Popular for salads and sandwiches, the crisp leaves hold up well overtime and can handle a heavy dressing. Sturdy leaves can be used as wraps.',
    needsDome: true,
  },
  {
    id: '1031',
    categoryId: '103',
    name: 'Babyleaf Lettuce',
    image: require('assets/imgs/plants/lettuces/babyleaf_lettuce.png'),
    binomialName: 'Lactuca sativa',
    duration: 21,
    germinationDays: 3,
    characteristics:
      'Actually multiple varieties of lettuce, babyleaf is lettuce selected to be grown as a “mini” green.',
    commonUse:
      'As a baby green they have characterist that are particularly attractive for salad mixes. The leaves are succulent and tasty, with good texture, and they come in a variety of shapes. Good in salads, sandwiches, and as wilted greens.',
    needsDome: true,
  },
  {
    id: '1032',
    categoryId: '103',
    name: 'Butter Lettuce',
    image: require('assets/imgs/plants/lettuces/butter_lettuce.png'),
    binomialName: 'Lactuca sativa var crispa',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Cabbage-like lettuce with tender, smooth, loosely coiled leaves.',
    commonUse:
      'Incredibly common salad base. Often used as a subsitute for iceburg lettuce. Try as lettuce cups, or cut coarsly for a chopped salad.',
    needsDome: true,
  },
  {
    id: '1033',
    categoryId: '103',
    name: 'Lettuce Green Oak Leaf',
    image: require('assets/imgs/plants/lettuces/lettuce_green_oak_leaf.png'),
    binomialName: 'Lactuca sativa var salanova',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Salanova lettuce have round bases with three times the amount of leaves than the standard head of lettuce, all growing in a rosette pattern.',
    commonUse:
      'Salanova lettuce is best used for salads, but can also be used on sandwiches, in pastas or as a bed for proteins.',
    needsDome: true,
  },
  {
    id: '1034',
    categoryId: '104',
    name: 'Coriander',
    image: require('assets/imgs/plants/microgreens/coriander.png'),
    binomialName: 'Coriandrum sativum',
    duration: 14,
    germinationDays: 3,
    characteristics:
      "Coriander is one of the world's most commonly used herbs - in spite of the fact that the name comes from the Greek, koris, meaning bed bug!",
    commonUse:
      'Coriander is friendly enough to go with most dishes and lends a roundness of flavour to the fire of chillies ',
    needsDome: true,
  },
  {
    id: '1035',
    categoryId: '104',
    name: 'Lemon Balm',
    image: require('assets/imgs/plants/microgreens/lemon_balm.png'),
    binomialName: 'Melissa officinalis',
    duration: 14,
    germinationDays: 4,
    characteristics:
      'As its name suggests, this leafy, green herb has a lemony flavour and fragrance. It works well with fish, poultry and vegetables as well as in salads, stuffing’s and drinks.',
    commonUse:
      'It works well with fish, poultry and vegetables as well as in salads, stuffings and drinks.',
    needsDome: false,
  },
  {
    id: '1036',
    categoryId: '104',
    name: 'Pink Stem Radish',
    image: require('assets/imgs/plants/microgreens/pink_stem_radish.png'),
    binomialName: 'Raphanus sativus',
    duration: 14,
    germinationDays: 2,
    characteristics:
      'Pink Stem Radish maintain many of the same flavour characteristics found in full-grown radishes. Sometimes described as hot or spicy, these micro’s pack plenty of flavour, and are sure to add a gourmet touch to a wide range of dishes.',
    commonUse:
      'Add depth to salads, soups, sushi and sandwiches or as an edible garnish ',
    needsDome: false,
  },
  {
    id: '1037',
    categoryId: '104',
    name: 'Rocket',
    image: require('assets/imgs/plants/microgreens/rocket.png'),
    binomialName: 'Eruca sativa',
    duration: 14,
    germinationDays: 2,
    characteristics:
      'Every 100 grams of raw Micro Rocket leaves contain important macronutrients such as carbohydrates, fibre, and proteins; essential micronutrients such as vitamins A, C, K, B2, and folate; and minerals like phosphorus, magnesium, and especially high amounts of potassium and calcium.',
    commonUse:
      'Add depth to salads and sandwiches. A great gourmet pizza topping. Contributes delicious flavour to pasta, egg dishes and soups ',
    needsDome: true,
  },
  {
    id: '1038',
    categoryId: '104',
    name: 'Red Amaranth',
    image: require('assets/imgs/plants/microgreens/red_amaranth.png'),
    binomialName: 'Amaranthus tricolor',
    duration: 14,
    germinationDays: 2,
    characteristics:
      'They have a mild earthy flavour that is reminiscent of a beet with a delicate sweet grassy finish. Micro Red Amaranth is rich in vitamin C, carotenoids, vitamin K, and vitamin E.',
    commonUse:
      'These versatile leaves are velvety and crisp, perfect for salads, soups and entrees and deserts ',
    needsDome: true,
  },
  {
    id: '1039',
    categoryId: '104',
    name: 'Red Cabbage',
    image: require('assets/imgs/plants/microgreens/red_cabbage.png'),
    binomialName: 'Brassica oleracea var. capitata',
    duration: 14,
    germinationDays: 2,
    characteristics:
      'Compared to the adult red cabbage the microgreen has 6 times more vitamin C, 40 times more vitamin E and 69 times more vitamin K.',
    commonUse:
      'Great in a salad, pork and bacon dishes, also goes well with potatoes and avacado',
    needsDome: true,
  },
  {
    id: '1040',
    categoryId: '104',
    name: 'Red Mustard',
    image: require('assets/imgs/plants/microgreens/red_mustard.png'),
    binomialName: 'Brassica juncea',
    duration: 14,
    germinationDays: 2,
    characteristics:
      'Red mustard contains two important compounds, sinigrin and gluconasturtiian, which have cancer preventing benefits, including antioxidants, anti-inflammatory and natural detoxifying properties.',
    commonUse:
      'Complimentary pairings include mushrooms, asparagus, eggs, grilled and smoked fish, chicken, pork, chiles, olives, creamy sauces, young and aged cheeses, mint, deserts.',
    needsDome: true,
  },
  {
    id: '1041',
    categoryId: '104',
    name: 'Sweet Basil',
    image: require('assets/imgs/plants/microgreens/sweet_basil.png'),
    binomialName: 'Ocimum basilicum',
    duration: 14,
    germinationDays: 3,
    characteristics:
      'Basil is virtually calorie-free and, in addition to antioxidant vitamins and phenolics, is a rich source of vitamin K, zinc, calcium, magnesium, potassium and dietary fibre.',
    commonUse:
      'A lovely accent to many dishes such as tomatoes, cheeses, salads, pesto, pizza, pasta and deserts.',
    needsDome: true,
  },
  {
    id: '1042',
    categoryId: '104',
    name: 'Thai Basil',
    image: require('assets/imgs/plants/microgreens/thai_basil.png'),
    binomialName: 'Ocimum basilicum',
    duration: 14,
    germinationDays: 3,
    characteristics:
      'Thai basil is a popular cooking herb, especially in Southeast Asian cuisines.',
    commonUse:
      "It adds freshness and a bold, slightly spicy flavour to many Asian dishes, whether it's infused in curries and sauces or used as a fresh garnish.",
    needsDome: true,
  },
  {
    id: '1043',
    categoryId: '104',
    name: 'Pea Style',
    image: require('assets/imgs/plants/microgreens/pea_style.png'),
    binomialName: 'Pisum sativum',
    duration: 14,
    germinationDays: 3,
    characteristics: 'Tastes like sweet pea with a crunchy and fresh flavour.',
    commonUse:
      'An excellent garnish or ingredient for most soups, meat or salad dishes, stir fry and smoothies to name a few.',
    needsDome: false,
  },
  {
    id: '1044',
    categoryId: '104',
    name: 'Micro Broccoli ',
    image: require('assets/imgs/plants/microgreens/micro_broccoli.png'),
    binomialName: 'Brassica oleracea',
    duration: 14,
    germinationDays: 1,
    characteristics:
      'Excellent source of Vitamin A, C, B-3, B-5, B-6, also minerals like calcium, manganese, iron, magnesium, selenium, zinc, and phosphorus.',
    commonUse:
      'Great addition to salads, meat, egg or cheese dishes and sandwiches.',
    needsDome: true,
  },
  {
    id: '1045',
    categoryId: '104',
    name: 'Garlic Chive',
    image: require('assets/imgs/plants/microgreens/garlic_chive.png'),
    binomialName: 'Allium tuberosum',
    duration: 14,
    germinationDays: 3,
    characteristics:
      'High in Vitamins A, B, C and E, F, has a lot of anti-inflammatory properties, calcium, magnesium, iron, zinc, potassium, many monosaccharides phytoncides, allicin.',
    commonUse:
      'Great addition to warm and cold salads, meat dishes, Scrambled eggs and sandwiches or any dish which goes well with onion and garlic.',
    needsDome: false,
  },
  {
    id: '1046',
    categoryId: '104',
    name: 'Nasturtium Blue Pepe',
    image: require('assets/imgs/plants/microgreens/nasturtium_blue_pepe.png'),
    binomialName: 'Tropaeolum majus',
    duration: 21,
    germinationDays: 3,
    characteristics:
      'Nasturtium leaves look like small lily pads: bright green, round, with a central stem. Nasturtium has long been used throughout the Andes as an herbal expectorant for chest congestion, a remedy for wounds, and as a peppery pest repellent.',
    commonUse:
      'The leaves of the Nasturtium can be used in a variety of ways: as a spicy addition to salads, as the base for pesto, or chopped and combined with softened cheeses for spreads. ',
    needsDome: false,
  },
  {
    id: '1047',
    categoryId: '104',
    name: 'Swiss Chard Rainbow',
    image: require('assets/imgs/plants/microgreens/swiss_chard_rainbow.png'),
    binomialName: 'Beta vulgaris',
    duration: 14,
    germinationDays: 3,
    characteristics:
      'A rainbow of bright pastel colours on the stems. Rich in Vitamin A, C and K, also full of protein, dietary fibre and antioxidants.',
    commonUse:
      'Complimentary ingredients include citrus, garlic, tomatoes, rice dishes, cream cheeses and herbs such as basil and rocket.',
    needsDome: true,
  },
  {
    id: '1048',
    categoryId: '104',
    name: 'Red Pac Choi',
    image: require('assets/imgs/plants/microgreens/red_pac_choi.png'),
    binomialName: 'Brassica rapa var. chinensis',
    duration: 14,
    germinationDays: 3,
    characteristics:
      'Packed with Vitamins A, K and C. Helps destroy free radicals and protects cells from inflammation, also contains anti-oxidants which improve skin tone and aging.',
    commonUse:
      'Great addition to salads, meat dishes, egg dishes and sandwiches.',
    needsDome: false,
  },
  {
    id: '1049',
    categoryId: '104',
    name: 'Red Rioja Radish',
    image: require('assets/imgs/plants/microgreens/red_rioja_radish.png'),
    binomialName: 'Raphanus sativus',
    duration: 14,
    germinationDays: 2,
    characteristics:
      'A sharp, colourful, and great tasting microgreen. These are high in vitamins B, C and D, calcium, potassium, sodium, magnesium. Rich in antioxidants and low in calories.',
    commonUse:
      'Flavour accents seafood and meat entrees. Use with meat, fish, eggs and cheese dishes, also excellent colour and flavour to salads and sandwiches.',
    needsDome: false,
  },
  {
    id: '1050',
    categoryId: '105',
    name: 'Amaranth Passion',
    image: require('assets/imgs/plants/exotic/amaranth_passion.png'),
    binomialName: 'Amaranthus tricolor',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'The species of amaranth is cultivated by many Asian cultures as a leaf vegetable. Across Malaysia, Indonesia, Vietnam, India, and China, cumin, chile peppers, onions, and garlic are common pairings for amaranth.',
    commonUse:
      'Amaranth greens may be eaten raw or cooked. The younger leaves are mild and tender while the more mature plants are slightly fibrous and bitter. Mature leaves are best for stewing or braising, similarly to a chard or beet green.',
    needsDome: false,
  },
  {
    id: '1051',
    categoryId: '105',
    name: 'Chamomile Wild',
    image: require('assets/imgs/plants/exotic/chamomile_wild.png'),
    binomialName: 'Matricaria recutita',
    duration: 35,
    germinationDays: 3,
    characteristics:
      'Chamomile plants are made up of thin feathery branched leaves and erect fuzzy green stems that produce numerous flowering heads.',
    commonUse:
      'Chamomile yields a large concentration of volatile essential oils that are extracted to flavor ice creams, confectionery, alcoholic and non-alcoholic beverages. The most common application is tea.',
    needsDome: false,
  },
  {
    id: '1052',
    categoryId: '105',
    name: 'Feverfew',
    image: require('assets/imgs/plants/exotic/feverfew.png'),
    binomialName: 'Tanacetum parhenium',
    duration: 28,
    germinationDays: 5,
    characteristics:
      'Feverfew is bright-green, has pungently aromatic leaves and a mass of white daisy-like flowers with yellow centers.',
    commonUse:
      'All parts of the leaves or flowering tops can be used both fresh and dried. Best used in small quantities; often times it is paired with honey to mask the bitterness.',
    needsDome: true,
  },
  {
    id: '1053',
    categoryId: '105',
    name: 'Mexican Marigold',
    image: require('assets/imgs/plants/exotic/mexican_marigold.png'),
    binomialName: 'Tagetes minuta',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Mexican marigold is similar in flavor and scent to huacatay, a peruvian herb. Its taste and odor is a mix of basil, tarragon, mint and lime.',
    commonUse:
      'Used most commonly in peruvian and latin american dishes, mexican marigold is a fresh and sweet addition to any dessert, cocktail, or spicy dish.',
    needsDome: false,
  },
  {
    id: '1054',
    categoryId: '105',
    name: 'Nasturtium',
    image: require('assets/imgs/plants/exotic/nasturtium.png'),
    binomialName: 'Tropaeolum majus',
    duration: 21,
    germinationDays: 5,
    characteristics:
      'Related to watercress, this flowering plant has spicy round leaves (and flowers), often used as a garnish.',
    commonUse:
      'Best if used sparingly as a garnish, or in salads. Doesn’t do well cooked. Often seen on summer salads, desserts, and cocktails.',
    needsDome: true,
  },
  {
    id: '1055',
    categoryId: '105',
    name: 'Britton Shiso',
    image: require('assets/imgs/plants/exotic/britton_shiso.png'),
    binomialName: 'Perilla frutescens var crispa',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Variety of shiso with red undersides to leaves. Slightly larger leaves than red and green shisos.',
    commonUse:
      'Best used raw, and can be harvested at any stage Shiso leaves are found in Japanese, Korean, and Southeast Asian cuisines, and is mostly used as a wrapping or in soups and with rice.',
    needsDome: false,
  },
  {
    id: '1056',
    categoryId: '105',
    name: 'Green Shiso',
    image: require('assets/imgs/plants/exotic/green_shiso.png'),
    binomialName: 'Perilla frutescens var crispa',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Green shiso has large thin teardrop shaped leaves with serrated edges with ridges and fine hairs on the underside. A member of the mint family.',
    commonUse:
      'Best used raw, and can be harvested at any stage Shiso leaves are found in Japanese, Korean, and Southeast Asian cuisines, and is mostly used as a wrapping or in soups and with rice.',
    needsDome: false,
  },
  {
    id: '1057',
    categoryId: '105',
    name: 'Red Shiso',
    image: require('assets/imgs/plants/exotic/red_shiso.png'),
    binomialName: 'Perilla frutescens var crispa',
    duration: 28,
    germinationDays: 3,
    characteristics:
      'Vibrant flavorful shiso with a faint anise flavor. Belonging to the mint family, the plant has red-ish purple leaves.',
    commonUse:
      'The mature red leaves make undesirable raw salad leaves, but germinated sprouts, or me-jiso, have been long used as garnish to accent a Japanese dish, such as a plate of sashimi.',
    needsDome: false,
  },
  {
    id: '1058',
    categoryId: '105',
    name: 'Papalo',
    image: require('assets/imgs/plants/exotic/papalo.png'),
    binomialName: 'Porophyllum ruderale',
    duration: 35,
    germinationDays: 4,
    characteristics:
      'Papalo is a green leafy plant with tall, thin, branched stalks. Its leaves are a light green color and are eggshaped with scalloped edges.',
    commonUse:
      'In Central America, the spicy green along with peppers is an essential ingredient in traditional Aztec dishes. It has a stronger flavor than cilantro.',
    needsDome: true,
  },
  {
    id: '1059',
    categoryId: '105',
    name: "Za'atar'",
    image: require('assets/imgs/plants/exotic/za_atar.png'),
    binomialName: 'Thymbra spicata',
    duration: 35,
    germinationDays: 4,
    characteristics:
      'Za’atar is a leafy green herb that looks very much like oregano when the plant first begins to grow; its fuzzy, light blue-green spear-shaped leaves growing in clustered pairs along woody stems.',
    commonUse:
      'Za’atar is most often dried and combined with sumac, sesame seeds and salt to make the spice blend known as “za’atar.” Za’atar can be used as a substitute for thyme or oregano.',
    needsDome: true,
  },
  {
    id: '1060',
    categoryId: '105',
    name: 'Viola',
    image: require('assets/imgs/plants/exotic/viola.png'),
    binomialName: 'Viola cornuta',
    duration: 28,
    germinationDays: 2,
    characteristics:
      'Small, tri-colored edible flowers. Similar to pansies but smaller in scale.',
    commonUse:
      'Violas can be used to flavor vinegar, oils, beverages, butter and tea. Most commonly they are used for ornamental purposes and can be used candied or fresh atop ice cream, crème brule, tarts, cakes and other delicate pastries.',
    needsDome: true,
  },
  {
    id: '1061',
    categoryId: '105',
    name: 'Anise Hyssop',
    image: require('assets/imgs/plants/exotic/anise_hyssop.png'),
    binomialName: 'Agastache foeniculum',
    duration: 28,
    germinationDays: 4,
    characteristics:
      'Anise hyssop is a stiff, upright, leafy herb that has a somewhat bushy appearance. Blooms small, violet and indigo flowers.',
    commonUse:
      'Both the leaves and the flowers of Anise hyssop can be used fresh or dried. The natural sweetness lends well to desserts, without the need for much additional sugar or sweetner.',
    needsDome: true,
  },
  {
    id: '1062',
    categoryId: '104',
    name: 'Cardamom',
    image: require('assets/imgs/plants/microgreens/cardamom.png'),
    binomialName: 'Elettaria cardamomum',
    duration: 14,
    germinationDays: 3,
    characteristics:
      'The pleasant aroma and the characteristic warm, slightly pungent taste are due to numerous essential oil components present in the seeds. Cardamom is a perennial bushy herb.',
    commonUse:
      'Green cardamom is also used to flavor coffee and teas, most notably Masala chai.',
    needsDome: false,
  },
  {
    id: '1063',
    categoryId: '105',
    name: 'Nicotiana Benthamiana',
    image: require('assets/imgs/plants/exotic/nicotiana_benthamiana.png'),
    binomialName: '', // TODO: Add content
    duration: 28,
    germinationDays: 4,
    characteristics: '', // TODO: Add content
    commonUse: '', // TODO: Add content
    needsDome: true,
  },
];
