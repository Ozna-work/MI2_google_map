class NavBar {
    constructor(accueil,menu,services,evenements,visiteaudio,visitevideo,contact) {
        this.accueil = accueil;
        this.menu = menu;
        this.services = services;
        this.evenements = evenements;
        this.visiteaudio = visiteaudio;
        this.visitevideo = visitevideo;
        this.contact = contact;

    }
}

class Services {
    constructor(titre,information,location,assistance) {
        this.titre = titre;
        this.information = information;
        this.location = location;
        this.assistance = assistance;
    }
}

class Menu {
    constructor(titre,connexion,recherche,parainage,donation) {
        this.titre = titre;
        this.connexion = connexion;
        this.recherche = recherche;
        this.parainage = parainage;
        this.donation = donation;

    }
}