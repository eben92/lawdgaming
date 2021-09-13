// we need to create an array method in other to be able to use the map function

const apps = [{
        id: 1,
        title: "FIFA 22 Mobile Official by Tencent Games Android 900 MB Best Graphics",
        img: '/images/FIFA/fifa22.jpg',
        category: "FIFA",
        downloadLink: new URL('http://www.example.com', ),
        youtube: new URL('http://youtube.com', ),
        instagram: new URL('http://www.instagram.com', ),
        facebook: new URL('http://www.facebook.com', )
    },
    {
        id: 2,
        title: "eFootball PES 2021 Mobile 5.5.0 UEFA Champions League Patch Android",
        img: "/images/PES/pes21uefa.jpg",
        category: "PES",
        downloadLink: new URL('http://www.example.com', ),
        youtube: new URL('http://www.youtube.com', ),
        instagram: new URL('http://www.instagram.com', ),
        facebook: new URL('http://www.facebook.com', )
    },
    {
        id: 3,
        title: "eFootball PES 2022 Mobile 5.5.0 eFootball 2022 Graphics Patch Android",
        img: "/images/PES/pesmobile.jpg",
        category: "PES",
        downloadLink: new URL('http://www.example.com', ),
        youtube: new URL('http://www.youtube.com', ),
        instagram: new URL('http://www.example.com', ),
        facebook: new URL('http://www.example.com', ),
    },


]

// console.log(apps);

// working with the main content
const webPage = document.querySelector('.left')

window.addEventListener('DOMContentLoaded', () => {
    let displayApps = apps.map(function(allApps) {
        return `<div>
                      <div class="PES">
                            <h2>
                               ${allApps.title}
                            </h2>
                            <div class="img-and">
                                <img src=${allApps.img} alt=${allApps.title} />
                                <ul class="img-social">
                                    <a href=${allApps.youtube}>
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                    <a href=${allApps.instagram}>
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href=${allApps.facebook}>
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </ul>
                            </div>

                            <div class="game">
                                <div class="download">
                                    <a href=${allApps.downloadLink}>
                                        <button>download apk + obb</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />`
    });
    displayApps = displayApps.join("")
        // console.log(displayApps);

    webPage.innerHTML = displayApps;
});


export default apps;