export default [
    {
        code: 'iot',
        name: '物联网',
        owner: 'iot',
        id: '9c21f88182e7cc75cbdfa8e4b7844272',
        url: '/iot',
        icon: 'icon-wulianwang',
        sortIndex: 1,
        permissions: [],
        children: [
            {
                code: 'Northbound',
                name: '北向输出',
                owner: 'iot',
                //parentId: '1',
                id: 'ea3d760edbd908eb0bc901db2801e8b5',
                sortIndex: 6,
                url: '/iot/northbound',
                icon: 'icon-yunyunjieru',
                permissions: [],
                buttons: [],
                showPage: [],
                children: [
                    {
                        code: 'Northbound/AliCloud',
                        name: '阿里云',
                        owner: 'iot',
                        //parentId: '1-6',
                        id: '2b808202bfc9159838d3be675e63719f',
                        sortIndex: 2,
                        url: '/iot/northbound/AliCloud',
                        icon: 'icon-aliyun',
                        permissions: [],
                        showPage: ['aliyun-bridge'],
                        buttons: [
                            {
                                id: 'view',
                                name: '查看',
                                permissions: [
                                    {
                                        permission: 'device-product',
                                        actions: ['query'],
                                    },
                                    {
                                        permission: 'aliyun-bridge',
                                        actions: ['query', 'save'],
                                    },
                                ],
                            },
                            {
                                id: 'action',
                                name: '启用/禁用',
                                permissions: [
                                    {
                                        permission: 'aliyun-bridge',
                                        actions: ['query', 'save'],
                                    },
                                ],
                            },
                            {
                                id: 'update',
                                name: '编辑',
                                permissions: [
                                    {
                                        permission: 'aliyun-bridge',
                                        actions: ['query', 'save'],
                                    },
                                    {
                                        permission: 'device-product',
                                        actions: ['query'],
                                    },
                                ],
                            },
                            {
                                id: 'delete',
                                name: '删除',
                                permissions: [
                                    {
                                        permission: 'aliyun-bridge',
                                        actions: ['query', 'delete'],
                                    },
                                ],
                            },
                            {
                                id: 'add',
                                name: '新增',
                                permissions: [
                                    {
                                        permission: 'aliyun-bridge',
                                        actions: ['query', 'save'],
                                    },
                                    {
                                        permission: 'device-product',
                                        actions: ['query'],
                                    },
                                ],
                            },
                        ],
                        accessSupport: { text: "支持", value: "support" },
                        supportDataAccess: true,
                        assetType: 'aliyunNorthOutput'
                    },
                ],
            },
        ],
    },
]
