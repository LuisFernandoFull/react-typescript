import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export const quebraGalho = [
  {
    id: 1,
    status: "iniciante",
    title: "react",
  },
  {
    id: 2,
    status: "Intermediario",
    title: "react",
  },
  {
    id: 3,
    status: "Avançado",
    title: "react",
  },
  {
    id: 4,
    status: "iniciante",
    title: "HTML",
  },
  {
    id: 5,
    status: "Intermediario",
    title: "HTML",
  },
  {
    id: 6,
    status: "Avançado",
    title: "HTML",
  },
  {
    id: 7,
    status: "iniciante",
    title: "JavaScript",
  },
  {
    id: 8,
    status: "Intermediario",
    title: "JavaScript",
  },
  {
    id: 9,
    status: "Avançado",
    title: "JavaScript",
  },
  {
    id: 10,
    status: "Junior",
    title: "CSS",
  },
];
