const app = Vue.createApp({
  data() {
    return {
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae expedita labore odit fuga enim accusantium dicta quia. Cupiditate dolores sequi aperiam mollitia delectus deserunt ipsum tenetur eligendi cumque, ducimus corrupti?",
      pic: {
        img: "https://vuejs.org/images/logo.png",
        alt: "logo",
      },
    };
  },
});

app.mount("#root");
