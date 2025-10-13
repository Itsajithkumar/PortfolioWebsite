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
/*
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [
        "🎮 Crafting Immersive Worlds",
        "🚀 Building the Future of XR",
        "🕹️ Unity & Unreal Wizard",
        "🌌 Creating Next-Gen Gameplay",
        "👓 AR / VR Experience Architect",
    ],
    loop: true,
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 500,
    //smartBackspace: true,
});
*/
// <!-- typed js effect ends -->

// async function fetchData(type = "skills") {
//     let response
//     type === "skills" ?
//         response = await fetch("/assets/js/skills.json")
//         :
//         response = await fetch("/assets/js/projects.json")
//     const data = await response.json();
//     return data;
// }


// async function fetchData(type = "skills") {
//     let response;
//     try {
//         response = await fetch(
//             type === "skills"
//                 ? "./assets/js/skills.json"
//                 : "./assets/js/projects.json"
//         );

//         if (!response.ok) throw new Error(`HTTP ${response.status}`);

//         const text = await response.text();
//         if (!text.trim()) throw new Error("Empty JSON file");
//         return JSON.parse(text);
//     } catch (err) {
//         console.error("JSON Fetch Error:", err);
//         return [];
//     }
// }

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

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

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

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


// === PROJECT DATA ===
const projects = {
  "VR Escape Room": {
    title: "VR Escape Room – IDFC",
    platform: "Platform: Android (Oculus Quest)",
    tech: "Technologies: Unity, C#, XR Interaction Toolkit, REST API",
    desc: `
      Developed a standalone VR escape room experience to train IDFC Bank employees in critical thinking and teamwork.<br><br>
      Built interactive gameplay using Unity’s XR Interaction Toolkit, supporting object manipulation and dynamic quiz-solving in VR.<br><br>
      Implemented a data tracking system to capture user performance metrics (Total time, retries, each question answer right/wrong, each room time, employee ID).<br><br>
      Integrated REST APIs to send recorded user data to a remote server for analysis.<br><br>
      Enabled real-time data visualization through a web-based admin dashboard for training insights.
    `
  },
  "Rocket Launch & Space Experience": {
    title: "Rocket Launch & Space Experience – Thinkmate",
    platform: "Platform: Android (Oculus Quest)",
    tech: "Technologies: Unity, C#, XR Interaction Toolkit",
    desc: `
      Developed an immersive VR experience simulating a rocket launch, satellite deployment, and orbital view of Earth.<br><br>
      Designed user interactions with XR Interaction Toolkit and animated rocket sequences.<br><br>
      Built a virtual space station environment with interactive modules and optimized it for Oculus Quest.
    `
  },
  "Dental Instrument Preparation": {
    title: "Dental Instrument Preparation VR – EasyDent",
    platform: "Platform: Android (Oculus Quest)",
    tech: "Technologies: Unity, C#, XR Interaction Toolkit",
    desc: `
      Created a VR training simulation for dental staff to learn instrument cleaning and preparation workflows.<br><br>
      Implemented interactive, step-by-step guidance with visual and audio prompts.<br><br>
      Optimized performance for standalone VR headsets.
    `
  },
  "Motor Assembly Training Application": {
    title: "Motor Assembly Training Application – Flowserve",
    platform: "Platform: Windows PC",
    tech: "Technologies: Unity (HDRP), C#, Input System",
    desc: `
      Developed a photorealistic motor assembly training app using Unity HDRP.<br><br>
      Supported multi-input controls (keyboard, touchscreen, joystick, gamepad).<br><br>
      Designed interactive assembly steps with visual guidance and snap-to-fit logic.
    `
  },
  "3D Data Visualization": {
    title: "3D Data Visualization in VR – Internal Product",
    platform: "Platform: Android (Oculus Quest)",
    tech: "Technologies: Unity, C#, OVR SDK, REST API",
    desc: `
      Developed a VR-based tool that renders Excel data as 3D charts.<br><br>
      Integrated backend APIs for real-time visualization.<br><br>
      Enabled immersive exploration of datasets inside VR.
    `
  },
  "Shopping Mall Experience": {
    title: "Shopping Mall Experience – Shriram (Super App Simulation)",
    platform: "Platform: PC & PCVR (OpenXR)",
    tech: "Technologies: Unreal Engine, C++, Blueprints, OpenXR, Generative AI",
    desc: `
      Developed a photorealistic, multi-functional virtual shopping mall application combining immersive retail, entertainment, and AI-driven service experiences.<br><br>
      Integrated a generative AI-based virtual receptionist bot that interacts with users through real-time voice commands.<br><br>
      Included Cinema Area, Food Court, and Finance Zone for complete simulation.
    `
  },
  "Cinematic Open-World Experience": {
    title: "Cinematic Open-World War Experience – Albaqee",
    platform: "Platform: PC, PCVR, 360 Video",
    tech: "Technologies: Unreal Engine (Blueprints), Niagara VFX, Chaos Destruction, OpenXR",
    desc: `
      Created a cinematic open-world war experience featuring destructible environments, AI-driven combat, and real-time explosions using Unreal’s Chaos and Niagara systems.<br><br>
      Optimized for both PC and VR playback, with cinematic sequences exported in 360° format.
    `
  },
  "Immune System VR Experience": {
    title: "Immune System VR Experience – Roche CIT",
    platform: "Platform: Android (Oculus Quest)",
    tech: "Technologies: Unity, C#, XR Interaction Toolkit",
    desc: `
      Developed an educational VR experience visualizing the human immune system in 3D.<br><br>
      Combined interactive elements with medical-grade animations to explain biological processes.
    `
  },
  "Hospital Awareness VR Experience": {
    title: "Hospital Awareness VR Experience – Kauvery Hospital",
    platform: "Platform: Android (Oculus Quest)",
    tech: "Technologies: Unity, C#, XR Interaction Toolkit",
    desc: `
      Created a VR-based hospital awareness experience integrating 360° and real-time recorded videos.<br><br>
      Enabled users to explore hospital services interactively with multi-language support.
    `
  },
  "360° Interactive Learning Experience": {
    title: "360° Interactive Learning Experience – Kreedo",
    platform: "Platform: Android (Mobile & Google Cardboard VR)",
    tech: "Technologies: Unity, C#, 360° Panorama, Hotspot Interaction System",
    desc: `
      Built a 360° panoramic VR experience for interactive learning in schools.<br><br>
      Implemented hotspot navigation, gaze controls, and lightweight performance optimization.
    `
  },
  "Mixed Reality Data Visualization": {
    title: "Mixed Reality Data Visualization POC – Internal Project",
    platform: "Platform: Windows (HoloLens – Mixed Reality)",
    tech: "Technologies: Unity, C#, MRTK, OpenXR",
    desc: `
      Developed a mixed reality data visualization POC using HoloLens and MRTK.<br><br>
      Created holographic graphs anchored in real-world environments using voice and hand gestures.
    `
  },
  "Conversational AI": {
    title: "Conversational AI – NOVAC GT",
    platform: "Platform: Windows",
    tech: "Technologies: Unity, C#, REST API",
    desc: `
      Conversational AI Chat: Developed a conversational AI character capable of real-time natural language responses, enabling seamless interactions with users. Integrated with advanced APIs for efficient and context-aware dialogue processing.

      Camera Face Verification: Implemented face verification using the device’s camera, ensuring secure user identification through facial recognition technology.

      QR Scanning Feature: Integrated a QR code scanning functionality to enable easy data retrieval and secure access through visual scanning.

      Display 1 - IAORA Hologram Avatar: Designed and displayed a highly interactive IAORA hologram avatar for immersive, lifelike conversations, providing a cutting-edge user experience.

      Display 2 - Touchscreen UI: Developed a user-friendly touchscreen UI that complements the AI conversation, allowing users to engage with intuitive controls and interact with the system seamlessly.

      Mobile Number OTP Authentication: Implemented an OTP (One-Time Password) authentication system to verify user identity via mobile number, enhancing security and ensuring a smooth user login experience.
    `
  }
};

// === OPEN MODAL ON EYE CLICK ===
document.querySelectorAll(".btns .fa-eye").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const projectName = e.target.closest('.content').querySelector('h3').textContent.trim();
    const modal = document.getElementById("projectModal");
    
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

