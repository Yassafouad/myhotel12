// ===== Language Data =====
const translations = {
    ar: {
        'nav.about': 'حول السعودية',
        'nav.travel': 'دليل السفر',
        'nav.transport': 'المواصلات',
        'nav.visa': 'التأشيرة',
        'nav.register': 'احصل على التأشيرة',
        'hero.badge': 'اكتشف المملكة',
        'hero.title': 'دليل السفر إلى السعودية',
        'hero.subtitle': '',
        'hero.description': 'افتتحت المملكة العربية السعودية أبوابها للسياحة الترفيهية في عام 2019، لتصبح واحدة من آخر الحدود التي يمكن للمسافرين الشغوفين اكتشافها.',
        'hero.cta': 'احصل على التأشيرة',
        'hero.learn': 'اعرف المزيد',
        'hero.stat1': 'كم من السواحل',
        'hero.stat2': 'أكبر دولة في العالم',
        'hero.stat3': 'دولة مؤهلة للتأشيرة',
        'hero.payment.title': 'طرق دفع آمنة وسريعة',
        'hero.payment.text': 'ادفع بالبطاقات الدولية، مدى، أو المحافظ الرقمية مثل أبل باي للاستمتاع بتجربة حجز سلسة.',
        'about.title': 'حول المملكة العربية السعودية',
        'about.card1.title': 'الثقافة',
        'about.card1.text': 'تتميز المملكة العربية السعودية بتراث غني وتقاليد عريقة؛ فقد كانت عبر التاريخ مركزًا تجاريًا مهمًا وشهدت ولادة الدين الإسلامي، وتشهد اليوم تحولًا ثقافيًا يوازن بين العادات القديمة وروح العصر الحديث، مع إبراز مواقع مدرجة على قائمة التراث العالمي لليونسكو مثل الحِجر (مدائن صالح) وحي الطريف بالدرعية وواحة الأحساء، إضافة إلى مبادرات ثقافية ومهرجانات عالمية تعرّف الزوار على الفنون والموسيقي.',
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
        'payments.discover': 'اكتشف العملات',
        'culture.discover': 'استكشف الثقافة',
        'culture.gallery.title': 'التراث الثقافي لدى اليونسكو',
        'culture.gallery.subtitle': '',
        'culture.nav.prev': 'الموقع السابق',
        'culture.nav.next': 'الموقع التالي',
        'payments.gallery.title': 'العملات السعودية',
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
        'nav.register': 'Get Your Visa',
        'hero.badge': 'Discover the Kingdom',
        'hero.title': 'Travel Guide to Saudi Arabia',
        'hero.subtitle': '',
        'hero.description': 'Recently opening its doors to leisure tourism in 2019, the Kingdom of Saudi Arabia has become one of the last frontiers for passionate travelers to discover.',
        'hero.cta': 'Get Your Visa',
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
        'payments.discover': 'Discover the Currency Gallery',
        'culture.discover': 'Discover Culture',
        'culture.gallery.title': 'UNESCO Cultural Heritage in Saudi Arabia',
        'culture.gallery.subtitle': '',
        'culture.nav.prev': 'Previous site',
        'culture.nav.next': 'Next site',
        'payments.gallery.title': 'Saudi Currency Gallery',
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

const paymentsSlides = [
    {
        denomination: { ar: '500 ريال سعودي', en: 'SAR 500 Banknote' },
        images: {
            front: 'assets/500.png',
            back: 'assets/5001.png'
        },
        caption: {
            ar: '500 ريال - الوجه: صورة الملك عبدالعزيز بن عبدالرحمن آل سعود والكعبة المشرفة؛ الخلف: منظر للمسجد الحرام في مكة. اللون أزرق، الأبعاد 166x74 مم.',
            en: 'SAR 500 - Front: King Abdulaziz ibn Abdulrahman Al Saud with the Holy Kaaba; Back: Panorama of the Grand Mosque in Makkah. Blue palette, 166x74 mm.'
        }
    },
    {
        denomination: { ar: '200 ريال سعودي', en: 'SAR 200 Banknote' },
        images: {
            front: 'assets/200.png',
            back: 'assets/2001.jpg'
        },
        caption: {
            ar: '200 ريال - الوجه: صورة الملك عبدالعزيز وشعار رؤية 2030 المجسم؛ الخلف: صورة لقصر الحكم في الرياض. اللون رمادي، الأبعاد 163x73 مم.',
            en: 'SAR 200 - Front: King Abdulaziz with the three-dimensional Vision 2030 emblem; Back: Qasr Al Hukm in Riyadh. Gray palette, 163x73 mm.'
        }
    },
    {
        denomination: { ar: '100 ريال سعودي', en: 'SAR 100 Banknote' },
        images: {
            front: 'assets/100.png',
            back: 'assets/1001.png'
        },
        caption: {
            ar: '100 ريال - الوجه: صورة الملك سلمان بن عبدالعزيز والقبة الخضراء للمسجد النبوي؛ الخلف: منظر للمسجد النبوي بالمدينة المنورة. اللون أحمر، الأبعاد 160x72 مم.',
            en: "SAR 100 - Front: King Salman bin Abdulaziz with the Green Dome of the Prophet's Mosque; Back: View of Al-Masjid an-Nabawi in Madinah. Red palette, 160x72 mm."
        }
    },
    {
        denomination: { ar: '50 ريال سعودي', en: 'SAR 50 Banknote' },
        images: {
            front: 'assets/50.png',
            back: 'assets/501.png'
        },
        caption: {
            ar: '50 ريال - الوجه: صورة الملك سلمان بن عبدالعزيز ومسجد قبة الصخرة؛ الخلف: منظر للمسجد الأقصى في القدس الشريف. اللون أخضر، الأبعاد 155x70 مم.',
            en: 'SAR 50 - Front: King Salman bin Abdulaziz with the Dome of the Rock; Back: View of Al-Aqsa Mosque in Jerusalem. Green palette, 155x70 mm.'
        }
    },
    {
        denomination: { ar: '10 ريالات سعودية', en: 'SAR 10 Banknote' },
        images: {
            front: 'assets/10.png',
            back: 'assets/101.png'
        },
        caption: {
            ar: '10 ريالات - الوجه: صورة الملك سلمان وقصر الملك عبدالعزيز في المربع؛ الخلف: منظر لمركز الملك عبدالله المالي في الرياض. اللون بني، الأبعاد 150x68 مم.',
            en: 'SAR 10 - Front: King Salman with King Abdulaziz Historical Palace in Al Murabba; Back: King Abdullah Financial District in Riyadh. Brown palette, 150x68 mm.'
        }
    },
    {
        denomination: { ar: '5 ريالات سعودية', en: 'SAR 5 Banknote' },
        images: {
            front: 'assets/5.png',
            back: 'assets/51.png'
        },
        caption: {
            ar: '5 ريالات - الوجه: صورة الملك سلمان ومنظر حقل الشيبة في الربع الخالي؛ الخلف: زهور برية من السعودية. اللون أرجواني، الأبعاد 145x66 مم.',
            en: 'SAR 5 - Front: King Salman with the Shaybah oil field in the Empty Quarter; Back: Native wildflowers of Saudi Arabia. Purple palette, 145x66 mm.'
        }
    },
    {
        denomination: { ar: 'ريالان', en: 'SAR 2 Coin' },
        images: {
            front: 'assets/2.png',
            back: 'assets/2r.png'
        },
        caption: {
            ar: 'عملة ريالان - الوجه: صورة الملك عبدالعزيز بالذهب ضمن إطار فضي وزخارف نباتية وشعار المملكة؛ الخلف: الرقم 2 واسم الفئة بالعربية والإنجليزية مع سنة 1438هـ/2016م.',
            en: 'SAR 2 Coin - Front: King Abdulaziz in gold within a silver frame with botanical motifs and the Saudi emblem; Back: Numeral 2 with the denomination in Arabic and English and the year 1438H/2016.'
        }
    },
    {
        denomination: { ar: 'خمسون هللة', en: '50 Halala Coin' },
        images: {
            front: 'assets/50r.png',
            back: 'assets/50rr.png'
        },
        caption: {
            ar: 'عملة خمسون هللة - الوجه: شعار المملكة ولقب الملك وسنة الإصدار بزخارف نباتية؛ الخلف: الرقم 50 واسم الفئة بالعربية والإنجليزية.',
            en: '50 Halala Coin - Front: Saudi emblem, royal title, and mint year with botanical patterns; Back: Numeral 50 with the denomination in Arabic and English.'
        }
    },
    {
        denomination: { ar: 'خمس وعشرون هللة', en: '25 Halala Coin' },
        images: {
            front: 'assets/25r.png',
            back: 'assets/25rr.png'
        },
        caption: {
            ar: 'عملة خمس وعشرون هللة - الوجه: شعار المملكة واسم الملك مع سنة الإصدار؛ الخلف: الرقم 25 واسم الفئة بالعربية والإنجليزية وزخارف حولية.',
            en: '25 Halala Coin - Front: Saudi emblem, royal name, and mint year; Back: Numeral 25 with the denomination in Arabic and English and circular ornaments.'
        }
    },
    {
        denomination: { ar: 'عشر هللات', en: '10 Halala Coin' },
        images: {
            front: 'assets/10r.png',
            back: 'assets/10rr.png'
        },
        caption: {
            ar: 'عملة عشر هللات - الوجه: شعار المملكة واسم الملك وسنة الإصدار بزخارف نباتية؛ الخلف: الرقم 10 واسم الفئة بالعربية والإنجليزية.',
            en: '10 Halala Coin - Front: Saudi emblem, royal name, and mint year with botanical motifs; Back: Numeral 10 with the denomination in Arabic and English.'
        }
    },
    {
        denomination: { ar: 'خمس هللات', en: '5 Halala Coin' },
        images: {
            front: 'assets/5r.png',
            back: 'assets/5rr.png'
        },
        caption: {
            ar: 'عملة خمس هللات - الوجه: شعار المملكة واسم الملك وسنة الإصدار؛ الخلف: الرقم 5 واسم الفئة بالعربية والإنجليزية بزخارف نباتية.',
            en: '5 Halala Coin - Front: Saudi emblem, royal name, and mint year; Back: Numeral 5 with the denomination in Arabic and English and botanical etching.'
        }
    },
    {
        denomination: { ar: 'هللة واحدة', en: '1 Halala Coin' },
        images: {
            front: 'assets/1r.png',
            back: 'assets/1rr.png'
        },
        caption: {
            ar: 'عملة هللة واحدة - الوجه: شعار المملكة واسم الملك وسنة الإصدار بزخارف نباتية؛ الخلف: الرقم 1 واسم الفئة بالعربية والإنجليزية.',
            en: '1 Halala Coin - Front: Saudi emblem, royal name, and mint year with botanical detailing; Back: Numeral 1 with the denomination in Arabic and English.'
        }
    }
];

const cultureSlides = [
    {
        title: { ar: 'الحجر (مدائن صالح)', en: 'Hegra (Al-Hijr)' },
        description: {
            ar: 'كانت إحدى مدن مملكة الأنباط المهمة في شمال الجزيرة العربية، ويضم الموقع مقابر ضخمة منحوتة في القرن الأول قبل الميلاد مع ما يقارب 50 نقشاً ورسماً صخرياً.',
            en: 'Once a major Nabataean city in northern Arabia, the site preserves monumental tombs carved in the 1st century BCE along with nearly 50 inscriptions and petroglyphs.'
        },
        image: 'assets/hgr.png',
        alt: {
            ar: 'واجهات مقابر نبطية منحوتة في صخور موقع الحجر',
            en: 'Rock-cut Nabataean tomb façades at the Hegra heritage site'
        }
    },
    {
        title: { ar: 'حي الطريف في الدرعية', en: 'At-Turaif District in Diriyah' },
        description: {
            ar: 'تتوزع مساكنه الطينية على ضفاف وادي حنيفة وتحيط به أسوار وأبراج تاريخية، وقد كان أول عاصمة لأسرة آل سعود.',
            en: 'Its mudbrick palaces line the banks of Wadi Hanifah and are encircled by historic walls and towers; it served as the first capital of the Al Saud family.'
        },
        image: 'assets/hy.png',
        alt: {
            ar: 'عمارة طينية تاريخية في حي الطريف بالدرعية',
            en: 'Historic mudbrick architecture inside the At-Turaif district of Diriyah'
        }
    },
    {
        title: { ar: 'جدة التاريخية', en: 'Historic Jeddah' },
        description: {
            ar: 'تقع في قلب المدينة وتضم معالم تراثية مثل سور جدة وحاراتها القديمة، إلى جانب مجموعة من المساجد والأسواق التاريخية.',
            en: 'Located in the heart of the city, the district features the old Jeddah wall, traditional quarters, and a collection of historic mosques and souqs.'
        },
        image: 'assets/gdh.png',
        alt: {
            ar: 'لافتة تعريفية تشير إلى جدة التاريخية كموقع تراث عالمي',
            en: 'Signboard highlighting Historic Jeddah as a UNESCO World Heritage Site'
        }
    },
    {
        title: { ar: 'الفنون الصخرية في منطقة حائل', en: 'Rock Art of the Hail Region' },
        description: {
            ar: 'تشمل رسومات جبل أم سنمان في جبة والمنجور ورّاط في الشويمس، وتعرض نقوشاً للبشر والحيوانات يعود عمرها إلى عشرة آلاف عام.',
            en: 'Includes the petroglyphs of Jabal Umm Sinman at Jubbah and Jabal Al-Manjur and Raat at Shuwaymis, depicting humans and animals from more than 10,000 years ago.'
        },
        image: 'assets/fnon.png',
        alt: {
            ar: 'نقوش ورسومات صخرية في منطقة حائل',
            en: 'Ancient petroglyphs carved into sandstone in the Hail region'
        }
    },
    {
        title: { ar: 'واحة الأحساء', en: 'Al-Ahsa Oasis' },
        description: {
            ar: 'أكبر واحة نخيل محاطة بالرمال في العالم، تضم أكثر من مليون ونصف نخلة ومعالم تراثية مثل مسجد جواثى وقصر إبراهيم وسوق القيصرية.',
            en: 'The world’s largest oasis of palm groves encircled by desert dunes, with more than 1.5 million date palms and heritage landmarks such as Jawatha Mosque, Ibrahim Palace, and Qaisariya Market.'
        },
        image: 'assets/whae.png',
        alt: {
            ar: 'نخيل كثيفة تمتد في واحة الأحساء',
            en: 'Dense palm groves stretching across the Al-Ahsa Oasis'
        }
    },
    {
        title: { ar: 'منطقة حِمى الثقافية', en: 'Hima Cultural Area' },
        description: {
            ar: 'تضم رسوماً ونقوشاً صخرية تعود لما قبل التاريخ بكتابات ثمودية ومسند جنوبي وخط كوفي، إضافةً إلى دوائر حجرية ومقابر ركامية تمتد من الألفية السابعة حتى الأولى قبل الميلاد.',
            en: 'Hosts prehistoric rock carvings with Thamudic, South Arabian, and early Arabic scripts, plus stone circles and cairn tombs dating from the 7th to the 1st millennia BCE.'
        },
        image: 'assets/th.png',
        alt: {
            ar: 'تكوين صخري بركاني في منطقة حِمى الثقافية',
            en: 'Basalt plateau and cairn structures within the Hima cultural landscape'
        }
    },
    {
        title: { ar: 'محمية عروق بني معارض', en: 'Uruq Bani Ma’arid Reserve' },
        description: {
            ar: 'تقع على الطرف الغربي من الربع الخالي وتعد موطناً لـ 106 أنواع من النباتات، وأعيد توطين المها العربي وغزلان الريم والجبل والنعام، كما سجل بها أكثر من 100 نوع من الطيور.',
            en: 'Situated on the western edge of the Empty Quarter, the reserve protects 106 plant species and has reintroduced Arabian oryx, sand and mountain gazelles, ostriches, and over 100 bird species.'
        },
        image: 'assets/mh.png',
        alt: {
            ar: 'كثبان رملية ونباتات صحراوية في محمية عروق بني معارض',
            en: 'Sweeping dunes with desert shrubs inside the Uruq Bani Ma’arid Reserve'
        }
    },
    {
        title: { ar: 'المنظر الثقافي لمنطقة الفاو الأثرية', en: 'Cultural Landscape of the Al-Faw Archaeological Area' },
        description: {
            ar: 'كانت عاصمة لمملكة كندة لما يزيد عن خمسة قرون وتضم منازل وأسواقاً وآباراً وتماثيل برونزية وكتابات بالخط الجنوبي المسند.',
            en: 'Served as the capital of the Kindah kingdom for over five centuries, featuring houses, markets, wells, bronze figurines, and inscriptions in the Ancient South Arabian script.'
        },
        image: 'assets/mn.png',
        alt: {
            ar: 'لوحة جدارية أثرية من موقع الفاو',
            en: 'Ancient wall painting fragment from the Al-Faw archaeological site'
        }
    }
];

let paymentsState = null;
let paymentsModal = null;
let cultureState = null;
let cultureModal = null;

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
    initializePaymentsModal();
    initializePaymentsSlider();
    initializePaymentsDiscoverButtons();
    initializeCultureModal();
    initializeCultureSlider();
    initializeCultureDiscoverButtons();
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

    if (paymentsState && paymentsState.initialized) {
        refreshPaymentsSliderLanguage();
    }
    if (cultureState && cultureState.initialized) {
        refreshCultureSliderLanguage();
    }
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

// ===== Payments Slider =====
function initializePaymentsSlider() {
    const modalElement = document.getElementById('payments-modal');
    const dialog = modalElement ? modalElement.querySelector('.payments-modal-dialog') : null;
    const slider = document.getElementById('payments-slider');
    const frontImage = document.getElementById('payments-image-front');
    const backImage = document.getElementById('payments-image-back');
    const titleAr = document.getElementById('payments-title-ar');
    const titleEn = document.getElementById('payments-title-en');
    const indicators = document.getElementById('payments-indicators');
    const prev = document.getElementById('payments-prev');
    const next = document.getElementById('payments-next');

    if (!modalElement || !dialog || !slider || !frontImage || !backImage || !titleAr || !titleEn || !indicators) {
        paymentsState = null;
        return;
    }

    paymentsState = {
        index: 0,
        modal: modalElement,
        dialog,
        slider,
        frontImage,
        backImage,
        titleAr,
        titleEn,
        indicators,
        prev,
        next,
        initialized: false
    };

    buildPaymentsIndicators();

    if (paymentsState.prev) {
        paymentsState.prev.addEventListener('click', () => changePaymentsSlide(-1));
    }
    if (paymentsState.next) {
        paymentsState.next.addEventListener('click', () => changePaymentsSlide(1));
    }

    paymentsState.initialized = true;
    refreshPaymentsSliderLanguage();
}

function buildPaymentsIndicators() {
    if (!paymentsState || !paymentsState.indicators) {
        return;
    }

    paymentsState.indicators.innerHTML = '';

    paymentsSlides.forEach((slide, index) => {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.index = index;
        indicator.setAttribute('role', 'tab');
        indicator.addEventListener('click', () => goToPaymentsSlide(index));
        paymentsState.indicators.appendChild(indicator);
    });
}

function changePaymentsSlide(delta) {
    if (!paymentsState) {
        return;
    }

    const nextIndex = (paymentsState.index + delta + paymentsSlides.length) % paymentsSlides.length;
    goToPaymentsSlide(nextIndex);
}

function goToPaymentsSlide(index) {
    if (!paymentsState || !paymentsSlides[index]) {
        return;
    }

    paymentsState.index = index;
    updatePaymentsSlideContent();
}

function updatePaymentsSlideContent() {
    if (!paymentsState) {
        return;
    }

    const slide = paymentsSlides[paymentsState.index];

    paymentsState.frontImage.src = slide.images.front;
    paymentsState.backImage.src = slide.images.back;

    const frontAlt = `${slide.denomination.ar} - الوجه | ${slide.denomination.en} - Front`;
    const backAlt = `${slide.denomination.ar} - الخلف | ${slide.denomination.en} - Back`;

    paymentsState.frontImage.alt = frontAlt;
    paymentsState.backImage.alt = backAlt;

    paymentsState.titleAr.textContent = slide.denomination.ar;
    paymentsState.titleEn.textContent = slide.denomination.en;

    updatePaymentsIndicatorsState();
    setPaymentsNavLabels();
}

function updatePaymentsIndicatorsState() {
    if (!paymentsState || !paymentsState.indicators) {
        return;
    }

    const buttons = paymentsState.indicators.querySelectorAll('button');
    buttons.forEach(button => {
        const idx = Number(button.dataset.index || 0);
        const isActive = idx === paymentsState.index;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
        button.setAttribute('tabindex', isActive ? '0' : '-1');

        const slide = paymentsSlides[idx];
        if (slide) {
            const label = currentLang === 'ar' ? slide.denomination.ar : slide.denomination.en;
            button.setAttribute('aria-label', label);
            button.title = label;
        }
    });
}

function setPaymentsNavLabels() {
    if (!paymentsState) {
        return;
    }

    if (paymentsState.prev) {
        paymentsState.prev.setAttribute('aria-label', currentLang === 'ar' ? 'العملة السابقة' : 'Previous banknote');
    }
    if (paymentsState.next) {
        paymentsState.next.setAttribute('aria-label', currentLang === 'ar' ? 'العملة التالية' : 'Next banknote');
    }
}

function refreshPaymentsSliderLanguage() {
    if (!paymentsState) {
        return;
    }

    updatePaymentsSlideContent();

    const showArabic = currentLang === 'ar';

    paymentsState.titleAr.style.display = showArabic ? 'block' : 'none';
    paymentsState.titleEn.style.display = showArabic ? 'none' : 'block';
}

// ===== Payments Discover Buttons =====
function initializePaymentsDiscoverButtons() {
    const buttons = document.querySelectorAll('.payments-discover-btn');

    if (!buttons.length) {
        return;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (!paymentsState || !paymentsState.modal) {
                initializePaymentsSlider();
            }
            openPaymentsModal();
        });
    });
}

