const menuList = [{
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的 path
        icon: <HomeOutlined/>', // 图标名称
    },
    {
        title: '商品',
        key: '/products',
        icon: 'AppstoreOutlined',
        children: [ // 子菜单列表 
            {
                title: '品类管理',
                key: '/category',
                icon: 'BarsOutlineds'
            },
            {
                title: '商品管理',
                key: '/product',
                icon: 'ToolOutlined'
            },
        ]
    },
    {
        title: '用户管理',
        key: '/user',
        icon: 'UserOutlined'
    },
    {
        title: '角色管理',
        key: '/role',
        icon: 'SafetyOutlined',
    },
    {
        title: '图形图表',
        key: '/charts',
        icon: 'Area-chartOutlined',
        children: [{
                title: '柱形图',
                key: '/charts/bar',
                icon: 'Bar-chartOutlined'
            },
            {
                title: '折线图',
                key: '/charts/line',
                icon: 'Line-chartOutlined'
            },
            {
                title: '饼图',
                key: '/charts/pie',
                icon: 'Pie-chartOutlined'
            },
        ]
    },
]
export default menuList