// ===== Language Data =====
const translations = {
    ar: {
        'nav.about': 'حول السعودية',
        'nav.travel': 'دليل السفر',
        'nav.transport': 'المواصلات',
        'nav.visa': 'التأشيرة',
        'nav.register': 'التسجيل',
        'hero.badge': 'اكتشف المملكة',
        'hero.title': 'دليل السفر إلى السعودية',
        'hero.subtitle': '',
        'hero.description': 'افتتحت المملكة العربية السعودية أبوابها للسياحة الترفيهية في عام 2019، لتصبح واحدة من آخر الحدود التي يمكن للمسافرين الشغوفين اكتشافها.',
        'hero.cta': 'سجّل الآن',
        'hero.learn': 'اعرف المزيد',
        'hero.stat1': 'كم من السواحل',
        'hero.stat2': 'أكبر دولة في العالم',
        'hero.stat3': 'دولة مؤهلة للتأشيرة',
        'hero.payment.title': 'طرق دفع آمنة وسريعة',
        'hero.payment.text': 'ادفع بالبطاقات الدولية، مدى، أو المحافظ الرقمية مثل أبل باي للاستمتاع بتجربة حجز سلسة.',
        'about.title': 'حول المملكة العربية السعودية',
        'about.card1.title': 'الثقافة',
        'about.card1.text': 'تتميز المملكة العربية السعودية بتراث غني وتقاليد عريقة؛ فقد كانت عبر التاريخ مركزًا تجاريًا مهمًا وشهدت ولادة الدين الإسلامي، وتشهد اليوم تحولًا ثقافيًا يوازن بين العادات القديمة وروح العصر الحديث مع مبادرات ثقافية ومهرجانات عالمية تعرّف الزوار على الفنون والموسيقى والمطبخ المحلي.',
        'about.card2.title': 'اللغة',
        'about.card2.text': 'العربية هي اللغة الرسمية المستخدمة في التعاملات اليومية، بينما تُعد الإنجليزية اللغة الثانية غير الرسمية ويتحدث بها شريحة واسعة من السكان؛ وتُعرض لوحات السير، القوائم، والخدمات السياحية باللغتين لضمان تجربة ميسّرة للزوار، مع توفر مترجمين ودلائل بلغات إضافية في أبرز الوجهات.',
        'about.card3.title': 'الآداب العامة',
        'about.card3.text': 'يُعد احترام الآخرين جزءًا أساسيًا من الحياة اليومية؛ لذا يُنصح بتجنب الكلام البذيء والسلوك الصاخب والالتزام باللياقات العامة في جميع الأوقات، مع اختيار ملابس محتشمة في الأماكن العامة ومراعاة الخصوصية عند التصوير لضمان تجربة مريحة للجميع.',
        'about.card4.title': 'الكحول والمواد الممنوعة',
        'about.card4.text': 'يُحظر بيع وشراء واستهلاك المشروبات الكحولية أو المخدرات في المملكة العربية السعودية، كما تُطبَّق قوانين صارمة على المواد المحظورة والممنوعات، ويُنصح الزوار بالاطلاع على قائمة المقتنيات المسموح بها قبل السفر للحفاظ على سلامتهم.',
        'about.card5.title': 'الدين والحياة اليومية',
        'about.card5.text': 'تُغلق المتاجر لفترات وجيزة أثناء أوقات الصلاة لإتاحة وقت للعبادة، ويتحول نمط الحياة خلال شهر رمضان المبارك إلى إيقاع روحاني هادئ يعكس الخصوصية الدينية للمملكة، كما تُرحَّب الوفود المشاركة في مناسك الحج والعمرة على مدار العام ضمن منظومة خدمات متكاملة.',
        'travel.title': 'دليل التخطيط لرحلتك',
        'travel.group1.badge': 'الأساسيات',
        'travel.group1.title': 'أساسيات التخطيط',
        'travel.group1.description': 'معلومات سريعة تساعدك على ترتيب مستنداتك، ميزانيتك، وطرق التواصل قبل الوصول إلى المملكة.',
        'travel.group2.badge': 'المواسم',
        'travel.group2.title': 'اختيار الوقت الأنسب',
        'travel.group2.description': 'تعرف على أجواء كل فصل لتحدد الملابس والأنشطة التي تناسبك في مختلف مناطق المملكة.',
        'travel.group3.badge': 'تجربتك',
        'travel.group3.title': 'أسلوب الحياة أثناء الرحلة',
        'travel.group3.description': 'اكتشف خيارات التسوق والإقامة التي تمنحك راحة أكبر وتحافظ على طابع المملكة الأصيل.',
        'travel.card1.title': 'معلومات مهمة خلال زيارتك',
        'travel.card1.text': 'زيارة السعودية فرصة لاكتشاف التراث الأصيل وكرم الضيافة والمناظر الطبيعية الخلابة؛ احرص على الاستفادة من المعلومات المتعلقة بالتنقل والتسوق والتواصل لتجربة مريحة وممتعة.',
        'travel.card2.title': 'صيف السعودية',
        'travel.card2.text': 'يزخر الصيف بالأنشطة البحرية مثل الغطس والإبحار في البحر الأحمر والخليج العربي، كما تُعد جبال الطائف ملاذًا منعشًا بفضل أجوائها المعتدلة.',
        'travel.card3.title': 'شتاء السعودية',
        'travel.card3.text': 'يمتزج الشتاء بين دفء النهار وبرودة الليل، وهو وقت مناسب للتخييم واستكشاف العلا ومشاهدة تساقط الثلوج في الشمال ومنطقة عسير.',
        'travel.card4.title': 'ربيع السعودية',
        'travel.card4.text': 'يجمع الربيع بين أجواء معتدلة في الرياض والوسط، وبرودة في الشمال، وأمطار على مرتفعات عسير، ما يجعله موسمًا مثاليًا للأنشطة الخارجية والتطعيس.',
        'travel.card5.title': 'خريف السعودية',
        'travel.card5.text': 'يتسم الخريف بطقس لطيف في الشمال والمرتفعات الجنوبية، مع أيام دافئة وأمسيات معتدلة مثالية للتنزه أو الاستجمام في ينابيع الأحساء.',
        'travel.card6.title': 'طرق الدفع والعملات',
        'travel.card6.text': 'الريال السعودي هو العملة الرسمية، وتدعم المتاجر والفنادق بطاقات الدفع الدولية، كما تتوفر المحافظ الرقمية مثل مدى وأبل باي لتسهيل عمليات الشراء.',
        'travel.card7.title': 'الرعاية الصحية',
        'travel.card7.text': 'تتوفر في السعودية منشآت طبية متقدمة في المدن الرئيسية، ويُنصح بحمل تأمين صحي ساري، ومعرفة أقرب المراكز الطبية والمستشفيات خلال رحلتك.',
        'travel.card8.title': 'التسوق والتسعير',
        'travel.card8.text': 'تنتشر مراكز التسوق الحديثة والأسواق الشعبية في مختلف المدن، وتُعرض الأسعار بالريال السعودي مع خيارات للتفاوض في الأسواق التقليدية؛ احتفظ بإيصالات الشراء واستفد من استرداد الضريبة للزوار.',
        'travel.card9.title': 'الإقامة والضيافة',
        'travel.card9.text': 'توفر المملكة خيارات إقامة متعددة من المنتجعات الفاخرة إلى دور الضيافة التراثية، مع خدمات استقبال متاحة على مدار الساعة وموظفين يجيدون عدة لغات لخدمة الزوار.',
        'travel.card10.title': 'الاتصال والإنترنت',
        'travel.card10.text': 'تتوفر شرائح جوال سياحية في المطارات والمتاجر المعتمدة، وتغطي شبكات الجيل الخامس معظم المدن، كما توفر الفنادق والمجمعات التجارية اتصال واي فاي مجاني.',
        'travel.card11.title': 'الطوارئ والدعم',
        'travel.card11.text': 'تعمل فرق الطوارئ على مدار الساعة عبر رقم 911 في معظم المناطق، وتوجد مراكز معلومات سياحية وخدمات حكومية لتقديم المساعدة والتوجيه للمسافرين.',
        'transport.title': 'دليل المواصلات في السعودية',
        'transport.card1.title': 'السفر الجوي',
        'transport.card1.text': 'تسهل شبكة المطارات الدولية والمحلية الوصول إلى معظم المدن السعودية، مع رحلات منتظمة تربط الرياض وجدة والدمام بالوجهات الداخلية والعالمية.',
        'transport.card2.title': 'التنقل بالسيارة',
        'transport.card2.text': 'تتوفر خدمات تأجير السيارات والنقل التشاركي بسهولة من المطارات والفنادق، ما يمنحك مرونة في التنقل واستكشاف وجهاتك بالوتيرة التي تناسبك.',
        'transport.card3.title': 'المترو والنقل العام',
        'transport.card3.text': 'يوفر مترو الرياض ومكة إلى جانب الحافلات الحديثة خيارات نقل عام فعالة بمسارات تغطي الأحياء والمعالم الحيوية.',
        'transport.card4.title': 'الحافلات بين المدن',
        'transport.card4.text': 'تربط الحافلات السريعة بين المدن الرئيسة وتوفر حجوزات إلكترونية ومقاعد مريحة، مما يجعل السفر البري خيارًا اقتصاديًا وموثوقًا.',
        'transport.card5.title': 'النقل البحري والجولات',
        'transport.card5.text': 'توفر الوجهات الساحلية على البحر الأحمر والخليج العربي رحلات بحرية وجولات قوارب ويخوت مستأجرة لاستكشاف الجزر والشعاب المرجانية، مع وجود مراسي وخدمات سلامة معتمدة.',
        'visa.title': 'التأشيرة والأسئلة الشائعة',
        'visa.faq1.question': 'ما هي التأشيرة الإلكترونية السعودية؟',
        'visa.faq1.answer': 'التأشيرة السياحية الإلكترونية تتيح للزوار من الدول المؤهلة استكشاف المملكة لأغراض الترفيه أو زيارة العائلة والأصدقاء. يمكن الحصول عليها بالكامل عبر الإنترنت خلال دقائق، وتمنح صلاحية متعددة الدخول لمدة عام مع إمكانية الإقامة حتى 90 يومًا في كل زيارة.',
        'visa.faq2.question': 'ما الشروط ومتطلبات التقديم؟',
        'visa.faq2.answer': 'يحتاج المتقدم إلى جواز سفر ساري لمدة لا تقل عن ستة أشهر، وصورة شخصية حديثة، وعنوان إقامة داخل المملكة، بالإضافة إلى وسيلة دفع إلكترونية لتسديد الرسوم. يجب أن تطابق البيانات المدخلة المعلومات الرسمية في الجواز لتجنب التأخير.',
        'visa.faq3.question': 'ما هي المستندات الداعمة والتأمين الطبي؟',
        'visa.faq3.answer': 'يشترط تقديم تأمين صحي معتمد يغطي فترة الإقامة داخل المملكة، ويُصدر تلقائيًا ضمن طلب التأشيرة الإلكترونية. قد تُطلب مستندات إضافية عند الضرورة مثل إثبات الإقامة أو تذاكر السفر ذهابًا وإيابًا، ويتم إخطار المتقدم في حال الحاجة إليها.',
        'visa.faq4.question': 'ما مدة الإقامة والزيارات المسموح بها؟',
        'visa.faq4.answer': 'تسمح التأشيرة السياحية بإقامة متصلة تصل إلى 90 يومًا لكل رحلة، وبحد أقصى 180 يومًا خلال العام الواحد. يجب الخروج من المملكة قبل انتهاء المدة المحددة، ويمكن إعادة الدخول طالما كانت التأشيرة سارية.',
        'visa.faq5.question': 'كيف يتم التقديم واستلام التأشيرة؟',
        'visa.faq5.answer': 'يتم إنشاء حساب في المنصة الرسمية، وإكمال نموذج الطلب، وتحميل المستندات، ودفع الرسوم إلكترونيًا. بعد الموافقة، تُرسل التأشيرة على البريد الإلكتروني في ملف PDF يمكن طباعته أو حفظه على الهاتف لتقديمه عند الوصول.',
        'visa.faq6.question': 'ماذا يحدث عند الوصول إلى المملكة؟',
        'visa.faq6.answer': 'عند الوصول، يُقدّم جواز السفر مع التأشيرة الإلكترونية لمسؤول الجوازات، وقد يُطلب مسح بصمات الأصابع وتأكيد بيانات الإقامة. يحتفظ المسافر بنسخة من التأشيرة وتأمينه الصحي طوال فترة الزيارة ويلتزم بالأنظمة المحلية.',
        'visa.faq7.question': 'من يمكنه تقديم الدعم في حال وجود استفسارات؟',
        'visa.faq7.answer': 'توفر المنصة الإلكترونية للتأشيرة مركز دعم يعمل على مدار الساعة، كما يمكن التواصل مع مركز العناية بالزوار داخل المملكة عبر الرقم الموحد 930 أو مراجعة مراكز الخدمة في المطارات الدولية للحصول على المساعدة اللازمة.',
        'register.title': 'سجّل الآن للحصول على دليل شامل لرحلتك إلى السعودية',
        'register.subtitle': 'املأ النموذج أدناه للحصول على دليل شامل ومعلومات محدثة حول رحلتك إلى المملكة العربية السعودية.',
        'register.placeholder': 'سيتم إضافة نموذج Zoho هنا',
        'register.placeholder-note': 'Zoho form embed code will be provided by client',
        'footer.company': 'فنادقي MyHotels.SA',
        'footer.quickLinks': 'روابط سريعة',
        'footer.otherPages': 'صفحاتنا الأخرى',
        'footer.pageYas': 'جزيرة ياس',
        'footer.pageDisney': 'ديزني لاند باريس',
        'footer.pageUmrah': 'عمرة VVIP',
        'footer.pageLearn': 'تعلم اللغة العربية',
        'footer.follow': 'تابعنا',
        'footer.website': 'الموقع',
        'footer.facebook': 'فيسبوك',
        'footer.instagram': 'إنستغرام',
        'footer.twitter': 'تويتر/إكس',
        'footer.youtube': 'يوتيوب',
        'footer.linkedin': 'لينكدإن',
        'footer.contact': 'اتصل بنا',
        'footer.phone': '+966 920 033 025',
        'footer.email': 'CC@MyHotels.SA',
        'footer.address': 'جدة، المملكة العربية السعودية',
        'footer.download': 'حمل التطبيق',
        'footer.appStore': 'حمل من App Store',
        'footer.googlePlay': 'حمل من Google Play',
        'footer.copyright': '© 2025 جميع الحقوق محفوظة | All rights reserved'
    },
    en: {
        'nav.about': 'About',
        'nav.travel': 'Travel Guide',
        'nav.transport': 'Transportation',
        'nav.visa': 'Visa',
        'nav.register': 'Registration',
        'hero.badge': 'Discover the Kingdom',
        'hero.title': 'Travel Guide to Saudi Arabia',
        'hero.subtitle': '',
        'hero.description': 'Recently opening its doors to leisure tourism in 2019, the Kingdom of Saudi Arabia has become one of the last frontiers for passionate travelers to discover.',
        'hero.cta': 'Register Now',
        'hero.learn': 'Learn More',
        'hero.stat1': 'km of Coastline',
        'hero.stat2': 'Largest Country in the World',
        'hero.stat3': 'Eligible Countries for Visa',
        'hero.payment.title': 'Secure, Modern Payments',
        'hero.payment.text': 'Pay effortlessly with international cards, Mada, and digital wallets such as Apple Pay.',
        'about.title': 'About Saudi Arabia',
        'about.card1.title': 'Culture',
        'about.card1.text': 'Saudi Arabia blends deep-rooted heritage with contemporary creativity: once a pivotal trading hub and the birthplace of Islam, it now showcases art, cuisine, and music through world-class festivals and cultural initiatives.',
        'about.card2.title': 'Language',
        'about.card2.text': 'Arabic is the official language, while English is widely used across tourism services; signage, menus, and visitor information appear in both languages, and multilingual guides are available in major destinations.',
        'about.card3.title': 'Etiquette',
        'about.card3.text': 'Courtesy underpins daily life—dress modestly in public, avoid disruptive behavior, and request permission before photographing people to ensure everyone feels respected.',
        'about.card4.title': 'Alcohol & Prohibited Items',
        'about.card4.text': 'The sale, purchase, or consumption of alcohol and narcotics is prohibited. Review the list of restricted items before travel and comply with customs rules to keep your trip smooth and safe.',
        'about.card5.title': 'Faith & Daily Life',
        'about.card5.text': 'Businesses pause briefly for prayer, Ramadan brings a tranquil spiritual rhythm, and year-round services welcome pilgrims performing Hajj and Umrah with comprehensive hospitality.',
        'travel.title': 'Travel Planning Guide',
        'travel.group1.badge': 'Essentials',
        'travel.group1.title': 'Plan the Fundamentals',
        'travel.group1.description': 'Quick tips to organize documents, budgeting, and connectivity before you arrive in the Kingdom.',
        'travel.group2.badge': 'Seasons',
        'travel.group2.title': 'Pick the Best Timing',
        'travel.group2.description': 'Understand the character of each season so you can pack smartly and choose the right activities nationwide.',
        'travel.group3.badge': 'Your Stay',
        'travel.group3.title': 'Live the Experience',
        'travel.group3.description': 'Explore shopping and accommodation highlights that keep you comfortable while embracing Saudi authenticity.',
        'travel.card1.title': 'Essential Visit Information',
        'travel.card1.text': 'Discover Saudi hospitality, heritage, and landscapes—use these quick tips on transportation, shopping, and connectivity to keep your journey effortless.',
        'travel.card2.title': 'Summer in Saudi',
        'travel.card2.text': 'Summer is perfect for diving, snorkeling, and sailing along the Red Sea and Arabian Gulf, while Taif’s mountains offer refreshing breezes.',
        'travel.card3.title': 'Winter in Saudi',
        'travel.card3.text': 'Enjoy mild days and cool nights—ideal for camping, touring AlUla’s heritage sites, and witnessing snowfall in the north and the Asir Highlands.',
        'travel.card4.title': 'Spring in Saudi',
        'travel.card4.text': 'Spring delivers pleasant weather in Riyadh, cooler northern evenings, and rain-dusted Asir peaks, creating prime conditions for outdoor adventures.',
        'travel.card5.title': 'Autumn in Saudi',
        'travel.card5.text': 'Autumn brings gentle temperatures in the north and southwest, with warm days and mild evenings perfect for alfresco dining or soaking in Al-Ahsa springs.',
        'travel.card6.title': 'Payments & Currency',
        'travel.card6.text': 'The Saudi Riyal (SAR) is the official currency. International cards, Mada, and digital wallets like Apple Pay and Google Pay are widely accepted.',
        'travel.card7.title': 'Healthcare',
        'travel.card7.text': 'Saudi cities host advanced hospitals and clinics—carry active health insurance and map nearby facilities before you travel.',
        'travel.card8.title': 'Shopping & Pricing',
        'travel.card8.text': 'From luxury malls to souqs, prices are listed in SAR and bargaining is common in traditional markets. Keep receipts and claim VAT refunds at departure points.',
        'travel.card9.title': 'Accommodation & Hospitality',
        'travel.card9.text': 'Choose from luxury resorts, business hotels, and heritage guesthouses, many with 24/7 concierge teams and multilingual staff ready to assist.',
        'travel.card10.title': 'Connectivity & Internet',
        'travel.card10.text': 'Tourist SIM cards are sold at airports and retailers, 5G networks cover major cities, and hotels and malls frequently provide complimentary Wi-Fi.',
        'travel.card11.title': 'Emergency & Support',
        'travel.card11.text': 'Dial 911 in most regions for emergency assistance, and visit tourist information centers or government service desks for travel guidance.',
        'transport.title': 'Getting Around Saudi Arabia',
        'transport.card1.title': 'Air Travel',
        'transport.card1.text': 'International and domestic airports connect Saudi cities, with frequent services between Riyadh, Jeddah, Dammam, and global destinations.',
        'transport.card2.title': 'Getting Around by Car',
        'transport.card2.text': 'Car rentals and ride-hailing apps are widely available at airports and hotels, offering the flexibility to explore at your own pace.',
        'transport.card3.title': 'Metro & Public Transport',
        'transport.card3.text': 'Metro networks in Riyadh and Mecca, paired with modern bus fleets, provide efficient routes that cover key districts and attractions.',
        'transport.card4.title': 'Intercity Buses',
        'transport.card4.text': 'Express coaches link major cities with comfortable seating and digital booking, keeping long-distance travel convenient and affordable.',
        'transport.card5.title': 'Marine Transport & Cruises',
        'transport.card5.text': 'Coastal hubs on the Red Sea and Arabian Gulf offer boat charters, island excursions, and yacht experiences supported by certified marinas and safety crews.',
        'visa.title': 'Visa & FAQs',
        'visa.faq1.question': 'What is the Saudi eVisa?',
        'visa.faq1.answer': 'The tourist eVisa lets eligible visitors enter Saudi Arabia for leisure or family trips. Apply online in minutes to receive a multi-entry visa valid for one year, allowing stays of up to 90 days per visit.',
        'visa.faq2.question': 'What are the application requirements?',
        'visa.faq2.answer': 'Applicants need a passport valid for at least six months, a recent photo, a Saudi accommodation address, and an accepted payment method. Ensure all details match your official documents to avoid delays.',
        'visa.faq3.question': 'Which documents and insurance are required?',
        'visa.faq3.answer': 'Approved travel medical insurance is bundled with the eVisa application. Additional documents, such as proof of accommodation or return tickets, may be requested and must be provided if prompted.',
        'visa.faq4.question': 'How long can I stay in Saudi Arabia?',
        'visa.faq4.answer': 'You may remain in the Kingdom for up to 90 consecutive days per trip, with a total annual stay of 180 days. Depart the country before your permitted duration expires to remain compliant.',
        'visa.faq5.question': 'How do I apply and receive the visa?',
        'visa.faq5.answer': 'Create an account on the official platform, complete the form, upload required documents, and pay the fee online. Once approved, the eVisa PDF is emailed—print or save it to present on arrival.',
        'visa.faq6.question': 'What should I expect on arrival?',
        'visa.faq6.answer': 'Present your passport and eVisa to immigration officers, who may verify biometrics and accommodation details. Keep your visa copy and insurance confirmation accessible throughout your stay.',
        'visa.faq7.question': 'Where can I get assistance?',
        'visa.faq7.answer': 'The eVisa portal offers 24/7 support, and while in Saudi Arabia you can reach the visitor care hotline at 930 or visit service desks at international airports for help.',
        'register.title': 'Register Now for a Comprehensive Guide to Your Trip to Saudi Arabia',
        'register.subtitle': 'Fill out the form below to receive a comprehensive guide and updated information about your trip to Saudi Arabia.',
        'register.placeholder': 'Zoho form will be added here',
        'register.placeholder-note': 'Zoho form embed code will be provided by client',
        'footer.company': 'MyHotels.SA',
        'footer.quickLinks': 'Quick Links',
        'footer.otherPages': 'Our Other Pages',
        'footer.pageYas': 'Yas Island',
        'footer.pageDisney': 'Disneyland Paris',
        'footer.pageUmrah': 'Umrah VVIP',
        'footer.pageLearn': 'Learn Arabic',
        'footer.follow': 'Follow Us',
        'footer.website': 'Website',
        'footer.facebook': 'Facebook',
        'footer.instagram': 'Instagram',
        'footer.twitter': 'Twitter/X',
        'footer.youtube': 'YouTube',
        'footer.linkedin': 'LinkedIn',
        'footer.contact': 'Contact Us',
        'footer.phone': '+966 920 033 025',
        'footer.email': 'CC@MyHotels.SA',
        'footer.address': 'Jeddah, Saudi Arabia',
        'footer.download': 'Download Our App',
        'footer.appStore': 'Download from App Store',
        'footer.googlePlay': 'Download from Google Play',
        'footer.copyright': '© 2025 All rights reserved | جميع الحقوق محفوظة'
    }
};

// ===== Current Language =====
let currentLang = localStorage.getItem('language') || 'ar';

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeNavigation();
    initializeFAQ();
    initializeScrollAnimations();
    initializeSmoothScroll();
    initializeCTA();
});

// ===== CTA Button =====
function initializeCTA() {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const registrationSection = document.getElementById('registration');
            if (registrationSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = registrationSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ===== Language Functions =====
function initializeLanguage() {
    setLanguage(currentLang);
    
    // Language switcher buttons
    document.getElementById('lang-ar').addEventListener('click', () => setLanguage('ar'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML direction and lang attribute
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// ===== Navigation Functions =====
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
}

// ===== FAQ Accordion Functions =====
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ===== Smooth Scroll Functions =====
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== Scroll Animations =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.about-item, .travel-item, .transport-card, .faq-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== Form Placeholder (for when Zoho form is added) =====
function addZohoForm(embedCode) {
    const placeholder = document.getElementById('zoho-form-placeholder');
    if (placeholder && embedCode) {
        placeholder.innerHTML = embedCode;
    }
}

