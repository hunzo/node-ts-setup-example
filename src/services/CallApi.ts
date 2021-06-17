import Api from './Api'

const getPost = () => {
  return Api().get(`/posts`)
}

export {
  getPost
}