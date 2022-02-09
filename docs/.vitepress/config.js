const cviSidebar = [
    { text: "cvi", link: "/cvi/" },
    { text: "briif", link: "/cvi/brief" },
    { text: "moodboard", link: "/cvi/moodboard" },
]
const logSidebar = [
{text:"logi", link:"/logi/"},
{text:"Font märgiks", link:"/logi/01_font_margiks"},
{text:"nimiruudust", link:"/logi/02_nimiruudust"},
{text:"kavandi järgi nime kirjutamine", link:"/logi/03_kavand_nimi"},
{text:"applelogo", link:"/logi/04_applelogo"},
{text:"kass", link:"/logi/05_kass"},
]

module.exports = {
    title: "Minu dokuveeb",
    base: "/123/",
    themeConfig: {
        nav: [
            { text: "Esileht", link: "/" },
            { text: "Minust", link: "/minust/" },
            { text: "CVI", link: "/cvi/" },
            {text:"Logi", link: "/logi/"},
            
        ],
        sidebar: {
            "/cvi/": cviSidebar,
            "/cvi/brief": cviSidebar,
            "/logi/": logSidebar,
            "/logi/01_font_margiks/": logSidebar,
            "/logi/02_nimiruudust": logSidebar,
            "/logi/03_kavand_nimi": logSidebar,
            "/logi/04_applelogo": logSidebar,
            "/logi/05_kass": logSidebar,
        },

    }
};