const mockData = {
  WM20250001: {
    id: 'WM20250001',
    productName: '宁夏硒砂瓜',
    variety: '金城五号',
    weight: '8-10斤',
    spec: '单果',
    origin: {
      province: '宁夏回族自治区',
      city: '中卫市',
      district: '沙坡头区',
      town: '香山乡',
      farmer: '李建国',
      address: '宁夏回族自治区中卫市沙坡头区香山乡三眼井村'
    },
    phone: '138-0000-8888',
    plantDate: '2025-04-15',
    harvestDate: '2025-07-20',
    growMethod: '旱作压砂栽培',
    certification: '绿色食品认证',
    batchNo: 'BN20250720001'
  },
  WM20250002: {
    id: 'WM20250002',
    productName: '宁夏硒砂瓜',
    variety: '西农八号',
    weight: '10-12斤',
    spec: '单果',
    origin: {
      province: '宁夏回族自治区',
      city: '中卫市',
      district: '沙坡头区',
      town: '迎水桥镇',
      farmer: '王建军',
      address: '宁夏回族自治区中卫市沙坡头区迎水桥镇鸣钟村'
    },
    phone: '139-0000-9999',
    plantDate: '2025-04-10',
    harvestDate: '2025-07-18',
    growMethod: '旱作压砂栽培',
    certification: '绿色食品认证',
    batchNo: 'BN20250718002'
  }
}

export function getTraceData(id) {
  return mockData[id] || mockData['WM20250001']
}
