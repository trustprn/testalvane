export const content = {
    en: {
        nav: {
            home: "Home",
            services: "Services",
            portfolio: "Portfolio",
            blog: "Blog",
            contact: "Contact",
            getStarted: "Get Started",
        },
        meta: {
            home: {
                title: "Alvane Agency | Premium Digital Marketing & Web Development",
                description: "Elevate your digital potential with Alvane. We specialize in On-Page SEO, Technical SEO, and high-performance Web Development.",
                ogTitle: "Alvane Agency - Elevate Your Digital Potential",
                ogDescription: "Premium digital marketing & web development agency. We build high-performance web experiences that convert.",
                ogImage: "/images/og-home.jpg",
                canonical: "/en",
                keywords: ["Digital Marketing Agency", "Web Development", "SEO Expert", "Next.js Developer"]
            },
            services: {
                title: "Digital Marketing & Web Development Services | Alvane",
                description: "Comprehensive digital solutions including SEO Optimization, Web Development, and Content Strategy.",
                ogTitle: "Our Services - Alvane Agency",
                ogDescription: "Comprehensive solutions for your digital business growth.",
                ogImage: "/images/og-services.jpg",
                canonical: "/en/services",
                keywords: ["SEO Services", "Web Development Services", "Content Strategy", "Digital Marketing"]
            },
            portfolio: {
                title: "Web Design & SEO Portfolio | Alvane Agency",
                description: "Explore our selected projects and case studies. See how we help businesses grow.",
                ogTitle: "Our Work - Alvane Agency",
                ogDescription: "Explore our selected projects and case studies.",
                ogImage: "/images/og-portfolio.jpg",
                canonical: "/en/portfolio",
                keywords: ["Web Design Portfolio", "SEO Case Studies", "Success Stories"]
            },
            blog: {
                title: "SEO & Tech Insights | Alvane Agency",
                description: "Expert thoughts on SEO, technology, and digital growth. Stay ahead with our latest articles.",
                ogTitle: "Insights & Blog - Alvane Agency",
                ogDescription: "latest insights on SEO and web technology.",
                ogImage: "/images/og-blog.jpg",
                canonical: "/en/blog",
                keywords: ["SEO Blog", "Tech Insights", "Digital Growth"]
            },
            blogDetail: {
                // Placeholder for dynamic slugs, usually overridden
                title: "Blog Post | Alvane Agency",
                description: "Read our latest article.",
                ogTitle: "Blog Post - Alvane Agency",
                ogDescription: "Read our latest article.",
                ogImage: "/images/og-blog-detail.jpg",
                canonical: "/en/blog",
                keywords: ["Article", "Insights"]
            },
            contact: {
                title: "Contact Top Rated Agency | Alvane",
                description: "Ready to start your project? Get in touch with our expert team today.",
                ogTitle: "Contact Us - Alvane Agency",
                ogDescription: "Ready to start your project? We are here to make it happen.",
                ogImage: "/images/og-contact.jpg",
                canonical: "/en/contact",
                keywords: ["Contact Agency", "Hire Developers", "SEO Consultation"]
            },
        },
        home: {
            badge: "Available for New Projects",
            heroTitle: "Alvane Agency | Top Rated SEO & Web Development",
            heroDesc: "Premium digital marketing & web development agency. We build high-performance web experiences that convert.",
            ctaPrimary: "Start Project",
            ctaSecondary: "View Services",
            features: {
                seo: { title: "On-Page SEO", desc: "Advanced content optimization strategies to dominate search rankings." },
                tech: { title: "Technical SEO", desc: "Flawless website architecture and performance for Google's crawlers." },
                perf: { title: "High Performance", desc: "Blazing fast web applications powered by Next.js and modern stack." },
            },
            ctaSection: {
                title: "Ready to scale your business?",
                desc: "Consult your digital needs with our expert team today and stay ahead of the competition.",
                button: "Contact Us",
            }
        },
        services: {
            title: "Digital Marketing & Web Development Services",
            subtitle: "Comprehensive solutions for your digital business growth.",
            cards: [
                {
                    title: "SEO Optimization",
                    desc: "We help your website dominate Google search results with data-driven strategies.",
                    price: "Starts at $500",
                    features: ["Technical SEO Audit", "Keyword Research", "On-Page Optimization", "Backlink Strategy"]
                },
                {
                    title: "Web Development",
                    desc: "Modern, fast, and responsive websites built with the latest technology stack.",
                    price: "Starts at $1,000",
                    features: ["Next.js & React", "Headless CMS", "High Performance", "Mobile First Design"]
                },
                {
                    title: "Content Strategy",
                    desc: "Quality content that engages your audience and drives meaningful conversions.",
                    price: "Starts at $300",
                    features: ["Blog Writing", "Copywriting", "Social Media Plan", "Email Marketing"]
                }
            ],
            process: {
                title: "Our Workflow",
                steps: [
                    { title: "Discovery", desc: "We analyze your business, goals, and target audience to craft a tailored strategy." },
                    { title: "Execution", desc: "Our team implements the strategy with precision using best-in-class tools." },
                    { title: "Launch", desc: "We deploy, monitor, and optimize to ensure maximum impact and ROI." }
                ]
            },
            cta: "Choose Plan"
        },
        portfolio: {
            title: "Web Design & SEO Portfolio",
            subtitle: "Showcase of our recent digital craftsmen ship.",
            back: "Back",
            viewAll: "View All Projects",
            projects: [
                {
                    slug: "e-commerce-rebrand",
                    title: "E-Commerce Rebrand",
                    category: "Web Development",
                    image: "/images/project1.jpg",
                    client: "Fashion Nova",
                    timeline: "3 Months",
                    description: "A complete overhaul of a legacy e-commerce platform to improve performance and user experience.",
                    challenge: "The old site was slow, not mobile-responsive, and had a complex checkout process that led to high cart abandonment.",
                    solution: "We rebuilt the store using Next.js and Shopify Headless, implemented a streamlined checkout, and optimized for core web vitals.",
                    technologies: ["Next.js", "Shopify", "Tailwind CSS", "Framer Motion"],
                    result: "50% increase in mobile conversions and 40% faster load times."
                },
                {
                    slug: "fintech-app-ui",
                    title: "Fintech App UI",
                    category: "UI/UX Design",
                    image: "/images/project2.jpg",
                    client: "PayEasy",
                    timeline: "2 Months",
                    description: "Designing a clean, trustworthy, and accessible interface for a new mobile banking application.",
                    challenge: "Users found competitor apps cluttered and confusing. The goal was to simplify complex financial data.",
                    solution: "We created a minimalist design system with clear data visualization and intuitive navigation flows.",
                    technologies: ["Figma", "Protopie", "Design Systems"],
                    result: "User testing showed a 90% completion rate for core tasks."
                },
                {
                    slug: "saas-dashboard",
                    title: "SaaS Dashboard",
                    category: "Product Design",
                    image: "/images/project3.jpg",
                    client: "Analytics Pro",
                    timeline: "4 Months",
                    description: "Creating a comprehensive analytics dashboard for enterprise users to track their KPIs.",
                    challenge: "Displaying massive amounts of data without overwhelming the user.",
                    solution: "We implemented customizable widgets and a drill-down architecture to progressive disclosure of information.",
                    technologies: ["React", "D3.js", "Material UI"],
                    result: "Adopted by 5 major enterprise clients within the first month."
                },
                {
                    slug: "travel-agency-seo",
                    title: "Travel Agency SEO",
                    category: "Marketing",
                    image: "/images/project4.jpg",
                    client: "Wanderlust Co",
                    timeline: "6 Months",
                    description: "An aggressive SEO campaign to capture high-intent keywords in the competitive travel niche.",
                    challenge: "The website had zero organic visibility and was practically invisible in search results.",
                    solution: "We conducted a technical audit, optimized site structure, and executed a content marketing strategy.",
                    technologies: ["SEMrush", "Google Search Console", "Content Strategy"],
                    result: "300% increase in organic traffic and 1st page ranking for primary keywords."
                }
            ]
        },
        chooseUs: {
            title: "Why Choose Alvane",
            subtitle: "We don't just build websites; we build digital assets that drive real business growth.",
            items: [
                {
                    title: "Data-Driven Approach",
                    description: "Every decision we make is backed by analytics and user behavior data, ensuring measurable results."
                },
                {
                    title: "Premium Aesthetics",
                    description: "We combine modern design trends with usability principles to create stunning, memorable experiences."
                },
                {
                    title: "Technical Excellence",
                    description: "Built on the latest tech stack (Next.js, React) for speed, security, and scalability."
                },
                {
                    title: "Transparent ROI",
                    description: "No hidden metrics. We focus on what matters: conversions, traffic, and your bottom line."
                }
            ]
        },
        testimonials: {
            title: "Client Stories",
            subtitle: "What our partners say about working with us.",
            items: [
                {
                    quote: "Alvane transformed our digital presence completely. The new site is faster, looks amazing, and converts better.",
                    author: "Sarah Johnson",
                    role: "CMO, TechFlow"
                },
                {
                    quote: "Their SEO strategy doubled our organic traffic in just 3 months. Highly recommended for any serious business.",
                    author: "Michael Chen",
                    role: "Founder, StartUp Inc"
                },
                {
                    quote: "Professional, creative, and technical experts. They delivered exactly what we needed, on time.",
                    author: "Amanda Williams",
                    role: "Director, Creative Co"
                }
            ]
        },
        blog: {
            title: "Latest Insights",
            subtitle: "Expert thoughts on SEO, technology, and digital growth.",
            readMore: "Read Article",
            back: "Back to Blog",
            postedOn: "Posted on",
            placeholderBody: "This is placeholder content. Actual articles will be managed via Sanity CMS."
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Ready to start your project? We are here to make it happen.",
            labels: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                message: "Message",
                send: "Send Message",
                office: "Office"
            },
            placeholders: {
                name: "John",
                email: "john@example.com",
                message: "Tell us about your project..."
            }
        },
        footer: {
            rights: "Alvane Agency. All rights reserved.",
            links: ["Privacy", "Terms", "Twitter", "Instagram"]
        }
    },
    id: {
        nav: {
            home: "Beranda",
            services: "Layanan",
            portfolio: "Portfolio",
            blog: "Blog",
            contact: "Kontak",
            getStarted: "Mulai Sekarang",
        },
        meta: {
            home: {
                title: "Alvane Agency | Digital Marketing & Web Development Premium",
                description: "Tingkatkan potensi digital Anda bersama Alvane. Spesialis SEO On-Page, SEO Teknis, dan Web Development berkinerja tinggi.",
                ogTitle: "Alvane Agency - Tingkatkan Potensi Digital Anda",
                ogDescription: "Agensi pemasaran digital & pengembangan web premium. Kami membangun pengalaman web berkinerja tinggi.",
                ogImage: "/images/og-home.jpg",
                canonical: "/id",
                keywords: ["Agensi Pemasaran Digital", "Pengembangan Web", "Pakar SEO", "Developer Next.js"]
            },
            services: {
                title: "Layanan Pemasaran Digital & Web Development | Alvane",
                description: "Solusi digital komprehensif termasuk Optimasi SEO, Pengembangan Web, dan Strategi Konten.",
                ogTitle: "Layanan Kami - Alvane Agency",
                ogDescription: "Solusi komprehensif untuk pertumbuhan bisnis digital Anda.",
                ogImage: "/images/og-services.jpg",
                canonical: "/id/services",
                keywords: ["Layanan SEO", "Jasa Web Development", "Strategi Konten", "Pemasaran Digital"]
            },
            portfolio: {
                title: "Portfolio Web Design & SEO | Alvane Agency",
                description: "Jelajahi proyek pilihan dan studi kasus kami. Lihat bagaimana kami membantu bisnis berkembang.",
                ogTitle: "Karya Kami - Alvane Agency",
                ogDescription: "Jelajahi proyek pilihan dan studi kasus kami.",
                ogImage: "/images/og-portfolio.jpg",
                canonical: "/id/portfolio",
                keywords: ["Portfolio Web Design", "Studi Kasus SEO", "Kisah Sukses"]
            },
            blog: {
                title: "Wawasan SEO & Teknologi | Alvane Agency",
                description: "Pemikiran ahli seputar SEO, teknologi, dan pertumbuhan digital. Terdepan dengan artikel terbaru kami.",
                ogTitle: "Wawasan & Blog - Alvane Agency",
                ogDescription: "Wawasan terbaru seputar SEO dan teknologi web.",
                ogImage: "/images/og-blog.jpg",
                canonical: "/id/blog",
                keywords: ["Blog SEO", "Wawasan Teknologi", "Pertumbuhan Digital"]
            },
            blogDetail: {
                title: "Artikel Blog | Alvane Agency",
                description: "Baca artikel terbaru kami.",
                ogTitle: "Artikel Blog - Alvane Agency",
                ogDescription: "Baca artikel terbaru kami.",
                ogImage: "/images/og-blog-detail.jpg",
                canonical: "/id/blog",
                keywords: ["Artikel", "Wawasan"]
            },
            contact: {
                title: "Hubungi Agensi Terbaik | Alvane Agency",
                description: "Siap memulai proyek Anda? Hubungi tim ahli kami hari ini.",
                ogTitle: "Hubungi Kami - Alvane Agency",
                ogDescription: "Siap memulai proyek Anda? Kami siap membantu mewujudkannya.",
                ogImage: "/images/og-contact.jpg",
                canonical: "/id/contact",
                keywords: ["Hubungi Agensi", "Sewa Developer", "Konsultasi SEO"]
            },
        },
        home: {
            badge: "Tersedia untuk Proyek Baru",
            heroTitle: "Alvane Agency | Jasa SEO & Web Development Terbaik",
            heroDesc: "Agensi pemasaran digital & pengembangan web premium. Kami membangun pengalaman web berkinerja tinggi yang menghasilkan konversi.",
            ctaPrimary: "Mulai Sekarang",
            ctaSecondary: "Lihat Layanan",
            features: {
                seo: { title: "SEO On-Page", desc: "Strategi optimasi konten tingkat lanjut untuk mendominasi peringkat pencarian." },
                tech: { title: "SEO Teknis", desc: "Arsitektur website dan performa tanpa cela untuk crawler Google." },
                perf: { title: "Performa Tinggi", desc: "Aplikasi web super cepat yang ditenagai oleh Next.js dan teknologi modern." },
            },
            ctaSection: {
                title: "Siap mengembangkan bisnis Anda?",
                desc: "Konsultasikan kebutuhan digital Anda dengan tim ahli kami dan jadilah yang terdepan.",
                button: "Hubungi Kami",
            }
        },
        services: {
            title: "Layanan Pemasaran Digital & Web Development",
            subtitle: "Solusi komprehensif untuk pertumbuhan bisnis digital Anda.",
            cards: [
                {
                    title: "Optimasi SEO",
                    desc: "Kami membantu website Anda mendominasi hasil pencarian Google dengan strategi berbasis data.",
                    price: "Mulai dari Rp 5jt",
                    features: ["Audit SEO Teknis", "Riset Kata Kunci", "Optimasi On-Page", "Strategi Backlink"]
                },
                {
                    title: "Web Development",
                    desc: "Website modern, cepat, dan responsif yang dibangun dengan teknologi terkini.",
                    price: "Mulai dari Rp 10jt",
                    features: ["Next.js & React", "Headless CMS", "Performa Tinggi", "Desain Mobile First"]
                },
                {
                    title: "Strategi Konten",
                    desc: "Konten berkualitas yang menarik audiens Anda dan mendorong konversi yang berarti.",
                    price: "Mulai dari Rp 3jt",
                    features: ["Penulisan Blog", "Copywriting", "Rencana Media Sosial", "Email Marketing"]
                }
            ],
            process: {
                title: "Alur Kerja Kami",
                steps: [
                    { title: "Discovery", desc: "Kami menganalisis bisnis, tujuan, dan target audiens Anda untuk menyusun strategi yang tepat." },
                    { title: "Eksekusi", desc: "Tim kami mengimplementasikan strategi dengan presisi menggunakan alat terbaik di kelasnya." },
                    { title: "Peluncuran", desc: "Kami menerapkan, memantau, dan mengoptimalkan untuk memastikan dampak dan ROI maksimal." }
                ]
            },
            cta: "Pilih Paket"
        },
        portfolio: {
            title: "Portfolio Web Design & SEO",
            subtitle: "Pameran karya digital dan keahlian kami.",
            back: "Kembali",
            viewAll: "Lihat Semua Proyek",
            projects: [
                {
                    slug: "e-commerce-rebrand",
                    title: "Rebranding E-Commerce",
                    category: "Pengembangan Web",
                    image: "/images/project1.jpg",
                    client: "Fashion Nova",
                    timeline: "3 Bulan",
                    description: "Pembaruan menyeluruh platform e-commerce lawas untuk meningkatkan performa dan pengalaman pengguna.",
                    challenge: "Situs lama lambat, tidak responsif di seluler, dan memiliki proses checkout yang rumit sehingga tingkat pengabaian keranjang tinggi.",
                    solution: "Kami membangun ulang toko menggunakan Next.js dan Shopify Headless, menerapkan checkout yang efisien, dan mengoptimalkan core web vitals.",
                    technologies: ["Next.js", "Shopify", "Tailwind CSS", "Framer Motion"],
                    result: "Peningkatan 50% konversi seluler dan waktu muat 40% lebih cepat."
                },
                {
                    slug: "fintech-app-ui",
                    title: "UI Aplikasi Fintech",
                    category: "Desain UI/UX",
                    image: "/images/project2.jpg",
                    client: "PayEasy",
                    timeline: "2 Bulan",
                    description: "Merancang antarmuka yang bersih, terpercaya, dan mudah diakses untuk aplikasi perbankan seluler baru.",
                    challenge: "Pengguna merasa aplikasi kompetitor berantakan dan membingungkan. Tujuannya adalah menyederhanakan data keuangan yang kompleks.",
                    solution: "Kami membuat sistem desain minimalis dengan visualisasi data yang jelas dan alur navigasi yang intuitif.",
                    technologies: ["Figma", "Protopie", "Design Systems"],
                    result: "Pengujian pengguna menunjukkan tingkat penyelesaian 90% untuk tugas inti."
                },
                {
                    slug: "saas-dashboard",
                    title: "Dashboard SaaS",
                    category: "Desain Produk",
                    image: "/images/project3.jpg",
                    client: "Analytics Pro",
                    timeline: "4 Bulan",
                    description: "Membuat dashboard analitik komprehensif bagi pengguna perusahaan untuk melacak KPI mereka.",
                    challenge: "Menampilkan data dalam jumlah besar tanpa membuat pengguna kewalahan.",
                    solution: "Kami menerapkan widget yang dapat disesuaikan dan arsitektur drill-down untuk pengungkapan informasi secara bertahap.",
                    technologies: ["React", "D3.js", "Material UI"],
                    result: "Diadopsi oleh 5 klien perusahaan besar dalam bulan pertama."
                },
                {
                    slug: "travel-agency-seo",
                    title: "SEO Agensi Travel",
                    category: "Pemasaran",
                    image: "/images/project4.jpg",
                    client: "Wanderlust Co",
                    timeline: "6 Bulan",
                    description: "Kampanye SEO agresif untuk menangkap kata kunci berniat tinggi di ceruk perjalanan yang kompetitif.",
                    challenge: "Website memiliki visibilitas organik nol dan praktis tidak terlihat di hasil pencarian.",
                    solution: "Kami melakukan audit teknis, mengoptimalkan struktur situs, dan mengeksekusi strategi pemasaran konten.",
                    technologies: ["SEMrush", "Google Search Console", "Content Strategy"],
                    result: "Peningkatan 300% lalu lintas organik dan peringkat halaman 1 untuk kata kunci utama."
                }
            ]
        },
        chooseUs: {
            title: "Mengapa Memilih Alvane",
            subtitle: "Kami tidak hanya membuat website; kami membangun aset digital yang mendorong pertumbuhan bisnis nyata.",
            items: [
                {
                    title: "Pendekatan Berbasis Data",
                    description: "Setiap keputusan kami didukung oleh analitik dan data perilaku pengguna, memastikan hasil yang terukur."
                },
                {
                    title: "Estetika Premium",
                    description: "Kami menggabungkan tren desain modern dengan prinsip kegunaan untuk menciptakan pengalaman yang memukau."
                },
                {
                    title: "Keunggulan Teknis",
                    description: "Dibangun di atas teknologi terbaru (Next.js, React) untuk kecepatan, keamanan, dan skalabilitas."
                },
                {
                    title: "ROI Transparan",
                    description: "Tanpa metrik tersembunyi. Kami fokus pada konversi, lalu lintas, dan keuntungan Anda."
                }
            ]
        },
        testimonials: {
            title: "Cerita Klien",
            subtitle: "Apa kata mitra kami tentang bekerja sama dengan kami.",
            items: [
                {
                    quote: "Alvane mengubah kehadiran digital kami sepenuhnya. Situs baru lebih cepat, terlihat luar biasa, dan konversi lebih baik.",
                    author: "Sarah Johnson",
                    role: "CMO, TechFlow"
                },
                {
                    quote: "Strategi SEO mereka menggandakan lalu lintas organik kami hanya dalam 3 bulan. Sangat direkomendasikan.",
                    author: "Michael Chen",
                    role: "Founder, StartUp Inc"
                },
                {
                    quote: "Profesional, kreatif, dan ahli teknis. Mereka memberikan apa yang kami butuhkan, tepat waktu.",
                    author: "Amanda Williams",
                    role: "Direktur, Creative Co"
                }
            ]
        },
        blog: {
            title: "Wawasan Terbaru",
            subtitle: "Pemikiran ahli seputar SEO, teknologi, dan pertumbuhan digital.",
            readMore: "Baca Selengkapnya",
            back: "Kembali ke Blog",
            postedOn: "Diposting pada",
            placeholderBody: "Ini adalah konten placeholder. Artikel aktual akan dikelola melalui Sanity CMS."
        },
        contact: {
            title: "Hubungi Kami",
            subtitle: "Siap memulai proyek Anda? Kami siap membantu mewujudkannya.",
            labels: {
                firstName: "Nama Depan",
                lastName: "Nama Belakang",
                email: "Email",
                message: "Pesan",
                send: "Kirim Pesan",
                office: "Kantor"
            },
            placeholders: {
                name: "Budi",
                email: "budi@contoh.com",
                message: "Ceritakan tentang proyek Anda..."
            }
        },
        footer: {
            rights: "Alvane Agency. Hak cipta dilindungi.",
            links: ["Privasi", "Syarat", "Twitter", "Instagram"]
        }
    },
};

export const getDictionary = (lang: "en" | "id") => {
    return content[lang] || content.en;
};
