const Component = {
  /*Data properties*/

  data() {
    return {
      pseudo: "",
      motDePass: "",
      dateNaissance: "",
    };
  },

  /* Méthodes avec ses methodes*/

  methods: {
    AddPseudo(e) {
      this.pseudo = e.target.value;
      console.log("AddPseudo");
    },

    AddMotDePass(e) {
      this.motDePass = e.target.value;
      console.log("AddMotDePass");
    },

    AddDateNaissance(e) {
      this.dateNaissance = e.target.value;
      console.log("AddDateNaissance");
    },
  },

  /* Méthodes avec ses methodes*/
  computed: {},

  /* Template */
  template: `

  <p> Votre pseudo : <input type=text @input="AddPseudo" placeholder="Votre pseudo" minlenght="8" maxlenght="16" required/> </p>
  <p> Votre mot de passe : <input type=password @input="AddMotDePass" placeholder="Votre mot de pass" minlenght="8" required/> </p>
  <p> Votre date de naissance : <input type=date @input="AddDateNaissance" placeholder="Votre date de naissance" 
  min="2004-03-11" max="2022-03-11" required/> </p>
  <input type=submit />

  `,
};

Vue.createApp(Component).mount("#root");
