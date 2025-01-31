import axios from "axios"

export const baseApi = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzdhMWJmMzdiNzU0NDE4NDY2MjhmOTY4YjI3MjExMCIsIm5iZiI6MTcyNjczOTAxMC43OTIyMDQsInN1YiI6IjY2ZWJmMDkzNjJjNGJiMThjOTc0OGYxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUBahIQfnB9gfU2hNd59wD-FxOeVbdengUnF8XpmhP4'
    }
})