// ===== Form Placeholder (for when Zoho form is added) =====
function addZohoForm(embedCode) {
    const placeholder = document.getElementById('zoho-form-placeholder');
    if (placeholder && embedCode) {
        placeholder.innerHTML = embedCode;
    }
}

function initializePaymentsModal() {
    const modalElement = document.getElementById('payments-modal');

    if (!modalElement) {
        paymentsModal = null;
        return;
    }

    const dialog = modalElement.querySelector('.payments-modal-dialog');
    const closeTriggers = modalElement.querySelectorAll('[data-close="true"]');

    paymentsModal = {
        element: modalElement,
        dialog,
        closeTriggers
    };

    closeTriggers.forEach(trigger => {
        trigger.addEventListener('click', closePaymentsModal);
    });

    modalElement.addEventListener('click', (event) => {
        if (event.target === modalElement) {
            closePaymentsModal();
        }
    });

    document.addEventListener('keydown', handlePaymentsModalKeydown);
}

function handlePaymentsModalKeydown(event) {
    if (event.key === 'Escape' && paymentsModal && paymentsModal.element && paymentsModal.element.classList.contains('is-open')) {
        closePaymentsModal();
    }
}

function openPaymentsModal() {
    if (!paymentsModal || !paymentsModal.element) {
        initializePaymentsModal();
    }

    if (!paymentsModal || !paymentsModal.element) {
        return;
    }

    if (!paymentsState || !paymentsState.modal) {
        initializePaymentsSlider();
    }

    paymentsModal.element.classList.add('is-open');
    updateBodyModalState();

    if (paymentsModal.dialog) {
        paymentsModal.dialog.classList.add('is-highlighted');
        paymentsModal.dialog.setAttribute('tabindex', '-1');
        paymentsModal.dialog.focus({ preventScroll: true });
        setTimeout(() => {
            if (paymentsModal && paymentsModal.dialog) {
                paymentsModal.dialog.classList.remove('is-highlighted');
            }
        }, 1200);
    }
}

