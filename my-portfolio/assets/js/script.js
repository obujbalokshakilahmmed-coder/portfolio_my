\$(document).ready(function () {

    // ১. হ্যামবার্গার মেনুবার টগল মেকানিজম ভাই
    \$('#menu').click(function () {
        \((this).toggleClass('fa-times');\)('.navbar').toggleClass('active');
    });

    // স্ক্রোল বা লোড হওয়ার সময় মেনুবার রিস্টার্ট করা
    \((window).on('scroll load', function () {\)('#menu').removeClass('fa-times');
        \$('.navbar').removeClass('active');

        // স্ক্রোল ব্যাক টু টপ বাটন ডিসপ্লে হ্যান্ডলার
        if (\((window).scrollTop() > 60) {\)('#scroll-top').addClass('active');
        } else {
            \$('#scroll-top').removeClass('active');
        }

        // স্ক্রোল করার সাথে সাথে মেনু হাইলাইটিং লক করা
        \$('section').each(function () {
            let height = \$(this).height();
            let offset = \$(this).offset().top - 200;
            let top = \$(window).scrollTop();
            let id = \$(this).attr('id');

            if (top >= offset && top < offset + height) {
                \(('.navbar ul li a').removeClass('active');\)('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // ২. আপনার মেইন হোমপেজের হিরো টাইপিং অ্যানিমেশন (The Neon Typing Magic)
    var typed = new Typed(".typing-text", {
        strings: [
            "Android Development",
            "Backend API Engineering",
            "AWS Cloud Infrastructure",
            "Full-Stack Software Architecture"
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // ৩. আপনার স্কিল সেকশনের জন্য ডাইনামিক ডেটা ইনজেকশন (The New Skill Matrix)
    const skills = [
        { name: "Java", icon: "https://icons8.com" },
        { name: "PHP", icon: "https://icons8.com" },
        { name: "MySQL", icon: "https://icons8.com" },
        { name: "Firebase", icon: "https://icons8.com" },
        { name: "AWS EC2", icon: "https://icons8.com" },
        { name: "Git & GitHub", icon: "https://icons8.com" },
        { name: "HTML5", icon: "https://icons8.com" },
        { name: "CSS3", icon: "https://icons8.com" },
        { name: "JavaScript", icon: "https://icons8.com" },
        { name: "Tailwind CSS", icon: "https://icons8.com" },
        { name: "Bootstrap", icon: "https://icons8.com" },
        { name: "Figma", icon: "https://icons8.com" }
    ];

    const skillsContainer = document.getElementById("skillsContainer");
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillBar = document.createElement("div");
            skillBar.className = "bar";
            skillBar.innerHTML = `
                <div class="info">
                    <img draggable="false" src="${skill.icon}" alt="${skill.name}"/>
                    <span>${skill.name}</span>
                </div>
            `;
            skillsContainer.appendChild(skillBar);
        });
    }

    // ৪. ইলাস্টিক ভ্যানিলা টিল্ট ইফেক্ট লক করা (The Card Smooth Tilt)
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

    // ৫. স্মুথ স্ক্রোল রিভিল অ্যানিমেশন ইন্টিগ্রেশন (ScrollReveal Pipeline)
    const srt = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    srt.reveal('.home .content', { delay: 200 });
    srt.reveal('.home .image', { delay: 400 });
    srt.reveal('.about .row', { delay: 200 });
    srt.reveal('.skills .container', { delay: 200 });
    srt.reveal('.education .box-container', { delay: 200 });
    srt.reveal('.work .box-container', { delay: 200 });
    srt.reveal('.experience .timeline', { delay: 200 });
    srt.reveal('.contact .container', { delay: 200 });
});
