import UnsplashImage from "../images/Unsplash.png";
import Marketer from "../images/Marketer.png";
import YouTube from "../images/YouTube.png"
import {SiCss3, SiGit, SiHtml5, SiJavascript, SiReact, SiRedux, SiSass} from "react-icons/si";
import {FaGithub} from "react-icons/fa";

export const appData = {
    about: {
        title: "about me",
        description: "항상 고민하며 정보를 공유하고 믿을 수 있는 개발자가 되는것이 목표입니다.",
        items: [
            {
                title: "협업을 좋아합니다.",
                description: "서로의 문제를 공유하고 고민하면서 같이 해결해 나가는 팀워크를 좋아합니다.",
                img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            },
            {
                title: "개발을 좋아합니다.",
                description: "만드는 것이 재미있고 내가 고민하고 생각한 것이 그대로 웹 사이트에 표현 되는것이 너무 즐겁습니다.",
                img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                title: "사람을 좋아합니다.",
                description: "사람들과 대화하며 서로의 정보와 생각을 공유하면서 좀 더 깊이있는 유대감을 만드는 것을 좋아합니다.",
                img: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            }
        ]
    },

    works: {
        title: "recent works",
        description: "작업했던 프로젝트 입니다.",
        items: [
            {
                title: <a href={"https://junuunsplash.netlify.app/"}>Unsplash</a>,
                description: "unsplash 디자인과 API를 이용하여 개발한 데모 사이트 입니다.",
                img: UnsplashImage,
                tags: ["react", "redux", "redux-saga", "styled-components"]
            },
            {
                title: <a href={"https://junuyoutube.netlify.app/"}>YouTube</a>,
                description: "Youtube 디자인과 API를 이용하여 개발한 데모 사이트 입니다.",
                img: YouTube,
                tags: ["react", "redux", "redux-saga", "styled-components", "jwt"]
            },
            {
                title: <a href={"https://junumarketer.netlify.app/"}>Marketer</a>,
                description: "css 레이아웃을 이해하기위한 디자인 사이트 입니다.",
                img: Marketer,
                tags: ["html", "scss", "css-layout"]
            }
        ]
    },
    skills: {
        title: "skills",
        description: "프로젝트를 만들면서 사용했던 기술 입니다.",
        items: [
            {
                title: "Html",
                icon: <SiHtml5/> ,
            },
            {
                title: "Css",
                icon: <SiCss3/> ,
            },
            {
                title: "JavaScript",
                icon: <SiJavascript/> ,
            },
            {
                title: "React",
                icon: <SiReact/> ,
            },
            {
                title: "Redux",
                icon: <SiRedux/> ,
            },
            {
                title: "Sass",
                icon: <SiSass/> ,
            },

            {
                title: "Git",
                icon: <SiGit/> ,
            },
        ]
    },
    contact: {
        title: "contact",
        description: "Email : junwoo1519@naver.com",
        icon: <FaGithub/>
    }
}