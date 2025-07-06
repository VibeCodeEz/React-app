import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      home: {
        title: "Hi, I'm Emanuel Zack Morabe",
        subtitle: 'Computer Engineering Student & Web Developer',
        description: "I'm a passionate Computer Engineering student at EARIST, Manila, specializing in web development. Currently learning React as a beginner, I create beautiful, functional, and user-friendly web applications with modern technologies like HTML5, CSS3, and JavaScript.",
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch',
        downloadCV: 'Download CV'
      },
      navbar: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      },
      about: {
        title: "About Me",
        subtitle: "Get to know me better",
        whoIAm: "Who I Am",
        intro1: "I'm Emanuel Zack Morabe, a passionate Computer Engineering student at EARIST, Manila, expected to graduate in 2026. I specialize in web development and system maintenance, combining technical skills with creative problem-solving.",
        intro2: "With a strong foundation in HTML5, CSS3, JavaScript, Python, and C++, I create modern, responsive web applications that deliver exceptional user experiences. I'm currently learning React as a beginner and excited to expand my frontend development skills. My NCII certification in Computer Systems Servicing demonstrates my commitment to both hardware and software excellence.",
        intro3: "I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
        expectedGrad: "Expected Graduation",
        certification: "Computer Systems Servicing",
        projectsCompleted: "Projects Completed",
        skillsTitle: "Skills & Technologies",
        expTitle: "Education & Experience",
        exp1Title: "Computer Engineering Student",
        exp1Company: "EARIST, Manila",
        exp1Desc: "Currently pursuing Computer Engineering degree with focus on web development and system design.",
        exp2Title: "Web Developer",
        exp2Company: "Freelance",
        exp2Desc: "Developed responsive websites and web applications using modern technologies like HTML5, CSS3, and JavaScript.",
        exp3Title: "System Maintenance Specialist",
        exp3Company: "NCII Certified",
        exp3Desc: "Certified in Computer Systems Servicing (TESDA) with expertise in hardware and software maintenance."
      },
      projects: {
        title: "My Projects",
        subtitle: "Here are some of the projects I've worked on",
        all: "All Projects",
        frontend: "Frontend",
        fullstack: "Full Stack",
        featured: "Featured",
        code: "Code",
        liveDemo: "Live Demo",
        noProjects: "No projects found for the selected category.",
        weatherDesc: "Interactive weather application using OpenWeatherMap API with real-time weather data, location search, and responsive design.",
        calcDesc: "Advanced calculator with dual themes and scientific operations including trigonometric functions, logarithms, and memory functions.",
        portfolioDesc: "Professional portfolio website built while learning React as a beginner. Features modern design, smooth animations, and responsive layout.",
        movieflixDesc: "Modern movie search application built with React and TypeScript, featuring OMDB API integration for comprehensive movie data, search functionality, and responsive design."
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Let's work together on your next project",
        connect: "Let's Connect",
        connectDesc: "I'm always interested in new opportunities and exciting projects. Whether you have a question about my work or just want to say hi, feel free to reach out!",
        email: "Email",
        location: "Location",
        education: "Education",
        downloadCVTitle: "Download My CV",
        downloadCVDesc: "Get a detailed overview of my skills, experience, and qualifications",
        downloadCVBtn: "Download CV (PDF)",
        followMe: "Follow Me",
        sendMessage: "Send Message",
        formAriaLabel: "Contact form to send a message",
        name: "Name",
        namePlaceholder: "Your name",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "What's this about?",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Thank you for your message! I'll get back to you soon. An auto-reply has been sent to your email.",
        error: "Sorry, there was an error sending your message. Please try again later."
      },
      // ...add more translations as needed
    }
  },
  fil: {
    translation: {
      home: {
        title: "Kumusta, ako si Emanuel Zack Morabe",
        subtitle: 'Mag-aaral ng Computer Engineering at Web Developer',
        description: "Ako ay masigasig na mag-aaral ng Computer Engineering sa EARIST, Manila, na nag-eespesyalisa sa web development. Kasalukuyang nag-aaral ng React bilang baguhan, lumilikha ako ng magaganda, functional, at user-friendly na web applications gamit ang makabagong teknolohiya tulad ng HTML5, CSS3, at JavaScript.",
        viewWork: 'Tingnan ang Aking Gawa',
        getInTouch: 'Makipag-ugnayan',
        downloadCV: 'I-download ang CV'
      },
      navbar: {
        home: 'Bahay',
        about: 'Tungkol',
        projects: 'Mga Proyekto',
        contact: 'Kontak'
      },
      about: {
        title: "Tungkol sa Akin",
        subtitle: "Kilalanin mo ako ng mas mabuti",
        whoIAm: "Sino Ako",
        intro1: "Ako si Emanuel Zack Morabe, masigasig na mag-aaral ng Computer Engineering sa EARIST, Manila, na magtatapos sa 2026. Dalubhasa ako sa web development at system maintenance, pinagsasama ang teknikal na kasanayan at malikhaing paglutas ng problema.",
        intro2: "May matibay akong pundasyon sa HTML5, CSS3, JavaScript, Python, at C++. Gumagawa ako ng makabago at responsive na web applications para sa mahusay na karanasan ng user. Baguhan pa lang ako sa React at sabik matuto pa. Ang aking NCII certification sa Computer Systems Servicing ay patunay ng aking dedikasyon sa hardware at software.",
        intro3: "Naniniwala ako sa pagsusulat ng malinis at madaling i-maintain na code at sa pagiging updated sa mga bagong teknolohiya. Kapag hindi ako nagko-code, mahilig akong mag-explore ng bagong tech o tumulong sa open-source projects.",
        expectedGrad: "Inaasahang Pagtatapos",
        certification: "Computer Systems Servicing",
        projectsCompleted: "Mga Natapos na Proyekto",
        skillsTitle: "Mga Kasanayan at Teknolohiya",
        expTitle: "Edukasyon at Karanasan",
        exp1Title: "Mag-aaral ng Computer Engineering",
        exp1Company: "EARIST, Manila",
        exp1Desc: "Kasalukuyang kumukuha ng Computer Engineering na may pokus sa web development at system design.",
        exp2Title: "Web Developer",
        exp2Company: "Freelance",
        exp2Desc: "Gumawa ng mga responsive na website at web app gamit ang modernong teknolohiya tulad ng HTML5, CSS3, at JavaScript.",
        exp3Title: "System Maintenance Specialist",
        exp3Company: "NCII Certified",
        exp3Desc: "Certified sa Computer Systems Servicing (TESDA) na may kasanayan sa hardware at software maintenance."
      },
      projects: {
        title: "Aking Mga Proyekto",
        subtitle: "Narito ang ilan sa mga proyektong nagawa ko",
        all: "Lahat ng Proyekto",
        frontend: "Frontend",
        fullstack: "Full Stack",
        featured: "Tampok",
        code: "Code",
        liveDemo: "Live Demo",
        noProjects: "Walang nahanap na proyekto para sa napiling kategorya.",
        weatherDesc: "Interactive na weather app gamit ang OpenWeatherMap API na may real-time na datos, paghahanap ng lokasyon, at responsive na disenyo.",
        calcDesc: "Advanced na calculator na may dual themes at scientific operations tulad ng trigonometric functions, logarithms, at memory functions.",
        portfolioDesc: "Propesyonal na portfolio website na ginawa habang nag-aaral ng React bilang baguhan. May modernong disenyo, smooth animations, at responsive layout.",
        movieflixDesc: "Modernong movie search application na ginawa gamit ang React at TypeScript, may OMDB API integration para sa comprehensive movie data, search functionality, at responsive design."
      },
      contact: {
        title: "Makipag-ugnayan",
        subtitle: "Magtrabaho tayo sa iyong susunod na proyekto",
        connect: "Tara, Mag-Connect Tayo",
        connectDesc: "Laging bukas ako sa mga bagong oportunidad at proyekto. Kung may tanong ka tungkol sa aking trabaho o gusto mo lang bumati, huwag mag-atubiling mag-message!",
        email: "Email",
        location: "Lokasyon",
        education: "Edukasyon",
        downloadCVTitle: "I-download ang Aking CV",
        downloadCVDesc: "Makakuha ng detalyadong buod ng aking kasanayan, karanasan, at kwalipikasyon",
        downloadCVBtn: "I-download ang CV (PDF)",
        followMe: "I-follow Ako",
        sendMessage: "Magpadala ng Mensahe",
        formAriaLabel: "Contact form para magpadala ng mensahe",
        name: "Pangalan",
        namePlaceholder: "Iyong pangalan",
        emailPlaceholder: "iyong.email@halimbawa.com",
        subject: "Paksa",
        subjectPlaceholder: "Tungkol saan ito?",
        message: "Mensahe",
        messagePlaceholder: "Ikuwento mo ang iyong proyekto...",
        send: "Ipadala ang Mensahe",
        sending: "Ipinapadala...",
        success: "Salamat sa iyong mensahe! Magrereply ako agad. May auto-reply na ipinadala sa iyong email.",
        error: "Paumanhin, nagkaroon ng error sa pagpapadala ng iyong mensahe. Pakisubukan muli mamaya."
      },
      // ...add more translations as needed
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n 