const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Music: [],
      Movies: [],
    },
    actions: {
      //setArticle: receives info to create a whole article, sorts it according to section type
      setArticle: ({ artist, project, section, title, tags, url, text }) => {
        const pastSection = getStore()[`${section}`];
        const newSection = [
          {
            artist: artist,
            project: project,
            title: title,
            tags: tags,
            url: url,
            text: text,
          },
          ...pastSection,
        ];
        setStore({ [`${section}`]: newSection });
        return console.log(getStore());
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
