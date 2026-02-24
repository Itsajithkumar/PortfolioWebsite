$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Ajithkumar";
            $("#favicon").attr("href", "assets/images/favicon.jpg");
        }
        else {
            document.title = "Portfolio | Ajithkumar";
            $("#favicon").attr("href", "assets/images/favicon.jpg");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [ "🌌 Creating Next-Gen Gameplay",
        "👓 AR / VR Experience Architect",
        "🎮 Unity || Unreal Developer",
        ],
        loop: true,
    smartBackspace: false,  // Makes backspacing smooth & reliable
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,       // Give it a little pause before backspacing
    startDelay: 300,       // Delay before first typing starts (optional)
    showCursor: true,      // Cursor blinking
    cursorChar: "|",       // Customize cursor (optional)
});

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // Tilt effect intentionally disabled per user request.
    // VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
/*VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});*/
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// // Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// // End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });
/* SCROLL Certificate */
srtop.reveal('.Certificate .box', { interval: 200 });
srtop.reveal('.certifications .box', { interval: 200 });
/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


// === PROJECT DATA ===
const projects = {
 "VR Escape Room": {
  title: "VR Escape Room – IDFC Bank Training Simulation",
  platform: "Android (Meta Oculus Quest – Standalone VR)",
  tech: "Unity, C#, XR Interaction Toolkit, REST API, JSON, Web Dashboard",
  desc: `
    Designed and developed a fully standalone VR Escape Room training simulation for IDFC Bank, aimed at enhancing employees’ critical thinking, decision-making, and collaborative problem-solving skills in an immersive virtual environment.<br><br>

    Created multi-room escape scenarios featuring interactive puzzles, logic-based challenges, and time-bound quizzes that require users to explore, analyze clues, and coordinate actions to progress through each level.<br><br>

    Implemented realistic VR interactions using Unity’s XR Interaction Toolkit, including object grabbing, placement, inspection, and trigger-based events, ensuring intuitive and natural hand-based interaction within the VR space.<br><br>

    Built a comprehensive performance tracking system that records detailed user analytics such as total session time, number of retries, per-question correct and incorrect responses, time spent in each room, and unique employee identification data.<br><br>

    Integrated secure REST API communication to transmit recorded user performance data in JSON format to a remote backend server for centralized storage, reporting, and analysis.<br><br>

    Enabled real-time visualization of training data through a web-based admin dashboard, allowing trainers and administrators to monitor user progress, identify learning gaps, and measure training effectiveness across multiple participants.<br><br>

    Optimized the application for Oculus Quest standalone performance, focusing on smooth frame rates, efficient memory usage, and reliable XR interaction responsiveness to ensure a seamless and immersive training experience.
  `
},

  "Rocket Launch & Space Experience": {
  title: "Rocket Launch & Space Experience – Thinkmate",
  platform: "Android (Meta Oculus Quest – Standalone VR)",
  tech: "Unity, C#, XR Interaction Toolkit, Animation System, Android VR Optimization",
  desc: `
    Designed and developed an immersive standalone VR space exploration experience that simulates a complete rocket launch sequence, satellite deployment, and orbital views of Earth for educational and experiential learning purposes.<br><br>

    Implemented a step-by-step rocket launch flow, including countdown initiation, stage separation, engine ignition, and orbital insertion, providing users with a realistic sense of scale, motion, and spaceflight progression.<br><br>

    Built interactive VR controls using Unity’s XR Interaction Toolkit, allowing users to engage with cockpit elements, spacecraft controls, and satellite modules through natural hand-based interactions.<br><br>

    Created high-quality animated sequences for rocket stages, satellite release mechanisms, and solar panel unfolding, enhancing realism and visual storytelling within the VR environment.<br><br>

    Developed a fully explorable virtual space station environment featuring interactive modules, floating movement, and a dynamic Earth orbital view, reinforcing immersion and spatial awareness in zero-gravity conditions.<br><br>

    Optimized the entire experience for Android-based Oculus Quest headsets by reducing draw calls, optimizing textures and lighting, and maintaining stable frame rates to ensure smooth performance in standalone VR.
  `
},

 "Dental Instrument Preparation": {
  title: "Dental Instrument Preparation VR – EasyDent",
  platform: "Android (Meta Oculus Quest – Standalone VR)",
  tech: "Unity, C#, XR Interaction Toolkit, Audio Guidance, Medical Training Simulation",
  desc: `
    Designed and developed a standalone VR training simulation for dental professionals to learn and practice the correct cleaning, sterilization, and preparation of dental instruments in a safe and repeatable virtual environment.<br><br>

    Implemented structured, task-based workflows using Unity’s XR Interaction Toolkit, enabling users to pick up, clean, inspect, and place dental tools in the correct procedural sequence through natural hand interactions.<br><br>

    Developed step-by-step procedural guidance using visual indicators, highlights, and synchronized audio instructions to closely simulate real-world dental sterilization and preparation standards.<br><br>

    Focused on intuitive and user-friendly interaction design to ensure accessibility for first-time VR users in clinical and medical training environments, minimizing learning curve and reducing interaction errors.<br><br>

    Optimized the application for Android-based Oculus Quest headsets by reducing asset complexity, optimizing lighting and textures, and maintaining stable performance for smooth, uninterrupted training sessions.
  `
},

  "Motor Assembly Training": {
  title: "Motor Assembly Training Application – Flowserve",
  platform: "Windows PC (Large Display & Touch Panel Support)",
  tech: "Unity (HDRP), C#, New Input System, Touch & Gamepad Integration",
  desc: `
    Designed and developed a large-scale, photorealistic motor assembly training application for Flowserve using Unity’s High Definition Render Pipeline (HDRP), delivering high visual fidelity suitable for industrial and enterprise training environments.<br><br>

    Created highly detailed 3D motor components and realistic industrial environments to accurately simulate the complete motor assembly workflow, allowing users to understand part orientation, sequencing, and assembly logic in a virtual setting.<br><br>

    Implemented a unified multi-input control system using Unity’s New Input System, supporting keyboard & mouse, touchscreen interfaces (TV panels), virtual joystick, and gamepad input within a single application build.<br><br>

    Designed interactive, step-by-step assembly procedures with clear visual guidance, part highlighting, and snap-to-fit validation to ensure correct placement and reduce user errors during training.<br><br>

    Developed a custom non-EXE-based installer for simplified deployment, enabling plug-and-play installation on client PCs without complex setup or hardware dependencies.<br><br>

    Optimized application performance for large-format PC displays, touch interaction, and varied hardware configurations, ensuring smooth operation and reliable responsiveness in real-world industrial training setups.
  `
},

  "3D Data Visualization": {
  title: "3D Data Visualization in VR – Internal Product",
  platform: "Android (Meta Oculus Quest – Standalone VR)",
  tech: "Unity, C#, OVR SDK, REST API, Runtime Data Rendering",
  desc: `
    Designed and developed a standalone VR-based 3D data visualization product that dynamically converts uploaded Excel data into interactive 3D charts within an immersive virtual environment.<br><br>

    Integrated backend REST APIs to fetch structured data from a remote server in real time, enabling live updates and seamless synchronization between the data source and VR visualization layer.<br><br>

    Implemented runtime-generated 3D visual elements, including dynamic bar charts and data-driven objects whose scale, position, and layout adapt automatically based on dataset structure and values.<br><br>

    Enabled intuitive VR-based exploration of complex datasets through natural controller interactions, allowing users to navigate, inspect, and interpret data spatially for improved analytical insight.<br><br>

    Leveraged the OVR SDK to deliver a smooth, optimized standalone VR experience on Oculus Quest, focusing on performance stability, low latency interaction, and user-friendly visualization workflows.
  `
},

 "Shopping Mall Experience": {
  title: "Shopping Mall Experience – Shriram Super App Simulation",
  platform: "PC & PCVR (OpenXR)",
  tech: "Unreal Engine, C++, Blueprints, OpenXR, Generative AI, Voice Interaction",
  desc: `
    Designed and delivered a photorealistic, multi-functional virtual shopping mall as an internal showcase for Shriram’s One Super App vision, blending retail, entertainment, AI-powered services, and brand engagement into one immersive application.<br><br>

    Built for both desktop PC and PCVR platforms using OpenXR, ensuring cross-platform capability and a unified codebase that runs on any OpenXR‑compatible system. This approach supports broad hardware access and future‑proofing of the experience. :contentReference[oaicite:0]{index=0}<br><br>

    Integrated a generative AI–driven virtual receptionist bot that responds to real‑time voice commands, guiding users on navigation, promotions, and mall information. This adds a conversational, service‑oriented layer to conventional VR/PC experiences, showcasing advanced user assistance and brand interaction.<br><br>

    Developed a rich Game Zone with multiple mini‑games, including:  
    • Obstacle Challenge featuring dynamic traps and movement‑based interaction  
    • Maze Runner with timed navigation challenges  
    These elements increase engagement, retention, and replay value, simulating entertainment spaces within a commercial environment.<br><br>

    Implemented AI‑driven NPCs with pathfinding and crowd simulation to mimic realistic mall behavior—walking customers, security staff, and shop attendants—creating believable, populated scenes rather than empty corridors. This enhances immersion and mirrors real‑world foot traffic patterns.<br><br>

    Created modular storefront areas that retail brands can customize, including digital product shelving and display interfaces, enabling a flexible platform for sponsorship, advertising, or virtual commerce.<br><br>

    Added diverse functional zones—Cinema, Food Court, Event Zone, and a Finance Zone modeling Shriram’s financial services such as insurance, loans, and EMI options. Users can browse products, watch branded content, or book appointments, demonstrating a full ecosystem under a single virtual roof.<br><br>

    Achieved high‑fidelity visuals using Unreal Engine’s advanced lighting and geometry systems. Leveraged Lumen for dynamic real‑time global illumination and reflections, integrated with Nanite for handling dense geometry and highly detailed environments—delivering photorealistic interiors, reflective glass, and complex architectural detail without compromising rendering quality. :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}<br><br>

    Supported multiple input modes—VR controllers, keyboard & mouse, and gamepad—so users can access the app on varied hardware configurations, lowering friction for both desktop and VR users.<br><br>

    Optimized for high‑performance rendering and smooth navigation in both desktop and VR contexts, ensuring stable frame rates and responsive controls even in complex, populated scenes. This makes the experience practical for demos, presentations, and long sessions on modern PCs and VR headsets.
  `
},

  "Cinematic Open-World Experience": {
  title: "Cinematic Open-World War Experience – Albaqee",
  platform: "PC, PCVR (OpenXR), 360° Cinematic Video",
  tech: "Unreal Engine (Blueprints), Niagara VFX, Chaos Destruction, AI Systems, OpenXR",
  desc: `
    Designed and developed a cinematic, open-world war experience inspired by a true-story conflict between rival gangs, built entirely using Unreal Engine’s Blueprint-only architecture to deliver large-scale environments, intense combat, and narrative-driven gameplay.<br><br>

    Created a detailed, war-torn open world featuring urban ruins, cemeteries, and destructible structures. Leveraged Unreal Engine’s Chaos Destruction System to enable real-time building damage, collapses, and environmental reactions, enhancing realism and player immersion.<br><br>

    Implemented high-impact cinematic moments such as bomb explosions, shockwaves, debris simulations, and large-scale environmental effects using Niagara VFX, delivering visually intense and emotionally charged war sequences.<br><br>

    Developed violent combat scenarios involving AI-driven enemy behavior, gang-based movement, coordinated attacks, and close-combat animations. Balanced realism and performance while pushing visual and interaction boundaries in a controlled, cinematic context.<br><br>

    Designed and managed dynamic NPC systems to simulate realistic gang presence, patrols, confrontations, and conflict escalation across large outdoor environments including city streets and graveyard locations.<br><br>

    Optimized massive destructible scenes for both PC gameplay and PCVR builds using occlusion culling, LOD management, event-based spawning, and controlled physics activation to maintain smooth frame rates even during heavy action sequences.<br><br>

    Crafted cinematic camera movements, scripted sequences, and dramatic framing to support storytelling. Produced high-quality cinematic renders and trailers, including 360-degree video exports for immersive viewing and promotional showcases.<br><br>

    Delivered the project in three formats: an interactive PC experience, a PCVR build using OpenXR for immersive storytelling, and a polished 360° cinematic video output for narrative presentation and marketing use.
  `
},

 "Immune System VR Experience": {
  title: "Immune System VR Experience – Roche CIT",
  platform: "Android (Meta Oculus Quest – Standalone VR)",
  tech: "Unity, C#, XR Interaction Toolkit, Video Player, Medical Visualization",
  desc: `
    Designed and developed an educational standalone VR experience for Roche CIT to visualize and explain the functioning of the human immune system at a microscopic level in an immersive and intuitive way.<br><br>

    Created a guided virtual journey inside the human body, allowing users to explore immune responses in real time by navigating through organs, bloodstreams, and cellular environments using Unity and the XR Interaction Toolkit.<br><br>

    Integrated high-resolution 360° medical animation videos that automatically play at key moments within the experience, helping explain complex biological processes such as immune response activation, cell interaction, and pathogen defense in a clear and engaging manner.<br><br>

    Designed interactive VR elements that allow users to trigger animations, move between different body regions, and closely observe immune cell behavior, blending hands-on exploration with cinematic medical visualization.<br><br>

    Implemented precise control over Unity’s Video Player and timeline systems to ensure smooth, seamless transitions between interactive 3D environments and cinematic 360° educational content without breaking immersion.<br><br>

    Optimized the application for Android-based Oculus Quest headsets, ensuring stable performance, smooth video playback, and efficient memory usage while rendering high-quality 3D content and medical animations simultaneously.<br><br>

    Delivered a polished standalone VR experience used by Roche’s medical and internal teams for training, awareness programs, and scientific presentations, enabling complex immunology concepts to be communicated effectively through immersive technology.
  `
},

  "Hospital Awareness VR Experience": {
  title: "Hospital Awareness VR Experience – Kauvery Hospital",
  platform: "Android (Meta Oculus Quest – Standalone VR)",
  tech: "Unity, C#, XR Interaction Toolkit, Video Player, Multi-Language UI",
  desc: `
    Designed and developed a standalone VR-based hospital awareness experience for Kauvery Hospital, aimed at educating patients, visitors, and the general public through immersive and easily accessible virtual content.<br><br>

    Integrated a combination of high-quality 360° videos and real-time recorded 2D videos within a unified VR environment, allowing users to virtually explore hospital facilities, departments, and services in an engaging and informative manner.<br><br>

    Implemented intuitive VR user interactions using Unity’s XR Interaction Toolkit, enabling users to start, pause, replay, and switch between different informational videos seamlessly while remaining immersed in the experience.<br><br>

    Developed a multi-language selection system presented at the beginning of the experience, allowing users to choose from multiple regional and international languages, ensuring accessibility for a diverse patient and visitor audience.<br><br>

    Focused on user-friendly navigation and interaction design optimized for first-time VR users in healthcare settings, supporting both gaze-based input and controller-based interaction to reduce learning curve and interaction friction.<br><br>

    Optimized video playback and interaction performance for Oculus Quest by efficiently managing video resolution, streaming, memory usage, and asset loading using Unity’s built-in video systems, ensuring smooth and reliable playback in a standalone environment.<br><br>

    Delivered a polished standalone VR application deployed in hospital premises as part of public outreach initiatives, awareness campaigns, and in-clinic VR kiosk installations, enhancing patient engagement and understanding through immersive media.
  `
},

  "360° Interactive Experience": {
  title: "360° Interactive Learning Experience – Kreedo",
  platform: "Android (Mobile & Google Cardboard VR)",
  tech: "Unity, C#, 360° Panorama, Hotspot Interaction System, Gaze Input",
  desc: `
    Designed and developed a lightweight 360° interactive learning experience for Kreedo, targeted at schools and educational centers, enabling immersive storytelling and concept-based learning using standard Android devices and Google Cardboard VR.<br><br>

    Built a panoramic VR environment using 360° imagery, allowing students to explore scenes in all directions and engage with educational content in an intuitive and visually engaging format without requiring high-end hardware.<br><br>

    Implemented a custom hotspot interaction system using Unity and C#, enabling users to navigate between scenes, trigger animations, and access contextual informational content directly within the 360° environment.<br><br>

    Designed a modular and data-driven framework to dynamically load scenes, assets, and hotspot configurations, allowing content updates and expansion without rebuilding the entire application—ideal for scalable educational content delivery.<br><br>

    Integrated gaze-based and tap-based interaction controls to ensure ease of use for younger learners and classroom environments where external controllers are not available, reducing complexity and improving accessibility.<br><br>

    Optimized the application for low-end Android devices by minimizing memory usage, optimizing texture resolution, and streamlining interaction logic, while maintaining a smooth and comfortable VR experience in Google Cardboard mode.<br><br>

    Delivered a compact, installer-ready APK suitable for mass distribution across schools, supporting both standard mobile usage and immersive Cardboard VR, and enabling cost-effective deployment of interactive learning experiences.
  `
},

  "Mixed Reality Data Visualization": {
  title: "Mixed Reality Data Visualization POC – Internal Project",
  platform: "Windows (Microsoft HoloLens – Mixed Reality)",
  tech: "Unity, C#, MRTK (Mixed Reality Toolkit), OpenXR, Spatial Mapping",
  desc: `
    Designed and developed a proof-of-concept Mixed Reality (MR) application for HoloLens to visualize structured enterprise data directly within a real-world environment, demonstrating how spatial computing can enhance data understanding and decision-making.<br><br>

    Created interactive 3D data visualization elements including holographic graphs, charts, and contextual information panels that are spatially anchored to physical surroundings, enabling users to view and analyze data at true scale within their workspace.<br><br>

    Leveraged MRTK’s interaction systems to implement natural user input, including hand tracking, gaze-based targeting, and voice commands, allowing seamless control over data visibility, selection, and navigation without traditional input devices.<br><br>

    Implemented dynamic runtime data loading logic, enabling datasets to be updated and refreshed within the Mixed Reality environment without rebuilding the application, supporting flexible enterprise data workflows.<br><br>

    Utilized spatial mapping and world anchoring to ensure holographic UI elements align naturally with real-world surfaces, maintaining positional stability and immersion as users move around their environment.<br><br>

    Optimized the experience for HoloLens hardware constraints, focusing on performance, interaction responsiveness, and comfortable long-duration usage in real-world enterprise scenarios.<br><br>

    Delivered the final solution as a Windows-based HoloLens application, serving as an internal POC to showcase the potential of Mixed Reality for enterprise data visualization, analytics, and spatial decision support.
  `
},

  "Conversational AI": {
  title: "Conversational AI Platform – NOVAC GT",
  platform: "Windows",
  tech: "Unity, C#, REST API, Mobile UI Toolkit, QR Code Scanning SDK, Face Verification, OTP Authentication",
  desc: `
    Designed and developed an enterprise-grade Conversational AI application for NOVAC GT, featuring a real-time AI-powered virtual character capable of engaging users through natural, context-aware dialogue for interactive customer and information services.<br><br>

    Implemented a conversational AI system integrated with backend REST APIs to process user queries, generate intelligent responses, and maintain conversational context, enabling smooth and realistic human–AI interaction in real time.<br><br>

    Integrated camera-based face verification to securely identify users through facial recognition, adding an additional biometric security layer suitable for enterprise and public-facing deployments.<br><br>

    Developed a QR code scanning feature that allows users to quickly retrieve data, authenticate sessions, or access services through visual scanning, improving usability and reducing manual input requirements.<br><br>

    Created a high-fidelity IAORA hologram avatar display, delivering an immersive and lifelike conversational experience that visually represents the AI assistant and enhances user engagement in kiosk-style or presentation environments.<br><br>

    Designed and implemented a complementary touchscreen-based user interface using Mobile UI Toolkit, enabling users to interact with the system through intuitive controls alongside voice-based AI interaction.<br><br>

    Implemented a secure mobile number OTP (One-Time Password) authentication flow to verify user identity, ensuring controlled access and compliance with enterprise security requirements.<br><br>

    Delivered a fully integrated Windows-based conversational AI solution combining voice interaction, visual avatars, biometric verification, and multi-channel input, suitable for deployment in enterprise kiosks, customer service counters, and interactive digital experiences.
  `
},

 "3D Model Customization": {
  title: "Interactive 3D Model Customization – VIVA ACP",
  platform: "Android (Mobile)",
  tech: "Unity, C#, TriLib, URP, Mobile UI Toolkit, Runtime Asset Import",
  desc: `
    Designed and developed a real-time 3D model customization application for VIVA ACP, enabling users to import and visualize FBX models dynamically at runtime on Android mobile devices without requiring pre-bundled assets.<br><br>

    Implemented a flexible interior and exterior material customization system, allowing users to change wall colors, textures, and surface finishes instantly using a high-quality pre-defined material template designed for architectural and product visualization.<br><br>

    Integrated secure login and template selection panels, enabling personalized access to saved projects, model configurations, and reusable design presets for efficient project management and user continuity.<br><br>

    Developed intuitive touch-based interaction controls, including smooth movement, rotation, and zoom gestures, paired with a fixed camera setup and one-tap reset functionality to ensure ease of use for non-technical users.<br><br>

    Leveraged Unity URP and optimized rendering pipelines to maintain smooth performance and visual clarity on mobile hardware, focusing on efficient lighting, texture handling, and draw-call optimization.<br><br>

    Delivered a lightweight, responsive mobile application suitable for real-world use cases such as architectural visualization, product customization, client presentations, and on-site design previews on Android devices.
  `
},

"Military MARCHE Assessment": {
  title: "Military TCC Simulation – POC",
  platform: "PCVR (Unity 6)",
  tech: "Unity 6, C#, Shader Graph, VFX Graph, Particle System, XR Interaction Toolkit, UI Toolkit",
  desc: `
    Designed and developed an advanced Tactical Combat Casualty Care (TCC) simulation built around the MARCHE protocol, enabling military trainees to practice life-saving procedures in a highly realistic PCVR training environment.<br><br>

    Constructed a visually rich battlefield scenario with environmental cues such as smoke, debris, blood trails, and material-based surface reactions. Leveraged Shader Graph, VFX Graph, and custom particle systems to simulate complex dynamic effects including blood flow, impact splatter, surface wetness, and wound progression, significantly enhancing immersion and emotional engagement.<br><br>

    Developed robust physics-driven interaction systems using rigidbody mechanics to ensure precise handling of medical tools — including tourniquets, chest seals, bandages, pressure applicators, and airway devices. Each tool responds naturally to user movement, weight, and force application, reinforcing authentic combat medical training.<br><br>

    Implemented a guided yet assessment-focused MARCHE training flow:
    <ul>
      <li><b>M – Massive Hemorrhage:</b> Identify life-threatening bleeding and apply immediate interventions.</li>
    </ul><br>
    Built a full assessment system where trainees are evaluated on accuracy, decision-making order, tool usage correctness, response time, and adherence to MARCHE procedures. The simulation provides dynamic feedback—successful actions stabilize the casualty while mistakes escalate injury severity—creating a realistic pressure-driven training atmosphere.<br><br>
    Prioritized high visual fidelity, natural interaction, and optimized PCVR performance to deliver a smooth, responsive, and deeply immersive training tool suitable for military medical drills, scenario rehearsals, and professional combat medic education.
  `
},
"Hyundai Safety Training": {
  title: "Hyundai Plant – Electrical & Tool Handling Safety Training (Standalone VR)",
  platform: "Oculus Standalone (Unity 6)",
  tech: "Unity 6, C#, Shader Graph, VFX Graph, Particle System, XR Interaction Toolkit, UI Toolkit",
  desc: `
    Designed and developed a high-quality safety training simulation for Hyundai's manufacturing environment, focused on electrical safety, tool handling, and operator awareness.<br><br>
    Built an interactive VR workflow where workers learn the correct procedure for operating Hyundai-specific tools, identifying unsafe conditions, and following proper lockout–tagout steps.<br><br>
    Implemented realistic electrical system behavior including live wire indication, spark feedback, short-circuit reactions, and hazard visualization using Shader Graph and VFX Graph.<br><br>
    Created intuitive hand interactions using XR Interaction Toolkit, enabling trainees to pick up tools, operate machinery, perform inspections, and follow guided safety steps with high accuracy.<br><br>
    Integrated a structured LTA (Learn–Try–Assess) training methodology: 
    <ul>
      <li><b>Learn Mode:</b> Trainees are guided step-by-step through each safety procedure with visual cues, narration, and tool highlights.</li>
      <li><b>Try Mode:</b> Users attempt each task independently with reduced assistance, reinforcing real-world decision-making.</li>
      <li><b>Assess Mode:</b> The simulation evaluates user actions, timing, tool usage correctness, and adherence to safety rules.</li>
    </ul>
    <br>
    Implemented a performance tracking and reporting system that logs user interactions, completion times, and procedural accuracy into structured Excel-based output. This data is provided to instructors for reviewing trainee performance and identifying mistakes or missed steps, enabling targeted safety improvement.<br><br>
    Developed a complete standalone Oculus experience optimized for performance, ensuring stable frame rates, high visual fidelity, and smooth VR ergonomics for long training sessions.<br><br>
    Delivered a production-ready training module used within Hyundai’s plant workflow to improve worker safety, reduce operational errors, and standardize tool usage procedures across teams.
  `
},
// AWRLiyod
"AI Reception System": {
  title: "AWR Lloyd – AI-Powered Interactive Reception System",
  platform: "Windows Kiosk & Enterprise Display",
  tech: "Unity, C#, WebSocket, REST API, Face Tracking SDK, STT, TTS, Keyboard Input System",
  desc: `
    Designed and developed an AI-driven enterprise reception system for AWR Lloyd, combining face tracking, conversational AI, and real-time backend integration for intelligent visitor interaction.<br><br>

    Implemented an interactive Welcome Panel that dynamically activates when a user approaches the kiosk, creating a seamless and engaging first interaction experience.<br><br>

    Integrated real-time face tracking using camera input to detect user presence and trigger personalized workflows. The system communicates with backend services using WebSocket connections for instant event-based interaction handling.<br><br>

    Built a dual communication AI system:
    <ul>
      <li><b>Speech-to-Text (STT):</b> Converts user voice input into text via WebSocket streaming.</li>
      <li><b>Text-to-Speech (TTS):</b> Generates natural AI responses for real-time audio playback.</li>
    </ul><br>

    Developed conversational AI powered by REST APIs for response generation and WebSocket streaming for low-latency communication.<br><br>

    Added keyboard hotkey overrides for manual control during demos, admin interactions, and emergency flow management.<br><br>

    Optimized for enterprise kiosk deployment with stable session handling, smooth avatar animation transitions, and secure API communication.
  `
},
"Kiosk & LED System": {
  title: "Indian Embassy – Interactive Kiosk & LED AI Display System",
  platform: "Windows Kiosk + LED Display System",
  tech: "Unity, C#, QR Code SDK, REST API, WebSocket, TTS, Video Player",
  desc: `
    Delivered a dual-application system for the Indian Embassy consisting of an interactive Kiosk system and a synchronized LED display platform.<br><br>

    <b>Application 1 – Smart Kiosk:</b><br>
    Developed a dual-avatar system (Male & Female AI hosts) allowing dynamic character selection based on user preference or configuration.<br><br>

    Integrated QR code scanning with backend verification via REST API. Upon successful verification, the system triggers personalized greeting workflows.<br><br>

    Built a conditional greeting engine that plays gender-based welcome messages and animations depending on verified visitor profile data.<br><br>

    <b>Application 2 – LED Display System:</b><br>
    Implemented automated welcome greeting video playback for display on large LED panels.<br><br>

    Integrated hotkey-based control triggers to manually override or initiate specific greeting flows during events or official visits.<br><br>

    Developed conversational TTS functionality powered by REST APIs, enabling live interaction display synchronized with avatar animation.<br><br>

    Ensured both systems communicate seamlessly for event-based triggers and synchronized greeting presentation.
  `
},

"VIP AI Kiosk System": {
  title: "MyCoach – AI-Based VIP Recognition & Conversational Kiosk",
  platform: "Windows Kiosk",
  tech: "Unity, C#, Face Tracking SDK, REST API, WebSocket, Video Playback Engine",
  desc: `
    Designed an intelligent AI-powered kiosk solution for MyCoach featuring VIP recognition, automated greeting playback, and conversational AI.<br><br>

    Integrated real-time face tracking to detect user presence and identify VIP profiles via backend verification APIs.<br><br>

    Developed a dual-trigger system:
    <ul>
      <li><b>Face Recognition Based:</b> Automatically detects VIPs and plays personalized welcome videos.</li>
      <li><b>Hotkey Trigger:</b> Manual override option to initiate greeting workflows during controlled events.</li>
    </ul><br>

    Built AI conversational capabilities powered by REST APIs for response generation and WebSocket streaming for real-time communication.<br><br>

    Optimized session handling to smoothly transition between greeting videos and live AI chat conversation without UI interruptions.
  `
},

"Recruitment AI Kiosk": {
  title: "WowHR – AI Recruitment & Assessment Kiosk",
  platform: "Windows Enterprise Kiosk",
  tech: "Unity, C#, WebSocket, REST API, TTS, Animated Avatar System",
  desc: `
    Developed an AI-powered recruitment kiosk system for WowHR designed to engage candidates through conversational interaction and automated assessment workflows.<br><br>

    Implemented idle animation states for avatar presence when no user interaction is detected, ensuring a lifelike and engaging kiosk environment.<br><br>

    Built AI conversational engine using:
    <ul>
      <li><b>WebSocket:</b> For real-time voice streaming and interaction events.</li>
      <li><b>REST API:</b> For intelligent response generation and backend candidate data retrieval.</li>
    </ul><br
    Integrated hotkey-based detail triggers to simulate candidate-specific responses during demonstrations or HR-controlled sessions.<br><br>
  `
},

"AI Financial Assistant": {
  title: "Bharat Fintech – AI Financial Interactive Assistant",
  platform: "Enterprise Kiosk / Display System",
  tech: "Unity, C#, WebSocket, REST API, TTS, Video Playback",
  desc: `
    Designed and deployed an AI-powered financial assistance kiosk system for Bharat Fintech, providing intelligent conversational interaction for visitors and customers.<br><br>

    Implemented idle state promotional video playback when no interaction is detected, ensuring continuous brand engagement.<br><br>

    Developed AI conversational system integrating WebSocket streaming for real-time voice communication and REST APIs for secure financial data retrieval and response handling.<br><br>

    Built smooth transition logic between idle promotional mode and active conversational AI mode upon user interaction detection.<br><br>

    Focused on secure API communication, stable connection handling, and responsive UI for financial industry deployment standards.
  `
},
"Cylindrical Hologram AI Display": {
  title: "GoodHumanBeingIndex – Cylindrical Hologram AI Conversational Display",
  platform: "Cylindrical Hologram Display System (Windows)",
  tech: "Unity, C#, WebSocket, REST API, TTS, Avatar Animation System",
  desc: `
    Engineered an advanced AI-powered hologram display system for GHBI using a cylindrical holographic projection setup.<br><br>

    Designed an idle holographic avatar animation state that maintains presence and engagement when no active interaction occurs.<br><br>

    Implemented AI conversational system integrating REST APIs for response generation and WebSocket streaming for real-time voice interaction.<br><br>

    Developed hotkey-triggered event flows to simulate or manually activate predefined conversational scenarios.<br><br>

    Built conversation interruption logic allowing users to skip or stop the avatar while speaking, immediately halting TTS playback and resetting the dialogue state.<br><br>

    Optimized avatar rendering, animation blending, and holographic transparency effects to ensure smooth visual output within cylindrical projection constraints.
  `
},
"IAORA Hologram Display": {
  title: "Siraj Finance – IAORA Dual Display Hologram AI System",
  platform: "Windows (Hologram Display + Secondary Interaction Display)",
  tech: "Unity, C#, MediaPipe (Face Recognition), WebSocket, REST API, STT, Multi-Display Rendering System",
  desc: `
    Architected and delivered a next-generation IAORA holographic AI assistant system for Siraj Finance, featuring a Dual Display Interaction Architecture combining a hologram projection unit with a secondary interaction display panel.<br><br>

    <b>Dual Display Interaction System:</b><br>
    Implemented a synchronized dual-output rendering system where:
    <ul>
      <li>The primary hologram display projects a 3D AI avatar using transparent illusion-based rendering.</li>
      <li>The secondary display (touchscreen / LED panel) shows UI prompts, subtitles, user instructions, and interaction controls.</li>
    </ul>
    Both displays operate in real-time sync using Unity’s multi-display support, ensuring consistent conversational state and interaction flow across screens.<br><br>

    Integrated real-time face recognition using Unity MediaPipe plugin to detect and identify users standing in front of the camera. Once a valid face is detected, the system automatically triggers the greeting workflow on both displays simultaneously.<br><br>

    Developed an intelligent greeting sequence where the hologram avatar initiates a personalized welcome animation and audio greeting. After greeting completion, the system transitions smoothly into full conversational mode.<br><br>

    Built a robust AI conversational pipeline powered by:
    <ul>
      <li><b>REST API:</b> For AI response generation, business logic handling, and data retrieval.</li>
      <li><b>WebSocket:</b> For low-latency bidirectional communication and real-time speech streaming.</li>
    </ul><br>

    Implemented complete voice interaction flow:
    <ul>
      <li><b>Speech-to-Text (STT):</b> Captures and converts user speech into text using streaming WebSocket communication.</li>
    </ul><br>

    Designed synchronized subtitle rendering on the secondary display to mirror AI responses spoken by the hologram, enhancing accessibility and clarity in noisy public environments.<br><br>

    Developed hotkey-triggered interaction overrides allowing operators to manually initiate greetings, switch demo modes, or trigger predefined financial service responses during presentations and events.<br><br>

    Implemented conversation interruption logic enabling users to skip or stop the avatar while speaking. This immediately halts playback, resets dialogue state, and allows new speech input — ensuring responsive and natural human-AI engagement.<br><br>

    Optimized hologram rendering for projection constraints including depth illusion calibration, alpha transparency tuning, avatar positioning alignment, and animation blending to maintain smooth 360° holographic visibility.<br><br>

    Delivered a production-ready enterprise AI hologram solution combining immersive 3D projection with interactive dual-screen UI, enhancing customer engagement, automating front-desk interaction, and modernizing financial branch experience through spatial AI technology.
  `
},

};