function closePaymentsModal() {
    if (!paymentsModal || !paymentsModal.element) {
        return;
    }

    paymentsModal.element.classList.remove('is-open');
    updateBodyModalState();

    if (paymentsModal.dialog) {
        paymentsModal.dialog.classList.remove('is-highlighted');
    }
}

// ===== Culture Slider =====
function initializeCultureSlider() {
    const modalElement = document.getElementById('culture-modal');
    const dialog = modalElement ? modalElement.querySelector('.culture-modal-dialog') : null;
    const slider = document.getElementById('culture-slider');
    const image = document.getElementById('culture-image');
    const titleAr = document.getElementById('culture-title-ar');
    const titleEn = document.getElementById('culture-title-en');
    const descAr = document.getElementById('culture-desc-ar');
    const descEn = document.getElementById('culture-desc-en');
    const indicators = document.getElementById('culture-indicators');
    const prev = document.getElementById('culture-prev');
    const next = document.getElementById('culture-next');

    if (!modalElement || !dialog || !slider || !image || !titleAr || !titleEn || !descAr || !descEn || !indicators) {
        cultureState = null;
        return;
    }

    cultureState = {
        index: 0,
        modal: modalElement,
        dialog,
        slider,
        image,
        titleAr,
        titleEn,
        descAr,
        descEn,
        indicators,
        prev,
        next,
        initialized: false
    };

    buildCultureIndicators();

    if (cultureState.prev) {
        cultureState.prev.addEventListener('click', () => changeCultureSlide(-1));
    }
    if (cultureState.next) {
        cultureState.next.addEventListener('click', () => changeCultureSlide(1));
    }

    cultureState.initialized = true;
    refreshCultureSliderLanguage();
}

