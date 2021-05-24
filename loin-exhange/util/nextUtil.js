import Router from 'next/router';

export const $router = (name) => {
    let page = name;
    if (page == undefined) {
        page = '/';
    } else {
        page = `/${name}`;
    }

    Router.push(page);
};