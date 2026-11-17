<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    import ProjectCase from "$lib/components/ProjectCase.svelte";
    import ellam from "$lib/assets/ellam.png";
    import smith from "$lib/assets/smith.png";
    import angel from "$lib/assets/angel.png";
    import tilipe from "$lib/assets/tilipe.png";
    import BCB1 from "$lib/assets/BCB1.png";
    import BCB2 from "$lib/assets/BCB2.png";
    import BCB3 from "$lib/assets/BCB3.png";
    import moodboard from "$lib/assets/moodboard.png";
    import poster from "$lib/assets/poster.png";
    import charte from "$lib/assets/charte-graphique.png";
    import template from "$lib/assets/template.png";
    import vibra from "$lib/assets/vibra.png";
    $: mode = $modeStore;

</script>

{#if mode === "design"}
    <!-- MODE DESIGN -->
    <section class="w-full px-6 py-20 md:py-28" style="background:#0A0A0A;">
        <div class="mx-[4em] max-w-[130em]">
            <div class="mb-16 md:mb-20">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style="color:#EFE6E3">Work</h1>
                <p class="text-lg md:text-xl max-w-2xl" style="color:rgba(239,230,227,.6)">
                    Une sélection de projets perso et écoles :
                </p>
            </div>

            <div class="grid grid-cols-12 gap-6 auto-rows-[240px]">
                <div class="col-span-8 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={BCB1} alt="Bcb1" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-4 row-span-1 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={BCB2} alt="Bcb2" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-4 row-span-1 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={BCB3} alt="Bcb3" class="w-full h-full object-cover" />
                    </div>
                </div>
                <!-- posters -->
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={ellam} alt="Ellam poster" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={smith} alt="Smith poster" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={angel} alt="Angel poster" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={tilipe} alt="Tilipe poster" class="w-full h-full object-cover" />
                    </div>
                </div>

                <div class="col-span-6 row-span-2 rounded-xl bg-white/5">   <img src={moodboard} alt="Tilipe poster" class="w-full h-full object-cover" /></div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={poster} alt="Tilipe poster" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={charte} alt="Tilipe poster" class="w-full h-full object-cover" />
                    </div>
                </div>

            </div>


            <div class="mb-16 md:mb-20 mt-20">
                <p class="text-lg md:text-xl max-w-2xl" style="color:rgba(239,230,227,.6)">
                    Une sélection de projets avec mes clients :
                </p>
            </div>


            <div class="grid grid-cols-12 gap-6 auto-rows-[240px]">
                <div class="col-span-6 row-span-2 rounded-xl bg-white/5   ">   <img src={vibra} alt="Tilipe poster" class="w-full h-full object-cover" /></div>
                <div class="col-span-6 row-span-2 rounded-xl bg-white/5">   <img src={template} alt="Tilipe poster" class="w-full h-full object-cover" /></div>
            </div>

        </div>
    </section>

{:else}
    <!-- MODE DEV BFA1DB -->
    <section class="w-full px-6 py-20 md:py-28" style="background:#DBCDF0/30;">
        <div class="mx-auto max-w-6xl">
            <!-- Header -->
            <div class="mb-16 md:mb-20">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style="color:#0A0A0A">
                    Work
                </h1>
                <p class="text-lg md:text-xl max-w-2xl" style="color:rgba(10,10,10,.55)">
                    Des projets techniques qui démontrent expertise et innovation.
                </p>
            </div>


            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">

                <ProjectCase
                        tone="dev"
                        title="Mini-SOC : Détection d'Intrusion avec Wazuh"
                        summary="Mise en place d'un SOC miniature sur 3 machines virtuelles : déploiement d'un SIEM Wazuh, simulation d'une attaque brute-force SSH et détection de l'attaque par corrélation d'alertes."
                        list={[
        "Architecture du lab : 3 VMs isolées avec un serveur Wazuh (Ubuntu), une machine victime (Debian) et une machine attaquante (Kali Linux).",
        "Déploiement SIEM : installation du serveur Wazuh et enrôlement de l'agent sur la machine victime, après diagnostic et correction d'un problème de configuration réseau (VMnet).",
        "Simulation d'attaque : brute-force SSH lancé depuis Kali avec Hydra contre la machine Debian.",
        "Threat Hunting : analyse des événements dans le dashboard Wazuh, avec 33 échecs d'authentification remontés (rule.id 5760, niveau 5).",
        "Corrélation & Détection : déclenchement des règles 5763 « sshd: brute force trying to get access » (niveau 10) et 40112 « Multiple authentication failures followed by a success » (niveau 12), ce qui valide la détection de bout en bout."
    ]}
                        srcMp4="/asset/wazuh.png"
                        poster="/asset/wazuh.png"
                        technologies={[
        "Wazuh",
        "SIEM",
        "Kali Linux",
        "Hydra",
        "Debian",
        "Ubuntu Server",
        "Threat Hunting"
    ]}
                        duration="Projet Personnel"
                        role="Analyste SOC"
                        year="2026"
                        githubUrl=""
                />

                <ProjectCase
                        tone="dev"
                        title="Mini-Entreprise Active Directory : Automatisation PowerShell"
                        summary="Structuration d'un annuaire Active Directory pour une entreprise fictive et automatisation de la création des comptes et des groupes par script PowerShell à partir d'un fichier CSV."
                        list={[
        "Infrastructure : contrôleur de domaine Windows Server 2022 en IP statique, avec les rôles AD DS, DNS (zone inverse) et DHCP configurés.",
        "Organisation de l'annuaire : arborescence d'OU par service (IT, RH, Finance, Commercial) pour une gestion des accès cloisonnée.",
        "Automatisation : script PowerShell qui importe un CSV pour créer en masse les utilisateurs et les groupes, puis attribue chaque utilisateur à son groupe.",
        "Débogage : diagnostic des erreurs ConvertTo-SecureString et Add-ADGroupMember causées par des lignes CSV incomplètes, puis fiabilisation du script.",
        "Résultat : tous les comptes sont créés avec les bons groupes et les bons accès, ce qui rend le provisioning reproductible."
    ]}
                        srcMp4="/videos/demo.mp4"
                        technologies={[
        "Windows Server 2022",
        "Active Directory",
        "PowerShell",
        "DNS",
        "DHCP",
        "CSV"
    ]}
                        duration="Projet Personnel"
                        role="Administratrice Systèmes"
                        year="2026"
                        githubUrl=""
                />

                <ProjectCase
                        tone="dev"
                        title="Pentest : Audit de Machine Cible"
                        summary="Audit de sécurité complet d'une infrastructure web : de la reconnaissance passive à l'identification de vulnérabilités critiques (Apache, Indexing, Clickjacking)."
                        list={[
        "Phase Passive : OSINT via Shodan et TheHarvester pour l'énumération de sous-domaines et la collecte d'informations publiques.",
        "Recherche Active : Cartographie réseau avec Nmap et découverte de répertoires cachés via Gobuster et Wfuzz.",
        "Analyse de Vulnérabilités : Scan complet avec Nikto révélant l'absence d'en-têtes de sécurité (X-Frame, MIME Sniffing) et des divulgations d'IP internes.",
        "Exploitation de Configuration : Identification d'un 'Directory Listing' permettant le téléchargement massif de données via wget.",
        "Analyse de Risques : Établissement d'une matrice Impact/Probabilité sur une version Apache obsolète (2.4.18) en production."
    ]}
                        srcMp4="/asset/pentester.png"
                        poster="/asset/pentester.png"
                        technologies={[
        "Kali Linux",
        "Nmap",
        "Nikto",
        "Gobuster",
        "Wfuzz",
        "OSINT",
        "Apache Security"
    ]}
                        duration="Mission Ponctuelle"
                        role="Pentester (Auditeur Sécurité)"
                        year="2025"
                        githubUrl=""
                />

                <ProjectCase
                        tone="dev"
                        title="Infrastructure Réseau & Virtualisation"
                        summary="Conception et déploiement d'une infrastructure multi-sites sécurisée sur VMware : routage complexe, Firewalling (pfSense) et Tunnel VPN IPsec."
                        list={[
        "Architecture Multi-sites : Création de 2 sites distincts avec segmentation LAN et DMZ sous VMware Workstation.",
        "Sécurisation & Firewalling : Déploiement de pfSense avec politiques 'Deny All', filtrage inter-LAN et isolation stricte de la DMZ.",
        "Interconnexion VPN : Mise en place d'un tunnel VPN IPsec site-à-site permettant une communication sécurisée entre les infrastructures distantes.",
        "Services & Annuaire : Configuration d'un serveur Windows Active Directory (DC/DNS) couplé à l'authentification du Firewall.",
        "Conteneurisation : Déploiement de serveurs Linux sous Docker avec gestion de volumes persistants et exposition de services Nginx."
    ]}
                        srcMp4="/asset/vpn.png"
                        poster="/asset/vpn.png"
                        technologies={[
        "VMware Workstation",
        "pfSense",
        "VPN IPsec",
        "Active Directory",
        "Docker",
        "Ubuntu Server"
    ]}
                        duration="Projet Académique"
                        role="Ingénieur Réseaux & Systèmes"
                        year="2024"
                        githubUrl=""
                />

                <ProjectCase
                        tone="dev"
                        title="Jeu - Fox & Seasons"
                        summary="Jeu 2D développé avec Godot où le joueur doit survivre à travers différentes saisons en gérant sa température, ses points de vie et les dangers environnementaux."
                        list={[
        "Conception et développement d’un jeu 2D sous Godot avec gestion de scènes, niveaux et transitions.",

        "Implémentation d’un système de température dynamique impactant le gameplay (perte progressive, conditions de survie, respawn).",

        "Création d’un HUD interactif (thermomètre, points de vie) mis à jour en temps réel via des signaux.",

        "Développement de mécaniques de gameplay : objets collectables (soin/dégâts), obstacles (abeilles, boue, bûches roulantes), interactions joueur/environnement.",

        "Gestion des collisions et événements avec Area2D (dégâts, récupération, effets physiques comme le knockback).",

        "Structuration du projet avec scripts modulaires et réutilisables (controllers, pickups, hazards)."
    ]}
                        srcMp4="/asset/fox.png"
                        poster="/asset/fox.png"
                        technologies={["Godot", "GDScript", "Game Design", "UI/HUD", "Signal System", "Collision System"]}
                        duration="Projet académique (4 semaines)"
                        role="Gameplay + UI + Logique"
                        year="2026"
                        githubUrl="https://jadekeina.itch.io/fox-and-seasons"
                />

                <ProjectCase
                        tone="dev"
                        title="Driv’n Cook"
                        summary="Plateforme de gestion de franchises food-truck. Conçue pour automatiser l’onboarding des franchisés, centraliser la gestion des stocks, commandes et paiements."
                        list={[
    "Développement d’un tableau de bord complet pour les franchisés : gestion des menus, stocks, commandes et suivi des ventes.",
    "Création d’un processus d’onboarding automatisé permettant aux franchisés de s’inscrire, d’uploader leurs documents et d’être validés par un administrateur.",
    "Intégration d’une API REST pour la communication entre le front SvelteKit et le back Node/Express.",
    "Mise en place du système de paiements via Stripe (création de comptes, facturation automatique, historique des transactions).",
    "Implémentation de l’authentification sécurisée (JWT), et du stockage des données sur MySQL avec Sequelize.",
  ]}
                        srcMp4="/videos/tuto.mp4"
                        poster="/images/drivncook-poster.jpg"
                        technologies={[
    "SvelteKit",
    "Node.js",
    "Express",
    "MySQL",
    "Sequelize",
    "Stripe API",
    "Docker",
    "JWT",
    "TailwindCSS"
  ]}
                        duration="3 semaines"
                        role="Full-stack"
                        year="2025"
                        githubUrl="https://github.com/jadekeina/DRIVN_COOK"
                />


                <ProjectCase
                        tone="dev"
                        title="Jeu de Mines  (C / SDL)"
                        summary="Simulation logistique basée sur graphes : navigation autonome, génération de réseau optimal et carte procédurale."
                        list={[
"Développement d’un jeu de simulation en C utilisant SDL2 avec architecture modulaire.",
"Mise en place d’un système de pathfinding basé sur l’algorithme de Dijkstra pour le déplacement autonome d’un train vers des ressources dynamiques.",
"Génération d’un réseau de convoyeurs optimisé via l’algorithme de Kruskal (Minimum Spanning Tree) et structure Union-Find.",
"Génération procédurale de terrain et gestion dynamique du spawn des matériaux et des usines.",
"Conception d’une simulation temps réel combinant graphes, optimisation de trajets et gestion d’inventaire."
]}
                        srcMp4="/videos/jeu-c.mp4"
                        poster="/images/train-poster.jpg"
                        technologies={["C","SDL2","SDL_ttf","Graph Algorithms","Dijkstra","Kruskal","Union-Find","Procedural Generation"]}
                        duration="1 mois"
                        role="Algorithm Design & Gameplay Logic"
                        year="2024"
                />

                <ProjectCase
                        tone="dev"
                        title="Challenge Front-End"
                        summary="Interface métier pour la gestion opérationnelle d’une franchise food-truck : onboarding, exploitation quotidienne et suivi d’activité."
                        list={[
            "Conception d’une application SvelteKit structurée en composants réactifs pour gérer l’état applicatif (menus, stocks, commandes, ventes).",
            "Mise en place d’un workflow complet d’onboarding : création de compte, dépôt de documents et validation administrative.",
            "Communication avec un backend via API REST (requêtes asynchrones, gestion d’erreurs et feedback utilisateur).",
            "Implémentation d’interfaces de suivi en temps réel : tableau de bord, statistiques et historique d’activité.",
            "Gestion sécurisée des sessions utilisateurs et validation des formulaires côté client."
            ]}
                                    srcMp4="/videos/cofee-front.mp4"
                                    poster="/images/drivncook-poster.jpg"
                                    technologies={[
                                                    "HTML",
                                                    "CSS",
                                                    "Responsive Design"
                                                    ]}
                        duration="3 semaines"
                        role="Front-end Architecture & UX Logic"
                        year="2023"
                        githubUrl="https://github.com/jadekeina/DRIVN_COOK"
                />



            </div>


        </div>
    </section>
{/if}