function buildCultureIndicators() {
    if (!cultureState || !cultureState.indicators) {
        return;
    }

    cultureState.indicators.innerHTML = '';

    cultureSlides.forEach((slide, index) => {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.index = index;
        indicator.setAttribute('role', 'tab');
        indicator.addEventListener('click', () => goToCultureSlide(index));
        cultureState.indicators.appendChild(indicator);
    });
}

function changeCultureSlide(delta) {
    if (!cultureState) {
        return;
    }

    const nextIndex = (cultureState.index + delta + cultureSlides.length) % cultureSlides.length;
    goToCultureSlide(nextIndex);
}

function goToCultureSlide(index) {
    if (!cultureState || !cultureSlides[index]) {
        return;
    }

    cultureState.index = index;
    updateCultureSlideContent();
}

function updateCultureSlideContent() {
    if (!cultureState) {
        return;
    }

    const slide = cultureSlides[cultureState.index];

    cultureState.image.src = slide.image;
    cultureState.image.alt = `${slide.alt.ar} | ${slide.alt.en}`;

    cultureState.titleAr.textContent = slide.title.ar;
    cultureState.titleEn.textContent = slide.title.en;
    cultureState.descAr.textContent = slide.description.ar;
    cultureState.descEn.textContent = slide.description.en;

    updateCultureIndicatorsState();
    setCultureNavLabels();
}

