/*
    Router
    - Initializes page routing
    - Loads page content
    - Updates page title
    - Updates URL
    - Loads specific page scripts
    - Handles page not found

    won't work with live server, please use the express server provided in server.js file
*/

var routes = [
    {
        path: "login",
        template: "./pages/auth/auth.html",
        title: "Vinil.br - Login",
    },
    {
        path: "",
        template: "./pages/home/home.html",
        title: "Vinil.br - Home",
        script: "./pages/home/home.js",
    },
    {
        path: "404",
        template: "./pages/404/404.html",
        title: "Vinil.br - Página não encontrada",
    },
    {
        path: "product/:id",
        template: "./pages/product/product.html",
        script: "./pages/product/product.js",
        title: "Vinil.br - Produto",
    }
];

export function startRouter() {
    document.body.addEventListener("click", (event) => {
        if (isExpressRouting()) {
            console.info("Express routing is enabled");
            return;
        }
        if (event.target.getAttribute("href")) {
            event.preventDefault();
            route(event);
        }
    });
    window.addEventListener("popstate", locationHandler);
    locationHandler();
}

const route = (event) => {
    const path = event.target.getAttribute("href"); 
    handleRouting(path);
};

const handleRouting = (path) => {
    const route = routes.find((route) => {
        const routeSegments = route.path.split("/");
        const pathSegments = path.split("/");
        return routeSegments.length === pathSegments.length && routeSegments.every((seg, i) => seg.startsWith(":") || seg === pathSegments[i]);
    });

    if (route) {
        const params = extractParams(path, route.path);
        replaceDetails(route, params);
    } else {
        notFound();
    }
}

const replaceDetails = (route, params = {}) => {
    fetchPage(route.template);
    document.title = route.title;
    window.history.pushState({}, "", generatePath(route.path, params));
    if (route.script) {
        createScript(route.script);
    }
};

const generatePath = (routePath, params) => {
    return routePath.split("/").map(segment => {
        if (segment.startsWith(":")) {
            const paramName = segment.slice(1);
            return params[paramName] || segment;
        }
        return segment;
    }).join("/");
};

const fetchPage = async (path) => {
    return fetch(path)
        .then((response) => response.text())
        .then((html) => replaceContent(html))
        .catch((error) => console.error("Erro ao carregar a página: ", error));
}

const replaceContent = async (html) => {
    const content = document.getElementById("content");
    // content.classList.add('page-transition');
    content.innerHTML = html;
    // setTimeout(() => {
        // content.classList.remove('page-transition');
    // }, 1500);
}

const createScript = (path) => {
    const script = document.createElement("script");
    script.src = path;
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);
}

const locationHandler = () => {
    const path = window.location.pathname.slice(1).trim();
    handleRouting(path);
}

const notFound = () => {
    const route = routes.find((route) => route.path === "404");
    replaceDetails(route);
}

const isExpressRouting = () => {
    const expressPort = 3000;
    return window.location.href.includes(`:${expressPort}`);
}

const extractParams = (path, routePath) => {
    const paramNames = routePath.split("/").filter(segment => segment.startsWith(":"));
    const paramValues = path.split("/").slice(1);
    const params = {};
    
    paramNames.forEach((name, index) => {
        const paramName = name.slice(1);
        params[paramName] = paramValues[index];
    });
    
    return params;
};