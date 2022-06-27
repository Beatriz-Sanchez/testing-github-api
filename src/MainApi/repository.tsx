import baseApi from './config/'

export function getRepositories(user:string) {
    return baseApi.get(`/users/${user}/repos`)
}