const cviSidebar = [
    { text: "cvi", link: "/cvi/" },
    { text: "briif", link: "/cvi/brief" },
    { text: "moodboard", link: "/cvi/moodboard" },
]
const logSidebar = [
{text:"logi", link:"/logi/"},
{text:"Font märgiks", link:"/logi/01_font_margiks"},
]

module.exports = {
    title: "Minu dokuveeb",
    themeConfig: {
        nav: [
            { text: "Esileht", link: "/" },
            { text: "Minust", link: "/minust/" },
            { text: "CVI", link: "/cvi/" },
            {text:"Logi", link: "/logi/"}
        ],
        sidebar: {
            "/cvi/": cviSidebar,
            "/cvi/brief": cviSidebar,
            "/logi/": logSidebar,
            "/logi/01_font_margiks/": logSidebar,
            
        },

    }
};