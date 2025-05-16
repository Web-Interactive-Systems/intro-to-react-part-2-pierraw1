---
type: NoteCard
createdAt: 2025-05-12T07:50:18.881Z
viewedAt: 2025-05-16T10:04:36.200Z
---

# Agent-Collab App - Partie 2

L’objectif de cette partie est de produire la vue des agents. Elle se compose de deux sous parties :

1.  La liste des agents (AgentList) avec un call to action pour ajouter un agent —qui est responsive (c’est une liste de cartes → “Cards” — voir radix Card)
2.  Le formulaire pour créer un agent (AgentForm)

Voici à quoi cela ressemble :

![{width=671,height=auto}](attachments/Screenshot-2025-05-16-at-10.42.44-e5exi83bh91gpfur.png)

![{width=671,height=auto}](attachments/Screenshot-2025-05-16-at-10.42.57-aum1oqansjxfh1hy.png)

Voici un exemple du modèle de donnée d’un agent :

```js
{
    id: Math.random().toString(),
    emoji: '😀',
    title: 'Scifi writer',
    role: 'your are a wonderful writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'a draft of scifi writing',
  }
```

- Quand je clique sur le call to action (“+ ajouter”), cela ajoute un agent à la liste

- La carte de l’agent contient : title, emoji, et le role de l’agent

- La carte de l’agent a une action pour modifier l’agent avec une icon “Pencil“

- La carte de l’agent a une action pour supprimer l’agent avec une icon “Trash”

- Quand un agent est en mode édition

  - Le background du Card en question change : `background: selectedAgent === `[`agent.id`](http://agent.id)` ? 'var(--focus-7)' : '',`
  - L’icon d’édition change : `{selectedAgent === agent.id ? : }`
  - Le formulaire pour créer un agent s’ouvre

- Le formulaire doit permettre de créer un agent (voir le modèle de donnée ci-dessus)

- Le formulaire a un EmojiPicker à créer en utilisant une Tabulation Radix et les emojs dans le dossier utils

- Le formulaire a une action pour enregistrer les données après la saisie

- Utiliser nanostores pour simplifier la gestion de données (comme pour messages de chats).

- Utiliser un fichier `agents.js` pour le store des agents et un fichier `agentForm.js` pour le store du formulaire

  - Penser à utiliser la fonction `computed` de nanostores pour faciliter la manipulation de données via des variables dérivées (voir la documentation de nanostores)
