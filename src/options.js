const Options = {
    //顶部导航栏最左侧标题
    NavbarBrandTitle: "VTB-BUTTON",
    //顶部导航栏链接，每一个链接为一个Javascript对象类型，请参照示例修改、添加和删除
    NavbarElements: [
        {
            Title: "Home",
            Link: "http://localhost:8000",
        },
        {
            Title: "Github",
            Link: "https://github.com/LiamSho/vtb-button",
        },
        {
            Title: "Bilibili",
            Link: "https://space.bilibili.com/5627849"
        }
    ],
    //顶部导航栏背景颜色(RGBA)
    NavbarBackgroungColor: "rgba(191, 235, 255, 1.0)",


    //使用图片背景时，背景路径，不使用时请留空
    BackgroungImagePath: "",
    //不使用图片背景时，背景颜色(RGBA)
    BackgroundColor: "rgba(173, 216, 230, 0.25)",


    //简介栏目内容
    IntroBoxContent: {
        //简介栏目标题
        Title: "欢迎来到 VTB-BUTTON",
        //简介栏目主体，每一行为一个段落
        Content: [
            "这是 VTB 按钮类网站的模板，请参照Github上的说明文件进行配置",
            "这里的内容是主页顶部介绍框中的内容",
        ]
    },
    //简介栏目背景颜色(RGBA)
    IntroBoxBackgroundColor: "rgba(191, 235, 255, 0.75)",
    //简介栏目字体颜色(RGB)
    IntroBoxColor: "rgb(0, 0, 0)",


    //卡片背景颜色(RGBA)
    CardBackgroundColor: "rgba(255, 255, 255, 0.0)",
    //卡片标题背景颜色（最终看到的是这个颜色和卡片背景颜色的叠加）(RGBA)
    CardTitleBackgroundColor: "rgba(191, 235, 255, 1.0)",
    //卡片主体背景颜色（最终看到的是这个颜色和卡片背景颜色的叠加）(RGBA)
    CardBodyBackgroundColor: "rgba(191, 235, 255, 0.4)",


    //按钮背景颜色(RGBA)
    ButtonBackgroundColor: "rgba(191, 235, 255, 1.0)",
    //按钮边框颜色，输入 transparent 为无边框，或者rgba格式的边框颜色(RGBA)
    ButtonBorderColor: "transparent",
    //按钮被选中时的阴影颜色，推荐低透明度(RGBA)
    ButtonBoxShadow: "rgba(0, 255, 255, 0.35)",
    //按钮中文字颜色
    ButtonColor: "rgb(0, 0, 0)",


    //底部Footer背景颜色
    FooterBackgroundColor: "rgba(191, 235, 255, 1.0)",
    //底部Footer字体颜色
    FooterColor: "rgb(0, 0, 0)",
}

export default Options;