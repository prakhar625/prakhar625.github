var tags = [
    "illustrations",        //01
    "graphic design",       //02
    "user experience",      //03
    "case-study",           //04
    "development",          //05
    "Java Script",          //06
    "THREE.JS",             //07
    "Side Project",         //08
    "communication design", //09
    "Branding",             //10
    "UI Design",            //11
];
var projects = [
    {
        "id": 07,
        "details": {
            "title": "Designing Experiences for Groups",
            "sub": "Thought-process around a small feature design job that I undertook recently – at Farmizen",
            "tags": [1, 2],
            "thumbnail": "http://uc.prakharb.com/content/images/2019/01/post-thumbnail.jpg",
            "ctaLink": "http://uc.prakharb.com/farmizen-team-buy/",
            "ctaText": "View",
        }
    },
    {
        "id": 06,
        "details": {
            "title": "ClearTax Design Language System",
            "sub": "Learnings and understandings from when we were building the DLS",
            "tags": [1, 2],
            "thumbnail": "http://uc.prakharb.com/content/images/2018/12/xScreenshot-2018-12-14-at-23.29.58.png.pagespeed.ic.VHqqIbyuDf.webp",
            "ctaLink": "http://uc.prakharb.com/ct-dls/",
            "ctaText": "View",
        }
    },
    {
        "id": 05,
        "details": {
            "title": "Github filter interaction improvements",
            "sub": "Quick idea to improve the usability of filters on Github's Issues pages.",
            "tags": [1, 2],
            "thumbnail": "http://uc.prakharb.com/content/images/2018/12/xScreenshot-2018-11-19-at-19.57.57.png.pagespeed.ic.gNhOlDBUoM.webp",
            "ctaLink": "http://uc.prakharb.com/improving-github-filters",
            "ctaText": "View",
        }
    },
    {
        "id": 04,
        "details": {
            "title": "3D Music Visualiser",
            "sub": "Background and thought process behind a small music visualiser that I made some time back, using THREE.js and WebAudio API",
            "tags": [1, 2],
            "thumbnail": "http://uc.prakharb.com/content/images/2018/12/x1_CfnrtLr2KoTDs_r7afQ1gQ.png.pagespeed.ic.HUkhmAQ7X6.webp",
            "ctaLink": "http://uc.prakharb.com/music-visualiser-with-three-js/",
            "ctaText": "View",
        }
    },
    // {
    //     "id": 03,
    //     "details": {
    //         "title": "Nestaway Micro-interactions",
    //         "sub": "A few microinteractions that I prototyped for the Web Application, during my time at Nestaway.com",
    //         "tags": [1, 2],
    //         "thumbnail": "https://prakhar625.github.io/images/work/ills.png",
    //         "ctaLink": "http://prakhar625.github.io/WIP",
    //         "ctaText": "View on Behance",
    //     }
    // },
    {
        "id": 02,
        "details": {
            "title": "Trestor Branding & Experience",
            "sub": "Frontend Development for the web wallet application and UX Design for the application ecosystem, including the UI guideline",
            "tags": [1, 2],
            "thumbnail": "https://prakhar625.github.io/images/work/trestor-index.png",
            "ctaLink": "http://uc.prakharb.com/work-at-trestor/",
            "ctaText": "View Project",
        }
    },
    {
        "id": 01,
        "details": {
            "title": "Experiments at Nestaway",
            "sub": "A few of the interesting things I worked on, during my time at Nestaway",
            "tags": [1, 2],
            "thumbnail": "http://uc.prakharb.com/content/images/2019/02/xScreenshot-2019-02-05-at-15.30.55-1.png.pagespeed.ic.zSc8Hnk0L-.webp",
            "ctaLink": "http://uc.prakharb.com/nestaway-filter-ui-interactive-rehaul/",
            "ctaText": "Visit Behance",
        }
    },
    // {
    //     "id": 06,
    //     "details": {
    //         "title": "Illustrations at Housing.com",
    //         "sub": "Branding, UX & UI for the Accounts Recievable Chrome Extension and Web App",
    //         "tags": [1, 2],
    //         "thumbnail": "https://prakhar625.github.io/images/work/hb-index.png",
    //         "ctaLink": "http://bit.ly/Q6TyWJ",
    //         "ctaText": "View on Behance",
    //     }
    // },
    // {
    //     "id": 05,
    //     "details": {
    //         "title": "BOARRD",
    //         "sub": "User Interface for a concept web-app that helps people manage bookmarks",
    //         "tags": [11],
    //         "thumbnail": "https://prakhar625.github.io/images/work/boarrd-index.png",
    //         "ctaLink": "http://bit.ly/1wxqPKJ",
    //         "ctaText": "View on Behance",
    //     }
    // },
    // {
    //     "id": 04,
    //     "details": {
    //         "title": "Gamespot",
    //         "sub": "UI for a concept Game Review Website",
    //         "tags": [11],
    //         "thumbnail": "https://prakhar625.github.io/images/work/gamespot.png",
    //         "ctaLink": "http://bit.ly/1wxvQmj",
    //         "ctaText": "View on Behance",
    //     }
    // },
    // {
    //     "id": 03,
    //     "details": {
    //         "title": "Waves 2014",
    //         "sub": "Branding & Website Design for the college festival",
    //         "tags": [10, 11],
    //         "thumbnail": "https://prakhar625.github.io/images/work/waves-web.png",
    //         "ctaLink": "http://bit.ly/Q6ZZZL",
    //         "ctaText": "View on Behance",
    //     }
    // },
    // {
    //     "id": 02,
    //     "details": {
    //         "title": "Waves 2014 Posters",
    //         "sub": "A couple of posters I made during my undergraduate studies.",
    //         "tags": [2],
    //         "thumbnail": "https://prakhar625.github.io/images/work/waves-posters.png",
    //         "ctaLink": "http://bit.ly/12BHhR5",
    //         "ctaText": "View on Behance",
    //     }
    // },
    // {
    //     "id": 01,
    //     "details": {
    //         "title": "Illustrations at Housing.com",
    //         "sub": "A few Illustrations for the 404 & 500 pages",
    //         "tags": [1, 2],
    //         "thumbnail": "https://prakhar625.github.io/images/work/ills.png",
    //         "ctaLink": "http://bit.ly/1wxPmiB",
    //         "ctaText": "View on Behance",
    //     }
    // },
];

