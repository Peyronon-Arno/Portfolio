import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "fr",
    resources: {
      fr: {
        translation: {
          KEY_FULL_NAME: "Peyronon Arno",
          KEY_HOME: "Accueil",
          KEY_ABOUT: "À propos",
          KEY_EXPERIENCES: "Experiences",
          KEY_PROJECTS: "Projets",
          KEY_CONTACT: "Contact",
          KEY_YOU_CAN_CONTACT_ME: "Vous pouvez me contacter",
          KEY_MY_NAME_IS_FULL_NAME: "Je m'appelle Arno Peyronon",
          KEY_MY_PROJECTS: "Mes projets",
          KEY_CONTACT_ME: "Contactez moi",
          KEY_ABOUT_ME: "À propos de moi",
          KEY_KNOW_MORE: "En savoir plus",
          KEY_SEE_MY_PROJECTS: "Voir mes projets",
          KEY_SEE_IN_DETAIL: "Voir en détails",
          KEY_HOME_INTRO:
            "Je suis etudiant en licence professionnelle Métiers de l'Informatique, Application Web à l'IUT de Clermont-Ferrand (UCA)",
          KEY_ABOUT_INTRO:
            "Je suis etudiant en licence professionnelle Métiers de l'Informatique, Application Web à l'IUT de Clermont-Ferrand (UCA)",
          KEY_ABOUT_ME_P1:
            "Durant mes études, j'ai concrétisé des projets allant de la création d'une Intelligence Artificielle à la réalisation de site web",
          KEY_ABOUT_ME_P2:
            "Étant curieux et investi de nature, je suis un étudiant souhaitant explorer de nombreux domaines dans l'informatique en général",
          KEY_ABOUT_ME_P3:
            "En dehors de mes études, je développe une application mobile qui devra être disponible sur Android et IOS pour un chorégraphe professionnel",
          KEY_ABOUT_ME_P4:
            "Je développe également un site vitrine pour une photographe professionnelle en utilisant les technologies simples du web",
          KEY_ABOUT_ME_P5:
            "À la fin de ma licence professionnelle, je souhaite m'orienter vers un Master Informatique Web à l'université de Lyon 1",
          KEY_PASSIONATE:
            "Passionné d'informatique depuis mon enfance, je m'intéresse à différents domaines divers et variés",
          KEY_ABOUT_HISTORY_P1:
            "Je suis passionné par l'informatique depuis mon plus jeune âge. Cette passion s'est révélée lors de ma première console (Nintendo DS). Je souhaitais déjà connaître le fonctionnement des jeux, pourquoi certaines actions étaient impossibles... Par la suite, j'ai effectué mon stage de troisième dans une entreprise de maintenance informatique, Velay Micro Informatique à Yssingeaux. J'ai poursuivi mes études dans l'informatique en étant en STI2D avec l'option Spécialité Systèmes d'Information et Numérique (SIN)",
          KEY_ABOUT_HISTORY_P2:
            "Je souhaite être le plus polyvalent possible malgré mon profond intérêts pour les technologies web. Je suis un étudiant curieux de nature et autodidacte qui souhaite apprendre chaque jour. De plus, m'aventurer dans des domaines qui me sont encore inconnus ressemble à un challenge.",
          KEY_ABOUT_HISTORY_P3:
            "La licence que je suis actuellement en train d'effectuer est pour moi l'opportunité d'apprendre le fonctionnement du monde du travail. Par la suite, je souhaiterais envisager un Master Informatique Web à Lyon. Après ces années d'études, je souhaite entrer dans le monde professionnel afin de mettre à disposition les connaissances acquises lors de mon parcours scolaire et en apprendre davantage sur les technologies du web.",
          KEY_HERE: "ici",
          KEY_SOCIAL_NETWORKS: "Réseaux sociaux",
          KEY_CHECK_CV: "Consultez mon CV",
          KEY_LINK_CV: "Lien de mon CV",
          KEY_ABOUT_HOBY_TITLE:
            "Lors de mon temps libre, je m'intéresse à d'autres domaines autre que l'informatique",
          KEY_ABOUT_HOBY_ITEM_TITLE_1: "L'immobilier",
          KEY_ABOUT_HOBY_ITEM_TITLE_2: "La dance hip-hop",
          KEY_ABOUT_HOBY_ITEM_TITLE_3: "La musculation",
          KEY_ABOUT_HOBY_ITEM_DESC_1:
            "L'investissement immobilier est un domaine qui m'intrigue tout particulièrement. Je l'ai découvert suite à une discussion avec une enseignante lors de ma deuxième année de DUT Informatique à Clermont-Ferrand. Cette dernière a réussi à me découvrir une nouvelle passion. Depuis cette découverte, un projet personnel s'ajoute, celui d'acheter mon premier appartement.",
          KEY_ABOUT_HOBY_ITEM_DESC_2:
            "Le hip-hop a été pour moi le sport qui m'a construit et qui m'a aidé à être cette personne rigoureuse et ambitieuse que je suis. Ayant pratiqué 11 ans de hip-hop dont 5 ans de break-dance, un style consistant à effectuer des acrobaties, je suis un grand passionné de ce domaine. J'ai également appris à avoir des responsabilités en ayant donné cours et en ayant assisté un chorégraphe professionnel. C'est selon moi une expérience inoubliable et qui devrait se renouveler sous peu. De plus, j'ai eu l'occasion d'intégrer une équipe de break-dance afin de participer à divers battles (concours) notamment à Clermont-Ferrand ou encore à Brives-Charensac (aux alentours du Puy-en-Velay)",
          KEY_ABOUT_HOBY_ITEM_DESC_3:
            "La musculation est le sport qui a suivi le hip-hop. Ayant été contraint de devoir arrêter la danse suite à mon déplacement à Clermont-Ferrand pour les études, j'ai décidé de me maintenir en forme en pratiquant la musculation 5/6h par semaine. Cela relève d'une grande discipline et d'une rigueur concernant les entrainements et les repas.",

          KEY_MY_EXPERIENCES: "Mes éxperiences",
          KEY_EXPERIENCES_INTRO:
            "Voic mes compétences, mes qualités ainsi que des expériences profesionnelles que j'ai pu réaliser",
          KEY_MY_QUALITIES: "Mes qualités",
          KEY_EXPERIENCES_CURIOUS: "Curieux",
          KEY_EXPERIENCES_PONCTUAL: "Ponctuel",
          KEY_EXPERIENCES_RIGOROUS: "Rigoureux",
          KEY_EXPERIENCES_TEAM_WORK: "Travail en équipe",
          KEY_EXPERIENCES_AUTONOMOUS: "Autonome",
          KEY_EXPERIENCES_PATIENT: "Patient",
          KEY_EXPERIENCES_PRO_TITLE: "Mes expériences professionnelles",
          KEY_JUNE_2022: "Juin 2022",
          KEY_NOW: "Présent",
          KEY_EXPERIENCES_PRO_TITLE1:
            "Développeur logiciel de suivi de production (Alternance)",
          KEY_JUNE_2021: "Juin 2021",
          KEY_AUGUST_2021: "Aout 2021",
          KEY_EXPERIENCES_PRO_TITLE2:
            "Conducteur de ligne dans une entreprise de plasturgie",
          KEY_JULY_2020: "Juillet 2020",
          KEY_EXPERIENCES_PRO_TITLE3:
            "Animateur dans un centre de loisir (initiation au hip-hop)",
          KEY_JULY_2018: "Juillet 2018",
          KEY_EXPERIENCES_PRO_TITLE4:
            "Animateur / danseur lors d'un stage de hip-hop",

          KEY_MY_FORMATIONS: "Mes formations",
          KEY_FORMATION_TITLE1: "Master expert en développement web",
          KEY_FORMATION_TITLE2:
            "Licence professionnelle Métiers de l'Informatique Application Web",
          KEY_FORMATION_TITLE3: "DUT Informatique",
          KEY_FORMATION_TITLE4: "Baccalauréat STI2D",
          KEY_FORMATION_DESC1: "Formation en alternance",
          KEY_FORMATION_DESC2: "Formation en alternance",
          KEY_FORMATION_DESC3:
            "Découverte d'une multitude de langages de programmation",
          KEY_FORMATION_DESC4:
            "Spécialité Systèmes d'Information et Numérique (SIN)",

          KEY_EXPLAINATION_PROJECT: "Explication des projets",
          KEY_PROJECT_TITLE:
            "Voici quelques projets que j'ai réalisé lors de mon cursus",

          KEY_PROJECT_DESC1:
            "Conception et création d'un site reprenant le concept de Dealabs afin de découvrir le framework Synphony",
          KEY_PROJECT_DESC2:
            "Réalisation d'une application utilisant du React Native. Cette application a pour objectif d'être utilisée pour un parc animalier afin de répertorier l'ensemble des animaux du zoo.",
          KEY_PROJECT_DESC3:
            "Conception et réalisation d'une application mobile reprenant les bases du jeu Minecraft",
          KEY_PROJECT_DESC4:
            "Création d'une Intelligence Artificielle réalisée en équipe de 5 étudiants permettant de classer les objets visibles sur une image en les séparant en trois catégories : Humains / Voiture / Autres",
          KEY_PROJECT_DESC5:
            "Réalisation d'un portfolio dans le cadre de ma licence professionnelle web",
          KEY_PROJECT_EXPLAIN1:
            "Ce projet à été réalisé par équipe de 2. Nous avions pour objectif de reproduire au plus similaire possible le site Dealabs.com en utilisant Synphony et Docker comme environnement. Il nous était donné un cahier des charges à respecter que ce soit styleet fonctionnalité. Des bonus étaient ajoutés et comptabilisés si nous avions terminé et validé les points essentiels",
          KEY_PROJECT_EXPLAIN2:
            "Cette application native à été ralisée en binome. Nous avons utilisé EXPO pour le front-end, Quarkus pour le backend, et MongoDb pour la base de données. Ce fut un environnement complètement nouveau pour moi car je n'avais ni entendu parlé ni utilisé ces technologies. Ce fût un projet très enrichissant.",
          KEY_PROJECT_EXPLAIN3:
            "Ce jeu à été conçu et réalisé en équipe de deux étudiant lors de ma deuxième année de DUT informatique. Le principe était de conceptualiser un projet, de l'organiser et d'utiliser les principes que l'on a vu en cours (SOLID) ou encore les patrons de conceptions. J'ai pu pratiquer l'utilisation de Git ainsi que la gestion de conflits Git lorsque nous manquions parfois de communication. Par la suite, j'ai appris que la communication au sein d'une équipe est très importante",
          KEY_PROJECT_EXPLAIN4:
            "Ce projet fût le projet tutoré de ma deuxième année de DUT informatique. L'objectif était de créer une intelligence artificielle à partir de rien. Il a donc fallu effectuer de nombreuses recherches en autonomie afin de comprendre le fonctionnement algorithmique d'un réseau de neuronnes. De plus, nous avons utilisé Python et JupyterNotebook. Aucun des membres du groupe ne savait utiliser ces dernières techonologies. Ce fût un apprentissage intensif et rigoureux que chacun d'entre nous devions avoir.",
          KEY_PROJECT_EXPLAIN5:
            "Ce projet à été réalisé dans le cadre de la Licence professionnelle Métiers de l'Informatique Application Web. Il était demandé de réaliser un portfolio permettant de se présenter. J'ai décidé de le coder en ReactJs premièrement car cela me semblait un langage tout à fait approprié pour développer un site Portfolio. De plus, c'est un langage que je connaissais pas. Ce fût pour moi une opportunité de découvrir une nouvelle techonologie web. Pour cela, j'ai suivi des tutoriels, regardé des vidéos, seul, en autonomie.",
        },
      },
      en: {
        translation: {
          KEY_FULL_NAME: "Peyronon Arno",
          KEY_HOME: "Home",
          KEY_ABOUT: "About me",
          KEY_EXPERIENCES: "Experiences",
          KEY_PROJECTS: "Projects",
          KEY_CONTACT: "Contact",
          KEY_YOU_CAN_CONTACT_ME: "You can contact me",
          KEY_MY_NAME_IS_FULL_NAME: "My name is Arno Peyronon",
          KEY_MY_PROJECTS: "My projects",
          KEY_CONTACT_ME: "Contact me",
          KEY_ABOUT_ME: "About me",
          KEY_KNOW_MORE: "Know more",
          KEY_SEE_MY_PROJECTS: "See my projects",
          KEY_SEE_IN_DETAIL: "See in details",
          KEY_HOME_INTRO:
            "I am a student in a vocational degree in Computer Science, Web Application at the IUT of Clermont-Ferrand (UCA)",
          KEY_ABOUT_INTRO:
            "I am a student in a vocational degree in Computer Science, Web Application at the IUT of Clermont-Ferrand (UCA)",
          KEY_ABOUT_ME_P1:
            "During my studies, I realized projects ranging from the creation of an Artificial Intelligence to the realization of a website",
          KEY_ABOUT_ME_P2:
            "Being curious and invested by nature, I am a student wishing to explore many fields in computer science in general",
          KEY_ABOUT_ME_P3:
            "Apart from my studies, I am developing a mobile application which will have to be available on Android and IOS for a professional choreographer",
          KEY_ABOUT_ME_P4:
            "I also develop a showcase site for a professional photographer using simple web technologies",
          KEY_ABOUT_ME_P5:
            "At the end of my professional license, I want to move towards a Master's degree in Web computing at the University of Lyon 1",
          KEY_PASSIONATE:
            "Passionate about computers since my childhood, I am interested in different diverse and varied fields",
          KEY_ABOUT_HISTORY_P1:
            "I have been passionate about computers since I was young. This passion was revealed during my first console (Nintendo DS). I already wanted to know how the games worked, why certain actions were impossible... Subsequently, I did my third-year internship in a computer maintenance company, Velay Micro Informatique in Yssingeaux. I continued my studies in computer science by being in STI2D with the Information and Digital Systems Specialty option (SIN)",
          KEY_ABOUT_HISTORY_P2:
            "I want to be as versatile as possible despite my deep interest in web technologies. I am a naturally curious and self-taught student who wants to learn every day. Moreover, venturing into areas that are still unknown to me looks like a challenge.",
          KEY_ABOUT_HISTORY_P3:
            "The license that I am currently doing is for me the opportunity to learn how the world of work works. Over there next, I would like to consider a Masters in Web Computing in Lyon. After these years of study, I wish to enter the world professional in order to make available the knowledge acquired during my school career and learn more about the web technology.",
          KEY_HERE: "here",
          KEY_SOCIAL_NETWORKS: "Social networks",
          KEY_CHECK_CV: "Have a look to my CV",
          KEY_LINK_CV: "Link of my CV",

          KEY_ABOUT_HOBY_TITLE:
            "In my spare time, I am interested in other fields other than IT",
          KEY_ABOUT_HOBY_ITEM_TITLE_1: "Real estate",
          KEY_ABOUT_HOBY_ITEM_TITLE_2: "Hip-hop dance",
          KEY_ABOUT_HOBY_ITEM_TITLE_3: "Bodybuilding",
          KEY_ABOUT_HOBY_ITEM_DESC_1:
            "Real estate investing is an area that particularly intrigues me. I discovered it following a discussion with a teacher during my second year of DUT Informatique in Clermont-Ferrand. The latter succeeded in discovering a new passion for me. Since this discovery, a personal project is added, that of buying my first apartment.",
          KEY_ABOUT_HOBY_ITEM_DESC_2:
            "Hip-hop was for me the sport that built me and helped me to be this rigorous and ambitious person that I am. Having practiced 11 years of hip-hop including 5 years of break-dancing, a style consisting of performing acrobatics, I am a great enthusiast of this field. I also learned to have responsibilities by having given lessons and having assisted a professional choreographer. It is, in my opinion, an unforgettable experience which should be repeated soon. In addition, I had the opportunity to join a break-dance team in order to participate in various battles (competitions) in particular in Clermont-Ferrand or in Brives-Charensac (around Puy-en-Velay)",
          KEY_ABOUT_HOBY_ITEM_DESC_3:
            "Bodybuilding is the sport that followed hip-hop. Having been forced to stop dancing following my trip to Clermont-Ferrand for studies, I decided to keep myself in shape by practicing bodybuilding 5/6 hours a week. This is a matter of great discipline and rigor regarding training and meals.",
          KEY_MY_EXPERIENCES: "My experiences",
          KEY_EXPERIENCES_INTRO:
            "Here are my skills, my qualities as well as professional experiences that I have been able to achieve",
          KEY_MY_QUALITIES: "My qualities",
          KEY_EXPERIENCES_CURIOUS: "Curious",
          KEY_EXPERIENCES_PONCTUAL: "Ponctual",
          KEY_EXPERIENCES_RIGOROUS: "Rigorous",
          KEY_EXPERIENCES_TEAM_WORK: "Team work",
          KEY_EXPERIENCES_AUTONOMOUS: "Autonomous",
          KEY_EXPERIENCES_PATIENT: "Patient",
          KEY_EXPERIENCES_PRO_TITLE: "My professionnals experiences",
          KEY_JUNE_2022: "June 2022",
          KEY_NOW: "Now",
          KEY_EXPERIENCES_PRO_TITLE1:
            "Production monitoring software developer (work-study program)",
          KEY_JUNE_2021: "June 2021",
          KEY_AUGUST_2021: "August 2021",
          KEY_EXPERIENCES_PRO_TITLE2: "Line operator in a plastics company",
          KEY_JULY_2020: "July 2020",
          KEY_EXPERIENCES_PRO_TITLE3:
            "Animator in a leisure center (introduction to hip-hop)",
          KEY_JULY_2018: "July 2018",
          KEY_EXPERIENCES_PRO_TITLE4:
            "Animator / dancer during a hip-hop workshop",
          KEY_MY_FORMATIONS: "My school cursur",
          KEY_FORMATION_TITLE1: "Master's degree in web development",
          KEY_FORMATION_TITLE2:
            "Professional License in Computer Science Web Application",
          KEY_FORMATION_TITLE3: "DUT in Computer Science",
          KEY_FORMATION_TITLE4: "STI2D Baccalaureate",
          KEY_FORMATION_DESC1: "Alternating traininf",
          KEY_FORMATION_DESC2: "Alternating traininf",
          KEY_FORMATION_DESC3:
            "Discovery of a multitude of programming languages",
          KEY_FORMATION_DESC4:
            "Information and Digital Systems Specialty (SIN)",

          KEY_PROJECT_TITLE: "Here are some projects I did during my studies",
          KEY_PROJECT_DESC1:
            "Design and creation of a site using the concept of Dealabs in order to discover the Synphony framework",
          KEY_PROJECT_DESC2:
            "Realization of an application using React Native. This application aims to be used for an animal park to list all the animals in the zoo.",
          KEY_PROJECT_DESC3:
            "Design and production of a mobile application based on the basics of the Minecraft game",
          KEY_PROJECT_DESC4:
            "Creation of an Artificial Intelligence carried out in a team of 5 students allowing to classify the objects visible on an image by separating them into three categories: Humans / Cars / Others",
          KEY_PROJECT_DESC5:
            "Realization of a portfolio as part of my professional web license",
          KEY_PROJECT_EXPLAIN1:
            "This project was carried out by a team of 2. Our objective was to reproduce the Dealabs.com site as similar as possible using Synphony and Docker as an environment. We were given specifications to respect whether it was style or functionality. Bonuses were added and counted if we had completed and validated the essential points",
          KEY_PROJECT_EXPLAIN2:
            "This native application was created in pairs. We used EXPO for the front-end, Quarkus for the backend, and MongoDb for the database. It was a completely new environment for me because I had neither heard of nor used these technologies. It was a very rewarding project.",
          KEY_PROJECT_EXPLAIN3:
            "This game was designed and produced in a team of two students during my second year of computer DUT. The principle was to conceptualize a project, to organize it and to use the principles that we saw in class (SOLID) or the design patterns. I was able to practice using Git as well as managing Git conflicts when we sometimes lacked communication. Subsequently, I learned that communication within a team is very important.",
          KEY_PROJECT_EXPLAIN4:
            "This project was the tutored project of my second year of computer DUT. The goal was to create an artificial intelligence from scratch. It was therefore necessary to carry out a lot of independent research in order to understand the algorithmic functioning of a neural network. Additionally, we used Python and JupyterNotebook. None of the members of the group knew how to use these latest technologies. It was an intensive and rigorous learning that each of us had to have.",
          KEY_PROJECT_EXPLAIN5:
            "This project was carried out within the framework of the Professional Bachelor's Degree in IT Web Application. They were asked to produce a portfolio allowing them to present themselves. I decided to code it in ReactJs first because it seemed to me a very appropriate language for developing a Portfolio site. Moreover, it is a language that I did not know. It was an opportunity for me to discover a new web technology. For this, I followed tutorials, watched videos, alone, independently.",
        },
      },
    },
  });