// === OPEN MODAL ON EYE CLICK ===
document.querySelectorAll(".btns .fa-eye").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    const modal = document.getElementById("projectModal");

    // Prefer reading modal content from the closest .box data-* attributes (works for both projects and certifications)
    const box = e.target.closest('.box');
    if (box && (box.dataset.title || box.dataset.desc)) {
      const title = box.dataset.title || (box.querySelector('.tag h3') ? box.querySelector('.tag h3').textContent.trim() : 'Item');
      const platform = box.dataset.platform || '';
      const tech = box.dataset.tech || '';
      const desc = box.dataset.desc || (box.querySelector('.desc p') ? box.querySelector('.desc p').innerHTML : '');

      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalPlatform").textContent = platform;
      document.getElementById("modalTech").textContent = tech;
      document.getElementById("modalDesc").innerHTML = desc;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      return;
    }

    // Fallback: try to find a project entry by name (legacy behavior)
    const projectNameEl = e.target.closest('.content') && e.target.closest('.content').querySelector('h3');
    if (!projectNameEl) return;
    const projectName = projectNameEl.textContent.trim();

    const data = Object.entries(projects).find(([key]) => projectName.includes(key));
    if (data) {
      const proj = data[1];
      document.getElementById("modalTitle").textContent = proj.title;
      document.getElementById("modalPlatform").textContent = proj.platform;
      document.getElementById("modalTech").textContent = proj.tech;
      document.getElementById("modalDesc").innerHTML = proj.desc;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
});