var frag = document.createDocumentFragment();

for (p in projects) {
    var workSample = frag.appendChild(document.createElement("div"));
    workSample.className += "work--tile-container";
    workSample.className += " by-two";

    var shadow = workSample.appendChild(document.createElement("div"));
    shadow.className = "work-tile--shadow";
    
    var baseLayer = workSample.appendChild(document.createElement("div"));
    baseLayer.className = "work-tile--layer";
    
    var overlay = workSample.appendChild(document.createElement("div"));
    overlay.className += "work-tile--overlay";

        var imgCont = overlay.appendChild(document.createElement("div"));
        imgCont.className = "project--img";
        imgCont.setAttribute('style-data', "background-image: url("+projects[p].details.thumbnail+")");
        // imgCont.style = ; // let's lazyload it after the DOM is ready
        imgCont.style = "background-image: url("+projects[p].details.thumbnail+")";

            // var img = imgCont.appendChild(document.createElement("img"));
            // img.src = projects[p].details.thumbnail;
            // img.alt = projects[p].details.title;
        
        var textCont = overlay.appendChild(document.createElement("div"));
        textCont.className = "project--content";

            var title = textCont.appendChild(document.createElement("h3"));
            title.className = "project--title";
            title.innerHTML = projects[p].details.title;
            
            var subTitle = textCont.appendChild(document.createElement("h5"));
            subTitle.className = "project--excerpt";
            subTitle.innerHTML = projects[p].details.sub;

            var cta = textCont.appendChild(document.createElement("a"));
            cta.className = "project--cta";
            cta.setAttribute('target', '__blank__');
            cta.innerHTML = projects[p].details.ctaText;
            cta.href = projects[p].details.ctaLink;
    
    var shine = workSample.appendChild(document.createElement("div"));
    shine.className += "work-tile--shine";
}

document.getElementById("workSamples").appendChild(frag);


// update years of exp in body
document.getElementById('yearsOfExp').innerText =   new Date().getFullYear() - 2015;
document.getElementById('copyrightYear').innerText =   new Date().getFullYear();