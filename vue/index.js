System.register(["vue"], () => {
    let Vue;

    return {
        setters: [v => (Vue = v.default)],
        exexute() {
            new Vue({
                el: "#container",
                data: {
                    age: "4.503 billion years"
                }
            });
        } 
    };
});