module.exports = {
    base: '/my-blog/',
    title: 'Yang’s blog',
    description: 'THINK TWICE CODE ONCE！',


    themeConfig: {
        // GitHub仓库
        repo: 'https://github.com/yj666',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        lastUpdated: '',
        sidebar: [
            ['/', '首页'],
            ['/blog/coffee.md', '当我们在谈论咖啡的时我们在谈论什么'],
            ['/blog/3.md', 'CSS常用布局方案 —— 三栏布局'],
            ['/blog/2.md', 'CSS常用布局方案 —— 双栏布局'],
            ['/blog/4.md', '关于 vue 中的一些问题'],
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/coffee.md'},
            
        ],
        
    }
}

