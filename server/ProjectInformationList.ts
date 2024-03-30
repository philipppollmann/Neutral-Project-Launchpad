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
            "",
            "",
            "",
            "",
            "https://miro.medium.com/v2/resize:fit:1400/1*An25ihShzJkhL3jAwUaWfg.png"
        ),
        new ProjectInformation( // KeyCloak
            "KeyCloak",
            "",
            "",
            "",
            "",
            "https://static-00.iconduck.com/assets.00/keycloak-icon-2048x2048-5ge904so.png"
        ),
        new ProjectInformation( // Traefik
            "Traefik",
            "A reversed proxy",
            "",
            "",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Traefik.logo.png"
        ),
        new ProjectInformation( // Prometheus
            "Prometheus",
            "A alert system",
            "",
            "",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png"
        ),
        new ProjectInformation( // Grafana
            "Grafana",
            "",
            "",
            "",
            "",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/1969px-Grafana_icon.svg.png"
        ),
        new ProjectInformation( // HomeBridge
            "HomeBridge",
            "",
            "",
            "",
            "",
            "https://static-00.iconduck.com/assets.00/homebridge-icon-2048x2048-nw68uicy.png"
        ),
        new ProjectInformation( // HomeAssistant
            "HomeAssistant",
            "",
            "",
            "",
            "",
            "https://static-00.iconduck.com/assets.00/home-assistant-icon-2048x2048-ar79ra8x.png"
        ),

        new ProjectInformation( // Kubernetes
            "Kubernetes",
            "",
            "",
            "",
            "",
            "https://static-00.iconduck.com/assets.00/kubernetes-icon-2048x1995-r1q3f8n7.png"
        ),
    ]
}
