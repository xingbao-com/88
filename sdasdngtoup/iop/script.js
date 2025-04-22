// 在init函数中添加
document.getElementById('search-input').addEventListener('input', async (e) => {
    const query = e.target.value;
    const suggestions = await getSuggestions(query);
    // 显示建议列表
});
function addCustomEngine(name, url) {
    CONFIG.engines.push({
        name: { en: name, zh: name },
        url: url + '?q=',
        icon: 'default-icon.png'
    });
    refreshEngineList();
}
// 修改CONFIG对象
engines: [
    {
        category: { en: 'General', zh: '综合搜索' },
        list: [...]
    },
    {
        category: { en: 'Privacy', zh: '隐私保护' },
        list: [...]
    }
]