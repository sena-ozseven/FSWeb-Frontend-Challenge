const data = {
    en: {
        headerSection: {
            greeting: "I am a Frontend Developer...",
            intro: "...who likes to craft solid and scalable frontend products with great user experiences.",
        },

        skillsSection: {
            title: "Skills",
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
            title: "Send me a message!",
            sentence: "Let's work together on </br> your next product.",
            links: ["Github", "Personal Blog", "Linkedin", "Email"],
        },
    },
    tr: {
        headerSection: {
            greeting: "Frontend geliştiriciyim...",
            intro: "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir frontend ürünleri üretmeyi seven.",        
        },

        skillsSection: {
            title: "Yetenekler",
            
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
                description: "insanlar benziyoruz diyor saçımızın aynı olduğunu söylüyorlar parada sen ve ben varız sektör harcamaya bayılır bunu internete dökünce internet çılgına dönecek (kız, çok kafa karıştırıcı)"
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
            title: "Bana mesaj gönder!",
            sentence: "Sonraki ürünün için </br> birlikte çalışalım.",
            links: ["Github", "Kişisel Blog", "Linkedin", "E-posta"],
        },
    },


}


export default data;