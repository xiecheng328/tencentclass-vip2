import Mock from 'mockjs'

Mock.mock('https://www.qmtech.com/login', {
  'errno': 0,
  'errmsg': 'SUCCESS',
  'data': {
    'name': '@cname',
    'image': '@image("60px*60px")'
  }
})

Mock.mock('https://www.qmtech.com/getList', {
  'errno': 0,
  'errmsg': 'SUCCESS',
  'data': {
    'list|5-15': [
      {
        'id|+1': 123,
        'title': '@ctitle',
        'status|1': false
      }
    ]
  }
})