function updateCultureIndicatorsState() {
    if (!cultureState || !cultureState.indicators) {
        return;
    }

    const buttons = cultureState.indicators.querySelectorAll('button');
    buttons.forEach(button => {
        const idx = Number(button.dataset.index || 0);
        const isActive = idx === cultureState.index;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
        button.setAttribute('tabindex', isActive ? '0' : '-1');

        const slide = cultureSlides[idx];
        if (slide) {
            const label = currentLang === 'ar' ? slide.title.ar : slide.title.en;
            button.setAttribute('aria-label', label);
            button.title = label;
        }
    });
}

function setCultureNavLabels() {
    if (!cultureState) {
        return;
    }

    const prevLabel = translations[currentLang]?.['culture.nav.prev'] || (currentLang === 'ar' ? 'الموقع السابق' : 'Previous site');
    const nextLabel = translations[currentLang]?.['culture.nav.next'] || (currentLang === 'ar' ? 'الموقع التالي' : 'Next site');

    if (cultureState.prev) {
        cultureState.prev.setAttribute('aria-label', prevLabel);
    }
    if (cultureState.next) {
        cultureState.next.setAttribute('aria-label', nextLabel);
    }
}

function refreshCultureSliderLanguage() {
    if (!cultureState) {
        return;
    }

    updateCultureSlideContent();

    const showArabic = currentLang === 'ar';

    cultureState.titleAr.style.display = showArabic ? 'block' : 'none';
    cultureState.titleEn.style.display = showArabic ? 'none' : 'block';
    cultureState.descAr.style.display = showArabic ? 'block' : 'none';
    cultureState.descEn.style.display = showArabic ? 'none' : 'block';
}

