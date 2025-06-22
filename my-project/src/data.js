const data = {
    en: {
        headerSection: {
            greeting: "Hi!",
            intro: "I'm Sena. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!",
            profileImg: "profile-image.jpg",
            socials: [
                {
                    logo: "logo-linkedln.png",
                    alt_text: "linkedin",
                    link: "https://www.linkedin.com/in/g%C3%BCl-sena-%C3%B6zseven-418619198/",
                },
                {
                    logo: "logo-github.png",
                    alt_text: "github",
                    link: "https://github.com/sena-ozseven",
                },
            ],
            currentHTML: "Currently <strong>Freelancing</strong> for <strong>UX, UI, and Web Design</strong> projects. </br> Invite me to join your team --> <link mailto={gulozseven@gmail.com}>gulozseven@gmail.com</link>"
        },

        skillsSection: {
            title: "Skills",
            skills: [
                {
                    name: "JAVASCRIPT",
                    icon: "icon-js.png",
                },
                {
                    name: "REACT",
                    icon: "icon-react.png",
                },
                {
                    name: "REDUX",
                    icon: "icon-redux.png",
                },
                {
                    name: "NODE",
                    icon: "icon-node.png",
                },
                {
                    name: "VS CODE",
                    icon: "icon-VS.png",
                },
                {
                    name: "FIGMA",
                    icon: "icon-figma.png",
                },
            ],
        },
        profileSection: {
            title: "Profile",
            basicInfo : {
                title: "Basic Information",
                info: [
                    {label: "Date of Birth", value:"27.01.2001"},
                    {label: "City", value:"Istanbul"},
                    {label: "Education Status", value:"Fresh graduate from Bogazici University, B.A. Philosophy"},
                    {label: "Preffered Roles", value: "Frontend, UI"},
                ],
            },
            aboutMe: {
                title: "About Me",
                description: "people say we're alike </br> they say we got the same hair </br> it's you and me on the coin </br> the industry loves to spend </br> and when we put this to web </br> the internet will go crazy </br> (girl, so confusing)"
            }
        },
        projectSection: {
            title: "Projects",
            magicball : {
                title: "Magic 8 Ball",
                description: "Ask a question and shake! It has magic and GENZ humor... What else can you ask for? - Fortune Teller, i'm telling you",
                apps: ["html", "css", "javaScript"],
                github: ["View on Github", "Go to app -->"],
                img: "bilgisayar.png",
            },
            areubored : {
                title: "Are you Bored?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
                apps: ["react", "redux", "axios", "router", "vercel"],
                github: ["View on Github", "Go to app -->"],
                img: "bilgisayar.png",
            },
        },
        footerSection: {
            sentence: "Let's work together on </br> your next product.",
            links: ["Github", "Personal Blog", "Linkedin", "Email"],
        },
    },
    tr: {
        headerSection: {
            greeting: "Merhaba!",
            intro: "Ben Sena. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünleri geliştirebilirim. Tanışalım!",
            profileImg: "profile-image.jpg",
            socials: [
                {
                    logo: "logo-linkedln.png",
                    alt_text: "linkedin",
                    link: "https://www.linkedin.com/in/g%C3%BCl-sena-%C3%B6zseven-418619198/",
                },
                {
                    logo: "logo-github.png",
                    alt_text: "github",
                    link: "https://github.com/sena-ozseven",
                },
            ],
            currentHTML: "Şu anda <strong>UX, UI ve Web Tasarım</strong> projeleri için <strong>Freelance</strong> çalışıyorum. </br> Ekibine katılmamı ister misin? --> <link mailto={gulozseven@gmail.com}>gulozseven@gmail.com</link>"
        },

        skillsSection: {
            title: "Yetenekler",
            skills: [
                { name: "JAVASCRIPT", icon: "icon-js.png" },
                { name: "REACT", icon: "icon-react.png" },
                { name: "REDUX", icon: "icon-redux.png" },
                { name: "NODE", icon: "icon-node.png" },
                { name: "VS CODE", icon: "icon-VS.png" },
                { name: "FIGMA", icon: "icon-figma.png" },
            ],
        },

        profileSection: {
            title: "Profil",
            basicInfo: {
                title: "Temel Bilgiler",
                info: [
                    { label: "Doğum Tarihi", value: "27.01.2001" },
                    { label: "Şehir", value: "İstanbul" },
                    { label: "Eğitim Durumu", value: "Boğaziçi Üniversitesi, Felsefe Lisans Mezunu" },
                    { label: "Tercih Edilen Roller", value: "Frontend, UI" },
                ],
            },
            aboutMe: {
                title: "Hakkımda",
                description: "insanlar benziyoruz diyor </br> saçımızın aynı olduğunu söylüyorlar </br> parada sen ve ben varız </br> sektör harcamaya bayılır </br> bunu internete dökünce </br> internet çılgına dönecek </br> (kız, çok kafa karıştırıcı)"
            }
        },

        projectSection: {
            title: "Projeler",
            magicball: {
                title: "Sihirli 8 Topu",
                description: "Bir soru sor ve salla! Sihirli ve Z kuşağı mizahı içerir... Daha ne olsun? - Falcı, bildiğin gibi değil",
                apps: ["html", "css", "javaScript"],
                github: ["Github’da Görüntüle", "Uygulamaya Git -->"],
                img: "bilgisayar.png",
            },
            areubored: {
                title: "Sıkıldın mı?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
                apps: ["react", "redux", "axios", "router", "vercel"],
                github: ["Github’da Görüntüle", "Uygulamaya Git -->"],
                img: "bilgisayar.png",
            },
        },

        footerSection: {
            sentence: "Sonraki ürünün için </br> birlikte çalışalım.",
            links: ["Github", "Kişisel Blog", "Linkedin", "E-posta"],
        },
    },


}