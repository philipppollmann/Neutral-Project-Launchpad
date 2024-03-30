import {ProjectInformation} from "~/model/ProjectInformation";

export function getAllProjects(): ProjectInformation[] {
    return [
        new ProjectInformation( // LaunchPad
            "LaunchPad",
            "",
            "",
            "",
            "",
            "https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/integrations/nuxt/colored-logo.png"
        ),
        new ProjectInformation( // ArgoCD
            "ArgoCD",
            "Argo CD is a declarative continuous delivery tool for Kubernetes. It can be used as a standalone tool or as a part of your CI/CD workflow to deliver needed resources to your clusters.",
            "",
            "https://argo-cd.readthedocs.io/en/stable/",
            "",
            "https://miro.medium.com/v2/resize:fit:1400/1*An25ihShzJkhL3jAwUaWfg.png"
        ),
        new ProjectInformation( // KeyCloak
            "KeyCloak",
            "Keycloak is a single sign on solution for web apps and RESTful web services. The goal of Keycloak is to make security simple so that it is easy for application developers to secure the apps and services they have deployed in their organization",
            "",
            "https://www.keycloak.org/",
            "",
            "https://static-00.iconduck.com/assets.00/keycloak-icon-2048x2048-5ge904so.png"
        ),
        new ProjectInformation( // Traefik
            "Traefik",
            "Traefik is a leading modern reverse proxy and load balancer that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically.",
            "",
            "https://traefik.io/traefik/",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png"
        ),
        new ProjectInformation( // Prometheus
            "Prometheus",
            "Prometheus scrapes metrics from instrumented jobs, either directly or via an intermediary push gateway for short-lived jobs.",
            "",
            "https://prometheus.io/",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png"
        ),
        new ProjectInformation( // Grafana
            "Grafana",
            "Grafana open source is open source visualization and analytics software. It allows you to query, visualize, alert on, and explore your metrics, logs, and traces no matter where they are stored.",
            "",
            "https://grafana.com/",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1969px-Grafana_icon.svg.png"
        ),
        new ProjectInformation( // HomeBridge
            "HomeBridge",
            "Homebridge allows you to integrate with smart home devices that do not natively support HomeKit. There are over 2,000 Homebridge plugins supporting thousands of different smart accessories. Some of the most popular plugins include: Ring.",
            "",
            "https://homebridge.io/",
            "",
            "https://static-00.iconduck.com/assets.00/homebridge-icon-2048x2048-nw68uicy.png"
        ),
        new ProjectInformation( // HomeAssistant
            "HomeAssistant",
            "Home Assistant acts as a central smart home controller hub by combining different devices and services in a single place and integrating them as entities. The provided rule-based system for automation allows creating custom routines based on a trigger event, conditions and actions, including scripts.",
            "",
            "https://www.home-assistant.io/",
            "",
            "https://static-00.iconduck.com/assets.00/home-assistant-icon-2048x2048-ar79ra8x.png"
        ),

        new ProjectInformation( // Kubernetes
            "Kubernetes",
            "The Kubernetes Dashboard is a web-based UI that allows administrators to perform basic operating tasks and review cluster events",
            "",
            "https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",
            "",
            "https://static-00.iconduck.com/assets.00/kubernetes-icon-2048x1995-r1q3f8n7.png"
        ),
    ]
}
