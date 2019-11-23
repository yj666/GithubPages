module.exports = {
    base: '/my-blog/',
    title: '清风迎人',
    description: '拥有个人网站，就好像拥有了互联网的一小部分',

    themeConfig: {
        // GitHub仓库
        repo: 'https://github.com/yj666',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '轮播图组件']
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/FirstBlog.md' }
        ]
    }
}

