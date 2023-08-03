export const onMessage = {};

export const initialize = (id, container) => {
    onMessage[id] = messageHandler(container);
};

const messageHandler = (container) => (message, value) => {
    switch (message) {
        case "display-text":
            const p = document.createElement("p");
            p.textContent = value;
            container.appendChild(p);
            break;
        default:
            throw new Error("unhandled message");
    }
};