// ===== Culture Discover Buttons =====
function initializeCultureDiscoverButtons() {
    const buttons = document.querySelectorAll('.culture-discover-btn');

    if (!buttons.length) {
        return;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (!cultureState || !cultureState.modal) {
                initializeCultureSlider();
            }
            openCultureModal();
        });
    });
}

function initializeCultureModal() {
    const modalElement = document.getElementById('culture-modal');

    if (!modalElement) {
        cultureModal = null;
        return;
    }

    const dialog = modalElement.querySelector('.culture-modal-dialog');
    const closeTriggers = modalElement.querySelectorAll('[data-close="true"]');

    cultureModal = {
        element: modalElement,
        dialog,
        closeTriggers
    };

    closeTriggers.forEach(trigger => {
        trigger.addEventListener('click', closeCultureModal);
    });

    modalElement.addEventListener('click', (event) => {
        if (event.target === modalElement) {
            closeCultureModal();
        }
    });

    document.addEventListener('keydown', handleCultureModalKeydown);
}

function handleCultureModalKeydown(event) {
    if (event.key === 'Escape' && cultureModal && cultureModal.element && cultureModal.element.classList.contains('is-open')) {
        closeCultureModal();
    }
}

function openCultureModal() {
    if (!cultureModal || !cultureModal.element) {
        initializeCultureModal();
    }

    if (!cultureModal || !cultureModal.element) {
        return;
    }

    if (!cultureState || !cultureState.modal) {
        initializeCultureSlider();
    }

    cultureModal.element.classList.add('is-open');
    updateBodyModalState();

    if (cultureModal.dialog) {
        cultureModal.dialog.classList.add('is-highlighted');
        cultureModal.dialog.setAttribute('tabindex', '-1');
        cultureModal.dialog.focus({ preventScroll: true });
        setTimeout(() => {
            if (cultureModal && cultureModal.dialog) {
                cultureModal.dialog.classList.remove('is-highlighted');
            }
        }, 1200);
    }
}

function closeCultureModal() {
    if (!cultureModal || !cultureModal.element) {
        return;
    }

    cultureModal.element.classList.remove('is-open');
    updateBodyModalState();

    if (cultureModal.dialog) {
        cultureModal.dialog.classList.remove('is-highlighted');
    }
}

function updateBodyModalState() {
    const paymentsOpen = paymentsModal && paymentsModal.element && paymentsModal.element.classList.contains('is-open');
    const cultureOpen = cultureModal && cultureModal.element && cultureModal.element.classList.contains('is-open');

    if (paymentsOpen || cultureOpen) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
}