// === CLOSE MODAL ===
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("projectModal").style.display = "none";
  document.body.style.overflow = "auto";
});
window.onclick = event => {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Certification view is handled by the general .btns .fa-eye listener which now supports certificates via data attributes.

// Tilt effect intentionally disabled per user request.
// To re-enable, uncomment the line below.
// if (typeof VanillaTilt !== 'undefined') { VanillaTilt.init(document.querySelectorAll('.tilt'), { max: 15 }); }

// Certification Link buttons: open the certificate URL in a new tab (do not trigger modal)
document.querySelectorAll('.certifications a.btn').forEach(a => {
  a.addEventListener('click', e => {
    // prevent other click handlers (smooth-scroll)
    e.stopImmediatePropagation();
    e.preventDefault();

    const box = a.closest('.box');
    const url = a.dataset.url || (box && box.dataset.url) || a.getAttribute('href');
    if (url && url !== '#' && url !== '') {
      window.open(url, '_blank', 'noopener');
      return;
    }
    // Fallback: open certificate image
    if (box) {
      const img = box.querySelector('img');
      if (img && img.src) window.open(img.src, '_blank', 'noopener');
    }
  });
});

// Forward project View button clicks to the eye-icon handler so View opens the modal like certifications.
document.querySelectorAll('#work a.btn').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const eye = a.querySelector('.fa-eye');
    if (eye) {
      eye.click();
      return;
    }
    // If icon not present inside the anchor, try to find the .fa-eye inside the same .box
    const box = a.closest('.box');
    if (box) {
      const eyeInBox = box.querySelector('.fa-eye');
      if (eyeInBox) eyeInBox.click();
    }
  });
});

