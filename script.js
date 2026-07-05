/* ════════════════════════════════════════
   PRATAMANA PORTFOLIO — script.js v6 (100% i18n & Calm Theme)
   ════════════════════════════════════════ */

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_exp: "Experience",
    nav_port: "Portfolio",
    nav_contact: "Contact",
    hero_avail: "Open to Work & Collaboration",
    hero_greeting: "Hello, I'm",
    name_first: "Muhammad",
    name_last: "Ramadhan Putra Pratama",
    name_last_2: "Putra Pratama",
    hero_role_prefix: "A ",
    role_qa: "QA Engineer",
    role_ui: "UI/UX Designer",
    role_web: "Web Developer",
    role_graphic: "Graphic Designer",
    role_video: "Video Editor",
    role_lso: "Live Streaming Op.",
    hero_bio: "A passionate digital creator dedicated to building high-quality digital products — from <strong>Quality Assurance Engineering</strong> to user-centered <strong>UI/UX Design</strong> that makes a real impact.",
    hero_cta_port: "View Portfolio",
    hero_cta_contact: "Contact Me",
    stat_projects: "Completed Projects",
    stat_skills: "Core Skills",
    stat_exp: "Years Experience",
    scroll: "Scroll",
    chip_qa: "QA",
    chip_design: "Design",
    chip_video: "Video",
    about_title: "About Me",
    about_sub: "Get to know the person behind the digital creations",
    about_badge: "Years<br>Experience",
    about_tag: "Digital Creator & QA Engineer",
    about_p1: "Hi! I am a passionate digital creator focused on building reliable and user-centered products. With expertise spanning from <strong>Quality Assurance Engineering</strong> to <strong>UI/UX Design</strong>, I aim to bridge the gap between flawless functionality and beautiful interfaces.",
    about_p2: "My diverse background includes comprehensive software testing, crafting intuitive designs, managing live broadcast operations, and executing creative visual projects. I thrive on combining technical precision with creative vision to deliver impactful digital solutions.",
    lbl_loc: "Location",
    val_loc: "Indramayu, Jawa Barat",
    lbl_email: "Email",
    lbl_status: "Status",
    val_status: "Open to Work",
    about_hire: "Hire Me",
    skills_title: "My Skills",
    skills_sub: "The diverse expertise I have mastered and continue to develop",
    qa_desc: "Ensuring software quality through structured test cases, bug tracking, and a systematic SDLC approach.",
    ui_desc: "Designing intuitive user interfaces using Design Thinking and in-depth user research.",
    web_desc: "Building modern, responsive, and highly performant websites using the latest technologies.",
    graphic_desc: "Creating strong visual identities and stunning creative content.",
    video_desc: "Producing high-quality cinematic video content for various creative needs.",
    lso_desc: "Managing professional live streaming and broadcast event operations smoothly.",
    tag_tc: "Test Case Design",
    tag_bug: "Bug Tracking",
    tag_sdlc: "SDLC",
    tag_test_lvl: "Test Level & Type",
    tag_dt: "Design Thinking",
    tag_wire: "Wireframing",
    tag_proto: "Prototyping",
    tag_broad: "Broadcast Tech",
    tag_broad_live: "Broadcasting",
    tag_live_evt: "Live Event",
    tag_media_mgt: "Media Management",
    tag_leader: "Leadership",
    tag_team_lead: "Team Lead",
    tag_app_ar: "App Dev · AR",
    exp_title: "Experience",
    exp_sub: "The professional and organizational journey that shaped my career",
    role_qa_intern: "Quality Assurance Intern",
    comp_pt: "PT Pupuk Sriwidjaja",
    role_broad_tech: "Broadcast Technician",
    comp_humas: "Humas Fasilkom UNSRI",
    role_deputi: "Deputi Dinas Kominfo",
    comp_bem: "BEM Fasilkom UNSRI",
    role_pic_lso: "PIC LSO Techporia",
    role_staff_multi: "Staff Multimedia",
    exp1_date: "Jun 25 – Aug 25",
    exp1_desc: "Responsible for ensuring products/systems meet quality standards before release. Created structured test cases and identified critical bugs.",
    exp2_date: "Feb 25 – Feb 26",
    exp2_desc: "Acted as Live Streaming Operator for official broadcasts at the Faculty of Computer Science, Sriwijaya University.",
    exp3_date: "Nov 25",
    exp3_desc: "Served as Broadcast Technician at the ICAITECH 2025 international event, ensuring smooth technical broadcasts.",
    exp4_date: "Feb 24 – Dec 24",
    exp4_desc: "Led the media and information division, devised digital content strategies, and produced various creative media.",
    exp5_date: "Sep 23 – Oct 23",
    exp5_desc: "Appointed as the Person In Charge of Live Streaming Operations for a national-level competition event.",
    exp6_date: "Feb 23 – Dec 23",
    exp6_desc: "Responsible for multimedia content production, graphic design, and after-movie videos for student activities.",
    port_title: "Portfolio",
    port_sub: "A collection of my best projects and scientific publications",
    f_all: "All",
    f_web: "Website",
    f_app: "App Dev",
    f_video: "Video",
    f_graphic: "Graphic",
    f_lso: "Live Streaming",
    f_pub: "Publications",
    port1_title: "Website PM Fried Chicken",
    port1_desc: "Product Catalog and Online Ordering System for PM Fried Chicken",
    btn_view_project: "View Project",
    port2_title: "LalaPedia — EduSawit AR",
    port2_desc: "Implementation of Augmented Reality for Eco-Friendly Palm Oil Education (Published in Teknika Journal)",
    btn_view_pub: "View Publication",
    port3_title: "Ekspor Fasilkom AR",
    port3_desc: "Introduction to the Faculty of Computer Science UNSRI based on Augmented Reality using Vuforia",
    btn_detail: "Project Detail",
    port4_title: "Profil Ormawa Fasilkom",
    port4_desc: "Official profile video of the Student Organizations at the Faculty of Computer Science",
    btn_watch: "Watch Video",
    port5_title: "After Movie PKKMB 2023",
    port5_desc: "After Movie Video of the 2023 New Student Orientation",
    port6_title: "Rebranding PM Fried Chicken",
    port6_desc: "New Logo Design and Visual Concept Redesign for PM Fried Chicken Outlets",
    port7_title: "LSO Techporia 2023–2024",
    port7_desc: "Live Streaming Operator for Technology Euphoria (Techporia) Event 2023–2024",
    btn_watch_live: "Watch Live",
    port8_title: "LSO Yudisium Fasilkom",
    port8_desc: "Live Streaming Operator for Graduation Event Batch 74–75",
    tag_pub: "Publication",
    pub_teknika: "Jurnal Teknika",
    pub_jati: "JATI Journal",
    lbl_journal: "Journal",
    port9_title: "EduSawit: AR untuk Edukasi Tanaman Sawit",
    port9_title_short: "EduSawit — Augmented Reality",
    port9_desc: "Implementation of Augmented Reality in Eco-Friendly Palm Oil Education — Teknika, Nov 2025",
    btn_read_journal: "Read Journal",
    port10_title: "UI/UX Aplikasi \"PAYO\" Pemandu Wisata",
    port10_title_short: "UI/UX App PAYO Palembang",
    port10_desc: "UI/UX Design of Palembang Tour Guide App using Design Thinking — JATI, May 2025",
    port11_title: "Clustering Kualitas Hidup Indonesia",
    port11_title_short: "Clustering Kualitas Hidup",
    port11_desc: "Comparison of K-Means, K-Medoid, and DBSCAN for Clustering Life Quality in Indonesia — JATI, May 2025",
    contact_title: "Contact Me",
    contact_sub: "Have an interesting project? Let's collaborate together",
    contact_info_title: "Contact Information",
    lbl_phone: "Phone",
    lbl_web: "Website",
    find_me: "Find me on",
    form_name: "Full Name",
    ph_name: "Your Name",
    form_email: "Email",
    ph_email: "email@domain.com",
    form_subj: "Subject",
    ph_subj: "Message topic",
    form_msg: "Message",
    ph_msg: "Write your message here...",
    form_submit: "Send Message",
    form_ok: "Message sent! I will contact you soon.",
    ft_brand_desc: "Digital creator dedicated to crafting meaningful and impactful digital experiences.",
    ft_nav_title: "Navigation",
    ft_soc_title: "Social Media",
    ft_copy: "Made with <i class=\"fas fa-heart\"></i> in Palembang"
  },
  id: {
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_exp: "Pengalaman",
    nav_port: "Portofolio",
    nav_contact: "Kontak",
    hero_avail: "Terbuka untuk Proyek & Kolaborasi",
    hero_greeting: "Halo, saya",
    name_first: "Muhammad",
    name_last: "Ramadhan Putra Pratama",
    name_last_2: "Putra Pratama",
    hero_role_prefix: "Seorang ",
    role_qa: "QA Engineer",
    role_ui: "Desainer UI/UX",
    role_web: "Pengembang Web",
    role_graphic: "Desainer Grafis",
    role_video: "Video Editor",
    role_lso: "Operator Live Streaming",
    hero_bio: "Kreator digital yang berdedikasi membangun produk berkualitas tinggi — mulai dari <strong>Quality Assurance Engineering</strong> hingga <strong>UI/UX Design</strong> yang berpusat pada pengguna dan memberikan dampak nyata.",
    hero_cta_port: "Lihat Portofolio",
    hero_cta_contact: "Hubungi Saya",
    stat_projects: "Proyek Selesai",
    stat_skills: "Bidang Keahlian",
    stat_exp: "Tahun Pengalaman",
    scroll: "Gulir",
    chip_qa: "QA",
    chip_design: "Desain",
    chip_video: "Video",
    about_title: "Tentang Saya",
    about_sub: "Mengenal lebih dekat sosok di balik karya-karya digital ini",
    about_badge: "Tahun<br>Pengalaman",
    about_tag: "Digital Creator & QA Engineer",
    about_p1: "Hai! Saya adalah kreator digital yang berfokus membangun produk yang andal dan berpusat pada pengguna. Dengan keahlian yang mencakup <strong>Quality Assurance Engineering</strong> hingga <strong>UI/UX Design</strong>, saya menjembatani fungsi tanpa cela dengan antarmuka yang indah.",
    about_p2: "Latar belakang saya meliputi pengujian perangkat lunak, perancangan desain intuitif, pengelolaan siaran langsung, hingga eksekusi proyek visual kreatif. Saya senang menggabungkan presisi teknis dengan visi kreatif untuk menghasilkan solusi digital yang berdampak.",
    lbl_loc: "Lokasi",
    val_loc: "Indramayu, Jawa Barat",
    lbl_email: "Email",
    lbl_status: "Status",
    val_status: "Terbuka untuk Bekerja",
    about_hire: "Rekrut Saya",
    skills_title: "Keahlian Saya",
    skills_sub: "Beragam bidang yang saya kuasai dan terus kembangkan",
    qa_desc: "Memastikan kualitas perangkat lunak melalui test case terstruktur, pelacakan bug, dan siklus SDLC yang sistematis.",
    ui_desc: "Merancang antarmuka pengguna yang intuitif dengan metode Design Thinking dan riset pengguna mendalam.",
    web_desc: "Membangun situs web modern, responsif, dan berkinerja tinggi menggunakan teknologi terkini.",
    graphic_desc: "Menciptakan identitas visual yang kuat dan konten kreatif yang memukau.",
    video_desc: "Memproduksi konten video sinematik berkualitas tinggi untuk berbagai kebutuhan kreatif.",
    lso_desc: "Mengelola operasional siaran langsung dan penyiaran acara secara profesional dan lancar.",
    tag_tc: "Desain Test Case",
    tag_bug: "Pelacakan Bug",
    tag_sdlc: "SDLC",
    tag_test_lvl: "Level & Tipe Tes",
    tag_dt: "Design Thinking",
    tag_wire: "Wireframing",
    tag_proto: "Prototyping",
    tag_broad: "Teknik Siaran",
    tag_broad_live: "Penyiaran",
    tag_live_evt: "Acara Langsung",
    tag_media_mgt: "Manajemen Media",
    tag_leader: "Kepemimpinan",
    tag_team_lead: "Ketua Tim",
    tag_app_ar: "Pengembangan Aplikasi · AR",
    exp_title: "Pengalaman",
    exp_sub: "Perjalanan profesional dan organisasi yang telah membentuk karir saya",
    role_qa_intern: "Quality Assurance Intern",
    comp_pt: "PT Pupuk Sriwidjaja",
    role_broad_tech: "Teknisi Siaran",
    comp_humas: "Humas Fasilkom UNSRI",
    role_deputi: "Deputi Dinas Kominfo",
    comp_bem: "BEM Fasilkom UNSRI",
    role_pic_lso: "PIC LSO Techporia",
    role_staff_multi: "Staf Multimedia",
    exp1_date: "Jun 25 – Agt 25",
    exp1_desc: "Bertanggung jawab memastikan produk/sistem memenuhi standar kualitas sebelum dirilis ke pengguna. Membuat test cases dan mengidentifikasi bug kritis.",
    exp2_date: "Feb 25 – Feb 26",
    exp2_desc: "Bertanggung jawab sebagai Live Streaming Operator untuk kebutuhan penyiaran acara resmi Fasilkom Universitas Sriwijaya.",
    exp3_date: "Nov 25",
    exp3_desc: "Bertugas sebagai Teknisi Siaran pada acara internasional ICAITECH 2025, memastikan kelancaran teknis siaran selama acara.",
    exp4_date: "Feb 24 – Des 24",
    exp4_desc: "Memimpin divisi media dan informasi, merancang strategi konten digital, dan memproduksi berbagai media kreatif BEM Fasilkom.",
    exp5_date: "Sep 23 – Okt 23",
    exp5_desc: "Terpilih sebagai PIC Operasional Siaran Langsung pada ajang kompetisi tingkat nasional Technology Euphoria 2023.",
    exp6_date: "Feb 23 – Des 23",
    exp6_desc: "Bertanggung jawab atas produksi konten multimedia, desain grafis, dan video after-movie untuk kegiatan mahasiswa.",
    port_title: "Portofolio",
    port_sub: "Koleksi proyek terbaik dan publikasi ilmiah yang pernah saya kerjakan",
    f_all: "Semua",
    f_web: "Website",
    f_app: "Aplikasi",
    f_video: "Video",
    f_graphic: "Grafis",
    f_lso: "Live Streaming",
    f_pub: "Publikasi",
    port1_title: "Website PM Fried Chicken",
    port1_desc: "Katalog Produk dan Sistem Pemesanan Online untuk PM Fried Chicken",
    btn_view_project: "Lihat Proyek",
    port2_title: "LalaPedia — EduSawit AR",
    port2_desc: "Implementasi Augmented Reality untuk Edukasi Tanaman Sawit Ramah Lingkungan (Terbit di Jurnal Teknika)",
    btn_view_pub: "Lihat Publikasi",
    port3_title: "Ekspor Fasilkom AR",
    port3_desc: "Pengenalan Fakultas Ilmu Komputer UNSRI berbasis Augmented Reality menggunakan Vuforia",
    btn_detail: "Detail Proyek",
    port4_title: "Profil Ormawa Fasilkom",
    port4_desc: "Video profil resmi Organisasi Mahasiswa di Fakultas Ilmu Komputer UNSRI",
    btn_watch: "Tonton Video",
    port5_title: "After Movie PKKMB 2023",
    port5_desc: "Video After Movie dari Orientasi Mahasiswa Baru (PKKMB) Fasilkom 2023",
    port6_title: "Rebranding PM Fried Chicken",
    port6_desc: "Desain Logo baru dan Desain Ulang Konsep Visual Outlet PM Fried Chicken",
    port7_title: "LSO Techporia 2023–2024",
    port7_desc: "Operator Siaran Langsung untuk Acara Technology Euphoria (Techporia) 2023–2024",
    btn_watch_live: "Tonton Live",
    port8_title: "LSO Yudisium Fasilkom",
    port8_desc: "Operator Siaran Langsung untuk Acara Wisuda/Yudisium Fasilkom Angkatan 74–75",
    tag_pub: "Publikasi",
    pub_teknika: "Jurnal Teknika",
    pub_jati: "Jurnal JATI",
    lbl_journal: "Jurnal",
    port9_title: "EduSawit: AR untuk Edukasi Tanaman Sawit",
    port9_title_short: "EduSawit — Augmented Reality",
    port9_desc: "Implementasi Augmented Reality dalam Edukasi Tanaman Sawit Ramah Lingkungan — Teknika, Nov 2025",
    btn_read_journal: "Baca Jurnal",
    port10_title: "UI/UX Aplikasi \"PAYO\" Pemandu Wisata",
    port10_title_short: "UI/UX App PAYO Palembang",
    port10_desc: "Perancangan UI/UX Aplikasi Pemandu Wisata Palembang dengan Metode Design Thinking — JATI, Mei 2025",
    port11_title: "Clustering Kualitas Hidup Indonesia",
    port11_title_short: "Clustering Kualitas Hidup",
    port11_desc: "Perbandingan K-Means, K-Medoid, dan DBSCAN untuk Clustering Kualitas Hidup Indonesia — JATI, Mei 2025",
    contact_title: "Hubungi Saya",
    contact_sub: "Punya proyek menarik? Mari berkolaborasi bersama",
    contact_info_title: "Informasi Kontak",
    lbl_phone: "Telepon",
    lbl_web: "Situs Web",
    find_me: "Temukan saya di",
    form_name: "Nama Lengkap",
    ph_name: "Nama Anda",
    form_email: "Email",
    ph_email: "email@domain.com",
    form_subj: "Subjek",
    ph_subj: "Topik pesan",
    form_msg: "Pesan",
    ph_msg: "Tulis pesan Anda di sini...",
    form_submit: "Kirim Pesan",
    form_ok: "Pesan terkirim! Saya akan segera menghubungi Anda.",
    ft_brand_desc: "Kreator digital yang bersemangat menciptakan pengalaman digital yang bermakna dan berdampak.",
    ft_nav_title: "Navigasi",
    ft_soc_title: "Media Sosial",
    ft_copy: "Dibuat dengan <i class=\"fas fa-heart\"></i> di Indramayu"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_skills: "المهارات",
    nav_exp: "الخبرات",
    nav_port: "الأعمال",
    nav_contact: "اتصل بي",
    hero_avail: "متاح للمشاريع والتعاون",
    hero_greeting: "مرحباً، أنا",
    name_first: "محمد",
    name_last: "رمضان بوترا براتاما",
    name_last_2: "بوترا براتاما",
    hero_role_prefix: " ",
    role_qa: "مهندس ضمان الجودة",
    role_ui: "مصمم واجهة المستخدم",
    role_web: "مطور ويب",
    role_graphic: "مصمم جرافيك",
    role_video: "محرر فيديو",
    role_lso: "مشغل بث مباشر",
    hero_bio: "صانع محتوى رقمي شغوف مكرس لبناء منتجات رقمية عالية الجودة - من <strong>ضمان الجودة</strong> إلى <strong>تصميم واجهة المستخدم</strong> المرتكز على المستخدم والذي يحدث تأثيرًا حقيقيًا.",
    hero_cta_port: "عرض الأعمال",
    hero_cta_contact: "اتصل بي",
    stat_projects: "مشاريع مكتملة",
    stat_skills: "مهارات أساسية",
    stat_exp: "سنوات خبرة",
    scroll: "تمرير",
    chip_qa: "جودة",
    chip_design: "تصميم",
    chip_video: "فيديو",
    about_title: "نبذة عني",
    about_sub: "تعرف أكثر على الشخص الذي يقف خلف هذه الإبداعات",
    about_badge: "سنوات<br>من الخبرة",
    about_tag: "مبدع رقمي ومهندس جودة",
    about_p1: "أهلاً! أنا مبدع رقمي أركز على بناء منتجات موثوقة ومتمحورة حول المستخدم. من خلال خبرتي التي تمتد من <strong>ضمان الجودة</strong> إلى <strong>تصميم واجهة المستخدم (UI/UX)</strong>، أهدف إلى سد الفجوة بين الوظائف الخالية من العيوب والواجهات الجميلة.",
    about_p2: "تشمل خلفيتي المتنوعة اختبار البرمجيات الشامل، وتصميم واجهات بديهية، وإدارة عمليات البث المباشر، وتنفيذ مشاريع بصرية إبداعية. أزدهر من خلال الجمع بين الدقة الفنية والرؤية الإبداعية لتقديم حلول رقمية مؤثرة.",
    lbl_loc: "الموقع",
    val_loc: "فلمبان، إندونيسيا",
    lbl_email: "البريد",
    lbl_status: "الحالة",
    val_status: "متاح للعمل",
    about_hire: "وظفني",
    skills_title: "مهاراتي",
    skills_sub: "الخبرات المتنوعة التي أتقنتها وأستمر في تطويرها",
    qa_desc: "ضمان جودة البرمجيات من خلال حالات الاختبار المنظمة، وتتبع الأخطاء، ومنهجية دورة حياة تطوير البرمجيات.",
    ui_desc: "تصميم واجهات مستخدم بديهية باستخدام التفكير التصميمي وأبحاث المستخدمين المتعمقة.",
    web_desc: "بناء مواقع ويب حديثة ومتجاوبة وعالية الأداء باستخدام أحدث التقنيات.",
    graphic_desc: "إنشاء هويات بصرية قوية ومحتوى إبداعي مذهل.",
    video_desc: "إنتاج محتوى فيديو سينمائي عالي الجودة لمختلف الاحتياجات الإبداعية.",
    lso_desc: "إدارة عمليات البث المباشر وبث الأحداث بشكل احترافي وسلس.",
    tag_tc: "تصميم حالات الاختبار",
    tag_bug: "تتبع الأخطاء",
    tag_sdlc: "دورة حياة البرمجيات",
    tag_test_lvl: "مستويات الاختبار",
    tag_dt: "التفكير التصميمي",
    tag_wire: "تصميم الهيكل التخطيطي",
    tag_proto: "النماذج الأولية",
    tag_broad: "تقنية البث",
    tag_broad_live: "البث الإذاعي",
    tag_live_evt: "الأحداث المباشرة",
    tag_media_mgt: "إدارة الإعلام",
    tag_leader: "القيادة",
    tag_team_lead: "قائد الفريق",
    tag_app_ar: "تطوير تطبيقات · واقع معزز",
    exp_title: "الخبرات",
    exp_sub: "الرحلة المهنية والتنظيمية التي شكلت مسيرتي",
    role_qa_intern: "متدرب ضمان الجودة",
    comp_pt: "شركة بوبوك سريويدجايا",
    role_broad_tech: "فني بث",
    comp_humas: "علاقات عامة كلية علوم الحاسب",
    role_deputi: "نائب قسم الإعلام",
    comp_bem: "اتحاد طلاب كلية علوم الحاسب",
    role_pic_lso: "مسؤول البث المباشر",
    role_staff_multi: "موظف وسائط متعددة",
    exp1_date: "يونيو ٢٥ – أغسطس ٢٥",
    exp1_desc: "مسؤول عن ضمان تلبية المنتجات/الأنظمة لمعايير الجودة قبل إصدارها. قمت بإنشاء حالات اختبار وتحديد الأخطاء الحرجة.",
    exp2_date: "فبراير ٢٥ – فبراير ٢٦",
    exp2_desc: "عملت كمشغل بث مباشر للبث الرسمي في كلية علوم الحاسب، جامعة سريويجايا.",
    exp3_date: "نوفمبر ٢٥",
    exp3_desc: "عملت كفني بث في الحدث الدولي ICAITECH 2025، لضمان سلاسة البث التقني.",
    exp4_date: "فبراير ٢٤ – ديسمبر ٢٤",
    exp4_desc: "قمت بقيادة قسم الإعلام والمعلومات، ووضعت استراتيجيات المحتوى الرقمي، وأنتجت وسائط إبداعية مختلفة.",
    exp5_date: "سبتمبر ٢٣ – أكتوبر ٢٣",
    exp5_desc: "تم تعييني كمسؤول عن عمليات البث المباشر لحدث منافسة على المستوى الوطني.",
    exp6_date: "فبراير ٢٣ – ديسمبر ٢٣",
    exp6_desc: "مسؤول عن إنتاج محتوى الوسائط المتعددة، وتصميم الجرافيك، ومقاطع الفيديو للأحداث الطلابية.",
    port_title: "الأعمال",
    port_sub: "مجموعة من أفضل مشاريعي ومنشوراتي العلمية",
    f_all: "الكل",
    f_web: "مواقع",
    f_app: "تطبيقات",
    f_video: "فيديو",
    f_graphic: "جرافيك",
    f_lso: "بث مباشر",
    f_pub: "منشورات",
    port1_title: "موقع مطعم بي إم فرايد تشيكن",
    port1_desc: "كتالوج المنتجات ونظام الطلب عبر الإنترنت لمطعم بي إم فرايد تشيكن",
    btn_view_project: "عرض المشروع",
    port2_title: "لالابيديا — واقع معزز إديوساويت",
    port2_desc: "تنفيذ الواقع المعزز لتعليم زيت النخيل الصديق للبيئة (نُشر في مجلة تكنيكا)",
    btn_view_pub: "عرض المنشور",
    port3_title: "إكسبور فاسيليكوم واقع معزز",
    port3_desc: "مقدمة لكلية علوم الحاسب باستخدام الواقع المعزز Vuforia",
    btn_detail: "تفاصيل المشروع",
    port4_title: "فيديو المنظمات الطلابية",
    port4_desc: "فيديو الملف الشخصي الرسمي للمنظمات الطلابية في كلية علوم الحاسب",
    btn_watch: "شاهد الفيديو",
    port5_title: "فيديو ملخص التوجيه ٢٠٢٣",
    port5_desc: "فيديو ملخص لتوجيه الطلاب الجدد لعام ٢٠٢٣",
    port6_title: "تغيير العلامة التجارية لمطعم بي إم",
    port6_desc: "تصميم شعار جديد ومفهوم بصري لمنافذ بي إم فرايد تشيكن",
    port7_title: "مشغل بث حدث يوفوريا ٢٠٢٣-٢٠٢٤",
    port7_desc: "مشغل بث مباشر لحدث يوفوريا التكنولوجيا ٢٠٢٣-٢٠٢٤",
    btn_watch_live: "شاهد البث",
    port8_title: "مشغل بث حدث التخرج",
    port8_desc: "مشغل بث مباشر لحدث التخرج دفعة ٧٤-٧٥",
    tag_pub: "منشور علمي",
    pub_teknika: "مجلة تكنيكا",
    pub_jati: "مجلة جاتي",
    lbl_journal: "مجلة",
    port9_title: "إديوساويت: واقع معزز لتعليم زيت النخيل",
    port9_title_short: "إديوساويت — واقع معزز",
    port9_desc: "تنفيذ الواقع المعزز في تعليم زيت النخيل الصديق للبيئة — تكنيكا، نوفمبر ٢٠٢٥",
    btn_read_journal: "اقرأ المجلة",
    port10_title: "تطبيق باليمبانج السياحي UI/UX",
    port10_title_short: "تطبيق باليمبانج UI/UX",
    port10_desc: "تصميم واجهة المستخدم لتطبيق دليل باليمبانج السياحي باستخدام التفكير التصميمي — مايو ٢٠٢٥",
    port11_title: "تجميع جودة الحياة في إندونيسيا",
    port11_title_short: "تجميع جودة الحياة",
    port11_desc: "مقارنة K-Means و K-Medoid و DBSCAN لتجميع جودة الحياة في إندونيسيا — مايو ٢٠٢٥",
    contact_title: "اتصل بي",
    contact_sub: "هل لديك مشروع مثير للاهتمام؟ دعنا نتعاون معاً",
    contact_info_title: "معلومات الاتصال",
    lbl_phone: "الهاتف",
    lbl_web: "موقع الكتروني",
    find_me: "تجدني على",
    form_name: "الاسم الكامل",
    ph_name: "اسمك",
    form_email: "البريد",
    ph_email: "email@domain.com",
    form_subj: "الموضوع",
    ph_subj: "موضوع الرسالة",
    form_msg: "الرسالة",
    ph_msg: "اكتب رسالتك هنا...",
    form_submit: "إرسال الرسالة",
    form_ok: "تم إرسال الرسالة! سأتصل بك قريباً.",
    ft_brand_desc: "مبدع رقمي مكرس لصياغة تجارب رقمية هادفة ومؤثرة.",
    ft_nav_title: "تنقل",
    ft_soc_title: "وسائل التواصل",
    ft_copy: "صُنع بـ <i class=\"fas fa-heart\"></i> في فلمبان"
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────
  // 1. LANGUAGE TOGGLE (100% i18n, no RTL layout mirror)
  // ─────────────────────────────────────
  const html = document.documentElement;
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const currentLangLabel = document.getElementById('currentLang');
  const langOptions = document.querySelectorAll('.lang-option');

  let currentLang = localStorage.getItem('pm-lang') || 'en';
  setLanguage(currentLang);

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove('show');
    }
  });

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const selected = opt.getAttribute('data-lang');
      setLanguage(selected);
      langDropdown.classList.remove('show');
    });
  });

  function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('pm-lang', lang);
    html.setAttribute('lang', lang);
    
    // NOTE: Removed dir="rtl" to keep layout identically LTR for all languages
    // as per user request to not flip the layout.
    html.setAttribute('dir', 'ltr'); 
    currentLangLabel.textContent = lang.toUpperCase();

    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });
  }

  // ─────────────────────────────────────
  // 2. THEME TOGGLE
  // ─────────────────────────────────────
  const tBtn   = document.getElementById('themeToggle');
  const tIcon  = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('pm-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  applyThemeIcon(savedTheme);

  tBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pm-theme', next);
    applyThemeIcon(next);
  });

  function applyThemeIcon(t) {
    tIcon.className  = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    tBtn.title       = t === 'dark' ? 'Mode Terang' : 'Mode Gelap';
  }

  // ─────────────────────────────────────
  // 3. ROLE SWITCHER — 1 at a time
  // ─────────────────────────────────────
  const roleItems = document.querySelectorAll('.role-item');
  let roleIdx     = 0;

  function showRole(i) {
    roleItems.forEach(el => el.classList.remove('active', 'exit'));
    roleItems[i].classList.add('active');
  }

  function nextRole() {
    roleItems[roleIdx].classList.add('exit');
    roleItems[roleIdx].classList.remove('active');

    setTimeout(() => {
      roleIdx = (roleIdx + 1) % roleItems.length;
      showRole(roleIdx);
    }, 420);
  }

  if (roleItems.length > 0) {
    showRole(0);
    setInterval(nextRole, 2600);
  }

  // ─────────────────────────────────────
  // 4. PARTICLE CANVAS (Calm Indigo/Cyan theme)
  // ─────────────────────────────────────
  const canvas = document.getElementById('particleCanvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const DOT_COUNT = 85;
  const dots = Array.from({ length: DOT_COUNT }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    r:  Math.random() * 1.6 + 0.3,
    vx: (Math.random() - 0.5) * 0.25, // slower movement for calm effect
    vy: (Math.random() - 0.5) * 0.25, // slower movement for calm effect
    o:  Math.random() * 0.3 + 0.05,
  }));

  function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const dark = html.getAttribute('data-theme') === 'dark';
    
    // Updated particle colors to match calm Indigo / Cyan
    const rgb = dark ? '6,182,212' : '6,182,212'; 

    dots.forEach(d => {
      d.x += d.vx;  d.y += d.vy;
      if (d.x < 0) d.x = canvas.width;
      if (d.x > canvas.width)  d.x = 0;
      if (d.y < 0) d.y = canvas.height;
      if (d.y > canvas.height) d.y = 0;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${d.o})`;
      ctx.fill();
    });

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 115) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(${rgb},${0.05 * (1 - d / 115)})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawDots);
  }
  drawDots();

  // ─────────────────────────────────────
  // 5. CURSOR GLOW
  // ─────────────────────────────────────
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });

  // ─────────────────────────────────────
  // 6. STICKY HEADER + ACTIVE NAV
  // ─────────────────────────────────────
  const header   = document.getElementById('mainHeader');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);

    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 95) cur = s.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });

  // ─────────────────────────────────────
  // 7. HAMBURGER MENU
  // ─────────────────────────────────────
  const ham  = document.getElementById('hamburgerBtn');
  const nav  = document.getElementById('navLinks');

  ham.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navItems.forEach(a => a.addEventListener('click', closeMenu));
  function closeMenu() {
    nav.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }

  // ─────────────────────────────────────
  // 8. SMOOTH SCROLL
  // ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        });
      }
    });
  });

  // ─────────────────────────────────────
  // 9. PORTFOLIO FILTER
  // ─────────────────────────────────────
  const filterBtns = document.querySelectorAll('.fb');
  const cards      = document.querySelectorAll('.pc');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const f = this.getAttribute('data-filter');
      cards.forEach(c => {
        const match = f === 'all' || c.getAttribute('data-category') === f;
        if (match) {
          c.classList.remove('hidden');
          c.style.animation = 'cardIn .4s ease forwards';
        } else {
          c.classList.add('hidden');
        }
      });
    });
  });

  // ─────────────────────────────────────
  // 10. SCROLL REVEAL (data-aos)
  // ─────────────────────────────────────
  const aosEls = document.querySelectorAll('[data-aos]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  aosEls.forEach(el => io.observe(el));

  // ─────────────────────────────────────
  // 11. HERO STAT COUNTER
  // ─────────────────────────────────────
  const statNums = document.querySelectorAll('.hs-num[data-target]');
  let counted = false;
  const statsWrap = document.querySelector('.hero-stats');

  if (statsWrap) {
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        statNums.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          let n = 0;
          const step = target / 38;
          const iv = setInterval(() => {
            n += step;
            if (n >= target) { el.textContent = target + '+'; clearInterval(iv); }
            else               el.textContent = Math.floor(n)  + '+';
          }, 38);
        });
      }
    }).observe(statsWrap);
  }

  // ─────────────────────────────────────
  // 12. CONTACT FORM
  // ─────────────────────────────────────
  const form    = document.getElementById('contactForm');
  const formOK  = document.getElementById('ctOk');
  const cSubmit = document.getElementById('cSubmit');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name  = document.getElementById('cName').value.trim();
      const email = document.getElementById('cMail').value.trim();
      const msg   = document.getElementById('cMsg').value.trim();

      if (!name || !email || !msg) { showFormErr(currentLang === 'id' ? 'Mohon lengkapi semua field.' : currentLang === 'ar' ? 'الرجاء ملء جميع الحقول.' : 'Please fill all fields.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showFormErr(currentLang === 'id' ? 'Email tidak valid.' : currentLang === 'ar' ? 'البريد الإلكتروني غير صالح.' : 'Invalid email.'); return; }

      cSubmit.classList.add('loading');
      cSubmit.disabled = true;

      setTimeout(() => {
        cSubmit.classList.remove('loading');
        cSubmit.disabled = false;
        formOK.classList.add('show');
        form.reset();
        setTimeout(() => formOK.classList.remove('show'), 5000);
      }, 1800);
    });
  }

  function showFormErr(msg) {
    const old = form.querySelector('.form-err');
    if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'form-err';
    el.style.cssText =
      'display:flex;align-items:center;gap:8px;margin-top:12px;padding:11px 15px;' +
      'background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.22);' +
      'border-radius:10px;color:#f87171;font-size:.84rem;font-weight:500;';
    el.innerHTML = `<i class="fas fa-exclamation-circle"></i>${msg}`;
    cSubmit.parentNode.insertBefore(el, cSubmit);
    setTimeout(() => el.remove(), 4000);
  }

  // ─────────────────────────────────────
  // 13. BACK TO TOP
  // ─────────────────────────────────────
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});

// keyframe for portfolio filter
const s = document.createElement('style');
s.textContent = '@keyframes cardIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}';
document.head.appendChild(s);



