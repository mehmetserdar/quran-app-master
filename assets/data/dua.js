const duaData = [
    {
        id: 1,
        title: "Sübhaneke Duası",
        description: "Namaza başlarken okunan dua",
        category: "prayer",
        arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ﴿﴾ وَتَبَارَكَ اسْمُكَ ﴿﴾ وَتَعَالَى جَدُّكَ ﴿﴾ وَلاَ إِلَهَ غَيْرُكَ",
        turkish: "Subhânekellâhumme ve bi hamdik ve tebârakesmuk ve teâlâ cedduk (ve celle senâuk*) ve lâ ilâhe ğayruk.",
        meaning: "Allah'ım! Sen eksik sıfatlardan pak ve uzaksın. Seni daima böyle tenzih eder ve överim. Senin adın mübarektir. Varlığın her şeyden üstündür. Senden başka ilah yoktur.",
        text: "Subhânekellâhumme ve bi hamdik ve tebârakesmuk ve teâlâ cedduk (ve celle senâuk*) ve lâ ilâhe ğayruk."
    },
    {
        id: 2,
        title: "Ettehiyyâtu Duası",
        description: "Namazda oturma esnasında okunan dua",
        category: "prayer",
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ﴿﴾السَّلامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ﴿﴾ السَّلامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ﴿﴾ أَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ ﴿﴾ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
        turkish: "Ettehiyyâtu lillâhi vessalevâtu vettayibât. Esselâmu aleyke eyyuhen-Nebiyyu ve rahmetullahi ve berakâtuhu. Esselâmu aleynâ ve alâ ibâdillâhis-Sâlihîn. Eşhedu en lâ ilâhe illallâh ve eşhedu enne Muhammeden abduhû ve Rasuluh.",
        meaning: "Dil ile, beden ve mal ile yapılan bütün ibadetler Allah'a dır. Ey Peygamber! Allah'ın selamı, rahmet ve bereketleri senin üzerine olsun. Selam bizim üzerimize ve Allah'ın bütün iyi kulları üzerine olsun. Şahitlik ederim ki, Allah'tan başka ilah yoktur. Yine şahitlik ederim ki, Muhammed, O'nun kulu ve elçisidir.",
        text: "Ettehiyyâtu lillâhi vessalevâtu vettayibât. Esselâmu aleyke eyyuhen-Nebiyyu ve rahmetullahi ve berakâtuhu."
    },
    {
        id: 3,
        title: "Allâhumme Salli Duası",
        description: "Peygamber efendimize salavat duası",
        category: "daily",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ ﴿﴾ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم ﴿﴾ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        turkish: "Allâhumme salli alâ Muhammedin ve alâ âli Muhammed. Kemâ salleyte alâ İbrahime ve alâ âli İbrahim. İnneke hamidun mecîd.",
        meaning: "Allah'ım! Muhammed'e ve Muhammed'in ümmetine rahmet eyle; şerefini yücelt. İbrahim'e ve İbrahim'in ümmetine rahmet ettiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",
        text: "Allâhumme salli alâ Muhammedin ve alâ âli Muhammed. Kemâ salleyte alâ İbrahime ve alâ âli İbrahim. İnneke hamidun mecîd."
    },
    {
        id: 4,
        title: "Allâhumme Barik Duası",
        description: "Bereket duası",
        category: "daily",
        arabic: "اللَّهُمَّ بَارِكَ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ ﴿﴾ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيم ﴿﴾ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        turkish: "Allâhumme barik alâ Muhammedin ve alâ âli Muhammed. Kemâ barekte alâ İbrahîme ve alâ âli İbrahim. İnneke hamidun mecîd",
        meaning: "Allah'ım! Muhammed'e ve Muhammed'in ümmetine hayır ve bereket ver. İbrahim'e ve İbrahim'in ümmetine verdiğin gibi. Şüphesiz övülmeye layık yalnız sensin, şan ve şeref sahibi de sensin.",
        text: "Allâhumme barik alâ Muhammedin ve alâ âli Muhammed. Kemâ barekte alâ İbrahîme ve alâ âli İbrahim. İnneke hamidun mecîd"
    },
    {
        id: 5,
        title: "Rabbenâ âtina Duası",
        description: "Dünya ve ahiret için hayır duası",
        category: "special",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        turkish: "Rabbenâ âtina fid'dunyâ haseneten ve fil'âhirati haseneten ve kınâ azâbennâr.",
        meaning: "Allah'ım! Bize dünyada iyilik ve güzellik, ahirette de iyilik, güzellik ver. Bizi ateş azabından koru.",
        text: "Rabbenâ âtina fid'dunyâ haseneten ve fil'âhirati haseneten ve kınâ azâbennâr."
    },
    {
        id: 6,
        title: "Rabbenâğfirlî Duası",
        description: "Mağfiret duası",
        category: "special",
        arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
        turkish: "Rabbenâğfirlî ve li-vâlideyye ve lil-Mu'minine yevme yekûmu'l hisâb.",
        meaning: "Ey bizim Rabbimiz! Beni, anamı ve babamı ve bütün mü'minleri hesap gününde (herkesin sorguya çekileceği günde) bağışla.",
        text: "Rabbenâğfirlî ve li-vâlideyye ve lil-Mu'minine yevme yekûmu'l hisâb."
    },
    {
        id: 7,
        title: "Kunut 1 Duası",
        description: "Vitir namazında okunan kunut duası",
        category: "prayer",
        arabic: "اَللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَ نَسْتَغْفِرُكَ وَ نَسْتَهْدِيكَ ﴿﴾ وَ نُؤْمِنُ بِكَ وَ نَتُوبُ اِلَيْكَ ﴿﴾ وَ نَتَوَكَّلُ عَلَيْكَ وَنُثْنِى عَلَيْك اْلخَيْرَ كُلَّهُ نَشْكُرُكَ وَ لاَ نَكْفُرُكَ ﴿﴾ وَ نَخْلَعُ وَ نَتْرُكُ مَنْ يَفْجُرُكَ",
        turkish: "Allâhumme innâ nesteînuke ve nestağfiruke ve nestehdik. Ve nu'minu bike ve netûbu ileyk. Ve netevekkelu aleyke ve nusni aleykel-hayra kullehu neşkuruke ve lâ nekfuruke ve nahleu ve netruku men yefcuruk",
        meaning: "Allahım! Senden yardım isteriz, günahlarımızı bağışlamanı isteriz, razı olduğun şeylere hidayet etmeni isteriz. Sana inanırız, sana tevbe ederiz. Sana güveniriz. Bize verdiğin bütün nimetleri bilerek seni hayır ile överiz. Sana şükrederiz. Hiçbir nimetini inkar etmez ve onları başkasından bilmeyiz. Nimetlerini inkar eden ve sana karşı geleni bırakırız.",
        text: "Allâhumme innâ nesteînuke ve nestağfiruke ve nestehdik. Ve nu'minu bike ve netûbu ileyk."
    },
    {
        id: 8,
        title: "Kunut 2 Duası",
        description: "Vitir namazında okunan kunut duası (2. bölüm)",
        category: "prayer",
        arabic: "اَللَّهُمَّ اِيَّاكَ نَعْبُدُ وَ لَكَ نُصَلِّى وَ نَسْجُدُ ﴿﴾ وَ اِلَيْكَ نَسعْىَ وَ نَحْفِدُ ﴿﴾ نَرْجُو رَحْمَتَكَ وَ نَخْشَى عَذَابَك ﴿﴾ اِنَّ عَذَابَكَ بِاْلكُفَّارِ مُلْحِقٌ",
        turkish: "Allâhumme iyyâke na'budu ve leke nusalli ve nescudu ve ileyke nes'a ve nahfidu nercû rahmeteke ve nahşâ azâbeke inne azâbeke bilkuffâri mulhık",
        meaning: "Allahım! Biz yalnız sana kulluk ederiz. Namazı yalnız senin için kılarız, ancak sana secde ederiz. Yalnız sana koşar ve sana yaklaştıracak şeyleri kazanmaya çalışırız. İbadetlerini sevinçle yaparız. Rahmetinin devamını ve çoğalmasını dileriz. Azabından korkarız, şüphesiz senin azabın kafirlere ve inançsızlara ulaşır.",
        text: "Allâhumme iyyâke na'budu ve leke nusalli ve nescudu ve ileyke nes'a ve nahfidu nercû rahmeteke ve nahşâ azâbeke inne azâbeke bilkuffâri mulhık"
    },
    {
        id: 9,
        title: "Ayetel Kürsi",
        description: "Bakara suresinin 255. ayeti",
        category: "protection",
        arabic: "اللَّهُ لا إِلَهَ إِلا هُوَ الْحَيُّ الْقَيُّومُ لا تَأْخُذُهُ سِنَةٌ وَلا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلا يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        turkish: "Allâhu lâ ilâhe illâ huve'l-hayyu'l-kayyûm. Lâ te'huzuhû sinetün ve lâ nevm. Lehû mâ fî's-semâvâti ve mâ fî'l-ard. Men ze'llezî yeşfeu indehû illâ bi-iznie. Ya'lemu mâ beyne eydîhim ve mâ halfehum. Ve lâ yuhîtûne bi-şey'in min ilmihî illâ bi-mâ şâ. Vesia kursiyyuhu's-semâvâti ve'l-ard. Ve lâ yeûduhû hifzuhumâ ve huve'l-aliyyu'l-azîm.",
        meaning: "Allah, O'ndan başka ilah yoktur. Diri olan, diri tutan O'dur. Onu ne uyuklama alır ne de uyku. Göklerde ve yerde ne varsa hepsi O'nundur. O'nun izni olmadıkça O'nun nezdinde kim şefaat edebilir? O, onların önlerindekini ve arkalarındakini bilir. Onlar ise O'nun ilminden ancak dilediği kadarını kavrayabilirler. O'nun kürsüsü gökleri ve yeri kuşatmıştır. Onları koruyup gözetmek O'na güç gelmez. O, pek yücedir, pek büyüktür.",
        text: "Allâhu lâ ilâhe illâ huve'l-hayyu'l-kayyûm. Lâ te'huzuhû sinetün ve lâ nevm."
    },
    {
        id: 10,
        title: "Sabah Akşam Duası",
        description: "Sabah ve akşam vakitlerinde okunan dua",
        category: "daily",
        arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لا إِلَهَ إِلا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        turkish: "Asbahna ve asbaha'l-mulku lillah, vel-hamdu lillah, la ilâhe illa'llahu vahdahu la şerike leh, lehu'l-mulku ve lehu'l-hamdu ve huve ala kulli şey'in kadir.",
        meaning: "Sabahladık ve mülk Allah'ındır. Hamd Allah'adır. Allah'tan başka ilah yoktur. O birdir, ortağı yoktur. Mülk O'nundur, hamd O'nundur ve O her şeye kadirdir.",
        text: "Asbahna ve asbaha'l-mulku lillah, vel-hamdu lillah, la ilâhe illa'llahu vahdahu la şerike leh."
    }
];

// Backward compatibility - keep the old variable name too
const dua = duaData;